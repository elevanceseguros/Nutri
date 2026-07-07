import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Whey Concentrado vs Isolado: Qual Vale Mais a Pena? | Nutry.life",
  description: "Whey isolado custa até o dobro do concentrado. Mas essa diferença de preço se justifica em ganho muscular real? A resposta depende do seu perfil.",
  openGraph: { title: "Whey Concentrado vs Isolado: Qual Vale Mais a Pena? | Nutry.life", description: "Whey isolado custa até o dobro do concentrado. Mas essa diferença de preço se justifica em ganho muscular real? A resposta depende do seu perfil.", url: "https://nutry.life/blog/whey-concentrado-vs-isolado" },
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
            <span className={styles.postCategory}>Suplementação</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>02 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Whey Concentrado vs Isolado: Qual Vale Mais a Pena?</h1>
          <p className={styles.postExcerpt}>Whey isolado custa até o dobro do concentrado. Mas essa diferença de preço se justifica em ganho muscular real? A resposta depende do seu perfil.</p>
          <div className={styles.postContent}>
            <p>A dúvida clássica de quem entra no mundo dos suplementos: concentrado ou isolado? Um custa R$ 80 e o outro R$ 160 pelo mesmo peso. Vale a diferença?</p>
            <h2>As diferenças técnicas</h2>
            <p>O whey concentrado (WPC) passa por um processo de filtração simples e tem 70–80% de proteína por dose, com lactose (2–5g por dose) e gordura residual. O whey isolado (WPI) passa por microfiltração ou troca iônica, chegando a 90%+ de proteína, com lactose quase zero e gordura mínima.</p>
            <h2>Para ganho muscular: faz diferença?</h2>
            <p>Em pessoas sem intolerância à lactose e que consomem proteína suficiente ao longo do dia, <strong>não há diferença significativa</strong> no ganho muscular entre concentrado e isolado. Os aminoácidos essenciais chegam ao músculo da mesma forma — a velocidade de absorção é ligeiramente maior no isolado, mas isso tem impacto mínimo no resultado final.</p>
            <h2>Quando o isolado realmente vale</h2>
            <p>Para quem tem intolerância à lactose ou sensibilidade ao leite — o isolado tem lactose quase zero e é bem tolerado por esse grupo. Para quem está em cutting extremo e quer minimizar cada caloria — o isolado tem menos gordura e carboidrato. Para atletas que treinam múltiplas vezes ao dia e querem absorção rápida — a diferença de velocidade pode ser relevante.</p>
            <h2>A conta do custo-benefício</h2>
            <p>Se você treina musculação recreativamente, não tem intolerância à lactose e come bem ao longo do dia, o concentrado de boa procedência entrega o mesmo resultado pelo metade do preço. O dinheiro extra é melhor investido em quantidade — comprar mais concentrado do que menos isolado.</p>
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
