import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Dieta Low Carb: O que É, Como Funciona e Cardápio Completo | Nutry.life",
  description: "Guia completo sobre dieta low carb: o que é, como funciona, benefícios, alimentos permitidos e proibidos, cardápio de exemplo e erros comuns.",
  keywords: "dieta low carb, low carb o que e, como funciona low carb, cardapio low carb, low carb alimentos permitidos, dieta low carb iniciantes",
  openGraph: {
    title: "Dieta Low Carb: O que É, Como Funciona e Cardápio | Nutry.life",
    description: "Guia completo de low carb: benefícios, alimentos, cardápio de exemplo e como começar hoje.",
    url: "https://nutry.life/blog/dieta-low-carb",
  },
};

export default function DietaLowCarb() {
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
            <span style={{ color: "#22c55e" }}>Low Carb</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Low Carb</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>13 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 10 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Dieta low carb: o que é, como funciona e cardápio completo
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Low carb não é moda — é uma das abordagens alimentares mais estudadas da nutrição moderna. Entenda o que é, como o corpo muda, o que comer, o que evitar e como começar sem sofrimento.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere seu cardápio low carb personalizado</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano low carb com receitas brasileiras, macros calculados e adaptado ao seu objetivo.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio low carb →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>O que é dieta low carb?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Low carb significa simplesmente <strong>baixo carboidrato</strong>. Não existe uma definição rígida, mas a maioria dos protocolos limita o carboidrato entre <strong>20 e 130g por dia</strong> — bem abaixo dos 250–300g típicos de uma dieta ocidental.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1.25rem" }}>
              {[
                { nivel: "Low carb moderado", carbo: "100–130g/dia", desc: "Bom para a maioria — reduz picos de insulina sem restrição extrema. Sustentável e eficaz.", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { nivel: "Low carb restrito", carbo: "50–100g/dia", desc: "Para emagrecimento mais rápido. Exige mais planejamento mas traz resultados consistentes.", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
                { nivel: "Cetogênico (keto)", carbo: "20–50g/dia", desc: "Induz cetose — corpo queima gordura como combustível principal. Muito restritivo, exige acompanhamento.", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e" },
              ].map((n, i) => (
                <div key={i} style={{ background: n.cor, border: `1px solid ${n.borda}`, borderRadius: "14px", padding: "1rem 1.4rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "5px" }}>
                    <div style={{ fontWeight: 800, color: n.txt, fontSize: "0.92rem" }}>{n.nivel}</div>
                    <div style={{ background: "white", border: `1px solid ${n.borda}`, borderRadius: "20px", padding: "2px 10px", fontWeight: 800, color: n.txt, fontSize: "0.8rem" }}>{n.carbo}</div>
                  </div>
                  <div style={{ fontSize: "0.86rem", color: n.txt, fontWeight: 500, lineHeight: 1.6 }}>{n.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Como funciona no corpo?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Normalmente o corpo usa glicose (vinda dos carboidratos) como combustível principal. Quando você reduz drasticamente o carboidrato, ocorre uma <strong>mudança metabólica</strong>: o fígado começa a converter gordura em corpos cetônicos para abastecer o cérebro e os músculos.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              Além da queima de gordura, a redução de carboidrato <strong>diminui os picos de insulina</strong> — o hormônio que sinaliza ao corpo para armazenar gordura. Insulina baixa = ambiente hormonal favorável ao emagrecimento.
            </p>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[{ val: "↓ Insulina", lbl: "menos sinalização de armazenamento" }, { val: "↑ Cetose", lbl: "gordura como combustível" }, { val: "↑ Saciedade", lbl: "proteína e gordura saciam mais" }].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal} style={{ fontSize: "0.95rem" }}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Benefícios comprovados do low carb</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { emoji: "🔥", ben: "Perda de peso mais rápida no início", desc: "Redução de glicogênio + água nos primeiros dias, seguida de perda de gordura real." },
                { emoji: "🩸", ben: "Controle de glicemia e insulina", desc: "Especialmente eficaz para pré-diabéticos e diabéticos tipo 2 — reduz hemoglobina glicada." },
                { emoji: "🍽️", ben: "Menor fome entre as refeições", desc: "Proteína e gordura têm maior poder de saciedade que carboidratos refinados." },
                { emoji: "🧠", ben: "Mais clareza mental (após adaptação)", desc: "Corpos cetônicos são um combustível eficiente para o cérebro — muitos relatam foco melhorado." },
                { emoji: "❤️", ben: "Melhora nos triglicerídeos", desc: "Low carb é uma das estratégias mais eficazes para reduzir triglicerídeos elevados." },
                { emoji: "💪", ben: "Preservação de massa muscular", desc: "Alta ingestão de proteína e estado hormonal favorável preservam músculo durante o emagrecimento." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.2rem", display: "flex", gap: "10px" }}>
                  <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.9rem", marginBottom: "2px" }}>{item.ben}</div>
                    <div style={{ fontSize: "0.84rem", color: "#15803d", fontWeight: 500 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>O que comer e o que evitar</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontWeight: 800, color: "#166534", marginBottom: "10px", fontSize: "0.95rem" }}>✅ Alimentos liberados</div>
                {[
                  "🥩 Carnes, aves e peixe — sem restrição",
                  "🥚 Ovos — todas as formas",
                  "🥦 Vegetais não amiláceos — brócolis, espinafre, abobrinha, couve, rúcula, pepino",
                  "🧀 Queijo, iogurte grego natural, cottage",
                  "🥑 Abacate, azeite, manteiga, óleo de coco",
                  "🥜 Castanhas, nozes, amêndoas, sementes",
                  "🍓 Frutas vermelhas em pequena quantidade (morango, mirtilo)",
                ].map((it, i) => <div key={i} style={{ fontSize: "0.88rem", color: "#166534", fontWeight: 600, marginBottom: "5px", display: "flex", gap: "8px" }}><span className={styles.dot} />{it}</div>)}
              </div>
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontWeight: 800, color: "#991b1b", marginBottom: "10px", fontSize: "0.95rem" }}>❌ Alimentos a reduzir ou eliminar</div>
                {[
                  "🍞 Pão, macarrão, arroz, farinha de trigo",
                  "🍰 Doces, bolos, biscoitos, sorvete",
                  "🥤 Refrigerantes, sucos industriais e naturais",
                  "🍌 Frutas muito doces em excesso (manga, uva, banana madura)",
                  "🫘 Leguminosas em excesso (feijão, grão-de-bico) — moderação",
                  "🥔 Batata comum, mandioca, milho — em low carb restrito",
                ].map((it, i) => <div key={i} style={{ fontSize: "0.88rem", color: "#991b1b", fontWeight: 600, marginBottom: "5px", display: "flex", gap: "8px" }}><span className={styles.dot} />{it}</div>)}
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>05.</span><span className={styles.qLabel}>Cardápio low carb de exemplo (1 dia)</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { ref: "☀️ Café da manhã (~25g carbo)", itens: ["Omelete de 3 ovos com queijo e espinafre", "Abacate (½) com sal e limão", "Café preto sem açúcar"] },
                { ref: "🍎 Lanche da manhã (~8g carbo)", itens: ["Punhado de castanhas e nozes (30g)", "Alguns morangos frescos (100g)"] },
                { ref: "🍚 Almoço (~30g carbo)", itens: ["Frango grelhado com ervas (180g)", "Salada grande de folhas verdes + tomate + pepino + azeite", "Brócolis e couve-flor assados", "Sem arroz — batata-doce pequena (80g) se quiser carboidrato"] },
                { ref: "🌙 Jantar (~20g carbo)", itens: ["Salmão ou carne vermelha grelhados (180g)", "Abobrinha e berinjela salteadas no azeite", "Salada de rúcula com parmeggiano e azeite"] },
              ].map((r, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#f0fdf4" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: i % 2 === 0 ? "#166534" : "#374151", marginBottom: "8px", fontSize: "0.9rem" }}>{r.ref}</div>
                  {r.itens.map((it, j) => <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: i % 2 === 0 ? "#15803d" : "#4b5563", fontWeight: 600, marginBottom: "5px" }}><span className={styles.dot} />{it}</div>)}
                </div>
              ))}
              <div style={{ padding: "0.8rem 1.1rem", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "10px", fontSize: "0.85rem", color: "#92400e", fontWeight: 700, textAlign: "center" }}>
                Total aproximado: ~83g carboidrato · ~140g proteína · ~90g gordura · ~1.700 kcal
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>06.</span><span className={styles.qLabel}>A "gripe low carb" — o que é e como evitar</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Nos primeiros 3–7 dias de low carb restrito é comum sentir <strong>dor de cabeça, cansaço, irritabilidade e falta de foco</strong>. Isso acontece porque o corpo está esgotando glicogênio e ainda não adaptou o metabolismo para usar gordura eficientemente. Não é sinal para desistir — é adaptação.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "1rem" }}>
              {["Beba mais água — a perda de glicogênio libera muita água e eletrólitos", "Aumente o sal (sódio) nos primeiros dias — retenção de sódio cai com o low carb", "Coma mais potássio (abacate, castanhas) e magnésio (sementes de abóbora)", "Não corte calorias ao mesmo tempo — o ajuste metabólico já é suficiente no início", "Durma bem — sono ruim piora os sintomas de adaptação"].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", padding: "0.65rem 1rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", fontSize: "0.88rem", fontWeight: 600, color: "#166534", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>✅</span><span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio low carb personalizado?</h2>
              <p>Nossa IA monta um plano low carb com suas preferências, macros calculados e receitas brasileiras adaptadas.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio low carb semanal completo</div>
              <div className={styles.premiumFeatureItem}>✅ Macros e calorias calculados</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas brasileiras práticas</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu cardápio low carb grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/como-perder-barriga", emoji: "🎯", titulo: "Como perder barriga: o que funciona de verdade", meta: "10 min · Emagrecimento" },
                { href: "/blog/alimentos-ricos-em-proteina", emoji: "🥩", titulo: "Alimentos ricos em proteína: lista completa", meta: "8 min · Nutrição" },
                { href: "/blog/quantas-calorias-preciso-por-dia", emoji: "🔢", titulo: "Quantas calorias eu preciso por dia?", meta: "9 min · Nutrição" },
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
        "headline": "Dieta low carb: o que é, como funciona e cardápio completo",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-13",
        "description": "Guia completo de low carb: níveis, como funciona, benefícios, alimentos permitidos, cardápio e gripe low carb.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/dieta-low-carb" },
        "keywords": ["dieta low carb", "low carb o que e", "cardapio low carb", "low carb iniciantes"],
      })}} />
    </>
  );
}
