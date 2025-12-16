import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, Star, ExternalLink, HardHat } from 'lucide-react';
import { Metadata } from 'next';
import { softwareData } from '@/data/software'; 
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

// Gestione Metadata (Anche qui params potrebbe essere una Promise in futuro, ma per ora Next lo gestisce)
export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const product = softwareData.find(p => p.id === params.id);
  if (!product) return { title: 'Software non trovato' };
  return { 
    title: `${product.name} - Recensione e Prezzi`,
    description: product.description.replace(/<[^>]*>?/gm, '').substring(0, 160)
  };
}

// DEFINIZIONE TIPO PROPS
type Props = {
  params: Promise<{ id: string }>;
};

// NOTA: La funzione ora è ASYNC e i params sono una PROMISE
export default async function SoftwarePage(props: Props) {
  
  // 1. ASPETTIAMO CHE I PARAMETRI SIANO PRONTI
  const params = await props.params;
  const { id } = params;

  // 2. ORA CERCHIAMO IL PRODOTTO
  const product = softwareData.find(p => p.id === id);

  // Se non esiste, mostriamo errore
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Software non trovato</h1>
        <p className="mb-4">ID richiesto: <span className="font-mono bg-gray-100 p-1">{id}</span></p>
        <p className="text-sm text-gray-500 mb-6">Controlla che l'ID nell'URL corrisponda esattamente a quello nel file dati.</p>
        <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Torna alla Home</Link>
      </div>
    );
  }

  // 3. RENDERIZZIAMO LA PAGINA
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

        <div className="flex flex-col md:flex-row gap-6 items-start justify-between mb-8 border-b border-gray-100 pb-8 animate-in slide-in-from-bottom-2">
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
          className="text-xl leading-relaxed text-slate-600 mb-12 prose prose-slate"
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