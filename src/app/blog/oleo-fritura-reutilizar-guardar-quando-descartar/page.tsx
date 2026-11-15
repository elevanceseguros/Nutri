import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Óleo de Fritura: Como Reutilizar, Guardar e Saber Quando Descartar";
const description = "Veja por que não existe um número universal de reutilizações, como reduzir a degradação do óleo, reconhecer sinais de descarte e dar destino responsável.";
const url = "https://www.nutry.life/blog/oleo-fritura-reutilizar-guardar-quando-descartar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    publishedTime: "2026-11-15",
    modifiedTime: "2026-11-15",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🍳 Segurança e aproveitamento · 8 min de leitura · 15 de novembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Reutilizar óleo de fritura não é uma decisão que possa ser resolvida por uma regra como “duas” ou “três vezes”. Temperatura, duração, tipo de alimento, quantidade de resíduos, contato com ar e luz e características do próprio óleo interferem na velocidade de degradação.</p>
          <p>A Anvisa ressalta que o ideal é não reutilizar. Quando houver necessidade real, recomenda controlar o processo e descartar diante de sinais de alteração. Isso é diferente de prometer que filtrar ou guardar corretamente torna o óleo seguro por um número fixo de usos.</p>
          <div className={styles.articleCtaTop} data-cta="top">
            <div>
              <strong>Planeje preparos que façam sentido na sua rotina</strong>
              <p>Gere uma sugestão de plano alimentar na Nutry.life e adapte técnicas, ingredientes e frequência às suas preferências.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>

          <h2>O que muda no óleo durante a fritura?</h2>
          <p>Óleo quente entra em contato com oxigênio, água e componentes liberados pelo alimento. Nesse ambiente ocorrem reações de oxidação, hidrólise e polimerização. Com o tempo, elas alteram sabor, odor, cor, viscosidade e desempenho culinário, além de formar compostos de degradação.</p>
          <p>Uma revisão científica publicada em 2025 destaca que a velocidade dessas transformações depende tanto da composição do óleo quanto de fatores externos, como temperatura, alimento, desenho da fritadeira e presença de metais. Por isso, resultados de um experimento não se convertem em um limite doméstico universal.</p>

          <h2>Existe um número seguro de reutilizações?</h2>
          <p>Não há um número único aplicável a todas as cozinhas. Um ciclo curto em temperatura controlada não equivale a várias horas de aquecimento; fritar alimento empanado, que libera partículas, não equivale a fritar um alimento com poucos resíduos; e completar óleo velho com óleo novo não “zera” a degradação acumulada.</p>
          <p>Estudos experimentais conseguem comparar ciclos sob condições padronizadas, mas isso não permite afirmar que toda casa pode repetir exatamente o mesmo número. A decisão prática precisa considerar o histórico do óleo e sinais de descarte, adotando postura conservadora quando houver dúvida.</p>

          <h2>Como reduzir a degradação durante o uso</h2>
          <ul>
            <li><strong>Evite ultrapassar 180 °C:</strong> a recomendação técnica da Anvisa usa essa temperatura como máximo e orienta não deixar o óleo chegar ao ponto de produzir fumaça.</li>
            <li><strong>Retire resíduos:</strong> partículas de massa, farinha e empanado continuam aquecendo e aceleram alterações.</li>
            <li><strong>Não mantenha calor sem necessidade:</strong> desligue quando o preparo terminar, evitando exposição prolongada.</li>
            <li><strong>Não misture continuamente óleo novo ao degradado:</strong> isso não restaura a qualidade do lote antigo.</li>
            <li><strong>Use utensílios adequados:</strong> recipientes danificados ou materiais reativos não são uma boa escolha.</li>
          </ul>
          <p>Se não há termômetro, observe o comportamento do óleo e evite deliberadamente o ponto de fumaça. Fumaça persistente não é o mesmo que o vapor de água liberado pelo alimento.</p>

          <h2>Como filtrar e guardar entre usos</h2>
          <ol>
            <li>Desligue o fogo e espere o óleo esfriar antes de manusear.</li>
            <li>Retire os resíduos visíveis com utensílio apropriado e filtre o óleo frio.</li>
            <li>Transfira para recipiente limpo, seco, resistente e bem tampado.</li>
            <li>Identifique o conteúdo e a data, sem misturá-lo a um lote de histórico desconhecido.</li>
            <li>Proteja da luz e do calor. Para intervalo prolongado, a Anvisa recomenda refrigeração.</li>
          </ol>
          <p>Filtrar remove partículas, mas não reverte reações químicas que já ocorreram. Guardar no escuro e tampado pode reduzir novas alterações; não recupera óleo degradado.</p>

          <h2>Sinais de que é hora de descartar</h2>
          <p>A orientação da Anvisa indica descarte quando houver formação de espuma e fumaça durante a fritura, escurecimento intenso do óleo ou do alimento e odor ou sabor não característicos. Aumento perceptível de viscosidade, fritura irregular e excesso de óleo absorvido também merecem atenção.</p>
          <div>
            <p><strong>Espuma persistente:</strong> não confunda com bolhas normais de água ao colocar o alimento.</p>
            <p><strong>Fumaça em temperatura habitual:</strong> sugere que o óleo já não se comporta como antes.</p>
            <p><strong>Odor rançoso, queimado ou estranho:</strong> não tente mascarar com temperos.</p>
            <p><strong>Escurecimento intenso:</strong> avalie junto com o histórico e os demais sinais, não apenas pela cor isolada.</p>
            <p><strong>Histórico desconhecido:</strong> se você não sabe quanto tempo ficou aquecido ou como foi guardado, o descarte é mais prudente.</p>
          </div>

          <h2>Posso reutilizar óleo que fritou peixe?</h2>
          <p>Além da degradação, sabores, odores e componentes do alimento podem permanecer no óleo. Isso afeta preparos posteriores e pode ser relevante para pessoas com alergias. Filtrar não elimina alérgenos nem garante separação entre alimentos.</p>
          <p>Em cozinhas que atendem pessoas com alergia alimentar, contaminação cruzada exige protocolos próprios. Não use um mesmo óleo para alimentos diferentes supondo que a alta temperatura ou a filtragem eliminará todo risco.</p>

          <h2>Air fryer elimina a questão?</h2>
          <p>A fritadeira a ar usa pouco ou nenhum óleo de imersão, mas ainda depende de limpeza adequada, temperatura e preparo correto. Ela não transforma automaticamente qualquer receita em “saudável”, nem substitui variedade e equilíbrio da alimentação.</p>
          <p>Se o objetivo é reduzir a frequência de fritura por imersão, assar, grelhar, cozinhar ou usar a air fryer podem ampliar as opções. A escolha depende do alimento, da textura desejada, do equipamento e da rotina.</p>

          <h2>Como descartar sem jogar na pia</h2>
          <p>Não despeje óleo na pia, no vaso sanitário ou diretamente no solo. Depois de frio, guarde-o em recipiente fechado e verifique se o município, condomínio, mercado ou cooperativa oferece ponto de coleta. Estabelecimentos que descartam volumes relevantes devem procurar empresas, órgãos ou entidades licenciados pelo órgão ambiental competente.</p>
          <p>As orientações locais podem variar. Por isso, confirme o serviço de coleta disponível na sua cidade e mantenha o recipiente longe de crianças, animais e fontes de calor enquanto aguarda o destino.</p>

          <h2>Uma decisão prática em sete perguntas</h2>
          <ol>
            <li>O óleo chegou a fumegar ou ficou muito tempo aquecido?</li>
            <li>Há espuma persistente, odor estranho ou escurecimento intenso?</li>
            <li>Existem muitos resíduos de empanado ou alimento queimado?</li>
            <li>Ele foi filtrado, tampado, identificado e protegido da luz?</li>
            <li>Você conhece todo o histórico desde o primeiro uso?</li>
            <li>Há risco de contato cruzado com alergênicos?</li>
            <li>Se existe dúvida, vale mais a pena descartar do que insistir?</li>
          </ol>
          <p>O objetivo não é prolongar o uso a qualquer custo. É reduzir desperdício sem ignorar sinais de degradação e segurança.</p>
          <p>Leia também: <Link href="/blog/azeite-oleo-soja-canola-como-escolher">azeite, óleo de soja ou canola</Link> · <Link href="/blog/alimento-com-mofo-cortar-ou-descartar-seguranca">quando cortar ou descartar alimento com mofo</Link> · <Link href="/blog/papel-aluminio-forno-microondas-como-usar-seguranca">uso seguro de papel-alumínio</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}>
              <h2>Monte refeições possíveis para a sua rotina</h2>
              <p>Gere uma sugestão de plano alimentar, ajuste técnicas e preparos às suas preferências e procure orientação profissional quando precisar de uma estratégia individual.</p>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação sanitária local. Necessidades, restrições alimentares, alergias e condições de saúde exigem orientação individual.</p>
        <p>Fontes e referências: <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/informes/copy_of_11de2004" target="_blank" rel="noopener noreferrer">Anvisa — Informe Técnico nº 11/2004 sobre utilização e descarte de óleos de fritura</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12516161/" target="_blank" rel="noopener noreferrer">Food Science &amp; Nutrition — revisão sobre alterações químicas na fritura</a>. Consultadas em 15/11/2026.</p>
      </footer>
    </main>
  );
}
