"use client";

import { useState } from "react";
import React from "react";
import styles from "./page.module.css";

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

function IcoEmagrecer() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c0 0-3.5 4-3.5 7.5a3.5 3.5 0 007 0C15.5 6 12 2 12 2z"/>
      <line x1="12" y1="13" x2="12" y2="18"/>
      <line x1="9.5" y1="17" x2="14.5" y2="17"/>
    </svg>
  );
}
function IcoMassa() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="6" height="9" rx="1"/>
      <line x1="4" y1="9" x2="20" y2="9"/>
      <circle cx="4" cy="7" r="2"/>
      <circle cx="20" cy="7" r="2"/>
    </svg>
  );
}
function IcoManutencao() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="3" x2="12" y2="8"/>
      <line x1="12" y1="16" x2="12" y2="21"/>
      <line x1="3" y1="12" x2="8" y2="12"/>
      <line x1="16" y1="12" x2="21" y2="12"/>
    </svg>
  );
}
function IcoSaude() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  );
}
function IcoOnivoro() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-4 0-7 3-7 7 0 3 2 5.5 5 6.5V21h4v-4.5c3-1 5-3.5 5-6.5 0-4-3-7-7-7z"/>
    </svg>
  );
}
function IcoVegetariano() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="5" ry="9"/>
      <line x1="12" y1="3" x2="12" y2="21"/>
    </svg>
  );
}
function IcoVegano() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C7 3 3 8 3 12c0 4 3 7 7 8"/>
      <path d="M12 3c5 0 9 5 9 9 0 4-3 7-7 8"/>
      <line x1="12" y1="3" x2="12" y2="21"/>
    </svg>
  );
}
function IcoLowCarb() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="15" y2="12"/>
      <line x1="3" y1="18" x2="9" y2="18"/>
      <circle cx="19" cy="17" r="2"/>
      <line x1="19" y1="15" x2="19" y2="10"/>
    </svg>
  );
}

const OBJETIVOS = [
  { v: "emagrecer" as Objetivo, ic: IcoEmagrecer, lb: "Emagrecer", sub: "Deficit calorico" },
  { v: "massa" as Objetivo, ic: IcoMassa, lb: "Ganhar massa", sub: "Superavit proteico" },
  { v: "manutencao" as Objetivo, ic: IcoManutencao, lb: "Manutencao", sub: "Saude geral" },
  { v: "saude" as Objetivo, ic: IcoSaude, lb: "Saude", sub: "Bem-estar" },
];

const DIETAS = [
  { v: "onivoro" as Dieta, ic: IcoOnivoro, lb: "Onivoro", sub: "Sem restricao" },
  { v: "vegetariano" as Dieta, ic: IcoVegetariano, lb: "Vegetariano", sub: "Sem carnes" },
  { v: "vegano" as Dieta, ic: IcoVegano, lb: "Vegano", sub: "100% vegetal" },
  { v: "lowcarb" as Dieta, ic: IcoLowCarb, lb: "Low Carb", sub: "Menos carboidrato" },
];

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
                {OBJETIVOS.map(({ v, ic: Ic, lb, sub }) => (
                  <button key={v} className={styles.qBtn + (objetivo === v ? " " + styles.qBtnActive : "")} onClick={() => setObjetivo(v)}>
                    <span className={styles.qBtnIcon}><Ic /></span>
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
                {DIETAS.map(({ v, ic: Ic, lb, sub }) => (
                  <button key={v} className={styles.qBtn + (dieta === v ? " " + styles.qBtnActive : "")} onClick={() => setDieta(v)}>
                    <span className={styles.qBtnIcon}><Ic /></span>
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
                  <button key={v} className={styles.mealBtn + (refeicoes === v ? " " + styles.qBtnActive : "")} onClick={() => setRefeicoes(v)}>
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
              <div className={styles.tipIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <div>
                <div className={styles.tipTitle}>Dica do dia</div>
                <p className={styles.tipText}>{plano.dica_do_dia}</p>
              </div>
            </div>

            {plano.refeicoes.map((r, i) => (
              <div key={i} className={styles.mealCard}>
                <div className={styles.mealHead} onClick={() => setOpenMeal(openMeal === i ? -1 : i)}>
                  <div className={styles.mealIconWrap}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                    </svg>
                  </div>
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
                      <div className={styles.dishPhotoPlaceholder}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9"/>
                          <path d="M8 12h8M12 8v8"/>
                        </svg>
                      </div>
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

            {/* --- INÍCIO DO BANNER PREMIUM --- */}
            <div className={styles.premiumBanner}>
              <div className={styles.premiumHeader}>
                <h3>Alcance seus objetivos mais rápido 🚀</h3>
                <p>Você acabou de ver uma amostra. Desbloqueie o potencial completo do seu corpo com o Nutry.life Pro.</p>
              </div>
              
              <ul className={styles.premiumFeatures}>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Geração de planos <strong>ilimitados</strong>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  <strong>Substituição inteligente</strong> de ingredientes
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  Modo de preparo detalhado para todas as refeições
                </li>
              </ul>

              <div className={styles.premiumPrice}>
                <span className={styles.priceCurrency}>R$</span>
                <span className={styles.priceValue}>19</span>
                <span className={styles.priceCents}>,90</span>
                <span className={styles.pricePeriod}>/mês</span>
              </div>

              <a
                href="https://pay.cakto.com.br/3763j6f_853173"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.premiumBtn}
              >
                Assinar Nutry.life Pro Agora
              </a>
              <p className={styles.premiumGuarantee}>🔒 Pagamento seguro via Cakto • Cancele quando quiser</p>
            </div>
            {/* --- FIM DO BANNER PREMIUM --- */}

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
