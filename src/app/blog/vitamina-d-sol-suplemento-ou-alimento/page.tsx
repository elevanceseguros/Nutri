import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Vitamina D: Sol, Suplemento ou Alimento — O Que Funciona Melhor? | Nutry.life",
  description: "Vitamina D é deficiente em mais de 70% dos brasileiros apesar de morarmos em país tropical. Por que isso acontece e como corrigir de forma eficiente?",
  openGraph: { title: "Vitamina D: Sol, Suplemento ou Alimento — O Que Funciona Melhor? | Nutry.life", description: "Vitamina D é deficiente em mais de 70% dos brasileiros apesar de morarmos em país tropical. Por que isso acontece e como corrigir de forma eficiente?", url: "https://nutry.life/blog/vitamina-d-sol-suplemento-ou-alimento" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>14 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Vitamina D: Sol, Suplemento ou Alimento — O Que Funciona Melhor?</h1>
          <p className={styles.postExcerpt}>Vitamina D é deficiente em mais de 70% dos brasileiros apesar de morarmos em país tropical. Por que isso acontece e como corrigir de forma eficiente?</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>Brasil é um país tropical com sol o ano inteiro — e mesmo assim mais de 70% dos brasileiros têm vitamina D abaixo do ideal. Como isso é possível? A resposta tem a ver com comportamento moderno, protetor solar e onde vivemos nas cidades.</p>
            <h2>O que a vitamina D faz</h2>
            <p>Vitamina D é essencial para absorção de cálcio e saúde óssea, função imunológica, humor e prevenção de depressão, regulação hormonal, e redução do risco de algumas doenças crônicas. Deficiência grave causa raquitismo em crianças e osteomalácia em adultos. Deficiência moderada — que é o caso da maioria — compromete imunidade e saúde óssea de forma mais sutil.</p>
            <h2>Por que brasileiros têm deficiência?</h2>
            <p>Trabalho em ambientes fechados, uso de protetor solar (necessário, mas bloqueia a síntese), baixa exposição solar no inverno mesmo em SP, e pigmentação de pele escura — que requer mais tempo de exposição para sintetizar a mesma quantidade de vitamina D.</p>
            <h2>Sol: quanto é suficiente?</h2>
            <p>Para pessoas de pele clara, 10-15 minutos de exposição solar (braços e pernas descobertos) entre 10h e 15h, 3x por semana, pode ser suficiente. Para pele morena, 20-30 minutos. Para pele negra, 40-60 minutos. Esses são tempos estimados para SP — variam por latitude e época do ano.</p>
            <h2>Alimentos ricos em vitamina D</h2>
            <p>Poucos alimentos têm vitamina D em quantidade relevante: salmão (600-1000 UI/100g), sardinha em lata (300 UI/100g), gema de ovo (40 UI/unidade), fígado bovino (50 UI/100g). É difícil atingir a ingestão ideal só pela dieta.</p>
            <h2>Quando suplementar?</h2>
            <p>Para quem tem exame comprovando deficiência (25-OH vitamina D abaixo de 30 ng/mL), suplementação é indicada. Doses de 1.000 a 2.000 UI/dia são seguras para manutenção. Doses maiores (4.000-10.000 UI) só com acompanhamento médico.</p>
            <p>Vitamina D3 (colecalciferol) é a forma mais eficaz. Tome com refeição contendo gordura — é lipossolúvel.</p>
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
