"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./page.module.css";

// --- Ícones ---
const Target = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const Dumbbell = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11"/><path d="m11.8 5.8 5.2 5.2"/><path d="m5.8 11.8 5.2 5.2"/><path d="M2 10V5a2 2 0 0 1 2-2h5"/><path d="M15 21h5a2 2 0 0 0 2-2v-5"/><path d="M15 3h5a2 2 0 0 1 2 2v5"/><path d="M2 14v5a2 2 0 0 0 2 2h5"/></svg>;
const Heart = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const RefreshCcw = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21v-5h5"/></svg>;

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [screen, setScreen] = useState("objective");
  const [objective, setObjective] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [dietPlan, setDietPlan] = useState<any>(null);
  const [showPaywall, setShowPaywall] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        const { data: perfil } = await supabase.from("profiles").select("plano").eq("id", session.user.id).single();
        if (perfil?.plano === "pro") setIsPro(true);
      }
      setLoadingAuth(false);
    };
    checkUser();
  }, []);

  const handleGenerate = (type: string) => {
    setObjective(type);
    setIsGenerating(true);
    setTimeout(() => {
      setDietPlan({
        calorias: "2.100 kcal",
        refeicoes: [
          { hora: "08:00", nome: "Café da Manhã", prato: "Omelete com Queijo e Tomate" },
          { hora: "12:00", nome: "Almoço", prato: "Frango Grelhado, Arroz e Brócolis" },
          { hora: "19:00", nome: "Jantar", prato: "Peixe Assado com Salada Verde" }
        ]
      });
      setIsGenerating(false);
      setScreen("plan");
    }, 2000);
  };

  if (loadingAuth) return <div className={styles.loading}>Carregando Nutry.life...</div>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></div>
        <div className={styles.headerActions}>
          {user ? (
            <div className={styles.userStatus}>
              <span className={styles.tag}>{isPro ? "🚀 PRO" : "FREE"}</span>
              <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())} className={styles.swapBtn}>Sair</button>
            </div>
          ) : (
            <a href="/login" className={styles.btnEntrar}>Entrar</a>
          )}
          <div className={styles.badge}>Beta</div>
        </div>
      </header>

      <main className={styles.main}>
        {screen === "objective" ? (
          <div className="fade-up">
            <span className={styles.preTitle}>Inteligência Artificial Nutricional</span>
            <h1 className={styles.heroTitle}>A sua <span className={styles.logoAccent}>dieta perfeita</span> feita em segundos.</h1>
            <p className={styles.heroSub}>Selecione seu objetivo abaixo para começarmos.</p>

            <div className={styles.gridObjectives}>
              <div className={styles.objCard} onClick={() => handleGenerate("Emagrecer")}>
                <Target />
                <h3>Emagrecer</h3>
                <p>Queima de gordura eficiente</p>
              </div>
              <div className={styles.objCard} onClick={() => handleGenerate("Massa Muscular")}>
                <Dumbbell />
                <h3>Ganhar Massa</h3>
                <p>Hipertrofia e força</p>
              </div>
              <div className={styles.objCard} onClick={() => handleGenerate("Saúde")}>
                <Heart />
                <h3>Saúde</h3>
                <p>Longevidade e bem-estar</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="fade-up" style={{ width: '100%', maxWidth: '800px' }}>
            <div className={styles.dietHeader}>
              <h2>Seu Plano para {objective}</h2>
              <button onClick={() => setScreen("objective")} className={styles.swapBtn}>Trocar Objetivo</button>
            </div>

            <div className={styles.dietCard}>
              {dietPlan.refeicoes.map((meal: any, i: number) => (
                <div key={i} className={styles.mealRow}>
                  <div>
                    <span className={styles.mealTime}>{meal.hora} - {meal.nome}</span>
                    <h3 className={styles.mealName}>{meal.prato}</h3>
                  </div>
                  <button className={styles.swapBtn} onClick={() => !isPro ? setShowPaywall(true) : null}>
                    <RefreshCcw /> Substituir
                  </button>
                </div>
              ))}
            </div>

            {!isPro && (
              <div className={styles.premiumBanner}>
                <h3>Quer personalizar tudo?</h3>
                <p>No plano PRO você substitui pratos e salva seu histórico.</p>
                <button className={styles.btnPrimary}>Ver Planos PRO</button>
              </div>
            )}
          </div>
        )}
      </main>

      {showPaywall && (
        <div className={styles.modalOverlay} onClick={() => setShowPaywall(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2>Função Exclusiva PRO 🔒</h2>
            <p>Para substituir refeições e personalizar ingredientes, assine o plano PRO.</p>
            <button className={styles.btnPrimary} style={{ marginTop: '15px' }}>Assinar Agora</button>
          </div>
        </div>
      )}

      {isGenerating && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.spinner}></div>
            <p>Nossa IA está calculando sua dieta...</p>
          </div>
        </div>
      )}
    </div>
  );
}
