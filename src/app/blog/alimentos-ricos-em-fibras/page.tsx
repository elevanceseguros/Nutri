import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Alimentos Ricos em Fibras: Lista Completa e Benefícios | Nutry.life",
  description: "Lista completa dos alimentos mais ricos em fibras por 100g, benefícios das fibras solúveis e insolúveis, quanto consumir por dia e como incluir mais fibra na dieta.",
  keywords: "alimentos ricos em fibras, alimentos com fibras, lista de alimentos com fibra, fibras na alimentacao, alimentos que tem fibra, quanto de fibra por dia",
  openGraph: {
    title: "Alimentos Ricos em Fibras: Lista Completa e Benefícios | Nutry.life",
    description: "Os alimentos com mais fibra por 100g, diferença entre fibra solúvel e insolúvel e como atingir sua meta diária.",
    url: "https://nutry.life/blog/alimentos-ricos-em-fibras",
  },
};

export default function AlimentosRicosEmFibras() {
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
            <span style={{ color: "#22c55e" }}>Nutrição</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Nutrição</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>19 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 8 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Alimentos ricos em fibras: lista completa e benefícios
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              A maioria dos brasileiros consome menos da metade da fibra recomendada por dia. Saúde intestinal, controle do colesterol, glicemia e saciedade — tudo depende de fibra suficiente. Veja quais alimentos têm mais e como incluí-los.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio rico em fibras personalizado</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar que atinge sua meta diária de fibras com receitas brasileiras práticas.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar cardápio rico em fibras →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Fibra solúvel vs. insolúvel: qual a diferença?</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { tipo: "Fibra Solúvel", desc: "Se dissolve em água e forma um gel viscoso no intestino. Esse gel captura colesterol, desacelera a absorção de glicose e alimenta as bactérias benéficas do microbioma.", beneficios: ["Reduz LDL (colesterol ruim)", "Controla glicemia — fundamental para diabéticos", "Alimenta probióticos intestinais", "Aumenta saciedade"], fontes: "Aveia, maçã, pera, cenoura, feijão, lentilha, chia, psyllium", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { tipo: "Fibra Insolúvel", desc: "Não se dissolve em água. Adiciona volume às fezes, acelera o trânsito intestinal e previne constipação. Essencial para a saúde do cólon.", beneficios: ["Previne e trata constipação", "Reduz risco de câncer de cólon", "Acelera o trânsito intestinal", "Saúde da mucosa intestinal"], fontes: "Farelo de trigo, grãos integrais, cascas de frutas, vegetais fibrosos, nozes", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
              ].map((item, i) => (
                <div key={i} style={{ background: item.cor, border: `1px solid ${item.borda}`, borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontWeight: 800, color: item.txt, marginBottom: "6px", fontSize: "0.95rem" }}>{item.tipo}</div>
                  <div style={{ fontSize: "0.86rem", color: item.txt, fontWeight: 500, lineHeight: 1.7, marginBottom: "10px" }}>{item.desc}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "8px" }}>
                    {item.beneficios.map((b, j) => <span key={j} style={{ background: "white", border: `1px solid ${item.borda}`, borderRadius: "20px", padding: "3px 10px", fontSize: "0.78rem", color: item.txt, fontWeight: 700 }}>{b}</span>)}
                  </div>
                  <div style={{ fontSize: "0.83rem", color: item.txt, fontWeight: 700 }}>🍽️ Fontes: {item.fontes}</div>
                </div>
              ))}
            </div>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[{ val: "25–38g", lbl: "fibra recomendada/dia" }, { val: "~14g", lbl: "média brasileira atual" }, { val: "70/30", lbl: "insolúvel/solúvel ideal" }].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal} style={{ fontSize: "1rem" }}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Ranking: alimentos com mais fibra por 100g</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { alimento: "Farelo de trigo", fibra: "43g", obs: "Maior concentração — mas use com moderação", destaque: true },
                { alimento: "Linhaça", fibra: "27g", obs: "Solúvel + insolúvel + ômega-3 — trio poderoso", destaque: true },
                { alimento: "Chia", fibra: "34g", obs: "Forma gel no estômago — saciante e versátil", destaque: true },
                { alimento: "Feijão preto cozido", fibra: "8,7g", obs: "Fibra solúvel que alimenta o microbioma", destaque: false },
                { alimento: "Lentilha cozida", fibra: "8g", obs: "Melhor custo-benefício em fibra + proteína", destaque: false },
                { alimento: "Grão-de-bico cozido", fibra: "7,6g", obs: "Versátil — hummus, salada, cozido", destaque: false },
                { alimento: "Aveia em flocos", fibra: "10g", obs: "Beta-glucana solúvel — reduz colesterol", destaque: true },
                { alimento: "Amêndoas", fibra: "12,5g", obs: "Fibra + proteína + gordura boa", destaque: false },
                { alimento: "Brócolis cozido", fibra: "3,3g", obs: "Volume grande por baixa caloria", destaque: false },
                { alimento: "Maçã com casca", fibra: "2,4g", obs: "Pectina solúvel — não tire a casca!", destaque: false },
                { alimento: "Pera com casca", fibra: "3,1g", obs: "Uma das frutas com mais fibra", destaque: false },
                { alimento: "Batata-doce assada (com casca)", fibra: "3g", obs: "Amido resistente + fibra solúvel", destaque: false },
                { alimento: "Quinoa cozida", fibra: "2,8g", obs: "Único grão completo em aminoácidos + fibra", destaque: false },
                { alimento: "Psyllium (1 col. sopa)", fibra: "7g", obs: "Suplemento de fibra solúvel — dissolva em água", destaque: true },
                { alimento: "Pão integral (1 fatia)", fibra: "2g", obs: "Prefira com ≥3g de fibra por fatia no rótulo", destaque: false },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1.1rem", background: item.destaque ? "#f0fdf4" : "#f9fafb", border: `1px solid ${item.destaque ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "10px", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#111827" }}>{item.alimento}</div>
                    <div style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 500 }}>{item.obs}</div>
                  </div>
                  <div style={{ background: item.destaque ? "#16a34a" : "#374151", color: "white", borderRadius: "20px", padding: "4px 12px", fontSize: "0.85rem", fontWeight: 800, flexShrink: 0 }}>{item.fibra} fibra</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Como atingir 25–30g de fibra por dia</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>Com escolhas estratégicas ao longo do dia, bater a meta é fácil:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { ref: "Café da manhã", combo: "Aveia 5 col. + chia 1 col. + maçã com casca", fibra: "~12g" },
                { ref: "Almoço", combo: "Feijão 1 concha + arroz integral + brócolis", fibra: "~8g" },
                { ref: "Lanche", combo: "1 pera com casca + 10 amêndoas", fibra: "~4g" },
                { ref: "Jantar", combo: "Batata-doce com casca + legumes variados", fibra: "~5g" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1.1rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#16a34a" }}>{r.ref}</div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#166534" }}>{r.combo}</div>
                  </div>
                  <div style={{ background: "#16a34a", color: "white", borderRadius: "20px", padding: "4px 12px", fontSize: "0.85rem", fontWeight: 800 }}>{r.fibra}</div>
                </div>
              ))}
              <div style={{ padding: "0.8rem 1.1rem", background: "#166534", borderRadius: "10px", fontSize: "0.9rem", color: "white", fontWeight: 800, textAlign: "center" }}>Total: ~29g de fibra ✅ — dentro da meta diária</div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>Cuidados ao aumentar o consumo de fibra</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Aumente gradualmente — de uma vez pode causar gases, inchaço e desconforto", "Beba muita água — fibra sem água pode causar constipação, não curar", "Introduza chia e psyllium devagar — muito alto em fibra solúvel pode fermentar excessivamente", "Se tiver síndrome do intestino irritável, consulte nutricionista antes de aumentar fibras"].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", padding: "0.65rem 1rem", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "10px", fontSize: "0.88rem", fontWeight: 600, color: "#92400e", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>⚠️</span><span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio que atinge sua meta de fibras todo dia?</h2>
              <p>Nossa IA monta um plano alimentar completo que equilibra fibra solúvel e insolúvel com receitas práticas.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Meta diária de fibra calculada</div>
              <div className={styles.premiumFeatureItem}>✅ Equilíbrio solúvel e insolúvel</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio semanal com ingredientes brasileiros</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu cardápio rico em fibras grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/como-diminuir-o-colesterol", emoji: "❤️", titulo: "Como diminuir o colesterol com alimentação", meta: "9 min · Saúde Metabólica" },
                { href: "/blog/dieta-para-diabeticos", emoji: "🩸", titulo: "Dieta para diabéticos: o que comer e o que evitar", meta: "10 min · Saúde Metabólica" },
                { href: "/blog/alimentos-que-inflamam-o-corpo", emoji: "🔥", titulo: "Alimentos que inflamam o corpo: lista completa", meta: "9 min · Saúde & Inflamação" },
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
        "headline": "Alimentos ricos em fibras: lista completa e benefícios",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-19",
        "description": "Ranking dos alimentos com mais fibra por 100g, diferença entre fibra solúvel e insolúvel e como atingir 25-30g por dia.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/alimentos-ricos-em-fibras" },
        "keywords": ["alimentos ricos em fibras", "lista alimentos com fibra", "fibras na alimentacao"],
      })}} />
    </>
  );
}
