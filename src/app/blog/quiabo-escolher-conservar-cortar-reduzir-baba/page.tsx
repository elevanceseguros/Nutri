import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Quiabo: Como Escolher, Conservar, Cortar e Reduzir a Baba";
const description = "Aprenda a escolher quiabos macios, conservar sem escurecer, cortar no momento certo e ajustar a baba conforme o preparo.";
const url = "https://www.nutry.life/blog/quiabo-escolher-conservar-cortar-reduzir-baba";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-13", modifiedTime: "2026-10-13" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-13", dateModified: "2026-10-13", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🌿 Cozinha prática · 6 min de leitura · 13 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>O quiabo pode ficar firme e dourado, macio em um ensopado ou mais espesso em receitas como caruru. A chamada baba não é sinal de que o alimento estragou: é uma característica natural que aumenta quando o fruto é cortado e entra em contato com líquido.</p>
          <p>Escolha, secagem, tamanho do corte e método de cocção ajudam a controlar a textura. As orientações abaixo são educativas e culinárias, não diagnóstico nem prescrição individual.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Leve mais variedade para as refeições da semana</strong>
            <p>Gere uma sugestão de plano alimentar e adapte combinações, preparos e porções à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Como escolher quiabo macio e menos fibroso</h2>
          <p>A Embrapa orienta procurar frutos de cor verde intensa, firmes, sem manchas escuras e com menos de 12 centímetros. Quiabos muito grandes e de cor verde pálida tendem a ser mais fibrosos e duros.</p>
          <ul>
            <li>Prefira unidades firmes, mas não ressecadas.</li>
            <li>Evite frutos murchos, viscosos por fora, rachados ou com áreas amolecidas.</li>
            <li>Manuseie com cuidado, pois o atrito pode provocar escurecimento.</li>
            <li>Não é preciso quebrar a ponta para avaliar qualidade; isso danifica o alimento.</li>
          </ul>

          <h2>Tamanho e ponto mudam o resultado</h2>
          <div style={{ overflowX: "auto" }}><table>
            <thead><tr><th>Estado</th><th>Textura provável</th><th>Uso prático</th></tr></thead>
            <tbody>
              <tr><td>Pequeno e tenro</td><td>Mais macio, com sementes discretas</td><td>Refogado rápido, grelha e salada</td></tr>
              <tr><td>Médio e firme</td><td>Boa estrutura para cortes</td><td>Frango com quiabo, ensopados e assados</td></tr>
              <tr><td>Muito grande e pálido</td><td>Pode estar duro e fibroso</td><td>Exige avaliação antes do preparo</td></tr>
            </tbody>
          </table></div>
          <p>Tamanho não define sozinho a qualidade, mas ajuda. Se a faca encontra muita resistência e fibras duras, descarte apenas as partes inadequadas ou escolha outro uso, sem transformar o teste da ponta em regra de compra.</p>

          <h2>Como higienizar antes de cortar</h2>
          <p>Lave os frutos inteiros em água corrente para retirar sujeira visível. A Anvisa orienta usar, quando indicado, sanitizante regularizado para alimentos, seguindo exatamente a diluição e o tempo de contato do rótulo, e depois enxaguar.</p>
          <p>Higienize mãos, faca, tábua e bancada. Mantenha o quiabo separado de carnes cruas e lave novamente os utensílios que tiveram contato com alimentos crus antes de usá-los em ingredientes prontos.</p>

          <h2>O passo que mais ajuda: secar bem</h2>
          <p>Depois de lavar, seque os frutos inteiros com pano limpo ou papel-toalha antes de cortar. Água na superfície aumenta o contato do interior cortado com líquido e dificulta dourar.</p>
          <p>Corte somente perto do preparo. Quiabo picado e úmido libera mais mucilagem enquanto espera, especialmente se for mexido repetidamente.</p>

          <h2>Precisa descascar?</h2>
          <p>Não. A Embrapa orienta apenas remover as extremidades. Corte rodelas, pedaços diagonais ou mantenha os frutos inteiros conforme a receita.</p>
          <p>Para dourar, pedaços maiores ou o fruto inteiro expõem menos interior. Para engrossar ensopado ou caruru, cortes menores e cocção com líquido aproveitam justamente a mucilagem.</p>

          <h2>A baba precisa ser eliminada?</h2>
          <p>Não. Ela faz parte do quiabo e pode ser desejável em determinados pratos. Em vez de tratar a textura como defeito, decida se a receita pede quiabo mais seco, macio ou capaz de engrossar o caldo.</p>
          <p>A Embrapa observa que somente o quiabo picado libera baba de forma marcante. Cozinhar ou fritar o fruto ajuda a modificar essa textura. O resultado também depende de panela, temperatura, quantidade e tempo.</p>

          <h2>Como reduzir a baba no refogado</h2>
          <ul>
            <li>Lave e seque completamente antes de cortar.</li>
            <li>Use panela larga e já aquecida, sem amontoar.</li>
            <li>Comece com pouca gordura e evite adicionar água no início.</li>
            <li>Mexa apenas o necessário para permitir que a superfície doure.</li>
            <li>Prepare porções menores quando a panela não comportar tudo em uma camada.</li>
          </ul>
          <p>A Embrapa também descreve um método tradicional: esfregar os frutos inteiros e secos com caldo de limão, esperar 15 minutos, lavar, retirar as pontas e cozinhar. O limão não deve ser acrescentado durante a cocção apenas para retirar a baba, pois pode alterar cor e sabor.</p>

          <h2>Refogar, assar ou cozinhar no caldo?</h2>
          <div style={{ overflowX: "auto" }}><table>
            <thead><tr><th>Método</th><th>Como fazer</th><th>Resultado esperado</th></tr></thead>
            <tbody>
              <tr><td>Refogado</td><td>Panela ampla, quente e pouca movimentação</td><td>Superfície mais dourada e textura firme</td></tr>
              <tr><td>Assado</td><td>Camada única e espaço entre os pedaços</td><td>Sabor concentrado e bordas tostadas</td></tr>
              <tr><td>Ensopado</td><td>Cocção junto ao caldo e demais ingredientes</td><td>Quiabo macio e caldo mais encorpado</td></tr>
              <tr><td>Inteiro</td><td>Pontas aparadas e cocção sem picar</td><td>Menor liberação inicial de mucilagem</td></tr>
            </tbody>
          </table></div>

          <h2>Como conservar na geladeira</h2>
          <p>O quiabo perde qualidade rapidamente depois da colheita. Segundo a Embrapa, deve ficar na parte inferior da geladeira, dentro de saco plástico, onde pode ser conservado por até uma semana.</p>
          <p>O prazo é uma referência, não garantia. Temperatura, umidade, danos e frescor inicial mudam a duração. Guarde sem excesso de água livre e revise o lote para retirar unidades deterioradas.</p>

          <h2>Quando descartar</h2>
          <p>Escurecimento superficial por manuseio não significa automaticamente deterioração. Avalie firmeza e odor. Descarte frutos com mofo, limo externo, cheiro desagradável, vazamento, podridão ou amolecimento extenso.</p>
          <p>Não prove alimento com sinais de deterioração para decidir se ainda está bom. Preparações cozidas também precisam ser refrigeradas em recipiente fechado e não devem permanecer longos períodos em temperatura ambiente.</p>

          <h2>Como congelar</h2>
          <p>A Embrapa indica lavar e secar. Para congelar inteiro, recomenda pré-cozimento de dois a três minutos em água fervente, quatro a cinco minutos no vapor ou cerca de três a quatro minutos no micro-ondas. Depois, resfrie, seque, embale retirando o máximo de ar e leve ao congelador.</p>
          <p>O quiabo também pode ser congelado já picado e bem acondicionado. Use direto no preparo quente ou descongele na parte inferior da geladeira. Espere textura mais macia do que a do produto fresco.</p>

          <h2>Ideias para usar sem desperdício</h2>
          <ul>
            <li>Quiabo inteiro grelhado com alho e ervas.</li>
            <li>Rodelas assadas em camada única.</li>
            <li>Refogado com tomate, cebola e cheiro-verde.</li>
            <li>Ensopado com frango, feijão ou outras hortaliças.</li>
            <li>Salada fria com frutos pequenos previamente cozidos.</li>
          </ul>

          <p>Leia também: <Link href="/blog/berinjela-como-escolher-conservar-tirar-amargor-preparar">como escolher e preparar berinjela</Link> · <Link href="/blog/legumes-vapor-agua-microondas-nutrientes">como escolher o método de cozimento</Link> · <Link href="/blog/como-higienizar-guardar-folhas">como higienizar hortaliças</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte refeições práticas com mais variedade</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/quiabo" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — quiabo</a> · <a href="https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/854775/1/50-HORTALICAS-COMO-COMPRAR-CONSERVAR-E-CONSUMIR.pdf" target="_blank" rel="noopener noreferrer">Embrapa — 50 hortaliças</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a>. Consultadas em 13/10/2026.</p>
      </footer>
    </main>
  );
}
