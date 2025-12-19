import { SoftwareSE } from './types';

export const softwareSE: SoftwareSE[] = [
  {
    id: 'bygglet',
    name: 'Bygglet',
    price: 'Från 199 kr',
    paymentType: '/mån',
    rating: 4.7,
    reviews: 'Populärast',
    website: 'https://bygglet.com/',
    pricingUrl: 'https://bygglet.com/priser/',
    description: "Sveriges mest populära projektverktyg för små och medelstora byggföretag. Hanterar allt från offert till faktura, inklusive tidrapportering och personalliggare.",
    pros: ["Väldigt lättanvänt", "Allt-i-ett för hantverkare", "Bra support"],
    cons: ["Saknar avancerad ekonomistyrning", "Passar inte stora entreprenader"],
    features: {
      id06_integration: true, ata_hantering: true, personalliggare: true, dagbok: true, gratis_provperiod: true,
      bankid_inloggning: true, rot_avdrag: true, e_faktura: true, egenkontroll: true, kma_parm: true,
      tidrapportering: true, checklistor: true, avvikelserapport: true, projektuppfoljning: true, resursplanering: true,
      offerthantering: true, underentreprenorsportal: false, klimatdeklaration: false, integration_fortnox: true, mobilapp: true,
      gps_positionering: true, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'next_project',
    name: 'Next Project',
    price: 'På begäran',
    paymentType: '(Licens)',
    rating: 4.6,
    reviews: 'Proffs',
    website: 'https://nextech.se/',
    pricingUrl: 'https://nextech.se/',
    description: "Ett kraftfullt affärssystem för bygg och entreprenad. Fokuserar på projektstyrning, kalkylering och mobil arbetsorderhantering.",
    pros: ["Starkt på kalkyl & ÄTA", "Bra för medelstora bolag", "Integrationer"],
    cons: ["Kräver utbildning", "Högre prisbild"],
    features: {
      id06_integration: true, ata_hantering: true, personalliggare: true, dagbok: true, gratis_provperiod: false,
      bankid_inloggning: true, rot_avdrag: true, e_faktura: true, egenkontroll: true, kma_parm: true,
      tidrapportering: true, checklistor: true, avvikelserapport: true, projektuppfoljning: true, resursplanering: true,
      offerthantering: true, underentreprenorsportal: true, klimatdeklaration: true, integration_fortnox: true, mobilapp: true,
      gps_positionering: false, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'infobric',
    name: 'Infobric',
    price: 'På begäran',
    paymentType: '(System)',
    rating: 4.8,
    reviews: 'Säkerhet',
    website: 'https://infobric.com/se/',
    pricingUrl: 'https://infobric.com/se/',
    description: "Marknadsledande inom <strong>ID06</strong> och byggplatssäkerhet. Hanterar inpassering, personalliggare och maskinstyrning.",
    pros: ["ID06-standard", "Hårdvara & Mjukvara", "Säkert"],
    cons: ["Fokus säkerhet, ej projekt", "Hårdvarukostnad"],
    features: {
      id06_integration: true, ata_hantering: false, personalliggare: true, dagbok: false, gratis_provperiod: false,
      bankid_inloggning: true, rot_avdrag: false, e_faktura: false, egenkontroll: false, kma_parm: false,
      tidrapportering: true, checklistor: false, avvikelserapport: false, projektuppfoljning: false, resursplanering: true,
      offerthantering: false, underentreprenorsportal: true, klimatdeklaration: true, integration_fortnox: false, mobilapp: true,
      gps_positionering: false, bildhantering: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'struqtur',
    name: 'Struqtur',
    price: 'Från 149 kr',
    paymentType: '/mån',
    rating: 4.5,
    reviews: 'Enkelt',
    website: 'https://struqtur.se/',
    pricingUrl: 'https://struqtur.se/priser/',
    description: "Ett modernt och enkelt projekteringsverktyg för hantverkare. Skapa offerter, tidrapporter och fakturor snabbt i mobilen.",
    pros: ["Lågt pris", "Snyggt gränssnitt", "Kom igång direkt"],
    cons: ["Mindre funktionalitet", "Basal kalkylering"],
    features: {
      id06_integration: true, ata_hantering: true, personalliggare: true, dagbok: true, gratis_provperiod: true,
      bankid_inloggning: true, rot_avdrag: true, e_faktura: true, egenkontroll: true, kma_parm: true,
      tidrapportering: true, checklistor: true, avvikelserapport: true, projektuppfoljning: true, resursplanering: true,
      offerthantering: true, underentreprenorsportal: false, klimatdeklaration: false, integration_fortnox: true, mobilapp: true,
      gps_positionering: true, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'fieldly',
    name: 'Fieldly',
    price: 'På begäran',
    paymentType: '(Abo)',
    rating: 4.6,
    reviews: 'Fält',
    website: 'https://fieldly.com/se',
    pricingUrl: 'https://fieldly.com/se/priser',
    description: "Digitaliserar fältarbetet för byggbolag. Fokus på att koppla kontoret med fältet via en smidig app för arbetsorder och resor.",
    pros: ["Bästa appen", "Realtidsdata", "Enkelt för arbetare"],
    cons: ["Kräver separat ekonomisystem", "Projektledning light"],
    features: {
      id06_integration: true, ata_hantering: true, personalliggare: true, dagbok: true, gratis_provperiod: true,
      bankid_inloggning: false, rot_avdrag: false, e_faktura: false, egenkontroll: true, kma_parm: false,
      tidrapportering: true, checklistor: true, avvikelserapport: true, projektuppfoljning: true, resursplanering: true,
      offerthantering: false, underentreprenorsportal: false, klimatdeklaration: false, integration_fortnox: true, mobilapp: true,
      gps_positionering: true, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'byggsamverkan',
    name: 'Byggsamverkan',
    price: 'På begäran',
    paymentType: '(Licens)',
    rating: 4.4,
    reviews: 'Traditionell',
    website: 'https://byggsamverkan.se/',
    pricingUrl: 'https://byggsamverkan.se/',
    description: "Etablerad aktör med lång erfarenhet. Erbjuder kompletta system för kalkyl, tid och projektstyrning för svenska byggare.",
    pros: ["Svensk standard", "Tryggt val", "Komplett svit"],
    cons: ["Äldre gränssnitt", "Mindre molnfokus"],
    features: {
      id06_integration: true, ata_hantering: true, personalliggare: true, dagbok: true, gratis_provperiod: false,
      bankid_inloggning: true, rot_avdrag: true, e_faktura: true, egenkontroll: true, kma_parm: true,
      tidrapportering: true, checklistor: true, avvikelserapport: true, projektuppfoljning: true, resursplanering: true,
      offerthantering: true, underentreprenorsportal: false, klimatdeklaration: false, integration_fortnox: true, mobilapp: false,
      gps_positionering: false, bildhantering: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'dalux_se',
    name: 'Dalux',
    price: 'Freemium',
    paymentType: '(Abo)',
    rating: 4.7,
    reviews: 'BIM',
    website: 'https://www.dalux.com/sv',
    pricingUrl: 'https://www.dalux.com/sv',
    description: "Den ledande BIM-visaren i Sverige. Används på nästan alla stora projekt för att visa 3D-modeller och ritningar i mobilen.",
    pros: ["Bästa BIM-visaren", "Gratis start", "AR-funktion"],
    cons: ["Dyrt för fullversion", "Ej för ekonomi"],
    features: {
      id06_integration: false, ata_hantering: false, personalliggare: false, dagbok: true, gratis_provperiod: true,
      bankid_inloggning: false, rot_avdrag: false, e_faktura: false, egenkontroll: true, kma_parm: false,
      tidrapportering: false, checklistor: true, avvikelserapport: true, projektuppfoljning: false, resursplanering: false,
      offerthantering: false, underentreprenorsportal: true, klimatdeklaration: false, integration_fortnox: false, mobilapp: true,
      gps_positionering: false, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'bluebeam_se',
    name: 'Bluebeam',
    price: 'Från 2400 kr',
    paymentType: '/år',
    rating: 4.8,
    reviews: 'PDF',
    website: 'https://www.bluebeam.se/',
    pricingUrl: 'https://www.bluebeam.se/',
    description: "Standardverktyget för digitala ritningar och mängdning. Oumbärligt för kalkylatorer och arbetsledare som jobbar med PDF:er.",
    pros: ["Mängdning i PDF", "Samarbete i Studio", "Branschstandard"],
    cons: ["Endast desktop (bra)", "Ingen projektstyrning"],
    features: {
      id06_integration: false, ata_hantering: false, personalliggare: false, dagbok: false, gratis_provperiod: true,
      bankid_inloggning: false, rot_avdrag: false, e_faktura: false, egenkontroll: true, kma_parm: false,
      tidrapportering: false, checklistor: true, avvikelserapport: true, projektuppfoljning: false, resursplanering: false,
      offerthantering: true, underentreprenorsportal: true, klimatdeklaration: false, integration_fortnox: false, mobilapp: true,
      gps_positionering: false, bildhantering: true, app_ios: true, app_android: false
    }
  },
  {
    id: 'hantverksdata',
    name: 'Hantverksdata',
    price: 'På begäran',
    paymentType: '(Licens)',
    rating: 4.5,
    reviews: 'Entré',
    website: 'https://www.hantverksdata.se/',
    pricingUrl: 'https://www.hantverksdata.se/',
    description: "Leverantör av systemet <strong>Entré</strong>. Ett komplett affärssystem specialiserat för el, VVS och bygg. Marknadsledande inom installation.",
    pros: ["Branschanpassat (El/VVS)", "Stabilt", "Mycket funktioner"],
    cons: ["Dyrt", "Äldre gränssnitt"],
    features: {
      id06_integration: true, ata_hantering: true, personalliggare: true, dagbok: true, gratis_provperiod: false,
      bankid_inloggning: true, rot_avdrag: true, e_faktura: true, egenkontroll: true, kma_parm: true,
      tidrapportering: true, checklistor: true, avvikelserapport: true, projektuppfoljning: true, resursplanering: true,
      offerthantering: true, underentreprenorsportal: false, klimatdeklaration: false, integration_fortnox: true, mobilapp: true,
      gps_positionering: true, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'congrid',
    name: 'Congrid',
    price: 'På begäran',
    paymentType: '(Abo)',
    rating: 4.6,
    reviews: 'Kvalitet',
    website: 'https://congrid.se/',
    pricingUrl: 'https://congrid.se/',
    description: "Kvalitets- och säkerhetsledning för byggarbetsplatser. Fokus på besiktningar, ronder och avvikelserapportering.",
    pros: ["Fokus kvalitet (KMA)", "Lättanvänt", "Bra rapporter"],
    cons: ["Inget ekonomisystem", "Nischat"],
    features: {
      id06_integration: false, ata_hantering: false, personalliggare: false, dagbok: true, gratis_provperiod: true,
      bankid_inloggning: false, rot_avdrag: false, e_faktura: false, egenkontroll: true, kma_parm: true,
      tidrapportering: false, checklistor: true, avvikelserapport: true, projektuppfoljning: true, resursplanering: false,
      offerthantering: false, underentreprenorsportal: true, klimatdeklaration: false, integration_fortnox: false, mobilapp: true,
      gps_positionering: false, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'buildsafe',
    name: 'BuildSafe',
    price: 'På begäran',
    paymentType: '(Abo)',
    rating: 4.7,
    reviews: 'Säkerhet',
    website: 'https://www.infobric.com/se/product/buildsafe/',
    pricingUrl: 'https://www.infobric.com/se/',
    description: "Nu en del av Infobric. Digitaliserar arbetsmiljöarbetet med skyddsronder och riskanalyser direkt i mobilen.",
    pros: ["Bäst på arbetsmiljö", "Enkelt att involvera UE", "Säkert"],
    cons: ["Ingår nu i Infobric", "Ej för tid/ekonomi"],
    features: {
      id06_integration: true, ata_hantering: false, personalliggare: true, dagbok: false, gratis_provperiod: true,
      bankid_inloggning: true, rot_avdrag: false, e_faktura: false, egenkontroll: true, kma_parm: true,
      tidrapportering: false, checklistor: true, avvikelserapport: true, projektuppfoljning: false, resursplanering: false,
      offerthantering: false, underentreprenorsportal: true, klimatdeklaration: false, integration_fortnox: false, mobilapp: true,
      gps_positionering: false, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: '24sevenoffice_se',
    name: '24SevenOffice',
    price: 'Från 399 kr',
    paymentType: '/mån',
    rating: 4.5,
    reviews: 'Moln ERP',
    website: 'https://24sevenoffice.com/se/',
    pricingUrl: 'https://24sevenoffice.com/se/priser',
    description: "Helt molnbaserat affärssystem med stark projektmodul. Passar större företag som vill ha allt integrerat i webbläsaren.",
    pros: ["Helt i molnet", "Kraftfullt ERP", "AI-bokföring"],
    cons: ["Komplext", "Inte renodlat bygg"],
    features: {
      id06_integration: false, ata_hantering: true, personalliggare: false, dagbok: false, gratis_provperiod: true,
      bankid_inloggning: true, rot_avdrag: true, e_faktura: true, egenkontroll: false, kma_parm: false,
      tidrapportering: true, checklistor: false, avvikelserapport: false, projektuppfoljning: true, resursplanering: true,
      offerthantering: true, underentreprenorsportal: false, klimatdeklaration: false, integration_fortnox: false, mobilapp: true,
      gps_positionering: false, bildhantering: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'fortnox',
    name: 'Fortnox',
    price: 'Från 69 kr',
    paymentType: '/mån',
    rating: 4.8,
    reviews: 'Ekonomi',
    website: 'https://www.fortnox.se/',
    pricingUrl: 'https://www.fortnox.se/priser',
    description: "Sveriges populäraste bokföringsprogram. Med 'Fortnox Bygg' och integrationer är det navet för tusentals små byggfirmor.",
    pros: ["Standard i Sverige", "Enorma integrationer", "Billigt startpris"],
    cons: ["Kräver tillägg för bygg", "Ingen 'riktig' projektstyrning"],
    features: {
      id06_integration: false, ata_hantering: false, personalliggare: false, dagbok: false, gratis_provperiod: true,
      bankid_inloggning: true, rot_avdrag: true, e_faktura: true, egenkontroll: false, kma_parm: false,
      tidrapportering: true, checklistor: false, avvikelserapport: false, projektuppfoljning: true, resursplanering: false,
      offerthantering: true, underentreprenorsportal: false, klimatdeklaration: false, integration_fortnox: true, mobilapp: true,
      gps_positionering: false, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'visma_spcs',
    name: 'Visma SPCS',
    price: 'Från 99 kr',
    paymentType: '/mån',
    rating: 4.4,
    reviews: 'Tryggt',
    website: 'https://vismaspcs.se/',
    pricingUrl: 'https://vismaspcs.se/produkter',
    description: "Tryggt val för bokföring och fakturering. Har specifika lösningar för hantverkare med tidrapportering och materialhantering.",
    pros: ["Mycket stabilt", "Bra support", "Kan allt inom ekonomi"],
    cons: ["Kan kännas gammalmodigt", "Många olika program"],
    features: {
      id06_integration: false, ata_hantering: true, personalliggare: false, dagbok: false, gratis_provperiod: true,
      bankid_inloggning: true, rot_avdrag: true, e_faktura: true, egenkontroll: false, kma_parm: false,
      tidrapportering: true, checklistor: false, avvikelserapport: false, projektuppfoljning: true, resursplanering: false,
      offerthantering: true, underentreprenorsportal: false, klimatdeklaration: false, integration_fortnox: false, mobilapp: true,
      gps_positionering: false, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'planradar_se',
    name: 'PlanRadar',
    price: 'Från 260 kr',
    paymentType: '/mån',
    rating: 4.8,
    reviews: 'Ärenden',
    website: 'https://www.planradar.com/se/',
    pricingUrl: 'https://www.planradar.com/se/priser/',
    description: "Digitaliserar ärendehantering och dokumentation i byggprojekt. Enkelt att märka ut fel direkt på ritningen i mobilen.",
    pros: ["Extremt enkelt", "Spara tid direkt", "Bra ritningsvisare"],
    cons: ["Ej för ekonomi", "Kostnad per användare"],
    features: {
      id06_integration: false, ata_hantering: false, personalliggare: false, dagbok: true, gratis_provperiod: true,
      bankid_inloggning: false, rot_avdrag: false, e_faktura: false, egenkontroll: true, kma_parm: false,
      tidrapportering: false, checklistor: true, avvikelserapport: true, projektuppfoljning: false, resursplanering: false,
      offerthantering: false, underentreprenorsportal: true, klimatdeklaration: false, integration_fortnox: false, mobilapp: true,
      gps_positionering: false, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'ibinder',
    name: 'iBinder',
    price: 'På begäran',
    paymentType: '(Projekt)',
    rating: 4.5,
    reviews: 'Dokument',
    website: 'https://ibinder.com/sv',
    pricingUrl: 'https://ibinder.com/sv',
    description: "Sveriges digitala byggpärm. Hanterar dokumentation, ritningar och drift- och skötselinstruktioner (DoU) i en enkel struktur.",
    pros: ["Branschstandard pärm", "Enkel struktur", "Bra för förvaltning"],
    cons: ["Begränsad funktionalitet", "Mest dokumenthantering"],
    features: {
      id06_integration: false, ata_hantering: false, personalliggare: false, dagbok: false, gratis_provperiod: true,
      bankid_inloggning: false, rot_avdrag: false, e_faktura: false, egenkontroll: false, kma_parm: true,
      tidrapportering: false, checklistor: true, avvikelserapport: true, projektuppfoljning: false, resursplanering: false,
      offerthantering: true, underentreprenorsportal: true, klimatdeklaration: true, integration_fortnox: false, mobilapp: true,
      gps_positionering: false, bildhantering: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'kubicom',
    name: 'Kubicom',
    price: 'På begäran',
    paymentType: '(Abo)',
    rating: 4.6,
    reviews: 'Maskin',
    website: 'https://kubicom.se/',
    pricingUrl: 'https://kubicom.se/',
    description: "Digitaliserar maskin- och transporttjänster. Kopplar ihop beställare och utförare för effektivare logistik på bygget.",
    pros: ["Bäst för anläggning", "Maskinstyrning", "Logistikfokus"],
    cons: ["Nischat mot anläggning", "Ej för snickare"],
    features: {
      id06_integration: true, ata_hantering: true, personalliggare: true, dagbok: true, gratis_provperiod: false,
      bankid_inloggning: true, rot_avdrag: false, e_faktura: true, egenkontroll: true, kma_parm: false,
      tidrapportering: true, checklistor: true, avvikelserapport: true, projektuppfoljning: true, resursplanering: true,
      offerthantering: true, underentreprenorsportal: true, klimatdeklaration: true, integration_fortnox: true, mobilapp: true,
      gps_positionering: true, bildhantering: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'smartkalkyl',
    name: 'SmartKalkyl',
    price: 'Från 990 kr',
    paymentType: '/år',
    rating: 4.4,
    reviews: 'Kalkyl',
    website: 'https://smartkalkyl.se/',
    pricingUrl: 'https://smartkalkyl.se/',
    description: "Enkelt kalkylprogram för byggare. Bygger på färdiga recept och prislistor för att snabbt få fram en offert.",
    pros: ["Snabba offerter", "Färdiga recept", "Billigt"],
    cons: ["Endast kalkyl", "Enkel design"],
    features: {
      id06_integration: false, ata_hantering: false, personalliggare: false, dagbok: false, gratis_provperiod: true,
      bankid_inloggning: false, rot_avdrag: true, e_faktura: false, egenkontroll: false, kma_parm: false,
      tidrapportering: false, checklistor: false, avvikelserapport: false, projektuppfoljning: false, resursplanering: false,
      offerthantering: true, underentreprenorsportal: false, klimatdeklaration: false, integration_fortnox: false, mobilapp: false,
      gps_positionering: false, bildhantering: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'wikells',
    name: 'Wikells',
    price: 'På begäran',
    paymentType: '(Licens)',
    rating: 4.5,
    reviews: 'Data',
    website: 'https://wikells.se/',
    pricingUrl: 'https://wikells.se/',
    description: "Sveriges ledande kalkylsystem. Innehåller 'Wikells Sektionsfakta', den mest omfattande prisdatabasen för byggprojekt.",
    pros: ["Bästa databasen", "Exakta kalkyler", "Proffsverktyg"],
    cons: ["Dyrt", "Hög inlärningströskel"],
    features: {
      id06_integration: false, ata_hantering: true, personalliggare: false, dagbok: false, gratis_provperiod: true,
      bankid_inloggning: false, rot_avdrag: true, e_faktura: false, egenkontroll: false, kma_parm: false,
      tidrapportering: false, checklistor: false, avvikelserapport: false, projektuppfoljning: true, resursplanering: false,
      offerthantering: true, underentreprenorsportal: false, klimatdeklaration: true, integration_fortnox: false, mobilapp: false,
      gps_positionering: false, bildhantering: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'homerun',
    name: 'HomeRun',
    price: 'På begäran',
    paymentType: '(Licens)',
    rating: 4.3,
    reviews: 'Renovering',
    website: 'https://www.homerun.net/sv/',
    pricingUrl: 'https://www.homerun.net/sv/',
    description: "Verktyg för stambyten och större renoveringar. Digitaliserar kommunikationen med hyresgäster och tillvalshantering.",
    pros: ["Bäst på tillval", "Hyresgästportal", "Minskar tjat"],
    cons: ["Nischad mot ROT", "Ej för nybyggnad"],
    features: {
      id06_integration: false, ata_hantering: true, personalliggare: false, dagbok: true, gratis_provperiod: true,
      bankid_inloggning: true, rot_avdrag: true, e_faktura: false, egenkontroll: true, kma_parm: false,
      tidrapportering: false, checklistor: true, avvikelserapport: true, projektuppfoljning: true, resursplanering: false,
      offerthantering: false, underentreprenorsportal: false, klimatdeklaration: false, integration_fortnox: false, mobilapp: true,
      gps_positionering: false, bildhantering: true, app_ios: true, app_android: true
    }
  }
];
