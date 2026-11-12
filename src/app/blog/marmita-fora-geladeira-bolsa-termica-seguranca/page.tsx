import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Marmita Fora da Geladeira: Quanto Tempo Dura e Como Transportar";
const description = "Veja como transportar marmitas frias ou quentes, usar bolsa térmica e fontes de frio e decidir quando uma refeição ficou tempo demais sem controle de temperatura.";
const url = "https://www.nutry.life/blog/marmita-fora-geladeira-bolsa-termica-seguranca";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-11-09", modifiedTime: "2026-11-09" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
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
          <p className={styles.postExcerpt}>🥡 Segurança e rotina · 8 min de leitura · 9 de novembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Levar comida pronta para o trabalho, a escola ou um passeio exige mais do que fechar bem o pote. Arroz, feijão, carnes, ovos, massas, legumes cozidos, laticínios e outras preparações perecíveis precisam permanecer frios ou quentes durante o transporte.</p>
          <p>Sem controle de temperatura, micro-organismos podem se multiplicar mesmo quando a refeição continua com aparência e cheiro normais. <strong>A estratégia mais segura é reduzir o tempo fora de refrigeração e usar uma bolsa térmica adequada com fontes de frio, ou um recipiente térmico próprio para manter o alimento quente</strong>.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div><strong>Organize refeições para a sua rotina</strong><p>O gerador ajuda a montar uma sugestão inicial de plano alimentar e distribuir preparações ao longo da semana.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link></div></div>

          <h2>Decisão rápida: como transportar?</h2>
          <div style={{ overflowX: "auto" }}><table><thead><tr><th scope="col">Situação</th><th scope="col">Estratégia</th><th scope="col">Cuidados</th></tr></thead><tbody>
            <tr><td>Existe geladeira no destino</td><td>Transportar fria e refrigerar assim que chegar</td><td>Usar bolsa térmica e fontes de frio durante o trajeto</td></tr>
            <tr><td>Não existe geladeira</td><td>Manter fria na bolsa térmica até o consumo</td><td>Usar fontes de frio suficientes e abrir o mínimo possível</td></tr>
            <tr><td>Refeição será levada quente</td><td>Usar recipiente térmico próprio e preaquecido</td><td>Colocar o alimento bem quente e consumir no período planejado</td></tr>
            <tr><td>Trajeto longo ou dia muito quente</td><td>Reforçar isolamento e fontes de frio</td><td>Não deixar a bolsa no carro ou sob sol</td></tr>
            <tr><td>Tempo e temperatura são desconhecidos</td><td>Não consumir a sobra perecível</td><td>Cheiro e aparência não confirmam segurança</td></tr>
          </tbody></table></div>

          <h2>Quanto tempo a marmita pode ficar fora?</h2>
          <p>O Ministério da Saúde orienta manter alimentos perecíveis em temperatura ambiente apenas pelo tempo mínimo necessário e conservar preparações frias abaixo de 5 °C. Para alimentos cozidos que ficaram abaixo de 60 °C, a orientação nacional citada é consumi-los em até 60 minutos.</p>
          <p>O USDA usa como regra geral não deixar perecíveis na faixa entre aproximadamente 4 °C e 60 °C por mais de duas horas, reduzidas para uma hora quando o ambiente ultrapassa cerca de 32 °C. As orientações não são uma autorização para deixar a marmita sobre a mesa: quanto antes ela voltar ao controle de temperatura, melhor.</p>

          <h2>Bolsa térmica sozinha é suficiente?</h2>
          <p>Não necessariamente. A bolsa reduz a troca de calor, mas não produz frio. Para transportar alimentos perecíveis frios, o USDA recomenda pelo menos duas fontes de frio, como placas de gel congeladas, ou a combinação de uma placa com uma garrafa de água congelada.</p>
          <p>Posicione as fontes de frio em lados diferentes da refeição, por exemplo em cima e embaixo. Preencha espaços vazios quando possível, mantenha a bolsa fechada e faça um teste com antecedência se o transporte durar várias horas.</p>

          <h2>Como preparar uma marmita fria</h2>
          <ol><li>Cozinhe e resfrie a refeição com antecedência segura.</li><li>Guarde o pote fechado na geladeira até a hora de sair.</li><li>Congele as placas de gel durante a noite.</li><li>Coloque o pote entre as fontes de frio.</li><li>Mantenha a bolsa longe do sol, do porta-malas quente e de motores.</li><li>Ao chegar, transfira a marmita para a geladeira se houver uma disponível.</li><li>Retire apenas no momento de aquecer ou consumir.</li></ol>
          <p>Congelar parte da própria refeição pode ajudar a mantê-la fria, desde que o alimento descongele em condição controlada e seja totalmente aquecido antes do consumo quando necessário. Siga as características da preparação e as instruções do recipiente.</p>

          <h2>E se eu quiser levar a comida quente?</h2>
          <p>Use um recipiente térmico projetado para alimentos. Aqueça o recipiente previamente com água fervente conforme as instruções do fabricante, descarte a água e coloque a comida bem quente imediatamente antes de sair. Feche sem demora.</p>
          <p>Uma panela comum ou um pote envolvido em pano não garante manutenção segura. Também não é recomendável colocar alimento apenas morno no recipiente: ele pode permanecer por horas na faixa que favorece multiplicação microbiana.</p>

          <h2>Posso cozinhar à noite e levar de manhã?</h2>
          <p>Sim, desde que a preparação seja resfriada e refrigerada corretamente. Divida grandes volumes em recipientes rasos, não deixe a panela sobre o fogão por horas e leve à geladeira sem demora desnecessária. Pela manhã, transporte a refeição já fria com fontes de frio.</p>
          <p>Colocar a comida quente diretamente na bolsa térmica e esperar que esfrie durante o trajeto não é uma boa estratégia. O resfriamento deve acontecer antes, em condição controlada.</p>

          <h2>Como aquecer no trabalho ou na escola</h2>
          <p>Reaqueça a refeição até que esteja bem quente por inteiro, seguindo as instruções do equipamento e do recipiente. Misture preparações que aquecem de forma desigual e faça pausas quando necessário. Não use potes que não sejam próprios para micro-ondas.</p>
          <p>O reaquecimento não recupera uma marmita que ficou horas em temperatura inadequada. Algumas toxinas produzidas por micro-organismos podem permanecer mesmo depois de aquecer, por isso o controle começa no resfriamento e no transporte.</p>

          <h2>O que não deve depender apenas do cheiro</h2>
          <p>Carne, frango, peixe, ovos, leite, iogurte, queijos frescos, arroz, feijão, massas, refeições prontas e frutas cortadas podem apresentar risco sem mudança evidente. Provar uma pequena quantidade também não é um teste seguro.</p>
          <p>Se a refeição ficou em um carro fechado, bolsa sem fonte de frio, mochila comum ou mesa por tempo desconhecido, a decisão responsável é descartar os perecíveis. Não congele novamente para tentar “salvar” o alimento.</p>

          <h2>Cuidados com o recipiente e a bolsa</h2>
          <ul><li>Use pote íntegro, limpo, bem vedado e apropriado ao aquecimento.</li><li>Separe alimentos crus de preparações prontas.</li><li>Lave a bolsa térmica conforme o fabricante e seque completamente.</li><li>Não reutilize embalagem descartável danificada para aquecimento.</li><li>Identifique nome e data quando houver várias refeições.</li><li>Não coloque a bolsa diretamente no chão ou em superfícies contaminadas.</li><li>Lave as mãos antes de preparar e antes de comer.</li></ul>
          <p>Uma bolsa com cheiro, vazamento ou revestimento danificado precisa ser higienizada ou substituída. O isolamento perde eficiência quando zíper, costura ou camada interna estão comprometidos.</p>

          <h2>Perfis que exigem atenção extra</h2>
          <p>Crianças pequenas, gestantes, idosos e pessoas com imunidade comprometida podem ter maior risco de complicações por doenças transmitidas por alimentos. Nesses casos, seja ainda mais rigoroso com tempo, temperatura, higiene e descarte.</p>
          <p>Alergias também exigem prevenção de contato cruzado, rotulagem e comunicação com escola ou trabalho. A bolsa térmica não substitui um plano individual orientado por profissionais quando há necessidade clínica.</p>

          <h2>Checklist antes de sair</h2>
          <ol><li>A refeição foi resfriada e refrigerada corretamente?</li><li>O pote está limpo, íntegro e fechado?</li><li>A bolsa está limpa e em bom estado?</li><li>Há pelo menos duas fontes de frio para itens perecíveis?</li><li>Existe geladeira no destino?</li><li>Quanto tempo durará o trajeto?</li><li>A bolsa ficará longe do sol e do carro quente?</li><li>Existe equipamento adequado para reaquecer?</li><li>O recipiente pode ir ao micro-ondas?</li><li>Há um plano de descarte se o controle de temperatura falhar?</li></ol>
          <p>Leia também: <Link href="/blog/pote-plastico-microondas-pode-usar-quando-trocar">como escolher e usar potes no micro-ondas</Link> · <Link href="/blog/comida-quente-geladeira-resfriar-sobras-seguranca">como resfriar comida pronta</Link> · <Link href="/blog/arroz-feijao-cozidos-guardar-congelar-reaquecer">como guardar e reaquecer arroz e feijão</Link> · <Link href="/blog/lancheira-infantil-saudavel-pratica-segura">como montar uma lancheira prática e segura</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final"><div className={styles.premiumHeader}><h2>Planeje refeições que funcionem na rotina</h2><p>Gere uma sugestão inicial de plano alimentar e adapte preparações, horários e porções às suas necessidades. Alergias, restrições e condições clínicas exigem avaliação profissional.</p></div><Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link></section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou outro profissional de saúde. Condições clínicas, alergias, restrições, sintomas e necessidades individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dtha" target="_blank" rel="noopener noreferrer">Ministério da Saúde — doenças transmitidas por alimentos</a> · <a href="https://ask.fsis.usda.gov/article/How-do-you-keep-a-bag-lunch-safe" target="_blank" rel="noopener noreferrer">USDA/FSIS — transporte seguro de refeições</a> · <a href="https://ask.fsis.usda.gov/article/What-is-the-Danger-Zone" target="_blank" rel="noopener noreferrer">USDA/FSIS — faixa de temperatura de risco</a>. Consultadas em 09/11/2026.</p>
      </footer>
    </main>
  );
}
