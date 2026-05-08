import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Alimentos que Ajudam a Dormir Melhor: Lista Completa | Nutry.life",
  description: "Descubra quais alimentos ajudam a dormir melhor, o que comer no jantar para ter uma noite tranquila e o que evitar antes de dormir.",
  keywords: "alimentos que ajudam a dormir, o que comer para dormir melhor, alimentos que melhoram o sono, jantar para dormir bem, alimentos ricos em triptofano",
  openGraph: {
    title: "Alimentos que Ajudam a Dormir Melhor | Nutry.life",
    description: "Lista completa de alimentos que melhoram o sono, o que comer no jantar e o que evitar antes de dormir.",
    url: "https://nutry.life/blog/alimentos-que-ajudam-a-dormir",
  },
};

export default function AlimentosDormir() {
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
            <span style={{ color: "#22c55e" }}>Sono & Saúde</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Sono & Saúde</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>9 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 8 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Alimentos que ajudam a dormir melhor: lista completa
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Dormir mal é uma epidemia silenciosa — e o que você come (ou evita) no fim do dia influencia diretamente a qualidade do seu sono. A ciência já sabe quais alimentos ativam os mecanismos do sono e quais os sabotam.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio com jantar para melhorar o sono</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar com as refeições certas para cada horário — inclusive um jantar que favorece o sono.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu plano alimentar →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Como a alimentação afeta o sono?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              O sono é regulado por dois hormônios principais: a <strong>melatonina</strong> (hormônio do sono) e a <strong>serotonina</strong> (precursora da melatonina). Ambos dependem de um aminoácido chamado <strong>triptofano</strong> — que vem exclusivamente da alimentação.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              Além do triptofano, nutrientes como magnésio, zinco, vitamina B6 e cálcio participam diretamente na produção de melatonina e na regulação do ciclo circadiano. Deficiências desses micronutrientes são causas subestimadas de insônia.
            </p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>12 alimentos que melhoram o sono</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { emoji: "🍌", nome: "Banana", mecanismo: "Rico em triptofano, magnésio e vitamina B6 — trio que converte direto em serotonina e melatonina." },
                { emoji: "🥛", nome: "Leite morno", mecanismo: "Triptofano + cálcio + glicina. O cálcio ajuda o cérebro a converter triptofano em melatonina." },
                { emoji: "🍒", nome: "Cereja (especialmente ácida)", mecanismo: "Uma das poucas fontes alimentares naturais de melatonina. Estudos mostram melhora na qualidade do sono." },
                { emoji: "🌰", nome: "Nozes e castanha-de-caju", mecanismo: "Ricas em melatonina, magnésio e triptofano. Lanche noturno ideal." },
                { emoji: "🌾", nome: "Aveia", mecanismo: "Carboidrato complexo que aumenta a disponibilidade de triptofano no cérebro + melatonina natural." },
                { emoji: "🥝", nome: "Kiwi", mecanismo: "Estudos mostram que comer 2 kiwis 1h antes de dormir reduz o tempo para adormecer em até 35%." },
                { emoji: "🐟", nome: "Peixe gordo (salmão, sardinha)", mecanismo: "Ômega-3 + vitamina D + B6 — combinação que regula serotonina e melhora qualidade do sono." },
                { emoji: "🍚", nome: "Arroz branco (jantar)", mecanismo: "Alto índice glicêmico no jantar aumenta disponibilidade de triptofano — exceção ao consumo de IG alto." },
                { emoji: "🫖", nome: "Chá de camomila", mecanismo: "Apigenina se liga a receptores de GABA (neurotransmissor relaxante) — efeito ansiolítico suave e real." },
                { emoji: "🫖", nome: "Chá de valeriana e maracujá", mecanismo: "Atividade GABAérgica comprovada — reduz ansiedade e facilita o início do sono." },
                { emoji: "🧀", nome: "Queijo cottage ou ricota", mecanismo: "Caseína de digestão lenta + triptofano — mantém aminoácidos disponíveis durante a noite." },
                { emoji: "🥜", nome: "Pasta de amendoim (1 col.)", mecanismo: "Triptofano + magnésio + niacina. Lanche noturno que não pesa e favorece o sono." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: "14px", padding: "1rem 1.4rem", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#5b21b6", fontSize: "0.92rem", marginBottom: "3px" }}>{item.nome}</div>
                    <div style={{ fontSize: "0.85rem", color: "#6d28d9", fontWeight: 500, lineHeight: 1.6 }}>{item.mecanismo}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>O que EVITAR antes de dormir</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { item: "Cafeína (café, chá preto, chá verde, energético)", detalhe: "Meia-vida de 5–6h — café das 18h ainda afeta o sono à meia-noite. Corte depois das 14–15h." },
                { item: "Álcool", detalhe: "Causa sono inicial mas fragmenta as fases profundas do sono. Qualidade péssima mesmo dormindo rápido." },
                { item: "Refeição muito pesada ou gordurosa", detalhe: "Digestão ativa mantém o corpo em alerta. Jantar deve ser leve e pelo menos 2h antes de dormir." },
                { item: "Açúcar e carboidratos refinados no fim do dia", detalhe: "Pico de insulina seguido de queda pode acordar no meio da noite com fome." },
                { item: "Muita água ou líquidos tarde da noite", detalhe: "Idas ao banheiro fragmentam o sono — hidrate bem durante o dia e reduza à noite." },
                { item: "Chocolate ao leite (cafeína + açúcar)", detalhe: "Estimulante + pico glicêmico — dupla contra o sono. Prefira o amargo se quiser." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "0.9rem 1.2rem" }}>
                  <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "3px" }}>❌ {item.item}</div>
                  <div style={{ fontSize: "0.84rem", color: "#b91c1c", fontWeight: 500, lineHeight: 1.6 }}>{item.detalhe}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>Jantar ideal para uma noite de sono</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { ref: "🌙 Opção 1 — Leve e proteico", itens: ["Omelete de 2 ovos com espinafre e queijo cottage", "Batata-doce pequena assada (100g)", "Chá de camomila após a refeição"] },
                { ref: "🌙 Opção 2 — Peixe e carboidrato", itens: ["Sardinha assada com limão e azeite (120g)", "Arroz branco (3 col.) — IG alto favorece sono neste caso", "Abobrinha refogada simples"] },
                { ref: "🌙 Opção 3 — Lanche leve (para quem janta cedo)", itens: ["Iogurte natural com banana fatiada", "Castanhas (10 unidades)", "Chá de valeriana ou maracujá"] },
              ].map((r, i) => (
                <div key={i} style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: "#5b21b6", marginBottom: "8px", fontSize: "0.9rem" }}>{r.ref}</div>
                  {r.itens.map((it, j) => <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: "#6d28d9", fontWeight: 600, marginBottom: "5px" }}><span className={styles.dot} />{it}</div>)}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio completo que inclui jantar para melhorar o sono?</h2>
              <p>Nossa IA monta um plano alimentar com as refeições certas nos horários certos para o seu ritmo de vida.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Jantar otimizado para o sono</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio semanal completo</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas práticas e brasileiras</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu plano alimentar grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/o-que-comer-para-ter-mais-energia", emoji: "⚡", titulo: "O que comer para ter mais energia no dia a dia", meta: "8 min · Nutrição" },
                { href: "/blog/alimentos-que-inflamam-o-corpo", emoji: "🔥", titulo: "Alimentos que inflamam o corpo: lista completa", meta: "9 min · Saúde & Inflamação" },
                { href: "/blog/proteina-no-cafe-da-manha", emoji: "🍳", titulo: "Proteína no café da manhã: 10 opções práticas", meta: "7 min · Nutrição" },
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
        "headline": "Alimentos que ajudam a dormir melhor: lista completa",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-09",
        "description": "Lista completa de alimentos que melhoram o sono, o que evitar antes de dormir e jantar ideal.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/alimentos-que-ajudam-a-dormir" },
        "keywords": ["alimentos que ajudam a dormir", "o que comer para dormir melhor", "triptofano sono"],
      })}} />
    </>
  );
}
