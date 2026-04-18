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
    console.log("Cakto webhook recebido:", JSON.stringify(body));

    const evento = body?.event || body?.type || body?.status;
    const email = body?.customer?.email || body?.data?.customer?.email || body?.email;

    console.log("Evento:", evento, "Email:", email);

    if (!email) {
      return res.status(400).json({ error: "Email não encontrado no payload" });
    }

    // Pagamento aprovado — atualiza para PRO
    if (
      evento === "payment.approved" ||
      evento === "order.paid" ||
      evento === "subscription.activated" ||
      evento === "purchase.approved" ||
      evento === "approved"
    ) {
      const { error } = await supabase
        .from("profiles")
        .update({ plano: "pro" })
        .eq("email", email);

      if (error) {
        console.error("Erro ao atualizar para PRO:", error);
        return res.status(500).json({ error: "Erro ao atualizar plano" });
      }

      console.log("Usuário atualizado para PRO:", email);
      return res.status(200).json({ success: true, plano: "pro", email });
    }

    // Cancelamento — volta para FREE
    if (
      evento === "subscription.cancelled" ||
      evento === "subscription.canceled" ||
      evento === "subscription.expired" ||
      evento === "refund" ||
      evento === "chargeback"
    ) {
      const { error } = await supabase
        .from("profiles")
        .update({ plano: "free" })
        .eq("email", email);

      if (error) {
        console.error("Erro ao reverter para FREE:", error);
        return res.status(500).json({ error: "Erro ao atualizar plano" });
      }

      console.log("Usuário revertido para FREE:", email);
      return res.status(200).json({ success: true, plano: "free", email });
    }

    // Evento não mapeado — retorna 200 para não gerar reenvio
    console.log("Evento não mapeado:", evento);
    return res.status(200).json({ received: true, evento });

  } catch (error) {
    console.error("Erro no webhook:", error);
    return res.status(500).json({ error: String(error) });
  }
}
