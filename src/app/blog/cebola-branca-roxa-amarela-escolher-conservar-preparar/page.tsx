import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Cebola Branca, Roxa ou Amarela: Como Escolher, Conservar e Preparar";
const description = "Compare cebolas branca, roxa e amarela por sabor, textura, uso culinário, escolha no mercado e conservação antes e depois do corte.";
const url = "https://www.nutry.life/blog/cebola-branca-roxa-amarela-escolher-conservar-preparar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-03", modifiedTime: "2026-10-03" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-03", dateModified: "2026-10-03", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🧅 Cozinha prática · 6 min de leitura · 03 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Cebolas branca, roxa e amarela cumprem funções parecidas, mas podem mudar intensidade, doçura percebida, cor e textura do prato. A variedade ajuda na escolha, embora cultivar, safra, tempo de armazenamento e preparo também influenciem o resultado.</p>
          <p>Em vez de procurar uma vencedora nutricional, vale escolher o bulbo em bom estado e usar a versão que combina com a técnica, o sabor desejado e o tempo disponível.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Planeje refeições com os ingredientes que você já usa</strong>
            <p>Gere uma sugestão de plano alimentar e adapte combinações, temperos e porções à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>O que costuma mudar entre as variedades?</h2>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead><tr><th>Tipo</th><th>Uso prático</th><th>O que esperar</th></tr></thead>
              <tbody>
                <tr><td>Amarela</td><td>Refogados, sopas, molhos e assados</td><td>Versátil; desenvolve sabor adocicado quando cozinha por mais tempo</td></tr>
                <tr><td>Branca</td><td>Molhos, vinagretes e preparos rápidos</td><td>Pode ter sabor mais direto e textura crocante quando crua</td></tr>
                <tr><td>Roxa</td><td>Saladas, picles rápidos, sanduíches e assados</td><td>Cor marcante; intensidade varia entre bulbos e pode suavizar no preparo</td></tr>
              </tbody>
            </table>
          </div>
          <p>Essas são tendências culinárias, não regras. Se uma receita pede cebola amarela e você só tem roxa, a substituição costuma ser possível, aceitando mudança de cor e sabor.</p>

          <h2>Como escolher no mercado</h2>
          <p>A Embrapa orienta escolher bulbos firmes e pesados para o tamanho. Evite cebola com áreas amolecidas, feridas, mofo ou brotação intensa. A casca seca externa pode soltar um pouco sem indicar problema; o importante é que o bulbo esteja íntegro.</p>
          <p>Compre a quantidade compatível com seu consumo e com o espaço ventilado disponível. Promoção deixa de ser economia quando parte dos bulbos deteriora antes do uso.</p>

          <h2>Cebola crua ou cozida: o método muda mais que a cor</h2>
          <ul>
            <li><strong>Crua e fatiada:</strong> mantém crocância e pungência, útil em saladas e sanduíches.</li>
            <li><strong>Refogada rapidamente:</strong> perde parte da agressividade e preserva alguma textura.</li>
            <li><strong>Cozida lentamente:</strong> amolece, reduz volume e ganha sabor mais adocicado.</li>
            <li><strong>Assada:</strong> concentra sabor e funciona como acompanhamento ou base de molhos.</li>
            <li><strong>Em conserva:</strong> acidez, sal e açúcar da receita passam a pesar na comparação.</li>
          </ul>
          <p>O escurecimento durante o cozimento vem de reações que desenvolvem sabor. Controle fogo e umidade: dourar não é o mesmo que queimar.</p>

          <h2>Como suavizar a cebola para usar crua</h2>
          <p>Fatiar fino e deixar alguns minutos em água fria pode reduzir parte da pungência percebida. Escorra bem antes de misturar à salada. Esse passo é opcional e troca um pouco de intensidade por sabor mais suave.</p>
          <p>Outra opção é equilibrar com acidez e outros ingredientes da receita. Não é necessário adicionar muito sal para “curar” a cebola; ajuste o tempero do prato inteiro.</p>

          <h2>Onde guardar cebola inteira</h2>
          <p>A Embrapa recomenda manter os bulbos em local seco, fresco, escuro e bem ventilado. Evite sacos plásticos fechados e locais úmidos. A circulação de ar reduz o acúmulo de umidade, embora o tempo de conservação varie conforme tipo, cultivar e condição de compra.</p>
          <p>Não use a geladeira como regra para cebola seca inteira. O USDA inclui cebolas secas entre os produtos indicados para armazenamento seco; em casa, observe calor e umidade do ambiente e descarte sinais de deterioração.</p>

          <h2>E depois de cortar?</h2>
          <p>Cebola cortada deve ir para a geladeira em recipiente limpo e bem fechado. A orientação da Embrapa é usar cebola picada ou ralada em prazo curto. Para planejar melhor, corte apenas o necessário e anote a data quando guardar uma sobra.</p>
          <p>Cheiro forte é característico, mas textura viscosa, mofo ou deterioração evidente justificam descarte. Não tente aproveitar só a parte aparentemente boa de um bulbo muito deteriorado.</p>

          <h2>Pode congelar?</h2>
          <p>Sim. Pique ou fatie, congele em porções e depois transfira para embalagem adequada, retirando o máximo de ar possível. A cebola congelada perde crocância, então funciona melhor em sopas, molhos, refogados e assados do que em saladas.</p>
          <p>Leve a porção diretamente ao preparo quente quando a receita permitir. Congelar ajuda a evitar desperdício, mas não recupera cebola que já apresenta deterioração.</p>

          <h2>Precisa lavar ou sanitizar?</h2>
          <p>Retire a casca externa e lave as mãos, a faca e a tábua antes do corte. Quando a preparação usar a cebola crua, siga as orientações locais para higienização de hortaliças e use apenas produto regularizado e indicado para alimentos, respeitando diluição e tempo do rótulo.</p>
          <p>Detergente e sabão não devem ser aplicados ao alimento. A Anvisa também reforça a separação entre alimentos crus e prontos para evitar contaminação cruzada.</p>

          <h2>Perfis de escolha</h2>
          <ul>
            <li><strong>Para refogar diariamente:</strong> escolha pela disponibilidade, firmeza e preço; a amarela é versátil, mas não obrigatória.</li>
            <li><strong>Para servir crua:</strong> branca ou roxa podem oferecer crocância e contraste; prove e ajuste a intensidade.</li>
            <li><strong>Para cozinhar pouco:</strong> compre poucas unidades ou congele porções antes de perder qualidade.</li>
            <li><strong>Para reduzir desperdício:</strong> priorize bulbos íntegros e use primeiro os que têm pequenas marcas superficiais, sem deterioração.</li>
            <li><strong>Para ganhar tempo:</strong> porcione uma sessão de corte, refrigere o uso próximo e congele o restante.</li>
          </ul>

          <h2>Checklist simples</h2>
          <ol>
            <li>Escolha bulbos firmes, pesados e sem mofo.</li>
            <li>Guarde inteiros em local seco, escuro e ventilado.</li>
            <li>Separe a variedade pela técnica e pelo sabor desejado.</li>
            <li>Refrigere rapidamente depois de cortar.</li>
            <li>Congele porções destinadas a preparos cozidos.</li>
            <li>Descarte textura viscosa, mofo ou deterioração evidente.</li>
          </ol>

          <p>Leia também: <Link href="/blog/alho-fresco-pasta-po-comparar-rotulo-preparo">alho fresco, em pasta ou em pó</Link> · <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link> · <Link href="/blog/como-congelar-frutas-textura-seguranca">como congelar frutas</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Monte um plano alimentar possível para a sua rotina</h2><p>Gere uma sugestão inicial e adapte ingredientes, preparos e porções. Para necessidades clínicas, alergias ou restrições individuais, procure um nutricionista.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Necessidades, alergias, restrições e condições individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.embrapa.br/en/web/hortalicas/hortalica-nao-e-so-salada/cebola" target="_blank" rel="noopener noreferrer">Embrapa Hortaliças — cebola</a> · <a href="https://www.fna.usda.gov/fs/produce-safety/storage" target="_blank" rel="noopener noreferrer">USDA — armazenamento de vegetais</a> · <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higiene e segurança no preparo</a>. Consultadas em 03/10/2026.</p>
      </footer>
    </main>
  );
}
