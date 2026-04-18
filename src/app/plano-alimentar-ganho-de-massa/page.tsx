import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Plano Alimentar para Ganho de Massa — Nutry.life",
  description: "Crie seu plano alimentar para ganho de massa muscular com IA. Receitas brasileiras com superávit calórico, alto teor proteico e modo de preparo. Grátis.",
  keywords: "plano alimentar ganho de massa, cardápio para ganhar massa, dieta para hipertrofia, alimentação para musculação",
  openGraph: {
    title: "Plano Alimentar para Ganho de Massa — Nutry.life",
    description: "Plano alimentar para ganho de massa com alimentos brasileiros acessíveis.",
    url: "https://nutry.life/plano-alimentar-ganho-de-massa",
  },
};

export default function PlanoGanhoDeMassa() {
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
            Plano alimentar para <em className={styles.heroEm}>ganhar massa</em> muscular.
          </h1>
          <p className={styles.heroSub}>
            Nossa IA monta um cardápio com superávit calórico e alto teor proteico usando alimentos brasileiros acessíveis para maximizar seu ganho de massa muscular.
          </p>
          <Link href="/" className={styles.btnPrimary} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '4rem' }}>
            Gerar meu plano de massa →
          </Link>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>O que é um superávit calórico?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              Para ganhar massa muscular, você precisa consumir mais calorias do que gasta — isso se chama superávit calórico. Nossa IA monta um plano com <strong>2.500 kcal diárias</strong>, com pelo menos <strong>2g de proteína por kg de peso corporal</strong>, distribuídas em refeições estratégicas ao longo do dia para maximizar a síntese proteica muscular.
            </p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Melhores alimentos para ganho de massa</span>
            </div>
            <div className={styles.qGrid}>
              {[
                { num: "🍗", title: "Frango grelhado", desc: "Proteína magra e acessível." },
                { num: "🥚", title: "Ovos", desc: "Proteína completa com gorduras boas." },
                { num: "🍚", title: "Arroz e batata", desc: "Energia para treinos intensos." },
                { num: "🐟", title: "Atum e sardinha", desc: "Proteína + ômega-3 anti-inflamatório." },
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
              <div className={styles.tipTitle}>Dica para hipertrofia</div>
              <div className={styles.tipText}>
                A refeição pós-treino é a mais importante do dia. Consuma proteína e carboidratos até 1 hora após o treino para maximizar a recuperação e o crescimento muscular.
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Macros do plano de ganho de massa</span>
            </div>
            <div className={styles.macrosCard}>
              {[
                { val: "2500", lbl: "kcal" },
                { val: "200g", lbl: "proteína" },
                { val: "280g", lbl: "carbs" },
                { val: "70g", lbl: "gorduras" },
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
                { q: "Preciso de suplementos para ganhar massa?", a: "Não necessariamente. Com uma alimentação bem estruturada você consegue atingir suas metas de proteína e calorias com comida de verdade." },
                { q: "Quantas refeições devo fazer para ganhar massa?", a: "O ideal é entre 4 e 6 refeições por dia para manter os aminoácidos circulando no sangue e estimular a síntese proteica continuamente." },
                { q: "Posso ganhar massa sendo vegetariano?", a: "Sim! Nossa IA monta planos de ganho de massa para vegetarianos usando ovos, laticínios, leguminosas e grãos." },
                { q: "Quanto tempo para ver resultados?", a: "Com treino consistente e alimentação adequada, é possível ganhar de 1 a 2 kg de massa muscular por mês naturalmente." },
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
              <h2>Crie seu plano de massa agora</h2>
              <p>Sem cadastro, sem cartão. Grátis para começar.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu plano de massa →
            </Link>
            <p className={styles.premiumFootnote}>Sem compromisso. 100% grátis.</p>
          </div>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Preciso de suplementos para ganhar massa?", "acceptedAnswer": { "@type": "Answer", "text": "Não necessariamente. Com alimentação bem estruturada você atinge suas metas com comida de verdade." } },
          { "@type": "Question", "name": "Quantas refeições devo fazer para ganhar massa?", "acceptedAnswer": { "@type": "Answer", "text": "O ideal é entre 4 e 6 refeições por dia." } },
        ]
      })}} />
    </>
  );
}
