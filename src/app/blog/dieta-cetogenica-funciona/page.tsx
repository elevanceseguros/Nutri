import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Dieta Cetogênica Funciona Mesmo? O Que a Ciência Diz e Para Quem Faz Sentido | Nutry.life",
  description: "A dieta cetogênica promete emagrecimento rápido com quase zero carboidrato. Mas funciona para todo mundo? Veja como funciona a cetose, os riscos, benefícios reais e para quem pode valer a pena.",
  keywords: "dieta cetogenica funciona, dieta low carb extrema, cetose o que é, dieta keto",
  openGraph: {
    title: "Dieta Cetogênica Funciona Mesmo? O Que a Ciência Diz e Para Quem Faz Sentido | Nutry.life",
    description: "A dieta cetogênica promete emagrecimento rápido com quase zero carboidrato. Mas funciona para todo mundo? Veja como funciona a cetose, os riscos, benefícios reais e para quem pode valer a pena.",
    url: "https://nutry.life/blog/dieta-cetogenica-funciona",
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
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>20 de junho de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 7 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Dieta Cetogênica Funciona Mesmo? O Que a Ciência Diz e Para Quem Faz Sentido
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>A dieta cetogênica vai muito além do low carb tradicional — é uma restrição drástica de carboidratos que muda o combustível principal do corpo. Entenda como funciona, os benefícios documentados, os riscos e se realmente vale a pena para o seu objetivo.</p>
          </div>
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🥑</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio personalizado com a Nutry.life</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar completo com base no seu objetivo e preferências — incluindo opções low carb adaptadas ao seu dia a dia.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>O que a ciência diz</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem" }}>Na dieta cetogênica, o carboidrato é reduzido a níveis muito baixos (geralmente abaixo de 50g por dia, às vezes abaixo de 20g), forçando o corpo a entrar em cetose — um estado metabólico onde o fígado produz corpos cetônicos a partir da gordura para usar como combustível, no lugar da glicose. Estudos mostram resultados positivos para perda de peso no curto e médio prazo, e há evidências consistentes de uso terapêutico em epilepsia refratária. Para diabetes tipo 2, alguns estudos mostram melhora no controle glicêmico, mas sempre com acompanhamento médico, já que pode ser necessário ajustar medicações.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Riscos e pontos de atenção</span></div>
            <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>A fase inicial costuma trazer sintomas chamados de "keto flu" (gripe da keto): cansaço, dor de cabeça, irritabilidade, enquanto o corpo se adapta — geralmente passa em alguns dias com boa hidratação e reposição de eletrólitos (sódio, potássio, magnésio). No longo prazo, restrição severa de carboidratos pode dificultar a ingestão de fibras (já que muitas fontes de fibra são ricas em carboidrato), o que pode afetar a saúde intestinal se não for bem planejado. Para gestantes, pessoas com histórico de transtornos alimentares ou condições renais/hepáticas, a cetogênica não é recomendada sem acompanhamento médico próximo.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Como aplicar no dia a dia (se for tentar)</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Priorize gorduras de boa qualidade (azeite, abacate, oleaginosas, peixes gordos) em vez de apenas aumentar gordura saturada de qualquer fonte", "Mantenha vegetais de baixo carboidrato (folhas verdes, brócolis, abobrinha) para garantir fibras e micronutrientes", "Hidrate-se bem e considere reposição de eletrólitos nos primeiros dias para reduzir os sintomas de adaptação", "Não é necessário manter cetogênica estrita para sempre — muita gente usa por períodos e depois migra para low carb moderado de manutenção", "Considere acompanhamento de nutricionista, especialmente se tiver alguma condição de saúde pré-existente"].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.1rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#22c55e", fontWeight: 900, fontSize: "1rem" }}>✓</span>
                  <span style={{ fontSize: "0.88rem", color: "#166534", fontWeight: 600, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", borderRadius: "20px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#166534", marginBottom: "0.5rem" }}>Quer testar um cardápio low carb sem complicação?</div>
            <div style={{ fontSize: "0.9rem", color: "#166534", marginBottom: "1.5rem" }}>A Nutry.life gera seu cardápio da semana em segundos, com base no seu objetivo e preferências.</div>
            <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.9rem 2rem", fontSize: "1rem" }}>Criar meu plano agora →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
