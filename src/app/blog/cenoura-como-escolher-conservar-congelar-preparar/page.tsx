import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Cenoura: Como Escolher, Conservar, Congelar e Preparar";
const description = "Aprenda a escolher cenouras, conservar sem ressecar, congelar com branqueamento e aproveitar casca, folhas e diferentes cortes no preparo.";
const url = "https://www.nutry.life/blog/cenoura-como-escolher-conservar-congelar-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-08", modifiedTime: "2026-10-08" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-08", dateModified: "2026-10-08", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🥕 Cozinha prática · 6 min de leitura · 08 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Cenoura funciona crua, cozida, assada, ralada, em sopas e até em preparos doces. A melhor compra não depende de encontrar a raiz maior ou mais alaranjada, mas de observar firmeza, integridade e quantidade adequada ao uso planejado.</p>
          <p>Com armazenamento simples e cortes pensados para cada receita, é possível preservar textura, reduzir descarte e aproveitar também partes que normalmente iriam para o lixo. Não existe um único método de preparo nutricionalmente “perfeito”.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Planeje refeições com os ingredientes que você já tem</strong>
            <p>Gere uma sugestão de plano alimentar e adapte combinações, preparos e porções à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Como escolher cenoura</h2>
          <p>Prefira raízes firmes, com superfície íntegra e sem partes viscosas, mofo, rachaduras profundas ou grandes áreas amolecidas. Formato irregular e pequenas marcas superficiais não significam, por si só, que o alimento esteja impróprio.</p>
          <ul>
            <li>Escolha o tamanho conforme a receita e o número de porções.</li>
            <li>Se houver folhas, observe se estão frescas, mas remova-as antes de guardar.</li>
            <li>Evite unidades flexíveis, com odor desagradável ou sinais extensos de deterioração.</li>
            <li>Quando já cortada e embalada, confira refrigeração, validade e excesso de líquido.</li>
          </ul>

          <h2>Precisa descascar?</h2>
          <p>Não é necessário retirar a casca. A Embrapa orienta raspar ou escovar a superfície sob água corrente, removendo sujeira e partes danificadas. Descascar continua sendo uma escolha de textura ou apresentação, não uma obrigação para toda receita.</p>
          <p>A região esverdeada próxima às folhas também não é tóxica. Ela pode ter sabor amargo; por isso, pode ser retirada quando prejudicar o preparo. Pequenas fissuras podem ser aparadas quando o restante está firme e bem conservado.</p>

          <h2>Como higienizar com segurança</h2>
          <p>Enxágue em água corrente e remova a sujeira visível com escova limpa destinada a alimentos. Quando a cenoura for consumida crua, a Anvisa orienta usar somente sanitizante regularizado e indicado para alimentos, respeitando diluição e tempo de contato do rótulo, e depois enxaguar.</p>
          <p>Vinagre não substitui sanitizante regularizado. Não use sabão ou detergente no alimento. Lave mãos, utensílios e bancada e mantenha a cenoura pronta para consumo separada de carnes cruas.</p>

          <h2>Como conservar na geladeira</h2>
          <p>A orientação da Embrapa é retirar as folhas antes do armazenamento, pois elas favorecem a perda de água da raiz. Guarde em embalagem própria para alimentos na parte refrigerada. A referência indica conservação por até 15 dias, mas o tempo real varia com temperatura, frescor inicial e danos.</p>
          <p>Se lavar antes de guardar, seque completamente. Condensação constante dentro da embalagem favorece perda de qualidade; ajuste a ventilação quando necessário. Cenoura já cortada deve permanecer refrigerada em recipiente limpo e ser usada mais cedo.</p>

          <h2>Folhas de cenoura podem ser usadas?</h2>
          <p>Sim. A Embrapa informa que as folhas são comestíveis e podem entrar em refogados, sopas, omeletes, bolinhos ou molhos. Use apenas folhas frescas, bem higienizadas e sem sinais de deterioração.</p>
          <p>Retirar as folhas antes de guardar não significa descartá-las. Separe, higienize e planeje o uso logo, pois elas murcham mais rapidamente do que a raiz.</p>

          <h2>Crua ou cozida: existe uma opção melhor?</h2>
          <p>As duas formas cabem em uma alimentação variada. Ralada ou em palitos, a cenoura oferece crocância; cozida, assada ou em sopa, fica mais macia e combina com preparos diferentes. O cozimento altera textura e alguns componentes, mas não torna o alimento automaticamente inferior.</p>
          <p>Gordura, sal, açúcar e outros ingredientes da receita também importam. Observe o conjunto da refeição em vez de classificar um método isolado como sempre saudável ou inadequado.</p>

          <h2>Cortes e métodos de preparo</h2>
          <div style={{ overflowX: "auto" }}><table>
            <thead><tr><th>Formato</th><th>Preparo possível</th><th>Resultado esperado</th></tr></thead>
            <tbody>
              <tr><td>Ralada</td><td>Saladas, recheios e bolos</td><td>Cozimento rápido ou uso cru</td></tr>
              <tr><td>Palitos</td><td>Forno, air fryer ou vapor</td><td>Textura firme, conforme o tempo</td></tr>
              <tr><td>Rodelas</td><td>Ensopados, sopas e água</td><td>Pedaços uniformes cozinham por igual</td></tr>
              <tr><td>Cubos</td><td>Arroz, refogados e recheios</td><td>Boa distribuição no prato</td></tr>
              <tr><td>Inteira ou ao meio</td><td>Assados e cozimentos longos</td><td>Exige mais tempo para amaciar</td></tr>
            </tbody>
          </table></div>
          <p>Corte pedaços de tamanho semelhante para obter ponto uniforme. Para preservar firmeza, interrompa o cozimento no ponto desejado; para sopas, purês ou pessoas com dificuldade de mastigação, deixe amaciar mais.</p>

          <h2>Como congelar cenoura</h2>
          <p>A Embrapa recomenda branqueamento antes do congelamento. Coloque a cenoura em água fervente por cinco minutos quando inteira ou por dois minutos quando cortada; em seguida, resfrie em água gelada pelo mesmo tempo, escorra e seque.</p>
          <ol>
            <li>Escolha raízes em bom estado, higienize e corte conforme o uso futuro.</li>
            <li>Branqueie pelo tempo adequado ao formato.</li>
            <li>Resfrie rapidamente em água com gelo.</li>
            <li>Escorra e seque para reduzir cristais de gelo.</li>
            <li>Divida em porções, retire o excesso de ar, identifique e congele.</li>
          </ol>
          <p>A textura pode ficar mais macia depois do congelamento. Use diretamente em sopas, ensopados, arroz, purês ou assados, sem descongelar na bancada.</p>

          <h2>Como reduzir desperdício</h2>
          <ul>
            <li>Compre a quantidade compatível com o cardápio dos próximos dias.</li>
            <li>Use primeiro as unidades menos firmes, desde que estejam seguras.</li>
            <li>Congele porções antes que o alimento se deteriore.</li>
            <li>Aproveite aparas limpas em caldos, sopas ou molhos.</li>
            <li>Use as folhas frescas em preparos cozidos.</li>
          </ul>

          <h2>Quando descartar</h2>
          <p>Descarte cenouras com mofo, limo, odor desagradável, vazamento ou podridão extensa. Uma raiz apenas murcha pode ainda servir em preparo cozido se não apresentar sinais de deterioração, mas não tente aproveitar partes de alimento amplamente mofado ou apodrecido.</p>
          <p>Depois de cortada, mantenha refrigerada. Se houver dúvida sobre tempo fora da geladeira, contaminação cruzada ou condição de armazenamento, a escolha mais segura é descartar.</p>

          <p>Leia também: <Link href="/blog/legumes-vapor-agua-microondas-nutrientes">legumes no vapor, na água ou no micro-ondas</Link> · <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link> · <Link href="/blog/como-congelar-frutas-textura-seguranca">princípios práticos do congelamento</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte refeições práticas com os alimentos disponíveis</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/cenoura" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — cenoura</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a> · <a href="https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/guias-alimentares/guias-alimentares" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guias Alimentares</a>. Consultadas em 08/10/2026.</p>
      </footer>
    </main>
  );
}
