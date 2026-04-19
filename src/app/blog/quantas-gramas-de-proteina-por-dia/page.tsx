import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Quantas Gramas de Proteína Por Dia? Guia Completo por Peso e Objetivo | Nutry.life",
  description: "Descubra exatamente quantas gramas de proteína você precisa por dia para emagrecer, ganhar massa ou manter o peso. Cálculo personalizado por peso corporal.",
  keywords: "quantas gramas de proteína por dia, quantidade de proteína diária, proteína para emagrecer, proteína para ganhar massa, como calcular proteína diária",
  openGraph: {
    title: "Quantas Gramas de Proteína Por Dia? Guia Completo | Nutry.life",
    description: "Cálculo personalizado de proteína por peso e objetivo. Guia completo com fontes brasileiras.",
    url: "https://nutry.life/blog/quantas-gramas-de-proteina-por-dia",
  },
};

export default function ProteinaPost() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} style={{ textDecoration: 'none' }}>Nutry<span className={styles.logoAccent}>.life</span></Link>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Link href="/blog" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#6b7280', textDecoration: 'none' }}>Blog</Link>
          <Link href="/login" className={styles.btnEntrar}>Entrar</Link>
          <div className={styles.badge}>Beta</div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="fade-up">

          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '2rem', fontSize: '0.85rem', color: '#9ca3af', fontWeight: 600 }}>
            <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Início</Link>
            <span>→</span>
            <Link href="/blog" style={{ color: '#9ca3af', textDecoration: 'none' }}>Blog</Link>
            <span>→</span>
            <span style={{ color: '#22c55e' }}>Proteína</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className={styles.tag}>Proteína</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>19 de abril de 2026</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '1rem' }}>
              Quantas gramas de proteína preciso comer por dia?
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: '0' }}>
              Descubra exatamente quanto de proteína seu corpo precisa por dia — calculado pelo seu peso e objetivo, com as melhores fontes brasileiras.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: '2.5rem' }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Calcule sua proteína ideal com IA</div>
              <div className={styles.tipText} style={{ marginBottom: '0.75rem' }}>
                Nossa IA calcula suas necessidades de proteína pelo seu peso, altura, idade e objetivo — e monta o cardápio completo.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: 'inline-block', textDecoration: 'none', padding: '0.7rem 1.5rem', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Calcular minha proteína ideal →
              </Link>
            </div>
          </div>

          {/* Intro */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>Por que a proteína é tão importante?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              A proteína é o nutriente mais importante para quem quer mudar o corpo — seja para emagrecer, ganhar massa ou simplesmente ter mais saúde. Ela é responsável por construir e reparar músculo, produzir hormônios e enzimas, manter a saciedade por mais tempo e preservar a massa magra durante o emagrecimento.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginTop: '1rem' }}>
              O problema é que a maioria dos brasileiros consome proteína demais nas refeições principais e quase nada nos lanches — o que não é eficiente para o organismo. O corpo só consegue usar de <strong>20g a 40g de proteína por vez</strong> para síntese muscular. O excesso vai para energia ou estoque.
            </p>
          </div>

          {/* Tabela de referência */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Quanto de proteína preciso por dia?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              A quantidade ideal de proteína é calculada em gramas por quilo de peso corporal (g/kg). Veja a tabela de referência baseada nas diretrizes da OMS e da ISSN (Sociedade Internacional de Nutrição Esportiva):
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { objetivo: "Sedentário / saúde geral", ref: "0,8 a 1,2g/kg", ex70: "56 a 84g/dia", cor: '#f0fdf4', borda: '#bbf7d0', texto: '#166534' },
                { objetivo: "Emagrecimento", ref: "1,6 a 2,0g/kg", ex70: "112 a 140g/dia", cor: '#eff6ff', borda: '#bfdbfe', texto: '#1e40af' },
                { objetivo: "Manutenção + treino", ref: "1,4 a 1,8g/kg", ex70: "98 a 126g/dia", cor: '#fefce8', borda: '#fde68a', texto: '#92400e' },
                { objetivo: "Ganho de massa muscular", ref: "1,8 a 2,2g/kg", ex70: "126 a 154g/dia", cor: '#fdf4ff', borda: '#e9d5ff', texto: '#6b21a8' },
                { objetivo: "Atleta de alta performance", ref: "2,2 a 3,1g/kg", ex70: "154 a 217g/dia", cor: '#fff7ed', borda: '#fed7aa', texto: '#c2410c' },
              ].map((linha, i) => (
                <div key={i} style={{ background: linha.cor, border: `1px solid ${linha.borda}`, borderRadius: '14px', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontWeight: 800, color: linha.texto, fontSize: '0.95rem' }}>{linha.objetivo}</div>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600 }}>
                      Referência: <strong style={{ color: '#111827' }}>{linha.ref}</strong>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600 }}>
                      Para 70kg: <strong style={{ color: '#111827' }}>{linha.ex70}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculadora visual */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Exemplo prático por peso</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              Veja quanto de proteína você precisa por dia dependendo do seu peso e objetivo:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', minWidth: '400px' }}>
                {['Peso', 'Emagrecer', 'Massa', 'Manutenção', 'Saúde'].map((h, i) => (
                  <div key={i} style={{ background: '#16a34a', color: 'white', fontWeight: 800, fontSize: '0.78rem', padding: '8px', borderRadius: '8px', textAlign: 'center' }}>{h}</div>
                ))}
                {[
                  ['50kg', '80-100g', '90-110g', '70-90g', '40-60g'],
                  ['60kg', '96-120g', '108-132g', '84-108g', '48-72g'],
                  ['70kg', '112-140g', '126-154g', '98-126g', '56-84g'],
                  ['80kg', '128-160g', '144-176g', '112-144g', '64-96g'],
                  ['90kg', '144-180g', '162-198g', '126-162g', '72-108g'],
                  ['100kg', '160-200g', '180-220g', '140-180g', '80-120g'],
                ].map((linha, i) => linha.map((cel, j) => (
                  <div key={`${i}-${j}`} style={{
                    background: j === 0 ? '#f0fdf4' : 'white',
                    border: '1px solid #e5e7eb',
                    fontWeight: j === 0 ? 800 : 600,
                    color: j === 0 ? '#16a34a' : '#374151',
                    fontSize: '0.82rem',
                    padding: '8px',
                    borderRadius: '8px',
                    textAlign: 'center',
                  }}>{cel}</div>
                )))}
              </div>
            </div>
          </div>

          {/* Dica */}
          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>💡</div>
            <div>
              <div className={styles.tipTitle}>Como usar a tabela</div>
              <div className={styles.tipText}>
                Encontre seu peso na coluna da esquerda e o seu objetivo nas colunas seguintes. Os valores são a faixa ideal de proteína diária total para você. Distribua em todas as refeições do dia — não tente comer tudo de uma vez.
              </div>
            </div>
          </div>

          {/* Fontes de proteína */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>Melhores fontes de proteína brasileiras</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              Você não precisa de suplementos caros para bater sua meta de proteína. Veja as melhores fontes acessíveis em qualquer mercado brasileiro:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { alimento: "🍗 Frango (peito grelhado)", porcao: "100g", proteina: "31g", obs: "A fonte mais custo-benefício do Brasil" },
                { alimento: "🥚 Ovos inteiros", porcao: "2 ovos (100g)", proteina: "13g", obs: "Proteína completa com todos os aminoácidos" },
                { alimento: "🐟 Atum em lata (água)", porcao: "1 lata (170g drenado)", proteina: "30g", obs: "Prático, barato e rico em ômega-3" },
                { alimento: "🫘 Feijão cozido", porcao: "1 xícara (170g)", proteina: "14g", obs: "Combinado com arroz vira proteína completa" },
                { alimento: "🧀 Queijo cottage", porcao: "100g", proteina: "12g", obs: "Lanche rápido e leve" },
                { alimento: "🥛 Iogurte grego natural", porcao: "170g", proteina: "17g", obs: "Rico em proteína e probióticos" },
                { alimento: "🐟 Sardinha em lata", porcao: "1 lata (100g drenado)", proteina: "25g", obs: "Uma das proteínas mais baratas e nutritivas" },
                { alimento: "🌱 Tofu firme", porcao: "100g", proteina: "8g", obs: "Melhor opção vegana de alta proteína" },
              ].map((item, i) => (
                <div key={i} className={styles.mealCard} style={{ padding: 0 }}>
                  <div style={{ padding: '0.9rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <div style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem', marginBottom: '3px' }}>{item.alimento}</div>
                      <div style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>{item.porcao} · {item.obs}</div>
                    </div>
                    <div style={{ background: '#dcfce7', color: '#166534', fontWeight: 800, fontSize: '1rem', padding: '4px 14px', borderRadius: '99px', whiteSpace: 'nowrap' }}>
                      {item.proteina}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Como distribuir */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>05.</span>
              <span className={styles.qLabel}>Como distribuir a proteína ao longo do dia</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              Distribuir a proteína em <strong>doses de 20g a 40g por refeição</strong> é mais eficiente do que concentrar tudo no almoço e jantar. Veja um exemplo para quem precisa de 140g/dia:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { refeicao: "☀️ Café da manhã", exemplo: "3 ovos mexidos + 1 fatia de queijo + iogurte grego", proteina: "35g" },
                { refeicao: "🍽️ Almoço", exemplo: "150g frango grelhado + feijão + salada", proteina: "45g" },
                { refeicao: "🍎 Lanche da tarde", exemplo: "1 lata de atum + 1 maçã + castanhas", proteina: "32g" },
                { refeicao: "🌙 Jantar", exemplo: "150g peixe grelhado + legumes refogados", proteina: "28g" },
              ].map((r, i) => (
                <div key={i} className={styles.mealCard}>
                  <div style={{ padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <div style={{ fontWeight: 800, color: '#16a34a', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{r.refeicao}</div>
                      <div style={{ fontSize: '0.9rem', color: '#374151', fontWeight: 600 }}>{r.exemplo}</div>
                    </div>
                    <div style={{ background: '#dcfce7', color: '#166534', fontWeight: 800, fontSize: '1rem', padding: '4px 14px', borderRadius: '99px', whiteSpace: 'nowrap' }}>
                      {r.proteina}
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.macrosCard} style={{ marginTop: '4px' }}>
                <div className={styles.macroItem}><span className={styles.macroVal}>140g</span><span className={styles.macroLbl}>total do dia</span></div>
                <div className={styles.macroItem}><span className={styles.macroVal}>4</span><span className={styles.macroLbl}>refeições</span></div>
                <div className={styles.macroItem}><span className={styles.macroVal}>35g</span><span className={styles.macroLbl}>por refeição</span></div>
              </div>
            </div>
          </div>

          {/* CTA meio */}
          <div className={styles.premiumBanner} style={{ marginBottom: '2rem' }}>
            <div className={styles.premiumBadgeTop}>✦ PERSONALIZADO PARA VOCÊ</div>
            <div className={styles.premiumHeader}>
              <h3>Quer um cardápio com a proteína certa para você?</h3>
              <p>Nossa IA calcula sua meta de proteína pelo seu peso e objetivo e monta o cardápio completo.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Calcular minha proteína ideal →
            </Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          {/* Erros comuns */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>06.</span>
              <span className={styles.qLabel}>5 erros comuns no consumo de proteína</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { erro: "Comer toda a proteína de uma vez", solucao: "Distribua em 4-5 refeições. O corpo usa no máximo 30-40g por vez para síntese muscular." },
                { erro: "Contar proteína de alimentos processados", solucao: "Embutidos e frios têm proteína, mas também muito sódio e gordura saturada. Prefira fontes naturais." },
                { erro: "Achar que só whey resolve", solucao: "Whey é prático, mas comida de verdade é melhor. Ovo, frango, atum e feijão batem o mesmo resultado." },
                { erro: "Não comer proteína no café da manhã", solucao: "O café da manhã com proteína reduz a fome ao longo do dia e melhora o controle calórico total." },
                { erro: "Ignorar proteínas vegetais", solucao: "Feijão com arroz forma proteína completa. Tofu, grão-de-bico e lentilha são excelentes e baratos." },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem 1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ color: '#dc2626', fontSize: '1rem', flexShrink: 0 }}>❌</span>
                    <div style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem' }}>{item.erro}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: '#22c55e', fontSize: '1rem', flexShrink: 0 }}>✅</span>
                    <div style={{ color: '#6b7280', fontSize: '0.92rem', lineHeight: 1.6, fontWeight: 500 }}>{item.solucao}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>07.</span>
              <span className={styles.qLabel}>Perguntas frequentes</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: "Comer muita proteína faz mal aos rins?", a: "Em pessoas saudáveis, não há evidência científica de que ingestão de até 2,2g/kg seja prejudicial aos rins. Quem já tem doença renal deve consultar um médico antes de aumentar a proteína." },
                { q: "Preciso de whey protein para bater a meta?", a: "Não! Com frango, ovos, atum, feijão e iogurte grego é totalmente possível bater 140-180g de proteína por dia sem nenhum suplemento." },
                { q: "Proteína engorda?", a: "Não diretamente. A proteína tem 4 kcal/g, igual ao carboidrato. O que engorda é excesso de calorias totais. Na verdade, proteína aumenta a saciedade e ajuda a emagrecer." },
                { q: "Veganos conseguem bater a meta de proteína?", a: "Sim! Combinando feijão, lentilha, grão-de-bico, tofu, quinoa e castanhas é possível atingir 1,6-2g/kg de proteína vegetal de qualidade." },
                { q: "A proteína é a mesma para homens e mulheres?", a: "A referência em g/kg é igual para ambos os sexos. Como os homens tendem a pesar mais, o total em gramas costuma ser maior — mas a proporção por quilo é a mesma." },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem 1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontWeight: 800, color: '#111827', marginBottom: '6px', fontSize: '1rem' }}>❓ {faq.q}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusão */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>08.</span>
              <span className={styles.qLabel}>Conclusão</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              A quantidade ideal de proteína por dia depende do seu peso e objetivo — não existe um número único para todo mundo. Use a tabela deste artigo como referência e distribua a proteína ao longo do dia em doses de 30-40g por refeição para maximizar os resultados.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginTop: '1rem' }}>
              Com o Nutry.life, você não precisa calcular nada manualmente. Nossa IA usa seu peso, altura, idade e objetivo para calcular sua meta de proteína exata e montar um cardápio completo com receitas brasileiras reais — em segundos e de graça.
            </p>
          </div>

          {/* CTA final */}
          <div className={styles.premiumBanner}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h3>Calcule sua proteína ideal agora</h3>
              <p>Nossa IA monta seu cardápio completo com a proteína certa para seu peso e objetivo.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cálculo personalizado por peso e objetivo</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio completo com receitas brasileiras</div>
              <div className={styles.premiumFeatureItem}>✅ Macros detalhados por refeição</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu plano personalizado →
            </Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          {/* Leia também */}
          <div style={{ marginTop: '3rem' }}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>📚</span>
              <span className={styles.qLabel}>Leia também</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { href: "/blog/low-carb-para-iniciantes", emoji: "🥑", titulo: "Low carb para iniciantes: o que é, como começar e cardápio", tempo: "10 min · Low Carb" },
                { href: "/blog/o-que-comer-no-jejum-intermitente-16-8", emoji: "⏰", titulo: "O que comer no jejum intermitente 16:8 — guia completo", tempo: "8 min · Jejum Intermitente" },
                { href: "/plano-alimentar-ganho-de-massa", emoji: "💪", titulo: "Plano alimentar para ganho de massa — gerado por IA", tempo: "Cardápio · Gerar agora" },
              ].map((post, i) => (
                <Link key={i} href={post.href} style={{ textDecoration: 'none' }}>
                  <div className={styles.mealCard} style={{ padding: '1.25rem 1.5rem' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.75rem' }}>{post.emoji}</span>
                      <div>
                        <div style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem', marginBottom: '4px' }}>{post.titulo}</div>
                        <div style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>{post.tempo}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Quantas gramas de proteína preciso comer por dia? Guia completo por peso e objetivo",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-04-19",
        "description": "Descubra exatamente quantas gramas de proteína você precisa por dia para emagrecer, ganhar massa ou manter o peso.",
        "mainEntity": {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Comer muita proteína faz mal aos rins?", "acceptedAnswer": { "@type": "Answer", "text": "Em pessoas saudáveis, não há evidência científica de que ingestão de até 2,2g/kg seja prejudicial aos rins." } },
            { "@type": "Question", "name": "Preciso de whey protein para bater a meta?", "acceptedAnswer": { "@type": "Answer", "text": "Não! Com frango, ovos, atum, feijão e iogurte grego é totalmente possível bater 140-180g de proteína por dia." } },
            { "@type": "Question", "name": "Proteína engorda?", "acceptedAnswer": { "@type": "Answer", "text": "Não diretamente. O que engorda é excesso de calorias totais. Proteína aumenta a saciedade e ajuda a emagrecer." } },
          ]
        }
      })}} />
    </>
  );
}
