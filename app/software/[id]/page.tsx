import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, Star, ExternalLink, HardHat } from 'lucide-react';
import { Metadata } from 'next';
import { softwareList } from '@/data/software_it';
import { reviewsData } from '@/data/reviews'; // <--- IMPORTA IL NUOVO FILE
import { notFound } from 'next/navigation';

// Gestione Metadata Dinamico
export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const product = softwareList.find(p => p.id === params.id);
  const review = reviewsData[params.id]; // Controlla se c'è la recensione

  if (!product) return { title: 'Software non trovato' };

  // Se c'è la recensione, usa titolo e descrizione SEO specifici
  if (review) {
    return {
      title: review.title,
      description: review.metaDescription
    };
  }

  // Fallback ai dati standard
  return { 
    title: `${product.name} - Recensione e Prezzi`,
    description: product.description.replace(/<[^>]*>?/gm, '').substring(0, 160)
  };
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function SoftwarePage(props: Props) {
  const params = await props.params;
  const { id } = params;

  // Dati Base (Prezzo, Link, Nome, Rating) - Presi sempre dal DB principale
  const product = softwareList.find(p => p.id === id);

  // Dati Recensione (Testo lungo, Pro/Contro specifici) - Presi dal file recensioni se esiste
  const review = reviewsData[id];

  if (!product) {
    return notFound();
  }

  // LOGICA DI CARICAMENTO CONTENUTI
  // Se c'è la recensione usa i suoi pro/contro, altrimenti usa quelli standard
  const prosToShow = review?.customPros || product.pros;
  const consToShow = review?.customCons || product.cons;
  const contentHtml = review?.content || product.description; // HTML lungo o descrizione breve
  const isDetailedReview = !!review; // Flag per sapere se stiamo mostrando la review lunga

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      <header className="border-b border-gray-100 p-4 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
           <Link href="/" className="font-bold text-xl tracking-tight text-blue-900 flex items-center gap-2">
            <HardHat className="text-orange-500" /> CantiereOnline.it
           </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 font-medium text-sm transition-colors">
          <ArrowLeft size={16} /> Torna al confronto
        </Link>

        {/* HERO SECTION PRODOTTO */}
        <div className="flex flex-col md:flex-row gap-6 items-start justify-between mb-8 border-b border-gray-100 pb-8 animate-in slide-in-from-bottom-2">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 text-yellow-500 font-bold">
              <div className="flex"><Star className="fill-current" size={20}/> {product.rating}/5</div>
              <span className="text-slate-400 text-sm font-normal">({product.reviews})</span>
            </div>
            {/* Se è una recensione completa, aggiungi una piccola etichetta */}
            {isDetailedReview && (
              <span className="inline-block mt-3 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                Recensione Completa 2025
              </span>
            )}
          </div>
          <div className="text-right">
             <div className="text-3xl font-bold text-blue-600">{product.price}</div>
             <div className="text-sm text-gray-500 mb-2">{product.paymentType}</div>
             
             <a href={product.website} target="_blank" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Vedi Sito Ufficiale <ExternalLink size={18} />
             </a>
          </div>
        </div>

        {/* CONTENUTO PRINCIPALE */}
        {/* Se è una recensione dettagliata, usiamo classi prose diverse per gestire titoli H2/H3 */}
        <div 
          className={`text-slate-700 mb-12 prose prose-slate max-w-none 
            ${isDetailedReview ? 'prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-6 prose-p:leading-relaxed' : 'text-xl leading-relaxed'}
          `}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* PRO & CONTRO */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
              <Check size={20}/> I Pro
            </h3>
            <ul className="space-y-3">
              {prosToShow.map((pro, i) => (
                <li key={i} className="flex gap-2 text-slate-700 text-sm">
                  <span className="text-green-600 font-bold min-w-[20px]">✓</span> 
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <X size={20}/> I Contro
            </h3>
            <ul className="space-y-3">
              {consToShow.map((con, i) => (
                <li key={i} className="flex gap-2 text-slate-700 text-sm">
                  <span className="text-red-500 font-bold min-w-[20px]">•</span> 
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOX FINALE (CTA) */}
        {isDetailedReview && (
           <div className="bg-slate-900 text-white rounded-xl p-8 text-center mt-12">
             <h3 className="text-2xl font-bold mb-4">Vuoi provare {product.name}?</h3>
             <p className="text-slate-300 mb-6">Verifica tu stesso le funzionalità di reportistica e geolocalizzazione.</p>
             <a href={product.website} target="_blank" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105">
                Vai al sito ufficiale
             </a>
           </div>
        )}

      </main>
    </div>
  );
}