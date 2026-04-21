import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
      <head>
        <meta name="google-adsense-account" content="ca-pub-4707899354356189" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4707899354356189"
          crossOrigin="anonymous"
        ></script>
        {/* Google Consent Mode Default State */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WHFPC3L4');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHFPC3L4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}