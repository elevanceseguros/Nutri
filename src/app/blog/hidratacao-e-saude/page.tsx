import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Hidratação e Saúde: Quanto Água Beber Por Dia | Nutry.life",
  description: "Descubra quanto água você realmente precisa por dia, como calcular pela sua massa corporal, sinais de desidratação e dicas práticas para se manter hidratado.",
  keywords: "quanto agua beber por dia, hidratacao, sinais de desidratacao, agua e saude, como beber mais agua",
  openGraph: {
    title: "Hidratação e Saúde: Quanto Água Beber Por Dia | Nutry.life",
    description: "Calcule sua necessidade diária de água e reconheça sinais de desidratação.",
    url: "https://nutry.life/blog/hidratacao-e-saude",
  },
};

export default function HidratacaoESaude() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Nutry<span className={styles.logoAccent}>.life</span></Link>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Link href="/login" className={styles.btnEntrar}>Entrar</Link>
          <div className={styles.badge}>Beta</div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="fade-up">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "2rem", fontSize: "0.85rem", color: "#9ca3af", fontWeight: 600 }}>
            <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>Início</Link>
            <span>→</span>
            <Link href="/blog" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</Link>
            <span>→</span>
            <span style={{ color: "#22c55e" }}>Nutrição</span>
          </div>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={styles.tag}>Nutrição</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>20 de maio de 2026</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· 7 min de leitura</span>
              <span style={{ fontSize: "0.82rem", color: "#9ca3af", fontWeight: 600 }}>· Equipe Nutry.life</span>
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginBottom: "1rem" }}>
              Hidratação e saúde: quanto água beber por dia de verdade
            </h1>
            <p className={styles.heroSub} style={{ marginBottom: "0" }}>
              Beber 2 litros por dia é um conselho genérico. Veja como calcular sua necessidade real e por que a hidratação impacta diretamente o emagrecimento.
            </p>
          </div>
          <div className={styles.tipCard} style={{ marginBottom: "2.5rem" }}>
            <div className={styles.tipIcon}>🤖</div>
            <div style={{ flex: 1 }}>
              <div className={styles.tipTitle}>Cardápio com foco em hidratação</div>
              <div className={styles.tipText} style={{ marginBottom: "0.75rem" }}>Nossa IA inclui alimentos ricos em água no seu plano e calcula suas necessidades pelo seu perfil.</div>
              <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.7rem 1.5rem", fontSize: "0.9rem", marginTop: "0.5rem" }}>Gerar meu cardápio →</Link>
            </div>
          </div>
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>01.</span><span className={styles.qLabel}>Como calcular sua necessidade de água</span></div>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
              <div style={{ fontWeight: 800, color: "#166534", marginBottom: "8px" }}>Fórmula baseada em peso corporal</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#15803d", marginBottom: "8px" }}>35 ml x peso em kg = necessidade diária</div>
              <div style={{ fontSize: "0.86rem", color: "#166534", lineHeight: 1.7 }}>Exemplo: 70 kg x 35 ml = 2.450 ml por dia. Para quem pratica exercício, adicione 500 ml a 1L.</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[{ peso: "50 kg", agua: "1,75 L" }, { peso: "60 kg", agua: "2,1 L" }, { peso: "70 kg", agua: "2,45 L" }, { peso: "80 kg", agua: "2,8 L" }, { peso: "90 kg", agua: "3,15 L" }, { peso: "100 kg", agua: "3,5 L" }].map((item, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "0.75rem 1rem", textAlign: "center", minWidth: "90px" }}>
                  <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.95rem" }}>{item.peso}</div>
                  <div style={{ color: "#22c55e", fontWeight: 700, fontSize: "0.9rem" }}>{item.agua}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>02.</span><span className={styles.qLabel}>Sinais de desidratação para ficar atento</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px" }}>
              {[
                { sinal: "Urina amarela escura", detalhe: "A cor ideal é amarelo claro. Escuro demais = hidratação insuficiente" },
                { sinal: "Dor de cabeça frequente", detalhe: "O cérebro perde volume quando desidratado, causando dor" },
                { sinal: "Fadiga sem motivo aparente", detalhe: "Desidratação reduz o volume de sangue e cansa o coração" },
                { sinal: "Dificuldade de concentração", detalhe: "O cérebro é 73% água — perda de 1% já prejudica cognição" },
                { sinal: "Constipação intestinal", detalhe: "Sem água suficiente, o intestino absorve mais do bolo fecal" },
                { sinal: "Tonturas ao se levantar", detalhe: "Volume sanguíneo reduzido causa queda de pressão postural" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "12px", padding: "1rem" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "4px", fontSize: "0.9rem" }}>⚠️ {item.sinal}</div>
                  <div style={{ fontSize: "0.82rem", color: "#6b7280", lineHeight: 1.6 }}>{item.detalhe}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.qBlock}>
            <div className={styles.qLabelRow}><span className={styles.qNum}>03.</span><span className={styles.qLabel}>Hidratação e emagrecimento</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { titulo: "Beber água antes das refeições reduz calorias ingeridas", desc: "500ml de água 30 minutos antes das refeições aumenta a perda de peso em até 44% em 12 semanas." },
                { titulo: "Confusão fome x sede", desc: "O hipotálamo pode interpretar desidratação como fome. Antes de lanchar, beba 200ml de água e espere 10 minutos." },
                { titulo: "Metabolismo mais lento sem hidratação", desc: "A desidratação reduz a eficiência mitocondrial, diminuindo a queima calórica em repouso em até 3%." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "14px", padding: "1rem 1.25rem" }}>
                  <div style={{ fontWeight: 800, color: "#166534", marginBottom: "4px", fontSize: "0.9rem" }}>✅ {item.titulo}</div>
                  <div style={{ fontSize: "0.85rem", color: "#166534", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", borderRadius: "20px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#166534", marginBottom: "0.5rem" }}>Otimize sua hidratação com um cardápio personalizado</div>
            <div style={{ fontSize: "0.9rem", color: "#166534", marginBottom: "1.5rem" }}>A Nutry.life inclui alimentos ricos em água no seu plano alimentar.</div>
            <Link href="/" className={styles.btnPrimary} style={{ display: "inline-block", textDecoration: "none", padding: "0.9rem 2rem", fontSize: "1rem" }}>Criar meu plano agora →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
