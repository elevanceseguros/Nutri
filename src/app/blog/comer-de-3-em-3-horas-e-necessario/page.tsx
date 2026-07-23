import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Comer de 3 em 3 Horas é Necessário? O Mito do Metabolismo | Nutry.life",
  description: "Comer de 3 em 3 horas para 'acelerar o metabolismo' foi um dos conselhos mais repetidos da nutrição. Mas a ciência revisou essa ideia — e a conclusão surpreende.",
  openGraph: { title: "Comer de 3 em 3 Horas é Necessário? O Mito do Metabolismo | Nutry.life", description: "Comer de 3 em 3 horas para 'acelerar o metabolismo' foi um dos conselhos mais repetidos da nutrição. Mas a ciência revisou essa ideia — e a conclusão surpreende.", url: "https://nutry.life/blog/comer-de-3-em-3-horas-e-necessario" },
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
            <span className={styles.postCategory}>Emagrecimento</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>19 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Comer de 3 em 3 Horas é Necessário? O Mito do Metabolismo</h1>
          <p className={styles.postExcerpt}>Comer de 3 em 3 horas para 'acelerar o metabolismo' foi um dos conselhos mais repetidos da nutrição. Mas a ciência revisou essa ideia — e a conclusão surpreende.</p>
          <div className={styles.postContent}>
            <p>Durante décadas, nutricionistas e personal trainers repetiram o mesmo conselho: coma de 3 em 3 horas para manter o metabolismo acelerado e evitar que o corpo entre em "modo catabolismo". Hoje sabemos que essa recomendação tem muito mais de mito do que de ciência.</p>
            <h2>De onde veio esse conselho?</h2>
            <p>A ideia vem de estudos que mostraram que comer aumenta o gasto energético (efeito térmico dos alimentos). A lógica era: mais refeições = mais estímulos metabólicos = mais gasto calórico. O problema é que o efeito térmico é proporcional à quantidade de comida, não à frequência. Dividir 2.000 kcal em 6 refeições ou em 3 gera o mesmo efeito térmico total.</p>
            <h2>O que as pesquisas mostram</h2>
            <p>Estudos controlados comparando 2-3 refeições vs 5-6 refeições com as mesmas calorias totais mostram resultados equivalentes em perda de peso, composição corporal e marcadores metabólicos. A frequência de refeições, por si só, não acelera nem desacelera o metabolismo de forma significativa.</p>
            <h2>O mito do "modo catabolismo"</h2>
            <p>O corpo não começa a "comer músculo" depois de 3-4 horas sem comer. O glicogênio hepático e muscular, e depois a gordura corporal, sustentam o organismo por horas sem impacto significativo na massa muscular. Isso só acontece em jejuns prolongados de 24h+, e mesmo assim o catabolismo muscular é bem menor do que o imaginado.</p>
            <h2>Então qual é a frequência ideal?</h2>
            <p>Não existe uma frequência universal. O melhor padrão é aquele que: você consegue manter consistentemente, ajuda a controlar o apetite ao longo do dia, e se encaixa na sua rotina. Para algumas pessoas, 3 refeições funcionam melhor. Para outras, 5 ou 6 ajudam a controlar a fome. Ambos são válidos.</p>
            <h2>O que realmente importa</h2>
            <p>Total calórico do dia, qualidade dos alimentos, proteína adequada e sono de qualidade têm muito mais impacto no metabolismo e na composição corporal do que a frequência de refeições.</p>
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
