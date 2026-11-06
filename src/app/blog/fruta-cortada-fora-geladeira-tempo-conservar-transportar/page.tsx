import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Fruta Cortada Fora da Geladeira: Quanto Tempo Pode Ficar?";
const description = "Veja quando refrigerar frutas cortadas, como transportar com segurança, quais sinais exigem descarte e por que cheiro e aparência não contam toda a história.";
const url = "https://www.nutry.life/blog/fruta-cortada-fora-geladeira-tempo-conservar-transportar";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`, description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url, publishedTime: "2026-11-06", modifiedTime: "2026-11-06" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  datePublished: "2026-11-06", dateModified: "2026-11-06", mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">← Voltar para o blog</Link>
      <article>
        <header>
          <p className={styles.postExcerpt}>🍉 Segurança dos alimentos · 8 min de leitura · 6 de novembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>
        <div className={styles.postContent}>
          <p>Cortar ou descascar uma fruta rompe sua proteção natural, aumenta a área exposta e facilita a transferência de micro-organismos pelas mãos, faca, tábua e recipiente. Por isso, uma fruta inteira que podia ficar na fruteira pode passar a exigir refrigeração depois do corte.</p>
          <p>Como regra doméstica conservadora, <strong>refrigere frutas cortadas, descascadas ou cozidas em até duas horas</strong>. Se estiverem expostas a mais de 32 °C — como em carro quente, praia ou piquenique — reduza o limite para uma hora. Quando o tempo ou a temperatura forem desconhecidos, a escolha prudente é descartar.</p>
          <div className={styles.articleCtaTop} data-cta="top"><div><strong>Planeje porções que caibam na rotina</strong><p>O gerador ajuda a organizar uma sugestão inicial de refeições e lanches, sem substituir orientação individual.</p><Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link></div></div>

          <h2>Decisão rápida: refrigerar, consumir ou descartar?</h2>
          <div style={{ overflowX: "auto" }}><table><thead><tr><th scope="col">Situação</th><th scope="col">Conduta prudente</th><th scope="col">Por quê</th></tr></thead><tbody>
            <tr><td>Fruta acabou de ser cortada</td><td>Consumir ou refrigerar em recipiente limpo e fechado</td><td>O corte aumenta a exposição à contaminação</td></tr>
            <tr><td>Ficou até 2 horas em temperatura ambiente</td><td>Refrigerar imediatamente ou consumir</td><td>Ainda está dentro da referência geral, se houve higiene e temperatura comum</td></tr>
            <tr><td>Ficou mais de 2 horas fora</td><td>Descartar</td><td>O risco cresce mesmo sem alteração visível</td></tr>
            <tr><td>Ficou mais de 1 hora acima de 32 °C</td><td>Descartar</td><td>Calor acelera a multiplicação de micro-organismos</td></tr>
            <tr><td>Tempo ou temperatura são desconhecidos</td><td>Descartar</td><td>Não é possível reconstruir um histórico seguro</td></tr>
          </tbody></table></div>
          <p>Esses tempos não autorizam aproveitar fruta que apresente mofo, odor anormal, viscosidade, fermentação evidente, recipiente estufado ou contato com alimentos crus. Para serviços de alimentação, prevalecem os controles e normas próprios da operação.</p>

          <h2>Por que o corte muda a conservação?</h2>
          <p>A casca funciona como barreira física. Ao cortar, a faca pode levar micro-organismos da superfície para a polpa, e o tecido úmido e rico em nutrientes fica exposto. Mãos, tábuas, bancadas e recipientes também podem contaminar o alimento.</p>
          <p>Melão e melancia merecem atenção especial porque a lâmina atravessa a casca e alcança a parte comestível. Mas a regra de refrigeração se aplica de forma ampla a produtos frescos cortados ou descascados, inclusive salada de frutas e fruta comprada já fatiada.</p>

          <h2>Como preparar com menos risco</h2>
          <ol><li>Lave as mãos com água e sabão antes de começar.</li><li>Mantenha frutas separadas de carne, aves, pescados e seus líquidos.</li><li>Lave a fruta inteira em água corrente antes do corte, mesmo quando a casca não será comida.</li><li>Retire áreas machucadas ou danificadas com utensílio limpo.</li><li>Use faca, tábua e recipiente limpos; não reaproveite utensílios de alimentos crus sem higienizar.</li><li>Refrigere logo após preparar, sem esperar completar as duas horas.</li></ol>
          <p>Sabão e detergente não devem ser aplicados diretamente na fruta. Quando houver recomendação de sanitização, use apenas produto regularizado e indicado para alimentos, seguindo exatamente o rótulo.</p>

          <h2>Qual recipiente usar na geladeira?</h2>
          <p>Prefira recipiente limpo, próprio para alimentos e com fechamento. Isso reduz contato com outros produtos, perda de umidade e absorção de odores. Identifique a data de preparo e mantenha a geladeira a 4 °C ou menos.</p>
          <p>Não misture uma porção recém-cortada com outra mais antiga. Retire apenas o que será consumido e devolva o restante rapidamente à refrigeração. Deixar o recipiente sobre a mesa em várias refeições soma tempo fora do frio.</p>

          <h2>Quanto tempo dura depois de cortar?</h2>
          <p>Não existe um prazo único para todas as frutas: maturação, acidez, higiene, temperatura, tamanho do corte e embalagem mudam a qualidade e a segurança. Siga o prazo do fabricante para produtos embalados e adote períodos curtos para preparações domésticas.</p>
          <p>A regra das duas horas indica quando refrigerar; ela não significa que toda fruta ficará adequada por muitos dias depois disso. Prepare porções compatíveis com o consumo, observe o histórico e descarte diante de mofo, fermentação, odor incomum ou textura viscosa.</p>

          <h2>Escurecimento significa que estragou?</h2>
          <p>Nem sempre. Maçã, pera, banana e abacate podem escurecer por reação com o oxigênio. Limão pode desacelerar esse processo em algumas receitas, mas não sanitiza a fruta nem prolonga com segurança um alimento deixado fora da geladeira.</p>
          <p>Da mesma forma, aparência e cheiro normais não provam segurança. Micro-organismos causadores de doença podem estar presentes sem produzir mudança perceptível. O histórico de tempo e temperatura continua sendo decisivo.</p>

          <h2>Como levar fruta cortada na lancheira?</h2>
          <p>Use recipiente bem fechado dentro de bolsa térmica com fonte de frio suficiente para manter o alimento refrigerado. Coloque a porção já fria, evite deixar a bolsa no sol ou dentro do carro e consuma dentro do período planejado.</p>
          <p>Uma bolsa térmica sem gelo ou placa congelada não garante temperatura segura. Para trajetos longos, eventos e dias quentes, prefira fruta inteira que suporte transporte ou confirme que haverá refrigeração no destino.</p>

          <h2>Fruta cortada em buffet, festa ou piquenique</h2>
          <p>Mantenha pequenas porções sobre gelo ou sob refrigeração e reponha aos poucos. Não complete uma travessa antiga com fruta nova, porque o lote recém-preparado passa a compartilhar o histórico do que já estava exposto.</p>
          <p>Marque o horário em que a travessa saiu do frio. Em ambiente comum, descarte após duas horas; acima de 32 °C, após uma hora. Não devolva à geladeira para consumir no dia seguinte quando o limite tiver sido ultrapassado.</p>

          <h2>Erros comuns</h2>
          <ul><li>Contar o tempo apenas a partir do fim da refeição, ignorando preparo e transporte.</li><li>Deixar salada de frutas a manhã inteira sobre a bancada.</li><li>Usar limão como se fosse sanitizante ou conservante de segurança.</li><li>Cortar com a mesma tábua usada para frango cru sem higienização.</li><li>Confiar apenas em cheiro, sabor ou aparência.</li><li>Guardar novamente uma travessa que ficou horas no calor.</li><li>Transportar em bolsa térmica sem fonte de frio.</li></ul>

          <h2>Checklist prático</h2>
          <ol><li>A fruta e os utensílios foram lavados e manipulados com mãos limpas?</li><li>Houve separação de carnes cruas e outros contaminantes?</li><li>O recipiente está limpo, fechado e identificado?</li><li>A fruta entrou na geladeira logo após o corte?</li><li>Na viagem, há bolsa térmica e fonte de frio?</li><li>O tempo total fora do frio ficou dentro do limite?</li></ol>
          <p>Leia também: <Link href="/blog/como-congelar-frutas-textura-seguranca">como congelar frutas</Link> · <Link href="/blog/como-higienizar-guardar-folhas">como higienizar e guardar folhas</Link> · <Link href="/blog/lancheira-infantil-saudavel-pratica-segura">como organizar uma lancheira prática e segura</Link>.</p>

          <section className={styles.premiumBanner} data-cta="final"><div className={styles.premiumHeader}><h2>Organize refeições e lanches com praticidade</h2><p>Gere uma sugestão inicial de plano alimentar e adapte ingredientes, preparações e porções à sua rotina. Necessidades clínicas e restrições exigem avaliação profissional.</p></div><Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link></section>
          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">← Voltar para todos os artigos</Link>
        </div>
      </article>
      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista, médico ou outro profissional de saúde. Condições clínicas, alergias, restrições, sintomas e necessidades individuais exigem acompanhamento profissional.</p>
        <p>Fontes: <a href="https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-produce-safely" target="_blank" rel="noopener noreferrer">FDA — seleção e preparo seguro de frutas e verduras</a> · <a href="https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety" target="_blank" rel="noopener noreferrer">FDA — refrigeração e regra de duas horas</a> · <a href="https://www.foodsafety.gov/blog/food-safety-tips-holidays" target="_blank" rel="noopener noreferrer">FoodSafety.gov — frutas cortadas e controle de tempo</a>. Consultadas em 06/11/2026.</p>
      </footer>
    </main>
  );
}
