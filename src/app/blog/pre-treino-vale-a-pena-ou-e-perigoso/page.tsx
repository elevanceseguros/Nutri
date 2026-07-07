import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Pré-Treino Vale a Pena ou É Perigoso? Guia Honesto | Nutry.life",
  description: "Pré-treino promete mais energia, foco e performance. Mas formulas com doses altas de cafeína e outros estimulantes preocupam. Vale o risco?",
  openGraph: { title: "Pré-Treino Vale a Pena ou É Perigoso? Guia Honesto | Nutry.life", description: "Pré-treino promete mais energia, foco e performance. Mas formulas com doses altas de cafeína e outros estimulantes preocupam. Vale o risco?", url: "https://nutry.life/blog/pre-treino-vale-a-pena-ou-e-perigoso" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>05 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Pré-Treino Vale a Pena ou É Perigoso? Guia Honesto</h1>
          <p className={styles.postExcerpt}>Pré-treino promete mais energia, foco e performance. Mas formulas com doses altas de cafeína e outros estimulantes preocupam. Vale o risco?</p>
          <div className={styles.postContent}>
            <p>Pré-treino é um dos suplementos mais vendidos nas academias — e também um dos mais mal usados. Fórmulas com 200–400mg de cafeína por dose, beta-alanina, citrulina e outros ingredientes podem ser eficazes ou problemáticos dependendo do uso.</p>
            <h2>O que funciona no pré-treino</h2>
            <p><strong>Cafeína</strong> é o ingrediente com mais evidência: melhora performance aeróbica e anaeróbica, aumenta foco e reduz percepção de esforço. Dose eficaz: 3–6mg/kg de peso corporal. Para 70kg = 210–420mg por treino.</p>
            <p><strong>Citrulina malato</strong> aumenta o fluxo sanguíneo muscular e reduz fadiga. Dose eficaz: 6–8g. Muitos produtos têm doses abaixo do necessário.</p>
            <p><strong>Beta-alanina</strong> melhora resistência em esforços de 1–4 minutos. Causa formigamento (parestesia) inofensivo mas desconfortável para muitos.</p>
            <h2>O que não funciona (ou tem evidência fraca)</h2>
            <p>Muitos ingredientes no rótulo são marketing: taurina em doses baixas, extratos exóticos, "blend proprietário" sem doses declaradas. Foque nos ingredientes com dose eficaz declarada.</p>
            <h2>Os riscos reais</h2>
            <p>Doses altas de cafeína (400mg+) causam taquicardia, ansiedade, insônia e dependência. Produtos adulterados com estimulantes não declarados já causaram problemas sérios no mundo. Compre sempre de marcas confiáveis com laudo de análise.</p>
            <h2>Vale a pena?</h2>
            <p>Para treinos de alta intensidade com objetivo de performance, sim — especialmente a cafeína isolada ou em fórmulas com doses eficazes declaradas. Para treinos recreativos ou de baixa intensidade, um café antes do treino resolve por uma fração do preço.</p>
            <h2>Quem não deve usar</h2>
            <p>Hipertensos, pessoas com arritmia, ansiedade severa, grávidas e adolescentes devem evitar pré-treinos estimulantes. Consulte um médico se tiver dúvida.</p>
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
