import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Açúcar vs Adoçante: Qual é Pior Para a Saúde? | Nutry.life",
  description: "Trocar açúcar por adoçante parece a escolha óbvia para quem quer emagrecer. Mas a ciência tem respostas mais complexas sobre qual realmente prejudica mais.",
  openGraph: { title: "Açúcar vs Adoçante: Qual é Pior Para a Saúde? | Nutry.life", description: "Trocar açúcar por adoçante parece a escolha óbvia para quem quer emagrecer. Mas a ciência tem respostas mais complexas sobre qual realmente prejudica mais.", url: "https://nutry.life/blog/acucar-vs-adocante-qual-e-pior" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>30 de junho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Açúcar vs Adoçante: Qual é Pior Para a Saúde?</h1>
          <p className={styles.postExcerpt}>Trocar açúcar por adoçante parece a escolha óbvia para quem quer emagrecer. Mas a ciência tem respostas mais complexas sobre qual realmente prejudica mais.</p>
          <div className={styles.postContent}>
            <p>A guerra entre açúcar e adoçante dura décadas. De um lado, o açúcar com suas calorias e impacto glicêmico. Do outro, os adoçantes com zero caloria — mas cercados de dúvidas sobre efeitos a longo prazo.</p>
            <h2>O problema do açúcar</h2>
            <p>O açúcar refinado (sacarose) é calórico e tem alto índice glicêmico — eleva rapidamente a glicose no sangue, provoca pico de insulina e, em excesso, contribui para ganho de peso, resistência à insulina e risco cardiovascular. O brasileiro consome em média 54g de açúcar por dia — quase o dobro do recomendado pela OMS (25g).</p>
            <h2>O problema dos adoçantes</h2>
            <p>Adoçantes artificiais (aspartame, sucralose, sacarina) têm zero ou quase zero caloria. A ANVISA e FDA consideram seguros nas doses habituais de consumo. O debate atual gira em torno de efeitos na microbiota intestinal e se o sabor doce sem caloria pode alterar a percepção de saciedade e aumentar o apetite por doces.</p>
            <h2>Adoçantes naturais: meio-termo?</h2>
            <p>Estévia e eritritol são adoçantes de origem natural com boa tolerância e sem os questionamentos dos artificiais. A estévia tem zero caloria e índice glicêmico zero. O eritritol tem 0,2 cal/g e é bem tolerado em doses moderadas. São as melhores opções para quem quer reduzir açúcar sem usar artificiais.</p>
            <h2>Qual é pior?</h2>
            <p>Para quem tem diabetes ou resistência à insulina, o açúcar é claramente mais prejudicial. Para a população geral que consome moderadamente, os adoçantes artificiais são seguros — mas não são necessariamente saudáveis. O ideal é reduzir o paladar para o doce em geral, não só trocar uma fonte pela outra.</p>
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
