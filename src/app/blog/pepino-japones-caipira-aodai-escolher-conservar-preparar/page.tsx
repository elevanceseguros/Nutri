import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Pepino Japonês, Caipira ou Aodai: Como Escolher, Conservar e Preparar";
const description = "Compare pepino japonês, caipira e Aodai e veja como escolher frutos firmes, higienizar, conservar sem murchar e usar sem desperdício.";
const url = "https://www.nutry.life/blog/pepino-japones-caipira-aodai-escolher-conservar-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-10", modifiedTime: "2026-10-10" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-10", dateModified: "2026-10-10", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🥒 Cozinha prática · 6 min de leitura · 10 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Pepino aparece em saladas, sanduíches, pastas com iogurte, sopas frias e conservas. Japonês, caipira e Aodai têm formatos e texturas diferentes, mas a melhor escolha depende mais do preparo desejado e do estado do fruto do que de uma hierarquia entre tipos.</p>
          <p>Como perde qualidade rapidamente fora de condições adequadas, planejar a compra e a refrigeração ajuda a preservar crocância e reduzir descarte. As orientações abaixo são culinárias e de segurança alimentar, não uma prescrição individual.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Use os ingredientes disponíveis em refeições variadas</strong>
            <p>Gere uma sugestão de plano alimentar e adapte combinações, preparos e porções à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Japonês, caipira ou Aodai: o que muda?</h2>
          <div style={{ overflowX: "auto" }}><table>
            <thead><tr><th>Tipo</th><th>Características comuns</th><th>Usos práticos</th></tr></thead>
            <tbody>
              <tr><td>Japonês</td><td>Mais fino, alongado, verde-escuro e com reentrâncias na casca</td><td>Fatias finas, saladas e preparos rápidos</td></tr>
              <tr><td>Caipira</td><td>Verde mais claro, com estrias brancas e casca lisa</td><td>Saladas, refogados e conservas caseiras refrigeradas</td></tr>
              <tr><td>Aodai</td><td>Maior, verde-escuro e de casca lisa</td><td>Saladas, sopas frias e refogados</td></tr>
              <tr><td>Minipepino</td><td>Pequeno e crocante, mas pode murchar mais rápido</td><td>Lanches, saladas e porções individuais</td></tr>
            </tbody>
          </table></div>
          <p>Essas características são gerais e variam com variedade, ponto de colheita e conservação. Trocar um tipo por outro costuma funcionar, mas espessura da casca, sementes e quantidade de água podem mudar a textura final.</p>

          <h2>Como escolher pepino</h2>
          <p>A Embrapa recomenda frutos firmes, com casca brilhante e sem ferimentos ou amassados. Danos aceleram a perda de qualidade. Frutos muito grandes e mais maduros podem ficar menos crocantes e funcionar melhor em preparos cozidos.</p>
          <ul>
            <li>Prefira firmeza uniforme, sem pontas moles.</li>
            <li>Evite limo, mofo, vazamentos e odor desagradável.</li>
            <li>Pequenas diferenças de formato não tornam o alimento impróprio.</li>
            <li>Quando já cortado e embalado, confira refrigeração, validade e integridade da embalagem.</li>
          </ul>

          <h2>Como higienizar com segurança</h2>
          <p>Lave cada fruto em água corrente para remover sujeira visível. Quando for consumido cru, a Anvisa orienta usar somente sanitizante regularizado e indicado para alimentos, respeitando a diluição e o tempo de contato do fabricante, e depois enxaguar.</p>
          <p>Vinagre não substitui sanitizante regularizado. Não use sabão ou detergente no pepino. Lave mãos, faca, tábua e bancada e mantenha o vegetal pronto para consumo separado de carnes cruas.</p>

          <h2>Precisa descascar ou retirar as sementes?</h2>
          <p>Depende da textura desejada, do tipo e da tolerância de quem vai comer. Cascas mais finas podem ser mantidas depois da higienização. Se a casca estiver espessa ou desagradável, retire toda ou parte. A Embrapa recomenda consumir o Aodai sem casca quando ela estiver mais difícil de digerir.</p>
          <p>Sementes jovens são macias e podem permanecer. Em frutos maiores e mais maduros, a região central pode ficar aguada; retire-a com uma colher quando isso prejudicar saladas, pastas ou recheios.</p>

          <h2>Como conservar sem murchar</h2>
          <p>A Embrapa informa que o pepino deteriora rapidamente em temperatura ambiente e pode ser mantido por até uma semana na geladeira, em saco plástico perfurado, preferencialmente na parte inferior. O prazo real varia com o frescor inicial, a temperatura e os danos no fruto.</p>
          <p>Se lavar antes de guardar, seque bem. A embalagem reduz a perda de água, mas excesso de umidade favorece deterioração. Mantenha o fruto inteiro até o uso sempre que possível; pepino cortado deve ficar em recipiente fechado e ser consumido mais cedo.</p>

          <h2>Por que o pepino fica mole ou viscoso?</h2>
          <p>Murchamento ocorre principalmente pela perda de água. Já superfície viscosa, odor alterado, vazamento e amolecimento intenso indicam deterioração. Embalagem inadequada, fruto machucado e tempo prolongado aceleram essas mudanças.</p>
          <p>Um pepino apenas um pouco menos firme pode ser usado em sopa ou refogado se estiver seguro. Não tente aproveitar partes de um fruto com mofo, limo ou podridão extensa.</p>

          <h2>Como reduzir a água na salada</h2>
          <p>Fatie perto da hora de servir e mantenha o pepino refrigerado. Para preparos em que o excesso de líquido atrapalha, pode-se salgar levemente as fatias, aguardar alguns minutos e escorrer. Esse passo muda o teor de sal e não é obrigatório.</p>
          <p>Em pastas com iogurte, ralar e apertar suavemente o pepino reduz a diluição. Em saladas simples, cortar e temperar apenas no final costuma preservar melhor a crocância.</p>

          <h2>Ideias de preparo além da salada</h2>
          <ul>
            <li>Fatiado em sanduíches com folhas e uma fonte de proteína.</li>
            <li>Ralado em pasta de iogurte com ervas e limão.</li>
            <li>Batido em sopa fria com ingredientes compatíveis com a receita.</li>
            <li>Salteado rapidamente com ervas em preparos quentes.</li>
            <li>Em conserva rápida refrigerada, seguindo uma receita segura e mantendo sob refrigeração.</li>
          </ul>
          <p>Conserva rápida de geladeira não é produto estável em temperatura ambiente. Para conserva de longa duração, use receita validada e processamento apropriado; apenas colocar em um vidro com vinagre não garante segurança fora da geladeira.</p>

          <h2>Congelar vale a pena?</h2>
          <p>Por ter muita água, o pepino perde crocância após congelar. Para saladas, prefira conservar fresco. Se houver sobra, congele apenas quando aceitar textura mais macia e planejar uso em sopa fria batida, molho ou outro preparo em que a firmeza não seja essencial.</p>
          <p>Antes de congelar, higienize, seque, corte, embale em pequenas porções e identifique. Descongele sob refrigeração ou use diretamente na receita, nunca sobre a bancada.</p>

          <h2>Quando descartar</h2>
          <p>Descarte o pepino com mofo, limo, odor desagradável, vazamento, sabor claramente alterado ou podridão extensa. Se houver dúvida sobre contaminação cruzada, tempo fora da geladeira ou condição de armazenamento depois do corte, a opção mais segura é descartar.</p>

          <p>Leia também: <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link> · <Link href="/blog/tomate-verde-maduro-geladeira-conservar-preparar">como escolher e conservar tomate</Link> · <Link href="/blog/cenoura-como-escolher-conservar-congelar-preparar">como conservar e preparar cenoura</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte refeições práticas com o que você já tem</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/pepino" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — pepino</a> · <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/secoes/geladeira-desperdicio" target="_blank" rel="noopener noreferrer">Embrapa — conservação de hortaliças</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a>. Consultadas em 10/10/2026.</p>
      </footer>
    </main>
  );
}
