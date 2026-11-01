import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Geladeira sem Energia: O Que Descartar e O Que Ainda Pode Ser Consumido?";
const description = "Veja quanto tempo geladeira e freezer preservam o frio, como avaliar os alimentos quando a energia volta e por que cheiro e aparência não bastam.";
const url = "https://www.nutry.life/blog/geladeira-sem-energia-o-que-descartar-alimentos";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    publishedTime: "2026-11-01",
    modifiedTime: "2026-11-01",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🔌 Segurança dos alimentos · 9 min de leitura · 1 de novembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Quando falta energia, abrir a geladeira repetidamente para conferir os alimentos acelera justamente o problema que se quer evitar: a perda do frio. A primeira medida é manter as portas fechadas e registrar o horário aproximado em que a interrupção começou.</p>
          <p>Como referência prática, uma geladeira fechada conserva o frio por cerca de <strong>4 horas</strong>. Um freezer cheio e fechado pode manter a temperatura por aproximadamente <strong>48 horas</strong>; se estiver pela metade, cerca de <strong>24 horas</strong>. Esses tempos não são garantia: temperatura inicial, vedação, ambiente e frequência de abertura mudam o resultado.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Organize refeições e reduza perdas na cozinha</strong>
            <p>Gere uma sugestão inicial de plano alimentar e adapte alimentos, porções e preparações à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>O que fazer enquanto a energia está desligada</h2>
          <ol>
            <li>Mantenha geladeira e freezer fechados o máximo possível.</li>
            <li>Anote quando a energia caiu e, se souber, quando voltou.</li>
            <li>Não coloque alimentos quentes dentro dos equipamentos.</li>
            <li>Se a interrupção deve durar muito, avalie gelo em bloco ou gelo seco seguindo as instruções de segurança do fornecedor.</li>
            <li>Não prove alimentos para decidir se estão seguros.</li>
          </ol>
          <p>Um termômetro de geladeira ou culinário reduz a incerteza. A zona de referência para refrigeração segura é de até aproximadamente 4 °C. Sem medição, tempo, tipo de alimento e condição do equipamento precisam ser avaliados de forma conservadora.</p>

          <h2>Guia rápido quando a energia volta</h2>
          <div style={{ overflowX: "auto" }}><table><thead><tr><th scope="col">Situação</th><th scope="col">Conduta prudente</th><th scope="col">Por quê</th></tr></thead><tbody>
            <tr><td>Geladeira fechada por até cerca de 4 horas</td><td>Meça a temperatura e avalie cada alimento</td><td>O equipamento pode ter mantido o frio nesse período</td></tr>
            <tr><td>Perecível acima de 4 °C por 4 horas ou mais</td><td>Descartar</td><td>O tempo em temperatura inadequada aumenta o risco microbiológico</td></tr>
            <tr><td>Tempo ou temperatura desconhecidos</td><td>Descartar perecíveis de maior risco</td><td>Cheiro e aparência não excluem contaminação</td></tr>
            <tr><td>Congelado ainda com cristais de gelo ou a até 4 °C</td><td>Pode ser cozido ou recongelado, considerando possível perda de qualidade</td><td>Ainda há evidência de manutenção do frio</td></tr>
            <tr><td>Congelado completamente descongelado e aquecido por tempo incerto</td><td>Descartar quando perecível</td><td>Não há base segura para reconstruir o histórico de temperatura</td></tr>
          </tbody></table></div>

          <h2>Quais alimentos refrigerados exigem mais cautela?</h2>
          <p>Carnes, aves, pescados, leite, ovos, queijos frescos ou cremosos, refeições prontas, sobras, arroz e feijão cozidos, massas, frutas cortadas e preparações com creme ou maionese são perecíveis. Se ficaram acima de 4 °C por 4 horas ou mais, a orientação oficial é descartar.</p>
          <p>Não tente compensar tempo excessivo apenas fervendo, assando ou reaquecendo. Alguns microrganismos podem produzir substâncias que não são neutralizadas de modo confiável pelo preparo doméstico, e a pessoa normalmente não conhece a temperatura real atingida durante toda a interrupção.</p>

          <h2>O que pode tolerar melhor a interrupção?</h2>
          <p>Frutas e hortaliças inteiras e sem cortes, pães sem recheio perecível, produtos secos e embalagens fechadas que não dependem de refrigeração costumam exigir menos preocupação. Manteiga, queijos duros e alguns condimentos podem ter orientações diferentes dos alimentos mais perecíveis.</p>
          <p>Isso não significa liberar tudo automaticamente. Verifique o rótulo, a recomendação do fabricante após abertura, contato com líquidos de vazamento e sinais de deterioração. Alimentos destinados a pessoas mais vulneráveis merecem decisão ainda mais conservadora.</p>

          <h2>Freezer cheio, meio cheio e compartimento interno</h2>
          <p>Os prazos de 48 horas para freezer cheio e 24 horas para meio cheio pressupõem porta fechada. Um compartimento congelador dentro da geladeira pode perder o frio mais rapidamente, e um equipamento com vedação ruim também não deve ser tratado como se estivesse nas condições ideais.</p>
          <p>Quando a energia voltar, examine os pacotes individualmente. Cristais de gelo e temperatura de até 4 °C indicam que o alimento pode ser cozido ou recongelado, embora textura e qualidade possam piorar. Não use apenas a rigidez externa do pacote como medida de segurança.</p>

          <h2>Pode recongelar depois da falta de energia?</h2>
          <p>Pode ser possível quando o alimento ainda contém cristais de gelo ou foi medido a até 4 °C. Recongelar não “reinicia” a qualidade: líquidos podem se separar, vegetais podem amolecer e carnes podem perder suculência.</p>
          <p>Se o alimento descongelou completamente e permaneceu acima da faixa segura por tempo desconhecido, não recongele para tentar salvá-lo. Congelar novamente desacelera microrganismos, mas não reverte o que aconteceu durante o aquecimento.</p>

          <h2>Cheirar, olhar ou provar não são testes de segurança</h2>
          <p>Um alimento perigoso pode parecer normal. Não prove uma pequena porção, não ofereça a animais e não confie somente no cheiro. Na dúvida entre desperdiçar um perecível e consumir algo com histórico desconhecido, o descarte é a escolha responsável.</p>
          <p>Se houver líquido de carne ou outro alimento cru vazando, evite contato com alimentos prontos, lave as mãos e higienize recipientes e superfícies conforme as instruções do produto de limpeza.</p>

          <h2>Como se preparar para a próxima interrupção</h2>
          <ul>
            <li>Mantenha termômetros independentes na geladeira e no freezer.</li>
            <li>Congele recipientes próprios com água para formar reservas de gelo, sem encher até a borda.</li>
            <li>Agrupe os congelados para que retenham frio por mais tempo.</li>
            <li>Evite lotar a geladeira a ponto de bloquear a circulação de ar.</li>
            <li>Tenha alimentos estáveis que não exijam refrigeração ou cozimento.</li>
            <li>Identifique e date sobras e porções congeladas.</li>
          </ul>

          <h2>Checklist antes de decidir</h2>
          <ol><li>Quanto tempo a energia ficou desligada?</li><li>As portas permaneceram fechadas?</li><li>Há leitura confiável de temperatura?</li><li>O alimento é perecível?</li><li>O congelado ainda tem cristais de gelo?</li><li>Houve vazamento ou contaminação cruzada?</li><li>O rótulo traz instruções específicas após abertura?</li><li>Se tempo e temperatura são desconhecidos, descarte o perecível.</li></ol>
          <p>Leia também: <Link href="/blog/comida-quente-geladeira-resfriar-sobras-seguranca">como resfriar e guardar sobras</Link> · <Link href="/blog/arroz-feijao-cozidos-guardar-congelar-reaquecer">como guardar arroz e feijão cozidos</Link> · <Link href="/blog/como-descongelar-carne-geladeira-microondas">formas seguras de descongelar carne</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final"><div className={styles.premiumHeader}><h2>Planeje refeições com mais organização e segurança</h2><p>Use o gerador para obter uma sugestão inicial e ajustar alimentos e preparações à sua rotina. Necessidades clínicas e restrições exigem avaliação profissional.</p></div><Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link></section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico, serviço de saúde ou vigilância sanitária. Sintomas, condições clínicas e necessidades individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://ask.fsis.usda.gov/article/How-do-you-keep-food-safe-during-a-power-failure" target="_blank" rel="noopener noreferrer">USDA/FSIS — conservação durante falta de energia</a> · <a href="https://www.fda.gov/food/buy-store-serve-safe-food/food-and-water-safety-during-power-outages-and-floods" target="_blank" rel="noopener noreferrer">FDA — segurança de alimentos durante quedas de energia</a> · <a href="https://www.fda.gov/food/food-safety-during-emergencies/power-outages-key-tips-consumers-about-food-safety" target="_blank" rel="noopener noreferrer">FDA — orientações práticas ao consumidor</a>. Consultadas em 01/11/2026.</p>
      </footer>
    </main>
  );
}
