import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { objetivo, dieta, refeicoes } = await req.json();

    if (!objetivo || !dieta || !refeicoes) {
      return NextResponse.json({ error: "Parâmetros inválidos" }, { status: 400 });
    }

    const prompt = `Você é nutricionista brasileiro especializado em jejum intermitente.
Crie um plano alimentar para HOJE com:
- Objetivo: ${objetivo}
- Preferência alimentar: ${dieta}
- Número de refeições: ${refeicoes}
- Use alimentos brasileiros acessíveis
- Calorias: emagrecer ~1500kcal, massa ~2500kcal, manutenção ~2000kcal, saude ~1800kcal

Responda APENAS JSON puro, sem markdown:
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
      "ingredientes": ["string"],
      "calorias": 600,
      "proteinas_g": 50,
      "carboidratos_g": 55,
      "gorduras_g": 18
    }
  ]
}
Crie exatamente ${refeicoes} refeição(ões).`;

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    });

    const raw = (message.content[0] as { text: string }).text
      .trim()
      .replace(/```json|```/g, "")
      .trim();

    const plano = JSON.parse(raw);
    return NextResponse.json(plano);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao gerar plano" }, { status: 500 });
  }
}
