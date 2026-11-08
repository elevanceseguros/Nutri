import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Comer Massa Crua Faz Mal? Farinha, Ovos e Como Preparar com Segurança";
const description = "Entenda por que farinha e ovos crus podem carregar micro-organismos, quais massas não devem ser provadas e como reduzir contaminação na cozinha.";
const url = "https://www.nutry.life/blog/massa-crua-farinha-ovos-riscos-seguranca";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-11-08", modifiedTime: "2026-11-08" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
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
          <p className={styles.postExcerpt}>🥣 Segurança dos alimentos · 8 min de leitura · 8 de novembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Provar a massa do bolo, do cookie ou da panqueca antes de assar parece um gesto pequeno. O risco, porém, não vem apenas do ovo cru. A farinha comum também é um alimento cru e pode carregar bactérias adquiridas no campo ou durante a produção.</p>
          <p>A FDA e o CDC orientam não comer nem provar farinha, massa ou mistura crua. <strong>Assar ou cozinhar pelo tempo e pela temperatura indicados na receita ou na embalagem é a etapa destinada a reduzir esses micro-organismos</strong>. Aparência, cheiro e sabor não revelam se a farinha ou o ovo estão contaminados.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div><strong>Organize preparos sem depender de improviso</strong><p>O gerador ajuda a montar uma sugestão inicial de refeições e distribuir receitas ao longo da rotina.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link></div></div>

          <h2>Decisão rápida: pode provar?</h2>
          <div style={{ overflowX: "auto" }}><table><thead><tr><th scope="col">Produto ou preparo</th><th scope="col">Conduta segura</th><th scope="col">Por quê</th></tr></thead><tbody>
            <tr><td>Massa de bolo, cookie, pão, pizza ou panqueca</td><td>Não provar antes do cozimento completo</td><td>Pode conter farinha crua e, em muitos casos, ovo cru</td></tr>
            <tr><td>Mistura pronta para bolo ou brownie</td><td>Seguir o preparo da embalagem</td><td>O pó não é automaticamente pronto para consumo</td></tr>
            <tr><td>Massa industrializada refrigerada</td><td>Verificar se o rótulo exige assar</td><td>Produto refrigerado pode continuar sendo cru</td></tr>
            <tr><td>Massa vendida como pronta para comer</td><td>Consumir somente se o rótulo confirmar essa finalidade</td><td>Pode usar farinha tratada e ovos pasteurizados ou não conter ovos</td></tr>
            <tr><td>Farinha para engrossar molho</td><td>Cozinhar adequadamente depois de adicionar</td><td>Misturar não elimina possíveis micro-organismos</td></tr>
            <tr><td>Massinha de brincar feita com farinha</td><td>Não levar à boca; lavar mãos e superfícies</td><td>Farinha de uso culinário continua crua</td></tr>
          </tbody></table></div>

          <h2>Por que farinha é considerada crua?</h2>
          <p>O trigo e outros grãos crescem ao ar livre e podem entrar em contato com animais, solo, água e poeira. A moagem transforma o grão em pó, mas não é um processo de esterilização. Segundo a FDA, moer ou branquear a farinha não garante a eliminação de bactérias como <em>Escherichia coli</em> e <em>Salmonella</em>.</p>
          <p>Isso ajuda a explicar por que surtos já foram associados à farinha e a misturas para bolo. O pacote parecer seco, limpo e dentro da validade não significa que o conteúdo possa ser consumido sem o cozimento previsto.</p>

          <h2>Ovo cru é o único problema?</h2>
          <p>Não. Ovos crus ou malcozidos podem conter <em>Salmonella</em>, mas trocar o ovo por leite, água ou ingrediente vegetal não torna uma massa com farinha crua pronta para consumo. A avaliação precisa considerar todos os ingredientes.</p>
          <p>Também não basta escolher um ovo de boa aparência. Contaminação microbiológica pode existir sem alterar cor, cheiro ou textura. O cuidado inclui comprar produtos íntegros, conservar conforme o rótulo, evitar contato cruzado e cozinhar adequadamente.</p>

          <h2>Uma colher pequena também conta?</h2>
          <p>A orientação oficial é não provar massa ou farinha crua, mesmo em pequena quantidade. Não existe uma colher caseira capaz de confirmar que aquele lote está livre de micro-organismos. Crianças, gestantes, idosos e pessoas com imunidade comprometida podem sofrer consequências mais graves de doenças transmitidas por alimentos.</p>
          <p>Se alguém comeu massa crua, isso não significa que necessariamente ficará doente. Observe sintomas e procure orientação profissional quando houver sinais importantes, persistentes ou preocupação clínica. O blog não faz diagnóstico individual.</p>

          <h2>Mistura pronta é segura sem assar?</h2>
          <p>Nem sempre. Mistura para bolo, brownie, panqueca, waffle ou pizza costuma ser formulada para passar por cozimento. Usar o pó em milkshake, cobertura, brigadeiro sem cocção ou sobremesa gelada pode transformar um ingrediente cru em alimento pronto para comer sem a etapa de segurança planejada.</p>
          <p>Leia a frente e o verso da embalagem. Expressões como “assar antes de consumir” ou instruções de tempo e temperatura indicam que o produto não deve ser provado cru. Validade não substitui modo de preparo.</p>

          <h2>E a massa de cookie pronta para comer?</h2>
          <p>Alguns fabricantes produzem massas com finalidade específica de consumo sem assar, usando farinha tratada e ovos pasteurizados ou retirando o ovo. O CDC orienta conferir claramente no rótulo se o produto é destinado a ser consumido cru.</p>
          <p>Não presuma que toda massa refrigerada ou congelada seja desse tipo. Se a embalagem manda assar, cozinhe conforme as instruções. Depois de aberta, mantenha as condições de refrigeração e o prazo indicado pelo fabricante.</p>

          <h2>Posso tratar farinha no forno ou micro-ondas?</h2>
          <p>A FDA desaconselha tentar “tratar” farinha em casa para torná-la segura para receitas cruas. Aquecimento doméstico pode ser desigual, e medir apenas a temperatura de um ponto não comprova que todo o volume recebeu processo suficiente.</p>
          <p>Para receitas que serão consumidas sem cocção posterior, prefira um ingrediente comercial explicitamente tratado e destinado a esse uso. Siga o rótulo e não improvise parâmetros de tempo e temperatura.</p>

          <h2>Como evitar contaminação cruzada</h2>
          <ol><li>Abra e meça a farinha com cuidado para reduzir poeira.</li><li>Mantenha farinha e ovos crus separados de alimentos prontos.</li><li>Não coloque colheres usadas na boca de volta na tigela.</li><li>Lave as mãos com água e sabão depois de manusear farinha, ovos ou massa crua.</li><li>Lave tigelas, batedores, espátulas e bancadas com água e detergente.</li><li>Evite usar o mesmo utensílio no preparo cru e no alimento já pronto.</li><li>Guarde farinha em recipiente fechado, seco e protegido de pragas.</li><li>Descarte produtos incluídos em recolhimentos oficiais.</li></ol>
          <p>Como a farinha é um pó leve, ela pode se espalhar além da tigela. Limpe a área de preparo sem varrer o pó para utensílios, frutas ou alimentos que não serão cozidos.</p>

          <h2>Crianças podem brincar com massa de farinha?</h2>
          <p>O CDC inclui massinhas, enfeites e outros artesanatos feitos com farinha crua entre os produtos que não devem ser levados à boca. Crianças pequenas podem tocar o rosto ou comer fragmentos, por isso a supervisão e a lavagem das mãos são importantes.</p>
          <p>Use materiais apropriados para a faixa etária e siga as instruções do fabricante. Uma receita caseira não se torna segura para provar apenas porque não contém ovo.</p>

          <h2>Como assar e guardar com segurança</h2>
          <p>Siga a receita validada ou as instruções da embalagem, respeitando tamanho da porção, temperatura e tempo. Um bolo dourado por fora ainda pode estar cru no centro se a forma, a quantidade ou o forno foram alterados.</p>
          <p>Depois de pronto, proteja contra contato com utensílios usados na massa crua. Preparações com recheios, cremes, queijos ou outros perecíveis precisam de conservação compatível com esses ingredientes. Não use a cocção para prolongar indefinidamente a validade.</p>

          <h2>Checklist antes de cozinhar</h2>
          <ol><li>A farinha ou mistura é crua ou pronta para consumo?</li><li>O rótulo exige assar ou cozinhar?</li><li>A massa contém ovos crus?</li><li>O produto foi conservado conforme a embalagem?</li><li>Utensílios e bancada estão limpos?</li><li>O preparo seguirá tempo e temperatura indicados?</li><li>Alimentos prontos ficarão separados dos ingredientes crus?</li><li>Há algum recolhimento aplicável ao lote?</li></ol>
          <p>Leia também: <Link href="/blog/farinha-trigo-branca-vs-integral-como-usar">diferenças entre farinha branca e integral</Link> · <Link href="/blog/ovo-rachado-trincado-usar-descartar-seguranca">quando descartar um ovo rachado</Link> · <Link href="/blog/comida-quente-geladeira-resfriar-sobras-seguranca">como resfriar preparações prontas</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final"><div className={styles.premiumHeader}><h2>Planeje receitas e refeições com mais praticidade</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparações e porções à sua rotina. Alergias, restrições e necessidades clínicas exigem avaliação profissional.</p></div><Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link></section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou outro profissional de saúde. Condições clínicas, alergias, restrições, sintomas e necessidades individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.fda.gov/food/buy-store-serve-safe-food/handling-flour-safely-what-you-need-know" target="_blank" rel="noopener noreferrer">FDA — manipulação segura da farinha</a> · <a href="https://www.cdc.gov/food-safety/foods/no-raw-dough.html" target="_blank" rel="noopener noreferrer">CDC — farinha e massa cruas</a>. Consultadas em 08/11/2026.</p>
      </footer>
    </main>
  );
}
