import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Dieta para Saúde — Plano Alimentar com IA | Nutry.life",
  description: "Monte seu plano alimentar focado em saúde e bem-estar com IA. Cardápio anti-inflamatório com alimentos brasileiros nutritivos. Grátis.",
  keywords: "dieta para saúde, alimentação saudável, cardápio saudável brasileiro, dieta anti-inflamatória",
  openGraph: {
    title: "Dieta para Saúde — Nutry.life",
    description: "Plano alimentar focado em saúde com alimentos brasileiros nutritivos.",
    url: "https://nutry.life/dieta-para-saude",
  },
};

export default function DietaParaSaude() {
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
            Dieta para <em className={styles.heroEm}>saúde</em> e bem-estar total.
          </h1>
          <p className={styles.heroSub}>
            Alimentação é remédio. Nossa IA monta um cardápio anti-inflamatório, rico em antioxidantes e nutrientes essenciais, usando alimentos brasileiros que cuidam do seu corpo de dentro para fora.
          </p>
          <Link href="/" className={styles.btnPrimary} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '4rem' }}>
            Gerar meu plano de saúde →
          </Link>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>Superalimentos brasileiros</span>
            </div>
            <div className={styles.qGrid}>
              {[
                { num: "🫐", title: "Açaí", desc: "Rico em antocianinas e antioxidantes." },
                { num: "🥑", title: "Abacate", desc: "Gorduras boas e vitamina E." },
                { num: "🌿", title: "Cúrcuma", desc: "Anti-inflamatório poderoso." },
                { num: "🐟", title: "Sardinha", desc: "Ômega-3 e vitamina D." },
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
              <div className={styles.tipTitle}>Dica de saúde</div>
              <div className={styles.tipText}>
                A diversidade alimentar é a chave para uma microbiota intestinal saudável. Tente consumir pelo menos 30 alimentos vegetais diferentes por semana — isso inclui frutas, legumes, verduras, grãos, castanhas e temperos.
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Macros do plano de saúde</span>
            </div>
            <div className={styles.macrosCard}>
              {[
                { val: "1800", lbl: "kcal" },
                { val: "130g", lbl: "proteína" },
                { val: "190g", lbl: "carbs" },
                { val: "70g", lbl: "gorduras" },
              ].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Crie seu plano de saúde agora</h2>
              <p>Sem cadastro, sem cartão. Grátis para começar.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu plano de saúde →
            </Link>
            <p className={styles.premiumFootnote}>Sem compromisso. 100% grátis.</p>
          </div>
        </div>
      </main>
    </>
  );
}
