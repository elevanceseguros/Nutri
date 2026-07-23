import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Hidratação: Os 2 Litros de Água Por Dia São Obrigatórios? | Nutry.life",
  description: "2 litros de água por dia é um dos conselhos mais repetidos. Mas de onde veio esse número? É o mesmo para todo mundo? E café e chá contam?",
  openGraph: { title: "Hidratação: Os 2 Litros de Água Por Dia São Obrigatórios? | Nutry.life", description: "2 litros de água por dia é um dos conselhos mais repetidos. Mas de onde veio esse número? É o mesmo para todo mundo? E café e chá contam?", url: "https://nutry.life/blog/hidratacao-quantos-litros-de-agua-por-dia" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>21 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Hidratação: Os 2 Litros de Água Por Dia São Obrigatórios?</h1>
          <p className={styles.postExcerpt}>2 litros de água por dia é um dos conselhos mais repetidos. Mas de onde veio esse número? É o mesmo para todo mundo? E café e chá contam?</p>
          <div className={styles.postContent}>
            <p>Beber 2 litros de água por dia é provavelmente o conselho de saúde mais repetido na história. Está em cartazes, aplicativos, receituários médicos e programas de emagrecimento. Mas de onde veio esse número — e ele realmente se aplica a todo mundo?</p>
            <h2>De onde veio o número 2 litros?</h2>
            <p>A recomendação original do Food and Nutrition Board americano de 1945 dizia que adultos precisam de cerca de 2,5 litros de água por dia — mas incluía os líquidos de todas as fontes, incluindo alimentos. Alguém ao longo do caminho esqueceu essa parte e o número virou "2 litros de água pura".</p>
            <h2>A necessidade real varia muito</h2>
            <p>A necessidade de hidratação depende de: peso corporal, nível de atividade física, temperatura ambiente, altitude, tipo de alimentação (dieta rica em frutas e vegetais fornece até 20% da hidratação diária), e condições de saúde. Uma pessoa sedentária de 60kg em dia frio precisam de muito menos que um atleta de 90kg treinando sob calor.</p>
            <h2>Café e chá contam?</h2>
            <p>Sim. O efeito diurético da cafeína em doses moderadas (até 400mg/dia — cerca de 4 xícaras de café) não elimina mais líquido do que você ingere. Café e chá contam para a hidratação total. Refrigerantes e sucos também hidratam, mas vêm com açúcar que não é desejável em grandes quantidades.</p>
            <h2>Como saber se está hidratado?</h2>
            <p>O indicador mais confiável é a cor da urina. Amarelo claro (limonada) = bem hidratado. Amarelo escuro = precisa beber mais. Incolor = pode estar exagerando. Sede constante = sinal de desidratação que já está atrasada.</p>
            <h2>Beber mais água emagrece?</h2>
            <p>Beber água antes das refeições pode reduzir a ingestão calórica — estudos mostram redução de 13% em uma refeição. Mas é um efeito de saciedade, não metabólico. Água não "queima gordura" — mas uma dieta com boa hidratação funciona melhor.</p>
            <h2>Conclusão</h2>
            <p>2 litros é uma referência razoável para adultos sedentários de peso médio em clima temperado. Mas é uma média, não uma regra universal. Preste atenção na cor da urina — é o melhor indicador individual de hidratação adequada.</p>
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
