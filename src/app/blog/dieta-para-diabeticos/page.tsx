import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Dieta para Diabéticos: O que Comer e O que Evitar | Nutry.life",
  description: "Guia completo de alimentação para diabetes tipo 2: alimentos permitidos, alimentos proibidos, controle glicêmico e cardápio de exemplo para diabéticos.",
  keywords: "dieta para diabeticos, alimentacao para diabetes tipo 2, o que comer sendo diabetico, cardapio para diabeticos, dieta diabetes tipo 2, o que diabetico pode comer",
  openGraph: {
    title: "Dieta para Diabéticos: O que Comer e O que Evitar | Nutry.life",
    description: "Alimentação para controle do diabetes tipo 2: o que comer, o que evitar e cardápio de exemplo.",
    url: "https://nutry.life/blog/dieta-para-diabeticos",
  },
};

export default function DietaDiabeticos() {
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
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>8 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 10 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Dieta para diabéticos: o que comer e o que evitar
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              A alimentação é o principal tratamento do diabetes tipo 2 — mais poderosa do que a maioria das pessoas imagina. Com as escolhas certas, é possível controlar a glicemia, reduzir medicação e até reverter o pré-diabetes.
            </p>
          </div>

          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "16px", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "6px" }}>⚠️ Aviso importante</div>
            <div style={{ fontSize: "0.87rem", color: "#b91c1c", fontWeight: 500, lineHeight: 1.7 }}>Este conteúdo é educacional e não substitui orientação médica ou nutricional individualizada. Diabéticos que usam insulina ou medicamentos devem consultar seu médico antes de fazer mudanças significativas na alimentação.</div>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio para controle glicêmico</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar com baixo índice glicêmico, rico em fibras e proteínas para controle do diabetes.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar cardápio para controle glicêmico →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Como a alimentação controla o diabetes tipo 2</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              No diabetes tipo 2, o problema central é a <strong>resistência à insulina</strong> — as células não respondem bem ao hormônio que permite a entrada de glicose. Resultado: glicose fica elevada no sangue causando danos progressivos.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              A alimentação atua diretamente nesse mecanismo: reduzindo picos de glicose, melhorando a sensibilidade à insulina e diminuindo inflamação crônica. Não é sobre eliminar carboidratos — é sobre <strong>escolher os carboidratos certos e combinar bem os macros</strong>.
            </p>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[{ val: "Fibra", lbl: "desacelera absorção de glicose" }, { val: "Proteína", lbl: "reduz pico glicêmico" }, { val: "IG baixo", lbl: "índice glicêmico — priorize" }].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal} style={{ fontSize: "1rem" }}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>O que diabéticos DEVEM comer</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { cat: "🥦 Vegetais não amiláceos (à vontade)", itens: ["Brócolis, couve-flor, espinafre, couve", "Abobrinha, berinjela, pepino, alface", "Tomate, pimentão, cebola, cogumelos", "Baixíssimo impacto glicêmico — coma sem restrição"], cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { cat: "🥩 Proteínas magras", itens: ["Frango e peru sem pele", "Peixe (especialmente salmão, sardinha, atum)", "Ovos inteiros", "Tofu, grão-de-bico, lentilha"], cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
                { cat: "🌾 Carboidratos de baixo índice glicêmico", itens: ["Aveia integral (beta-glucana controla glicemia)", "Arroz integral no lugar do branco", "Batata-doce no lugar da batata comum", "Feijão e lentilha — fibra que desacelera absorção", "Macarrão integral al dente (IG menor que bem cozido)"], cor: "#fffbeb", borda: "#fde68a", txt: "#92400e" },
                { cat: "🥑 Gorduras boas", itens: ["Azeite extravirgem", "Abacate, castanhas, nozes", "Sementes de chia e linhaça (ômega-3 vegetal)"], cor: "#f5f3ff", borda: "#ddd6fe", txt: "#5b21b6" },
              ].map((c, i) => (
                <div key={i} style={{ background: c.cor, border: `1px solid ${c.borda}`, borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontWeight: 800, color: c.txt, marginBottom: "10px", fontSize: "0.95rem" }}>{c.cat}</div>
                  {c.itens.map((it, j) => <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: c.txt, fontWeight: 600, marginBottom: "5px" }}><span className={styles.dot} />{it}</div>)}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>O que diabéticos devem EVITAR</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { item: "Açúcar refinado, mel, melado e rapadura", motivo: "Pico glicêmico imediato e intenso" },
                { item: "Refrigerantes (normal e diet)", motivo: "Normal = açúcar puro. Diet = adoçantes que alteram microbiota e podem piorar resistência à insulina" },
                { item: "Pão branco, bolo, biscoito, farinha refinada", motivo: "Alto índice glicêmico — quase igual ao açúcar puro" },
                { item: "Arroz branco em excesso, batata inglesa", motivo: "IG alto, especialmente quando bem cozidos" },
                { item: "Suco de fruta (mesmo natural)", motivo: "Sem fibra da fruta inteira — concentrado de açúcar" },
                { item: "Frutas muito doces em excesso (manga, uva, banana madura)", motivo: "Ricas em frutose — consumir com moderação, sempre com proteína ou gordura" },
                { item: "Gordura trans e ultra-processados", motivo: "Aumentam inflamação e pioram resistência à insulina" },
                { item: "Álcool", motivo: "Interfere no metabolismo da glicose e pode causar hipoglicemia em quem usa insulina" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "0.9rem 1.2rem" }}>
                  <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "3px" }}>❌ {item.item}</div>
                  <div style={{ fontSize: "0.84rem", color: "#b91c1c", fontWeight: 500 }}>{item.motivo}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>Cardápio de exemplo para diabéticos</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { ref: "☀️ Café da manhã", itens: ["Omelete de 2 ovos com espinafre e tomate", "Aveia com leite desnatado ou vegetal (4 col.) + canela", "Café preto sem açúcar"] },
                { ref: "🍎 Lanche da manhã", itens: ["1 maçã ou pera com casca", "10 amêndoas ou castanhas"] },
                { ref: "🍚 Almoço", itens: ["Arroz integral (3 col. — porção moderada)", "Feijão carioca (1 concha)", "Frango grelhado com ervas (150g)", "Brócolis e cenoura refogados no azeite", "Salada de folhas à vontade com azeite e vinagre"] },
                { ref: "🌿 Lanche da tarde", itens: ["Iogurte natural desnatado sem açúcar", "Chia (1 col. chá) misturada", "Ou: cottage com cenoura crua"] },
                { ref: "🌙 Jantar", itens: ["Sardinha ou peixe assado (150g)", "Batata-doce assada (120g)", "Abobrinha e berinjela grelhadas", "Salada verde simples com limão"] },
              ].map((r, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#f0fdf4" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: i % 2 === 0 ? "#166534" : "#374151", marginBottom: "8px", fontSize: "0.9rem" }}>{r.ref}</div>
                  {r.itens.map((it, j) => <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: i % 2 === 0 ? "#15803d" : "#4b5563", fontWeight: 600, marginBottom: "5px" }}><span className={styles.dot} />{it}</div>)}
                </div>
              ))}
              <div style={{ padding: "0.8rem 1.1rem", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "10px", fontSize: "0.85rem", color: "#92400e", fontWeight: 700, textAlign: "center" }}>
                💡 Sempre combine carboidrato com proteína ou gordura — isso reduz o pico glicêmico de qualquer refeição
              </div>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>05.</span><span className={styles.qLabel}>5 estratégias para controlar a glicemia com alimentação</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { num: "1", acao: "Coma vegetais antes do carboidrato", impacto: "Fibra cria uma 'barreira' no intestino que desacelera a absorção de glicose das refeições subsequentes. Queda de até 30% no pico glicêmico." },
                { num: "2", acao: "Não coma carboidrato sozinho", impacto: "Pão com ovo → pico menor. Arroz com frango → pico menor. Sempre combine com proteína ou gordura." },
                { num: "3", acao: "Prefira alimentos inteiros aos processados", impacto: "Arroz integral tem IG 20 pontos menor que o branco. Fruta inteira tem IG muito menor que suco." },
                { num: "4", acao: "Caminhe 10–15 min após as refeições", impacto: "Músculo usa glicose como energia durante o movimento — reduz pico pós-prandial de forma significativa." },
                { num: "5", acao: "Não pule refeições", impacto: "Hipoglicemia leva à hiperfagia (comer em excesso na próxima refeição) com pico glicêmico maior." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "14px", padding: "1.1rem 1.4rem", display: "flex", gap: "12px" }}>
                  <div style={{ background: "#16a34a", color: "white", borderRadius: "8px", padding: "4px 10px", fontSize: "0.8rem", fontWeight: 800, flexShrink: 0, height: "fit-content" }}>{item.num}</div>
                  <div>
                    <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.92rem", marginBottom: "4px" }}>{item.acao}</div>
                    <div style={{ fontSize: "0.86rem", color: "#15803d", fontWeight: 500, lineHeight: 1.6 }}>{item.impacto}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio personalizado para controle glicêmico?</h2>
              <p>Nossa IA monta um plano alimentar com foco em baixo índice glicêmico, alto teor de fibras e proteínas.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio de baixo índice glicêmico</div>
              <div className={styles.premiumFeatureItem}>✅ Combinações que reduzem pico de glicose</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas brasileiras adaptadas</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar cardápio para controle glicêmico →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/como-diminuir-o-colesterol", emoji: "❤️", titulo: "Como diminuir o colesterol com alimentação", meta: "9 min · Saúde Metabólica" },
                { href: "/blog/alimentos-que-inflamam-o-corpo", emoji: "🔥", titulo: "Alimentos que inflamam o corpo: lista completa", meta: "9 min · Saúde & Inflamação" },
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
        "headline": "Dieta para diabéticos: o que comer e o que evitar",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-08",
        "description": "Guia completo de alimentação para diabetes tipo 2: permitidos, proibidos, estratégias e cardápio de exemplo.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/dieta-para-diabeticos" },
        "keywords": ["dieta para diabeticos", "alimentacao diabetes tipo 2", "cardapio para diabeticos"],
      })}} />
    </>
  );
}
