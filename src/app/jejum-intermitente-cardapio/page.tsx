import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Jejum Intermitente — Cardápio Personalizado com IA | Nutry.life",
  description: "Monte seu cardápio para jejum intermitente com IA. Planos para jejum 16h, 18h ou 24h com receitas brasileiras nutritivas. Grátis.",
  keywords: "jejum intermitente cardápio, dieta jejum intermitente, jejum 16 8 cardápio, o que comer no jejum intermitente",
  openGraph: {
    title: "Jejum Intermitente — Cardápio com IA | Nutry.life",
    description: "Cardápio para jejum intermitente com alimentos brasileiros acessíveis.",
    url: "https://nutry.life/jejum-intermitente-cardapio",
  },
};

export default function JejumIntermitente() {
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
            Cardápio para <em className={styles.heroEm}>jejum intermitente</em> otimizado.
          </h1>
          <p className={styles.heroSub}>
            Nossa IA monta cardápios específicos para sua janela alimentar — seja jejum 16h, 18h ou 2 refeições por dia — com refeições densas em nutrientes para você não sentir falta de nada.
          </p>
          <Link href="/" className={styles.btnPrimary} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '4rem' }}>
            Gerar meu cardápio para jejum →
          </Link>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>O que é o jejum intermitente?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              O jejum intermitente não é uma dieta, mas um padrão alimentar que alterna períodos de jejum com janelas de alimentação. O protocolo mais popular é o 16:8 — 16 horas em jejum e 8 horas para comer. Durante o jejum, apenas água, café preto e chás sem açúcar são permitidos. Nossa IA distribui todas as calorias e nutrientes dentro da sua janela alimentar.
            </p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Protocolos de jejum disponíveis</span>
            </div>
            <div className={styles.qGrid}>
              {[
                { num: "⏰", title: "Jejum 16:8", desc: "16h em jejum, 2-3 refeições." },
                { num: "⏱️", title: "Jejum 18:6", desc: "18h em jejum, 2 refeições." },
                { num: "🍽️", title: "2 refeições", desc: "Almoço e jantar apenas." },
                { num: "🌅", title: "1 refeição", desc: "OMAD — uma refeição por dia." },
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
              <div className={styles.tipTitle}>Dica para o jejum</div>
              <div className={styles.tipText}>
                Nos primeiros dias, a fome no período de jejum é normal. Beba bastante água e café preto sem açúcar — eles suprimem naturalmente a fome. Em 1-2 semanas seu corpo se adapta e a fome diminui significativamente.
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Macros do cardápio para jejum 16:8</span>
            </div>
            <div className={styles.macrosCard}>
              {[
                { val: "1500", lbl: "kcal" },
                { val: "130g", lbl: "proteína" },
                { val: "140g", lbl: "carbs" },
                { val: "55g", lbl: "gorduras" },
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
                { q: "Posso tomar café durante o jejum?", a: "Sim! Café preto sem açúcar, chás e água não quebram o jejum. Evite adicionar leite, açúcar ou adoçantes calóricos." },
                { q: "O jejum causa perda de músculo?", a: "Não, desde que sua ingestão proteica seja adequada na janela alimentar. Nossa IA garante pelo menos 1,6g de proteína por kg de peso." },
                { q: "Mulheres podem fazer jejum intermitente?", a: "Sim, mas algumas mulheres reagem melhor a protocolos mais curtos como 14:10 ou 12:12. Comece com períodos menores e veja como seu corpo responde." },
                { q: "Posso treinar em jejum?", a: "Sim! Muitas pessoas treinam em jejum e relatam mais foco e energia. Apenas certifique-se de quebrar o jejum logo após o treino com proteínas." },
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
              <h2>Crie seu cardápio para jejum agora</h2>
              <p>Sem cadastro, sem cartão. Grátis para começar.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu cardápio para jejum →
            </Link>
            <p className={styles.premiumFootnote}>Sem compromisso. 100% grátis.</p>
          </div>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Posso tomar café durante o jejum?", "acceptedAnswer": { "@type": "Answer", "text": "Sim! Café preto sem açúcar, chás e água não quebram o jejum." } },
          { "@type": "Question", "name": "O jejum causa perda de músculo?", "acceptedAnswer": { "@type": "Answer", "text": "Não, desde que sua ingestão proteica seja adequada na janela alimentar." } },
        ]
      })}} />
    </>
  );
}
