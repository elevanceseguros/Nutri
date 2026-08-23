import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Lancheira Infantil Saudável: Como Montar Opções Práticas e Seguras";
const description = "Ideias para montar a lancheira infantil com variedade, praticidade e cuidado com conservação, alergias e risco de engasgo.";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: "https://www.nutry.life/blog/lancheira-infantil-saudavel-pratica-segura" },
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://www.nutry.life/blog/lancheira-infantil-saudavel-pratica-segura",
    publishedTime: "2026-08-23",
  },
};

export default function Post() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-08-23",
    dateModified: "2026-08-23",
    mainEntityOfPage: "https://www.nutry.life/blog/lancheira-infantil-saudavel-pratica-segura",
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
          <p className={styles.postExcerpt}>🍎 Alimentação infantil · 11 min de leitura</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>
            Uma boa lancheira não precisa ser perfeita nem seguir uma fórmula rígida. Ela precisa ser possível para a família, adequada à criança e segura até a hora do recreio.
          </p>
        </header>

        <div className={styles.postContent}>
          <p>
            Entre a pressa da manhã, as preferências da criança e as regras da escola, montar o lanche pode parecer mais complicado do que é. O caminho mais útil é combinar alimentos conhecidos, alguma variedade ao longo da semana e cuidados simples de conservação — sem transformar o recreio em teste de desempenho nutricional.
          </p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div>
              <strong>Quer organizar as refeições da família com mais praticidade?</strong>
              <p>Use o gerador da Nutry.life para criar uma sugestão de plano alimentar e adaptar as ideias à sua rotina.</p>
            </div>
            <Link href="/">Gerar meu plano alimentar</Link>
          </div>

          <h2>Existe uma fórmula para a lancheira saudável?</h2>
          <p>
            Não existe uma combinação obrigatória para todos os dias. Como referência prática, você pode pensar em três funções: um alimento que forneça energia para a rotina, uma fruta ou hortaliça quando for viável e uma fonte de proteína ou gordura que ajude a compor o lanche. Água costuma ser a bebida mais simples.
          </p>
          <p>
            Nem todas as partes precisam aparecer em toda lancheira. A alimentação se avalia pelo conjunto dos dias, e não por um único recreio. Idade, apetite, tempo entre refeições, duração das aulas, atividade física e condições de conservação mudam a escolha.
          </p>

          <h2>Um método simples para montar o lanche</h2>
          <h3>1. Comece por um alimento familiar</h3>
          <p>
            Pão, tapioca, milho, bolo caseiro simples, batata-doce ou outra preparação que faça parte da cultura da família pode ser a base. Familiaridade aumenta a chance de a criança comer, especialmente quando há pouco tempo de recreio.
          </p>
          <h3>2. Acrescente variedade aos poucos</h3>
          <p>
            Frutas fáceis de transportar, como banana, maçã, pera, mexerica ou uvas preparadas de forma segura para a idade, podem alternar durante a semana. Não é necessário enviar várias frutas de uma vez. Para comparar pães pelo rótulo, veja o guia sobre <Link href="/blog/pao-integral-de-verdade-como-ler-rotulo">como identificar pão integral</Link>.
          </p>
          <h3>3. Observe a necessidade de refrigeração</h3>
          <p>
            Queijos, iogurtes, leite, ovos, carnes, sanduíches com recheios perecíveis e frutas já cortadas exigem mais controle de temperatura. Se a escola não oferece geladeira, use bolsa térmica com elemento refrigerante e confirme por quanto tempo o alimento permanecerá fora de refrigeração.
          </p>
          <h3>4. Envie água</h3>
          <p>
            Uma garrafa identificada e higienizada diariamente ajuda a tornar a água acessível. Bebidas açucaradas não são necessárias para hidratar e podem ocupar o lugar de alimentos e água no lanche.
          </p>

          <h2>Ideias de combinações práticas</h2>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr><th>Combinação</th><th>Cuidados</th><th>Como variar</th></tr>
              </thead>
              <tbody>
                <tr><td>Pão com queijo + fruta + água</td><td>Manter o queijo refrigerado</td><td>Alternar o tipo de pão e a fruta</td></tr>
                <tr><td>Tapioca com ovo + água</td><td>Usar bolsa térmica e gelo reutilizável</td><td>Trocar por recheio já aceito pela criança</td></tr>
                <tr><td>Bolo caseiro simples + banana + água</td><td>Evitar recheios e coberturas muito perecíveis</td><td>Variar frutas e ingredientes da massa</td></tr>
                <tr><td>Iogurte natural + fruta + aveia separada</td><td>Conservar frio e usar pote bem vedado</td><td>Trocar a fruta ou o cereal</td></tr>
                <tr><td>Milho cozido + fruta + água</td><td>Resfriar antes de embalar e observar o tempo</td><td>Alternar com mandioca ou batata</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            As quantidades devem acompanhar a fome e a idade da criança. Começar com porções menores e ajustar pelo que volta na lancheira costuma ser mais informativo do que impor uma porção padrão.
          </p>

          <h2>Como manter o lanche seguro até o recreio</h2>
          <p>
            A Anvisa orienta que alimentos frios sejam mantidos abaixo de 5 °C e os quentes acima de 60 °C. Na rotina escolar, isso significa não confiar apenas na aparência ou no cheiro: alimentos perecíveis precisam de refrigeração contínua ou de uma bolsa térmica eficiente com gelo reutilizável.
          </p>
          <ul>
            <li>lave as mãos, utensílios, potes e superfícies antes do preparo;</li>
            <li>higienize frutas e hortaliças conforme a orientação sanitária e seque antes de guardar;</li>
            <li>esfrie preparações antes de fechar o recipiente e colocá-las na bolsa;</li>
            <li>use potes íntegros, fáceis de abrir e sem vazamentos;</li>
            <li>mantenha a bolsa longe do sol e confirme se a escola refrigera os lanches;</li>
            <li>quando houver dúvida sobre tempo ou temperatura de uma sobra perecível, não a reaproveite.</li>
          </ul>
          <p>
            Para aperfeiçoar essa etapa, consulte também o guia da Nutry.life sobre <Link href="/blog/como-higienizar-guardar-folhas">higienização e armazenamento de folhas</Link>.
          </p>

          <h2>Alergias e risco de engasgo exigem atenção individual</h2>
          <p>
            Alergia alimentar não é preferência. A família deve seguir o plano de cuidado da criança, conferir rótulos, comunicar a escola e considerar risco de contaminação cruzada. Não retire grupos alimentares preventivamente sem orientação profissional.
          </p>
          <p>
            Formato e textura precisam ser adequados ao desenvolvimento. Uvas inteiras, castanhas inteiras, pipoca, pedaços duros e outros alimentos podem oferecer risco de engasgo para crianças pequenas. As adaptações devem seguir a idade e a orientação do pediatra ou nutricionista que acompanha a criança. Regras da escola também prevalecem, inclusive restrições coletivas a alimentos alergênicos.
          </p>

          <h2>Como reduzir o desperdício sem pressionar a criança</h2>
          <p>
            Observe o que retorna, converse sem bronca e investigue razões práticas: pote difícil, fruta escurecida, pouco tempo, porção grande ou alimento desconhecido. Convidar a criança a escolher entre duas opções adequadas e ajudar no preparo costuma aumentar participação.
          </p>
          <p>
            Evite recompensar o consumo ou classificar alimentos como “bons” e “ruins”. O objetivo é construir autonomia e familiaridade. Um alimento novo pode aparecer ao lado de outro já aceito, em pequena quantidade e sem obrigação de terminar.
          </p>

          <h2>Planejamento semanal em 15 minutos</h2>
          <ol>
            <li>confira horários, dias de atividade física e estrutura de refrigeração;</li>
            <li>escolha duas bases, duas frutas e duas opções de complemento;</li>
            <li>prepare ou porcione o que puder com antecedência segura;</li>
            <li>deixe potes, garrafa e gelo reutilizável prontos na noite anterior;</li>
            <li>revise o retorno da lancheira e ajuste a semana seguinte.</li>
          </ol>
          <p>
            Frutas secas podem ser úteis em algumas ocasiões, mas são concentradas e variam muito entre produtos. Veja <Link href="/blog/frutas-secas-rotulo-porcao-como-escolher">como ler o rótulo e escolher a porção</Link>.
          </p>

          <h2>Resumo: o que realmente importa</h2>
          <p>
            Uma lancheira prática combina alimentos que a criança consegue comer, variedade construída ao longo do tempo, água e segurança de transporte. Ela não precisa ser fotogênica, cara ou diferente todos os dias. Precisa funcionar na rotina real, respeitar o desenvolvimento e permitir ajustes.
          </p>

          <section className={styles.premiumBanner} data-cta="final">
            <div>
              <p>PLANEJAMENTO PRÁTICO</p>
              <h2>Monte uma rotina alimentar possível para sua família</h2>
              <p>Use o gerador gratuito da Nutry.life como ponto de partida e adapte as sugestões às preferências, à cultura e às necessidades da sua casa.</p>
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
          Este conteúdo é educativo e não substitui avaliação individual. Alergias, condições de saúde, restrições alimentares, dificuldades de alimentação e recomendações para crianças pequenas devem ser acompanhadas por pediatra ou nutricionista.
        </p>
        <p>
          Fontes: <a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2021/volta-as-aulas-presenciais-com-lancheira-saudavel" target="_blank" rel="noopener noreferrer">Ministério da Saúde — lancheira saudável</a> e <a href="https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/educacao-e-pesquisa/educacao-em-vigilancia-sanitaria-para-a-sociedade/vigilancia-sanitaria-guia-didatico.pdf/@@download/file" target="_blank" rel="noopener noreferrer">Anvisa — guia didático de segurança dos alimentos</a>.
        </p>
      </footer>
    </main>
  );
}
