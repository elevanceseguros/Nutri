import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NutriJejum — Seu Plano do Dia",
  description: "Plano alimentar personalizado para jejum intermitente. Você decide quantas refeições — a gente monta o plano.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
