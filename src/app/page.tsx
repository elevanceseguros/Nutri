"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import styles from "./page.module.css";

// --- Ícones (SVG para não precisar de bibliotecas extras) ---
const Sparkles = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);

const RefreshCcw = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21v-5h5"/></svg>
);

export default function Home() {
  // --- Estados de Autenticação ---
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // --- Estados da Aplicação ---
  const [screen, setScreen] = useState("objective");
  const [objective, setObjective] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [dietPlan, setDietPlan] = useState<any>(null);
  const [showPaywall, setShowPaywall] = useState(false);

  // --- Lógica de Segurança e Verificação de Plano ---
  useEffect(() => {
    const checkUserAndPlan = async (sessionUser: any) => {
      if (!sessionUser) {
        setUser(null);
        setIsPro(false);
        return;
      }

      setUser(sessionUser);

      // Busca o plano na tabela 'profiles' (conforme seu print)
      const { data: perfil, error } = await supabase
        .from("profiles") 
        .select("plano")
        .eq("id", sessionUser.id)
        .single();

      if (!error && perfil?.plano === "pro") {
        setIsPro(true);
      } else {
        setIsPro(false);
      }
    };

    // Inicialização
    supabase.auth.getSession().then(({ data: { session } }) => {
      checkUserAndPlan(session?.user);
      setLoadingAuth(false);
    });

    // Escuta mudanças de login/logout em tempo real
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
    
    // Simulação de resposta da IA
    setTimeout(() => {
      setDietPlan({
        calorias: "2.150 kcal",
        refeicoes: [
          { nome: "Café da Manhã", prato: "Crepioca de Frango com Requeijão", ingredientes: ["1 ovo", "2 colheres de goma", "Frango desfiado"] },
          { nome: "Almoço", prato: "Patinho Moído com Arroz Integral e Feijão", ingredientes: ["120g de carne", "100g de arroz", "80g de feijão"] },
          { nome: "Jantar", prato: "Tilápia Grelhada com Legumes no Vapor", ingredientes: ["150g de peixe", "Cenoura", "Abobrinha"] }
        ]
      });
      setIsGenerating(false);
      setScreen("plan");
    }, 1800);
  };

  const handleSwap = (index: number) => {
    if (!isPro) {
      setShowPaywall(true);
      return;
    }
    // Lógica permitida apenas para PRO
    const newPlan = { ...dietPlan };
    newPlan.refeicoes[index].prato = "🔄 Opção Alternativa Gerada";
    setDietPlan(newPlan);
  };

  if (loadingAuth) {
    return <div className={styles.main} style={{ justifyContent: 'center' }}>Carregando acesso seguro...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Header com Status de Login */}
      <header className={styles.header}>
        <div className={styles.logo}>
          Nutry<span className={styles.logoAccent}>.life</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {user ? (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span className={styles.tag} style={{ 
                background: isPro ? 'linear-gradient(90deg, #22c55e, #10b981)' : '#eee',
                color: isPro ? '#fff' : '#666',
                fontWeight: 'bold'
              }}>
                {isPro ? "🚀 ACESSO PRO" : "PLANO FREE"}
              </span>
              <button onClick={handleLogout} className={styles.swapBtn} style={{ padding: '5px 10px' }}>Sair</button>
            </div>
          ) : (
            <a href="/login" className={styles.btnPrimary} style={{ padding: '8px 20px', fontSize: '0.9rem', textDecoration: 'none' }}>Entrar</a>
          )}
          <div className={styles.badge}>Beta</div>
        </div>
      </header>

      <main className={styles.main}>
        {screen === "objective" ? (
          <div className="fade-up" style={{ textAlign: "center", maxWidth: "600px" }}>
            <h1 className={styles.heroTitle}>
              Sua dieta perfeita <br />
              <span className={styles.logoAccent}>feita em segundos.</span>
            </h1>
            <p className={styles.heroSub}>
              Selecione suas preferências e nossa IA criará um cardápio completo, focado no seu objetivo.
            </p>

            <div className={styles.inputContainer}>
              <textarea
                className={styles.mainInput}
                placeholder="Ex: Quero ganhar massa muscular com foco em alimentos baratos..."
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
              />
              <button 
                className={styles.btnPrimary} 
                onClick={handleGenerate}
                disabled={isGenerating || !objective}
              >
                {isGenerating ? "Processando..." : "Gerar Cardápio Agora"}
                {!isGenerating && <Sparkles />}
              </button>
            </div>
          </div>
        ) : (
          <div className="fade-up" style={{ width: "100%", maxWidth: "800px" }}>
             <button className={styles.swapBtn} onClick={() => setScreen("objective")} style={{ marginBottom: '20px' }}>← Criar outro plano</button>
             
             <div className={styles.dietCard}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                  <h2 style={{ margin: 0 }}>Cardápio Sugerido</h2>
                  <span className={styles.tag}>{dietPlan?.calorias}</span>
                </div>

                {dietPlan?.refeicoes.map((ref: any, idx: number) => (
                  <div key={idx} className={styles.mealRow}>
                    <div style={{ flex: 1 }}>
                      <span className={styles.mealTime}>{ref.nome}</span>
                      <h3 className={styles.mealName}>{ref.prato}</h3>
                      <p style={{ fontSize: '0.9rem', color: '#666' }}>{ref.ingredientes.join(", ")}</p>
                    </div>
                    <button className={styles.swapBtn} onClick={() => handleSwap(idx)}>
                      <RefreshCcw /> {isPro ? "Substituir" : "Bloqueado"}
                    </button>
                  </div>
                ))}
             </div>

             {/* Banner de Upgrade para quem é FREE */}
             {!isPro && (
               <div className={styles.premiumBanner} style={{ marginTop: '40px', border: '2px solid #22c55e' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🚀</div>
                  <h3>Torne-se Nutry.life PRO</h3>
                  <p>Libere substituições ilimitadas e gere cardápios sem restrições.</p>
                  <button className={styles.btnPrimary} style={{ width: 'auto', padding: '12px 40px' }}>
                    Fazer Upgrade Agora
                  </button>
               </div>
             )}
          </div>
        )}
      </main>

      {/* MODAL DE SEGURANÇA (PAYWALL) */}
      {showPaywall && (
        <div className={styles.modalOverlay} onClick={() => setShowPaywall(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🔒</div>
            <h2 className={styles.heroTitle} style={{ fontSize: '1.8rem' }}>Recurso Premium</h2>
            <p>Para trocar alimentos e personalizar ainda mais sua dieta, você precisa de uma conta **PRO**.</p>
            <button className={styles.btnPrimary} style={{ marginTop: '20px' }}>Ver Planos</button>
            <button className={styles.swapBtn} onClick={() => setShowPaywall(false)} style={{ marginTop: '10px', width: '100%' }}>Continuar no Free</button>
          </div>
        </div>
      )}
    </div>
  );
}
