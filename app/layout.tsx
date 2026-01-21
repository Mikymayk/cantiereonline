import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner"; 
import GoogleTagManager from "@/components/GoogleTagManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CantiereOnline.it | I Migliori Software per Edilizia e Cantieri (2025)",
    template: "%s | CantiereOnline.it"
  },
  description: "Confronto indipendente dei migliori software gestionali per cantiere, computo metrico, POS e sicurezza. Scopri prezzi, recensioni e alternative.",
  keywords: ["software cantiere", "gestionale edilizia", "app cantiere", "computo metrico", "giornale dei lavori digitale", "confronto software edili"],
  authors: [{ name: "ClusterClups SRL" }],
  creator: "ClusterClups SRL",
  publisher: "ClusterClups SRL",
  openGraph: {
    title: "CantiereOnline.it - Scegli il software giusto",
    description: "Confronta prezzi e funzionalità dei migliori software per l'edilizia.",
    url: "https://www.cantiereonline.it",
    siteName: "CantiereOnline.it",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        {/* 1. GTM e Consent Mode Default (Caricato subito) */}
        <GoogleTagManager />

        {children}
        
        {/* 2. Banner per gestione consenso */}
        <CookieBanner />
      </body>
    </html>
  );
}