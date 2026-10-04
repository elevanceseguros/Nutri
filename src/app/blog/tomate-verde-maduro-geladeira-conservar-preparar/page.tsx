import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Tomate Verde ou Maduro: Como Escolher, Amadurecer e Conservar";
const description = "Saiba escolher tomates, quando deixar fora da geladeira, quando refrigerar, como higienizar e como aproveitar cada ponto de maturação.";
const url = "https://www.nutry.life/blog/tomate-verde-maduro-geladeira-conservar-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-04", modifiedTime: "2026-10-04" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-04", dateModified: "2026-10-04", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🍅 Cozinha prática · 6 min de leitura · 04 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Tomate comprado ainda firme, tomate vermelho para usar hoje e tomate cortado não pedem o mesmo armazenamento. O ponto de maturação e a forma de uso determinam se vale deixar o fruto fora da geladeira, refrigerar ou transformar em molho.</p>
          <p>Organizar essa sequência ajuda a preservar sabor e textura e a reduzir desperdício. Não existe uma regra única de “geladeira sempre” ou “geladeira nunca”.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Planeje refeições com os alimentos que amadurecem primeiro</strong>
            <p>Gere uma sugestão de plano alimentar e adapte preparos, combinações e porções ao que você tem em casa.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Como escolher pelo uso, não só pela cor</h2>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead><tr><th>Ponto</th><th>Uso prático</th><th>Próximo passo</th></tr></thead>
              <tbody>
                <tr><td>Firme e “de vez”</td><td>Compra para os próximos dias</td><td>Deixe amadurecer em ambiente natural</td></tr>
                <tr><td>Maduro e ainda firme</td><td>Salada, sanduíche e assado</td><td>Use logo ou refrigere por poucos dias</td></tr>
                <tr><td>Bem vermelho e macio, sem deterioração</td><td>Molho, sopa e refogado</td><td>Cozinhe no mesmo dia e aproveite a textura</td></tr>
                <tr><td>Com mofo, vazamento ou podridão</td><td>Não usar</td><td>Descarte a unidade comprometida</td></tr>
              </tbody>
            </table>
          </div>
          <p>A Embrapa recomenda evitar frutos com furos, manchas, ferimentos ou totalmente verdes. O tomate deve parecer pesado para o tamanho, com casca íntegra. Não aperte várias unidades na banca: a pressão cria danos que aceleram a deterioração.</p>

          <h2>Quando deixar fora da geladeira</h2>
          <p>Tomates “de vez”, já desenvolvidos mas ainda firmes, amadurecem melhor em ambiente natural. A refrigeração antes do amadurecimento completo pode prejudicar sabor e aroma. Mantenha-os protegidos do sol direto, em local ventilado e onde possam ser vistos e usados no momento certo.</p>
          <p>Não feche tomates em saco sem ventilação nem os empilhe sob peso. Examine diariamente e retire qualquer unidade que comece a deteriorar para não perder as demais.</p>

          <h2>Quando a geladeira ajuda</h2>
          <p>Tomates maduros estragam mais rapidamente. Se não forem consumidos logo, a Embrapa orienta refrigerá-los; seu material sobre desperdício inclui tomate maduro entre as hortaliças que devem ir à geladeira quando não houver consumo em até dois dias.</p>
          <p>Coloque em embalagem própria para alimentos, preferencialmente com alguma ventilação, e evite esmagamento. A refrigeração desacelera a deterioração, mas não interrompe o processo e não corrige danos já existentes.</p>

          <h2>Como recuperar parte do sabor e da textura</h2>
          <p>Quando possível, retire da geladeira apenas a quantidade que será usada e deixe perder o frio por um curto período antes de servir. Isso pode melhorar a percepção de aroma e sabor. Não deixe tomate cortado ou preparação pronta horas sobre a bancada.</p>
          <p>Se a textura já estiver muito macia, use em preparos cozidos. Molho, refogado, sopa e assado aproveitam melhor um fruto íntegro que perdeu firmeza, mas ainda não apresenta deterioração.</p>

          <h2>Tomate inteiro e tomate cortado são situações diferentes</h2>
          <p>Depois do corte, a casca deixa de proteger o alimento. Refrigere em recipiente limpo e fechado e planeje o uso em prazo curto. O mesmo vale para tomate já higienizado e fatiado para uma refeição posterior.</p>
          <p>Use faca e tábua limpas, longe de carnes e outros alimentos crus. Identifique a data quando preparar uma porção antecipadamente e evite misturar uma sobra antiga com tomate recém-cortado.</p>

          <h2>Como higienizar para consumo cru</h2>
          <p>Lave cada tomate em água corrente para remover sujeira visível. Quando for consumido cru, siga a orientação sanitária local e use somente sanitizante regularizado pela Anvisa e indicado para alimentos, respeitando exatamente a diluição e o tempo de contato do rótulo.</p>
          <p>Vinagre não substitui sanitizante. Sabão e detergente também não devem ser aplicados ao alimento. Lave as mãos e os utensílios antes de cortar.</p>

          <h2>Pode congelar tomate?</h2>
          <p>A Embrapa não recomenda congelar tomate cru inteiro ou picado porque a textura se altera muito. Para evitar desperdício, cozinhe primeiro e congele o molho em porções adequadas à rotina.</p>
          <p>Resfrie o molho sem deixá-lo por horas em temperatura ambiente, transfira para recipientes limpos, deixe espaço para expansão e identifique a data. Congele somente alimento em bom estado; o freezer não recupera tomate deteriorado.</p>

          <h2>Tipo de tomate muda o uso, mas não cria uma hierarquia</h2>
          <ul>
            <li><strong>Italiano:</strong> costuma ter mais polpa e funciona bem em molhos e assados.</li>
            <li><strong>Débora ou semelhante:</strong> versátil para saladas e preparos cozidos.</li>
            <li><strong>Cereja ou grape:</strong> prático para servir inteiro ou cortado, observando a higienização.</li>
            <li><strong>Frutos muito maduros:</strong> priorize molho ou refogado se estiverem íntegros.</li>
          </ul>
          <p>Variedade, safra e produtor mudam sabor, acidez percebida, quantidade de água e textura. Escolha pela receita, pelo preço e pelo estado do fruto, sem tratar um tipo como universalmente “mais saudável”.</p>

          <h2>Estratégia simples contra desperdício</h2>
          <ol>
            <li>Compre pontos de maturação diferentes se não for usar tudo de uma vez.</li>
            <li>Deixe os firmes amadurecerem fora da geladeira.</li>
            <li>Use primeiro os maduros e intactos.</li>
            <li>Refrigere o que não será consumido nos próximos dois dias.</li>
            <li>Transforme os mais macios em preparo cozido.</li>
            <li>Congele o molho em porções, em vez do tomate cru.</li>
          </ol>

          <h2>Sinais de descarte</h2>
          <p>Descarte tomate com mofo, odor desagradável, vazamento, áreas extensas de podridão ou deterioração evidente. Uma pequena marca superficial pode ser avaliada no preparo imediato, mas não tente salvar parte de um fruto amplamente comprometido.</p>
          <p>Na dúvida sobre tempo, temperatura ou contaminação, o descarte é a escolha responsável. Aparência e cheiro ajudam a identificar deterioração, mas não provam segurança em toda situação.</p>

          <p>Leia também: <Link href="/blog/molho-tomate-passata-extrato-como-escolher">molho de tomate, passata ou extrato</Link> · <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link> · <Link href="/blog/cebola-branca-roxa-amarela-escolher-conservar-preparar">como escolher e conservar cebolas</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Use primeiro o que está maduro e planeje o restante</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/tomate" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — tomate</a> · <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/secoes/geladeira-desperdicio" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — geladeira e desperdício</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a>. Consultadas em 04/10/2026.</p>
      </footer>
    </main>
  );
}
