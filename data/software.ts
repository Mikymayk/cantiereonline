// data/software.ts

export interface Software {
  id: string;
  name: string;
  price: string;
  paymentType: string; // Es. "/mese" o "(Free)"
  rating: number;
  reviews: string; // Es. "Eccellente"
  website: string; // Link affiliato
  
  // Dati Descrittivi (Modificati da UMANO)
  description: string;
  pros: string[];
  cons: string[];

  // Dati Tecnici (Monitorati da AI)
  features: {
    // --- HIGHLIGHTS (Quelli della tabella principale) ---
    giornale_lavori: boolean;
    pos_psc: boolean;
    computo_metrico: boolean;
    free_trial: boolean;

    // --- AMMINISTRAZIONE & NORMATIVA ---
    conformita_ita: boolean; // Rispetta leggi italiane
    fatturazione_elettronica: boolean;
    firma_digitale: boolean;
    integrazione_sdi: boolean;
    export_contabilita: boolean; // XPWE o Excel avanzato

    // --- CANTIERE & TECNICO ---
    funziona_offline: boolean;
    bim_viewer: boolean; // Visualizza IFC
    foto_360: boolean;
    gps_staff: boolean; // Geolocalizzazione
    app_ios: boolean;
    app_android: boolean;

    // --- COLLABORAZIONE ---
    chat_interna: boolean;
    notifiche_push: boolean;
    utenti_illimitati: boolean; // Nella licenza base
    inviti_esterni: boolean; // Far entrare il committente

    // --- SUPPORTO (Nuova Sezione) ---
    interfaccia_italiano: boolean;
    supporto_telefono: boolean;
    supporto_chat: boolean;
    supporto_italiano: boolean; // Operatori che parlano IT
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
    description: "La soluzione leader in Europa per la documentazione digitale e la gestione dei difetti in cantiere.",
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
    description: "Il gestionale cantiere 'made in USA' più famoso. Offre un piano gratuito molto generoso.",
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
    description: "L'app italiana che sembra WhatsApp ma è un gestionale. Giornale lavori automatico via chat.",
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
    description: "La versione cloud dello standard italiano per il computo metrico e la contabilità pubblica.",
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
    description: "Il colosso italiano per la gestione completa delle imprese di costruzioni (ERP + Cantiere).",
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