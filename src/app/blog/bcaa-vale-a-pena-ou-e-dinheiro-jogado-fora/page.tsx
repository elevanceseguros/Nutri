import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "BCAA Vale a Pena ou É Dinheiro Jogado Fora? | Nutry.life",
  description: "BCAA foi o suplemento mais vendido por décadas. Mas com o que sabemos hoje sobre proteína e síntese muscular, ainda faz sentido comprar? A resposta pode te surpreender.",
  openGraph: { title: "BCAA Vale a Pena ou É Dinheiro Jogado Fora? | Nutry.life", description: "BCAA foi o suplemento mais vendido por décadas. Mas com o que sabemos hoje sobre proteína e síntese muscular, ainda faz sentido comprar? A resposta pode te surpreender.", url: "https://nutry.life/blog/bcaa-vale-a-pena-ou-e-dinheiro-jogado-fora" },
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
            <span className={styles.postCategory}>Suplementação</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>07 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>BCAA Vale a Pena ou É Dinheiro Jogado Fora?</h1>
          <p className={styles.postExcerpt}>BCAA foi o suplemento mais vendido por décadas. Mas com o que sabemos hoje sobre proteína e síntese muscular, ainda faz sentido comprar? A resposta pode te surpreender.</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>BCAA (aminoácidos de cadeia ramificada — leucina, isoleucina e valina) foi durante anos considerado essencial para quem treina musculação. Hoje, a visão científica mudou bastante.</p>
            <h2>O que é BCAA e para que serve</h2>
            <p>Os BCAAs são três aminoácidos essenciais que representam cerca de 35% dos aminoácidos essenciais nos músculos. A leucina em particular é o principal ativador da síntese proteica muscular (via mTOR). A ideia por trás da suplementação era fornecer esses aminoácidos especificamente para maximizar a síntese.</p>
            <h2>O problema com essa lógica</h2>
            <p>Para estimular síntese muscular de forma robusta, você precisa não apenas de leucina mas de <strong>todos os aminoácidos essenciais</strong> — o músculo não consegue sintetizar proteína completa com apenas três aminoácidos. Pesquisas mostram que whey protein (que contém todos os EAAs incluindo os BCAAs) é superior ao BCAA isolado para síntese muscular.</p>
            <h2>Quando BCAA ainda pode fazer sentido</h2>
            <p>Em jejum prolongado, treino aeróbico de longa duração ou entre refeições muito espaçadas, BCAA pode reduzir o catabolismo muscular. Para vegetarianos e veganos que têm dificuldade de atingir a leucina suficiente pela dieta, pode ser útil. Para quem treina em jejum e não quer quebrar o jejum com proteína completa, BCAA tem calorias mínimas.</p>
            <h2>Se você come proteína suficiente…</h2>
            <p>O BCAA é supérfluo. Quem come 1,6–2,2g de proteína por kg ao dia (de fontes completas como carne, ovos, laticínios ou whey) já recebe BCAAs em quantidade suficiente para maximizar a síntese muscular. Adicionar BCAA nesse contexto é desperdício de dinheiro.</p>
            <h2>Conclusão honesta</h2>
            <p>Para a maioria dos praticantes de musculação que se alimentam bem, o BCAA é dinheiro jogado fora. Priorize proteína total da dieta. Se sobrar orçamento, creatina tem muito mais evidência de benefício do que BCAA.</p>
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
