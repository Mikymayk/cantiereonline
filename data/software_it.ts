// data/software.ts

export interface Software {
  id: string;
  name: string;
  price: string;
  paymentType: string;
  rating: number;
  reviews: string;
  website: string;
  pricingUrl: string;
  description: string;
  pros: string[];
  cons: string[];

  features: {
    giornale_lavori: boolean;
    pos_psc: boolean;
    computo_metrico: boolean;
    free_trial: boolean;
    special_free: boolean; // Nuova chiave per "Versione Gratuita"
    conformita_ita: boolean;
    fatturazione_elettronica: boolean;
    firma_digitale: boolean;
    integrazione_sdi: boolean;
    export_contabilita: boolean;
    funziona_offline: boolean;
    bim_viewer: boolean;
    foto_360: boolean;
    gps_staff: boolean;
    app_ios: boolean;
    app_android: boolean;
    chat_interna: boolean;
    notifiche_push: boolean;
    utenti_illimitati: boolean;
    inviti_esterni: boolean;
    interfaccia_italiano: boolean;
    supporto_telefono: boolean;
    supporto_chat: boolean;
    supporto_italiano: boolean;
  };
}

export const softwareList: Software[] = [
  // --- I TOP 5 ORIGINALI (POSIZIONE INVARIATA) ---
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
      giornale_lavori: true, pos_psc: false, computo_metrico: false, free_trial: true, special_free: false,
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
      giornale_lavori: true, pos_psc: false, computo_metrico: false, free_trial: true, special_free: true,
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
      giornale_lavori: true, pos_psc: true, computo_metrico: false, free_trial: true, special_free: false,
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
      giornale_lavori: true, pos_psc: true, computo_metrico: true, free_trial: false, special_free: false,
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
      giornale_lavori: true, pos_psc: true, computo_metrico: true, free_trial: false, special_free: false,
      conformita_ita: true, fatturazione_elettronica: true, firma_digitale: true, integrazione_sdi: true, export_contabilita: true,
      funziona_offline: false, bim_viewer: true, foto_360: false, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: false, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: false, supporto_italiano: true
    }
  },

  // --- NUOVI 15 SOFTWARE ---

  {
    id: 'autodesk_build',
    name: 'Autodesk Build',
    price: 'Richiesta',
    paymentType: '(Preventivo)',
    rating: 4.7,
    reviews: 'Top BIM',
    website: 'https://construction.autodesk.com/products/autodesk-build/',
    pricingUrl: 'https://construction.autodesk.com/pricing/',
    description: "Il successore di BIM 360, è la piattaforma definitiva per connettere dati, flussi di lavoro e squadre. Ideale per chi usa <strong>Revit o AutoCAD</strong>, offre una gestione <strong>BIM integrata</strong> e controllo qualità totale.",
    pros: ["Integrazione BIM nativa perfetta", "Ecosistema Autodesk", "Scalabilità infinita"],
    cons: ["Costo elevato", "Richiede formazione specifica"],
    features: {
      giornale_lavori: true, pos_psc: false, computo_metrico: false, free_trial: true, special_free: false,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: true, foto_360: true, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: false, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: false, supporto_chat: true, supporto_italiano: true
    }
  },
  {
    id: 'procore',
    name: 'Procore',
    price: 'Richiesta',
    paymentType: '(Preventivo)',
    rating: 4.8,
    reviews: 'Globale',
    website: 'https://www.procore.com/',
    pricingUrl: 'https://www.procore.com/pricing',
    description: "La piattaforma di gestione edilizia più usata al mondo. <strong>Procore</strong> unisce tutti gli stakeholder su un'unica piattaforma, gestendo rischi, qualità e finanze con <strong>utenti illimitati</strong>.",
    pros: ["Utenti illimitati inclusi", "App mobile eccellente", "Marketplace con 300+ integrazioni"],
    cons: ["Prezzi entry-level alti", "Adattamento a norme italiane da verificare"],
    features: {
      giornale_lavori: true, pos_psc: false, computo_metrico: true, free_trial: true, special_free: false,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: true, integrazione_sdi: false, export_contabilita: true,
      funziona_offline: true, bim_viewer: true, foto_360: true, gps_staff: true, app_ios: true, app_android: true,
      chat_interna: false, notifiche_push: true, utenti_illimitati: true, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: false
    }
  },
  {
    id: 'blumatica',
    name: 'Blumatica',
    price: '€195',
    paymentType: '/anno',
    rating: 4.5,
    reviews: 'Italiano',
    website: 'https://www.blumatica.it/',
    pricingUrl: 'https://www.blumatica.it/prezzi/',
    description: "Software house italiana di riferimento per la <strong>sicurezza cantieri (POS/PSC)</strong> e la certificazione energetica. Soluzioni <strong>modulari</strong> e conformi al 100% alla normativa italiana vigente.",
    pros: ["Conformità normativa totale", "Prezzi una tantum o annuali chiari", "Modulare"],
    cons: ["Interfaccia desktop classica", "Cloud non sempre nativo"],
    features: {
      giornale_lavori: true, pos_psc: true, computo_metrico: true, free_trial: true, special_free: false,
      conformita_ita: true, fatturazione_elettronica: true, firma_digitale: true, integrazione_sdi: true, export_contabilita: true,
      funziona_offline: true, bim_viewer: true, foto_360: false, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: false, notifiche_push: false, utenti_illimitati: false, inviti_esterni: false,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: true
    }
  },
  {
    id: 'monday_com',
    name: 'Monday.com',
    price: '€24',
    paymentType: '/mese',
    rating: 4.6,
    reviews: 'Flessibile',
    website: 'https://monday.com/lang/it/',
    pricingUrl: 'https://monday.com/lang/it/pricing/',
    description: "Non solo per l'ufficio: <strong>Monday.com</strong> è un Work OS flessibile perfetto per gestire <strong>cronoprogrammi (Gantt)</strong>, risorse e scadenze di cantiere con un'interfaccia visiva imbattibile.",
    pros: ["Estremamente personalizzabile", "Automazioni potenti", "Facile da imparare"],
    cons: ["Manca computo metrico nativo", "Funzioni edili specifiche da creare"],
    features: {
      giornale_lavori: false, pos_psc: false, computo_metrico: false, free_trial: true, special_free: false,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: false, foto_360: false, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: true, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: false, supporto_chat: true, supporto_italiano: false
    }
  },
  {
    id: 'euclide_geo',
    name: 'Euclide',
    price: '€299',
    paymentType: '(Licenza)',
    rating: 4.4,
    reviews: 'Storico',
    website: 'https://www.geonetwork.it/',
    pricingUrl: 'https://www.geonetwork.it/software/euclide_computo_contabilita/',
    description: "Un classico del software tecnico italiano per il <strong>computo metrico</strong> e la contabilità lavori. Euclide di Geo Network è sinonimo di affidabilità per la redazione di <strong>capitolati</strong> e stati avanzamento lavori.",
    pros: ["Prezzari sempre aggiornati", "Solido e rodato", "Acquisto licenza perpetua"],
    cons: ["Poco orientato al cloud/mobile", "Grafica tradizionale"],
    features: {
      giornale_lavori: true, pos_psc: true, computo_metrico: true, free_trial: true, special_free: false,
      conformita_ita: true, fatturazione_elettronica: true, firma_digitale: true, integrazione_sdi: false, export_contabilita: true,
      funziona_offline: true, bim_viewer: false, foto_360: false, gps_staff: false, app_ios: false, app_android: false,
      chat_interna: false, notifiche_push: false, utenti_illimitati: false, inviti_esterni: false,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: false, supporto_italiano: true
    }
  },
  {
    id: 'edilgo',
    name: 'EdilGo',
    price: '€0',
    paymentType: '(Free)',
    rating: 4.5,
    reviews: 'Innovativo',
    website: 'https://www.edilgo.com/',
    pricingUrl: 'https://www.edilgo.com/',
    description: "Il primo software di <strong>e-procurement</strong> per l'edilizia. Carica il tuo computo metrico e l'<strong>Intelligenza Artificiale</strong> trova i fornitori migliori, gestendo richieste di offerta e acquisti automaticamente.",
    pros: ["Automatizza gli acquisti", "Versione base gratuita", "Network fornitori vasto"],
    cons: ["Focalizzato solo sugli acquisti", "Non è un gestionale di cantiere"],
    features: {
      giornale_lavori: false, pos_psc: false, computo_metrico: true, free_trial: true, special_free: true,
      conformita_ita: true, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: false, bim_viewer: false, foto_360: false, gps_staff: false, app_ios: false, app_android: false,
      chat_interna: true, notifiche_push: true, utenti_illimitati: true, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: true
    }
  },
  {
    id: 'namirial_regolo',
    name: 'Namirial Regolo',
    price: '€99',
    paymentType: '/anno',
    rating: 4.3,
    reviews: 'Conforme',
    website: 'https://www.namirial.it/edilizia/',
    pricingUrl: 'https://www.namirial.it/software-edilizia/regolo/',
    description: "Parte dell'ecosistema Namirial, Regolo è ideale per <strong>computi metrici</strong> e contabilità lavori. Si integra perfettamente con i servizi di <strong>firma digitale</strong> e fatturazione elettronica del gruppo.",
    pros: ["Integrazione firma digitale top", "Prezzi competitivi", "Normativa italiana"],
    cons: ["Interfaccia migliorabile", "App mobile limitata"],
    features: {
      giornale_lavori: true, pos_psc: true, computo_metrico: true, free_trial: true, special_free: false,
      conformita_ita: true, fatturazione_elettronica: true, firma_digitale: true, integrazione_sdi: true, export_contabilita: true,
      funziona_offline: true, bim_viewer: true, foto_360: false, gps_staff: false, app_ios: false, app_android: false,
      chat_interna: false, notifiche_push: false, utenti_illimitati: false, inviti_esterni: false,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: true
    }
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    price: '€7',
    paymentType: '/mese',
    rating: 4.7,
    reviews: 'Economico',
    website: 'https://clickup.com/',
    pricingUrl: 'https://clickup.com/pricing',
    description: "L'app che sostituisce tutte le altre. <strong>ClickUp</strong> è potentissimo per gestire task, documenti e tempi di cantiere a un <strong>prezzo imbattibile</strong>. Ottimo per piccole imprese che vogliono organizzazione digitale.",
    pros: ["Piano Free generoso", "Viste Gantt e Mappa", "Moltissimi template"],
    cons: ["Troppe funzioni possono confondere", "Non specifico per edilizia"],
    features: {
      giornale_lavori: false, pos_psc: false, computo_metrico: false, free_trial: true, special_free: true,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: false, foto_360: false, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: true, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: false, supporto_chat: true, supporto_italiano: false
    }
  },
  {
    id: 'dalux',
    name: 'Dalux',
    price: '€0',
    paymentType: '(BIM Free)',
    rating: 4.6,
    reviews: 'BIM Easy',
    website: 'https://www.dalux.com/',
    pricingUrl: 'https://www.dalux.com/',
    description: "Famoso per il suo <strong>BIM Viewer gratuito</strong> tra i migliori sul mercato. Dalux unisce modelli 3D e realtà aumentata direttamente in cantiere su smartphone, facilitando la comprensione del progetto.",
    pros: ["Visualizzatore BIM gratuito top", "Realtà Aumentata (AR)", "Facile da usare"],
    cons: ["Funzioni gestionali a pagamento", "Supporto base in inglese"],
    features: {
      giornale_lavori: true, pos_psc: false, computo_metrico: false, free_trial: true, special_free: true,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: true, foto_360: true, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: false, notifiche_push: true, utenti_illimitati: true, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: false, supporto_chat: true, supporto_italiano: false
    }
  },
  {
    id: 'bluebeam',
    name: 'Bluebeam',
    price: '€220',
    paymentType: '/anno',
    rating: 4.8,
    reviews: 'Tecnico',
    website: 'https://www.bluebeam.com/',
    pricingUrl: 'https://www.bluebeam.com/pricing/',
    description: "Lo standard industriale per la gestione dei <strong>PDF tecnici</strong>. Bluebeam Revu permette revisioni collaborative in tempo reale (Studio), misurazioni precise e markup avanzati su tavole di progetto.",
    pros: ["Il re dei PDF per edilizia", "Misurazioni precisissime", "Collaborazione real-time"],
    cons: ["Solo desktop (iPad limitato)", "Non è un gestionale completo"],
    features: {
      giornale_lavori: false, pos_psc: false, computo_metrico: true, free_trial: true, special_free: false,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: true, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: false, foto_360: false, gps_staff: false, app_ios: true, app_android: false,
      chat_interna: true, notifiche_push: false, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: true
    }
  },
  {
    id: 'openspace',
    name: 'OpenSpace',
    price: 'Richiesta',
    paymentType: '(Preventivo)',
    rating: 4.7,
    reviews: 'Visuale',
    website: 'https://www.openspace.ai/',
    pricingUrl: 'https://www.openspace.ai/',
    description: "Documenta il cantiere camminando. OpenSpace usa <strong>telecamere 360°</strong> sul caschetto per mappare automaticamente il percorso sulla planimetria (come Street View), creando un archivio visivo indiscutibile.",
    pros: ["Velocità di documentazione assurda", "AI Vision Comparison", "Facilissimo"],
    cons: ["Richiede hardware 360", "Costoso per piccoli lavori"],
    features: {
      giornale_lavori: true, pos_psc: false, computo_metrico: false, free_trial: true, special_free: false,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: true, foto_360: true, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: false, notifiche_push: true, utenti_illimitati: true, inviti_esterni: true,
      interfaccia_italiano: false, supporto_telefono: false, supporto_chat: true, supporto_italiano: false
    }
  },
  {
    id: 'smartsheet',
    name: 'Smartsheet',
    price: '€7',
    paymentType: '/mese',
    rating: 4.5,
    reviews: 'Excel++' ,
    website: 'https://it.smartsheet.com/',
    pricingUrl: 'https://it.smartsheet.com/pricing',
    description: "Se ami Excel ma vuoi di più, <strong>Smartsheet</strong> è la risposta. Offre la flessibilità dei fogli di calcolo ma con Gantt, automazioni e viste dedicate alla gestione progetti edili.",
    pros: ["Familiare per chi usa Excel", "Automazioni potenti", "Template edili pronti"],
    cons: ["Curva di apprendimento", "Costi scalano con gli utenti"],
    features: {
      giornale_lavori: false, pos_psc: false, computo_metrico: false, free_trial: true, special_free: false,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: false, foto_360: false, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: true, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: true
    }
  },
  {
    id: 'oracle_primavera',
    name: 'Oracle Primavera',
    price: 'Richiesta',
    paymentType: '(Enterprise)',
    rating: 4.6,
    reviews: 'Standard',
    website: 'https://www.oracle.com/it/construction-engineering/primavera-cloud/',
    pricingUrl: 'https://www.oracle.com/it/construction-engineering/primavera-cloud/',
    description: "Il gold standard per la <strong>pianificazione di grandi opere</strong>. Primavera P6 e Cloud gestiscono cronoprogrammi complessi, risorse e rischi con una profondità analitica ineguagliabile.",
    pros: ["Potenza di calcolo CPM", "Standard per grandi appalti", "Gestione rischi avanzata"],
    cons: ["Interfaccia complessa", "Costo elevato", "Eccessivo per piccoli lavori"],
    features: {
      giornale_lavori: true, pos_psc: false, computo_metrico: false, free_trial: true, special_free: false,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: false, bim_viewer: true, foto_360: false, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: true, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: true
    }
  },
  {
    id: 'asana',
    name: 'Asana',
    price: '€10.99',
    paymentType: '/mese',
    rating: 4.5,
    reviews: 'Intuitivo',
    website: 'https://asana.com/it',
    pricingUrl: 'https://asana.com/it/pricing',
    description: "Gestisci i compiti del team con un design pulito e intuitivo. <strong>Asana</strong> è perfetto per coordinare l'ufficio tecnico e le scadenze, riducendo le email e chiarendo 'chi deve fare cosa e entro quando'.",
    pros: ["User experience fantastica", "Ottimo per l'ufficio", "Piano free utile"],
    cons: ["Nessuna funzione tecnica edile", "Manca Gantt nel piano base"],
    features: {
      giornale_lavori: false, pos_psc: false, computo_metrico: false, free_trial: true, special_free: true,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: false, foto_360: false, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: true, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: false, supporto_chat: true, supporto_italiano: false
    }
  },
  {
    id: 'revizto',
    name: 'Revizto',
    price: 'Richiesta',
    paymentType: '(Preventivo)',
    rating: 4.8,
    reviews: 'Collaborativo',
    website: 'https://revizto.com/it/',
    pricingUrl: 'https://revizto.com/it/',
    description: "Piattaforma di collaborazione integrata per BIM. <strong>Revizto</strong> trasforma modelli complessi (Revit, Navisworks) in ambienti 3D navigabili come un videogioco, centralizzando la gestione delle interferenze (clash detection).",
    pros: ["Clash detection intuitiva", "Navigazione modello fluida", "Issue tracking"],
    cons: ["Non è un gestionale amministrativo", "Prezzo"],
    features: {
      giornale_lavori: false, pos_psc: false, computo_metrico: false, free_trial: true, special_free: false,
      conformita_ita: false, fatturazione_elettronica: false, firma_digitale: false, integrazione_sdi: false, export_contabilita: false,
      funziona_offline: true, bim_viewer: true, foto_360: false, gps_staff: false, app_ios: true, app_android: true,
      chat_interna: true, notifiche_push: true, utenti_illimitati: false, inviti_esterni: true,
      interfaccia_italiano: true, supporto_telefono: true, supporto_chat: true, supporto_italiano: false
    }
  }
];