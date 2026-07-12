import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Vitamina C: Dose Diária, Suplemento ou Fruta Resolve? | Nutry.life",
  description: "Vitamina C tem papel importante na imunidade, colágeno e antioxidação. Mas dose alta ajuda mais? E frutas resolvem sem suplemento? Respostas com base em evidências.",
  keywords: "vitamina c dose diaria, vitamina c suplemento vale a pena, vitamina c frutas, vitamina c imunidade, quanto tomar vitamina c",
  openGraph: { title: "Vitamina C: Dose Diária, Suplemento ou Fruta Resolve? | Nutry.life", description: "Quanto você precisa, se fruta resolve e quando suplementar.", url: "https://nutry.life/blog/vitamina-c-dose-suplemento-ou-fruta" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>11 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>5 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Vitamina C: Dose Diária, Suplemento ou Fruta Resolve?</h1>
          <p className={styles.postExcerpt}>Vitamina C virou sinônimo de imunidade — mas megadoses resolvem gripas? E a famosa laranja dá conta sozinha? O que a ciência realmente mostra.</p>
          <div className={styles.postContent}>

            <p>A vitamina C é um dos suplementos mais vendidos no mundo — e um dos mais mal compreendidos. A ideia de que megadoses previnem ou curam gripes é muito mais marketing do que ciência. Mas a vitamina C tem papéis reais e importantes no organismo.</p>

            <h2>Para que a vitamina C serve de verdade</h2>
            <p>As funções com evidência sólida:</p>
            <ul>
              <li><strong>Síntese de colágeno</strong> — essencial para pele, articulações, vasos sanguíneos e cicatrização. Sem vitamina C adequada, a produção de colágeno é comprometida</li>
              <li><strong>Antioxidante</strong> — neutraliza radicais livres, protegendo células do estresse oxidativo</li>
              <li><strong>Absorção de ferro</strong> — vitamina C aumenta a absorção de ferro não-heme (de fontes vegetais) em até 3x. Comer feijão com limão ou laranja não é mito</li>
              <li><strong>Imunidade</strong> — apoia a função de células imunes, mas não previne gripe nem cura resfriado em quem já tem níveis adequados</li>
            </ul>

            <h2>Vitamina C e imunidade: o que as pesquisas mostram</h2>
            <p>A metanálise mais robusta sobre vitamina C e resfriados (Hemilä, Cochrane Review) mostrou que suplementação contínua reduz a <em>duração</em> do resfriado em cerca de 8% em adultos — mas não previne. Em atletas submetidos a estresse físico intenso (maratonistas, soldados em campo), a redução de incidência foi mais significativa.</p>
            <p>Para a maioria das pessoas sedentárias ou moderadamente ativas: vitamina C adequada na dieta é suficiente. Megadoses não trazem benefício adicional.</p>

            <h2>Quanto você precisa por dia?</h2>
            <p>A RDA (ingestão diária recomendada) é de <strong>75mg para mulheres e 90mg para homens</strong>. Fumantes precisam de mais — o cigarro depleta vitamina C. O limite superior tolerável é 2.000mg/dia — acima disso, risco de cálculos renais e diarreia.</p>

            <h2>Frutas resolvem?</h2>
            <p>Para a maioria das pessoas, sim. Fontes ricas em vitamina C:</p>
            <ul>
              <li>Caju (100g) — 219mg ✓✓</li>
              <li>Goiaba (100g) — 228mg ✓✓</li>
              <li>Kiwi (100g) — 93mg ✓</li>
              <li>Laranja (100g) — 53mg</li>
              <li>Morango (100g) — 59mg</li>
              <li>Pimentão vermelho (100g) — 128mg ✓✓</li>
            </ul>
            <p>Uma goiaba ou dois cajus já superam a recomendação diária com folga. A laranja sozinha, ao contrário do senso comum, não é a fonte mais rica.</p>

            <h2>Quando suplementar faz sentido</h2>
            <p>Suplementação é justificada para: fumantes, pessoas com dieta pobre em frutas e vegetais, atletas de alto rendimento, pós-cirúrgicos com necessidade maior de colágeno, e idosos com absorção reduzida.</p>
            <p>Para o restante: uma dieta com frutas e vegetais variados resolve sem precisar de suplemento.</p>

            <h2>Vitamina C lipossomal: vale pagar mais?</h2>
            <p>A vitamina C lipossomal promete absorção superior por encapsular a vitamina em lipídeos. Estudos mostram absorção um pouco maior, mas a diferença clínica para quem tem dieta adequada é mínima. Para quem precisa de altas doses por recomendação médica, pode fazer sentido. Para uso geral, o ácido ascórbico comum resolve.</p>

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
