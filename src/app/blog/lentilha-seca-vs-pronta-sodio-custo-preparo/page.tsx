import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Lentilha Seca ou Pronta: Sódio, Custo, Preparo e Como Usar";
const description = "Compare lentilha seca, em lata ou sachê pelo peso drenado, ingredientes, sódio, rendimento e tempo de cozinha.";
const url = "https://www.nutry.life/blog/lentilha-seca-vs-pronta-sodio-custo-preparo";
export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-09-14", modifiedTime: "2026-09-14" },
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-09-14", dateModified: "2026-09-14", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};
export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🫘 Escolhas práticas · 5 min de leitura · 14 de setembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Lentilha seca e lentilha pronta podem fazer parte das mesmas refeições, mas chegam à cozinha em estágios diferentes. A seca exige cozimento e aumenta de peso ao absorver água; a versão em lata ou sachê normalmente já está cozida e deve ser comparada pelo conteúdo drenado.</p>
          <div className={styles.articleCtaTop} data-cta="top">
            <div><strong>Transforme ingredientes práticos em refeições possíveis</strong>
              <p>Gere uma sugestão de plano alimentar na Nutry.life e adapte as escolhas à sua rotina.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>
          <h2>O que realmente muda entre seca e pronta?</h2>
          <p>A lentilha seca tem pouca água e precisa ser selecionada, lavada e cozida. A pronta passou por cozimento industrial e fica armazenada em líquido de cobertura, facilitando o uso imediato.</p>
          <p>Depois de preparadas, as duas oferecem leguminosa cozida. As principais diferenças práticas aparecem em tempo, ingredientes adicionados, sódio, textura, custo por porção e armazenamento.</p>
          <h2>Não compare o peso seco com o peso drenado</h2>
          <p>Cem gramas de lentilha seca não equivalem a cem gramas de lentilha cozida. Durante o cozimento, o grão absorve água e o peso aumenta.</p>
          <p>Para calcular preço, estime o rendimento do pacote seco e compare com o peso drenado da embalagem pronta. O peso líquido inclui o líquido de cobertura; o peso drenado mostra quanto alimento sólido existe.</p>
          <h2>A versão pronta tem sempre muito sódio?</h2>
          <p>O sódio varia entre produtos. Algumas versões levam água e sal; outras incluem temperos ou menor quantidade de sal. A tabela nutricional permite comparar marcas na mesma porção e por 100 gramas.</p>
          <p>Escorrer e enxaguar pode retirar parte do líquido aderido, além de mudar sabor e textura. Isso não transforma o valor do rótulo em um número exato após a lavagem, mas é uma estratégia culinária quando se deseja reduzir o sal presente na superfície.</p>
          <h2>Leia a lista de ingredientes</h2>
          <p>Lentilha, água e sal formam uma lista simples, mas alguns produtos podem trazer açúcar, óleo, aromatizantes, conservadores ou temperos. A presença de ingrediente adicional não torna a opção automaticamente inadequada; ela mostra que o produto é diferente.</p>
          <p>Observe também alertas de alergênicos e possíveis contaminações cruzadas, especialmente quando há restrição alimentar.</p>
          <h2>Lentilha seca precisa ficar de molho?</h2>
          <p>O remolho pode encurtar o cozimento, mas lentilhas geralmente cozinham mais rápido que muitos feijões e podem ser preparadas sem essa etapa. Variedade, idade do grão e resultado desejado alteram o tempo.</p>
          <p>Escolha os grãos, lave em água corrente e cozinhe até ficarem macios. Para salada, retire antes de desmanchar; para sopa ou purê, textura mais macia pode ser útil.</p>
          <h2>Panela comum ou pressão?</h2>
          <p>A panela comum facilita observar o ponto e costuma ser suficiente. A pressão reduz o tempo, mas a lentilha pode passar rapidamente de firme para muito macia.</p>
          <p>Respeite capacidade, válvula e manual da panela. Espere a pressão sair de forma segura antes de abrir e não encha acima do limite indicado para alimentos que formam espuma.</p>
          <h2>Proteína e fibras dentro da refeição</h2>
          <p>Lentilha fornece proteína vegetal, fibras e micronutrientes. Isso não significa que ela precise substituir sozinha todos os componentes do prato.</p>
          <p>Ela pode acompanhar arroz, hortaliças, ovos, carnes ou outros alimentos conforme preferências e necessidades. A qualidade da alimentação vem do conjunto e da regularidade, não de um ingrediente isolado.</p>
          <h2>Ferro: a lentilha ajuda, mas não faz milagre</h2>
          <p>Leguminosas contribuem com ferro de origem vegetal. A absorção varia e pode ser favorecida quando a refeição inclui alimentos fonte de vitamina C.</p>
          <p>Lentilha não diagnostica nem trata anemia. Suspeita de deficiência, cansaço persistente ou alteração em exames exige avaliação profissional.</p>
          <h2>Como usar a versão pronta</h2>
          <ul>
            <li>Escorra e, se desejar, enxágue antes de temperar.</li>
            <li>Adicione a saladas, arroz, sopas e refogados no final do preparo.</li>
            <li>Aqueça apenas o necessário para evitar que os grãos desmanchem.</li>
            <li>Transfira sobras da lata para recipiente adequado e refrigere conforme o rótulo.</li>
          </ul>
          <h2>Como organizar a versão seca</h2>
          <ul>
            <li>Cozinhe uma quantidade maior sem exagerar no sal.</li>
            <li>Divida em porções com um pouco do caldo.</li>
            <li>Resfrie sem deixar por horas em temperatura ambiente.</li>
            <li>Refrigere ou congele em recipientes identificados.</li>
          </ul>
          <h2>Qual costuma valer mais a pena?</h2>
          <p>A seca tende a oferecer menor custo por porção quando há tempo para cozinhar e espaço para armazenar. A pronta reduz trabalho, consumo de gás ou energia e pode evitar desperdício quando a quantidade necessária é pequena.</p>
          <p>A escolha mais econômica depende do rendimento real e do uso. Uma embalagem barata não compensa se parte for esquecida; um pacote seco barato também perde vantagem quando nunca há tempo para prepará-lo.</p>
          <h2>Checklist no mercado</h2>
          <ul>
            <li>Compare preço pelo peso drenado ou pelo rendimento cozido.</li>
            <li>Leia ingredientes e sódio na mesma quantidade.</li>
            <li>Observe integridade da lata ou do sachê.</li>
            <li>Considere tempo, energia, armazenamento e desperdício.</li>
            <li>Escolha a textura adequada para a receita.</li>
          </ul>
          <p>Leia também: <Link href="/blog/grao-de-bico-seco-vs-conserva-como-usar">como comparar grão-de-bico seco e em conserva</Link> · <Link href="/blog/feijao-preto-carioca-branco-diferencas">diferenças entre tipos de feijão</Link>.</p>
          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Inclua leguminosas no planejamento da semana</h2>
              <p>Gere uma sugestão de plano alimentar, adapte preparos à sua rotina e procure orientação profissional quando precisar de uma estratégia individual.</p>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, restrições alimentares, sintomas e condições de saúde exigem orientação individual.</p>
        <p>Fontes e referências: <a href="https://www.tbca.net.br/" target="_blank" rel="noopener noreferrer">TBCA — Tabela Brasileira de Composição de Alimentos</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem nutricional</a> · <a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guia Alimentar</a>. Referências consultadas em 14/09/2026.</p>
      </footer>
    </main>
  );
}
