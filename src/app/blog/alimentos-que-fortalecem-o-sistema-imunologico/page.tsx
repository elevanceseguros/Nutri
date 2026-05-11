import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Alimentos que Fortalecem o Sistema Imunológico: Lista Completa | Nutry.life",
  description: "Descubra quais alimentos fortalecem a imunidade, por que funcionam e como incluí-los no dia a dia para adoecer menos e se recuperar mais rápido.",
  keywords: "alimentos que fortalecem o sistema imunologico, alimentos para imunidade, o que comer para fortalecer a imunidade, alimentos imunidade, como aumentar a imunidade com alimentacao",
  openGraph: {
    title: "Alimentos que Fortalecem o Sistema Imunológico | Nutry.life",
    description: "Lista completa de alimentos que aumentam a imunidade com o mecanismo científico de cada um.",
    url: "https://nutry.life/blog/alimentos-que-fortalecem-o-sistema-imunologico",
  },
};

export default function AlimentosImunidade() {
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
            <span style={{ color: "#22c55e" }}>Imunidade</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Imunidade</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>12 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Alimentos que fortalecem o sistema imunológico: lista completa
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Adoecer com frequência, demorar para se recuperar ou sentir imunidade baixa tem relação direta com o que você come. A ciência já mapeou os nutrientes e alimentos que mais impactam a resposta imune — veja a lista completa.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio que fortalece sua imunidade</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar rico nos nutrientes que mais impactam o sistema imune — com receitas brasileiras práticas.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar cardápio para imunidade →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Como a alimentação afeta a imunidade?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Cerca de <strong>70–80% do sistema imunológico está no intestino</strong> — associado ao microbioma e ao tecido linfoide intestinal. O que você come molda diretamente a composição das bactérias intestinais, que por sua vez regulam a resposta imune.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              Além disso, vitaminas e minerais como vitamina C, D, zinco e selênio são cofatores essenciais para a produção de anticorpos, proliferação de linfócitos e atividade de células NK (natural killer). Deficiência de qualquer um desses compromete a resposta imune — mesmo que sutilmente.
            </p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>15 alimentos que fortalecem a imunidade</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { emoji: "🍊", nome: "Laranja, limão e acerola", nutriente: "Vitamina C", mecanismo: "Estimula produção e função de leucócitos. Acerola tem 30× mais vitamina C que a laranja — poderosa e barata." },
                { emoji: "🧄", nome: "Alho", nutriente: "Alicina + compostos sulfurados", mecanismo: "Ação antimicrobiana, antiviral e antifúngica direta. Estimula macrófagos e células NK. Melhor cru ou levemente aquecido." },
                { emoji: "🫚", nome: "Gengibre", nutriente: "Gingeróis + shogaóis", mecanismo: "Anti-inflamatório e antimicrobiano. Reduz inflamação crônica que deprime a imunidade e alivia sintomas de resfriado." },
                { emoji: "🥦", nome: "Brócolis e vegetais crucíferos", nutriente: "Sulforafano + vitamina C + glutationa", mecanismo: "Ativam genes de defesa celular. Sulforafano é um dos compostos imunomoduladores mais estudados." },
                { emoji: "🐟", nome: "Salmão e sardinha", nutriente: "Vitamina D + ômega-3", mecanismo: "Vitamina D é essencial para ativação de células T. Ômega-3 modula inflamação e fortalece membranas celulares imunes." },
                { emoji: "🫐", nome: "Frutas vermelhas (açaí, mirtilo, morango)", nutriente: "Antocianinas + vitamina C", mecanismo: "Antioxidantes que protegem as células imunes do estresse oxidativo. Mirtilo tem maior concentração de antocianinas." },
                { emoji: "🥜", nome: "Castanha-do-pará", nutriente: "Selênio", mecanismo: "1–2 unidades por dia suprem 100% da necessidade de selênio — essencial para produção de anticorpos e função da tireoide." },
                { emoji: "🧅", nome: "Cebola roxa", nutriente: "Quercetina", mecanismo: "Flavonoide com forte ação antiviral e anti-inflamatória. Inibe replicação de vírus e regula resposta imune." },
                { emoji: "🍵", nome: "Chá verde", nutriente: "EGCG + L-teanina", mecanismo: "EGCG tem ação antiviral e antibacteriana. L-teanina estimula produção de células T gama-delta que combatem infecções." },
                { emoji: "🥛", nome: "Iogurte natural com probióticos", nutriente: "Lactobacillus + Bifidobacterium", mecanismo: "Reforça o microbioma intestinal — eixo central da imunidade. Reduz duração de infecções respiratórias." },
                { emoji: "🌿", nome: "Cúrcuma (açafrão da terra)", nutriente: "Curcumina", mecanismo: "Potente anti-inflamatório e imunomodulador. Aumenta atividade de células NK e macrófagos. Absorção melhorada com pimenta-do-reino." },
                { emoji: "🥑", nome: "Abacate", nutriente: "Vitamina E + glutationa", mecanismo: "Vitamina E protege as membranas das células imunes. Glutationa é o maior antioxidante intracelular." },
                { emoji: "🫘", nome: "Feijão e lentilha", nutriente: "Zinco + ferro + fibra prebiótica", mecanismo: "Zinco é essencial para maturação de linfócitos. Fibra alimenta bactérias benéficas do intestino." },
                { emoji: "🌻", nome: "Sementes de abóbora", nutriente: "Zinco + magnésio", mecanismo: "Maior fonte vegetal de zinco. Magnésio reduz inflamação crônica que suprime a imunidade." },
                { emoji: "🍄", nome: "Cogumelos (shitake, shimeji)", nutriente: "Beta-glucanas + vitamina D (se expostos ao sol)", mecanismo: "Beta-glucanas ativam macrófagos e células NK. Cogumelos expostos ao UV sintetizam vitamina D." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "14px", padding: "1rem 1.4rem" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "6px", marginBottom: "4px" }}>
                        <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.92rem" }}>{item.nome}</div>
                        <span style={{ background: "white", border: "1px solid #bbf7d0", borderRadius: "20px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800, color: "#166534" }}>{item.nutriente}</span>
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#15803d", fontWeight: 500, lineHeight: 1.6 }}>{item.mecanismo}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>O que sabota a imunidade (evite)</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { item: "Açúcar refinado em excesso", efeito: "Reduz atividade dos neutrófilos por até 5h após consumo — as primeiras células de defesa contra infecções." },
                { item: "Álcool em excesso", efeito: "Prejudica produção de citocinas, reduz atividade de macrófagos e danifica mucosa intestinal (porta de entrada de patógenos)." },
                { item: "Ultra-processados e gordura trans", efeito: "Inflamação crônica de baixo grau que sobrecarrega o sistema imune e reduz sua capacidade de resposta a novas ameaças." },
                { item: "Déficit calórico muito severo", efeito: "Desnutrição compromete produção de anticorpos e linfócitos — imunidade em colapso em dietas extremamente restritivas." },
                { item: "Sedentarismo total", efeito: "Exercício moderado aumenta circulação de células imunes. Sedentarismo reduz sua mobilização." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "0.9rem 1.2rem" }}>
                  <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "3px" }}>❌ {item.item}</div>
                  <div style={{ fontSize: "0.84rem", color: "#b91c1c", fontWeight: 500, lineHeight: 1.6 }}>{item.efeito}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>04.</span><span className={styles.qLabel}>Cardápio de 1 dia para fortalecer a imunidade</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { ref: "☀️ Café da manhã", itens: ["Vitamina de acerola ou laranja natural (vitamina C)", "Omelete de 2 ovos com espinafre e cúrcuma", "Café ou chá verde"] },
                { ref: "🍎 Lanche da manhã", itens: ["1–2 castanhas-do-pará (selênio do dia todo)", "Frutas vermelhas (morango, mirtilo ou açaí sem guaraná)"] },
                { ref: "🍚 Almoço", itens: ["Arroz integral + feijão preto com alho (não retire o alho!)", "Salmão ou sardinha assados com gengibre e limão", "Brócolis refogado com azeite e cúrcuma", "Salada de rúcula e cebola roxa"] },
                { ref: "🌿 Lanche da tarde", itens: ["Iogurte natural com mel e sementes de abóbora", "Chá verde ou chá de gengibre com limão"] },
                { ref: "🌙 Jantar", itens: ["Frango com alho e ervas frescas (orégano, tomilho)", "Batata-doce assada", "Cogumelos shimeji refogados no azeite", "Chá de camomila com mel após jantar"] },
              ].map((r, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#f0fdf4" : "#f9fafb", border: `1px solid ${i % 2 === 0 ? "#bbf7d0" : "#e5e7eb"}`, borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: i % 2 === 0 ? "#166534" : "#374151", marginBottom: "8px", fontSize: "0.9rem" }}>{r.ref}</div>
                  {r.itens.map((it, j) => <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.88rem", color: i % 2 === 0 ? "#15803d" : "#4b5563", fontWeight: 600, marginBottom: "5px" }}><span className={styles.dot} />{it}</div>)}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um plano alimentar para fortalecer sua imunidade?</h2>
              <p>Nossa IA monta um cardápio rico nos nutrientes que mais impactam o sistema imune com receitas práticas.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio rico em vitamina C, D e zinco</div>
              <div className={styles.premiumFeatureItem}>✅ Alimentos probióticos e prebióticos</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas brasileiras acessíveis</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar cardápio para imunidade grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/vitaminas-e-minerais-essenciais", emoji: "💊", titulo: "Vitaminas e minerais essenciais: para que serve cada um", meta: "10 min · Nutrição" },
                { href: "/blog/alimentos-que-inflamam-o-corpo", emoji: "🔥", titulo: "Alimentos que inflamam o corpo: lista completa", meta: "9 min · Saúde & Inflamação" },
                { href: "/blog/o-que-comer-para-ter-mais-energia", emoji: "⚡", titulo: "O que comer para ter mais energia no dia a dia", meta: "8 min · Nutrição" },
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
        "headline": "Alimentos que fortalecem o sistema imunológico: lista completa",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-12",
        "description": "Lista completa de alimentos que fortalecem a imunidade com o mecanismo científico de cada um.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/alimentos-que-fortalecem-o-sistema-imunologico" },
        "keywords": ["alimentos que fortalecem o sistema imunologico", "alimentos para imunidade", "como aumentar a imunidade"],
      })}} />
    </>
  );
}
