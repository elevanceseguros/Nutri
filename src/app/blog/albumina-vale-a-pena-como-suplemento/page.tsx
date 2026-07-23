import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Albumina Vale a Pena Como Suplemento? Comparação com Whey | Nutry.life",
  description: "Albumina é proteína de clara de ovo e custa menos que o whey. Mas ela entrega o mesmo resultado? Comparação honesta de absorção, aminoácidos e custo-benefício.",
  openGraph: { title: "Albumina Vale a Pena Como Suplemento? Comparação com Whey | Nutry.life", description: "Albumina é proteína de clara de ovo e custa menos que o whey. Mas ela entrega o mesmo resultado? Comparação honesta de absorção, aminoácidos e custo-benefício.", url: "https://nutry.life/blog/albumina-vale-a-pena-como-suplemento" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>15 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Albumina Vale a Pena Como Suplemento? Comparação com Whey</h1>
          <p className={styles.postExcerpt}>Albumina é proteína de clara de ovo e custa menos que o whey. Mas ela entrega o mesmo resultado? Comparação honesta de absorção, aminoácidos e custo-benefício.</p>
          <div className={styles.postContent}>
            <p>Albumina é uma das proteínas em pó mais antigas do mercado — feita a partir da clara de ovo desidratada. Com o domínio do whey, ela perdeu espaço, mas continua sendo uma opção legítima e mais barata para quem busca proteína de qualidade.</p>
            <h2>O que é albumina?</h2>
            <p>Albumina é a proteína mais abundante no plasma sanguíneo, mas no contexto de suplementos, refere-se à proteína extraída da clara do ovo (ovalbumina). Tem perfil completo de aminoácidos essenciais e alto valor biológico.</p>
            <h2>Albumina vs Whey: comparação direta</h2>
            <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                <thead><tr style={{ background: "#18181b", color: "#fff" }}>
                  <th style={{ padding: "10px 14px", textAlign: "left" }}>Critério</th>
                  <th style={{ padding: "10px 14px", textAlign: "center" }}>Albumina</th>
                  <th style={{ padding: "10px 14px", textAlign: "center" }}>Whey Concentrado</th>
                </tr></thead>
                <tbody>
                  {[["Proteína por dose (30g)", "~22g", "~23g"],["Absorção","Intermediária","Rápida"],["Leucina","Alta","Muito alta ✓"],["Lactose","Não tem ✓","Tem (pequena qty)"],["Custo/kg proteína","R$ 40-60 ✓","R$ 60-100"],["Valor biológico","~100","~104"],].map(([c,a,w],i)=>(<tr key={c} style={{background:i%2===0?"#f9fafb":"#fff"}}><td style={{padding:"10px 14px",fontWeight:600}}>{c}</td><td style={{padding:"10px 14px",textAlign:"center"}}>{a}</td><td style={{padding:"10px 14px",textAlign:"center"}}>{w}</td></tr>))}
                </tbody>
              </table>
            </div>
            <h2>Onde a albumina tem vantagem</h2>
            <p>Zero lactose — quem tem intolerância severa e não tolera nem o whey isolado pode usar albumina sem problemas. Custo menor por grama de proteína em comparação ao whey concentrado de qualidade. Sabor neutro — mistura bem com alimentos sem alterar muito o sabor.</p>
            <h2>Onde o whey tem vantagem</h2>
            <p>Velocidade de absorção — whey é mais rápido, o que pode ser ligeiramente mais vantajoso no pós-treino imediato. Teor de leucina — um pouco maior no whey, favorecendo o estímulo à síntese muscular.</p>
            <h2>Vale a pena usar albumina?</h2>
            <p>Sim, especialmente para quem tem intolerância à lactose e quer economizar em relação ao whey isolado. Para quem não tem restrições, whey e albumina entregam resultados similares — a escolha pode ser pelo preço. Para ganho muscular com proteína suficiente no dia, ambos funcionam.</p>
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
