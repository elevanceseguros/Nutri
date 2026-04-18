import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "O que comer no jejum intermitente 16:8 — Guia Completo | Nutry.life",
  description: "Descubra o que comer, quando comer e o que evitar no jejum intermitente 16:8. Guia completo com cardápio de exemplo e dicas práticas.",
  keywords: "o que comer no jejum intermitente, jejum 16:8 cardápio, jejum intermitente o que comer, quebrar o jejum",
  openGraph: {
    title: "O que comer no jejum intermitente 16:8 — Guia Completo",
    description: "Tudo sobre alimentação no jejum intermitente 16:8.",
    url: "https://nutry.life/blog/o-que-comer-no-jejum-intermitente-16-8",
  },
};

export default function JejumPost() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
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
            <span style={{ color: '#22c55e' }}>Jejum Intermitente</span>
          </div>

          {/* Header do post */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className={styles.tag}>Jejum Intermitente</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>18 de abril de 2025</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>· 8 min de leitura</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '1rem' }}>
              O que comer no jejum intermitente 16:8 — guia completo
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: '0' }}>
              Descubra o que comer, quando comer e o que evitar no jejum intermitente 16:8 para maximizar seus resultados sem passar fome.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: '2.5rem' }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere seu cardápio para jejum com IA</div>
              <div className={styles.tipText} style={{ marginBottom: '0.75rem' }}>
                Nossa IA monta um cardápio completo para sua janela alimentar em segundos.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: 'inline-block', textDecoration: 'none', padding: '0.7rem 1.5rem', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Gerar meu cardápio grátis →
              </Link>
            </div>
          </div>

          {/* Introdução */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>O que é o jejum intermitente 16:8?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              O jejum intermitente 16:8 é um dos protocolos de jejum mais populares do mundo. Você fica <strong>16 horas em jejum</strong> e tem uma <strong>janela de 8 horas</strong> para fazer suas refeições. Por exemplo, se você come sua última refeição às 20h, só volta a comer ao meio-dia do dia seguinte.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginTop: '1rem' }}>
              Durante as 16 horas de jejum, seu corpo esgota os estoques de glicogênio e começa a usar a gordura como combustível — processo chamado de <strong>cetose parcial</strong>. É isso que explica a eficiência do jejum intermitente para emagrecer.
            </p>
          </div>

          {/* O que pode durante o jejum */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>O que pode durante o período de jejum?</span>
            </div>
            <div className={styles.qGrid}>
              {[
                { num: "☕", title: "Café preto", desc: "Sem açúcar, leite ou adoçante calórico." },
                { num: "🍵", title: "Chás", desc: "Verde, preto, hibisco — sem açúcar." },
                { num: "💧", title: "Água", desc: "Com ou sem gás, limão sem açúcar." },
                { num: "🧂", title: "Eletrólitos", desc: "Sal, magnésio e potássio sem calorias." },
              ].map((item) => (
                <div key={item.num} className={styles.qBtn} style={{ cursor: 'default' }}>
                  <span className={styles.qBtnIcon} style={{ background: '#dcfce7', color: '#16a34a', fontWeight: 800, fontSize: '1.2rem' }}>{item.num}</span>
                  <span className={styles.qBtnLabel}>{item.title}</span>
                  <span className={styles.qBtnSub}>{item.desc}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '16px', padding: '1.25rem 1.5rem' }}>
              <div style={{ fontWeight: 800, color: '#dc2626', marginBottom: '6px' }}>❌ O que quebra o jejum:</div>
              <div style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>
                Qualquer alimento com calorias — incluindo leite no café, adoçantes calóricos, sucos, refrigerantes diet (debatem-se), gomas de mascar com açúcar e suplementos com calorias.
              </div>
            </div>
          </div>

          {/* Como quebrar o jejum */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Como quebrar o jejum corretamente?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              A primeira refeição após o jejum é crucial. Evite quebrar o jejum com alimentos ultraprocessados ou muita açúcar — isso causa um pico glicêmico brusco que pode gerar sonolência e fome intensa logo depois.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { titulo: "✅ Ideal para quebrar o jejum", itens: ["Ovos mexidos ou estrelados", "Abacate com sal e limão", "Iogurte grego com frutas vermelhas", "Frutas com baixo índice glicêmico (maçã, pera, morango)"] },
                { titulo: "⚠️ Evite quebrar o jejum com", itens: ["Pão branco, bolo ou doces", "Suco de fruta (mesmo natural)", "Cereais matinais com açúcar", "Frutas muito doces em grande quantidade (manga, uva, banana madura)"] },
              ].map((bloco, i) => (
                <div key={i} style={{ background: i === 0 ? '#f0fdf4' : '#fffbeb', border: `1px solid ${i === 0 ? '#bbf7d0' : '#fde68a'}`, borderRadius: '16px', padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontWeight: 800, color: i === 0 ? '#166534' : '#92400e', marginBottom: '10px', fontSize: '1rem' }}>{bloco.titulo}</div>
                  {bloco.itens.map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: i === 0 ? '#15803d' : '#b45309', fontWeight: 600, marginBottom: '6px' }}>
                      <span className={styles.dot} style={{ background: i === 0 ? '#22c55e' : '#f59e0b' }} />
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dica */}
          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>💡</div>
            <div>
              <div className={styles.tipTitle}>Dica de ouro</div>
              <div className={styles.tipText}>
                A maioria das pessoas tem mais fácil fazer o jejum 16:8 dormindo. Se você dorme 8 horas, já são 8 horas de jejum "de graça". Basta estender mais 4-6 horas acordado antes de comer.
              </div>
            </div>
          </div>

          {/* Cardápio exemplo */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>Cardápio exemplo para jejum 16:8</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              Neste exemplo, a janela alimentar é das <strong>12h às 20h</strong>:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { horario: "12h00 — Almoço (quebra o jejum)", refeicao: "2 ovos mexidos + 150g frango grelhado + salada verde + 1 colher azeite + arroz integral", kcal: "650 kcal" },
                { horario: "15h30 — Lanche da tarde", refeicao: "1 maçã + 30g castanha do pará + 1 iogurte grego sem açúcar", kcal: "350 kcal" },
                { horario: "19h30 — Jantar (última refeição)", refeicao: "150g salmão grelhado + legumes refogados no azeite + 1/2 abacate", kcal: "500 kcal" },
              ].map((r, i) => (
                <div key={i} className={styles.mealCard}>
                  <div style={{ padding: '1.1rem 1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                      <div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{r.horario}</div>
                        <div style={{ fontSize: '0.95rem', color: '#374151', fontWeight: 600, lineHeight: 1.5 }}>{r.refeicao}</div>
                      </div>
                      <div style={{ fontWeight: 800, color: '#111827', fontSize: '1rem', whiteSpace: 'nowrap' }}>{r.kcal}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.macrosCard} style={{ marginTop: '1.25rem' }}>
              {[
                { val: "1500", lbl: "kcal total" },
                { val: "130g", lbl: "proteína" },
                { val: "120g", lbl: "carbs" },
                { val: "55g", lbl: "gorduras" },
              ].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA meio */}
          <div className={styles.premiumBanner} style={{ marginBottom: '2rem' }}>
            <div className={styles.premiumBadgeTop}>✦ PERSONALIZADO PARA VOCÊ</div>
            <div className={styles.premiumHeader}>
              <h3>Quer um cardápio para jejum feito para você?</h3>
              <p>Nossa IA monta um plano completo com suas preferências alimentares em segundos.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu cardápio para jejum →
            </Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          {/* Erros comuns */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>05.</span>
              <span className={styles.qLabel}>Erros mais comuns no jejum 16:8</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { erro: "Comer pouca proteína na janela alimentar", solucao: "Mire em pelo menos 1,6g de proteína por kg de peso para não perder massa muscular." },
                { erro: "Compensar o jejum comendo demais", solucao: "O jejum só funciona se você mantiver um déficit calórico. Comer sem controle na janela anula os efeitos." },
                { erro: "Começar com jejum muito longo", solucao: "Comece com 12:12 por uma semana, depois evolua para 14:10, depois 16:8. Seu corpo precisa de adaptação." },
                { erro: "Não beber água suficiente", solucao: "Durante o jejum, beba pelo menos 2-3 litros de água. A desidratação causa fome falsa e dores de cabeça." },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem 1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ color: '#dc2626', fontSize: '1rem' }}>❌</span>
                    <div style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem' }}>{item.erro}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: '#22c55e', fontSize: '1rem' }}>✅</span>
                    <div style={{ color: '#6b7280', fontSize: '0.92rem', lineHeight: 1.6, fontWeight: 500 }}>{item.solucao}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>06.</span>
              <span className={styles.qLabel}>Perguntas frequentes</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: "Posso tomar remédio durante o jejum?", a: "Depende do medicamento. Alguns precisam ser tomados com alimentos. Consulte seu médico antes de iniciar o jejum se usar medicamentos." },
                { q: "Jejum intermitente funciona sem exercício?", a: "Sim! O jejum intermitente promove emagrecimento mesmo sem exercício. Mas combinado com treino, os resultados são significativamente melhores." },
                { q: "Quanto tempo até ver resultados?", a: "A maioria das pessoas nota diferença no peso e no inchaço já na primeira semana. Resultados mais expressivos aparecem em 4-8 semanas de consistência." },
                { q: "Posso fazer jejum todo dia?", a: "Sim, o jejum 16:8 é seguro para a maioria das pessoas saudáveis como rotina diária. Mulheres grávidas, diabéticos e pessoas com histórico de distúrbios alimentares devem consultar um médico." },
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
              <span className={styles.qNum}>07.</span>
              <span className={styles.qLabel}>Conclusão</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              O jejum intermitente 16:8 é uma das estratégias mais eficientes e sustentáveis para emagrecer e melhorar a saúde metabólica. A chave é <strong>o que você come na janela alimentar</strong> — priorize proteínas, gorduras boas e carboidratos complexos, e evite quebrar o jejum com açúcar ou ultraprocessados.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginTop: '1rem' }}>
              Com o Nutry.life, você não precisa planejar tudo sozinho — nossa IA monta o cardápio completo para sua janela alimentar em segundos, com receitas brasileiras reais e modo de preparo passo a passo.
            </p>
          </div>

          {/* CTA final */}
          <div className={styles.premiumBanner}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h3>Pronto para começar o jejum intermitente?</h3>
              <p>Gere seu cardápio personalizado para jejum 16:8 agora mesmo, de graça.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio completo para sua janela alimentar</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas brasileiras com modo de preparo</div>
              <div className={styles.premiumFeatureItem}>✅ Fotos dos pratos e macros detalhados</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu cardápio para jejum →
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
              <Link href="/blog/low-carb-para-iniciantes" style={{ textDecoration: 'none' }}>
                <div className={styles.mealCard} style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.75rem' }}>🥑</span>
                    <div>
                      <div style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem', marginBottom: '4px' }}>Low carb para iniciantes: o que é, como começar e cardápio de exemplo</div>
                      <div style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>10 min de leitura · Low Carb</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/jejum-intermitente-cardapio" style={{ textDecoration: 'none' }}>
                <div className={styles.mealCard} style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.75rem' }}>⏰</span>
                    <div>
                      <div style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem', marginBottom: '4px' }}>Cardápio para jejum intermitente — gerado por IA</div>
                      <div style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>Página de cardápio · Gerar agora</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "O que comer no jejum intermitente 16:8 — guia completo",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2025-04-18",
        "description": "Descubra o que comer, quando comer e o que evitar no jejum intermitente 16:8.",
      })}} />
    </>
  );
}
