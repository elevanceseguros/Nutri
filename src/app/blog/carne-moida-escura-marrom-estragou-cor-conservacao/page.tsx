import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Carne Moída Escura ou Marrom: Estragou? Como Avaliar e Guardar";
const description = "Entenda por que a carne moída pode ficar marrom ou acinzentada, quais sinais sugerem deterioração e como refrigerar, congelar e cozinhar com segurança.";
const url = "https://www.nutry.life/blog/carne-moida-escura-marrom-estragou-cor-conservacao";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    publishedTime: "2026-11-05",
    modifiedTime: "2026-11-05",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-11-05",
  dateModified: "2026-11-05",
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
          <p className={styles.postExcerpt}>🥩 Segurança dos alimentos · 8 min de leitura · 5 de novembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>A cor da carne moída varia conforme o contato com o oxigênio. A superfície pode ficar vermelho-viva, enquanto o centro de um pacote fechado aparece arroxeado, acinzentado ou marrom. Essa diferença, sozinha, não confirma que o alimento estragou.</p>
          <p>A avaliação responsável combina <strong>cor, odor, textura, integridade da embalagem, prazo indicado, temperatura e tempo desde a compra</strong>. Aparência normal também não prova segurança, porque micro-organismos que causam doença não precisam produzir cheiro ou mudança visível.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Planeje refeições para usar os perecíveis no tempo certo</strong>
            <p>O gerador ajuda a organizar uma sugestão inicial com os ingredientes disponíveis, sem substituir orientação individual.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Decisão rápida: observar, cozinhar ou descartar?</h2>
          <div style={{ overflowX: "auto" }}><table><thead><tr><th scope="col">Situação</th><th scope="col">O que significa</th><th scope="col">Conduta prudente</th></tr></thead><tbody>
            <tr><td>Vermelha por fora e marrom no centro</td><td>Pode resultar da menor exposição do interior ao oxigênio</td><td>Confira prazo, refrigeração, odor, textura e embalagem</td></tr>
            <tr><td>Algumas áreas escureceram, sem outros sinais</td><td>Mudança de pigmento pode ocorrer normalmente</td><td>Não decida só pela cor; avalie todo o histórico</td></tr>
            <tr><td>Toda a carne ficou cinza ou marrom</td><td>Pode estar começando a deteriorar</td><td>Redobre a avaliação e descarte diante de qualquer dúvida</td></tr>
            <tr><td>Odor desagradável, superfície pegajosa ou viscosa</td><td>Sinais compatíveis com deterioração</td><td>Descarte sem provar</td></tr>
            <tr><td>Ficou fora de refrigeração por tempo desconhecido</td><td>Não há histórico seguro de temperatura</td><td>Descarte; cozinhar não corrige todo problema de armazenamento</td></tr>
          </tbody></table></div>
          <p>Essa tabela é uma orientação doméstica conservadora. Estabelecimentos devem seguir seus controles, responsáveis técnicos e normas aplicáveis.</p>

          <h2>Por que a carne fica vermelha, roxa ou marrom?</h2>
          <p>A mioglobina é um pigmento natural da carne. Em contato com o oxigênio, ela forma um pigmento vermelho-vivo que costuma aparecer na superfície. Em uma região com pouco oxigênio, como o interior de um pacote compacto, a cor pode ser mais arroxeada ou cinza-amarronzada.</p>
          <p>O USDA explica que carne moída pré-embalada pode estar vermelha por fora e opaca ou marrom por dentro sem que isso, isoladamente, indique deterioração. Porém, quando todo o conteúdo fica cinza ou marrom, pode estar começando a estragar e precisa ser avaliado com mais cautela.</p>

          <h2>Quais sinais pesam mais que a cor?</h2>
          <ul>
            <li><strong>Odor fora do comum:</strong> cheiro azedo, desagradável ou de deterioração é motivo para descarte.</li>
            <li><strong>Textura:</strong> superfície pegajosa, viscosa ou muito aderente sugere deterioração.</li>
            <li><strong>Embalagem:</strong> vazamento, estufamento, rasgo ou vedação comprometida exigem atenção.</li>
            <li><strong>Histórico:</strong> tempo prolongado ou desconhecido fora de refrigeração aumenta a incerteza.</li>
            <li><strong>Prazo e conservação:</strong> siga a data, a temperatura e as instruções do fabricante.</li>
          </ul>
          <p>Não prove carne crua para decidir. Se houver um sinal de deterioração ou dúvida sobre tempo e temperatura, descarte. Lavar, temperar, congelar ou cozinhar não transforma um produto mal conservado em opção segura.</p>

          <h2>Carne vermelha é sempre fresca?</h2>
          <p>Não. A exposição ao oxigênio e o tipo de embalagem influenciam a aparência. A cor viva pode coexistir com armazenamento inadequado, e patógenos não são visíveis nem necessariamente alteram odor ou textura.</p>
          <p>Por isso, use a cor como uma informação entre várias. Verifique procedência, inspeção, embalagem, prazo, refrigeração no ponto de venda e tempo de transporte até casa.</p>

          <h2>Quanto tempo guardar na geladeira?</h2>
          <p>Como referência doméstica, o USDA orienta manter a carne moída crua a 4 °C ou menos e usar ou congelar em um a dois dias. Esse prazo curto se aplica porque a moagem aumenta a área exposta e mistura micro-organismos eventualmente presentes na superfície por toda a massa.</p>
          <p>Coloque na geladeira logo após a compra, em recipiente ou prateleira que impeça gotejamento sobre alimentos prontos. Se não pretende usar nesse intervalo, congele antes que o prazo se esgote. A orientação do rótulo pode ser mais restritiva e deve prevalecer.</p>

          <h2>Congelar recupera carne que começou a estragar?</h2>
          <p>Não. Congelar desacelera atividade microbiana, mas não reverte deterioração nem apaga um período de temperatura inadequada. Congele carne que ainda está em boas condições, em porções identificadas com data.</p>
          <p>O prazo no congelador é principalmente de qualidade quando o alimento permanece continuamente congelado. Para melhor qualidade, referências oficiais sugerem cerca de três a quatro meses para carne moída. Mudanças de textura, ressecamento e queimadura pelo frio podem ocorrer com armazenamento prolongado.</p>

          <h2>Como descongelar sem aumentar o risco?</h2>
          <p>Planeje o descongelamento na geladeira, dentro de recipiente que retenha líquidos. O micro-ondas pode ser usado quando a carne seguir imediatamente para o cozimento. Evite deixar o pacote por horas na bancada.</p>
          <p>Depois de manipular carne crua, lave mãos e utensílios e higienize superfícies antes de tocar em saladas ou alimentos prontos. Não lave a carne: respingos podem espalhar micro-organismos pela cozinha.</p>

          <h2>Cor também não confirma o ponto de cozimento</h2>
          <p>A carne moída pode ficar marrom antes de atingir temperatura suficiente, ou continuar rosada mesmo após atingir o ponto seguro. O USDA orienta usar termômetro culinário e alcançar 71,1 °C no centro, em vez de confiar apenas na cor ou na textura.</p>
          <p>Meça na parte mais espessa do hambúrguer, almôndega ou preparo. Se a porção for fina, insira o termômetro lateralmente para que a ponta alcance o centro.</p>

          <h2>Erros comuns</h2>
          <ul>
            <li>Descartar automaticamente toda carne marrom no centro sem avaliar o restante.</li>
            <li>Consumir carne vermelho-viva apesar de odor, viscosidade ou prazo inadequado.</li>
            <li>Guardar carne moída crua na geladeira pelo mesmo tempo de um bife inteiro.</li>
            <li>Congelar um produto suspeito para “salvá-lo”.</li>
            <li>Descongelar sobre a pia ou bancada.</li>
            <li>Usar a cor marrom como prova de cozimento completo.</li>
            <li>Provar carne crua para verificar se está boa.</li>
          </ul>

          <h2>Checklist antes de preparar</h2>
          <ol>
            <li>A embalagem está íntegra e dentro do prazo?</li>
            <li>A carne permaneceu refrigerada desde a compra?</li>
            <li>Foi comprada há no máximo um ou dois dias, ou congelada antes?</li>
            <li>Há odor desagradável, viscosidade ou outro sinal de deterioração?</li>
            <li>O descongelamento ocorreu de forma segura?</li>
            <li>O centro atingirá 71,1 °C medidos com termômetro?</li>
          </ol>
          <p>Leia também: <Link href="/blog/como-descongelar-carne-geladeira-microondas">como descongelar carne com segurança</Link> · <Link href="/blog/comida-quente-geladeira-resfriar-sobras-seguranca">como resfriar e guardar sobras</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final"><div className={styles.premiumHeader}><h2>Organize refeições práticas sem perder de vista a segurança</h2><p>Gere uma sugestão inicial de plano alimentar e ajuste ingredientes, preparações e porções à sua rotina. Necessidades clínicas e restrições exigem avaliação profissional.</p></div><Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link></section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou outro profissional de saúde. Condições clínicas, alergias, restrições, sintomas e necessidades individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://ask.fsis.usda.gov/article/Why-is-pre-packaged-ground-beef-red-on-the-outside-and-sometimes-dull-grayish-brown-inside" target="_blank" rel="noopener noreferrer">USDA/FSIS — cor externa e interna da carne moída</a> · <a href="https://ask.fsis.usda.gov/article/Does-a-change-in-color-indicate-spoilage" target="_blank" rel="noopener noreferrer">USDA/FSIS — mudança de cor e deterioração</a> · <a href="https://ask.fsis.usda.gov/article/How-do-you-store-ground-beef-at-home" target="_blank" rel="noopener noreferrer">USDA/FSIS — armazenamento doméstico</a> · <a href="https://ask.fsis.usda.gov/article/Can-you-tell-if-meat-is-safely-done-by-its-color" target="_blank" rel="noopener noreferrer">USDA/FSIS — cor e cocção segura</a>. Consultadas em 05/11/2026.</p>
      </footer>
    </main>
  );
}
