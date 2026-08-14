import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Frutas Secas São Saudáveis? Rótulo, Porção e Como Escolher | Nutry.life",
  description: "Entenda as diferenças entre frutas secas, frescas, cristalizadas e snacks de fruta, com dicas para ler o rótulo.",
  keywords: "frutas secas são saudáveis, fruta seca tem açúcar, frutas desidratadas, frutas cristalizadas, como escolher fruta seca",
  openGraph: {
    title: "Frutas Secas São Saudáveis? Rótulo, Porção e Como Escolher | Nutry.life",
    description: "Um guia prático para diferenciar secagem, açúcar adicionado, fritura e nomes de marketing.",
    url: "https://nutry.life/blog/frutas-secas-rotulo-porcao-como-escolher"
  },
};

export default function Post() {
  return (
    <>
      <header className={styles.header}><Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link></header>
      <main className={styles.postContainer}>
        <article className={styles.post}>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
          <div className={styles.postMeta}>
            <span className={styles.postCategory}>Escolhas Alimentares</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>14 de agosto de 2026</span>
          </div>
          <h1 className={styles.postTitle}>Frutas Secas São Saudáveis? Rótulo, Porção e Como Escolher</h1>
          <p className={styles.postExcerpt}>Uva-passa, damasco e banana desidratada podem ter composições muito diferentes. O processo, a lista de ingredientes e a forma de consumo ajudam mais do que o nome da embalagem.</p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div><strong>Quer variar frutas e lanches na rotina?</strong><span>Crie uma sugestão de plano alimentar com opções práticas e adaptáveis às suas preferências.</span></div>
            <Link href="/" className={styles.primaryButton}>Gerar meu plano</Link>
          </div>

          <div className={styles.postContent}>
            <p>Frutas secas são obtidas pela retirada de parte da água. Quando não recebem açúcar, óleo ou outros ingredientes, podem continuar no grupo dos alimentos minimamente processados. Isso não torna toda embalagem equivalente: “chips”, frutas cristalizadas e misturas prontas podem seguir processos e receitas diferentes.</p>
            <p>A secagem concentra sabor e reduz volume. Por isso, comparar uma fruta fresca inteira com algumas unidades secas apenas pelo tamanho visual costuma confundir. A melhor leitura considera ingredientes, informação por 100 gramas, porção realmente consumida e contexto da refeição.</p>

            <h2>Fruta seca, desidratada e cristalizada são a mesma coisa?</h2>
            <div style={{ overflowX: "auto" }}>
              <table>
                <thead><tr><th>Produto</th><th>Como costuma ser feito</th><th>O que conferir</th></tr></thead>
                <tbody>
                  <tr><td>Fruta seca ou desidratada</td><td>Retirada de água por secagem</td><td>Se a lista traz apenas a fruta ou aditivos necessários</td></tr>
                  <tr><td>Fruta cristalizada</td><td>Preparação com incorporação de açúcar</td><td>Açúcar adicionado e posição dos ingredientes</td></tr>
                  <tr><td>Chips de fruta</td><td>Pode ser seco, assado ou frito</td><td>Óleo, açúcar, aromatizantes e método de preparo</td></tr>
                  <tr><td>Mix de frutas</td><td>Combinação de frutas e, às vezes, outros ingredientes</td><td>Proporção, coberturas, xaropes e porção indicada</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Fruta seca tem mais açúcar?</h2>
            <p>A água diminui durante a secagem, mas os açúcares naturalmente presentes permanecem em um volume menor. Assim, a fruta seca fica mais concentrada quando comparada grama por grama com a fresca. Isso é diferente de receber açúcar durante a fabricação.</p>
            <p>A tabela brasileira de composição de alimentos pode ajudar a comparar nutrientes, mas o rótulo da embalagem é a referência para aquele produto específico. Cultivar, processamento e ingredientes adicionais alteram o resultado.</p>

            <h2>Como identificar açúcar adicionado</h2>
            <p>Leia a lista de ingredientes. Termos como açúcar, xarope de glicose, sacarose, mel ou concentrados usados para adoçar indicam ingredientes além da fruta. A rotulagem nutricional brasileira também declara açúcares totais e adicionados e apresenta valores por 100 gramas, facilitando a comparação entre produtos.</p>
            <p>Uma embalagem pode usar expressões como “natural” ou destacar a fruta na frente, mas isso não substitui a lista de ingredientes. Compare produtos da mesma categoria usando a mesma base.</p>

            <h2>E o açúcar que já existe na fruta?</h2>
            <p>Açúcares naturalmente presentes fazem parte da estrutura do alimento. Eles não são classificados como açúcares adicionados apenas porque a fruta foi seca. Ainda assim, a menor quantidade de água muda textura, volume e velocidade de consumo.</p>
            <p>Não é necessário tratar fruta seca como doce proibido. Também não é adequado presumir que qualquer quantidade equivale visualmente à fruta fresca. Atenção à fome, ao uso culinário e à combinação na refeição é mais útil do que regras rígidas.</p>

            <h2>As fibras são preservadas?</h2>
            <p>Boa parte das fibras permanece, embora o processamento possa alterar textura e alguns componentes. Descascar, coar, transformar em pasta ou usar apenas suco modifica o produto. Por isso, duas versões da mesma fruta podem apresentar valores diferentes.</p>
            <p>Se o objetivo é ampliar variedade de fibras, frutas secas podem participar junto de frutas frescas, feijões, cereais integrais, verduras, legumes, sementes e oleaginosas.</p>

            <h2>Banana chips merece atenção especial</h2>
            <p>“Banana chips” não descreve um único produto. Algumas versões são apenas desidratadas; outras recebem óleo, açúcar, sal ou aromatizantes. A textura crocante pode vir da secagem, do assamento ou da fritura.</p>
            <p>Veja os ingredientes e compare gordura saturada, açúcares adicionados e sódio na tabela. A palavra “banana” na embalagem não revela sozinha como o alimento foi preparado.</p>

            <h2>Por que aparece óleo em algumas frutas?</h2>
            <p>Pequenas quantidades podem ser usadas para evitar que unidades grudem; em chips, o óleo também pode fazer parte do preparo. Sua presença não transforma automaticamente o alimento em uma escolha inadequada, mas muda a composição e merece ser considerada na comparação.</p>

            <h2>Quando frutas secas são práticas?</h2>
            <ul>
              <li>Em deslocamentos, quando conservar fruta fresca é difícil.</li>
              <li>Como ingrediente de aveia, iogurte, saladas e preparações caseiras.</li>
              <li>Para aproveitar sabores e texturas diferentes sem depender de produtos prontos.</li>
              <li>Em receitas, observando que a fruta seca adoça e absorve água.</li>
              <li>Com castanhas ou sementes, quando essa combinação fizer sentido para a rotina.</li>
            </ul>

            <h2>Como escolher no mercado</h2>
            <ol>
              <li>Comece pela lista de ingredientes, não pela imagem frontal.</li>
              <li>Diferencie fruta desidratada de cristalizada e de chips fritos.</li>
              <li>Compare produtos por 100 gramas e depois observe a porção que costuma usar.</li>
              <li>Verifique açúcares adicionados, gordura saturada e sódio.</li>
              <li>Escolha embalagens íntegras e respeite conservação e validade.</li>
              <li>Varie com frutas frescas, especialmente quando estiverem acessíveis e da estação.</li>
            </ol>

            <h2>Cuidados individuais</h2>
            <p>Pessoas com alergias devem conferir ingredientes e avisos de contaminação cruzada. Quem precisa controlar potássio, carboidratos ou outros nutrientes por uma condição clínica deve receber orientação individual de profissional habilitado.</p>
            <p>Frutas secas também podem aderir aos dentes. Higiene bucal e acompanhamento odontológico continuam importantes, especialmente quando o consumo é frequente.</p>

            <h2>Conclusão</h2>
            <p>Frutas secas sem ingredientes adicionais podem ser opções minimamente processadas, práticas e versáteis. A retirada de água concentra sabor e nutrientes em menor volume, enquanto açúcar, óleo e outros ingredientes dependem do produto. Leia o rótulo, diferencie os processos e use a variedade a favor da rotina.</p>
            <p>Para continuar, veja como comparar <Link href="/blog/banana-vs-maca-nutrientes-saciedade-como-escolher">banana e maçã</Link> e como escolher entre <Link href="/blog/aveia-flocos-farelo-farinha-diferencas">aveia em flocos, farelo ou farinha</Link>.</p>

            <h2>Fontes consultadas</h2>
            <ul>
              <li><a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2021/in-natura-processados-ultraprocessados-conheca-os-tipos-de-alimento" target="_blank" rel="noopener noreferrer">Ministério da Saúde — alimentos in natura, processados e ultraprocessados</a>.</li>
              <li><a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem nutricional</a>.</li>
              <li><a href="https://www.tbca.net.br/" target="_blank" rel="noopener noreferrer">Tabela Brasileira de Composição de Alimentos — TBCA</a>.</li>
            </ul>
          </div>

          <section className={styles.premiumBanner} data-cta="final">
            <div><span className={styles.premiumBadge}>Nutry.life</span><h2>Transforme escolhas práticas em refeições possíveis</h2><p>Use o gerador para criar uma sugestão de plano alimentar adaptável às suas preferências e rotina.</p></div>
            <Link href="/" className={styles.primaryButton}>Criar meu plano alimentar</Link>
          </section>

          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </article>
      </main>

      <footer className={styles.footer}><p><strong>Aviso:</strong> este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades alimentares variam conforme idade, saúde, rotina e contexto. Em caso de condição clínica, alergia ou dúvida específica, procure atendimento profissional.</p></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"Frutas Secas São Saudáveis? Rótulo, Porção e Como Escolher",
        description:"Guia para comparar frutas secas, frescas, cristalizadas e chips por ingredientes, processamento e rótulo.",
        datePublished:"2026-08-14",dateModified:"2026-08-14",
        author:{"@type":"Organization",name:"Nutry.life"},
        publisher:{"@type":"Organization",name:"Nutry.life",url:"https://nutry.life"},
        mainEntityOfPage:"https://nutry.life/blog/frutas-secas-rotulo-porcao-como-escolher"
      }) }} />
    </>
  );
}
