import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Azeitona Verde ou Preta: O Que Muda e Como Comparar o Sódio";
const description = "Entenda diferenças de maturação e processamento, compare sódio e porção no rótulo e veja cuidados para conservar azeitonas depois de abrir.";
const url = "https://www.nutry.life/blog/azeitona-verde-preta-comparar-sodio-conservar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-25", modifiedTime: "2026-10-25" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-10-25",
  dateModified: "2026-10-25",
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
          <p className={styles.postExcerpt}>🫒 Rótulos e cozinha · 7 min de leitura · 25 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Azeitona verde e preta vêm de frutos da oliveira, mas cor, estágio de maturação, variedade e processamento podem produzir sabores, texturas e rótulos diferentes. A cor sozinha não permite dizer que uma opção é sempre melhor que a outra.</p>
          <p>Como a azeitona de mesa passa por processamento para reduzir o amargor e costuma ser conservada em salmoura, comparar sódio, porção, ingredientes e peso drenado é mais útil do que escolher apenas pela aparência.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Organize as escolhas no conjunto das refeições</strong>
            <p>Gere uma sugestão inicial de plano alimentar e adapte acompanhamentos, porções e temperos à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Verde e preta: o que a cor pode indicar?</h2>
          <p>Em geral, azeitonas verdes são colhidas antes do amadurecimento completo, enquanto versões mais escuras podem resultar de frutos mais maduros ou de processos específicos. Variedade, fermentação, cura e oxidação também influenciam a cor final; por isso, “preta” não descreve um único método.</p>
          <p>Leia a denominação de venda e a lista de ingredientes. Elas ajudam a identificar o produto efetivamente comprado, inclusive conservantes, acidulantes, estabilizantes, recheios e outros componentes permitidos.</p>

          <h2>Como comparar o sódio sem errar a porção</h2>
          <p>Use a coluna de 100 g da tabela nutricional para comparar marcas e versões na mesma base. Depois, confira quanto você realmente consome. Uma porção pequena adicionada a uma salada e várias unidades servidas como petisco representam quantidades diferentes.</p>
          <p>A Anvisa determina a lupa frontal de alto conteúdo de sódio para alimentos sólidos com 600 mg ou mais por 100 g. A ausência da lupa não significa que o alimento seja livre de sódio; a tabela continua sendo necessária para comparar e estimar a porção.</p>
          <div style={{ overflowX: "auto" }}><table>
            <thead><tr><th scope="col">No rótulo</th><th scope="col">O que responde</th><th scope="col">Como usar</th></tr></thead>
            <tbody>
              <tr><td>Sódio por 100 g</td><td>Permite comparar produtos na mesma quantidade</td><td>Escolha a menor quantidade entre opções equivalentes, se isso importar à rotina</td></tr>
              <tr><td>Sódio por porção</td><td>Mostra o valor para a porção declarada</td><td>Ajuste ao número de unidades realmente consumido</td></tr>
              <tr><td>%VD</td><td>Relaciona a porção ao valor diário de referência</td><td>Use como orientação geral, não como prescrição individual</td></tr>
              <tr><td>Lupa frontal</td><td>Sinaliza alto conteúdo quando o limite regulatório é atingido</td><td>Use como alerta rápido e confirme a tabela</td></tr>
            </tbody>
          </table></div>

          <h2>Peso líquido e peso drenado não são iguais</h2>
          <p>O peso líquido inclui o alimento e o líquido da embalagem. O peso drenado indica quanto resta sem a salmoura e ajuda a comparar rendimento e preço do conteúdo consumível. Duas embalagens do mesmo tamanho aparente podem entregar quantidades diferentes de azeitona.</p>
          <p>Para custo, divida o preço pelo peso drenado. Para nutrição, siga a forma de apresentação da tabela e as instruções do rótulo. Não substitua automaticamente o valor declarado por uma estimativa baseada no peso total.</p>

          <h2>Com caroço, sem caroço ou recheada?</h2>
          <p>A versão com caroço costuma exigir mais atenção ao servir, especialmente para crianças e pessoas com dificuldade de mastigação ou deglutição. A versão sem caroço facilita o uso em receitas, mas o tamanho da porção ainda deve ser observado.</p>
          <p>Azeitonas recheadas podem acrescentar pimentão, pasta, queijo, anchova ou outros ingredientes. Isso muda composição, alergênicos, sabor e às vezes sódio. Confira a lista completa, e não presuma que o recheio seja apenas decorativo.</p>

          <h2>Enxaguar elimina o sódio?</h2>
          <p>Drenar ou enxaguar pode retirar parte da salmoura aderida e suavizar o sabor, mas não permite calcular quanto sódio permaneceu no alimento. Não trate a lavagem como forma de transformar qualquer produto em “baixo sódio”.</p>
          <p>Se houver orientação profissional para restringir sódio, use o rótulo, a porção e a recomendação individual como referência. Hipertensão, doença renal, retenção de líquidos e uso de medicamentos exigem avaliação clínica; este conteúdo não define uma quantidade pessoal.</p>

          <h2>Como usar sem somar sal automaticamente</h2>
          <p>Azeitonas já oferecem sabor salgado e marcante. Experimente a preparação antes de acrescentar sal e combine com ingredientes frescos, ervas, limão, alho ou especiarias. Isso vale para saladas, molhos, pães, tortas e pratos com queijos ou embutidos.</p>
          <p>Quando vários componentes salgados aparecem na mesma receita, a soma importa. Comparar cada item e ajustar o tempero final costuma ser mais prático do que avaliar a azeitona isoladamente.</p>

          <h2>Conservação depois de abrir</h2>
          <p>Siga a orientação do fabricante sobre refrigeração e prazo de consumo após a abertura. Esse prazo pode ser bem menor que a validade da embalagem fechada. Anote a data de abertura e mantenha o recipiente tampado.</p>
          <p>Use utensílio limpo, evite contato com mãos ou restos de outros alimentos e não misture produto novo com sobras antigas. Mantenha a azeitona no líquido somente conforme as instruções do rótulo. Descarte se houver embalagem estufada, vazamento, mofo, odor incomum ou conservação fora do indicado; aparência normal não garante segurança.</p>

          <h2>Checklist rápido para escolher</h2>
          <ul>
            <li>leia a denominação de venda e não escolha apenas pela cor;</li>
            <li>compare sódio por 100 g entre opções equivalentes;</li>
            <li>relacione a porção declarada à quantidade realmente consumida;</li>
            <li>use o peso drenado para comparar rendimento e preço;</li>
            <li>confira ingredientes, recheios e alergênicos;</li>
            <li>depois de abrir, refrigere e respeite o prazo do fabricante;</li>
            <li>em restrição de sódio, procure orientação individual.</li>
          </ul>
          <p>Leia também: <Link href="/blog/shoyu-tradicional-light-sodio-ingredientes-comparar">shoyu tradicional ou light</Link> · <Link href="/blog/palmito-conserva-escolher-sodio-guardar-seguranca">palmito em conserva</Link> · <Link href="/blog/como-ler-rotulo-de-alimentos">como ler o rótulo de alimentos</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Transforme a comparação em uma rotina possível</h2><p>Use o gerador de plano alimentar para obter uma sugestão inicial e organizar refeições e acompanhamentos. Adapte às suas preferências; alergias, restrições e necessidades clínicas exigem avaliação profissional.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem nutricional</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/validade-de-alimentos" target="_blank" rel="noopener noreferrer">Anvisa — validade e conservação de alimentos</a>. Consultadas em 25/10/2026.</p>
      </footer>
    </main>
  );
}
