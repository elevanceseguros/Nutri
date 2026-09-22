import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

const title = "Frango Cru: Lavar ou Não? Como Evitar Contaminação na Cozinha";
const description = "Entenda por que lavar frango cru pode espalhar contaminação e organize utensílios, mãos, descongelamento, cocção e armazenamento com segurança.";
const url = "https://www.nutry.life/blog/frango-cru-lavar-ou-nao-seguranca-cozinha";

export const metadata: Metadata = {
  title: `${title} | Nutry.life`,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    publishedTime: "2026-09-22",
    modifiedTime: "2026-09-22",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  mainEntityOfPage: url,
  publisher: { "@type": "Organization", name: "Nutry.life", url: "https://www.nutry.life" },
};

export default function Post() {
  return (
    <main className={styles.postContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className={styles.backToBlog} data-nav="back-to-blog">
        ← Voltar para o blog
      </Link>

      <article>
        <header>
          <p className={styles.postExcerpt}>🍗 Segurança alimentar · 6 min de leitura · 22 de setembro de 2026</p>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postExcerpt}>{description}</p>
        </header>

        <div className={styles.postContent}>
          <p>
            Lavar frango cru na pia parece uma etapa de limpeza, mas água, limão ou vinagre não substituem o cozimento. A água corrente ainda pode espalhar gotículas e resíduos para a cuba, a torneira, utensílios e alimentos que já estavam prontos para consumo.
          </p>

          <div className={styles.articleCtaTop} data-cta="top">
            <div>
              <strong>Organize refeições possíveis para a sua rotina</strong>
              <p>Gere uma sugestão de plano alimentar e adapte preparos, alimentos e horários às suas preferências.</p>
              <Link href="/" className={styles.articleCtaLink}>Gerar meu plano alimentar →</Link>
            </div>
          </div>

          <h2>A resposta curta: não precisa lavar o frango cru</h2>
          <p>
            O objetivo de segurança não é retirar microrganismos com água. É evitar que o conteúdo cru alcance outros alimentos e cozinhar adequadamente. Enxaguar pode aumentar a área contaminada sem tornar a carne pronta para consumo.
          </p>
          <p>
            Limão, vinagre, sal e marinadas podem mudar sabor e textura, mas não devem ser tratados como método de descontaminação. Se usar uma marinada, mantenha o frango refrigerado e não reutilize o líquido cru como molho sem cocção adequada.
          </p>

          <h2>Onde a contaminação cruzada costuma acontecer</h2>
          <ul>
            <li>Na mão que toca o frango e depois abre a gaveta ou pega o tempero.</li>
            <li>Na tábua e na faca reutilizadas para salada, pão ou alimento já cozido.</li>
            <li>Na embalagem apoiada sobre a bancada antes de ser descartada.</li>
            <li>Em panos, esponjas e celulares usados durante o preparo.</li>
            <li>Nos respingos da pia quando a carne é lavada sob a torneira.</li>
          </ul>
          <p>
            A cartilha de boas práticas da Anvisa usa justamente o exemplo de cortar frango cru e utilizar a mesma faca, sem higienização, em alimento pronto para explicar contaminação cruzada.
          </p>

          <h2>Monte uma sequência de preparo mais segura</h2>
          <ol>
            <li>Separe ingredientes que serão consumidos crus ou já estão prontos.</li>
            <li>Prepare salada, acompanhamentos e utensílios limpos antes de abrir o frango.</li>
            <li>Reserve tábua, faca, recipiente e pegador para a carne crua.</li>
            <li>Abra a embalagem evitando respingos e descarte-a diretamente.</li>
            <li>Tempere e leve ao cozimento sem lavar o frango na pia.</li>
            <li>Lave mãos, utensílios e superfícies antes de tocar em outros alimentos.</li>
          </ol>

          <h2>Como descongelar sem improviso</h2>
          <p>
            Planeje o descongelamento na geladeira, dentro de recipiente que retenha líquidos. O micro-ondas também pode ser usado quando o alimento seguir imediatamente para o cozimento, conforme as instruções do equipamento. Evite deixar frango cru descongelando por horas sobre a pia ou bancada.
          </p>
          <p>
            Peças maiores levam mais tempo. Frango ainda parcialmente congelado pode cozinhar de maneira desigual, dourando por fora antes de aquecer o centro. Ajuste o planejamento ao tamanho e ao corte.
          </p>

          <h2>Cor e textura não bastam para avaliar o cozimento</h2>
          <p>
            O aspecto visual ajuda no preparo, mas não é uma medição precisa de segurança. Um termômetro culinário limpo permite verificar a região mais espessa sem encostar no osso. Recomendações oficiais internacionais usam 74 °C como referência para aves; siga também as orientações do produto e do equipamento.
          </p>
          <p>
            Depois de medir o frango cru ou parcialmente cozido, higienize o termômetro antes de reutilizá-lo. Não coloque a carne pronta no mesmo prato que recebeu as peças cruas.
          </p>

          <h2>Mãos, utensílios e bancada</h2>
          <p>
            Lave as mãos com água e sabão depois de tocar em frango cru e antes de manusear comida pronta. Higienize faca, tábua, pegadores, pia e bancada com produtos apropriados à superfície. Não use o pano de secar louça para limpar líquidos da carne crua.
          </p>
          <p>
            Ter tábuas separadas pode facilitar a rotina, mas a cor da tábua não elimina a necessidade de lavagem e conservação. Troque utensílios com rachaduras profundas ou superfícies difíceis de limpar.
          </p>

          <h2>Posição na geladeira também importa</h2>
          <p>
            Guarde a embalagem fechada ou o recipiente vedado na parte inferior, evitando que líquidos pinguem sobre frutas, folhas, sobremesas e alimentos prontos. Observe o prazo do fabricante e congele quando não houver previsão de preparo dentro do período indicado.
          </p>

          <h2>Posso temperar de manhã para cozinhar à noite?</h2>
          <p>
            Pode ser uma organização possível quando o frango permanece refrigerado em recipiente fechado e o prazo do produto é respeitado. Não deixe marinando sobre a bancada. Se separar parte do tempero para servir como molho, faça isso antes de ele entrar em contato com a carne crua.
          </p>

          <h2>Como guardar o frango depois de pronto</h2>
          <p>
            Transfira para recipiente limpo, evite longos períodos em temperatura ambiente e leve à geladeira sem misturar utensílios usados na etapa crua. Identifique a data quando preparar porções para outros dias. Reaqueça somente o que será consumido e descarte alimentos com conservação duvidosa.
          </p>

          <h2>Checklist rápido antes de começar</h2>
          <ul>
            <li>Frango descongelado com antecedência na geladeira.</li>
            <li>Alimentos prontos separados da área da carne crua.</li>
            <li>Tábua, faca, pegador e recipiente disponíveis.</li>
            <li>Lixeira acessível para a embalagem.</li>
            <li>Sabão e material adequado para limpar superfícies.</li>
            <li>Prato limpo reservado para o alimento cozido.</li>
            <li>Termômetro culinário, quando disponível.</li>
          </ul>

          <p>
            Leia também: <Link href="/blog/como-descongelar-carne-geladeira-microondas">como descongelar carne com segurança</Link> · <Link href="/blog/arroz-feijao-cozidos-guardar-congelar-reaquecer">como guardar e reaquecer preparações</Link>.
          </p>

          <section className={styles.premiumBanner} data-cta="final">
            <div className={styles.premiumHeader}>
              <h2>Planeje refeições com preparo e conservação que caibam na rotina</h2>
              <p>Gere uma sugestão de plano alimentar e procure orientação profissional quando precisar de estratégia individual.</p>
            </div>
            <Link href="/" className={styles.premiumBtn}>Gerar meu plano alimentar</Link>
          </section>

          <Link href="/blog" className={styles.backToBlog} data-nav="back-to-all-articles">
            ← Voltar para todos os artigos
          </Link>
        </div>
      </article>

      <footer className={styles.footer}>
        <p>Este conteúdo é educativo e não substitui avaliação de nutricionista ou médico. Necessidades, restrições, sintomas e condições de saúde exigem orientação individual.</p>
        <p>
          Fontes: <a href="https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/alimentos/manuais-guias-e-orientacoes/cartilha-boas-praticas-para-servicos-de-alimentacao.pdf/@@display-file/file" target="_blank" rel="noopener noreferrer">Anvisa — boas práticas para serviços de alimentação</a> · <a href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/poultry/chicken-farm-table" target="_blank" rel="noopener noreferrer">USDA/FSIS — segurança no preparo de frango</a>. Consultadas em 22/09/2026.
        </p>
      </footer>
    </main>
  );
}
