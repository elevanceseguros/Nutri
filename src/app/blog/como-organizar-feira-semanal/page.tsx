import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Como Organizar a Feira Semanal de Forma Saudável e Sem Desperdício | Nutry.life",
  description: "Comprar bem é o primeiro passo para comer bem. Veja como planejar a feira ou o mercado da semana com base no cardápio, evitar desperdício de alimentos e economizar sem abrir mão da qualidade.",
  keywords: "como organizar feira semanal, planejamento de compras alimentação, evitar desperdício de comida",
  openGraph: {
    title: "Como Organizar a Feira Semanal de Forma Saudável e Sem Desperdício | Nutry.life",
    description: "Comprar bem é o primeiro passo para comer bem. Veja como planejar a feira ou o mercado da semana com base no cardápio, evitar desperdício de alimentos e economizar sem abrir mão da qualidade.",
    url: "https://nutry.life/blog/como-organizar-feira-semanal",
  },
};

export default function Post() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Link href="/login" className={styles.btnEntrar}>Entrar</Link>
          <div className={styles.badge}>Beta</div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="fade-up">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "2rem", fontSize: "0.85rem", color: "#9ca3af", fontWeight: 600 }}>
            <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>Início</Link>
            <span>→</span>
            <Link href="/blog" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</Link>
            <span>→</span>
            <span style={{ color: "#22c55e" }}>Planejamento</span>
          </div>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Planejamento</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>22 de junho de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 6 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Como Organizar a Feira Semanal de Forma Saudável e Sem Desperdício
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>A maior parte do sucesso de uma alimentação saudável acontece antes de cozinhar — na hora de planejar e fazer as compras. Veja como organizar a feira ou o mercado da semana para comer melhor, gastar menos e desperdiçar menos comida.</p>
          </div>
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🛒</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio personalizado com a Nutry.life</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta seu cardápio da semana com lista de compras organizada, pronta para levar no mercado ou compartilhar.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Por que o planejamento muda tudo</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem" }}>Quando a compra é feita sem planejamento, duas coisas tendem a acontecer: compra-se mais do que se vai usar (gerando desperdício de alimentos perecíveis) ou compra-se menos do que o necessário (gerando idas extras ao mercado e compras por impulso, geralmente de itens menos saudáveis e mais caros por unidade). Planejar o cardápio da semana antes de ir ao mercado resolve os dois problemas de uma vez — e ainda reduz o tempo gasto decidindo "o que vou comer hoje" no meio da semana.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>A lógica por categorias</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>Organizar a lista de compras por categoria (hortifruti, proteínas, grãos/cereais, laticínios, temperos, itens de despensa) torna a compra mais rápida e reduz esquecimentos. Outra dica é separar mentalmente os alimentos por "validade": itens perecíveis (frutas, verduras, carnes frescas) devem ser calculados para a quantidade real que será consumida em poucos dias, enquanto itens de despensa (grãos, enlatados, temperos secos) podem ser comprados em quantidade maior, já que duram mais.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Como aplicar no dia a dia</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Defina o cardápio da semana antes de fazer a lista — isso evita comprar ingredientes que depois não combinam entre si", "Verifique o que já tem em casa antes de sair, para não duplicar itens que já estão na despensa ou geladeira", "Compre vegetais e frutas em quantidades que realmente serão consumidas em 3 a 5 dias, complementando com uma segunda compra menor no meio da semana se necessário", "Aproveite vegetais que estão murchando: refogados, sopas e caldos são ótimos destinos para evitar desperdício", "Tenha sempre alguns itens de despensa (grãos, temperos, conservas) como base para refeições de emergência em dias mais corridos"].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.1rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#22c55e", fontWeight: 900, fontSize: "1rem" }}>✓</span>
                  <span style={{ fontSize: "0.88rem", color: "#166534", fontWeight: 600, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", borderRadius: "20px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#166534", marginBottom: "0.5rem" }}>Quer seu cardápio da semana com lista de compras pronta?</div>
            <div style={{ fontSize: "0.9rem", color: "#166534", marginBottom: "1.5rem" }}>A Nutry.life gera seu cardápio da semana em segundos, com lista de compras organizada por categoria.</div>
            <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.9rem 2rem", fontSize: "1rem" }}>Criar meu plano agora →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
