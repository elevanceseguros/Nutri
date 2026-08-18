import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Molho de Tomate, Passata ou Extrato: Diferenças e Como Escolher | Nutry.life",
  description: "Compare concentração, ingredientes, sódio, açúcar, textura e usos de molho de tomate, passata e extrato.",
  keywords: "molho de tomate ou passata, passata de tomate, extrato de tomate, como escolher molho de tomate, rótulo molho de tomate",
  openGraph: {
    title: "Molho de Tomate, Passata ou Extrato: Diferenças e Como Escolher | Nutry.life",
    description: "Um guia prático para comparar produtos pelo rótulo e usar cada textura na cozinha.",
    url: "https://nutry.life/blog/molho-tomate-passata-extrato-como-escolher"
  },
};

export default function Post() {
  return (
    <>
      <header className={styles.header}><Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link></header>
      <main className={styles.postContainer}>
        <article className={styles.post}>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
          <div className={styles.postMeta}>
            <span className={styles.postCategory}>Escolhas Alimentares</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>18 de agosto de 2026</span>
          </div>
          <h1 className={styles.postTitle}>Molho de Tomate, Passata ou Extrato: Diferenças e Como Escolher</h1>
          <p className={styles.postExcerpt}>O nome na frente da embalagem ajuda, mas concentração, lista de ingredientes e porção usada explicam melhor como cada produto funciona na receita.</p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div><strong>Quer transformar ingredientes simples em refeições variadas?</strong><span>Crie uma sugestão de plano alimentar adaptável às preferências, compras e rotina da casa.</span></div>
            <Link href="/" className={styles.primaryButton}>Gerar meu plano</Link>
          </div>

          <div className={styles.postContent}>
            <p>Passata, extrato e molho pronto partem do tomate, mas não são intercambiáveis em todas as receitas. Eles diferem principalmente em concentração, textura, temperos e quantidade normalmente utilizada.</p>
            <p>Também não existe uma resposta única para “qual é mais saudável”. Produtos da mesma categoria podem ter listas de ingredientes bem diferentes. A comparação mais útil combina rótulo, uso culinário, preço por quantidade realmente utilizada e o restante da refeição.</p>

            <h2>Qual é a diferença entre molho, passata e extrato?</h2>
            <div style={{ overflowX: "auto" }}>
              <table>
                <thead><tr><th>Produto</th><th>Característica comum</th><th>Uso prático</th></tr></thead>
                <tbody>
                  <tr><td>Passata</td><td>Tomate peneirado, textura uniforme e concentração intermediária</td><td>Base para massas, sopas, ensopados e molhos ajustados em casa</td></tr>
                  <tr><td>Extrato</td><td>Tomate mais concentrado, sabor e cor intensos</td><td>Pequenas quantidades para dar corpo e concentração</td></tr>
                  <tr><td>Molho pronto</td><td>Produto formulado para uso direto, geralmente com temperos e outros ingredientes</td><td>Praticidade quando há pouco tempo para cozinhar</td></tr>
                  <tr><td>Tomate pelado ou polpa</td><td>Pedaços ou polpa com processamento relativamente simples, conforme o rótulo</td><td>Receitas em que textura e cocção serão controladas em casa</td></tr>
                </tbody>
              </table>
            </div>
            <p>Essas descrições são gerais. A composição real é a declarada na embalagem; por isso, dois molhos prontos ou duas passatas podem não ser equivalentes.</p>

            <h2>Comece pela lista de ingredientes</h2>
            <p>Os ingredientes aparecem em ordem decrescente de quantidade. Uma lista curta pode trazer tomate e sal; outras versões incluem óleo, açúcar, amidos, aromas, realçadores, conservadores ou vários temperos. Isso não transforma automaticamente o produto em “proibido”, mas muda a comparação.</p>
            <p>O Ministério da Saúde usa o extrato de tomate com sal como exemplo de alimento processado. Já formulações com substâncias e aditivos típicos de produtos ultraprocessados podem receber outra classificação. Portanto, o nome “molho de tomate” sozinho não determina o grau de processamento.</p>

            <h2>Molho de tomate tem açúcar?</h2>
            <p>Alguns produtos contêm açúcar adicionado e outros não. Confira a lista de ingredientes e a declaração nutricional; não conclua apenas pelo sabor. Parte dos açúcares totais também pode vir naturalmente do tomate.</p>
            <p>Na comparação entre marcas, observe se açúcar, xaropes ou outros ingredientes adoçantes aparecem na lista. A decisão depende da frequência, da quantidade utilizada e do conjunto da alimentação, sem necessidade de tratar uma colher eventual como problema isolado.</p>

            <h2>Como comparar o sódio</h2>
            <p>Compare produtos da mesma categoria usando a mesma referência — preferencialmente a coluna por 100 g da tabela nutricional — e depois considere quanto será usado na receita. Extrato é mais concentrado e costuma entrar em menor quantidade; comparar apenas uma porção declarada pode distorcer a escolha.</p>
            <p>Se a receita ainda receber sal, queijo, embutidos ou caldo pronto, o sódio total não depende somente do tomate industrializado. Ajustar os outros ingredientes pode ser mais útil do que procurar um único rótulo “perfeito”.</p>

            <h2>Passata é sempre melhor que molho pronto?</h2>
            <p>Não. Uma passata simples oferece controle sobre temperos e textura, mas exige preparo. Um molho pronto pode ser conveniente e ter composição compatível com a rotina. O melhor produto é aquele cuja lista de ingredientes, sabor, preço e praticidade fazem sentido para a receita.</p>
            <p>Também há molhos prontos com composição simples e passatas com sal ou outros ingredientes. Compare a embalagem específica, seguindo o mesmo raciocínio do guia sobre <Link href="/blog/pao-integral-de-verdade-como-ler-rotulo">como ler o rótulo do pão integral</Link>.</p>

            <h2>Quando usar cada um</h2>
            <ul>
              <li><strong>Passata:</strong> quando você quer uma base lisa e pretende controlar alho, cebola, ervas, óleo e sal.</li>
              <li><strong>Extrato:</strong> quando precisa concentrar sabor e cor sem adicionar muito líquido.</li>
              <li><strong>Molho pronto:</strong> quando a prioridade é reduzir etapas e servir rapidamente.</li>
              <li><strong>Tomate pelado:</strong> quando deseja pedaços ou uma textura mais rústica após o cozimento.</li>
            </ul>
            <p>Uma possibilidade econômica é combinar pequena quantidade de extrato com água, tomate, legumes ou temperos. Outra é ajustar um molho pronto com ingredientes disponíveis em casa, sem obrigação de preparar tudo do zero.</p>

            <h2>O óleo do molho muda a escolha?</h2>
            <p>Óleo pode contribuir para sabor e textura. Confira o tipo e a posição na lista de ingredientes, sobretudo se o produto será usado em grande quantidade. Isso é diferente de decidir entre gorduras para outros usos; para esse tema, veja a comparação de <Link href="/blog/manteiga-vs-margarina-como-comparar">manteiga e margarina</Link>.</p>

            <h2>Como guardar depois de aberto</h2>
            <ul>
              <li>Siga as orientações de refrigeração e prazo do fabricante.</li>
              <li>Use utensílio limpo para retirar o produto.</li>
              <li>Mantenha a embalagem bem fechada ou transfira conforme a orientação do rótulo.</li>
              <li>Identifique a data de abertura quando for difícil lembrar.</li>
              <li>Descarte diante de mofo, embalagem estufada, vazamento ou alteração evidente.</li>
            </ul>
            <p>Não aplique um prazo único a todas as embalagens: formulação, processo e recipiente variam. Para organizar compras sem acumular produtos abertos, veja também <Link href="/blog/como-organizar-feira-semanal">como organizar a feira semanal</Link>.</p>

            <h2>Checklist de compra em 30 segundos</h2>
            <ol>
              <li>Defina se precisa de base, concentração ou praticidade imediata.</li>
              <li>Leia os ingredientes, não apenas as alegações frontais.</li>
              <li>Compare sódio e outros nutrientes na mesma base.</li>
              <li>Considere a quantidade que realmente entrará na receita.</li>
              <li>Verifique validade, integridade da embalagem e instruções após abertura.</li>
              <li>Escolha o sabor e o preço que favoreçam o uso, sem desperdício.</li>
            </ol>

            <h2>Conclusão</h2>
            <p>Passata oferece uma base uniforme, extrato entrega concentração e molho pronto reduz etapas. Nenhum nome garante sozinho a melhor escolha. A lista de ingredientes, a tabela nutricional, a quantidade usada e o papel do produto na receita tornam a comparação mais honesta.</p>

            <h2>Fontes consultadas</h2>
            <ul>
              <li><a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/glossario/processamento-dos-alimentos" target="_blank" rel="noopener noreferrer">Ministério da Saúde — processamento dos alimentos</a>.</li>
              <li><a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank" rel="noopener noreferrer">Guia Alimentar para a População Brasileira</a>.</li>
              <li><a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem nutricional</a>.</li>
            </ul>
          </div>

          <section className={styles.premiumBanner} data-cta="final">
            <div><span className={styles.premiumBadge}>Nutry.life</span><h2>Leve as escolhas do rótulo para refeições possíveis</h2><p>Use o gerador para criar uma sugestão de plano alimentar adaptável aos ingredientes e à rotina.</p></div>
            <Link href="/" className={styles.primaryButton}>Criar meu plano alimentar</Link>
          </section>

          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </article>
      </main>

      <footer className={styles.footer}><p><strong>Aviso:</strong> este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades alimentares variam conforme saúde, preferências, cultura, rotina e objetivos. Pessoas com condições específicas ou restrição de nutrientes devem seguir orientação profissional individualizada.</p></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"Molho de Tomate, Passata ou Extrato: Diferenças e Como Escolher",
        description:"Guia prático para comparar molho de tomate, passata e extrato pelo rótulo e pelo uso culinário.",
        datePublished:"2026-08-18",dateModified:"2026-08-18",
        author:{"@type":"Organization",name:"Nutry.life"},
        publisher:{"@type":"Organization",name:"Nutry.life",url:"https://nutry.life"},
        mainEntityOfPage:"https://nutry.life/blog/molho-tomate-passata-extrato-como-escolher"
      }) }} />
    </>
  );
}
