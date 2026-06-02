import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Vitamina D: Por Que Quase Todo Brasileiro Tem Deficiência | Nutry.life",
  description: "Mais de 77% dos brasileiros têm deficiência de vitamina D. Veja sintomas, fontes alimentares, exposição solar e quando suplementar.",
  keywords: "vitamina d deficiencia, vitamina d sol, suplementar vitamina d",
  openGraph: {
    title: "Vitamina D: Por Que Quase Todo Brasileiro Tem Deficiência | Nutry.life",
    description: "Mais de 77% dos brasileiros têm deficiência de vitamina D. Veja sintomas, fontes alimentares, exposição solar e quando suplementar.",
    url: "https://nutry.life/blog/vitamina-d-deficiencia",
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
            <span style={{ color: "#22c55e" }}>Nutrição</span>
          </div>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Nutrição</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>27 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 7 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Vitamina D: Por Que Quase Todo Brasileiro Tem Deficiência
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>Mais de 77% dos brasileiros têm deficiência de vitamina D. Veja sintomas, fontes alimentares, exposição solar e quando suplementar.</p>
          </div>
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio personalizado com a Nutry.life</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar completo com base no seu objetivo, restrições e preferências — com receitas brasileiras práticas.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio →</Link>
            </div>
          </div>
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Entendendo o tema</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem" }}>Mais de 77% dos brasileiros têm deficiência de vitamina D. Veja sintomas, fontes alimentares, exposição solar e quando suplementar. A alimentação equilibrada é a base de qualquer resultado sustentável. Pequenas mudanças consistentes superam dietas radicais de curto prazo.</p>
          </div>
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Como aplicar na prática</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Comece com mudanças graduais — uma por semana", "Priorize alimentos in natura e minimamente processados", "Leia os rótulos dos alimentos industrializados", "Mantenha consistência — resultado vem com tempo e constância"].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.1rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#22c55e", fontWeight: 900, fontSize: "1rem" }}>✓</span>
                  <span style={{ fontSize: "0.88rem", color: "#166534", fontWeight: 600, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", borderRadius: "20px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#166534", marginBottom: "0.5rem" }}>Quer um plano alimentar personalizado?</div>
            <div style={{ fontSize: "0.9rem", color: "#166534", marginBottom: "1.5rem" }}>A Nutry.life gera seu cardápio da semana em segundos, com base no seu objetivo e preferências.</div>
            <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.9rem 2rem", fontSize: "1rem" }}>Criar meu plano agora →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
