import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Tábua de Madeira ou Plástico: Como Higienizar e Quando Trocar";
const description = "Compare tábuas de madeira e plástico, veja como evitar contaminação cruzada, higienizar depois do uso e reconhecer ranhuras que exigem substituição.";
const url = "https://www.nutry.life/blog/tabua-madeira-plastico-higienizar-quando-trocar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-11-10", modifiedTime: "2026-11-10" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-11-10",
  dateModified: "2026-11-10",
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
          <p className={styles.postExcerpt}>🔪 Segurança dos alimentos · 8 min de leitura · 10 de novembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>A escolha entre madeira e plástico costuma ser tratada como uma disputa simples, mas a segurança depende principalmente do estado da tábua, da forma de uso e da higienização. Qualquer material pode transferir micro-organismos quando recebe carne crua e depois alimento pronto sem limpeza adequada.</p>
          <p>O USDA informa que superfícies não porosas, como plástico, são mais fáceis de limpar do que madeira. Ainda assim, <strong>uma tábua limpa e bem conservada pode ser usada com segurança; quando surgem sulcos profundos ou áreas difíceis de lavar, é hora de substituir</strong>.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div><strong>Organize refeições com mais praticidade</strong><p>O gerador ajuda a montar uma sugestão inicial de plano alimentar e distribuir preparações ao longo da rotina.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link></div></div>

          <h2>Madeira ou plástico: comparação rápida</h2>
          <div style={{ overflowX: "auto" }}><table><thead><tr><th scope="col">Característica</th><th scope="col">Madeira</th><th scope="col">Plástico</th></tr></thead><tbody>
            <tr><td>Porosidade</td><td>Superfície porosa</td><td>Superfície não porosa</td></tr>
            <tr><td>Limpeza</td><td>Exige lavagem cuidadosa e secagem completa</td><td>Geralmente mais simples de lavar</td></tr>
            <tr><td>Lava-louças</td><td>Depende do fabricante; laminada pode deformar</td><td>Muitos modelos aceitam, conforme o rótulo</td></tr>
            <tr><td>Desgaste</td><td>Pode rachar, empenar ou abrir juntas</td><td>Pode formar sulcos profundos e soltar rebarbas</td></tr>
            <tr><td>Troca</td><td>Quando houver rachaduras ou áreas difíceis de limpar</td><td>Quando houver sulcos profundos ou deformação</td></tr>
          </tbody></table></div>

          <h2>Preciso ter duas tábuas?</h2>
          <p>Não é uma obrigação doméstica universal, mas separar funções reduz erros. O USDA recomenda, quando possível, usar uma tábua para frutas, verduras, pães e alimentos prontos e outra para carnes, aves e pescados crus.</p>
          <p>Cores ou etiquetas ajudam a lembrar a finalidade. A separação não elimina a lavagem: a tábua usada para alimento cru deve ser higienizada imediatamente, e nenhuma delas deve acumular resíduos entre preparos.</p>

          <h2>Como ocorre a contaminação cruzada</h2>
          <p>Carne crua pode deixar líquidos e micro-organismos na tábua, na faca, nas mãos e na bancada. Se o mesmo utensílio for usado para cortar salada, pão ou fruta sem limpeza, esses alimentos podem receber a contaminação e não passarão por cocção.</p>
          <p>O Ministério da Saúde classifica como mito a ideia de que utensílios usados com carnes cruas podem ser reutilizados em alimentos consumidos crus sem higienização. Trocar apenas a faca não basta quando a superfície continua contaminada.</p>

          <h2>Passo a passo para lavar a tábua</h2>
          <ol><li>Retire restos sólidos sem espalhá-los pela pia.</li><li>Lave com água corrente e detergente ou sabão apropriado.</li><li>Esfregue frente, verso, bordas, alça e sulcos.</li><li>Enxágue completamente.</li><li>Quando for necessário sanitizar, use produto regularizado e siga o rótulo.</li><li>Deixe secar por completo em posição ventilada.</li><li>Higienize também faca, bancada, pia e mãos.</li></ol>
          <p>A Anvisa orienta água e sabão em abundância para equipamentos e utensílios. Quando houver necessidade de desinfecção, a solução e a diluição devem seguir as instruções do produto; não improvise concentrações.</p>

          <h2>Água sanitária pode ser usada?</h2>
          <p>Alguns produtos à base de hipoclorito são indicados para desinfecção de superfícies, mas a concentração, o tempo de contato e a necessidade de enxágue variam. Leia o rótulo e confirme que o produto é adequado ao material e à finalidade.</p>
          <p>O USDA apresenta uma diluição específica com água sanitária sem perfume para tábuas, mas fórmulas comerciais e concentrações variam entre países e marcas. No Brasil, siga o rótulo do produto regularizado e não misture água sanitária com vinagre, amônia, álcool ou outros limpadores.</p>

          <h2>Posso colocar na lava-louças?</h2>
          <p>Tábua de plástico ou madeira maciça pode aceitar lava-louças quando o fabricante autoriza. Madeira laminada, bambu colado e peças com juntas podem empenar, rachar ou descolar com calor e umidade.</p>
          <p>A lava-louças não corrige uma superfície já muito desgastada. Verifique se água e detergente alcançam os sulcos e se a peça seca completamente ao final do ciclo.</p>

          <h2>Quando trocar a tábua</h2>
          <ul><li>Sulcos profundos que permanecem com resíduos.</li><li>Rachaduras, lascas, rebarbas ou partes soltas.</li><li>Madeira empenada, estufada ou com juntas abertas.</li><li>Plástico deformado pelo calor.</li><li>Odor persistente mesmo após lavagem completa.</li><li>Manchas associadas a áreas ásperas ou difíceis de higienizar.</li><li>Mofo visível ou deterioração do material.</li></ul>
          <p>O critério não é uma data fixa. Frequência de uso, força da faca, material e cuidado alteram a duração. Inspecione sob boa luz e passe a mão com cuidado para identificar rebarbas.</p>

          <h2>Lixar a madeira resolve?</h2>
          <p>Em alguns modelos de madeira maciça, restauração profissional ou lixamento adequado pode remover a camada danificada. Isso depende da construção da peça e deve preservar uma superfície lisa, íntegra e própria para contato com alimentos.</p>
          <p>Não lixe madeira laminada, rachada ou com cola exposta sem orientação do fabricante. Se houver dúvida sobre integridade ou higienização, substituir é a opção mais segura.</p>

          <h2>Óleo ajuda a conservar?</h2>
          <p>Tábua de madeira pode receber produto próprio para contato com alimentos, conforme instruções do fabricante. Óleo culinário comum pode oxidar e gerar odor, por isso não é uma substituição automática.</p>
          <p>Condicionamento reduz ressecamento, mas não higieniza nem fecha rachaduras profundas. Lave e seque antes de aplicar qualquer produto aprovado.</p>

          <h2>Erros comuns</h2>
          <ul><li>Usar a mesma tábua para frango cru e salada sem lavar.</li><li>Apenas passar um pano úmido depois da carne.</li><li>Guardar a tábua ainda molhada e sem ventilação.</li><li>Confiar em limão ou vinagre como substitutos da limpeza.</li><li>Manter uma peça com sulcos porque “ainda parece boa”.</li><li>Colocar madeira laminada na lava-louças sem conferir o fabricante.</li><li>Deixar líquidos de carne escorrerem sobre utensílios limpos.</li></ul>

          <h2>Checklist antes de preparar</h2>
          <ol><li>A tábua está limpa e completamente seca?</li><li>Há rachaduras ou sulcos difíceis de lavar?</li><li>O alimento é cru ou pronto para consumo?</li><li>É possível separar uma tábua para carnes cruas?</li><li>Faca, mãos e bancada também estão limpas?</li><li>A peça pode ir à lava-louças?</li><li>O sanitizante é regularizado e adequado à superfície?</li><li>A tábua será seca e guardada com ventilação?</li></ol>
          <p>Leia também: <Link href="/blog/esponja-cozinha-higienizar-quando-trocar">como usar, higienizar e trocar a esponja</Link> · <Link href="/blog/frango-cru-lavar-ou-nao-seguranca-cozinha">como evitar contaminação ao preparar frango</Link> · <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link> · <Link href="/blog/marmita-fora-geladeira-bolsa-termica-seguranca">como transportar refeições com segurança</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final"><div className={styles.premiumHeader}><h2>Planeje refeições práticas para a semana</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparações e porções à sua rotina. Alergias, restrições e condições clínicas exigem avaliação profissional.</p></div><Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link></section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou outro profissional de saúde. Condições clínicas, alergias, restrições, sintomas e necessidades individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://ask.fsis.usda.gov/article/Should-I-use-a-wooden-cutting-board-or-a-plastic-one" target="_blank" rel="noopener noreferrer">USDA/FSIS — madeira ou plástico</a> · <a href="https://ask.fsis.usda.gov/article/How-can-I-prevent-cross-contamination-when-using-cutting-boards" target="_blank" rel="noopener noreferrer">USDA/FSIS — prevenção de contaminação cruzada</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/vai-preparar-a-ceia-fique-de-olho-nessas-dicas" target="_blank" rel="noopener noreferrer">Anvisa — higiene na cozinha</a> · <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dtha/mitos-e-verdades/utensilios-usados-para-preparo-de" target="_blank" rel="noopener noreferrer">Ministério da Saúde — utensílios e carnes cruas</a>. Consultadas em 10/11/2026.</p>
      </footer>
    </main>
  );
}
