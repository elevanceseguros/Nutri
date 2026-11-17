import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Precisa Lavar o Arroz Antes de Cozinhar? Amido, Nutrientes e Arsênio";
const description = "Entenda quando lavar o arroz muda a textura, o que acontece com amido e nutrientes e por que o enxágue não elimina o arsênio do grão.";
const url = "https://www.nutry.life/blog/precisa-lavar-arroz-antes-cozinhar-amido-arsenio";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    publishedTime: "2026-11-17",
    modifiedTime: "2026-11-17",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
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
          <p className={styles.postExcerpt}>🍚 Preparo e segurança · 9 min de leitura · 17 de novembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Lavar o arroz antes do cozimento é, em grande parte, uma escolha culinária. O enxágue remove poeira e parte do amido solto na superfície, o que pode deixar os grãos menos aderentes. Isso não significa que todo arroz precise ser lavado nem que a água esbranquiçada seja sujeira.</p>
          <p>Também não convém tratar uma lavagem rápida como método de segurança. Ela não esteriliza o grão e tem efeito limitado sobre o arsênio. Tipo de arroz, rótulo, resultado desejado e método de cocção importam mais do que uma regra única.</p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div>
              <strong>Transforme escolhas simples em refeições possíveis</strong>
              <p>Gere uma sugestão de plano alimentar na Nutry.life e ajuste alimentos, porções e preparos às preferências que você informar.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>

          <h2>Então, precisa lavar?</h2>
          <p>Não existe resposta universal. Para arroz branco comum, lavar algumas vezes pode reduzir o amido superficial e ajudar a obter grãos mais soltos. Para risoto, arroz doce e outras preparações em que a cremosidade é desejada, retirar esse amido pode atrapalhar o resultado.</p>
          <p>Produtos enriquecidos ou parboilizados podem trazer instruções próprias. Se o rótulo disser para não lavar, siga a orientação: parte dos nutrientes adicionados pode estar na superfície e ser perdida no enxágue.</p>

          <h2>Por que a água fica branca?</h2>
          <p>Durante o beneficiamento, transporte e atrito entre os grãos, pequenas partículas e amido ficam na superfície. Ao entrar em contato com a água, esse material se dispersa e deixa o líquido turvo. Isso, isoladamente, não indica contaminação nem adulteração.</p>
          <p>Lavar até a água ficar totalmente transparente costuma gastar mais água do que o necessário. Para mudar a textura, duas ou três passagens rápidas, sem esfregar com força, geralmente bastam.</p>

          <h2>Lavar elimina bactérias ou torna o arroz seguro?</h2>
          <p>Não. Enxaguar não substitui cozimento, higiene das mãos, utensílios limpos nem conservação adequada. O calor do preparo reduz microrganismos vegetativos, mas esporos de <em>Bacillus cereus</em> podem sobreviver e germinar se o arroz cozido ficar muito tempo em temperatura ambiente.</p>
          <p>Depois de pronto, sirva logo ou resfrie em recipiente raso e leve à geladeira sem demora. Ao reaquecer, aqueça por completo e evite ciclos repetidos de resfriamento e reaquecimento.</p>

          <h2>E o arsênio?</h2>
          <p>O arroz pode absorver arsênio do solo e da água. A quantidade varia com origem, variedade e cultivo; não é possível estimá-la pela aparência. A FDA relata que um enxágue simples tem efeito mínimo sobre o teor total. Portanto, lavar não é garantia de remoção.</p>
          <p>Cozinhar em bastante água e escorrer pode reduzir parte do arsênio inorgânico, mas também remove nutrientes solúveis, especialmente de arroz enriquecido. Estudos experimentais encontraram reduções relevantes de arsênio com métodos de excesso de água, acompanhadas de perdas de vitaminas adicionadas.</p>

          <h2>Vale cozinhar como macarrão?</h2>
          <p>Pode ser uma opção eventual quando a prioridade é reduzir exposição, desde que a textura seja aceitável: use cerca de seis partes de água para uma de arroz, cozinhe e escorra. Não é obrigação para todas as pessoas nem solução completa.</p>
          <p>Variedade alimentar é uma estratégia mais ampla: alterne arroz com milho, aveia, quinoa, mandioca, batata e outros alimentos compatíveis com sua rotina. Para crianças pequenas ou situações clínicas específicas, procure orientação individual.</p>

          <h2>Como lavar com menos desperdício</h2>
          <ol>
            <li>Coloque a quantidade de arroz em uma tigela.</li>
            <li>Cubra com água potável e movimente suavemente.</li>
            <li>Escorra logo, sem deixar de molho por acaso.</li>
            <li>Repita duas ou três vezes, conforme a textura desejada.</li>
            <li>Cozinhe com a medida de água indicada para o tipo de arroz.</li>
          </ol>
          <p>Use a água do primeiro enxágue em plantas apenas se não houver sal e se isso for adequado às espécies. Não reutilize água que ficou por longo período em temperatura ambiente.</p>

          <h2>Quando não lavar</h2>
          <ul>
            <li>quando a embalagem orienta cozinhar sem enxaguar;</li>
            <li>em arroz enriquecido, para preservar nutrientes adicionados;</li>
            <li>em preparações que dependem do amido superficial para ficar cremosas;</li>
            <li>quando o método industrial do produto já entrega a textura esperada.</li>
          </ul>

          <h2>Checklist prático</h2>
          <ol>
            <li>Leia as instruções do pacote antes de decidir.</li>
            <li>Defina se deseja grãos soltos ou uma preparação cremosa.</li>
            <li>Se lavar, faça poucas passagens e use água potável.</li>
            <li>Não conte com o enxágue para esterilizar ou eliminar arsênio.</li>
            <li>Varie os cereais e tubérculos ao longo da semana.</li>
            <li>Resfrie e refrigere as sobras prontamente.</li>
          </ol>

          <p>Leia também: <Link href="/blog/arroz-branco-vs-integral-como-escolher">arroz branco ou integral</Link> · <Link href="/blog/arroz-feijao-cozidos-guardar-congelar-reaquecer">como guardar arroz e feijão cozidos</Link> · <Link href="/blog/legumes-vapor-agua-microondas-nutrientes">como o preparo afeta nutrientes dos legumes</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}>
              <h2>Monte refeições que façam sentido para sua rotina</h2>
              <p>Gere uma sugestão de plano alimentar e ajuste ingredientes e preparos às suas preferências. Para necessidades clínicas, procure avaliação profissional.</p>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou autoridade sanitária. Necessidades, sintomas, alergias, restrições e condições individuais exigem orientação profissional.</p>
        <p>Fontes e referências: <a href="https://www.fda.gov/food/environmental-contaminants-food/what-you-can-do-limit-exposure-arsenic" target="_blank" rel="noopener noreferrer">FDA — como reduzir a exposição ao arsênio</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/26515534/" target="_blank" rel="noopener noreferrer">Food Chemistry — cocção, arsênio e vitaminas do arroz</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/28392630/" target="_blank" rel="noopener noreferrer">Food Chemistry — lavagem e métodos de cocção</a>. Consultadas em 17/11/2026.</p>
      </footer>
    </main>
  );
}
