import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Nutry.life — Seu Plano Alimentar do Dia",
  description: "Monte seu cardápio personalizado com IA. Receitas brasileiras reais com modo de preparo e substituição de ingredientes. Grátis.",
  openGraph: {
    title: "Nutry.life — Plano Alimentar com IA",
    description: "Você decide quantas refeições faz. A IA monta seu cardápio.",
    url: "https://nutry.life",
    siteName: "Nutry.life",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
