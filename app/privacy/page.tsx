import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, Mail, Globe } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-slate-800">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8 font-bold">
        <ArrowLeft size={16} /> Torna alla Home
      </Link>
      
      <h1 className="text-3xl font-bold mb-2">Privacy & Cookie Policy</h1>
      <p className="text-slate-500 mb-8">Ultimo aggiornamento: Dicembre 2025</p>
      
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-10">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Building2 size={20} className="text-blue-600" /> Titolare del Trattamento
        </h2>
        <div className="space-y-2 text-sm">
          <p><strong>ClusterClups SRL</strong></p>
          <p>Sede Legale: Strada Santa Maria dell&apos;Orto, 14</p>
          <p>80053 Castellammare di Stabia (NA), Italia</p>
          <p>P.IVA: 10923621212</p>
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
            <p className="flex items-center gap-2">
              <Mail size={14} className="text-slate-400" /> 
              PEC: <a href="mailto:clusterclups@pec.it" className="text-blue-600 hover:underline">clusterclups@pec.it</a>
            </p>
            <p className="flex items-center gap-2">
              <Globe size={14} className="text-slate-400" /> 
              Web: <a href="https://www.clusterclups.com/" target="_blank" className="text-blue-600 hover:underline">www.clusterclups.com</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <h3>1. Quali dati raccogliamo</h3>
        <p>Raccogliamo dati di navigazione anonimi tramite Google Analytics/Tag Manager per migliorare il servizio. Se ti iscrivi alla newsletter o usi i form di contatto, raccogliamo la tua email.</p>
        
        <h3>2. Cookie</h3>
        <p>Utilizziamo cookie tecnici (essenziali) e cookie di profilazione/marketing (solo previo tuo consenso) per gestire le affiliazioni (es. Amazon, Partner Software) e analizzare il traffico.</p>
        
        <h3>3. Finalità del trattamento</h3>
        <p>I dati sono trattati per fornire il servizio di comparazione, gestire le richieste di contatto e adempiere agli obblighi legali e fiscali.</p>
        
        <h3>4. Affiliazioni</h3>
        <p>Questo sito partecipa al Programma Affiliazione Amazon EU e altri programmi partner. I link affiliati non comportano costi aggiuntivi per l&apos;utente ma generano una piccola commissione per sostenere il progetto.</p>
      </div>
    </div>
  );
}
