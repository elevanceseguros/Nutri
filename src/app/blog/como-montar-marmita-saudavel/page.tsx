import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Como Montar uma Marmita Saudável e Barata Para o Trabalho | Nutry.life",
  description: "Marmita saudável não precisa ser cara nem complicada. Veja como montar refeições equilibradas para o trabalho gastando pouco e sem perder tempo.",
  keywords: "marmita saudavel, como montar marmita, marmita barata, marmita para trabalho, meal prep brasil",
  openGraph: { title: "Como Montar uma Marmita Saudável e Barata | Nutry.life", description: "Refeições equilibradas para o trabalho sem gastar muito.", url: "https://nutry.life/blog/como-montar-marmita-saudavel" },
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
            <span className={styles.postCategory}>Alimentação Prática</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>26 de junho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>5 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Como Montar uma Marmita Saudável e Barata Para o Trabalho</h1>
          <p className={styles.postExcerpt}>Comer bem no trabalho não precisa ser complicado nem caro. Com uma estrutura simples e um pouco de organização, você come melhor gastando menos do que no restaurante.</p>\n
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div>
              <strong>Transforme este conteúdo em um plano para você</strong>
              <p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link>
            </div>
          </div>
          <div className={styles.postContent}>
            <p>Comer fora todos os dias sai caro — e nem sempre é saudável. A marmita resolve os dois problemas, mas muita gente acha que montar uma refeição equilibrada dá trabalho. Não precisa ser assim.</p>
            <h2>A estrutura do prato equilibrado</h2>
            <p>Use o modelo do prato saudável como guia:</p>
            <ul>
              <li><strong>½ do prato:</strong> vegetais e legumes (crua, cozida, refogada — quanto mais variedade, melhor)</li>
              <li><strong>¼ do prato:</strong> proteína (frango, ovo, carne, peixe, tofu, leguminosas)</li>
              <li><strong>¼ do prato:</strong> carboidrato (arroz, batata, macarrão integral, mandioca)</li>
            </ul>
            <p>Esse modelo simples garante equilíbrio sem precisar contar calorias.</p>
            <h2>Proteínas acessíveis para marmita</h2>
            <ul>
              <li><strong>Frango</strong> — o custo-benefício imbatível. Asse ou grelhe uma porção maior no domingo e use durante a semana</li>
              <li><strong>Ovo</strong> — barato, rápido e versátil. Mexido, cozido, omelete</li>
              <li><strong>Feijão e lentilha</strong> — proteína vegetal barata com fibras e ferro</li>
              <li><strong>Sardinha em lata</strong> — proteína + ômega-3 + praticidade</li>
            </ul>
            <h2>Dicas de organização (meal prep)</h2>
            <p>Separe 1 a 2 horas no domingo para preparar o básico:</p>
            <ul>
              <li>Cozinhe arroz e feijão para a semana toda</li>
              <li>Tempere e asse frango em pedaços grandes</li>
              <li>Lave e higienize as folhas para salada</li>
              <li>Cozinhe batatas ou legumes que duram bem na geladeira</li>
            </ul>
            <p>Com a base pronta, montar cada marmita leva menos de 5 minutos.</p>
            <h2>Quanto custa uma marmita saudável?</h2>
            <p>Com organização, é possível montar uma refeição completa por <strong>R$ 8 a R$ 15</strong> — bem abaixo dos R$ 25 a R$ 50 de um restaurante por quilo em São Paulo. Em um mês de dias úteis, a diferença pode ser de R$ 250 a R$ 700.</p>
            <h2>Como evitar que a marmita fique ruim?</h2>
            <p>Leve sempre na bolsa térmica com gelox. Não misture alimentos quentes e frios na mesma marmita. Molhos e temperos líquidos (como azeite ou limão) sempre separados — adicionados na hora de comer para não encharcar a salada.</p>
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
