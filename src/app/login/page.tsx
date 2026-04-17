"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import styles from "../page.module.css"; // Reutilizando seus estilos

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin, // Volta para a home após o clique
      },
    });

    if (error) {
      setMessage("Erro: " + error.message);
    } else {
      setMessage("Verifique seu e-mail! Enviamos um link de acesso.");
    }
    setLoading(false);
  }

  return (
    <main className={styles.main} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div className="fade-up" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem' }}>Entrar no <br/><span className={styles.logoAccent}>Nutry.life</span></h1>
        <p className={styles.heroSub} style={{ marginBottom: '2rem' }}>
          Digite seu e-mail abaixo. Você receberá um link mágico para acessar sem precisar de senha.
        </p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="email"
            placeholder="seu@email.com"
            required
            className={styles.qBtn} // Usando o estilo dos botões para manter o padrão
            style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', cursor: 'text' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <button 
            type="submit" 
            disabled={loading}
            className={`${styles.btnPrimary} ${loading ? styles.btnDisabled : ""}`}
          >
            {loading ? "Enviando..." : "Enviar Link Mágico"}
          </button>
        </form>

        {message && (
          <p style={{ marginTop: '1.5rem', fontWeight: '700', color: message.includes("Erro") ? "#ef4444" : "#22c55e" }}>
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
