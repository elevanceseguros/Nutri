import Anthropic from "@anthropic-ai/sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { ingrediente, prato, dieta } = req.body;

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const message = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 500,
      messages: [{
        role: "user",
        content: `Você é nutricionista brasileiro. Sugira 3 substitutos para o ingrediente abaixo.

Ingrediente: ${ingrediente}
Prato: ${prato}
Dieta: ${dieta}

Responda APENAS JSON puro sem markdown:
{
  "substitutos": [
    { "item": "substituto 1", "motivo": "explicação curta" },
    { "item": "substituto 2", "motivo": "explicação curta" },
    { "item": "substituto 3", "motivo": "explicação curta" }
  ]
}`
      }]
    });

    const raw = message.content[0].text.trim().replace(/```json|```/g, "").trim();
    const data = JSON.parse(raw);
    return res.status(200).json(data);
  } catch (error) {
    console.error("ERRO substituir:", error);
    return res.status(500).json({ error: String(error) });
  }
}
