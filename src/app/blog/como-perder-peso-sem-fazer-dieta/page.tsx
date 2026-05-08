import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Como Perder Peso Sem Fazer Dieta: 10 Mudanças que Funcionam | Nutry.life",
  description: "Aprenda como perder peso sem seguir dietas restritivas. 10 mudanças de hábito simples e sustentáveis que resultam em emagrecimento real e duradouro.",
  keywords: "como perder peso sem dieta, emagrecer sem fazer dieta, perder peso sem restricao, habitos para emagrecer, como emagrecer sem sofrimento",
  openGraph: {
    title: "Como Perder Peso Sem Fazer Dieta: 10 Mudanças que Funcionam | Nutry.life",
    description: "10 hábitos simples e sustentáveis que resultam em emagrecimento real sem dietas restritivas.",
    url: "https://nutry.life/blog/como-perder-peso-sem-fazer-dieta",
  },
};

export default function PesoSemDieta() {
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
            <span style={{ color: "#22c55e" }}>Emagrecimento</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Emagrecimento</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>10 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Como perder peso sem fazer dieta: 10 mudanças que funcionam
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Dietas restritivas têm taxa de fracasso acima de 80% em 2 anos. O que realmente funciona a longo prazo são mudanças de hábito graduais e sustentáveis — sem contar caloria obsessivamente nem abrir mão de tudo que você gosta.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um plano alimentar sem restrições radicais</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um cardápio equilibrado e sustentável para emagrecer sem passar fome ou abrir mão de tudo.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu plano sustentável →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Por que dietas restritivas não funcionam</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Toda dieta funciona no curto prazo — o problema é a manutenção. Quando você corta radicalmente calorias ou grupos alimentares, o corpo responde com <strong>aumento de cortisol</strong>, <strong>queda do metabolismo</strong> e <strong>aumento de grelina</strong> (hormônio da fome). O efeito rebote não é falta de força de vontade — é biologia.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              A alternativa é criar um <strong>déficit calórico pequeno e consistente</strong> por meio de hábitos que se encaixam na sua vida — sem sofrimento, sem contar caloria em todo prato, sem abrir mão de todos os prazeres.
            </p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>10 mudanças simples que criam déficit sem dieta</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { num: "01", titulo: "Troque refrigerante por água ou chá", kcal: "−150 a −300 kcal/dia", desc: "Uma lata de refrigerante tem 150 kcal de açúcar puro. Trocar por água é a mudança com melhor custo-benefício existente. Em um mês: até 9.000 kcal a menos." },
                { num: "02", titulo: "Coma proteína em todas as refeições principais", kcal: "−200 a −400 kcal/dia", desc: "Proteína reduz a fome nas horas seguintes. Ovos no café, frango no almoço, peixe no jantar — menos fome ao longo do dia sem esforço consciente." },
                { num: "03", titulo: "Use pratos menores", kcal: "−100 a −200 kcal/dia", desc: "Estudos mostram que reduzir o tamanho do prato em 20% reduz consumo calórico sem que a pessoa perceba falta. O olho come junto com a boca." },
                { num: "04", titulo: "Coma devagar e sem tela", kcal: "−150 a −300 kcal/dia", desc: "Saciedade leva 20 min para chegar ao cérebro. Quem come rápido e distraído consome muito mais antes de sentir que está satisfeito." },
                { num: "05", titulo: "Comece a refeição pela salada ou vegetais", kcal: "−100 a −200 kcal/dia", desc: "Fibra no início da refeição aumenta saciedade e reduz absorção de calorias do restante. Você come menos carboidrato e gordura sem perceber." },
                { num: "06", titulo: "Caminhe 30 minutos por dia", kcal: "+150 a −250 kcal/dia", desc: "Não precisa academia. Caminhada rápida de 30 min queima ~200 kcal e melhora sensibilidade à insulina. Em um mês: 4.500 a 6.000 kcal a mais gastas." },
                { num: "07", titulo: "Durma 7–8 horas por noite", kcal: "efeito indireto enorme", desc: "Dormir mal sobe grelina em 28% e diminui leptina em 18% — você acorda com mais fome e menos saciedade. Sono ruim sabota qualquer mudança alimentar." },
                { num: "08", titulo: "Não compre alimentos ultra-processados", kcal: "−300 a −600 kcal/dia", desc: "O que não está em casa não é comido. A decisão de não comprar salgadinho ou biscoito é tomada uma vez no mercado — não toda vez que passa na cozinha." },
                { num: "09", titulo: "Hidrate-se antes das refeições", kcal: "−50 a −150 kcal/dia", desc: "Beber 500ml de água 30 min antes de cada refeição principal reduz a ingestão calórica em até 13% — comprovado em estudos com adultos." },
                { num: "10", titulo: "Prepare mais refeições em casa", kcal: "−400 a −800 kcal/dia", desc: "Refeição de restaurante tem em média 60% mais calorias que a equivalente feita em casa. Mesmo saudável no restaurante, as porções e o preparo são diferentes." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "1.3rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <div style={{ background: "#16a34a", color: "white", borderRadius: "8px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800 }}>{item.num}</div>
                      <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.95rem" }}>{item.titulo}</div>
                    </div>
                    <div style={{ background: "white", border: "1px solid #bbf7d0", borderRadius: "20px", padding: "2px 10px", fontSize: "0.78rem", fontWeight: 800, color: "#166534", flexShrink: 0 }}>{item.kcal}</div>
                  </div>
                  <div style={{ fontSize: "0.87rem", color: "#15803d", fontWeight: 500, lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Quanto você pode perder com esses hábitos?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>Aplicando apenas 4 ou 5 dessas mudanças consistentemente:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { periodo: "Mês 1", resultado: "Perda de 1–2 kg. Redução de inchaço, mais energia, roupa começando a ficar mais folgada.", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e" },
                { periodo: "Mês 2–3", resultado: "Perda de 2–4 kg adicionais. Novos hábitos já estão estabelecidos — não parece mais esforço.", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { periodo: "6 meses", resultado: "Perda de 5–8 kg totais. Composição corporal visivelmente diferente. Sem efeito rebote porque não houve dieta.", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
                { periodo: "1 ano", resultado: "Transformação real e sustentável. O peso perdido fica porque os hábitos ficaram — não uma dieta que terminou.", cor: "#f5f3ff", borda: "#ddd6fe", txt: "#5b21b6" },
              ].map((f, i) => (
                <div key={i} style={{ background: f.cor, border: `1px solid ${f.borda}`, borderRadius: "12px", padding: "0.9rem 1.2rem" }}>
                  <div style={{ fontWeight: 800, color: f.txt, fontSize: "0.88rem", marginBottom: "4px" }}>{f.periodo}</div>
                  <div style={{ fontSize: "0.86rem", color: f.txt, fontWeight: 500, lineHeight: 1.6 }}>{f.resultado}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um plano alimentar que cabe na sua vida?</h2>
              <p>Nossa IA monta um cardápio sustentável — sem restrições radicais, com receitas brasileiras e resultados reais.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio equilibrado e sustentável</div>
              <div className={styles.premiumFeatureItem}>✅ Sem contar calorias obsessivamente</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas práticas para o dia a dia</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu plano sustentável grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/como-perder-barriga", emoji: "🎯", titulo: "Como perder barriga: o que funciona de verdade", meta: "10 min · Emagrecimento" },
                { href: "/blog/quantas-calorias-preciso-por-dia", emoji: "🔢", titulo: "Quantas calorias eu preciso por dia?", meta: "9 min · Nutrição" },
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
        "headline": "Como perder peso sem fazer dieta: 10 mudanças que funcionam",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-10",
        "description": "10 hábitos simples e sustentáveis para perder peso sem dietas restritivas — com deficit calórico estimado por mudança.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/como-perder-peso-sem-fazer-dieta" },
        "keywords": ["como perder peso sem dieta", "emagrecer sem dieta", "habitos para emagrecer"],
      })}} />
    </>
  );
}
