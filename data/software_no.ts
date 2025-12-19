import { SoftwareNO } from './types';

export const softwareNO: SoftwareNO[] = [
  {
    id: 'smartdok',
    name: 'SmartDok',
    price: 'På forespørsel',
    paymentType: '(Abo)',
    rating: 4.8,
    reviews: 'Markedsleder',
    website: 'https://smartdok.no/',
    pricingUrl: 'https://smartdok.no/priser',
    description: "Norges mest brukte system for byggebransjen. Alt i ett: timeføring, HMS, massetransport og verktøyoversikt. Bygget for norske forhold.",
    pros: ["Komplett system", "Kjempestor brukerbase", "Meget robust"],
    cons: ["Kan virke overveldende", "Ikke ren regnskap"],
    features: {
      hms_system: true, byggekort_oversikt: true, timeforing: true, sja_analyse: true, gratis_proveperiode: true,
      byggekort_integrasjon: true, ehf_faktura: false, ks_system: true, fdv_dokumentasjon: true, vipps_bankid: true,
      avvikshandtering: true, masserapport: true, maskintimer: true, vernerunde: true, tegninger_mobil: true,
      kalkulasjon: false, prosjektstyring: true, bildedokumentasjon: true, integrasjon_tripletex: true, uavhengig_kontroll: true,
      boligmappa: true, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'holte',
    name: 'Holte',
    price: 'På forespørsel',
    paymentType: '(Lisens)',
    rating: 4.6,
    reviews: 'Proff',
    website: 'https://holte.no/',
    pricingUrl: 'https://holte.no/',
    description: "Solid aktør med programvare for alt fra kalkulasjon (SmartKalk) til byggesøknad og KS. Sterkt faglig fokus.",
    pros: ["Faglig tyngst", "Beste kalkulasjon", "Byggesøknad hjelp"],
    cons: ["Delt opp i mange moduler", "Høy pris"],
    features: {
      hms_system: true, byggekort_oversikt: true, timeforing: true, sja_analyse: true, gratis_proveperiode: false,
      byggekort_integrasjon: true, ehf_faktura: false, ks_system: true, fdv_dokumentasjon: true, vipps_bankid: true,
      avvikshandtering: true, masserapport: false, maskintimer: false, vernerunde: true, tegninger_mobil: true,
      kalkulasjon: true, prosjektstyring: true, bildedokumentasjon: true, integrasjon_tripletex: true, uavhengig_kontroll: true,
      boligmappa: true, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'tripletex',
    name: 'Tripletex',
    price: 'Fra 0 kr',
    paymentType: '/mnd',
    rating: 4.9,
    reviews: 'Økonomi',
    website: 'https://www.tripletex.no/',
    pricingUrl: 'https://www.tripletex.no/priser/',
    description: "Moderne skybasert økonomisystem. Med sin prosjektmodul og 'Tripletex VVS/Elektro' er det blitt en favoritt for håndverkere.",
    pros: ["Beste regnskapssystem", "Fantastisk app", "Mange integrasjoner"],
    cons: ["Ikke et rent HMS-system", "Krever tillegg for VVS/El"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: true, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: true, ks_system: false, fdv_dokumentasjon: false, vipps_bankid: true,
      avvikshandtering: false, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: false,
      kalkulasjon: true, prosjektstyring: true, bildedokumentasjon: true, integrasjon_tripletex: true, uavhengig_kontroll: false,
      boligmappa: true, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'fonn',
    name: 'Fonn',
    price: 'På forespørsel',
    paymentType: '(Abo)',
    rating: 4.7,
    reviews: 'Samhandling',
    website: 'https://fonn.no/',
    pricingUrl: 'https://fonn.no/',
    description: "Norskutviklet prosjektstyringsverktøy. Samler alle deltakere, tegninger og dokumenter i én app. Veldig brukervennlig.",
    pros: ["Enkelt for alle", "Gode tegninger", "Færre byggefeil"],
    cons: ["Mangler dyp økonomi", "Fokus på prosjekt, ikke drift"],
    features: {
      hms_system: true, byggekort_oversikt: true, timeforing: true, sja_analyse: true, gratis_proveperiode: true,
      byggekort_integrasjon: true, ehf_faktura: false, ks_system: true, fdv_dokumentasjon: true, vipps_bankid: true,
      avvikshandtering: true, masserapport: false, maskintimer: false, vernerunde: true, tegninger_mobil: true,
      kalkulasjon: false, prosjektstyring: true, bildedokumentasjon: true, integrasjon_tripletex: true, uavhengig_kontroll: true,
      boligmappa: true, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'svenn',
    name: 'Svenn',
    price: 'Fra 299 kr',
    paymentType: '/mnd',
    rating: 4.6,
    reviews: 'Enkelhet',
    website: 'https://svenn.com/no',
    pricingUrl: 'https://svenn.com/no/priser',
    description: "Det enkle alternativet for små bedrifter. Timeføring, HMS og KS uten unødvendig støy. Kom i gang på minutter.",
    pros: ["Superenkelt", "God pris", "Alt det essensielle"],
    cons: ["For enkelt for store", "Mangler avanserte funksjoner"],
    features: {
      hms_system: true, byggekort_oversikt: false, timeforing: true, sja_analyse: true, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: false, ks_system: true, fdv_dokumentasjon: true, vipps_bankid: false,
      avvikshandtering: true, masserapport: false, maskintimer: false, vernerunde: true, tegninger_mobil: true,
      kalkulasjon: true, prosjektstyring: true, bildedokumentasjon: true, integrasjon_tripletex: true, uavhengig_kontroll: true,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'proresult',
    name: 'Proresult',
    price: 'På forespørsel',
    paymentType: '(Abo)',
    rating: 4.5,
    reviews: 'Drift',
    website: 'https://proresult.no/',
    pricingUrl: 'https://proresult.no/',
    description: "Spesialist på mannskapslister og utstyrskontroll. Veldig god på å holde styr på hvor verktøy og maskiner befinner seg.",
    pros: ["Maskin/Verktøy kontroll", "Mannskapslister", "Robust"],
    cons: ["Designet er funksjonelt", "Litt traust"],
    features: {
      hms_system: true, byggekort_oversikt: true, timeforing: true, sja_analyse: true, gratis_proveperiode: true,
      byggekort_integrasjon: true, ehf_faktura: false, ks_system: true, fdv_dokumentasjon: false, vipps_bankid: true,
      avvikshandtering: true, masserapport: true, maskintimer: true, vernerunde: true, tegninger_mobil: true,
      kalkulasjon: false, prosjektstyring: true, bildedokumentasjon: true, integrasjon_tripletex: true, uavhengig_kontroll: false,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'dalux_no',
    name: 'Dalux',
    price: 'Freemium',
    paymentType: '(Abo)',
    rating: 4.7,
    reviews: 'BIM',
    website: 'https://www.dalux.com/no',
    pricingUrl: 'https://www.dalux.com/no',
    description: "Markedsleder på BIM-visning i Norge. Brukes på de fleste store prosjekter (Sykehus, Vei) for å vise modellen ute i felt.",
    pros: ["Beste BIM-visning", "AR funksjon", "Gratis start"],
    cons: ["Ikke for timeføring", "Kostbart for full pakke"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: false, sja_analyse: true, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: false, ks_system: true, fdv_dokumentasjon: false, vipps_bankid: false,
      avvikshandtering: true, masserapport: false, maskintimer: false, vernerunde: true, tegninger_mobil: true,
      kalkulasjon: false, prosjektstyring: false, bildedokumentasjon: true, integrasjon_tripletex: false, uavhengig_kontroll: true,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'streambim',
    name: 'StreamBIM',
    price: 'På forespørsel',
    paymentType: '(Abo)',
    rating: 4.6,
    reviews: 'Streaming',
    website: 'https://streambim.com/no/',
    pricingUrl: 'https://streambim.com/no/',
    description: "Norsk BIM-pioner. Streamer store 3D-modeller rett til iPad uten nedlasting. Veldig populært på store byggeplasser.",
    pros: ["Lynrask på store modeller", "Papirløs byggeplass", "Enkelt samspill"],
    cons: ["Kun for BIM-prosjekter", "Pris"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: false, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: false, ks_system: true, fdv_dokumentasjon: true, vipps_bankid: false,
      avvikshandtering: true, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: true,
      kalkulasjon: false, prosjektstyring: true, bildedokumentasjon: true, integrasjon_tripletex: false, uavhengig_kontroll: true,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'interaxo',
    name: 'Interaxo',
    price: 'På forespørsel',
    paymentType: '(Lisens)',
    rating: 4.4,
    reviews: 'Samhandling',
    website: 'https://tribia.com/no/produkter/interaxo',
    pricingUrl: 'https://tribia.com/no/produkter/interaxo',
    description: "Klassikeren for samhandling i byggeprosjekter. Strukturert lagring av filer, tegninger og prosesser.",
    pros: ["Veldig strukturert", "Bransjestandard store bygg", "Trygt"],
    cons: ["Gammeldags grensesnitt", "Tungvint for småtteri"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: false, sja_analyse: false, gratis_proveperiode: false,
      byggekort_integrasjon: false, ehf_faktura: false, ks_system: true, fdv_dokumentasjon: true, vipps_bankid: true,
      avvikshandtering: true, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: true,
      kalkulasjon: false, prosjektstyring: true, bildedokumentasjon: false, integrasjon_tripletex: false, uavhengig_kontroll: false,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'poweroffice_go',
    name: 'PowerOffice Go',
    price: 'Fra 250 kr',
    paymentType: '/mnd',
    rating: 4.8,
    reviews: 'Regnskap',
    website: 'https://poweroffice.no/',
    pricingUrl: 'https://poweroffice.no/priser',
    description: "Utfordreren til Tripletex. Et fantastisk brukervennlig regnskapssystem som mange håndverkere elsker for sin enkelhet.",
    pros: ["Nydelig design", "Veldig oversiktlig", "Gode rapporter"],
    cons: ["Ikke HMS-system", "Mindre utvalg moduler enn Tripletex"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: true, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: true, ks_system: false, fdv_dokumentasjon: false, vipps_bankid: true,
      avvikshandtering: false, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: false,
      kalkulasjon: false, prosjektstyring: true, bildedokumentasjon: false, integrasjon_tripletex: false, uavhengig_kontroll: false,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'cordel',
    name: 'Cordel',
    price: 'På forespørsel',
    paymentType: '(Lisens)',
    rating: 4.5,
    reviews: 'Faghandel',
    website: 'https://cordel.no/',
    pricingUrl: 'https://cordel.no/',
    description: "Spesialsystem for håndverkere, spesielt VVS og Elektro. Integrert med grossister for lynrask bestilling og kalkulasjon.",
    pros: ["Grossist-integrasjon", "Kalkulasjon på varer", "Komplett fag"],
    cons: ["Lokalt installert (oftest)", "Høyere terskel"],
    features: {
      hms_system: true, byggekort_oversikt: true, timeforing: true, sja_analyse: true, gratis_proveperiode: false,
      byggekort_integrasjon: true, ehf_faktura: true, ks_system: true, fdv_dokumentasjon: true, vipps_bankid: false,
      avvikshandtering: true, masserapport: false, maskintimer: false, vernerunde: true, tegninger_mobil: true,
      kalkulasjon: true, prosjektstyring: true, bildedokumentasjon: true, integrasjon_tripletex: true, uavhengig_kontroll: true,
      boligmappa: true, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'visma_eaccounting',
    name: 'Visma eAccounting',
    price: 'Fra 109 kr',
    paymentType: '/mnd',
    rating: 4.4,
    reviews: 'Start',
    website: 'https://www.visma.no/eaccounting/',
    pricingUrl: 'https://www.visma.no/eaccounting/priser/',
    description: "Inngangsbilletten til Visma-universet. Enkelt og billig regnskap for de minste enkeltpersonforetakene.",
    pros: ["Billig", "Trygt merkenavn", "Enkelt å starte"],
    cons: ["Begrenset funksjonalitet", "Mange tilleggskjøp"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: true, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: true, ks_system: false, fdv_dokumentasjon: false, vipps_bankid: true,
      avvikshandtering: false, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: false,
      kalkulasjon: false, prosjektstyring: false, bildedokumentasjon: false, integrasjon_tripletex: false, uavhengig_kontroll: false,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'joboffice',
    name: 'JobOffice',
    price: 'På forespørsel',
    paymentType: '(Lisens)',
    rating: 4.3,
    reviews: 'Rørlegger',
    website: 'https://joboffice.no/',
    pricingUrl: 'https://joboffice.no/',
    description: "Det klassiske verktøyet for rørleggere. Enkelt å lage tilbud basert på grossistpriser og NRF-numre.",
    pros: ["Perfekt for rør", "Grossist-lister", "Enkelt"],
    cons: ["Gammelt grensesnitt", "Kun Windows"],
    features: {
      hms_system: true, byggekort_oversikt: false, timeforing: true, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: true, ks_system: true, fdv_dokumentasjon: true, vipps_bankid: false,
      avvikshandtering: false, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: false,
      kalkulasjon: true, prosjektstyring: true, bildedokumentasjon: false, integrasjon_tripletex: false, uavhengig_kontroll: false,
      boligmappa: true, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'kalk',
    name: 'Kalk',
    price: 'På forespørsel',
    paymentType: '(Abo)',
    rating: 4.4,
    reviews: 'Kalkulasjon',
    website: 'https://kalk.no/',
    pricingUrl: 'https://kalk.no/',
    description: "Nettbasert kalkulasjon. Hjelper deg å prise jobbene riktig ved å bruke erfaringsdata og bransjenormer.",
    pros: ["Skybasert", "Gode data", "Enkelt"],
    cons: ["Kun kalkulasjon", "Må ha annet system ved siden av"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: false, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: false, ks_system: false, fdv_dokumentasjon: false, vipps_bankid: false,
      avvikshandtering: false, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: false,
      kalkulasjon: true, prosjektstyring: false, bildedokumentasjon: false, integrasjon_tripletex: false, uavhengig_kontroll: false,
      boligmappa: false, norsk_support: true, app_ios: false, app_android: false
    }
  },
  {
    id: 'checkd',
    name: 'Checkd',
    price: 'På forespørsel',
    paymentType: '(Abo)',
    rating: 4.5,
    reviews: 'Befaring',
    website: 'https://www.checkd.it/',
    pricingUrl: 'https://www.checkd.it/',
    description: "Digitaliserer befaringer og mangellister. Veldig visuelt og enkelt verktøy for å markere feil på tegninger.",
    pros: ["Veldig visuelt", "Enkelt å bruke", "God oversikt"],
    cons: ["Ikke et fullt KS system", "Mest for befaring"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: false, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: false, ks_system: true, fdv_dokumentasjon: false, vipps_bankid: false,
      avvikshandtering: true, masserapport: false, maskintimer: false, vernerunde: true, tegninger_mobil: true,
      kalkulasjon: false, prosjektstyring: false, bildedokumentasjon: true, integrasjon_tripletex: false, uavhengig_kontroll: true,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'rendra_o',
    name: 'Rendra O',
    price: 'På forespørsel',
    paymentType: '(Abo)',
    rating: 4.6,
    reviews: 'BIM Felt',
    website: 'https://www.rendra.io/',
    pricingUrl: 'https://www.rendra.io/',
    description: "Streamer BIM til byggeplassen. Nå eid av JDM Technology. Fokus på å gjøre modellen tilgjengelig for arbeiderne.",
    pros: ["BIM i lomma", "Enkelt grensesnitt", "God viewer"],
    cons: ["Liten aktør nå", "Færre oppdateringer"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: false, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: false, ks_system: false, fdv_dokumentasjon: false, vipps_bankid: false,
      avvikshandtering: true, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: true,
      kalkulasjon: false, prosjektstyring: false, bildedokumentasjon: true, integrasjon_tripletex: false, uavhengig_kontroll: false,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'catenda',
    name: 'Catenda',
    price: 'På forespørsel',
    paymentType: '(Abo)',
    rating: 4.7,
    reviews: 'Open BIM',
    website: 'https://catenda.com/no/',
    pricingUrl: 'https://catenda.com/no/',
    description: "Tidligere Bimsync. En åpen CDE-plattform bygget på åpne standarder (IFC, BCF). Favoritten for de som elsker OpenBIM.",
    pros: ["OpenBIM sjefen", "BCF-server", "Norsk teknologi"],
    cons: ["Krever BIM-kompetanse", "Ikke for småprosjekter"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: false, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: false, ks_system: false, fdv_dokumentasjon: true, vipps_bankid: false,
      avvikshandtering: true, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: true,
      kalkulasjon: false, prosjektstyring: true, bildedokumentasjon: true, integrasjon_tripletex: false, uavhengig_kontroll: false,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'moment',
    name: 'Moment',
    price: 'Fra 99 kr',
    paymentType: '/mnd',
    rating: 4.5,
    reviews: 'Arkitekt',
    website: 'https://moment.team/',
    pricingUrl: 'https://moment.team/priser/',
    description: "Prosjektstyring for arkitekter og ingeniører. Full kontroll på timer, ressurser og fakturering.",
    pros: ["Skreddersydd for rådgivere", "God ressursplanlegging", "Oversiktlig"],
    cons: ["Ikke for utførende", "Ingen HMS/KS"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: true, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: true, ks_system: false, fdv_dokumentasjon: false, vipps_bankid: true,
      avvikshandtering: false, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: false,
      kalkulasjon: false, prosjektstyring: true, bildedokumentasjon: false, integrasjon_tripletex: true, uavhengig_kontroll: false,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: '24sevenoffice_no',
    name: '24SevenOffice',
    price: 'På forespørsel',
    paymentType: '(Abo)',
    rating: 4.6,
    reviews: 'ERP',
    website: 'https://24sevenoffice.com/no/',
    pricingUrl: 'https://24sevenoffice.com/no/',
    description: "Kraftig ERP i skyen. Brukes av større entreprenører som trenger dyp økonomistyring integrert med prosjekt.",
    pros: ["Komplett ERP", "AI-bokføring", "Skalerbart"],
    cons: ["Dyrere", "Mer komplekst"],
    features: {
      hms_system: false, byggekort_oversikt: false, timeforing: true, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: false, ehf_faktura: true, ks_system: false, fdv_dokumentasjon: false, vipps_bankid: true,
      avvikshandtering: false, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: false,
      kalkulasjon: false, prosjektstyring: true, bildedokumentasjon: false, integrasjon_tripletex: false, uavhengig_kontroll: false,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'tidsbanken',
    name: 'Tidsbanken',
    price: 'På forespørsel',
    paymentType: '(Abo)',
    rating: 4.4,
    reviews: 'Tid',
    website: 'https://tidsbanken.no/',
    pricingUrl: 'https://tidsbanken.no/',
    description: "Spesialist på timeregistrering. Hjelper bedrifter å fange timer riktig for lønn og faktura.",
    pros: ["Fokus på tid", "Enkelt stempling", "Gode rapporter"],
    cons: ["Kun tid", "Gammelt design"],
    features: {
      hms_system: false, byggekort_oversikt: true, timeforing: true, sja_analyse: false, gratis_proveperiode: true,
      byggekort_integrasjon: true, ehf_faktura: false, ks_system: false, fdv_dokumentasjon: false, vipps_bankid: true,
      avvikshandtering: false, masserapport: false, maskintimer: false, vernerunde: false, tegninger_mobil: false,
      kalkulasjon: false, prosjektstyring: false, bildedokumentasjon: false, integrasjon_tripletex: false, uavhengig_kontroll: false,
      boligmappa: false, norsk_support: true, app_ios: true, app_android: true
    }
  }
];
