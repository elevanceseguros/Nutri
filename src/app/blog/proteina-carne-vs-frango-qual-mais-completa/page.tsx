import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Proteína da Carne vs Frango: Qual é Mais Completa? | Nutry.life",
  description: "Frango é mais magro, carne vermelha tem mais ferro e creatina. Mas qual entrega mais proteína de qualidade por real gasto? Comparação honesta com dados.",
  keywords: "proteina carne vs frango, qual tem mais proteina frango ou carne, carne vermelha ou frango musculação, proteina animal completa",
  openGraph: { title: "Proteína da Carne vs Frango: Qual é Mais Completa? | Nutry.life", description: "Comparação honesta de proteína, gordura, ferro e custo-benefício.", url: "https://nutry.life/blog/proteina-carne-vs-frango-qual-mais-completa" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>10 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>5 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Proteína da Carne vs Frango: Qual é Mais Completa?</h1>
          <p className={styles.postExcerpt}>Frango lidera a marmita fit. Mas a carne vermelha tem nutrientes que o frango não entrega. Qual realmente é mais completa para quem treina?</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>

            <p>A dieta padrão de academia no Brasil é praticamente: frango, arroz e batata-doce. O frango virou sinônimo de alimentação saudável para quem treina — mas essa simplificação ignora alguns nutrientes importantes que só a carne vermelha entrega de forma significativa.</p>

            <h2>Proteína: quantidade e qualidade</h2>
            <p>Ambos têm proteína completa — todos os aminoácidos essenciais presentes. A quantidade por 100g cozido é similar:</p>
            <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                <thead>
                  <tr style={{ background: "#18181b", color: "#fff" }}>
                    <th style={{ padding: "10px 14px", textAlign: "left" }}>Nutriente (por 100g cozido)</th>
                    <th style={{ padding: "10px 14px", textAlign: "center" }}>Peito de Frango</th>
                    <th style={{ padding: "10px 14px", textAlign: "center" }}>Patinho (bovino)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Proteína", "31g ✓", "29g"],
                    ["Gordura total", "3,6g ✓", "8,5g"],
                    ["Ferro heme", "0,7mg", "2,9mg ✓"],
                    ["Zinco", "1,0mg", "5,8mg ✓"],
                    ["Vitamina B12", "0,3mcg", "2,6mcg ✓"],
                    ["Creatina natural", "~0,3g", "~0,5g ✓"],
                    ["Calorias", "165 kcal ✓", "218 kcal"],
                  ].map(([nutriente, frango, carne], i) => (
                    <tr key={nutriente} style={{ background: i % 2 === 0 ? "#f9fafb" : "#fff" }}>
                      <td style={{ padding: "10px 14px", fontWeight: 600 }}>{nutriente}</td>
                      <td style={{ padding: "10px 14px", textAlign: "center" }}>{frango}</td>
                      <td style={{ padding: "10px 14px", textAlign: "center" }}>{carne}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Onde a carne vermelha vence claramente</h2>
            <p><strong>Ferro heme:</strong> a carne vermelha tem 4x mais ferro e na forma heme — a mais absorvível pelo organismo (absorção de 15-35% vs 2-7% do ferro não-heme de vegetais). Para mulheres em idade fértil e pessoas com anemia, isso é clinicamente relevante.</p>
            <p><strong>Zinco:</strong> essencial para imunidade, testosterona e cicatrização. A carne bovina tem 6x mais zinco que o frango. Zinco é um dos minerais mais deficientes na população brasileira.</p>
            <p><strong>Vitamina B12:</strong> carne vermelha tem 8x mais B12. Fundamental para sistema nervoso e produção de glóbulos vermelhos.</p>
            <p><strong>Creatina natural:</strong> a carne tem mais creatina que o frango, o que pode contribuir para performance muscular sem suplementação — relevante para vegetarianos que não suplementam creatina.</p>

            <h2>Onde o frango vence</h2>
            <p><strong>Gordura e calorias:</strong> peito de frango tem 60% menos gordura e menos calorias. Para quem está em déficit calórico ou quer maximizar proteína por caloria, o frango é imbatível.</p>
            <p><strong>Custo:</strong> peito de frango é geralmente mais barato por grama de proteína que cortes bovinos magros.</p>

            <h2>Carne vermelha causa problema de saúde?</h2>
            <p>O debate existe, mas o contexto importa. O consumo de carnes processadas (salsicha, presunto, linguiça) tem associação mais forte com riscos cardiovasculares do que a carne vermelha não processada. Carne magra (patinho, coxão mole, alcatra) consumida com moderação — 3 a 4x por semana — está dentro do que estudos associam a uma alimentação saudável.</p>

            <h2>Conclusão: qual escolher?</h2>
            <p>A resposta mais inteligente é os dois. Use frango como base do dia a dia por ter mais proteína por caloria e menor custo. Inclua carne vermelha magra 3-4x por semana para garantir ferro, zinco e B12 — especialmente se você treina, menstrua ou tem histórico de deficiências.</p>
            <p>Dieta variada supera dieta restrita — mesmo quando a restrição parece "mais saudável".</p>

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
