export interface SoftwareBase {
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
}

export interface SoftwareIT extends SoftwareBase {
  features: {
    giornale_lavori: boolean;
    pos_psc: boolean;
    computo_metrico: boolean;
    free_trial: boolean;
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
    [key: string]: boolean; // Allow dynamic access
  };
}

export interface SoftwareCH extends SoftwareBase {
  features: {
    sia_konformitaet: boolean;     // SIA-Konformität
    npk_editor: boolean;           // NPK-Editor (CRB)
    regie_rapporte: boolean;       // Regie-Rapporte
    baujournal: boolean;           // Baujournal
    kostenlose_testphase: boolean; // Kostenlose Testphase
    // Additional
    sia_451_schnittstelle: boolean;
    crb_zertifiziert: boolean;
    qr_rechnung: boolean;
    ausmass_sia_118: boolean;
    ifa18_unterstuetzung: boolean;
    kbob_vertraege: boolean;
    waehrung_chf: boolean;
    mwst_abrechnung: boolean;
    lohnmeldeverfahren_elm: boolean;
    maengelmanagement: boolean;
    digitale_visierung: boolean;
    bim_viewer: boolean;
    planverwaltung: boolean;
    subunternehmer_portal: boolean;
    mobiles_rapportieren: boolean;
    offline_funktion: boolean;
    serverstandort_schweiz: boolean;
    mehrsprachigkeit: boolean;
    zeiterfassung_gps: boolean;
    app_ios: boolean;
    app_android: boolean;
    [key: string]: boolean;
  };
}

export interface SoftwareDE extends SoftwareBase {
  features: {
    vob_konformitaet: boolean;     // VOB-Konformität
    bautagebuch: boolean;          // Bautagebuch
    gaeb_schnittstelle: boolean;   // GAEB-Schnittstelle
    maengelmanagement: boolean;    // Mängelmanagement
    kostenlose_testphase: boolean; // Kostenlose Testphase
    // Additional
    reb_23_003: boolean;
    xrechnung_zugferd: boolean;
    gobd_konform: boolean;
    baulohn_abrechnung: boolean;
    maengelanzeige_vob: boolean;
    freistellungsbescheinigung: boolean;
    sigeko_funktionen: boolean;
    digitale_bauakte: boolean;
    bauzeitenplan: boolean;
    nachtragsmanagement: boolean;
    bim_integration: boolean;
    digitale_abnahme: boolean;
    datev_schnittstelle: boolean;
    dsgvo_konformitaet: boolean;
    fotodokumentation: boolean;
    sprachsteuerung: boolean;
    subunternehmer_verwaltung: boolean;
    app_ios: boolean;
    app_android: boolean;
    [key: string]: boolean;
  };
}

export interface SoftwareSE extends SoftwareBase {
  features: {
    id06_integration: boolean;      // ID06-integration
    ata_hantering: boolean;         // ÄTA-hantering
    personalliggare: boolean;       // Elektronisk Personalliggare
    dagbok: boolean;                // Dagbok
    gratis_provperiod: boolean;     // Gratis provperiod
    // Additional
    bankid_inloggning: boolean;
    rot_avdrag: boolean;
    e_faktura: boolean;
    egenkontroll: boolean;
    kma_parm: boolean;
    tidrapportering: boolean;
    checklistor: boolean;
    avvikelserapport: boolean;
    projektuppfoljning: boolean;
    resursplanering: boolean;
    offerthantering: boolean;
    underentreprenorsportal: boolean;
    klimatdeklaration: boolean;
    integration_fortnox: boolean;
    mobilapp: boolean;
    gps_positionering: boolean;
    bildhantering: boolean;
    app_ios: boolean;
    app_android: boolean;
    [key: string]: boolean;
  };
}

export interface SoftwareNO extends SoftwareBase {
  features: {
    hms_system: boolean;            // HMS-system
    byggekort_oversikt: boolean;    // Byggekort / Oversiktsliste
    timeforing: boolean;            // Timeføring
    sja_analyse: boolean;           // SJA (Analisi Rischi)
    gratis_proveperiode: boolean;   // Gratis prøveperiode
    // Additional
    byggekort_integrasjon: boolean; // Similar to oversight but explicit integration
    ehf_faktura: boolean;
    ks_system: boolean;
    fdv_dokumentasjon: boolean;
    vipps_bankid: boolean;
    avvikshandtering: boolean;
    masserapport: boolean;
    maskintimer: boolean;
    vernerunde: boolean;
    tegninger_mobil: boolean;
    kalkulasjon: boolean;
    prosjektstyring: boolean;
    bildedokumentasjon: boolean;
    integrasjon_tripletex: boolean;
    uavhengig_kontroll: boolean;
    boligmappa: boolean;
    norsk_support: boolean;
    app_ios: boolean;
    app_android: boolean;
    [key: string]: boolean;
  };
}
