import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Carboidrato à Noite Engorda? O Que a Ciência Diz | Nutry.life",
  description: "Comer carboidrato à noite é vilão para quem quer emagrecer? A ciência tem uma resposta mais nuançada do que o mito popular. Entenda o que realmente importa.",
  keywords: "carboidrato a noite engorda, comer a noite emagrecer, carboidrato noite metabolismo, dieta sem carboidrato noite, jantar carboidrato",
  openGraph: { title: "Carboidrato à Noite Engorda? O Que a Ciência Diz | Nutry.life", description: "O mito do carboidrato noturno e o que realmente importa para emagrecer.", url: "https://nutry.life/blog/carboidrato-a-noite-engorda" },
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
            <span className={styles.postCategory}>Emagrecimento</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>12 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>5 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Carboidrato à Noite Engorda? O Que a Ciência Diz</h1>
          <p className={styles.postExcerpt}>Cortar carboidrato à noite é um dos conselhos mais populares para emagrecer. Mas quando os estudos testam isso de forma controlada, o resultado surpreende.</p>
          <div className={styles.postContent}>

            <p>Poucos mitos alimentares são tão resistentes quanto o do carboidrato à noite. A lógica parece intuitiva: à noite o metabolismo fica mais lento, você não vai gastar energia, então o carboidrato vai direto para a gordura. O problema é que essa lógica não sobrevive ao escrutínio científico.</p>

            <h2>O que a ciência mostra sobre horário e emagrecimento</h2>
            <p>Estudos de cronobiologia mostraram que o metabolismo tem ritmos circadianos — o corpo funciona diferente de manhã e à noite. A sensibilidade à insulina é um pouco maior pela manhã, o que significa que o mesmo carboidrato gera uma resposta glicêmica ligeiramente menor cedo do que tarde.</p>
            <p>Mas a magnitude dessa diferença no mundo real é <strong>pequena demais para importar</strong> quando o total calórico do dia está controlado. Um estudo israelense clássico (Sofer et al., 2011) mostrou que participantes que concentraram a maioria dos carboidratos no jantar perderam <em>mais</em> peso e gordura do que o grupo que distribuiu carboidratos ao longo do dia — possivelmente por maior saciedade noturna e menor ingestão total.</p>

            <h2>O que realmente engorda</h2>
            <p>O que determina ganho de peso é o <strong>balanço calórico total</strong> — quanto você come vs quanto gasta, ao longo do dia e da semana. O horário do carboidrato tem um efeito marginal que, na prática, é irrelevante para a maioria das pessoas.</p>
            <p>O que acontece frequentemente é que as pessoas comem mais carboidrato à noite <em>porque comem mais calorias no geral à noite</em> — a correlação é real, mas a causa não é o horário, é o excesso calórico.</p>

            <h2>Quando evitar carboidrato à noite faz sentido</h2>
            <p>Para pessoas com <strong>diabetes ou resistência à insulina</strong>, controlar carboidratos à noite pode ajudar no controle glicêmico — a sensibilidade à insulina noturna é menor nesse grupo, tornando o impacto glicêmico mais relevante.</p>
            <p>Para quem tem dificuldade de controlar porções à noite — reduzir carboidratos no jantar pode ser uma estratégia comportamental eficaz para reduzir o total calórico, não porque o horário importa metabolicamente, mas porque limita as opções.</p>

            <h2>O carboidrato à noite pode até ajudar</h2>
            <p>Carboidratos estimulam a liberação de serotonina e melatonina — neurotransmissores associados ao relaxamento e sono. Uma porção moderada de carboidrato complexo (arroz, batata, aveia) à noite pode melhorar a qualidade do sono para algumas pessoas — o que por sua vez melhora o controle hormonal do apetite no dia seguinte.</p>

            <h2>Conclusão prática</h2>
            <p>Não, carboidrato à noite não engorda por ser à noite. O que engorda é o excesso calórico total. Se você está em déficit calórico e come carboidrato no jantar, vai emagrecer. Se está em superávit e evita carboidrato à noite, vai engordar. O horário é secundário — o total do dia é o que manda.</p>
            <p>Se cortar carboidrato à noite te ajuda a comer menos no geral, faça isso. Mas não porque o corpo metaboliza diferente — porque funciona para você como estratégia comportamental.</p>

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
