import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Inulina e Prebióticos: O Que São e Por Que Importam Para Sua Saúde? | Nutry.life",
  description: "Prebióticos são o alimento das bactérias boas do intestino. Sem eles, até o melhor probiótico perde eficiência. Entenda o que são, onde encontrar e quando suplementar.",
  openGraph: { title: "Inulina e Prebióticos: O Que São e Por Que Importam Para Sua Saúde? | Nutry.life", description: "Prebióticos são o alimento das bactérias boas do intestino. Sem eles, até o melhor probiótico perde eficiência. Entenda o que são, onde encontrar e quando suplementar.", url: "https://nutry.life/blog/inulina-e-prebiotico-o-que-e-e-para-que-serve" },
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
            <span className={styles.postCategory}>Saúde e Nutrição</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>18 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Inulina e Prebióticos: O Que São e Por Que Importam Para Sua Saúde?</h1>
          <p className={styles.postExcerpt}>Prebióticos são o alimento das bactérias boas do intestino. Sem eles, até o melhor probiótico perde eficiência. Entenda o que são, onde encontrar e quando suplementar.</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>Muito se fala em probióticos — as bactérias benéficas. Mas pouco se fala em prebióticos — o alimento que essas bactérias precisam para sobreviver e prosperar. Sem prebióticos suficientes, o probiótico mais caro do mercado tem eficiência reduzida.</p>
            <h2>O que é prebiótico?</h2>
            <p>Prebiótico é um tipo de fibra que o organismo não digere, mas que as bactérias benéficas do intestino (microbiota) fermentam e usam como combustível. Essa fermentação produz ácidos graxos de cadeia curta (como o butirato) que nutrem as células do intestino e têm efeitos anti-inflamatórios.</p>
            <h2>Principais tipos de prebióticos</h2>
            <p><strong>Inulina</strong> — o prebiótico mais estudado. Presente em chicória, alho, cebola, aspargo e banana. Aumenta bifidobactérias e lactobacilos. Disponível como suplemento em pó.</p>
            <p><strong>FOS (frutooligossacarídeos)</strong> — similar à inulina, estimula crescimento de bactérias benéficas. Presente nos mesmos alimentos.</p>
            <p><strong>Beta-glucana</strong> — da aveia. Tem dupla função: prebiótico + redução de colesterol.</p>
            <p><strong>Amido resistente</strong> — presente em banana verde, batata cozida e resfriada, arroz resfriado. Alimenta bactérias produtoras de butirato.</p>
            <h2>Quais os benefícios?</h2>
            <ul>
              <li>Saúde intestinal — regularidade, redução de constipação e disbiose</li>
              <li>Imunidade — 70% do sistema imune está no intestino</li>
              <li>Colesterol — beta-glucana especificamente reduz LDL</li>
              <li>Controle glicêmico — amido resistente reduz pico de glicose</li>
              <li>Saúde mental — eixo intestino-cérebro influenciado pela microbiota</li>
            </ul>
            <h2>Vale suplementar inulina?</h2>
            <p>Se a dieta já é rica em vegetais, leguminosas, frutas e grãos integrais, provavelmente não é necessário. Se a dieta é pobre nesses alimentos ou você está tratando disbiose com probióticos, adicionar inulina (3-5g/dia) pode potencializar os resultados. Aumente gradualmente — excesso causa gases e inchaço.</p>
          </div>

          <div className={styles.premiumBanner} data-cta="nutry-plan-final">
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}><h2>Quer colocar tudo isso em prática?</h2><p>Receba um plano alimentar personalizado, com sugestões de refeições adaptadas à sua rotina e às suas preferências.</p></div>
            <div className={styles.premiumFeatures}><div className={styles.premiumFeatureItem}>✅ Cardápio personalizado</div><div className={styles.premiumFeatureItem}>✅ Refeições práticas para o dia a dia</div><div className={styles.premiumFeatureItem}>✅ Ajustado às suas preferências</div></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar grátis →</Link><p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis para começar.</p>
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
