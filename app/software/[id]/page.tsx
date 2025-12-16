import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, Star, ExternalLink, HardHat } from 'lucide-react';
import { notFound } from 'next/navigation';

// --- DATABASE PRODOTTI (Speculare alla Home) ---
const productsDB: Record<string, any> = {
  planradar: {
    name: "PlanRadar",
    fullDescription: "La soluzione leader in Europa per la documentazione digitale e la gestione dei difetti in cantiere. Perfetta per chi vuole usare tablet e smartphone per segnalare problemi direttamente sulle planimetrie.",
    pros: ["Interfaccia intuitiva su Tablet", "Report PDF istantanei", "Funziona offline perfettamente"],
    cons: ["Costoso per piccoli team", "Manca la contabilità avanzata"],
    rating: 4.8,
    price: "€26/mese",
    link: "https://www.planradar.com/it/?ref=cantiereonline"
  },
  fieldwire: {
    name: "Fieldwire",
    fullDescription: "Il gestionale cantiere 'made in USA' più famoso. Offre un piano gratuito molto generoso per piccoli team. Ottimo per la gestione dei task e la visualizzazione delle tavole.",
    pros: ["Versione gratuita a vita (piccoli team)", "Visualizzatore tavole velocissimo", "Gestione task eccellente"],
    cons: ["Meno focalizzato sulla normativa italiana", "Supporto in inglese prevalente"],
    rating: 4.6,
    price: "Gratis (Base)",
    link: "https://www.fieldwire.com/?ref=cantiereonline"
  },
  melaworks: {
    name: "Mela Works",
    fullDescription: "L'app italiana che sembra WhatsApp ma è un gestionale. Creata per chi odia la burocrazia: scatti foto, mandi vocali e l'app crea il giornale dei lavori in automatico.",
    pros: ["Facile come usare WhatsApp", "Giornale Lavori Automatico", "Supporto italiano eccezionale"],
    cons: ["Meno adatto per grandi appalti complessi", "Funzioni BIM limitate"],
    rating: 4.5,
    price: "€15/mese",
    link: "https://www.mela.work/?ref=cantiereonline"
  },
  acca_primus: {
    name: "Primus Online",
    fullDescription: "La versione cloud dello standard italiano per il computo metrico. Se devi fare computi pubblici o interagire con la PA, è quasi una scelta obbligata.",
    pros: ["Standard assoluto in Italia", "Banche dati prezziari integrate", "Computo metrico perfetto"],
    cons: ["Interfaccia un po' datata", "Curva di apprendimento ripida"],
    rating: 4.7,
    price: "€39/mese",
    link: "https://www.acca.it/?ref=cantiereonline"
  },
  teamsystem_cpm: {
    name: "TeamSystem CPM",
    fullDescription: "Il colosso italiano per la gestione completa delle imprese di costruzioni (ex STR). Una suite completa che copre dal preventivo alla contabilità di cantiere fino al controllo di gestione.",
    pros: ["Suite completa (ERP + Cantiere)", "Potentissimo per grandi imprese", "Gestione finanziaria avanzata"],
    cons: ["Non ha prezzi pubblici", "Molto complesso da configurare", "Costoso per piccole ditte"],
    rating: 4.4,
    price: "Su Preventivo",
    link: "https://www.teamsystem.com/construction?utm_source=cantiereonline"
  }
};

export function generateStaticParams() {
  return Object.keys(productsDB).map((id) => ({ id }));
}

export default function SoftwarePage({ params }: { params: { id: string } }) {
  const product = softwareData.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* HEADER SEMPLIFICATO */}
      <header className="border-b border-gray-100 p-4">
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
            </div>
          </div>
          <div className="text-right">
             <div className="text-3xl font-bold text-blue-600">{product.price}</div>
             <a href={product.link} target="_blank" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold mt-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Vedi Sito Ufficiale <ExternalLink size={18} />
             </a>
          </div>
        </div>

        <p className="text-xl leading-relaxed text-slate-600 mb-12">
          {product.fullDescription}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
              <Check size={20}/> I Pro
            </h3>
            <ul className="space-y-3">
              {product.pros.map((pro: string, i: number) => (
                <li key={i} className="flex gap-2 text-slate-700 text-sm">
                  <span className="text-green-600 font-bold">✓</span> {pro}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <X size={20}/> I Contro
            </h3>
            <ul className="space-y-3">
              {product.cons.map((con: string, i: number) => (
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