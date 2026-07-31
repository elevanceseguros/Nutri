import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Jejum Intermitente vs Restrição Calórica: O Que Funciona Melhor? | Nutry.life",
  description: "Jejum intermitente promete resultados além do emagrecimento: autofagia, longevidade, saúde metabólica. Mas comparado à restrição calórica tradicional, o que as pesquisas mostram?",
  openGraph: { title: "Jejum Intermitente vs Restrição Calórica: O Que Funciona Melhor? | Nutry.life", description: "Jejum intermitente promete resultados além do emagrecimento: autofagia, longevidade, saúde metabólica. Mas comparado à restrição calórica tradicional, o que as pesquisas mostram?", url: "https://nutry.life/blog/jejum-intermitente-vs-restricao-calorica" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>03 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Jejum Intermitente vs Restrição Calórica: O Que Funciona Melhor?</h1>
          <p className={styles.postExcerpt}>Jejum intermitente promete resultados além do emagrecimento: autofagia, longevidade, saúde metabólica. Mas comparado à restrição calórica tradicional, o que as pesquisas mostram?</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>Jejum intermitente virou um dos temas mais pesquisados em nutrição nos últimos anos. Mas quando comparado à restrição calórica simples — comer menos ao longo do dia — qual abordagem realmente vence?</p>
            <h2>Como funciona cada abordagem</h2>
            <p>A restrição calórica reduz a ingestão total de calorias distribuída ao longo do dia — come menos em todas as refeições. O jejum intermitente concentra a alimentação em uma janela menor (16:8, 5:2, OMAD) — a restrição acontece pelo tempo, não necessariamente pela quantidade em cada refeição.</p>
            <h2>O que as pesquisas mostram</h2>
            <p>Quando a ingestão calórica total é igual, estudos de até 12 meses mostram que jejum intermitente e restrição calórica contínua produzem <strong>resultados equivalentes</strong> em perda de peso e marcadores metabólicos. Não há vantagem metabólica intrínseca do jejum além da redução calórica que ele naturalmente provoca.</p>
            <h2>Os benefícios adicionais do jejum</h2>
            <p>O jejum intermitente ativa a autofagia — processo de "limpeza celular" que ocorre em períodos de privação de nutrientes. Pesquisas sugerem benefícios em longevidade e saúde celular, mas esses estudos são majoritariamente em animais ou de curto prazo em humanos. É promissor, mas ainda sem consenso definitivo.</p>
            <h2>Qual é mais fácil de manter?</h2>
            <p>Depende do perfil. Quem tem dificuldade de controlar porções prefere o jejum — come normalmente mas em janela menor. Quem tem dificuldade com fome matinal ou socializa muito em refeições prefere a restrição distribuída. A adesão é o fator mais importante.</p>
            <h2>Quem não deve fazer jejum</h2>
            <p>Grávidas, pessoas com histórico de transtornos alimentares, diabéticos insulino-dependentes e quem tem hipoglicemia devem consultar médico antes. O jejum não é para todo mundo.</p>
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
