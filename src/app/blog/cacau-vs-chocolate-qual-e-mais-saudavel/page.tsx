import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Cacau vs Chocolate: Qual é Mais Saudável e Vale Comer Todo Dia? | Nutry.life",
  description: "Cacau puro é antioxidante, anti-inflamatório e até cardioprotegido. Mas o chocolate que compramos tem pouco cacau de verdade. Entenda o que vale comer e em qual quantidade.",
  openGraph: { title: "Cacau vs Chocolate: Qual é Mais Saudável e Vale Comer Todo Dia? | Nutry.life", description: "Cacau puro é antioxidante, anti-inflamatório e até cardioprotegido. Mas o chocolate que compramos tem pouco cacau de verdade. Entenda o que vale comer e em qual quantidade.", url: "https://nutry.life/blog/cacau-vs-chocolate-qual-e-mais-saudavel" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>23 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Cacau vs Chocolate: Qual é Mais Saudável e Vale Comer Todo Dia?</h1>
          <p className={styles.postExcerpt}>Cacau puro é antioxidante, anti-inflamatório e até cardioprotegido. Mas o chocolate que compramos tem pouco cacau de verdade. Entenda o que vale comer e em qual quantidade.</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>Chocolate ganhou status de "alimento funcional" — mas a maioria dos chocolates vendidos no mercado tem pouco a ver com os benefícios que a ciência estuda. Entender a diferença entre cacau e chocolate industrializado é essencial para aproveitar os benefícios sem ilusão.</p>
            <h2>O que torna o cacau saudável?</h2>
            <p>O cacau puro é rico em flavonoides — especialmente epicatequina — que têm efeito antioxidante e anti-inflamatório documentado. Também contém magnésio, ferro, zinco, fibra e compostos que melhoram o fluxo sanguíneo e a função endotelial (saúde dos vasos).</p>
            <h2>O problema dos chocolates industrializados</h2>
            <p>O processamento do cacau para fazer chocolate reduz significativamente o teor de flavonoides. O alcalinização (processo Dutch), o conching (mistura em alta temperatura) e o refino eliminam parte dos compostos bioativos. E o produto final tem açúcar, gordura hidrogenada e pouquíssimo cacau real.</p>
            <ul>
              <li>Chocolate ao leite: geralmente 10-30% de cacau, muito açúcar</li>
              <li>Chocolate amargo 70%: boa quantidade de cacau, menos açúcar</li>
              <li>Chocolate 85-90%: alto teor de cacau, pouco açúcar, mais amargo</li>
              <li>Cacau em pó (100%): máxima concentração de flavonoides</li>
            </ul>
            <h2>Benefícios comprovados do cacau/chocolate amargo</h2>
            <p>Estudos com chocolate amargo 70%+ mostram: redução modesta da pressão arterial, melhora da sensibilidade à insulina, aumento do HDL (colesterol bom), e efeito positivo no humor (estimula serotonina). Os efeitos são modestos mas consistentes em estudos de longo prazo.</p>
            <h2>Quanto consumir?</h2>
            <p>20-40g de chocolate 70%+ por dia é a faixa estudada na maioria das pesquisas com resultados positivos. Isso equivale a 2-4 quadradinhos. Acima disso, as calorias extras do açúcar e gordura começam a superar os benefícios dos flavonoides.</p>
            <h2>Cacau em pó: a opção mais eficiente</h2>
            <p>1-2 colheres de chá de cacau em pó 100% (não achocolatado) no iogurte, vitamina ou café entrega flavonoides com poucas calorias — mais eficiente do que o chocolate. Amargo de verdade, mas o efeito funcional é maior por caloria.</p>
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
