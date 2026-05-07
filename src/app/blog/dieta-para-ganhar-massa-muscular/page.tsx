import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Dieta para Ganhar Massa Muscular: O que Comer e Como Montar | Nutry.life",
  description: "Guia completo de alimentação para ganhar massa muscular: quantas calorias, quanta proteína, o que comer antes e depois do treino e cardápio de exemplo.",
  keywords: "dieta para ganhar massa muscular, alimentacao para ganhar massa, o que comer para ganhar musculo, dieta hipertrofia, cardapio para ganhar massa muscular",
  openGraph: {
    title: "Dieta para Ganhar Massa Muscular: Guia Completo | Nutry.life",
    description: "Quantas calorias, quanta proteína e o que comer para ganhar massa muscular de forma eficaz.",
    url: "https://nutry.life/blog/dieta-para-ganhar-massa-muscular",
  },
};

export default function DietaMassaMuscular() {
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
            <span style={{ color: "#22c55e" }}>Hipertrofia</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Hipertrofia</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>4 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 10 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Dieta para ganhar massa muscular: o que comer e como montar
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Treino sem alimentação certa é esforço perdido. Descubra quanto comer, quanta proteína você precisa, quais alimentos priorizar e como montar um cardápio para hipertrofia de verdade.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere seu cardápio de hipertrofia personalizado</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA calcula suas calorias e monta um cardápio completo para ganho de massa com receitas brasileiras.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio de hipertrofia →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Os 3 pilares da nutrição para hipertrofia</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>Ganhar massa muscular exige três coisas na alimentação funcionando juntas: <strong>superávit calórico</strong> (comer mais do que gasta), <strong>proteína suficiente</strong> (matéria-prima do músculo) e <strong>consistência</strong> (sem isso, os dois anteriores não funcionam).</p>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[{ val: "+200–400", lbl: "kcal acima do TDEE" }, { val: "1,6–2,2g", lbl: "proteína por kg/dia" }, { val: "6–12", lbl: "semanas para resultados visíveis" }].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal} style={{ fontSize: "1.1rem" }}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Quantas calorias comer para ganhar massa?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>Para ganhar músculo você precisa de um <strong>superávit calórico moderado</strong> — comer mais do que o corpo gasta. Superávit muito alto gera gordura; muito baixo não dá energia para crescer.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1.25rem" }}>
              {[
                { tipo: "Bulk limpo (recomendado)", formula: "TDEE + 200–300 kcal", desc: "Ganho lento e controlado — mais músculo, menos gordura. Ideal para maioria.", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { tipo: "Bulk moderado", formula: "TDEE + 300–500 kcal", desc: "Ganho mais rápido, com um pouco mais de gordura junto. Bom para iniciantes.", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
                { tipo: "Bulk agressivo (não recomendado)", formula: "TDEE + 500+ kcal", desc: "Ganho rápido mas com muita gordura. Requer cutting depois — ciclo ineficiente.", cor: "#fef2f2", borda: "#fecaca", txt: "#991b1b" },
              ].map((b, i) => (
                <div key={i} style={{ background: b.cor, border: `1px solid ${b.borda}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                    <div style={{ fontWeight: 800, color: b.txt, fontSize: "0.92rem" }}>{b.tipo}</div>
                    <div style={{ fontFamily: "monospace", fontWeight: 800, color: b.txt, background: "white", padding: "2px 10px", borderRadius: "8px", border: `1px solid ${b.borda}`, fontSize: "0.85rem" }}>{b.formula}</div>
                  </div>
                  <div style={{ fontSize: "0.86rem", color: b.txt, fontWeight: 500, lineHeight: 1.6 }}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Distribuição de macros para hipertrofia</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { macro: "🥩 Proteína", meta: "1,6–2,2g por kg", papel: "Construção e reparação muscular — o macro mais importante", fontes: ["Frango, carne vermelha magra, peixe", "Ovos e claras de ovo", "Whey protein, caseína", "Iogurte grego, cottage", "Feijão, lentilha, grão-de-bico (complementar)"], cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { macro: "🍚 Carboidrato", meta: "3–5g por kg", papel: "Combustível para o treino intenso e reposição de glicogênio", fontes: ["Arroz integral, batata-doce, mandioca", "Aveia, macarrão integral", "Frutas (banana, manga, tâmara)", "Pão integral"], cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
                { macro: "🥑 Gordura", meta: "0,8–1,2g por kg", papel: "Produção hormonal (testosterona!), absorção de vitaminas lipossolúveis", fontes: ["Azeite extravirgem", "Abacate, castanhas, nozes", "Ovos inteiros", "Peixe gorduroso (salmão, sardinha)"], cor: "#fffbeb", borda: "#fde68a", txt: "#92400e" },
              ].map((m, i) => (
                <div key={i} style={{ background: m.cor, border: `1px solid ${m.borda}`, borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ fontWeight: 800, color: m.txt, fontSize: "0.95rem" }}>{m.macro}</div>
                    <div style={{ background: "white", border: `1px solid ${m.borda}`, borderRadius: "20px", padding: "2px 10px", fontSize: "0.8rem", fontWeight: 800, color: m.txt }}>Meta: {m.meta}</div>
                  </div>
                  <div style={{ fontSize: "0.85rem", color: m.txt, fontWeight: 600, marginBottom: "10px" }}>{m.papel}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {m.fontes.map((f, j) => <span key={j} style={{ background: "white", border: `1px solid ${m.borda}`, borderRadius: "20px", padding: "3px 10px", fontSize: "0.8rem", color: m.txt, fontWeight: 700 }}>{f}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>Cardápio de exemplo para hipertrofia (~2.800 kcal)</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>Exemplo para homem de 75kg, moderadamente ativo, com treino à tarde:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { ref: "☀️ Café da manhã (~600 kcal · ~40g prot)", itens: ["Omelete de 4 ovos com queijo e espinafre", "Aveia com banana e mel (5 col.)", "Café com leite desnatado (200ml)"] },
                { ref: "🍌 Pré-treino (~300 kcal · ~10g prot)", itens: ["Banana (2 unidades) + pasta de amendoim (2 col.)", "Café preto 30 min antes do treino"] },
                { ref: "🍚 Almoço / pós-treino (~800 kcal · ~55g prot)", itens: ["Arroz integral (6 col.) + feijão (1,5 concha)", "Frango grelhado (200g)", "Batata-doce assada (150g)", "Salada de folhas com azeite"] },
                { ref: "🥛 Lanche da tarde (~350 kcal · ~35g prot)", itens: ["Whey protein com leite (1 scoop)", "Castanhas (20g)", "1 maçã"] },
                { ref: "🌙 Jantar (~700 kcal · ~50g prot)", itens: ["Carne vermelha magra grelhada (180g)", "Arroz integral (5 col.)", "Brócolis e cenoura refogados", "Azeite (1 fio)"] },
              ].map((r, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#f0fdf4" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: i % 2 === 0 ? "#166534" : "#374151", marginBottom: "8px", fontSize: "0.9rem" }}>{r.ref}</div>
                  {r.itens.map((it, j) => <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: i % 2 === 0 ? "#15803d" : "#4b5563", fontWeight: 600, marginBottom: "5px" }}><span className={styles.dot} />{it}</div>)}
                </div>
              ))}
              <div style={{ padding: "0.8rem 1.1rem", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "10px", fontSize: "0.85rem", color: "#92400e", fontWeight: 700, textAlign: "center" }}>
                Total: ~2.750 kcal · ~190g proteína · ~340g carboidrato · ~75g gordura
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>05.</span><span className={styles.qLabel}>Erros que travam o ganho de massa</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Comer pouca proteína e esperar crescer — músculo não se constrói do ar",
                "Treinar intenso mas comer em déficit calórico — sem energia, não há síntese muscular",
                "Pular refeições e tentar compensar depois — distribuição de proteína ao longo do dia importa",
                "Ignorar o carboidrato — sem glicogênio, treino cai, sem treino intenso, sem músculo",
                "Depender só do whey e ignorar comida real — suplemento complementa, não substitui",
                "Não dormir bem — 70% do hormônio do crescimento é liberado durante o sono",
              ].map((e, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", padding: "0.65rem 1rem", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", fontSize: "0.88rem", fontWeight: 600, color: "#991b1b", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>❌</span><span>{e}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio de hipertrofia personalizado?</h2>
              <p>Nossa IA calcula suas calorias, define seus macros e monta um cardápio completo para ganho de massa.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Superávit calórico calculado para você</div>
              <div className={styles.premiumFeatureItem}>✅ Meta de proteína diária personalizada</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio semanal com receitas brasileiras</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu cardápio de hipertrofia grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/o-que-comer-antes-e-depois-do-treino", emoji: "💪", titulo: "O que comer antes e depois do treino: guia completo", meta: "9 min · Treino & Nutrição" },
                { href: "/blog/alimentos-ricos-em-proteina", emoji: "🥩", titulo: "Alimentos ricos em proteína: lista completa", meta: "8 min · Nutrição" },
                { href: "/blog/quantas-calorias-preciso-por-dia", emoji: "🔢", titulo: "Quantas calorias eu preciso por dia? Cálculo completo", meta: "9 min · Nutrição" },
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
        "headline": "Dieta para ganhar massa muscular: o que comer e como montar",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-04",
        "description": "Guia completo de alimentação para ganhar massa muscular: calorias, proteína, macros, cardápio de exemplo e erros comuns.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/dieta-para-ganhar-massa-muscular" },
        "keywords": ["dieta para ganhar massa muscular", "alimentacao hipertrofia", "cardapio para ganhar massa"],
      })}} />
    </>
  );
}
