import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Cardápio Saudável para a Semana: 5 Dias de Refeições Prontas | Nutry.life",
  description: "Cardápio saudável completo para segunda a sexta: café da manhã, almoço, lanche e jantar. Refeições práticas, nutritivas e acessíveis para organizar sua semana.",
  keywords: "cardapio saudavel para semana, cardapio semana saudavel, refeicoes saudaveis semana, planejamento alimentar semana, cardapio segunda a sexta",
  openGraph: {
    title: "Cardápio Saudável para a Semana: 5 Dias Prontos | Nutry.life",
    description: "Cardápio completo de segunda a sexta com café da manhã, almoço, lanche e jantar. Prático e nutritivo.",
    url: "https://nutry.life/blog/cardapio-saudavel-para-semana",
  },
};

const dias = [
  {
    dia: "Segunda-feira",
    emoji: "💪",
    refeicoes: [
      { nome: "Café da manhã", itens: ["Ovos mexidos com espinafre (2 ovos)", "Pão integral com pasta de amendoim (1 fatia)", "Café preto ou chá verde"] },
      { nome: "Almoço", itens: ["Arroz integral (4 col.) + feijão carioca (1 concha)", "Frango grelhado com limão e alho (150g)", "Brócolis refogado no azeite + cenoura ralada", "Salada de alface e tomate"] },
      { nome: "Lanche", itens: ["Iogurte grego natural (200g)", "Punhado de granola sem açúcar", "1 banana"] },
      { nome: "Jantar", itens: ["Sopa de lentilha com cenoura e couve (grande)", "Torrada integral (2 unidades)"] },
    ],
  },
  {
    dia: "Terça-feira",
    emoji: "🥗",
    refeicoes: [
      { nome: "Café da manhã", itens: ["Vitamina de banana com aveia e leite (ou bebida vegetal)", "1 fatia de queijo branco"] },
      { nome: "Almoço", itens: ["Macarrão integral ao molho de tomate caseiro", "Peixe assado com ervas (tilápia ou merluza 150g)", "Salada de pepino, cebola roxa e azeite", "Abobrinha grelhada"] },
      { nome: "Lanche", itens: ["Castanhas e nozes (punhado pequeno)", "1 maçã"] },
      { nome: "Jantar", itens: ["Omelete de 3 ovos com queijo e tomate", "Batata-doce assada com canela (150g)", "Salada verde simples"] },
    ],
  },
  {
    dia: "Quarta-feira",
    emoji: "🍚",
    refeicoes: [
      { nome: "Café da manhã", itens: ["Tapioca (2 unidades) com ovo mexido e ricota", "Suco de laranja natural (1 copo pequeno)", "Café preto"] },
      { nome: "Almoço", itens: ["Arroz branco + feijão preto + farinha (porção brasileira completa)", "Carne moída refogada com legumes (150g)", "Couve refogada no azeite + beterraba cozida", "Salada de rúcula com limão"] },
      { nome: "Lanche", itens: ["Abacate amassado com sal e limão (½ unidade)", "Torrada integral (2 unidades)"] },
      { nome: "Jantar", itens: ["Salmão grelhado com azeite e alecrim (130g)", "Couve-flor assada com cúrcuma", "Quinoa cozida (4 colheres)"] },
    ],
  },
  {
    dia: "Quinta-feira",
    emoji: "🥩",
    refeicoes: [
      { nome: "Café da manhã", itens: ["Panqueca de banana e aveia (2 unidades)", "Mel (1 col. chá)", "Café com leite desnatado ou vegetal"] },
      { nome: "Almoço", itens: ["Arroz integral + grão-de-bico temperado", "Frango ao molho de tomate com ervas (150g)", "Espinafre refogado + abobrinha grelhada", "Salada de alface americana e cenoura ralada"] },
      { nome: "Lanche", itens: ["1 laranja ou tangerina", "Amendoim torrado sem sal (punhado)"] },
      { nome: "Jantar", itens: ["Caldo de frango com legumes e macarrão integral", "Pão integral (1 fatia)", "Queijo cottage (2 col. sopa)"] },
    ],
  },
  {
    dia: "Sexta-feira",
    emoji: "🎉",
    refeicoes: [
      { nome: "Café da manhã", itens: ["Açaí sem guaraná com banana e granola (porção pequena)", "Castanhas (5 unidades)"] },
      { nome: "Almoço", itens: ["Arroz integral + lentilha no lugar do feijão", "Filé de frango grelhado com crosta de gergelim", "Legumes assados (berinjela, pimentão, abobrinha)", "Salada de folhas verdes mistas"] },
      { nome: "Lanche", itens: ["Iogurte grego com frutas vermelhas", "1 fatia de pão integral"] },
      { nome: "Jantar leve", itens: ["Tapioca com atum e tomate (2 unidades)", "Salada de pepino com azeite e limão", "Chá relaxante (camomila, erva-doce)"] },
    ],
  },
];

export default function CardapioSemanal() {
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

          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "2rem", fontSize: "0.85rem", color: "#9ca3af", fontWeight: 600 }}>
            <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>Início</Link>
            <span>→</span>
            <Link href="/blog" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</Link>
            <span>→</span>
            <span style={{ color: "#22c55e" }}>Alimentação Saudável</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Alimentação Saudável</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>25 de abril de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 10 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Cardápio saudável para a semana: 5 dias de refeições prontas
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Planejamento alimentar completo de segunda a sexta com café da manhã, almoço, lanche e jantar. Refeições práticas, nutritivas e com alimentos acessíveis no Brasil.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Prefere um cardápio personalizado para você?</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>
                Nossa IA monta um cardápio semanal baseado no seu objetivo, peso, altura e preferências alimentares.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Gerar meu cardápio personalizado →
              </Link>
            </div>
          </div>

          {/* Dicas gerais */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>💡</span>
              <span className={styles.qLabel}>Como usar este cardápio</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Adapte as porções ao seu peso e objetivo (emagrecer, manter ou ganhar massa)",
                "Prepare os grãos (arroz, feijão, lentilha) em lote no domingo para a semana toda",
                "Frango pode ser grelhado em quantidade no início da semana e guardado na geladeira por 3 dias",
                "Saladas são sempre intercambiáveis — use o que tiver fresco e acessível na sua região",
                "Água: pelo menos 2L por dia, independente do cardápio",
              ].map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "0.92rem", color: "#166534", fontWeight: 600, padding: "0.65rem 1rem", background: "#f0fdf4", borderRadius: "10px", border: "1px solid #bbf7d0", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>✅</span><span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dias */}
          {dias.map((dia, i) => (
            <div key={i} className={styles.qBlock}>
              <div className={styles.qLabelRow}>
                <span className={styles.qNum}>{String(i + 1).padStart(2, "0")}.</span>
                <span className={styles.qLabel}>{dia.emoji} {dia.dia}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {dia.refeicoes.map((ref, j) => (
                  <div key={j} style={{ background: j % 2 === 0 ? "#f9fafb" : "#f0fdf4", border: `1px solid ${j % 2 === 0 ? "#e5e7eb" : "#bbf7d0"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                    <div style={{ fontWeight: 800, color: j % 2 === 0 ? "#374151" : "#166534", marginBottom: "8px", fontSize: "0.9rem" }}>🍽️ {ref.nome}</div>
                    {ref.itens.map((item, k) => (
                      <div key={k} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: j % 2 === 0 ? "#4b5563" : "#15803d", fontWeight: 600, marginBottom: "5px" }}>
                        <span className={styles.dot} />{item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Lista de compras */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>🛒</span>
              <span className={styles.qLabel}>Lista de compras da semana</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { cat: "🥩 Proteínas", itens: ["Peito de frango (1kg)", "Filé de peixe (400g)", "Ovos (1 dúzia)", "Atum em lata (2 latas)", "Iogurte grego (400g)", "Queijo branco / ricota (200g)"] },
                { cat: "🥦 Vegetais", itens: ["Brócolis (1 unidade)", "Abobrinha (2 unidades)", "Espinafre (1 maço)", "Couve (1 maço)", "Beterraba (2 unidades)", "Cenoura (4 unidades)", "Couve-flor (1 unidade)"] },
                { cat: "🍚 Grãos e carboidratos", itens: ["Arroz integral (1kg)", "Feijão carioca e preto (500g cada)", "Lentilha (500g)", "Grão-de-bico (400g)", "Macarrão integral (500g)", "Batata-doce (1kg)", "Aveia em flocos (500g)"] },
                { cat: "🍎 Frutas", itens: ["Bananas (1 cacho)", "Maçãs (4 unidades)", "Laranjas (4 unidades)", "Limões (4 unidades)", "Abacate (2 unidades)"] },
                { cat: "🫙 Pantry", itens: ["Azeite extravirgem", "Alho (1 cabeça)", "Tomate (6 unidades)", "Pão integral", "Amendoim sem sal", "Castanhas mistas"] },
              ].map((bloco, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontWeight: 800, color: "#166534", marginBottom: "10px", fontSize: "1rem" }}>{bloco.cat}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {bloco.itens.map((item, j) => (
                      <span key={j} style={{ background: "white", border: "1px solid #bbf7d0", borderRadius: "20px", padding: "4px 12px", fontSize: "0.82rem", color: "#166534", fontWeight: 700 }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Premium */}
          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio feito para o seu corpo?</h2>
              <p>Nossa IA cria um plano alimentar personalizado com base no seu objetivo, restrições e preferências.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio semanal completo</div>
              <div className={styles.premiumFeatureItem}>✅ Calorias e macros por dia</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas com ingredientes brasileiros</div>
              <div className={styles.premiumFeatureItem}>✅ Lista de compras gerada automaticamente</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>
              Gerar meu cardápio semanal grátis →
            </Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          {/* Leia também */}
          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>📚</span>
              <span className={styles.qLabel}>Leia também</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/como-montar-marmita-saudavel", emoji: "🥡", titulo: "Como montar uma marmita saudável para o trabalho", meta: "8 min · Alimentação Saudável" },
                { href: "/blog/como-emagrecer-sem-passar-fome", emoji: "🔥", titulo: "Como emagrecer sem passar fome — 7 estratégias", meta: "10 min · Emagrecimento" },
                { href: "/blog/low-carb-para-iniciantes", emoji: "🥑", titulo: "Low carb para iniciantes: guia completo", meta: "10 min · Low Carb" },
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
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Cardápio saudável para a semana: 5 dias de refeições prontas",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-04-25",
        "description": "Cardápio saudável completo de segunda a sexta com café da manhã, almoço, lanche e jantar.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/cardapio-saudavel-para-semana" },
        "keywords": ["cardapio saudavel semana", "refeicoes saudaveis semana", "planejamento alimentar"],
      })}} />
    </>
  );
}
