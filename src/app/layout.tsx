import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nutry.life — Seu Plano Alimentar do Dia",
  description: "Monte seu cardápio personalizado em segundos com IA. Receitas brasileiras reais, modo de preparo e substituição de ingredientes. Grátis.",
  keywords: "plano alimentar, jejum intermitente, cardápio saudável, dieta low carb, receitas brasileiras, nutry life",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥗</text></svg>",
  },
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
    <html lang="pt-BR" className={jakarta.variable}>
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
