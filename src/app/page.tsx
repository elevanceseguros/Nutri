"use client";

import { useState } from "react";
import styles from "./page.module.css";

type Objetivo = "emagrecer" | "massa" | "manutencao" | "saude";
type Dieta = "onivoro" | "vegetariano" | "vegano" | "lowcarb";
type Screen = "onboarding" | "loading" | "plan";

interface Ingrediente { item: string; substituto: string; }
interface Refeicao {
  nome: string; horario: string; emoji: string; prato: string;
  descricao: string; ingredientes: Ingrediente[]; preparo: string[];
  foto_url?: string; youtube_busca: string;
  calorias: number; proteinas_g: number; carboidratos_g: number; gorduras_g: number;
}
interface Plano {
  titulo: string; subtitulo: string; calorias_totais: number;
  proteinas_g: number; carboidratos_g: number; gorduras_g: number;
  dica_do_dia: string; refeicoes: Refeicao[];
}

const OBJETIVO_LABELS: Record<Objetivo, string> = {
  emagrecer: "Emagrecimento", massa: "Ganho de Massa",
  manutencao: "Manutenção", saude: "Saúde Geral",
};
const DIETA_LABELS: Record<Dieta, string> = {
  onivoro: "Onívoro", vegetariano: "Vegetariano",
  vegano: "Vegano", lowcarb: "Low Carb",
};

// SVG Icons
const IconFire = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2c0 0-5 4-5 9a5 5 0 0010 0c0-2-1-4-2-5 0 2-1 3-3 3s-3-2-3-4c0 0 3 1 3-3z"/></svg>;
const IconMuscle = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6.5 6.5c1-1 2.5-1.5 4-1 1 .3 2 1 2.5 2 .5-1 1.5-2 3-2s2.5 1 2.5 2.5c0 1-.5 2-1.5 2.5L19 14c.5 1 .5 2 0 3s-1.5 1.5-2.5 1.5H15l-1 2H10l-1-2H7.5C6.5 18.5 6 18 6 17s.5-1.5 1-2l1.5-3C7 11.5 6 10.5 6 9c0-.5.2-1.5.5-2.5z"/></svg>;
const IconBalance = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M5 7l7-4 7 4M3 17l4-8 4 8M13 17l4-8 4 8M3 17h8M13 17h8"/></svg>;
const IconLeaf = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6 2 3 8 3 12c0 5 4 9 9 9 2 0 4-1 5-2-1-1-2-3-2-5 0-3 2-6 5-7-1-3-4-5-8-5z"/></svg>;
const IconMeat = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8c-3 0-6 2-6 5s2 5 6 5 6-2 6-5-3-5-6-5zM8 13c0-1 .5-2 1-2M19 5l-3 3M5 19l3-3"/></svg>;
const IconEgg = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="13" rx="5" ry="7"/><circle cx="12" cy="13" r="2"/></svg>;
const IconSeed = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22V12M12 12C12 7 8 4 4 4c0 4 2 8 8 8zM12 12c0-5 4-8 8-8 0 4-2 8-8 8z"/></svg>;
const IconAvocado = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="13" rx="6" ry="8"/><circle cx="12" cy="14" r="2.5"/></svg>;
const IconPlate = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>;
const IconLamp = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18h6M12 2a6 6 0 00-3 11.2V15h6v-1.8A6 6 0 0012 2z"/></svg>;

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
      setErro("Não consegui gerar o plano. Tente novamente.");
      setScreen("onboarding");
    }
  }

  function toggleSwap(mealIdx: number, ingIdx: number) {
    const key = `${mealIdx}-${ingIdx}`;
    setSwapped(prev => ({ ...prev, [key]: !prev[key] }));
  }

  const objetivoOpts = [
    { v: "emagrecer" as Objetivo, Icon: IconFire, label: "Emagrecer", sub: "Deficit calórico" },
    { v: "massa" as Objetivo, Icon: IconMuscle, label: "Ganhar massa", sub: "Superávit proteico" },
    { v: "manutencao" as Objetivo, Icon: IconBalance, label: "Manutenção", sub: "Saúde geral" },
    { v: "saude" as Objetivo, Icon: IconLeaf, label: "Saúde", sub: "Bem-estar" },
  ];
  const dietaOpts = [
    { v: "onivoro" as Dieta, Icon: IconMeat, label: "Onívoro", sub: "Sem restrição" },
    { v: "vegetariano" as Dieta, Icon: IconEgg, label: "Vegetariano", sub: "Sem carnes" },
    { v: "vegano" as Dieta, Icon: IconSeed, label: "Vegano", sub: "100% vegetal" },
    { v: "lowcarb" as Dieta, Icon: IconAvocado, label: "Low Carb", sub: "Menos carboidrato" },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          Nutri<span className={styles.logoAccent}>Jejum</span>
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
              Você decide<br />
              <em className={styles.heroEm}>quantas refeições</em><br />
              vai fazer.
            </h1>
            <p className={styles.heroSub}>
              Receitas brasileiras de verdade, com modo de preparo e substituição de ingredientes na hora.
            </p>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}>
                <span className={styles.qNum}>01.</span>
                <span className={styles.qLabel}>Qual é o seu objetivo?</span>
              </div>
              <div className={styles.qGrid}>
                {objetivoOpts.map(({ v, Icon, label, sub }) => (
                  <button key={v} className={`${styles.qBtn} ${objetivo===v ? styles.qBtnActive : ""}`} onClick={()=>setObjetivo(v)}>
                    <div className={styles.qBtnIcon}><Icon /></div>
                    <span className={styles.qBtnLabel}>{label}</span>
                    <span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}>
                <span className={styles.qNum}>02.</span>
                <span className={styles.qLabel}>Preferência alimentar</span>
              </div>
              <div className={styles.qGrid}>
                {dietaOpts.map(({ v, Icon, label, sub }) => (
                  <button key={v} className={`${styles.qBtn} ${dieta===v ? styles.qBtnActive : ""}`} onClick={()=>setDieta(v)}>
                    <div className={styles.qBtnIcon}><Icon /></div>
                    <span className={styles.qBtnLabel}>{label}</span>
                    <span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}>
                <span className={styles.qNum}>03.</span>
                <span className={styles.qLabel}>Quantas refeições hoje?</span>
              </div>
              <div className={styles.mealsGrid}>
                {([[1,"OMAD"],[2,"16:8"],[3,"Clássico"],[4,"+Lanches"],[5,"Fracionado"]] as [number,string][]).map(([v,sub]) => (
                  <button key={v} className={`${styles.mealBtn} ${refeicoes===v ? styles.qBtnActive : ""}`} onClick={()=>setRefeicoes(v)}>
                    <span className={styles.mealNum}>{v}</span>
                    <span className={styles.mealSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {erro && <div className={styles.errMsg}>⚠️ {erro}</div>}

            <button className={`${styles.btnPrimary} ${!canGenerate ? styles.btnDisabled : ""}`} disabled={!canGenerate} onClick={gerarPlano}>
              Gerar meu plano →
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
                <span className={`${styles.tag} ${styles.tagWarm}`}>{refeicoes} refeição{refeicoes && refeicoes > 1 ? "ões" : ""}</span>
              </div>
              <h2 className={styles.planTitle}>{plano.titulo}</h2>
              <p className={styles.planSub}>{plano.subtitulo}</p>
            </div>

            <div className={styles.macrosCard}>
              {([["calorias_totais","kcal"],["proteinas_g","proteína"],["carboidratos_g","carbs"],["gorduras_g","gorduras"]] as [keyof Plano,string][]).map(([k,lbl]) => (
                <div key={lbl} className={styles.macroItem}>
                  <span className={styles.macroVal}>{plano[k] as number}{k!=="calorias_totais"?"g":""}</span>
                  <span className={styles.macroLbl}>{lbl}</span>
                </div>
              ))}
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}><IconLamp /></div>
              <div>
                <div className={styles.tipTitle}>Dica do dia</div>
                <p className={styles.tipText}>{plano.dica_do_dia}</p>
              </div>
            </div>

            {plano.refeicoes.map((r, i) => (
              <div key={i} className={styles.mealCard}>
                <div className={styles.mealHead} onClick={()=>setOpenMeal(openMeal===i ? -1 : i)}>
                  <div className={styles.mealIconWrap}><IconPlate /></div>
                  <div className={styles.mealInfo}>
                    <div className={styles.mealName}>{r.nome}</div>
                    <div className={styles.mealTime}>{r.horario} · {r.prato}</div>
                  </div>
                  <div className={styles.mealKcal}>{r.calorias}<span className={styles.kcalUnit}> kcal</span></div>
                  <div className={`${styles.chevron} ${openMeal===i ? styles.chevronOpen : ""}`}>▾</div>
                </div>

                {openMeal === i && (
                  <div className={styles.mealBody}>
                    {r.foto_url ? (
                      <img src={r.foto_url} alt={r.prato} className={styles.dishPhoto} />
                    ) : (
                      <div className={styles.dishPhotoPlaceholder}>
                        <IconPlate />
                      </div>
                    )}

                    <div className={styles.mealBodyContent}>
                      <div className={styles.dishTitle}>{r.prato}</div>
                      <p className={styles.dishDesc}>{r.descricao}</p>

                      <div className={styles.sectionLabel}>Ingredientes</div>
                      <ul className={styles.ingList}>
                        {r.ingredientes.map((ing, j) => {
                          const key = `${i}-${j}`;
                          const isSwapped = swapped[key];
                          return (
                            <li key={j} className={styles.ingItem}>
                              <div className={styles.ingLeft}>
                                <span className={styles.dot} />
                                <span>{isSwapped ? `↩ ${ing.substituto}` : ing.item}</span>
                              </div>
                              <button
                                className={`${styles.swapBtn} ${isSwapped ? styles.swapped : ""}`}
                                onClick={()=>toggleSwap(i,j)}
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
                            <div className={styles.stepNum}>{k+1}</div>
                            <span>{passo}</span>
                          </div>
                        ))}
                      </div>

                      <div className={styles.miniMacros}>
                        <span className={styles.mm}>Proteína: <strong>{r.proteinas_g}g</strong></span>
                        <span className={styles.mm}>Carbs: <strong>{r.carboidratos_g}g</strong></span>
                        <span className={styles.mm}>Gorduras: <strong>{r.gorduras_g}g</strong></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className={styles.actionRow}>
              <button className={styles.btnSecondary} onClick={()=>setScreen("onboarding")}>← Refazer</button>
              <button className={styles.btnPrimary} onClick={gerarPlano}>Novo plano →</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
