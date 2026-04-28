import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Alimentos que Inflamam o Corpo: Lista Completa e o que Comer no Lugar | Nutry.life",
  description: "Descubra quais alimentos causam inflamação crônica no corpo, por que isso sabota sua saúde e emagrecimento, e veja o que comer no lugar de cada um.",
  keywords: "alimentos que inflamam o corpo, alimentos inflamatorios, o que causa inflamacao no corpo, dieta anti inflamatoria, alimentos que causam inflamacao",
  openGraph: {
    title: "Alimentos que Inflamam o Corpo: Lista Completa | Nutry.life",
    description: "Quais alimentos causam inflamação, por que isso atrapalha o emagrecimento e o que comer no lugar.",
    url: "https://nutry.life/blog/alimentos-que-inflamam-o-corpo",
  },
};

export default function AlimentosInflamacao() {
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
            <span style={{ color: "#22c55e" }}>Saúde & Inflamação</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Saúde & Inflamação</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>29 de abril de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Alimentos que inflamam o corpo: lista completa e o que comer no lugar
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              A inflamação crônica silenciosa está por trás do ganho de peso, cansaço, dor nas articulações e doenças metabólicas. E a alimentação é um dos maiores gatilhos — ou remédios.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio anti-inflamatório personalizado</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>
                Nossa IA monta um plano alimentar focado em reduzir inflamação com receitas brasileiras práticas.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Gerar cardápio anti-inflamatório →
              </Link>
            </div>
          </div>

          {/* Bloco 01 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>O que é inflamação crônica e por que ela importa?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Inflamação aguda é boa — é o corpo se defendendo de uma infecção ou lesão. O problema é a <strong>inflamação crônica de baixo grau</strong>: um estado inflamatório constante e silencioso que você nem sente, mas que vai destruindo o corpo por dentro ao longo de anos.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              Ela está associada a obesidade, diabetes tipo 2, doenças cardiovasculares, artrite, depressão, Alzheimer e até certos tipos de câncer. E <strong>o que você come todos os dias é um dos maiores gatilhos</strong> — ou maiores remédios.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "1.25rem" }}>
              {["Inchaço persistente", "Cansaço mesmo dormindo bem", "Dor nas articulações sem lesão aparente", "Dificuldade de emagrecer mesmo em déficit calórico", "Névoa mental, falta de foco", "Pele com acne ou eczema recorrente"].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", padding: "0.6rem 1rem", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", fontSize: "0.88rem", fontWeight: 600, color: "#991b1b" }}>
                  <span>⚠️</span><span>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "#6b7280", fontWeight: 500, fontStyle: "italic" }}>Sinais de possível inflamação crônica — não são diagnóstico médico.</div>
          </div>

          {/* Bloco 02 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Os 10 principais alimentos inflamatórios</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { num: "01", alimento: "Açúcar refinado e xarope de frutose", mecanismo: "Eleva insulina, ativa citocinas inflamatórias e alimenta bactérias ruins no intestino.", encontrado: "Refrigerantes, sucos industriais, doces, bolos, biscoitos recheados, cereais matinais." },
                { num: "02", alimento: "Óleos vegetais refinados (soja, milho, girassol)", mecanismo: "Riquíssimos em ômega-6. Desequilíbrio entre ômega-6 e ômega-3 é um dos maiores drivers de inflamação sistêmica.", encontrado: "Fritura, margarina, maionese industrializada, salgadinhos, comida de restaurante fast food." },
                { num: "03", alimento: "Gorduras trans (gordura vegetal hidrogenada)", mecanismo: "Alteram as membranas celulares, elevam LDL, reduzem HDL e ativam vias inflamatórias diretamente.", encontrado: "Margarina, biscoito amanteigado, sorvetes baratos, pão de forma industrializado, salgadinhos." },
                { num: "04", alimento: "Farinha branca e carboidratos refinados", mecanismo: "Convertidos em açúcar rapidamente — pico de glicose → pico de insulina → inflamação.", encontrado: "Pão branco, macarrão comum, arroz branco em excesso, bolos, pizza industrializada." },
                { num: "05", alimento: "Álcool em excesso", mecanismo: "Danifica a mucosa intestinal (leaky gut), aumenta permeabilidade e permite que toxinas entrem na corrente sanguínea.", encontrado: "Cerveja, vinho, destilados — efeito dose-dependente." },
                { num: "06", alimento: "Carne processada", mecanismo: "Nitratos, sal e compostos formados no processamento ativam inflamação intestinal e sistêmica.", encontrado: "Presunto, salsicha, linguiça, salame, mortadela, nuggets, hambúrguer industrializado." },
                { num: "07", alimento: "Alimentos ultra-processados", mecanismo: "Combinação de aditivos, conservantes, corantes e emulsificantes que desregulam o microbioma intestinal.", encontrado: "Salgadinhos, macarrão instantâneo, temperos prontos em pó, molhos prontos, snacks." },
                { num: "08", alimento: "Adoçantes artificiais em excesso", mecanismo: "Alteram microbiota intestinal, podendo aumentar resistência à insulina e inflamação metabólica.", encontrado: "Refrigerante diet/zero, iogurtes diet, adoçantes em pó, produtos 'zero açúcar'." },
                { num: "09", alimento: "Laticínios industrializados em excesso", mecanismo: "Para pessoas sensíveis à lactose ou à caseína A1, pode ativar respostas imunes leves e inflamação intestinal.", encontrado: "Leite UHT, queijos processados, requeijão industrializado — depende de sensibilidade individual." },
                { num: "10", alimento: "Fast food e comida ultraprocessada de restaurante", mecanismo: "Combinação de todos os anteriores: óleo refinado + farinha branca + açúcar + sal + aditivos.", encontrado: "Hambúrgueres de redes, frango frito, batata frita, pizzas rápidas, porções fritas." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "16px", padding: "1.4rem 1.5rem" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div style={{ background: "#dc2626", color: "white", borderRadius: "8px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800, flexShrink: 0, marginTop: "2px" }}>{item.num}</div>
                    <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.95rem" }}>{item.alimento}</div>
                  </div>
                  <div style={{ fontSize: "0.87rem", color: "#b91c1c", fontWeight: 600, lineHeight: 1.6, marginBottom: "6px" }}>🔬 {item.mecanismo}</div>
                  <div style={{ fontSize: "0.83rem", color: "#991b1b", fontWeight: 500, lineHeight: 1.6 }}>📍 Onde encontrar: {item.encontrado}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 03 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>O que comer no lugar — alimentos anti-inflamatórios</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>
              A boa notícia: trocar os alimentos inflamatórios por anti-inflamatórios não precisa ser radical. Pequenas substituições consistentes já fazem diferença enorme em semanas:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { de: "Refrigerante / suco industrial", para: "Água com limão, água com gás, chá verde gelado", emoji: "🍋" },
                { de: "Óleo de soja para fritar", para: "Azeite extravirgem ou óleo de coco para cozinhar", emoji: "🫒" },
                { de: "Pão branco / farinha refinada", para: "Pão integral, batata-doce, aveia, mandioca", emoji: "🍠" },
                { de: "Carne processada (presunto, salsicha)", para: "Frango, peixe, ovos, leguminosas", emoji: "🐟" },
                { de: "Salgadinho / snack industrializado", para: "Castanhas, nozes, amendoim torrado sem sal", emoji: "🥜" },
                { de: "Sobremesa com açúcar refinado", para: "Frutas frescas, iogurte grego com mel, banana com pasta de amendoim", emoji: "🍓" },
                { de: "Margarina", para: "Manteiga de qualidade ou abacate amassado", emoji: "🥑" },
              ].map((sub, i) => (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "1rem 1.4rem" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{sub.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "0.87rem", color: "#991b1b", fontWeight: 700, background: "#fef2f2", padding: "2px 8px", borderRadius: "6px", border: "1px solid #fecaca" }}>❌ {sub.de}</span>
                        <span style={{ color: "#9ca3af", fontWeight: 800 }}>→</span>
                        <span style={{ fontSize: "0.87rem", color: "#166534", fontWeight: 700, background: "#f0fdf4", padding: "2px 8px", borderRadius: "6px", border: "1px solid #bbf7d0" }}>✅ {sub.para}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 04 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>Top 10 alimentos anti-inflamatórios que você deve comer mais</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { emoji: "🫒", nome: "Azeite extravirgem", desc: "Rico em oleocanthal — age como anti-inflamatório natural similar ao ibuprofeno." },
                { emoji: "🐟", nome: "Peixe gorduroso (salmão, sardinha, atum)", desc: "Ômega-3 EPA e DHA — os maiores anti-inflamatórios naturais conhecidos." },
                { emoji: "🫐", nome: "Frutas vermelhas (morango, mirtilo, açaí)", desc: "Antioxidantes e antocianinas que neutralizam radicais livres pró-inflamatórios." },
                { emoji: "🟡", nome: "Cúrcuma (açafrão da terra)", desc: "Curcumina é um dos compostos anti-inflamatórios mais estudados da ciência." },
                { emoji: "🌿", nome: "Gengibre", desc: "Gingerol inibe enzimas inflamatórias — ótimo em chá, suco ou refogados." },
                { emoji: "🥦", nome: "Vegetais crucíferos (brócolis, couve-flor, couve)", desc: "Sulforafano ativa genes de defesa celular e reduz marcadores inflamatórios." },
                { emoji: "🥑", nome: "Abacate", desc: "Gorduras monoinsaturadas + tocoferóis com forte ação anti-inflamatória." },
                { emoji: "🍵", nome: "Chá verde", desc: "EGCG (epigalocatequina) reduz citocinas pró-inflamatórias." },
                { emoji: "🥜", nome: "Nozes e castanhas", desc: "Ômega-3 vegetal (ALA) + vitamina E + polifenóis anti-inflamatórios." },
                { emoji: "🧄", nome: "Alho e cebola", desc: "Alicina e quercetina — compostos com ação anti-inflamatória e antimicrobiana." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "14px", padding: "1rem 1.4rem", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.92rem", marginBottom: "3px" }}>{item.nome}</div>
                    <div style={{ fontSize: "0.85rem", color: "#15803d", fontWeight: 500, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 05 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>05.</span>
              <span className={styles.qLabel}>Por onde começar — 5 mudanças que já fazem diferença</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { num: "1", acao: "Troque o óleo de soja pelo azeite", impacto: "Mudança mais impactante por frequência de uso — faz diferença em poucos dias." },
                { num: "2", acao: "Elimine refrigerantes (diet e normal)", impacto: "Açúcar ou adoçante — ambos prejudicam o microbioma. Troque por água ou chá." },
                { num: "3", acao: "Adicione peixe 2–3x por semana", impacto: "Ômega-3 começa a equilibrar a proporção ômega-6:ômega-3 em semanas." },
                { num: "4", acao: "Use cúrcuma e gengibre nos pratos", impacto: "Fáceis de incluir em arroz, sopas e sucos. Efeito cumulativo e real." },
                { num: "5", acao: "Leia os rótulos dos ultra-processados", impacto: "Consciência é o primeiro passo — 'gordura vegetal parcialmente hidrogenada' = gordura trans, fuja." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <div style={{ background: "#16a34a", color: "white", borderRadius: "8px", padding: "3px 10px", fontSize: "0.8rem", fontWeight: 800, flexShrink: 0 }}>{item.num}</div>
                    <div>
                      <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.92rem", marginBottom: "4px" }}>{item.acao}</div>
                      <div style={{ fontSize: "0.86rem", color: "#4b5563", fontWeight: 500, lineHeight: 1.6 }}>{item.impacto}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Premium */}
          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio anti-inflamatório personalizado?</h2>
              <p>Nossa IA monta um plano alimentar focado em reduzir inflamação com receitas brasileiras práticas e saborosas.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio anti-inflamatório semanal</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas com ingredientes brasileiros</div>
              <div className={styles.premiumFeatureItem}>✅ Substituições práticas do seu cardápio atual</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>
              Gerar cardápio anti-inflamatório grátis →
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
                { href: "/blog/quantas-calorias-preciso-por-dia", emoji: "🔢", titulo: "Quantas calorias eu preciso por dia? Cálculo completo", meta: "9 min · Nutrição" },
                { href: "/blog/proteina-no-cafe-da-manha", emoji: "🍳", titulo: "Proteína no café da manhã: benefícios e 10 opções práticas", meta: "7 min · Nutrição" },
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
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Alimentos que inflamam o corpo: lista completa e o que comer no lugar",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-04-29",
        "description": "Os 10 principais alimentos inflamatórios, por que causam inflamação e o que comer no lugar de cada um.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/alimentos-que-inflamam-o-corpo" },
        "keywords": ["alimentos que inflamam o corpo", "alimentos inflamatorios", "dieta anti inflamatoria"],
      })}} />
    </>
  );
}
