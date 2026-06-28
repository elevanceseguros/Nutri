import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Creatina: Para Que Serve, Quem Pode Tomar e Como Usar | Nutry.life",
  description: "Creatina é o suplemento mais estudado do mundo. Entenda para que serve, quem realmente se beneficia, como usar e quais mitos existem ao redor dela.",
  keywords: "creatina para que serve, creatina como tomar, creatina beneficios, creatina monohidratada, creatina engorda",
  openGraph: { title: "Creatina: Para Que Serve, Quem Pode Tomar e Como Usar | Nutry.life", description: "O suplemento mais estudado do mundo explicado de forma clara.", url: "https://nutry.life/blog/creatina-para-que-serve" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>24 de junho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Creatina: Para Que Serve, Quem Pode Tomar e Como Usar</h1>
          <p className={styles.postExcerpt}>A creatina é o suplemento mais estudado da ciência do esporte — e também um dos mais mal compreendidos. Saiba o que ela faz de verdade, quem se beneficia e como usar corretamente.</p>
          <div className={styles.postContent}>
            <p>Poucas substâncias têm mais evidências científicas do que a creatina. Décadas de pesquisa mostram que ela funciona — mas não da forma que muita gente pensa. Não é para "ficar enorme" nem é prejudicial ao rim em pessoas saudáveis. É uma molécula que o próprio corpo produz e que pode ser suplementada com segurança.</p>
            <h2>O que é a creatina?</h2>
            <p>A creatina é um composto produzido naturalmente pelo fígado, rins e pâncreas a partir dos aminoácidos glicina, arginina e metionina. Ela fica armazenada nos músculos na forma de fosfocreatina e serve como reserva rápida de energia para esforços de alta intensidade e curta duração.</p>
            <p>Quando você faz um sprint, levanta um peso ou faz qualquer esforço explosivo, é a fosfocreatina que fornece energia nos primeiros segundos. A suplementação aumenta esse estoque, permitindo mais repetições, mais força e melhor recuperação entre séries.</p>
            <h2>Quem realmente se beneficia?</h2>
            <p>A creatina é mais eficaz para quem pratica <strong>atividades de alta intensidade e curta duração</strong>: musculação, crossfit, sprints, esportes de potência. Para atividades aeróbicas longas como corrida de fundo ou ciclismo, o benefício é menor — mas não inexistente.</p>
            <p>Vegetarianos e veganos tendem a se beneficiar mais, pois consomem menos creatina pela dieta (ela está presente principalmente em carnes vermelhas e peixe).</p>
            <h2>Creatina engorda?</h2>
            <p>A creatina não adiciona gordura — mas pode aumentar o peso corporal em 1 a 2kg nos primeiros dias de uso. Esse aumento é de <strong>água intramuscular</strong>, não gordura. As células musculares retêm mais água junto com a creatina, o que inclusive contribui para o volume muscular.</p>
            <h2>Como usar?</h2>
            <p>A forma mais estudada é a <strong>creatina monohidratada</strong>. Existem versões mais caras (creatina HCL, etil éster, buffered), mas nenhuma demonstrou superioridade nas pesquisas.</p>
            <p>Dose: <strong>3 a 5g por dia</strong>, todos os dias — inclusive nos dias sem treino. Não precisa de fase de carga. Pode tomar em qualquer horário, com ou sem comida. A consistência é o que importa.</p>
            <h2>É segura?</h2>
            <p>Sim, para pessoas saudáveis. Pesquisas de longo prazo (até 5 anos de uso contínuo) não mostraram danos renais em indivíduos sem problemas pré-existentes. Se você tem doença renal, consulte um médico antes de usar.</p>
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
