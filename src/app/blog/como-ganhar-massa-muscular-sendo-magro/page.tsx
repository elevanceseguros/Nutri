import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Como Ganhar Massa Muscular Sendo Magro: Guia Completo | Nutry.life",
  description: "Guia completo para ectomorfos e pessoas magras que querem ganhar massa muscular: quantas calorias comer, quanta proteína, cardápio e erros que travam o ganho.",
  keywords: "como ganhar massa muscular sendo magro, ectomorfo como ganhar massa, magro que nao engorda, como ganhar peso sendo magro, dieta para ganhar massa ectomorfo",
  openGraph: {
    title: "Como Ganhar Massa Muscular Sendo Magro | Nutry.life",
    description: "Guia para quem é magro e não consegue ganhar peso: calorias, proteína, cardápio e estratégias que funcionam.",
    url: "https://nutry.life/blog/como-ganhar-massa-muscular-sendo-magro",
  },
};

export default function GanharMassaMagro() {
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
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>14 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Como ganhar massa muscular sendo magro: guia completo
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              "Como faço para engordar?" é uma das perguntas mais frustradas na nutrição. Quem é naturalmente magro tem metabolismo acelerado, apetite reduzido e histórico de não ganhar peso com facilidade — mas a solução existe e é mais simples do que parece.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere seu cardápio de ganho de massa para ectomorfos</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA calcula suas calorias e monta um cardápio hipercalórico com receitas brasileiras para quem tem dificuldade de comer muito.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar cardápio para ganhar massa →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Por que pessoas magras têm dificuldade de ganhar massa?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              O chamado <strong>ectomorfo</strong> tem características metabólicas específicas: metabolismo basal mais alto, menor eficiência na absorção calórica, apetite naturalmente reduzido e tendência a queimar mais calorias em atividades cotidianas (o chamado NEAT — Non-Exercise Activity Thermogenesis).
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              O resultado é que o corpo <strong>gasta mais do que a maioria das pessoas imagina</strong> — e comer "bastante" subjetivamente muitas vezes ainda é insuficiente para criar o superávit necessário. A solução não é mágica: é comer mais do que você acha que precisa, de forma estratégica.
            </p>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[{ val: "TDEE alto", lbl: "gasto calórico elevado" }, { val: "+500 kcal", lbl: "superávit necessário" }, { val: "5–6x/dia", lbl: "refeições para volume total" }].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal} style={{ fontSize: "0.95rem" }}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Quantas calorias comer para ganhar massa sendo magro?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Primeiro calcule seu TDEE (veja nosso artigo sobre cálculo de calorias). Para ectomorfos, o superávit precisa ser mais agressivo do que para outros biotipo — <strong>300–500 kcal acima do TDEE</strong> como mínimo, podendo chegar a 700 kcal nos primeiros meses.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1.25rem" }}>
              {[
                { perfil: "Homem magro de 60–65 kg, ativo", tdee: "~2.500 kcal", meta: "3.000–3.200 kcal/dia" },
                { perfil: "Homem magro de 65–75 kg, muito ativo", tdee: "~3.000 kcal", meta: "3.500–3.800 kcal/dia" },
                { perfil: "Mulher magra de 48–55 kg, ativa", tdee: "~2.000 kcal", meta: "2.400–2.600 kcal/dia" },
              ].map((p, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#166534" }}>{p.perfil}</div>
                    <div style={{ fontSize: "0.8rem", color: "#15803d", fontWeight: 500 }}>TDEE estimado: {p.tdee}</div>
                  </div>
                  <div style={{ background: "#16a34a", color: "white", borderRadius: "20px", padding: "4px 12px", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>Meta: {p.meta}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Os melhores alimentos hipercalóricos saudáveis</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>Para quem tem dificuldade de comer muito volume, priorize alimentos <strong>densos em calorias</strong> — mais calorias em menos espaço no estômago:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { alimento: "Pasta de amendoim (2 col. sopa)", kcal: "~190 kcal", obs: "Fácil de adicionar em qualquer refeição" },
                { alimento: "Abacate (½ unidade)", kcal: "~160 kcal", obs: "Gordura boa + vitaminas + versátil" },
                { alimento: "Azeite extravirgem (1 col. sopa)", kcal: "~120 kcal", obs: "Adicione em tudo — sem alterar volume" },
                { alimento: "Castanhas e nozes (30g)", kcal: "~180 kcal", obs: "Lanche perfeito entre refeições" },
                { alimento: "Banana madura (2 unidades)", kcal: "~180 kcal", obs: "Alta densidade calórica + potássio" },
                { alimento: "Arroz branco (5 col. cheias)", kcal: "~250 kcal", obs: "Absorção rápida — ótimo pós-treino" },
                { alimento: "Batata-doce assada (200g)", kcal: "~180 kcal", obs: "Carbo complexo + vitaminas" },
                { alimento: "Leite integral (1 copo 300ml)", kcal: "~180 kcal", obs: "Proteína + cálcio + fácil de beber" },
                { alimento: "Granola sem açúcar (50g)", kcal: "~200 kcal", obs: "Adicione em iogurte ou vitaminas" },
                { alimento: "Tâmaras (5 unidades)", kcal: "~110 kcal", obs: "Açúcar natural de alta densidade" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1.1rem", background: i % 2 === 0 ? "#f0fdf4" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "10px", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#111827" }}>{item.alimento}</div>
                    <div style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 500 }}>{item.obs}</div>
                  </div>
                  <div style={{ background: "#16a34a", color: "white", borderRadius: "20px", padding: "4px 12px", fontSize: "0.85rem", fontWeight: 800, flexShrink: 0 }}>{item.kcal}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>Cardápio hipercalórico de exemplo (~3.200 kcal)</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>Para homem magro de 65 kg que treina 4x por semana:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { ref: "☀️ Café da manhã (~700 kcal)", itens: ["Vitamina: leite integral 300ml + banana + aveia 5 col. + pasta amendoim 2 col.", "Omelete de 3 ovos com queijo e tomate", "Café com leite"] },
                { ref: "🍌 Lanche manhã (~350 kcal)", itens: ["2 bananas + 30g de castanhas", "1 copo de leite ou iogurte grego"] },
                { ref: "🍚 Almoço (~850 kcal)", itens: ["Arroz branco (6 col. cheias) + feijão (2 conchas)", "Frango grelhado (200g) + ovo frito", "Batata-doce assada (150g)", "Salada com azeite generoso (2 col.)", "Suco de fruta natural"] },
                { ref: "⚡ Lanche pré-treino (~400 kcal)", itens: ["Pão integral (2 fatias) com pasta de amendoim e mel", "1 banana", "Café preto"] },
                { ref: "💪 Pós-treino (~450 kcal)", itens: ["Whey protein 1,5 scoop com leite integral (300ml)", "Banana (2 unidades)"] },
                { ref: "🌙 Jantar (~600 kcal)", itens: ["Carne vermelha magra ou peixe (200g)", "Arroz integral (5 col.) + legumes refogados", "Abacate (½) como acompanhamento"] },
              ].map((r, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#f0fdf4" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: i % 2 === 0 ? "#166534" : "#374151", marginBottom: "8px", fontSize: "0.9rem" }}>{r.ref}</div>
                  {r.itens.map((it, j) => <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: i % 2 === 0 ? "#15803d" : "#4b5563", fontWeight: 600, marginBottom: "5px" }}><span className={styles.dot} />{it}</div>)}
                </div>
              ))}
              <div style={{ padding: "0.8rem 1.1rem", background: "#166534", borderRadius: "10px", fontSize: "0.85rem", color: "white", fontWeight: 800, textAlign: "center" }}>
                Total: ~3.350 kcal · ~175g proteína · ~420g carboidrato · ~95g gordura ✅
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>05.</span><span className={styles.qLabel}>Erros que travam o ganho de massa em magros</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Achar que come muito mas não medir — a percepção é sempre menor que a realidade para ectomorfos",
                "Pular refeições por falta de fome — 6h sem comer é volume calórico perdido que não se recupera",
                "Fazer cardio em excesso — queima as calorias que seriam usadas para construir músculo",
                "Não dormir bem — 70% do GH (hormônio do crescimento) é liberado no sono profundo",
                "Esperar resultados em 2 semanas — ganho de massa real leva meses consistentes",
                "Treinar sem progressão de carga — sem sobrecarga progressiva, não há estímulo para crescer",
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
              <h2>Quer um cardápio hipercalórico personalizado?</h2>
              <p>Nossa IA calcula seu TDEE, define seu superávit ideal e monta um cardápio completo para ganho de massa.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Calorias calculadas para seu biótipo</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio hipercalórico semanal</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas de alta densidade calórica</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar cardápio para ganhar massa grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/dieta-para-ganhar-massa-muscular", emoji: "💪", titulo: "Dieta para ganhar massa muscular: guia completo", meta: "10 min · Hipertrofia" },
                { href: "/blog/o-que-comer-antes-e-depois-do-treino", emoji: "🏋️", titulo: "O que comer antes e depois do treino", meta: "9 min · Treino & Nutrição" },
                { href: "/blog/alimentos-ricos-em-proteina", emoji: "🥩", titulo: "Alimentos ricos em proteína: lista completa", meta: "8 min · Nutrição" },
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
        "headline": "Como ganhar massa muscular sendo magro: guia completo",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-14",
        "description": "Como ganhar massa muscular sendo magro: calorias, superávit, alimentos hipercalóricos e cardápio de exemplo para ectomorfos.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/como-ganhar-massa-muscular-sendo-magro" },
        "keywords": ["como ganhar massa muscular sendo magro", "ectomorfo ganhar massa", "magro como engordar"],
      })}} />
    </>
  );
}
