import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Quantas Calorias Eu Preciso por Dia? Cálculo Completo | Nutry.life",
  description: "Descubra quantas calorias você precisa por dia para emagrecer, manter ou ganhar peso. Aprenda a calcular seu TDEE, TMB e déficit calórico de forma simples.",
  keywords: "quantas calorias preciso por dia, calculo de calorias diarias, tdee calculo, tmb calculo, deficit calorico emagrecer, quantas calorias para emagrecer",
  openGraph: {
    title: "Quantas Calorias Eu Preciso por Dia? Cálculo Completo | Nutry.life",
    description: "Calcule suas calorias diárias para emagrecer, manter ou ganhar peso — com exemplos práticos.",
    url: "https://nutry.life/blog/quantas-calorias-preciso-por-dia",
  },
};

export default function QuantasCalorias() {
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
            <span style={{ color: "#22c55e" }}>Nutrição</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Nutrição</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>28 de abril de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Quantas calorias eu preciso por dia?
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              A resposta depende do seu peso, altura, idade, sexo e nível de atividade. Mas com a fórmula certa você calcula em menos de 2 minutos — e entende exatamente o que fazer com esse número.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Calcule suas calorias automaticamente</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>
                Nossa IA calcula seu TDEE, define seu déficit ideal e monta um cardápio dentro das suas calorias diárias.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Calcular minhas calorias →
              </Link>
            </div>
          </div>

          {/* Bloco 01 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>O que é TMB e por que ela importa?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              A <strong>TMB (Taxa Metabólica Basal)</strong> é a quantidade de calorias que seu corpo precisa apenas para sobreviver em repouso — respirar, manter a temperatura corporal, fazer o coração bater. Ela representa <strong>60–75% de todo o gasto calórico diário</strong> da maioria das pessoas.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              O número final que você precisa para o dia todo — incluindo atividade física — chama <strong>TDEE (Total Daily Energy Expenditure)</strong>. É a partir do TDEE que você define se vai criar déficit para emagrecer ou superávit para ganhar massa.
            </p>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[
                { val: "TMB", lbl: "calorias em repouso total" },
                { val: "TDEE", lbl: "gasto real com atividade" },
                { val: "déficit", lbl: "TDEE − 300 a 500 kcal" },
              ].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal} style={{ fontSize: "1.1rem" }}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 02 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Como calcular sua TMB (fórmula de Mifflin-St Jeor)</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              A fórmula mais usada e validada pela ciência atualmente é a de <strong>Mifflin-St Jeor</strong>:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "1.25rem" }}>
              <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "16px", padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: "#1e40af", marginBottom: "10px", fontSize: "1rem" }}>♂️ Homens</div>
                <div style={{ fontFamily: "monospace", fontSize: "1rem", color: "#1e40af", background: "white", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #bfdbfe", fontWeight: 700 }}>
                  TMB = (10 × peso em kg) + (6,25 × altura em cm) − (5 × idade) + 5
                </div>
              </div>
              <div style={{ background: "#fdf2f8", border: "1px solid #f0abfc", borderRadius: "16px", padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: "#86198f", marginBottom: "10px", fontSize: "1rem" }}>♀️ Mulheres</div>
                <div style={{ fontFamily: "monospace", fontSize: "1rem", color: "#86198f", background: "white", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #f0abfc", fontWeight: 700 }}>
                  TMB = (10 × peso em kg) + (6,25 × altura em cm) − (5 × idade) − 161
                </div>
              </div>
            </div>
            <div style={{ marginTop: "1.25rem", padding: "1.25rem 1.5rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px" }}>
              <div style={{ fontWeight: 800, color: "#166534", marginBottom: "10px", fontSize: "0.95rem" }}>📝 Exemplo prático</div>
              <div style={{ fontSize: "0.9rem", color: "#15803d", fontWeight: 600, lineHeight: 1.8 }}>
                Mulher, 30 anos, 65 kg, 165 cm:<br />
                TMB = (10 × 65) + (6,25 × 165) − (5 × 30) − 161<br />
                TMB = 650 + 1031,25 − 150 − 161<br />
                <strong>TMB = 1.370 kcal/dia</strong>
              </div>
            </div>
          </div>

          {/* Bloco 03 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Multiplicadores de atividade física (TDEE)</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Agora multiplique sua TMB pelo fator correspondente ao seu nível de atividade:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1.25rem" }}>
              {[
                { nivel: "Sedentário", desc: "Trabalho de escritório, pouco ou nenhum exercício", fator: "× 1,2", cor: "#fef2f2", borda: "#fecaca", txt: "#991b1b" },
                { nivel: "Levemente ativo", desc: "Exercício leve 1–3x por semana", fator: "× 1,375", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e" },
                { nivel: "Moderadamente ativo", desc: "Exercício moderado 3–5x por semana", fator: "× 1,55", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { nivel: "Muito ativo", desc: "Exercício intenso 6–7x por semana", fator: "× 1,725", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
                { nivel: "Extremamente ativo", desc: "Atleta, trabalho físico intenso diário", fator: "× 1,9", cor: "#f5f3ff", borda: "#ddd6fe", txt: "#5b21b6" },
              ].map((item, i) => (
                <div key={i} style={{ background: item.cor, border: `1px solid ${item.borda}`, borderRadius: "14px", padding: "1rem 1.4rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 800, color: item.txt, fontSize: "0.92rem" }}>{item.nivel}</div>
                    <div style={{ fontSize: "0.84rem", color: item.txt, fontWeight: 500, opacity: 0.85 }}>{item.desc}</div>
                  </div>
                  <div style={{ background: "white", border: `1px solid ${item.borda}`, borderRadius: "10px", padding: "6px 14px", fontWeight: 800, color: item.txt, fontSize: "1rem", flexShrink: 0 }}>{item.fator}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1.25rem", padding: "1.25rem 1.5rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px" }}>
              <div style={{ fontWeight: 800, color: "#166534", marginBottom: "6px", fontSize: "0.95rem" }}>📝 Continuando o exemplo</div>
              <div style={{ fontSize: "0.9rem", color: "#15803d", fontWeight: 600, lineHeight: 1.8 }}>
                Mulher com TMB de 1.370 kcal, moderadamente ativa:<br />
                TDEE = 1.370 × 1,55 = <strong>2.123 kcal/dia</strong>
              </div>
            </div>
          </div>

          {/* Bloco 04 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>Quantas calorias comer para cada objetivo?</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { objetivo: "🔥 Emagrecer", regra: "TDEE − 300 a 500 kcal", detalhe: "Déficit moderado. Perda sustentável de 0,3 a 0,5 kg por semana sem perder músculo. Nunca coma abaixo de 1.200 kcal (mulheres) ou 1.500 kcal (homens).", cor: "#fef2f2", borda: "#fecaca", txt: "#991b1b", badge: "Recomendado para maioria" },
                { objetivo: "⚡ Emagrecer rápido", regra: "TDEE − 500 a 750 kcal", detalhe: "Déficit agressivo. Mais rápido, mas aumenta risco de perda muscular e queda de energia. Use por curtos períodos com acompanhamento.", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e", badge: "Curtos períodos" },
                { objetivo: "⚖️ Manter peso", regra: "= TDEE", detalhe: "Come exatamente o que gasta. Ideal para manutenção após emagrecer ou para quem quer estabilidade.", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534", badge: "Manutenção" },
                { objetivo: "💪 Ganhar massa", regra: "TDEE + 200 a 300 kcal", detalhe: "Superávit moderado com foco em proteína. Ganho limpo de músculo com mínimo acúmulo de gordura.", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af", badge: "Bulk limpo" },
              ].map((obj, i) => (
                <div key={i} style={{ background: obj.cor, border: `1px solid ${obj.borda}`, borderRadius: "16px", padding: "1.4rem 1.6rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ fontWeight: 800, color: obj.txt, fontSize: "1rem" }}>{obj.objetivo}</div>
                    <span style={{ background: "white", border: `1px solid ${obj.borda}`, borderRadius: "20px", padding: "2px 10px", fontSize: "0.75rem", fontWeight: 800, color: obj.txt }}>{obj.badge}</span>
                  </div>
                  <div style={{ fontFamily: "monospace", fontWeight: 800, color: obj.txt, fontSize: "0.95rem", marginBottom: "8px", background: "white", display: "inline-block", padding: "3px 10px", borderRadius: "8px", border: `1px solid ${obj.borda}` }}>{obj.regra}</div>
                  <div style={{ fontSize: "0.87rem", color: obj.txt, fontWeight: 500, lineHeight: 1.6, marginTop: "6px" }}>{obj.detalhe}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 05 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>05.</span>
              <span className={styles.qLabel}>Referências rápidas por perfil</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>
              Quer uma estimativa rápida sem calcular? Veja os valores médios por perfil para emagrecer (déficit moderado):
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { perfil: "Mulher sedentária, 60–70 kg", kcal: "1.300–1.500 kcal" },
                { perfil: "Mulher ativa, 60–70 kg", kcal: "1.600–1.900 kcal" },
                { perfil: "Homem sedentário, 75–90 kg", kcal: "1.700–2.000 kcal" },
                { perfil: "Homem ativo, 75–90 kg", kcal: "2.100–2.400 kcal" },
                { perfil: "Mulher atleta, 55–65 kg", kcal: "2.000–2.300 kcal" },
                { perfil: "Homem atleta, 80–95 kg", kcal: "2.500–3.000 kcal" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.7rem 1.1rem", background: i % 2 === 0 ? "#f0fdf4" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "10px" }}>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#374151" }}>{item.perfil}</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "#166534", background: "white", borderRadius: "20px", padding: "2px 10px", border: "1px solid #bbf7d0" }}>{item.kcal}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1rem", padding: "1rem 1.25rem", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "12px", fontSize: "0.87rem", color: "#92400e", fontWeight: 600, lineHeight: 1.7 }}>
              ⚠️ Esses são valores estimados. Seu número real pode variar 10–20% dependendo de genética, histórico de dietas e composição corporal.
            </div>
          </div>

          {/* Bloco 06 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>06.</span>
              <span className={styles.qLabel}>Por que contar calorias sozinho não basta</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Caloria é só um lado da equação. <strong>500 kcal de frango com legumes</strong> impactam o seu corpo de forma completamente diferente de <strong>500 kcal de biscoito recheado</strong>. Ambos "cabem" no seu déficit, mas um preserva músculo, nutre e sacia — o outro não.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "1.25rem" }}>
              {[
                "Priorize proteína — ela preserva músculo durante o déficit",
                "Não corte gorduras boas — são essenciais para hormônios",
                "Coma fibras — saciedade real sem calorias altas",
                "Beba água — sede é confundida com fome com frequência",
                "Não coma abaixo de 1.200 kcal sem acompanhamento profissional",
              ].map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "0.65rem 1rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", fontSize: "0.88rem", fontWeight: 600, color: "#166534", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>✅</span><span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Premium */}
          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Calcule suas calorias e gere seu cardápio</h2>
              <p>Nossa IA calcula seu TDEE, define o déficit ideal para seu objetivo e monta um cardápio completo dentro das suas calorias diárias.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cálculo de TMB e TDEE personalizado</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio dentro das suas calorias</div>
              <div className={styles.premiumFeatureItem}>✅ Distribuição de macros (proteína, carbo, gordura)</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas brasileiras adaptadas ao seu objetivo</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>
              Calcular minhas calorias grátis →
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
                { href: "/blog/como-montar-marmita-saudavel", emoji: "🥡", titulo: "Como montar uma marmita saudável para o trabalho", meta: "8 min · Alimentação Saudável" },
                { href: "/blog/proteina-no-cafe-da-manha", emoji: "🍳", titulo: "Proteína no café da manhã: benefícios e 10 opções", meta: "7 min · Nutrição" },
                { href: "/blog/jejum-intermitente-16-8-para-iniciantes", emoji: "⏳", titulo: "Jejum intermitente 16:8 para iniciantes: guia completo", meta: "9 min · Jejum Intermitente" },
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
        "headline": "Quantas calorias eu preciso por dia?",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-04-28",
        "description": "Calcule suas calorias diárias para emagrecer, manter ou ganhar peso com a fórmula Mifflin-St Jeor.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/quantas-calorias-preciso-por-dia" },
        "keywords": ["quantas calorias preciso por dia", "tdee calculo", "tmb calculo", "deficit calorico emagrecer"],
      })}} />
    </>
  );
}
