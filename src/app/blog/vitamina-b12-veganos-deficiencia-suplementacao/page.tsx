import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Vitamina B12 para Veganos: Deficiência, Exames e Suplementação | Nutry.life",
  description: "Entenda por que veganos têm maior risco de deficiência de vitamina B12, quais exames ajudam na avaliação e como funciona a suplementação segura.",
  keywords: "vitamina B12 veganos, deficiência de B12, suplementação B12, exame vitamina B12, cobalamina",
  openGraph: {
    title: "Vitamina B12 para Veganos: Deficiência, Exames e Suplementação | Nutry.life",
    description: "Guia baseado em evidências sobre fontes, exames e suplementação de vitamina B12 em dietas veganas.",
    url: "https://nutry.life/blog/vitamina-b12-veganos-deficiencia-suplementacao"
  },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>29 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>8 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Vitamina B12 para veganos: deficiência, exames e suplementação</h1>
          <p className={styles.postExcerpt}>A vitamina B12 merece atenção especial em dietas veganas porque fontes vegetais comuns não fornecem quantidades confiáveis. Entenda o mecanismo, os sinais de alerta e por que a estratégia preventiva é melhor do que esperar sintomas.</p>
          <div className={styles.postContent}>
            <p>A vitamina B12, também chamada cobalamina, participa da formação das células do sangue, da síntese de DNA e do funcionamento do sistema nervoso. O organismo consegue armazená-la por bastante tempo; por isso, uma pessoa pode retirar alimentos de origem animal e continuar sem sintomas por meses ou anos. Essa reserva não significa que a dieta esteja fornecendo B12 suficiente.</p>

            <h2>Por que veganos têm maior risco de deficiência?</h2>
            <p>A B12 é produzida por microrganismos e aparece naturalmente em quantidades relevantes principalmente em alimentos de origem animal. Algas, cogumelos, levedura nutricional não fortificada e alimentos fermentados caseiros não devem ser tratados como fontes confiáveis: a quantidade pode ser baixa, variável ou formada por compostos semelhantes que não exercem a mesma função no corpo.</p>
            <p>Para quem segue alimentação vegana, as fontes consistentes são alimentos fortificados e suplementos. Vegetarianos que consomem poucos ovos e laticínios também podem ter ingestão insuficiente. Além da alimentação, idade, cirurgia gastrointestinal, doença celíaca, doença de Crohn e uso prolongado de alguns medicamentos podem reduzir a absorção.</p>

            <h2>Quais sinais podem aparecer?</h2>
            <ul>
              <li><strong>Cansaço e fraqueza:</strong> podem acompanhar alterações na produção das células sanguíneas.</li>
              <li><strong>Formigamento ou dormência:</strong> alterações neurológicas precisam de avaliação rápida.</li>
              <li><strong>Dificuldade de concentração:</strong> é inespecífica e não confirma deficiência sozinha.</li>
              <li><strong>Língua dolorida ou pálida:</strong> pode aparecer junto a alterações hematológicas.</li>
              <li><strong>Falta de equilíbrio:</strong> em casos mais importantes, o sistema nervoso pode ser afetado.</li>
            </ul>
            <p>Os sintomas podem ocorrer mesmo sem anemia. Também são comuns a muitas outras condições, portanto não é seguro diagnosticar deficiência apenas por uma lista encontrada na internet.</p>

            <h2>Quais exames avaliam a vitamina B12?</h2>
            <p>A dosagem sérica de B12 é frequentemente o primeiro exame, mas valores limítrofes nem sempre esclarecem o estado funcional. Dependendo do caso, o profissional pode relacionar o resultado com hemograma, ácido metilmalônico e homocisteína. O conjunto ajuda a diferenciar baixa ingestão, alteração de absorção e outras causas.</p>
            <p>Folate em quantidade adequada pode corrigir parte da alteração no sangue sem resolver o dano neurológico provocado pela falta de B12. Por isso, suplementar apenas ácido fólico diante de anemia sem investigar a causa não é uma boa estratégia.</p>

            <h2>Alimento fortificado ou suplemento?</h2>
            <p>Os dois podem funcionar quando entregam B12 suficiente com regularidade. Alimentos fortificados exigem leitura do rótulo e consumo consistente. Suplementos são mais previsíveis, mas apresentação, frequência e quantidade variam porque a absorção muda de acordo com a dose e com características individuais.</p>
            <p>Não existe uma dose única ideal para todo mundo. Quem já apresenta deficiência, está grávida, amamenta, usa medicamentos que interferem na absorção ou possui doença gastrointestinal precisa de avaliação específica. Doses de manutenção para prevenção não devem ser confundidas com esquemas de tratamento.</p>

            <h2>Mitos comuns sobre B12</h2>
            <ul>
              <li><strong>“Spirulina resolve”:</strong> ela não é considerada fonte confiável de B12 ativa.</li>
              <li><strong>“Tenho reserva, então não preciso me preocupar”:</strong> a reserva apenas adia a manifestação.</li>
              <li><strong>“Se o hemograma está normal, a B12 está boa”:</strong> alterações neurológicas podem existir sem anemia.</li>
              <li><strong>“Quanto mais, melhor”:</strong> a escolha deve considerar necessidade, absorção e acompanhamento.</li>
            </ul>

            <h2>Como aplicar no dia a dia</h2>
            <p>Se a alimentação é vegana, estabeleça uma fonte regular e confiável de B12 desde o início, guarde os rótulos dos produtos fortificados que usa e leve essa informação às consultas. Não espere o aparecimento de sintomas para conversar sobre exames. Gestantes, lactantes, crianças e adolescentes necessitam de planejamento especialmente cuidadoso, pois as necessidades e consequências da deficiência são diferentes em cada fase.</p>

            <h2>Conclusão</h2>
            <p>Uma dieta vegana pode ser nutricionalmente adequada, mas a vitamina B12 não deve ficar ao acaso. Fontes fortificadas ou suplementação bem orientada, associadas a acompanhamento quando indicado, são a forma mais segura de prevenir uma deficiência silenciosa.</p>
          </div>
        </article>
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Nutry.life — Informação nutricional baseada em evidências</p>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem", opacity: 0.6 }}>
          Este conteúdo é informativo e não substitui orientação de nutricionista.
        </p>
      </footer>
    </>
  );
}
