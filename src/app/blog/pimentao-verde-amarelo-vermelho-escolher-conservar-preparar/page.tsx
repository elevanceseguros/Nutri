import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Pimentão Verde, Amarelo ou Vermelho: Como Escolher, Conservar e Preparar";
const description = "Entenda o que muda entre pimentões verdes, amarelos e vermelhos e veja como escolher, higienizar, conservar e usar cada um sem desperdício.";
const url = "https://www.nutry.life/blog/pimentao-verde-amarelo-vermelho-escolher-conservar-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-05", modifiedTime: "2026-10-05" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-05", dateModified: "2026-10-05", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🫑 Cozinha prática · 6 min de leitura · 05 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Verde, amarelo e vermelho podem vir da mesma espécie, mas não representam apenas uma troca de cor. Nas variedades mais comuns no Brasil, o verde é colhido imaturo; amarelo e vermelho são frutos maduros de cultivares diferentes. O amadurecimento altera sabor, aroma e textura.</p>
          <p>A melhor escolha depende da receita, do preço, do ponto do fruto e de quando ele será usado. Nenhuma cor precisa ser tratada como vencedora universal ou como solução para uma necessidade clínica.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Transforme os vegetais disponíveis em refeições possíveis</strong>
            <p>Gere uma sugestão de plano alimentar e adapte ingredientes, combinações e porções à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>O que muda entre verde, amarelo e vermelho</h2>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead><tr><th>Cor</th><th>Perfil culinário comum</th><th>Usos práticos</th></tr></thead>
              <tbody>
                <tr><td>Verde</td><td>Sabor mais vegetal e amargor mais perceptível</td><td>Refogados, recheados, molhos e pratos de cozimento mais longo</td></tr>
                <tr><td>Amarelo</td><td>Sabor geralmente mais suave e adocicado</td><td>Saladas, assados, espetinhos e preparos coloridos</td></tr>
                <tr><td>Vermelho</td><td>Sabor maduro e normalmente mais doce</td><td>Assados, pastas, molhos, saladas e conserva refrigerada</td></tr>
              </tbody>
            </table>
          </div>
          <p>A Embrapa explica que as variedades mais comuns têm casca verde quando imaturas e vermelha ou amarela quando maduras. Existem ainda cultivares que passam por tons alaranjados, roxos ou creme. A cor sozinha não informa variedade, frescor, modo de produção ou valor de toda a refeição.</p>

          <h2>Uma cor tem “mais nutrientes” que a outra?</h2>
          <p>O amadurecimento modifica pigmentos e composição. A Embrapa destaca o pimentão como fonte de vitamina C e informa que o fruto maduro também fornece precursores de vitamina A. Ainda assim, valores variam com cultivar, maturação, armazenamento e preparo.</p>
          <p>Na prática, variedade alimentar importa mais do que eleger uma cor. Use a que se encaixa no prato, no orçamento e na disponibilidade. Pimentão integra o grupo de legumes e verduras que o Guia Alimentar recomenda combinar em preparações baseadas em alimentos in natura ou minimamente processados.</p>

          <h2>Como escolher no mercado</h2>
          <ul>
            <li>Prefira frutos firmes e pesados para o tamanho.</li>
            <li>Observe casca brilhante, íntegra e sem áreas moles.</li>
            <li>Procure pedúnculo firme e sem sinais extensos de escurecimento.</li>
            <li>Evite furos, rachaduras, mofo, vazamento ou podridão.</li>
            <li>Escolha tamanho e formato que reduzam sobra na receita planejada.</li>
          </ul>
          <p>Uma pequena variação de formato ou cor não significa defeito. Ferimentos e perda de firmeza, por outro lado, aceleram perda de água e deterioração. Transporte por cima de itens pesados e não aperte os frutos para testar.</p>

          <h2>Como conservar o pimentão inteiro</h2>
          <p>Guarde na geladeira, seco e sem peso por cima. Uma embalagem própria para alimentos, sem vedação que acumule condensação, ajuda a reduzir perda de água. A Embrapa alerta que umidade retida favorece deterioração; se lavar antes de guardar, seque completamente.</p>
          <p>Não existe prazo doméstico único: temperatura, maturação, ferimentos e embalagem mudam a duração. Examine antes do uso e priorize os frutos mais maduros ou com pequenas marcas, desde que ainda estejam íntegros e sem sinais de deterioração.</p>

          <h2>E depois de cortar?</h2>
          <p>Retire sementes e partes internas apenas da porção que será usada. Refrigere a sobra em recipiente limpo e fechado e planeje consumi-la em prazo curto. Identifique a data se o corte foi feito com antecedência.</p>
          <p>Não deixe pimentão cortado ou prato pronto por horas sobre a bancada. Mantenha utensílios limpos e separados de carnes cruas para reduzir contaminação cruzada.</p>

          <h2>Como higienizar para comer cru</h2>
          <p>Lave o fruto em água corrente para retirar sujeira visível. Para consumo cru, siga a orientação sanitária local e use apenas produto regularizado pela Anvisa e indicado no rótulo para higienização de alimentos, respeitando diluição e tempo de contato.</p>
          <p>Vinagre não substitui sanitizante regularizado. Sabão e detergente não devem ser aplicados ao alimento. Lave as mãos e os utensílios antes de cortar.</p>

          <h2>Como preparar sem deixar tudo com o mesmo sabor</h2>
          <ul>
            <li><strong>Refogar rapidamente:</strong> preserva alguma firmeza e funciona com cebola, feijão, arroz e carnes.</li>
            <li><strong>Assar:</strong> concentra sabor e amacia; use tiras ou metades de espessura parecida.</li>
            <li><strong>Rechear:</strong> escolha frutos que fiquem estáveis na assadeira e cozinhe o recheio com segurança.</li>
            <li><strong>Usar cru:</strong> corte fino e combine com outros vegetais, grãos ou sanduíches.</li>
            <li><strong>Bater em molho ou pasta:</strong> asse antes para suavizar textura e sabor.</li>
          </ul>
          <p>Se o sabor do pimentão verde parecer intenso, retire as partes internas claras, use menor quantidade e cozinhe com outros ingredientes. Isso é preferência culinária, não uma regra nutricional.</p>

          <h2>Pode congelar?</h2>
          <p>Pimentão pode ser congelado para preparos cozidos. Lave, seque, retire sementes, corte e congele em porções. Depois de descongelado, tende a perder crocância, por isso funciona melhor em molho, refogado, sopa e assado do que em salada.</p>
          <p>Identifique a data e congele apenas alimento em bom estado. O congelamento desacelera alterações, mas não recupera um fruto que já estava deteriorado.</p>

          <h2>Como comprar com menos desperdício</h2>
          <ol>
            <li>Planeje duas ou três preparações que compartilhem o ingrediente.</li>
            <li>Compre a quantidade compatível com o uso real.</li>
            <li>Use primeiro o fruto mais maduro ou com menor firmeza.</li>
            <li>Reserve parte crua apenas se será consumida logo.</li>
            <li>Asse ou refogue o excedente e congele em porções.</li>
          </ol>

          <h2>Sinais de descarte</h2>
          <p>Descarte frutos com mofo, odor desagradável, vazamento, áreas viscosas ou podridão extensa. Uma área superficial levemente murcha pode ser aproveitada no preparo imediato se o restante estiver íntegro, mas não tente salvar um pimentão amplamente comprometido.</p>
          <p>Na dúvida sobre tempo, temperatura ou contaminação, descarte. Aparência e cheiro ajudam a identificar deterioração, mas não comprovam segurança em todas as situações.</p>

          <p>Leia também: <Link href="/blog/tomate-verde-maduro-geladeira-conservar-preparar">como escolher e conservar tomates</Link> · <Link href="/blog/cebola-branca-roxa-amarela-escolher-conservar-preparar">como escolher e conservar cebolas</Link> · <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Planeje preparos que aproveitam o alimento inteiro</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/pimentao" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — pimentão</a> · <a href="https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/guias-alimentares" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guias Alimentares</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a>. Consultadas em 05/10/2026.</p>
      </footer>
    </main>
  );
}
