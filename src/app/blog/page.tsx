import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Blog — Nutrição, Dietas e Receitas Saudáveis | Nutry.life",
  description: "Artigos sobre nutrição, dietas, jejum intermitente, low carb, vegano e muito mais. Conteúdo gratuito da equipe Nutry.life.",
  keywords: "blog nutrição, artigos dieta, jejum intermitente, low carb iniciantes, alimentação saudável",
  openGraph: {
    title: "Blog Nutry.life — Nutrição e Alimentação Saudável",
    description: "Artigos completos sobre nutrição, dietas e receitas saudáveis.",
    url: "https://nutry.life/blog",
  },
};

const posts = [
  {
    slug: "whey-protein-vs-caseina-diferencas",
    titulo: "Whey Protein vs Caseína: Diferenças e Quando Usar",
    descricao: "Compare digestão, aminoácidos, saciedade e praticidade para entender quando whey ou caseína faz mais sentido.",
    data: "31 de julho de 2026",
    tempo: "8 min de leitura",
    tag: "Suplementação",
    emoji: "🥛",
  },
  {
    slug: "probioticos-cepas-que-funcionam",
    titulo: "Probióticos: Quais Cepas Funcionam e Para Que Servem?",
    descricao: "Entenda por que o efeito depende da cepa, da indicação e da dose estudada — e aprenda a ler o rótulo.",
    data: "30 de julho de 2026",
    tempo: "9 min de leitura",
    tag: "Saúde e Nutrição",
    emoji: "🦠",
  },
  {
    slug: "vitamina-b12-veganos-deficiencia-suplementacao",
    titulo: "Vitamina B12 para Veganos: Deficiência, Exames e Suplementação",
    descricao: "Por que dietas veganas exigem uma fonte confiável de B12, quais exames ajudam e quando buscar orientação.",
    data: "29 de julho de 2026",
    tempo: "8 min de leitura",
    tag: "Saúde e Nutrição",
    emoji: "🧬",
  },
  {
    slug: "como-organizar-feira-semanal",
    titulo: "Como Organizar a Feira Semanal de Forma Saudável e Sem Desperdício",
    descricao: "Como Organizar a Feira Semanal de Forma Saudável e Sem Desperdício",
    data: "22 de junho de 2026",
    tempo: "6 min de leitura",
    tag: "Planejamento",
    emoji: "🛒",
  },
  {
    slug: "zinco-na-alimentacao",
    titulo: "Zinco na Alimentação: Para Que Serve e Quais Alimentos São Boas Fontes",
    descricao: "Zinco na Alimentação: Para Que Serve e Quais Alimentos São Boas Fontes",
    data: "21 de junho de 2026",
    tempo: "6 min de leitura",
    tag: "Nutrição",
    emoji: "🦪",
  },
  {
    slug: "dieta-cetogenica-funciona",
    titulo: "Dieta Cetogênica Funciona Mesmo? O Que a Ciência Diz",
    descricao: "Dieta Cetogênica Funciona Mesmo? O Que a Ciência Diz",
    data: "20 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Dietas",
    emoji: "🥑",
  },
  {
    slug: "alimentos-ricos-em-ferro",
    titulo: "Alimentos Ricos em Ferro: Quais Funcionam de Verdade",
    descricao: "Alimentos Ricos em Ferro: Quais Funcionam de Verdade",
    data: "19 de junho de 2026",
    tempo: "6 min de leitura",
    tag: "Nutrição",
    emoji: "🥩",
  },
  {
    slug: "intolerancia-a-lactose-alimentacao",
    titulo: "Intolerância à Lactose: O Que Comer e Como Não Perder Nutrientes",
    descricao: "Intolerância à Lactose: O Que Comer e Como Não Perder Nutrientes",
    data: "18 de junho de 2026",
    tempo: "6 min de leitura",
    tag: "Saúde",
    emoji: "🥛",
  },
  {
    slug: "dieta-mediterranea-guia",
    titulo: "Dieta Mediterrânea: Guia Completo Para Começar Sem Complicação",
    descricao: "Dieta Mediterrânea: Guia Completo Para Começar Sem Complicação",
    data: "17 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Dietas",
    emoji: "🫒",
  },
  {
    slug: "omega-3-beneficios-e-fontes",
    titulo: "Ômega-3: Benefícios Reais e as Melhores Fontes Além do Peixe",
    descricao: "Ômega-3: Benefícios Reais e as Melhores Fontes Além do Peixe",
    data: "16 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🐟",
  },
  {
    slug: "vitaminas-para-imunidade",
    titulo: "Vitaminas Para Imunidade: O Que Realmente Funciona",
    descricao: "Vitaminas Para Imunidade: O Que Realmente Funciona",
    data: "15 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🛡️",
  },
  {
    slug: "o-que-comer-no-cafe-da-manha-para-emagrecer",
    titulo: "O Que Comer no Café da Manhã Para Emagrecer",
    descricao: "O Que Comer no Café da Manhã Para Emagrecer",
    data: "14 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🌅",
  },
  {
    slug: "alimentos-que-dao-saciedade",
    titulo: "Alimentos Que Dão Mais Saciedade: Como Comer Menos Sem Passar Fome",
    descricao: "Alimentos Que Dão Mais Saciedade: Como Comer Menos Sem Passar Fome",
    data: "13 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🥗",
  },
  {
    slug: "como-ganhar-massa-sem-suplemento",
    titulo: "Como Ganhar Massa Muscular Sem Suplemento",
    descricao: "Como Ganhar Massa Muscular Sem Suplemento",
    data: "12 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "💪",
  },
  {
    slug: "diabetes-tipo-2-alimentacao",
    titulo: "Alimentação Para Diabetes Tipo 2: Controle a Glicose Pelo Prato",
    descricao: "Alimentação Para Diabetes Tipo 2: Controle a Glicose Pelo Prato",
    data: "11 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🩺",
  },
  {
    slug: "proteina-para-vegetarianos",
    titulo: "Proteína Para Vegetarianos: As Melhores Fontes",
    descricao: "Proteína Para Vegetarianos: As Melhores Fontes",
    data: "10 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🌱",
  },
  {
    slug: "como-comer-bem-com-pouco-dinheiro",
    titulo: "Como Comer Bem Com Pouco Dinheiro",
    descricao: "Como Comer Bem Com Pouco Dinheiro",
    data: "9 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "💰",
  },
  {
    slug: "alimentacao-anti-envelhecimento",
    titulo: "Alimentação Anti-Envelhecimento: Nutrientes Que Protegem Suas Células",
    descricao: "Alimentação Anti-Envelhecimento: Nutrientes Que Protegem Suas Células",
    data: "8 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "⏳",
  },
  {
    slug: "como-perder-gordura-abdominal",
    titulo: "Como Perder Gordura Abdominal: O Que a Ciência Diz",
    descricao: "Como Perder Gordura Abdominal: O Que a Ciência Diz",
    data: "7 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🎯",
  },
  {
    slug: "dieta-vegetariana-proteina",
    titulo: "Dieta Vegetariana: Como Garantir Proteína Suficiente",
    descricao: "Dieta Vegetariana: Como Garantir Proteína Suficiente",
    data: "6 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🥦",
  },
  {
    slug: "alimentacao-pre-treino",
    titulo: "Alimentação Pré-Treino: O Que Comer Para Mais Energia",
    descricao: "Alimentação Pré-Treino: O Que Comer Para Mais Energia",
    data: "5 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "💪",
  },
  {
    slug: "como-ler-rotulo-de-alimentos",
    titulo: "Como Ler Rótulo de Alimentos: O Guia Definitivo",
    descricao: "Como Ler Rótulo de Alimentos: O Guia Definitivo",
    data: "4 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🏷️",
  },
  {
    slug: "dieta-para-tireoide",
    titulo: "Dieta Para Tireoide: O Que Comer e Evitar",
    descricao: "Dieta Para Tireoide: O Que Comer e Evitar",
    data: "3 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🦋",
  },
  {
    slug: "planejamento-alimentar-semanal",
    titulo: "Planejamento Alimentar Semanal: Como Planejar Refeições e Poupar Tempo",
    descricao: "Planejar as refeições da semana economiza tempo, reduz desperdício e facilita manter uma alimentação saudável.",
    data: "2 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Organização",
    emoji: "📋",
  },
  {
    slug: "carboidratos-bons-e-ruins",
    titulo: "Carboidratos Bons e Ruins: Guia Para Não Ter Medo de Carbs",
    descricao: "Aprenda a diferença entre carboidratos simples e complexos, índice glicêmico e como incluir carbs de forma inteligente.",
    data: "1 de junho de 2026",
    tempo: "7 min de leitura",
    tag: "Carboidratos",
    emoji: "🌾",
  },
  {
    slug: "magnesio-na-alimentacao",
    titulo: "Magnésio: Por Que Você Provavelmente Está com Deficiência",
    descricao: "Câimbras, insônia, ansiedade, fadiga — muitos desses sintomas são de deficiência de magnésio.",
    data: "31 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Minerais",
    emoji: "💊",
  },
  {
    slug: "jejum-intermitente-24-horas",
    titulo: "Jejum de 24 Horas: Como Fazer, Benefícios e Quem Deve Evitar",
    descricao: "O jejum de 24h tem benefícios potentes mas exige preparo. Veja como fazer corretamente e quem não deve tentar.",
    data: "30 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Jejum Intermitente",
    emoji: "⏱️",
  },
  {
    slug: "alimentos-anti-inflamatorios",
    titulo: "Alimentos Anti-inflamatórios: Lista Completa e Como Usar",
    descricao: "A inflamação crônica está por trás de diabetes, doenças cardíacas e obesidade. Veja a lista completa de alimentos que combatem a inflamação.",
    data: "29 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Anti-inflamatório",
    emoji: "🫚",
  },
  {
    slug: "como-montar-prato-equilibrado",
    titulo: "Como Montar um Prato Equilibrado Pelo Método do Prato",
    descricao: "O método do prato divide a refeição em proporções simples sem precisar contar calorias.",
    data: "28 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🍽️",
  },
  {
    slug: "vitamina-d-deficiencia",
    titulo: "Vitamina D: Por Que Quase Todo Brasileiro Tem Deficiência",
    descricao: "Mais de 77% dos brasileiros têm deficiência de vitamina D. Veja sintomas, fontes alimentares e quando suplementar.",
    data: "27 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Vitaminas",
    emoji: "☀️",
  },
  {
    slug: "como-comer-fora-e-manter-dieta",
    titulo: "Como Comer Fora de Casa e Manter a Dieta",
    descricao: "Restaurante, lanchonete, happy hour: manter a dieta fora de casa tem estratégias simples e eficazes.",
    data: "26 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Alimentação Saudável",
    emoji: "🍴",
  },
  {
    slug: "colageno-na-alimentacao",
    titulo: "Colágeno na Alimentação: O Que Realmente Funciona Para a Pele",
    descricao: "Suplementar colágeno ou comer os alimentos certos? Veja o que a ciência diz sobre colágeno na dieta.",
    data: "25 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Pele e Nutrição",
    emoji: "✨",
  },
  {
    slug: "dieta-para-hipertensao",
    titulo: "Dieta para Hipertensão: O Que Comer e O Que Evitar",
    descricao: "Pressão alta afeta 36% dos brasileiros. Veja a dieta DASH, alimentos que reduzem a pressão e os que devem ser evitados.",
    data: "24 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Saúde",
    emoji: "❤️",
  },
  {
    slug: "prebioticos-e-probioticos",
    titulo: "Prebióticos e Probióticos: Diferença, Benefícios e Onde Encontrar",
    descricao: "Seu intestino contém mais neurônios que sua medula espinhal. Entenda como prebióticos e probióticos cuidam do seu microbioma.",
    data: "23 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Saúde Intestinal",
    emoji: "🦠",
  },
  {
    slug: "como-reduzir-o-acucar-da-dieta",
    titulo: "Como Reduzir o Açúcar da Dieta Sem Sofrimento",
    descricao: "O açúcar adicionado está em tudo. Veja como identificá-lo nos rótulos, substituições práticas e como reduzir sem abrir mão do sabor.",
    data: "22 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Alimentação Saudável",
    emoji: "🍬",
  },
  {
    slug: "gorduras-boas-e-ruins",
    titulo: "Gorduras Boas e Ruins: Qual a Diferença e Quais Comer",
    descricao: "Nem toda gordura engorda. Aprenda a diferença entre gorduras boas (insaturadas) e ruins (trans e saturadas).",
    data: "21 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🥑",
  },
  {
    slug: "hidratacao-e-saude",
    titulo: "Hidratação e Saúde: Quanto Água Beber Por Dia de Verdade",
    descricao: "Beber 2 litros por dia é genérico. Veja como calcular sua necessidade real e por que a hidratação impacta o emagrecimento.",
    data: "20 de maio de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "💧",
  },
  {
    slug: "alimentos-ricos-em-fibras",
    titulo: "Alimentos ricos em fibras: lista completa e benefícios",
    descricao: "Ranking dos alimentos com mais fibra por 100g, diferença entre fibra solúvel e insolúvel e como atingir sua meta diária de 25–30g.",
    data: "19 de maio de 2026",
    tempo: "8 min de leitura",
    tag: "Nutrição",
    emoji: "🌾",
  },
  {
    slug: "como-acelerar-o-metabolismo",
    titulo: "Como acelerar o metabolismo: 10 estratégias que funcionam de verdade",
    descricao: "10 estratégias comprovadas para acelerar o metabolismo naturalmente — com o impacto calórico estimado de cada uma. Sem suplementos caros.",
    data: "18 de maio de 2026",
    tempo: "9 min de leitura",
    tag: "Metabolismo",
    emoji: "🔥",
  },
  {
    slug: "cafe-da-manha-saudavel",
    titulo: "Café da manhã saudável: 10 opções rápidas e nutritivas",
    descricao: "10 opções de café da manhã saudável com tempo de preparo, calorias, proteínas e dicas práticas para cada uma.",
    data: "17 de maio de 2026",
    tempo: "8 min de leitura",
    tag: "Alimentação Saudável",
    emoji: "☀️",
  },
  {
    slug: "alimentacao-para-ansiedade",
    titulo: "Alimentação para ansiedade: o que comer para acalmar",
    descricao: "Como o eixo intestino-cérebro funciona, os nutrientes que reduzem a ansiedade e o que evitar para não piorar os sintomas.",
    data: "16 de maio de 2026",
    tempo: "9 min de leitura",
    tag: "Saúde Mental & Nutrição",
    emoji: "🧠",
  },
  {
    slug: "como-ganhar-massa-muscular-sendo-magro",
    titulo: "Como ganhar massa muscular sendo magro: guia completo",
    descricao: "Por que ectomorfos têm dificuldade de ganhar massa, quantas calorias comer, melhores alimentos hipercalóricos e cardápio de 3.200 kcal de exemplo.",
    data: "14 de maio de 2026",
    tempo: "9 min de leitura",
    tag: "Hipertrofia",
    emoji: "🦴",
  },
  {
    slug: "dieta-low-carb",
    titulo: "Dieta low carb: o que é, como funciona e cardápio completo",
    descricao: "Guia completo de low carb: níveis de restrição, como o corpo muda, benefícios, alimentos permitidos, cardápio de exemplo e como evitar a gripe low carb.",
    data: "13 de maio de 2026",
    tempo: "10 min de leitura",
    tag: "Low Carb",
    emoji: "🥑",
  },
  {
    slug: "alimentos-que-fortalecem-o-sistema-imunologico",
    titulo: "Alimentos que fortalecem o sistema imunológico: lista completa",
    descricao: "15 alimentos que aumentam a imunidade com o mecanismo científico de cada um, o que evitar e cardápio de 1 dia focado em imunidade.",
    data: "12 de maio de 2026",
    tempo: "9 min de leitura",
    tag: "Imunidade",
    emoji: "🛡️",
  },
  {
    slug: "vitaminas-e-minerais-essenciais",
    titulo: "Vitaminas e minerais essenciais: para que serve cada um",
    descricao: "Guia completo com funções, sintomas de deficiência e fontes alimentares de todas as vitaminas e minerais — incluindo os 4 mais deficientes no Brasil.",
    data: "11 de maio de 2026",
    tempo: "10 min de leitura",
    tag: "Nutrição",
    emoji: "💊",
  },
  {
    slug: "como-perder-peso-sem-fazer-dieta",
    titulo: "Como perder peso sem fazer dieta: 10 mudanças que funcionam",
    descricao: "10 hábitos simples e sustentáveis que criam déficit calórico sem restrições radicais — com o impacto em kcal estimado para cada mudança.",
    data: "10 de maio de 2026",
    tempo: "9 min de leitura",
    tag: "Emagrecimento",
    emoji: "🏃",
  },
  {
    slug: "alimentos-que-ajudam-a-dormir",
    titulo: "Alimentos que ajudam a dormir melhor: lista completa",
    descricao: "12 alimentos que melhoram o sono, o que evitar antes de dormir, o papel do triptofano e 3 opções de jantar para uma noite tranquila.",
    data: "9 de maio de 2026",
    tempo: "8 min de leitura",
    tag: "Sono & Saúde",
    emoji: "😴",
  },
  {
    slug: "dieta-para-diabeticos",
    titulo: "Dieta para diabéticos: o que comer e o que evitar",
    descricao: "Guia completo de alimentação para diabetes tipo 2: alimentos permitidos, proibidos, estratégias para controle glicêmico e cardápio de exemplo.",
    data: "8 de maio de 2026",
    tempo: "10 min de leitura",
    tag: "Saúde Metabólica",
    emoji: "🩸",
  },
  {
    slug: "o-que-comer-para-ter-mais-energia",
    titulo: "O que comer para ter mais energia no dia a dia",
    descricao: "Os 12 alimentos que aumentam energia de verdade, o que evitar e como manter glicose estável do café da manhã ao jantar.",
    data: "7 de maio de 2026",
    tempo: "8 min de leitura",
    tag: "Nutrição",
    emoji: "⚡",
  },
  {
    slug: "como-diminuir-o-colesterol",
    titulo: "Como diminuir o colesterol com alimentação: guia completo",
    descricao: "O que é LDL, HDL e triglicerídeos, quais alimentos pioram e quais melhoram o perfil lipídico, e um cardápio anti-colesterol de exemplo.",
    data: "6 de maio de 2026",
    tempo: "9 min de leitura",
    tag: "Saúde Metabólica",
    emoji: "❤️",
  },
  {
    slug: "alimentos-ricos-em-proteina",
    titulo: "Alimentos ricos em proteína: lista completa com quantidade",
    descricao: "Ranking completo dos alimentos com mais proteína por 100g — animais e vegetais — com dicas de uso e como bater sua meta diária.",
    data: "5 de maio de 2026",
    tempo: "8 min de leitura",
    tag: "Nutrição",
    emoji: "🥩",
  },
  {
    slug: "dieta-para-ganhar-massa-muscular",
    titulo: "Dieta para ganhar massa muscular: o que comer e como montar",
    descricao: "Calorias, proteína, macros e cardápio completo para hipertrofia. O guia definitivo de nutrição para quem quer ganhar massa de verdade.",
    data: "4 de maio de 2026",
    tempo: "10 min de leitura",
    tag: "Hipertrofia",
    emoji: "💪",
  },
  {
    slug: "como-perder-barriga",
    titulo: "Como perder barriga: o que funciona de verdade (e o que não funciona)",
    descricao: "A ciência da gordura abdominal, os mitos que não funcionam e as 6 estratégias comprovadas para eliminar a barriga de forma duradoura.",
    data: "3 de maio de 2026",
    tempo: "10 min de leitura",
    tag: "Emagrecimento",
    emoji: "🎯",
  },
  {
    slug: "o-que-comer-antes-e-depois-do-treino",
    titulo: "O que comer antes e depois do treino: guia completo",
    descricao: "Timing ideal, melhores alimentos, combinações prontas e dicas para quem treina em jejum. Tudo que você precisa saber sobre nutrição peri-treino.",
    data: "2 de maio de 2026",
    tempo: "9 min de leitura",
    tag: "Treino & Nutrição",
    emoji: "💪",
  },
  {
    slug: "alimentos-que-inflamam-o-corpo",
    titulo: "Alimentos que inflamam o corpo: lista completa e o que comer no lugar",
    descricao: "Os 10 principais alimentos inflamatórios, por que causam inflamação crônica e o que comer no lugar de cada um para recuperar sua saúde.",
    data: "29 de abril de 2026",
    tempo: "9 min de leitura",
    tag: "Saúde & Inflamação",
    emoji: "🔥",
  },
  {
    slug: "quantas-calorias-preciso-por-dia",
    titulo: "Quantas calorias eu preciso por dia?",
    descricao: "Aprenda a calcular sua TMB e TDEE com a fórmula Mifflin-St Jeor e descubra quantas calorias comer para emagrecer, manter ou ganhar peso.",
    data: "28 de abril de 2026",
    tempo: "9 min de leitura",
    tag: "Nutrição",
    emoji: "🔢",
  },
  {
    slug: "como-montar-marmita-saudavel",
    titulo: "Como montar uma marmita saudável para o trabalho",
    descricao: "Estrutura, 5 combinações prontas, tabela de conservação e a rotina de 30 minutos no domingo para ter marmitas nutritivas e baratas a semana toda.",
    data: "28 de abril de 2026",
    tempo: "8 min de leitura",
    tag: "Alimentação Saudável",
    emoji: "🥡",
  },
  {
    slug: "proteina-no-cafe-da-manha",
    titulo: "Proteína no café da manhã: por que é tão importante e o que comer",
    descricao: "A ciência por trás do café da manhã proteico e 10 opções práticas com alimentos brasileiros para começar hoje.",
    data: "26 de abril de 2026",
    tempo: "7 min de leitura",
    tag: "Nutrição",
    emoji: "🍳",
  },
  {
    slug: "cardapio-saudavel-para-semana",
    titulo: "Cardápio saudável para a semana: 5 dias de refeições prontas",
    descricao: "Planejamento alimentar completo de segunda a sexta com café da manhã, almoço, lanche e jantar. Inclui lista de compras.",
    data: "25 de abril de 2026",
    tempo: "10 min de leitura",
    tag: "Alimentação Saudável",
    emoji: "🥗",
  },
  {
    slug: "quanto-tempo-para-ver-resultado-no-jejum-intermitente",
    titulo: "Quanto tempo leva para ver resultado no jejum intermitente?",
    descricao: "A linha do tempo real do que acontece no seu corpo — da 1ª semana até 3 meses de jejum intermitente, sem enrolação.",
    data: "24 de abril de 2026",
    tempo: "8 min de leitura",
    tag: "Jejum Intermitente",
    emoji: "⏱️",
  },
  {
    slug: "jejum-intermitente-16-8-para-iniciantes",
    titulo: "Jejum intermitente 16:8 para iniciantes: guia completo para começar hoje",
    descricao: "Entenda como funciona o jejum 16:8, qual o melhor horário para começar, o que comer na janela alimentar e os erros mais comuns de quem está começando.",
    data: "24 de abril de 2025",
    tempo: "9 min de leitura",
    tag: "Jejum Intermitente",
    emoji: "⏳",
  },
  {
    slug: "o-que-comer-no-jejum-intermitente-16-8",
    titulo: "O que comer no jejum intermitente 16:8 — guia completo",
    descricao: "Descubra o que comer, quando comer e o que evitar no jejum intermitente 16:8 para maximizar seus resultados.",
    data: "18 de abril de 2025",
    tempo: "8 min de leitura",
    tag: "Jejum Intermitente",
    emoji: "⏰",
  },
  {
  slug: "como-emagrecer-sem-passar-fome",
  titulo: "Como emagrecer sem passar fome — 7 estratégias que funcionam",
  descricao: "Esqueça as dietas radicais. Veja 7 estratégias comprovadas para emagrecer sem sofrimento.",
  data: "20 de abril de 2026",
  tempo: "10 min de leitura",
  tag: "Emagrecimento",
  emoji: "🔥",
  },
  {
    slug: "low-carb-para-iniciantes",
    titulo: "Low carb para iniciantes: o que é, como começar e cardápio de exemplo",
    descricao: "Guia completo para quem quer começar a dieta low carb do zero. O que comer, o que evitar e um cardápio de exemplo para a primeira semana.",
    data: "17 de abril de 2025",
    tempo: "10 min de leitura",
    tag: "Low Carb",
    emoji: "🥑",
  },
];

export default function Blog() {
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

          <div className={styles.heroEyebrow}>
            <div className={styles.heroLine} />
            <span className={styles.heroEyebrowText}>Conteúdo gratuito</span>
          </div>
          <h1 className={styles.heroTitle}>
            Blog <em className={styles.heroEm}>Nutry.life</em>
          </h1>
          <p className={styles.heroSub}>
            Artigos completos sobre nutrição, dietas e alimentação saudável escritos pela nossa equipe para te ajudar a tomar as melhores decisões alimentares.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div className={styles.mealCard} style={{ padding: 0, cursor: 'pointer', transition: 'all 0.2s' }}>
                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span className={styles.tag}>{post.tag}</span>
                      <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>{post.data}</span>
                      <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 600 }}>· {post.tempo}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{post.emoji}</div>
                      <div>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem', letterSpacing: '-0.3px', lineHeight: 1.3 }}>
                          {post.titulo}
                        </h2>
                        <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.6, fontWeight: 500 }}>
                          {post.descricao}
                        </p>
                      </div>
                    </div>
                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontWeight: 700, fontSize: '0.9rem' }}>
                      Ler artigo completo →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>📬</div>
            <div>
              <div className={styles.tipTitle}>Novos artigos toda semana</div>
              <div className={styles.tipText}>
                Nossa equipe publica conteúdo novo toda semana sobre nutrição, dietas e alimentação saudável. Volte sempre!
              </div>
            </div>
          </div>

          <div className={styles.premiumBanner} style={{ marginTop: '2rem' }}>
            <div className={styles.premiumBadgeTop}>✦ GRÁTIS PARA COMEÇAR</div>
            <div className={styles.premiumHeader}>
              <h2>Pronto para colocar em prática?</h2>
              <p>Gere seu plano alimentar personalizado com IA agora mesmo.</p>
            </div>
            <Link href="/" className={styles.premiumBtn} style={{ textDecoration: 'none', display: 'block' }}>
              Gerar meu plano grátis →
            </Link>
            <p className={styles.premiumFootnote}>Sem cadastro. Sem cartão. 100% grátis.</p>
          </div>

        </div>
      </main>
    </>
  );
}
