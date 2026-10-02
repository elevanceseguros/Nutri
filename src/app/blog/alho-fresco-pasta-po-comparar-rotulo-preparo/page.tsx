import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Alho Fresco, em Pasta ou em Pó: Como Comparar e Usar";
const description = "Compare alho fresco, pasta pronta e alho em pó por ingredientes, sódio, rendimento, sabor, armazenamento e uso culinário.";
const url = "https://www.nutry.life/blog/alho-fresco-pasta-po-comparar-rotulo-preparo";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-02", modifiedTime: "2026-10-02" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-02", dateModified: "2026-10-02", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🧄 Escolhas práticas · 6 min de leitura · 02 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Alho fresco, pasta pronta e alho em pó podem temperar a mesma receita, mas mudam aroma, textura, praticidade e composição. Não existe uma versão universalmente melhor: a escolha depende do preparo, da frequência de uso e do rótulo do produto disponível.</p>
          <p>O alho fresco é um alimento in natura; o pó resulta da desidratação e moagem; já a pasta pode reunir alho, sal, óleo, acidulantes e conservadores. Comparar o nome da frente da embalagem não basta.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Transforme ingredientes disponíveis em refeições possíveis</strong>
            <p>Gere uma sugestão de plano alimentar e adapte temperos, combinações e porções à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>O que muda entre as três versões?</h2>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead><tr><th>Versão</th><th>Ponto forte</th><th>O que conferir</th></tr></thead>
              <tbody>
                <tr><td>Fresco</td><td>Aroma e textura ajustáveis</td><td>Estado dos dentes, perdas no descasque e frequência de uso</td></tr>
                <tr><td>Pasta pronta</td><td>Rapidez e padronização</td><td>Lista de ingredientes, sódio, validade após abrir e porção</td></tr>
                <tr><td>Em pó</td><td>Longa duração e fácil dosagem</td><td>Se é alho puro ou mistura, concentração e armazenamento</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Como comparar a lista de ingredientes</h2>
          <p>A Anvisa informa que lista de ingredientes, validade e informação nutricional estão entre os itens obrigatórios dos alimentos embalados. Na pasta, veja se o alho aparece no início e quais outros componentes foram adicionados. Produtos visualmente parecidos podem ter proporções muito diferentes de sal, óleo, amido e aditivos.</p>
          <p>No alho em pó, procure a denominação exata. “Alho em pó” pode ser um único ingrediente; “tempero sabor alho” pode incluir sal e outros componentes. A lista resolve essa dúvida melhor que imagens ou alegações da frente.</p>

          <h2>Compare o sódio na mesma base</h2>
          <p>Alho fresco e alho em pó puro não precisam de sal adicionado. Pastas e temperos mistos podem contribuir com sódio, mas a quantidade varia entre marcas. Compare a coluna por 100 g para colocar produtos diferentes na mesma base e depois observe quanto você realmente usa por receita.</p>
          <p>Uma colher informada no rótulo pode não coincidir com a sua medida em casa. Medir algumas vezes ajuda a estimar uso e custo sem transformar o preparo em uma conta permanente.</p>

          <h2>Qual rende mais?</h2>
          <p>O pó é concentrado porque perdeu água; por isso, uma pequena quantidade pode aromatizar bastante. A pasta já vem úmida e pode conter outros ingredientes. O fresco tem casca e talo descartados, mas permite usar dentes inteiros, laminados, picados ou amassados.</p>
          <p>Para comparar preço, pense no custo por receita, não apenas no preço da embalagem. Considere perdas, validade depois de aberto e a quantidade que costuma sobrar sem uso.</p>

          <h2>Como o preparo muda o sabor</h2>
          <ul>
            <li><strong>Fresco cru:</strong> tende a ter aroma mais intenso e pungente.</li>
            <li><strong>Fresco dourado:</strong> ganha notas mais tostadas, mas queima rapidamente e pode amargar.</li>
            <li><strong>Assado:</strong> fica macio e com sabor mais suave, adequado a pastas e molhos.</li>
            <li><strong>Em pó:</strong> distribui-se com facilidade em marinadas secas, massas e misturas.</li>
            <li><strong>Pasta pronta:</strong> oferece rapidez, mas sal, acidez e óleo podem mudar o resultado da receita.</li>
          </ul>
          <p>Acrescente a versão escolhida em etapas quando ainda não conhece sua intensidade. Assim é mais fácil corrigir do que tentar retirar excesso de alho ou sal.</p>

          <h2>Como guardar alho fresco</h2>
          <p>Mantenha cabeças inteiras em local seco, ventilado e protegido de calor e umidade. Recipiente fechado sem ventilação pode favorecer umidade e deterioração. Depois de descascar ou cortar, use recipiente limpo, leve à geladeira e planeje consumo próximo.</p>
          <p>Descarte dentes com mofo, textura viscosa ou deterioração evidente. Brotos verdes não significam necessariamente risco, mas podem trazer sabor mais forte ou amargo.</p>

          <h2>Pasta pronta e alho em pó</h2>
          <p>Siga o rótulo para saber se a pasta fechada exige refrigeração e quanto dura depois de aberta. Use utensílio limpo, feche bem e não complete um pote antigo com produto novo. Se a orientação do fabricante for manter refrigerado, não deixe o pote habitualmente sobre a bancada.</p>
          <p>Guarde o pó bem fechado, longe de vapor e umidade. Retirar o produto com colher seca ajuda a evitar grumos. Perda gradual de aroma não é igual a insegurança, mas mofo, umidade intensa ou embalagem danificada justificam descarte.</p>

          <h2>Cuidado com alho caseiro em óleo</h2>
          <p>Alho coberto por óleo cria um ambiente com pouco oxigênio. O National Center for Home Food Preservation alerta que misturas caseiras mantidas à temperatura ambiente apresentam risco de botulismo. A orientação é preparar pequenas quantidades, refrigerar a 4 °C ou menos e usar em até quatro dias, ou congelar para armazenamento mais longo.</p>
          <p>Não transforme uma receita caseira em conserva de prateleira sem processo validado. Produtos comerciais acidificados têm formulação e controle próprios; depois de abertos, siga exatamente o rótulo.</p>

          <h2>Perfis de escolha</h2>
          <ul>
            <li><strong>Quem cozinha quase todos os dias:</strong> fresco pode oferecer versatilidade e bom aproveitamento.</li>
            <li><strong>Quem precisa ganhar tempo:</strong> pasta pode funcionar quando a composição e o sódio cabem na receita.</li>
            <li><strong>Quem cozinha pouco:</strong> pó puro pode reduzir desperdício e permanecer disponível por mais tempo.</li>
            <li><strong>Quem controla sal:</strong> compare rótulos e prefira dosar alho e sal separadamente quando isso facilitar.</li>
            <li><strong>Quem busca sabor específico:</strong> escolha pela técnica — cru, refogado, assado ou mistura seca.</li>
          </ul>

          <h2>Checklist no mercado</h2>
          <ol>
            <li>Leia a denominação do produto.</li>
            <li>Confira todos os ingredientes.</li>
            <li>Compare sódio por 100 g entre opções semelhantes.</li>
            <li>Observe porção, peso e preço por uso.</li>
            <li>Leia conservação antes e depois de abrir.</li>
            <li>Escolha a quantidade que conseguirá usar sem desperdício.</li>
          </ol>

          <p>Leia também: <Link href="/blog/temperos-prontos-naturais-sodio-como-comparar">temperos prontos ou naturais</Link> · <Link href="/blog/como-ler-rotulo-de-alimentos">como ler rótulos de alimentos</Link> · <Link href="/blog/molho-tomate-passata-extrato-como-escolher">molho de tomate, passata ou extrato</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Planeje refeições que combinam com a sua rotina</h2><p>Gere uma sugestão inicial e adapte ingredientes, preparos e porções. Para necessidades clínicas ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem de alimentos</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem nutricional</a> · <a href="https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/guias-alimentares" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guias Alimentares</a> · <a href="https://nchfp.uga.edu/how/freeze/vegetable/freezing-garlic-in-oil/" target="_blank" rel="noopener noreferrer">NCHFP — alho em óleo</a>. Consultadas em 02/10/2026.</p>
      </footer>
    </main>
  );
}
