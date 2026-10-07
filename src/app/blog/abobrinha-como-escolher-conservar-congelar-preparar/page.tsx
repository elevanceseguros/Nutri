import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Abobrinha: Como Escolher, Conservar, Congelar e Preparar";
const description = "Veja como escolher abobrinha firme, conservar sem murchar, congelar em porções e preparar sem excesso de água ou desperdício.";
const url = "https://www.nutry.life/blog/abobrinha-como-escolher-conservar-congelar-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-07", modifiedTime: "2026-10-07" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-07", dateModified: "2026-10-07", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🥒 Cozinha prática · 6 min de leitura · 07 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Abobrinha parece simples, mas machuca com facilidade, perde brilho rapidamente e pode soltar bastante água na panela. Escolher frutos firmes e organizar o preparo costuma melhorar mais o resultado do que procurar uma variedade “perfeita”.</p>
          <p>Italiana, menina ou amarela podem entrar em refogados, assados, sopas, recheios e saladas. A melhor opção depende da textura desejada, do ponto de maturação e do que já cabe na rotina da casa.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Transforme os vegetais disponíveis em refeições possíveis</strong>
            <p>Gere uma sugestão de plano alimentar e adapte ingredientes, combinações e porções ao que você tem em casa.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Como escolher abobrinha</h2>
          <p>A Embrapa recomenda frutos firmes, com casca brilhante, sem partes escuras ou amolecidas. Eles são sensíveis a pressão e riscos de unha; por isso, manuseie sem apertar e coloque por último no carrinho.</p>
          <ul>
            <li>Prefira casca íntegra e brilhante, sem rachaduras, mofo ou vazamento.</li>
            <li>Observe se o fruto está firme, mas evite testar apertando várias unidades.</li>
            <li>Frutos menores tendem a ser mais tenros; maiores continuam utilizáveis, mas podem ter textura mais firme.</li>
            <li>Quando já cortada e embalada, verifique refrigeração, validade e ausência de líquido amarelado.</li>
            <li>Se possível, escolha unidades com cabinho, que ajudam na conservação.</li>
          </ul>

          <h2>Italiana, menina e amarela: o que realmente muda?</h2>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead><tr><th>Tipo</th><th>Característica prática</th><th>Uso possível</th></tr></thead>
              <tbody>
                <tr><td>Italiana</td><td>Alongada, sem pescoço e muito comum</td><td>Rodelas, cubos, grelhados e refogados</td></tr>
                <tr><td>Menina</td><td>Fruto com pescoço e formato mais irregular</td><td>Ensopados, refogados e recheios</td></tr>
                <tr><td>Amarela</td><td>Cor amarela uniforme conforme a variedade</td><td>Assados, salteados e combinações coloridas</td></tr>
              </tbody>
            </table>
          </div>
          <p>A Embrapa alerta que uma variedade naturalmente amarela não deve ser confundida com fruto verde amarelecendo por envelhecimento. Cor, formato e tamanho não transformam uma variedade em solução nutricional superior às demais.</p>

          <h2>Quanto tempo dura fora e dentro da geladeira?</h2>
          <p>Em local fresco e sombreado, a referência da Embrapa indica conservação por até dois dias, podendo ser menor em períodos secos. Para guardar por mais tempo, coloque os frutos sem lavar em embalagem própria para alimentos, na gaveta inferior da geladeira.</p>
          <p>Na geladeira, a orientação menciona cerca de cinco dias. Esse prazo é aproximado: temperatura, maturação e danos na casca mudam a duração. Se preferir lavar antes, seque completamente. Gotículas dentro da embalagem pedem ventilação para reduzir a umidade acumulada.</p>

          <h2>Precisa descascar ou retirar as sementes?</h2>
          <p>Não é necessário descascar a abobrinha. A casca é comestível e ajuda a manter a estrutura. Frutos jovens também podem ser consumidos com sementes pequenas e macias.</p>
          <p>Em unidades muito grandes, sementes e miolo podem estar mais desenvolvidos. Retirá-los é uma decisão de textura, não uma regra de segurança. Corte somente partes pequenas machucadas quando o restante estiver firme e sem sinais de deterioração.</p>

          <h2>Como evitar que solte água demais</h2>
          <p>A própria abobrinha contém água suficiente para muitos preparos. A Embrapa orienta que não é necessário acrescentar água, exceto em sopas e caldos. Panela muito cheia e fogo baixo favorecem acúmulo de líquido.</p>
          <ol>
            <li>Corte em pedaços de tamanho semelhante.</li>
            <li>Aqueça a panela ou assadeira antes de adicionar o vegetal.</li>
            <li>Prepare em porções, deixando espaço para o vapor sair.</li>
            <li>Tempere de acordo com a receita e mexa apenas quando necessário.</li>
            <li>Interrompa o cozimento quando atingir a textura desejada.</li>
          </ol>
          <p>Não é preciso cozinhar até desmanchar. Textura mais firme ou macia é preferência culinária e pode ser adaptada a crianças, idosos e pessoas com necessidades específicas.</p>

          <h2>Como higienizar com segurança</h2>
          <p>Lave a unidade em água corrente para retirar sujeira visível. Quando o alimento for consumido cru ou apenas levemente cozido, a Anvisa orienta usar somente sanitizante regularizado e indicado para alimentos, seguindo a diluição e o tempo de contato do fabricante, e depois enxaguar.</p>
          <p>Vinagre não substitui um sanitizante regularizado. Sabão e detergente não devem ser aplicados ao alimento. Lave mãos, faca, tábua e bancada e mantenha vegetais separados de carnes cruas.</p>

          <h2>Pode comer abobrinha crua?</h2>
          <p>Frutos jovens e pequenos podem ser usados crus e ralados, conforme a Embrapa. Higienize corretamente e consuma logo após o corte. Quem tem dificuldade para mastigar, engolir ou digerir vegetais crus pode preferir versões cozidas e buscar orientação individual.</p>
          <p>Consumir crua não é obrigatoriamente “mais nutritivo”. O cozimento muda textura, sabor e alguns componentes, mas também facilita o consumo e permite combinações diferentes.</p>

          <h2>Como congelar</h2>
          <p>A orientação atual da Embrapa permite lavar, secar, cortar em rodelas ou cubos e congelar primeiro em uma bandeja, transferindo depois os pedaços firmes para saco ou recipiente próprio. A publicação técnica da instituição também descreve branqueamento curto como opção antes do congelamento.</p>
          <ol>
            <li>Escolha frutos em bom estado e higienize.</li>
            <li>Seque e corte no formato usado nas receitas.</li>
            <li>Faça o branqueamento se optar por essa técnica e resfrie rapidamente.</li>
            <li>Escorra e seque antes de distribuir na bandeja.</li>
            <li>Congele em porções, retire o excesso de ar e identifique a data.</li>
          </ol>
          <p>A textura fica mais macia depois de congelada. Use diretamente em sopas, molhos, refogados e assados, evitando descongelar na bancada.</p>

          <h2>Preparos práticos</h2>
          <ul>
            <li><strong>Refogada:</strong> cubos ou meias-luas em panela quente com alho, cebola e ervas.</li>
            <li><strong>Assada:</strong> pedaços espaçados na assadeira para dourar em vez de cozinhar no próprio vapor.</li>
            <li><strong>Grelhada:</strong> fatias uniformes e superfície aquecida.</li>
            <li><strong>Recheada:</strong> unidades maiores divididas ao meio, com recheio adequado à refeição.</li>
            <li><strong>Em molho ou sopa:</strong> aproveita a textura mais macia e o líquido liberado.</li>
          </ul>

          <h2>Sinais de descarte</h2>
          <p>Descarte unidades com mofo, odor desagradável, líquido viscoso, podridão extensa ou polpa muito amolecida. Pequeno dano superficial pode ser removido quando o restante está firme, mas não tente salvar fruto amplamente deteriorado.</p>
          <p>A aparência não revela todo risco. Se houver dúvida sobre conservação, contaminação cruzada ou tempo fora de refrigeração após o corte, descarte.</p>

          <p>Leia também: <Link href="/blog/berinjela-como-escolher-conservar-tirar-amargor-preparar">como escolher e preparar berinjela</Link> · <Link href="/blog/legumes-vapor-agua-microondas-nutrientes">legumes no vapor, na água ou no micro-ondas</Link> · <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte refeições práticas com o que já está na geladeira</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/abobrinha" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — abobrinha</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a> · <a href="https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/guias-alimentares/guias-alimentares" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guias Alimentares</a>. Consultadas em 07/10/2026.</p>
      </footer>
    </main>
  );
}
