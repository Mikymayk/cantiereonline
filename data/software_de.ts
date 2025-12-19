import { SoftwareDE } from './types';

export const softwareDE: SoftwareDE[] = [
  {
    id: 'capmo',
    name: 'Capmo',
    price: 'Auf Anfrage',
    paymentType: '(Abo)',
    rating: 4.8,
    reviews: 'Baudoku',
    website: 'https://www.capmo.com/',
    pricingUrl: 'https://www.capmo.com/preise',
    description: "Die intuitive Software für <strong>Bauleiter in Deutschland</strong>. Digitalisiert Mängelmanagement, Bautagebuch und Bauzeitenplan. Spart Stunden an Schreibarbeit pro Woche.",
    pros: ["Sehr einfach zu bedienen", "VOB-konforme Berichte", "Deutscher Server & Support"],
    cons: ["Keine AVA-Funktionen", "Fokus rein auf Bauleitung"],
    features: {
      vob_konformitaet: true, bautagebuch: true, gaeb_schnittstelle: false, maengelmanagement: true, kostenlose_testphase: true,
      reb_23_003: false, xrechnung_zugferd: false, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: true,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: true, nachtragsmanagement: false,
      bim_integration: false, digitale_abnahme: true, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: true,
      sprachsteuerung: true, subunternehmer_verwaltung: true, app_ios: true, app_android: true
    }
  },
  {
    id: '123erfasst_de',
    name: '123erfasst',
    price: 'Auf Anfrage',
    paymentType: '(Abo)',
    rating: 4.7,
    reviews: 'Zeiterfassung',
    website: 'https://www.123erfasst.de/',
    pricingUrl: 'https://www.123erfasst.de/',
    description: "Marktführer für <strong>mobile Zeiterfassung</strong> im deutschen Handwerk. GPS-Tracking, Fotodokumentation und direkte Lohnschnittstellen (DATEV) machen die Baustelle transparent.",
    pros: ["DATEV-Schnittstelle", "Sofort startklar", "Inklusive Bautagebuch"],
    cons: ["Design wirkt etwas technisch", "Kosten pro Mitarbeiter"],
    features: {
      vob_konformitaet: false, bautagebuch: true, gaeb_schnittstelle: false, maengelmanagement: true, kostenlose_testphase: true,
      reb_23_003: false, xrechnung_zugferd: false, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: true, nachtragsmanagement: false,
      bim_integration: false, digitale_abnahme: true, datev_schnittstelle: true, dsgvo_konformitaet: true, fotodokumentation: true,
      sprachsteuerung: true, subunternehmer_verwaltung: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'brz',
    name: 'BRZ',
    price: 'Auf Anfrage',
    paymentType: '(Enterprise)',
    rating: 4.5,
    reviews: 'Komplett',
    website: 'https://www.brz.eu/de',
    pricingUrl: 'https://www.brz.eu/de',
    description: "Spezialist für Baulohn und ERP. <strong>BRZ</strong> bietet eine ganzheitliche Lösung für mittelständische Bauunternehmen, von der Kalkulation bis zur Bilanzierung.",
    pros: ["Baulohn-Experten", "Tiefgehende Analysen", "Modulare ERP-Lösung"],
    cons: ["Hoher Implementierungsaufwand", "Eher für grössere Betriebe"],
    features: {
      vob_konformitaet: true, bautagebuch: true, gaeb_schnittstelle: true, maengelmanagement: true, kostenlose_testphase: false,
      reb_23_003: true, xrechnung_zugferd: true, gobd_konform: true, baulohn_abrechnung: true, maengelanzeige_vob: true,
      freistellungsbescheinigung: true, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: true, nachtragsmanagement: true,
      bim_integration: true, digitale_abnahme: true, datev_schnittstelle: true, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'nevaris',
    name: 'Nevaris Build',
    price: 'Auf Anfrage',
    paymentType: '(Lizenz)',
    rating: 4.6,
    reviews: 'AVA Top',
    website: 'https://www.nevaris.com/',
    pricingUrl: 'https://www.nevaris.com/',
    description: "Die Premium-Lösung für AVA (Ausschreibung, Vergabe, Abrechnung) und Baukostenmanagement. Nachfolger von 'Auerswald', tief integriert mit Nemetschek Produkten.",
    pros: ["AVA-Standard", "Tiefste GAEB-Integration", "Stark im Hochbau"],
    cons: ["Komplex", "Benötigt Schulung"],
    features: {
      vob_konformitaet: true, bautagebuch: true, gaeb_schnittstelle: true, maengelmanagement: true, kostenlose_testphase: false,
      reb_23_003: true, xrechnung_zugferd: true, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: true,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: false, nachtragsmanagement: true,
      bim_integration: true, digitale_abnahme: false, datev_schnittstelle: true, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: true, app_ios: false, app_android: false
    }
  },
  {
    id: 'orca_ava',
    name: 'ORCA AVA',
    price: 'Ab €990',
    paymentType: '(Lizenz)',
    rating: 4.7,
    reviews: 'Architekten',
    website: 'https://www.orca-software.com/',
    pricingUrl: 'https://www.orca-software.com/preise/',
    description: "Beliebte AVA-Software bei deutschen Architekten und Ingenieuren. Fokussiert auf Kostensicherheit und rechtssichere Ausschreibungen nach VOB.",
    pros: ["Transparente Preise", "Exzellenter Support", "Sehr verbreitet"],
    cons: ["Klassische Desktop-Optik", "Kein mobiles Tool"],
    features: {
      vob_konformitaet: true, bautagebuch: false, gaeb_schnittstelle: true, maengelmanagement: false, kostenlose_testphase: true,
      reb_23_003: true, xrechnung_zugferd: true, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: false, nachtragsmanagement: true,
      bim_integration: true, digitale_abnahme: false, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'bechmann',
    name: 'Bechmann AVA',
    price: 'Auf Anfrage',
    paymentType: '(Lizenz)',
    rating: 4.4,
    reviews: 'Kosten',
    website: 'https://www.bechmann.de/',
    pricingUrl: 'https://www.bechmann.de/',
    description: "Spezialist für Kostenplanung und AVA. Verbindet CAD-Daten direkt mit dem Leistungsverzeichnis (BIM-AVA).",
    pros: ["BIM-Pionier", "DIN 276 Kostenplanung", "Verknüpfung CAD"],
    cons: ["Nische AVA", "Eher für Planer"],
    features: {
      vob_konformitaet: true, bautagebuch: false, gaeb_schnittstelle: true, maengelmanagement: false, kostenlose_testphase: true,
      reb_23_003: true, xrechnung_zugferd: true, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: false, bauzeitenplan: false, nachtragsmanagement: true,
      bim_integration: true, digitale_abnahme: false, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'winworker',
    name: 'WinWorker',
    price: 'Auf Anfrage',
    paymentType: '(Abo)',
    rating: 4.6,
    reviews: 'Handwerk',
    website: 'https://www.winworker.de/',
    pricingUrl: 'https://www.winworker.de/',
    description: "Die Komplettlösung für das <strong>deutsche Handwerk</strong>. Von der mobilen Aufmass-App über das Angebot bis zur Schlussrechnung.",
    pros: ["Perfekt für Handwerker", "Mobiles Aufmass top", "GoBD zertifiziert"],
    cons: ["Mächtig, braucht Einarbeitung", "Windows-lastig"],
    features: {
      vob_konformitaet: true, bautagebuch: true, gaeb_schnittstelle: true, maengelmanagement: true, kostenlose_testphase: false,
      reb_23_003: true, xrechnung_zugferd: true, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: true,
      freistellungsbescheinigung: true, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: true, nachtragsmanagement: true,
      bim_integration: false, digitale_abnahme: true, datev_schnittstelle: true, dsgvo_konformitaet: true, fotodokumentation: true,
      sprachsteuerung: true, subunternehmer_verwaltung: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'cosuno',
    name: 'Cosuno',
    price: 'Auf Anfrage',
    paymentType: '(Abo)',
    rating: 4.8,
    reviews: 'Einkauf',
    website: 'https://www.cosuno.com/',
    pricingUrl: 'https://www.cosuno.com/',
    description: "Revolutioniert den Einkauf und das Nachunternehmer-Management. Findet Nachunternehmer, versendet Ausschreibungen und vergleicht Angebote automatisch.",
    pros: ["Enorme Zeitersparnis", "Grosses NU-Netzwerk", "Modernes UI"],
    cons: ["Nur für Ausschreibung/Vergabe", "Preislich Premium"],
    features: {
      vob_konformitaet: false, bautagebuch: false, gaeb_schnittstelle: true, maengelmanagement: false, kostenlose_testphase: true,
      reb_23_003: false, xrechnung_zugferd: false, gobd_konform: false, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: true, sigeko_funktionen: false, digitale_bauakte: false, bauzeitenplan: false, nachtragsmanagement: false,
      bim_integration: false, digitale_abnahme: false, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: true, app_ios: false, app_android: false
    }
  },
  {
    id: 'alasco',
    name: 'Alasco',
    price: 'Auf Anfrage',
    paymentType: '(Abo)',
    rating: 4.7,
    reviews: 'Finanz',
    website: 'https://www.alasco.de/',
    pricingUrl: 'https://www.alasco.de/',
    description: "Finanzcontrolling für Bauherren und Projektsteuerer. Digitalisiert den Rechnungsfreigabeprozess und das Kostenmanagement in der Cloud.",
    pros: ["Modernes Finanzmanagement", "Echtzeit-Kostenkontrolle", "Intuitive Cloud-Lösung"],
    cons: ["Fokus Finanzen, nicht Technik", "Für Projektentwickler"],
    features: {
      vob_konformitaet: false, bautagebuch: false, gaeb_schnittstelle: false, maengelmanagement: false, kostenlose_testphase: true,
      reb_23_003: false, xrechnung_zugferd: false, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: true, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: false, nachtragsmanagement: true,
      bim_integration: false, digitale_abnahme: false, datev_schnittstelle: true, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'openhandwerk',
    name: 'OpenHandwerk',
    price: 'Ab €15',
    paymentType: '/Monat',
    rating: 4.5,
    reviews: 'Cloud',
    website: 'https://www.openhandwerk.de/',
    pricingUrl: 'https://www.openhandwerk.de/preise/',
    description: "Die Cloud-Lösung für Handwerksbetriebe. Auftragsverwaltung, Terminplanung und Dokumentation in einem System, ohne Server-Installation.",
    pros: ["Alles in der Cloud", "App für Monteure", "Günstiger Einstieg"],
    cons: ["Funktionstiefe vs. WinWorker", "Internet notwendig"],
    features: {
      vob_konformitaet: true, bautagebuch: true, gaeb_schnittstelle: true, maengelmanagement: true, kostenlose_testphase: true,
      reb_23_003: false, xrechnung_zugferd: true, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: true,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: true, nachtragsmanagement: true,
      bim_integration: false, digitale_abnahme: true, datev_schnittstelle: true, dsgvo_konformitaet: true, fotodokumentation: true,
      sprachsteuerung: false, subunternehmer_verwaltung: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'craftnote',
    name: 'Craftnote',
    price: 'Freemium',
    paymentType: '(Abo)',
    rating: 4.6,
    reviews: 'Chat',
    website: 'https://www.craftnote.de/',
    pricingUrl: 'https://www.craftnote.de/preise/',
    description: "Wie WhatsApp für die Baustelle, aber professionell. Organisiert Nachrichten, Bilder und Dateien pro Projekt. Super Einstieg in die Digitalisierung.",
    pros: ["Kostenloser Start", "Jeder versteht es sofort", "Dateien sortiert"],
    cons: ["Kein Ersatz für ERP", "Funktionen begrenzt"],
    features: {
      vob_konformitaet: false, bautagebuch: true, gaeb_schnittstelle: false, maengelmanagement: false, kostenlose_testphase: true,
      reb_23_003: false, xrechnung_zugferd: false, gobd_konform: false, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: true, nachtragsmanagement: false,
      bim_integration: false, digitale_abnahme: true, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: true,
      sprachsteuerung: false, subunternehmer_verwaltung: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'planradar_de',
    name: 'PlanRadar',
    price: 'Ab €26',
    paymentType: '/Monat',
    rating: 4.8,
    reviews: 'Doku',
    website: 'https://www.planradar.com/de/',
    pricingUrl: 'https://www.planradar.com/de/preise/',
    description: "Der Standard für Mängelmanagement und Baudokumentation. Einfachste App-Bedienung sorgt für hohe Akzeptanz bei Nachunternehmern.",
    pros: ["Extrem einfach", "Berichte auf Knopfdruck", "Offline-fähig"],
    cons: ["Keine AVA", "Kosten pro Nutzer"],
    features: {
      vob_konformitaet: false, bautagebuch: true, gaeb_schnittstelle: false, maengelmanagement: true, kostenlose_testphase: true,
      reb_23_003: false, xrechnung_zugferd: false, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: true,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: false, nachtragsmanagement: false,
      bim_integration: true, digitale_abnahme: true, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: true,
      sprachsteuerung: true, subunternehmer_verwaltung: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'thinkproject',
    name: 'Thinkproject',
    price: 'Auf Anfrage',
    paymentType: '(Enterprise)',
    rating: 4.5,
    reviews: 'CDE',
    website: 'https://thinkproject.com/de/',
    pricingUrl: 'https://thinkproject.com/de/',
    description: "Europas führende CDE (Common Data Environment) für Gross- und Infrastrukturprojekte. Verwaltet Pläne, Dokumente und Prozesse auf höchstem Niveau.",
    pros: ["Standard für Grossbauten", "Sicher & Skalierbar", "BIM-Kollaboration"],
    cons: ["Overkill für KMU", "Hohe Komplexität"],
    features: {
      vob_konformitaet: true, bautagebuch: true, gaeb_schnittstelle: true, maengelmanagement: true, kostenlose_testphase: false,
      reb_23_003: false, xrechnung_zugferd: false, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: true,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: false, nachtragsmanagement: true,
      bim_integration: true, digitale_abnahme: true, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: true,
      sprachsteuerung: false, subunternehmer_verwaltung: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'rib_itwo',
    name: 'RIB iTWO',
    price: 'Auf Anfrage',
    paymentType: '(Enterprise)',
    rating: 4.6,
    reviews: '5D BIM',
    website: 'https://www.rib-software.com/',
    pricingUrl: 'https://www.rib-software.com/',
    description: "Weltweit führende 5D BIM Lösung aus Deutschland. Verbindet das 3D-Modell mit Zeit (4D) und Kosten (5D) für eine integrierte Projektsteuerung.",
    pros: ["Technologieführer", "5D Simulation", "Durchgängig"],
    cons: ["Sehr teuer", "Expertensoftware"],
    features: {
      vob_konformitaet: true, bautagebuch: true, gaeb_schnittstelle: true, maengelmanagement: true, kostenlose_testphase: false,
      reb_23_003: true, xrechnung_zugferd: true, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: true,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: true, nachtragsmanagement: true,
      bim_integration: true, digitale_abnahme: true, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'gw_california',
    name: 'G&W California',
    price: 'Auf Anfrage',
    paymentType: '(Lizenz)',
    rating: 4.5,
    reviews: 'Kosten',
    website: 'https://www.gw-software.de/',
    pricingUrl: 'https://www.gw-software.de/',
    description: "Der Klassiker für Kostenplanung und AVA. California.pro begleitet den Planer von der ersten Kostenschätzung bis zur Kostenfeststellung.",
    pros: ["Sehr detaillierte Kostenplanung", "RGB-konform", "Stabil"],
    cons: ["UI etwas älter", "Rein Desktop"],
    features: {
      vob_konformitaet: true, bautagebuch: true, gaeb_schnittstelle: true, maengelmanagement: false, kostenlose_testphase: true,
      reb_23_003: true, xrechnung_zugferd: true, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: false, nachtragsmanagement: true,
      bim_integration: true, digitale_abnahme: false, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'mwm_libero',
    name: 'MWM-Libero',
    price: 'Auf Anfrage',
    paymentType: '(Lizenz)',
    rating: 4.4,
    reviews: 'Aufmass',
    website: 'https://www.mwm.de/',
    pricingUrl: 'https://www.mwm.de/',
    description: "Spezialsoftware für Aufmass, Mengenermittlung und Bauabrechnung. Unterstützt REB 23.003 und GAEB perfekt.",
    pros: ["Aufmass-Experte", "REB-konform", "Laser-Integration"],
    cons: ["Nischenprodukt", "Optik"],
    features: {
      vob_konformitaet: true, bautagebuch: false, gaeb_schnittstelle: true, maengelmanagement: false, kostenlose_testphase: true,
      reb_23_003: true, xrechnung_zugferd: true, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: false, bauzeitenplan: false, nachtragsmanagement: true,
      bim_integration: false, digitale_abnahme: false, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'nova_ava',
    name: 'Nova AVA',
    price: 'Ab €49',
    paymentType: '/Monat',
    rating: 4.6,
    reviews: 'Web AVA',
    website: 'https://www.nova-ava.de/',
    pricingUrl: 'https://www.nova-ava.de/preise',
    description: "Die erste vollumfängliche <strong>Web-AVA</strong>. Läuft im Browser (auch Mac/Linux) und bietet Ausschreibung, Vergabe und Abrechnung ohne Installation.",
    pros: ["Läuft überall (Mac!)", "Keine Installation", "Modernes UI"],
    cons: ["Internetpflicht", "Funktionsumfang wächst noch"],
    features: {
      vob_konformitaet: true, bautagebuch: true, gaeb_schnittstelle: true, maengelmanagement: false, kostenlose_testphase: true,
      reb_23_003: true, xrechnung_zugferd: true, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: false, nachtragsmanagement: true,
      bim_integration: true, digitale_abnahme: false, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'sirados',
    name: 'Sirados',
    price: 'Auf Anfrage',
    paymentType: '(Abo)',
    rating: 4.5,
    reviews: 'Baudaten',
    website: 'https://www.sirados.de/',
    pricingUrl: 'https://www.sirados.de/',
    description: "Bekannt für seine Baudaten und VOB-Texte. Bietet auch Software zur Kalkulation und Ausschreibung mit Zugriff auf tausende vorformulierte Leistungstexte.",
    pros: ["Beste Textdatenbank", "VOB-sicher ausschreiben", "Zeitersparnis"],
    cons: ["Software ist 'nur' Hülle für Daten", "Kosten"],
    features: {
      vob_konformitaet: true, bautagebuch: false, gaeb_schnittstelle: true, maengelmanagement: false, kostenlose_testphase: true,
      reb_23_003: false, xrechnung_zugferd: false, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: false, bauzeitenplan: false, nachtragsmanagement: false,
      bim_integration: false, digitale_abnahme: false, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: false,
      sprachsteuerung: false, subunternehmer_verwaltung: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'digiholz',
    name: 'Digiholz',
    price: 'Ab €15',
    paymentType: '/Monat',
    rating: 4.7,
    reviews: 'Zimmerer',
    website: 'https://digiholz.de/',
    pricingUrl: 'https://digiholz.de/preise/',
    description: "Von Zimmerern für Zimmerer. Einfache Zeiterfassung und Baustellen-Doku per App. Sehr praxisnah und günstig.",
    pros: ["Aus der Praxis", "Sehr einfach", "Fairer Preis"],
    cons: ["Nur Basisfunktionen", "Fokus Holzbau"],
    features: {
      vob_konformitaet: false, bautagebuch: true, gaeb_schnittstelle: false, maengelmanagement: false, kostenlose_testphase: true,
      reb_23_003: false, xrechnung_zugferd: false, gobd_konform: true, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: false, nachtragsmanagement: false,
      bim_integration: false, digitale_abnahme: true, datev_schnittstelle: true, dsgvo_konformitaet: true, fotodokumentation: true,
      sprachsteuerung: true, subunternehmer_verwaltung: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'baufoto',
    name: 'Baufoto',
    price: 'Kostenlos',
    paymentType: '(App)',
    rating: 4.3,
    reviews: 'Foto',
    website: 'https://www.baufoto-app.de/',
    pricingUrl: 'https://www.baufoto-app.de/',
    description: "Einfache App zur schnellen Fotodokumentation. Ordnet Fotos automatisch Projekten zu. Ideal als Ergänzung.",
    pros: ["Simpel", "Schnell", "Kostenlos Version"],
    cons: ["Kann nur Fotos", "Keine Cloud-Synchro in Basis"],
    features: {
      vob_konformitaet: false, bautagebuch: false, gaeb_schnittstelle: false, maengelmanagement: true, kostenlose_testphase: true,
      reb_23_003: false, xrechnung_zugferd: false, gobd_konform: false, baulohn_abrechnung: false, maengelanzeige_vob: false,
      freistellungsbescheinigung: false, sigeko_funktionen: false, digitale_bauakte: true, bauzeitenplan: false, nachtragsmanagement: false,
      bim_integration: false, digitale_abnahme: false, datev_schnittstelle: false, dsgvo_konformitaet: true, fotodokumentation: true,
      sprachsteuerung: true, subunternehmer_verwaltung: false, app_ios: true, app_android: true
    }
  }
];
