// data/software.ts

export interface Software {
  id: string;
  name: string;
  price: string;
  paymentType: string;
  rating: number;
  reviews: string;
  website: string;
  pricingUrl: string; // Serve al Robot per controllare i prezzi
  description: string;
  pros: string[];
  cons: string[];

  features: {
    // --- HIGHLIGHTS ---
    giornale_lavori: boolean;
    pos_psc: boolean;
    computo_metrico: boolean;
    free_trial: boolean;

    // --- AMMINISTRAZIONE ---
    conformita_ita: boolean;
    fatturazione_elettronica: boolean;
    firma_digitale: boolean;
    integrazione_sdi: boolean;
    export_contabilita: boolean;

    // --- TECNICO ---
    funziona_offline: boolean;
    bim_viewer: boolean;
    foto_360: boolean;
    gps_staff: boolean;
    app_ios: boolean;
    app_android: boolean;

    // --- COLLABORAZIONE ---
    chat_interna: boolean;
    notifiche_push: boolean;
    utenti_illimitati: boolean;
    inviti_esterni: boolean;

    // --- SUPPORTO ---
    interfaccia_italiano: boolean;
    supporto_telefono: boolean;
    supporto_chat: boolean;
    supporto_italiano: boolean;
  };
}

export const softwareData: Software[] = [
  {
    id: 'planradar',
    name: 'PlanRadar',
    price: '€26',
    paymentType: '/mese',
    rating: 4.8,
    reviews: 'Eccellente',
    website: 'https://www.planradar.com/it/?ref=cantiereonline',
    pricingUrl: 'https://www.planradar.com/it/prezzi/',
    description: "La soluzione leader per la <strong>documentazione digitale</strong> e gestione difetti. Appunta note, foto e memo vocali su planimetrie via app per creare <strong>report rapidi</strong>, eliminando il lavoro amministrativo post-sopralluogo.",
    pros: ["Interfaccia intuitiva su Tablet", "Report PDF istantanei", "Funziona offline perfettamente"],
    cons: ["Costoso per piccoli team", "Manca la contabilità avanzata"],
    features: {
      giornale_lavori: true, pos_psc: false, computo_metrico: false, free_trial: true,
      conformita_ita: true, fatturazione_elettronica: false, firma_digitale: true, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: true, foto_360: true, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: false, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: true
    }
  },
  {
    id: 'fieldwire',
    name: 'Fieldwire',
    price: '€0',
    paymentType: '(Free)',
    rating: 4.6,
    reviews: 'Molto Buono',
    website: 'https://www.fieldwire.com/?ref=cantiereonline',
    pricingUrl: 'https://www.fieldwire.com/pricing/',
    description: "Connette ufficio e campo per un <strong>jobsite management</strong> ottimale. Eccelle nel <strong>coordinamento squadre</strong> e visualizzazione disegni su mobile, ottimizzando task e avanzamento lavori in <strong>tempo reale</strong>.",
    pros: ["Versione gratuita a vita", "Visualizzatore tavole velocissimo", "Gestione task eccellente"],
    cons: ["Normativa italiana assente", "Supporto in inglese prevalente"],
    features: {
      giornale_lavori: true, pos_psc: false, computo_metrico: false, free_trial: true,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: true, foto_360: true, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: false, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: false, supporto_chat: true, supporto_italiano: false
    }
  },
  {
    id: 'melaworks',
    name: 'Mela Works',
    price: '€15',
    paymentType: '/mese',
    rating: 4.5,
    reviews: 'Ottimo',
    website: 'https://www.mela.work/?ref=cantiereonline',
    pricingUrl: 'https://www.mela.work/it/prezzi/',
    description: "Gestisci il cantiere con la <strong>semplicità di una chat</strong>. Traccia attività, scambia <strong>foto geolocalizzate</strong> e compila il <strong>Giornale dei Lavori</strong> in automatico per verbali e rapportini legali.",
    pros: ["Facile come usare WhatsApp", "Giornale Lavori Automatico", "Supporto italiano eccezionale"],
    cons: ["Meno adatto per grandi appalti", "Funzioni BIM limitate"],
    features: {
      giornale_lavori: true, pos_psc: true, computo_metrico: false, free_trial: true,
      conformita_ita: true, fatturazione_elettronica: false, firma_digitale: true, integrazione_sdi: false, export_contabilita: true,
      funziona_offline: true, bim_viewer: false, foto_360: false, gps_staff: true, app_ios: true, app_android: true,
      chat_interna: true, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: true
    }
  },
  {
    id: 'acca_primus',
    name: 'Primus Online',
    price: '€39',
    paymentType: '/mese',
    rating: 4.7,
    reviews: 'Leader',
    website: 'https://www.acca.it/?ref=cantiereonline',
    pricingUrl: 'https://www.acca.it/primus-online-computo-metrico-cloud',
    description: "Porta lo standard del <strong>computo metrico estimativo</strong> nel <strong>100% Cloud</strong>. Redigi <strong>preventivi collaborativi</strong> e accedi ai prezzari edili senza installazioni, con potenza e mobilità totale.",
    pros: ["Standard assoluto in Italia", "Banche dati prezziari integrate", "Computo metrico perfetto"],
    cons: ["Interfaccia datata", "Curva di apprendimento ripida"],
    features: {
      giornale_lavori: true, pos_psc: true, computo_metrico: true, free_trial: false,
      conformita_ita: true, fatturazione_elettronica: true, firma_digitale: true, integrazione_sdi: true, export_contabilita: true,
      funziona_offline: false, bim_viewer: true, foto_360: false, gps_staff: false, app_ios: false, app_android: false,
      chat_interna: false, notifiche_push: false, utenti_illimitati: false, inviti_esterni: false,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: true
    }
  },
  {
    id: 'teamsystem_cpm',
    name: 'TeamSystem CPM',
    price: 'Richiesta',
    paymentType: '(Preventivo)',
    rating: 4.4,
    reviews: 'Enterprise',
    website: 'https://www.teamsystem.com/construction?utm_source=cantiereonline',
    pricingUrl: 'https://www.teamsystem.com/construction/computo-contabilita-lavori/cpm',
    description: "Gestionale evoluto per il <strong>Construction Project Management</strong> di General Contractor e grandi imprese. Integra controllo finanziario e <strong>BIM 4D/5D</strong> gestendo l'intero ciclo commessa.",
    pros: ["Suite completa Enterprise", "Potentissimo per grandi imprese", "Gestione finanziaria avanzata"],
    cons: ["Prezzi non pubblici", "Complesso da configurare"],
    features: {
      giornale_lavori: true, pos_psc: true, computo_metrico: true, free_trial: false,
      conformita_ita: true, fatturazione_elettronica: true, firma_digitale: true, integrazione_sdi: true, export_contabilita: true,
      funziona_offline: false, bim_viewer: true, foto_360: false, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: false, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: false, supporto_italiano: true
    }
  }
];