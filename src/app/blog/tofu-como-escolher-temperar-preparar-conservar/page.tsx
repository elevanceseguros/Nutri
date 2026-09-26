import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Tofu: Como Escolher, Temperar, Preparar e Conservar";
const description = "Entenda as diferenças de textura, compare ingredientes, aprenda a prensar e temperar e organize preparo e conservação do tofu com segurança.";
const url = "https://www.nutry.life/blog/tofu-como-escolher-temperar-preparar-conservar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-09-26", modifiedTime: "2026-09-26" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-09-26",
  dateModified: "2026-09-26",
  mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>

      <article>
        <header>
          <p className={styles.postExcerpt}>◻️ Cozinha prática · 6 min de leitura · 26 de setembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>

        <div className={styles.postContent}>
          <p>
            Tofu não é uma peça única: versões macias, firmes, extrafirmes, naturais e temperadas se comportam de maneiras diferentes. Antes de concluir que ele “não tem gosto” ou que sempre se desfaz, vale combinar a textura com a receita, ler os ingredientes e ajustar água, corte, tempero e método de cocção.
          </p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div>
              <strong>Inclua alimentos diferentes sem complicar a rotina</strong>
              <p>Gere uma sugestão de plano alimentar e adapte ingredientes, preparos e horários à sua realidade.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>

          <h2>O que é tofu?</h2>
          <p>
            O tofu é produzido a partir de bebida de soja coagulada e prensada. A quantidade de líquido retida e o grau de prensagem ajudam a formar texturas diferentes. Isso muda o resultado culinário e também pode alterar a composição por porção; por isso, compare o rótulo do produto que está comprando, não apenas valores genéricos.
          </p>
          <p>
            Ele pode participar de refeições variadas, mas não precisa ser apresentado como substituto obrigatório de carne nem como alimento milagroso. A composição da refeição inteira, as preferências e as necessidades individuais continuam importando.
          </p>

          <h2>Macio, firme ou extrafirme: qual escolher?</h2>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr><th>Textura</th><th>Comportamento</th><th>Usos possíveis</th></tr>
              </thead>
              <tbody>
                <tr><td>Macio ou sedoso</td><td>Mais úmido e delicado</td><td>Molhos, cremes, sobremesas, sopas e recheios batidos</td></tr>
                <tr><td>Firme</td><td>Mantém parte do formato, mas ainda pode quebrar</td><td>Mexidos, ensopados, grelhados delicados e recheios</td></tr>
                <tr><td>Extrafirme</td><td>Menos úmido e mais resistente</td><td>Cubos assados, frigideira, espetos e preparações crocantes</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            As denominações não são idênticas entre marcas. Pressione levemente a embalagem, quando isso for possível sem danificá-la, e observe a descrição do fabricante. Para receitas em cubos, uma versão firme costuma ser mais previsível; para bater, a macia exige menos esforço.
          </p>

          <h2>Como comparar o rótulo</h2>
          <ul>
            <li><strong>Lista de ingredientes:</strong> veja soja, água, coagulantes, sal, temperos e aditivos presentes.</li>
            <li><strong>Porção:</strong> compare valores na mesma quantidade; embalagens podem usar porções diferentes.</li>
            <li><strong>Proteína, gordura e sódio:</strong> podem variar com concentração, salmoura e temperos.</li>
            <li><strong>Cálcio:</strong> o valor depende da formulação e do coagulante; não presuma que todos os tofus tenham a mesma quantidade.</li>
            <li><strong>Alergênicos:</strong> soja é um alergênico e deve aparecer nas informações obrigatórias do produto.</li>
            <li><strong>Conservação:</strong> siga temperatura, validade e instruções depois de aberto indicadas pelo fabricante.</li>
          </ul>

          <h2>Natural, defumado ou temperado?</h2>
          <p>
            O natural oferece mais liberdade para ajustar sal e sabor. Versões defumadas ou já temperadas economizam tempo, mas podem trazer mais sódio e ingredientes adicionais. Compare a quantidade que será usada na receita e o custo por peso, não apenas o preço da embalagem.
          </p>
          <p>
            “Orgânico”, “artesanal” ou “premium” não descrevem sozinho textura, teor de proteína ou adequação à receita. Verifique informações objetivas do rótulo e condições de conservação.
          </p>

          <h2>Precisa prensar?</h2>
          <p>
            Nem sempre. Prensar retira parte da água e pode ajudar versões firmes a dourar e absorver um molho mais concentrado. Tofu sedoso não deve ser prensado como o extrafirme, porque tende a se desfazer. Em sopas, cremes e ensopados, manter mais umidade pode ser desejável.
          </p>
          <ol>
            <li>Escorra o líquido da embalagem conforme a orientação do fabricante.</li>
            <li>Coloque o bloco firme entre panos ou papel apropriado e limpo.</li>
            <li>Use um peso estável, sem exagerar na pressão.</li>
            <li>Corte somente depois de alcançar a textura necessária para a receita.</li>
          </ol>

          <h2>Como temperar para o sabor não ficar só na superfície</h2>
          <p>
            Corte o tofu em peças compatíveis com o tempo disponível: cubos pequenos ganham mais área de contato; fatias grossas preservam um interior suave. Misturas com acidez, aromas, especiarias e uma fonte moderada de sal podem ser usadas, mas o molho não precisa cobrir uma peça inteira por horas para funcionar.
          </p>
          <p>
            Se a marinada teve contato com ingredientes crus de origem animal, não a reutilize diretamente como molho pronto. Separe utensílios e recipientes para evitar contaminação cruzada, conforme as boas práticas da Anvisa.
          </p>

          <h2>Frigideira, forno ou air fryer?</h2>
          <p><strong>Frigideira:</strong> aqueça a superfície, use quantidade moderada de óleo e evite movimentar os cubos antes de formar uma crosta.</p>
          <p><strong>Forno:</strong> distribua em camada única e vire quando necessário. Peças encostadas liberam vapor e douram menos.</p>
          <p><strong>Air fryer:</strong> funciona melhor com espaço para circulação de ar. Tempo e temperatura dependem do equipamento e do tamanho dos cortes.</p>
          <p><strong>Ensopado:</strong> adicione com cuidado e escolha firmeza compatível. Tofu macio pode entrar perto do final para não se desfazer.</p>

          <h2>Como obter uma superfície mais crocante</h2>
          <ul>
            <li>Escolha tofu firme ou extrafirme.</li>
            <li>Retire umidade superficial antes de temperar.</li>
            <li>Evite excesso de marinada líquida no momento de dourar.</li>
            <li>Mantenha espaço entre os pedaços.</li>
            <li>Use uma fina camada de amido quando a receita pedir, sem transformar isso em regra obrigatória.</li>
            <li>Adicione molhos açucarados mais perto do final para reduzir o risco de queimar.</li>
          </ul>

          <h2>Conservação depois de aberto</h2>
          <p>
            Tofu refrigerado é perecível. Use recipiente limpo e fechado, mantenha sob refrigeração e siga o prazo e as instruções do fabricante após a abertura. Não adote um número universal de dias quando a embalagem traz orientação específica.
          </p>
          <p>
            Mudança acentuada de odor, superfície viscosa, embalagem estufada ou sinais de deterioração indicam que o alimento não deve ser aproveitado. Não prove para decidir se um produto suspeito está seguro.
          </p>

          <h2>Pode congelar?</h2>
          <p>
            Pode, mas a textura muda: a água forma cristais e o tofu tende a ficar mais poroso e mastigável depois de descongelado. Essa transformação pode ser útil em ensopados e preparações que precisam absorver molho, mas talvez não agrade em cremes ou receitas delicadas.
          </p>
          <p>
            Congele em porções identificadas e descongele sob refrigeração ou conforme método seguro indicado pelo fabricante. Evite descongelar por longos períodos sobre a bancada.
          </p>

          <h2>Como montar a refeição</h2>
          <p>
            Use o tofu junto de legumes, verduras, cereais, tubérculos ou leguminosas conforme a preparação e a fome. Um prato não se torna automaticamente completo apenas porque contém tofu; quantidade, acompanhamentos e contexto variam entre pessoas.
          </p>
          <p>
            Em dietas vegetarianas ou veganas, planejamento de variedade, vitamina B12 e outros nutrientes merece orientação responsável. O tofu pode ser uma opção prática, mas não substitui avaliação individual quando há restrições ou necessidades específicas.
          </p>

          <h2>Checklist rápido</h2>
          <ul>
            <li>A textura escolhida combina com o método de preparo?</li>
            <li>Ingredientes, sódio e porção foram comparados?</li>
            <li>É necessário prensar ou a receita pede umidade?</li>
            <li>O corte permite dourar sem desmanchar?</li>
            <li>A embalagem está íntegra, refrigerada e dentro da validade?</li>
            <li>Existe um plano para usar ou congelar a sobra?</li>
          </ul>

          <p>
            Leia também: <Link href="/blog/leite-de-vaca-vs-bebida-vegetal">bebidas vegetais e leite: como comparar</Link> · <Link href="/blog/proteina-para-vegetarianos">fontes de proteína para vegetarianos</Link>.
          </p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}>
              <h2>Monte um plano alimentar prático, variado e compatível com sua rotina</h2>
              <p>Gere uma sugestão inicial e procure orientação profissional para necessidades, restrições ou objetivos individuais.</p>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>

          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>

      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Alergias, sintomas, restrições, necessidades e condições de saúde exigem orientação individual.</p>
        <p>
          Fontes: <a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guia Alimentar para a População Brasileira</a> · <a href="https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/alimentos/manuais-guias-e-orientacoes/cartilha-boas-praticas-para-servicos-de-alimentacao.pdf/@@display-file/file" target="_blank" rel="noopener noreferrer">Anvisa — boas práticas para serviços de alimentação</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem nutricional</a> · <a href="https://www.tbca.net.br/" target="_blank" rel="noopener noreferrer">TBCA — Tabela Brasileira de Composição de Alimentos</a>. Consultadas em 26/09/2026.
        </p>
      </footer>
    </main>
  );
}
