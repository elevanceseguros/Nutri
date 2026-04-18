import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Plano Alimentar para Emagrecer — Nutry.life",
  description: "Crie seu plano alimentar personalizado para emagrecer com IA. Receitas brasileiras reais, modo de preparo e substituição de ingredientes. Grátis.",
  keywords: "plano alimentar para emagrecer, cardápio para emagrecer, dieta para emagrecer, cardápio saudável emagrecer",
  openGraph: {
    title: "Plano Alimentar para Emagrecer — Nutry.life",
    description: "Monte seu cardápio personalizado para emagrecer em segundos com IA.",
    url: "https://nutry.life/plano-alimentar-para-emagrecer",
  },
};

export default function PlanoEmagrecer() {
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

          {/* Hero */}
          <div className={styles.heroEyebrow}>
            <div className={styles.heroLine} />
            <span className={styles.heroEyebrowText}>Plano Alimentar com IA</span>
          </div>
          <h1 className={styles.heroTitle}>
            Plano alimentar para <em className={styles.heroEm}>emagrecer</em> de verdade.
          </h1>
          <p className={styles.heroSub}>
            Chega de dietas genéricas da internet. Nossa IA cria um cardápio personalizado com alimentos brasileiros acessíveis, focado no seu déficit calórico ideal.
          </p>
          <Link href="/" className={styles.btnPrimary} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '4rem' }}>
            Gerar meu plano grátis →
          </Link>

          {/* O que é */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>O que é um plano alimentar para emagrecer?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              Um plano alimentar para emagrecer é um cardápio estruturado que cria um déficit calórico — ou seja, você consome menos calorias do que gasta. No Nutry.life, nossa IA monta um plano com <strong>1.500 kcal diárias</strong>, distribuídas em refeições balanceadas com proteínas, carboidratos e gorduras boas, usando ingredientes fáceis de encontrar em qualquer mercado brasileiro.
            </p>
          </div>

          {/* Como funciona */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Como funciona?</span>
            </div>
            <div className={styles.qGrid}>
              {[
                { num: "1", title: "Escolha seu objetivo", desc: "Selecione emagrecimento e sua preferência alimentar." },
                { num: "2", title: "IA monta seu cardápio", desc: "Em segundos, receitas reais com modo de preparo completo." },
                { num: "3", title: "Substitua ingredientes", desc: "Não tem algum item? Substitua com 1 clique (PRO)." },
              ].map((item) => (
                <div key={item.num} className={styles.qBtn} style={{ cursor: 'default' }}>
                  <span className={styles.qBtnIcon} style={{ background: '#dcfce7', color: '#16a34a', fontWeight: 800, fontSize: '1rem' }}>{item.num}</span>
                  <span className={styles.qBtnLabel}>{item.title}</span>
                  <span className={styles.qBtnSub}>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dica */}
          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>💡</div>
            <div>
              <div className={styles.tipTitle}>Dica importante</div>
              <div className={styles.tipText}>
                Para emagrecer com saúde, o ideal é perder entre 0,5kg e 1kg por semana. Um déficit de 500 kcal por dia é suficiente para isso sem comprometer sua energia e disposição.
              </div>
            </div>
          </div>

          {/* Macros */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Distribuição de macronutrientes</span>
            </div>
            <div className={styles.macrosCard}>
              {[
                { val: "1500", lbl: "kcal" },
                { val: "130g", lbl: "proteína" },
                { val: "140g", lbl: "carbs" },
                { val: "50g", lbl: "gorduras" },
              ].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>Perguntas frequentes</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  q: "Preciso pagar para usar?",
                  a: "Não! Você pode gerar 1 plano alimentar por dia gratuitamente. O plano PRO libera planos ilimitados e substituição de ingredientes."
                },
                {
                  q: "Os alimentos são acessíveis?",
                  a: "Sim! Nossa IA é instruída a usar apenas alimentos brasileiros fáceis de encontrar em mercados comuns, sem ingredientes importados ou caros."
                },
                {
                  q: "Posso usar se for vegetariano ou vegano?",
                  a: "Com certeza! Na hora de gerar o plano, você escolhe sua preferência alimentar: onívoro, vegetariano, vegano ou low carb."
                },
                {
                  q: "Quantas refeições posso incluir?",
                  a: "Você escolhe de 1 a 5 refeições por dia, desde jejum intermitente até refeições a cada 3 horas."
                },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem 1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontWeight: 800, color: '#111827', marginBottom: '6px', fontSize: '1rem' }}>❓ {faq.q}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA final */}
          <div className={styles.premiumBanner} style={{ textAlign: 'center' }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Pronto para começar?</h2>
              <p>Gere seu primeiro plano alimentar para emagrecer agora, sem cadastro.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu plano grátis →
            </Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

        </div>
      </main>

      {/* Schema FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Preciso pagar para usar o Nutry.life?", "acceptedAnswer": { "@type": "Answer", "text": "Não! Você pode gerar 1 plano alimentar por dia gratuitamente." } },
              { "@type": "Question", "name": "Os alimentos são acessíveis?", "acceptedAnswer": { "@type": "Answer", "text": "Sim! Nossa IA usa apenas alimentos brasileiros fáceis de encontrar em mercados comuns." } },
              { "@type": "Question", "name": "Posso usar se for vegetariano ou vegano?", "acceptedAnswer": { "@type": "Answer", "text": "Com certeza! Você escolhe sua preferência alimentar na hora de gerar o plano." } },
              { "@type": "Question", "name": "Quantas refeições posso incluir?", "acceptedAnswer": { "@type": "Answer", "text": "Você escolhe de 1 a 5 refeições por dia." } },
            ]
          })
        }}
      />
    </>
  );
}
