import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Como Higienizar e Guardar Folhas: Alface, Rúcula e Couve | Nutry.life",
  description: "Aprenda a selecionar, lavar, sanitizar, secar e armazenar folhas com segurança e menos desperdício.",
  keywords: "como higienizar folhas, como lavar alface, guardar rúcula geladeira, conservar couve, sanitizar verduras",
  openGraph: {
    title: "Como Higienizar e Guardar Folhas: Alface, Rúcula e Couve | Nutry.life",
    description: "Um guia prático para organizar folhas sem depender de misturas caseiras ineficazes.",
    url: "https://nutry.life/blog/como-higienizar-guardar-folhas"
  },
};

export default function Post() {
  return (
    <>
      <header className={styles.header}><Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link></header>
      <main className={styles.postContainer}>
        <article className={styles.post}>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
          <div className={styles.postMeta}>
            <span className={styles.postCategory}>Cozinha Prática</span>
            <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>16 de agosto de 2026</span>
          </div>
          <h1 className={styles.postTitle}>Como Higienizar e Guardar Folhas: Alface, Rúcula e Couve</h1>
          <p className={styles.postExcerpt}>Folhas lavadas e ainda molhadas estragam mais rápido; folhas apenas enxaguadas não foram necessariamente sanitizadas. Separar limpeza, sanitização, secagem e armazenamento deixa o processo mais claro.</p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div><strong>Quer usar verduras com mais praticidade?</strong><span>Crie uma sugestão de plano alimentar com refeições adaptáveis às compras e à rotina da casa.</span></div>
            <Link href="/" className={styles.primaryButton}>Gerar meu plano</Link>
          </div>

          <div className={styles.postContent}>
            <p>Alface, rúcula, agrião, couve e outras folhas acumulam terra, insetos e microrganismos do ambiente. A higienização adequada começa retirando partes impróprias, passa pela lavagem folha a folha e, quando serão consumidas cruas, inclui um sanitizante regularizado e indicado para alimentos.</p>
            <p>Depois, a secagem e a refrigeração ajudam na conservação. Umidade acumulada favorece murchamento e deterioração; já deixar as folhas desprotegidas pode ressecá-las.</p>

            <h2>Limpar, lavar e sanitizar são etapas diferentes</h2>
            <div style={{ overflowX: "auto" }}>
              <table>
                <thead><tr><th>Etapa</th><th>Objetivo</th><th>Como fazer</th></tr></thead>
                <tbody>
                  <tr><td>Seleção</td><td>Retirar o que não está próprio</td><td>Descarte folhas mofadas, viscosas, muito danificadas ou com odor alterado</td></tr>
                  <tr><td>Lavagem</td><td>Remover terra e sujeira visível</td><td>Lave cada folha em água potável corrente</td></tr>
                  <tr><td>Sanitização</td><td>Reduzir microrganismos</td><td>Use produto regularizado e indicado para alimentos conforme o rótulo</td></tr>
                  <tr><td>Secagem</td><td>Retirar excesso de água</td><td>Use centrífuga limpa ou material descartável adequado</td></tr>
                  <tr><td>Armazenamento</td><td>Proteger e refrigerar</td><td>Guarde em recipiente limpo e fechado na geladeira</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Passo a passo para folhas consumidas cruas</h2>
            <ol>
              <li>Lave as mãos e higienize bancada, pia e utensílios.</li>
              <li>Separe as folhas e retire partes impróprias para consumo.</li>
              <li>Lave uma a uma em água potável corrente, retirando terra e insetos.</li>
              <li>Prepare a solução usando somente sanitizante regularizado pela Anvisa e indicado para alimentos.</li>
              <li>Siga exatamente a diluição e o tempo de contato informados pelo fabricante.</li>
              <li>Enxágue conforme a orientação do rótulo e da autoridade sanitária.</li>
              <li>Seque bem antes de guardar ou servir.</li>
            </ol>

            <h2>Qual produto usar para sanitizar?</h2>
            <p>O rótulo precisa declarar que o produto pode ser usado em alimentos. Nem toda água sanitária ou produto com cloro possui essa indicação. Concentrações variam, portanto não existe uma medida caseira única que sirva para todas as embalagens.</p>
            <p>A Anvisa orienta usar somente sanitizantes regularizados e seguir diluição e tempo de contato do fabricante. Misturar produtos aumenta o risco de reações e resíduos perigosos.</p>

            <h2>Vinagre sanitiza alface?</h2>
            <p>Não. A Anvisa alerta que vinagre não é sanitizante eficaz para eliminar os microrganismos de frutas e verduras. Ele pode alterar sabor ou participar de uma receita, mas não substitui um produto próprio para sanitização.</p>

            <div style={{ background: "#f0fdf4", borderLeft: "4px solid #22c55e", padding: "1.25rem", margin: "1.5rem 0", borderRadius: "0 0.75rem 0.75rem 0" }}>
              <strong>Água corrente continua necessária</strong>
              <p>O sanitizante não substitui a retirada prévia de terra e sujeira. Folhas devem ser lavadas individualmente antes da etapa de sanitização.</p>
            </div>

            <h2>Precisa higienizar antes de guardar?</h2>
            <p>É possível organizar de duas formas. Algumas pessoas guardam o maço sem lavar e higienizam perto do consumo; outras deixam folhas prontas para facilitar as refeições. Em ambos os casos, o alimento deve entrar na geladeira em boas condições, protegido e sem água acumulada.</p>
            <p>Se lavar antecipadamente, a secagem é especialmente importante. Guardar folhas encharcadas costuma acelerar perda de textura e aparecimento de áreas deterioradas.</p>

            <h2>Como secar sem machucar</h2>
            <ul>
              <li>Deixe escorrer em recipiente limpo.</li>
              <li>Use centrífuga própria para folhas sem comprimir demais.</li>
              <li>Se necessário, encoste suavemente papel descartável adequado.</li>
              <li>Evite pano de cozinha sujo ou usado para outras tarefas.</li>
              <li>Não guarde quando ainda houver água acumulada entre as folhas.</li>
            </ul>

            <h2>Como guardar na geladeira</h2>
            <p>Use recipiente limpo, fechado e com espaço suficiente para não esmagar. Material absorvente limpo pode ajudar a controlar a umidade, desde que seja trocado se ficar encharcado.</p>
            <p>O Ministério da Saúde orienta conservar folhas soltas em recipiente protegido e refrigerado. O maço inteiro pode durar mais que folhas já separadas, mas o resultado depende do frescor na compra, temperatura, umidade e manipulação.</p>

            <h2>Alface, rúcula e couve pedem o mesmo cuidado?</h2>
            <p>As etapas sanitárias são semelhantes, mas a resistência varia. Alface e rúcula são mais delicadas e amassam com facilidade. Couve costuma suportar melhor manuseio, porém folhas cortadas perdem qualidade mais rapidamente por terem maior área exposta.</p>
            <p>Ervas como salsinha, cebolinha, hortelã e manjericão também precisam de avaliação própria de umidade e temperatura. Nem todas reagem da mesma forma à geladeira.</p>

            <h2>Folhas murchas ainda podem ser usadas?</h2>
            <p>Murchar não é igual a apodrecer. Uma folha levemente murcha, sem limo, mofo, cheiro estranho ou alteração importante, pode servir em preparações cozidas após avaliação e higiene. Já sinais de deterioração indicam descarte.</p>
            <p>Não prove um alimento suspeito para decidir se está seguro. Quando houver dúvida relevante sobre conservação, descarte.</p>

            <h2>Pode congelar folhas?</h2>
            <p>Algumas folhas destinadas ao cozimento podem ser congeladas, mas a textura muda bastante. Couve, espinafre e ervas podem funcionar em refogados, sopas, molhos e recheios após o freezer. Alface e rúcula normalmente não mantêm textura adequada para salada.</p>
            <p>Prepare porções compatíveis com o uso e identifique a data. Para detalhes sobre organização do freezer, veja o guia de <Link href="/blog/como-congelar-frutas-textura-seguranca">como congelar frutas</Link>, lembrando que cada alimento responde de forma diferente.</p>

            <h2>Erros comuns</h2>
            <ul>
              <li>Colocar o maço inteiro em uma bacia sem lavar folha a folha.</li>
              <li>Usar vinagre como substituto da sanitização.</li>
              <li>Copiar uma diluição sem conferir a concentração no rótulo.</li>
              <li>Misturar sanitizante com detergente ou outros produtos.</li>
              <li>Guardar folhas encharcadas ou em recipiente sujo.</li>
              <li>Manter partes mofadas junto das folhas em boas condições.</li>
            </ul>

            <h2>Conclusão</h2>
            <p>Para preparar folhas com segurança, selecione, lave individualmente, use sanitizante indicado para alimentos conforme o rótulo, seque e refrigere em recipiente limpo. O processo pode ser feito perto do consumo ou antecipadamente, desde que a conservação seja bem controlada.</p>
            <p>Para reduzir desperdício desde a compra, veja também <Link href="/blog/como-organizar-feira-semanal">como organizar a feira semanal</Link>.</p>

            <h2>Fontes consultadas</h2>
            <ul>
              <li><a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/vai-preparar-a-ceia-se-liga-em-nossas-dicas-e-garanta-saude-no-prato" target="_blank" rel="noopener noreferrer">Anvisa — higienização de frutas e verduras</a>.</li>
              <li><a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2022/como-escolher-higienizar-e-armazenar-frutas-verduras-e-legumes" target="_blank" rel="noopener noreferrer">Ministério da Saúde — escolha, higiene e armazenamento de hortaliças</a>.</li>
              <li><a href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guiadebolso2018.pdf/@@download/file" target="_blank" rel="noopener noreferrer">Guia Alimentar para a População Brasileira — versão resumida</a>.</li>
            </ul>
          </div>

          <section className={styles.premiumBanner} data-cta="final">
            <div><span className={styles.premiumBadge}>Nutry.life</span><h2>Transforme folhas prontas em refeições possíveis</h2><p>Use o gerador para criar uma sugestão de plano alimentar adaptável às compras, preferências e rotina.</p></div>
            <Link href="/" className={styles.primaryButton}>Criar meu plano alimentar</Link>
          </section>

          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </article>
      </main>

      <footer className={styles.footer}><p><strong>Aviso:</strong> este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou autoridade sanitária. Cuidados podem variar conforme alimento, produto utilizado, saúde e condições de armazenamento. Siga sempre o rótulo do sanitizante e, em caso de dúvida específica, procure orientação profissional.</p></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"Como Higienizar e Guardar Folhas: Alface, Rúcula e Couve",
        description:"Guia prático para selecionar, lavar, sanitizar, secar e armazenar verduras folhosas.",
        datePublished:"2026-08-16",dateModified:"2026-08-16",
        author:{"@type":"Organization",name:"Nutry.life"},
        publisher:{"@type":"Organization",name:"Nutry.life",url:"https://nutry.life"},
        mainEntityOfPage:"https://nutry.life/blog/como-higienizar-guardar-folhas"
      }) }} />
    </>
  );
}
