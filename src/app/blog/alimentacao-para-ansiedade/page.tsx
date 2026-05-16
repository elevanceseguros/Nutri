import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Alimentação para Ansiedade: O que Comer para Acalmar | Nutry.life",
  description: "Descubra como a alimentação afeta a ansiedade, quais alimentos ajudam a acalmar o sistema nervoso e o que evitar para não piorar os sintomas.",
  keywords: "alimentacao para ansiedade, o que comer para ansiedade, alimentos que acalmam ansiedade, dieta para ansiedade, alimentacao e saude mental, o que comer para acalmar",
  openGraph: {
    title: "Alimentação para Ansiedade: O que Comer para Acalmar | Nutry.life",
    description: "Como a alimentação afeta a ansiedade e quais alimentos ajudam a reduzir os sintomas naturalmente.",
    url: "https://nutry.life/blog/alimentacao-para-ansiedade",
  },
};

export default function AlimentacaoAnsiedade() {
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
            <span style={{ color: "#22c55e" }}>Saúde Mental & Nutrição</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Saúde Mental & Nutrição</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>16 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Alimentação para ansiedade: o que comer para acalmar
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              O intestino é chamado de "segundo cérebro" — e com razão. 90% da serotonina do corpo é produzida no intestino. O que você come impacta diretamente os neurotransmissores ligados ao humor, ao estresse e à ansiedade.
            </p>
          </div>

          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "16px", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "6px" }}>⚠️ Aviso importante</div>
            <div style={{ fontSize: "0.87rem", color: "#b91c1c", fontWeight: 500, lineHeight: 1.7 }}>Este conteúdo é educacional. Transtorno de ansiedade é uma condição de saúde mental que deve ser tratada com acompanhamento de psicólogo e/ou psiquiatra. A alimentação é um suporte complementar — não substitui tratamento profissional.</div>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio equilibrado para bem-estar mental</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar rico nos nutrientes que mais apoiam a saúde mental e o equilíbrio do sistema nervoso.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu plano alimentar →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>O eixo intestino-cérebro: como a comida afeta a mente</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              O intestino e o cérebro se comunicam constantemente pelo <strong>nervo vago</strong> — uma via bidirecional que conecta o sistema digestivo ao sistema nervoso central. Inflamação intestinal, disbiose (desequilíbrio do microbioma) e deficiências de nutrientes-chave impactam diretamente a produção de serotonina, dopamina e GABA.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              Estudos mostram que pessoas com dieta rica em ultra-processados têm <strong>25–35% mais risco de transtornos de ansiedade e depressão</strong> do que aquelas com dieta baseada em alimentos naturais. A alimentação não cura a ansiedade — mas pode aliviar significativamente os sintomas.
            </p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Nutrientes que reduzem a ansiedade</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { nutriente: "Magnésio", papel: "Regula o sistema nervoso e reduz hiperexcitabilidade neuronal. Deficiência de magnésio está diretamente associada a ansiedade e irritabilidade.", fontes: "Castanhas, sementes de abóbora, espinafre, aveia, chocolate amargo 70%+" },
                { nutriente: "Ômega-3 (EPA/DHA)", papel: "Anti-inflamatório cerebral. Estudos mostram redução de até 20% nos sintomas de ansiedade com suplementação de ômega-3.", fontes: "Salmão, sardinha, atum, linhaça, chia" },
                { nutriente: "Triptofano", papel: "Precursor da serotonina — o neurotransmissor do bem-estar. Sem triptofano suficiente, o cérebro não produz serotonina adequada.", fontes: "Ovos, peru, frango, banana, aveia, sementes de abóbora" },
                { nutriente: "Vitamina B6", papel: "Cofator essencial na síntese de serotonina, dopamina e GABA. Deficiência causa irritabilidade e ansiedade.", fontes: "Frango, peixe, banana, batata, grão-de-bico" },
                { nutriente: "Vitamina D", papel: "Receptores de vitamina D estão no cérebro. Deficiência está associada a depressão e ansiedade — afeta 60%+ dos brasileiros.", fontes: "Sol, peixe gorduroso, gema de ovo" },
                { nutriente: "Zinco", papel: "Modula receptores GABA e glutamato — os principais reguladores da excitabilidade neural.", fontes: "Ostras, carne vermelha, castanha-de-caju, grão-de-bico" },
                { nutriente: "Probióticos", papel: "Bactérias benéficas do intestino produzem neurotransmissores e modulam o eixo intestino-cérebro diretamente.", fontes: "Iogurte natural, kefir, chucrute, kombucha" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: "14px", padding: "1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: "#5b21b6", fontSize: "0.92rem", marginBottom: "4px" }}>🧠 {item.nutriente}</div>
                  <div style={{ fontSize: "0.86rem", color: "#6d28d9", fontWeight: 500, lineHeight: 1.6, marginBottom: "5px" }}>{item.papel}</div>
                  <div style={{ fontSize: "0.82rem", color: "#7c3aed", fontWeight: 700 }}>🍽️ Fontes: {item.fontes}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Alimentos que ajudam a acalmar a ansiedade</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { emoji: "🫖", nome: "Chá de camomila", desc: "Apigenina se liga a receptores GABA — efeito ansiolítico suave e sem sedação excessiva." },
                { emoji: "🍵", nome: "Chá verde (L-teanina)", desc: "L-teanina aumenta ondas alfa cerebrais — estado de relaxamento alerta, sem sonolência." },
                { emoji: "🍫", nome: "Chocolate amargo 70%+", desc: "Reduz cortisol e adrenalina. Contém magnésio, teobromina e anandamida — 'molécula da felicidade'." },
                { emoji: "🫐", nome: "Frutas vermelhas", desc: "Antioxidantes que protegem neurônios do estresse oxidativo causado pela ansiedade crônica." },
                { emoji: "🥑", nome: "Abacate", desc: "Magnésio + vitamina B6 + ácido graxo oleico — suporte triplo ao sistema nervoso." },
                { emoji: "🥛", nome: "Kefir e iogurte natural", desc: "Probióticos que equilibram o microbioma e a produção intestinal de serotonina." },
                { emoji: "🐟", nome: "Sardinha e salmão", desc: "Ômega-3 EPA/DHA com a maior evidência científica de redução de ansiedade." },
                { emoji: "🌿", nome: "Ervas frescas (manjericão, alecrim)", desc: "Compostos como linalol e ácido rosmarínico têm ação calmante no sistema nervoso." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "0.9rem 1.2rem", display: "flex", gap: "10px" }}>
                  <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.9rem", marginBottom: "2px" }}>{item.nome}</div>
                    <div style={{ fontSize: "0.84rem", color: "#15803d", fontWeight: 500, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>O que EVITAR — alimentos que pioram a ansiedade</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { item: "Cafeína em excesso", motivo: "Estimula o sistema nervoso simpático (resposta de luta-ou-fuga). Para ansiosos, 1–2 cafés/dia é o limite — e nunca à tarde." },
                { item: "Açúcar refinado", motivo: "Picos e quedas de glicose ativam resposta de estresse. Hipoglicemia reativa mimetiza sintomas de ansiedade." },
                { item: "Álcool", motivo: "Depressor que inicialmente parece relaxante — mas piora ansiedade no dia seguinte via 'rebote' do glutamato." },
                { item: "Ultra-processados e gordura trans", motivo: "Inflamação sistêmica que afeta o cérebro — marcadores inflamatórios elevados correlacionam com ansiedade e depressão." },
                { item: "Glúten e laticínios (em sensíveis)", motivo: "Para pessoas com sensibilidade não-celíaca, podem causar neuroinflamação e piorar sintomas de ansiedade." },
                { item: "Pular refeições", motivo: "Hipoglicemia ativa o sistema de resposta ao estresse — adrenalina e cortisol sobem, imitando e agravando ansiedade." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "0.9rem 1.2rem" }}>
                  <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "3px" }}>❌ {item.item}</div>
                  <div style={{ fontSize: "0.84rem", color: "#b91c1c", fontWeight: 500, lineHeight: 1.6 }}>{item.motivo}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>05.</span><span className={styles.qLabel}>Cardápio de 1 dia para suporte à ansiedade</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { ref: "☀️ Café da manhã", itens: ["Omelete de 2 ovos com espinafre (triptofano + B6)", "Aveia com banana e sementes de abóbora (magnésio)", "Chá verde — 1 xícara (L-teanina)"] },
                { ref: "🍎 Lanche da manhã", itens: ["Iogurte natural com frutas vermelhas (probióticos + antioxidantes)", "30g de castanhas (magnésio + zinco)"] },
                { ref: "🍚 Almoço", itens: ["Sardinha ou salmão grelhado com ervas (ômega-3)", "Arroz integral + feijão (triptofano + fibra prebiótica)", "Salada de rúcula e abacate com azeite (magnésio + B6)"] },
                { ref: "🌿 Lanche da tarde", itens: ["2 quadradinhos de chocolate amargo 70%+ (magnésio + anandamida)", "Chá de camomila ou maracujá (GABA)"] },
                { ref: "🌙 Jantar leve", itens: ["Frango com alecrim e alho (triptofano + B6)", "Batata-doce assada (carboidrato para facilitar entrada de triptofano no cérebro)", "Chá de valeriana antes de dormir"] },
              ].map((r, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#f5f3ff" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#ddd6fe" : "#e5e7eb"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: i % 2 === 0 ? "#5b21b6" : "#374151", marginBottom: "8px", fontSize: "0.9rem" }}>{r.ref}</div>
                  {r.itens.map((it, j) => <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: i % 2 === 0 ? "#6d28d9" : "#4b5563", fontWeight: 600, marginBottom: "5px" }}><span className={styles.dot} />{it}</div>)}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio para equilíbrio mental e bem-estar?</h2>
              <p>Nossa IA monta um plano alimentar rico em magnésio, ômega-3 e probióticos para apoiar seu sistema nervoso.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Rico em nutrientes para saúde mental</div>
              <div className={styles.premiumFeatureItem}>✅ Sem cafeína excessiva e açúcar</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas brasileiras práticas</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu plano de bem-estar grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/alimentos-que-ajudam-a-dormir", emoji: "😴", titulo: "Alimentos que ajudam a dormir melhor", meta: "8 min · Sono & Saúde" },
                { href: "/blog/vitaminas-e-minerais-essenciais", emoji: "💊", titulo: "Vitaminas e minerais essenciais: para que serve cada um", meta: "10 min · Nutrição" },
                { href: "/blog/alimentos-que-inflamam-o-corpo", emoji: "🔥", titulo: "Alimentos que inflamam o corpo: lista completa", meta: "9 min · Saúde & Inflamação" },
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
        "headline": "Alimentação para ansiedade: o que comer para acalmar",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-16",
        "description": "Como a alimentação afeta a ansiedade, nutrientes que acalmam o sistema nervoso e o que evitar.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/alimentacao-para-ansiedade" },
        "keywords": ["alimentacao para ansiedade", "o que comer para ansiedade", "alimentos que acalmam"],
      })}} />
    </>
  );
}
