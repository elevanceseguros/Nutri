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
      max_tokens: 2000,
      messages: [{
        role: "user",
        content: `Você é nutricionista brasileiro. Crie plano alimentar para HOJE:
- Objetivo: ${objetivo}
- Dieta: ${dieta}
- Refeições: ${refeicoes}
- Use alimentos brasileiros
- Calorias: emagrecer 1500kcal, massa 2500kcal, manutenção 2000kcal, saude 1800kcal

Responda APENAS JSON puro sem markdown:
{"titulo":"string","subtitulo":"string","calorias_totais":1800,"proteinas_g":140,"carboidratos_g":160,"gorduras_g":65,"dica_do_dia":"string","refeicoes":[{"nome":"string","horario":"string","emoji":"string","prato":"string","descricao":"string","ingredientes":["string"],"calorias":600,"proteinas_g":50,"carboidratos_g":55,"gorduras_g":18}]}
Crie exatamente ${refeicoes} refeição(ões).`
      }]
    });

    const raw = message.content[0].text.trim().replace(/```json|```/g, "").trim();
    const plano = JSON.parse(raw);
    return res.status(200).json(plano);
  } catch (error) {
    console.error("ERRO:", error);
    return res.status(500).json({ error: String(error) });
  }
}
