import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Como Montar uma Marmita Saudável para o Trabalho | Nutry.life",
  description: "Aprenda a montar uma marmita saudável, prática e barata para levar ao trabalho. Dicas de montagem, conservação, proteínas e combinações que funcionam.",
  keywords: "como montar marmita saudavel, marmita saudavel para trabalho, marmita saudavel barata, marmita para emagrecer, marmita proteica trabalho",
  openGraph: {
    title: "Como Montar uma Marmita Saudável para o Trabalho | Nutry.life",
    description: "Guia completo para montar marmitas saudáveis, práticas e econômicas para levar ao trabalho.",
    url: "https://nutry.life/blog/como-montar-marmita-saudavel",
  },
};

export default function MarmitaSaudavel() {
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
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>28 de abril de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 8 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Como montar uma marmita saudável para o trabalho
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Comer bem no trabalho não precisa ser caro nem trabalhoso. Com um método simples de montagem e uns 30 minutos no domingo, você tem marmitas nutritivas, saborosas e baratas para a semana toda.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere seu plano alimentar com lista de marmitas</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>
                Nossa IA cria um cardápio semanal completo com combinações de marmita prontas para levar ao trabalho.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Gerar meu plano alimentar →
              </Link>
            </div>
          </div>

          {/* Bloco 01 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>A estrutura da marmita perfeita</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Uma marmita equilibrada segue uma fórmula simples: <strong>proteína + carboidrato + vegetal + gordura boa</strong>. Cada componente tem uma função e você só precisa variar dentro de cada categoria para nunca enjoar.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1.25rem" }}>
              {[
                { cat: "🥩 Proteína (1/4 da marmita)", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534", desc: "É o componente mais importante — garante saciedade e preserva músculo.", exemplos: ["Frango grelhado", "Carne moída", "Ovo cozido ou mexido", "Atum, sardinha, salmão", "Tofu ou grão-de-bico (opção vegana)"] },
                { cat: "🍚 Carboidrato (1/4 da marmita)", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e", desc: "Fornece energia para o trabalho e o treino. Prefira versões integrais.", exemplos: ["Arroz integral ou branco", "Batata-doce assada", "Mandioca cozida", "Quinoa", "Macarrão integral"] },
                { cat: "🥦 Vegetais (1/2 da marmita)", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af", desc: "Fibras, vitaminas e volume — são o segredo de uma marmita que sacia sem pesar.", exemplos: ["Brócolis, couve-flor assados", "Abobrinha, berinjela grelhadas", "Cenoura, beterraba cozidas", "Salada de folhas (separada)", "Leguminosas: feijão, lentilha"] },
                { cat: "🥑 Gordura boa (pequena quantidade)", cor: "#f5f3ff", borda: "#ddd6fe", txt: "#5b21b6", desc: "Melhora absorção de vitaminas e aumenta saciedade.", exemplos: ["Azeite para temperar (1 fio)", "Abacate (2 colheres)", "Castanhas como lanche separado", "Sementes de chia ou linhaça"] },
              ].map((comp, i) => (
                <div key={i} style={{ background: comp.cor, border: `1px solid ${comp.borda}`, borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontWeight: 800, color: comp.txt, marginBottom: "4px", fontSize: "0.95rem" }}>{comp.cat}</div>
                  <div style={{ fontSize: "0.87rem", color: comp.txt, fontWeight: 500, lineHeight: 1.6, marginBottom: "10px" }}>{comp.desc}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {comp.exemplos.map((ex, j) => (
                      <span key={j} style={{ background: "white", border: `1px solid ${comp.borda}`, borderRadius: "20px", padding: "3px 10px", fontSize: "0.8rem", color: comp.txt, fontWeight: 700 }}>{ex}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 02 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>5 combinações prontas para essa semana</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { num: "01", nome: "Clássica Brasileira", kcal: "~550 kcal", proteina: "~38g", itens: ["Arroz integral (4 col.) + feijão carioca (1 concha)", "Frango grelhado com alho e limão (150g)", "Brócolis refogado + cenoura cozida", "Salada de alface e tomate em potinho separado"] },
                { num: "02", nome: "Low Carb Power", kcal: "~480 kcal", proteina: "~42g", itens: ["Batata-doce assada com canela (150g)", "Carne moída temperada com legumes (150g)", "Couve-flor assada + abobrinha grelhada", "Mix de folhas com azeite e limão"] },
                { num: "03", nome: "Peixe & Quinoa", kcal: "~520 kcal", proteina: "~40g", itens: ["Quinoa cozida temperada (5 col.)", "Tilápia assada com ervas e azeite (150g)", "Espinafre refogado + tomate cereja", "Beterraba cozida em cubinhos"] },
                { num: "04", nome: "Vegetariana Proteica", kcal: "~500 kcal", proteina: "~28g", itens: ["Arroz integral + lentilha (substitui carne)", "Omelete de 2 ovos com queijo e cúrcuma", "Brócolis + cenoura + beterraba", "Abacate (2 col.) como gordura boa"] },
                { num: "05", nome: "Frango Mediterrâneo", kcal: "~530 kcal", proteina: "~40g", itens: ["Macarrão integral ao azeite com alho (5 col.)", "Frango desfiado com tomate e manjericão (150g)", "Abobrinha e pimentão grelhados", "Salada de pepino com cebola roxa e azeite"] },
              ].map((combo, i) => (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <div style={{ background: "#16a34a", color: "white", borderRadius: "8px", padding: "3px 10px", fontSize: "0.78rem", fontWeight: 800 }}>{combo.num}</div>
                      <div style={{ fontWeight: 800, color: "#111827", fontSize: "1rem" }}>{combo.nome}</div>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <span style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "20px", padding: "3px 10px", fontSize: "0.78rem", color: "#166534", fontWeight: 800 }}>{combo.kcal}</span>
                      <span style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: "20px", padding: "3px 10px", fontSize: "0.78rem", color: "#15803d", fontWeight: 800 }}>{combo.proteina} prot.</span>
                    </div>
                  </div>
                  {combo.itens.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "#374151", fontWeight: 600, marginBottom: "5px", lineHeight: 1.6 }}>
                      <span className={styles.dot} style={{ marginTop: "8px" }} />{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 03 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Conservação: quanto tempo dura na geladeira?</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { item: "Arroz cozido", prazo: "3–4 dias", ok: true },
                { item: "Feijão / lentilha cozidos", prazo: "4–5 dias", ok: true },
                { item: "Frango grelhado ou cozido", prazo: "3–4 dias", ok: true },
                { item: "Carne moída ou assada", prazo: "3–4 dias", ok: true },
                { item: "Peixe grelhado ou assado", prazo: "2–3 dias", ok: true },
                { item: "Vegetais cozidos / assados", prazo: "3–4 dias", ok: true },
                { item: "Salada com folhas (já temperada)", prazo: "1 dia (máximo)", ok: false },
                { item: "Salada sem tempero", prazo: "2–3 dias separado", ok: true },
                { item: "Batata-doce assada", prazo: "3–4 dias", ok: true },
                { item: "Ovo cozido (sem casca)", prazo: "2 dias", ok: true },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.7rem 1rem", background: item.ok ? "#f0fdf4" : "#fef2f2", border: `1px solid ${item.ok ? "#bbf7d0" : "#fecaca"}`, borderRadius: "10px" }}>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700, color: item.ok ? "#166534" : "#991b1b" }}>{item.item}</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 800, color: item.ok ? "#15803d" : "#b91c1c", background: "white", borderRadius: "20px", padding: "2px 10px", border: `1px solid ${item.ok ? "#bbf7d0" : "#fecaca"}` }}>{item.prazo}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1rem", padding: "1rem 1.25rem", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "12px", fontSize: "0.88rem", color: "#92400e", fontWeight: 600, lineHeight: 1.7 }}>
              💡 <strong>Dica de ouro:</strong> Prepare proteínas e grãos no domingo para a semana. Vegetais assados aguentam 3–4 dias. Salada tempere só na hora de comer — leve o azeite e limão separados.
            </div>
          </div>

          {/* Bloco 04 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>Rotina de preparo: 30 minutos no domingo</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { tempo: "0–10 min", acao: "Cozinhe o arroz integral e o feijão (ou lentilha)", detalhe: "Use a panela de pressão para feijão (15 min) e arroz normal para o integral." },
                { tempo: "10–20 min", acao: "Grelhe ou asse as proteínas", detalhe: "Frango temperado vai ao forno (180°C por 25 min) ou na frigideira. Enquanto isso, prepare a carne moída." },
                { tempo: "20–30 min", acao: "Asse ou refogue os vegetais", detalhe: "Brócolis, abobrinha e cenoura cortados e assados com azeite e sal por 20 min a 200°C." },
                { tempo: "Montagem", acao: "Monte as marmitas em potes divididos", detalhe: "Distribua as porções para 4–5 dias. Etiquete com o dia da semana se precisar organizar melhor." },
              ].map((passo, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ background: "#16a34a", color: "white", borderRadius: "8px", padding: "4px 10px", fontSize: "0.78rem", fontWeight: 800, flexShrink: 0, marginTop: "2px" }}>{passo.tempo}</div>
                  <div>
                    <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.92rem", marginBottom: "3px" }}>{passo.acao}</div>
                    <div style={{ fontSize: "0.85rem", color: "#4b5563", fontWeight: 500, lineHeight: 1.6 }}>{passo.detalhe}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 05 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>05.</span>
              <span className={styles.qLabel}>Erros comuns na marmita saudável</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Pouca proteína → fome intensa em 2 horas",
                "Sem vegetais → perde saciedade por fibra e micronutrientes",
                "Molhos prontos e temperos industrializados → sódio e conservantes em excesso",
                "Marmita sem variedade → enjoa na 3ª semana e abandona",
                "Pote muito pequeno → come fora depois por estar com fome",
                "Não preparar com antecedência → acaba pedindo delivery na correria",
              ].map((erro, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "0.7rem 1rem", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", fontSize: "0.88rem", fontWeight: 600, color: "#991b1b", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>❌</span><span>{erro}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Premium */}
          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio com combinações de marmita prontas?</h2>
              <p>Nossa IA gera um plano semanal personalizado com as marmitas ideais para seu objetivo e rotina.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Combinações de marmita para a semana</div>
              <div className={styles.premiumFeatureItem}>✅ Lista de compras automática</div>
              <div className={styles.premiumFeatureItem}>✅ Calorias e proteínas por marmita</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>
              Gerar meu plano de marmitas grátis →
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
                { href: "/blog/cardapio-saudavel-para-semana", emoji: "🥗", titulo: "Cardápio saudável para a semana: 5 dias prontos", meta: "10 min · Alimentação Saudável" },
                { href: "/blog/proteina-no-cafe-da-manha", emoji: "🍳", titulo: "Proteína no café da manhã: benefícios e 10 opções", meta: "7 min · Nutrição" },
                { href: "/blog/como-emagrecer-sem-passar-fome", emoji: "🔥", titulo: "Como emagrecer sem passar fome — 7 estratégias", meta: "10 min · Emagrecimento" },
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
        "headline": "Como montar uma marmita saudável para o trabalho",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-04-28",
        "description": "Aprenda a montar marmitas saudáveis, práticas e baratas para o trabalho — com 5 combinações prontas e dicas de conservação.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/como-montar-marmita-saudavel" },
        "keywords": ["marmita saudavel trabalho", "como montar marmita saudavel", "marmita proteica", "marmita barata saudavel"],
      })}} />
    </>
  );
}
