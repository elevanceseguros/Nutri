import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Índice Glicêmico: O Que É e Realmente Importa Para Emagrecer? | Nutry.life",
  description: "Índice glicêmico classifica alimentos pelo impacto na glicose sanguínea. Mas para emagrecer, ele importa tanto quanto o marketing promete?",
  openGraph: { title: "Índice Glicêmico: O Que É e Realmente Importa Para Emagrecer? | Nutry.life", description: "Índice glicêmico classifica alimentos pelo impacto na glicose sanguínea. Mas para emagrecer, ele importa tanto quanto o marketing promete?", url: "https://nutry.life/blog/indice-glicemico-o-que-e-e-importa-para-emagrecer" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>26 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Índice Glicêmico: O Que É e Realmente Importa Para Emagrecer?</h1>
          <p className={styles.postExcerpt}>Índice glicêmico classifica alimentos pelo impacto na glicose sanguínea. Mas para emagrecer, ele importa tanto quanto o marketing promete?</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>Índice glicêmico (IG) virou critério popular para escolher alimentos — especialmente entre quem quer emagrecer ou controlar o diabetes. Mas o IG sozinho conta a história completa? A realidade é mais complexa.</p>
            <h2>O que é índice glicêmico?</h2>
            <p>O IG mede a velocidade com que um alimento eleva a glicose sanguínea, em comparação com a glicose pura (referência = 100). Alimentos com IG alto (acima de 70) elevam a glicose rapidamente. IG baixo (abaixo de 55) eleva de forma mais gradual.</p>
            <h2>Exemplos curiosos</h2>
            <ul>
              <li>Melancia: IG 72 (alto) — mas contém pouco carboidrato por porção</li>
              <li>Arroz branco: IG 73 — mas depende muito de como é preparado</li>
              <li>Sorvete de baunilha: IG 38 (baixo!) — a gordura retarda a absorção</li>
              <li>Pão integral: IG 51 — menor que branco, mas não tanto quanto parece</li>
            </ul>
            <h2>O problema do IG isolado</h2>
            <p>O IG é medido para o alimento isolado, em jejum, em porção de 50g de carboidrato — uma situação artificial. No mundo real, você come alimentos combinados: proteína, gordura e fibra reduzem o IG da refeição inteira. Uma refeição de arroz + feijão + frango + salada tem impacto glicêmico muito menor do que o IG do arroz sugere isoladamente.</p>
            <h2>Carga glicêmica é mais útil</h2>
            <p>A carga glicêmica (CG) combina IG com a quantidade de carboidrato por porção real. A melancia tem IG alto, mas como tem pouco carboidrato por fatia, a carga glicêmica é baixa. CG baixo = melancia OK. IG alto = parece proibida. Qual número é mais relevante? CG.</p>
            <h2>IG e emagrecimento: o que as pesquisas mostram</h2>
            <p>Estudos controlados comparando dietas de baixo e alto IG com mesmas calorias mostram diferença pequena ou inexistente na perda de peso. O que importa mais: déficit calórico total, quantidade de proteína, e fibra para saciedade.</p>
            <h2>Quando o IG realmente importa</h2>
            <p>Para diabéticos tipo 1 e 2, controlar o impacto glicêmico das refeições é clinicamente relevante. Para pessoas com resistência à insulina, priorizar alimentos de baixo IG pode ajudar no controle. Para a população geral sem condição metabólica, o IG é um critério útil mas não determinante.</p>
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
