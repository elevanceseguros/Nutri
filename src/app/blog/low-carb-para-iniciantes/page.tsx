import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Low Carb para Iniciantes: O que é, Como Começar e Cardápio | Nutry.life",
  description: "Guia completo de low carb para iniciantes. O que é, o que comer, o que evitar, cardápio de exemplo para a primeira semana e dicas práticas.",
  keywords: "low carb para iniciantes, como começar low carb, dieta low carb o que comer, low carb cardápio semana",
  openGraph: {
    title: "Low Carb para Iniciantes — Guia Completo | Nutry.life",
    description: "Guia completo de low carb para iniciantes com cardápio de exemplo.",
    url: "https://nutry.life/blog/low-carb-para-iniciantes",
  },
};

export default function LowCarbIniciantes() {
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
            <span style={{ color: '#22c55e' }}>Low Carb</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className={styles.tag}>Low Carb</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>17 de abril de 2025</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>· 10 min de leitura</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '1rem' }}>
              Low carb para iniciantes: o que é, como começar e cardápio de exemplo
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: '0' }}>
              Guia completo para quem quer começar a dieta low carb do zero. O que comer, o que evitar e um cardápio de exemplo para a primeira semana.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: '2.5rem' }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere seu cardápio low carb com IA</div>
              <div className={styles.tipText} style={{ marginBottom: '0.75rem' }}>
                Nossa IA monta um cardápio low carb personalizado com receitas brasileiras em segundos.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: 'inline-block', textDecoration: 'none', padding: '0.7rem 1.5rem', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Gerar meu cardápio low carb →
              </Link>
            </div>
          </div>

          {/* O que é */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>O que é a dieta low carb?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              A dieta low carb é simplesmente uma alimentação com <strong>baixo teor de carboidratos</strong>. Em vez de pão, arroz, macarrão e açúcar, você prioriza proteínas (carnes, ovos, peixes) e gorduras boas (azeite, abacate, castanhas).
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginTop: '1rem' }}>
              Não existe uma definição única, mas em geral considera-se low carb qualquer dieta com <strong>menos de 150g de carboidratos por dia</strong>. Para comparar: uma dieta brasileira típica tem entre 300g e 500g de carboidratos diários.
            </p>
            <div className={styles.macrosCard} style={{ marginTop: '1.5rem' }}>
              {[
                { val: "< 150g", lbl: "low carb moderado" },
                { val: "< 100g", lbl: "low carb estrito" },
                { val: "< 50g", lbl: "cetogênico (keto)" },
              ].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal} style={{ fontSize: '1.2rem' }}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* O que comer */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>O que comer no low carb?</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { categoria: "🥩 Proteínas", itens: ["Frango, peixe, carne bovina, porco", "Ovos (sem restrição)", "Atum e sardinha em lata", "Camarão e frutos do mar"] },
                { categoria: "🥑 Gorduras boas", itens: ["Azeite de oliva extravirgem", "Abacate", "Castanhas, nozes e amendoim", "Coco e óleo de coco"] },
                { categoria: "🥦 Vegetais de baixo carboidrato", itens: ["Brócolis, couve-flor, espinafre", "Abobrinha, pepino, berinjela", "Tomate, pimentão, cebola (moderado)", "Folhas verdes em geral"] },
                { categoria: "🧀 Laticínios (com moderação)", itens: ["Queijo (parmesão, mussarela, cottage)", "Iogurte grego natural sem açúcar", "Manteiga", "Creme de leite fresco"] },
              ].map((bloco, i) => (
                <div key={i} style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '16px', padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontWeight: 800, color: '#166534', marginBottom: '10px', fontSize: '1rem' }}>{bloco.categoria}</div>
                  {bloco.itens.map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#15803d', fontWeight: 600, marginBottom: '6px' }}>
                      <span className={styles.dot} />
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* O que evitar */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>O que evitar no low carb?</span>
            </div>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '16px', padding: '1.25rem 1.5rem' }}>
              <div style={{ fontWeight: 800, color: '#dc2626', marginBottom: '10px', fontSize: '1rem' }}>❌ Alimentos a evitar ou reduzir drasticamente:</div>
              {[
                "Arroz, macarrão, pão e farinha de trigo",
                "Açúcar, mel, rapadura e adoçantes calóricos",
                "Batata, mandioca, inhame e batata-doce",
                "Frutas muito doces: manga, uva, banana madura",
                "Refrigerantes, sucos e bebidas açucaradas",
                "Biscoitos, bolos, sorvetes e doces em geral",
                "Cereais matinais e granolas",
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#6b7280', fontWeight: 600, marginBottom: '6px' }}>
                  <span style={{ color: '#dc2626' }}>✕</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dica gripe low carb */}
          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>⚠️</div>
            <div>
              <div className={styles.tipTitle}>A "gripe low carb" — é normal!</div>
              <div className={styles.tipText}>
                Nos primeiros 3-5 dias, muitas pessoas sentem dor de cabeça, cansaço e irritabilidade. Isso é a "gripe low carb" — seu corpo se adaptando a usar gordura como combustível. Beba bastante água, aumente o sal e consuma magnésio. Passa rapidinho!
              </div>
            </div>
          </div>

          {/* Cardápio semana 1 */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>Cardápio low carb para a primeira semana</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              Aqui está um exemplo simples para os primeiros 3 dias:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  dia: "Dia 1",
                  refeicoes: [
                    { nome: "Café da manhã", desc: "3 ovos mexidos + 1/2 abacate + café preto" },
                    { nome: "Almoço", desc: "200g frango grelhado + salada verde + azeite + brócolis refogado" },
                    { nome: "Lanche", desc: "30g castanha-do-pará + 1 fatia queijo mussarela" },
                    { nome: "Jantar", desc: "150g salmão + legumes grelhados no azeite" },
                  ]
                },
                {
                  dia: "Dia 2",
                  refeicoes: [
                    { nome: "Café da manhã", desc: "Omelete de 3 ovos com queijo e espinafre + café" },
                    { nome: "Almoço", desc: "200g carne bovina + couve-flor gratinada + salada" },
                    { nome: "Lanche", desc: "Iogurte grego natural + 20g nozes" },
                    { nome: "Jantar", desc: "150g atum em lata + salada de tomate + azeite" },
                  ]
                },
                {
                  dia: "Dia 3",
                  refeicoes: [
                    { nome: "Café da manhã", desc: "2 ovos cozidos + 1 fatia presunto + 1/2 abacate" },
                    { nome: "Almoço", desc: "200g tilápia grelhada + abobrinha refogada + brócolis" },
                    { nome: "Lanche", desc: "30g amendoim torrado sem sal" },
                    { nome: "Jantar", desc: "2 ovos + 100g frango desfiado + salada verde" },
                  ]
                },
              ].map((dia, i) => (
                <div key={i} className={styles.mealCard}>
                  <div style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid #f3f4f6', background: '#f0fdf4' }}>
                    <div style={{ fontWeight: 800, color: '#16a34a', fontSize: '1rem' }}>📅 {dia.dia}</div>
                  </div>
                  <div style={{ padding: '1rem 1.5rem' }}>
                    {dia.refeicoes.map((r, j) => (
                      <div key={j} style={{ display: 'flex', gap: '10px', marginBottom: '10px', paddingBottom: '10px', borderBottom: j < dia.refeicoes.length - 1 ? '1px dashed #e5e7eb' : 'none' }}>
                        <span className={styles.dot} style={{ marginTop: '8px' }} />
                        <div>
                          <div style={{ fontWeight: 700, color: '#374151', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>{r.nome}</div>
                          <div style={{ color: '#6b7280', fontSize: '0.92rem', fontWeight: 500 }}>{r.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA meio */}
          <div className={styles.premiumBanner} style={{ marginBottom: '2rem' }}>
            <div className={styles.premiumBadgeTop}>✦ PERSONALIZADO PARA VOCÊ</div>
            <div className={styles.premiumHeader}>
              <h3>Quer um cardápio low carb feito para você?</h3>
              <p>Nossa IA cria um plano completo com suas preferências em segundos, de graça.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu cardápio low carb →
            </Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          {/* Resultados esperados */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>05.</span>
              <span className={styles.qLabel}>O que esperar nos primeiros 30 dias?</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { semana: "Semana 1", resultado: "Perda de 1-3kg de peso hídrico (retenção de líquido), possível gripe low carb nos dias 2-4." },
                { semana: "Semana 2", resultado: "Energia aumentando, fome reduzindo, seu corpo começa a queimar gordura eficientemente." },
                { semana: "Semanas 3-4", resultado: "Perda de gordura consistente (0,5-1kg/semana), mais disposição, sono melhorado, menos inchaço." },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '1.25rem 1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: '#dcfce7', color: '#16a34a', fontWeight: 800, fontSize: '0.78rem', padding: '4px 12px', borderRadius: '99px', whiteSpace: 'nowrap', marginTop: '2px' }}>{item.semana}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>{item.resultado}</div>
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
                { q: "Posso comer feijão no low carb?", a: "O feijão tem bastante carboidrato (~40g por xícara cozida). No low carb estrito é limitado, mas no moderado você pode comer pequenas porções." },
                { q: "Low carb é saudável a longo prazo?", a: "Sim, para a maioria das pessoas. Estudos mostram benefícios para controle glicêmico, triglicerídeos e pressão arterial. Pessoas com doenças renais devem consultar médico." },
                { q: "Posso beber álcool no low carb?", a: "Com moderação. Cerveja e drinks açucarados são proibidos. Vinho seco e destilados (vodka, whisky) têm poucos carboidratos mas ainda assim interferem no metabolismo da gordura." },
                { q: "Low carb funciona para vegetarianos?", a: "Sim! Ovos, laticínios, tofu, castanhas e vegetais de baixo carboidrato são a base de um low carb vegetariano nutritivo." },
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
              O low carb é uma das dietas mais estudadas e eficazes para emagrecimento e melhora metabólica. Para iniciantes, a chave é <strong>não complicar</strong> — comece reduzindo açúcar, pão e arroz, e aumente proteínas e vegetais. Os resultados vêm naturalmente.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginTop: '1rem' }}>
              Com o Nutry.life, você não precisa planejar sozinho. Nossa IA monta um cardápio low carb completo com receitas brasileiras reais e modo de preparo passo a passo — em segundos e de graça.
            </p>
          </div>

          {/* CTA final */}
          <div className={styles.premiumBanner}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h3>Pronto para começar o low carb?</h3>
              <p>Gere seu cardápio low carb personalizado agora mesmo, de graça.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio low carb com alimentos brasileiros</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas com modo de preparo completo</div>
              <div className={styles.premiumFeatureItem}>✅ Macros detalhados por refeição</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu cardápio low carb →
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
              <Link href="/blog/o-que-comer-no-jejum-intermitente-16-8" style={{ textDecoration: 'none' }}>
                <div className={styles.mealCard} style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.75rem' }}>⏰</span>
                    <div>
                      <div style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem', marginBottom: '4px' }}>O que comer no jejum intermitente 16:8 — guia completo</div>
                      <div style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>8 min de leitura · Jejum Intermitente</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/cardapio-low-carb" style={{ textDecoration: 'none' }}>
                <div className={styles.mealCard} style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.75rem' }}>🥑</span>
                    <div>
                      <div style={{ fontWeight: 800, color: '#111827', fontSize: '0.95rem', marginBottom: '4px' }}>Cardápio low carb — gerado por IA</div>
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
        "headline": "Low carb para iniciantes: o que é, como começar e cardápio de exemplo",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2025-04-17",
        "description": "Guia completo de low carb para iniciantes com cardápio de exemplo para a primeira semana.",
      })}} />
    </>
  );
}
