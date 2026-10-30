import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Alimento com Mofo: Cortar a Parte Estragada ou Descartar?";
const description = "Entenda por que o mofo pode avançar além da parte visível, quais alimentos devem ser descartados e como reduzir a contaminação na geladeira e na despensa.";
const url = "https://www.nutry.life/blog/alimento-com-mofo-cortar-ou-descartar-seguranca";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    publishedTime: "2026-10-30",
    modifiedTime: "2026-10-30",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
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
          <p className={styles.postExcerpt}>🔬 Segurança dos alimentos · 8 min de leitura · 30 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Uma mancha verde, branca ou escura pode parecer localizada, mas a parte visível é apenas uma fração do crescimento do fungo. Filamentos microscópicos podem penetrar no alimento, e outros microrganismos podem estar presentes sem alterar imediatamente o cheiro ou a aparência.</p>
          <p>A regra mais segura para a cozinha doméstica é simples: <strong>alimentos macios, úmidos, porosos, fatiados ou preparados devem ser descartados por inteiro quando apresentam mofo</strong>. O Guia Alimentar do Ministério da Saúde orienta descartar alimentos mofados ou com bolor. Exceções técnicas existem para poucos alimentos firmes e exigem avaliação cuidadosa.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Organize refeições e compras com menos desperdício</strong>
            <p>Gere uma sugestão inicial de plano alimentar e ajuste alimentos, porções e frequência à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Por que tirar apenas a mancha pode não resolver?</h2>
          <p>O mofo cresce por estruturas que podem se estender abaixo da superfície. Em pão, frutas macias, molhos e alimentos cozidos, essa rede pode alcançar áreas que parecem normais. O USDA também alerta que alimentos mofados podem conter bactérias invisíveis junto ao fungo.</p>
          <p>Cor e tamanho da mancha não identificam a espécie nem mostram até onde ela avançou. Cheirar de perto também não é um teste seguro, pois pode expor as vias respiratórias aos esporos. E provar um pedaço para “ver se está bom” aumenta a exposição sem fornecer uma resposta confiável.</p>

          <h2>Quando o descarte deve ser integral</h2>
          <div style={{ overflowX: "auto" }}><table><thead><tr><th scope="col">Alimento com mofo</th><th scope="col">Conduta doméstica mais segura</th><th scope="col">Por quê?</th></tr></thead><tbody>
            <tr><td>Pães, bolos, tortilhas e outros assados</td><td>Descartar todo o item ou pacote afetado</td><td>São porosos; o crescimento pode avançar além do ponto visível</td></tr>
            <tr><td>Frutas e hortaliças macias, como tomate, morango e pêssego</td><td>Descartar a unidade mofada e as que estavam em contato direto</td><td>A umidade e a polpa macia favorecem penetração</td></tr>
            <tr><td>Iogurte, requeijão, creme, queijo fresco e outros laticínios úmidos</td><td>Descartar a embalagem</td><td>O mofo e contaminantes associados podem se espalhar pelo produto</td></tr>
            <tr><td>Geleia, molho, pasta, comida cozida e sobras</td><td>Descartar o recipiente de alimento</td><td>Misturar, aquecer ou retirar a camada não garante segurança</td></tr>
            <tr><td>Castanhas, grãos, farinhas e amendoim</td><td>Descartar o lote afetado</td><td>Não é possível avaliar toxinas de fungos pela aparência doméstica</td></tr>
            <tr><td>Alimentos fatiados ou ralados</td><td>Descartar</td><td>O corte aumenta superfícies e pontos de contato</td></tr>
          </tbody></table></div>
          <p>Em uma bandeja de frutas pequenas, descarte as unidades mofadas e as que as tocavam. Examine as restantes sem apertá-las; se estiverem íntegras, sem mofo e sem amolecimento excessivo, lave-as antes do consumo. Se houver contaminação extensa ou dúvida, descarte a bandeja.</p>

          <h2>E alimentos firmes: é possível aproveitar?</h2>
          <p>A orientação técnica do USDA admite retirar a área afetada de alguns vegetais firmes, como cenoura, repolho e pimentão, porque o mofo tem mais dificuldade para penetrar em estruturas densas. A indicação é cortar pelo menos 2,5 cm ao redor e abaixo do ponto, sem encostar a faca no mofo, e usar uma faca limpa.</p>
          <p>Essa é uma exceção, não uma regra para qualquer fruta ou legume. Não se aplica a tomates, pepinos, folhas, frutas macias, itens cortados nem alimentos com várias áreas afetadas. A orientação brasileira geral continua sendo descartar alimentos mofados; em caso de incerteza, o descarte é a decisão prudente.</p>

          <h2>Queijo duro não é igual a queijo fresco</h2>
          <p>Em um bloco inteiro de queijo duro no qual o mofo não faz parte do processo de fabricação, o USDA também admite cortar pelo menos 2,5 cm ao redor e abaixo da área, evitando contaminar a faca, e depois envolver o queijo em material limpo. O procedimento não vale para queijo fatiado, ralado ou esfarelado.</p>
          <p>Queijos macios e úmidos, como queijo cremoso, cottage e versões frescas, devem ser descartados. Queijos produzidos intencionalmente com culturas de mofo são outra categoria: neles, o crescimento previsto faz parte do produto, mas mofo diferente do esperado deve ser avaliado conforme o tipo e a orientação do fabricante.</p>

          <h2>Não tente recuperar geleia, molho ou pão com calor</h2>
          <p>Retirar a camada, ferver, torrar ou assar novamente não oferece garantia de remoção de contaminantes. Algumas substâncias produzidas por fungos podem permanecer, e o aquecimento doméstico não permite verificar se o alimento se tornou seguro.</p>
          <p>Também não misture a parte aparentemente normal em outra preparação. Isso distribui um problema que antes estava concentrado e dificulta controlar quais utensílios e superfícies entraram em contato.</p>

          <h2>Como descartar sem espalhar esporos</h2>
          <ol>
            <li>Não cheire o alimento de perto nem raspe a área.</li>
            <li>Coloque o item em saco ou embalagem fechada antes de levar ao lixo.</li>
            <li>Verifique alimentos que estavam encostados nele.</li>
            <li>Lave mãos, faca, tábua, pote e a superfície usada.</li>
            <li>Limpe a prateleira da geladeira ou despensa se houve contato ou vazamento.</li>
            <li>Troque panos ou esponjas contaminados; não use o mesmo pano para espalhar resíduos.</li>
          </ol>
          <p>Produtos de limpeza não devem ser aplicados diretamente no alimento. Na geladeira, siga as instruções do fabricante do equipamento e do saneante, enxágue quando indicado e mantenha alimentos protegidos durante a limpeza.</p>

          <h2>Como reduzir o aparecimento de mofo</h2>
          <ul>
            <li><strong>Compre quantidades realistas:</strong> especialmente de pães, frutas e queijos frescos.</li>
            <li><strong>Controle a umidade:</strong> seque folhas e recipientes antes de armazenar e não guarde alimentos ainda quentes em embalagens fechadas que acumulem condensação.</li>
            <li><strong>Use recipientes limpos:</strong> migalhas e resíduos antigos favorecem deterioração.</li>
            <li><strong>Refrigere o que exige frio:</strong> respeite o rótulo e evite deixar perecíveis longos períodos fora da geladeira.</li>
            <li><strong>Adote “primeiro que entra, primeiro que sai”:</strong> deixe produtos mais antigos à frente.</li>
            <li><strong>Congele porções:</strong> quando o alimento permitir e não será consumido dentro do prazo adequado.</li>
          </ul>

          <h2>Validade e aparência respondem perguntas diferentes</h2>
          <p>Um produto dentro da validade pode estragar se a embalagem foi violada ou se a temperatura e o armazenamento foram inadequados. Da mesma forma, um alimento depois da validade não se torna seguro apenas porque parece normal. Respeite a data, as instruções após aberto e os sinais de deterioração.</p>
          <p>Embalagem estufada, vazando, enferrujada, rachada ou sem vedação é motivo para não consumir, mesmo sem mofo visível. Não prove para testar.</p>

          <h2>Quando procurar atendimento</h2>
          <p>Se houve consumo e surgiram sintomas importantes ou persistentes, procure um serviço de saúde. A conduta depende do alimento, da quantidade, dos sintomas e das condições individuais; não é possível fazer diagnóstico apenas pela aparência do mofo.</p>
          <p>Crianças pequenas, gestantes, pessoas idosas, imunossuprimidas ou com alergias podem exigir atenção adicional. Este artigo oferece orientação geral de segurança, não substitui avaliação profissional individual.</p>

          <h2>Checklist rápido antes de decidir</h2>
          <ol><li>O alimento é macio, úmido, poroso, cozido, fatiado ou ralado? Descarte.</li><li>Há mais de um ponto, odor estranho, vazamento ou embalagem alterada? Descarte.</li><li>Outros itens tocaram a parte mofada? Examine e descarte os afetados.</li><li>É um vegetal realmente firme ou bloco de queijo duro? Só considere a exceção com corte amplo e utensílio limpo.</li><li>Não sabe identificar o alimento ou a extensão? Não arrisque.</li><li>Limpe a área de armazenamento e reveja quantidade, umidade e rotação.</li></ol>
          <p>Leia também: <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link> · <Link href="/blog/manga-escolher-amadurecer-cortar-conservar">como escolher e conservar manga</Link> · <Link href="/blog/comida-quente-geladeira-resfriar-sobras-seguranca">como resfriar sobras com segurança</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final"><div className={styles.premiumHeader}><h2>Planeje refeições antes que os alimentos se percam</h2><p>Use o gerador para obter uma sugestão inicial, organizar compras e variar preparações. Necessidades clínicas, alergias e restrições exigem avaliação profissional.</p></div><Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link></section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou serviço de saúde. Sintomas, alergias, condições clínicas, restrições e necessidades individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/cd10_06.pdf" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guia Alimentar para a População Brasileira</a> · <a href="https://ask.fsis.usda.gov/article/If-food-has-mold-is-it-safe-to-eat" target="_blank" rel="noopener noreferrer">USDA/FSIS — segurança de alimentos com mofo</a> · <a href="https://ask.fsis.usda.gov/article/What-if-I-find-moldy-fruit-in-a-container-with-other-fruit" target="_blank" rel="noopener noreferrer">USDA/FSIS — frutas mofadas em embalagens</a>. Consultadas em 30/10/2026.</p>
      </footer>
    </main>
  );
}
