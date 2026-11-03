import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Batata Verde ou com Brotos: Quando Cortar e Quando Descartar?";
const description = "Entenda por que partes verdes e brotos exigem atenção, quando ainda é possível aproveitar uma batata firme e quais sinais indicam descarte.";
const url = "https://www.nutry.life/blog/batata-verde-brotos-cortar-descartar-seguranca";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    publishedTime: "2026-11-03",
    modifiedTime: "2026-11-03",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
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
          <p className={styles.postExcerpt}>🥔 Segurança dos alimentos · 8 min de leitura · 3 de novembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Uma batata pode começar a brotar ou apresentar áreas verdes depois de ficar exposta à luz, ao calor ou ao armazenamento prolongado. A cor verde vem da clorofila, mas funciona como um sinal de que também pode haver aumento de glicoalcaloides naturais, especialmente alfa-solanina e alfa-chaconina.</p>
          <p>O risco não é decidido apenas pela presença de um ponto verde. É preciso observar <strong>extensão do esverdeamento, quantidade de brotos, firmeza, sabor amargo, danos e deterioração</strong>. Em dúvida, sobretudo quando a alteração é ampla, o descarte é a escolha mais prudente.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Planeje refeições antes que os alimentos se percam</strong>
            <p>Use o gerador para organizar uma sugestão inicial com os ingredientes disponíveis e ajustar as combinações à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Decisão rápida: cortar ou descartar?</h2>
          <div style={{ overflowX: "auto" }}><table><thead><tr><th scope="col">Como está a batata?</th><th scope="col">Conduta prudente</th><th scope="col">Por quê?</th></tr></thead><tbody>
            <tr><td>Firme, sem verde e com broto inicial pequeno</td><td>Retire completamente o broto e a área ao redor antes de cozinhar</td><td>Os brotos não devem ser consumidos</td></tr>
            <tr><td>Firme, com ponto verde pequeno e superficial</td><td>Descasque e corte generosamente toda a parte verde; descarte se restar verde ou amargor</td><td>As áreas verdes podem concentrar mais glicoalcaloides</td></tr>
            <tr><td>Muito verde, com vários brotos ou alteração extensa</td><td>Descarte a batata inteira</td><td>Não é possível avaliar em casa quanto da substância permanece no restante</td></tr>
            <tr><td>Mole, enrugada, úmida, com odor estranho ou podridão</td><td>Descarte</td><td>Há deterioração além da questão dos glicoalcaloides</td></tr>
            <tr><td>Sabor nitidamente amargo ou ardência incomum</td><td>Não continue comendo; descarte</td><td>Amargor intenso pode acompanhar níveis elevados</td></tr>
          </tbody></table></div>
          <p>A tabela é uma orientação doméstica conservadora, não um teste químico. Cor, gosto e aparência ajudam a decidir, mas não medem a concentração de glicoalcaloides.</p>

          <h2>Por que a batata fica verde?</h2>
          <p>A luz estimula a formação de clorofila na casca e nas camadas próximas. A clorofila não é o problema principal; o esverdeamento serve como alerta de que as condições de armazenamento também podem favorecer o aumento dos glicoalcaloides.</p>
          <p>O verde pode aparecer no mercado, durante o transporte ou em casa. Guardar o tubérculo novamente no escuro pode reduzir a intensidade visual da cor, mas não permite concluir que a quantidade de glicoalcaloides diminuiu.</p>

          <h2>O que são glicoalcaloides?</h2>
          <p>São compostos produzidos naturalmente por plantas da família das solanáceas. Na batata, os principais são alfa-solanina e alfa-chaconina. Em níveis baixos, fazem parte do alimento; em níveis elevados, podem causar sintomas gastrointestinais agudos.</p>
          <p>A avaliação de risco da Autoridade Europeia para a Segurança dos Alimentos identifica náusea, vômito e diarreia entre os efeitos possíveis e aponta maior preocupação proporcional para crianças pequenas e para consumidores com ingestão elevada. Isso não significa que toda batata com um broto causará intoxicação, mas justifica evitar partes alteradas e não insistir em aproveitar tubérculos muito verdes.</p>

          <h2>Todo broto exige descartar a batata inteira?</h2>
          <p>Um broto inicial em uma batata ainda firme não é igual a uma batata tomada por brotos, verde e enrugada. Orientações oficiais internacionais permitem retirar completamente brotos e pequenas partes verdes antes do preparo. O Ministério da Agricultura, em orientações brasileiras de recebimento institucional, recomenda não receber tubérculos brotados ou esverdeados.</p>
          <p>Na cozinha doméstica, use uma margem de segurança: retire o broto, o “olho” e uma porção ao redor. Se houver muitos brotos, áreas verdes profundas ou alteração em grande parte da superfície, descarte o tubérculo inteiro.</p>

          <h2>É suficiente tirar só a casca verde?</h2>
          <p>Quando o ponto é pequeno e a batata está firme, descasque e corte além da área visivelmente verde, sem economizar alguns milímetros para aproveitar o alimento. Se a cor avançar para dentro, aparecer em vários lados ou ocupar uma área relevante, descarte.</p>
          <p>Não ofereça os brotos nem as partes retiradas para consumo. Lave as mãos, a faca e a tábua depois de preparar o alimento, especialmente se também havia podridão ou umidade.</p>

          <h2>Cozinhar elimina a solanina?</h2>
          <p>Não conte com o cozimento para tornar segura uma batata muito verde ou brotada. A EFSA relata que descascar, cozinhar em água e fritar podem reduzir o teor em proporções variáveis, mas essa redução não é uniforme e não permite recuperar um tubérculo claramente comprometido.</p>
          <p>Ferver, assar, fritar ou usar a air fryer não substitui a seleção antes do preparo. Primeiro descarte a batata inadequada ou retire completamente alterações pequenas; só depois cozinhe.</p>

          <h2>Amargor é um sinal importante</h2>
          <p>Batata com sabor intensamente amargo ou sensação incomum de ardência não deve ser consumida. Pare de comer e descarte o restante da preparação. Não tente mascarar o gosto com temperos.</p>
          <p>Se alguém apresentar náusea, vômitos, diarreia, dor abdominal ou outros sintomas após consumir batata muito verde ou brotada, procure orientação de um serviço de saúde ou centro de informação toxicológica. O artigo não permite diagnosticar a causa do sintoma.</p>

          <h2>Batata mole ou enrugada: é a mesma questão?</h2>
          <p>Perda de firmeza indica envelhecimento e perda de água. Uma batata levemente menos firme, sem verde, brotos extensos, odor, umidade ou podridão, pode ser avaliada para uso imediato. Já textura muito mole, enrugamento intenso, vazamento, mofo, odor alterado ou áreas escuras úmidas indicam descarte.</p>
          <p>Não misture tubérculos deteriorados aos sadios. Retire o item comprometido, examine os que estavam em contato e limpe o recipiente antes de guardar o restante.</p>

          <h2>Como guardar para reduzir verde e brotação</h2>
          <ul>
            <li>Escolha batatas firmes, sem brotos, cortes, umidade ou áreas verdes.</li>
            <li>Guarde em local fresco, seco, escuro e ventilado.</li>
            <li>Evite saco plástico fechado, que retém umidade.</li>
            <li>Não deixe sobre a bancada sob luz direta nem perto do forno.</li>
            <li>Compre quantidade compatível com o consumo da casa.</li>
            <li>Revise o estoque e use primeiro os tubérculos mais antigos que continuam íntegros.</li>
            <li>Mantenha separado de produtos de limpeza e de locais com risco de contaminação.</li>
          </ul>
          <p>A Anvisa recomenda manter batatas destinadas a fritar ou assar em local fresco, seco e protegido da luz e evitar refrigeração para esses preparos, porque o frio favorece açúcares que podem aumentar o escurecimento e a formação de acrilamida no calor intenso.</p>

          <h2>Preparar dourado, não queimado</h2>
          <p>Além de selecionar batatas sem alterações relevantes, evite escurecimento excessivo ao assar, grelhar ou fritar. A orientação oficial é buscar coloração dourada, sem deixar partes muito escuras ou queimadas, e usar temperaturas moderadas quando apropriado.</p>
          <p>Essa recomendação trata da redução de acrilamida durante o preparo e não deve ser confundida com glicoalcaloides. São questões diferentes e ambas começam com matéria-prima em bom estado.</p>

          <h2>Erros comuns</h2>
          <ul>
            <li>Achar que a cor verde desaparecida significa que a batata voltou a ser segura.</li>
            <li>Comer os brotos ou apenas quebrá-los superficialmente.</li>
            <li>Tentar aproveitar uma batata muito verde porque será frita.</li>
            <li>Provar repetidamente um alimento amargo para decidir.</li>
            <li>Guardar batatas expostas à luz sobre a bancada.</li>
            <li>Manter tubérculos úmidos em saco plástico fechado.</li>
            <li>Confundir brotos da batata com brotos comestíveis de outras plantas.</li>
          </ul>

          <h2>Checklist antes de cozinhar</h2>
          <ol>
            <li>A batata está firme?</li>
            <li>Há áreas verdes? São pequenas ou extensas?</li>
            <li>Existem poucos brotos iniciais ou muitos brotos longos?</li>
            <li>Há umidade, mofo, podridão ou odor estranho?</li>
            <li>É possível retirar completamente uma alteração pequena sem restar verde?</li>
            <li>Depois de cozida, apareceu amargor ou ardência incomum?</li>
          </ol>
          <p>Leia também: <Link href="/blog/batata-inglesa-doce-mandioca-comparar-preparar">como comparar e preparar batata, batata-doce e mandioca</Link> · <Link href="/blog/alimento-com-mofo-cortar-ou-descartar-seguranca">quando cortar ou descartar um alimento com mofo</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final"><div className={styles.premiumHeader}><h2>Organize as refeições com o que está em boas condições</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparações e porções à sua rotina. Necessidades clínicas e restrições exigem avaliação profissional.</p></div><Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link></section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou outro profissional de saúde. Condições clínicas, alergias, restrições, sintomas e necessidades individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.efsa.europa.eu/en/news/glycoalkaloids-potatoes-public-health-risks-assessed" target="_blank" rel="noopener noreferrer">EFSA — avaliação de risco dos glicoalcaloides em batatas</a> · <a href="https://www.canada.ca/en/health-canada/services/food-nutrition/reports-publications/food-safety/glycoalkaloids-foods.html" target="_blank" rel="noopener noreferrer">Health Canada — glicoalcaloides em alimentos</a> · <a href="https://inspection.canada.ca/en/food-safety-consumers/fact-sheets/specific-products-and-risks/fruits-and-vegetables/natural-toxins" target="_blank" rel="noopener noreferrer">Agência Canadense de Inspeção de Alimentos — toxinas naturais</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/acrilamida-em-alimentos-1" target="_blank" rel="noopener noreferrer">Anvisa — acrilamida em alimentos</a>. Consultadas em 03/11/2026.</p>
      </footer>
    </main>
  );
}
