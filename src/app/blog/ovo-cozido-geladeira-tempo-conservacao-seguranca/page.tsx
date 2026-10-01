import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Ovo Cozido: Quanto Tempo Dura na Geladeira e Como Conservar";
const description = "Veja quando refrigerar, por quanto tempo conservar ovo cozido com ou sem casca e como organizar o armazenamento com segurança.";
const url = "https://www.nutry.life/blog/ovo-cozido-geladeira-tempo-conservacao-seguranca";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description, alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-10-01", modifiedTime: "2026-10-01" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-10-01", dateModified: "2026-10-01", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🥚 Segurança alimentar · 6 min de leitura · 01 de outubro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Ovo cozido é prático para lanches e refeições, mas precisa de refrigeração rápida e controle de data. Como referência doméstica, FDA e USDA orientam refrigerar em até duas horas após o cozimento e consumir em até uma semana, com ou sem casca.</p>

          <div className={styles.articleCtaTop} data-cta="top"><div>
            <strong>Inclua preparos simples no planejamento da semana</strong>
            <p>Gere uma sugestão de plano alimentar e adapte combinações e porções às suas necessidades e à sua rotina.</p>
            <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
          </div></div>

          <h2>Quanto tempo o ovo cozido dura na geladeira?</h2>
          <p>Use o prazo de até sete dias como limite prático quando o ovo foi cozido, resfriado e refrigerado corretamente. Esse prazo não recomeça quando a casca é retirada. Marque a data do cozimento no recipiente para não depender da memória.</p>
          <p>A recomendação vale para ovo cozido firme, com casca ou descascado. Preparações com ovo, molhos ou recheios podem ter prazos diferentes porque incluem outros ingredientes e mais manipulação.</p>

          <h2>Quando levar para a geladeira?</h2>
          <p>Não deixe o ovo cozido sobre a bancada durante horas. A orientação geral é refrigerar alimentos perecíveis em até duas horas; em ambiente acima de aproximadamente 32 °C, o intervalo cai para uma hora.</p>
          <p>Depois do cozimento, resfrie os ovos sem demora. Um banho de água fria ou gelada ajuda a interromper o cozimento e facilita levar o alimento à refrigeração dentro do intervalo recomendado.</p>

          <h2>Com casca ou descascado?</h2>
          <p>A casca oferece uma barreira física e pode reduzir ressecamento e absorção de odores. Se a praticidade exigir descascar antes, guarde os ovos em recipiente limpo, fechado e identificado. Não deixe ovos descascados soltos na prateleira.</p>
          <p>Casca rachada durante o cozimento não significa automaticamente descarte. O que importa é ter sido completamente cozido, manipulado com utensílios limpos e refrigerado no tempo adequado. Se rachou antes do preparo e ficou exposto, a avaliação muda.</p>

          <h2>Onde guardar na geladeira?</h2>
          <ul>
            <li>Use uma prateleira interna, onde a temperatura tende a variar menos do que na porta.</li>
            <li>Mantenha a geladeira a 4 °C ou menos.</li>
            <li>Separe ovos cozidos e alimentos prontos de carnes e ovos crus.</li>
            <li>Use recipiente fechado e anote a data de preparo.</li>
            <li>Retire apenas a quantidade que será consumida.</li>
          </ul>

          <h2>Pode congelar ovo cozido?</h2>
          <p>O USDA informa que ovos cozidos inteiros não congelam bem. A clara tende a ficar borrachuda e liberar água depois do descongelamento. É mais previsível cozinhar uma quantidade que possa ser consumida dentro de uma semana.</p>
          <p>Congelar uma preparação que leva ovo é outra situação: qualidade e segurança dependem dos demais ingredientes, do método e do resfriamento. Siga orientação específica para a receita.</p>

          <h2>Posso levar na lancheira?</h2>
          <p>Sim, desde que o ovo permaneça frio. Use bolsa térmica com gelo reutilizável e mantenha o recipiente fechado. O prazo fora de refrigeração continua valendo; a bolsa não deve ficar no sol ou dentro de carro quente.</p>
          <p>Para crianças pequenas, idosos, gestantes e pessoas imunossuprimidas, redobre os cuidados com cocção, temperatura e tempo. Necessidades individuais devem ser discutidas com profissional de saúde.</p>

          <h2>Cheiro de enxofre indica que estragou?</h2>
          <p>O anel esverdeado ao redor da gema e um odor sulfuroso logo após o cozimento podem resultar de cozimento prolongado e não provam deterioração. Por outro lado, aparência e cheiro normais também não garantem segurança.</p>
          <p>Se o ovo ficou tempo demais fora da geladeira, a data é desconhecida, houve falha prolongada de energia ou o recipiente parece contaminado, descarte sem provar. Degustação não é teste de segurança.</p>

          <h2>Erros comuns</h2>
          <ul>
            <li>Deixar os ovos cozidos fora da geladeira até o dia seguinte.</li>
            <li>Misturar ovos de datas diferentes sem identificação.</li>
            <li>Guardar descascados e descobertos.</li>
            <li>Usar somente cheiro e aparência para decidir.</li>
            <li>Levar na bolsa comum por várias horas.</li>
            <li>Congelar ovos inteiros esperando a mesma textura.</li>
          </ul>

          <h2>Checklist de conservação</h2>
          <ol>
            <li>Cozinhe completamente conforme o uso planejado.</li>
            <li>Resfrie sem deixar horas à temperatura ambiente.</li>
            <li>Refrigere em até duas horas — ou uma hora em calor intenso.</li>
            <li>Guarde coberto, a 4 °C ou menos.</li>
            <li>Identifique a data e consuma em até sete dias.</li>
            <li>Ao transportar, mantenha frio.</li>
          </ol>

          <p>Leia também: <Link href="/blog/como-guardar-ovos-geladeira-lavagem-seguranca">como guardar ovos crus</Link> · <Link href="/blog/lancheira-infantil-saudavel-pratica-segura">como organizar uma lancheira segura</Link> · <Link href="/blog/comida-quente-geladeira-resfriar-sobras-seguranca">como resfriar sobras com segurança</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}><h2>Planeje refeições práticas para a sua rotina</h2><p>Gere uma sugestão inicial e procure orientação profissional para necessidades, restrições ou condições individuais.</p></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou orientação da vigilância sanitária. Crianças pequenas, gestantes, idosos, pessoas imunossuprimidas e quem apresenta sintomas precisam de cuidado individual.</p>
        <p>Fontes: <a href="https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety" target="_blank" rel="noopener noreferrer">FDA — segurança de ovos</a> · <a href="https://ask.usda.gov/s/article/How-long-can-you-keep-hard-cooked-eggs" target="_blank" rel="noopener noreferrer">USDA — conservação de ovos cozidos</a> · <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration" target="_blank" rel="noopener noreferrer">USDA/FSIS — refrigeração</a>. Consultadas em 01/10/2026.</p>
      </footer>
    </main>
  );
}
