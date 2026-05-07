import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Como Diminuir o Colesterol com Alimentação: Guia Completo | Nutry.life",
  description: "Descubra como reduzir o colesterol alto com mudanças na alimentação: alimentos que baixam, alimentos que sobem e um cardápio anti-colesterol de exemplo.",
  keywords: "como diminuir o colesterol, como baixar o colesterol com alimentacao, alimentos que baixam colesterol, colesterol alto o que comer, dieta para colesterol alto",
  openGraph: {
    title: "Como Diminuir o Colesterol com Alimentação | Nutry.life",
    description: "O que comer (e o que evitar) para reduzir o colesterol LDL e aumentar o HDL naturalmente.",
    url: "https://nutry.life/blog/como-diminuir-o-colesterol",
  },
};

export default function ComoDiminuirColesterol() {
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
            <span style={{ color: "#22c55e" }}>Saúde Metabólica</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Saúde Metabólica</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Como diminuir o colesterol com alimentação: guia completo
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Colesterol alto é silencioso — mas a alimentação pode reduzi-lo em até 20–30% em poucas semanas. Veja o que comer, o que evitar e como montar uma dieta anti-colesterol eficaz.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio personalizado para colesterol</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar completo focado em reduzir LDL e aumentar HDL com receitas brasileiras.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio anti-colesterol →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>LDL, HDL e triglicerídeos: o que é cada um?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>Colesterol não é um inimigo — é uma molécula essencial para hormônios, vitamina D e membranas celulares. O problema está no <strong>desequilíbrio</strong> entre os tipos.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1.25rem" }}>
              {[
                { sigla: "LDL", nome: "Colesterol 'ruim'", desc: "Transporta colesterol do fígado para os tecidos. Em excesso, deposita nas paredes das artérias formando placas.", meta: "< 130 mg/dL (ideal < 100)", cor: "#fef2f2", borda: "#fecaca", txt: "#991b1b" },
                { sigla: "HDL", nome: "Colesterol 'bom'", desc: "Remove o excesso de colesterol dos tecidos e leva de volta ao fígado para ser eliminado. Quanto mais, melhor.", meta: "> 40 mg/dL (H) / > 50 mg/dL (M)", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { sigla: "TG", nome: "Triglicerídeos", desc: "Gordura no sangue — elevados por excesso de açúcar, álcool e carboidratos refinados. Também aumentam risco cardiovascular.", meta: "< 150 mg/dL", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e" },
              ].map((item, i) => (
                <div key={i} style={{ background: item.cor, border: `1px solid ${item.borda}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "6px", flexWrap: "wrap" }}>
                    <div style={{ background: item.txt, color: "white", borderRadius: "8px", padding: "2px 10px", fontSize: "0.82rem", fontWeight: 800 }}>{item.sigla}</div>
                    <div style={{ fontWeight: 800, color: item.txt, fontSize: "0.92rem" }}>{item.nome}</div>
                    <div style={{ fontSize: "0.78rem", color: item.txt, fontWeight: 700, background: "white", padding: "2px 8px", borderRadius: "6px", border: `1px solid ${item.borda}` }}>Meta: {item.meta}</div>
                  </div>
                  <div style={{ fontSize: "0.86rem", color: item.txt, fontWeight: 500, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Alimentos que aumentam o colesterol ruim (evite)</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { alimento: "Gordura trans (margarina, biscoito amanteigado)", motivo: "Eleva LDL e reduz HDL simultaneamente — o pior dos mundos para o coração" },
                { alimento: "Carne processada (salsicha, presunto, bacon)", motivo: "Gordura saturada + sódio + nitratos — combo inflamatório e pró-aterogênico" },
                { alimento: "Frituras em óleo refinado", motivo: "Óleo aquecido produz compostos oxidados que elevam LDL oxidado — o mais perigoso" },
                { alimento: "Açúcar refinado e doces", motivo: "Eleva triglicerídeos e LDL pequeno e denso — o mais aterogênico" },
                { alimento: "Laticínios integrais em excesso (queijos gordurosos, manteiga em excesso)", motivo: "Rica em gordura saturada — eleva LDL em pessoas sensíveis" },
                { alimento: "Fast food e ultra-processados", motivo: "Combinação de gordura trans + saturada + açúcar — impacto cumulativo no perfil lipídico" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "0.9rem 1.2rem" }}>
                  <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "3px" }}>❌ {item.alimento}</div>
                  <div style={{ fontSize: "0.84rem", color: "#b91c1c", fontWeight: 500, lineHeight: 1.6 }}>{item.motivo}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Alimentos que reduzem o colesterol (inclua mais)</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { emoji: "🌾", alimento: "Aveia e farelo de aveia", mecanismo: "Beta-glucana solúvel forma um gel no intestino que captura colesterol e impede sua absorção. 3g/dia = até 5–10% de redução do LDL." },
                { emoji: "🫒", alimento: "Azeite extravirgem", mecanismo: "Oleico (ômega-9) e polifenóis aumentam HDL e reduzem LDL oxidado. Substitua óleos refinados." },
                { emoji: "🐟", alimento: "Peixe gorduroso (salmão, sardinha, atum)", mecanismo: "Ômega-3 EPA/DHA reduz triglicerídeos em até 30% e aumenta HDL." },
                { emoji: "🥦", alimento: "Vegetais e frutas ricos em fibra solúvel", mecanismo: "Maçã (pectina), berinjela, quiabo, cenoura — fibras que literalmente 'sequestram' o colesterol no intestino." },
                { emoji: "🥜", alimento: "Castanhas, nozes e amêndoas", mecanismo: "Gorduras monoinsaturadas + fitoesteróis + fibra — tripla ação anti-colesterol." },
                { emoji: "🫘", alimento: "Leguminosas (feijão, lentilha, grão-de-bico)", mecanismo: "Fibra solúvel + fitosteróis. Substituem proteína animal de alto teor de gordura saturada." },
                { emoji: "🧄", alimento: "Alho", mecanismo: "Alicina reduz síntese de colesterol no fígado. Consumo regular pode baixar LDL em 5–10%." },
                { emoji: "🍵", alimento: "Chá verde", mecanismo: "Catequinas inibem a absorção intestinal de colesterol e reduzem LDL." },
                { emoji: "🫐", alimento: "Frutas vermelhas (morango, mirtilo, amora)", mecanismo: "Antocianinas e polifenóis reduzem LDL oxidado e têm ação anti-inflamatória vascular." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "14px", padding: "1rem 1.4rem", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.92rem", marginBottom: "3px" }}>{item.alimento}</div>
                    <div style={{ fontSize: "0.85rem", color: "#15803d", fontWeight: 500, lineHeight: 1.6 }}>{item.mecanismo}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>Cardápio anti-colesterol de exemplo</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { ref: "☀️ Café da manhã", itens: ["Aveia com leite vegetal ou desnatado (5 col.) + maçã picada + canela", "Café preto sem açúcar"] },
                { ref: "🍎 Lanche da manhã", itens: ["1 maçã com casca (pectina!)", "10 amêndoas ou nozes"] },
                { ref: "🍚 Almoço", itens: ["Arroz integral + feijão carioca", "Sardinha ou atum grelhado (150g)", "Berinjela e cenoura refogadas no azeite", "Salada de rúcula e tomate com azeite e limão"] },
                { ref: "🌿 Lanche da tarde", itens: ["Iogurte desnatado natural", "Frutas vermelhas frescas ou congeladas (morango, mirtilo)"] },
                { ref: "🌙 Jantar", itens: ["Salmão assado com alho e ervas (150g)", "Quinoa cozida (4 col.)", "Brócolis e abobrinha no vapor com azeite", "Chá verde após a refeição"] },
              ].map((r, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#f0fdf4" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: i % 2 === 0 ? "#166534" : "#374151", marginBottom: "8px", fontSize: "0.9rem" }}>{r.ref}</div>
                  {r.itens.map((it, j) => <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: i % 2 === 0 ? "#15803d" : "#4b5563", fontWeight: 600, marginBottom: "5px" }}><span className={styles.dot} />{it}</div>)}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>05.</span><span className={styles.qLabel}>Quanto tempo para o colesterol baixar com dieta?</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { periodo: "2–4 semanas", resultado: "Redução de triglicerídeos já visível — especialmente se cortou açúcar e álcool.", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e" },
                { periodo: "4–8 semanas", resultado: "Queda de LDL começa a aparecer nos exames. Aumento gradual do HDL com inclusão de ômega-3 e atividade física.", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { periodo: "3 meses", resultado: "Redução de 10–25% no LDL possível com dieta e exercício consistentes. Resultados dependem do nível inicial e da adesão.", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
              ].map((f, i) => (
                <div key={i} style={{ background: f.cor, border: `1px solid ${f.borda}`, borderRadius: "12px", padding: "0.9rem 1.2rem" }}>
                  <div style={{ fontWeight: 800, color: f.txt, fontSize: "0.88rem", marginBottom: "4px" }}>{f.periodo}</div>
                  <div style={{ fontSize: "0.86rem", color: f.txt, fontWeight: 500, lineHeight: 1.6 }}>{f.resultado}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1rem", padding: "1rem 1.25rem", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", fontSize: "0.87rem", color: "#991b1b", fontWeight: 600, lineHeight: 1.7 }}>
              ⚠️ Dieta reduz o colesterol, mas não substitui medicação prescrita por médico. Se o seu LDL está muito alto, consulte um cardiologista.
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio personalizado para baixar o colesterol?</h2>
              <p>Nossa IA monta um plano alimentar completo focado em reduzir LDL com receitas brasileiras saborosas.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio anti-colesterol semanal</div>
              <div className={styles.premiumFeatureItem}>✅ Foco em fibra solúvel e ômega-3</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas práticas com ingredientes do Brasil</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu cardápio anti-colesterol grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/alimentos-que-inflamam-o-corpo", emoji: "🔥", titulo: "Alimentos que inflamam o corpo: lista completa", meta: "9 min · Saúde & Inflamação" },
                { href: "/blog/o-que-comer-para-ter-mais-energia", emoji: "⚡", titulo: "O que comer para ter mais energia no dia a dia", meta: "8 min · Nutrição" },
                { href: "/blog/cardapio-saudavel-para-semana", emoji: "🥗", titulo: "Cardápio saudável para a semana: 5 dias prontos", meta: "10 min · Alimentação Saudável" },
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
        "headline": "Como diminuir o colesterol com alimentação: guia completo",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-06",
        "description": "Como reduzir o colesterol LDL com alimentação: alimentos que baixam, que evitar e cardápio de exemplo.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/como-diminuir-o-colesterol" },
        "keywords": ["como diminuir o colesterol", "colesterol alto alimentacao", "alimentos que baixam colesterol"],
      })}} />
    </>
  );
}
