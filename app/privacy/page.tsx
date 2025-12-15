import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-slate-800">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8 font-bold">
        <ArrowLeft size={16} /> Torna alla Home
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">Privacy & Cookie Policy</h1>
      <p className="mb-4">Ultimo aggiornamento: Dicembre 2025</p>
      
      <div className="prose prose-slate max-w-none">
        <h3>1. Chi siamo</h3>
        <p>Il titolare del trattamento è ClusterClups SRL. Per qualsiasi informazione: info@cantiereonline.it</p>
        
        <h3>2. Quali dati raccogliamo</h3>
        <p>Raccogliamo dati di navigazione anonimi tramite Google Analytics/Tag Manager per migliorare il servizio. Se ti iscrivi alla newsletter o usi i form di contatto, raccogliamo la tua email.</p>
        
        <h3>3. Cookie</h3>
        <p>Utilizziamo cookie tecnici (essenziali) e cookie di profilazione/marketing (solo previo tuo consenso) per gestire le affiliazioni (es. Amazon, Partner Software).</p>
        
        <h3>4. Affiliazioni</h3>
        <p>Questo sito partecipa al Programma Affiliazione Amazon EU e altri programmi partner. I link affiliati non comportano costi aggiuntivi per l'utente.</p>
      </div>
    </div>
  );
}