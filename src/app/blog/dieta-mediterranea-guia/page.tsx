import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Dieta Mediterrânea: Guia Completo Para Começar Sem Complicação | Nutry.life",
  description: "A dieta mediterrânea é uma das mais estudadas do mundo, com evidências sólidas para saúde do coração e longevidade. Veja os princípios, alimentos-base e como adaptar à realidade brasileira.",
  keywords: "dieta mediterranea, dieta mediterranea como funciona, alimentação mediterranea brasil",
  openGraph: {
    title: "Dieta Mediterrânea: Guia Completo Para Começar Sem Complicação | Nutry.life",
    description: "A dieta mediterrânea é uma das mais estudadas do mundo, com evidências sólidas para saúde do coração e longevidade. Veja os princípios, alimentos-base e como adaptar à realidade brasileira.",
    url: "https://nutry.life/blog/dieta-mediterranea-guia",
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
            <span style={{ color: "#22c55e" }}>Dietas</span>
          </div>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Dietas</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>17 de junho de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 7 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Dieta Mediterrânea: Guia Completo Para Começar Sem Complicação
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>Mais do que uma dieta de restrição, a mediterrânea é um padrão alimentar com décadas de estudos associando-a a menor risco cardiovascular e maior longevidade. Veja os princípios e como adaptar à rotina e aos ingredientes do Brasil.</p>
          </div>
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🫒</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio personalizado com a Nutry.life</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar completo com base no seu objetivo, restrições e preferências — incluindo opções no estilo mediterrâneo com ingredientes brasileiros.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>O que a ciência diz</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem" }}>A dieta mediterrânea é um dos padrões alimentares com mais estudos de longo prazo associando-a a benefícios — incluindo redução de risco cardiovascular, melhora de marcadores inflamatórios e até associação com menor incidência de declínio cognitivo. Diferente de dietas restritivas, ela não é definida por "o que cortar", mas por um padrão de proporções: muita planta (vegetais, frutas, legumes, grãos integrais), azeite de oliva como principal fonte de gordura, peixe regularmente, carnes vermelhas com moderação e laticínios em quantidade moderada.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Adaptando ao Brasil</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>A boa notícia é que muitos princípios da dieta mediterrânea já existem na culinária brasileira ou são fáceis de adaptar: feijão e arroz integral cumprem papel parecido aos grãos integrais e legumes mediterrâneos; azeite de oliva pode substituir óleos refinados no preparo; peixes como sardinha e tilápia são acessíveis e nutritivos; e a abundância de frutas e vegetais frescos no Brasil é uma vantagem real em relação a muitos países.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Como aplicar no dia a dia</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Troque óleo de cozinha por azeite de oliva extra virgem para temperos e finalização (evite frituras em altas temperaturas com azeite)", "Inclua leguminosas (feijão, lentilha, grão-de-bico) diariamente — são a base proteica vegetal do padrão mediterrâneo", "Coma peixe 2 a 3 vezes por semana, priorizando opções acessíveis como sardinha e tilápia", "Reduza carne vermelha para 1 a 2 vezes por semana, sem precisar eliminar completamente", "Use frutas frescas como sobremesa padrão, deixando doces processados para ocasiões especiais"].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.1rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#22c55e", fontWeight: 900, fontSize: "1rem" }}>✓</span>
                  <span style={{ fontSize: "0.88rem", color: "#166534", fontWeight: 600, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", borderRadius: "20px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#166534", marginBottom: "0.5rem" }}>Quer um cardápio no estilo mediterrâneo, adaptado ao Brasil?</div>
            <div style={{ fontSize: "0.9rem", color: "#166534", marginBottom: "1.5rem" }}>A Nutry.life gera seu cardápio da semana em segundos, com base no seu objetivo e preferências.</div>
            <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.9rem 2rem", fontSize: "1rem" }}>Criar meu plano agora →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
