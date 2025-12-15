import React from 'react';
import { ArrowLeft, Check, Star, ExternalLink, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

// SIMULAZIONE DATABASE
const productsDB = {
  planradar: {
    name: 'PlanRadar',
    fullDescription: `PlanRadar è la piattaforma leader in Europa per la documentazione digitale e la gestione dei difetti in cantiere. 
    Nata in Austria, si è distinta per la facilità d'uso su tablet e smartphone, permettendo a geometri e architetti di annotare problemi direttamente sulle planimetrie digitali.`,
    pros: ['Interfaccia intuitiva anche per non esperti', 'Funziona offline in cantieri senza rete', 'Report PDF generati in un click'],
    cons: ['Il costo può essere alto per piccolissimi team', 'Manca un modulo avanzato di contabilità fiscale'],
    rating: 4.8,
    price: '€26/mese',
    link: 'https://www.planradar.com/it/?ref=cantiereonline'
  },
  fieldwire: {
    name: 'Fieldwire',
    fullDescription: `Acquisita dal colosso Hilti, Fieldwire è la soluzione "da cantiere" per eccellenza. 
    Il suo focus non è solo la documentazione, ma il coordinamento delle squadre operative. È come un sistema nervoso centrale per capire chi sta facendo cosa in tempo reale.`,
    pros: ['Versione gratuita molto generosa', 'Visualizzatore BIM integrato eccellente', 'Task management superiore ai concorrenti'],
    cons: ['Assistenza prioritaria solo in inglese nel piano base', 'Curva di apprendimento leggermente più ripida'],
    rating: 4.6,
    price: 'Gratis (Base)',
    link: 'https://www.fieldwire.com/?ref=cantiereonline'
  },
  melaworks: {
    name: 'Mela Works',
    fullDescription: `L'orgoglio italiano del ConTech. Mela Works ha rivoluzionato il settore con un'idea semplice: "Se sai usare WhatsApp, sai usare Mela". 
    Tutto si basa su una chat dove le foto e i messaggi diventano automaticamente un verbale di cantiere con valore legale.`,
    pros: ['Semplicità disarmante', 'Gestione contabilità di cantiere integrata', 'Perfetto per le PMI italiane'],
    cons: ['Meno adatto per progetti infrastrutturali giganti', 'Funzionalità BIM limitate rispetto a Autodesk'],
    rating: 4.5,
    price: '€15/mese',
    link: 'https://www.mela.work/?ref=cantiereonline'
  }
};

// MODIFICA QUI: Aggiunto 'async' e il tipo Promise per Next.js 15
export default async function SoftwarePage({ params }: { params: Promise<{ id: string }> }) {
  
  // Attendiamo che i parametri siano pronti
  const { id } = await params;
  
  const software = productsDB[id as keyof typeof productsDB];

  // Se il software non esiste
  if (!software) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Software non trovato</h1>
        <p className="text-gray-500 mb-6">L'articolo che cerchi non è disponibile.</p>
        <Link href="/" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
          <ArrowLeft size={20} /> Torna alla Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      {/* NAVIGAZIONE */}
      <nav className="p-4 border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-slate-500">
            <ArrowLeft size={20} />
          </Link>
          <span className="font-bold text-slate-900">Torna al confronto</span>
        </div>
      </nav>

      {/* HEADER ARTICOLO */}
      <header className="bg-slate-50 py-12 px-4 border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Recensione Completa 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            {software.name}: Ne vale la pena?
          </h1>
          <div className="flex justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span className="font-bold">{software.rating}/5</span>
            </div>
            <div className="text-slate-500">
              Prezzo: <span className="font-bold text-slate-900">{software.price}</span>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENUTO ARTICOLO */}
      <article className="max-w-3xl mx-auto px-4 py-12 leading-relaxed text-lg text-gray-700">
        
        <p className="mb-10 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-slate-900">
          {software.fullDescription}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50/50 border border-green-100 p-6 rounded-2xl">
            <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
              <Check size={20} /> I Punti di Forza
            </h3>
            <ul className="space-y-3">
              {software.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-green-500 mt-1">•</span> {pro}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl">
            <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <ShieldAlert size={20} /> Cosa Migliorare
            </h3>
            <ul className="space-y-3">
              {software.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-red-500 mt-1">•</span> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-2xl text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Il nostro verdetto su {software.name}</h2>
          <p className="text-slate-300 mb-8 text-base">
            Se cerchi una soluzione conforme alla normativa italiana e facile da usare per il team, 
            questa è una delle scelte migliori sul mercato oggi.
          </p>
          <a 
            href={software.link} 
            target="_blank"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:scale-105"
          >
            Vedi Offerta Ufficiale <ExternalLink size={20} />
          </a>
        </div>

      </article>

    </div>
  );
}