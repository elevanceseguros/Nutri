"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";
import styles from "../page.module.css";
import Logo from "../../components/Logo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modo, setModo] = useState<"entrar" | "cadastrar">("entrar");
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState<string | null>(null);

  async function loginGoogle() {
    setLoadingGoogle(true);
    setErro(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://nutry.life",
      },
    });
    if (error) setErro("Erro ao entrar com Google. Tente novamente.");
    setLoadingGoogle(false);
  }

  async function loginEmail() {
    if (!email || !senha) { setErro("Preencha email e senha."); return; }
    setLoading(true);
    setErro(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
    if (error) {
      setErro("Email ou senha incorretos.");
    } else {
      window.location.href = "/";
    }
    setLoading(false);
  }

  async function cadastrarEmail() {
    if (!email || !senha) { setErro("Preencha email e senha."); return; }
    if (senha.length < 6) { setErro("A senha precisa ter pelo menos 6 caracteres."); return; }
    setLoading(true);
    setErro(null);
    const { error } = await supabase.auth.signUp({
      email,
      password: senha,
      options: { emailRedirectTo: "https://nutry.life" }
    });
    if (error) {
      setErro("Erro ao criar conta. Tente novamente.");
    } else {
      setSucesso("Conta criada! Verifique seu email para confirmar o cadastro.");
    }
    setLoading(false);
  }

  async function resetSenha() {
    if (!email) { setErro("Digite seu email primeiro."); return; }
    setLoading(true);
    setErro(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://nutry.life",
    });
    if (error) {
      setErro("Erro ao enviar email. Tente novamente.");
    } else {
      setSucesso("Email de redefinição enviado! Verifique sua caixa de entrada.");
    }
    setLoading(false);
  }

  const inputStyle = {
    width: '100%', padding: '0.9rem 1rem', fontSize: '1rem',
    border: '2px solid #e5e7eb', borderRadius: '14px', outline: 'none',
    fontFamily: 'inherit', fontWeight: 500, color: '#111827', background: 'white',
    boxSizing: 'border-box' as const, transition: 'border-color 0.2s',
  };

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div className={styles.badge}>Beta</div>
      </header>

      <main className={styles.main}>
        <div className="fade-up" style={{ maxWidth: '420px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              {modo === "entrar" ? "👋" : "🎉"}
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              {modo === "entrar" ? "Bem-vindo de volta!" : "Criar conta"}
            </h1>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', fontWeight: 500 }}>
              {modo === "entrar"
                ? "Já é assinante PRO? Entre para acessar seus benefícios."
                : "Crie sua conta para acessar o Nutry.life PRO."}
            </p>
          </div>

          {/* Botão Google */}
          <button
            onClick={loginGoogle}
            disabled={loadingGoogle}
            style={{
              width: '100%', padding: '0.9rem 1rem', fontSize: '1rem',
              border: '2px solid #e5e7eb', borderRadius: '14px', background: 'white',
              fontFamily: 'inherit', fontWeight: 700, color: '#374151',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: '10px', marginBottom: '1.5rem',
              transition: 'all 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#22c55e')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
          >
            {loadingGoogle ? (
              <div className={styles.spinner} style={{ width: '20px', height: '20px' }} />
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            )}
            {loadingGoogle ? "Entrando..." : "Continuar com Google"}
          </button>

          {/* Divisor */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
            <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>ou</span>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
          </div>

          {/* Formulário email/senha */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
                Email
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#22c55e'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
                Senha
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#22c55e'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                onKeyDown={e => e.key === 'Enter' && (modo === "entrar" ? loginEmail() : cadastrarEmail())}
              />
            </div>
          </div>

          {/* Erro e sucesso */}
          {erro && (
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.88rem', color: '#dc2626', fontWeight: 600 }}>
              ❌ {erro}
            </div>
          )}
          {sucesso && (
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.88rem', color: '#166534', fontWeight: 600 }}>
              ✅ {sucesso}
            </div>
          )}

          {/* Botão principal */}
          <button
            onClick={modo === "entrar" ? loginEmail : cadastrarEmail}
            disabled={loading}
            className={styles.btnPrimary}
            style={{ width: '100%', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Aguarde..." : modo === "entrar" ? "Entrar" : "Criar conta"}
          </button>

          {/* Esqueceu a senha */}
          {modo === "entrar" && (
            <button
              onClick={resetSenha}
              style={{ background: 'none', border: 'none', color: '#16a34a', fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer', marginTop: '0.75rem', width: '100%', textAlign: 'center', fontFamily: 'inherit' }}
            >
              Esqueceu a senha?
            </button>
          )}

          {/* Alternar modo */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#6b7280', fontWeight: 500 }}>
            {modo === "entrar" ? (
              <>
                Não tem conta?{" "}
                <button onClick={() => { setModo("cadastrar"); setErro(null); setSucesso(null); }} style={{ background: 'none', border: 'none', color: '#16a34a', fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
                  Criar conta
                </button>
              </>
            ) : (
              <>
                Já tem conta?{" "}
                <button onClick={() => { setModo("entrar"); setErro(null); setSucesso(null); }} style={{ background: 'none', border: 'none', color: '#16a34a', fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
                  Entrar
                </button>
              </>
            )}
          </div>

          {/* Info PRO */}
          <div className={styles.tipCard} style={{ marginTop: '2rem' }}>
            <div className={styles.tipIcon}>💡</div>
            <div>
              <div className={styles.tipTitle}>Use o email da sua compra</div>
              <div className={styles.tipText}>Para ativar o PRO, entre com o mesmo email usado na compra do Cakto.</div>
            </div>
          </div>

        </div>
      </main>
<div style={{ textAlign: 'center', marginTop: '1.5rem', paddingBottom: '2rem' }}>
  <Link href="/privacidade" style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 600, textDecoration: 'none' }}>
    Política de Privacidade
  </Link>
</div>
    </>
  );
}
