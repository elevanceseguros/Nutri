import Anthropic from "@anthropic-ai/sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { objetivo, dieta, refeicoes } = req.body;

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 3000,
      messages: [{
        role: "user",
        content: `Você é nutricionista brasileiro. Crie plano alimentar para HOJE:
- Objetivo: ${objetivo}
- Dieta: ${dieta}
- Refeições: ${refeicoes}
- Use alimentos brasileiros acessíveis
- Calorias: emagrecer 1500kcal, massa 2500kcal, manutenção 2000kcal, saude 1800kcal

Responda APENAS JSON puro sem markdown:
{
  "titulo": "string",
  "subtitulo": "string",
  "calorias_totais": 1800,
  "proteinas_g": 140,
  "carboidratos_g": 160,
  "gorduras_g": 65,
  "dica_do_dia": "string",
  "refeicoes": [
    {
      "nome": "string",
      "horario": "string",
      "emoji": "string",
      "prato": "string",
      "descricao": "string",
      "ingredientes": [
        { "item": "200g frango grelhado", "substituto": "200g atum em lata" }
      ],
      "preparo": [
        "Tempere o frango com sal, limão e alho",
        "Grelhe por 10 minutos de cada lado",
        "Sirva com o arroz e a salada"
      ],
      "youtube_busca": "nome do prato para buscar no youtube receita",
      "calorias": 600,
      "proteinas_g": 50,
      "carboidratos_g": 55,
      "gorduras_g": 18
    }
  ]
}
Crie exatamente ${refeicoes} refeição(ões). Cada ingrediente DEVE ter item e substituto. Preparo com 3 a 5 passos simples.`
      }]
    });

    const raw = message.content[0].text.trim().replace(/```json|```/g, "").trim();
    const plano = JSON.parse(raw);

    // Buscar vídeo no YouTube para cada refeição
    const YOUTUBE_KEY = process.env.YOUTUBE_API_KEY;
    if (YOUTUBE_KEY) {
      for (const ref of plano.refeicoes) {
        try {
          const query = encodeURIComponent(`receita ${ref.youtube_busca} fácil`);
          const ytRes = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=1&key=${YOUTUBE_KEY}`
          );
          const ytData = await ytRes.json();
          if (ytData.items && ytData.items.length > 0) {
            const video = ytData.items[0];
            ref.video = {
              id: video.id.videoId,
              titulo: video.snippet.title,
              canal: video.snippet.channelTitle,
              thumb: video.snippet.thumbnails.medium.url,
              url: `https://www.youtube.com/watch?v=${video.id.videoId}`
            };
          }
        } catch (e) {
          console.log("YouTube erro:", e);
        }
      }
    }

    return res.status(200).json(plano);
  } catch (error) {
    console.error("ERRO:", error);
    return res.status(500).json({ error: String(error) });
  }
}
