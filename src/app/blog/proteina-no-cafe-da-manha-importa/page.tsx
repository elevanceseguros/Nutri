import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Proteína no Café da Manhã: Realmente Faz Diferença? | Nutry.life",
  description: "Incluir proteína no café da manhã está em alta — promete saciedade, perda de peso e mais energia. Mas a ciência sustenta essa recomendação?",
  openGraph: { title: "Proteína no Café da Manhã: Realmente Faz Diferença? | Nutry.life", description: "Incluir proteína no café da manhã está em alta — promete saciedade, perda de peso e mais energia. Mas a ciência sustenta essa recomendação?", url: "https://nutry.life/blog/proteina-no-cafe-da-manha-importa" },
};

export default function Post() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link>
      </header>
      <main className={styles.postContainer}>
        <article className={styles.post}>
          <div className={styles.postMeta}>
            <span className={styles.postCategory}>Alimentação Prática</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>06 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Proteína no Café da Manhã: Realmente Faz Diferença?</h1>
          <p className={styles.postExcerpt}>Incluir proteína no café da manhã está em alta — promete saciedade, perda de peso e mais energia. Mas a ciência sustenta essa recomendação?</p>
          <div className={styles.postContent}>
            <p>Café da manhã rico em proteína virou recomendação quase universal entre nutricionistas e coaches fitness. Mas o que as pesquisas mostram quando investigam esse hábito de forma controlada?</p>
            <h2>O que a proteína faz no café da manhã</h2>
            <p>Proteína tem maior efeito de saciedade que carboidratos ou gorduras — estimula a liberação de hormônios de saciedade (GLP-1, PYY) e suprime o grelina (hormônio da fome) por mais tempo. Estudos mostram que café da manhã com 25–30g de proteína reduz a ingestão calórica total ao longo do dia em 10–15%.</p>
            <h2>Impacto na composição corporal</h2>
            <p>Para quem treina, a proteína da manhã contribui para a síntese proteica ao longo do dia. A distribuição de proteína ao longo das refeições (em vez de concentrar no jantar) maximiza a síntese muscular — cada refeição com 25–40g de proteína estimula ao máximo a síntese muscular por aquele período.</p>
            <h2>Para quem não tem fome de manhã?</h2>
            <p>Forçar uma refeição proteica quando você não tem fome não é obrigatório. Se você pratica jejum intermitente e quebra o jejum ao meio-dia, incluir proteína nessa primeira refeição captura os mesmos benefícios. O horário importa menos que a quantidade total do dia.</p>
            <h2>Fontes práticas de proteína no café da manhã</h2>
            <ul>
                <li>Ovos (3 unidades = ~18g de proteína)</li>
                <li>Iogurte grego (200g = ~17g de proteína)</li>
                <li>Queijo cottage (100g = ~12g de proteína)</li>
                <li>Whey no smoothie (1 dose = ~25g de proteína)</li>
                <li>Atum ou sardinha (100g = ~25g de proteína)</li>
            </ul>
            <h2>Conclusão</h2>
            <p>Sim, faz diferença — especialmente para quem quer controlar o apetite ao longo do dia e preservar massa muscular. Não é obrigatório de manhã especificamente, mas incluir proteína nas primeiras refeições do dia tem benefícios bem documentados.</p>
          </div>
        </article>
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Nutry.life — Informação nutricional baseada em evidências</p>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem", opacity: 0.6 }}>Este conteúdo é informativo e não substitui orientação de nutricionista.</p>
      </footer>
    </>
  );
}
