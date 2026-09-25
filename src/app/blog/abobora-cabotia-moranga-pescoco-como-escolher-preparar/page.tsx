import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Abóbora Cabotiá, Moranga ou de Pescoço: Como Escolher e Preparar";
const description = "Compare textura, rendimento, casca, corte, métodos de preparo e conservação de diferentes tipos de abóbora sem procurar uma vencedora universal.";
const url = "https://www.nutry.life/blog/abobora-cabotia-moranga-pescoco-como-escolher-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-09-25", modifiedTime: "2026-09-25" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-09-25",
  dateModified: "2026-09-25",
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
          <p className={styles.postExcerpt}>🎃 Cozinha prática · 6 min de leitura · 25 de setembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>

        <div className={styles.postContent}>
          <p>
            Cabotiá, moranga, de pescoço, paulista: os nomes mudam entre regiões e feiras, e o uso culinário também. Em vez de procurar a abóbora “mais saudável”, vale comparar textura, quantidade de casca e sementes, facilidade de corte, rendimento e receita planejada.
          </p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div>
              <strong>Transforme ingredientes comuns em refeições possíveis</strong>
              <p>Gere uma sugestão de plano alimentar e adapte alimentos, preparos e horários à sua rotina.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>

          <h2>Os nomes não são totalmente padronizados no varejo</h2>
          <p>
            A mesma variedade pode receber nomes diferentes, e produtos visualmente parecidos podem ter maturação, umidade e textura distintas. Use o nome da banca como ponto de partida, não como garantia absoluta. Aparência, firmeza e resultado na cozinha ajudam a confirmar se aquela unidade serve à receita.
          </p>

          <h2>Cabotiá: polpa mais densa e menos aquosa</h2>
          <p>
            A cabotiá, também chamada japonesa em muitos lugares, costuma ter casca verde e polpa alaranjada, firme e relativamente seca. Funciona bem assada, em purês, nhoques, recheios e refogados nos quais uma textura mais densa é desejada.
          </p>
          <p>
            A casca é resistente e exige cuidado no corte. Depois de cozida ou assada, pode amolecer; usá-la ou retirá-la é uma decisão culinária, desde que a superfície tenha sido bem higienizada e esteja em boas condições.
          </p>

          <h2>Moranga: formato arredondado e boa para rechear</h2>
          <p>
            A moranga costuma ser arredondada e marcada por gomos. O formato favorece preparações recheadas, mas ela também pode virar sopa, purê, cubos assados ou refogado. O teor de água e a textura variam com variedade e maturação, então ajuste o líquido da receita aos poucos.
          </p>

          <h2>Abóbora de pescoço: tamanho grande e uso versátil</h2>
          <p>
            A de pescoço pode ser vendida inteira ou em pedaços. Tem polpa alaranjada e costuma render bastante, sendo prática para sopas, ensopados, doces, refogados e preparações em grande volume. Comprar uma unidade enorme só compensa quando existe plano para usar ou congelar a sobra.
          </p>

          <h2>Como escolher uma unidade inteira</h2>
          <ul>
            <li>Procure casca firme, sem áreas extensas amolecidas, úmidas ou com mofo.</li>
            <li>Evite rachaduras profundas e pontos de vazamento.</li>
            <li>Compare unidades semelhantes pelo peso e pelo uso planejado, não apenas pelo tamanho visual.</li>
            <li>Uma marca superficial seca pode ser apenas estética; lesões úmidas ou em progressão merecem rejeição.</li>
            <li>Se houver cabo, ele deve estar firme e sem sinais evidentes de deterioração.</li>
          </ul>

          <h2>Inteira ou já cortada?</h2>
          <p>
            A unidade inteira tende a oferecer mais tempo de armazenamento, desde que permaneça em local seco, ventilado e conforme a orientação do fornecedor. O pedaço cortado economiza esforço e permite comprar apenas o necessário, mas expõe a polpa e precisa de refrigeração adequada.
          </p>
          <p>
            Ao comprar cortada, observe cor, odor, firmeza, limpeza da embalagem, temperatura de exposição e prazo indicado. A superfície não deve estar viscosa nem excessivamente ressecada.
          </p>

          <h2>Como cortar com menos risco</h2>
          <ol>
            <li>Lave a parte externa em água corrente e seque antes de apoiar.</li>
            <li>Use tábua estável, faca íntegra e espaço livre.</li>
            <li>Crie uma base plana antes de exercer força sobre uma unidade arredondada.</li>
            <li>Corte em partes manejáveis; não tente controlar uma peça grande com a ponta dos dedos na trajetória da faca.</li>
            <li>Se a casca estiver muito dura, cozinhar ou assar por algum tempo antes de fracionar pode facilitar, desde que o método seja feito com segurança.</li>
          </ol>

          <h2>Assar, cozinhar na água ou no vapor?</h2>
          <p><strong>Assar:</strong> reduz parte da água, concentra sabor e favorece bordas douradas. É útil para purê mais firme, saladas mornas e acompanhamentos.</p>
          <p><strong>Cozinhar na água:</strong> amolece rapidamente, mas pode deixar a preparação mais úmida. Use pouca água quando o objetivo for purê e aproveite o líquido em sopas quando fizer sentido.</p>
          <p><strong>Vapor ou micro-ondas:</strong> evitam que os pedaços fiquem mergulhados. O tempo depende do tamanho, da variedade e da potência do equipamento.</p>
          <p>
            Nenhum método vence em todas as receitas. O melhor é o que produz a textura desejada sem cozinhar além do necessário.
          </p>

          <h2>Como comparar o preço pelo rendimento</h2>
          <p>
            O preço por quilo inclui casca, sementes e partes que talvez não sejam usadas. Para uma comparação doméstica, pese a quantidade comprada, depois a polpa efetivamente aproveitada, e divida o preço por esse peso. A cabotiá pequena pode custar mais por quilo e ainda evitar sobra; uma abóbora grande pode ser econômica quando toda a polpa é planejada.
          </p>

          <h2>Conservação e congelamento</h2>
          <p>
            Depois de cortada, mantenha a abóbora refrigerada em recipiente limpo e fechado e respeite sinais de deterioração e orientações do fornecedor. Cozida, deixe esfriar sem permanecer longos períodos em temperatura ambiente, porcione e refrigere ou congele.
          </p>
          <p>
            O congelamento altera a textura, sobretudo após descongelar. Cubos branqueados ou polpa cozida podem ser mais práticos para sopa, purê, molho e massa do que para receitas que dependem de firmeza. Identifique data e quantidade no recipiente.
          </p>

          <h2>Sementes também podem ser aproveitadas</h2>
          <p>
            Retire fibras aderidas, lave, seque e asse até atingir textura adequada. Temperos e quantidade de óleo mudam o resultado final. O aproveitamento reduz descarte, mas sementes com odor, mofo ou deterioração não devem ser consumidas.
          </p>

          <h2>Checklist rápido</h2>
          <ul>
            <li>A receita pede polpa firme, cremosa ou mais úmida?</li>
            <li>Você consegue cortar a unidade com segurança?</li>
            <li>Quanto do peso será realmente aproveitado?</li>
            <li>A quantidade cabe no consumo da semana?</li>
            <li>Existe espaço para refrigerar ou congelar a sobra?</li>
            <li>O método escolhido combina com a textura desejada?</li>
          </ul>

          <p>
            Leia também: <Link href="/blog/legumes-vapor-agua-microondas-nutrientes">legumes no vapor, na água ou no micro-ondas</Link> · <Link href="/blog/batata-inglesa-doce-mandioca-comparar-preparar">batata inglesa, batata-doce ou mandioca</Link>.
          </p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}>
              <h2>Monte um plano alimentar que caiba na sua cozinha e na sua rotina</h2>
              <p>Gere uma sugestão prática e procure orientação profissional quando precisar de estratégia individual.</p>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>

          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>

      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, restrições, sintomas e condições de saúde exigem orientação individual.</p>
        <p>
          Fontes: <a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guia Alimentar para a População Brasileira</a> · <a href="https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/alimentos/manuais-guias-e-orientacoes/cartilha-boas-praticas-para-servicos-de-alimentacao.pdf/@@display-file/file" target="_blank" rel="noopener noreferrer">Anvisa — boas práticas para serviços de alimentação</a> · <a href="https://www.tbca.net.br/" target="_blank" rel="noopener noreferrer">TBCA — Tabela Brasileira de Composição de Alimentos</a>. Consultadas em 25/09/2026.
        </p>
      </footer>
    </main>
  );
}
