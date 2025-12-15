'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già scelto
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      loadGTM();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
    loadGTM();
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  const loadGTM = () => {
    // Qui inseriremo il tuo codice GTM reale in futuro
    console.log('GTM Loaded'); 
    // Esempio di iniezione script:
    // (function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXX');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-50 shadow-2xl border-t border-slate-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300">
          <p className="font-bold text-white mb-1">Rispettiamo la tua privacy</p>
          Utilizziamo cookie per migliorare l'esperienza e gestire le affiliazioni. 
          Leggi la nostra <Link href="/privacy" className="underline hover:text-blue-400">Privacy Policy</Link>.
        </div>
        <div className="flex gap-3">
          <button onClick={declineCookies} className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white border border-slate-600 rounded">
            Solo Essenziali
          </button>
          <button onClick={acceptCookies} className="px-6 py-2 text-sm font-bold bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Accetta Tutti
          </button>
        </div>
      </div>
    </div>
  );
}