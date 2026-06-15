import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Ômega-3: Benefícios Reais e as Melhores Fontes Além do Peixe | Nutry.life",
  description: "Ômega-3 ajuda no coração, no cérebro e na inflamação — mas as doses e fontes corretas fazem toda a diferença. Veja o que a ciência confirma e como incluir no dia a dia, com ou sem peixe.",
  keywords: "omega 3 beneficios, fontes de omega 3, omega 3 vegetariano, EPA DHA",
  openGraph: {
    title: "Ômega-3: Benefícios Reais e as Melhores Fontes Além do Peixe | Nutry.life",
    description: "Ômega-3 ajuda no coração, no cérebro e na inflamação — mas as doses e fontes corretas fazem toda a diferença. Veja o que a ciência confirma e como incluir no dia a dia, com ou sem peixe.",
    url: "https://nutry.life/blog/omega-3-beneficios-e-fontes",
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
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>16 de junho de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 7 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Ômega-3: Benefícios Reais e as Melhores Fontes Além do Peixe
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>O ômega-3 está entre os nutrientes mais estudados — e mais mal compreendidos. Entenda o que a ciência realmente confirma sobre EPA, DHA e ALA, e quais fontes funcionam de verdade, com ou sem peixe na dieta.</p>
          </div>
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🐟</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio personalizado com a Nutry.life</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar completo com base no seu objetivo, restrições e preferências — incluindo boas fontes de ômega-3 no seu perfil.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>O que a ciência diz</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem" }}>Existem três tipos principais de ômega-3: EPA e DHA (encontrados em peixes e algas) e ALA (encontrado em fontes vegetais como linhaça e chia). EPA e DHA têm o conjunto de evidências mais robusto para saúde cardiovascular, redução de triglicerídeos e função cerebral. O ALA precisa ser convertido pelo corpo em EPA/DHA, e essa conversão é limitada — geralmente menos de 10% do ALA consumido se transforma em EPA, e uma fração ainda menor em DHA.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Os mitos mais comuns</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>"Linhaça substitui peixe para ômega-3" é um mito parcial: a linhaça fornece ALA, mas não é equivalente a EPA/DHA em termos de efeito biológico comprovado, especialmente para saúde cardiovascular e cerebral. Outro mito é achar que "qualquer quantidade já faz efeito" — os estudos que mostram benefício geralmente usam doses de 1 a 3 gramas diários de EPA+DHA combinados, quantidade difícil de atingir só com alimentação esporádica de peixe.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Como aplicar no dia a dia</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Inclua peixes gordos (sardinha, salmão, atum) 2 a 3 vezes por semana, que são as fontes mais ricas e biodisponíveis de EPA e DHA", "Para vegetarianos e veganos, considere suplementação de ômega-3 derivado de algas, que fornece EPA e DHA diretamente", "Sementes de chia e linhaça são boas fontes de ALA e trazem outros benefícios (fibras, saciedade), mas não substituem EPA/DHA isoladamente", "Nozes também contribuem com ALA e são uma forma prática de variar as fontes ao longo da semana"].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.1rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#22c55e", fontWeight: 900, fontSize: "1rem" }}>✓</span>
                  <span style={{ fontSize: "0.88rem", color: "#166534", fontWeight: 600, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", borderRadius: "20px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#166534", marginBottom: "0.5rem" }}>Quer um plano alimentar com boas fontes de ômega-3?</div>
            <div style={{ fontSize: "0.9rem", color: "#166534", marginBottom: "1.5rem" }}>A Nutry.life gera seu cardápio da semana em segundos, com base no seu objetivo e preferências.</div>
            <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.9rem 2rem", fontSize: "1rem" }}>Criar meu plano agora →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
