"use client";

import { useState } from "react";
import styles from "./page.module.css";

type Objetivo = "emagrecer" | "massa" | "manutencao" | "saude";
type Dieta = "onivoro" | "vegetariano" | "vegano" | "lowcarb";
type Screen = "onboarding" | "loading" | "plan";

interface Ingrediente { item: string; substituto: string; }
interface Video { id: string; titulo: string; canal: string; thumb: string; url: string; }
interface Refeicao {
  nome: string; horario: string; emoji: string; prato: string;
  descricao: string; ingredientes: Ingrediente[]; preparo: string[];
  youtube_busca: string; video?: Video;
  calorias: number; proteinas_g: number; carboidratos_g: number; gorduras_g: number;
}
interface Plano {
  titulo: string; subtitulo: string; calorias_totais: number;
  proteinas_g: number; carboidratos_g: number; gorduras_g: number;
  dica_do_dia: string; refeicoes: Refeicao[];
}

const OBJETIVO_LABELS: Record<Objetivo, string> = {
  emagrecer: "Emagrecer 🔥", massa: "Ganhar Massa 💪",
  manutencao: "Manutenção ⚖️", saude: "Saúde 🌿",
};
const DIETA_LABELS: Record<Dieta, string> = {
  onivoro: "Onívoro 🥩", vegetariano: "Vegetariano 🥚",
  vegano: "Vegano 🌱", lowcarb: "Low Carb 🥑",
};

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
      if (!res.ok) throw new Error("Erro na API");
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

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          Nutri<span className={styles.logoAccent}>Jejum</span>
        </div>
        <div className={styles.badge}>BETA</div>
      </header>

      <main className={styles.main}>

        {screen === "onboarding" && (
          <div className="fade-up">
            <div className={styles.heroLabel}>Seu plano de hoje</div>
            <h1 className={styles.heroTitle}>
              Você decide<br />
              <span className={styles.heroEm}>quantas refeições</span><br />
              vai fazer.
            </h1>
            <p className={styles.heroSub}>
              IA monta seu plano com receitas brasileiras reais, modo de preparo e vídeos.
            </p>

            <div className={styles.qBlock}>
              <div className={styles.qLabel}>01 — Objetivo</div>
              <div className={styles.qGrid}>
                {([
                  ["emagrecer","🔥","Emagrecer","Deficit calórico"],
                  ["massa","💪","Ganhar massa","Superávit proteico"],
                  ["manutencao","⚖️","Manutenção","Saúde geral"],
                  ["saude","🌿","Saúde","Bem-estar"],
                ] as [Objetivo,string,string,string][]).map(([v,ic,lb,sub]) => (
                  <button key={v} className={`${styles.qBtn} ${objetivo===v ? styles.qBtnActive : ""}`} onClick={()=>setObjetivo(v)}>
                    <span className={styles.qIcon}>{ic}</span>
                    <span className={styles.qBtnLabel}>{lb}</span>
                    <span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabel}>02 — Dieta</div>
              <div className={styles.qGrid}>
                {([
                  ["onivoro","🥩","Onívoro","Sem restrição"],
                  ["vegetariano","🥚","Vegetariano","Sem carnes"],
                  ["vegano","🌱","Vegano","100% vegetal"],
                  ["lowcarb","🥑","Low Carb","Menos carboidrato"],
                ] as [Dieta,string,string,string][]).map(([v,ic,lb,sub]) => (
                  <button key={v} className={`${styles.qBtn} ${dieta===v ? styles.qBtnActive : ""}`} onClick={()=>setDieta(v)}>
                    <span className={styles.qIcon}>{ic}</span>
                    <span className={styles.qBtnLabel}>{lb}</span>
                    <span className={styles.qBtnSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qBlock}>
              <div className={styles.qLabel}>03 — Refeições hoje</div>
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
              ✨ Gerar meu plano de hoje →
            </button>
          </div>
        )}

        {screen === "loading" && (
          <div className={styles.loadWrap}>
            <div className={styles.spinner} />
            <div className={styles.loadTitle}>Montando seu plano...</div>
            <div className={styles.loadSub}>Buscando receitas e vídeos brasileiros</div>
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
              <div className={styles.tipIcon}>💡</div>
              <div className={styles.tipTitle}>Dica do dia</div>
              <p className={styles.tipText}>{plano.dica_do_dia}</p>
            </div>

            {plano.refeicoes.map((r, i) => (
              <div key={i} className={styles.mealCard}>
                <div className={styles.mealHead} onClick={()=>setOpenMeal(openMeal===i ? -1 : i)}>
                  <div className={styles.mealIcon}>{r.emoji || "🍽️"}</div>
                  <div className={styles.mealInfo}>
                    <div className={styles.mealName}>{r.nome}</div>
                    <div className={styles.mealTime}>{r.horario} · {r.prato}</div>
                  </div>
                  <div className={styles.mealKcal}>{r.calorias}<span className={styles.kcalUnit}> kcal</span></div>
                  <div className={`${styles.chevron} ${openMeal===i ? styles.chevronOpen : ""}`}>▾</div>
                </div>

                {openMeal === i && (
                  <div className={styles.mealBody}>
                    <div className={styles.dishPhotoPlaceholder}>{r.emoji || "🍽️"}</div>

                    <div className={styles.dishTitle}>{r.prato}</div>
                    <p className={styles.dishDesc}>{r.descricao}</p>

                    <div className={styles.ingLabel}>Ingredientes — toque para substituir</div>
                    <ul className={styles.ingList}>
                      {r.ingredientes.map((ing, j) => {
                        const key = `${i}-${j}`;
                        const isSwapped = swapped[key];
                        return (
                          <li key={j} className={styles.ingItem}>
                            <div className={styles.ingLeft}>
                              <span className={styles.dot} />
                              <span>{isSwapped ? ing.substituto : ing.item}</span>
                            </div>
                            <button className={styles.swapBtn} onClick={()=>toggleSwap(i,j)}>
                              {isSwapped ? "↩ original" : "⇄ trocar"}
                            </button>
                          </li>
                        );
                      })}
                    </ul>

                    <div className={styles.prepSection}>
                      <div className={styles.prepTitle}>Modo de preparo</div>
                      <div className={styles.prepSteps}>
                        {(r.preparo || []).map((passo, k) => (
                          <div key={k} className={styles.prepStep}>
                            <div className={styles.stepNum}>{k+1}</div>
                            <span>{passo}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {r.video && (
                      <div className={styles.videoSection}>
                        <div className={styles.videoTitle}>▶ Vídeo no YouTube</div>
                        <a href={r.video.url} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
                          <img src={r.video.thumb} alt={r.video.titulo} className={styles.videoThumb} />
                          <div className={styles.videoInfo}>
                            <div className={styles.videoName}>{r.video.titulo}</div>
                            <div className={styles.videoChannel}>{r.video.canal}</div>
                          </div>
                          <span className={styles.ytIcon}>▶</span>
                        </a>
                      </div>
                    )}

                    <div className={styles.miniMacros}>
                      <span className={styles.mm}>Prot: <strong>{r.proteinas_g}g</strong></span>
                      <span className={styles.mm}>Carbs: <strong>{r.carboidratos_g}g</strong></span>
                      <span className={styles.mm}>Gord: <strong>{r.gorduras_g}g</strong></span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className={styles.actionRow}>
              <button className={styles.btnSecondary} onClick={()=>setScreen("onboarding")}>← Refazer</button>
              <button className={styles.btnPrimary} onClick={gerarPlano}>🔄 Novo plano</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
