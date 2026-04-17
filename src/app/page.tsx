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

// --- ÍCONES ORIGINAIS ---
const IcoSwap = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7 21-4-4 4-4"/><path d="M3 17h18"/><path d="m17 3 4 4-4 4"/><path d="M21 7H3"/>
  </svg>
);
function IcoEmagrecer() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c0 0-3.5 4-3.5 7.5a3.5 3.5 0 007 0C15.5 6 12 2 12 2z"/><line x1="12" y1="13" x2="12" y2="18"/><line x1="9.5" y1="17" x2="14.5" y2="17"/></svg>; }
function IcoMassa() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="6" height="9" rx="1"/><line x1="4" y1="9" x2="20" y2="9"/><circle cx="4" cy="7" r="2"/><circle cx="20" cy="7" r="2"/></svg>; }
function IcoManutencao() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>; }
function IcoSaude() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>; }

// --- DADOS ---
const OBJETIVOS = [
  { v: "emagrecer" as Objetivo, ic: IcoEmagrecer, lb: "Emagrecer", sub: "Déficit calórico" },
  { v: "massa" as Objetivo, ic: IcoMassa, lb: "Ganhar massa", sub: "Superávit proteico" },
  { v: "manutencao" as Objetivo, ic: IcoManutencao, lb: "Manutenção", sub: "Saúde geral" },
  { v: "saude" as Objetivo, ic: IcoSaude, lb: "Saúde", sub: "Bem-estar" },
];
const MEAL_OPTIONS = [ { v: 1, sub: "Jejum Extremo" }, { v: 2, sub: "Jejum 16h" }, { v: 3, sub: "Padrão Diário" }, { v: 4, sub: "Com Lanchinhos" }, { v: 5, sub: "A cada 3 horas" } ];

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

  const canGenerate = objetivo && dieta && refeicoes;
  const currentPrice = billing === "mensal" ? "19" : "9";
  const currentCents = billing === "mensal" ? ",97" : ",99";

  async function gerarPlano() {
    if (!canGenerate) return;
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
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
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
            <h1 className={styles.heroTitle}>A sua <em className={styles.heroEm}>dieta perfeita</em> feita em segundos.</h1>
            <p className={styles.heroSub}>Selecione seu objetivo abaixo para começarmos.</p>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span> <span className={styles.qLabel}>Objetivo</span></div>
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
              <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span> <span className={styles.qLabel}>Preferência</span></div>
              <div className={styles.qGrid}>
                {["onivoro", "vegetariano", "vegano", "lowcarb"].map((v) => (
                  <button key={v} className={`${styles.qBtn} ${dieta === v ? styles.qBtnActive : ""}`} onClick={() => setDieta(v as Dieta)}>
                    <span className={styles.qBtnLabel}>{v.charAt(0).toUpperCase() + v.slice(1)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span> <span className={styles.qLabel}>Refeições</span></div>
              <div className={styles.mealsGrid}>
                {MEAL_OPTIONS.map(({ v, sub }) => (
                  <button key={v} className={`${styles.mealBtn} ${refeicoes === v ? styles.qBtnActive : ""}`} onClick={() => setRefeicoes(v)}>
                    <span className={styles.mealNum}>{v}</span>
                    <span className={styles.mealSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <button className={`${styles.btnPrimary} ${!canGenerate ? styles.btnDisabled : ""}`} disabled={!canGenerate} onClick={gerarPlano}>Gerar meu plano</button>
          </div>
        )}

        {screen === "loading" && <div className={styles.loadWrap}><div className={styles.spinner} /><h2>IA montando seu plano...</h2></div>}

        {screen === "plan" && plano && (
          <div className="fade-up">
            <h2 className={styles.planTitle}>{plano.titulo}</h2>
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
                    <ul className={styles.ingList}>
                      {r.ingredientes.map((ing, j) => (
                        <li key={j} className={styles.ingItem}>
                          <div className={styles.ingLeft}><span className={styles.dot} />{ing.item}</div>
                          <button className={styles.swapBtn} onClick={() => !isPro && setModalType("swap")}><IcoSwap /> substituir</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            {!isPro && (
              <div className={styles.premiumBanner}>
                <h3>🚀 Nutry.life PRO</h3>
                <div className={styles.billingToggle}>
                   <button className={billing === 'anual' ? styles.toggleBtnActive : ""} onClick={() => setBilling('anual')}>Anual -50%</button>
                </div>
                <div className={styles.premiumPrice}>R$ {currentPrice}{currentCents}/mês</div>
                <a href="#" className={styles.premiumBtn}>Assinar Agora</a>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
