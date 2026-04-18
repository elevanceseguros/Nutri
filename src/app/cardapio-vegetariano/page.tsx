import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Cardápio Vegetariano — Plano Alimentar com IA | Nutry.life",
  description: "Monte seu cardápio vegetariano personalizado com IA. Receitas brasileiras sem carne, nutritivas e saborosas, com modo de preparo completo. Grátis.",
  keywords: "cardápio vegetariano, dieta vegetariana brasileira, plano alimentar vegetariano, receitas vegetarianas brasileiras",
  openGraph: {
    title: "Cardápio Vegetariano — Nutry.life",
    description: "Cardápio vegetariano personalizado com alimentos brasileiros acessíveis.",
    url: "https://nutry.life/cardapio-vegetariano",
  },
};

export default function CardapioVegetariano() {
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
            Cardápio <em className={styles.heroEm}>vegetariano</em> completo e nutritivo.
          </h1>
          <p className={styles.heroSub}>
            Sem carne, mas sem abrir mão de nada. Nossa IA monta um cardápio vegetariano com ovos, laticínios e vegetais brasileiros que garantem todas as proteínas e nutrientes que você precisa.
          </p>
          <Link href="/" className={styles.btnPrimary} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '4rem' }}>
            Gerar meu cardápio vegetariano →
          </Link>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>Dieta vegetariana no Brasil</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              O Brasil é um dos países com maior variedade de frutas, legumes e verduras do mundo, tornando a dieta vegetariana muito acessível e saborosa. Ovos, queijo cottage, iogurte grego, feijão, lentilha e grão-de-bico são a base de um cardápio vegetariano brasileiro nutritivo e econômico.
            </p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Pilares do cardápio vegetariano</span>
            </div>
            <div className={styles.qGrid}>
              {[
                { num: "🥚", title: "Ovos", desc: "Proteína completa e versátil." },
                { num: "🧀", title: "Laticínios", desc: "Cálcio, proteína e vitamina B12." },
                { num: "🫘", title: "Leguminosas", desc: "Feijão, lentilha, grão-de-bico." },
                { num: "🥦", title: "Vegetais verdes", desc: "Ferro, fibras e antioxidantes." },
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
              <div className={styles.tipTitle}>Dica vegetariana</div>
              <div className={styles.tipText}>
                Combine leguminosas com cereais na mesma refeição para obter uma proteína completa. Feijão com arroz, lentilha com quinoa ou grão-de-bico com pão integral são ótimas combinações.
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Macros do cardápio vegetariano</span>
            </div>
            <div className={styles.macrosCard}>
              {[
                { val: "1800", lbl: "kcal" },
                { val: "120g", lbl: "proteína" },
                { val: "200g", lbl: "carbs" },
                { val: "65g", lbl: "gorduras" },
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
                { q: "Vegetariano come peixe?", a: "Depende. Ovolactovegetarianos não comem nenhuma carne, incluindo peixe. Nosso cardápio vegetariano não inclui carnes, mas usa ovos e laticínios." },
                { q: "É mais barato ser vegetariano?", a: "Em geral sim! Ovos, feijão, lentilha e vegetais são muito mais baratos que carnes. Nossa IA prioriza ingredientes econômicos." },
                { q: "Vegetariano consegue emagrecer?", a: "Sim! Dietas vegetarianas bem planejadas são excelentes para emagrecer pois são ricas em fibras e têm menor densidade calórica." },
                { q: "Preciso tomar suplementos?", a: "Vegetarianos devem ficar atentos à vitamina B12, ferro e zinco. Consulte um nutricionista para avaliar sua necessidade individual." },
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
              <h2>Crie seu cardápio vegetariano agora</h2>
              <p>Sem cadastro, sem cartão. Grátis para começar.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu cardápio vegetariano →
            </Link>
            <p className={styles.premiumFootnote}>Sem compromisso. 100% grátis.</p>
          </div>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Vegetariano come peixe?", "acceptedAnswer": { "@type": "Answer", "text": "Ovolactovegetarianos não comem nenhuma carne, incluindo peixe." } },
          { "@type": "Question", "name": "É mais barato ser vegetariano?", "acceptedAnswer": { "@type": "Answer", "text": "Em geral sim! Ovos, feijão e vegetais são muito mais baratos que carnes." } },
        ]
      })}} />
    </>
  );
}
