import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Deixar o Feijão de Molho: Tempo, Água e Cozimento Seguro";
const description = "Entenda para que serve o remolho, quando trocar a água, como conservar durante o processo e por que deixar de molho não substitui o cozimento.";
const url = "https://www.nutry.life/blog/feijao-de-molho-tempo-agua-cozimento";
export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-09-11", modifiedTime: "2026-09-11" },
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-09-11", dateModified: "2026-09-11", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};
export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🫘 Cozinha prática · 5 min de leitura · 11 de setembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Deixar o feijão de molho pode reduzir o tempo de cozimento e ajudar os grãos a hidratarem de maneira mais uniforme. Mas o remolho não é uma etapa mágica: seus efeitos variam conforme variedade, idade do grão, temperatura, água utilizada e método de preparo.</p>
          <div className={styles.articleCtaTop} data-cta="top">
            <div><strong>Organize refeições que cabem na sua semana</strong>
              <p>Gere uma sugestão de plano alimentar na Nutry.life e adapte os alimentos à sua rotina.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>
          <h2>O que acontece durante o remolho</h2>
          <p>O grão seco absorve água e aumenta de volume. Essa hidratação prévia costuma encurtar o tempo necessário para amolecer no cozimento, mas não existe um tempo universal para todos os feijões. Grãos mais antigos ou armazenados em condições inadequadas podem continuar duros por mais tempo.</p>
          <p>Alguns compostos solúveis passam para a água. A intensidade depende do tempo, da proporção de água e da variedade. Isso ajuda a explicar por que descartar ou aproveitar a água muda sabor, cor e composição — não há uma resposta única que sirva para toda receita.</p>
          <h2>Quanto tempo deixar?</h2>
          <p>Para a rotina doméstica, algumas horas ou o período entre a noite e a manhã costumam ser suficientes para hidratar muitos tipos de feijão. Observe o aumento de volume e mantenha água sobrando, porque os grãos absorvem bastante líquido.</p>
          <p>Se o remolho for prolongado ou o ambiente estiver quente, prefira a geladeira. Água turva, espuma excessiva, odor fermentado ou aparência incomum indicam que o processo não seguiu bem; não tente corrigir apenas lavando e temperando.</p>
          <h2>Precisa trocar ou descartar a água?</h2>
          <p>Descartar a água e cozinhar com água nova é uma opção prática para retirar parte dos compostos que migraram para o líquido. Ao mesmo tempo, também pode levar embora componentes solúveis e parte da cor e do sabor.</p>
          <p>Cozinhar na própria água preserva mais do caldo, mas não oferece uma vantagem obrigatória para todas as pessoas. Se você sente desconforto ao comer feijão, o resultado não depende apenas da água: porção, frequência de consumo, variedade, restante da refeição e adaptação individual também influenciam.</p>
          <h2>Deixar de molho reduz gases?</h2>
          <p>O remolho pode reduzir parte de oligossacarídeos que passam para a água, sobretudo quando ela é descartada. Isso não garante ausência de gases. Esses carboidratos também são fermentados pela microbiota intestinal, e a resposta varia bastante entre pessoas.</p>
          <p>Aumentar a quantidade de feijão gradualmente e observar a própria tolerância costuma ser mais responsável que prometer um método capaz de resolver todo desconforto. Sintomas intensos, persistentes ou acompanhados de outros sinais merecem avaliação profissional.</p>
          <h2>Remolho não substitui cozimento completo</h2>
          <p>Feijão cru ou mal cozido não deve ser consumido. O calor adequado amolece o grão e reduz componentes naturais que podem causar efeitos indesejados. A FDA destaca atenção especial a alguns feijões vermelhos, que possuem maior concentração de fito-hemaglutinina quando crus ou preparados de forma insuficiente.</p>
          <p>A variedade comum no Brasil não deve ser confundida automaticamente com o red kidney bean citado em alertas internacionais, mas a regra prática continua válida: grão hidratado ainda está cru. Cozinhe até ficar completamente macio e siga as orientações do equipamento.</p>
          <h2>Panela de pressão ou panela comum?</h2>
          <p>A pressão reduz o tempo de preparo, desde que a panela esteja em boas condições, não seja preenchida além do limite e tenha válvula limpa. Respeite o manual, deixe a pressão sair de maneira segura e abra somente quando o equipamento permitir.</p>
          <p>Na panela comum, mantenha água suficiente e verifique o ponto ao longo do preparo. O tempo varia muito, por isso um número fixo pode enganar. Sal, ingredientes ácidos, dureza da água, idade e variedade do feijão mudam a textura e a velocidade de amolecimento.</p>
          <h2>Um passo a passo responsável</h2>
          <ol>
            <li>Escolha os grãos e retire pedras ou unidades danificadas.</li>
            <li>Lave em água corrente.</li>
            <li>Cubra com bastante água em recipiente limpo.</li>
            <li>Mantenha refrigerado se o período for longo ou o ambiente estiver quente.</li>
            <li>Decida se aproveitará ou descartará a água conforme receita e preferência.</li>
            <li>Cozinhe com água suficiente até os grãos ficarem macios.</li>
            <li>Resfrie e guarde as sobras sem deixá-las por horas em temperatura ambiente.</li>
          </ol>
          <h2>E o bicarbonato?</h2>
          <p>Uma pequena quantidade pode acelerar o amolecimento porque altera o meio de cozimento, mas também pode modificar sabor e textura e aumentar o sódio. Não é necessário para todo feijão. Usar muito para compensar grão velho pode produzir caldo e casca desagradáveis sem resolver a qualidade da matéria-prima.</p>
          <h2>O que vale guardar</h2>
          <ul>
            <li>Remolho é uma ferramenta de tempo e textura, não uma obrigação nutricional universal.</li>
            <li>Descartar a água muda alguns compostos, mas também cor e sabor.</li>
            <li>O efeito sobre desconforto digestivo não é igual para todos.</li>
            <li>Hidratar não torna o grão pronto para consumo.</li>
            <li>Cozimento completo e armazenamento correto continuam essenciais.</li>
          </ul>
          <p>Leia também: <Link href="/blog/feijao-preto-carioca-branco-diferencas">diferenças entre feijão preto, carioca e branco</Link> · <Link href="/blog/arroz-feijao-cozidos-guardar-congelar-reaquecer">como guardar arroz e feijão cozidos</Link>.</p>
          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Inclua o feijão no planejamento da semana</h2>
              <p>Gere uma sugestão de plano alimentar, adapte porções e preparos às suas preferências e procure orientação profissional quando precisar de uma estratégia individual.</p>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, restrições alimentares, sintomas e condições de saúde exigem orientação individual.</p>
        <p>Fontes e referências: <a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guia Alimentar para a População Brasileira</a> · <a href="https://www.fda.gov/food/foodborne-pathogens/bad-bug-book-second-edition" target="_blank" rel="noopener noreferrer">FDA — Bad Bug Book</a>. Referências consultadas em 11/09/2026.</p>
      </footer>
    </main>
  );
}
