import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Como Acelerar o Metabolismo com Alimentação: 10 Estratégias | Nutry.life",
  description: "Aprenda como acelerar o metabolismo de forma natural com alimentação, exercício e hábitos comprovados pela ciência. Sem suplementos caros ou promessas falsas.",
  keywords: "como acelerar o metabolismo, metabolismo lento o que fazer, como aumentar o metabolismo, alimentos que aceleram o metabolismo, como acelerar o metabolismo naturalmente",
  openGraph: {
    title: "Como Acelerar o Metabolismo com Alimentação | Nutry.life",
    description: "10 estratégias comprovadas para acelerar o metabolismo naturalmente — sem suplementos nem promessas falsas.",
    url: "https://nutry.life/blog/como-acelerar-o-metabolismo",
  },
};

export default function AcelerarMetabolismo() {
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
            <span style={{ color: "#22c55e" }}>Metabolismo</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Metabolismo</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>18 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Como acelerar o metabolismo: 10 estratégias que funcionam de verdade
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              "Metabolismo lento" não é sentença permanente. O metabolismo responde diretamente ao que você come, como treina, quanto dorme e até à sua massa muscular. Veja o que a ciência comprova que funciona.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Calcule seu metabolismo e gere seu cardápio</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA calcula seu TDEE, identifica seu déficit ou superávit ideal e monta um cardápio para seu objetivo.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Calcular meu metabolismo →</Link>
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>O que é metabolismo e por que "fica lento"?</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              Metabolismo é o conjunto de processos que o corpo usa para converter alimentos em energia. A <strong>Taxa Metabólica Basal (TMB)</strong> — energia gasta em repouso — responde a fatores controláveis: quantidade de massa muscular, hormônios tireoidianos, temperatura corporal e composição da microbiota intestinal.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              Dietas muito restritivas são o principal inimigo do metabolismo: o corpo interpreta restrição severa como ameaça de escassez e <strong>reduz o gasto energético em até 20–30%</strong> para compensar. Por isso dietas yoyo pioram progressivamente o metabolismo.
            </p>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>10 estratégias comprovadas para acelerar o metabolismo</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { num: "01", titulo: "Coma mais proteína", efeito: "+150–200 kcal/dia gastas", desc: "Proteína tem efeito térmico de ~30% — o corpo gasta quase um terço das calorias proteicas só para digeri-las. É o macronutriente com maior impacto no metabolismo.", como: "Inclua proteína em todas as refeições: ovos, frango, peixe, leguminosas." },
                { num: "02", titulo: "Faça musculação", efeito: "+50–100 kcal/dia em repouso", desc: "Músculo é metabolicamente ativo — queima calorias 24h, mesmo em repouso. Cada kg de músculo gasta ~13 kcal/dia extra. Em 5 kg de músculo extra: +65 kcal/dia passivo.", como: "2–4x por semana de treino de força com progressão de carga." },
                { num: "03", titulo: "Não pule refeições", efeito: "evita queda metabólica", desc: "Jejum prolongado ativa mecanismos de conservação energética. O corpo reduz a TMB para poupar recursos. Refeições regulares mantêm o metabolismo ativo.", como: "3 a 5 refeições/dia em intervalos regulares — sem pular café ou almoço." },
                { num: "04", titulo: "Beba água gelada suficiente", efeito: "+100–200 kcal/dia", desc: "Beber 500ml de água fria aumenta o metabolismo em ~30% por 30–40 minutos — o corpo gasta energia para aquecer a água. Hidratação adequada mantém enzimas metabólicas funcionando.", como: "Mínimo 2L de água por dia, preferencialmente gelada." },
                { num: "05", titulo: "Inclua alimentos termogênicos", efeito: "+50–150 kcal/dia", desc: "Pimenta (capsaicina), gengibre, canela, chá verde e café têm compostos que aumentam temporariamente a termogênese — produção de calor corporal que consome calorias.", como: "Adicione pimenta nas refeições, beba chá verde e use gengibre e canela." },
                { num: "06", titulo: "Durma 7–9 horas", efeito: "previne queda de 5–15%", desc: "Sono ruim reduz hormônio tireoidiano, eleva cortisol e reduz leptina — trio que literalmente desacelera o metabolismo e aumenta acúmulo de gordura.", como: "Hora de dormir consistente, quarto escuro e fresco, sem tela 1h antes." },
                { num: "07", titulo: "Faça HIIT (intervalado de alta intensidade)", efeito: "+200–400 kcal/24h", desc: "O HIIT cria um efeito pós-exercício chamado EPOC — o metabolismo permanece acelerado por até 24–48h após o treino para recuperar o esforço.", como: "20–30 min de HIIT 2–3x por semana (corrida, bike, jumping jack)." },
                { num: "08", titulo: "Evite dietas muito restritivas", efeito: "preserva TMB", desc: "Déficit acima de 1.000 kcal/dia ativa adaptação metabólica — o corpo reduz o gasto para compensar. Manutenha déficit moderado de 300–500 kcal para preservar o metabolismo.", como: "Prefira déficit sustentável de longo prazo a cortes radicais de curto prazo." },
                { num: "09", titulo: "Cuide da tireoide com iodo e selênio", efeito: "mantém metabolismo basal", desc: "A tireoide regula diretamente o metabolismo basal. Deficiência de iodo ou selênio causa hipotireoidismo subclínico — metabolismo lento, cansaço e ganho de peso.", como: "Use sal iodado, coma sardinha, 1–2 castanhas-do-pará por dia." },
                { num: "10", titulo: "Movimente-se mais no dia a dia (NEAT)", efeito: "+200–600 kcal/dia", desc: "NEAT (Non-Exercise Activity Thermogenesis) é o gasto com atividades cotidianas. Subir escadas, caminhar até o mercado, ficar em pé — somam centenas de calorias a mais por dia.", como: "Defina metas de passos (8–10 mil/dia), evite ficar sentado por mais de 1h seguida." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "1.3rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <div style={{ background: "#16a34a", color: "white", borderRadius: "8px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800 }}>{item.num}</div>
                      <div style={{ fontWeight: 800, color: "#166534", fontSize: "0.95rem" }}>{item.titulo}</div>
                    </div>
                    <div style={{ background: "white", border: "1px solid #bbf7d0", borderRadius: "20px", padding: "2px 10px", fontSize: "0.75rem", fontWeight: 800, color: "#166534" }}>🔥 {item.efeito}</div>
                  </div>
                  <div style={{ fontSize: "0.86rem", color: "#15803d", fontWeight: 500, lineHeight: 1.7, marginBottom: "6px" }}>{item.desc}</div>
                  <div style={{ fontSize: "0.83rem", color: "#166534", fontWeight: 800, background: "white", padding: "5px 10px", borderRadius: "8px", border: "1px solid #bbf7d0" }}>✅ Como aplicar: {item.como}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Alimentos termogênicos para incluir no dia a dia</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { emoji: "🌶️", nome: "Pimenta vermelha / caiena", desc: "Capsaicina aumenta termogênese em 4–5% por algumas horas. Use em ovos, carnes e molhos." },
                { emoji: "🫚", nome: "Gengibre fresco ou em pó", desc: "Aumenta temperatura corporal e acelera o metabolismo em até 5%. Ótimo em chás e sucos." },
                { emoji: "☕", nome: "Café preto (sem açúcar)", desc: "Cafeína aumenta metabolismo em 3–11%. Mais eficaz em quem não tem tolerância elevada." },
                { emoji: "🍵", nome: "Chá verde", desc: "EGCG + cafeína — combinação que aumenta oxidação de gordura em até 17%." },
                { emoji: "🫙", nome: "Canela", desc: "Melhora sensibilidade à insulina e tem leve efeito termogênico. Use em aveia e frutas." },
                { emoji: "🧄", nome: "Alho cru", desc: "Alicina tem ação termogênica e melhora o perfil metabólico. Melhor cru ou levemente aquecido." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "12px", padding: "0.9rem 1.2rem", display: "flex", gap: "10px" }}>
                  <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "#92400e", fontSize: "0.9rem", marginBottom: "2px" }}>{item.nome}</div>
                    <div style={{ fontSize: "0.84rem", color: "#b45309", fontWeight: 500, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio que acelera seu metabolismo?</h2>
              <p>Nossa IA calcula seu TDEE e monta um plano com proteína alta, alimentos termogênicos e macros otimizados.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Alta proteína para efeito térmico máximo</div>
              <div className={styles.premiumFeatureItem}>✅ Alimentos termogênicos incluídos</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio semanal completo</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu cardápio metabólico grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/quantas-calorias-preciso-por-dia", emoji: "🔢", titulo: "Quantas calorias eu preciso por dia? Cálculo completo", meta: "9 min · Nutrição" },
                { href: "/blog/dieta-para-ganhar-massa-muscular", emoji: "💪", titulo: "Dieta para ganhar massa muscular: guia completo", meta: "10 min · Hipertrofia" },
                { href: "/blog/como-perder-peso-sem-fazer-dieta", emoji: "🏃", titulo: "Como perder peso sem fazer dieta: 10 mudanças", meta: "9 min · Emagrecimento" },
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
        "headline": "Como acelerar o metabolismo: 10 estratégias que funcionam de verdade",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-18",
        "description": "10 estratégias comprovadas para acelerar o metabolismo com alimentação, exercício e hábitos — sem suplementos.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/como-acelerar-o-metabolismo" },
        "keywords": ["como acelerar o metabolismo", "metabolismo lento o que fazer", "alimentos que aceleram o metabolismo"],
      })}} />
    </>
  );
}
