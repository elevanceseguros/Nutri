import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Ômega-3: Para Que Serve, Qual Dose e Qual Marca Comprar | Nutry.life",
  description: "Ômega-3 tem evidências sólidas para coração, cérebro e inflamação. Mas qual dose funciona, EPA ou DHA importa mais e qual marca realmente entrega o que promete?",
  keywords: "omega 3 para que serve, omega 3 dose, melhor omega 3, EPA DHA diferença, omega 3 peixe vs vegano",
  openGraph: { title: "Ômega-3: Para Que Serve, Qual Dose e Qual Marca | Nutry.life", description: "Dose, EPA vs DHA e como escolher um bom suplemento.", url: "https://nutry.life/blog/omega-3-para-que-serve" },
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
            <span className={styles.postCategory}>Suplementação</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>09 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Ômega-3: Para Que Serve, Qual Dose e Qual Marca Comprar</h1>
          <p className={styles.postExcerpt}>Ômega-3 é um dos suplementos mais estudados do mundo — com benefícios reais para coração, cérebro e inflamação. Mas a dose e a qualidade importam muito mais do que a maioria imagina.</p>
          <div className={styles.postContent}>

            <p>Poucas substâncias têm uma base científica tão sólida quanto os ácidos graxos ômega-3. Décadas de pesquisa mostram benefícios consistentes em saúde cardiovascular, função cerebral, redução de inflamação e até humor. Mas a suplementação tem um detalhe importante: dose e qualidade determinam se você vai sentir resultado ou desperdiçar dinheiro.</p>

            <h2>O que é ômega-3 e quais são os tipos?</h2>
            <p>Ômega-3 é uma família de ácidos graxos poli-insaturados. Os mais estudados são:</p>
            <ul>
              <li><strong>EPA (ácido eicosapentaenoico)</strong> — principal atuação no combate à inflamação, saúde cardiovascular e humor</li>
              <li><strong>DHA (ácido docosahexaenoico)</strong> — fundamental para o cérebro e retina; 60% do tecido cerebral é composto de gorduras, e o DHA é a principal</li>
              <li><strong>ALA (ácido alfa-linolênico)</strong> — presente em fontes vegetais (linhaça, chia); o corpo converte apenas 5-15% em EPA/DHA</li>
            </ul>

            <h2>Para que serve o ômega-3?</h2>
            <p>As evidências mais robustas são para:</p>
            <ul>
              <li><strong>Triglicerídeos</strong> — doses de 2-4g de EPA+DHA reduzem triglicerídeos em 15-30%</li>
              <li><strong>Inflamação crônica</strong> — EPA tem ação anti-inflamatória bem documentada</li>
              <li><strong>Saúde cerebral</strong> — DHA é estrutural para o cérebro; deficiência está ligada a declínio cognitivo</li>
              <li><strong>Humor e depressão</strong> — estudos mostram benefício em depressão leve a moderada, especialmente com EPA dominante</li>
              <li><strong>Olho seco</strong> — DHA é componente do filme lacrimal</li>
            </ul>

            <h2>Qual dose funciona?</h2>
            <p>A maioria das cápsulas de ômega-3 tem 1g de óleo de peixe — mas a concentração de EPA+DHA varia muito. Uma cápsula genérica pode ter apenas 300mg de EPA+DHA, enquanto uma premium tem 700-800mg na mesma cápsula.</p>
            <p>Doses eficazes por objetivo:</p>
            <ul>
              <li><strong>Saúde geral e prevenção:</strong> 500mg–1g de EPA+DHA/dia</li>
              <li><strong>Redução de triglicerídeos:</strong> 2-4g de EPA+DHA/dia (médico deve acompanhar)</li>
              <li><strong>Humor e inflamação:</strong> 1-2g de EPA+DHA/dia</li>
            </ul>

            <h2>Como escolher uma boa marca?</h2>
            <p>O que verificar no rótulo:</p>
            <ul>
              <li>Quantidade de EPA+DHA por cápsula (não só "óleo de peixe total")</li>
              <li>Forma molecular: triglicerídeo reesterificado (rTG) tem melhor absorção que etil éster</li>
              <li>Certificação IFOS (International Fish Oil Standards) — garante pureza e ausência de metais pesados</li>
              <li>Ausência de sabor de peixe intenso (oxidação é sinal de qualidade inferior)</li>
            </ul>

            <h2>Ômega-3 vegano: funciona?</h2>
            <p>O ômega-3 vegano vem de algas — a mesma fonte que os peixes usam. Algas produzem EPA e DHA diretamente, então é uma alternativa legítima para vegetarianos e veganos, sem a preocupação com contaminantes do oceano. Tende a ser mais caro, mas entrega os mesmos ácidos graxos.</p>

            <h2>Melhor horário para tomar</h2>
            <p>Com refeições contendo gordura — aumenta a absorção em até 50%. Evite tomar em jejum. Refrigeração após aberto preserva a qualidade e evita oxidação.</p>

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
