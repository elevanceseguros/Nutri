import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Arroz e Feijão Cozidos: Como Guardar, Congelar e Reaquecer | Nutry.life",
  description: "Aprenda a resfriar, porcionar, refrigerar, congelar e reaquecer arroz e feijão com mais segurança e menos desperdício.",
  keywords: "como guardar arroz cozido, congelar feijão, reaquecer arroz, arroz e feijão geladeira, sobras de comida",
  openGraph: {
    title: "Arroz e Feijão Cozidos: Como Guardar, Congelar e Reaquecer | Nutry.life",
    description: "Um guia prático para organizar sobras e porções sem depender apenas de aparência ou cheiro.",
    url: "https://nutry.life/blog/arroz-feijao-cozidos-guardar-congelar-reaquecer"
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
            <span className={styles.postCategory}>Cozinha Prática</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>17 de agosto de 2026</span>
          </div>
          <h1 className={styles.postTitle}>Arroz e Feijão Cozidos: Como Guardar, Congelar e Reaquecer com Segurança</h1>
          <p className={styles.postExcerpt}>Cozinhar uma quantidade maior pode facilitar a semana, mas a praticidade depende de resfriamento, recipientes, porções e reaquecimento bem organizados.</p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div><strong>Quer aproveitar melhor o que já está pronto?</strong><span>Crie uma sugestão de plano alimentar adaptável às porções, preferências e rotina da casa.</span></div>
            <Link href="/" className={styles.primaryButton}>Gerar meu plano</Link>
          </div>

          <div className={styles.postContent}>
            <p>Arroz e feijão fazem parte de uma combinação alimentar tradicional e versátil. Prepará-los em lote pode economizar tempo, desde que as sobras não permaneçam esquecidas na panela e que o armazenamento reduza contaminação, perda de qualidade e reaquecimentos repetidos.</p>
            <p>O Ministério da Saúde orienta conservar arroz e feijão cozidos na geladeira por até três dias e informa que o feijão pode ser congelado por até 30 dias. Esses prazos pressupõem preparo higiênico, refrigeração adequada e recipiente limpo; se houve abuso de temperatura ou dúvida sobre a conservação, o prazo não torna o alimento seguro.</p>

            <h2>O que fazer logo depois da refeição</h2>
            <ol>
              <li>Separe a parte que não será consumida, evitando deixá-la por tempo prolongado em temperatura ambiente.</li>
              <li>Use recipientes limpos, de preferência baixos e em porções menores, para favorecer resfriamento uniforme.</li>
              <li>Feche, identifique o conteúdo e anote a data de preparo.</li>
              <li>Leve à geladeira o que será usado nos próximos dias e ao freezer o restante.</li>
            </ol>
            <p>Não misture uma sobra que foi à mesa com uma preparação ainda intacta. Talheres, mãos e serviço acrescentam oportunidades de contaminação.</p>

            <h2>Geladeira ou freezer?</h2>
            <div style={{ overflowX: "auto" }}>
              <table>
                <thead><tr><th>Destino</th><th>Quando usar</th><th>Como organizar</th></tr></thead>
                <tbody>
                  <tr><td>Geladeira</td><td>Consumo próximo</td><td>Recipiente fechado, datado e em porções que serão reaquecidas uma vez</td></tr>
                  <tr><td>Freezer</td><td>Preparação para mais adiante</td><td>Porções pequenas, pouca quantidade de ar e identificação visível</td></tr>
                  <tr><td>Descarte</td><td>Tempo ou conservação incertos, mofo, viscosidade ou alteração evidente</td><td>Não prove para “testar” a segurança</td></tr>
                </tbody>
              </table>
            </div>
            <p>Cheiro e aparência ajudam a perceber deterioração, mas não detectam todos os perigos. Quando você não sabe há quanto tempo o alimento ficou fora de refrigeração ou como foi armazenado, a escolha mais prudente é não consumir.</p>

            <h2>Como congelar arroz cozido</h2>
            <ul>
              <li>Divida em porções adequadas a uma refeição.</li>
              <li>Evite compactar uma grande quantidade ainda quente em um recipiente profundo.</li>
              <li>Feche e date a embalagem.</li>
              <li>Para preservar textura, não deixe o arroz ressecar antes de embalar.</li>
            </ul>
            <p>Arroz congelado pode ser levado diretamente ao aquecimento quando a preparação e o equipamento permitirem, com atenção para que todo o volume fique bem quente. Outra opção é descongelar na geladeira.</p>

            <h2>Como congelar feijão</h2>
            <p>Congele o feijão com parte do caldo, em porções compatíveis com o consumo da casa. Deixe espaço no recipiente para a expansão do líquido e evite encher até a borda. Temperos frescos podem ser ajustados depois do descongelamento, se isso combinar com a receita.</p>
            <p>O Ministério da Saúde sugere porcionar o feijão cozido para facilitar o uso ao longo da semana. A lógica é semelhante à descrita no guia sobre <Link href="/blog/como-congelar-frutas-textura-seguranca">como congelar frutas</Link>, embora textura e prazo variem entre alimentos.</p>

            <h2>Como descongelar com mais segurança</h2>
            <ul>
              <li>Na geladeira: transfira a porção com antecedência e mantenha-a refrigerada.</li>
              <li>No micro-ondas: use a função adequada e aqueça logo depois.</li>
              <li>Direto na panela: útil especialmente para feijão, mexendo para distribuir o calor.</li>
            </ul>
            <p>Evite descongelar por longos períodos sobre a bancada. Também não conte com o congelamento para “recuperar” um alimento que já ficou mal conservado: congelar desacelera processos, mas não corrige contaminação anterior.</p>

            <h2>Como reaquecer arroz e feijão</h2>
            <p>A Anvisa orienta reaquecer bem as sobras antes do consumo. Na prática, aqueça até que a preparação esteja fumegante e quente por inteiro, mexendo para eliminar pontos frios, principalmente no micro-ondas. Panelas cheias e porções densas exigem mais atenção.</p>
            <p>Retire apenas a quantidade que será consumida. Reaquecer o recipiente inteiro, devolver a sobra à geladeira e repetir o ciclo piora a qualidade e amplia as variações de temperatura.</p>

            <h2>Arroz e feijão podem ficar juntos no mesmo pote?</h2>
            <p>Podem, se foram preparados e armazenados corretamente e se a porção será consumida de uma vez. Separá-los oferece mais flexibilidade: é possível variar acompanhamentos, controlar melhor a umidade e aquecer cada preparação conforme a textura desejada.</p>
            <p>Para entender as diferenças entre tipos, veja <Link href="/blog/arroz-branco-vs-integral-como-escolher">arroz branco versus integral</Link> e o guia de <Link href="/blog/feijao-preto-carioca-branco-diferencas">feijão-preto, carioca e branco</Link>.</p>

            <h2>Checklist para reduzir desperdício</h2>
            <ul>
              <li>Planeje quantas refeições serão feitas em casa.</li>
              <li>Porcione antes de refrigerar ou congelar.</li>
              <li>Identifique nome e data sem confiar apenas na memória.</li>
              <li>Use primeiro as porções mais antigas dentro do prazo seguro.</li>
              <li>Não recongele uma porção que passou muito tempo fora da refrigeração.</li>
              <li>Em caso de falta de energia prolongada ou temperatura incerta, avalie com cautela e descarte quando houver dúvida.</li>
            </ul>
            <p>Uma lista simples de preparações e datas ajuda a conectar freezer e cardápio. Para montar compras coerentes com o que já existe em casa, consulte também <Link href="/blog/como-organizar-feira-semanal">como organizar a feira semanal</Link>.</p>

            <h2>Conclusão</h2>
            <p>Arroz e feijão cozidos podem facilitar a rotina quando são porcionados, resfriados, identificados e armazenados logo após a refeição. Na hora de comer, descongele de forma controlada e aqueça toda a porção completamente. Prazos ajudam, mas não substituem boas condições de preparo e conservação.</p>

            <h2>Fontes consultadas</h2>
            <ul>
              <li><a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2020/10-passos-da-alimentacao-saudavel-para-idosos-durante-a-pandemia" target="_blank" rel="noopener noreferrer">Ministério da Saúde — armazenamento de arroz e feijão cozidos</a>.</li>
              <li><a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2021/como-se-alimentar-de-forma-saudavel-morando-sozinho" target="_blank" rel="noopener noreferrer">Ministério da Saúde — preparo e congelamento de porções</a>.</li>
              <li><a href="https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/educacao-e-pesquisa/educacao-em-vigilancia-sanitaria-para-a-sociedade/vigilancia-sanitaria-guia-didatico.pdf/@@download/file" target="_blank" rel="noopener noreferrer">Anvisa — guia didático de vigilância sanitária</a>.</li>
              <li><a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank" rel="noopener noreferrer">Guia Alimentar para a População Brasileira</a>.</li>
            </ul>
          </div>

          <section className={styles.premiumBanner} data-cta="final">
            <div><span className={styles.premiumBadge}>Nutry.life</span><h2>Transforme porções prontas em refeições possíveis</h2><p>Use o gerador para criar uma sugestão de plano alimentar adaptável ao que está na geladeira e no freezer.</p></div>
            <Link href="/" className={styles.primaryButton}>Criar meu plano alimentar</Link>
          </section>

          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </article>
      </main>

      <footer className={styles.footer}><p><strong>Aviso:</strong> este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou autoridade sanitária. Segurança depende de higiene, temperatura, tempo, equipamento e condições individuais. Pessoas gestantes, idosas, imunossuprimidas, crianças pequenas ou com necessidades específicas devem seguir orientação profissional e sanitária apropriada.</p></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"Arroz e Feijão Cozidos: Como Guardar, Congelar e Reaquecer com Segurança",
        description:"Guia prático para resfriar, porcionar, refrigerar, congelar e reaquecer arroz e feijão.",
        datePublished:"2026-08-17",dateModified:"2026-08-17",
        author:{"@type":"Organization",name:"Nutry.life"},
        publisher:{"@type":"Organization",name:"Nutry.life",url:"https://nutry.life"},
        mainEntityOfPage:"https://nutry.life/blog/arroz-feijao-cozidos-guardar-congelar-reaquecer"
      }) }} />
    </>
  );
}
