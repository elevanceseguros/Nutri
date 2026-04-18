import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Bem-vindo ao Nutry.life PRO! 🚀",
  description: "Sua assinatura PRO foi confirmada. Acesse planos ilimitados e substituição de ingredientes.",
};

export default function ProPage() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} style={{ textDecoration: 'none' }}>
          Nutry<span className={styles.logoAccent}>.life</span>
        </Link>
        <div className={styles.badge}>Beta</div>
      </header>

      <main className={styles.main}>
        <div className="fade-up" style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>

          {/* Hero */}
          <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🎉</div>

          <div className={styles.heroEyebrow} style={{ justifyContent: 'center' }}>
            <div className={styles.heroLine} />
            <span className={styles.heroEyebrowText}>Assinatura confirmada</span>
            <div className={styles.heroLine} />
          </div>

          <h1 className={styles.heroTitle} style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)' }}>
            Bem-vindo ao <em className={styles.heroEm}>Nutry.life PRO!</em>
          </h1>
          <p className={styles.heroSub} style={{ marginBottom: '2rem' }}>
            Sua assinatura foi confirmada com sucesso. Agora você tem acesso completo a todos os recursos PRO.
          </p>

          {/* O que foi desbloqueado */}
          <div className={styles.premiumBanner} style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <div className={styles.premiumBadgeTop} style={{ display: 'block', textAlign: 'center', marginBottom: '1.25rem' }}>✦ RECURSOS DESBLOQUEADOS</div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>♾️ Planos alimentares ilimitados todo dia</div>
              <div className={styles.premiumFeatureItem}>🔄 Substituição de ingredientes com 1 clique</div>
              <div className={styles.premiumFeatureItem}>🎯 Todos os objetivos e preferências alimentares</div>
              <div className={styles.premiumFeatureItem}>📸 Fotos dos pratos e macros detalhados</div>
              <div className={styles.premiumFeatureItem}>👨‍🍳 Modo de preparo passo a passo</div>
              <div className={styles.premiumFeatureItem}>❌ Sem limite diário de geração</div>
            </div>
          </div>

          {/* Instruções */}
          <div className={styles.qBlock} style={{ textAlign: 'left' }}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>📋</span>
              <span className={styles.qLabel}>Como acessar seus benefícios</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  num: "1",
                  titulo: "Faça login com seu e-mail",
                  desc: "Acesse nutry.life e clique em \"Entrar\". Digite o mesmo e-mail usado na compra e clique em \"Entrar →\"."
                },
                {
                  num: "2",
                  titulo: "Verifique seu e-mail",
                  desc: "Você receberá um link de acesso de compras@nutry.life. Clique nele para entrar automaticamente."
                },
                {
                  num: "3",
                  titulo: "Gere seu primeiro plano PRO",
                  desc: "Selecione seu objetivo, preferência alimentar e número de refeições. Agora sem limite diário!"
                },
                {
                  num: "4",
                  titulo: "Use a substituição de ingredientes",
                  desc: "Dentro de cada refeição, clique em \"substituir\" em qualquer ingrediente para receber 3 opções personalizadas."
                },
              ].map((passo, i) => (
                <div key={i} className={styles.preparoItem}>
                  <span className={styles.preparoNum}>{passo.num}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: '#111827', marginBottom: '4px', fontSize: '0.95rem' }}>{passo.titulo}</div>
                    <div style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 500 }}>{passo.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dica */}
          <div className={styles.tipCard} style={{ marginBottom: '2rem', textAlign: 'left' }}>
            <div className={styles.tipIcon}>💡</div>
            <div>
              <div className={styles.tipTitle}>Dica importante</div>
              <div className={styles.tipText}>
                Use o <strong>mesmo e-mail da compra</strong> para fazer login. É ele que está vinculado à sua assinatura PRO no sistema. Dúvidas? Entre em contato: <strong>compras@nutry.life</strong>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link href="/login" className={styles.btnPrimary} style={{ display: 'block', textDecoration: 'none', marginBottom: '1rem' }}>
            Fazer login e começar agora →
          </Link>

          <Link href="/" style={{ display: 'block', textAlign: 'center', fontSize: '0.85rem', color: '#9ca3af', fontWeight: 600, textDecoration: 'none', marginBottom: '3rem' }}>
            Ou gerar um plano sem login primeiro
          </Link>

          {/* FAQ rápido */}
          <div className={styles.qBlock} style={{ textAlign: 'left' }}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>❓</span>
              <span className={styles.qLabel}>Dúvidas frequentes</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  q: "Quando meu acesso PRO é ativado?",
                  a: "Imediatamente após a confirmação do pagamento. Se fizer login agora já terá acesso completo."
                },
                {
                  q: "Como cancelo a assinatura?",
                  a: "Você pode cancelar a qualquer momento diretamente no Cakto, sem multa ou burocracia. Seu acesso PRO continua até o fim do período pago."
                },
                {
                  q: "Esqueci o e-mail que usei na compra.",
                  a: "Verifique o e-mail de confirmação que o Cakto enviou. Ele contém o endereço usado na compra. Em caso de dúvida, entre em contato: compras@nutry.life"
                },
                {
                  q: "O PRO funciona em qualquer dispositivo?",
                  a: "Sim! O Nutry.life é 100% web e funciona em celular, tablet e computador. Basta estar logado."
                },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem 1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', textAlign: 'left' }}>
                  <div style={{ fontWeight: 800, color: '#111827', marginBottom: '6px', fontSize: '1rem' }}>❓ {faq.q}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f9fafb', borderRadius: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', color: '#9ca3af', fontWeight: 500, lineHeight: 1.6 }}>
              Dúvidas ou problemas? Fale com a gente:<br />
              <a href="mailto:compras@nutry.life" style={{ color: '#16a34a', fontWeight: 700, textDecoration: 'none' }}>compras@nutry.life</a>
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
