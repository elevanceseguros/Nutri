import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Cogumelos Frescos, Secos ou em Conserva: Como Comparar e Preparar";
const description = "Compare textura, ingredientes, sódio, rendimento, limpeza, hidratação, preparo e conservação de cogumelos frescos, secos e em conserva.";
const url = "https://www.nutry.life/blog/cogumelos-frescos-secos-conserva-comparar-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-09-27", modifiedTime: "2026-09-27" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-09-27",
  dateModified: "2026-09-27",
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
          <p className={styles.postExcerpt}>🍄 Escolhas práticas · 6 min de leitura · 27 de setembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>

        <div className={styles.postContent}>
          <p>
            Cogumelos frescos, desidratados e em conserva podem partir de espécies e processos diferentes. Eles não são versões perfeitamente intercambiáveis: textura, intensidade de sabor, quantidade de água, ingredientes adicionados, conservação e rendimento mudam. A escolha mais útil depende da receita, do tempo disponível e do que está escrito no rótulo.
          </p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div>
              <strong>Transforme ingredientes disponíveis em refeições possíveis</strong>
              <p>Gere uma sugestão de plano alimentar e adapte combinações, preparos e horários à sua rotina.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>

          <h2>Fresco, seco ou em conserva: o que realmente muda?</h2>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead><tr><th>Forma</th><th>Características</th><th>Usos possíveis</th></tr></thead>
              <tbody>
                <tr><td>Fresco</td><td>Mais água, textura delicada e validade menor</td><td>Refogados, grelhados, assados, omeletes e molhos</td></tr>
                <tr><td>Seco</td><td>Sabor concentrado e necessidade de hidratação em muitas receitas</td><td>Risotos, caldos, molhos e ensopados</td></tr>
                <tr><td>Em conserva</td><td>Pronto para uso, com líquido de cobertura e ingredientes variáveis</td><td>Molhos, pizzas, recheios e preparos rápidos</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            A espécie também importa. Champignon-de-paris, shiitake, shimeji e portobello têm formatos e texturas diferentes. Não use a categoria “cogumelo” como garantia de que qualquer variedade reagirá igual ao calor.
          </p>

          <h2>Como escolher cogumelos frescos</h2>
          <ul>
            <li>Procure embalagem íntegra, dentro da validade e conservada na temperatura indicada.</li>
            <li>Observe firmeza e aparência compatíveis com a espécie, sem excesso de líquido acumulado.</li>
            <li>Evite unidades com odor desagradável, superfície muito viscosa ou deterioração visível.</li>
            <li>Compre uma quantidade que caiba no plano de uso; o preço por bandeja pode esconder desperdício.</li>
          </ul>
          <p>
            Manchas leves ou variações de cor podem ocorrer naturalmente, mas sinais de deterioração não devem ser corrigidos retirando apenas uma parte. Se o alimento parece impróprio, descarte sem provar.
          </p>

          <h2>Precisa lavar?</h2>
          <p>
            Retire a sujeira visível com papel limpo, escova culinária macia ou lavagem rápida em água potável, conforme a condição do produto e a orientação da embalagem. Evite deixar cogumelos frescos de molho apenas para limpar: eles podem absorver água e dourar menos.
          </p>
          <p>
            Higienização não transforma um produto deteriorado em seguro. Lave as mãos, use utensílios limpos e mantenha alimentos crus de origem animal separados, seguindo as boas práticas da Anvisa.
          </p>

          <h2>Como fazer o cogumelo dourar em vez de cozinhar na própria água</h2>
          <ol>
            <li>Seque a superfície depois da limpeza.</li>
            <li>Corte em tamanhos semelhantes para cozinhar por igual.</li>
            <li>Aqueça a frigideira antes de adicionar os cogumelos.</li>
            <li>Evite amontoar: excesso de produto reduz a temperatura e prende vapor.</li>
            <li>Mexa quando houver contato suficiente para formar cor.</li>
            <li>Adicione molhos líquidos no momento adequado à receita.</li>
          </ol>
          <p>
            Não existe um único tempo correto. Espécie, espessura do corte, quantidade e equipamento mudam o resultado. Cozinhe até a textura desejada e siga instruções específicas do fabricante quando houver.
          </p>

          <h2>Como usar cogumelos secos</h2>
          <p>
            Leia a embalagem: alguns produtos pedem hidratação, outros podem entrar diretamente em preparos longos. Quando for hidratar, use recipiente e água potável, respeite o tempo indicado e escorra. A água pode concentrar aroma e partículas; filtre antes de incorporá-la a uma receita e descarte se houver orientação contrária no rótulo.
          </p>
          <p>
            Compare custo por rendimento, não apenas por peso seco. Uma pequena quantidade pode render bastante depois de hidratada, mas isso depende da espécie e do corte. Mantenha o pacote fechado, seco e protegido conforme o fabricante.
          </p>

          <h2>Como comparar cogumelos em conserva</h2>
          <ul>
            <li><strong>Denominação e espécie:</strong> confirme o que existe no pote ou na lata.</li>
            <li><strong>Lista de ingredientes:</strong> observe água, sal, acidulantes e outros componentes.</li>
            <li><strong>Sódio:</strong> compare produtos na mesma quantidade indicada no rótulo.</li>
            <li><strong>Peso drenado:</strong> ajuda a estimar quanto cogumelo será realmente usado.</li>
            <li><strong>Integridade:</strong> rejeite embalagem estufada, vazando, muito amassada na região de vedação ou com tampa comprometida.</li>
            <li><strong>Depois de aberto:</strong> siga refrigeração, recipiente e prazo informados pelo fabricante.</li>
          </ul>
          <p>
            Escorrer ou enxaguar pode mudar sabor e retirar parte do líquido superficial, mas não autoriza recalcular nutrientes por conta própria. Para uma comparação consistente, use os valores declarados no rótulo e considere a porção consumida.
          </p>

          <h2>Cogumelo é substituto automático de carne?</h2>
          <p>
            Não. Cogumelos trazem sabor umami e podem dar volume a recheios e molhos, mas sua composição não é igual à de carnes, ovos, leguminosas ou tofu. Em refeições vegetarianas, combine fontes de proteína e outros grupos conforme preferências e necessidades, sem atribuir ao cogumelo uma função que ele sozinho não cumpre.
          </p>

          <h2>Ideias práticas sem receita rígida</h2>
          <ul>
            <li>Refogue cogumelos frescos com cebola e use sobre arroz, massa ou polenta.</li>
            <li>Combine cogumelos secos hidratados com feijão, lentilha ou molho de tomate.</li>
            <li>Use conserva escorrida em omelete, torta ou recheio quando a praticidade for prioridade.</li>
            <li>Misture espécies e cortes para variar textura, ajustando o tempo de cada uma.</li>
            <li>Acrescente ervas, alho, limão ou especiarias conforme o restante da refeição.</li>
          </ul>

          <h2>Conservação e sobras</h2>
          <p>
            Guarde cogumelos frescos sob refrigeração na embalagem ou condição indicada pelo produtor e evite lavar muito antes do uso, caso isso aumente a umidade. Depois de preparar, refrigere as sobras prontamente em recipiente limpo e fechado. Não deixe o alimento por longos períodos à temperatura ambiente.
          </p>
          <p>
            Para secos e conservas, as instruções do rótulo prevalecem. Identifique a data de abertura e não adote um prazo universal quando o fabricante fornece orientação específica.
          </p>

          <h2>Checklist antes de comprar</h2>
          <ul>
            <li>A forma escolhida combina com a receita?</li>
            <li>O peso drenado ou rendimento foi considerado?</li>
            <li>Ingredientes, sódio e porção foram comparados?</li>
            <li>A embalagem está íntegra e na temperatura correta?</li>
            <li>Há tempo para usar o fresco antes de deteriorar?</li>
            <li>O produto seco tem instruções claras de hidratação?</li>
          </ul>

          <p>
            Leia também: <Link href="/blog/legumes-congelados-nutrientes-como-preparar">como usar legumes congelados</Link> · <Link href="/blog/tofu-como-escolher-temperar-preparar-conservar">como escolher e preparar tofu</Link>.
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
          Fontes: <a href="https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/guias-alimentares" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guias Alimentares</a> · <a href="https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/alimentos/manuais-guias-e-orientacoes/cartilha-boas-praticas-para-servicos-de-alimentacao.pdf" target="_blank" rel="noopener noreferrer">Anvisa — boas práticas para serviços de alimentação</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional" target="_blank" rel="noopener noreferrer">Anvisa — rotulagem nutricional</a>. Consultadas em 27/09/2026.
        </p>
      </footer>
    </main>
  );
}
