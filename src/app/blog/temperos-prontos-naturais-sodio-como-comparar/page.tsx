import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Temperos Prontos ou Naturais: Como Ganhar Sabor e Comparar o Sódio";
const description = "Veja a diferença entre ervas, misturas secas, sal temperado e caldos concentrados e monte combinações simples para o dia a dia.";
const url = "https://www.nutry.life/blog/temperos-prontos-naturais-sodio-como-comparar";
export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-09-01", modifiedTime: "2026-09-01" },
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-09-01", dateModified: "2026-09-01", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};
export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🌿 Escolhas práticas · 3 min de leitura · 1 de setembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Um pacote de orégano, uma mistura de ervas sem sal e um caldo concentrado são todos produtos comprados prontos, mas não têm a mesma composição. Para temperar melhor, vale olhar o que a mistura contém e como ela será usada na panela.</p>
          <div className={styles.articleCtaTop} data-cta="top">
            <div><strong>Quer organizar suas refeições com mais praticidade?</strong>
              <p>Use a Nutry.life para gerar uma sugestão de plano alimentar e adaptá-la à sua rotina.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>
          <h2>Pronto não é uma categoria única</h2>
<p>Ervas e especiarias secas podem facilitar a rotina. Misturas com sal, açúcar, óleos ou outros ingredientes cumprem funções diferentes. Leia o rótulo antes de concluir que qualquer tempero embalado é igual a um caldo em cubo.</p>
<p>A UNA-SUS orienta reduzir o sal e usar ervas, especiarias e outros temperos para dar sabor. Essa troca pode ser gradual. O ponto é ampliar os aromas e controlar o que você adiciona, sem esperar que ervas tratem pressão alta ou outras condições.</p>
<h2>Sal temperado continua contendo sal</h2>
<p>Misturar sal com ervas não elimina o sódio. Se você passa a usar muito mais da mistura, parte da redução esperada pode desaparecer. Por isso, observe a quantidade total usada na receita, não apenas o nome do produto.</p>
<p>Nos caldos e temperos concentrados, veja quanto sódio corresponde à porção utilizada e quantas porções entram na panela. Compare produtos na mesma base e considere o rendimento do prato. Não use uma dose pequena do rótulo para representar uma receita que levou várias doses.</p>
<h2>Cinco combinações para experimentar</h2>
<ul><li><strong>Feijão:</strong> alho, cebola e louro, ajustando o sal ao final.</li><li><strong>Legumes assados:</strong> páprica, alecrim e uma quantidade medida de óleo.</li><li><strong>Molho de tomate:</strong> alho, cebola, manjericão ou orégano.</li><li><strong>Salada:</strong> limão ou vinagre, ervas e o complemento que você preferir.</li><li><strong>Arroz:</strong> cebola, alho e cheiro-verde para variar a preparação habitual.</li></ul>
<p>São sugestões culinárias para testar, sem obrigação de comprar todos os temperos. Escolha dois ou três que combinem com os pratos da sua casa. Um armário cheio de potes esquecidos não torna o preparo mais simples.</p>
<h2>Como reduzir sem deixar tudo sem graça</h2>
<p>Faça pequenas mudanças e prove a comida antes de repetir o sal. Comece por uma receita frequente, ajustando um ingrediente de cada vez. Assim fica mais fácil perceber o que funcionou e repetir na próxima semana.</p>
<p>Ácidos como limão e vinagre, aromas de ervas e o dourado de um refogado criam experiências diferentes de sabor. Eles não precisam imitar exatamente um caldo concentrado. O objetivo é encontrar uma combinação agradável para você.</p>
<h2>Organização que economiza tempo</h2>
<p>Deixe os temperos secos identificados, fechados e longe de vapor e calor excessivo. Use colher limpa e seca quando necessário. Para ervas frescas, compre uma quantidade compatível com o uso e planeje em quais receitas vão entrar.</p>
<p>Se preparar uma base caseira, não invente validade longa porque ela parece natural. Ingredientes frescos também se deterioram. Siga uma receita com conservação confiável e evite manter misturas de alho ou ervas em óleo à temperatura ambiente. Preparar pequenas quantidades pode ser mais prático que arriscar uma grande sobra.</p>
<h2>Um critério simples para a próxima compra</h2>
<p>Pergunte: preciso de aroma, de sal ou de um caldo pronto? Essa resposta ajuda a escolher entre uma erva pura, uma mistura sem sal e um produto composto. Depois compare ingredientes, preço e quantidade que será usada.</p>
<p>Pessoas com orientação específica para controle de sódio devem seguir o plano individual. Não substitua sal comum por produtos com potássio por conta própria se houver doença renal ou uso de medicamentos que exijam cuidado. Para a cozinha do dia a dia, ampliar os temperos e medir os ingredientes já oferece um caminho concreto.</p>
          <p>Leia também: <Link href="/blog/molho-tomate-passata-extrato-como-escolher">molho, passata e extrato de tomate</Link> · <Link href="/blog/como-organizar-feira-semanal">organização da feira</Link>.</p>
          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Leve as ideias para as refeições da semana</h2>
              <p>Gere uma sugestão de plano alimentar, ajuste às suas preferências e procure orientação profissional quando precisar de uma dieta individual.</p>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, restrições alimentares, alergias e condições de saúde exigem orientação individual.</p>
        <p>Fontes e referências: <a href="https://nchfp.uga.edu/how/freeze/vegetable/freezing-garlic-in-oil/" target="_blank" rel="noopener noreferrer">National Center for Home Food Preservation — conservação de alho em óleo</a> · <a href="https://www.unasus.gov.br/noticia/troque-o-sal-por-temperos-e-ervas-naturais-e-ganhe-saude" target="_blank" rel="noopener noreferrer">UNA-SUS — uso de ervas e redução de sal</a> · <a href="https://prefeitura.sp.gov.br/w/noticia/entenda-a-diferenca-entre-o-sal-e-o-sodio" target="_blank" rel="noopener noreferrer">Secretaria Municipal da Saúde de São Paulo — sal e sódio</a>.</p>
      </footer>
    </main>
  );
}
