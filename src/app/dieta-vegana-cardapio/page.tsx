import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Dieta Vegana — Cardápio Personalizado com IA | Nutry.life",
  description: "Monte seu cardápio vegano personalizado com IA. Receitas brasileiras 100% vegetais, com proteínas completas e modo de preparo. Grátis.",
  keywords: "dieta vegana cardápio, cardápio vegano brasileiro, plano alimentar vegano, receitas veganas brasileiras",
  openGraph: {
    title: "Dieta Vegana — Cardápio com IA | Nutry.life",
    description: "Cardápio vegano personalizado com alimentos brasileiros acessíveis.",
    url: "https://nutry.life/dieta-vegana-cardapio",
  },
};

export default function DietaVegana() {
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
            Cardápio <em className={styles.heroEm}>vegano</em> nutritivo e saboroso.
          </h1>
          <p className={styles.heroSub}>
            Nossa IA monta um cardápio 100% vegetal com alimentos brasileiros, garantindo todas as proteínas, vitaminas e minerais que seu corpo precisa.
          </p>
          <Link href="/" className={styles.btnPrimary} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '4rem' }}>
            Gerar meu cardápio vegano →
          </Link>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>Como garantir proteína na dieta vegana?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              A proteína vegana vem de combinações inteligentes de alimentos. Feijão com arroz, por exemplo, forma uma proteína completa com todos os aminoácidos essenciais. Nossa IA também usa tofu, grão-de-bico, lentilha, quinoa e castanhas para garantir entre 100g e 140g de proteína por dia, mesmo sem nenhum produto animal.
            </p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Fontes de proteína vegana brasileiras</span>
            </div>
            <div className={styles.qGrid}>
              {[
                { num: "🫘", title: "Feijão e lentilha", desc: "Proteína + ferro + fibras." },
                { num: "🥜", title: "Amendoim e castanhas", desc: "Gorduras boas e proteína." },
                { num: "🌱", title: "Tofu e tempeh", desc: "Proteína completa de soja." },
                { num: "🌾", title: "Quinoa", desc: "Único grão com todos os aminoácidos." },
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
              <div className={styles.tipTitle}>Dica vegana</div>
              <div className={styles.tipText}>
                Veganos precisam suplementar B12, que não existe em alimentos vegetais. Além disso, fique de olho no ferro e zinco — consuma junto com vitamina C para melhorar a absorção.
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Macros do cardápio vegano</span>
            </div>
            <div className={styles.macrosCard}>
              {[
                { val: "1800", lbl: "kcal" },
                { val: "110g", lbl: "proteína" },
                { val: "220g", lbl: "carbs" },
                { val: "60g", lbl: "gorduras" },
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
                { q: "É difícil seguir uma dieta vegana no Brasil?", a: "Não! O Brasil tem uma das culinárias mais ricas em alimentos vegetais do mundo. Feijão, arroz, frutas, legumes e verduras são acessíveis e deliciosos." },
                { q: "Vegano consegue ganhar massa muscular?", a: "Sim! Com as combinações certas de proteínas vegetais e calorias adequadas, é totalmente possível ganhar massa muscular sendo vegano." },
                { q: "O cardápio vegano é mais caro?", a: "Não necessariamente. Nossa IA prioriza ingredientes acessíveis como feijão, lentilha, grão-de-bico e tofu, que são muito baratos no Brasil." },
                { q: "Posso combinar vegano com low carb?", a: "Sim! Temos uma página específica para cardápio low carb vegano com as melhores combinações." },
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
              <h2>Crie seu cardápio vegano agora</h2>
              <p>Sem cadastro, sem cartão. Grátis para começar.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu cardápio vegano →
            </Link>
            <p className={styles.premiumFootnote}>Sem compromisso. 100% grátis.</p>
          </div>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "É difícil seguir uma dieta vegana no Brasil?", "acceptedAnswer": { "@type": "Answer", "text": "Não! O Brasil tem uma das culinárias mais ricas em alimentos vegetais do mundo." } },
          { "@type": "Question", "name": "Vegano consegue ganhar massa muscular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim! Com as combinações certas de proteínas vegetais e calorias adequadas é possível." } },
        ]
      })}} />
    </>
  );
}
