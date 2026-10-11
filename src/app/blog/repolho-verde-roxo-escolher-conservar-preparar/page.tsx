import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Repolho Verde ou Roxo: Como Escolher, Conservar, Cortar e Preparar";
const description = "Compare repolho verde e roxo e veja como escolher cabeças firmes, higienizar folha por folha, conservar e preparar sem desperdício.";
const url = "https://www.nutry.life/blog/repolho-verde-roxo-escolher-conservar-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-11", modifiedTime: "2026-10-11" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-11", dateModified: "2026-10-11", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🥬 Cozinha prática · 6 min de leitura · 11 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Repolho verde e roxo podem entrar em saladas, refogados, sopas, recheios e acompanhamentos. A cor muda a aparência e algumas características da hortaliça, mas não cria uma versão universalmente melhor: frescor, textura, preço e uso culinário costumam pesar mais na escolha.</p>
          <p>Como uma cabeça rende várias porções, cortar e armazenar bem ajuda a manter a qualidade e reduzir descarte. As orientações abaixo são culinárias e de segurança alimentar, não prescrição individual.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Transforme ingredientes simples em refeições variadas</strong>
            <p>Gere uma sugestão de plano alimentar e adapte combinações, preparos e porções à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Verde, roxo ou crespo: o que muda?</h2>
          <div style={{ overflowX: "auto" }}><table>
            <thead><tr><th>Tipo</th><th>Características comuns</th><th>Usos práticos</th></tr></thead>
            <tbody>
              <tr><td>Verde liso</td><td>Sabor suave e folhas firmes</td><td>Saladas, refogados, sopas e recheios</td></tr>
              <tr><td>Roxo</td><td>Cor intensa e textura crocante</td><td>Saladas, acompanhamentos e preparos agridoces</td></tr>
              <tr><td>Verde crespo</td><td>Folhas enrugadas e mais soltas</td><td>Refogados, sopas e preparos enrolados</td></tr>
            </tbody>
          </table></div>
          <p>A Embrapa descreve o repolho como uma cabeça formada pela sobreposição de folhas e informa que ele pode apresentar folhas lisas verdes ou roxas e folhas crespas verdes. A variedade, o ponto de colheita e a conservação alteram firmeza, sabor e rendimento.</p>

          <h2>Como escolher uma cabeça fresca</h2>
          <p>Prefira cabeças firmes, compactas, pesadas para o tamanho e sem rachaduras. As folhas devem estar livres de manchas escuras, perfurações extensas, limo e odor desagradável. Manuseie com cuidado: áreas machucadas escurecem e deterioram mais rapidamente.</p>
          <ul>
            <li>Compare o peso entre cabeças de tamanho semelhante.</li>
            <li>Folhas externas podem ter pequenas marcas sem comprometer todo o vegetal.</li>
            <li>Evite cabeças moles, com vazamento ou podridão.</li>
            <li>Quando já estiver picado e embalado, confira refrigeração, validade e integridade do pacote.</li>
          </ul>

          <h2>Como higienizar folha por folha</h2>
          <p>Retire folhas externas danificadas, separe as folhas que serão consumidas e lave uma por uma em água corrente para remover terra e sujeira visível. Para consumo cru, a Anvisa orienta usar apenas sanitizante regularizado e indicado para alimentos, seguindo a diluição e o tempo de contato do fabricante, e depois enxaguar.</p>
          <p>Vinagre não substitui sanitizante regularizado. Lave mãos, faca, tábua e bancada e mantenha o vegetal pronto para consumo separado de carnes cruas e utensílios contaminados.</p>

          <h2>Lavar antes ou depois de cortar?</h2>
          <p>Para uma higienização mais completa, separe e lave as folhas antes de fatiar. Cortar primeiro aumenta a área exposta e pode espalhar sujeira da superfície para as partes internas por meio da faca e da tábua.</p>
          <p>Se usar apenas parte da cabeça em preparo cozido, retire a quantidade necessária com utensílio limpo e guarde o restante protegido. Higienize as folhas destinadas ao consumo antes do preparo.</p>

          <h2>Como cortar fino sem machucar as mãos</h2>
          <p>Apoie a cabeça em superfície estável, corte em quartos e retire a parte mais rígida do talo central quando ela não for desejada. Coloque a face plana sobre a tábua e fatie com faca afiada, mantendo os dedos recolhidos.</p>
          <p>Fatiador pode produzir tiras uniformes, mas exige protetor de mão. Para porções pequenas, descascar folhas inteiras e empilhá-las antes de cortar dá mais controle e preserva o restante da cabeça.</p>

          <h2>Como conservar inteiro e depois de cortado</h2>
          <p>A Embrapa informa que o repolho dura menos de uma semana em temperatura ambiente e pode permanecer por várias semanas sob refrigeração, dentro de saco plástico. O prazo real varia com frescor inicial, temperatura, umidade e danos.</p>
          <p>Guarde a cabeça inteira, seca e protegida na geladeira. Depois de cortado, cubra bem a face exposta ou use recipiente fechado. Repolho picado deve ficar refrigerado e, segundo a Embrapa, pode ser mantido por até cinco dias. Observe sempre aparência, cheiro e textura.</p>

          <h2>Por que as bordas escurecem?</h2>
          <p>O corte rompe as células e acelera perda de água e alterações de cor. Uma fina camada ressecada na face cortada pode ser retirada antes do uso quando o restante está firme, sem limo, mofo ou odor alterado.</p>
          <p>Descarte o produto com mela, cheiro desagradável, podridão, mofo ou escurecimento extenso acompanhado de perda de textura. Não tente aproveitar folhas de uma embalagem picada que esteja viscosa ou fermentando.</p>

          <h2>Como evitar excesso de água na salada</h2>
          <p>Depois da higienização, seque as folhas antes de fatiar e tempere perto da hora de servir. Sal e ingredientes ácidos puxam água das folhas ao longo do tempo, deixando a salada mais úmida.</p>
          <p>Para salada tipo coleslaw, mantenha o molho separado quando o preparo for consumido mais tarde. Se salgar o repolho para alterar a textura, considere o sódio total da receita.</p>

          <h2>Como cozinhar sem perder toda a crocância</h2>
          <p>Corte em tiras uniformes e use calor alto por pouco tempo no refogado. Em sopas, acrescente mais perto do final quando quiser folhas firmes. A Embrapa recomenda cozinhar apenas até amaciar, pois o cozimento prolongado altera cor, sabor e textura.</p>
          <p>No repolho roxo, ingredientes ácidos como limão ou vinagre podem ajudar a manter tons mais avermelhados na receita. Isso é uma escolha culinária, não uma etapa obrigatória.</p>

          <h2>Congelar vale a pena?</h2>
          <p>O congelamento amacia as folhas, então funciona melhor para sopas, refogados, recheios e outros preparos cozidos do que para saladas crocantes. A Embrapa orienta retirar folhas externas danificadas, cortar em quartos ou tiras, embalar retirando o ar e congelar.</p>
          <p>Porcione de acordo com o uso e identifique a embalagem. Use diretamente no preparo quente ou descongele sob refrigeração. Não espere a mesma textura do repolho fresco.</p>

          <h2>Ideias para aproveitar a cabeça inteira</h2>
          <ul>
            <li>Folhas finas em salada com cenoura e molho servido à parte.</li>
            <li>Tiras rápidas na frigideira com cebola e ervas.</li>
            <li>Porções em sopas, arroz, macarrão ou recheios.</li>
            <li>Folhas maiores cozidas e usadas para envolver recheios.</li>
            <li>Talo central bem picado em preparos cozidos, quando estiver firme e em bom estado.</li>
          </ul>
          <p>Fermentados como chucrute exigem proporção, higiene, tempo e controle adequados. Não trate qualquer mistura deixada fora da geladeira como conserva segura; siga receita testada de fonte confiável.</p>

          <p>Leia também: <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link> · <Link href="/blog/cenoura-como-escolher-conservar-congelar-preparar">como conservar e preparar cenoura</Link> · <Link href="/blog/legumes-vapor-agua-microondas-nutrientes">como escolher o método de cozimento</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte refeições práticas com os alimentos disponíveis</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/repolho" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — repolho</a> · <a href="https://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/1126124?locale=pt_BR" target="_blank" rel="noopener noreferrer">Embrapa — como comprar, conservar e consumir repolho</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a>. Consultadas em 11/10/2026.</p>
      </footer>
    </main>
  );
}
