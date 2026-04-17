"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./page.module.css";

// --- TIPAGENS ---
type Objetivo = "emagrecer" | "massa" | "manutencao" | "saude";
type Dieta = "onivoro" | "vegetariano" | "vegano" | "lowcarb";
type Screen = "onboarding" | "loading" | "plan";
type ModalType = "swap" | "new" | null;

// --- ÍCONES ---
const IcoSwap = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7 21-4-4 4-4"/><path d="M3 17h18"/><path d="m17 3 4 4-4 4"/><path d="M21 7H3"/>
  </svg>
);
function IcoEmagrecer() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c0 0-3.5 4-3.5 7.5a3.5 3.5 0 007 0C15.5 6 12 2 12 2z"/><line x1="12" y1="13" x2="12" y2="18"/></svg>; }
function IcoMassa() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="6" height="9" rx="1"/><line x1="4" y1="9" x2="20" y2="9"/></svg>; }
function IcoManutencao() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></svg>; }
function IcoSaude() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>; }

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);
  const [objetivo, setObjetivo] = useState<Objetivo | null>(null);
  const [dieta, setDieta] = useState<Dieta | null>(null);
  const [refeicoes, setRefeicoes] = useState<number | null>(null);
  const [screen, setScreen] = useState<Screen>("onboarding");
  const [plano, setPlano] = useState<any>(null);
  const [openMeal, setOpenMeal] = useState<number>(0);
  const [modalType, setModalType] = useState<ModalType>(null);

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
    setTimeout(() => {
      setPlano({
        titulo: "Emagrecimento",
        refeicoes: [
          { nome: "Almoço Principal", prato: "Frango Grelhado com Brócolis e Ovos Mexidos", calorias: 1500, ingredientes: [{item: "300g peito de frango"}, {item: "400g brócolis"}, {item: "3 ovos mexidos"}] }
        ]
      });
      setScreen("plan");
    }, 2000);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {user ? (
            <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())} className={styles.swapBtn}>Sair</button>
          ) : (
            <a href="/login" className={styles.btnEntrar}>Entrar</a>
          )}
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
                <button className={`${styles.qBtn} ${objetivo === "emagrecer" ? styles.qBtnActive : ""}`} onClick={() => setObjetivo("emagrecer")}>
                  <IcoEmagrecer /><span className={styles.qBtnLabel}>Emagrecer</span><span className={styles.qBtnSub}>Déficit calórico</span>
                </button>
                <button className={`${styles.qBtn} ${objetivo === "massa" ? styles.qBtnActive : ""}`} onClick={() => setObjetivo("massa")}>
                  <IcoMassa /><span className={styles.qBtnLabel}>Ganhar massa</span><span className={styles.qBtnSub}>Superávit proteico</span>
                </button>
                <button className={`${styles.qBtn} ${objetivo === "manutencao" ? styles.qBtnActive : ""}`} onClick={() => setObjetivo("manutencao")}>
                  <IcoManutencao /><span className={styles.qBtnLabel}>Manutenção</span><span className={styles.qBtnSub}>Saúde geral</span>
                </button>
                <button className={`${styles.qBtn} ${objetivo === "saude" ? styles.qBtnActive : ""}`} onClick={() => setObjetivo("saude")}>
                  <IcoSaude /><span className={styles.qBtnLabel}>Saúde</span><span className={styles.qBtnSub}>Bem-estar</span>
                </button>
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span> <span className={styles.qLabel}>Preferência</span></div>
              <div className={styles.qGrid}>
                {["Onivoro", "Vegetariano", "Vegano", "Lowcarb"].map((v) => (
                  <button key={v} className={`${styles.qBtn} ${dieta === v.toLowerCase() ? styles.qBtnActive : ""}`} onClick={() => setDieta(v.toLowerCase() as Dieta)}>
                    <span className={styles.qBtnLabel} style={{marginTop: 0}}>{v}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span> <span className={styles.qLabel}>Refeições</span></div>
              <div className={styles.mealsGrid}>
                {[1, 2, 3, 4, 5].map((v) => (
                  <button key={v} className={`${styles.mealBtn} ${refeicoes === v ? styles.qBtnActive : ""}`} onClick={() => setRefeicoes(v)}>
                    <span className={styles.mealNum}>{v}</span>
                    <span className={styles.mealSub}>{v === 1 ? "Jejum" : v === 3 ? "Padrão" : "Diário"}</span>
                  </button>
                ))}
              </div>
            </div>

            <button className={`${styles.btnPrimary} ${!objetivo || !dieta || !refeicoes ? styles.btnDisabled : ""}`} disabled={!objetivo || !dieta || !refeicoes} onClick={gerarPlano}>
              Gerar meu plano
            </button>
          </div>
        )}

        {screen === "loading" && <div className={styles.loadWrap}><div className={styles.spinner} /><h2>Gerando seu plano...</h2></div>}

        {screen === "plan" && plano && (
          <div className="fade-up">
            <h1 className={styles.planTitle}>{plano.titulo}</h1>
            <p className={styles.planSub}>Uma refeição completa e nutritiva para HOJE</p>
            
            {plano.refeicoes.map((r: any, i: number) => (
              <div key={i} className={styles.mealCard}>
                <div className={styles.mealHead} onClick={() => setOpenMeal(openMeal === i ? -1 : i)}>
                  <div className={styles.mealInfo}>
                    <span className={styles.mealCategory}>{r.nome}</span>
                    <h3 className={styles.mealDishTitle}>{r.prato}</h3>
                  </div>
                  <div className={styles.mealKcalBadge}>
                    <strong>{r.calorias}</strong><span>kcal</span>
                  </div>
                </div>
                {openMeal === i && (
                  <div className={styles.mealBody}>
                    <div className={styles.sectionLabel}>INGREDIENTES</div>
                    <ul className={styles.ingList}>
                      {r.ingredients.map((ing: any, j: number) => (
                        <li key={j} className={styles.ingItem}>
                          <div className={styles.ingLeft}>{ing.item}</div>
                          <button className={styles.swapBtn} onClick={() => !isPro && setModalType("swap")}>
                            <IcoSwap /> substituir
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
