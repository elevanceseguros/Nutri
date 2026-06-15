import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Zinco na Alimentação: Para Que Serve e Quais Alimentos São Boas Fontes | Nutry.life",
  description: "O zinco participa da imunidade, cicatrização e produção hormonal — mas a deficiência é mais comum do que parece, especialmente em vegetarianos. Veja as melhores fontes e como garantir a ingestão adequada.",
  keywords: "zinco na alimentacao, alimentos ricos em zinco, zinco para imunidade, zinco vegetariano",
  openGraph: {
    title: "Zinco na Alimentação: Para Que Serve e Quais Alimentos São Boas Fontes | Nutry.life",
    description: "O zinco participa da imunidade, cicatrização e produção hormonal — mas a deficiência é mais comum do que parece, especialmente em vegetarianos. Veja as melhores fontes e como garantir a ingestão adequada.",
    url: "https://nutry.life/blog/zinco-na-alimentacao",
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
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>21 de junho de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 6 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Zinco na Alimentação: Para Que Serve e Quais Alimentos São Boas Fontes
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>O zinco é um mineral essencial para imunidade, cicatrização de feridas, produção hormonal e até paladar — mas costuma passar despercebido nas conversas sobre nutrição. Veja quais alimentos garantem a ingestão adequada, incluindo opções vegetarianas.</p>
          </div>
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🦪</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio personalizado com a Nutry.life</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar completo com base no seu objetivo, restrições e preferências — incluindo boas fontes de zinco no seu perfil.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>O que a ciência diz</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem" }}>O zinco participa de centenas de reações enzimáticas no corpo, com papel central no sistema imunológico (síntese e função de células de defesa), cicatrização de feridas, síntese de DNA e produção de hormônios, incluindo testosterona. A deficiência leve costuma passar despercebida, mas pode se manifestar como cicatrização lenta, queda de cabelo, alteração no paladar/olfato e maior frequência de infecções. Assim como o ferro, o zinco de origem animal (carnes, frutos do mar) tem absorção mais eficiente que o zinco de origem vegetal.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Por que vegetarianos precisam de atenção extra</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>Grãos integrais e leguminosas — fontes vegetais de zinco — também contêm fitatos, compostos que podem reduzir a absorção do mineral. Isso não significa que vegetarianos terão deficiência automaticamente, mas significa que vale prestar atenção a técnicas de preparo (como deixar feijões e grãos de molho antes de cozinhar, o que reduz o teor de fitatos) e priorizar variedade de fontes ao longo da semana.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Como aplicar no dia a dia</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Frutos do mar (especialmente ostras), carnes vermelhas e aves são as fontes mais concentradas e bem absorvidas de zinco", "Sementes de abóbora, castanha de caju e grão-de-bico são boas opções vegetarianas — inclua variedade ao longo da semana", "Deixe leguminosas e grãos de molho antes de cozinhar para reduzir fitatos e melhorar a absorção de minerais", "Ovos e laticínios também contribuem com zinco e são fáceis de incluir no dia a dia", "Se notar sinais como cicatrização lenta ou infecções frequentes, vale conversar com um profissional sobre avaliação de zinco e outros micronutrientes"].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.1rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#22c55e", fontWeight: 900, fontSize: "1rem" }}>✓</span>
                  <span style={{ fontSize: "0.88rem", color: "#166534", fontWeight: 600, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", borderRadius: "20px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#166534", marginBottom: "0.5rem" }}>Quer um cardápio com boas fontes de zinco e outros minerais?</div>
            <div style={{ fontSize: "0.9rem", color: "#166534", marginBottom: "1.5rem" }}>A Nutry.life gera seu cardápio da semana em segundos, com base no seu objetivo e preferências.</div>
            <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.9rem 2rem", fontSize: "1rem" }}>Criar meu plano agora →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
