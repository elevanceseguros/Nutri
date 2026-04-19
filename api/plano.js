import Anthropic from "@anthropic-ai/sdk";

function calcularCalorias(sexo, peso, altura, idade, objetivo) {
  // Harris-Benedict revisada (Mifflin-St Jeor — mais precisa)
  let tmb;
  if (sexo === "masculino") {
    tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
  }

  // Fator de atividade moderado (padrão)
  const tdee = Math.round(tmb * 1.55);

  // Ajuste por objetivo
  switch (objetivo) {
    case "emagrecer": return Math.round(tdee - 500); // déficit de 500kcal
    case "massa": return Math.round(tdee + 300);     // superávit de 300kcal
    case "manutencao": return tdee;
    case "saude": return Math.round(tdee - 200);     // leve déficit
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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { objetivo, dieta, refeicoes, sexo, peso, altura, idade } = req.body;

    // Calcula calorias personalizadas
    const calorias = calcularCalorias(sexo, peso, altura, idade, objetivo);
    const proteina = calcularProteina(peso, objetivo);

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const message = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 4000,
      messages: [{
        role: "user",
        content: `Você é nutricionista brasileiro. Crie plano alimentar personalizado para HOJE:

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

Use alimentos brasileiros acessíveis. Adapte as porções para atingir exatamente ${calorias} kcal e ${proteina}g de proteína.

Responda APENAS JSON puro sem markdown:
{
  "titulo": "string",
  "subtitulo": "string descrevendo o plano personalizado para os dados do usuário",
  "calorias_totais": ${calorias},
  "proteinas_g": ${proteina},
  "carboidratos_g": number,
  "gorduras_g": number,
  "dica_do_dia": "string personalizada para o perfil do usuário",
  "refeicoes": [
    {
      "nome": "string",
      "horario": "string",
      "prato": "string",
      "descricao": "string",
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
