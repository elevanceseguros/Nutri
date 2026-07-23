import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Fibra Alimentar: Para Que Serve e Por Que a Maioria Come Pouco? | Nutry.life",
  description: "Fibra alimentar regula o intestino, controla o colesterol e melhora a saciedade. Mas o brasileiro consome em média metade do recomendado. Saiba como corrigir isso.",
  openGraph: { title: "Fibra Alimentar: Para Que Serve e Por Que a Maioria Come Pouco? | Nutry.life", description: "Fibra alimentar regula o intestino, controla o colesterol e melhora a saciedade. Mas o brasileiro consome em média metade do recomendado. Saiba como corrigir isso.", url: "https://nutry.life/blog/fibra-alimentar-para-que-serve" },
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
            <span className={styles.postCategory}>Saúde e Nutrição</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>13 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Fibra Alimentar: Para Que Serve e Por Que a Maioria Come Pouco?</h1>
          <p className={styles.postExcerpt}>Fibra alimentar regula o intestino, controla o colesterol e melhora a saciedade. Mas o brasileiro consome em média metade do recomendado. Saiba como corrigir isso.</p>
          <div className={styles.postContent}>
            <p>A fibra alimentar é um dos nutrientes mais negligenciados na dieta brasileira. Estudos mostram que a ingestão média do brasileiro é de 13g por dia — menos da metade da recomendação de 25-38g. Essa deficiência tem consequências reais na saúde digestiva, cardiovascular e metabólica.</p>
            <h2>O que é fibra alimentar?</h2>
            <p>Fibra é a parte dos alimentos vegetais que o organismo não consegue digerir — ela passa pelo trato gastrointestinal sem ser absorvida. Existem dois tipos principais com funções complementares.</p>
            <p><strong>Fibra solúvel</strong> — dissolve em água formando um gel no intestino. Retarda o esvaziamento gástrico (aumenta saciedade), reduz a absorção de colesterol e glicose. Fontes: aveia, maçã, banana, feijão, psyllium.</p>
            <p><strong>Fibra insolúvel</strong> — não dissolve em água e aumenta o volume do bolo fecal, acelerando o trânsito intestinal. Previne constipação. Fontes: farelo de trigo, vegetais, cascas de frutas, grãos integrais.</p>
            <h2>Benefícios com evidência sólida</h2>
            <ul>
              <li><strong>Saúde intestinal</strong> — previne constipação e alimenta as bactérias benéficas do intestino (prebiótico natural)</li>
              <li><strong>Colesterol</strong> — fibra solúvel reduz LDL em 5-10% com consumo adequado</li>
              <li><strong>Controle glicêmico</strong> — retarda absorção de açúcar, reduzindo picos de glicose</li>
              <li><strong>Saciedade</strong> — aumenta o tempo de digestão e reduz fome entre refeições</li>
              <li><strong>Prevenção de câncer colorretal</strong> — evidência consistente em estudos observacionais</li>
            </ul>
            <h2>Por que os brasileiros comem pouco?</h2>
            <p>O arroz branco substituiu o integral, pão integral é minoria, e frutas e vegetais perderam espaço para alimentos ultraprocessados. A fibra foi "processada para fora" da dieta moderna.</p>
            <h2>Como aumentar o consumo na prática</h2>
            <ul>
              <li>Trocar arroz branco por integral ou misturar os dois</li>
              <li>Comer frutas com casca sempre que possível</li>
              <li>Incluir leguminosas (feijão, lentilha) todos os dias</li>
              <li>Adicionar chia ou linhaça no iogurte ou vitamina</li>
              <li>Preferir pão integral ao branco</li>
            </ul>
            <p>Aumente a fibra gradualmente — aumentar muito rápido causa gases e desconforto. E beba água — fibra sem hidratação pode piorar a constipação.</p>
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
