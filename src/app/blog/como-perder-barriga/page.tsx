import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Como Perder Barriga: O que Funciona de Verdade (e o que Não Funciona) | Nutry.life",
  description: "Descubra como perder barriga de forma eficaz e duradoura. A ciência por trás da gordura abdominal, o que realmente funciona e erros que sabotam seus resultados.",
  keywords: "como perder barriga, como eliminar gordura abdominal, como secar a barriga, perder barriga rapido, dieta para perder barriga, exercicios para perder barriga",
  openGraph: {
    title: "Como Perder Barriga: O que Funciona de Verdade | Nutry.life",
    description: "A ciência da gordura abdominal e o que realmente funciona para perder barriga de forma duradoura.",
    url: "https://nutry.life/blog/como-perder-barriga",
  },
};

export default function ComoPerderBarriga() {
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
            <span style={{ color: "#22c55e" }}>Emagrecimento</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Emagrecimento</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>3 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 10 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Como perder barriga: o que funciona de verdade (e o que não funciona)
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Barriga é uma das regiões mais difíceis de emagrecer — e também a mais importante para a saúde. Entenda por que ela acumula, o que a ciência diz que funciona e como montar uma estratégia que dá resultado de verdade.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um plano alimentar para perder barriga</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>
                Nossa IA monta um cardápio personalizado com déficit calórico, proteína adequada e receitas anti-inflamatórias para eliminar gordura abdominal.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Gerar meu plano para perder barriga →
              </Link>
            </div>
          </div>

          {/* Bloco 01 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>Por que a barriga é a última a ir embora?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              A gordura abdominal não é toda igual. Existe a <strong>gordura subcutânea</strong> (debaixo da pele, a que você aperta) e a <strong>gordura visceral</strong> (em torno dos órgãos internos — a mais perigosa). A visceral é metabolicamente ativa: libera hormônios inflamatórios e está ligada a diabetes, doenças cardíacas e síndrome metabólica.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              A região abdominal tem <strong>mais receptores de cortisol</strong> do que outras partes do corpo. Por isso o estresse crônico engorda diretamente a barriga — cortisol alto = mais acúmulo de gordura visceral, independente da dieta.
            </p>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[
                { val: "Cortisol", lbl: "hormônio que engorda a barriga" },
                { val: "Insulina", lbl: "facilita acúmulo abdominal" },
                { val: "Déficit", lbl: "única forma real de emagrecer" },
              ].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal} style={{ fontSize: "1rem" }}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 02 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>O que NÃO funciona (mitos populares)</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { mito: "Fazer abdominal emagrece a barriga", realidade: "Abdominais fortalecem a musculatura, mas não queimam gordura localizada. Não existe redução localizada de gordura." },
                { mito: "Chás detox e sucos verdes eliminam barriga", realidade: "Podem reduzir inchaço pontualmente, mas não queimam gordura. Nenhum alimento isolado elimina gordura abdominal." },
                { mito: "Passar fome é o caminho mais rápido", realidade: "Déficit muito agressivo aumenta cortisol (o hormônio que acumula gordura na barriga) e cataboliza músculo." },
                { mito: "Cinta modeladora emagrece a cintura", realidade: "Reduz aparência temporariamente por compressão. Não altera composição corporal." },
                { mito: "Cortar carboidrato totalmente seca a barriga", realidade: "Reduz inchaço por menos retenção de glicogênio/água, mas a gordura em si requer déficit calórico — não exclusão de macros." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "5px" }}>❌ Mito: {item.mito}</div>
                  <div style={{ fontSize: "0.86rem", color: "#b91c1c", fontWeight: 500, lineHeight: 1.6 }}>✅ Realidade: {item.realidade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 03 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>O que realmente funciona — a ciência</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { num: "01", titulo: "Déficit calórico moderado e consistente", desc: "Não tem segredo: para queimar gordura, você precisa gastar mais do que consome. Um déficit de 300–500 kcal/dia é o mais eficaz a longo prazo — reduz gordura sem catabolismo muscular excessivo.", destaque: "Sem déficit calórico, não existe perda de gordura — independente do alimento consumido." },
                { num: "02", titulo: "Alta ingestão de proteína", desc: "Proteína preserva músculo durante o déficit, aumenta saciedade e tem alto efeito térmico. Com mais músculo, seu metabolismo em repouso é maior — queima mais gordura 24h por dia.", destaque: "Meta: 1,6–2,2g de proteína por kg de peso corporal por dia." },
                { num: "03", titulo: "Treino de força (musculação)", desc: "A musculação aumenta massa muscular, eleva o metabolismo basal e é a estratégia mais eficaz para alterar a composição corporal — mais músculo, menos gordura.", destaque: "2–4x por semana já faz diferença significativa na composição corporal." },
                { num: "04", titulo: "Redução de açúcar e ultra-processados", desc: "Açúcar elevado → pico de insulina → sinalização de acúmulo de gordura abdominal. Reduzir açúcar e alimentos industrializados é uma das mudanças com maior impacto na barriga.", destaque: "Refrigerante, suco industrial, biscoito e pão branco são os principais vilões." },
                { num: "05", titulo: "Gestão do estresse e sono adequado", desc: "Cortisol alto sabota qualquer dieta. Dormir menos de 6h aumenta grelina (fome) e cortisol. Boas noites de sono podem ser tão importantes quanto a dieta para a perda de gordura abdominal.", destaque: "7–9h de sono por noite é meta inegociável para quem quer emagrecer." },
                { num: "06", titulo: "Cardio de moderada intensidade", desc: "Caminhada rápida, bike, natação e elíptico são ótimos para aumentar o gasto calórico sem elevar muito o cortisol. Cardio pesado demais em excesso pode atrapalhar.", destaque: "150–300 min de cardio moderado por semana é a recomendação científica." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "1.4rem 1.5rem" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div style={{ background: "#16a34a", color: "white", borderRadius: "8px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800, flexShrink: 0, marginTop: "2px" }}>{item.num}</div>
                    <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.95rem" }}>{item.titulo}</div>
                  </div>
                  <div style={{ fontSize: "0.87rem", color: "#15803d", fontWeight: 500, lineHeight: 1.7, marginBottom: "8px" }}>{item.desc}</div>
                  <div style={{ fontSize: "0.84rem", color: "#166534", fontWeight: 800, background: "white", padding: "6px 12px", borderRadius: "8px", border: "1px solid #bbf7d0" }}>💡 {item.destaque}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 04 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>Cardápio de exemplo para perder barriga</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>
              Um dia alimentar pensado para criar déficit calórico, manter proteína alta e reduzir alimentos inflamatórios:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { refeicao: "☀️ Café da manhã (~400 kcal)", itens: ["Omelete de 3 ovos com espinafre e tomate", "1 fatia de pão integral", "Café preto sem açúcar"] },
                { refeicao: "🌿 Lanche da manhã (~150 kcal)", itens: ["1 maçã ou banana", "Punhado de castanhas (10g)"] },
                { refeicao: "🍚 Almoço (~550 kcal)", itens: ["Arroz integral (4 col.) + feijão (1 concha pequena)", "Frango grelhado com limão e alho (150g)", "Brócolis e cenoura refogados no azeite", "Salada de folhas com azeite e vinagre"] },
                { refeicao: "🌙 Jantar (~400 kcal)", itens: ["Salmão ou tilápia grelhados (150g)", "Batata-doce assada (150g)", "Legumes assados (abobrinha, pimentão)", "Salada verde simples"] },
              ].map((ref, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#f0fdf4" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: i % 2 === 0 ? "#166534" : "#374151", marginBottom: "8px", fontSize: "0.9rem" }}>{ref.refeicao}</div>
                  {ref.itens.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: i % 2 === 0 ? "#15803d" : "#4b5563", fontWeight: 600, marginBottom: "5px" }}>
                      <span className={styles.dot} />{item}
                    </div>
                  ))}
                </div>
              ))}
              <div style={{ padding: "0.8rem 1.1rem", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "10px", fontSize: "0.85rem", color: "#92400e", fontWeight: 700, textAlign: "center" }}>
                Total aproximado: ~1.500 kcal · ~140g de proteína · Déficit de ~500–600 kcal para pessoa sedentária de 70kg
              </div>
            </div>
          </div>

          {/* Bloco 05 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>05.</span>
              <span className={styles.qLabel}>Quanto tempo leva para ver resultado na barriga?</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { periodo: "Semana 1–2", resultado: "Redução de inchaço e retenção hídrica. Você pode perder 1–2 kg de peso (água + glicogênio). A roupa já pode ficar mais folgada.", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e" },
                { periodo: "Semana 3–4", resultado: "Início da perda real de gordura abdominal. Perda média de 0,5–1 kg/semana de gordura efetiva. Diferença visível no espelho começa.", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { periodo: "Mês 2–3", resultado: "Mudança visível e mensurável na circunferência abdominal. A barriga começa a diminuir visivelmente em fotos e na fita métrica.", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
                { periodo: "3–6 meses", resultado: "Transformação real. Com consistência, é possível perder 5–10 cm na cintura e alterar significativamente a composição corporal.", cor: "#f5f3ff", borda: "#ddd6fe", txt: "#5b21b6" },
              ].map((fase, i) => (
                <div key={i} style={{ background: fase.cor, border: `1px solid ${fase.borda}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: fase.txt, fontSize: "0.88rem", marginBottom: "5px" }}>{fase.periodo}</div>
                  <div style={{ fontSize: "0.87rem", color: fase.txt, fontWeight: 500, lineHeight: 1.6 }}>{fase.resultado}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 06 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>06.</span>
              <span className={styles.qLabel}>Por onde começar agora — 5 mudanças imediatas</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { num: "1", acao: "Corte refrigerantes e sucos industriais", impacto: "Reduz até 400 kcal/dia de uma vez só — e elimina o maior pico de insulina da dieta." },
                { num: "2", acao: "Aumente a proteína em cada refeição", impacto: "Frango, ovo, peixe ou leguminosas em todo almoço e jantar. Sacia mais e preserva músculo." },
                { num: "3", acao: "Caminhe 30–45 minutos por dia", impacto: "Queima caloria, reduz cortisol e melhora a sensibilidade à insulina — trio perfeito contra a barriga." },
                { num: "4", acao: "Durma 7–8 horas por noite", impacto: "Sono ruim sobe cortisol e grelina — os dois hormônios que mais sabotam a perda de barriga." },
                { num: "5", acao: "Meça a circunferência abdominal semanalmente", impacto: "A fita métrica é mais fiel que a balança para medir perda de gordura abdominal. Registre e acompanhe." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "1.1rem 1.4rem", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ background: "#16a34a", color: "white", borderRadius: "8px", padding: "4px 10px", fontSize: "0.8rem", fontWeight: 800, flexShrink: 0 }}>{item.num}</div>
                  <div>
                    <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.92rem", marginBottom: "4px" }}>{item.acao}</div>
                    <div style={{ fontSize: "0.85rem", color: "#4b5563", fontWeight: 500, lineHeight: 1.6 }}>{item.impacto}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Premium */}
          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um plano personalizado para perder barriga?</h2>
              <p>Nossa IA calcula seu déficit ideal, monta o cardápio certo e gera receitas brasileiras que cabem na sua rotina.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio com déficit calórico calculado</div>
              <div className={styles.premiumFeatureItem}>✅ Alta proteína para preservar músculo</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas anti-inflamatórias e práticas</div>
              <div className={styles.premiumFeatureItem}>✅ Lista de compras gerada automaticamente</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>
              Gerar meu plano para perder barriga grátis →
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
                { href: "/blog/alimentos-que-inflamam-o-corpo", emoji: "🔥", titulo: "Alimentos que inflamam o corpo: lista completa", meta: "9 min · Saúde & Inflamação" },
                { href: "/blog/quantas-calorias-preciso-por-dia", emoji: "🔢", titulo: "Quantas calorias eu preciso por dia? Cálculo completo", meta: "9 min · Nutrição" },
                { href: "/blog/quanto-tempo-para-ver-resultado-no-jejum-intermitente", emoji: "⏱️", titulo: "Quanto tempo para ver resultado no jejum intermitente?", meta: "8 min · Jejum Intermitente" },
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
        "headline": "Como perder barriga: o que funciona de verdade (e o que não funciona)",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-03",
        "description": "A ciência da gordura abdominal, mitos populares e o que realmente funciona para perder barriga de forma duradoura.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/como-perder-barriga" },
        "keywords": ["como perder barriga", "como eliminar gordura abdominal", "dieta para perder barriga", "perder barriga rapido"],
      })}} />
    </>
  );
}
