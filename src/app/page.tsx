"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./page.module.css";

// --- TIPAGENS ---
type Objetivo = "emagrecer" | "massa" | "manutencao" | "saude";
type Dieta = "onivoro" | "vegetariano" | "vegano" | "lowcarb";
type Screen = "onboarding" | "loading" | "plan";
type ModalType = "swap" | "new" | null;
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

// --- TODOS OS SEUS ÍCONES ORIGINAIS (RESTORED) ---
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

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);
  const [objetivo, setObjetivo] = useState<Objetivo | null>(null);
  const [dieta, setDieta] = useState<Dieta | null>(null);
  const [refeicoes, setRefeicoes] = useState<number | null>(null);
  const [screen, setScreen] = useState<Screen>("onboarding");
  const [plano, setPlano] = useState<Plano | null>(null);
  const [openMeal, setOpenMeal] = useState<number>(0);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [billing, setBilling] = useState<BillingType>("anual");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        supabase.from("profiles").select("plano").eq("id", session.user.id).single()
          .then(({ data }) => { if (data?.plano === "pro") setIsPro(true); });
      }
    });
  }, []);

  async function gerarPlano() {
    if (!objetivo || !dieta || !refeicoes) return;
    setScreen("loading");
    try {
      const res = await fetch("/api/plano", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ objetivo, dieta, refeicoes }),
      });
      const data = await res.json();
      setPlano(data);
      setScreen("plan");
    } catch {
      setScreen("onboarding");
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></div>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          {user ? (
            <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())} className={styles.swapBtn}>Sair</button>
          ) : (
            <a href="/login" className={styles.btnEntrar} style={{border: "1.5px solid #22c55e", padding: "6px 15px", borderRadius: "12px", textDecoration: "none", color: "#22c55e", fontWeight: "700"}}>Entrar</a>
          )}
          <div className={styles.badge}>Beta</div>
        </div>
      </header>

      <main className={styles.main}>
        {screen === "onboarding" && (
          <div className="fade-up">
            <div className={styles.heroEyebrow}>
              <div className={styles.heroLine} />
              <span className={styles.heroEyebrowText}>Inteligência Artificial Nutricional</span>
            </div>
            <h1 className={styles.heroTitle}>A sua <em className={styles.heroEm}>dieta perfeita</em> feita em segundos.</h1>
            <p className={styles.heroSub}>Chega de dúvidas sobre o que comer. Selecione suas preferências abaixo.</p>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span> <span className={styles.qLabel}>Qual é o seu objetivo?</span></div>
              <div className={styles.qGrid}>
                {OBJETIVOS.map(({ v, ic: Ic, lb, sub }) => (
                  <button key={v} className={`${styles.qBtn} ${objetivo === v ? styles.qBtnActive : ""}`} onClick={() => setObjetivo(v)}>
                    <span className={styles.qBtnIcon}><Ic /></span>
                    <span className={styles.qBtnLabel}>{lb}</span>
                    <span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span> <span className={styles.qLabel}>Preferência alimentar</span></div>
              <div className={styles.qGrid}>
                {DIETAS.map(({ v, ic: Ic, lb, sub }) => (
                  <button key={v} className={`${styles.qBtn} ${dieta === v ? styles.qBtnActive : ""}`} onClick={() => setDieta(v)}>
                    <span className={styles.qBtnIcon}><Ic /></span>
                    <span className={styles.qBtnLabel}>{lb}</span>
                    <span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span> <span className={styles.qLabel}>Quantas refeições hoje?</span></div>
              <div className={styles.qGrid}>
                {MEAL_OPTIONS.map(({ v, ic: Ic, lb, sub }) => (
                  <button key={v} className={`${styles.qBtn} ${refeicoes === v ? styles.qBtnActive : ""}`} onClick={() => setRefeicoes(v)}>
                    <span className={styles.qBtnIcon}><Ic /></span>
                    <span className={styles.qBtnLabel}>{lb}</span>
                    <span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <button className={`${styles.btnPrimary} ${(!objetivo || !dieta || !refeicoes) ? styles.btnDisabled : ""}`} disabled={!objetivo || !dieta || !refeicoes} onClick={gerarPlano}>Gerar meu plano</button>
          </div>
        )}

        {screen === "loading" && <div className={styles.loadWrap}><div className={styles.spinner} /><h2>IA montando seu plano...</h2></div>}

        {screen === "plan" && plano && (
          <div className="fade-up">
             <div className={styles.planHeader}>
                <h2 className={styles.planTitle}>{plano.titulo}</h2>
                <p className={styles.planSub}>{plano.subtitulo}</p>
             </div>
             {plano.refeicoes.map((r, i) => (
                <div key={i} className={styles.mealCard}>
                   <div className={styles.mealHead} onClick={() => setOpenMeal(openMeal === i ? -1 : i)}>
                      <div className={styles.mealInfo}>
                         <span className={styles.mealCategory}>{r.nome}</span>
                         <h3 className={styles.mealDishTitle}>{r.prato}</h3>
                      </div>
                      <div className={styles.mealKcalBadge}><strong>{r.calorias}</strong><span>kcal</span></div>
                   </div>
                   {openMeal === i && (
                      <div className={styles.mealBody}>
                         <div className={styles.sectionLabel}>INGREDIENTES</div>
                         <ul className={styles.ingList}>
                            {r.ingredientes.map((ing, j) => (
                               <li key={j} className={styles.ingItem}>
                                  <div className={styles.ingLeft}><span className={styles.dot} />{ing.item}</div>
                                  <button className={styles.swapBtn} onClick={() => !isPro && setModalType("swap")}>
                                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m7 21-4-4 4-4"/><path d="M3 17h18"/><path d="m17 3 4 4-4 4"/><path d="M21 7H3"/></svg>
                                     substituir
                                  </button>
                               </li>
                            ))}
                         </ul>
                      </div>
                   )}
                </div>
             ))}
             {!isPro && (
               <div className={styles.premiumBanner}>
                  <h3>Assine o Nutry.life Pro 🚀</h3>
                  <div className={styles.billingToggle}>
                    <button className={`${styles.toggleBtn} ${billing === "mensal" ? styles.toggleBtnActive : ""}`} onClick={() => setBilling("mensal")}>Mensal</button>
                    <button className={`${styles.toggleBtn} ${billing === "anual" ? styles.toggleBtnActive : ""}`} onClick={() => setBilling("anual")}>Anual</button>
                  </div>
                  <div className={styles.premiumPrice}>R$ {billing === "anual" ? "9,99" : "19,97"}/mês</div>
                  <a href={billing === "anual" ? "https://pay.cakto.com.br/bv6bu58" : "https://pay.cakto.com.br/3763j6f_853173"} target="_blank" className={styles.premiumBtn}>Desbloquear Agora</a>
               </div>
             )}
          </div>
        )}
      </main>

      {modalType && (
        <div className={styles.modalOverlay} onClick={() => setModalType(null)}>
          <div className={styles.modalContent}>
            <h2>Recurso Premium 🔒</h2>
            <p>A substituição de ingredientes é exclusiva para assinantes PRO.</p>
            <button className={styles.btnPrimary} onClick={() => setModalType(null)}>Entendi</button>
          </div>
        </div>
      )}
    </div>
  );
}
