import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Ketchup, Mostarda ou Barbecue: Como Comparar Açúcar, Sódio e Ingredientes";
const description = "Compare ketchup, mostarda e molho barbecue pela mesma quantidade, observando açúcares adicionados, sódio, ingredientes, porção e uso culinário.";
const url = "https://www.nutry.life/blog/ketchup-mostarda-barbecue-comparar-acucar-sodio-rotulo";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-27", modifiedTime: "2026-10-27" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🥫 Rótulos e cozinha · 7 min de leitura · 27 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Ketchup, mostarda e molho barbecue não são versões equivalentes do mesmo produto. Eles têm receitas, sabores e usos diferentes, e os teores de açúcares adicionados e sódio podem variar bastante entre categorias e marcas.</p>
          <p>Em vez de procurar um vencedor universal, compare produtos que cumpram a mesma função na sua refeição, use a coluna de 100 g para padronizar a análise e depois volte à porção realmente servida.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Organize escolhas que façam sentido no conjunto</strong>
            <p>Gere uma sugestão inicial de plano alimentar e adapte molhos, porções e preparos às suas preferências.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>O que costuma mudar entre os três molhos?</h2>
          <div style={{ overflowX: "auto" }}><table>
            <thead><tr><th scope="col">Produto</th><th scope="col">Perfil culinário</th><th scope="col">Pontos para conferir</th></tr></thead>
            <tbody>
              <tr><td>Ketchup</td><td>Tomate, sabor agridoce e acidez</td><td>Açúcares adicionados, sódio e concentração de tomate variam</td></tr>
              <tr><td>Mostarda</td><td>Sementes de mostarda, vinagre e sabor picante ou ácido</td><td>Sódio, espessantes, açúcar e tipo de mostarda mudam entre versões</td></tr>
              <tr><td>Barbecue</td><td>Sabor adocicado, defumado e mais intenso</td><td>Açúcares adicionados, sódio, aromas e consistência merecem comparação</td></tr>
            </tbody>
          </table></div>
          <p>Essas são características gerais, não regras para toda marca. Há ketchup sem adição de açúcares, mostarda adoçada e barbecue com formulações muito diferentes. A resposta está na embalagem específica.</p>

          <h2>Comece pela coluna de 100 g</h2>
          <p>A tabela por 100 g permite comparar produtos na mesma base, mesmo quando as marcas declaram porções diferentes. Observe açúcares adicionados, sódio, carboidratos e energia. Depois, confira quantos gramas cabem na sua colher ou porção habitual.</p>
          <p>Comparar apenas “uma porção” pode induzir ao erro quando um rótulo usa 12 g e outro 20 g. A coluna padronizada responde qual produto é mais concentrado; a porção real ajuda a estimar o que entra na refeição.</p>

          <h2>O que significa a lupa frontal?</h2>
          <p>Para alimentos sólidos e semissólidos, a Anvisa estabelece a lupa de “alto em açúcar adicionado” a partir de 15 g por 100 g e de “alto em sódio” a partir de 600 mg por 100 g. A lupa facilita uma triagem rápida, mas não substitui a leitura da tabela.</p>
          <p>A ausência de lupa não significa que o molho seja livre de açúcar ou sódio. Pode haver quantidade abaixo do limite frontal, e o impacto prático ainda depende de quanto e com que frequência o produto é usado.</p>

          <h2>Como ler a lista de ingredientes</h2>
          <p>Procure os componentes que dão base, sabor e textura: tomate, mostarda, vinagre, água, açúcar, melaço, sal, especiarias, amidos, gomas, conservantes, corantes e aromas. Formulações curtas ou longas não definem sozinhas a qualidade; elas ajudam a entender o que está sendo comprado.</p>
          <p>Açúcar pode aparecer com nomes diferentes, como açúcar, xarope, glicose, melaço ou mel. A tabela de açúcares adicionados reúne essa informação nutricional e é a melhor base para comparar quantidades entre opções.</p>

          <h2>“Zero açúcar” e “light” respondem a perguntas diferentes</h2>
          <p>Uma versão sem adição de açúcares pode usar edulcorantes ou recorrer a outros ajustes de sabor e textura. Já “light” indica redução de algum nutriente ou valor energético em relação a um produto de referência, conforme a alegação do rótulo; não significa automaticamente menos sódio ou melhor escolha para todas as pessoas.</p>
          <p>Confira qual atributo foi reduzido, compare o produto de referência e leia os ingredientes. Escolher apenas pela palavra da frente pode esconder uma troca que não corresponde ao que você pretendia reduzir.</p>

          <h2>Uma colher é sempre uma porção pequena?</h2>
          <p>Colheres variam de tamanho e podem ser servidas rasas ou cheias. Molhos também se espalham no pão, acompanham petiscos e entram em receitas, o que facilita repetir sem perceber. Se a quantidade for importante, pese uma porção uma vez para conhecer o volume usado em casa.</p>
          <p>O objetivo não precisa ser medir cada refeição. A medida pode servir para calibrar o olhar e decidir se vale usar menos, diluir em uma preparação, alternar sabores ou preparar um molho caseiro.</p>

          <h2>Caseiro é automaticamente melhor?</h2>
          <p>Preparar em casa permite controlar ingredientes e ajustar doçura e sal, mas não garante ausência deles nem maior segurança. Higiene, refrigeração, validade curta e procedência dos ingredientes continuam importantes.</p>
          <p>Molhos industrializados oferecem rótulo, prazo e instruções padronizadas. A escolha prática pode alternar versões prontas e caseiras sem transformar uma delas em solução perfeita.</p>

          <h2>Como usar com equilíbrio culinário</h2>
          <ul>
            <li>prove a preparação antes de somar mais sal;</li>
            <li>use o molho para complementar, não encobrir todo o sabor do alimento;</li>
            <li>combine com ervas, limão, vinagre, tomate ou iogurte quando isso fizer sentido à receita;</li>
            <li>observe a soma com queijo, embutidos, hambúrgueres e outros itens já salgados;</li>
            <li>compare a porção total usada em receitas para várias pessoas;</li>
            <li>em restrições clínicas, siga a orientação individual do profissional responsável.</li>
          </ul>

          <h2>Conservação após abrir</h2>
          <p>Siga o rótulo quanto à refrigeração e ao prazo depois da abertura. Mantenha tampa e bico limpos, evite contato com alimentos e não complete uma embalagem antiga com produto novo. Descarte diante de mofo, estufamento, vazamento, odor incomum ou conservação fora do indicado.</p>

          <h2>Checklist rápido de comparação</h2>
          <ol>
            <li>Escolha produtos que tenham a função culinária desejada.</li>
            <li>Compare açúcares adicionados e sódio por 100 g.</li>
            <li>Volte à porção realmente usada.</li>
            <li>Leia ingredientes, edulcorantes e alergênicos.</li>
            <li>Entenda qual atributo uma alegação “light” ou “zero” descreve.</li>
            <li>Confira refrigeração e prazo depois de abrir.</li>
          </ol>
          <p>Leia também: <Link href="/blog/como-ler-rotulo-de-alimentos">como ler o rótulo de alimentos</Link> · <Link href="/blog/shoyu-tradicional-light-sodio-ingredientes-comparar">shoyu tradicional ou light</Link> · <Link href="/blog/como-reduzir-o-acucar-da-dieta">como reduzir o açúcar da alimentação</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte um plano alimentar que caiba na sua rotina</h2><p>Use o gerador para obter uma sugestão inicial e organizar refeições, acompanhamentos e preferências. Necessidades clínicas e restrições exigem avaliação profissional.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, alergias, restrições, sintomas e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem nutricional</a> · <a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guia Alimentar para a População Brasileira</a>. Consultadas em 27/10/2026.</p>
      </footer>
    </main>
  );
}
