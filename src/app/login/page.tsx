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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>

      {/* Logo */}
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.5px', color: '#111827' }}>
          Nutry<span style={{ color: '#22c55e' }}>.life</span>
        </div>
      </div>

      {!sent ? (
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          maxWidth: '420px',
          width: '100%',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          border: '1px solid #f3f4f6',
        }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🥗</div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.5px', marginBottom: '0.5rem' }}>
              Salve seu plano alimentar
            </h1>
            <p style={{ fontSize: '0.95rem', color: '#6b7280', fontWeight: 500, lineHeight: 1.6 }}>
              Entre para acessar substituições de ingredientes e gerar planos ilimitados.
            </p>
          </div>

          {/* Benefícios */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
            {[
              { icon: '🔄', text: 'Substitua ingredientes com 1 clique' },
              { icon: '♾️', text: 'Gere planos ilimitados todo dia' },
              { icon: '🎯', text: 'Cardápios para seu objetivo específico' },
            ].map((b, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '12px',
                padding: '10px 14px',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#166534',
              }}>
                <span style={{ fontSize: '1.1rem' }}>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#374151', marginBottom: '6px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Seu e-mail
              </label>
              <input
                type="email"
                placeholder="voce@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin(e as any)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  fontSize: '1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                }}
                onFocus={e => e.target.style.borderColor = '#22c55e'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={loading || !email}
              style={{
                width: '100%',
                background: loading || !email ? '#d1fae5' : 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                color: loading || !email ? '#6b7280' : 'white',
                border: 'none',
                borderRadius: '99px',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: 800,
                cursor: loading || !email ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit',
                boxShadow: loading || !email ? 'none' : '0 8px 20px -5px rgba(22, 163, 74, 0.4)',
              }}
            >
              {loading ? "Enviando..." : "Entrar →"}
            </button>
          </div>

          {message && (
            <p style={{ marginTop: '1rem', fontWeight: 700, color: '#ef4444', textAlign: 'center', fontSize: '0.9rem' }}>
              {message}
            </p>
          )}

          <p style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: '#9ca3af', textAlign: 'center', lineHeight: 1.5 }}>
            Vamos enviar um link de acesso para o seu e-mail. Sem senha, sem complicação. ✉️
          </p>
        </div>
      ) : (
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          maxWidth: '420px',
          width: '100%',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          border: '1px solid #f3f4f6',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📬</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', marginBottom: '0.75rem' }}>
            Verifique seu e-mail!
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#6b7280', fontWeight: 500, lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Enviamos um link de acesso para <strong style={{ color: '#111827' }}>{email}</strong>. Clique nele para entrar no Nutry.life.
          </p>
          <div style={{
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '12px',
            padding: '12px 16px',
            fontSize: '0.85rem',
            color: '#166534',
            fontWeight: 600,
          }}>
            💡 Não encontrou? Verifique a pasta de spam.
          </div>
          <button
            onClick={() => setSent(false)}
            style={{
              marginTop: '1.25rem',
              background: 'transparent',
              border: 'none',
              color: '#6b7280',
              fontSize: '0.85rem',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textDecoration: 'underline',
            }}
          >
            Usar outro e-mail
          </button>
        </div>
      )}

      <a href="/" style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#9ca3af', textDecoration: 'none', fontWeight: 600 }}>
        ← Voltar para o início
      </a>
    </div>
  );
}
