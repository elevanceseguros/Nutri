import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Glutamina Vale a Pena? O Que a Ciência Realmente Diz | Nutry.life",
  description: "Glutamina é um dos suplementos mais vendidos, mas as evidências para quem treina são fracas. Entenda quando ela faz sentido e quando é dinheiro desperdiçado.",
  keywords: "glutamina vale a pena, glutamina para que serve, glutamina beneficios, glutamina imunidade, suplemento glutamina",
  openGraph: { title: "Glutamina Vale a Pena? O Que a Ciência Diz | Nutry.life", description: "O suplemento popular que a ciência questiona — entenda o porquê.", url: "https://nutry.life/blog/glutamina-vale-a-pena" },
};

export default function Post() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link>
      </header>
      <main className={styles.postContainer}>
        <article className={styles.post}>\n          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
          <div className={styles.postMeta}>
            <span className={styles.postCategory}>Suplementação</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>28 de junho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>5 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Glutamina Vale a Pena? O Que a Ciência Realmente Diz</h1>
          <p className={styles.postExcerpt}>Glutamina é um dos suplementos mais vendidos nas academias. Mas os estudos mostram que para a maioria das pessoas, ela não faz o que promete. Entenda quando ela de fato ajuda.</p>\n
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div>
              <strong>Transforme este conteúdo em um plano para você</strong>
              <p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link>
            </div>
          </div>
          <div className={styles.postContent}>
            <p>Se você frequenta academia, provavelmente já ouviu falar em glutamina. É vendida como aliada da recuperação, da imunidade e do ganho de massa. O problema é que a maioria dessas promessas não se sustenta nas pesquisas — pelo menos não para atletas recreativos e praticantes de musculação comum.</p>
            <h2>O que é a glutamina?</h2>
            <p>A glutamina é o aminoácido mais abundante no corpo humano. É produzida pelo próprio organismo e encontrada em abundância em proteínas da dieta — carne, peixe, ovos, laticínios e leguminosas. É considerada "condicionalmente essencial": na maioria das situações o corpo produz o suficiente, mas em estados de estresse severo (cirurgias, queimaduras, doenças graves) a demanda pode superar a produção.</p>
            <h2>O que as pesquisas dizem?</h2>
            <p>Para atletas recreativos e praticantes de musculação que se alimentam bem, a suplementação de glutamina <strong>não demonstrou benefícios consistentes</strong> nos estudos:</p>
            <ul>
              <li>Não aumenta síntese muscular quando a ingestão de proteína já é adequada</li>
              <li>Não acelera a recuperação de forma significativa</li>
              <li>Não reduz a percepção de fadiga em treinos convencionais</li>
            </ul>
            <h2>Quando a glutamina pode fazer sentido?</h2>
            <p>A glutamina tem evidências mais robustas em situações específicas:</p>
            <ul>
              <li><strong>Atletas de ultra-endurance</strong> — maratonistas, triatletas e ciclistas de longas distâncias podem ter queda imunológica após treinos extremos, onde a glutamina pode ajudar</li>
              <li><strong>Saúde intestinal</strong> — a mucosa do intestino usa glutamina como principal fonte de energia; pode ajudar em casos de permeabilidade intestinal aumentada (sempre com orientação médica)</li>
              <li><strong>Recuperação pós-cirúrgica</strong> — uso clínico com evidências sólidas</li>
            </ul>
            <h2>Conclusão honesta</h2>
            <p>Para quem treina musculação ou faz exercícios moderados e já consome proteína suficiente (1,6–2,2g/kg/dia), a glutamina provavelmente vai para o lixo. O dinheiro é melhor investido em proteína de qualidade — whey, frango, ovos — do que em glutamina isolada.</p>
            <p>Se você tem sintomas intestinais persistentes ou pratica esportes de resistência de alto volume, conversa com um nutricionista antes de suplementar.</p>
          </div>

          <div className={styles.premiumBanner} data-cta="nutry-plan-final">
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer colocar tudo isso em prática?</h2>
              <p>Receba um plano alimentar personalizado, com sugestões de refeições adaptadas à sua rotina e às suas preferências.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio personalizado</div>
              <div className={styles.premiumFeatureItem}>✅ Refeições práticas para o dia a dia</div>
              <div className={styles.premiumFeatureItem}>✅ Ajustado às suas preferências</div>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis para começar.</p>
          </div>

          <Link href="/blog" className={styles.backToBlogBottom}>← Voltar para todos os artigos</Link>\n        </article>
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Nutry.life — Informação nutricional baseada em evidências</p>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem", opacity: 0.6 }}>Este conteúdo é informativo e não substitui orientação de nutricionista.</p>
      </footer>
    </>
  );
}
