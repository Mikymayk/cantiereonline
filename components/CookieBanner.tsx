'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 1. Controlliamo se l'utente ha già scelto in passato
    const consent = localStorage.getItem('cookie_consent');
    
    if (!consent) {
      // Se non ha mai scelto, mostriamo il banner
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // Se aveva già accettato, carichiamo GTM subito (senza mostrare banner)
      loadGTM();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
    loadGTM(); // Carica GTM immediatamente al click
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
    // Non carichiamo nulla
  };

  const loadGTM = () => {
    // Evita di caricarlo due volte se l'utente clicca freneticamente
    if ((window as any).dataLayer) return;

    console.log('✅ Consenso ottenuto: Caricamento GTM-WHFPC3L4...'); 

    // Inizializza il DataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    // Crea e inietta lo script di Google
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WHFPC3L4';
    
    // Inseriscilo nell'head della pagina
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(gtmScript, firstScript);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-50 shadow-2xl border-t border-slate-700 animate-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300 leading-relaxed text-center md:text-left">
          <p className="font-bold text-white mb-1">🍪 Rispettiamo la tua privacy</p>
          Utilizziamo cookie per analizzare il traffico e gestire le affiliazioni con i partner. 
          Senza il consenso, caricheremo solo le funzionalità essenziali. 
          Leggi la <Link href="/privacy" className="underline hover:text-blue-400 text-white">Privacy Policy</Link>.
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={declineCookies} 
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white border border-slate-600 rounded hover:bg-slate-800 transition-colors"
          >
            Solo Essenziali
          </button>
          <button 
            onClick={acceptCookies} 
            className="px-6 py-2 text-sm font-bold bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
          >
            Accetta e Continua
          </button>
        </div>
      </div>
    </div>
  );
}