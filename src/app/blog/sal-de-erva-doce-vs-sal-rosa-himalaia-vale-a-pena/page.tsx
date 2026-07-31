import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Sal Rosa do Himalaia Vale Mais que Sal Comum? A Verdade | Nutry.life",
  description: "Sal rosa do Himalaia é vendido como mais saudável e cheio de minerais. Mas a ciência sustenta essas afirmações? Comparação honesta com o sal comum.",
  openGraph: { title: "Sal Rosa do Himalaia Vale Mais que Sal Comum? A Verdade | Nutry.life", description: "Sal rosa do Himalaia é vendido como mais saudável e cheio de minerais. Mas a ciência sustenta essas afirmações? Comparação honesta com o sal comum.", url: "https://nutry.life/blog/sal-de-erva-doce-vs-sal-rosa-himalaia-vale-a-pena" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>16 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Sal Rosa do Himalaia Vale Mais que Sal Comum? A Verdade</h1>
          <p className={styles.postExcerpt}>Sal rosa do Himalaia é vendido como mais saudável e cheio de minerais. Mas a ciência sustenta essas afirmações? Comparação honesta com o sal comum.</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>Sal rosa do Himalaia virou símbolo de alimentação saudável — custa 5 a 10x mais que o sal comum e promete mais minerais, menos sódio e até propriedades especiais. Mas o que a ciência diz sobre essas afirmações?</p>
            <h2>De onde vem o sal rosa do Himalaia?</h2>
            <p>É extraído de minas no Paquistão — não exatamente nas montanhas do Himalaia, mas em regiões próximas. A cor rosa vem de traços de óxido de ferro (ferrugem). É genuinamente uma rocha salina com pequenas quantidades de minerais adicionais.</p>
            <h2>Os minerais adicionais importam?</h2>
            <p>O sal rosa tem mais de 80 minerais traço além do sódio e cloro. O problema: as quantidades são minúsculas. Para obter uma quantidade clinicamente relevante de ferro pelo sal rosa, você precisaria consumir muito mais sódio do que o limite diário recomendado. Os minerais adicionais são irrelevantes em termos práticos.</p>
            <h2>Tem menos sódio que o sal comum?</h2>
            <p>Tecnicamente, gramo por gramo o sal rosa tem um pouco menos de sódio — porque os minerais traço ocupam algum espaço. Mas a diferença é tão pequena (cerca de 2-3%) que não tem impacto real para a saúde.</p>
            <h2>O sal rosa não é iodado</h2>
            <p>Esse é o ponto mais importante. O sal refinado comum é enriquecido com iodo por lei no Brasil — fundamental para prevenir hipotireoidismo e deficiência de iodo, especialmente em crianças. O sal rosa não passa por esse processo. Quem usa sal rosa exclusivamente pode ficar deficiente em iodo.</p>
            <h2>Conclusão</h2>
            <p>Sal rosa não é mais saudável que o sal refinado iodado para a maioria das pessoas — e pode ser menos por não conter iodo. Se você gosta do sabor ou da estética, não tem problema usá-lo pontualmente. Mas não substitua completamente o sal iodado por ele, especialmente se tem crianças em casa.</p>
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
