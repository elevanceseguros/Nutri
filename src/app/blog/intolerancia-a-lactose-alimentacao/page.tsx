import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Intolerância à Lactose: O Que Comer e Como Não Perder Nutrientes | Nutry.life",
  description: "Cortar leite não significa cortar cálcio e proteína. Veja como identificar o grau de intolerância à lactose, quais alimentos substituem o leite e como montar uma alimentação completa sem desconforto.",
  keywords: "intolerancia a lactose alimentacao, o que comer intolerante a lactose, substitutos do leite",
  openGraph: {
    title: "Intolerância à Lactose: O Que Comer e Como Não Perder Nutrientes | Nutry.life",
    description: "Cortar leite não significa cortar cálcio e proteína. Veja como identificar o grau de intolerância à lactose, quais alimentos substituem o leite e como montar uma alimentação completa sem desconforto.",
    url: "https://nutry.life/blog/intolerancia-a-lactose-alimentacao",
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
            <span style={{ color: "#22c55e" }}>Saúde</span>
          </div>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Saúde</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>18 de junho de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 6 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Intolerância à Lactose: O Que Comer e Como Não Perder Nutrientes
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>Estima-se que boa parte dos adultos brasileiros tenha algum grau de intolerância à lactose. A boa notícia: existem opções práticas para manter cálcio, proteína e vitamina D na dieta sem desconforto digestivo.</p>
          </div>
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🥛</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio personalizado com a Nutry.life</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar completo considerando suas restrições alimentares, incluindo intolerância à lactose.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>O que a ciência diz</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem" }}>A intolerância à lactose ocorre quando o corpo produz pouca ou nenhuma lactase, a enzima que digere o açúcar do leite. Existem graus diferentes: algumas pessoas toleram pequenas quantidades (um pouco de leite no café), outras precisam evitar quase totalmente. Importante: intolerância à lactose não é a mesma coisa que alergia à proteína do leite (APLV) — são condições diferentes, com gravidades e manejos distintos. Em caso de dúvida sobre qual é o seu caso, vale buscar avaliação médica.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>De onde tirar cálcio sem leite</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>O leite é fonte importante de cálcio, mas não a única. Vegetais verde-escuros (couve, brócolis), tofu, sardinha (com espinha), gergelim e amêndoas também contribuem com cálcio. Iogurtes e queijos curados (como parmesão) costumam ter menos lactose que o leite líquido e são mais bem tolerados por muita gente com intolerância leve — vale testar a tolerância individual.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Como aplicar no dia a dia</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Teste sua tolerância individual: muita gente com intolerância leve tolera queijos curados e iogurte, mesmo sem tolerar leite puro", "Leite vegetal (soja, amêndoas, aveia) pode substituir o leite de vaca em receitas e no café — escolha versões fortificadas com cálcio e vitamina D", "Leia rótulos: lactose aparece escondida em pães, embutidos, temperos prontos e até medicamentos", "Se for cortar laticínios completamente, garanta outras fontes de proteína (ovos, carnes, leguminosas) para não comprometer a ingestão proteica diária", "Enzima lactase em comprimido pode ser uma opção pontual para ocasiões sociais, conforme orientação profissional"].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.1rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#22c55e", fontWeight: 900, fontSize: "1rem" }}>✓</span>
                  <span style={{ fontSize: "0.88rem", color: "#166534", fontWeight: 600, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", borderRadius: "20px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#166534", marginBottom: "0.5rem" }}>Quer um cardápio sem lactose e nutricionalmente completo?</div>
            <div style={{ fontSize: "0.9rem", color: "#166534", marginBottom: "1.5rem" }}>A Nutry.life gera seu cardápio da semana em segundos, considerando suas restrições alimentares.</div>
            <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.9rem 2rem", fontSize: "1rem" }}>Criar meu plano agora →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
