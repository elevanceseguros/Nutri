import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "O que Comer para Ter Mais Energia no Dia a Dia | Nutry.life",
  description: "Descubra quais alimentos aumentam a energia de verdade, o que está causando seu cansaço e como montar refeições para manter o pique do início ao fim do dia.",
  keywords: "o que comer para ter mais energia, alimentos que dao energia, cansaco e alimentacao, o que comer para nao ter sono, alimentos energeticos naturais",
  openGraph: {
    title: "O que Comer para Ter Mais Energia no Dia a Dia | Nutry.life",
    description: "Os alimentos que realmente aumentam energia, o que evitar e como montar refeições para manter o pique o dia todo.",
    url: "https://nutry.life/blog/o-que-comer-para-ter-mais-energia",
  },
};

export default function MaisEnergia() {
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
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>7 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 8 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              O que comer para ter mais energia no dia a dia
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Cansaço constante, sono no meio do dia e falta de pique raramente são falta de café. Na maioria dos casos, é a alimentação que está sabotando sua energia. Veja o que mudar.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio para energia e disposição</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar com foco em energia estável ao longo do dia, sem picos e quedas de glicose.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu plano de energia →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Por que você se sente cansado mesmo dormindo?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              O cansaço pós-prandial (aquela soneira depois do almoço) e a queda de energia no meio do dia são sinais clássicos de <strong>desregulação glicêmica</strong>. Quando você come carboidratos refinados e açúcar, a glicose sobe rápido — insulina libera muito — glicose cai rápido — e você se sente sem energia e com fome novamente.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              A solução não é cortar carboidrato — é <strong>escolher os carboidratos certos</strong> e combiná-los com proteína e fibra para desacelerar a absorção e manter glicose estável.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "1.25rem" }}>
              {["Pular o café da manhã ou comer só carboidrato refinado", "Almoço pesado com muita farinha branca e fritura", "Açúcar e refrigerante como 'estímulo' rápido", "Pouca proteína nas refeições principais", "Desidratação — até 2% de déficit hídrico já causa cansaço e falta de foco", "Deficiências de ferro, vitamina B12 ou magnésio"].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", padding: "0.6rem 1rem", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px", fontSize: "0.88rem", fontWeight: 600, color: "#991b1b", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>⚡</span><span>{c}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "0.75rem", fontSize: "0.84rem", color: "#6b7280", fontStyle: "italic", fontWeight: 500 }}>Causas alimentares mais comuns de cansaço crônico.</div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Top 12 alimentos que aumentam energia de verdade</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { emoji: "🌾", nome: "Aveia", motivo: "Beta-glucana libera glicose lentamente — energia estável por horas. Rico em magnésio e vitaminas B." },
                { emoji: "🍠", nome: "Batata-doce", motivo: "Carboidrato complexo + vitamina A + potássio. Energia que dura sem pico de insulina." },
                { emoji: "🥚", nome: "Ovos", motivo: "Proteína completa + colina para função cerebral + vitamina B12. Energizante real." },
                { emoji: "🐟", nome: "Peixe gorduroso (salmão, sardinha)", motivo: "Ômega-3 melhora função mitocondrial — as 'usinas' de energia das células." },
                { emoji: "🍌", nome: "Banana", motivo: "Glicose + frutose + potássio + vitamina B6. O snack energético mais completo da natureza." },
                { emoji: "🥜", nome: "Castanhas e nozes", motivo: "Gordura boa + magnésio + vitamina E — magnésio é essencial para produção de ATP (energia celular)." },
                { emoji: "🫘", nome: "Feijão e lentilha", motivo: "Carboidrato complexo + proteína + ferro. Energia duradoura e previne anemia (causa comum de cansaço)." },
                { emoji: "🍚", nome: "Arroz integral", motivo: "Manganês e vitaminas B que convertem carboidrato em energia. Indústria glicêmica menor que o branco." },
                { emoji: "🥬", nome: "Folhas verde-escuras (espinafre, couve)", motivo: "Ferro, folato, magnésio e vitaminas B — o combo que faz as mitocôndrias funcionarem." },
                { emoji: "🫐", nome: "Frutas vermelhas", motivo: "Antioxidantes que protegem as mitocôndrias do estresse oxidativo — mais energia celular." },
                { emoji: "☕", nome: "Café preto (com moderação)", motivo: "Cafeína bloqueia adenosina (hormônio do sono) e aumenta dopamina. Eficaz mas temporário." },
                { emoji: "🍫", nome: "Chocolate amargo 70%+", motivo: "Teobromina + cafeína + ferro + magnésio. Estimulante mais suave e duradouro que o café." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "14px", padding: "1rem 1.4rem", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.92rem", marginBottom: "3px" }}>{item.nome}</div>
                    <div style={{ fontSize: "0.85rem", color: "#15803d", fontWeight: 500, lineHeight: 1.6 }}>{item.motivo}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Alimentos que roubam sua energia (evite)</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { item: "Açúcar e doces", efeito: "Pico de insulina → queda brusca de glicose → cansaço e mais fome em 1–2h" },
                { item: "Pão branco e farinha refinada", efeito: "Alto índice glicêmico — mesmo efeito do açúcar, mas disfarçado" },
                { item: "Fritura e gordura trans", efeito: "Dificulta digestão, reduz absorção de nutrientes e causa inflamação mitocondrial" },
                { item: "Álcool", efeito: "Depressor do sistema nervoso central — cansaço, névoa mental e sono não restaurador" },
                { item: "Alimentos ultra-processados", efeito: "Pobres em micronutrientes essenciais para produção de energia (ferro, B12, magnésio, zinco)" },
                { item: "Refeições muito grandes", efeito: "Desviam sangue para digestão — sonolência pós-prandial clássica" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "0.9rem 1.2rem" }}>
                  <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "3px" }}>❌ {item.item}</div>
                  <div style={{ fontSize: "0.84rem", color: "#b91c1c", fontWeight: 500, lineHeight: 1.6 }}>{item.efeito}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>Cardápio para energia estável o dia todo</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { ref: "☀️ Café da manhã — energia para as manhãs", itens: ["Omelete de 2 ovos com espinafre e tomate", "Aveia com banana e pasta de amendoim (5 col.)", "Café preto ou chá verde"] },
                { ref: "🍎 Lanche manhã — manter pique sem pico", itens: ["1 banana ou maçã + 10 castanhas", "Água — mínimo 500ml até aqui"] },
                { ref: "🍚 Almoço — energia da tarde sem sonolência", itens: ["Arroz integral (porção moderada) + feijão", "Peixe ou frango grelhado (150g)", "Legumes variados refogados no azeite", "Salada verde — não pule, é a fibra que evita o pico"] },
                { ref: "⚡ Lanche da tarde — evitar queda das 15h", itens: ["Iogurte grego com frutas vermelhas", "Ou: chocolate amargo 70% (2 quadradinhos) + café"] },
                { ref: "🌙 Jantar leve — dormir bem para ter energia amanhã", itens: ["Proteína leve (ovo, peixe, frango)", "Carboidrato moderado (batata-doce, mandioca)", "Vegetais à vontade", "Chá relaxante (camomila) — sem cafeína à noite"] },
              ].map((r, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#f0fdf4" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: i % 2 === 0 ? "#166534" : "#374151", marginBottom: "8px", fontSize: "0.9rem" }}>{r.ref}</div>
                  {r.itens.map((it, j) => <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: i % 2 === 0 ? "#15803d" : "#4b5563", fontWeight: 600, marginBottom: "5px" }}><span className={styles.dot} />{it}</div>)}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>05.</span><span className={styles.qLabel}>A regra de ouro da energia: glicose estável</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>Toda estratégia de energia alimentar se resume a uma coisa: <strong>evitar picos e quedas bruscas de glicose</strong>. Faça isso e você vai notar diferença na disposição em menos de uma semana.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "1rem" }}>
              {[
                "Sempre combine carboidrato com proteína ou gordura boa — isso desacelera a absorção",
                "Coma vegetais e fibras antes ou junto com o carboidrato — reduz o pico glicêmico",
                "Não pule refeições — hipoglicemia é a maior ladra de energia",
                "Beba água constantemente — desidratação leve já causa fadiga",
                "Prefira refeições menores e mais frequentes se você é propenso a quedas de energia",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", padding: "0.65rem 1rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", fontSize: "0.88rem", fontWeight: 600, color: "#166534", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>✅</span><span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio para ter energia o dia todo?</h2>
              <p>Nossa IA monta um plano alimentar com glicose estável, proteína distribuída e receitas práticas para o seu dia a dia.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio para energia estável</div>
              <div className={styles.premiumFeatureItem}>✅ Sem picos e quedas de glicose</div>
              <div className={styles.premiumFeatureItem}>✅ Adaptado à sua rotina e objetivos</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu plano de energia grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/proteina-no-cafe-da-manha", emoji: "🍳", titulo: "Proteína no café da manhã: benefícios e 10 opções", meta: "7 min · Nutrição" },
                { href: "/blog/alimentos-que-inflamam-o-corpo", emoji: "🔥", titulo: "Alimentos que inflamam o corpo: lista completa", meta: "9 min · Saúde & Inflamação" },
                { href: "/blog/como-diminuir-o-colesterol", emoji: "❤️", titulo: "Como diminuir o colesterol com alimentação", meta: "9 min · Saúde Metabólica" },
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
        "headline": "O que comer para ter mais energia no dia a dia",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-07",
        "description": "Os 12 alimentos que aumentam energia de verdade, o que evitar e como manter glicose estável o dia todo.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/o-que-comer-para-ter-mais-energia" },
        "keywords": ["o que comer para ter mais energia", "alimentos que dao energia", "cansaco e alimentacao"],
      })}} />
    </>
  );
}
