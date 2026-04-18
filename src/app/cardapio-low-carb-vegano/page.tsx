import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Cardápio Low Carb Vegano — Plano Alimentar com IA | Nutry.life",
  description: "Monte seu cardápio low carb vegano com IA. 100% vegetal e com poucos carboidratos, usando alimentos brasileiros acessíveis. Grátis.",
  keywords: "cardápio low carb vegano, dieta vegana low carb, low carb plant based, receitas low carb veganas",
  openGraph: {
    title: "Cardápio Low Carb Vegano — Nutry.life",
    description: "Cardápio 100% vegetal e low carb com alimentos brasileiros.",
    url: "https://nutry.life/cardapio-low-carb-vegano",
  },
};

export default function CardapioLowCarbVegano() {
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
            Cardápio <em className={styles.heroEm}>low carb vegano</em> nutritivo.
          </h1>
          <p className={styles.heroSub}>
            O melhor dos dois mundos: 100% vegetal e com poucos carboidratos. Nossa IA monta um cardápio low carb vegano com proteínas completas e gorduras boas de origem vegetal.
          </p>
          <Link href="/" className={styles.btnPrimary} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '4rem' }}>
            Gerar meu cardápio low carb vegano →
          </Link>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>Fontes de gordura vegana low carb</span>
            </div>
            <div className={styles.qGrid}>
              {[
                { num: "🥑", title: "Abacate", desc: "Gordura monoinsaturada + fibras." },
                { num: "🥥", title: "Coco", desc: "TCM para energia rápida." },
                { num: "🫒", title: "Azeite", desc: "Ômega-9 anti-inflamatório." },
                { num: "🌰", title: "Castanhas", desc: "Ômega-3 + proteína vegetal." },
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
              <div className={styles.tipTitle}>Dica low carb vegano</div>
              <div className={styles.tipText}>
                No low carb vegano, tofu, tempeh e edamame são seus melhores amigos — têm alta proteína e poucos carboidratos. Combine com vegetais de baixo índice glicêmico como brócolis, couve-flor e abobrinha.
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Macros do cardápio low carb vegano</span>
            </div>
            <div className={styles.macrosCard}>
              {[
                { val: "1700", lbl: "kcal" },
                { val: "110g", lbl: "proteína" },
                { val: "70g", lbl: "carbs" },
                { val: "110g", lbl: "gorduras" },
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
              <h2>Crie seu cardápio low carb vegano agora</h2>
              <p>Sem cadastro, sem cartão. Grátis para começar.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu cardápio low carb vegano →
            </Link>
            <p className={styles.premiumFootnote}>Sem compromisso. 100% grátis.</p>
          </div>
        </div>
      </main>
    </>
  );
}
