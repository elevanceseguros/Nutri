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

    // Cakto envia o evento em diferentes campos dependendo da versão
    const evento = body?.event || body?.type || body?.trigger || body?.status || "";
    
    // Email do cliente — Cakto pode enviar em diferentes lugares
    const email = 
      body?.customer?.email ||
      body?.data?.customer?.email ||
      body?.buyer?.email ||
      body?.data?.buyer?.email ||
      body?.subscriber?.email ||
      body?.data?.subscriber?.email ||
      body?.email ||
      body?.data?.email ||
      null;

    console.log("Evento:", evento, "| Email:", email);

    if (!email) {
      console.error("Email não encontrado. Payload:", JSON.stringify(body));
      return res.status(200).json({ received: true, erro: "Email não encontrado" });
    }

    // Eventos que ATIVAM o PRO
    const eventosAtivacao = [
      "compra_aprovada",
      "purchase.approved",
      "payment.approved",
      "order.paid",
      "subscription.activated",
      "subscription.created",
      "assinatura_criada",
      "assinatura_renovada",
      "renovacao_assinatura",
      "subscription.renewed",
      "approved",
    ];

    // Eventos que CANCELAM o PRO (volta para free)
    const eventosCancelamento = [
      "assinatura_cancelada",
      "subscription.cancelled",
      "subscription.canceled",
      "subscription.expired",
      "reembolso",
      "refund",
      "chargeback",
    ];

    const eventoLower = evento.toLowerCase().replace(/\s/g, "_");

    if (eventosAtivacao.some(e => eventoLower.includes(e) || e.includes(eventoLower))) {
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

    if (eventosCancelamento.some(e => eventoLower.includes(e) || e.includes(eventoLower))) {
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
