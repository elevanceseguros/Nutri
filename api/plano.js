import Anthropic from "@anthropic-ai/sdk";

function calcularCalorias(sexo, peso, altura, idade, objetivo) {
  let tmb;
  if (sexo === "masculino") {
    tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
  }
  const tdee = Math.round(tmb * 1.55);
  switch (objetivo) {
    case "emagrecer": return Math.round(tdee - 500);
    case "massa": return Math.round(tdee + 300);
    case "manutencao": return tdee;
    case "saude": return Math.round(tdee - 200);
    default: return tdee;
  }
}

function calcularProteina(peso, objetivo) {
  switch (objetivo) {
    case "massa": return Math.round(peso * 2.2);
    case "emagrecer": return Math.round(peso * 2.0);
    default: return Math.round(peso * 1.6);
  }
}

function getDiaDaSemana() {
  const dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  return dias[new Date().getDay()];
}

function getTemaDoDia(seed) {
  const temas = [
    "culinária nordestina brasileira — use ingredientes como macaxeira, carne de sol, feijão verde, baião de dois",
    "culinária mineira — use ingredientes como feijão tropeiro, tutu, couve, angu, queijo minas",
    "culinária paulista — use ingredientes como virado à paulista, cuscuz paulista, amendoim, banana",
    "pratos práticos de preparo rápido em até 15 minutos — ovos, atum, iogurte, frutas, sanduíches naturais",
    "culinária mediterrânea adaptada ao Brasil — azeite, peixe, legumes grelhados, ervas frescas",
    "pratos coloridos e variados — use pelo menos 5 cores diferentes de alimentos na refeição",
    "culinária fitness brasileira — ingredientes funcionais como quinoa, chia, aveia, batata doce, frango",
    "pratos quentinhos e reconfortantes — sopas, caldos, ensopados, cozidos brasileiros",
    "culinária leve e refrescante — saladas elaboradas, proteína fria, frutas, iogurte, smoothies",
    "pratos econômicos e nutritivos — ingredientes baratos como ovo, feijão, banana, batata, sardinha",
  ];
  return temas[seed % temas.length];
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { objetivo, dieta, refeicoes, sexo, peso, altura, idade } = req.body;

    const calorias = calcularCalorias(sexo, peso, altura, idade, objetivo);
    const proteina = calcularProteina(peso, objetivo);
    const diaDaSemana = getDiaDaSemana();
    const seed = Math.floor(Math.random() * 1000);
    const temaDoDia = getTemaDoDia(seed);

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const message = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 4000,
      messages: [{
        role: "user",
        content: `Você é nutricionista brasileiro criativo. Crie plano alimentar personalizado para HOJE (${diaDaSemana}):

Dados do usuário:
- Sexo: ${sexo}
- Peso: ${peso}kg
- Altura: ${altura}cm
- Idade: ${idade} anos
- Objetivo: ${objetivo}
- Dieta: ${dieta}
- Refeições: ${refeicoes}

Calorias calculadas (Mifflin-St Jeor): ${calorias} kcal
Meta de proteína: ${proteina}g/dia

🎲 TEMA DO DIA (seed: ${seed}): ${temaDoDia}

REGRAS IMPORTANTES:
- Use o tema do dia como inspiração principal para escolher os pratos
- EVITE os pratos genéricos de sempre: frango grelhado simples com arroz e salada básica
- Seja CRIATIVO e VARIADO — surpreenda o usuário com combinações saborosas
- Adapte o tema respeitando a dieta (${dieta}) e o objetivo (${objetivo})
- Use alimentos brasileiros acessíveis em mercados comuns
- As porções devem atingir exatamente ${calorias} kcal e ${proteina}g de proteína

Responda APENAS JSON puro sem markdown:
{
  "titulo": "string criativo que reflita o tema do dia",
  "subtitulo": "string descrevendo o plano personalizado",
  "calorias_totais": ${calorias},
  "proteinas_g": ${proteina},
  "carboidratos_g": number,
  "gorduras_g": number,
  "dica_do_dia": "string personalizada e criativa para o perfil do usuário",
  "refeicoes": [
    {
      "nome": "string",
      "horario": "string",
      "prato": "string criativo e específico",
      "descricao": "string apetitosa descrevendo o prato",
      "foto_busca": "palavras em inglês simples para buscar foto do prato",
      "ingredientes": [
        { "item": "200g frango grelhado", "substituto": "200g atum em lata" }
      ],
      "preparo": [
        "passo 1",
        "passo 2",
        "passo 3"
      ],
      "calorias": number,
      "proteinas_g": number,
      "carboidratos_g": number,
      "gorduras_g": number
    }
  ]
}
Crie exatamente ${refeicoes} refeição(ões). Cada ingrediente DEVE ter item e substituto. Preparo com 3 a 5 passos simples. O campo foto_busca é OBRIGATÓRIO.`
      }]
    });

    const raw = message.content[0].text.trim().replace(/```json|```/g, "").trim();
    const plano = JSON.parse(raw);

    const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY;
    if (UNSPLASH_KEY) {
      for (const ref of plano.refeicoes) {
        try {
          const query = encodeURIComponent(ref.foto_busca || ref.prato);
          const resp = await fetch(
            `https://api.unsplash.com/search/photos?query=${query}&per_page=1&orientation=landscape&client_id=${UNSPLASH_KEY}`
          );
          const data = await resp.json();
          if (data?.results?.length > 0) {
            ref.foto_url = data.results[0].urls.regular;
          }
        } catch (e) {
          console.log("Unsplash erro:", e);
        }
      }
    }

    return res.status(200).json(plano);
  } catch (error) {
    console.error("ERRO:", error);
    return res.status(500).json({ error: String(error) });
  }
}
