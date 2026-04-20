import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import Logo from "../../components/Logo";

export const metadata: Metadata = {
  title: "Política de Privacidade — Nutry.life",
  description: "Política de privacidade do Nutry.life.",
};

export default function Privacidade() {
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div className={styles.badge}>Beta</div>
      </header>

      <main className={styles.main}>
        <div className="fade-up" style={{ maxWidth: '680px', margin: '0 auto' }}>

          <h1 className={styles.heroTitle} style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            Política de Privacidade
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '0.88rem', fontWeight: 600, marginBottom: '2.5rem' }}>
            Última atualização: 20 de abril de 2026
          </p>

          {[
            {
              titulo: "1. Quem somos",
              texto: "O Nutry.life é um aplicativo de geração de planos alimentares personalizados com inteligência artificial, desenvolvido e operado por Rodrigo Farias (CNPJ em processo de abertura), com sede em São Paulo, Brasil. Para contato: compras@nutry.life"
            },
            {
              titulo: "2. Quais dados coletamos",
              texto: "Coletamos apenas os dados necessários para o funcionamento do serviço: endereço de email (para autenticação e acesso à conta), dados físicos informados voluntariamente (sexo, peso, altura, idade) usados exclusivamente para calcular o plano alimentar do dia e que não são armazenados em nossos servidores, e dados de uso anônimos via Google Analytics (páginas visitadas, eventos de interação)."
            },
            {
              titulo: "3. Como usamos seus dados",
              texto: "Seu email é usado exclusivamente para autenticação e para vinculação da sua assinatura PRO. Não enviamos emails de marketing sem consentimento. Os dados físicos (peso, altura, etc.) são enviados diretamente para a API de geração do plano e não são armazenados. Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais."
            },
            {
              titulo: "4. Cookies e rastreamento",
              texto: "Utilizamos o Google Analytics para análise de tráfego anônimo. Esses dados não identificam você pessoalmente. Você pode desativar o rastreamento nas configurações do seu navegador."
            },
            {
              titulo: "5. Compartilhamento de dados",
              texto: "Seus dados podem ser compartilhados com: Supabase (banco de dados e autenticação), Anthropic (processamento do plano alimentar via API — apenas os dados físicos informados, sem identificação pessoal), Cakto (processamento de pagamentos — gerenciado pela própria Cakto) e Google (autenticação OAuth, se utilizado)."
            },
            {
              titulo: "6. Segurança",
              texto: "Utilizamos criptografia SSL/TLS em todas as comunicações. A autenticação é gerenciada pelo Supabase com padrões de segurança de nível empresarial. Senhas são armazenadas com hash seguro e nunca em texto plano."
            },
            {
              titulo: "7. Seus direitos (LGPD)",
              texto: "Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem direito a: acessar seus dados, corrigir informações incorretas, solicitar a exclusão da sua conta e dados, e revogar consentimento a qualquer momento. Para exercer esses direitos, entre em contato: compras@nutry.life"
            },
            {
              titulo: "8. Retenção de dados",
              texto: "Seus dados são mantidos enquanto sua conta estiver ativa. Ao solicitar a exclusão da conta, seus dados serão removidos em até 30 dias."
            },
            {
              titulo: "9. Menores de idade",
              texto: "O Nutry.life não é direcionado a menores de 13 anos. Se você é menor de 18 anos, recomendamos o uso com supervisão de um responsável."
            },
            {
              titulo: "10. Alterações nesta política",
              texto: "Podemos atualizar esta política periodicamente. Notificaremos usuários cadastrados por email sobre mudanças significativas. O uso continuado do serviço após as alterações implica aceitação da nova política."
            },
            {
              titulo: "11. Contato",
              texto: "Para dúvidas sobre esta política de privacidade, entre em contato: compras@nutry.life"
            },
          ].map((secao, i) => (
            <div key={i} className={styles.qBlock}>
              <div style={{ fontWeight: 800, color: '#111827', fontSize: '1.05rem', marginBottom: '0.75rem' }}>
                {secao.titulo}
              </div>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>
                {secao.texto}
              </p>
            </div>
          ))}

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/" style={{ color: '#16a34a', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              ← Voltar para o Nutry.life
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
