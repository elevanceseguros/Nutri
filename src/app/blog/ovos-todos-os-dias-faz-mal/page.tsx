import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Comer Ovos Todo Dia Faz Mal? O Que a Ciência Diz em 2026 | Nutry.life",
  description: "Durante décadas, o ovo foi vilão da dieta por causa do colesterol. Mas a ciência revisou essa posição. Quantos ovos por dia são seguros e para quem?",
  openGraph: { title: "Comer Ovos Todo Dia Faz Mal? O Que a Ciência Diz em 2026 | Nutry.life", description: "Durante décadas, o ovo foi vilão da dieta por causa do colesterol. Mas a ciência revisou essa posição. Quantos ovos por dia são seguros e para quem?", url: "https://nutry.life/blog/ovos-todos-os-dias-faz-mal" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>04 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Comer Ovos Todo Dia Faz Mal? O Que a Ciência Diz em 2026</h1>
          <p className={styles.postExcerpt}>Durante décadas, o ovo foi vilão da dieta por causa do colesterol. Mas a ciência revisou essa posição. Quantos ovos por dia são seguros e para quem?</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>O ovo passou décadas sendo demonizado por causa do colesterol — cada unidade tem cerca de 186mg, quase o limite diário que era recomendado antigamente. Mas a ciência nutricional evoluiu bastante sobre esse tema.</p>
            <h2>A revisão científica sobre colesterol da dieta</h2>
            <p>As diretrizes nutricionais americanas de 2015 removeram o limite de colesterol diário da dieta — reconhecendo que o colesterol consumido tem impacto modesto no colesterol sanguíneo para a maioria das pessoas. O que realmente eleva o LDL são as gorduras saturadas e trans, não o colesterol do ovo.</p>
            <h2>O que as pesquisas mostram sobre ovos</h2>
            <p>Estudos com consumo de até 3 ovos por dia em pessoas saudáveis não mostraram aumento de risco cardiovascular. Para a maioria das pessoas, o fígado reduz a própria produção de colesterol quando o consumo dietético aumenta — é um mecanismo de compensação natural.</p>
            <h2>Exceções importantes</h2>
            <p>Hiperresponsivos ao colesterol dietético (cerca de 25–30% da população) têm LDL que sobe mais que o normal com aumento do colesterol da dieta. Diabéticos tipo 2 têm resultados mais variáveis em estudos. Para esses grupos, a orientação individualizada de um médico ou nutricionista é importante.</p>
            <h2>Os benefícios do ovo</h2>
            <p>O ovo é um dos alimentos mais nutritivos por caloria: proteína completa com todos os aminoácidos essenciais, colina (importante para saúde cerebral e hepática), luteína e zeaxantina (saúde ocular), vitaminas D, B12 e A. Tudo isso por cerca de 70–80 calorias por unidade.</p>
            <h2>Conclusão</h2>
            <p>Para pessoas saudáveis sem predisposição genética ao colesterol alto, comer 1–3 ovos por dia é seguro e nutritivo. Se você tem colesterol alto ou diabetes, conversa com seu médico para definir a quantidade ideal para o seu caso.</p>
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
