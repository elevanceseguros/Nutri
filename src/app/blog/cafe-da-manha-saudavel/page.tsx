import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Café da Manhã Saudável: 10 Opções Rápidas e Nutritivas | Nutry.life",
  description: "10 opções de café da manhã saudável, rápido e gostoso para o dia a dia. Com calorias, macros e tempo de preparo de cada um.",
  keywords: "cafe da manha saudavel, cafe da manha saudavel e rapido, opcoes de cafe da manha saudavel, cafe da manha nutritivo, o que comer no cafe da manha saudavel",
  openGraph: {
    title: "Café da Manhã Saudável: 10 Opções Rápidas e Nutritivas | Nutry.life",
    description: "10 opções de café da manhã saudável com calorias, macros e tempo de preparo de cada uma.",
    url: "https://nutry.life/blog/cafe-da-manha-saudavel",
  },
};

export default function CafeDaManhaSaudavel() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Link href="/login" className={styles.btnEntrar}>Entrar</Link>
          <div className={styles.badge}>Beta</div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="fade-up">

          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "2rem", fontSize: "0.85rem", color: "#9ca3af", fontWeight: 600 }}>
            <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>Início</Link>
            <span>→</span>
            <Link href="/blog" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</Link>
            <span>→</span>
            <span style={{ color: "#22c55e" }}>Alimentação Saudável</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Alimentação Saudável</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>17 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 8 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Café da manhã saudável: 10 opções rápidas e nutritivas
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Um bom café da manhã não precisa de hora para preparar nem de ingredientes difíceis de encontrar. Veja 10 opções práticas, gostosas e nutricionalmente equilibradas para começar o dia certo.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere seu café da manhã personalizado</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar completo — incluindo um café da manhã adaptado ao seu objetivo e rotina.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu plano alimentar →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>💡</span><span className={styles.qLabel}>O que faz um café da manhã ser saudável de verdade?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>Um café da manhã equilibrado tem três pilares: <strong>proteína</strong> (saciedade e massa muscular), <strong>carboidrato de qualidade</strong> (energia sem pico de insulina) e <strong>gordura boa ou fibra</strong> (desacelera absorção e mantém energia estável). Com esses três, você passa a manhã sem fome e com foco.</p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>As 10 melhores opções</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                {
                  num: "01", nome: "Omelete de ovos com vegetais", tempo: "5 min", kcal: "~320 kcal", proteina: "~22g",
                  ingredientes: ["2–3 ovos", "Espinafre, tomate ou cogumelos", "Queijo branco ou cottage (opcional)", "Azeite + sal"],
                  dica: "Mais versátil do café da manhã. Varie o recheio para não enjoar.",
                  cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534",
                },
                {
                  num: "02", nome: "Aveia com frutas e proteína", tempo: "5 min", kcal: "~380 kcal", proteina: "~15g",
                  ingredientes: ["Aveia em flocos (5 col.)", "Banana ou morango", "Iogurte grego ou leite", "Mel + canela"],
                  dica: "Prepare overnight (véspera) para ficar pronto de manhã.",
                  cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af",
                },
                {
                  num: "03", nome: "Tapioca com ovo e queijo branco", tempo: "7 min", kcal: "~350 kcal", proteina: "~20g",
                  ingredientes: ["Goma de tapioca (3 col. sopa)", "2 ovos mexidos", "Queijo branco ou ricota", "Sal e ervas"],
                  dica: "Opção brasileira clássica. Adicione espinafre ou tomate no recheio.",
                  cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534",
                },
                {
                  num: "04", nome: "Iogurte grego com granola e frutas", tempo: "2 min", kcal: "~350 kcal", proteina: "~17g",
                  ingredientes: ["Iogurte grego natural 200g", "Granola sem açúcar (3 col.)", "Frutas vermelhas ou banana", "Mel (opcional)"],
                  dica: "Mais rápido do cardápio. Escolha iogurte sem açúcar adicionado.",
                  cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af",
                },
                {
                  num: "05", nome: "Panqueca de banana e aveia", tempo: "10 min", kcal: "~400 kcal", proteina: "~18g",
                  ingredientes: ["1 banana madura amassada", "2 ovos", "4 col. aveia", "Canela + baunilha"],
                  dica: "Prepare a massa na véspera. Frite sem óleo em antiaderente.",
                  cor: "#fffbeb", borda: "#fde68a", txt: "#92400e",
                },
                {
                  num: "06", nome: "Vitamina proteica (shake)", tempo: "3 min", kcal: "~420 kcal", proteina: "~30g",
                  ingredientes: ["Whey ou proteína vegetal (1 scoop)", "Leite ou bebida vegetal (300ml)", "1 banana", "Pasta de amendoim (1 col.)"],
                  dica: "Para quem não tem fome de manhã ou está com pressa.",
                  cor: "#f5f3ff", borda: "#ddd6fe", txt: "#5b21b6",
                },
                {
                  num: "07", nome: "Pão integral com ovos e abacate", tempo: "8 min", kcal: "~420 kcal", proteina: "~18g",
                  ingredientes: ["2 fatias de pão integral", "2 ovos (mexidos ou cozidos)", "½ abacate amassado", "Limão, sal e pimenta"],
                  dica: "Versão brasileira do avocado toast. Nutritivo e saciante.",
                  cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534",
                },
                {
                  num: "08", nome: "Overnight oats (aveia dormida)", tempo: "5 min (véspera)", kcal: "~400 kcal", proteina: "~18g",
                  ingredientes: ["Aveia em flocos (5 col.)", "Iogurte grego ou leite (150ml)", "Chia (1 col. chá)", "Frutas e mel"],
                  dica: "Prepare à noite — de manhã está pronto. Ótimo para quem tem rotina agitada.",
                  cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af",
                },
                {
                  num: "09", nome: "Açaí proteico (sem guaraná)", tempo: "5 min", kcal: "~450 kcal", proteina: "~15g",
                  ingredientes: ["Açaí sem xarope (200g)", "Banana + granola proteica", "Pasta de amendoim (1 col.)", "Castanhas por cima"],
                  dica: "Peça sem guaraná e sem xarope — ou faça em casa com polpa.",
                  cor: "#fdf2f8", borda: "#f0abfc", txt: "#86198f",
                },
                {
                  num: "10", nome: "Wrap integral com ovo e vegetais", tempo: "10 min", kcal: "~380 kcal", proteina: "~22g",
                  ingredientes: ["1 wrap de trigo integral", "2 ovos mexidos com temperos", "Alface, tomate, queijo branco", "Azeite + sal"],
                  dica: "Prático para comer no caminho. Embrulhe em papel alumínio.",
                  cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534",
                },
              ].map((op, i) => (
                <div key={i} style={{ background: op.cor, border: `1px solid ${op.borda}`, borderRadius: "16px", padding: "1.4rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <div style={{ background: op.txt, color: "white", borderRadius: "8px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800 }}>{op.num}</div>
                      <div style={{ fontWeight: 800, color: op.txt, fontSize: "0.95rem" }}>{op.nome}</div>
                    </div>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{ background: "white", border: `1px solid ${op.borda}`, borderRadius: "20px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800, color: op.txt }}>⏱ {op.tempo}</span>
                      <span style={{ background: "white", border: `1px solid ${op.borda}`, borderRadius: "20px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800, color: op.txt }}>{op.kcal}</span>
                      <span style={{ background: "white", border: `1px solid ${op.borda}`, borderRadius: "20px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800, color: op.txt }}>🥩 {op.proteina}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "8px" }}>
                    {op.ingredientes.map((ing, j) => <span key={j} style={{ background: "white", border: `1px solid ${op.borda}`, borderRadius: "20px", padding: "3px 10px", fontSize: "0.8rem", color: op.txt, fontWeight: 700 }}>{ing}</span>)}
                  </div>
                  <div style={{ fontSize: "0.83rem", color: op.txt, fontWeight: 700 }}>💡 {op.dica}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>O que NÃO comer no café da manhã</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { item: "Cereal matinal açucarado", motivo: "Até 30g de açúcar por porção. Pico de insulina → fome em 1h." },
                { item: "Suco de caixinha ou de fruta natural sem fibra", motivo: "Concentrado de açúcar sem a fibra da fruta. Prefira a fruta inteira." },
                { item: "Pão de forma branco com margarina", motivo: "Carboidrato refinado + gordura trans — pior combinação para o metabolismo matinal." },
                { item: "Iogurte de sabor com fruta no fundo", motivo: "Tem até 20g de açúcar por pote. Prefira iogurte natural e adicione fruta fresca." },
                { item: "Café com muito açúcar", motivo: "Pequeno superávit calórico diário que acumula. Reduza gradualmente." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "0.9rem 1.2rem" }}>
                  <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "3px" }}>❌ {item.item}</div>
                  <div style={{ fontSize: "0.84rem", color: "#b91c1c", fontWeight: 500 }}>{item.motivo}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio completo com café da manhã personalizado?</h2>
              <p>Nossa IA monta seu plano alimentar semanal — café, almoço, lanche e jantar — adaptado ao seu objetivo.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Café da manhã para seu objetivo</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio semanal completo</div>
              <div className={styles.premiumFeatureItem}>✅ Macros e calorias detalhados</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu cardápio personalizado grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/proteina-no-cafe-da-manha", emoji: "🍳", titulo: "Proteína no café da manhã: por que é importante", meta: "7 min · Nutrição" },
                { href: "/blog/cardapio-saudavel-para-semana", emoji: "🥗", titulo: "Cardápio saudável para a semana: 5 dias prontos", meta: "10 min · Alimentação Saudável" },
                { href: "/blog/o-que-comer-para-ter-mais-energia", emoji: "⚡", titulo: "O que comer para ter mais energia no dia a dia", meta: "8 min · Nutrição" },
              ].map((p, i) => (
                <Link key={i} href={p.href} style={{ textDecoration: "none" }}>
                  <div className={styles.mealCard} style={{ padding: "1.25rem 1.5rem" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <span style={{ fontSize: "1.75rem" }}>{p.emoji}</span>
                      <div>
                        <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.95rem", marginBottom: "4px" }}>{p.titulo}</div>
                        <div style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>{p.meta}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Café da manhã saudável: 10 opções rápidas e nutritivas",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-17",
        "description": "10 opções de café da manhã saudável com tempo de preparo, calorias e macros detalhados.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/cafe-da-manha-saudavel" },
        "keywords": ["cafe da manha saudavel", "cafe da manha rapido saudavel", "opcoes cafe da manha nutritivo"],
      })}} />
    </>
  );
}
