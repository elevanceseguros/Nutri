import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Alimentos Ricos em Ferro: Quais Funcionam de Verdade e Como Absorver Melhor | Nutry.life",
  description: "Carne vermelha não é a única fonte de ferro — mas a forma como você combina os alimentos faz toda a diferença na absorção. Veja as melhores fontes, incluindo opções vegetarianas, e como potencializar.",
  keywords: "alimentos ricos em ferro, ferro vegetariano, como absorver ferro, anemia alimentação",
  openGraph: {
    title: "Alimentos Ricos em Ferro: Quais Funcionam de Verdade e Como Absorver Melhor | Nutry.life",
    description: "Carne vermelha não é a única fonte de ferro — mas a forma como você combina os alimentos faz toda a diferença na absorção. Veja as melhores fontes, incluindo opções vegetarianas, e como potencializar.",
    url: "https://nutry.life/blog/alimentos-ricos-em-ferro",
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
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>19 de junho de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 6 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Alimentos Ricos em Ferro: Quais Funcionam de Verdade e Como Absorver Melhor
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>A deficiência de ferro é uma das mais comuns no mundo, especialmente entre mulheres. Mas comer alimentos ricos em ferro não é suficiente — a forma como você combina os alimentos pode dobrar ou reduzir pela metade a absorção.</p>
          </div>
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🥩</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio personalizado com a Nutry.life</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar completo com base no seu objetivo, restrições e preferências — incluindo boas fontes de ferro no seu perfil.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>O que a ciência diz</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem" }}>Existem dois tipos de ferro na alimentação: o ferro heme (presente em alimentos de origem animal — carnes vermelhas, fígado, frango) e o ferro não-heme (presente em alimentos vegetais — feijão, lentilha, espinafre, grãos integrais). O ferro heme é absorvido com mais eficiência pelo corpo, geralmente entre 15% e 35%. Já o ferro não-heme tem absorção mais variável, entre 2% e 20%, dependendo fortemente de outros alimentos consumidos na mesma refeição.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>O papel da vitamina C</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>A vitamina C é a grande aliada da absorção de ferro não-heme: consumir uma fonte de vitamina C (laranja, limão, acerola, pimentão, tomate) na mesma refeição que o feijão ou o espinafre pode aumentar significativamente a absorção do ferro vegetal. Por outro lado, café, chá preto e chá verde tomados junto com a refeição podem reduzir a absorção de ferro — o ideal é consumi-los pelo menos 1 hora antes ou depois das principais refeições.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Como aplicar no dia a dia</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Combine feijão, lentilha ou espinafre com uma fonte de vitamina C na mesma refeição (ex: feijão + salada com tomate e limão)", "Carnes vermelhas, fígado e frango são as fontes mais eficientes de ferro heme — incluir algumas vezes por semana ajuda bastante", "Evite tomar café ou chá preto/verde imediatamente antes ou depois das refeições principais, especialmente se você tem tendência a anemia", "Sementes de abóbora, quinoa e tofu são boas opções vegetarianas de ferro não-heme", "Se houver suspeita de deficiência, exames de sangue (ferritina, hemoglobina) e orientação médica são essenciais — alimentação ajuda, mas não substitui diagnóstico"].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.1rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#22c55e", fontWeight: 900, fontSize: "1rem" }}>✓</span>
                  <span style={{ fontSize: "0.88rem", color: "#166534", fontWeight: 600, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", borderRadius: "20px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#166534", marginBottom: "0.5rem" }}>Quer um cardápio rico em ferro e bem combinado?</div>
            <div style={{ fontSize: "0.9rem", color: "#166534", marginBottom: "1.5rem" }}>A Nutry.life gera seu cardápio da semana em segundos, com base no seu objetivo e preferências.</div>
            <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.9rem 2rem", fontSize: "1rem" }}>Criar meu plano agora →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
