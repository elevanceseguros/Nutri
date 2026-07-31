import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Ferritina Baixa: Sintomas, Causas e O Que Comer Para Recuperar | Nutry.life",
  description: "Ferritina baixa é o estágio anterior à anemia — e muita gente tem sem saber. Cansaço, queda de cabelo e falta de ar podem ser sinais. Saiba como identificar e o que fazer.",
  openGraph: { title: "Ferritina Baixa: Sintomas, Causas e O Que Comer Para Recuperar | Nutry.life", description: "Ferritina baixa é o estágio anterior à anemia — e muita gente tem sem saber. Cansaço, queda de cabelo e falta de ar podem ser sinais. Saiba como identificar e o que fazer.", url: "https://nutry.life/blog/ferritina-baixa-sintomas-e-o-que-comer" },
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
            <span className={styles.postCategory}>Saúde e Nutrição</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>24 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Ferritina Baixa: Sintomas, Causas e O Que Comer Para Recuperar</h1>
          <p className={styles.postExcerpt}>Ferritina baixa é o estágio anterior à anemia — e muita gente tem sem saber. Cansaço, queda de cabelo e falta de ar podem ser sinais. Saiba como identificar e o que fazer.</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>Ferritina é a proteína que armazena ferro no organismo. Quando os estoques caem, o corpo ainda consegue manter a hemoglobina normal por um tempo — por isso a ferritina baixa muitas vezes não aparece no hemograma comum. Mas os sintomas já estão presentes.</p>
            <h2>Sintomas de ferritina baixa</h2>
            <ul>
              <li><strong>Fadiga desproporcional</strong> — cansaço mesmo depois de dormir bem</li>
              <li><strong>Queda de cabelo</strong> — um dos sinais mais comuns e frequentemente ignorados</li>
              <li><strong>Falta de ar em esforços leves</strong></li>
              <li><strong>Unhas frágeis e quebradiças</strong></li>
              <li><strong>Dificuldade de concentração</strong> — "névoa cerebral"</li>
              <li><strong>Palpitações</strong> — especialmente em mulheres com fluxo menstrual intenso</li>
              <li><strong>Síndrome das pernas inquietas</strong> — sensação de formigamento à noite</li>
            </ul>
            <h2>Quem tem mais risco?</h2>
            <p>Mulheres em idade fértil — especialmente com fluxo intenso. Vegetarianos e veganos — ferro não-heme (vegetal) tem absorção 2-7x menor que ferro heme (animal). Corredores de longa distância — impacto repetitivo destrói glóbulos vermelhos. Grávidas — demanda aumenta significativamente.</p>
            <h2>Alimentos ricos em ferro heme (mais absorvível)</h2>
            <ul>
              <li>Fígado bovino (6,5mg/100g) — fonte mais concentrada</li>
              <li>Carne bovina (2-3mg/100g)</li>
              <li>Sardinha em lata (2,9mg/100g)</li>
              <li>Ostra (5-7mg/100g)</li>
            </ul>
            <h2>Alimentos ricos em ferro não-heme</h2>
            <ul>
              <li>Feijão cozido (3mg/100g)</li>
              <li>Lentilha (3,3mg/100g)</li>
              <li>Espinafre (2,7mg/100g)</li>
              <li>Tofu (2,7mg/100g)</li>
            </ul>
            <h2>Como potencializar a absorção</h2>
            <p>Vitamina C aumenta a absorção de ferro não-heme em até 3x — comer feijão com limão, laranja ou pimentão vermelho é uma estratégia eficaz. Evite café, chá preto e laticínios junto com refeições ricas em ferro — inibem a absorção.</p>
            <h2>Quando suplementar?</h2>
            <p>Suplementação de ferro só com orientação médica — excesso de ferro causa danos oxidativos. Faça o exame de ferritina sérica antes de decidir. Valores abaixo de 30 ng/mL já indicam reservas baixas mesmo com hemoglobina normal.</p>
          </div>

          <div className={styles.premiumBanner} data-cta="nutry-plan-final">
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}><h2>Quer colocar tudo isso em prática?</h2><p>Receba um plano alimentar personalizado, com sugestões de refeições adaptadas à sua rotina e às suas preferências.</p></div>
            <div className={styles.premiumFeatures}><div className={styles.premiumFeatureItem}>✅ Cardápio personalizado</div><div className={styles.premiumFeatureItem}>✅ Refeições práticas para o dia a dia</div><div className={styles.premiumFeatureItem}>✅ Ajustado às suas preferências</div></div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar grátis →</Link><p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis para começar.</p>
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
