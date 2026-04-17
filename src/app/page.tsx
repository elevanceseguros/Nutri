"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

// --- TIPAGENS GLOBAIS ---
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

// --- NOVOS ÍCONES PREMIUM (MODERNOS E GROSSOS) ---
function IcoEmagrecer() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/>
    </svg>
  );
}
function IcoMassa() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 17.5l11-11M14 4.5l5.5 5.5M4.5 14l5.5 5.5M2 11l2 2M11 2l2 2"/>
    </svg>
  );
}
function IcoManutencao() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
function IcoSaude() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  );
}
function IcoOnivoro() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-4 0-7 3-7 7 0 3 2 5.5 5 6.5V21h4v-4.5c3-1 5-3.5 5-6.5 0-4-3-7-7-7z"/>
      <path d="M12 21v-4.5"/>
    </svg>
  );
}
function IcoVegetariano() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function IcoVegano() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 014 13V5h8a7 7 0 017 7v8h-8z"/><path d="M11 20v-8"/>
    </svg>
  );
}
function IcoLowCarb() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="13" rx="7" ry="9"/><path d="M12 13a2 2 0 100-4 2 2 0 000 4z"/><path d="M12 4V2"/>
    </svg>
  );
}

// Ícones exclusivos para a Linha 3 (Refeições)
function IcoJejum1() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  );
}
function IcoJejum2() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l-2 4"/>
    </svg>
  );
}
function IcoPrato() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
    </svg>
  );
}
function IcoLanche() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20a8 8 0 100-16 8 8 0 000 16zM12 2v4"/><path d="M10 8h4"/>
    </svg>
  );
}
function IcoVarios() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 3.17a2 2 0 01-1.84 0l-7.17-3.17a2 2 0 010-3.66l7.17-3.17a2 2 0 011.84 0l7.17 3.17a2 2 0 010 3.66z"/>
      <path d="M3.41 17.59l7.67 3.39a2 2 0 001.84 0l7.67-3.39"/>
    </svg>
  );
}

// --- DADOS FIXOS EXTRAÍDOS ---
const OBJETIVO_LABELS: Record<Objetivo, string> = {
  emagrecer: "Emagrecimento", massa: "Ganho de Massa",
  manutencao: "Manutenção", saude: "Saúde Geral",
};

const DIETA_LABELS: Record<Dieta, string> = {
  onivoro: "Onívoro", vegetariano: "Vegetariano",
  vegano: "Vegano", lowcarb: "Low Carb",
};

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
  { v: 1, ic: IcoJejum1, sub: "Jejum Extremo" },
  { v: 2, ic: IcoJejum2, sub: "Jejum 16h" },
  { v: 3, ic: IcoPrato, sub: "Padrão Diário" },
  { v: 4, ic: IcoLanche, sub: "Com Lanchinhos" },
  { v: 5, ic: IcoVarios, sub: "A cada 3 horas" }
];

const MACRO_ITEMS: { key: keyof Plano; label: string }[] = [
  { key: "calorias_totais", label: "kcal" },
  { key: "proteinas_g", label: "proteína" },
  { key: "carboidratos_g", label: "carbs" },
  { key: "gorduras_g", label: "gorduras" }
];

export default function Home() {
  const [objetivo, setObjetivo] = useState<Objetivo | null>(null);
  const [dieta, setDieta] = useState<Dieta | null>(null);
  const [refeicoes, setRefeicoes] = useState<number | null>(null);
  const [screen, setScreen] = useState<Screen>("onboarding");
  const [plano, setPlano] = useState<Plano | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [openMeal, setOpenMeal] = useState<number>(0);
  
  const [modalType, setModalType] = useState<ModalType>(null);
  const [billing, setBilling] = useState<BillingType>("anual");

  const canGenerate = objetivo && dieta && refeicoes;

  const currentPrice = billing === "mensal" ? "19" : "9";
  const currentCents = billing === "mensal" ? ",97" : ",99";
  const currentLink = billing === "mensal" 
    ? "https://pay.cakto.com.br/3763j6f_853173" 
    : "https://pay.cakto.com.br/bv6bu58"; 

  async function gerarPlano() {
    if (!objetivo || !dieta || !refeicoes) return;
    setErro(null);
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
    } catch (err) {
      setErro("Não consegui gerar o plano. Tente novamente.");
      setScreen("onboarding");
    }
  }

  function handleSwapClick() { setModalType("swap"); }
  function handleNewPlanClick() { setModalType("new"); }
  function closeModal() { setModalType(null); }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          Nutry<span className={styles.logoAccent}>.life</span>
        </div>
        <div className={styles.badge}>Beta</div>
      </header>

      <main className={styles.main}>

        {/* --- TELA 1: ONBOARDING --- */}
        {screen === "onboarding" && (
          <div className="fade-up">
            <div className={styles.heroEyebrow}>
              <div className={styles.heroLine} />
              <span className={styles.heroEyebrowText}>Inteligência Artificial Nutricional</span>
            </div>
            <h1 className={styles.heroTitle}>
              A sua <em className={styles.heroEm}>dieta perfeita</em><br />
              feita em segundos.
            </h1>
            <p className={styles.heroSub}>
              Chega de dúvidas sobre o que comer. Selecione suas preferências abaixo e nossa IA criará um cardápio completo, focado no seu objetivo.
            </p>

            <div className={styles.qBlock}>
              <div className={styles.qLabelRow}>
                <span className={styles.qNum}>01.</span>
                <span className={styles.qLabel}>Qual é o seu objetivo?</span>
              </div>
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
              <div className={styles.qLabelRow}>
                <span className={styles.qNum}>02.</span>
                <span className={styles.qLabel}>Preferência alimentar</span>
              </div>
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
              <div className={styles.qLabelRow}>
                <span className={styles.qNum}>03.</span>
                <span className={styles.qLabel}>Quantas refeições hoje?</span>
              </div>
              <div className={styles.mealsGrid}>
                {MEAL_OPTIONS.map(({ v, ic: Ic, sub }) => (
                  <button key={v} className={`${styles.mealBtn} ${refeicoes === v ? styles.qBtnActive : ""}`} onClick={() => setRefeicoes(v)}>
                    <span className={styles.mealBtnIcon}><Ic /></span>
                    <span className={styles.mealNum}>{v}</span>
                    <span className={styles.mealSub}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {erro && <div className={styles.errMsg}>{erro}</div>}

            <button
              className={`${styles.btnPrimary} ${!canGenerate ? styles.btnDisabled : ""}`}
              disabled={!canGenerate}
              onClick={gerarPlano}
            >
              Gerar meu plano
            </button>
          </div>
        )}

        {/* --- TELA 2: LOADING --- */}
        {screen === "loading" && (
          <div className={styles.loadWrap}>
            <div className={styles.spinnerWrap}>
              <div className={styles.spinner} />
            </div>
            <div className={styles.loadTitle}>Montando seu plano...</div>
            <div className={styles.loadSub}>Analisando combinações e macros para você</div>
          </div>
        )}

        {/* --- TELA 3: RESULTADO --- */}
        {screen === "plan" && plano && (
          <div className="fade-up">
            <div className={styles.planHeader}>
              <div className={styles.metaRow}>
                <span className={styles.tag}>{objetivo ? OBJETIVO_LABELS[objetivo] : ""}</span>
                <span className={styles.tag}>{dieta ? DIETA_LABELS[dieta] : ""}</span>
                <span className={`${styles.tag} ${styles.tagWarm}`}>
                  {refeicoes} {refeicoes === 1 ? "refeição" : "refeições"}
                </span>
              </div>
              <h2 className={styles.planTitle}>{plano.titulo}</h2>
              <p className={styles.planSub}>{plano.subtitulo}</p>
            </div>

            <div className={styles.macrosCard}>
              {MACRO_ITEMS.map(({ key, label }) => (
                <div key={label} className={styles.macroItem}>
                  <span className={styles.macroVal}>
                    {plano[key] as number}{key !== "calorias_totais" ? "g" : ""}
                  </span>
                  <span className={styles.macroLbl}>{label}</span>
                </div>
              ))}
            </div>

            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                    <IcoPrato />
                  </div>
                  <div className={styles.mealInfo}>
                    <div className={styles.mealName}>{r.nome}</div>
                    <div className={styles.mealTime}>{r.horario} - {r.prato}</div>
                  </div>
                  <div className={styles.mealKcal}>{r.calorias}<span className={styles.kcalUnit}> kcal</span></div>
                  <div className={`${styles.chevron} ${openMeal === i ? styles.chevronOpen : ""}`}>▼</div>
                </div>
                {openMeal === i && (
                  <div className={styles.mealBody}>
                    {r.foto_url ? (
                      <img src={r.foto_url} alt={r.prato} className={styles.dishPhoto} />
                    ) : (
                      <div className={styles.dishPhotoPlaceholder}>
                        <IcoPrato />
                      </div>
                    )}
                    <div className={styles.mealBodyContent}>
                      <div className={styles.dishTitle}>{r.prato}</div>
                      <p className={styles.dishDesc}>{r.descricao}</p>
                      <div className={styles.sectionLabel}>Ingredientes</div>
                      <ul className={styles.ingList}>
                        {r.ingredientes.map((ing, j) => {
                          return (
                            <li key={j} className={styles.ingItem}>
                              <div className={styles.ingLeft}>
                                <span className={styles.dot} />
                                <span>{ing.item}</span>
                              </div>
                              <button
                                className={styles.swapBtn}
                                onClick={handleSwapClick}
                              >
                                substituir
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
                        <span className={styles.mm}>Proteína: <strong>{r.proteinas_g}g</strong></span>
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>Geração de planos <strong>ilimitados</strong></span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  <span><strong>Substituição inteligente</strong> de ingredientes</span>
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>Modo de preparo detalhado para todas as refeições</span>
                </li>
              </ul>

              {/* SELETOR MENSAL/ANUAL */}
              <div className={styles.billingToggle}>
                <button 
                  className={`${styles.toggleBtn} ${billing === "mensal" ? styles.toggleBtnActive : ""}`}
                  onClick={() => setBilling("mensal")}
                >
                  Mensal
                </button>
                <button 
                  className={`${styles.toggleBtn} ${billing === "anual" ? styles.toggleBtnActive : ""}`}
                  onClick={() => setBilling("anual")}
                >
                  Anual <span className={styles.badgeDiscount}>-50%</span>
                </button>
              </div>

              <div className={styles.premiumPrice}>
                <span className={styles.priceCurrency}>R$</span>
                <span className={styles.priceValue}>{currentPrice}</span>
                <span className={styles.priceCents}>{currentCents}</span>
                <span className={styles.pricePeriod}>/mês</span>
              </div>
              
              {billing === "anual" && (
                <div className={styles.annualNote}>cobrado R$ 119,97 por ano</div>
              )}

              <a
                href={currentLink}
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
              <button className={styles.btnPrimary} onClick={handleNewPlanClick}>
                Gerar Novo Plano
              </button>
            </div>
          </div>
        )}

        {/* --- MODAL PRO (PAYWALL DINÂMICO) --- */}
        {modalType && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <button className={styles.modalClose} onClick={closeModal}>✕</button>
              
              <div className={styles.modalIcon}>
                {modalType === "swap" ? "✨" : "🔒"}
              </div>
              
              <h3 className={styles.modalTitle}>Recurso Premium</h3>
              
              {modalType === "swap" ? (
                <p className={styles.modalText}>
                  A <strong>substituição inteligente de ingredientes</strong> analisa o prato e sugere a melhor alternativa mantendo os macros exatos.
                </p>
              ) : (
                <p className={styles.modalText}>
                  Você já atingiu seu limite de <strong>1 plano gratuito por semana</strong>. A geração ilimitada de cardápios é um benefício exclusivo.
                </p>
              )}

              <p className={styles.modalTextHighlight}>
                Escolha seu plano do Nutry.life Pro:
              </p>

              {/* SELETOR MENSAL/ANUAL NO MODAL */}
              <div className={styles.billingToggle}>
                <button 
                  className={`${styles.toggleBtn} ${billing === "mensal" ? styles.toggleBtnActive : ""}`}
                  onClick={() => setBilling("mensal")}
                >
                  Mensal
                </button>
                <button 
                  className={`${styles.toggleBtn} ${billing === "anual" ? styles.toggleBtnActive : ""}`}
                  onClick={() => setBilling("anual")}
                >
                  Anual <span className={styles.badgeDiscount}>-50%</span>
                </button>
              </div>

              <div className={styles.premiumPrice} style={{marginBottom: "16px"}}>
                <span className={styles.priceCurrency}>R$</span>
                <span className={styles.priceValue}>{currentPrice}</span>
                <span className={styles.priceCents}>{currentCents}</span>
                <span className={styles.pricePeriod}>/mês</span>
              </div>

              <a
                href={currentLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.premiumBtn}
              >
                Desbloquear Agora
              </a>
            </div>
          </div>
        )}
        {/* --- FIM MODAL PRO --- */}
      </main>
    </>
  );
}
