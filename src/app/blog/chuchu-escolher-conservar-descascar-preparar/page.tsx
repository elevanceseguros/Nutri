import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Chuchu: Como Escolher, Conservar, Descascar e Preparar";
const description = "Aprenda a escolher chuchus novos, conservar sem murchar, lidar com a seiva ao descascar e preparar sem excesso de água.";
const url = "https://www.nutry.life/blog/chuchu-escolher-conservar-descascar-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-12", modifiedTime: "2026-10-12" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-12", dateModified: "2026-10-12", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🥒 Cozinha prática · 6 min de leitura · 12 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Chuchu é um fruto de sabor suave que absorve temperos e pode entrar em refogados, sopas, cremes, saladas cozidas e recheios. O resultado depende mais do ponto do fruto, do corte e do tempo de cocção do que de uma receita complicada.</p>
          <p>Como ele se machuca e escurece com facilidade, escolher e armazenar bem reduz desperdício. As orientações abaixo são culinárias e de segurança alimentar, não diagnóstico nem prescrição individual.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Transforme ingredientes simples em refeições variadas</strong>
            <p>Gere uma sugestão de plano alimentar e adapte combinações, preparos e porções à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Como escolher chuchu novo</h2>
          <p>A Embrapa orienta observar brilho e firmeza. Frutos mais novos tendem a ter casca brilhante e a ponta inferior fechada. Casca opaca, amarelada, muito murcha ou com a extremidade começando a abrir indica fruto mais passado.</p>
          <ul>
            <li>Prefira frutos firmes, sem cortes, rachaduras, limo ou áreas moles.</li>
            <li>Manuseie com cuidado: impactos deixam marcas escuras rapidamente.</li>
            <li>Espinhos e tonalidades diferentes podem fazer parte da variedade.</li>
            <li>Se estiver descascado e embalado, confira refrigeração, validade e integridade do pacote.</li>
          </ul>

          <h2>Pequeno ou grande: qual usar?</h2>
          <div style={{ overflowX: "auto" }}><table>
            <thead><tr><th>Estado</th><th>Características comuns</th><th>Uso prático</th></tr></thead>
            <tbody>
              <tr><td>Menor e novo</td><td>Casca brilhante, polpa macia e miolo discreto</td><td>Refogados rápidos e saladas cozidas</td></tr>
              <tr><td>Maior e firme</td><td>Mais rendimento e sabor suave</td><td>Sopas, cremes, assados e recheios</td></tr>
              <tr><td>Mais maduro</td><td>Casca opaca, miolo maior e polpa mais fibrosa</td><td>Cremes, suflês e preparos triturados</td></tr>
            </tbody>
          </table></div>
          <p>Não existe um tamanho universalmente melhor. Escolha conforme o preparo e descarte apenas o que estiver deteriorado, não um fruto inteiro por pequenas marcas superficiais.</p>

          <h2>Como higienizar antes de cortar</h2>
          <p>Lave o fruto inteiro em água corrente, friccionando a superfície para retirar sujeira visível. A Anvisa orienta que frutas e verduras destinadas ao consumo sejam higienizadas com produto regularizado e indicado para alimentos, respeitando diluição e tempo de contato do fabricante.</p>
          <p>Higienizar antes de descascar evita levar sujeira da casca para a polpa pela faca e pelas mãos. Use tábua, faca e bancada limpas e mantenha o vegetal separado de carnes cruas.</p>

          <h2>Precisa descascar e retirar o miolo?</h2>
          <p>Chuchus bem novos podem ser preparados com casca e miolo, segundo a Embrapa. Em frutos maiores, a casca pode estar mais firme e o miolo mais desenvolvido; removê-los passa a ser uma escolha de textura.</p>
          <p>Corte ao meio no sentido do comprimento, apoie a face plana na tábua e retire o miolo apenas se ele estiver duro ou fibroso. A semente macia de um fruto novo é comestível e pode permanecer no preparo.</p>

          <h2>Como lidar com a seiva que gruda nas mãos</h2>
          <p>Ao cortar ou descascar, o chuchu libera uma seiva pegajosa. A Embrapa sugere realizar essa etapa sob água corrente. Outra opção prática é usar luvas culinárias limpas e lavar faca e tábua logo depois.</p>
          <p>Não é necessário esfregar produtos agressivos na pele nem deixar o alimento de molho apenas por causa da seiva. Se houver irritação persistente nas mãos, interrompa o contato e procure orientação profissional.</p>

          <h2>Como conservar inteiro e já cortado</h2>
          <p>De acordo com a Embrapa, o chuchu pode permanecer de três a cinco dias em temperatura ambiente antes de começar a murchar. Na parte inferior da geladeira, protegido em saco plástico, o prazo informado é de seis a oito dias.</p>
          <p>Depois de descascado e picado, mantenha em recipiente fechado ou saco próprio para alimentos, sob refrigeração, por até três dias. Esses prazos são referências; frescor inicial, temperatura, danos e higiene alteram a duração real.</p>

          <h2>Quando descartar</h2>
          <p>Pequenas marcas escuras causadas por atrito podem ser aparadas se a polpa continuar firme e sem alteração de cheiro. Descarte quando houver limo, mofo, odor desagradável, vazamento, podridão ou perda extensa de firmeza.</p>
          <p>Produto picado que ficou fora de refrigeração por tempo prolongado ou apresenta líquido turvo e cheiro alterado não deve ser provado para decidir se ainda está bom.</p>

          <h2>Como preparar sem ficar aguado</h2>
          <p>Corte pedaços de tamanho parecido e use panela ampla. No refogado, aqueça a panela, cozinhe sem excesso de água e mexa apenas o necessário. Sal no início favorece a liberação de líquido; isso pode ajudar em sopas, mas atrapalhar quando a intenção é dourar.</p>
          <p>Para manter pedaços firmes, cozinhe apenas até alcançar a textura desejada. Em creme, prolongue um pouco a cocção e triture. Assar em camada única também concentra sabor e reduz a sensação aquosa.</p>

          <h2>Precisa cozinhar antes de usar em salada?</h2>
          <p>A publicação da Embrapa recomenda o consumo cozido. Para salada fria, cozinhe em água, vapor ou micro-ondas até ficar macio, resfrie rapidamente e mantenha refrigerado até servir.</p>
          <p>Tempere perto do consumo quando quiser preservar melhor a textura. Molhos ácidos, ervas, cebola, pimenta e azeite acrescentam contraste a um vegetal de sabor suave.</p>

          <h2>Congelar vale a pena?</h2>
          <p>O congelamento muda a estrutura e deixa a polpa mais macia. Por isso, funciona melhor para sopas, cremes, purês e refogados do que para preparos em que se espera firmeza.</p>
          <p>Higienize, descasque se desejar, corte em porções, faça um branqueamento breve e resfrie antes de embalar. Identifique a data e use no preparo quente sem esperar a mesma textura do produto fresco.</p>

          <h2>Ideias para variar o preparo</h2>
          <ul>
            <li>Cubos refogados com alho, cebola e ervas.</li>
            <li>Pedaços cozidos e temperados como salada fria.</li>
            <li>Creme com feijão branco, ervilha ou outra base.</li>
            <li>Porções em sopas, arroz, carne moída ou frango ensopado.</li>
            <li>Metades recheadas e assadas com ingredientes disponíveis.</li>
          </ul>
          <p>Combine o chuchu com alimentos de sabores mais marcantes em vez de esperar que ele sustente sozinho toda a receita.</p>

          <p>Leia também: <Link href="/blog/abobrinha-como-escolher-conservar-congelar-preparar">como conservar e preparar abobrinha</Link> · <Link href="/blog/legumes-vapor-agua-microondas-nutrientes">como escolher o método de cozimento</Link> · <Link href="/blog/como-higienizar-guardar-folhas">como higienizar hortaliças</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte refeições práticas com os alimentos disponíveis</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/web/hortalicas/hortalica-nao-e-so-salada/chuchu" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — chuchu</a> · <a href="https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/854775/1/50-HORTALICAS-COMO-COMPRAR-CONSERVAR-E-CONSUMIR.pdf" target="_blank" rel="noopener noreferrer">Embrapa — 50 hortaliças</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a>. Consultadas em 12/10/2026.</p>
      </footer>
    </main>
  );
}
