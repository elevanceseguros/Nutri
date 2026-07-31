import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Proteína Vegetal Completa: Como Combinar Alimentos Para Não Faltar Aminoácido | Nutry.life",
  description: "Proteínas vegetais são geralmente incompletas — faltam um ou mais aminoácidos essenciais. Mas com as combinações certas, é possível ter proteína completa sem nenhum alimento animal.",
  openGraph: { title: "Proteína Vegetal Completa: Como Combinar Alimentos Para Não Faltar Aminoácido | Nutry.life", description: "Proteínas vegetais são geralmente incompletas — faltam um ou mais aminoácidos essenciais. Mas com as combinações certas, é possível ter proteína completa sem nenhum alimento animal.", url: "https://nutry.life/blog/proteina-vegetal-completa-como-combinar" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>20 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Proteína Vegetal Completa: Como Combinar Alimentos Para Não Faltar Aminoácido</h1>
          <p className={styles.postExcerpt}>Proteínas vegetais são geralmente incompletas — faltam um ou mais aminoácidos essenciais. Mas com as combinações certas, é possível ter proteína completa sem nenhum alimento animal.</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>Uma das principais preocupações de vegetarianos e veganos é a qualidade da proteína. Proteínas animais são completas — têm todos os aminoácidos essenciais em boas quantidades. Já a maioria das proteínas vegetais é incompleta — falta um ou mais aminoácidos essenciais. Mas isso não significa que uma dieta plant-based seja deficiente em proteína.</p>
            <h2>O conceito de aminoácido limitante</h2>
            <p>Cada fonte vegetal de proteína tem um "ponto fraco" — um aminoácido presente em menor quantidade, chamado de aminoácido limitante. Leguminosas (feijão, lentilha, grão-de-bico) são ricas em lisina mas pobres em metionina. Cereais (arroz, trigo, milho) são ricos em metionina mas pobres em lisina.</p>
            <h2>A solução: complementaridade proteica</h2>
            <p>Combinando leguminosas + cereais, os aminoácidos se complementam — o ponto fraco de um é compensado pelo ponto forte do outro. A combinação clássica brasileira — <strong>arroz com feijão</strong> — é um exemplo perfeito de proteína complementar. Não à toa é a base da dieta popular mais consumida no Brasil.</p>
            <h2>Outras combinações eficazes</h2>
            <ul>
              <li>Lentilha + arroz integral</li>
              <li>Grão-de-bico + tahine (pasta de gergelim)</li>
              <li>Feijão + milho (tortilha mexicana)</li>
              <li>Tofu + arroz</li>
              <li>Ervilha + arroz</li>
            </ul>
            <h2>Precisa combinar na mesma refeição?</h2>
            <p>Não necessariamente. Pesquisas mais recentes mostram que o pool de aminoácidos do organismo equilibra ao longo do dia. Comer feijão no almoço e arroz no jantar ainda oferece complementaridade. O que importa é a diversidade ao longo do dia, não a combinação exata em cada refeição.</p>
            <h2>Fontes vegetais com proteína mais completa</h2>
            <p>Soja é a proteína vegetal mais completa — tem todos os aminoácidos essenciais em boas quantidades. Quinoa também tem perfil completo. Tofu, tempê e edamame (soja) são boas fontes para quem quer proteína vegetal sem precisar combinar.</p>
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
