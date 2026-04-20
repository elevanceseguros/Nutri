import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";
import Logo from "../../../components/Logo";

export const metadata: Metadata = {
  title: "Como Emagrecer Sem Passar Fome — 7 Estratégias que Funcionam | Nutry.life",
  description: "Descubra como emagrecer sem passar fome com 7 estratégias comprovadas. Sem dietas restritivas, sem sofrimento. Alimentação inteligente com alimentos brasileiros.",
  keywords: "como emagrecer sem passar fome, emagrecer sem dieta restritiva, como perder peso sem sofrer, estratégias para emagrecer, emagrecer com saúde",
  openGraph: {
    title: "Como Emagrecer Sem Passar Fome — 7 Estratégias que Funcionam",
    description: "7 estratégias comprovadas para emagrecer sem sofrimento e sem dietas radicais.",
    url: "https://nutry.life/blog/como-emagrecer-sem-passar-fome",
  },
};

export default function EmagrecerSemFome() {
  return (
    <>
      <header className={styles.header}>
        <Logo />
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
            <span style={{ color: '#22c55e' }}>Emagrecimento</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className={styles.tag}>Emagrecimento</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>20 de abril de 2026</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>· 10 min de leitura</span>
              <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '1rem' }}>
              Como emagrecer sem passar fome — 7 estratégias que funcionam de verdade
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: '0' }}>
              Esqueça as dietas radicais que te deixam com fome o dia todo. Veja como emagrecer de forma inteligente, sustentável e sem sofrimento usando alimentos brasileiros acessíveis.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: '2.5rem' }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Monte seu plano para emagrecer com IA</div>
              <div className={styles.tipText} style={{ marginBottom: '0.75rem' }}>
                Nossa IA monta um cardápio personalizado com déficit calórico ideal para o seu peso e objetivo — sem passar fome.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: 'inline-block', textDecoration: 'none', padding: '0.7rem 1.5rem', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Gerar meu plano grátis →
              </Link>
            </div>
          </div>

          {/* Intro */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>Por que as dietas radicais não funcionam?</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              A maioria das pessoas que tenta emagrecer comete o mesmo erro: cortar calorias demais de uma vez. Um déficit muito grande — abaixo de 1.200 kcal para mulheres ou 1.500 kcal para homens — ativa o mecanismo de sobrevivência do corpo, que começa a <strong>queimar músculo</strong> em vez de gordura e reduz o metabolismo para economizar energia.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginTop: '1rem' }}>
              O resultado é o efeito sanfona: você perde peso rápido, mas o metabolismo fica lento, a fome aumenta e em poucas semanas você recupera tudo que perdeu — às vezes com juros. A ciência é clara: <strong>déficits moderados e sustentáveis</strong> funcionam melhor no longo prazo.
            </p>
          </div>

          {/* 7 estratégias */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>7 estratégias para emagrecer sem passar fome</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Estratégia 1 */}
              <div className={styles.mealCard}>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                    <div style={{ background: '#22c55e', color: 'white', fontWeight: 800, fontSize: '1.1rem', width: '36px', height: '36px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                    <div style={{ fontWeight: 800, color: '#111827', fontSize: '1.05rem' }}>Priorize proteína em todas as refeições</div>
                  </div>
                  <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>
                    A proteína é o nutriente mais saciante que existe. Ela leva mais tempo para ser digerida, mantém os níveis de açúcar no sangue estáveis e reduz o hormônio da fome (grelina). Inclua ovos, frango, atum, iogurte grego ou feijão em cada refeição — você vai naturalmente comer menos sem esforço.
                  </p>
                  <div style={{ marginTop: '1rem', background: '#f0fdf4', borderRadius: '12px', padding: '0.75rem 1rem', fontSize: '0.88rem', color: '#166534', fontWeight: 600 }}>
                    💡 Meta: pelo menos 25-30g de proteína por refeição principal
                  </div>
                </div>
              </div>

              {/* Estratégia 2 */}
              <div className={styles.mealCard}>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                    <div style={{ background: '#22c55e', color: 'white', fontWeight: 800, fontSize: '1.1rem', width: '36px', height: '36px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                    <div style={{ fontWeight: 800, color: '#111827', fontSize: '1.05rem' }}>Coma mais volume, menos caloria</div>
                  </div>
                  <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>
                    O estômago responde ao volume de comida, não às calorias. Vegetais como brócolis, couve-flor, abobrinha e alface têm pouquíssimas calorias mas ocupam muito espaço no estômago. Comece cada refeição com uma salada grande — você chegará à parte principal com menos fome e vai comer naturalmente menos.
                  </p>
                  <div style={{ marginTop: '1rem', background: '#f0fdf4', borderRadius: '12px', padding: '0.75rem 1rem', fontSize: '0.88rem', color: '#166534', fontWeight: 600 }}>
                    💡 100g de brócolis = apenas 34 kcal. 100g de batata frita = 312 kcal
                  </div>
                </div>
              </div>

              {/* Estratégia 3 */}
              <div className={styles.mealCard}>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                    <div style={{ background: '#22c55e', color: 'white', fontWeight: 800, fontSize: '1.1rem', width: '36px', height: '36px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                    <div style={{ fontWeight: 800, color: '#111827', fontSize: '1.05rem' }}>Beba água antes de comer</div>
                  </div>
                  <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>
                    Beber 500ml de água 30 minutos antes da refeição reduz a ingestão calórica em até 13%, segundo estudos. O cérebro frequentemente confunde sede com fome — quando você sente fome fora de hora, tente beber um copo d'água primeiro e espere 15 minutos. Em muitos casos a fome passa.
                  </p>
                  <div style={{ marginTop: '1rem', background: '#f0fdf4', borderRadius: '12px', padding: '0.75rem 1rem', fontSize: '0.88rem', color: '#166634', fontWeight: 600 }}>
                    💡 Meta: 35ml de água por kg de peso por dia
                  </div>
                </div>
              </div>

              {/* Estratégia 4 */}
              <div className={styles.mealCard}>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                    <div style={{ background: '#22c55e', color: 'white', fontWeight: 800, fontSize: '1.1rem', width: '36px', height: '36px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</div>
                    <div style={{ fontWeight: 800, color: '#111827', fontSize: '1.05rem' }}>Não elimine carboidratos — escolha os certos</div>
                  </div>
                  <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>
                    Carboidratos não são vilões — carboidratos refinados são. Arroz branco, pão branco e açúcar causam picos de glicose seguidos de quedas bruscas que geram fome intensa. Troque por arroz integral, batata doce, aveia e frutas — eles têm fibras que desaceleram a digestão e mantêm a saciedade por horas.
                  </p>
                  <div style={{ marginTop: '1rem', background: '#f0fdf4', borderRadius: '12px', padding: '0.75rem 1rem', fontSize: '0.88rem', color: '#166534', fontWeight: 600 }}>
                    💡 Trocar arroz branco por integral já reduz o índice glicêmico em 30%
                  </div>
                </div>
              </div>

              {/* Estratégia 5 */}
              <div className={styles.mealCard}>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                    <div style={{ background: '#22c55e', color: 'white', fontWeight: 800, fontSize: '1.1rem', width: '36px', height: '36px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>5</div>
                    <div style={{ fontWeight: 800, color: '#111827', fontSize: '1.05rem' }}>Coma devagar e sem distrações</div>
                  </div>
                  <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>
                    O sinal de saciedade leva 20 minutos para chegar do estômago ao cérebro. Quem come rápido já consumiu muito mais do que precisava quando finalmente sente que está satisfeito. Mastigar bem, comer sem celular e fazer pausas durante a refeição são hábitos simples que podem reduzir a ingestão calórica em 15-20% sem nenhum esforço consciente.
                  </p>
                </div>
              </div>

              {/* Estratégia 6 */}
              <div className={styles.mealCard}>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                    <div style={{ background: '#22c55e', color: 'white', fontWeight: 800, fontSize: '1.1rem', width: '36px', height: '36px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>6</div>
                    <div style={{ fontWeight: 800, color: '#111827', fontSize: '1.05rem' }}>Durma bem — o sono controla a fome</div>
                  </div>
                  <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>
                    Dormir mal aumenta a grelina (hormônio da fome) em até 24% e reduz a leptina (hormônio da saciedade) em 18%. Em outras palavras, uma noite mal dormida literalmente faz você sentir mais fome no dia seguinte e se satisfazer menos com a mesma quantidade de comida. Priorizar 7-8 horas de sono é uma das estratégias mais subestimadas para emagrecer.
                  </p>
                  <div style={{ marginTop: '1rem', background: '#f0fdf4', borderRadius: '12px', padding: '0.75rem 1rem', fontSize: '0.88rem', color: '#166534', fontWeight: 600 }}>
                    💡 Pessoas que dormem menos de 6h consomem em média 385 kcal a mais por dia
                  </div>
                </div>
              </div>

              {/* Estratégia 7 */}
              <div className={styles.mealCard}>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                    <div style={{ background: '#22c55e', color: 'white', fontWeight: 800, fontSize: '1.1rem', width: '36px', height: '36px', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>7</div>
                    <div style={{ fontWeight: 800, color: '#111827', fontSize: '1.05rem' }}>Planeje suas refeições com antecedência</div>
                  </div>
                  <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>
                    A maioria dos excessos alimentares acontece quando você está com fome e sem nada planejado — é aí que a pizza ou o salgado ganham. Planejar o cardápio do dia pela manhã elimina as decisões impulsivas e reduz drasticamente a chance de comer algo fora do plano. Ferramentas como o Nutry.life fazem isso em segundos com IA.
                  </p>
                  <div style={{ marginTop: '1rem', background: '#f0fdf4', borderRadius: '12px', padding: '0.75rem 1rem', fontSize: '0.88rem', color: '#166534', fontWeight: 600 }}>
                    💡 Pessoas que planejam as refeições consomem 23% menos calorias no total
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Dica */}
          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>💡</div>
            <div>
              <div className={styles.tipTitle}>O déficit ideal para emagrecer sem fome</div>
              <div className={styles.tipText}>
                Um déficit de <strong>300 a 500 kcal por dia</strong> é suficiente para perder 0,5 a 1kg de gordura por semana sem passar fome. É mais lento que dietas radicais, mas os resultados são permanentes porque você preserva o metabolismo e a massa muscular.
              </div>
            </div>
          </div>

          {/* Cardápio exemplo */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Exemplo de cardápio saciante para emagrecer</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              Veja um exemplo de cardápio com <strong>1.500 kcal</strong> que aplica todas as 7 estratégias acima:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { horario: "☀️ Café da manhã — 7h", refeicao: "3 ovos mexidos + 1 fatia pão integral + 1 maçã + café sem açúcar", kcal: "380 kcal", proteina: "24g proteína" },
                { horario: "🍽️ Almoço — 12h", refeicao: "150g frango grelhado + salada grande + 4 colheres arroz integral + feijão", kcal: "520 kcal", proteina: "38g proteína" },
                { horario: "🍎 Lanche — 15h30", refeicao: "1 iogurte grego natural + 1 banana + 20g castanha", kcal: "280 kcal", proteina: "18g proteína" },
                { horario: "🌙 Jantar — 19h", refeicao: "150g tilápia grelhada + legumes refogados no azeite + brócolis", kcal: "320 kcal", proteina: "34g proteína" },
              ].map((r, i) => (
                <div key={i} className={styles.mealCard}>
                  <div style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{r.horario}</div>
                    <div style={{ fontSize: '0.92rem', color: '#374151', fontWeight: 600, lineHeight: 1.5, marginBottom: '6px' }}>{r.refeicao}</div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ background: '#dcfce7', color: '#166534', fontWeight: 800, fontSize: '0.78rem', padding: '2px 10px', borderRadius: '99px' }}>{r.kcal}</span>
                      <span style={{ background: '#eff6ff', color: '#1e40af', fontWeight: 800, fontSize: '0.78rem', padding: '2px 10px', borderRadius: '99px' }}>{r.proteina}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.macrosCard} style={{ marginTop: '1rem' }}>
              {[
                { val: "1500", lbl: "kcal total" },
                { val: "114g", lbl: "proteína" },
                { val: "4", lbl: "refeições" },
                { val: "-500", lbl: "déficit kcal" },
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
              <h3>Quer um cardápio assim feito para você?</h3>
              <p>Nossa IA calcula seu déficit calórico ideal e monta o cardápio completo com receitas brasileiras.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu plano para emagrecer →
            </Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          {/* Erros comuns */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>5 erros que sabotam o emagrecimento</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { erro: "Pular o café da manhã", solucao: "Quem pula o café da manhã tende a comer muito mais no almoço e beliscar mais ao longo do dia. Uma refeição matinal proteica regula o apetite." },
                { erro: "Comer 'comida de dieta' mas em quantidade maior", solucao: "Barra de cereal, iogurte zero e biscoito integral ainda têm calorias. Tamanho da porção importa mesmo com alimentos saudáveis." },
                { erro: "Beber calorias sem perceber", solucao: "Suco, refrigerante, cerveja e café com leite adicionam centenas de calorias invisíveis. Água, chá e café preto são aliados do emagrecimento." },
                { erro: "Não dormir o suficiente", solucao: "Como vimos, dormir mal aumenta a fome hormonal. É impossível emagrecer consistentemente com privação de sono crônica." },
                { erro: "Esperar resultados rápidos demais", solucao: "Perder 0,5kg por semana é excelente e sustentável. Quem espera 5kg em 2 semanas vai se frustrar e desistir. Consistência bate intensidade." },
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
              <span className={styles.qNum}>05.</span>
              <span className={styles.qLabel}>Perguntas frequentes</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: "Quantas calorias preciso cortar para emagrecer?", a: "Um déficit de 300 a 500 kcal por dia é o ideal. Isso equivale a perder 0,5 a 1kg por semana de forma saudável e sustentável." },
                { q: "Posso comer carboidrato e emagrecer?", a: "Sim! O segredo é escolher carboidratos de baixo índice glicêmico (arroz integral, batata doce, aveia) e controlar as porções. Eliminar carboidratos completamente é desnecessário e difícil de manter." },
                { q: "Quanto tempo para ver resultados?", a: "Com consistência, a maioria das pessoas nota diferença na balança e nas medidas em 2 a 3 semanas. Resultados visíveis no espelho geralmente aparecem em 4 a 8 semanas." },
                { q: "Preciso fazer exercício para emagrecer?", a: "Não obrigatoriamente — a alimentação é responsável por 70-80% do resultado. Mas exercício ajuda a preservar músculo, acelerar o metabolismo e melhorar o humor durante o processo." },
                { q: "Por que estou fazendo tudo certo mas não emagreço?", a: "As causas mais comuns são: subestimar as calorias consumidas, reter líquido (que esconde a perda de gordura na balança), problemas hormonais ou simplesmente pouco tempo de consistência. Se persistir, procure um nutricionista." },
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
              <span className={styles.qNum}>06.</span>
              <span className={styles.qLabel}>Conclusão</span>
            </div>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
              Emagrecer sem passar fome não é mito — é ciência. As 7 estratégias deste artigo funcionam porque respeitam a fisiologia do corpo em vez de lutar contra ela. Não é sobre força de vontade, é sobre comer os alimentos certos, nas quantidades certas e nos momentos certos.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, marginTop: '1rem' }}>
              Com o Nutry.life, você não precisa calcular nada manualmente. Nossa IA usa seu peso, altura, idade e objetivo para montar um cardápio completo com déficit calórico ideal, receitas brasileiras reais e modo de preparo passo a passo — em segundos e de graça.
            </p>
          </div>

          {/* CTA final */}
          <div className={styles.premiumBanner}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h3>Pronto para emagrecer sem passar fome?</h3>
              <p>Gere seu cardápio personalizado agora mesmo, de graça.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Déficit calórico calculado pelo seu peso</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas brasileiras com modo de preparo</div>
              <div className={styles.premiumFeatureItem}>✅ Cardápio saciante e saboroso</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu plano para emagrecer →
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
                { href: "/blog/quantas-gramas-de-proteina-por-dia", emoji: "💪", titulo: "Quantas gramas de proteína preciso comer por dia?", tempo: "9 min · Proteína" },
                { href: "/blog/low-carb-para-iniciantes", emoji: "🥑", titulo: "Low carb para iniciantes: o que é, como começar e cardápio", tempo: "10 min · Low Carb" },
                { href: "/plano-alimentar-para-emagrecer", emoji: "🔥", titulo: "Plano alimentar para emagrecer — gerado por IA", tempo: "Cardápio · Gerar agora" },
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
        "headline": "Como emagrecer sem passar fome — 7 estratégias que funcionam de verdade",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2026-04-20",
        "description": "7 estratégias comprovadas para emagrecer sem sofrimento e sem dietas radicais.",
        "mainEntity": {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Quantas calorias preciso cortar para emagrecer?", "acceptedAnswer": { "@type": "Answer", "text": "Um déficit de 300 a 500 kcal por dia é o ideal para perder 0,5 a 1kg por semana." } },
            { "@type": "Question", "name": "Posso comer carboidrato e emagrecer?", "acceptedAnswer": { "@type": "Answer", "text": "Sim! O segredo é escolher carboidratos de baixo índice glicêmico e controlar as porções." } },
            { "@type": "Question", "name": "Preciso fazer exercício para emagrecer?", "acceptedAnswer": { "@type": "Answer", "text": "Não obrigatoriamente — a alimentação é responsável por 70-80% do resultado." } },
          ]
        }
      })}} />
    </>
  );
}
