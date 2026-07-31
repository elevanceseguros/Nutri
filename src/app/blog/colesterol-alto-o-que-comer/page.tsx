import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Colesterol Alto: O Que Comer e Evitar Para Controlar | Nutry.life",
  description: "Colesterol alto não significa cortar toda gordura. Saiba o que realmente eleva o LDL, quais alimentos ajudam a controlar e o que a ciência diz sobre dieta e colesterol.",
  keywords: "colesterol alto o que comer, colesterol alto dieta, alimentos que baixam colesterol, colesterol LDL HDL, como controlar colesterol",
  openGraph: { title: "Colesterol Alto: O Que Comer e Evitar | Nutry.life", description: "O que realmente eleva o LDL e como controlar pelo prato.", url: "https://nutry.life/blog/colesterol-alto-o-que-comer" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>25 de junho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Colesterol Alto: O Que Comer e Evitar Para Controlar</h1>
          <p className={styles.postExcerpt}>Colesterol alto não é sentença de cortar toda gordura. A ciência atual mostra que o problema é mais específico — e a solução também.</p>\n
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div>
              <strong>Transforme este conteúdo em um plano para você</strong>
              <p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link>
            </div>
          </div>
          <div className={styles.postContent}>
            <p>Durante décadas, o conselho era simples: colesterol alto, corte as gorduras. Hoje sabemos que a relação é mais complexa. Nem toda gordura é vilã, e alguns alimentos que pareciam neutros são os maiores responsáveis pelo LDL elevado.</p>
            <h2>LDL vs HDL: qual é o problema?</h2>
            <p>O <strong>LDL</strong> (lipoproteína de baixa densidade) é o chamado "colesterol ruim" — quando elevado, se deposita nas paredes das artérias e aumenta o risco cardiovascular. O <strong>HDL</strong> (lipoproteína de alta densidade) é o "colesterol bom" — remove o excesso de colesterol das artérias e leva ao fígado para ser eliminado. O objetivo da dieta é reduzir o LDL e aumentar o HDL.</p>
            <h2>O que realmente eleva o LDL?</h2>
            <p>O principal culpado não é o colesterol da dieta (ovos, por exemplo), mas sim as <strong>gorduras saturadas e trans</strong>:</p>
            <ul>
              <li><strong>Gorduras trans</strong> (industrializadas, margarina, biscoitos recheados) — elevam LDL e reduzem HDL ao mesmo tempo</li>
              <li><strong>Gorduras saturadas em excesso</strong> (carnes gordurosas, manteiga, queijos amarelos, coco em excesso)</li>
              <li><strong>Açúcar e carboidratos refinados</strong> — elevam triglicerídeos e reduzem HDL</li>
            </ul>
            <h2>Alimentos que ajudam a reduzir o LDL</h2>
            <ul>
              <li><strong>Aveia</strong> — rica em beta-glucana, fibra solúvel que se liga ao colesterol no intestino e impede a absorção</li>
              <li><strong>Azeite de oliva extra virgem</strong> — gordura monoinsaturada que favorece o HDL</li>
              <li><strong>Peixes gordurosos</strong> (salmão, sardinha, atum) — ômega-3 reduz triglicerídeos e inflamação</li>
              <li><strong>Leguminosas</strong> (feijão, lentilha, grão-de-bico) — fibras que reduzem absorção de colesterol</li>
              <li><strong>Nozes e amêndoas</strong> — gorduras insaturadas e fibras</li>
            </ul>
            <h2>Ovos são problema?</h2>
            <p>Para a maioria das pessoas saudáveis, consumir até 1 ovo por dia não eleva o LDL de forma significativa. O colesterol da dieta tem impacto menor do que as gorduras saturadas. Se você tem predisposição genética ao colesterol alto, vale conversar com um médico sobre a quantidade ideal.</p>
            <h2>Dieta resolve sozinha?</h2>
            <p>A dieta pode reduzir o LDL em 10% a 20% em média. Quando o colesterol está muito elevado ou há fatores genéticos, a dieta ajuda mas raramente resolve sozinha — medicação pode ser necessária. Sempre acompanhe com um médico.</p>
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
