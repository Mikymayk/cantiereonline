import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, Star, ExternalLink, HardHat } from 'lucide-react';
import { Metadata } from 'next';
// Usiamo la chiocciola @ per essere sicuri di prendere il percorso giusto dalla root
import { softwareData } from '@/data/software'; 

export const dynamic = 'force-dynamic';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = softwareData.find(p => p.id === params.id);
  if (!product) return { title: 'Software non trovato' };
  return { title: `${product.name} - Recensione` };
}

export default function SoftwarePage({ params }: { params: { id: string } }) {
  // --- DEBUG X-RAY ---
  const debugInfo = {
    parametroRicevuto: params,
    idCercato: params?.id,
    totaleSoftwareNelDB: softwareData.length,
    primi3SoftwareNelDB: softwareData.slice(0, 3).map(s => s.id),
    esisteMatch: softwareData.some(p => p.id === params?.id) ? "SI" : "NO"
  };
  // -------------------

  const product = softwareData.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen p-8 font-mono text-sm bg-gray-50">
        <h1 className="text-2xl font-bold text-red-600 mb-4">⚠️ DIAGNOSTICA ERRORE</h1>
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 text-slate-800">
          <h3 className="font-bold mb-2">Cosa vede il sistema:</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(debugInfo, null, 2)}</pre>
        </div>

        <p className="mb-2"><strong>Possibili cause:</strong></p>
        <ul className="list-disc pl-5 mb-6">
          <li>Se "idCercato" è undefined: La cartella non si chiama <code>[id]</code></li>
          <li>Se "totaleSoftwareNelDB" è 0: L'import dei dati è vuoto.</li>
          <li>Se "esisteMatch" è NO: C'è una differenza di maiuscole/minuscole o l'ID è sbagliato.</li>
        </ul>

        <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded">Torna alla Home</Link>
      </div>
    );
  }

  // ... SE IL PRODOTTO ESISTE, MOSTRA LA PAGINA NORMALE ...
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