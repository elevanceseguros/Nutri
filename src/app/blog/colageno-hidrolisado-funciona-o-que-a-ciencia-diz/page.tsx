import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Colágeno Hidrolisado Funciona? O Que a Ciência Realmente Diz | Nutry.life",
  description: "Colágeno hidrolisado é um dos suplementos mais vendidos para pele, articulações e cabelo. Mas as evidências sustentam o hype? A resposta é mais nuançada do que sim ou não.",
  openGraph: { title: "Colágeno Hidrolisado Funciona? O Que a Ciência Realmente Diz | Nutry.life", description: "Colágeno hidrolisado é um dos suplementos mais vendidos para pele, articulações e cabelo. Mas as evidências sustentam o hype? A resposta é mais nuançada do que sim ou não.", url: "https://nutry.life/blog/colageno-hidrolisado-funciona-o-que-a-ciencia-diz" },
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
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>25 de julho de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>6 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Colágeno Hidrolisado Funciona? O Que a Ciência Realmente Diz</h1>
          <p className={styles.postExcerpt}>Colágeno hidrolisado é um dos suplementos mais vendidos para pele, articulações e cabelo. Mas as evidências sustentam o hype? A resposta é mais nuançada do que sim ou não.</p>
          <div className={styles.postContent}>
            <p>Colágeno hidrolisado virou fenômeno de vendas — e é fácil entender por quê. Promete pele mais jovem, articulações mais saudáveis e cabelo mais forte. Mas o que as pesquisas mostram quando testam essas afirmações de forma controlada?</p>
            <h2>O que é colágeno hidrolisado?</h2>
            <p>Colágeno é a proteína mais abundante no corpo — presente na pele, cartilagens, tendões, ossos e vasos. O colágeno hidrolisado é colágeno que passou por hidrólise (quebrado em peptídeos menores), o que facilita a absorção pelo intestino.</p>
            <h2>O problema: será que chega até a pele?</h2>
            <p>A crítica clássica ao colágeno oral é que ele seria digerido como qualquer proteína — quebrado em aminoácidos e redistribuído pelo corpo, sem necessariamente ir para a pele ou cartilagem. Pesquisas mais recentes mostram que peptídeos específicos do colágeno são absorvidos e detectados na corrente sanguínea — e alguns chegam a tecidos alvo.</p>
            <h2>O que as pesquisas mostram</h2>
            <p><strong>Pele:</strong> estudos de 8-12 semanas com 2,5-10g/dia de colágeno hidrolisado mostram melhora modesta na elasticidade e hidratação da pele, especialmente em mulheres acima de 35 anos. Os efeitos são reais, mas não dramáticos.</p>
            <p><strong>Articulações:</strong> estudos em atletas e pessoas com osteoartrite mostram redução de dor e melhora da função com 10g/dia por 24 semanas. A evidência é mais consistente aqui do que para pele.</p>
            <p><strong>Cabelo e unhas:</strong> evidência mais limitada — alguns estudos pequenos mostram crescimento mais rápido e menos quebra, mas os dados são insuficientes para conclusão firme.</p>
            <h2>Dose e tipo</h2>
            <p>A dose estudada com resultados é de <strong>5-10g/dia</strong>. Tipo I para pele e cabelo, tipo II para articulações (presente no frango). Vitamina C junto potencializa a síntese endógena de colágeno — muitos produtos já incluem.</p>
            <h2>Vale a pena?</h2>
            <p>Para articulações com dor ou desconforto: evidência razoável, vale tentar por 12-24 semanas. Para pele e estética: melhoras modestas e lentas. Para cabelo: dados insuficientes. O colágeno não é milagre — mas não é placebo. É um suplemento com benefício real e limitado.</p>
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
