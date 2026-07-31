import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Dieta Low Carb vs Dieta Equilibrada: Qual Emagrece Mais? | Nutry.life",
  description: "Low carb virou moda e promete resultados rápidos. Mas a dieta equilibrada com déficit calórico entrega menos? O que as pesquisas mostram quando comparam as duas.",
  openGraph: { title: "Dieta Low Carb vs Dieta Equilibrada: Qual Emagrece Mais? | Nutry.life", description: "Low carb virou moda e promete resultados rápidos. Mas a dieta equilibrada com déficit calórico entrega menos? O que as pesquisas mostram quando comparam as duas.", url: "https://nutry.life/blog/dieta-low-carb-vs-dieta-equilibrada" },
};

export default function Post() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link>
      </header>
      <main className={styles.postContainer}>
        <article className={styles.post}>\n          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
          <div className={styles.postMeta}>
            <span className={styles.postCategory}>Emagrecimento</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>01 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Dieta Low Carb vs Dieta Equilibrada: Qual Emagrece Mais?</h1>
          <p className={styles.postExcerpt}>Low carb virou moda e promete resultados rápidos. Mas a dieta equilibrada com déficit calórico entrega menos? O que as pesquisas mostram quando comparam as duas.</p>\n
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div>
              <strong>Transforme este conteúdo em um plano para você</strong>
              <p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link>
            </div>
          </div>
          <div className={styles.postContent}>
            <p>Low carb é uma das abordagens dietéticas mais populares para emagrecimento. Mas quando colocada frente a frente com uma dieta equilibrada em déficit calórico, os resultados realmente diferem? A ciência tem uma resposta bem definida.</p>
            <h2>O que é dieta low carb?</h2>
            <p>Low carb é qualquer dieta que restringe carboidratos significativamente — geralmente abaixo de 100–150g por dia. A cetogênica vai mais longe, com menos de 50g/dia. O mecanismo proposto: menos carboidrato = menos insulina = mais queima de gordura.</p>
            <h2>O que dizem as pesquisas de comparação?</h2>
            <p>Estudos de longo prazo (acima de 12 meses) mostram que quando as calorias totais são controladas, a perda de peso entre low carb e dieta equilibrada é <strong>equivalente</strong>. A vantagem do low carb nos primeiros meses existe — mas é em grande parte água (o glicogênio muscular retém água) e tende a se equalizar com o tempo.</p>
            <h2>Quando low carb tem vantagem real</h2>
            <p>Para pessoas com resistência à insulina, diabetes tipo 2 ou síndrome metabólica, o low carb pode ter vantagem além do emagrecimento — melhora de marcadores glicêmicos, redução de triglicerídeos e controle de apetite mais eficaz. Para essas pessoas, a qualidade dos carboidratos importa mais do que para a população geral.</p>
            <h2>A desvantagem do low carb</h2>
            <p>Adesão a longo prazo. A maioria das pessoas consegue manter low carb por semanas ou meses — mas raramente por anos. Dietas restritivas têm maior taxa de abandono. Uma dieta equilibrada que você consegue manter por 2 anos entrega mais resultado do que uma low carb que você abandona em 3 meses.</p>
            <h2>Conclusão prática</h2>
            <p>A melhor dieta para emagrecer é a que você consegue seguir. Se você se adapta bem ao low carb e não tem restrições, use. Se prefere comer de tudo com moderação e déficit calórico, funciona igualmente — e pode ser mais sustentável.</p>
          </div>

          <div className={styles.premiumBanner} data-cta="nutry-plan-final">
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer colocar tudo isso em prática?</h2>
              <p>Receba um plano alimentar personalizado, com sugestões de refeições adaptadas à sua rotina e às suas preferências.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio personalizado</div>
              <div className={styles.premiumFeatureItem}>✅ Refeições práticas para o dia a dia</div>
              <div className={styles.premiumFeatureItem}>✅ Ajustado às suas preferências</div>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis para começar.</p>
          </div>

          <Link href="/blog" className={styles.backToBlogBottom}>← Voltar para todos os artigos</Link>\n        </article>
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Nutry.life — Informação nutricional baseada em evidências</p>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem", opacity: 0.6 }}>Este conteúdo é informativo e não substitui orientação de nutricionista.</p>
      </footer>
    </>
  );
}
