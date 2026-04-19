"use client";

import Logo from "../components/Logo";
import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./page.module.css";

type Objetivo = "emagrecer" | "massa" | "manutencao" | "saude";
type Dieta = "onivoro" | "vegetariano" | "vegano" | "lowcarb";
type Sexo = "masculino" | "feminino";
type Screen = "onboarding" | "loading" | "plan";
type ModalType = "swap" | "new" | "newLocked" | "lista" | null;
type BillingType = "mensal" | "anual";

interface Ingrediente { item: string; substituto: string; }
interface Refeicao {
  nome: string; horario: string; prato: string;
  descricao: string; ingredientes: Ingrediente[]; preparo: string[];
  foto_url?: string;
  calorias: number; proteinas_g: number; carboidratos_g: number; gorduras_g: number;
}
interface Plano {
  titulo: string; subtitulo: string; calorias_totais: number;
  proteinas_g: number; carboidratos_g: number; gorduras_g: number;
  dica_do_dia: string; refeicoes: Refeicao[];
}
interface Substituto { item: string; motivo: string; }

function trackEvent(nome: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", nome, params || {});
  }
}

function categorizarIngrediente(item: string): string {
  const i = item.toLowerCase();
  if (/frango|carne|bife|peixe|atum|sardinha|salmão|tilápia|ovo|ovos|camarão|porco|bacon|presunto|peito|filé|patinho|alcatra/.test(i)) return "🥩 Proteínas";
  if (/arroz|macarrão|pão|batata|mandioca|tapioca|aveia|granola|quinoa|cuscuz|farinha|inhame|milho|polenta/.test(i)) return "🍚 Carboidratos";
  if (/brócolis|couve|espinafre|alface|tomate|cenoura|abobrinha|pepino|cebola|alho|pimentão|berinjela|beterraba|vagem|quiabo|jiló/.test(i)) return "🥦 Vegetais";
  if (/maçã|banana|laranja|mamão|melão|manga|uva|morango|abacaxi|pera|limão|abacate|coco/.test(i)) return "🍎 Frutas";
  if (/leite|iogurte|queijo|requeijão|manteiga|creme|cottage/.test(i)) return "🥛 Laticínios";
  if (/azeite|óleo|castanha|amendoim|nozes|chia|linhaça|gergelim/.test(i)) return "🫒 Gorduras e oleaginosas";
  if (/sal|pimenta|alecrim|orégano|cúrcuma|curry|tempero|ervas|açúcar|mel|shoyu|molho|vinagre/.test(i)) return "🧂 Temperos e condimentos";
  return "🛒 Outros";
}

function consolidarIngredientes(refeicoes: Refeicao[]): Record<string, string[]> {
  const todos: string[] = [];
  refeicoes.forEach(r => r.ingredientes.forEach(ing => {
    const item = ing.item.trim();
    if (!todos.some(t => t.toLowerCase().includes(item.toLowerCase().replace(/^\d+[gmlkg\s]+/, '').trim()) ||
      item.toLowerCase().includes(t.toLowerCase().replace(/^\d+[gmlkg\s]+/, '').trim()))) {
      todos.push(item);
    }
  }));
  const grupos: Record<string, string[]> = {};
  todos.forEach(item => {
    const cat = categorizarIngrediente(item);
    if (!grupos[cat]) grupos[cat] = [];
    grupos[cat].push(item);
  });
  return grupos;
}

function IcoEmagrecer() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c0 0-3.5 4-3.5 7.5a3.5 3.5 0 007 0C15.5 6 12 2 12 2z"/><line x1="12" y1="13" x2="12" y2="18"/><line x1="9.5" y1="17" x2="14.5" y2="17"/></svg>; }
function IcoMassa() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="6" height="9" rx="1"/><line x1="4" y1="9" x2="20" y2="9"/><circle cx="4" cy="7" r="2"/><circle cx="20" cy="7" r="2"/></svg>; }
function IcoManutencao() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>; }
function IcoSaude() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>; }
function IcoOnivoro() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-4 0-7 3-7 7 0 3 2 5.5 5 6.5V21h4v-4.5c3-1 5-3.5 5-6.5 0-4-3-7-7-7z"/></svg>; }
function IcoVegetariano() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="5" ry="9"/><line x1="12" y1="3" x2="12" y2="21"/></svg>; }
function IcoVegano() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c5 0 9 5 9 9 0 4-3 7-7 8"/><line x1="12" y1="3" x2="12" y2="21"/></svg>; }
function IcoLowCarb() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="9" y2="18"/></svg>; }
function IcoRelogio() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; }
function IcoGarfo() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>; }
function IcoCamadas() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>; }
function IcoMasculino() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="14" r="5"/><path d="M19 5l-5.5 5.5"/><path d="M15 5h4v4"/></svg>; }
function IcoFeminino() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="5"/><line x1="12" y1="15" x2="12" y2="21"/><line x1="9" y1="19" x2="15" y2="19"/></svg>; }

const OBJETIVO_LABELS: Record<Objetivo, string> = { emagrecer: "Emagrecimento", massa: "Ganho de Massa", manutencao: "Manutenção", saude: "Saúde Geral" };
const DIETA_LABELS: Record<Dieta, string> = { onivoro: "Onívoro", vegetariano: "Vegetariano", vegano: "Vegano", lowcarb: "Low Carb" };

const OBJETIVOS = [
  { v: "emagrecer" as Objetivo, ic: IcoEmagrecer, lb: "Emagrecer", sub: "Déficit calórico" },
  { v: "massa" as Objetivo, ic: IcoMassa, lb: "Ganhar massa", sub: "Superávit proteico" },
  { v: "manutencao" as Objetivo, ic: IcoManutencao, lb: "Manutenção", sub: "Saúde geral" },
  { v: "saude" as Objetivo, ic: IcoSaude, lb: "Saúde", sub: "Bem-estar" },
];

const DIETAS = [
  { v: "onivoro" as Dieta, ic: IcoOnivoro, lb: "Onívoro", sub: "Sem restrição" },
  { v: "vegetariano" as Dieta, ic: IcoVegetariano, lb: "Vegetariano", sub: "Sem carnes" },
  { v: "vegano" as Dieta, ic: IcoVegano, lb: "Vegano", sub: "100% vegetal" },
  { v: "lowcarb" as Dieta, ic: IcoLowCarb, lb: "Low Carb", sub: "Menos carboidrato" },
];

const MEAL_OPTIONS = [
  { v: 1, ic: IcoRelogio, lb: "1", sub: "Jejum Extremo" },
  { v: 2, ic: IcoRelogio, lb: "2", sub: "Jejum 16h" },
  { v: 3, ic: IcoGarfo, lb: "3", sub: "Padrão Diário" },
  { v: 4, ic: IcoRelogio, lb: "4", sub: "Com Lanchinhos" },
  { v: 5, ic: IcoCamadas, lb: "5", sub: "A cada 3 horas" }
];

const MACRO_ITEMS: { key: keyof Plano; label: string }[] = [
  { key: "calorias_totais", label: "kcal" },
  { key: "proteinas_g", label: "proteína" },
  { key: "carboidratos_g", label: "carbs" },
  { key: "gorduras_g", label: "gorduras" }
];

const BLOG_POSTS = [
  { slug: "quantas-gramas-de-proteina-por-dia", titulo: "Quantas gramas de proteína preciso comer por dia?", descricao: "Tabela completa por peso e objetivo com fontes brasileiras acessíveis.", tempo: "9 min", tag: "Proteína", emoji: "💪" },
  { slug: "o-que-comer-no-jejum-intermitente-16-8", titulo: "O que comer no jejum intermitente 16:8 — guia completo", descricao: "Descubra o que comer, quando comer e o que evitar no jejum 16:8.", tempo: "8 min", tag: "Jejum Intermitente", emoji: "⏰" },
];

function getFingerprint() { return btoa(`${navigator.userAgent}-${screen.width}x${screen.height}`); }
function getStorageKey() { return `nutry_gerou_${getFingerprint()}`; }
function jaGerouHoje() { try { return localStorage.getItem(getStorageKey()) === new Date().toDateString(); } catch { return false; } }
function marcarGerouHoje() { try { localStorage.setItem(getStorageKey(), new Date().toDateString()); } catch {} }

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);
  const [objetivo, setObjetivo] = useState<Objetivo | null>(null);
  const [dieta, setDieta] = useState<Dieta | null>(null);
  const [refeicoes, setRefeicoes] = useState<number | null>(null);
  const [sexo, setSexo] = useState<Sexo | null>(null);
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [screen, setScreen] = useState<Screen>("onboarding");
  const [plano, setPlano] = useState<Plano | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [openMeal, setOpenMeal] = useState<number>(0);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [billing, setBilling] = useState<BillingType>("anual");
  const [swapResultados, setSwapResultados] = useState<Substituto[]>([]);
  const [swapLoading, setSwapLoading] = useState(false);
  const [jaGerou, setJaGerou] = useState(false);
  const [itensMarcados, setItensMarcados] = useState<Set<string>>(new Set());

  // Verifica logo ao montar se já gerou hoje
  useEffect(() => {
    if (jaGerouHoje()) setJaGerou(true);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) { setUser(session.user); checkPro(session.user.id); }
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) { setUser(session.user); checkPro(session.user.id); }
      else { setUser(null); setIsPro(false); }
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!isPro && jaGerouHoje()) setJaGerou(true);
  }, [isPro]);

  async function checkPro(userId: string) {
    const { data } = await supabase.from("profiles").select("plano").eq("id", userId).single();
    setIsPro(data?.plano === "pro");
  }

  const dadosValidos = sexo && peso && altura && idade &&
    Number(peso) > 0 && Number(altura) > 0 && Number(idade) > 0;
  const canGenerate = objetivo && dieta && refeicoes && dadosValidos;

  const currentPrice = billing === "mensal" ? "19" : "9";
  const currentCents = billing === "mensal" ? ",97" : ",99";
  const currentLink = billing === "mensal" ? "https://pay.cakto.com.br/3763j6f_853173" : "https://pay.cakto.com.br/bv6bu58";

  async function gerarPlano() {
    if (!canGenerate) return;
    if (!isPro && jaGerouHoje()) { setJaGerou(true); setModalType("newLocked"); return; }
    setErro(null);
    setScreen("loading");
    try {
      const res = await fetch("/api/plano", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ objetivo, dieta, refeicoes, sexo, peso: Number(peso), altura: Number(altura), idade: Number(idade) }),
      });
      const data: Plano = await res.json();
      setPlano(data);
      setOpenMeal(0);
      setItensMarcados(new Set());
      setScreen("plan");
      trackEvent("gerar_plano", { objetivo, dieta, refeicoes, sexo });
      if (!isPro) { marcarGerouHoje(); setJaGerou(true); }
    } catch {
      setErro("Erro ao gerar. Tente novamente.");
      setScreen("onboarding");
    }
  }

  async function substituir(ingrediente: string, refeicaoIdx: number, ingIdx: number) {
    setSwapResultados([]);
    setSwapLoading(true);
    setModalType("swap");
    trackEvent("substituir_ingrediente", { ingrediente });
    try {
      const res = await fetch("/api/substituir", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingrediente, prato: plano?.refeicoes[refeicaoIdx].prato, dieta }),
      });
      const data = await res.json();
      setSwapResultados(data.substitutos || []);
    } catch { setSwapResultados([]); }
    setSwapLoading(false);
  }

  function toggleItem(item: string) {
    setItensMarcados(prev => {
      const novo = new Set(prev);
      if (novo.has(item)) novo.delete(item);
      else novo.add(item);
      return novo;
    });
  }

  function gerarTextoLista() {
    if (!plano) return "";
    const grupos = consolidarIngredientes(plano.refeicoes);
    const itensFalta = Object.entries(grupos)
      .map(([cat, itens]) => {
        const faltam = itens.filter(i => !itensMarcados.has(i));
        if (faltam.length === 0) return null;
        return `${cat}\n${faltam.map(i => `• ${i}`).join("\n")}`;
      })
      .filter(Boolean)
      .join("\n\n");
    return `🥗 *Lista de compras — Nutry.life*\n\n${itensFalta}\n\n_Gerado em nutry.life_`;
  }

  function compartilharWhatsApp() {
    const texto = gerarTextoLista();
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, "_blank");
    trackEvent("compartilhar_lista", { canal: "whatsapp" });
  }

  function compartilharEmail() {
    const texto = gerarTextoLista().replace(/\*/g, "").replace(/_/g, "");
    window.location.href = `mailto:?subject=${encodeURIComponent("Lista de compras — Nutry.life")}&body=${encodeURIComponent(texto)}`;
    trackEvent("compartilhar_lista", { canal: "email" });
  }

  const inputStyle = {
    width: '100%', padding: '0.9rem 1rem', fontSize: '1rem',
    border: '2px solid #e5e7eb', borderRadius: '14px', outline: 'none',
    fontFamily: 'inherit', fontWeight: 500, color: '#111827', background: 'white',
    boxSizing: 'border-box' as const, transition: 'border-color 0.2s',
  };

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a href="/blog" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#6b7280', textDecoration: 'none' }}>Blog</a>
          {user ? (
            <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())} className={styles.swapBtn}>Sair</button>
          ) : (
            <a href="/login" className={styles.btnEntrar}>Entrar</a>
          )}
          <div className={styles.badge}>Beta</div>
        </div>
      </header>

      <main className={styles.main}>
        {screen === "onboarding" && (
          <div className="fade-up">
            <div className={styles.heroEyebrow}>
              <div className={styles.heroLine} /><span className={styles.heroEyebrowText}>Inteligência Artificial Nutricional</span>
            </div>
            <h1 className={styles.heroTitle}>A sua <em className={styles.heroEm}>dieta perfeita</em><br />feita em segundos.</h1>
            <p className={styles.heroSub}>Chega de dúvidas sobre o que comer. Selecione suas preferências abaixo.</p>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Qual é o seu objetivo?</span></div>
              <div className={styles.qGrid}>
                {OBJETIVOS.map(({ v, ic: Ic, lb, sub }) => (
                  <button key={v} className={`${styles.qBtn} ${objetivo === v ? styles.qBtnActive : ""}`} onClick={() => setObjetivo(v)}>
                    <span className={styles.qBtnIcon}><Ic /></span><span className={styles.qBtnLabel}>{lb}</span><span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Preferência alimentar</span></div>
              <div className={styles.qGrid}>
                {DIETAS.map(({ v, ic: Ic, lb, sub }) => (
                  <button key={v} className={`${styles.qBtn} ${dieta === v ? styles.qBtnActive : ""}`} onClick={() => setDieta(v)}>
                    <span className={styles.qBtnIcon}><Ic /></span><span className={styles.qBtnLabel}>{lb}</span><span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Quantas refeições hoje?</span></div>
              <div className={styles.qGrid}>
                {MEAL_OPTIONS.map(({ v, ic: Ic, lb, sub }) => (
                  <button key={v} className={`${styles.qBtn} ${refeicoes === v ? styles.qBtnActive : ""}`} onClick={() => setRefeicoes(v)}>
                    <span className={styles.qBtnIcon}><Ic /></span><span className={styles.qBtnLabel}>{lb}</span><span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>Seus dados pessoais</span></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <button className={`${styles.qBtn} ${sexo === 'masculino' ? styles.qBtnActive : ""}`} onClick={() => setSexo('masculino')}>
                  <span className={styles.qBtnIcon}><IcoMasculino /></span>
                  <span className={styles.qBtnLabel}>Masculino</span>
                  <span className={styles.qBtnSub}>Homem</span>
                </button>
                <button className={`${styles.qBtn} ${sexo === 'feminino' ? styles.qBtnActive : ""}`} onClick={() => setSexo('feminino')}>
                  <span className={styles.qBtnIcon}><IcoFeminino /></span>
                  <span className={styles.qBtnLabel}>Feminino</span>
                  <span className={styles.qBtnSub}>Mulher</span>
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>Peso (kg)</label>
                  <input type="number" placeholder="70" min="30" max="250" value={peso} onChange={e => setPeso(e.target.value)} style={inputStyle} onFocus={e => e.target.style.borderColor = '#22c55e'} onBlur={e => e.target.style.borderColor = '#e5e7eb'} />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>Altura (cm)</label>
                  <input type="number" placeholder="170" min="100" max="250" value={altura} onChange={e => setAltura(e.target.value)} style={inputStyle} onFocus={e => e.target.style.borderColor = '#22c55e'} onBlur={e => e.target.style.borderColor = '#e5e7eb'} />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>Idade</label>
                  <input type="number" placeholder="30" min="10" max="100" value={idade} onChange={e => setIdade(e.target.value)} style={inputStyle} onFocus={e => e.target.style.borderColor = '#22c55e'} onBlur={e => e.target.style.borderColor = '#e5e7eb'} />
                </div>
              </div>
              <div className={styles.tipCard} style={{ marginTop: '1rem' }}>
                <div className={styles.tipIcon} style={{ fontSize: '1.2rem' }}>🔒</div>
                <div>
                  <div className={styles.tipTitle}>Seus dados são privados</div>
                  <div className={styles.tipText}>Usamos apenas para calcular suas calorias ideais. Nada é armazenado.</div>
                </div>
              </div>
            </div>

            {erro && <div className={styles.errMsg}>{erro}</div>}
            <button
              className={`${styles.btnPrimary} ${!canGenerate ? styles.btnDisabled : ""}`}
              disabled={!canGenerate}
              onClick={() => jaGerou && !isPro ? setModalType("newLocked") : gerarPlano()}
            >
              {jaGerou && !isPro ? "🔒 Limite diário atingido" : "Gerar meu plano"}
            </button>

            <div style={{ marginTop: '4rem' }}>
              <div className={styles.qLabelRow} style={{ marginBottom: '1.5rem' }}>
                <div className={styles.heroLine} />
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.3px' }}>
                  Blog Nutry.life — <em style={{ color: '#22c55e', fontStyle: 'normal' }}>Aprenda mais</em>
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
                {BLOG_POSTS.map((post) => (
                  <a key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <div className={styles.mealCard} style={{ padding: 0 }}>
                      <div style={{ padding: '1.25rem 1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                          <span className={styles.tag}>{post.tag}</span>
                          <span style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600 }}>{post.tempo} de leitura</span>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <span style={{ fontSize: '2rem', flexShrink: 0 }}>{post.emoji}</span>
                          <div>
                            <div style={{ fontWeight: 800, color: '#111827', fontSize: '1rem', marginBottom: '4px', lineHeight: 1.3 }}>{post.titulo}</div>
                            <div style={{ fontSize: '0.88rem', color: '#6b7280', fontWeight: 500, lineHeight: 1.5 }}>{post.descricao}</div>
                          </div>
                        </div>
                        <div style={{ marginTop: '0.75rem', fontSize: '0.88rem', fontWeight: 700, color: '#16a34a' }}>Ler artigo →</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <a href="/blog" className={styles.btnSecondary} style={{ textDecoration: 'none', display: 'block', textAlign: 'center', color: '#16a34a', borderColor: '#86efac' }}>
                Ver todos os artigos →
              </a>
            </div>
          </div>
        )}

        {screen === "loading" && (
          <div className={styles.loadWrap}>
            <div className={styles.spinner} />
            <div className={styles.loadTitle}>Montando seu plano...</div>
            <div style={{ fontSize: '0.85rem', color: '#9ca3af', fontWeight: 500, textAlign: 'center', maxWidth: '260px', lineHeight: 1.6 }}>
              A IA está calculando suas calorias ideais e selecionando os melhores alimentos 🥦
            </div>
          </div>
        )}

        {screen === "plan" && plano && (
          <div className="fade-up">
            <div className={styles.planHeader}>
              <div className={styles.metaRow}>
                <span className={styles.tag}>{objetivo ? OBJETIVO_LABELS[objetivo] : ""}</span>
                <span className={styles.tag}>{dieta ? DIETA_LABELS[dieta] : ""}</span>
                {sexo && <span className={styles.tag}>{sexo === 'masculino' ? '👨 Masculino' : '👩 Feminino'}</span>}
              </div>
              <h2 className={styles.planTitle}>{plano.titulo}</h2>
              <p className={styles.planSub}>{plano.subtitulo}</p>
            </div>

            <div className={styles.macrosCard}>
              {MACRO_ITEMS.map(({ key, label }) => (
                <div key={label} className={styles.macroItem}>
                  <span className={styles.macroVal}>{plano[key] as number}{key !== "calorias_totais" ? "g" : ""}</span>
                  <span className={styles.macroLbl}>{label}</span>
                </div>
              ))}
            </div>

            {plano.dica_do_dia && (
              <div className={styles.tipCard}>
                <div className={styles.tipIcon}>💡</div>
                <div>
                  <div className={styles.tipTitle}>Dica do dia</div>
                  <div className={styles.tipText}>{plano.dica_do_dia}</div>
                </div>
              </div>
            )}

            {plano.refeicoes.map((r, i) => (
              <div key={i} className={styles.mealCard}>
                <div className={styles.mealHead} onClick={() => setOpenMeal(openMeal === i ? -1 : i)}>
                  <div className={styles.mealInfo}>
                    <div className={styles.mealName}>{r.nome}</div>
                    <div className={styles.mealTime}>{r.horario} — {r.prato}</div>
                  </div>
                  <div className={styles.mealKcal}>{r.calorias} <span className={styles.kcalUnit}>kcal</span></div>
                  <div className={`${styles.chevron} ${openMeal === i ? styles.chevronOpen : ""}`}>▾</div>
                </div>
                {openMeal === i && (
                  <div className={styles.mealBody}>
                    {r.foto_url && (
                      <div style={{ position: 'relative' }}>
                        <img src={r.foto_url} alt={r.prato} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
                        <div style={{ position: 'absolute', bottom: '8px', right: '10px', background: 'rgba(0,0,0,0.45)', color: 'white', fontSize: '0.68rem', fontWeight: 600, padding: '3px 8px', borderRadius: '99px', backdropFilter: 'blur(4px)' }}>
                          📷 Imagem ilustrativa
                        </div>
                      </div>
                    )}
                    <div className={styles.mealBodyContent}>
                      <div className={styles.dishTitle}>{r.prato}</div>
                      {r.descricao && <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem', lineHeight: 1.5 }}>{r.descricao}</p>}
                      <div className={styles.sectionLabel}>Ingredientes</div>
                      <ul className={styles.ingList}>
                        {r.ingredientes.map((ing, j) => (
                          <li key={j} className={styles.ingItem}>
                            <div className={styles.ingLeft}><span className={styles.dot} />{ing.item}</div>
                            <button className={styles.swapBtn} onClick={() => {
                              if (isPro) { substituir(ing.item, i, j); }
                              else { trackEvent("ver_modal_pro", { origem: "substituir" }); setModalType("swap"); }
                            }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m7 21-4-4 4-4"/><path d="M3 17h18"/><path d="m17 3 4 4-4 4"/><path d="M21 7H3"/></svg> substituir
                            </button>
                          </li>
                        ))}
                      </ul>
                      {r.preparo && r.preparo.length > 0 && (
                        <>
                          <div className={styles.sectionLabel}>Modo de preparo</div>
                          <ol className={styles.preparoList}>
                            {r.preparo.map((passo, k) => (
                              <li key={k} className={styles.preparoItem}>
                                <span className={styles.preparoNum}>{k + 1}</span>
                                <span>{passo}</span>
                              </li>
                            ))}
                          </ol>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              className={styles.btnSecondary}
              style={{ borderColor: '#86efac', color: '#16a34a', marginBottom: '0.75rem' }}
              onClick={() => { setModalType("lista"); trackEvent("abrir_lista_compras"); }}
            >
              🛒 Lista de compras
            </button>

            {!isPro && (
              <div className={styles.premiumBanner}>
                <div className={styles.premiumBadgeTop}>✦ MAIS POPULAR</div>
                <div className={styles.premiumHeader}>
                  <h3>🚀 Nutry.life PRO</h3>
                  <p>Pare de repetir o mesmo cardápio. <strong>Gere planos ilimitados</strong> e substitua qualquer ingrediente que não tiver em casa.</p>
                </div>
                <div className={styles.premiumFeatures}>
                  <div className={styles.premiumFeatureItem}>✅ Planos ilimitados todo dia</div>
                  <div className={styles.premiumFeatureItem}>✅ Substituição de ingredientes</div>
                  <div className={styles.premiumFeatureItem}>✅ Todos os objetivos e dietas</div>
                  <div className={styles.premiumFeatureItem}>✅ Cancele quando quiser</div>
                </div>
                <div className={styles.billingToggle}>
                  <button className={`${styles.toggleBtn} ${billing === "mensal" ? styles.toggleBtnActive : ""}`} onClick={() => setBilling("mensal")}>Mensal</button>
                  <button className={`${styles.toggleBtn} ${billing === "anual" ? styles.toggleBtnActive : ""}`} onClick={() => setBilling("anual")}>Anual <span className={styles.badgeDiscount}>-50%</span></button>
                </div>
                {billing === "anual" && <div className={styles.premiumSavings}>💰 Você economiza R$ 120/ano</div>}
                <div className={styles.premiumPrice}>R$ {currentPrice}{currentCents}<span className={styles.premiumPeriod}>/mês</span></div>
                <a href={currentLink} target="_blank" className={styles.premiumBtn} onClick={() => trackEvent("clique_assinar", { billing, origem: "banner" })}>Desbloquear PRO agora →</a>
                <p className={styles.premiumFootnote}>Sem compromisso. Cancele quando quiser.</p>
              </div>
            )}

            <button className={styles.btnSecondary} onClick={() => {
              if (isPro) { setModalType("new"); }
              else { trackEvent("ver_modal_pro", { origem: "novo_plano" }); setModalType("newLocked"); }
            }}>
              ↺ Gerar novo plano
            </button>
          </div>
        )}

        {modalType && (
          <div className={styles.modalOverlay} onClick={() => setModalType(null)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()} style={modalType === "lista" ? { maxHeight: '85vh', overflowY: 'auto' } : {}}>
              <button className={styles.modalClose} onClick={() => setModalType(null)}>✕</button>

              {modalType === "lista" && plano && (() => {
                const grupos = consolidarIngredientes(plano.refeicoes);
                const totalItens = Object.values(grupos).flat().length;
                const marcados = Object.values(grupos).flat().filter(i => itensMarcados.has(i)).length;
                const faltam = totalItens - marcados;
                return (
                  <>
                    <div className={styles.modalIcon}>🛒</div>
                    <h3 className={styles.modalTitle}>Lista de compras</h3>
                    <p className={styles.modalText}>Marque o que já tem em casa. Vamos enviar só o que falta.</p>
                    <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '0.75rem 1rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#166534' }}>{marcados} de {totalItens} já tenho</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#16a34a' }}>{faltam} para comprar</span>
                    </div>
                    {Object.entries(grupos).map(([cat, itens]) => (
                      <div key={cat} style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>{cat}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {itens.map((item, idx) => {
                            const marcado = itensMarcados.has(item);
                            return (
                              <div key={idx} onClick={() => toggleItem(item)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.7rem 1rem', borderRadius: '12px', cursor: 'pointer', background: marcado ? '#f0fdf4' : 'white', border: `1px solid ${marcado ? '#bbf7d0' : '#e5e7eb'}`, transition: 'all 0.15s' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '6px', flexShrink: 0, background: marcado ? '#22c55e' : 'white', border: `2px solid ${marcado ? '#22c55e' : '#d1d5db'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s' }}>
                                  {marcado && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                                </div>
                                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: marcado ? '#9ca3af' : '#374151', textDecoration: marcado ? 'line-through' : 'none', transition: 'all 0.15s' }}>{item}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', position: 'sticky', bottom: 0, background: 'white', paddingTop: '1rem', borderTop: '1px solid #f3f4f6' }}>
                      {faltam > 0 ? (
                        <>
                          <button onClick={compartilharWhatsApp} className={styles.premiumBtn} style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Enviar para o WhatsApp
                          </button>
                          <button onClick={compartilharEmail} className={styles.btnSecondary} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            Enviar por e-mail
                          </button>
                        </>
                      ) : (
                        <div className={styles.tipCard} style={{ margin: 0 }}>
                          <div className={styles.tipIcon}>🎉</div>
                          <div>
                            <div className={styles.tipTitle}>Você já tem tudo!</div>
                            <div className={styles.tipText}>Todos os ingredientes estão marcados. Bora cozinhar!</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                );
              })()}

              {modalType === "new" && (
                <>
                  <div className={styles.modalIcon}>🔄</div>
                  <h3 className={styles.modalTitle}>Gerar novo plano?</h3>
                  <p className={styles.modalText}>Suas escolhas atuais serão mantidas. Um novo cardápio será criado do zero.</p>
                  <button className={styles.premiumBtn} onClick={() => { setModalType(null); gerarPlano(); }}>Sim, gerar novo</button>
                  <button className={styles.btnSecondary} onClick={() => setModalType(null)}>Cancelar</button>
                </>
              )}

              {modalType === "newLocked" && (
                <>
                  <div className={styles.modalIcon}>🔒</div>
                  <h3 className={styles.modalTitle}>Limite diário atingido</h3>
                  <p className={styles.modalText}>Você já gerou seu plano gratuito de hoje. Assine o PRO para gerar planos ilimitados.</p>
                  <div className={styles.billingToggle}>
                    <button className={`${styles.toggleBtn} ${billing === "mensal" ? styles.toggleBtnActive : ""}`} onClick={() => setBilling("mensal")}>Mensal</button>
                    <button className={`${styles.toggleBtn} ${billing === "anual" ? styles.toggleBtnActive : ""}`} onClick={() => setBilling("anual")}>Anual <span className={styles.badgeDiscount}>-50%</span></button>
                  </div>
                  {billing === "anual" && <div className={styles.premiumSavings}>💰 Você economiza R$ 120/ano</div>}
                  <div className={styles.premiumPrice}>R$ {currentPrice}{currentCents}<span className={styles.premiumPeriod}>/mês</span></div>
                  <a href={currentLink} target="_blank" className={styles.premiumBtn} onClick={() => trackEvent("clique_assinar", { billing, origem: "modal_novo_plano" })}>Assinar Agora →</a>
                  <button className={styles.btnSecondary} onClick={() => setModalType(null)}>Agora não</button>
                </>
              )}

              {modalType === "swap" && (
                <>
                  <div className={styles.modalIcon}>🔄</div>
                  <h3 className={styles.modalTitle}>Substituir ingrediente</h3>
                  {swapLoading ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '1rem 0' }}>
                      <div className={styles.spinner} />
                      <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Buscando substitutos...</p>
                    </div>
                  ) : swapResultados.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {swapResultados.map((s, i) => (
                        <div key={i} style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '14px', padding: '1rem 1.25rem' }}>
                          <div style={{ fontWeight: 800, color: '#111827', marginBottom: '4px' }}>{s.item}</div>
                          <div style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>{s.motivo}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className={styles.modalText}>Substituição de ingredientes é exclusiva para assinantes PRO.</p>
                      <div className={styles.billingToggle}>
                        <button className={`${styles.toggleBtn} ${billing === "mensal" ? styles.toggleBtnActive : ""}`} onClick={() => setBilling("mensal")}>Mensal</button>
                        <button className={`${styles.toggleBtn} ${billing === "anual" ? styles.toggleBtnActive : ""}`} onClick={() => setBilling("anual")}>Anual <span className={styles.badgeDiscount}>-50%</span></button>
                      </div>
                      {billing === "anual" && <div className={styles.premiumSavings}>💰 Você economiza R$ 120/ano</div>}
                      <div className={styles.premiumPrice}>R$ {currentPrice}{currentCents}<span className={styles.premiumPeriod}>/mês</span></div>
                      <a href={currentLink} target="_blank" className={styles.premiumBtn} onClick={() => trackEvent("clique_assinar", { billing, origem: "modal_substituir" })}>Assinar Agora →</a>
                    </>
                  )}
                  <button className={styles.btnSecondary} onClick={() => setModalType(null)}>Fechar</button>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
