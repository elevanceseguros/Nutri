import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Vitaminas e Minerais Essenciais: Para que Serve Cada Um | Nutry.life",
  description: "Guia completo sobre vitaminas e minerais essenciais: para que serve cada um, sintomas de deficiência, melhores fontes alimentares e quando suplementar.",
  keywords: "vitaminas e minerais essenciais, para que serve cada vitamina, vitaminas importantes, minerais essenciais, deficiencia de vitaminas sintomas, fontes de vitaminas",
  openGraph: {
    title: "Vitaminas e Minerais Essenciais: Guia Completo | Nutry.life",
    description: "Para que serve cada vitamina e mineral, sintomas de deficiência e as melhores fontes alimentares.",
    url: "https://nutry.life/blog/vitaminas-e-minerais-essenciais",
  },
};

export default function VitaminasMinerais() {
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
            <span style={{ color: "#22c55e" }}>Nutrição</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Nutrição</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>11 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 10 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Vitaminas e minerais essenciais: para que serve cada um
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Cansaço, queda de cabelo, imunidade baixa, humor instável — muitos sintomas comuns são sinais de deficiências de micronutrientes. Conheça as principais vitaminas e minerais, o que fazem e onde encontrá-los.
            </p>
          </div>

          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere um cardápio rico em vitaminas e minerais</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA monta um plano alimentar completo com foco em cobertura de micronutrientes essenciais para o seu perfil.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu plano nutricional →</Link>
            </div>
          </div>

          {/* Vitaminas */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Principais vitaminas e para que servem</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { vitamina: "Vitamina D", funcao: "Saúde óssea, imunidade, regulação do humor, produção de testosterona", deficiencia: "Fraqueza muscular, depressão, imunidade baixa, dores nos ossos", fontes: "Sol (principal), peixe gordo, gema de ovo, cogumelos expostos ao sol", suplementar: true },
                { vitamina: "Vitamina B12", funcao: "Formação de glóbulos vermelhos, saúde neurológica, energia celular, síntese de DNA", deficiencia: "Anemia, cansaço extremo, formigamento, névoa mental, irritabilidade", fontes: "Carne vermelha, fígado, peixe, ovos, laticínios — veganos precisam suplementar", suplementar: true },
                { vitamina: "Vitamina C", funcao: "Imunidade, síntese de colágeno, antioxidante, absorção de ferro", deficiencia: "Imunidade baixa, gengiva sangrando, cicatrização lenta, cansaço", fontes: "Acerola, goiaba, caju, kiwi, pimentão, laranja, limão", suplementar: false },
                { vitamina: "Vitamina A", funcao: "Visão (especialmente noturna), pele, imunidade, crescimento celular", deficiencia: "Visão noturna comprometida, pele seca, imunidade baixa", fontes: "Fígado, cenoura, batata-doce, abóbora, espinafre, manga", suplementar: false },
                { vitamina: "Vitamina E", funcao: "Antioxidante poderoso, saúde cardiovascular, imunidade, proteção celular", deficiencia: "Rara — cansaço muscular, imunidade comprometida", fontes: "Azeite, castanhas, amêndoas, sementes de girassol, abacate", suplementar: false },
                { vitamina: "Vitamina K", funcao: "Coagulação sanguínea, saúde óssea, proteção cardiovascular", deficiencia: "Coagulação prejudicada, ossos frágeis", fontes: "Couve, espinafre, brócolis, repolho, fígado", suplementar: false },
                { vitamina: "Vitamina B9 (Folato)", funcao: "Síntese de DNA, formação de glóbulos vermelhos, essencial na gravidez", deficiencia: "Anemia, cansaço, complicações na gravidez, má formação fetal", fontes: "Feijão, lentilha, espinafre, couve, brócolis, fígado", suplementar: true },
                { vitamina: "Vitamina B6", funcao: "Metabolismo de proteínas, produção de serotonina e dopamina, imunidade", deficiencia: "Depressão, irritabilidade, imunidade baixa, dermatite", fontes: "Frango, peixe, banana, batata, grão-de-bico, nozes", suplementar: false },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "1.3rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ fontWeight: 800, color: "#111827", fontSize: "1rem" }}>🟡 {item.vitamina}</div>
                    {item.suplementar && <span style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "20px", padding: "2px 10px", fontSize: "0.75rem", fontWeight: 800, color: "#92400e" }}>⚠️ Deficiência comum no BR</span>}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ fontSize: "0.86rem", color: "#374151", fontWeight: 600 }}><span style={{ color: "#16a34a" }}>✅ Função:</span> {item.funcao}</div>
                    <div style={{ fontSize: "0.86rem", color: "#374151", fontWeight: 600 }}><span style={{ color: "#dc2626" }}>⚠️ Falta:</span> {item.deficiencia}</div>
                    <div style={{ fontSize: "0.86rem", color: "#374151", fontWeight: 600 }}><span style={{ color: "#2563eb" }}>🍽️ Fontes:</span> {item.fontes}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Minerais */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Principais minerais e para que servem</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { mineral: "Magnésio", funcao: "Produção de energia (ATP), contração muscular, sono, redução do estresse e ansiedade", deficiencia: "Câimbras, insônia, ansiedade, fadiga, pressão alta", fontes: "Castanhas, sementes de abóbora, espinafre, feijão, aveia, chocolate amargo 70%+", suplementar: true },
                { mineral: "Ferro", funcao: "Transporte de oxigênio no sangue, produção de energia, imunidade, função cognitiva", deficiencia: "Anemia, cansaço intenso, palidez, queda de cabelo, falta de foco", fontes: "Carne vermelha (ferro heme), fígado, feijão+limão, espinafre, lentilha", suplementar: true },
                { mineral: "Zinco", funcao: "Imunidade, cicatrização, testosterona, olfato e paladar, síntese proteica", deficiencia: "Imunidade baixa, queda de cabelo, feridas que não cicatrizam, infertilidade masculina", fontes: "Ostras (maior fonte), carne vermelha, pumpkin seeds, grão-de-bico, castanha-de-caju", suplementar: false },
                { mineral: "Cálcio", funcao: "Saúde óssea e dentária, contração muscular, sinalização nervosa, coagulação", deficiencia: "Ossos frágeis, câimbras, formigamento, osteoporose no longo prazo", fontes: "Leite e derivados, sardinha com espinha, couve, brócolis, tofu enriquecido", suplementar: false },
                { mineral: "Potássio", funcao: "Pressão arterial, função muscular e cardíaca, equilíbrio hídrico", deficiencia: "Câimbras, fraqueza muscular, arritmia, pressão alta", fontes: "Banana, abacate, batata-doce, feijão, espinafre, salmão", suplementar: false },
                { mineral: "Selênio", funcao: "Antioxidante potente, função da tireoide, imunidade, saúde reprodutiva", deficiencia: "Hipotireoidismo, queda de cabelo, imunidade baixa", fontes: "Castanha-do-pará (1–2 unidades/dia já é suficiente!), frango, peixe, ovos", suplementar: false },
                { mineral: "Iodo", funcao: "Produção de hormônios tireoidianos (T3 e T4) — regula metabolismo", deficiencia: "Hipotireoidismo, fadiga, ganho de peso, bócio", fontes: "Sal iodado, peixe marinho, frutos do mar, laticínios", suplementar: false },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "1.3rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ fontWeight: 800, color: "#166534", fontSize: "1rem" }}>🟢 {item.mineral}</div>
                    {item.suplementar && <span style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "20px", padding: "2px 10px", fontSize: "0.75rem", fontWeight: 800, color: "#991b1b" }}>⚠️ Deficiência comum no BR</span>}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ fontSize: "0.86rem", color: "#166534", fontWeight: 600 }}><span style={{ color: "#16a34a" }}>✅ Função:</span> {item.funcao}</div>
                    <div style={{ fontSize: "0.86rem", color: "#166534", fontWeight: 600 }}><span style={{ color: "#dc2626" }}>⚠️ Falta:</span> {item.deficiencia}</div>
                    <div style={{ fontSize: "0.86rem", color: "#166534", fontWeight: 600 }}><span style={{ color: "#2563eb" }}>🍽️ Fontes:</span> {item.fontes}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Os 4 mais deficientes no Brasil</span></div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>Estudos de saúde pública brasileiros apontam deficiências recorrentes na população:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { rank: "1º", nutriente: "Vitamina D", dado: "Mais de 60% dos brasileiros têm níveis insuficientes — mesmo em país ensolarado. Trabalho indoor e protetor solar reduzem a síntese." },
                { rank: "2º", nutriente: "Magnésio", dado: "Solo empobrecido e alimentação processada reduziram o magnésio nos alimentos. Estresse crônico consome magnésio rapidamente." },
                { rank: "3º", nutriente: "Ferro", dado: "Anemia ferropriva afeta principalmente mulheres em idade fértil e crianças. Dieta pobre em proteína animal é o principal fator." },
                { rank: "4º", nutriente: "Vitamina B12", dado: "Especialmente em vegetarianos, veganos e pessoas com mais de 60 anos (absorção reduz com a idade)." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "14px", padding: "1.1rem 1.4rem", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ background: "#dc2626", color: "white", borderRadius: "8px", padding: "4px 10px", fontSize: "0.82rem", fontWeight: 800, flexShrink: 0 }}>{item.rank}</div>
                  <div>
                    <div style={{ fontWeight: 800, color: "#991b1b", fontSize: "0.92rem", marginBottom: "4px" }}>{item.nutriente}</div>
                    <div style={{ fontSize: "0.86rem", color: "#b91c1c", fontWeight: 500, lineHeight: 1.6 }}>{item.dado}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1rem", padding: "1rem 1.25rem", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "12px", fontSize: "0.87rem", color: "#92400e", fontWeight: 600, lineHeight: 1.7 }}>
              💡 Antes de suplementar, faça exames de sangue para confirmar deficiência. Excesso de algumas vitaminas (A, D, E, K) pode causar toxicidade.
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer um cardápio rico em vitaminas e minerais?</h2>
              <p>Nossa IA monta um plano alimentar que cobre todas as necessidades de micronutrientes com alimentos brasileiros acessíveis.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cobertura completa de micronutrientes</div>
              <div className={styles.premiumFeatureItem}>✅ Fontes brasileiras e acessíveis</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio semanal personalizado</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>Gerar meu plano nutricional grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>📚</span><span className={styles.qLabel}>Leia também</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "/blog/alimentos-que-inflamam-o-corpo", emoji: "🔥", titulo: "Alimentos que inflamam o corpo: lista completa", meta: "9 min · Saúde & Inflamação" },
                { href: "/blog/o-que-comer-para-ter-mais-energia", emoji: "⚡", titulo: "O que comer para ter mais energia no dia a dia", meta: "8 min · Nutrição" },
                { href: "/blog/alimentos-ricos-em-proteina", emoji: "🥩", titulo: "Alimentos ricos em proteína: lista completa", meta: "8 min · Nutrição" },
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
        "headline": "Vitaminas e minerais essenciais: para que serve cada um",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-05-11",
        "description": "Guia completo sobre vitaminas e minerais: funções, sintomas de deficiência, fontes alimentares e os 4 mais deficientes no Brasil.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/vitaminas-e-minerais-essenciais" },
        "keywords": ["vitaminas e minerais essenciais", "para que serve cada vitamina", "deficiencia de vitaminas"],
      })}} />
    </>
  );
}
