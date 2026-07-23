import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Potássio: Para Que Serve, Sintomas de Deficiência e Onde Encontrar | Nutry.life",
  description: "Potássio regula pressão arterial, função muscular e saúde do coração. E a maioria das pessoas consome menos do que precisa — sem saber.",
  openGraph: { title: "Potássio: Para Que Serve, Sintomas de Deficiência e Onde Encontrar | Nutry.life", description: "Potássio regula pressão arterial, função muscular e saúde do coração. E a maioria das pessoas consome menos do que precisa — sem saber.", url: "https://nutry.life/blog/potassio-para-que-serve-e-onde-encontrar" },
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
            <span className={styles.postCategory}>Saúde e Nutrição</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>22 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Potássio: Para Que Serve, Sintomas de Deficiência e Onde Encontrar</h1>
          <p className={styles.postExcerpt}>Potássio regula pressão arterial, função muscular e saúde do coração. E a maioria das pessoas consome menos do que precisa — sem saber.</p>
          <div className={styles.postContent}>
            <p>Potássio é o terceiro mineral mais abundante no corpo humano e tem papéis fundamentais que vão além do que a maioria imagina. Enquanto o sódio aumenta a pressão arterial, o potássio tem efeito oposto — e o desequilíbrio entre os dois é um dos fatores mais relevantes na hipertensão moderna.</p>
            <h2>Para que o potássio serve</h2>
            <ul>
              <li><strong>Pressão arterial</strong> — contrabalança o efeito do sódio, ajudando a relaxar as paredes dos vasos sanguíneos</li>
              <li><strong>Função muscular</strong> — regula contração e relaxamento muscular, incluindo o coração</li>
              <li><strong>Equilíbrio hídrico</strong> — controla a distribuição de fluidos entre células e espaço extracelular</li>
              <li><strong>Saúde óssea</strong> — dieta rica em potássio reduz a excreção urinária de cálcio</li>
              <li><strong>Função renal</strong> — ajuda na excreção de sódio pelos rins</li>
            </ul>
            <h2>Sintomas de deficiência (hipocalemia)</h2>
            <p>Deficiência leve: fraqueza muscular, cãibras, fadiga, constipação. Deficiência moderada: palpitações, arritmia, formigamentos. Deficiência grave (hipocalemia real): emergência médica com risco cardíaco. A deficiência grave geralmente tem causa clínica — uso de diuréticos, vômitos intensos, diarreia prolongada.</p>
            <h2>Alimentos ricos em potássio</h2>
            <ul>
              <li>Banana (358mg/100g) — famosa, mas não é a mais rica</li>
              <li>Batata com casca (535mg/100g)</li>
              <li>Abacate (485mg/100g)</li>
              <li>Espinafre cozido (466mg/100g)</li>
              <li>Feijão cozido (360mg/100g)</li>
              <li>Beterraba (279mg/100g)</li>
              <li>Laranja (181mg/100g)</li>
            </ul>
            <h2>A recomendação diária</h2>
            <p>A ingestão adequada é de 3.500-4.700mg/dia para adultos. A dieta ocidental média fornece cerca de 2.500mg — bem abaixo do ideal. Uma dieta com vegetais, frutas e leguminosas diariamente costuma resolver sem necessidade de suplementação.</p>
            <h2>Devo suplementar?</h2>
            <p>Suplementação de potássio deve ser feita apenas com orientação médica — excesso de potássio (hipercalemia) também é perigoso, especialmente para quem tem problemas renais. Priorize fontes alimentares.</p>
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
