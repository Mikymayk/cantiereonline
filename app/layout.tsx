import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "../components/CookieBanner"; // <--- Importa il banner

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CantiereOnline.it | Software per Edilizia",
  description: "Il comparatore N.1 in Italia per software edili e gestione cantieri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        {children}
        <CookieBanner /> {/* <--- Inseriscilo qui alla fine */}
      </body>
    </html>
  );
}