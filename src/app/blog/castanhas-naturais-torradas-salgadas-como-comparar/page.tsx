import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Castanhas Naturais, Torradas ou Salgadas: Como Comparar e Guardar";
const description = "Compare ingredientes, sódio, porção, preço e conservação e entenda por que diferentes castanhas não têm composição idêntica.";
const url = "https://www.nutry.life/blog/castanhas-naturais-torradas-salgadas-como-comparar";
export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-09-07", modifiedTime: "2026-09-07" },
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-09-07", dateModified: "2026-09-07", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};
export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🥜 Escolhas práticas · 4 min de leitura · 7 de setembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Castanha-do-pará, castanha-de-caju, noz, amêndoa e pistache costumam aparecer no mesmo corredor, mas não são nutricionalmente idênticos. A versão natural, torrada, salgada ou coberta também muda ingredientes, sódio, sabor, conservação e facilidade de perceber a quantidade consumida.</p>
          <div className={styles.articleCtaTop} data-cta="top">
            <div><strong>Planeje lanches que funcionem na sua rotina</strong>
              <p>Gere uma sugestão de plano alimentar na Nutry.life e adapte os alimentos às suas preferências.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>
          <h2>Natural e torrada: o que realmente muda?</h2>
          <p>Torrar modifica aroma, crocância e umidade. O resultado nutricional depende do alimento, da temperatura, do tempo e dos ingredientes usados. Uma castanha torrada sem óleo e sem sal é diferente de uma versão frita ou temperada; o nome na frente da embalagem não conta toda a história.</p>
          <p>Use a lista de ingredientes para verificar se há óleo, sal, açúcar, mel, chocolate ou aromatizantes. Se a lista trouxer apenas a castanha, a principal diferença em relação à versão crua tende a estar no processamento e na textura.</p>
          <h2>“Sem sal” e “salgada” não devem ser comparadas no paladar</h2>
          <p>O sódio declarado na tabela nutricional permite comparar produtos na mesma base, preferencialmente por 100 g. Observe também a porção realmente consumida. Misturas temperadas podem concentrar sal na superfície, e a intensidade do sabor não informa sozinha a quantidade de sódio.</p>
          <p>Para quem precisa controlar sódio por orientação profissional, a comparação de rótulos é especialmente útil. Isso não significa que todas as pessoas precisem eliminar versões salgadas; frequência, quantidade e conjunto da alimentação importam.</p>
          <h2>Castanhas são fontes de gordura — e isso não é defeito</h2>
          <p>Nozes e castanhas geralmente fornecem lipídios, além de proteína, fibras e micronutrientes em proporções que variam entre as espécies. A TBCA reúne alimentos separados porque castanha-do-pará, castanha-de-caju, amendoim e mixes não são intercambiáveis em todos os nutrientes.</p>
          <p>Por serem alimentos concentrados, pequenas quantidades ocupam pouco volume. Colocar a porção em um recipiente, em vez de comer diretamente do pacote, pode ajudar quem deseja perceber melhor quanto serviu — sem transformar a medida em regra universal.</p>
          <h2>Mix de castanhas é sempre melhor?</h2>
          <p>Não necessariamente. Um mix pode ampliar sabores e variedade, mas também pode trazer mais sal, frutas açucaradas, cereais, chocolate ou uma proporção muito maior do ingrediente de menor custo. Leia a ordem da lista: os ingredientes aparecem em sequência decrescente de quantidade.</p>
          <p>Compare preço pelo quilo e não apenas pelo tamanho do pacote. Se a mistura atende ao seu gosto e cabe no orçamento, ela pode ser prática. Comprar uma única variedade e alternar ao longo da semana também funciona.</p>
          <h2>Alergênicos exigem atenção ao rótulo</h2>
          <p>Amendoim e diferentes castanhas podem provocar reações alérgicas. A Anvisa exige declarações específicas de alergênicos em alimentos embalados. Quem tem diagnóstico de alergia deve seguir sua orientação individual, verificar a advertência do produto e considerar risco de contaminação cruzada.</p>
          <p>Trocar uma castanha por outra não é automaticamente seguro. Reações e restrições variam, e receitas, granolas, barras e pastas podem conter ingredientes que não ficam evidentes pelo nome comercial.</p>
          <h2>Como guardar para preservar sabor e qualidade</h2>
          <ol>
            <li>Mantenha a embalagem bem fechada, protegida de calor, luz e umidade.</li>
            <li>Depois de abrir, siga a orientação do fabricante sobre prazo e refrigeração.</li>
            <li>Use recipiente limpo e seco se transferir o produto.</li>
            <li>Descarte se houver mofo, odor rançoso, insetos ou alteração importante de sabor.</li>
          </ol>
          <p>Pacotes grandes nem sempre são mais econômicos quando demoram a ser consumidos. A gordura pode oxidar e produzir sabor rançoso; por isso, tamanho da embalagem, frequência de uso e local de armazenamento entram na decisão.</p>
          <h2>Ideias práticas sem prescrição de porção</h2>
          <ul>
            <li>Adicionar castanhas picadas à fruta ou ao iogurte.</li>
            <li>Usar em saladas, arroz, legumes ou preparações com aveia.</li>
            <li>Levar uma quantidade separada para o lanche.</li>
            <li>Alternar variedades conforme preço, sabor e disponibilidade.</li>
          </ul>
          <p>A quantidade adequada depende do restante da alimentação, da fome, das necessidades e dos objetivos de cada pessoa. Em caso de alergia, doença renal, dificuldade de mastigação ou outra condição clínica, procure orientação individual.</p>
          <h2>Roteiro rápido de comparação</h2>
          <p>Antes de comprar, confira: qual castanha predomina, quais ingredientes foram adicionados, sódio por 100 g, tamanho da porção, advertências de alergênicos, validade, condição da embalagem e preço por quilo. Esse roteiro costuma ser mais útil do que procurar um único produto “perfeito”.</p>
          <p>Leia também: <Link href="/blog/como-ler-rotulo-de-alimentos">como ler rótulos de alimentos</Link> · <Link href="/blog/gorduras-boas-e-ruins">como entender as gorduras na alimentação</Link>.</p>
          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte um plano alimentar com escolhas que cabem no seu dia</h2>
              <p>Gere uma sugestão, adapte alimentos e horários às suas preferências e procure orientação profissional quando precisar de uma estratégia individual.</p>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, restrições alimentares, alergias e condições de saúde exigem orientação individual.</p>
        <p>Fontes e referências: <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem de alimentos</a> · <a href="https://www.tbca.net.br/base-dados/composicao_estatistica.php?atuald=6&amp;pagina=54" target="_blank" rel="noopener noreferrer">TBCA — nozes, castanhas e sementes</a> · <a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guia Alimentar</a>. Referências consultadas em 07/09/2026.</p>
      </footer>
    </main>
  );
}
