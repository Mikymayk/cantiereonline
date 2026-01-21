'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const pathname = usePathname();

  // Determine locale from pathname
  const locale = pathname?.split('/')[1] || 'it';
  // If locale is not one of our supported ones (e.g. 'blog'), fallback to 'it'
  const currentLang = ['de', 'ch', 'se', 'no'].includes(locale) ? locale : 'it';

  // Translations
  const t = {
    it: {
      title: "🍪 Rispettiamo la tua privacy",
      text: "Utilizziamo cookie per analizzare il traffico e gestire le affiliazioni con i partner. Senza il consenso, caricheremo solo le funzionalità essenziali.",
      linkText: "Privacy Policy",
      linkUrl: "/privacy",
      decline: "Solo Essenziali",
      accept: "Accetta e Continua"
    },
    de: {
      title: "🍪 Wir respektieren Ihre Privatsphäre",
      text: "Wir verwenden Cookies, um den Verkehr zu analysieren und Partnerprogramme zu verwalten. Ohne Ihre Zustimmung laden wir nur essenzielle Funktionen.",
      linkText: "Datenschutzerklärung",
      linkUrl: "/de/privacy",
      decline: "Nur Essenzielle",
      accept: "Akzeptieren & Weiter"
    },
    ch: {
      title: "🍪 Wir respektieren Ihre Privatsphäre",
      text: "Wir verwenden Cookies, um den Verkehr zu analysieren und Partnerprogramme zu verwalten. Ohne Ihre Zustimmung laden wir nur essenzielle Funktionen.",
      linkText: "Datenschutzerklärung",
      linkUrl: "/ch/privacy",
      decline: "Nur Essenzielle",
      accept: "Akzeptieren & Weiter"
    },
    se: {
      title: "🍪 Vi respekterar din integritet",
      text: "Vi använder cookies för att analysera trafik och hantera partnerskap. Utan samtycke laddar vi endast nödvändiga funktioner.",
      linkText: "Integritetspolicy",
      linkUrl: "/se/privacy",
      decline: "Endast nödvändiga",
      accept: "Acceptera & Fortsätt"
    },
    no: {
      title: "🍪 Vi respekterer ditt personvern",
      text: "Vi bruker informasjonskapsler for å analysere trafikk og administrere partnere. Uten samtykke laster vi kun essensielle funksjoner.",
      linkText: "Personvernerklæring",
      linkUrl: "/no/privacy",
      decline: "Kun nødvendige",
      accept: "Godta & Fortsett"
    }
  };

  // @ts-ignore
  const txt = t[currentLang];

  // Helper function per aggiornare il consenso
  const updateConsent = (state: 'granted' | 'denied') => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log(`📡 Updating Consent to: ${state}`);

      (window as any).gtag('consent', 'update', {
        'analytics_storage': state,
        'ad_storage': state,
        'ad_user_data': state,
        'ad_personalization': state
      });

      // Se il consenso è garantito, inviamo l'evento personalizzato richiesto
      if (state === 'granted') {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          'event': 'cookie_consent_update'
        });
      }
    }
  };

  useEffect(() => {
    // 1. Controlliamo se l'utente ha già scelto in passato
    const consent = localStorage.getItem('cookie_consent');
    
    if (!consent) {
      // Se non ha mai scelto, mostriamo il banner
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // Se aveva già accettato, aggiorniamo il consenso a 'granted'
      // GTM è già caricato da GoogleTagManager.tsx con stato 'denied'
      updateConsent('granted');
    }
    // Se è 'declined', non facciamo nulla perché il default è già 'denied'
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
    updateConsent('granted');
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
    updateConsent('denied');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-50 shadow-2xl border-t border-slate-700 animate-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300 leading-relaxed text-center md:text-left">
          <p className="font-bold text-white mb-1">{txt.title}</p>
          {txt.text}
          <span className="block md:inline md:ml-1">
            Leggi la <Link href={txt.linkUrl} className="underline hover:text-blue-400 text-white">{txt.linkText}</Link>.
          </span>
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={declineCookies} 
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white border border-slate-600 rounded hover:bg-slate-800 transition-colors"
          >
            {txt.decline}
          </button>
          <button 
            onClick={acceptCookies} 
            className="px-6 py-2 text-sm font-bold bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
          >
            {txt.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
