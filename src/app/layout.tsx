import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nutry.life — Seu Plano Alimentar do Dia",
  description: "Monte seu cardápio personalizado em segundos com IA. Receitas brasileiras reais, modo de preparo e substituição de ingredientes. Grátis.",
  keywords: "plano alimentar, jejum intermitente, cardápio saudável, dieta low carb, receitas brasileiras, nutry life",
  openGraph: {
    title: "Nutry.life — Plano Alimentar com IA",
    description: "Você decide quantas refeições faz. A IA monta seu cardápio com receitas brasileiras reais.",
    url: "https://nutry.life",
    siteName: "Nutry.life",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutry.life — Plano Alimentar com IA",
    description: "Receitas brasileiras reais. Você decide quantas refeições faz.",
  },
  metadataBase: new URL("https://nutry.life"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={playfair.variable + " " + inter.variable}>
      <body>{children}</body>
    </html>
  );
}
