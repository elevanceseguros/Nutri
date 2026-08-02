import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Açaí é Saudável? Polpa Pura, Xarope e Como Escolher | Nutry.life",
  description: "Açaí puro e açaí com xarope são iguais? Compare ingredientes, fibras, açúcares adicionados e acompanhamentos para fazer uma escolha consciente.",
  keywords: "açaí é saudável, açaí puro, açaí com xarope, açaí tem açúcar, como escolher açaí",
  openGraph: {
    title: "Açaí é Saudável? Polpa Pura, Xarope e Como Escolher | Nutry.life",
    description: "Entenda por que a composição do açaí muda tanto e como comparar rótulos e acompanhamentos.",
    url: "https://nutry.life/blog/acai-e-saudavel-polpa-pura-xarope"
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
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
          <div className={styles.postMeta}>
            <span className={styles.postCategory}>Alimentos</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>02 de agosto de 2026</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>8 min de leitura</span>
          </div>
          <h1 className={styles.postTitle}>Açaí é saudável? Polpa pura, xarope e como escolher</h1>
          <p className={styles.postExcerpt}>A resposta depende menos do nome “açaí” e mais da lista de ingredientes. Polpa pura, creme adoçado e tigela cheia de complementos podem ter perfis muito diferentes.</p>

          <div className={styles.articleCtaTop} data-cta="nutry-plan-top">
            <div className={styles.articleCtaIcon}>🤖</div>
            <div>
              <strong>Leve escolhas práticas para a sua rotina</strong>
              <p>A Nutry.life cria sugestões de refeições considerando preferências, rotina e objetivo informado.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano grátis →</Link>
            </div>
          </div>

          <div className={styles.postContent}>
            <p>O açaí amazônico tradicional é uma polpa de fruta com água, fibras e lipídios naturais. Já muitos produtos vendidos como “açaí na tigela” levam xarope de guaraná, glucose, açúcar ou outras frutas. Nenhuma dessas versões precisa ser tratada como proibida, mas elas não são nutricionalmente equivalentes.</p>
            <p>A melhor comparação começa pelo produto real: ingredientes, porção consumida e acompanhamentos. Expressões como “natural”, “energético” ou “com fruta” não substituem a leitura do rótulo.</p>

            <h2>O que existe na polpa pura?</h2>
            <p>A composição varia com origem, espécie e processamento. Dados da <a href="https://www.tbca.net.br/" target="_blank" rel="noopener noreferrer">Tabela Brasileira de Composição de Alimentos (TBCA)</a> mostram que polpas de açaí possuem água, fibras e gorduras, com valores que mudam entre amostras. Por isso, não existe um único número que represente todo açaí.</p>
            <p>Essa variação explica por que copiar a informação nutricional de uma marca para outra pode levar a erro. O rótulo do produto comprado é a fonte mais útil para comparar porções equivalentes.</p>

            <h2>Polpa pura e açaí com xarope: qual é a diferença?</h2>
            <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
              <table>
                <thead><tr><th>Característica</th><th>Polpa pura</th><th>Produto com xarope</th></tr></thead>
                <tbody>
                  <tr><td>Ingredientes</td><td>Açaí e, conforme o produto, água</td><td>Pode incluir açúcar, glucose, guaraná e outras frutas</td></tr>
                  <tr><td>Sabor</td><td>Terroso e pouco doce</td><td>Mais doce e uniforme</td></tr>
                  <tr><td>Açúcares adicionados</td><td>Não são necessários</td><td>Podem estar presentes em quantidade relevante</td></tr>
                  <tr><td>Comparação correta</td><td colSpan={2}>Leia ingredientes e tabela por 100 g, além da porção indicada</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Açaí tem muito açúcar?</h2>
            <p>A fruta não é sinônimo de produto açucarado. O açúcar pode vir principalmente da formulação comercial e dos complementos. Na lista de ingredientes, os itens aparecem em ordem decrescente de quantidade: açúcar, xarope de guaraná ou glucose próximos do início indicam participação relevante na receita.</p>
            <p>A tabela nutricional brasileira também informa açúcares totais e adicionados. Pelas regras da <a href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem/rotulagem-nutricional" target="_blank" rel="noopener noreferrer">Anvisa</a>, alimentos sólidos ou semissólidos com 15 g ou mais de açúcares adicionados por 100 g recebem a lupa frontal de alto conteúdo. A ausência da lupa, porém, não torna a porção automaticamente adequada para todas as pessoas.</p>

            <h2>E os antioxidantes?</h2>
            <p>O açaí contém compostos fenólicos, incluindo antocianinas, mas encontrar antioxidantes em um alimento não significa prevenir ou tratar doenças sozinho. Benefícios de saúde dependem do padrão alimentar completo, e alegações específicas exigem evidência clínica compatível.</p>
            <p>Processamento, armazenamento e mistura com outros ingredientes podem alterar a concentração desses compostos. Portanto, “rico em antioxidantes” não compensa automaticamente uma formulação com muito açúcar adicionado.</p>

            <h2>Como montar uma tigela mais equilibrada?</h2>
            <ul>
              <li><strong>Escolha a base conscientemente:</strong> polpa pura oferece maior controle do sabor e dos ingredientes; a versão adoçada pode entrar, mas deve ser reconhecida como tal.</li>
              <li><strong>Use fruta para sabor:</strong> banana, morango, manga ou outra fruta podem trazer doçura e textura.</li>
              <li><strong>Inclua uma fonte de proteína quando fizer sentido:</strong> iogurte natural ou uma alternativa adequada à rotina pode tornar a refeição mais completa.</li>
              <li><strong>Observe os complementos:</strong> leite condensado, cremes, xaropes, granolas adoçadas e confeitos se acumulam rapidamente quando usados juntos.</li>
              <li><strong>Pense no contexto:</strong> lanche, sobremesa e refeição pós-treino têm necessidades diferentes; não há uma montagem universal.</li>
            </ul>

            <h2>Granola, leite em pó e pasta de amendoim são ruins?</h2>
            <p>Não isoladamente. O problema prático costuma ser somar vários complementos densos sem perceber a quantidade total. Granolas variam muito em açúcar; leite em pó acrescenta nutrientes e energia; pasta de amendoim oferece gordura e proteína, mas também é concentrada. Escolher um ou dois complementos de propósito costuma ser mais claro que adicionar todos por hábito.</p>

            <h2>Açaí antes ou depois do treino?</h2>
            <p>Pode ser consumido em diferentes horários. O melhor encaixe depende da tolerância individual, do intervalo até o exercício e do restante da refeição. Antes de treinar, grandes volumes ou muitos complementos gordurosos podem causar desconforto em algumas pessoas. Depois, combinar carboidratos e proteína pode ser prático, mas não existe uma janela estreita que torne o açaí obrigatório.</p>

            <h2>Checklist rápido no mercado ou na loja</h2>
            <ol>
              <li>Peça ou leia a lista de ingredientes da base.</li>
              <li>Compare a tabela nutricional por 100 g, não apenas porções diferentes.</li>
              <li>Procure a quantidade de açúcares adicionados e a lupa frontal.</li>
              <li>Confirme o tamanho real do copo ou da tigela.</li>
              <li>Escolha complementos pelo papel que terão na refeição.</li>
            </ol>

            <h2>Conclusão</h2>
            <p>Açaí pode fazer parte de uma alimentação variada. A polpa pura oferece fibras e gorduras naturais da fruta; produtos com xarope são formulações diferentes e podem concentrar açúcares adicionados. Em vez de classificar o alimento como “bom” ou “ruim”, compare o rótulo, a porção e o conjunto da tigela.</p>

            <h2>Leia também</h2>
            <ul>
              <li><Link href="/blog/como-ler-rotulo-de-alimentos">Como ler rótulo de alimentos: guia prático</Link></li>
              <li><Link href="/blog/cacau-vs-chocolate-qual-e-mais-saudavel">Cacau vs chocolate: entenda as diferenças</Link></li>
            </ul>
          </div>

          <div className={styles.premiumBanner} data-cta="nutry-plan-final">
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Quer transformar informação em refeições práticas?</h2>
              <p>Receba um plano alimentar personalizado com sugestões adaptadas à sua rotina e às preferências que você informar.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio personalizado</div>
              <div className={styles.premiumFeatureItem}>✅ Refeições práticas para o dia a dia</div>
              <div className={styles.premiumFeatureItem}>✅ Ajustado às suas preferências</div>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar grátis →</Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis para começar.</p>
          </div>

          <Link href="/blog" className={styles.backToBlogBottom}>← Voltar para todos os artigos</Link>
        </article>
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Nutry.life — Informação nutricional baseada em evidências</p>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem", opacity: 0.6 }}>Este conteúdo é informativo e não substitui orientação de nutricionista.</p>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Açaí é saudável? Polpa pura, xarope e como escolher",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-08-02",
        "description": "Guia baseado em evidências para comparar polpa pura, açaí com xarope e acompanhamentos.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/acai-e-saudavel-polpa-pura-xarope" }
      })}} />
    </>
  );
}
