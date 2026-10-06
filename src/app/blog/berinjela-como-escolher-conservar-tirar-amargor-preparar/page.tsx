import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Berinjela: Como Escolher, Conservar, Tirar o Amargor e Preparar";
const description = "Aprenda a escolher berinjelas, conservar sem murchar, entender quando usar sal e preparar assada, refogada ou recheada sem desperdício.";
const url = "https://www.nutry.life/blog/berinjela-como-escolher-conservar-tirar-amargor-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-06", modifiedTime: "2026-10-06" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-06", dateModified: "2026-10-06", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🍆 Cozinha prática · 6 min de leitura · 06 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Berinjela brilhante e firme pede um preparo diferente daquela que já está opaca, cheia de sementes e mais amarga. Escolher bem e usar rapidamente costuma fazer mais diferença no resultado do que procurar um truque único para toda receita.</p>
          <p>Ela pode ser assada, refogada, grelhada, recheada ou transformada em pasta. O método muda textura e quantidade de óleo absorvida, mas não cria uma versão universalmente “certa” para todas as pessoas.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Inclua vegetais em preparos que cabem na sua rotina</strong>
            <p>Gere uma sugestão de plano alimentar e adapte ingredientes, combinações e porções ao que você tem em casa.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Como escolher uma berinjela boa</h2>
          <p>A Embrapa recomenda frutos com casca brilhante, lisa, de cor uniforme, sem manchas ou áreas amassadas e com cálice verde brilhante. As variedades podem ser alongadas, finas, redondas, escuras, brancas ou rajadas.</p>
          <ul>
            <li>Segure com cuidado: a berinjela amassa com facilidade.</li>
            <li>Prefira casca íntegra, sem cortes, furos, mofo ou vazamento.</li>
            <li>Observe se o fruto está firme, mas não aperte várias unidades na banca.</li>
            <li>Escolha tamanho e formato compatíveis com a receita para reduzir sobra.</li>
            <li>Evite frutos muito opacos, murchos ou com áreas extensas amolecidas.</li>
          </ul>
          <p>Frutos colhidos depois do ponto ideal podem ficar sem brilho, desenvolver sementes escuras e apresentar sabor mais amargo. Isso não significa que toda semente clara precise ser retirada.</p>

          <h2>Berinjela comum, japonesa ou rajada: o que muda?</h2>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead><tr><th>Tipo</th><th>Característica prática</th><th>Uso possível</th></tr></thead>
              <tbody>
                <tr><td>Alongada escura</td><td>Formato mais comum e polpa versátil</td><td>Assada, recheada, refogada ou em camadas</td></tr>
                <tr><td>Japonesa</td><td>Mais comprida e fina</td><td>Grelhados, refogados rápidos e espetinhos</td></tr>
                <tr><td>Redonda ou rajada</td><td>Formato e casca variam conforme a cultivar</td><td>Fatias, assados e recheios</td></tr>
              </tbody>
            </table>
          </div>
          <p>Variedade, maturação e modo de preparo influenciam sabor e textura. A cor não deve ser usada como atalho para prometer efeito nutricional ou terapêutico.</p>

          <h2>Como conservar sem deixar murchar</h2>
          <p>Em temperatura ambiente, a Embrapa informa duração limitada, em torno de dois dias antes de o fruto começar a murchar. Para guardar por mais tempo, coloque na parte baixa da geladeira, com o pedúnculo, protegida em embalagem própria para alimentos.</p>
          <p>A referência da Embrapa menciona conservação refrigerada por até duas semanas em saco plástico. Esse é um limite orientativo, não uma garantia doméstica: temperatura, maturação, ferimentos e condensação mudam o prazo. Se surgirem gotículas, permita ventilação e examine o fruto antes do uso.</p>
          <p>Não lave antes de guardar se não for possível secar completamente. Umidade acumulada favorece deterioração. Mantenha longe de peso e use primeiro a unidade mais madura ou levemente marcada, desde que íntegra.</p>

          <h2>Precisa tirar a casca?</h2>
          <p>Não necessariamente. A casca é comestível e ajuda a manter a forma em assados e grelhados. Em frutos maiores ou mais maduros, ela pode parecer mais firme; retirar total ou parcialmente é uma escolha de textura e receita.</p>
          <p>Se for descascar ou cortar com antecedência, saiba que a polpa escurece rapidamente após contato com o ar. Prepare logo depois do corte ou mantenha temporariamente em água enquanto organiza a receita.</p>

          <h2>Sal realmente tira o amargor?</h2>
          <p>O sal puxa parte da água da superfície e pode alterar textura e percepção de amargor. Em berinjelas jovens e brilhantes, muitas receitas funcionam bem sem essa etapa. Em frutos mais maduros ou quando se deseja reduzir umidade antes de grelhar, ela pode ajudar.</p>
          <ol>
            <li>Corte em fatias ou cubos de espessura semelhante.</li>
            <li>Salpique uma pequena quantidade de sal.</li>
            <li>Aguarde até aparecer umidade na superfície.</li>
            <li>Seque bem; enxágue apenas se a quantidade de sal exigir.</li>
            <li>Ajuste o sal restante da receita.</li>
          </ol>
          <p>Não trate a salmoura como etapa de “desintoxicação”. Ela é uma técnica culinária. Pessoas que precisam controlar sódio podem omiti-la ou adaptar a quantidade com orientação profissional.</p>

          <h2>Como evitar que absorva óleo demais</h2>
          <p>A polpa porosa pode absorver óleo, sobretudo quando frita em temperatura inadequada ou deixada por muito tempo na panela. Meça o óleo em vez de despejar diretamente, aqueça a frigideira antes e cozinhe em porções para não baixar demais a temperatura.</p>
          <p>Assar, grelhar, cozinhar no vapor ou refogar com líquido de outros ingredientes são alternativas. A escolha depende do prato: caponata, lasanha, moussaka, pasta e berinjela recheada pedem texturas diferentes.</p>

          <h2>Como higienizar</h2>
          <p>Lave o fruto em água corrente para retirar sujeira visível. Se a preparação será consumida crua ou apenas levemente cozida, siga a orientação sanitária local e use somente sanitizante regularizado pela Anvisa e indicado para alimentos, respeitando a diluição e o tempo de contato do rótulo.</p>
          <p>Vinagre não substitui sanitizante regularizado. Sabão e detergente não devem ser aplicados ao alimento. Lave mãos, faca, tábua e bancada antes do corte e mantenha vegetais separados de carnes cruas.</p>

          <h2>Pode congelar berinjela?</h2>
          <p>A Embrapa recomenda branquear fatias ou cubos antes de congelar: o tratamento térmico curto ajuda a preservar o alimento. Depois, resfrie, escorra, seque e congele em porções adequadas à rotina.</p>
          <p>A textura ficará mais macia após o descongelamento, por isso a berinjela congelada funciona melhor em molhos, refogados, recheios e assados. Identifique a data e congele somente alimento em bom estado.</p>

          <h2>Estratégia simples para aproveitar tudo</h2>
          <ol>
            <li>Escolha frutos brilhantes e sem amassados.</li>
            <li>Planeje o uso dos mais maduros primeiro.</li>
            <li>Asse uma quantidade maior de uma vez.</li>
            <li>Use parte em acompanhamento ou pasta.</li>
            <li>Congele o excedente já preparado ou branqueado.</li>
          </ol>

          <h2>Sinais de descarte</h2>
          <p>Descarte berinjela com mofo, odor desagradável, vazamento, áreas viscosas ou podridão extensa. Pequenas sementes escurecidas podem indicar maturação avançada e sabor mais amargo, mas mofo e deterioração não devem ser simplesmente recortados de um fruto amplamente comprometido.</p>
          <p>Na dúvida sobre tempo, temperatura ou contaminação, descarte. Aparência e cheiro ajudam a identificar deterioração, mas não comprovam segurança em toda situação.</p>

          <p>Leia também: <Link href="/blog/pimentao-verde-amarelo-vermelho-escolher-conservar-preparar">como escolher e conservar pimentões</Link> · <Link href="/blog/tomate-verde-maduro-geladeira-conservar-preparar">como escolher e conservar tomates</Link> · <Link href="/blog/legumes-vapor-agua-microondas-nutrientes">legumes no vapor, na água ou no micro-ondas</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte refeições possíveis com os vegetais disponíveis</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/berinjela" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — berinjela</a> · <a href="https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/guias-alimentares/guias-alimentares" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guias Alimentares</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a>. Consultadas em 06/10/2026.</p>
      </footer>
    </main>
  );
}
