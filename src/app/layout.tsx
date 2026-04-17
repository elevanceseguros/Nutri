import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NutriJejum — Seu Plano do Dia",
  description: "Plano alimentar personalizado para jejum intermitente. Receitas brasileiras reais.",
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
