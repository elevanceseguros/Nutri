import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Plano Alimentar para Manutenção do Peso — Nutry.life",
  description: "Monte seu plano alimentar para manter o peso com IA. Cardápio equilibrado com 2.000 kcal, receitas brasileiras e modo de preparo completo. Grátis.",
  keywords: "plano alimentar manutenção, cardápio manutenção peso, dieta manutenção, alimentação equilibrada",
  openGraph: {
    title: "Plano Alimentar para Manutenção — Nutry.life",
    description: "Plano alimentar equilibrado para manter o peso com alimentos brasileiros.",
    url: "https://nutry.life/plano-alimentar-manutencao",
  },
};

export default function PlanoManutencao() {
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
            Plano alimentar para <em className={styles.heroEm}>manutenção</em> do peso.
          </h1>
          <p className={styles.heroSub}>
            Atingiu seu peso ideal e quer manter? Nossa IA monta um cardápio equilibrado com 2.000 kcal para você manter o peso sem sofrimento e com muito sabor.
          </p>
          <Link href="/" className={styles.btnPrimary} style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '4rem' }}>
            Gerar meu plano de manutenção →
          </Link>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>O que é manutenção calórica?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              A manutenção calórica é quando você consome exatamente as calorias que gasta, mantendo o peso estável. Para a maioria das pessoas, isso fica entre 1.800 e 2.200 kcal por dia. Nossa IA usa 2.000 kcal como base, distribuídas em refeições balanceadas com proteínas, carboidratos complexos e gorduras saudáveis.
            </p>
          </div>

          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>💡</div>
            <div>
              <div className={styles.tipTitle}>Dica de manutenção</div>
              <div className={styles.tipText}>
                Na manutenção, a consistência é mais importante que a perfeição. Um dia fora da dieta não desfaz semanas de trabalho. O que importa é o padrão alimentar da semana toda, não de um único dia.
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Macros do plano de manutenção</span>
            </div>
            <div className={styles.macrosCard}>
              {[
                { val: "2000", lbl: "kcal" },
                { val: "150g", lbl: "proteína" },
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
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Perguntas frequentes</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: "Como sei quantas calorias preciso para manter o peso?", a: "Uma estimativa simples: multiplique seu peso em kg por 33 (sedentário) ou 38 (ativo). Nossa IA usa 2.000 kcal como base para a maioria dos adultos." },
                { q: "Posso comer de tudo na manutenção?", a: "Com moderação, sim! A manutenção é mais flexível que uma dieta de emagrecimento. O segredo é manter a consistência no padrão geral." },
                { q: "Preciso contar calorias para sempre?", a: "Não! Com o tempo, você desenvolve a intuição sobre as porções certas. Nossos cardápios ajudam a calibrar essa percepção." },
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
              <h2>Crie seu plano de manutenção agora</h2>
              <p>Sem cadastro, sem cartão. Grátis para começar.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu plano de manutenção →
            </Link>
            <p className={styles.premiumFootnote}>Sem compromisso. 100% grátis.</p>
          </div>
        </div>
      </main>
    </>
  );
}
