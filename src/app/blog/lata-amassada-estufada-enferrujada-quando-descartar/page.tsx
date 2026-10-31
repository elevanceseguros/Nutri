import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Lata Amassada, Estufada ou Enferrujada: Quando Descartar?";
const description = "Veja quais danos comprometem a segurança de uma lata, por que estufamento e vazamento exigem descarte e como guardar sobras depois de abrir.";
const url = "https://www.nutry.life/blog/lata-amassada-estufada-enferrujada-quando-descartar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
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
          <p className={styles.postExcerpt}>🥫 Segurança dos alimentos · 8 min de leitura · 31 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Uma lata protege o alimento contra ar, luz, umidade e contaminação enquanto permanece hermeticamente fechada. Quando a embalagem está estufada, vazando, perfurada, muito enferrujada ou deformada nas emendas, essa barreira pode ter sido comprometida — mesmo que a validade ainda não tenha terminado.</p>
          <p>A orientação oficial brasileira é conservadora: <strong>não compre nem use embalagens amassadas, estufadas, enferrujadas, furadas, vazando, abertas ou com outros defeitos</strong>. Não prove o conteúdo para decidir e não tente “salvar” uma lata suspeita apenas cozinhando o alimento.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Organize compras e refeições com menos desperdício</strong>
            <p>Gere uma sugestão inicial de plano alimentar e adapte alimentos, porções e frequência à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Quais sinais exigem descarte?</h2>
          <div style={{ overflowX: "auto" }}><table><thead><tr><th scope="col">Sinal na embalagem</th><th scope="col">Conduta mais segura</th><th scope="col">Motivo</th></tr></thead><tbody>
            <tr><td>Lata estufada ou tampa abaulada</td><td>Não abrir nem consumir</td><td>Pode indicar formação de gases e deterioração</td></tr>
            <tr><td>Vazamento, furo ou perfuração</td><td>Descartar</td><td>A vedação foi perdida e o conteúdo ficou exposto</td></tr>
            <tr><td>Amassado na tampa, no fundo ou na costura lateral</td><td>Não usar</td><td>As emendas são pontos críticos para a integridade da embalagem</td></tr>
            <tr><td>Amassado profundo, pontudo ou com vinco</td><td>Descartar</td><td>O metal e o revestimento interno podem ter sido danificados</td></tr>
            <tr><td>Ferrugem intensa, profunda ou com pequenos furos</td><td>Descartar</td><td>A corrosão pode comprometer a barreira da lata</td></tr>
            <tr><td>Conteúdo espirrando, espuma ou odor anormal ao abrir</td><td>Não provar; afastar e descartar com cuidado</td><td>São sinais de deterioração e possível risco microbiológico</td></tr>
          </tbody></table></div>
          <p>A Anvisa orienta que latas expostas à venda estejam íntegras, sem amassamentos ou ferrugem. Para a cozinha doméstica, isso evita transformar uma avaliação visual incerta em um teste de risco.</p>

          <h2>Todo amassado pequeno é igualmente perigoso?</h2>
          <p>O risco depende da profundidade e da localização, mas o consumidor normalmente não consegue inspecionar a vedação nem o revestimento interno. Amassados nas costuras, na junção da tampa ou do fundo, com ponta, vinco ou metal rompido são especialmente preocupantes.</p>
          <p>Uma marca superficial no centro da parede, sem vinco e distante das emendas, pode não ter rompido a lata. Ainda assim, a recomendação brasileira para compra e uso é escolher uma embalagem íntegra. Se o dano ocorreu em casa e há qualquer dúvida sobre a vedação, descarte.</p>

          <h2>Por que uma lata pode estufar?</h2>
          <p>O abaulamento pode resultar da formação de gases por deterioração ou de alterações físicas no conteúdo. Não é possível identificar a causa com segurança apenas apertando, cheirando ou observando a lata. Por isso, estufamento é sinal para não consumir.</p>
          <p>Conservas em embalagem danificada estão entre as situações relacionadas ao risco de botulismo alimentar. A doença é rara, mas grave. O Ministério da Saúde orienta não consumir conservas em latas estufadas, embalagens danificadas ou produtos com alterações de cheiro e aspecto.</p>

          <h2>Não abra para “ver se está bom”</h2>
          <p>Uma lata estufada, vazando ou profundamente danificada não deve ser aberta perto do rosto. Não cheire de perto, não prove e não ofereça o conteúdo a animais. Ausência de cheiro ruim não comprova segurança.</p>
          <p>Também não confie em ferver ou assar como método doméstico para recuperar a embalagem suspeita. O descarte evita exposição durante a abertura, o preparo e o consumo.</p>

          <h2>Como descartar uma lata suspeita</h2>
          <ol>
            <li>Não aperte, perfure nem tente corrigir o estufamento.</li>
            <li>Se houver vazamento, evite contato do líquido com outros alimentos e superfícies.</li>
            <li>Coloque a embalagem em um saco resistente, feche e descarte conforme a coleta local.</li>
            <li>Lave as mãos e limpe prateleiras ou bancadas que tiveram contato com vazamentos.</li>
            <li>Se o produto foi comprado danificado, guarde fotos, lote, validade e comprovante para comunicar o estabelecimento e o fabricante sem reabrir a embalagem.</li>
          </ol>
          <p>Em caso de grande vazamento ou dúvida sobre limpeza, siga a orientação do serviço de vigilância sanitária local. Não misture saneantes e respeite as instruções do produto de limpeza.</p>

          <h2>Ferrugem superficial e ferrugem profunda</h2>
          <p>Pequenas manchas externas que saem ao limpar não são iguais a corrosão profunda. O problema aumenta quando a ferrugem deixa a superfície áspera, forma cavidades, afina o metal ou aparece próxima às emendas. Não raspe para descobrir se há um furo e depois consuma.</p>
          <p>Umidade na despensa, contato com piso e vazamentos favorecem corrosão. Guarde latas em local seco, ventilado, protegido de calor excessivo e longe de produtos químicos.</p>

          <h2>Validade não substitui a inspeção da embalagem</h2>
          <p>A data indica o período definido pelo fabricante para o produto nas condições previstas. Ela não torna segura uma lata perfurada, estufada ou mal armazenada. Na compra, confira validade, lote, rótulo legível e integridade antes de colocar no carrinho.</p>
          <p>Em casa, organize pelo método “primeiro que entra, primeiro que sai”. Revise a despensa periodicamente e use primeiro as latas mais antigas que permanecem íntegras e dentro da validade.</p>

          <h2>O que fazer depois de abrir uma lata íntegra</h2>
          <p>Antes de abrir, limpe a parte externa e use abridor limpo para evitar que sujeira da tampa caia no alimento. Observe o conteúdo sem prová-lo se houver espuma, líquido sob pressão, odor incompatível ou aspecto inesperado.</p>
          <p>Quando houver sobra, siga o rótulo. Em geral, transfira para recipiente limpo, fechado e próprio para alimentos, identifique a data, refrigere rapidamente e respeite o prazo informado pelo fabricante. Não use a mesma colher que tocou outros alimentos.</p>

          <h2>Lata, sachê ou vidro: a regra é a mesma?</h2>
          <p>O tipo de embalagem muda, mas a barreira precisa permanecer íntegra. Sachê furado, caixa vazando, vidro trincado, tampa solta ou abaulada e lacre rompido também são motivos para não consumir. Em potes de vidro, não use produtos com tampa sem vácuo quando o fabricante prevê vedação.</p>
          <p>Não compre embalagens sem rótulo legível quando isso impede verificar produto, fabricante, lote e validade. Essas informações são importantes para rastreabilidade e eventual recolhimento.</p>

          <h2>Se alguém consumiu e apresentou sintomas</h2>
          <p>Sintomas após uma conserva suspeita exigem avaliação de saúde, especialmente quando são intensos, progressivos ou neurológicos, como visão alterada, dificuldade para engolir, falar ou respirar. Não tente fazer diagnóstico em casa e informe qual alimento foi consumido.</p>
          <p>Guarde dados da embalagem e do lote, sem provar novamente. O atendimento definirá a conduta conforme sintomas, tempo e condições individuais.</p>

          <h2>Checklist rápido no mercado e na despensa</h2>
          <ol><li>Recuse lata estufada, vazando, perfurada ou muito enferrujada.</li><li>Evite amassados nas costuras, tampa e fundo.</li><li>Não use lata com amassado profundo, pontudo ou vincado.</li><li>Confira rótulo, lote, validade e condições de armazenamento.</li><li>Limpe a embalagem antes de abrir.</li><li>Não prove alimento suspeito nem confie apenas no cheiro.</li><li>Transfira sobras para recipiente limpo e siga o prazo após abertura.</li></ol>
          <p>Leia também: <Link href="/blog/alimento-com-mofo-cortar-ou-descartar-seguranca">quando descartar alimentos com mofo</Link> · <Link href="/blog/milho-verde-espiga-lata-congelado-comparar">como comparar milho fresco, em lata e congelado</Link> · <Link href="/blog/sardinha-vs-atum-lata-como-escolher">como escolher sardinha ou atum em lata</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final"><div className={styles.premiumHeader}><h2>Planeje refeições e use a despensa com mais organização</h2><p>Use o gerador para obter uma sugestão inicial e adaptar alimentos e preparações à sua rotina. Necessidades clínicas e restrições exigem avaliação profissional.</p></div><Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link></section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico, serviço de saúde ou vigilância sanitária. Sintomas, condições clínicas e necessidades individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.gov.br/anvisa/pt-br/arquivos-noticias-anvisa/812json-file-1" target="_blank" rel="noopener noreferrer">Anvisa — boas práticas e integridade de embalagens</a> · <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/b/botulismo/botulismo/" target="_blank" rel="noopener noreferrer">Ministério da Saúde — prevenção do botulismo</a> · <a href="https://ask.fsis.usda.gov/article/Is-food-in-damaged-cans-dangerous" target="_blank" rel="noopener noreferrer">USDA/FSIS — segurança de latas danificadas</a>. Consultadas em 31/10/2026.</p>
      </footer>
    </main>
  );
}
