import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Ovo Rachado ou Trincado: Quando Usar e Quando Descartar?";
const description = "Veja por que rachaduras facilitam a entrada de bactérias, como agir quando o ovo quebra em casa e quais situações exigem descarte.";
const url = "https://www.nutry.life/blog/ovo-rachado-trincado-usar-descartar-seguranca";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    publishedTime: "2026-11-04",
    modifiedTime: "2026-11-04",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
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
          <p className={styles.postExcerpt}>🥚 Segurança dos alimentos · 8 min de leitura · 4 de novembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>A casca do ovo funciona como uma barreira física. Quando ela racha, micro-organismos da superfície, da embalagem, das mãos ou da bancada podem alcançar o conteúdo com mais facilidade. Por isso, um ovo trincado na prateleira não deve ser tratado como apenas um defeito visual.</p>
          <p>A conduta depende de <strong>quando a rachadura aconteceu, se houve vazamento, como o ovo foi armazenado e se será cozido completamente</strong>. Não é possível confirmar segurança apenas pelo cheiro ou pela aparência.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Organize as refeições e use primeiro os alimentos mais perecíveis</strong>
            <p>O gerador ajuda a montar uma sugestão inicial com os ingredientes disponíveis e adaptar as combinações à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Decisão rápida: usar ou descartar?</h2>
          <div style={{ overflowX: "auto" }}><table><thead><tr><th scope="col">Situação</th><th scope="col">Conduta prudente</th><th scope="col">Motivo</th></tr></thead><tbody>
            <tr><td>Ovo já estava rachado na compra</td><td>Não compre; se percebeu em casa, descarte ou solicite troca</td><td>Não se sabe quando ocorreu nem como foi conservado</td></tr>
            <tr><td>Casca rachada, membrana rompida ou conteúdo vazando</td><td>Descarte</td><td>A barreira foi comprometida e houve contato com o exterior</td></tr>
            <tr><td>Ovo quebrou agora, em superfície limpa, durante o preparo</td><td>Use imediatamente em preparação bem cozida</td><td>O tempo de exposição é curto e há controle do preparo</td></tr>
            <tr><td>Ovo rachou ao ser cozido em água</td><td>Pode ser consumido se foi totalmente cozido</td><td>O USDA considera seguro quando a rachadura ocorre durante o cozimento</td></tr>
            <tr><td>Não é possível saber quando rachou</td><td>Descarte</td><td>Tempo, temperatura e contaminação são desconhecidos</td></tr>
          </tbody></table></div>
          <p>Esta tabela é uma orientação doméstica conservadora. Regras para estabelecimentos e indústria são mais específicas e não devem ser transferidas automaticamente para a cozinha de casa.</p>

          <h2>Por que a rachadura aumenta o risco?</h2>
          <p>A casca é porosa, mas possui membranas e uma película protetora chamada cutícula. Quando há uma fenda, bactérias podem atravessar a abertura com mais facilidade. A Anvisa destaca que lavar ovos antecipadamente remove parte dessa proteção natural e pode favorecer a entrada de micro-organismos.</p>
          <p>O risco não está apenas no que se vê. Um ovo pode parecer normal, sem cheiro alterado, e ainda assim ter sido contaminado. A inspeção visual ajuda a identificar defeitos, mas não substitui compra segura, refrigeração e cocção adequada.</p>

          <h2>Ovo rachado no mercado deve ir para casa?</h2>
          <p>Não. Examine a embalagem antes de comprar e escolha ovos com cascas íntegras, limpas e sem vazamento. Verifique origem, lote e validade. A orientação oficial do USDA é nunca comprar ovos rachados, pois bactérias podem entrar pelas fissuras.</p>
          <p>Se a trinca só for percebida ao abrir a caixa em casa, não tente “selar” a casca nem guardar o ovo junto aos demais. Afaste-o dos ovos íntegros, higienize qualquer superfície atingida e descarte ou siga o procedimento de troca do estabelecimento.</p>

          <h2>E se o ovo quebrar na minha mão?</h2>
          <p>Quando um ovo íntegro quebra acidentalmente durante o preparo, em mãos e utensílios limpos, coloque o conteúdo diretamente na receita e cozinhe completamente. Não deixe sobre a bancada para usar horas depois.</p>
          <p>Se ele caiu no chão, tocou uma pia suja, entrou em contato com embalagem contaminada ou ficou exposto por tempo incerto, descarte. O pequeno valor economizado não compensa a incerteza.</p>

          <h2>Posso colocar o ovo quebrado em um pote?</h2>
          <p>A opção mais prudente é usar imediatamente. Se a receita precisar ser interrompida, coloque em recipiente limpo e fechado, refrigere sem demora e use o quanto antes em preparação completamente cozida. Identifique o recipiente para evitar confusão.</p>
          <p>Não misture um ovo rachado a outros ovos antes de avaliar cada unidade. Uma quebra contaminada pode comprometer toda a mistura. Para preparações que levam muitos ovos, quebre um de cada vez em uma tigela pequena e só depois transfira.</p>

          <h2>Rachou enquanto cozinhava: precisa descartar?</h2>
          <p>O USDA informa que ovos que racham durante o cozimento em água podem ser consumidos com segurança. Nesse caso, a fissura ocorreu durante o processo térmico, e o ovo deve terminar de cozinhar completamente.</p>
          <p>Isso é diferente de colocar na panela um ovo que já estava rachado havia tempo desconhecido. O cozimento não corrige armazenamento inadequado anterior nem permite saber o que entrou pela abertura antes do preparo.</p>

          <h2>Cheiro ruim é suficiente para decidir?</h2>
          <p>Odor desagradável, clara ou gema com aparência incomum e contaminação visível são motivos para descarte. Porém, ausência de cheiro não comprova segurança. Salmonella e outros micro-organismos não precisam alterar odor, cor ou sabor de forma perceptível.</p>
          <p>Não prove ovo cru para testar. Evite receitas com ovo cru ou malcozido quando houver maior vulnerabilidade, como gestantes, crianças pequenas, idosos e pessoas imunocomprometidas. Nesses casos, orientações individuais devem ser discutidas com profissional de saúde.</p>

          <h2>Lavar a casca resolve?</h2>
          <p>Não lave ovos para guardar. A Anvisa recomenda que, se houver necessidade de limpeza, ela seja feita somente momentos antes do consumo, porque a lavagem pode remover a cutícula protetora.</p>
          <p>Lavar um ovo já rachado também pode levar água e contaminantes para dentro. A lavagem não reconstitui a barreira nem torna segura uma unidade com vazamento.</p>

          <h2>Como evitar contaminação cruzada</h2>
          <ul>
            <li>Lave as mãos antes e depois de manipular ovos.</li>
            <li>Quebre cada ovo em recipiente separado antes de juntar à receita.</li>
            <li>Não apoie a parte interna da casca sobre alimentos prontos.</li>
            <li>Limpe imediatamente bancadas, tábuas e utensílios atingidos por ovo cru.</li>
            <li>Não reutilize a embalagem para guardar outros alimentos.</li>
            <li>Mantenha ovos refrigerados conforme a orientação do rótulo.</li>
            <li>Cozinhe até que clara e gema estejam firmes quando a segurança exigir cocção completa.</li>
          </ul>

          <h2>Erros comuns</h2>
          <ul>
            <li>Comprar uma caixa com ovos rachados porque o preço está menor.</li>
            <li>Achar que cheiro normal elimina o risco.</li>
            <li>Lavar e guardar os ovos para “higienizar”.</li>
            <li>Deixar ovo quebrado sobre a bancada para usar mais tarde.</li>
            <li>Misturar todos os ovos diretamente na receita sem avaliá-los.</li>
            <li>Usar ovo vazando em receita crua ou malcozida.</li>
            <li>Confundir rachadura durante o cozimento com ovo já rachado na compra.</li>
          </ul>

          <h2>Checklist antes de usar</h2>
          <ol>
            <li>A casca estava íntegra quando o ovo foi comprado?</li>
            <li>Se rachou, você sabe exatamente quando aconteceu?</li>
            <li>Houve vazamento ou contato com superfície suja?</li>
            <li>O conteúdo será usado imediatamente?</li>
            <li>A preparação ficará completamente cozida?</li>
            <li>Mãos, utensílios e bancada foram higienizados depois?</li>
          </ol>
          <p>Leia também: <Link href="/blog/como-guardar-ovos-geladeira-lavagem-seguranca">como guardar ovos, quando lavar e como preparar com segurança</Link> · <Link href="/blog/ovo-cozido-geladeira-tempo-conservacao-seguranca">quanto tempo o ovo cozido dura na geladeira</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final"><div className={styles.premiumHeader}><h2>Monte refeições práticas com ingredientes bem conservados</h2><p>Gere uma sugestão inicial de plano alimentar e ajuste ingredientes, preparações e porções à sua rotina. Necessidades clínicas e restrições exigem avaliação profissional.</p></div><Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link></section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou outro profissional de saúde. Condições clínicas, alergias, restrições, sintomas e necessidades individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/anvisa-nao-emitiu-alerta-sobre-presenca-de-plastico-ou-petroleo-em-ovos" target="_blank" rel="noopener noreferrer">Anvisa — compra, lavagem, refrigeração e cocção de ovos</a> · <a href="https://ask.fsis.usda.gov/article/Is-it-safe-to-use-eggs-that-have-cracks" target="_blank" rel="noopener noreferrer">USDA/FSIS — segurança de ovos rachados</a> · <a href="https://www.ams.usda.gov/rules-regulations/eggs" target="_blank" rel="noopener noreferrer">USDA/AMS — inspeção e classificação de ovos com defeitos</a>. Consultadas em 04/11/2026.</p>
      </footer>
    </main>
  );
}
