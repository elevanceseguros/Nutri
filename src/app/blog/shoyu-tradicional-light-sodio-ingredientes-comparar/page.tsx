import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Shoyu Tradicional ou Light: Como Comparar Sódio e Ingredientes";
const description = "Entenda a redução de sódio, compare a mesma quantidade de shoyu e veja como usar o molho sem somar sal automaticamente à receita.";
const url = "https://www.nutry.life/blog/shoyu-tradicional-light-sodio-ingredientes-comparar";
export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-19", modifiedTime: "2026-10-19" },
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-19", dateModified: "2026-10-19", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🥢 Rótulos e cozinha · 6 min de leitura · 19 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Você troca o shoyu tradicional pelo light, mas coloca o dobro porque o sabor parece mais suave. O sódio da refeição diminuiu? Não necessariamente. Para comparar, é preciso olhar o valor na tabela e a quantidade realmente usada, além da palavra na frente da garrafa.</p>
          <p>O objetivo não é escolher um molho “perfeito”, mas entender a diferença e temperar com mais controle. A receita inteira, os demais ingredientes e a frequência de uso também entram nessa decisão.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Organize ingredientes e refeições com mais clareza</strong>
            <p>Gere uma sugestão inicial de plano alimentar e adapte as compras às suas preferências e à rotina da casa.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Light em quê e comparado com qual produto?</h2>
          <p>Leia a alegação completa. No material do fabricante Sakura consultado para este artigo, a versão Light é apresentada com 30% menos sódio em relação à Tradicional. Esse é um exemplo de comparação entre produtos, não uma regra para todo shoyu nem uma recomendação de marca.</p>
          <p>Redução não significa ausência: a versão com menos sódio continua contribuindo para o total consumido. Também não conclua que “light” significa menos açúcar, menos calorias, ausência de glúten ou adequação a qualquer restrição.</p>
          <p>Formulações e embalagens podem mudar. Confirme a informação no produto comprado, incluindo qual é a referência da redução. Expressões como “suave” e “premium” também não substituem a leitura da tabela.</p>

          <h2>Compare na mesma base antes de olhar a colher</h2>
          <p>A rotulagem nutricional da Anvisa prevê a informação por 100 g ou 100 ml para facilitar comparações, além da porção. Em dois molhos que tragam coluna por 100 ml, compare o sódio nessa mesma base. Se um rótulo usar gramas e outro mililitros, não trate massa e volume como equivalentes sem uma conversão indicada.</p>
          <p>Depois veja quanto entra na receita. A medida caseira da tabela é uma referência; despejar direto da garrafa não garante aquela quantidade. Use um utensílio medidor para conhecer o volume que costuma acrescentar, sem transformar isso numa obrigação de contar cada gota.</p>
          <div style={{ overflowX: "auto" }}><table>
            <thead><tr><th scope="col">O que observar</th><th scope="col">Pergunta prática</th></tr></thead>
            <tbody>
              <tr><td>Sódio por 100 ml ou 100 g</td><td>Estou comparando a mesma unidade?</td></tr>
              <tr><td>Porção da tabela</td><td>As duas marcas usam a mesma quantidade?</td></tr>
              <tr><td>Alegação de redução</td><td>Qual nutriente diminuiu e qual é o produto de referência?</td></tr>
              <tr><td>Quantidade na panela</td><td>Quanto molho entra na preparação inteira?</td></tr>
              <tr><td>Outros temperos</td><td>Também vou usar sal, caldo ou outro molho?</td></tr>
            </tbody>
          </table></div>

          <h2>Uma conta fictícia mostra por que a quantidade importa</h2>
          <p>Imagine um molho A com 1.000 mg de sódio em 15 ml e um molho B com 700 mg nos mesmos 15 ml. Na mesma quantidade, B fornece 30% menos sódio. Mas, se você usar 30 ml de B, serão 1.400 mg: mais que os 1.000 mg dos 15 ml de A.</p>
          <p>São números inventados para explicar a conta, não valores de uma marca nem sugestão de porção. Para o seu produto, multiplique o sódio informado pela proporção efetivamente utilizada. Se o molho for distribuído numa receita, esse valor pertence ao preparo inteiro antes de considerar a divisão entre as pessoas.</p>
          <p>Diluir em água muda a concentração e pode ajudar a espalhar o tempero, mas não remove o sódio da quantidade de shoyu adicionada. Se toda a mistura for consumida, o sódio original continua nela.</p>

          <h2>Ingredientes e advertências também diferenciam os molhos</h2>
          <p>A página atual do Shoyu Tradicional da Sakura descreve fermentação de soja e milho. Já a ficha técnica pública da versão Light apresenta outros ingredientes e advertências além desses grãos. Esses exemplos mostram por que a descrição resumida não dispensa o rótulo completo.</p>
          <p>Confira a lista e as declarações de alergênicos e glúten na embalagem específica. Não presuma que todo shoyu contém trigo nem que toda versão é isenta: produtos diferentes podem ter formulações e advertências distintas. Quem tem alergia à soja precisa verificar essa questão independentemente da redução de sódio.</p>
          <p>Compare ainda açúcares adicionados e outros ingredientes que alterem o resultado culinário. Molho agridoce ou tarê não deve ser tratado automaticamente como substituto equivalente de shoyu apenas por aparecer na mesma prateleira.</p>

          <h2>Como ajustar o tempero sem somar sal no piloto automático</h2>
          <ol>
            <li>Leia os ingredientes da receita e identifique onde já há fontes de sódio.</li>
            <li>Acrescente o shoyu aos poucos, distribuindo bem no preparo.</li>
            <li>Combine com alho, gengibre, cebolinha ou outros ingredientes adequados à receita.</li>
            <li>Prove no momento seguro do preparo, com carnes e ovos devidamente cozidos, antes de decidir se precisa de mais sal.</li>
          </ol>
          <p>Em um refogado de legumes ou tofu, por exemplo, o molho pode entrar como um dos temperos, sem exigir sal adicional automaticamente. Ervas e aromáticos ajudam a variar o sabor, mas não “neutralizam” o sódio que já foi colocado.</p>
          <p>Se há orientação individual para restringir sódio por uma condição clínica, não use o selo light como autorização de consumo livre. A adequação depende do conjunto da alimentação e deve ser avaliada pelo profissional que acompanha você.</p>

          <h2>Conservação: siga a instrução depois de abrir</h2>
          <p>Observe validade, integridade da embalagem e as condições indicadas pelo fabricante. O prazo da garrafa fechada não deve ser aplicado automaticamente depois da abertura. Confira se há orientação de refrigeração, anote a data e mantenha o bico e a tampa limpos.</p>
          <p>Não devolva à garrafa o molho que ficou em potinhos à mesa nem misture o restante antigo com uma embalagem nova. Escolha um tamanho que consiga utilizar dentro das condições indicadas, considerando o consumo real da casa.</p>
          <p>Leia também: <Link href="/blog/temperos-prontos-naturais-sodio-como-comparar">temperos prontos e sódio</Link> · <Link href="/blog/tofu-como-escolher-temperar-preparar-conservar">como temperar e preparar tofu</Link> · <Link href="/blog/vinagre-alcool-maca-balsamico-como-escolher">diferenças entre vinagres na cozinha</Link>.</p>
          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Planeje refeições com sabor e escolhas conscientes</h2><p>Use o gerador de plano alimentar para criar uma sugestão inicial e organizar refeições e compras. Adapte às suas preferências; para alergias, restrições de sódio ou necessidades clínicas, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional/" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem nutricional</a> · <a href="https://blogsakura.com.br/sakura-light-mais-tempero-menos-sodio/" target="_blank" rel="noopener noreferrer">Sakura — alegação de redução de sódio</a> · <a href="https://www.sakura.com.br/molhos-1l/shoyu-tradicional-1l" target="_blank" rel="noopener noreferrer">Sakura — Shoyu Tradicional</a> · <a href="https://www.sakura.com.br/hotsites/sakura/pdf/sakura_light.pdf" target="_blank" rel="noopener noreferrer">Sakura — ficha técnica pública da versão Light</a>. Consultadas em 19/10/2026. Consulte a embalagem atual para composição, advertências e conservação.</p>
      </footer>
    </main>
  );
}
