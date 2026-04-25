import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Proteína no Café da Manhã: Por Que é Importante e o Que Comer | Nutry.life",
  description: "Entenda por que proteína no café da manhã reduz fome, ajuda a emagrecer e melhora a composição corporal. Veja 10 opções práticas para começar hoje.",
  keywords: "proteina no cafe da manha, cafe da manha com proteina, o que comer no cafe da manha para emagrecer, cafe da manha proteico, alimentos proteicos manha",
  openGraph: {
    title: "Proteína no Café da Manhã: Benefícios e 10 Opções Práticas | Nutry.life",
    description: "Por que colocar proteína no café da manhã muda tudo — e 10 opções fáceis para fazer hoje.",
    url: "https://nutry.life/blog/proteina-no-cafe-da-manha",
  },
};

export default function ProteinaCafeDaManha() {
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
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>26 de abril de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 7 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Proteína no café da manhã: por que é tão importante e o que comer
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              A ciência é clara: começar o dia com proteína reduz a fome ao longo do dia, melhora a composição corporal e estabiliza o açúcar no sangue. Veja como colocar isso na prática.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um plano alimentar com café da manhã proteico</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>
                Nossa IA monta seu cardápio completo com foco em proteína, respeitando seus objetivos e preferências.
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
              <span className={styles.qLabel}>Por que proteína de manhã faz diferença?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              De todos os macronutrientes, a proteína é o que mais <strong>aumenta a saciedade</strong> e mais <strong>acelera o metabolismo</strong>. Quando você come proteína pela manhã, seu corpo libera hormônios de saciedade (como o PYY e o GLP-1) que suprimem a fome por horas.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              Estudos mostram que pessoas que consomem <strong>25–30g de proteína no café da manhã</strong> comem em média 400 calorias a menos ao longo do dia — sem fazer esforço consciente para isso. É o efeito cascata da saciedade proteica.
            </p>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[
                { val: "25–30g", lbl: "proteína ideal no café" },
                { val: "~400 kcal", lbl: "menos ingeridas no dia" },
                { val: "30%", lbl: "do efeito térmico dos alimentos" },
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
              <span className={styles.qLabel}>Benefícios comprovados</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { emoji: "🍽️", titulo: "Menos fome ao longo do dia", desc: "Proteína suprime grelina (hormônio da fome) com mais eficiência do que carboidratos ou gorduras." },
                { emoji: "🔥", titulo: "Metabolismo mais acelerado", desc: "A proteína tem efeito térmico de ~30% — seu corpo gasta mais calorias só para digeri-la." },
                { emoji: "💪", titulo: "Preservação de massa muscular", desc: "Ingestão distribuída de proteína ao longo do dia (inclusive no café) melhora síntese proteica muscular." },
                { emoji: "🩸", titulo: "Glicemia mais estável", desc: "Sem picos de açúcar logo pela manhã — evita o ciclo fome-pico-queda que sabota a dieta." },
                { emoji: "🧠", titulo: "Mais foco e energia", desc: "Aminoácidos são precursores de dopamina e serotonina — neurotransmissores ligados a foco e humor." },
                { emoji: "⚖️", titulo: "Composição corporal melhor", desc: "Mais músculo, menos gordura — especialmente quando combinado com treino de força." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "14px", padding: "1.1rem 1.4rem" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.92rem", marginBottom: "3px" }}>{item.titulo}</div>
                      <div style={{ fontSize: "0.87rem", color: "#15803d", fontWeight: 500, lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 03 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>10 opções práticas de café da manhã proteico</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>
              Sem precisar de suplementos caros — apenas alimentos reais e acessíveis:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { num: "01", opcao: "Ovos mexidos + pão integral", proteina: "~18g", detalhe: "2 ovos mexidos com azeite, sal e ervas. Rápido, barato e completo.", dica: "Adicione espinafre ou tomate para mais nutrientes." },
                { num: "02", opcao: "Iogurte grego natural + granola + frutas", proteina: "~17g", detalhe: "200g de iogurte grego tem proteína de 2 ovos. Com granola e banana fica saciante.", dica: "Escolha iogurte sem açúcar adicionado — leia o rótulo." },
                { num: "03", opcao: "Omelete de 3 ovos com queijo e tomate", proteina: "~22g", detalhe: "Rápido (5 minutos), versátil e você pode variar o recheio todo dia.", dica: "Use queijo cottage para aumentar proteína com menos gordura." },
                { num: "04", opcao: "Vitamina de whey com banana e aveia", proteina: "~30g", detalhe: "Para quem treina: 1 scoop de whey + banana + aveia + leite ou água.", dica: "Opcional — dá para atingir os mesmos valores com alimentos reais." },
                { num: "05", opcao: "Tapioca com ovo e queijo branco", proteina: "~20g", detalhe: "Opção brasileira clássica. 2 tapiocas recheadas com ovo e queijo branco.", dica: "Adicione folhas verdes no recheio para mais fibras." },
                { num: "06", opcao: "Queijo cottage + torrada integral + ovo cozido", proteina: "~25g", detalhe: "Montagem rápida, ótima para quem tem pressa de manhã.", dica: "Pré-cozinhe os ovos na véspera para economizar tempo." },
                { num: "07", opcao: "Panqueca de aveia e banana + ovos", proteina: "~20g", detalhe: "Mistura banana + aveia + ovo no liquidificador e frita sem óleo. Doce e proteico.", dica: "Pode preparar a massa na véspera e guardar na geladeira." },
                { num: "08", opcao: "Atum com torrada integral + azeite", proteina: "~28g", detalhe: "Parece incomum para o café, mas é absurdamente nutritivo e rápido.", dica: "Uma lata de atum ao natural tem mais proteína que 3 ovos." },
                { num: "09", opcao: "Ricota amassada com mel + pão integral", proteina: "~16g", detalhe: "Leve, saborosa e fácil de preparar para dias mais corridos.", dica: "Adicione canela para sabor e benefícios anti-inflamatórios." },
                { num: "10", opcao: "Açaí proteico (sem guaraná) + granola + proteína", proteina: "~22g", detalhe: "Opção para quem ama açaí — peça sem xarope de guaraná e com granola proteica.", dica: "Adicione pasta de amendoim ou chia para mais proteína." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <div style={{ background: "#16a34a", color: "white", borderRadius: "8px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800 }}>{item.num}</div>
                      <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.95rem" }}>{item.opcao}</div>
                    </div>
                    <div style={{ background: "#dcfce7", color: "#166534", borderRadius: "20px", padding: "3px 10px", fontSize: "0.8rem", fontWeight: 800 }}>{item.proteina} proteína</div>
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#4b5563", fontWeight: 500, lineHeight: 1.6, marginBottom: "5px" }}>{item.detalhe}</div>
                  <div style={{ fontSize: "0.83rem", color: "#16a34a", fontWeight: 700 }}>💡 {item.dica}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 04 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>O que NÃO comer no café da manhã</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1rem" }}>
              Algumas opções populares de café da manhã são armadilhas nutricionais — parecem saudáveis mas geram picos de insulina e fome intensa 2h depois:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { item: "Suco de fruta industrializado (mesmo 'integral')", motivo: "Pico de açúcar sem fibras para desacelerar a absorção" },
                { item: "Cereal matinal, granola comercial com açúcar", motivo: "Altíssimo índice glicêmico — fome em 1h" },
                { item: "Pão de forma branco com margarina", motivo: "Carboidrato refinado + gordura trans — pior combo para manhã" },
                { item: "Iogurte de sabor (com fruta no fundo)", motivo: "Açúcar disfarçado — até 15g de açúcar em 100g" },
                { item: "Café com leite condensado ou achocolatado", motivo: "Alta carga glicêmica sem proteína compensatória" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "14px", padding: "1rem 1.4rem" }}>
                  <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.9rem", marginBottom: "3px" }}>❌ {item.item}</div>
                  <div style={{ fontSize: "0.85rem", color: "#b91c1c", fontWeight: 500 }}>{item.motivo}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Premium */}
          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um plano alimentar completo com café proteico?</h2>
              <p>Nossa IA cria um plano personalizado considerando seu objetivo, horário de treino e preferências.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Café da manhã proteico personalizado</div>
              <div className={styles.premiumFeatureItem}>✅ Plano para semana toda</div>
              <div className={styles.premiumFeatureItem}>✅ Macros e calorias detalhados</div>
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
                { href: "/blog/cardapio-saudavel-para-semana", emoji: "🥗", titulo: "Cardápio saudável para a semana: 5 dias prontos", meta: "10 min · Alimentação Saudável" },
                { href: "/blog/como-emagrecer-sem-passar-fome", emoji: "🔥", titulo: "Como emagrecer sem passar fome — 7 estratégias", meta: "10 min · Emagrecimento" },
                { href: "/blog/quantas-gramas-de-proteina-por-dia", emoji: "💪", titulo: "Quantas gramas de proteína por dia você precisa?", meta: "Nutrição" },
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
        "headline": "Proteína no café da manhã: por que é tão importante e o que comer",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-04-26",
        "description": "Por que proteína no café da manhã ajuda a emagrecer e 10 opções práticas para começar hoje.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/proteina-no-cafe-da-manha" },
        "keywords": ["proteina no cafe da manha", "cafe da manha proteico", "o que comer no cafe da manha"],
      })}} />
    </>
  );
}
