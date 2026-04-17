"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./page.module.css";

// --- ÍCONES ---
const Target = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const Utensils = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>;
const Calendar = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);
  
  // Estados do Fluxo de Passos
  const [step, setStep] = useState(1);
  const [objective, setObjective] = useState("");
  const [dietType, setDietType] = useState("");
  const [mealsCount, setMealsCount] = useState("");
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [screen, setScreen] = useState("setup"); // setup ou plan
  const [showPaywall, setShowPaywall] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        const { data: perfil } = await supabase.from("profiles").select("plano").eq("id", session.user.id).single();
        if (perfil?.plano === "pro") setIsPro(true);
      }
    };
    checkUser();
  }, []);

  const handleFinalGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setScreen("plan");
    }, 2500);
  };

  return (
    <div className={styles.container}>
      {/* HEADER COM BOTÃO DE ENTRAR ELEGANTE */}
      <header className={styles.header}>
        <div className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></div>
        <div className={styles.headerRight}>
          {user ? (
            <div className={styles.userStatus}>
              <span className={styles.tag} style={{ background: isPro ? '#22c55e' : '#f3f4f6', color: isPro ? '#fff' : '#666' }}>
                {isPro ? "🚀 PRO" : "FREE"}
              </span>
              <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())} className={styles.swapBtn}>Sair</button>
            </div>
          ) : (
            <a href="/login" className={styles.btnPrimary} style={{ padding: '8px 20px', fontSize: '0.85rem', textDecoration: 'none', borderRadius: '8px' }}>Entrar</a>
          )}
        </div>
      </header>

      <main className={styles.main}>
        {screen === "setup" ? (
          <div className="fade-up" style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
            <h1 className={styles.heroTitle}>Monte sua dieta <span className={styles.logoAccent}>inteligente</span></h1>
            
            {/* STEP 1: OBJETIVO */}
            <div style={{ marginTop: '40px', textAlign: 'left' }}>
              <h3 className={styles.stepTitle}><Target /> 1. Qual seu objetivo?</h3>
              <div className={styles.qGrid}>
                {["Emagrecer", "Ganhar Massa", "Saúde"].map((opt) => (
                  <button key={opt} className={objective === opt ? styles.qBtnActive : styles.qBtn} onClick={() => setObjective(opt)}>{opt}</button>
                ))}
              </div>
            </div>

            {/* STEP 2: TIPO DE DIETA */}
            <div style={{ marginTop: '30px', textAlign: 'left' }}>
              <h3 className={styles.stepTitle}><Utensils /> 2. Preferência alimentar?</h3>
              <div className={styles.qGrid}>
                {["Onívoro", "Vegetariano", "Vegano", "Keto"].map((opt) => (
                  <button key={opt} className={dietType === opt ? styles.qBtnActive : styles.qBtn} onClick={() => setDietType(opt)}>{opt}</button>
                ))}
              </div>
            </div>

            {/* STEP 3: REFEIÇÕES */}
            <div style={{ marginTop: '30px', textAlign: 'left' }}>
              <h3 className={styles.stepTitle}><Calendar /> 3. Quantas refeições por dia?</h3>
              <div className={styles.qGrid}>
                {["3 refeições", "4 refeições", "5 refeições", "6 refeições"].map((opt) => (
                  <button key={opt} className={mealsCount === opt ? styles.qBtnActive : styles.qBtn} onClick={() => setMealsCount(opt)}>{opt}</button>
                ))}
              </div>
            </div>

            {/* BOTÃO GERAR PLANO (Só ativa se tudo estiver selecionado) */}
            <button 
              className={styles.btnPrimary} 
              style={{ marginTop: '50px', width: '100%', padding: '20px', fontSize: '1.1rem' }}
              disabled={!objective || !dietType || !mealsCount}
              onClick={handleFinalGenerate}
            >
              Gerar Plano Personalizado 🚀
            </button>
          </div>
        ) : (
          /* TELA DO PLANO GERADO */
          <div className="fade-up" style={{ width: '100%', maxWidth: '800px' }}>
            <button onClick={() => setScreen("setup")} className={styles.swapBtn} style={{ marginBottom: '20px' }}>← Refazer Configuração</button>
            <div className={styles.dietCard}>
              <h2>Seu Plano: {objective} ({dietType})</h2>
              <p style={{ color: '#666', marginBottom: '20px' }}>{mealsCount} focadas no seu resultado.</p>
              
              <div className={styles.mealRow}>
                <div><span className={styles.mealTime}>08:00</span><h3>Café da Manhã</h3><p>Omelete fit com {dietType === 'Vegano' ? 'Tofu' : 'Ovos'}</p></div>
                <button className={styles.swapBtn} onClick={() => !isPro && setShowPaywall(true)}>Substituir</button>
              </div>
              <div className={styles.mealRow}>
                <div><span className={styles.mealTime}>12:00</span><h3>Almoço</h3><p>Proteína grelhada com legumes e arroz</p></div>
                <button className={styles.swapBtn} onClick={() => !isPro && setShowPaywall(true)}>Substituir</button>
              </div>
            </div>

            {!isPro && (
              <div className={styles.premiumBanner}>
                <h3>🚀 Nutry.life PRO</h3>
                <p>Libere o plano completo e substituições ilimitadas.</p>
                <button className={styles.btnPrimary}>Assinar Agora</button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* LOADING OVERLAY */}
      {isGenerating && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.spinner}></div>
            <p>Criando sua dieta {dietType}...</p>
          </div>
        </div>
      )}

      {/* PAYWALL MODAL */}
      {showPaywall && (
        <div className={styles.modalOverlay} onClick={() => setShowPaywall(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: '2.5rem' }}>🔒</div>
            <h2>Recurso PRO</h2>
            <p>Assine para personalizar cada ingrediente do seu plano.</p>
            <button className={styles.btnPrimary} style={{ marginTop: '15px' }}>Ver Planos</button>
          </div>
        </div>
      )}
    </div>
  );
}
