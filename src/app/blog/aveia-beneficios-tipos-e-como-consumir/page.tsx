import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Aveia: Benefícios, Tipos e Como Consumir Para Aproveitar Ao Máximo | Nutry.life",
  description: "Aveia é um dos alimentos funcionais mais estudados. Reduz colesterol, melhora saciedade e regula o intestino. Mas flocos, farinha ou farelo — qual forma funciona melhor?",
  openGraph: { title: "Aveia: Benefícios, Tipos e Como Consumir Para Aproveitar Ao Máximo | Nutry.life", description: "Aveia é um dos alimentos funcionais mais estudados. Reduz colesterol, melhora saciedade e regula o intestino. Mas flocos, farinha ou farelo — qual forma funciona melhor?", url: "https://nutry.life/blog/aveia-beneficios-tipos-e-como-consumir" },
};

export default function Post() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link>
      </header>
      <main className={styles.postContainer}>
        <article className={styles.post}>
          <div className={styles.postMeta}>
            <span className={styles.postCategory}>Alimentação Prática</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>27 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Aveia: Benefícios, Tipos e Como Consumir Para Aproveitar Ao Máximo</h1>
          <p className={styles.postExcerpt}>Aveia é um dos alimentos funcionais mais estudados. Reduz colesterol, melhora saciedade e regula o intestino. Mas flocos, farinha ou farelo — qual forma funciona melhor?</p>
          <div className={styles.postContent}>
            <p>A aveia é um dos grãos mais estudados da ciência da nutrição — e com boas razões. Tem um composto único chamado beta-glucana que é responsável pela maioria dos seus benefícios documentados. Mas a forma de consumo importa muito para aproveitar ao máximo.</p>
            <h2>O que torna a aveia especial: a beta-glucana</h2>
            <p>A beta-glucana é uma fibra solúvel que forma um gel viscoso no intestino. Esse gel retarda o esvaziamento gástrico (mais saciedade), reduz a absorção de colesterol e glicose, e serve de alimento para bactérias benéficas da microbiota.</p>
            <h2>Benefícios com evidência sólida</h2>
            <ul>
              <li><strong>Colesterol LDL</strong> — 3g de beta-glucana por dia reduz LDL em 5-10%. Uma porção de 40g de flocos tem ~2g de beta-glucana</li>
              <li><strong>Glicemia</strong> — reduz pico de glicose pós-refeição, especialmente útil para diabéticos e resistentes à insulina</li>
              <li><strong>Saciedade</strong> — refeição com aveia prolonga a saciedade por mais tempo que cereais refinados equivalentes</li>
              <li><strong>Saúde intestinal</strong> — prebiótico natural, alimenta bactérias benéficas</li>
            </ul>
            <h2>Tipos de aveia e diferenças</h2>
            <p><strong>Farelo de aveia</strong> — a forma mais concentrada em beta-glucana. 40g tem ~4g de beta-glucana. Melhor para quem quer o benefício cardiovascular máximo.</p>
            <p><strong>Flocos grossos (old fashioned)</strong> — menos processados, mais fibra que os finos. Retêm melhor a estrutura da beta-glucana. Ideais para mingau ou overnight oats.</p>
            <p><strong>Flocos finos/instantâneos</strong> — mais processados, digestão mais rápida, menor efeito na glicemia. Praticidade maior, benefício um pouco menor.</p>
            <p><strong>Farinha de aveia</strong> — perde parte da estrutura da fibra. Usada para receitas, mas não é a melhor para os benefícios de saúde.</p>
            <h2>Como consumir</h2>
            <p>Mingau de flocos grossos com leite ou bebida vegetal é a forma que mais preserva a beta-glucana. Overnight oats (flocos deixados de molho na geladeira overnight) também funcionam bem. Aveia crua polvilhada em iogurte preserva a beta-glucana. Aveia assada em biscoitos tem benefício reduzido.</p>
            <h2>Quanto comer?</h2>
            <p>40-80g por dia (3-6 colheres de sopa) é a faixa que produz benefícios nas pesquisas. Comece com menos se não está habituado — o aumento de fibra pode causar gases inicialmente.</p>
          </div>
        </article>
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Nutry.life — Informação nutricional baseada em evidências</p>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem", opacity: 0.6 }}>Este conteúdo é informativo e não substitui orientação de nutricionista.</p>
      </footer>
    </>
  );
}
