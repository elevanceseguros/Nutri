import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Plano Alimentar Vegetariano para Emagrecer — Nutry.life",
  description: "Monte seu plano alimentar vegetariano para emagrecer com IA. Sem carne, com déficit calórico e receitas brasileiras nutritivas. Grátis.",
  keywords: "plano alimentar vegetariano emagrecer, dieta vegetariana para emagrecer, cardápio vegetariano low calorie",
  openGraph: {
    title: "Plano Vegetariano para Emagrecer — Nutry.life",
    description: "Plano alimentar vegetariano com déficit calórico e alimentos brasileiros.",
    url: "https://nutry.life/plano-alimentar-vegetariano-emagrecer",
  },
};

export default function PlanoVegetarianoEmagrecer() {
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
            Plano <em className={styles.heroEm}>vegetariano</em> para emagrecer.
          </h1>
          <p className={styles.heroSub}>
            Emagreça sem comer carne. Nossa IA monta um cardápio vegetariano com déficit calórico, rico em fibras e proteínas vegetais, para você emagrecer com saúde e sem passar fome.
          </p>
          <Link href="/" className={styles.btnPrimary} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '4rem' }}>
            Gerar meu plano vegetariano →
          </Link>

          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>💡</div>
            <div>
              <div className={styles.tipTitle}>Por que vegetariano emagrece mais fácil?</div>
              <div className={styles.tipText}>
                Dietas vegetarianas têm menor densidade calórica — você come mais volume com menos calorias. As fibras dos vegetais aumentam a saciedade e reduzem naturalmente a ingestão calórica sem você precisar contar cada caloria.
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>Macros do plano vegetariano para emagrecer</span>
            </div>
            <div className={styles.macrosCard}>
              {[
                { val: "1500", lbl: "kcal" },
                { val: "110g", lbl: "proteína" },
                { val: "160g", lbl: "carbs" },
                { val: "50g", lbl: "gorduras" },
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
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Perguntas frequentes</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: "Vegetariano emagrece mais rápido?", a: "Estudos mostram que vegetarianos tendem a ter IMC mais baixo. A alta ingestão de fibras e a menor densidade calórica facilitam o emagrecimento." },
                { q: "Como não passar fome com 1.500 kcal?", a: "Priorizando alimentos com alta saciedade: ovos, leguminosas, vegetais fibrosos e iogurte grego. Nossa IA distribui as refeições estrategicamente." },
                { q: "Posso combinar com exercícios?", a: "Sim! Para quem treina, ajustamos as proteínas para no mínimo 1,6g por kg de peso para preservar a massa muscular durante o emagrecimento." },
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
              <h2>Crie seu plano vegetariano agora</h2>
              <p>Sem cadastro, sem cartão. Grátis para começar.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu plano vegetariano →
            </Link>
            <p className={styles.premiumFootnote}>Sem compromisso. 100% grátis.</p>
          </div>
        </div>
      </main>
    </>
  );
}
