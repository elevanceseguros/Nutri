"use client";

import { useState } from "react";
import styles from "./page.module.css";
import React from "react";

type Objetivo = "emagrecer" | "massa" | "manutencao" | "saude";
type Dieta = "onivoro" | "vegetariano" | "vegano" | "lowcarb";
type Screen = "onboarding" | "loading" | "plan";

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

const OBJETIVO_LABELS: Record<Objetivo, string> = {
  emagrecer: "Emagrecimento", massa: "Ganho de Massa",
  manutencao: "Manutencao", saude: "Saude Geral",
};
const DIETA_LABELS: Record<Dieta, string> = {
  onivoro: "Onivoro", vegetariano: "Vegetariano",
  vegano: "Vegano", lowcarb: "Low Carb",
};

const MEAL_ICONS = ["cafe","salada","prato","fruta","lua"];

export default function Home() {
  const [objetivo, setObjetivo] = useState<Objetivo | null>(null);
  const [dieta, setDieta] = useState<Dieta | null>(null);
  const [refeicoes, setRefeicoes] = useState<number | null>(null);
  const [screen, setScreen] = useState<Screen>("onboarding");
  const [plano, setPlano] = useState<Plano | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [openMeal, setOpenMeal] = useState<number>(0);
  const [swapped, setSwapped] = useState<Record<string, boolean>>({});

  const canGenerate = objetivo && dieta && refeicoes;

  async function gerarPlano() {
    if (!objetivo || !dieta || !refeicoes) return;
    setErro(null);
    setSwapped({});
    setScreen("loading");
    try {
      const res = await fetch("/api/plano", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ objetivo, dieta, refeicoes }),
      });
      if (!res.ok) throw new Error("Erro");
      const data: Plano = await res.json();
      setPlano(data);
      setOpenMeal(0);
      setScreen("plan");
    } catch {
      setErro("Nao consegui gerar o plano. Tente novamente.");
      setScreen("onboarding");
    }
  }

  function toggleSwap(mealIdx: number, ingIdx: number) {
    const key = mealIdx + "-" + ingIdx;
    setSwapped(prev => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          Nutry<span className={styles.logoAccent}>.life</span>
        </div>
        <div className={styles.badge}>Beta</div>
      </header>

      <main className={styles.main}>

        {screen === "onboarding" && (
          <div className="fade-up">
            <div className={styles.heroEyebrow}>
              <div className={styles.heroLine} />
              <span className={styles.heroEyebrowText}>Seu plano de hoje</span>
            </div>
            <h1 className={styles.heroTitle}>
              Voce decide<br />
              <em className={styles.heroEm}>quantas refeicoes</em><br />
              vai fazer.
            </h1>
            <p className={styles.heroSub}>
              Receitas brasileiras de verdade, com modo de preparo e substituicao de ingredientes na hora.
            </p>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}>
                <span className={styles.qNum}>01.</span>
                <span className={styles.qLabel}>Qual e o seu objetivo?</span>
              </div>
              <div className={styles.qGrid}>
                {([
                  {([
  ["emagrecer",
    <svg key="e" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c0 0-3.5 4-3.5 7.5a3.5 3.5 0 007 0C15.5 6 12 2 12 2z"/><line x1="12" y1="13" x2="12" y2="18"/><line x1="9.5" y1="17" x2="14.5" y2="17"/></svg>,
    "Emagrecer","Deficit calorico"],
  ["massa",
    <svg key="m" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h12"/><path d="M4 8a2 2 0 100-4 2 2 0 000 4z"/><path d="M20 8a2 2 0 100-4 2 2 0 000 4z"/><rect x="9" y="8" width="6" height="10" rx="1"/></svg>,
    "Ganhar massa","Superavit proteico"],
  ["manutencao",
    <svg key="mt" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M5 8l7-5 7 5"/><path d="M5 16l7 5 7-5"/></svg>,
    "Manutencao","Saude geral"],
  ["saude",
    <svg key="s" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21C12 21 3 14 3 8a5 5 0 0110-1 5 5 0 0110 1c0 6-9 13-9 13z"/></svg>,
    "Saude","Bem-estar"],
] as [Objetivo, React.ReactNode, string, string][]).map(([v,ic,lb,sub]) => (
  <button key={v} className={styles.qBtn + (objetivo===v ? " " + styles.qBtnActive : "")} onClick={()=>setObjetivo(v)}>
    <span className={styles.qBtnIcon}>{ic}</span>
    <span className={styles.qBtnLabel}>{lb}</span>
    <span className={styles.qBtnSub}>{sub}</span>
  </button>
))}
                ] as [Objetivo,string,string,string][]).map(([v,ic,lb,sub]) => (
                  <button key={v} className={styles.qBtn + (objetivo===v ? " " + styles.qBtnActive : "")} onClick={()=>setObjetivo(v)}>
                    <span className={styles.qBtnIcon}>{ic}</span>
                    <span className={styles.qBtnLabel}>{lb}</span>
                    <span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}>
                <span className={styles.qNum}>02.</span>
                <span className={styles.qLabel}>Preferencia alimentar</span>
              </div>
              <div className={styles.qGrid}>
                {([
{([
  ["onivoro",
    <svg key="on" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8c0 4-3 7-6 9-3-2-6-5-6-9a6 6 0 0112 0z"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    "Onivoro","Sem restricao"],
  ["vegetariano",
    <svg key="vg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="6" ry="9"/><line x1="12" y1="3" x2="12" y2="21"/></svg>,
    "Vegetariano","Sem carnes"],
  ["vegano",
    <svg key="ve" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3C8 3 4 7 4 12c0 3 2 6 5 7.5"/><path d="M12 3c4 0 8 4 8 9 0 3-2 6-5 7.5"/><line x1="12" y1="3" x2="12" y2="21"/></svg>,
    "Vegano","100% vegetal"],
  ["lowcarb",
    <svg key="lc" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h12"/><circle cx="19" cy="18" r="2"/><line x1="19" y1="16" x2="19" y2="12"/></svg>,
    "Low Carb","Menos carboidrato"],
] as [Dieta, React.ReactNode, string, string][]).map(([v,ic,lb,sub]) => (
  <button key={v} className={styles.qBtn + (dieta===v ? " " + styles.qBtnActive : "")} onClick={()=>setDieta(v)}>
    <span className={styles.qBtnIcon}>{ic}</span>
    <span className={styles.qBtnLabel}>{lb}</span>
    <span className={styles.qBtnSub}>{sub}</span>
  </button>
))}
                ] as [Dieta,string,string,string][]).map(([v,ic,lb,sub]) => (
                  <button key={v} className={styles.qBtn + (dieta===v ? " " + styles.qBtnActive : "")} onClick={()=>setDieta(v)}>
                    <span className={styles.qBtnIcon}>{ic}</span>
                    <span className={styles.qBtnLabel}>{lb}</span>
                    <span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}>
                <span className={styles.qNum}>03.</span>
                <span className={styles.qLabel}>Quantas refeicoes hoje?</span>
              </div>
              <div className={styles.mealsGrid}>
                {([[1,"OMAD"],[2,"16:8"],[3,"Classico"],[4,"+Lanches"],[5,"Fracionado"]] as [number,string][]).map(([v,sub]) => (
                  <button key={v} className={styles.mealBtn + (refeicoes===v ? " " + styles.qBtnActive : "")} onClick={()=>setRefeicoes(v)}>
                    <span className={styles.mealNum}>{v}</span>
                    <span className={styles.mealSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {erro && <div className={styles.errMsg}>{erro}</div>}

            <button
              className={styles.btnPrimary + (!canGenerate ? " " + styles.btnDisabled : "")}
              disabled={!canGenerate}
              onClick={gerarPlano}
            >
              Gerar meu plano
            </button>
          </div>
        )}

        {screen === "loading" && (
          <div className={styles.loadWrap}>
            <div className={styles.spinnerWrap}>
              <div className={styles.spinner} />
            </div>
            <div className={styles.loadTitle}>Montando seu plano...</div>
            <div className={styles.loadSub}>Buscando receitas e fotos dos pratos</div>
          </div>
        )}

        {screen === "plan" && plano && (
          <div className="fade-up">
            <div className={styles.planHeader}>
              <div className={styles.metaRow}>
                <span className={styles.tag}>{objetivo ? OBJETIVO_LABELS[objetivo] : ""}</span>
                <span className={styles.tag}>{dieta ? DIETA_LABELS[dieta] : ""}</span>
                <span className={styles.tag + " " + styles.tagWarm}>
                  {refeicoes} {refeicoes === 1 ? "refeicao" : "refeicoes"}
                </span>
              </div>
              <h2 className={styles.planTitle}>{plano.titulo}</h2>
              <p className={styles.planSub}>{plano.subtitulo}</p>
            </div>

            <div className={styles.macrosCard}>
              {([
                ["calorias_totais","kcal"],
                ["proteinas_g","proteina"],
                ["carboidratos_g","carbs"],
                ["gorduras_g","gorduras"]
              ] as [keyof Plano,string][]).map(([k,lbl]) => (
                <div key={lbl} className={styles.macroItem}>
                  <span className={styles.macroVal}>
                    {plano[k] as number}{k !== "calorias_totais" ? "g" : ""}
                  </span>
                  <span className={styles.macroLbl}>{lbl}</span>
                </div>
              ))}
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>💡</div>
              <div>
                <div className={styles.tipTitle}>Dica do dia</div>
                <p className={styles.tipText}>{plano.dica_do_dia}</p>
              </div>
            </div>

            {plano.refeicoes.map((r, i) => (
              <div key={i} className={styles.mealCard}>
                <div className={styles.mealHead} onClick={() => setOpenMeal(openMeal === i ? -1 : i)}>
                  <div className={styles.mealIconWrap}>{MEAL_ICONS[i] || "🍽️"}</div>
                  <div className={styles.mealInfo}>
                    <div className={styles.mealName}>{r.nome}</div>
                    <div className={styles.mealTime}>{r.horario} - {r.prato}</div>
                  </div>
                  <div className={styles.mealKcal}>{r.calorias}<span className={styles.kcalUnit}> kcal</span></div>
                  <div className={styles.chevron + (openMeal === i ? " " + styles.chevronOpen : "")}>v</div>
                </div>
                {openMeal === i && (
                  <div className={styles.mealBody}>
                    {r.foto_url ? (
                      <img src={r.foto_url} alt={r.prato} className={styles.dishPhoto} />
                    ) : (
                      <div className={styles.dishPhotoPlaceholder}>🍽️</div>
                    )}
                    <div className={styles.mealBodyContent}>
                      <div className={styles.dishTitle}>{r.prato}</div>
                      <p className={styles.dishDesc}>{r.descricao}</p>
                      <div className={styles.sectionLabel}>Ingredientes</div>
                      <ul className={styles.ingList}>
                        {r.ingredientes.map((ing, j) => {
                          const key = i + "-" + j;
                          const isSwapped = swapped[key];
                          return (
                            <li key={j} className={styles.ingItem}>
                              <div className={styles.ingLeft}>
                                <span className={styles.dot} />
                                <span>{isSwapped ? ing.substituto : ing.item}</span>
                              </div>
                              <button
                                className={styles.swapBtn + (isSwapped ? " " + styles.swapped : "")}
                                onClick={() => toggleSwap(i, j)}
                              >
                                {isSwapped ? "original" : "substituir"}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                      <div className={styles.sectionLabel}>Modo de preparo</div>
                      <div className={styles.prepSteps}>
                        {(r.preparo || []).map((passo, k) => (
                          <div key={k} className={styles.prepStep}>
                            <div className={styles.stepNum}>{k + 1}</div>
                            <span>{passo}</span>
                          </div>
                        ))}
                      </div>
                      <div className={styles.miniMacros}>
                        <span className={styles.mm}>Proteina: <strong>{r.proteinas_g}g</strong></span>
                        <span className={styles.mm}>Carbs: <strong>{r.carboidratos_g}g</strong></span>
                        <span className={styles.mm}>Gorduras: <strong>{r.gorduras_g}g</strong></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a
              href="https://pay.cakto.com.br/3763j6f_853173"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPro}
            >
              Assinar NutriJejum Pro - R$ 19,90/mes
            </a>

            <div className={styles.actionRow}>
              <button className={styles.btnSecondary} onClick={() => setScreen("onboarding")}>
                Refazer
              </button>
              <button className={styles.btnPrimary} onClick={gerarPlano}>
                Novo plano
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
