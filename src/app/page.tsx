"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./page.module.css";

// --- ÍCONES (SVG para manter o design limpo) ---
const Target = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const Dumbbell = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11"/><path d="m11.8 5.8 5.2 5.2"/><path d="m5.8 11.8 5.2 5.2"/><path d="M2 10V5a2 2 0 0 1 2-2h5"/><path d="M15 21h5a2 2 0 0 0 2-2v-5"/><path d="M15 3h5a2 2 0 0 1 2 2v5"/><path d="M2 14v5a2 2 0 0 0 2 2h5"/></svg>;
const Heart = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const Sparkles = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>;

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);
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
    };
    checkUser();
  }, []);

  const startGeneration = (selected: string) => {
    setObjective(selected);
    setIsGenerating(true);
    // Simulação de IA
    setTimeout(() => {
      setDietPlan({
        calorias: "2.250 kcal",
        refeicoes: [
          { hora: "08:00", nome: "Café da Manhã", prato: "Crepioca Proteica" },
          { hora: "12:00", nome: "Almoço", prato: "Frango com Batata Doce" },
          { hora: "19:00", nome: "Jantar", prato: "Salmão com Legumes" }
        ]
      });
      setIsGenerating(false);
      setScreen("plan");
    }, 2500);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></div>
        <div className={styles.headerRight}>
          {user ? (
            <div className={styles.userStatus}>
              <span className={styles.tag} style={{ background: isPro ? '#22c55e' : '#f3f4f6', color: isPro ? '#fff' : '#666' }}>
                {isPro ? "🚀 PRO" : "PLANO FREE"}
              </span>
              <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())} className={styles.swapBtn}>Sair</button>
            </div>
          ) : (
            <a href="/login" className={styles.btnPrimary} style={{ padding: '8px 20px', fontSize: '0.9rem', textDecoration: 'none' }}>Entrar</a>
          )}
        </div>
      </header>

      <main className={styles.main}>
        {screen === "objective" ? (
          <div className="fade-up" style={{ textAlign: 'center', width: '100%' }}>
            <span className={styles.badge}>Nova IA 3.1</span>
            <h1 className={styles.heroTitle}>Sua dieta <span className={styles.logoAccent}>perfeita</span> em segundos.</h1>
            <p className={styles.heroSub}>Escolha seu objetivo para a IA gerar seu cardápio personalizado.</p>

            <div className={styles.gridObjectives} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
              <div className={styles.objCard} onClick={() => startGeneration("Emagrecer")} style={{ cursor: 'pointer', padding: '30px', border: '1px solid #eee', borderRadius: '20px', transition: '0.3s' }}>
                <Target />
                <h3 style={{ marginTop: '15px' }}>Emagrecer</h3>
                <p>Perda de peso com saúde</p>
              </div>
              <div className={styles.objCard} onClick={() => startGeneration("Ganhar Massa")} style={{ cursor: 'pointer', padding: '30px', border: '1px solid #eee', borderRadius: '20px', transition: '0.3s' }}>
                <Dumbbell />
                <h3 style={{ marginTop: '15px' }}>Ganhar Massa</h3>
                <p>Foco em hipertrofia</p>
              </div>
              <div className={styles.objCard} onClick={() => startGeneration("Saúde & Longevidade")} style={{ cursor: 'pointer', padding: '30px', border: '1px solid #eee', borderRadius: '20px', transition: '0.3s' }}>
                <Heart />
                <h3 style={{ marginTop: '15px' }}>Saúde</h3>
                <p>Bem-estar e disposição</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="fade-up" style={{ width: '100%', maxWidth: '800px' }}>
            <button onClick={() => setScreen("objective")} className={styles.swapBtn} style={{ marginBottom: '20px' }}>← Voltar</button>
            <div className={styles.dietCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h2>Seu Plano: {objective}</h2>
                <span className={styles.tag}>{dietPlan?.calorias}</span>
              </div>
              {dietPlan?.refeicoes.map((meal: any, i: number) => (
                <div key={i} className={styles.mealRow} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#22c55e', fontWeight: 'bold' }}>{meal.hora}</span>
                    <h3 style={{ margin: '5px 0' }}>{meal.prato}</h3>
                  </div>
                  <button className={styles.swapBtn} onClick={() => !isPro && setShowPaywall(true)}>Substituir</button>
                </div>
              ))}
            </div>
            {!isPro && (
              <div className={styles.premiumBanner} style={{ marginTop: '30px', background: '#f0fff4', border: '1px solid #22c55e', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
                <h3>🚀 Desbloqueie o Nutry.life PRO</h3>
                <p>Substitua pratos ilimitados e salve suas dietas.</p>
                <button className={styles.btnPrimary} style={{ marginTop: '15px' }}>Ver Planos PRO</button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* MODAL DE LOADING */}
      {isGenerating && (
        <div className={styles.modalOverlay} style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ textAlign: 'center' }}>
            <div className={styles.spinner}></div>
            <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#22c55e' }}>IA processando seu plano...</p>
          </div>
        </div>
      )}

      {/* MODAL DE PAYWALL */}
      {showPaywall && (
        <div className={styles.modalOverlay} onClick={() => setShowPaywall(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()} style={{ background: '#fff', padding: '40px', borderRadius: '20px', textAlign: 'center', maxWidth: '400px' }}>
            <div style={{ fontSize: '3rem' }}>🔒</div>
            <h2>Recurso Exclusivo</h2>
            <p>A personalização de ingredientes está disponível apenas no plano PRO.</p>
            <button className={styles.btnPrimary} style={{ marginTop: '20px', width: '100%' }}>Fazer Upgrade</button>
          </div>
        </div>
      )}
    </div>
  );
}
