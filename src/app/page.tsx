"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./page.module.css";

const Sparkles = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);

const RefreshCcw = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21v-5h5"/></svg>
);

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
    const checkUserAndPlan = async (sessionUser: any) => {
      if (!sessionUser) {
        setUser(null);
        setIsPro(false);
        return;
      }
      setUser(sessionUser);
      const { data: perfil } = await supabase
        .from("profiles") 
        .select("plano")
        .eq("id", sessionUser.id)
        .single();

      if (perfil?.plano === "pro") setIsPro(true);
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      checkUserAndPlan(session?.user);
      setLoadingAuth(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      checkUserAndPlan(session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const handleGenerate = () => {
    if (!objective) return;
    setIsGenerating(true);
    setTimeout(() => {
      setDietPlan({
        calorias: "2.150 kcal",
        refeicoes: [
          { nome: "Café da Manhã", prato: "Crepioca de Frango com Requeijão", ingredientes: ["1 ovo", "2 colheres de goma", "Frango desfiado"] },
          { nome: "Almoço", prato: "Patinho Moído com Arroz Integral", ingredientes: ["120g de carne", "100g de arroz", "Salada"] },
          { nome: "Jantar", prato: "Tilápia Grelhada com Legumes", ingredientes: ["150g de peixe", "Cenoura", "Abobrinha"] }
        ]
      });
      setIsGenerating(false);
      setScreen("plan");
    }, 1800);
  };

  if (loadingAuth) return <div className={styles.main}>Carregando...</div>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {user ? (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span className={styles.tag} style={{ background: isPro ? '#22c55e' : '#eee', color: isPro ? '#fff' : '#666' }}>
                {isPro ? "🚀 PRO" : "FREE"}
              </span>
              <button onClick={handleLogout} className={styles.swapBtn}>Sair</button>
            </div>
          ) : (
            <a href="/login" className={styles.btnPrimary} style={{ padding: '8px 20px', textDecoration: 'none' }}>Entrar</a>
          )}
          <div className={styles.badge}>Beta</div>
        </div>
      </header>

      <main className={styles.main}>
        {screen === "objective" ? (
          <div style={{ textAlign: "center", maxWidth: "600px" }}>
            <h1 className={styles.heroTitle}>Sua dieta <span className={styles.logoAccent}>em segundos.</span></h1>
            <div className={styles.inputContainer}>
              <textarea
                className={styles.mainInput}
                placeholder="Ex: Quero emagrecer comendo comida brasileira..."
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
              />
              <button className={styles.btnPrimary} onClick={handleGenerate} disabled={isGenerating || !objective}>
                {isGenerating ? "Criando..." : "Gerar Cardápio"}
                {!isGenerating && <Sparkles />}
              </button>
            </div>
          </div>
        ) : (
          <div style={{ width: "100%", maxWidth: "800px" }}>
             <button className={styles.swapBtn} onClick={() => setScreen("objective")}>← Voltar</button>
             <div className={styles.dietCard}>
                {dietPlan?.refeicoes.map((ref: any, idx: number) => (
                  <div key={idx} className={styles.mealRow}>
                    <div style={{ flex: 1 }}>
                      <span className={styles.mealTime}>{ref.nome}</span>
                      <h3 className={styles.mealName}>{ref.prato}</h3>
                    </div>
                    <button className={styles.swapBtn} onClick={() => !isPro && setShowPaywall(true)}>
                      <RefreshCcw /> Substituir
                    </button>
                  </div>
                ))}
             </div>
             {!isPro && (
               <div className={styles.premiumBanner}>
                  <h3>Vire PRO</h3>
                  <button className={styles.btnPrimary}>Upgrade</button>
               </div>
             )}
          </div>
        )}
      </main>

      {showPaywall && (
        <div className={styles.modalOverlay} onClick={() => setShowPaywall(false)}>
          <div className={styles.modalContent}>
            <h2>Recurso PRO 🔒</h2>
            <p>Substituições ilimitadas apenas para assinantes.</p>
            <button className={styles.btnPrimary}>Assinar</button>
          </div>
        </div>
      )}
    </div>
  );
}
