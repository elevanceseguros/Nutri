import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Jejum Intermitente 16:8 para Iniciantes em SP: Guia Completo | Nutry.life",
  description: "Aprenda como começar o jejum intermitente 16:8 do zero. Horários ideais, o que comer, o que evitar, benefícios e erros comuns para iniciantes em São Paulo.",
  keywords: "jejum intermitente 16 8 para iniciantes, como começar jejum intermitente, jejum intermitente SP, janela alimentar 16 8, jejum intermitente iniciante",
  openGraph: {
    title: "Jejum Intermitente 16:8 para Iniciantes — Guia Completo | Nutry.life",
    description: "Como começar o jejum intermitente 16:8 do zero: horários, alimentação, benefícios e erros comuns.",
    url: "https://nutry.life/blog/jejum-intermitente-16-8-para-iniciantes",
  },
};

export default function JejumIntermitente168Iniciantes() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Link href="/login" className={styles.btnEntrar}>Entrar</Link>
          <div className={styles.badge}>Beta</div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="fade-up">

          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "2rem", fontSize: "0.85rem", color: "#9ca3af", fontWeight: 600 }}>
            <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>Início</Link>
            <span>→</span>
            <Link href="/blog" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</Link>
            <span>→</span>
            <span style={{ color: "#22c55e" }}>Jejum Intermitente</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Jejum Intermitente</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>24 de abril de 2025</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 9 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Jejum intermitente 16:8 para iniciantes: guia completo para começar hoje
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Entenda como funciona o jejum 16:8, qual o melhor horário para começar, o que comer na janela alimentar e os erros mais comuns de quem está começando.
            </p>
          </div>

          {/* CTA topo */}
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Gere seu plano de jejum intermitente personalizado</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>
                Nossa IA monta um cardápio para sua janela alimentar 16:8 com receitas brasileiras adaptadas para iniciantes.
              </div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Gerar meu plano de jejum →
              </Link>
            </div>
          </div>

          {/* Bloco 01 — O que é */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>01.</span>
              <span className={styles.qLabel}>O que é o jejum intermitente 16:8?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              O jejum intermitente 16:8 é um protocolo alimentar onde você <strong>fica 16 horas sem comer</strong> e concentra todas as suas refeições em uma <strong>janela de 8 horas</strong>. Não é uma dieta restritiva — você não precisa contar calorias nem eliminar grupos alimentares.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginTop: "1rem" }}>
              A lógica é simples: ao ficar mais tempo em jejum, seu corpo esgota os estoques de glicose e começa a <strong>queimar gordura como fonte de energia</strong>. Além disso, o jejum ativa processos celulares de limpeza e regeneração — um mecanismo chamado autofagia.
            </p>
            <div className={styles.macrosCard} style={{ marginTop: "1.5rem" }}>
              {[
                { val: "16h", lbl: "período de jejum" },
                { val: "8h", lbl: "janela alimentar" },
                { val: "0 kcal", lbl: "durante o jejum" },
              ].map((m) => (
                <div key={m.lbl} className={styles.macroItem}>
                  <span className={styles.macroVal} style={{ fontSize: "1.2rem" }}>{m.val}</span>
                  <span className={styles.macroLbl}>{m.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 02 — Benefícios */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>02.</span>
              <span className={styles.qLabel}>Benefícios do jejum 16:8 comprovados pela ciência</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { emoji: "🔥", titulo: "Perda de gordura", descricao: "O corpo usa gordura como combustível nas horas finais do jejum, especialmente gordura abdominal." },
                { emoji: "🩸", titulo: "Controle da glicemia", descricao: "Reduz os picos de insulina e melhora a sensibilidade à insulina — ótimo para pré-diabéticos e diabéticos tipo 2." },
                { emoji: "🧠", titulo: "Clareza mental", descricao: "Muitos iniciantes relatam mais foco e energia durante o período de jejum após a adaptação." },
                { emoji: "🔄", titulo: "Autofagia", descricao: "O corpo 'recicla' células danificadas — associado à prevenção de doenças e longevidade." },
                { emoji: "😴", titulo: "Melhora do sono", descricao: "Não jantar muito tarde melhora a qualidade do sono e a recuperação noturna." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 800, color: "#166534", marginBottom: "4px", fontSize: "0.95rem" }}>{item.titulo}</div>
                      <div style={{ fontSize: "0.92rem", color: "#15803d", fontWeight: 500, lineHeight: 1.6 }}>{item.descricao}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 03 — Horários */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>03.</span>
              <span className={styles.qLabel}>Qual o melhor horário para a janela 16:8?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              O melhor horário é aquele que <strong>cabe na sua rotina</strong>. A maioria dos iniciantes usa o sono como parte do jejum — assim fica bem mais fácil aguentar as 16 horas. Veja os dois perfis mais comuns:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "1.25rem" }}>
              {[
                {
                  titulo: "🌞 Perfil manhã (mais popular)",
                  horarios: [
                    { icone: "🚫", texto: "Jejum: 20h às 12h (dormindo das 23h às 7h)" },
                    { icone: "🍽️", texto: "Primeira refeição: 12h (almoço)" },
                    { icone: "🍽️", texto: "Segunda refeição: 17h–18h" },
                    { icone: "🚫", texto: "Janela fecha às 20h" },
                  ],
                  obs: "Ideal para quem trabalha de dia, evita café da manhã sem muita dificuldade e tem rotina no escritório ou home office.",
                },
                {
                  titulo: "🌙 Perfil tardio (para quem dorme tarde)",
                  horarios: [
                    { icone: "🚫", texto: "Jejum: 22h às 14h (dormindo 01h às 9h)" },
                    { icone: "🍽️", texto: "Primeira refeição: 14h" },
                    { icone: "🍽️", texto: "Segunda refeição: 20h–21h" },
                    { icone: "🚫", texto: "Janela fecha às 22h" },
                  ],
                  obs: "Bom para quem tem horário mais flexível, trabalha à tarde/noite ou tem dificuldade de resistir ao café da manhã.",
                },
              ].map((perfil, i) => (
                <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "12px", fontSize: "1rem" }}>{perfil.titulo}</div>
                  {perfil.horarios.map((h, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "#374151", fontWeight: 600, marginBottom: "6px" }}>
                      <span>{h.icone}</span>
                      <span>{h.texto}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: "10px", fontSize: "0.85rem", color: "#6b7280", fontWeight: 500, fontStyle: "italic", lineHeight: 1.6 }}>
                    💡 {perfil.obs}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 04 — O que comer */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>04.</span>
              <span className={styles.qLabel}>O que comer na janela alimentar?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              O jejum intermitente <strong>não define o que você come</strong> — só quando você come. Mas para aproveitar ao máximo os resultados, a qualidade da alimentação importa muito. Foque em:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1.25rem" }}>
              {[
                { categoria: "🥩 Proteínas (prioridade)", itens: ["Frango, peixe, carne vermelha magra", "Ovos (excelente e barato)", "Atum, sardinha, salmão", "Whey protein (se treinar)"] },
                { categoria: "🥦 Vegetais e fibras", itens: ["Brócolis, espinafre, couve", "Abobrinha, berinjela, pepino", "Alface, rúcula, agrião", "Tomate, pimentão"] },
                { categoria: "🍚 Carboidratos de qualidade", itens: ["Arroz integral, batata-doce", "Aveia, mandioca, inhame", "Leguminosas: feijão, lentilha, grão-de-bico", "Frutas (manga, banana, maçã)"] },
                { categoria: "🥑 Gorduras boas", itens: ["Azeite extravirgem", "Abacate", "Castanhas, nozes, amêndoas", "Ovos e peixes gordurosos"] },
              ].map((bloco, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontWeight: 800, color: "#166534", marginBottom: "10px", fontSize: "1rem" }}>{bloco.categoria}</div>
                  {bloco.itens.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", color: "#15803d", fontWeight: 600, marginBottom: "6px" }}>
                      <span className={styles.dot} />
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 05 — O que pode durante o jejum */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>05.</span>
              <span className={styles.qLabel}>O que pode beber durante o jejum?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              A regra básica é: <strong>zero calorias durante o jejum</strong>. Algumas bebidas são liberadas:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "1.25rem" }}>
              {[
                { ok: true, item: "✅ Água — o mais importante, beba bastante" },
                { ok: true, item: "✅ Água com gás (sem sódio adicionado)" },
                { ok: true, item: "✅ Café preto — sem açúcar, leite ou adoçante" },
                { ok: true, item: "✅ Chá verde, chá preto — sem adoçar" },
                { ok: false, item: "❌ Café com leite, cappuccino, latte" },
                { ok: false, item: "❌ Suco de fruta — mesmo natural, tem calorias" },
                { ok: false, item: "❌ Refrigerante diet/zero — debate ainda aberto, melhor evitar" },
                { ok: false, item: "❌ Qualquer bebida com proteína ou gordura (ex: colágeno)" },
              ].map((b, i) => (
                <div key={i} style={{
                  padding: "0.75rem 1.25rem",
                  borderRadius: "12px",
                  background: b.ok ? "#f0fdf4" : "#fef2f2",
                  border: `1px solid ${b.ok ? "#bbf7d0" : "#fecaca"}`,
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: b.ok ? "#166534" : "#991b1b",
                }}>
                  {b.item}
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 06 — Cardápio exemplo */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>06.</span>
              <span className={styles.qLabel}>Cardápio exemplo para o primeiro dia (janela 12h–20h)</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500, marginBottom: "1.25rem" }}>
              Quer ter uma ideia prática de como fica um dia de jejum 16:8? Veja este exemplo com refeições equilibradas, fáceis de preparar:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                {
                  horario: "12h — Refeição 1 (Almoço completo)",
                  cor: "#f0fdf4",
                  borda: "#bbf7d0",
                  txtCor: "#166534",
                  itens: [
                    "🍚 Arroz integral (4 colheres) + feijão (1 concha)",
                    "🥩 Frango grelhado com alho e limão (150g)",
                    "🥦 Brócolis refogado no azeite + cenoura",
                    "🥗 Salada de alface e tomate",
                    "💧 Água ou suco de limão sem açúcar",
                  ],
                },
                {
                  horario: "15h — Lanche (opcional)",
                  cor: "#fffbeb",
                  borda: "#fde68a",
                  txtCor: "#92400e",
                  itens: [
                    "🍌 1 banana ou 1 maçã",
                    "🥜 Punhado de castanhas ou nozes",
                    "☕ Café preto sem açúcar (opcional)",
                  ],
                },
                {
                  horario: "18h–19h — Refeição 2 (Jantar leve)",
                  cor: "#f0fdf4",
                  borda: "#bbf7d0",
                  txtCor: "#166534",
                  itens: [
                    "🥚 Omelete de 3 ovos com espinafre e queijo",
                    "🍠 Batata-doce assada (150g)",
                    "🥗 Salada verde com azeite e vinagre",
                    "💧 Água com gás e limão",
                  ],
                },
                {
                  horario: "A partir das 20h — Jejum começa",
                  cor: "#f9fafb",
                  borda: "#e5e7eb",
                  txtCor: "#374151",
                  itens: [
                    "💧 Apenas água, chá sem açúcar ou café preto",
                    "🚫 Nenhuma refeição até as 12h do dia seguinte",
                  ],
                },
              ].map((refeicao, i) => (
                <div key={i} style={{ background: refeicao.cor, border: `1px solid ${refeicao.borda}`, borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontWeight: 800, color: refeicao.txtCor, marginBottom: "10px", fontSize: "0.95rem" }}>{refeicao.horario}</div>
                  {refeicao.itens.map((item, j) => (
                    <div key={j} style={{ fontSize: "0.92rem", color: refeicao.txtCor, fontWeight: 600, marginBottom: "6px", lineHeight: 1.6 }}>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 07 — Erros comuns */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>07.</span>
              <span className={styles.qLabel}>7 erros comuns de quem está começando</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { num: "01", erro: "Quebrar o jejum com suco ou café com leite", fix: "Café preto ou água até a hora da primeira refeição." },
                { num: "02", erro: "Compensar o jejum comendo demais na janela", fix: "Coma o que comeria normalmente — não é licença para exagerar." },
                { num: "03", erro: "Desistir nos primeiros 3–5 dias de fome", fix: "O corpo leva uma semana para adaptar. Fome intensa no início é normal e passa." },
                { num: "04", erro: "Não beber água suficiente", fix: "Durante o jejum a hidratação é fundamental — beba pelo menos 2L de água." },
                { num: "05", erro: "Fazer jejum e comer ultra-processados na janela", fix: "Qualidade alimentar importa. Não adianta nada jejar e comer fritura o dia todo." },
                { num: "06", erro: "Treinar intenso no início sem adaptar", fix: "Se treinar em jejum, comece com treinos leves e vá aumentando gradualmente." },
                { num: "07", erro: "Não adaptar os horários à rotina real", fix: "Escolha uma janela que você consiga manter por semanas, não só dois dias." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ background: "#dc2626", color: "white", borderRadius: "8px", padding: "2px 8px", fontSize: "0.75rem", fontWeight: 800, flexShrink: 0, marginTop: "2px" }}>{item.num}</div>
                    <div>
                      <div style={{ fontWeight: 800, color: "#991b1b", marginBottom: "4px", fontSize: "0.92rem" }}>❌ {item.erro}</div>
                      <div style={{ fontSize: "0.88rem", color: "#166534", fontWeight: 600, lineHeight: 1.6 }}>✅ {item.fix}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 08 — Quem não deve fazer */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>08.</span>
              <span className={styles.qLabel}>Quem não deve fazer jejum intermitente?</span>
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
              O jejum intermitente é seguro para a maioria das pessoas saudáveis, mas <strong>não é indicado para todos</strong>. Consulte um médico ou nutricionista antes de começar se você:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "1rem" }}>
              {[
                "Tem diabetes tipo 1 ou usa insulina",
                "Está grávida ou amamentando",
                "Tem histórico de transtornos alimentares",
                "Usa medicamentos que precisam ser tomados com alimento",
                "É menor de 18 anos",
                "Tem pressão arterial muito baixa",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "#991b1b", fontWeight: 600, padding: "0.6rem 1rem", background: "#fef2f2", borderRadius: "10px", border: "1px solid #fecaca" }}>
                  <span>⚠️</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco 09 — Primeira semana */}
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>09.</span>
              <span className={styles.qLabel}>O que esperar na primeira semana</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { dia: "Dias 1–2", desc: "Fome mais intensa, especialmente próxima ao horário que você costumava comer. Beba água e aguente — é só hábito quebrando.", cor: "#fef2f2", borda: "#fecaca", txt: "#991b1b" },
                { dia: "Dias 3–4", desc: "A fome começa a diminuir. Alguns sentem leve dor de cabeça (é normal — hidrate bem e não corte sal de vez).", cor: "#fffbeb", borda: "#fde68a", txt: "#92400e" },
                { dia: "Dias 5–7", desc: "O corpo começa a adaptar. Muitos já relatam mais clareza mental e menos fome no período de jejum.", cor: "#f0fdf4", borda: "#bbf7d0", txt: "#166534" },
                { dia: "Após 2 semanas", desc: "O jejum vira rotina. A janela alimentar se encaixa na vida e a fome matinal praticamente desaparece.", cor: "#eff6ff", borda: "#bfdbfe", txt: "#1e40af" },
              ].map((semana, i) => (
                <div key={i} style={{ background: semana.cor, border: `1px solid ${semana.borda}`, borderRadius: "16px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontWeight: 800, color: semana.txt, marginBottom: "6px", fontSize: "0.95rem" }}>{semana.dia}</div>
                  <div style={{ fontSize: "0.92rem", color: semana.txt, fontWeight: 500, lineHeight: 1.7 }}>{semana.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Premium */}
          <div className={styles.premiumBanner} style={{ marginTop: "3rem" }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Pronto para montar seu cardápio de jejum?</h2>
              <p>Gere seu plano alimentar personalizado para a janela 16:8 com receitas brasileiras, macros detalhados e lista de compras.</p>
            </div>
            <div className={styles.premiumFeatures}>
              <div className={styles.premiumFeatureItem}>✅ Cardápio completo para janela 8h</div>
              <div className={styles.premiumFeatureItem}>✅ Receitas com ingredientes do Brasil</div>
              <div className={styles.premiumFeatureItem}>✅ Calorias e macros por refeição</div>
              <div className={styles.premiumFeatureItem}>✅ Adaptado para emagrecimento ou manutenção</div>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: "none", display: "block" }}>
              Gerar meu plano de jejum grátis →
            </Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

          {/* Leia também */}
          <div style={{ marginTop: "3rem" }}>
            <div className={styles.qLabelRow}>
              <span className={styles.qNum}>📚</span>
              <span className={styles.qLabel}>Leia também</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link href="/blog/o-que-comer-no-jejum-intermitente-16-8" style={{ textDecoration: "none" }}>
                <div className={styles.mealCard} style={{ padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "1.75rem" }}>⏰</span>
                    <div>
                      <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.95rem", marginBottom: "4px" }}>O que comer no jejum intermitente 16:8 — guia completo</div>
                      <div style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>8 min de leitura · Jejum Intermitente</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/blog/como-emagrecer-sem-passar-fome" style={{ textDecoration: "none" }}>
                <div className={styles.mealCard} style={{ padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "1.75rem" }}>🔥</span>
                    <div>
                      <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.95rem", marginBottom: "4px" }}>Como emagrecer sem passar fome — 7 estratégias que funcionam</div>
                      <div style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>10 min de leitura · Emagrecimento</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/blog/low-carb-para-iniciantes" style={{ textDecoration: "none" }}>
                <div className={styles.mealCard} style={{ padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "1.75rem" }}>🥑</span>
                    <div>
                      <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.95rem", marginBottom: "4px" }}>Low carb para iniciantes: o que é, como começar e cardápio de exemplo</div>
                      <div style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>10 min de leitura · Low Carb</div>
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
        "headline": "Jejum intermitente 16:8 para iniciantes: guia completo para começar hoje",
        "author": { "@type": "Organization", "name": "Equipe Nutry.life" },
        "publisher": { "@type": "Organization", "name": "Nutry.life", "url": "https://nutry.life" },
        "datePublished": "2025-04-24",
        "description": "Aprenda como começar o jejum intermitente 16:8 do zero: horários ideais, o que comer, o que evitar, benefícios e erros comuns para iniciantes.",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nutry.life/blog/jejum-intermitente-16-8-para-iniciantes" },
        "keywords": ["jejum intermitente 16 8", "jejum intermitente iniciante", "como começar jejum intermitente", "janela alimentar 16 8"],
      })}} />
    </>
  );
}
