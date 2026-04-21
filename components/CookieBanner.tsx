'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: false, marketing: false });
  const pathname = usePathname();

  // Determine locale from pathname
  const locale = pathname?.split('/')[1] || 'it';
  // If locale is not one of our supported ones (e.g. 'blog'), fallback to 'it'
  const currentLang = ['de', 'ch', 'se', 'no'].includes(locale) ? locale : 'it';

  // Translations
  const t: any = {
    it: {
      title: "🍪 Rispettiamo la tua privacy",
      text: "Utilizziamo cookie per analizzare il traffico e gestire le pubblicità. Senza il consenso, caricheremo solo le funzionalità essenziali.",
      linkText: "Privacy Policy",
      linkUrl: "/privacy",
      personalize: "Opzioni",
      accept: "Accetta",
      acceptAll: "Accetta Tutti",
      acceptSelected: "Accetta Selezionati",
      modalTitle: "Preferenze Privacy",
      essential: "Essenziali",
      analytics: "Statistiche",
      marketing: "Marketing",
      alwaysActive: "Sempre attivi"
    },
    de: {
      title: "🍪 Wir respektieren Ihre Privatsphäre",
      text: "Wir verwenden Cookies für den Verkehr und Werbung. Ohne Zustimmung nur essenzielle Funktionen.",
      linkText: "Datenschutzerklärung",
      linkUrl: "/de/privacy",
      personalize: "Optionen",
      accept: "Akzeptieren",
      acceptAll: "Alle akzeptieren",
      acceptSelected: "Auswahl akzeptieren",
      modalTitle: "Datenschutzeinstellungen",
      essential: "Essenziell",
      analytics: "Statistiken",
      marketing: "Marketing",
      alwaysActive: "Immer aktiv"
    },
    ch: {
      title: "🍪 Wir respektieren Ihre Privatsphäre",
      text: "Wir verwenden Cookies für den Verkehr und Werbung. Ohne Zustimmung nur essenzielle Funktionen.",
      linkText: "Datenschutzerklärung",
      linkUrl: "/ch/privacy",
      personalize: "Optionen",
      accept: "Akzeptieren",
      acceptAll: "Alle akzeptieren",
      acceptSelected: "Auswahl akzeptieren",
      modalTitle: "Datenschutzeinstellungen",
      essential: "Essenziell",
      analytics: "Statistiken",
      marketing: "Marketing",
      alwaysActive: "Immer aktiv"
    },
    se: {
      title: "🍪 Vi respekterar din integritet",
      text: "Vi använder cookies för trafik och annonser. Utan samtycke endast nödvändiga funktioner.",
      linkText: "Integritetspolicy",
      linkUrl: "/se/privacy",
      personalize: "Alternativ",
      accept: "Acceptera",
      acceptAll: "Acceptera alla",
      acceptSelected: "Acceptera valda",
      modalTitle: "Integritetspreferenser",
      essential: "Nödvändiga",
      analytics: "Statistik",
      marketing: "Marknadsföring",
      alwaysActive: "Alltid aktiv"
    },
    no: {
      title: "🍪 Vi respekterer ditt personvern",
      text: "Vi bruker informasjonskapsler for trafikk og annonser. Uten samtykke kun essensielle funksjoner.",
      linkText: "Personvernerklæring",
      linkUrl: "/no/privacy",
      personalize: "Alternativer",
      accept: "Godta",
      acceptAll: "Godta alle",
      acceptSelected: "Godta valgte",
      modalTitle: "Personverninnstillinger",
      essential: "Nødvendige",
      analytics: "Statistikk",
      marketing: "Markedsføring",
      alwaysActive: "Alltid aktiv"
    }
  };

  const txt = t[currentLang];

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const prefs = JSON.parse(localStorage.getItem('cookie_preferences') || '{"analytics":true,"marketing":true}');
      activateGTM(prefs);
    }
  }, []);

  const acceptAll = () => {
    const prefs = { analytics: true, marketing: true };
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.setItem('cookie_preferences', JSON.stringify(prefs));
    setShowBanner(false);
    setShowModal(false);
    activateGTM(prefs);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.setItem('cookie_preferences', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
    activateGTM(preferences);
  };

  const activateGTM = (prefs: { analytics: boolean, marketing: boolean }) => {
    if (typeof window === 'undefined') return;
    if (document.getElementById('gtm-script')) return;

    console.log('✅ Consenso ottenuto:', prefs);

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]){(window as any).dataLayer.push(arguments);}

    // @ts-ignore
    gtag('consent', 'update', {
      'analytics_storage': prefs.analytics ? 'granted' : 'denied',
      'ad_storage': prefs.marketing ? 'granted' : 'denied',
      'ad_user_data': prefs.marketing ? 'granted' : 'denied',
      'ad_personalization': prefs.marketing ? 'granted' : 'denied'
    });

    (window as any).dataLayer.push({
      'event': 'cookie_consent_update'
    });

    (window as any).dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    const gtmScript = document.createElement('script');
    gtmScript.id = 'gtm-script';
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WHFPC3L4';

    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(gtmScript, firstScript);
    }
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-50 shadow-2xl border-t border-slate-700 animate-in slide-in-from-bottom-10 duration-500">
        <button 
          onClick={acceptAll} 
          className="absolute top-2 right-2 text-slate-400 hover:text-white p-2"
          aria-label="Close and Accept All"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-2 md:mt-0">
          <div className="text-sm text-slate-300 leading-relaxed text-center md:text-left pr-6">
            <p className="font-bold text-white mb-1">{txt.title}</p>
            {txt.text}
            <span className="block md:inline md:ml-1">
              Leggi la <Link href={txt.linkUrl} className="underline hover:text-blue-400 text-white">{txt.linkText}</Link>.
            </span>
          </div>
          <div className="flex gap-3 shrink-0">
            <button 
              onClick={() => setShowModal(true)} 
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white border border-slate-600 rounded hover:bg-slate-800 transition-colors"
            >
              {txt.personalize}
            </button>
            <button 
              onClick={acceptAll} 
              className="px-6 py-2 text-sm font-bold bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
            >
              {txt.accept}
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-lg shadow-xl w-full max-w-md p-6 relative animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{txt.modalTitle}</h2>
              <button 
                onClick={() => setShowModal(false)} 
                className="text-slate-400 hover:text-slate-700 p-1"
                title="Torna indietro"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-200">
                <div>
                  <div className="font-semibold text-sm">{txt.essential}</div>
                  <div className="text-xs text-slate-500"> Necessari per il funzionamento del sito </div>
                </div>
                <div className="text-xs font-semibold text-slate-600 bg-slate-200 px-2 py-1 rounded">
                  {txt.alwaysActive}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border border-slate-200 rounded">
                <div>
                  <div className="font-semibold text-sm">{txt.analytics}</div>
                  <div className="text-xs text-slate-500"> Misurazione traffico e visite </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={preferences.analytics} 
                    onChange={e => setPreferences({...preferences, analytics: e.target.checked})} 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-3 border border-slate-200 rounded">
                <div>
                  <div className="font-semibold text-sm">{txt.marketing}</div>
                  <div className="text-xs text-slate-500"> Pubblicità personalizzata (AdSense) </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={preferences.marketing} 
                    onChange={e => setPreferences({...preferences, marketing: e.target.checked})} 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              <button 
                onClick={acceptAll}
                className="w-full px-4 py-2.5 text-sm font-bold bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors shadow-sm"
              >
                {txt.acceptAll}
              </button>
              <button 
                onClick={acceptSelected}
                className="w-full px-4 py-2.5 text-sm font-medium border border-slate-300 text-slate-700 rounded hover:bg-slate-50 transition-colors"
              >
                {txt.acceptSelected}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
