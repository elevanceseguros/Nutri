import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Ervilha Fresca, Congelada ou em Conserva: Como Comparar e Preparar";
const description = "Compare ervilha fresca, congelada e em conserva por ingredientes, sódio, rendimento, textura, praticidade, custo e forma de preparo.";
const url = "https://www.nutry.life/blog/ervilha-fresca-congelada-conserva-comparar-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-09-24", modifiedTime: "2026-09-24" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-09-24",
  dateModified: "2026-09-24",
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
          <p className={styles.postExcerpt}>🟢 Escolhas práticas · 6 min de leitura · 24 de setembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>

        <div className={styles.postContent}>
          <p>
            Fresca, congelada, em lata ou sachê: a ervilha pode chegar à cozinha com texturas, preços e níveis de praticidade bem diferentes. A melhor opção não é fixa. Ela depende da receita, do tempo disponível, do peso realmente aproveitável e do que aparece no rótulo.
          </p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div>
              <strong>Organize refeições possíveis para a sua rotina</strong>
              <p>Gere uma sugestão de plano alimentar e adapte alimentos, preparos e horários às suas preferências.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>

          <h2>O que muda entre as três versões?</h2>
          <p><strong>Fresca:</strong> costuma aparecer na vagem ou já debulhada e tem disponibilidade mais sazonal. Exige seleção, limpeza e, quando comprada na vagem, gera uma parte não aproveitada.</p>
          <p><strong>Congelada:</strong> normalmente vem pronta para cozinhar, sem necessidade de descongelar antes. A textura tende a permanecer mais firme quando o preparo é curto.</p>
          <p><strong>Em conserva:</strong> já vem cozida e é a mais rápida para receitas frias ou finalizações. O líquido de cobertura e o sódio variam, então o rótulo e o peso drenado importam.</p>

          <h2>Congelada não significa nutricionalmente “vazia”</h2>
          <p>
            O congelamento é um método de conservação, não uma classificação de qualidade nutricional. Ingredientes, tempo de armazenamento e preparo influenciam o resultado. Em vez de rejeitar a embalagem por ser congelada, veja se a lista contém apenas ervilha ou se há sal, molhos e outros componentes.
          </p>
          <p>
            A versão fresca também não é automaticamente superior: tempo desde a colheita, armazenamento e cozimento alteram cor, textura e aproveitamento. Para a rotina, uma opção disponível e usada pode ser mais útil do que outra que estraga esquecida na geladeira.
          </p>

          <h2>Como comparar a conserva pelo rótulo</h2>
          <p>
            Confira a denominação, a lista de ingredientes, o sódio por porção e por 100 g e o número de porções na embalagem. A Anvisa exige a declaração por 100 g ou 100 ml justamente para facilitar comparações entre produtos com porções diferentes.
          </p>
          <p>
            Compare o produto drenado quando a receita não usa o líquido. Marcas com latas do mesmo tamanho podem entregar pesos drenados diferentes. O preço da embalagem inteira, sozinho, pode dar uma impressão errada do custo da parte consumida.
          </p>

          <h2>Enxaguar reduz todo o sódio?</h2>
          <p>
            Escorrer e enxaguar remove parte do líquido aderido e pode ser uma escolha culinária útil, mas não permite calcular exatamente quanto sódio restará em cada produto. Para comparar antes da compra, use a informação do rótulo. Se houver orientação individual para controle de sódio, siga o profissional responsável.
          </p>

          <h2>Tempo de cozimento e textura</h2>
          <ul>
            <li><strong>Fresca:</strong> cozinhe até alcançar a textura desejada; o tempo muda conforme maturação e tamanho.</li>
            <li><strong>Congelada:</strong> acrescente diretamente a preparações quentes e evite cozimento prolongado quando quiser preservar firmeza e cor.</li>
            <li><strong>Em conserva:</strong> já está pronta; normalmente precisa apenas ser aquecida ou incorporada no final.</li>
          </ul>
          <p>
            Cozinhar além do necessário pode deixar qualquer versão mais macia e opaca. Em arroz, massa, risoto, torta ou sopa, o momento de adicionar deve considerar quanto tempo a receita ainda ficará no fogo.
          </p>

          <h2>Ervilha seca é outra comparação</h2>
          <p>
            Ervilha seca partida tem menos água, exige cozimento mais longo e costuma ser usada em sopas e purês. Não deve ser comparada grama por grama com ervilha verde pronta como se fossem equivalentes em rendimento e uso culinário. Se a receita pede uma delas, a substituição pode exigir ajuste de água, tempo e quantidade.
          </p>

          <h2>Como calcular o custo real</h2>
          <ol>
            <li>Veja o peso líquido e, nas conservas, o peso drenado.</li>
            <li>Na ervilha com vagem, considere que parte do peso será descartada.</li>
            <li>Calcule o preço por 100 g da porção aproveitável.</li>
            <li>Inclua praticidade e risco de desperdício na decisão.</li>
            <li>Compare o rendimento na receita que você realmente prepara.</li>
          </ol>
          <p>
            A versão mais barata por embalagem pode não ser a mais econômica depois de retirar vagem ou líquido. Por outro lado, comprar uma quantidade grande e perder parte por falta de uso também aumenta o custo real.
          </p>

          <h2>Onde usar cada versão</h2>
          <p>
            A fresca ou congelada funciona bem quando a textura e a cor aparecem no prato, como em arroz, refogados, massas e risotos. A conserva é prática para saladas, tortas, recheios e preparações rápidas. Para sopas cremosas, as três podem funcionar, com ajustes no tempo e no líquido.
          </p>
          <p>
            A ervilha contribui com carboidratos, fibras e proteínas vegetais, mas não precisa assumir sozinha o papel de “proteína da refeição”. A composição do prato depende das quantidades e dos demais alimentos.
          </p>

          <h2>Conservação depois de aberta</h2>
          <p>
            Siga as instruções do fabricante. Depois de abrir uma lata ou sachê, transfira a sobra para recipiente limpo e fechado quando indicado, mantenha refrigerada e respeite o prazo informado. Não deixe a sobra por longos períodos sobre a bancada.
          </p>
          <p>
            No congelador, retire apenas a quantidade necessária e feche a embalagem. Evite ciclos repetidos de descongelamento. A ervilha fresca deve permanecer refrigerada e ser usada enquanto mantém aparência e odor adequados.
          </p>

          <h2>Checklist de compra</h2>
          <ul>
            <li>Qual versão combina com a receita?</li>
            <li>Quanto tempo existe para preparar?</li>
            <li>A lista de ingredientes é simples ou inclui temperos?</li>
            <li>Qual é o sódio por 100 g?</li>
            <li>Qual é o peso drenado ou aproveitável?</li>
            <li>Qual é o preço por 100 g da parte consumida?</li>
            <li>A quantidade será usada antes de perder qualidade?</li>
          </ul>

          <p>
            Leia também: <Link href="/blog/milho-verde-espiga-lata-congelado-comparar">milho em espiga, lata ou congelado</Link> · <Link href="/blog/lentilha-seca-vs-pronta-sodio-custo-preparo">lentilha seca ou pronta: como comparar</Link>.
          </p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}>
              <h2>Monte um plano alimentar que considere sua rotina e suas preferências</h2>
              <p>Gere uma sugestão prática e procure orientação profissional quando precisar de estratégia individual.</p>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>

          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>

      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, restrições, sintomas e condições de saúde exigem orientação individual.</p>
        <p>
          Fontes: <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem nutricional</a> · <a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guia Alimentar para a População Brasileira</a> · <a href="https://www.tbca.net.br/" target="_blank" rel="noopener noreferrer">TBCA — Tabela Brasileira de Composição de Alimentos</a>. Consultadas em 24/09/2026.
        </p>
      </footer>
    </main>
  );
}
