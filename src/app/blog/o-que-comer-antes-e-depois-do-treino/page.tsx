import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "O que Comer Antes e Depois do Treino: Guia Completo | Nutry.life",
  description: "Descubra o que comer antes do treino para ter energia e depois do treino para recuperar e crescer. Opções práticas, com tempo ideal e exemplos reais.",
  keywords: "o que comer antes do treino, o que comer depois do treino, alimentacao pre treino, alimentacao pos treino, o que comer antes de malhar, refeicao pre treino",
  openGraph: {
    title: "O que Comer Antes e Depois do Treino | Nutry.life",
    description: "Guia completo de alimentação pré e pós-treino: timing, o que comer, quanto tempo antes e depois, e exemplos práticos.",
    url: "https://nutry.life/blog/o-que-comer-antes-e-depois-do-treino",
  },
};

export default function PrePosTreino() {
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
            <span style={{ color: "#22c55e" }}>Treino & Nutrição</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Treino & Nutrição</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>2 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              O que comer antes e depois do treino: guia completo
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              A refeição pré-treino define sua energia e performance. A pós-treino define sua recuperação e crescimento muscular. Acertar os dois é o que separa quem evolui de quem treina meses sem ver resultado.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere seu plano alimentar com pré e pós-treino</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>
                Nossa IA monta seu cardápio completo com as refeições certas nos horários certos para o seu treino.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Gerar meu plano alimentar →
              </Link>
            </div>
          </div>

          {/* Bloco 01 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>Por que a alimentação em torno do treino importa?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Seu corpo usa <strong>glicogênio muscular</strong> como combustível principal durante o exercício. Quando esse estoque acaba, a performance cai — e em casos extremos, o corpo começa a catabolizar músculo para ter energia.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              Após o treino, há uma <strong>janela de recuperação</strong> em que o músculo está mais receptivo a nutrientes. Proteína nesse período acelera a síntese proteica muscular. Carboidrato repõe o glicogênio usado. Acertar os dois = mais músculo, menos gordura, mais energia no próximo treino.
            </p>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[
                { val: "30–60min", lbl: "antes do treino: timing ideal" },
                { val: "até 2h", lbl: "pós-treino: janela anabólica" },
                { val: "20–40g", lbl: "proteína no pós-treino" },
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
              <span className={styles.qLabel}>Pré-treino: o que comer e quando</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              O objetivo do pré-treino é <strong>fornecer energia sem pesar no estômago</strong>. A combinação ideal é carboidrato de médio índice glicêmico + proteína moderada + pouca gordura (gordura retarda o esvaziamento gástrico).
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1.25rem" }}>
              {[
                { tempo: "2–3h antes", desc: "Refeição completa — dá tempo de digerir bem.", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af", exemplos: ["Arroz integral + frango grelhado + salada", "Batata-doce + peixe assado + legumes", "Macarrão integral + carne magra + vegetais"] },
                { tempo: "1–1,5h antes", desc: "Refeição leve — fácil de digerir.", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534", exemplos: ["Banana + pasta de amendoim (1 col.)", "Iogurte grego + granola sem açúcar", "Tapioca com ovo mexido e queijo branco", "Pão integral com ovo + café preto"] },
                { tempo: "30min antes", desc: "Snack rápido — só para dar energia imediata.", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e", exemplos: ["1 banana ou tâmara (2–3 unidades)", "Gel de carboidrato (para atletas)", "Fruta seca pequena + café preto"] },
              ].map((horario, i) => (
                <div key={i} style={{ background: horario.cor, border: `1px solid ${horario.borda}`, borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                    <div style={{ background: horario.txt, color: "white", borderRadius: "8px", padding: "3px 10px", fontSize: "0.78rem", fontWeight: 800 }}>{horario.tempo}</div>
                    <div style={{ fontSize: "0.88rem", color: horario.txt, fontWeight: 600 }}>{horario.desc}</div>
                  </div>
                  {horario.exemplos.map((ex, j) => (
                    <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: horario.txt, fontWeight: 600, marginBottom: "5px" }}>
                      <span className={styles.dot} />{ex}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1rem", padding: "1rem 1.25rem", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", fontSize: "0.87rem", color: "#991b1b", fontWeight: 600, lineHeight: 1.7 }}>
              ❌ Evite no pré-treino: alimentos gordurosos (churrasco, fritura), muita fibra (feijão, brócolis em excesso), laticínios pesados — causam desconforto gastrointestinal durante o exercício.
            </div>
          </div>

          {/* Bloco 03 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Pós-treino: o que comer para recuperar e crescer</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Após o treino, dois objetivos: <strong>reparar o músculo danificado</strong> (proteína) e <strong>repor o glicogênio usado</strong> (carboidrato). Quanto mais rápido você comer após o treino, mais eficiente é a recuperação — mas a janela anabólica dura até 2 horas, então não precisa correr.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1.25rem" }}>
              {[
                { categoria: "🥩 Proteína (prioridade máxima)", meta: "20–40g", itens: ["Frango grelhado (150g = ~38g de proteína)", "Atum em lata (1 lata = ~25g de proteína)", "Ovos (3 ovos = ~18g de proteína)", "Whey protein (1 scoop = ~25g de proteína)", "Iogurte grego (200g = ~17g de proteína)"], cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { categoria: "🍚 Carboidrato (repor glicogênio)", meta: "30–60g", itens: ["Arroz branco ou integral (5 col. = ~45g)", "Batata-doce (200g = ~40g)", "Pão integral (2 fatias = ~30g)", "Banana (2 unidades = ~50g)", "Aveia (5 col. = ~40g)"], cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
              ].map((cat, i) => (
                <div key={i} style={{ background: cat.cor, border: `1px solid ${cat.borda}`, borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ fontWeight: 800, color: cat.txt, fontSize: "0.95rem" }}>{cat.categoria}</div>
                    <div style={{ background: "white", border: `1px solid ${cat.borda}`, borderRadius: "20px", padding: "2px 10px", fontSize: "0.8rem", fontWeight: 800, color: cat.txt }}>Meta: {cat.meta}</div>
                  </div>
                  {cat.itens.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: cat.txt, fontWeight: 600, marginBottom: "5px" }}>
                      <span className={styles.dot} />{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 04 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>5 combinações pós-treino prontas</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { combo: "Arroz + frango + legumes", tempo: "Refeição completa", proteina: "~38g", carbo: "~50g", ideal: "Treino à tarde/noite — vira o jantar" },
                { combo: "Omelete de 3 ovos + batata-doce assada", tempo: "30 min preparo", proteina: "~22g", carbo: "~40g", ideal: "Rápido e nutritivo para qualquer horário" },
                { combo: "Iogurte grego + banana + granola", tempo: "2 min preparo", proteina: "~17g", carbo: "~55g", ideal: "Treino de manhã, lanche rápido pós-treino" },
                { combo: "Whey + banana (shake)", tempo: "1 min preparo", proteina: "~30g", carbo: "~50g", ideal: "Quem não tem apetite logo após o treino" },
                { combo: "Atum + arroz + salada", tempo: "Marmita pronta", proteina: "~30g", carbo: "~45g", ideal: "Levar para a academia — come logo após" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.95rem", marginBottom: "8px" }}>🍽️ {item.combo}</div>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "6px" }}>
                    <span style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "20px", padding: "2px 10px", fontSize: "0.78rem", fontWeight: 800, color: "#166534" }}>🥩 {item.proteina}</span>
                    <span style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "20px", padding: "2px 10px", fontSize: "0.78rem", fontWeight: 800, color: "#1e40af" }}>🍚 {item.carbo}</span>
                    <span style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "20px", padding: "2px 10px", fontSize: "0.78rem", fontWeight: 700, color: "#92400e" }}>⏱ {item.tempo}</span>
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 600 }}>💡 {item.ideal}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 05 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>05.</span>
              <span className={styles.qLabel}>E quem treina em jejum?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Treinar em jejum funciona para muita gente — especialmente para quem faz o protocolo 16:8. A queima de gordura é potencializada, mas há cuidados importantes:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "1rem" }}>
              {[
                { ok: true, txt: "Treinos de baixa a média intensidade funcionam bem em jejum (caminhada, bike, musculação leve)" },
                { ok: true, txt: "Café preto 30 min antes melhora foco e performance sem quebrar o jejum" },
                { ok: true, txt: "Quebre o jejum logo após o treino com refeição proteica — é o momento mais importante" },
                { ok: false, txt: "Treinos de alta intensidade (HIIT pesado, maratona, crossfit intenso) em jejum aumentam catabolismo muscular" },
                { ok: false, txt: "Não treine pesado em jejum sem adaptação — comece leve e evolua" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "0.65rem 1rem", background: item.ok ? "#f0fdf4" : "#fef2f2", border: `1px solid ${item.ok ? "#bbf7d0" : "#fecaca"}`, borderRadius: "10px", fontSize: "0.88rem", fontWeight: 600, color: item.ok ? "#166534" : "#991b1b", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>{item.ok ? "✅" : "⚠️"}</span><span>{item.txt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 06 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>06.</span>
              <span className={styles.qLabel}>Hidratação: antes, durante e depois</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { quando: "2h antes", quanto: "400–600ml de água", obs: "Chegue ao treino já bem hidratado" },
                { quando: "Durante", quanto: "150–250ml a cada 15–20 min", obs: "Água gelada absorve mais rápido" },
                { quando: "Após o treino", quanto: "500ml + reposição de eletrólitos", obs: "Para cada 1kg perdido no treino, beba 1L a mais" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.8rem 1.1rem", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "10px", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#3b82f6", marginBottom: "2px" }}>{item.quando}</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#1e40af" }}>💧 {item.quanto}</div>
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#1e40af", fontWeight: 600, fontStyle: "italic" }}>{item.obs}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Premium */}
          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um plano alimentar completo para o seu treino?</h2>
              <p>Nossa IA monta seu cardápio com pré e pós-treino no horário certo, macros detalhados e receitas brasileiras.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Pré e pós-treino personalizados</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio semanal completo</div>
              <div className={styles.premiumFeatureItem}>✅ Macros e calorias por refeição</div>
              <div className={styles.premiumFeatureItem}>✅ Adaptado ao seu objetivo (emagrecer ou ganhar massa)</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>
              Gerar meu plano de treino e nutrição grátis →
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
        "headline": "O que comer antes e depois do treino: guia completo",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-02",
        "description": "O que comer antes e depois do treino: timing ideal, melhores alimentos, combinações prontas e dicas para quem treina em jejum.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/o-que-comer-antes-e-depois-do-treino" },
        "keywords": ["o que comer antes do treino", "o que comer depois do treino", "alimentacao pre treino", "alimentacao pos treino"],
      })}} />
    </>
  );
}
