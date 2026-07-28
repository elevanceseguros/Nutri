import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Melatonina: Dose Correta, Quando Tomar e Se É Segura Para Uso Diário | Nutry.life",
  description: "Melatonina virou o suplemento para dormir mais popular. Mas a dose que a maioria usa é muito maior do que a necessária — e isso pode atrapalhar em vez de ajudar.",
  openGraph: { title: "Melatonina: Dose Correta, Quando Tomar e Se É Segura Para Uso Diário | Nutry.life", description: "Melatonina virou o suplemento para dormir mais popular. Mas a dose que a maioria usa é muito maior do que a necessária — e isso pode atrapalhar em vez de ajudar.", url: "https://nutry.life/blog/melatonina-dose-quando-tomar-e-e-segura" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>28 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Melatonina: Dose Correta, Quando Tomar e Se É Segura Para Uso Diário</h1>
          <p className={styles.postExcerpt}>Melatonina virou o suplemento para dormir mais popular. Mas a dose que a maioria usa é muito maior do que a necessária — e isso pode atrapalhar em vez de ajudar.</p>
          <div className={styles.postContent}>
            <p>Melatonina passou de substância regulada a suplemento de venda livre no Brasil em 2021. Desde então, virou o recurso mais popular para quem tem dificuldade para dormir. Mas a forma como a maioria usa não reflete o que as pesquisas recomendam.</p>
            <h2>O que é melatonina?</h2>
            <p>Melatonina é um hormônio produzido pela glândula pineal em resposta à escuridão. Sinaliza ao corpo que é hora de dormir — mas não induz o sono diretamente como um sedativo. É um marcador de tempo biológico, não um hipnótico.</p>
            <h2>O problema das doses altas</h2>
            <p>A maioria dos suplementos disponíveis no Brasil tem doses de 1mg, 2mg, 5mg ou até 10mg. As pesquisas mostram que doses eficazes para melhorar o sono são muito menores. Estudos com 0,1mg a 0,5mg mostram resultados equivalentes ou superiores às doses altas para a maioria das pessoas.</p>
            <p>Doses altas podem causar efeitos contrários: sonolência no dia seguinte, vivacidade de sonhos, dores de cabeça, e até piora do ritmo circadiano com uso prolongado. Mais não é melhor.</p>
            <h2>Quando melatonina funciona</h2>
            <p>A melatonina é mais eficaz para:</p>
            <ul>
              <li><strong>Jet lag</strong> — tomar melatonina no horário de dormir do destino ajuda a resetar o relógio biológico</li>
              <li><strong>Trabalho em turnos</strong> — ajuda na adaptação a horários irregulares</li>
              <li><strong>Atraso de fase</strong> — pessoas que naturalmente dormem e acordam mais tarde</li>
              <li><strong>Crianças com autismo</strong> — evidência consistente para melhorar latência do sono</li>
            </ul>
            <h2>Quando melatonina não é a solução</h2>
            <p>Para insônia crônica — a melatonina tem efeito limitado. A terapia cognitivo-comportamental para insônia (TCC-I) é o tratamento mais eficaz para insônia crônica. Melatonina não trata a causa da insônia — apenas pode ajudar na sinalização de sono.</p>
            <h2>Como tomar corretamente</h2>
            <p>Dose: 0,5mg a 1mg é suficiente para a maioria. Experimente frações de comprimido se a menor dose disponível for 1mg. Horário: 30-60 minutos antes de dormir, sempre no mesmo horário. Ambiente: escureça o ambiente — luz artificial inibe a melatonina endógena, tornando o suplemento menos eficaz.</p>
            <h2>É segura para uso diário?</h2>
            <p>Em adultos, o uso de curto a médio prazo (semanas a alguns meses) parece seguro nas doses baixas recomendadas. Uso crônico de longo prazo em doses altas não tem estudos de segurança suficientes — use pelo menor período necessário. Em crianças e grávidas, sempre com orientação médica.</p>
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
