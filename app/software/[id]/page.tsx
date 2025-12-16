import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, Star, ExternalLink, HardHat } from 'lucide-react';
import { notFound } from 'next/navigation';
import { softwareData } from '../../../data/software';
import { Metadata } from 'next';

// 1. GENERIAMO I PERCORSI STATICI (Già lo avevi)
export function generateStaticParams() {
  return softwareData.map((p) => ({ id: p.id }));
}

// 2. GENERIAMO I METADATI DINAMICI (NUOVO! PER LA SEO)
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = softwareData.find(p => p.id === params.id);
  
  if (!product) {
    return { title: 'Software non trovato' };
  }

  return {
    title: `${product.name} Recensione e Prezzi 2025`,
    description: `Tutto quello che devi sapere su ${product.name}: funzionalità, costi (${product.price}), pro, contro e le migliori alternative per la gestione cantiere.`,
    openGraph: {
      title: `${product.name} - Recensione Completa`,
      description: product.description.replace(/<[^>]*>?/gm, ''), // Rimuove i tag HTML per la descrizione social
    }
  };
}

// 3. IL COMPONENTE PAGINA (Resta uguale a prima, ma aggiungiamo i DATI STRUTTURATI)
export default function SoftwarePage({ params }: { params: { id: string } }) {
  const product = softwareData.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  // SCHEMA.ORG JSON-LD (Per le stelline su Google)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": product.price.replace(/[^0-9.,]/g, '') || "0", // Pulisce il prezzo
      "priceCurrency": "EUR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "bestRating": "5",
      "ratingCount": "120" // Numero fittizio o reale se lo hai
    },
    "description": product.description.replace(/<[^>]*>?/gm, '')
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* INIEZIONE DATI STRUTTURATI (Invisibile all'utente, Oro per Google) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER SEMPLIFICATO */}
      <header className="border-b border-gray-100 p-4">
        {/* ... (Il resto del tuo codice UI resta identico a prima) ... */}
        <div className="max-w-3xl mx-auto flex items-center justify-between">
           <Link href="/" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> CantiereOnline.it
           </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 font-medium text-sm">
          <ArrowLeft size={16} /> Torna al confronto
        </Link>

        <div className="flex flex-col md:flex-row gap-6 items-start justify-between mb-8 border-b border-gray-100 pb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 text-yellow-500 font-bold">
              <div className="flex"><Star className="fill-current" size={20}/> {product.rating}/5</div>
              <span className="text-slate-400 text-sm font-normal">({product.reviews})</span>
            </div>
          </div>
          <div className="text-right">
             <div className="text-3xl font-bold text-blue-600">{product.price}</div>
             <div className="text-sm text-gray-500 mb-2">{product.paymentType}</div>
             
             <a href={product.website} target="_blank" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Vedi Sito Ufficiale <ExternalLink size={18} />
             </a>
          </div>
        </div>

        {/* DESCRIZIONE */}
        <div 
          className="text-xl leading-relaxed text-slate-600 mb-12"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* PRO */}
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
              <Check size={20}/> I Pro
            </h3>
            <ul className="space-y-3">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex gap-2 text-slate-700 text-sm">
                  <span className="text-green-600 font-bold">✓</span> {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTRO */}
          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <X size={20}/> I Contro
            </h3>
            <ul className="space-y-3">
              {product.cons.map((con, i) => (
                <li key={i} className="flex gap-2 text-slate-700 text-sm">
                  <span className="text-red-500 font-bold">•</span> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}