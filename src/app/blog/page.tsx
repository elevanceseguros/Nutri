import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Blog — Nutrição, Dietas e Receitas Saudáveis | Nutry.life",
  description: "Artigos sobre nutrição, dietas, jejum intermitente, low carb, vegano e muito mais. Conteúdo gratuito da equipe Nutry.life.",
  keywords: "blog nutrição, artigos dieta, jejum intermitente, low carb iniciantes, alimentação saudável",
  openGraph: {
    title: "Blog Nutry.life — Nutrição e Alimentação Saudável",
    description: "Artigos completos sobre nutrição, dietas e receitas saudáveis.",
    url: "https://nutry.life/blog",
  },
};

const posts = [
  {
    slug: "como-montar-marmita-saudavel",
    titulo: "Como montar uma marmita saudável para o trabalho",
    descricao: "Estrutura, 5 combinações prontas, tabela de conservação e a rotina de 30 minutos no domingo para ter marmitas nutritivas e baratas a semana toda.",
    data: "28 de abril de 2026",
    tempo: "8 min de leitura",
    tag: "Alimentação Saudável",
    emoji: "🥡",
  },
  {
    slug: "proteina-no-cafe-da-manha",
    titulo: "Proteína no café da manhã: por que é tão importante e o que comer",
    descricao: "A ciência por trás do café da manhã proteico e 10 opções práticas com alimentos brasileiros para começar hoje.",
    data: "26 de abril de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🍳",
  },
  {
    slug: "cardapio-saudavel-para-semana",
    titulo: "Cardápio saudável para a semana: 5 dias de refeições prontas",
    descricao: "Planejamento alimentar completo de segunda a sexta com café da manhã, almoço, lanche e jantar. Inclui lista de compras.",
    data: "25 de abril de 2026",
    tempo: "10 min de leitura",
    tag: "Alimentação Saudável",
    emoji: "🥗",
  },
  {
    slug: "quanto-tempo-para-ver-resultado-no-jejum-intermitente",
    titulo: "Quanto tempo leva para ver resultado no jejum intermitente?",
    descricao: "A linha do tempo real do que acontece no seu corpo — da 1ª semana até 3 meses de jejum intermitente, sem enrolação.",
    data: "24 de abril de 2026",
    tempo: "8 min de leitura",
    tag: "Jejum Intermitente",
    emoji: "⏱️",
  },
  {
    slug: "jejum-intermitente-16-8-para-iniciantes",
    titulo: "Jejum intermitente 16:8 para iniciantes: guia completo para começar hoje",
    descricao: "Entenda como funciona o jejum 16:8, qual o melhor horário para começar, o que comer na janela alimentar e os erros mais comuns de quem está começando.",
    data: "24 de abril de 2025",
    tempo: "9 min de leitura",
    tag: "Jejum Intermitente",
    emoji: "⏳",
  },
  {
    slug: "o-que-comer-no-jejum-intermitente-16-8",
    titulo: "O que comer no jejum intermitente 16:8 — guia completo",
    descricao: "Descubra o que comer, quando comer e o que evitar no jejum intermitente 16:8 para maximizar seus resultados.",
    data: "18 de abril de 2025",
    tempo: "8 min de leitura",
    tag: "Jejum Intermitente",
    emoji: "⏰",
  },
  {
  slug: "como-emagrecer-sem-passar-fome",
  titulo: "Como emagrecer sem passar fome — 7 estratégias que funcionam",
  descricao: "Esqueça as dietas radicais. Veja 7 estratégias comprovadas para emagrecer sem sofrimento.",
  data: "20 de abril de 2026",
  tempo: "10 min de leitura",
  tag: "Emagrecimento",
  emoji: "🔥",
  },
  {
    slug: "low-carb-para-iniciantes",
    titulo: "Low carb para iniciantes: o que é, como começar e cardápio de exemplo",
    descricao: "Guia completo para quem quer começar a dieta low carb do zero. O que comer, o que evitar e um cardápio de exemplo para a primeira semana.",
    data: "17 de abril de 2025",
    tempo: "10 min de leitura",
    tag: "Low Carb",
    emoji: "🥑",
  },
];

export default function Blog() {
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
            <span className={styles.heroEyebrowText}>Conteúdo gratuito</span>
          </div>
          <h1 className={styles.heroTitle}>
            Blog <em className={styles.heroEm}>Nutry.life</em>
          </h1>
          <p className={styles.heroSub}>
            Artigos completos sobre nutrição, dietas e alimentação saudável escritos pela nossa equipe para te ajudar a tomar as melhores decisões alimentares.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div className={styles.mealCard} style={{ padding: 0, cursor: 'pointer', transition: 'all 0.2s' }}>
                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span className={styles.tag}>{post.tag}</span>
                      <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>{post.data}</span>
                      <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>· {post.tempo}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{post.emoji}</div>
                      <div>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem', letterSpacing: '-0.3px', lineHeight: 1.3 }}>
                          {post.titulo}
                        </h2>
                        <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, fontWeight: 500 }}>
                          {post.descricao}
                        </p>
                      </div>
                    </div>
                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontWeight: 700, fontSize: '0.9rem' }}>
                      Ler artigo completo →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>📬</div>
            <div>
              <div className={styles.tipTitle}>Novos artigos toda semana</div>
              <div className={styles.tipText}>
                Nossa equipe publica conteúdo novo toda semana sobre nutrição, dietas e alimentação saudável. Volte sempre!
              </div>
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: '2rem' }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Pronto para colocar em prática?</h2>
              <p>Gere seu plano alimentar personalizado com IA agora mesmo.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu plano grátis →
            </Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

        </div>
      </main>
    </>
  );
}
