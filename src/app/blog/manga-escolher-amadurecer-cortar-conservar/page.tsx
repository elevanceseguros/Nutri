import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Manga: Como Escolher, Amadurecer, Cortar e Conservar";
const description = "Veja como avaliar a manga além da cor, organizar o amadurecimento e cortar e guardar a fruta com cuidados de higiene e refrigeração.";
const url = "https://www.nutry.life/blog/manga-escolher-amadurecer-cortar-conservar";
export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-18", modifiedTime: "2026-10-18" },
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-18", dateModified: "2026-10-18", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🥭 Cozinha prática · 6 min de leitura · 18 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Uma manga bem vermelha pode ainda estar firme; outra, com casca menos vistosa, pode estar pronta para comer. Escolher só pela aparência costuma trazer dúvidas para casa. O melhor começo é combinar observação, toque suave e a informação de quem vende sobre a variedade e o ponto da fruta.</p>
          <p>Depois, organize o uso: fruta inteira em amadurecimento e manga já cortada exigem cuidados diferentes. Este guia ajuda nas decisões de compra e cozinha, sem transformar a fruta em remédio nem estabelecer uma porção individual.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Inclua frutas no planejamento da semana</strong>
            <p>Crie uma sugestão inicial de plano alimentar e organize compras de acordo com suas preferências e rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Cor ajuda, mas não conta a história toda</h2>
          <p>A Embrapa explica que a cor da casca e da polpa muda durante a maturação, mas a exposição ao sol pode produzir diferenças de cor mesmo em frutos com estágio semelhante. Por isso, uma área vermelha não deve ser usada sozinha como certificado de maturação.</p>
          <p>Prefira frutos íntegros, sem vazamento, mofo ou áreas apodrecidas. Avalie a firmeza com delicadeza, sem apertar e machucar várias mangas na banca. Se não conhece a variedade, pergunte qual está pronta para consumo e qual deve ser acompanhada nos próximos dias.</p>
          <p>O tamanho também não diz, por si só, qual manga é mais doce. Para organizar a compra, pense em quando você vai usá-la: comprar todas muito maduras pode gerar uma corrida para consumir antes que se deteriorem.</p>

          <h2>Como acompanhar o amadurecimento em casa</h2>
          <p>Deixe a manga inteira que ainda precisa amadurecer em local limpo e ventilado, protegido de sol direto e de calor excessivo. Evite empilhar sob objetos pesados e observe diariamente mudanças na firmeza e sinais de deterioração. Não há um número universal de dias: variedade, ponto de colheita e temperatura interferem.</p>
          <p>Não use forno, micro-ondas ou água quente como atalho para amadurecer. Cozinhar ou amolecer pelo calor não equivale ao amadurecimento natural. Também não é preciso fechar a fruta em saco plástico úmido: isso dificulta acompanhar sua condição.</p>
          <p>A manga é sensível ao frio em determinadas condições. As recomendações técnicas da Embrapa para armazenamento comercial consideram estágio de maturação e temperatura. Isso não significa regular a geladeira doméstica para temperaturas elevadas: outros alimentos precisam de refrigeração segura. Planeje amadurecer a fruta inteira antes do preparo e não aplique regras da fruta intacta à polpa cortada.</p>

          <h2>Lave a casca mesmo que não vá comê-la</h2>
          <p>A faca pode transportar sujeira da superfície para a polpa. Antes de cortar, lave as mãos, a bancada, a faca e a tábua; lave a manga em água corrente. Não use detergente ou sabão na fruta.</p>
          <p>Para a sanitização de alimentos consumidos crus, siga a orientação brasileira: use apenas produto regularizado e indicado no rótulo para essa finalidade, respeitando diluição, tempo de contato e enxágue. Não improvise misturas de limpeza nem substitua esse procedimento por vinagre.</p>
          <p>Mantenha a manga e os utensílios separados de carnes cruas. Uma fruta lavada colocada na mesma tábua usada para frango cru pode ser contaminada novamente. A higiene precisa continuar até o momento de servir.</p>

          <h2>Um jeito estável de cortar e aproveitar a polpa</h2>
          <ol>
            <li>Seque a superfície para diminuir o risco de escorregar e apoie a fruta numa tábua estável.</li>
            <li>Localize a orientação do caroço achatado e corte as duas laterais, sem forçar a lâmina contra ele.</li>
            <li>Retire a polpa com uma colher ou faça cortes rasos para obter pedaços, sem atravessar a casca em direção à mão.</li>
            <li>Apare a polpa ao redor do caroço com cuidado. Se a fruta estiver escorregadia demais, mude o apoio antes de continuar.</li>
          </ol>
          <p>Não é obrigatório produzir cubinhos perfeitos. Pedaços irregulares funcionam em salada de frutas, iogurte ou preparações batidas. Aproveitar a polpa não significa aproveitar fruta com sinais de podridão: não tente torná-la segura apenas removendo uma parte ou cozinhando.</p>

          <h2>Manga cortada precisa de geladeira</h2>
          <p>Guarde a polpa prontamente em recipiente limpo e fechado, sob refrigeração a 4 °C ou menos. A FDA orienta refrigerar frutas vendidas pré-cortadas; o mesmo cuidado de manter fria deve orientar a polpa preparada em casa. Não deixe uma tigela de manga sobre a mesa durante toda a tarde.</p>
          <p>Identifique a data do preparo, retire apenas o que pretende servir e use utensílio limpo. Não existe prazo caseiro único que compense falhas de higiene ou interrupção da refrigeração. Se comprou manga cortada, confira conservação e validade da embalagem e mantenha a cadeia de frio.</p>
          <p>Mofo, cheiro fermentado, vazamento e aspecto de deterioração são motivos para descartar. A ausência desses sinais não comprova segurança quando a conservação foi inadequada. Não prove para testar um alimento suspeito.</p>

          <h2>Ideias de uso sem complicar a refeição</h2>
          <p>Use a manga em pedaços com iogurte natural, em salada com folhas ou como fruta da refeição. Para um molho simples, amasse parte da polpa e combine com ingredientes da receita, ajustando a textura aos poucos. São ideias culinárias, não combinações obrigatórias.</p>
          <p>Não é necessário acrescentar açúcar automaticamente, nem classificar a manga como proibida por ser doce. A escolha e a quantidade adequadas dependem do contexto da alimentação e, quando houver necessidade clínica, de avaliação profissional. Nenhum alimento isolado garante emagrecimento ou controle de doença.</p>
          <p>Leia também: <Link href="/blog/iogurte-natural-vs-grego-como-comparar">iogurte natural e grego</Link> · <Link href="/blog/frango-cru-lavar-ou-nao-seguranca-cozinha">como evitar contaminação cruzada na cozinha</Link> · <Link href="/blog/comida-quente-geladeira-resfriar-sobras-seguranca">cuidados com a conservação dos preparos</Link>.</p>
          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Planeje refeições com frutas que você gosta</h2><p>Use o gerador de plano alimentar para obter uma sugestão inicial e organizar refeições e compras. Adapte às suas preferências; alergias, restrições e necessidades clínicas devem ser avaliadas por nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/agencia-de-informacao-tecnologica/cultivos/manga/producao/colheita/indicadores/coloracao" target="_blank" rel="noopener noreferrer">Embrapa — coloração da manga</a> · <a href="https://www.embrapa.br/en/web/agencia-de-informacao-tecnologica/cultivos/manga/producao/operacoes-pos-colheita/armazenamento" target="_blank" rel="noopener noreferrer">Embrapa — armazenamento pós-colheita</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higiene e preparo de alimentos</a> · <a href="https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-produce-safely" target="_blank" rel="noopener noreferrer">FDA — seleção e conservação de frutas</a>. Consultadas em 18/10/2026.</p>
      </footer>
    </main>
  );
}
