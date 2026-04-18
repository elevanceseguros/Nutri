import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Cardápio Low Carb — Plano Alimentar com IA | Nutry.life",
  description: "Monte seu cardápio low carb personalizado com IA. Receitas brasileiras com poucos carboidratos, modo de preparo e substituição de ingredientes. Grátis.",
  keywords: "cardápio low carb, dieta low carb, cardápio low carb semanal, receitas low carb brasileiras",
  openGraph: {
    title: "Cardápio Low Carb — Nutry.life",
    description: "Monte seu cardápio low carb personalizado em segundos com IA.",
    url: "https://nutry.life/cardapio-low-carb",
  },
};

export default function CardapioLowCarb() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Link href="/login" className={styles.btnEntrar}>Entrar</Link>
          <div className={styles.badge}>Beta</div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="fade-up">
          <div className={styles.heroEyebrow}>
            <div className={styles.heroLine} />
            <span className={styles.heroEyebrowText}>Plano Alimentar com IA</span>
          </div>
          <h1 className={styles.heroTitle}>
            Cardápio <em className={styles.heroEm}>low carb</em> feito para você.
          </h1>
          <p className={styles.heroSub}>
            Nossa IA monta um cardápio low carb com alimentos brasileiros acessíveis, reduzindo carboidratos sem abrir mão do sabor e da praticidade.
          </p>
          <Link href="/" className={styles.btnPrimary} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '4rem' }}>
            Gerar meu cardápio low carb →
          </Link>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>O que é a dieta low carb?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              A dieta low carb reduz o consumo de carboidratos para entre 50g e 150g por dia, priorizando proteínas e gorduras boas. Isso faz o corpo usar a gordura como fonte de energia, acelerando o emagrecimento e melhorando os níveis de açúcar no sangue. No Nutry.life, a IA monta cardápios low carb com ingredientes simples como ovos, frango, legumes e azeite.
            </p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Benefícios do low carb</span>
            </div>
            <div className={styles.qGrid}>
              {[
                { num: "🔥", title: "Queima de gordura", desc: "Corpo usa gordura como combustível principal." },
                { num: "💪", title: "Preserva músculo", desc: "Alto teor proteico mantém a massa magra." },
                { num: "⚡", title: "Mais energia", desc: "Sem picos de glicose, energia constante." },
                { num: "🧠", title: "Foco mental", desc: "Gorduras boas alimentam o cérebro." },
              ].map((item) => (
                <div key={item.num} className={styles.qBtn} style={{ cursor: 'default' }}>
                  <span className={styles.qBtnIcon} style={{ background: '#dcfce7', color: '#16a34a', fontWeight: 800, fontSize: '1.2rem' }}>{item.num}</span>
                  <span className={styles.qBtnLabel}>{item.title}</span>
                  <span className={styles.qBtnSub}>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>💡</div>
            <div>
              <div className={styles.tipTitle}>Dica low carb</div>
              <div className={styles.tipText}>
                Nos primeiros dias do low carb, é normal sentir cansaço e dor de cabeça — é a "gripe low carb". Beba bastante água e aumente o sal para repor eletrólitos. Em 3-5 dias seu corpo se adapta.
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Macros do cardápio low carb</span>
            </div>
            <div className={styles.macrosCard}>
              {[
                { val: "1800", lbl: "kcal" },
                { val: "150g", lbl: "proteína" },
                { val: "80g", lbl: "carbs" },
                { val: "100g", lbl: "gorduras" },
              ].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>Perguntas frequentes</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: "Posso comer arroz e feijão no low carb?", a: "O arroz e feijão são limitados no low carb tradicional. Nossa IA substitui por opções como couve-flor, abobrinha e outros legumes de baixo índice glicêmico." },
                { q: "Low carb é igual a keto?", a: "Não. O keto é mais restritivo, com menos de 50g de carbs por dia. O low carb é mais flexível e sustentável para o dia a dia brasileiro." },
                { q: "Quanto tempo para ver resultados?", a: "A maioria das pessoas nota diferença na balança e no inchaço já na primeira semana, pois o corpo elimina o excesso de água retida pelos carboidratos." },
                { q: "Funciona para quem treina?", a: "Sim! Nossa IA adapta o cardápio low carb para objetivos de emagrecimento ou ganho de massa muscular." },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem 1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontWeight: 800, color: '#111827', marginBottom: '6px', fontSize: '1rem' }}>❓ {faq.q}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Crie seu cardápio low carb agora</h2>
              <p>Sem cadastro, sem cartão. Grátis para começar.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu cardápio low carb →
            </Link>
            <p className={styles.premiumFootnote}>Sem compromisso. 100% grátis.</p>
          </div>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Posso comer arroz e feijão no low carb?", "acceptedAnswer": { "@type": "Answer", "text": "O arroz e feijão são limitados. Nossa IA substitui por opções de baixo índice glicêmico." } },
          { "@type": "Question", "name": "Low carb é igual a keto?", "acceptedAnswer": { "@type": "Answer", "text": "Não. O keto é mais restritivo. O low carb é mais flexível e sustentável." } },
        ]
      })}} />
    </>
  );
}
