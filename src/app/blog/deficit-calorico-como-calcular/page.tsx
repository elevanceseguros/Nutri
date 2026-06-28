import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Déficit Calórico: Como Calcular o Seu e Emagrecer Sem Passar Fome | Nutry.life",
  description: "Déficit calórico é a base do emagrecimento. Saiba como calcular o seu, qual déficit é seguro e como aplicar sem passar fome nem perder massa muscular.",
  keywords: "deficit calorico como calcular, deficit calorico emagrecer, quantas calorias para emagrecer, TDEE calculo, emagrecimento saudavel",
  openGraph: { title: "Déficit Calórico: Como Calcular e Emagrecer Sem Passar Fome | Nutry.life", description: "A base do emagrecimento explicada de forma prática.", url: "https://nutry.life/blog/deficit-calorico-como-calcular" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>27 de junho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>7 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Déficit Calórico: Como Calcular o Seu e Emagrecer Sem Passar Fome</h1>
          <p className={styles.postExcerpt}>Todo emagrecimento depende de um déficit calórico. Mas quanto déficit é seguro? E como fazer isso sem passar fome ou perder músculo?</p>
          <div className={styles.postContent}>
            <p>Independente da dieta que você siga — low carb, jejum intermitente, mediterrânea — o que determina se você vai perder peso é o balanço calórico. Se você consome menos calorias do que gasta, você emagrece. Isso é o déficit calórico.</p>
            <h2>O que é TDEE?</h2>
            <p>TDEE (Total Daily Energy Expenditure) é o total de calorias que você gasta em um dia, considerando metabolismo basal + atividade física. É o seu ponto de equilíbrio: coma exatamente esse valor e seu peso fica estável.</p>
            <h2>Como calcular seu TDEE (fórmula simplificada)</h2>
            <p>Passo 1 — calcule seu metabolismo basal (TMB):</p>
            <ul>
              <li><strong>Homens:</strong> 88,4 + (13,4 × peso em kg) + (4,8 × altura em cm) − (5,7 × idade)</li>
              <li><strong>Mulheres:</strong> 447,6 + (9,2 × peso em kg) + (3,1 × altura em cm) − (4,3 × idade)</li>
            </ul>
            <p>Passo 2 — multiplique pelo fator de atividade:</p>
            <ul>
              <li>Sedentário (pouco ou nenhum exercício): × 1,2</li>
              <li>Levemente ativo (1-3x/semana): × 1,375</li>
              <li>Moderadamente ativo (3-5x/semana): × 1,55</li>
              <li>Muito ativo (6-7x/semana): × 1,725</li>
            </ul>
            <p>Exemplo: mulher de 30 anos, 70kg, 165cm, moderadamente ativa → TMB ≈ 1.520 × 1,55 ≈ <strong>2.356 kcal/dia</strong></p>
            <h2>Qual déficit é seguro?</h2>
            <p>Um déficit de <strong>300 a 500 kcal/dia</strong> é considerado seguro e sustentável — resulta em perda de 0,3 a 0,5kg por semana. Déficits maiores (acima de 700-1000 kcal) aumentam o risco de perda muscular, fadiga e efeito rebote.</p>
            <h2>Como não passar fome no déficit?</h2>
            <p>A chave é priorizar alimentos com alta saciedade e baixa caloria: proteínas magras, vegetais, frutas com fibras e leguminosas. Proteína é especialmente importante — ela saicia mais, preserva massa muscular e tem maior efeito térmico (o corpo gasta mais calorias para digeri-la).</p>
            <h2>O déficit precisa ser todo dia?</h2>
            <p>Não. O que importa é o balanço semanal. Você pode comer um pouco mais nos fins de semana e compensar durante a semana — desde que o déficit médio se mantenha. Flexibilidade ajuda na adesão a longo prazo.</p>
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
