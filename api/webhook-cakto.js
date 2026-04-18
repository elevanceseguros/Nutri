import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body;
    console.log("Cakto webhook recebido — evento:", body?.event);

    const evento = body?.event || "";
    const email =
      body?.data?.customer?.email ||
      body?.data?.subscription?.customer?.email ||
      body?.customer?.email ||
      null;

    console.log("Evento:", evento, "| Email:", email);

    if (!email) {
      console.error("Email não encontrado. Payload:", JSON.stringify(body));
      return res.status(200).json({ received: true, erro: "Email não encontrado" });
    }

    // Eventos que ATIVAM o PRO
    const eventosAtivacao = [
      "purchase_approved",
      "subscription_created",
      "subscription_renewed",
    ];

    // Eventos que CANCELAM o PRO
    const eventosCancelamento = [
      "subscription_canceled",
      "subscription_renewal_refused",
      "refund",
      "chargeback",
    ];

    if (eventosAtivacao.includes(evento)) {
      const { error } = await supabase
        .from("profiles")
        .update({ plano: "pro" })
        .eq("email", email);

      if (error) {
        console.error("Erro ao atualizar para PRO:", error);
        return res.status(500).json({ error: "Erro ao atualizar plano" });
      }

      console.log("✅ Usuário atualizado para PRO:", email);
      return res.status(200).json({ success: true, plano: "pro", email });
    }

    if (eventosCancelamento.includes(evento)) {
      const { error } = await supabase
        .from("profiles")
        .update({ plano: "free" })
        .eq("email", email);

      if (error) {
        console.error("Erro ao reverter para FREE:", error);
        return res.status(500).json({ error: "Erro ao atualizar plano" });
      }

      console.log("⬇️ Usuário revertido para FREE:", email);
      return res.status(200).json({ success: true, plano: "free", email });
    }

    console.log("Evento não mapeado:", evento);
    return res.status(200).json({ received: true, evento });

  } catch (error) {
    console.error("Erro no webhook:", error);
    return res.status(500).json({ error: String(error) });
  }
}
