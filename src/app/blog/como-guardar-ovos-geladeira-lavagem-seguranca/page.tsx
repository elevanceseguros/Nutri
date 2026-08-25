import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Como Guardar Ovos: Geladeira, Lavagem, Validade e Preparo Seguro";
const description = "Saiba onde guardar ovos, por que evitar a porta da geladeira e a lavagem antecipada e quais cuidados tomar ao comprar e cozinhar.";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: "https://www.nutry.life/blog/como-guardar-ovos-geladeira-lavagem-seguranca" },
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://www.nutry.life/blog/como-guardar-ovos-geladeira-lavagem-seguranca",
    publishedTime: "2026-08-25",
  },
};

export default function Post() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-08-25",
    dateModified: "2026-08-25",
    mainEntityOfPage: "https://www.nutry.life/blog/como-guardar-ovos-geladeira-lavagem-seguranca",
    publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
  };

  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">
        ← Voltar para o blog
      </Link>

      <article>
        <header>
          <p className={styles.postExcerpt}>🥚 Segurança dos alimentos · 10 min de leitura</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>
            O lugar mais prático nem sempre é o mais seguro: ovos ficam melhor em uma prateleira interna da geladeira, protegidos de variações de temperatura e sem lavagem antecipada.
          </p>
        </header>

        <div className={styles.postContent}>
          <p>
            A porta da geladeira parece ter sido desenhada para ovos, mas abre e fecha o dia inteiro. Essa oscilação, somada à manipulação da casca e ao preparo inadequado, pode reduzir a segurança e a qualidade do alimento. Com alguns cuidados simples, é possível armazenar melhor e diminuir desperdício.
          </p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div>
              <strong>Quer organizar refeições simples com os alimentos que já usa?</strong>
              <p>Use o gerador da Nutry.life para criar uma sugestão de plano alimentar e adaptá-la à sua rotina.</p>
            </div>
            <Link href="/">Gerar meu plano alimentar</Link>
          </div>

          <h2>Onde guardar os ovos?</h2>
          <p>
            Depois da compra, mantenha os ovos refrigerados em uma <strong>prateleira interna</strong>, onde a temperatura é mais estável. Evite a porta da geladeira, que sofre variações a cada abertura. Se possível, preserve a embalagem original: ela protege contra impactos, ajuda a acompanhar a validade e reduz contato com outros alimentos.
          </p>
          <p>
            Não coloque a embalagem em contato com preparações prontas para consumo. Organize a geladeira de modo que ovos, carnes e outros alimentos crus não possam pingar ou contaminar itens já cozidos.
          </p>

          <h2>Precisa lavar antes de guardar?</h2>
          <p>
            <strong>Não é recomendável lavar os ovos antes do armazenamento.</strong> A lavagem pode remover ou alterar a camada protetora natural da casca e facilitar a entrada de microrganismos quando feita de maneira inadequada. Também não use esponja, palha de aço, sabão ou sanitizante na casca para depois guardá-la.
          </p>
          <p>
            Se houver sujeira intensa, rachadura ou vazamento, a opção mais segura é não usar o ovo. Quando houver necessidade de limpar a casca imediatamente antes do preparo, evite deixá-la de molho e impeça que a água ou a sujeira da casca entre em contato com o conteúdo. Lave as mãos e os utensílios depois de manipular ovos crus.
          </p>

          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr><th>Situação</th><th>Conduta prática</th><th>Por quê</th></tr>
              </thead>
              <tbody>
                <tr><td>Ovos íntegros</td><td>Guardar na embalagem, em prateleira interna</td><td>Protege e mantém temperatura mais estável</td></tr>
                <tr><td>Ovo rachado no mercado</td><td>Não comprar</td><td>A barreira da casca está comprometida</td></tr>
                <tr><td>Casca muito suja ou com vazamento</td><td>Descartar</td><td>Há maior risco de contaminação</td></tr>
                <tr><td>Ovo cru já quebrado</td><td>Usar imediatamente ou refrigerar em recipiente fechado por curto período</td><td>Perde a proteção da casca</td></tr>
                <tr><td>Preparação cozida com ovos</td><td>Refrigerar prontamente em recipiente adequado</td><td>Evita permanência prolongada em temperatura favorável a microrganismos</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Como escolher no mercado</h2>
          <ul>
            <li>compre produtos de origem identificada e dentro da validade;</li>
            <li>confira se a embalagem está seca, limpa e sem cheiro anormal;</li>
            <li>abra a caixa e observe se há cascas rachadas, quebradas ou vazando;</li>
            <li>evite unidades coladas à embalagem, sinal possível de quebra anterior;</li>
            <li>leve os ovos para casa sem deixá-los por muito tempo no carro quente;</li>
            <li>siga as instruções de conservação presentes no rótulo.</li>
          </ul>

          <h2>A cor da casca indica qualidade?</h2>
          <p>
            Casca branca ou marrom depende principalmente da linhagem da ave e não determina, sozinha, maior valor nutricional ou segurança. Tamanho, cor da gema e sistema de criação também não substituem validade, procedência, integridade da casca e conservação.
          </p>
          <p>
            Para a discussão sobre frequência de consumo e composição nutricional, consulte o artigo <Link href="/blog/comer-ovos-todo-dia-faz-mal">comer ovos todos os dias faz mal?</Link>. Aqui, o foco é segurança de compra, armazenamento e preparo.
          </p>

          <h2>O teste do copo com água comprova se o ovo está seguro?</h2>
          <p>
            O teste pode indicar mudanças na câmara de ar associadas ao tempo de armazenamento: ovos mais antigos tendem a boiar. Porém, <strong>não detecta Salmonella nem garante segurança microbiológica</strong>. Um ovo que afunda pode estar contaminado, e um que boia pode apenas estar envelhecido.
          </p>
          <p>
            Use validade, procedência, integridade, conservação e cozimento como referências. Ao quebrar, faça isso primeiro em um recipiente separado. Assim, um ovo alterado não contamina toda a receita.
          </p>

          <h2>Como quebrar e manipular sem contaminar a cozinha</h2>
          <ol>
            <li>lave as mãos antes de começar;</li>
            <li>quebre cada ovo em um recipiente pequeno, não diretamente sobre a preparação;</li>
            <li>evite usar a própria casca para separar clara e gema;</li>
            <li>não coloque a casca sobre a bancada ou prato que receberá comida pronta;</li>
            <li>lave mãos, tigelas e utensílios que tocaram ovo cru;</li>
            <li>não prove massa crua que contenha ovos.</li>
          </ol>

          <h2>Ovo com gema mole é seguro?</h2>
          <p>
            O cozimento completo reduz o risco microbiológico. Preparações com clara e gema firmes são a escolha mais cautelosa, especialmente para gestantes, crianças pequenas, idosos e pessoas imunossuprimidas. Receitas que permanecem cruas ou mal cozidas, como algumas maioneses, mousses e sobremesas, devem usar ovos pasteurizados quando apropriado.
          </p>
          <p>
            Isso não significa que toda pessoa que come gema mole ficará doente; significa que o risco não é zero. Quem pertence a grupo vulnerável ou recebeu orientação clínica deve seguir a recomendação do profissional de saúde.
          </p>

          <h2>Quanto tempo os ovos duram?</h2>
          <p>
            Use a validade impressa pelo fabricante e as condições do rótulo como referência principal. O prazo real também depende de transporte, temperatura, integridade da casca e tempo fora de refrigeração. Não prolongue a validade com base apenas em cheiro ou aparência.
          </p>
          <p>
            Se você transferir os ovos para outro recipiente, anote a data. Ainda assim, a embalagem original costuma ser melhor porque mantém lote, validade e instruções disponíveis.
          </p>

          <h2>E ovos cozidos?</h2>
          <p>
            Depois de cozinhar, resfrie e leve à geladeira sem deixá-los horas em temperatura ambiente. Guarde em recipiente fechado para evitar odores e contato com outros alimentos. Descascar apenas próximo do consumo ajuda a preservar a superfície.
          </p>
          <p>
            Se o ovo cozido for para a lancheira, ele é perecível: use bolsa térmica e elemento refrigerante. Veja também <Link href="/blog/lancheira-infantil-saudavel-pratica-segura">como transportar lanches com segurança</Link>.
          </p>

          <h2>Quando descartar</h2>
          <ul>
            <li>casca rachada, vazando ou com sujeira intensa;</li>
            <li>odor desagradável ao quebrar;</li>
            <li>cor incomum ou sinais evidentes de deterioração;</li>
            <li>preparação perecível que ficou tempo excessivo sem refrigeração;</li>
            <li>dúvida sobre procedência, validade ou conservação.</li>
          </ul>
          <p>
            Não prove para decidir se está bom. Em segurança alimentar, a dúvida razoável é motivo para descartar.
          </p>

          <h2>Resumo</h2>
          <p>
            Compre ovos íntegros e identificados, mantenha-os na embalagem em uma prateleira interna da geladeira, não lave antes de guardar e evite contaminação cruzada. Quebre cada unidade separadamente, cozinhe de forma adequada e use ovos pasteurizados em receitas que permanecerão cruas.
          </p>

          <section className={styles.premiumBanner} data-cta="final">
            <div>
              <p>ROTINA POSSÍVEL</p>
              <h2>Transforme ingredientes simples em refeições organizadas</h2>
              <p>Use o gerador gratuito da Nutry.life como ponto de partida e adapte as sugestões às preferências e necessidades da sua casa.</p>
            </div>
            <Link href="/">Gerar meu plano alimentar</Link>
          </section>

          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">
            ← Voltar para todos os artigos
          </Link>
        </div>
      </article>

      <footer className={styles.footer}>
        <p>
          Este conteúdo é educativo e não substitui avaliação individual. Gestantes, crianças pequenas, idosos, pessoas imunossuprimidas ou com condições de saúde específicas devem seguir as orientações do profissional responsável.
        </p>
        <p>
          Fontes: <a href="https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1155282/1/Folheto-Gastronomia-FORMATO-DIGITAL.pdf" target="_blank" rel="noopener noreferrer">Embrapa — armazenamento e preparo de ovos</a>, <a href="https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/educacao-e-pesquisa/educacao-em-vigilancia-sanitaria-para-a-sociedade/vigilancia-sanitaria-guia-didatico.pdf/@@download/file" target="_blank" rel="noopener noreferrer">Anvisa — segurança dos alimentos</a> e <a href="https://www.agricultura.rs.gov.br/upload/arquivos/202210/14101950-17171709-livreto-curiosidades-sobre-o-ovo-ddpa-final-2.pdf" target="_blank" rel="noopener noreferrer">Secretaria da Agricultura do RS — conservação de ovos</a>.
        </p>
      </footer>
    </main>
  );
}
