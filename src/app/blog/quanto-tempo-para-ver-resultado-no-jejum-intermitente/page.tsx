import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Quanto Tempo Leva para Ver Resultado no Jejum Intermitente? | Nutry.life",
  description: "Descubra em quanto tempo o jejum intermitente começa a funcionar: perda de peso, redução do inchaço, melhora da energia e quando esperar resultados reais.",
  keywords: "quanto tempo jejum intermitente resultado, quando jejum intermitente começa funcionar, resultado jejum intermitente semanas, jejum intermitente quanto tempo emagrecer",
  openGraph: {
    title: "Quanto Tempo para Ver Resultado no Jejum Intermitente? | Nutry.life",
    description: "Linha do tempo real: o que muda no seu corpo na 1ª semana, no 1º mês e depois de 3 meses de jejum intermitente.",
    url: "https://nutry.life/blog/quanto-tempo-para-ver-resultado-no-jejum-intermitente",
  },
};

export default function QuantoTempoJejum() {
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
            <span style={{ color: "#22c55e" }}>Jejum Intermitente</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Jejum Intermitente</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>24 de abril de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 8 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Quanto tempo leva para ver resultado no jejum intermitente?
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              A resposta honesta: depende. Mas existe uma linha do tempo bastante previsível do que seu corpo faz em cada fase — e saber isso evita que você desista antes de chegar nos resultados.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Acelere seus resultados com um plano personalizado</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>
                Nossa IA monta seu cardápio para a janela alimentar do jejum intermitente com receitas brasileiras e macros detalhados.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Gerar meu plano de jejum →
              </Link>
            </div>
          </div>

          {/* Bloco 01 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>A linha do tempo real do jejum intermitente</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Não existe mágica imediata. O jejum intermitente funciona de forma <strong>acumulativa e progressiva</strong>. Mas o que acontece dentro do seu corpo já na primeira semana é real — mesmo que a balança ainda não mostre.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "1.25rem" }}>
              {[
                { periodo: "Dias 1–3", titulo: "Adaptação metabólica", cor: "#fef2f2", borda: "#fecaca", txt: "#991b1b", itens: ["Fome intensa nos horários que você costumava comer", "Possível irritabilidade, dor de cabeça leve", "O corpo ainda depende de glicose como combustível principal", "Redução leve de retenção de líquidos (já visível em algumas pessoas)"] },
                { periodo: "Dias 4–7", titulo: "Início da queima de gordura", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e", itens: ["Fome começa a diminuir — o corpo aprende o novo ritmo", "Insulina em queda: menos retenção de sódio e líquido", "Perda de 0,5 a 1,5 kg (principalmente água e glicogênio)", "Mais clareza mental relatada por muitos iniciantes"] },
                { periodo: "Semanas 2–4", titulo: "Primeiros resultados visíveis", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534", itens: ["Redução real de gordura corporal começa", "Roupa pode começar a ficar mais folgada na região abdominal", "Energia mais estável ao longo do dia", "Perda média de 1 a 3 kg no mês (dependendo da alimentação)"] },
                { periodo: "Mês 2–3", titulo: "Resultados consolidados", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af", itens: ["Composição corporal mudando visivelmente", "Melhora na sensibilidade à insulina (exames melhoram)", "Maior facilidade de manter o protocolo — vira hábito", "Perda acumulada de 3 a 6 kg em média"] },
                { periodo: "3+ meses", titulo: "Transformação real", cor: "#f5f3ff", borda: "#ddd6fe", txt: "#5b21b6", itens: ["Novo setpoint metabólico estabelecido", "Resultados sustentáveis sem efeito rebote", "Benefícios para saúde metabólica profundos", "Facilidade de manutenção — não parece mais esforço"] },
              ].map((fase, i) => (
                <div key={i} style={{ background: fase.cor, border: `1px solid ${fase.borda}`, borderRadius: "16px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <div style={{ background: fase.txt, color: "white", borderRadius: "8px", padding: "3px 10px", fontSize: "0.78rem", fontWeight: 800 }}>{fase.periodo}</div>
                    <div style={{ fontWeight: 800, color: fase.txt, fontSize: "1rem" }}>{fase.titulo}</div>
                  </div>
                  {fase.itens.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: fase.txt, fontWeight: 600, marginBottom: "6px", lineHeight: 1.6 }}>
                      <span style={{ flexShrink: 0, marginTop: "2px" }}>→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 02 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Por que a balança mente no início?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Nos primeiros dias, o peso que você perde não é gordura — é principalmente <strong>glicogênio e água</strong>. Para cada grama de glicogênio armazenado no músculo, o corpo retém cerca de 3g de água. Quando o jejum esgota esse glicogênio, você perde líquido rapidamente.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              Isso explica por que alguém pode perder 2 kg na primeira semana e só 1 kg no segundo mês — mesmo que o segundo mês tenha muito mais gordura real sendo queimada. <strong>Não confie só na balança.</strong> Use também: fotos, medidas de cintura e como a roupa está caindo.
            </p>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[
                { val: "~1kg", lbl: "perda semanal sustentável" },
                { val: "3–6kg", lbl: "perda média em 3 meses" },
                { val: "80%", lbl: "das pessoas mantém após 1 ano" },
              ].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal} style={{ fontSize: "1.2rem" }}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 03 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>O que acelera (ou atrasa) os resultados?</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { tipo: "acelera", emoji: "🚀", fator: "Alimentação de qualidade na janela", detalhe: "Proteína, vegetais e carboidratos complexos fazem toda a diferença em relação a frituras e ultra-processados." },
                { tipo: "acelera", emoji: "🚀", fator: "Exercício físico", detalhe: "Treino de força preserva músculo enquanto o jejum queima gordura — a combinação ideal." },
                { tipo: "acelera", emoji: "🚀", fator: "Sono de qualidade", detalhe: "Dormir mal aumenta cortisol e grelina — os hormônios que sabotam qualquer dieta." },
                { tipo: "acelera", emoji: "🚀", fator: "Consistência", detalhe: "Fazer 6 dias por semana supera muito qualquer estratégia feita de forma irregular." },
                { tipo: "atrasa", emoji: "🐢", fator: "Compensar o jejum comendo demais", detalhe: "O déficit calórico precisa existir. Se você come o dobro na janela, neutraliza o jejum." },
                { tipo: "atrasa", emoji: "🐢", fator: "Estresse crônico alto", detalhe: "Cortisol elevado favorece acúmulo de gordura abdominal mesmo com jejum." },
                { tipo: "atrasa", emoji: "🐢", fator: "Álcool frequente", detalhe: "Interrompe cetose, adiciona calorias vazias e prejudica o sono e a recuperação." },
              ].map((item, i) => (
                <div key={i} style={{ background: item.tipo === "acelera" ? "#f0fdf4" : "#fef2f2", border: `1px solid ${item.tipo === "acelera" ? "#bbf7d0" : "#fecaca"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 800, color: item.tipo === "acelera" ? "#166534" : "#991b1b", fontSize: "0.92rem", marginBottom: "3px" }}>{item.fator}</div>
                      <div style={{ fontSize: "0.87rem", color: item.tipo === "acelera" ? "#15803d" : "#b91c1c", fontWeight: 500, lineHeight: 1.6 }}>{item.detalhe}</div>
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
              <span className={styles.qLabel}>Quando devo me preocupar e parar?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Sinais normais de adaptação (não precisa parar): fome nas primeiras horas, leve dor de cabeça nos dias 1–3, irritabilidade inicial. Sinais que pedem atenção médica:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "1rem" }}>
              {[
                "Tontura intensa ou desmaio",
                "Coração acelerado ou arritmia",
                "Fraqueza muscular extrema após 2 semanas",
                "Queda excessiva de cabelo (déficit calórico muito severo)",
                "Obsessão ou ansiedade extrema com horários de comida",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "#991b1b", fontWeight: 600, padding: "0.65rem 1rem", background: "#fef2f2", borderRadius: "10px", border: "1px solid #fecaca" }}>
                  <span>⚠️</span><span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Premium */}
          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Maximize seus resultados com um plano personalizado</h2>
              <p>Nossa IA monta um cardápio completo para sua janela alimentar, com receitas brasileiras e macros para cada refeição.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio para janela 8h personalizado</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas com ingredientes acessíveis</div>
              <div className={styles.premiumFeatureItem}>✅ Calorias e macros por refeição</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>
              Gerar meu plano grátis →
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
                { href: "/blog/jejum-intermitente-16-8-para-iniciantes", emoji: "⏳", titulo: "Jejum intermitente 16:8 para iniciantes: guia completo", meta: "9 min · Jejum Intermitente" },
                { href: "/blog/o-que-comer-no-jejum-intermitente-16-8", emoji: "⏰", titulo: "O que comer no jejum intermitente 16:8 — guia completo", meta: "8 min · Jejum Intermitente" },
                { href: "/blog/como-emagrecer-sem-passar-fome", emoji: "🔥", titulo: "Como emagrecer sem passar fome — 7 estratégias que funcionam", meta: "10 min · Emagrecimento" },
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
        "headline": "Quanto tempo leva para ver resultado no jejum intermitente?",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-04-24",
        "description": "Linha do tempo real do que acontece no corpo com o jejum intermitente: 1ª semana, 1º mês e 3 meses.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/quanto-tempo-para-ver-resultado-no-jejum-intermitente" },
        "keywords": ["quanto tempo jejum intermitente resultado", "quando jejum intermitente começa funcionar", "resultado jejum intermitente"],
      })}} />
    </>
  );
}
