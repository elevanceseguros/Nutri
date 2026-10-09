import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Beterraba: Como Escolher, Conservar, Cozinhar e Congelar";
const description = "Aprenda a escolher beterrabas firmes, conservar raiz e folhas, cozinhar sem perder tanta cor e congelar em porções práticas.";
const url = "https://www.nutry.life/blog/beterraba-como-escolher-conservar-cozinhar-congelar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-09", modifiedTime: "2026-10-09" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-09", dateModified: "2026-10-09", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🟣 Cozinha prática · 6 min de leitura · 09 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Beterraba pode ser servida crua, cozida, assada, em sopas, pastas ou bolos. Para aproveitar bem a compra, vale observar firmeza, guardar raiz e folhas separadamente e escolher o preparo de acordo com a textura desejada.</p>
          <p>A cor intensa não exige uma receita complicada. Cuidados simples ajudam a reduzir murchamento, manchas na cozinha e desperdício, sem transformar um único alimento em promessa de benefício ou solução para uma necessidade clínica.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Transforme os ingredientes disponíveis em refeições práticas</strong>
            <p>Gere uma sugestão de plano alimentar e adapte combinações, preparos e porções à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Como escolher beterraba</h2>
          <p>A Embrapa recomenda raízes firmes, sem murchamento, rachaduras, brotação ou grandes áreas escurecidas e corticosas. O tamanho não define sozinho a qualidade: raízes grandes podem ser boas, embora algumas colhidas mais tarde fiquem fibrosas.</p>
          <ul>
            <li>Prefira superfície íntegra e raiz firme ao toque.</li>
            <li>Evite mofo, limo, odor desagradável e partes muito amolecidas.</li>
            <li>Se estiver ralada ou picada, confira refrigeração, validade e integridade da embalagem.</li>
            <li>Compre a quantidade compatível com o cardápio para evitar armazenamento excessivo.</li>
          </ul>

          <h2>Folhas e talos também podem ser usados</h2>
          <p>As folhas são comestíveis e podem entrar em refogados, omeletes, bolinhos ou sopas. Ao chegar em casa, destaque-as da raiz, deixando uma pequena porção do talo. A separação reduz a perda de água da beterraba, porque as folhas continuam retirando umidade da raiz.</p>
          <p>Guarde folhas e raízes separadamente e planeje usar as folhas primeiro, pois duram menos. Descarte folhas viscosas, com mofo ou deterioração extensa.</p>

          <h2>Como higienizar com segurança</h2>
          <p>Lave a beterraba em água corrente para retirar terra e sujeira visível, usando uma escova limpa destinada a alimentos quando necessário. Para consumo cru, a Anvisa orienta usar somente sanitizante regularizado e indicado para alimentos, seguindo exatamente a diluição e o tempo de contato do rótulo, e depois enxaguar.</p>
          <p>Vinagre não substitui sanitizante regularizado. Não aplique sabão ou detergente no alimento. Lave mãos, utensílios e bancada e mantenha os vegetais prontos para consumo separados de carnes cruas.</p>

          <h2>Como conservar na geladeira</h2>
          <p>A Embrapa informa que a raiz pode ser mantida por até 15 dias na geladeira, em saco plástico perfurado. Esse prazo é uma referência: frescor inicial, temperatura, umidade e danos alteram a duração real.</p>
          <p>Quando já descascada, ralada ou picada, a referência reduz o período para três ou quatro dias, sempre sob refrigeração em recipiente ou embalagem própria. Mantenha limpa e seca e use primeiro o que já foi cortado.</p>

          <h2>Crua, cozida ou assada?</h2>
          <p>Não existe uma forma universalmente melhor. Crua e ralada, a beterraba fica crocante; cozida, torna-se macia; assada, perde menos água e concentra sabor. O método deve combinar com o prato, a preferência e a facilidade de mastigação.</p>
          <div style={{ overflowX: "auto" }}><table>
            <thead><tr><th>Método</th><th>Como fazer</th><th>Uso prático</th></tr></thead>
            <tbody>
              <tr><td>Crua</td><td>Rale ou fatie fino depois de higienizar</td><td>Saladas, sanduíches e pastas</td></tr>
              <tr><td>Panela comum</td><td>Cozinhe inteira com casca até amaciar</td><td>Saladas, purês e sopas</td></tr>
              <tr><td>Pressão</td><td>Use para raízes grandes; a Embrapa indica cerca de 6 a 10 minutos</td><td>Reduz o tempo de cozimento</td></tr>
              <tr><td>Forno</td><td>Asse inteira ou em pedaços, conforme a receita</td><td>Acompanhamentos e recheios</td></tr>
            </tbody>
          </table></div>
          <p>Cozinhar ou assar com casca ajuda a preservar cor e sabor. O tempo varia com tamanho, panela e ponto desejado; teste com garfo em vez de depender apenas do relógio.</p>

          <h2>Como lidar com a cor e as manchas</h2>
          <p>Os pigmentos podem manchar tábua, pano, roupa e mãos. Use uma tábua lavável, proteja tecidos claros e lave utensílios logo após o preparo. Luvas são opcionais para quem quer evitar coloração temporária nas mãos.</p>
          <p>Perder um pouco de cor na água de cozimento é esperado. Manter a casca durante o cozimento e evitar tempo excessivo reduz essa perda, mas não é necessário perseguir uma cor perfeita para que o alimento seja aproveitado.</p>

          <h2>Como congelar beterraba</h2>
          <p>A orientação específica da Embrapa é cozinhar raízes pequenas inteiras até ficarem macias, resfriá-las completamente em água com gelo, descascar e cortar em fatias ou cubos antes de embalar.</p>
          <ol>
            <li>Escolha raízes firmes e sem deterioração.</li>
            <li>Cozinhe inteiras até amaciar.</li>
            <li>Resfrie em água com gelo e escorra.</li>
            <li>Descasque, corte e divida em porções.</li>
            <li>Retire o máximo de ar possível, identifique a data e congele.</li>
          </ol>
          <p>A referência indica até oito meses no congelador. Beterraba ralada não é a melhor escolha para congelar porque pode perder cor e sabor. A textura dos cubos também ficará mais macia; use em sopas, molhos, purês ou preparos cozidos.</p>

          <h2>Como reduzir desperdício</h2>
          <ul>
            <li>Separe as folhas e programe seu uso logo após a compra.</li>
            <li>Cozinhe várias raízes de uma vez e refrigere porções.</li>
            <li>Congele parte antes que o alimento se deteriore.</li>
            <li>Use aparas limpas em caldos, sopas ou pastas.</li>
            <li>Aproveite água de cozimento em receita compatível apenas quando o processo tiver sido higiênico e o líquido não estiver excessivamente salgado.</li>
          </ul>

          <h2>Quando descartar</h2>
          <p>Descarte raízes com mofo, limo, odor desagradável, vazamento ou podridão extensa. Pequenas marcas superficiais podem ser aparadas quando o restante está firme, mas não tente recuperar alimento amplamente deteriorado.</p>
          <p>Depois de cortada ou cozida, mantenha refrigerada em recipiente fechado. Se houver dúvida sobre contaminação cruzada, tempo fora da geladeira ou condição de armazenamento, a opção mais segura é descartar.</p>

          <p>Leia também: <Link href="/blog/legumes-vapor-agua-microondas-nutrientes">legumes no vapor, na água ou no micro-ondas</Link> · <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link> · <Link href="/blog/como-congelar-frutas-textura-seguranca">princípios práticos do congelamento</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte refeições práticas com o que você já tem</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/beterraba" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — beterraba</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a> · <a href="https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/guias-alimentares/guias-alimentares" target="_blank" rel="noopener noreferrer">Ministério da Saúde — Guias Alimentares</a>. Consultadas em 09/10/2026.</p>
      </footer>
    </main>
  );
}
