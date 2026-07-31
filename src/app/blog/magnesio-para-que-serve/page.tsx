import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Magnésio: Para Que Serve, Quem Precisa e Qual Tipo Comprar | Nutry.life",
  description: "Magnésio é um dos minerais mais deficientes na população brasileira. Saiba para que serve, como identificar deficiência e qual forma de magnésio realmente funciona.",
  keywords: "magnesio para que serve, magnesio deficiencia, magnesio glicinato, magnesio malato, suplemento magnesio",
  openGraph: {
    title: "Magnésio: Para Que Serve, Quem Precisa e Qual Tipo Comprar | Nutry.life",
    description: "O mineral que falta em quase todo mundo — e que tipo realmente funciona.",
    url: "https://nutry.life/blog/magnesio-para-que-serve"
  },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>08 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Magnésio: Para Que Serve, Quem Precisa e Qual Tipo Comprar</h1>
          <p className={styles.postExcerpt}>O magnésio participa de mais de 300 reações enzimáticas no corpo. Estudos mostram que mais de 70% dos brasileiros não consomem o suficiente. Saiba o que isso significa na prática.</p>
          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div><strong>Transforme este conteúdo em um plano para você</strong><p>A Nutry.life monta um cardápio personalizado para sua rotina, preferências e objetivo.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link></div>
          </div>
          <div className={styles.postContent}>
            <p>O magnésio é um dos minerais mais subestimados — e mais deficientes — na população brasileira. Diferente do cálcio e do ferro, que recebem mais atenção, a deficiência de magnésio passa despercebida e pode se manifestar de formas muito variadas: cãibras, insônia, ansiedade, fadiga, dores de cabeça e pressão alta.</p>

            <h2>Para que o magnésio serve?</h2>
            <p>O magnésio participa de mais de 300 reações enzimáticas no organismo. As principais funções:</p>
            <ul>
              <li><strong>Função muscular</strong> — regula a contração e relaxamento muscular. Deficiência causa cãibras e espasmos</li>
              <li><strong>Sistema nervoso</strong> — regula neurotransmissores como GABA, responsável pelo relaxamento e sono</li>
              <li><strong>Saúde cardiovascular</strong> — regula a pressão arterial e o ritmo cardíaco</li>
              <li><strong>Metabolismo energético</strong> — essencial para produção de ATP (energia celular)</li>
              <li><strong>Saúde óssea</strong> — junto com cálcio e vitamina D, contribui para densidade óssea</li>
              <li><strong>Controle glicêmico</strong> — melhora sensibilidade à insulina</li>
            </ul>

            <h2>Sinais de deficiência</h2>
            <p>A deficiência de magnésio raramente aparece em exames de sangue convencionais — apenas 1% do magnésio do corpo está no sangue. Os sinais mais comuns:</p>
            <ul>
              <li>Cãibras noturnas frequentes</li>
              <li>Dificuldade para dormir ou sono não reparador</li>
              <li>Ansiedade e irritabilidade sem causa clara</li>
              <li>Fadiga mesmo dormindo bem</li>
              <li>Dores de cabeça frequentes ou enxaqueca</li>
              <li>Palpitações cardíacas leves</li>
            </ul>

            <h2>Quais tipos de magnésio existem e qual escolher?</h2>
            <p>O mercado tem dezenas de formas de magnésio. As mais relevantes:</p>

            <p><strong>Magnésio Glicinato</strong> — ligado ao aminoácido glicina. Melhor absorção e tolerância gástrica. Excelente para sono, ansiedade e relaxamento muscular. A forma mais recomendada para uso geral.</p>

            <p><strong>Magnésio Malato</strong> — ligado ao ácido málico. Boa absorção e tem propriedades energizantes. Melhor para quem tem fadiga crônica ou fibromialgia.</p>

            <p><strong>Magnésio Treonato</strong> — atravessa a barreira hematoencefálica com maior eficiência. Estudos mostram benefícios para cognição e memória. Mais caro.</p>

            <p><strong>Magnésio Óxido</strong> — a forma mais barata e mais vendida em farmácias. Absorção muito baixa (4%). Evite — serve mais como laxante do que suplemento.</p>

            <p><strong>Magnésio Citrato</strong> — boa absorção, intermediário em custo. Pode causar efeito laxante em doses altas.</p>

            <h2>Dose e quando tomar</h2>
            <p>A ingestão diária recomendada é de 300–420mg para adultos. Em suplementação, doses de <strong>200–400mg de magnésio elementar</strong> por dia são comuns. Tome preferencialmente à noite — o efeito relaxante do magnésio favorece o sono.</p>

            <h2>Fontes alimentares de magnésio</h2>
            <p>Antes de suplementar, vale otimizar a dieta. Alimentos ricos em magnésio: folhas verdes escuras (espinafre, couve), sementes de abóbora, castanha-do-pará, amendoim, feijão preto, chocolate amargo (70%+), abacate e banana.</p>

            <h2>Conclusão</h2>
            <p>Se você tem cãibras frequentes, dorme mal ou sente ansiedade sem causa clara, vale considerar a suplementação de magnésio — especialmente glicinato ou malato. É um dos suplementos com melhor relação custo-benefício para qualidade de vida geral.</p>
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
