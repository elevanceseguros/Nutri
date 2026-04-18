"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import styles from "../page.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      setMessage("Erro: " + error.message);
      setLoading(false);
    } else {
      setSent(true);
      setLoading(false);
    }
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></div>
        <div className={styles.badge}>Beta</div>
      </header>

      <main className={styles.main}>
        <div className="fade-up" style={{ maxWidth: '460px', margin: '0 auto' }}>

          {!sent ? (
            <>
              <div className={styles.heroEyebrow}>
                <div className={styles.heroLine} />
                <span className={styles.heroEyebrowText}>Acesso à plataforma</span>
              </div>

              <h1 className={styles.heroTitle} style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
                Entre no <em className={styles.heroEm}>Nutry.life</em>
              </h1>
              <p className={styles.heroSub} style={{ marginBottom: '2rem' }}>
                Acesse substituições de ingredientes e gere planos ilimitados todo dia.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
                {[
                  { icon: '🔄', text: 'Substitua ingredientes com 1 clique' },
                  { icon: '♾️', text: 'Planos ilimitados todo dia' },
                  { icon: '🎯', text: 'Cardápios para seu objetivo específico' },
                ].map((b, i) => (
                  <div key={i} className={styles.premiumFeatureItem} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.1rem' }}>{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>

              <div className={styles.qBlock} style={{ marginBottom: '1rem' }}>
                <div className={styles.qLabelRow} style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                  <span className={styles.qNum}>→</span>
                  <span className={styles.qLabel}>Seu e-mail</span>
                </div>
                <input
                  type="email"
                  placeholder="voce@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin(e as any)}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    fontSize: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '14px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                    color: '#111827',
                    fontWeight: 500,
                  }}
                  onFocus={e => e.target.style.borderColor = '#22c55e'}
                  onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              {message && <div className={styles.errMsg}>{message}</div>}

              <button
                onClick={handleLogin}
                disabled={loading || !email}
                className={`${styles.btnPrimary} ${(!email || loading) ? styles.btnDisabled : ""}`}
              >
                {loading ? "Enviando..." : "Entrar →"}
              </button>

              <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#9ca3af', textAlign: 'center', fontWeight: 500, lineHeight: 1.5 }}>
                Vamos enviar um link de acesso para o seu e-mail. Sem senha, sem complicação. ✉️
              </p>

              <a href="/" style={{ display: 'block', textAlign: 'center', marginTop: '1.25rem', fontSize: '0.85rem', color: '#6b7280', fontWeight: 700, textDecoration: 'none' }}>
                ← Voltar e gerar meu plano grátis
              </a>
            </>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📬</div>
                <h2 className={styles.planTitle}>Verifique seu e-mail!</h2>
                <p className={styles.planSub} style={{ marginTop: '0.5rem' }}>
                  Enviamos um link de acesso para <strong style={{ color: '#111827' }}>{email}</strong>.<br />
                  Clique nele para entrar no Nutry.life.
                </p>
              </div>

              <div className={styles.tipCard}>
                <div className={styles.tipIcon}>💡</div>
                <div>
                  <div className={styles.tipTitle}>Não encontrou?</div>
                  <div className={styles.tipText}>Verifique a pasta de spam ou lixo eletrônico.</div>
                </div>
              </div>

              <button
                onClick={() => setSent(false)}
                className={styles.btnSecondary}
              >
                ← Usar outro e-mail
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
}
