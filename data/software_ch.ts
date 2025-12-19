import { SoftwareCH } from './types';

export const softwareCH: SoftwareCH[] = [
  {
    id: 'sorba',
    name: 'Sorba',
    price: 'Auf Anfrage',
    paymentType: '(Lizenz)',
    rating: 4.8,
    reviews: 'Marktführer',
    website: 'https://www.sorba.ch/',
    pricingUrl: 'https://www.sorba.ch/preise',
    description: "Der Schweizer Marktführer für Bausoftware. <strong>Sorba</strong> deckt alles ab: von der SIA-konformen Offertstellung über den NPK-Editor bis zur Lohnbuchhaltung. Eine Komplettlösung für KMU und Grossbetriebe.",
    pros: ["Vollständige SIA & CRB Integration", "Umfassende Modullandschaft", "Schweizer Support"],
    cons: ["Hoher Preis", "Umfangreiche Einarbeitung nötig"],
    features: {
      sia_konformitaet: true, npk_editor: true, regie_rapporte: true, baujournal: true, kostenlose_testphase: false,
      sia_451_schnittstelle: true, crb_zertifiziert: true, qr_rechnung: true, ausmass_sia_118: true, ifa18_unterstuetzung: true,
      kbob_vertraege: true, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: true, maengelmanagement: true,
      digitale_visierung: true, bim_viewer: true, planverwaltung: true, subunternehmer_portal: false, mobiles_rapportieren: true,
      offline_funktion: true, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'abacus',
    name: 'Abacus',
    price: 'Auf Anfrage',
    paymentType: '(Abo/Lizenz)',
    rating: 4.7,
    reviews: 'ERP Standard',
    website: 'https://www.abacus.ch/',
    pricingUrl: 'https://www.abacus.ch/',
    description: "Die mächtigste ERP-Lösung der Schweiz. Für das Baugewerbe bietet <strong>Abacus</strong> spezialisierte Module für Finanzbuchhaltung, Lohn (Swissdec) und Projektmanagement nach SIA-Standards.",
    pros: ["Integration Finanzbuchhaltung", "Extrem skalierbar", "Sicherer Schweizer Standard"],
    cons: ["Sehr komplex", "Teuer für Kleinbetriebe"],
    features: {
      sia_konformitaet: true, npk_editor: true, regie_rapporte: true, baujournal: true, kostenlose_testphase: false,
      sia_451_schnittstelle: true, crb_zertifiziert: true, qr_rechnung: true, ausmass_sia_118: true, ifa18_unterstuetzung: true,
      kbob_vertraege: true, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: true, maengelmanagement: false,
      digitale_visierung: true, bim_viewer: false, planverwaltung: false, subunternehmer_portal: false, mobiles_rapportieren: true,
      offline_funktion: true, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'messerli',
    name: 'Messerli',
    price: 'Auf Anfrage',
    paymentType: '(Lizenz)',
    rating: 4.6,
    reviews: 'Tradition',
    website: 'https://www.messerli.ch/',
    pricingUrl: 'https://www.messerli.ch/',
    description: "Seit Jahrzehnten etabliert bei Schweizer Architekten und Bauleitern. <strong>Messerli</strong> ist führend in der Bauadministration, von der Kostenschätzung bis zur Bauabrechnung nach CRB/NPK.",
    pros: ["Perfekte Bauadministration", "SIA 451 Austausch", "Bewährt & Stabil"],
    cons: ["Klassische Desktop-Oberfläche", "Weniger mobilfokussiert"],
    features: {
      sia_konformitaet: true, npk_editor: true, regie_rapporte: true, baujournal: true, kostenlose_testphase: false,
      sia_451_schnittstelle: true, crb_zertifiziert: true, qr_rechnung: true, ausmass_sia_118: true, ifa18_unterstuetzung: true,
      kbob_vertraege: true, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: false, maengelmanagement: true,
      digitale_visierung: false, bim_viewer: true, planverwaltung: true, subunternehmer_portal: false, mobiles_rapportieren: true,
      offline_funktion: false, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: true, app_android: false
    }
  },
  {
    id: 'smino',
    name: 'Smino',
    price: 'Ab CHF 45',
    paymentType: '/Monat',
    rating: 4.8,
    reviews: 'Modern',
    website: 'https://smino.com/',
    pricingUrl: 'https://smino.com/preise/',
    description: "Die moderne Kollaborationsplattform für Schweizer Bauprojekte. <strong>Smino</strong> vereint Protokolle, Aufgabenmanagement und BIM in einer intuitiven Cloud-Lösung.",
    pros: ["Sehr benutzerfreundlich", "BIM-Integration", "Automatisierte Protokolle"],
    cons: ["Keine Finanzbuchhaltung", "Fokus auf Kommunikation"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: false, baujournal: true, kostenlose_testphase: true,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: false, ausmass_sia_118: false, ifa18_unterstuetzung: true,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: false, lohnmeldeverfahren_elm: false, maengelmanagement: true,
      digitale_visierung: true, bim_viewer: true, planverwaltung: true, subunternehmer_portal: true, mobiles_rapportieren: true,
      offline_funktion: true, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'provis',
    name: 'Provis',
    price: 'Auf Anfrage',
    paymentType: '(Projekt)',
    rating: 4.5,
    reviews: 'GU/TU',
    website: 'https://www.provis.ch/',
    pricingUrl: 'https://www.provis.ch/',
    description: "Spezialisiert auf Generalunternehmer und Projektentwickler. <strong>Provis</strong> bietet tiefgehende Funktionen für das Kostenmanagement und die Projektsteuerung grosser Bauvorhaben.",
    pros: ["Starkes Kostenmanagement", "Ideal für Generalunternehmer", "Schnittstellen zu Abacus"],
    cons: ["Nichts für Kleinbetriebe", "Implementierungsaufwand"],
    features: {
      sia_konformitaet: true, npk_editor: true, regie_rapporte: true, baujournal: false, kostenlose_testphase: false,
      sia_451_schnittstelle: true, crb_zertifiziert: true, qr_rechnung: true, ausmass_sia_118: true, ifa18_unterstuetzung: false,
      kbob_vertraege: true, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: false, maengelmanagement: true,
      digitale_visierung: true, bim_viewer: false, planverwaltung: false, subunternehmer_portal: true, mobiles_rapportieren: false,
      offline_funktion: false, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'baubit_pro',
    name: 'Baubit PRO',
    price: 'Auf Anfrage',
    paymentType: '(Lizenz)',
    rating: 4.4,
    reviews: 'Solid',
    website: 'https://www.baubit.ch/',
    pricingUrl: 'https://www.baubit.ch/',
    description: "Eine bewährte Schweizer Branchenlösung für das Bauhaupt- und Nebengewerbe. Bietet alles von der Offerte bis zur Schlussrechnung.",
    pros: ["Gutes Preis-Leistungs-Verhältnis", "Solide Grundfunktionen", "SIA integriert"],
    cons: ["Design etwas älter", "Support zeitenabhängig"],
    features: {
      sia_konformitaet: true, npk_editor: true, regie_rapporte: true, baujournal: true, kostenlose_testphase: true,
      sia_451_schnittstelle: true, crb_zertifiziert: true, qr_rechnung: true, ausmass_sia_118: true, ifa18_unterstuetzung: false,
      kbob_vertraege: true, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: true, maengelmanagement: false,
      digitale_visierung: false, bim_viewer: false, planverwaltung: false, subunternehmer_portal: false, mobiles_rapportieren: true,
      offline_funktion: true, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'deltaproject',
    name: 'Deltaproject',
    price: 'Auf Anfrage',
    paymentType: '(Abo)',
    rating: 4.6,
    reviews: 'Architekten',
    website: 'https://www.deltaproject.ch/',
    pricingUrl: 'https://www.deltaproject.ch/',
    description: "Die Software von Architekten für Architekten. Fokussiert auf Design, Benutzerfreundlichkeit und effiziente Bauadministration nach Schweizer Normen.",
    pros: ["Schönes Interface", "Intuitiv für Planer", "Cloud-basiert"],
    cons: ["Weniger für Handwerker geeignet", "Fokus Planung"],
    features: {
      sia_konformitaet: true, npk_editor: true, regie_rapporte: true, baujournal: true, kostenlose_testphase: true,
      sia_451_schnittstelle: true, crb_zertifiziert: true, qr_rechnung: true, ausmass_sia_118: true, ifa18_unterstuetzung: true,
      kbob_vertraege: true, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: false, maengelmanagement: true,
      digitale_visierung: true, bim_viewer: false, planverwaltung: true, subunternehmer_portal: false, mobiles_rapportieren: true,
      offline_funktion: true, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'deltek_maconomy',
    name: 'Deltek',
    price: 'Auf Anfrage',
    paymentType: '(Enterprise)',
    rating: 4.3,
    reviews: 'Global',
    website: 'https://www.deltek.com/',
    pricingUrl: 'https://www.deltek.com/',
    description: "Enterprise-Lösung für grosse Ingenieur- und Architekturbüros. Stark im Ressourcenmanagement und finanziellen Projektcontrolling.",
    pros: ["Mächtiges ERP", "Ressourcenplanung top", "International einsetzbar"],
    cons: ["Nicht spezifisch CH-Bau", "Teuer"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: true, baujournal: false, kostenlose_testphase: false,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: true, ausmass_sia_118: false, ifa18_unterstuetzung: false,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: false, maengelmanagement: false,
      digitale_visierung: true, bim_viewer: false, planverwaltung: false, subunternehmer_portal: true, mobiles_rapportieren: true,
      offline_funktion: false, serverstandort_schweiz: false, mehrsprachigkeit: true, zeiterfassung_gps: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'bexio',
    name: 'Bexio',
    price: 'Ab CHF 29',
    paymentType: '/Monat',
    rating: 4.7,
    reviews: 'KMU Liebling',
    website: 'https://www.bexio.com/',
    pricingUrl: 'https://www.bexio.com/de-CH/preise',
    description: "Die beliebteste Business-Software für Schweizer KMUs. Nicht rein für den Bau, aber dank Projektmodul und Zeiterfassung für kleine Handwerksbetriebe oft die erste Wahl.",
    pros: ["Einfach & Günstig", "Gute Buchhaltung", "Grosses Ökosystem"],
    cons: ["Kein NPK/SIA", "Kein Bautagebuch"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: true, baujournal: false, kostenlose_testphase: true,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: true, ausmass_sia_118: false, ifa18_unterstuetzung: false,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: true, maengelmanagement: false,
      digitale_visierung: false, bim_viewer: false, planverwaltung: false, subunternehmer_portal: false, mobiles_rapportieren: true,
      offline_funktion: false, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'pebe',
    name: 'Pebe',
    price: 'Auf Anfrage',
    paymentType: '(Lizenz)',
    rating: 4.4,
    reviews: 'Finanz',
    website: 'https://www.pebe.ch/',
    pricingUrl: 'https://www.pebe.ch/',
    description: "Starke Finanz- und Lohnbuchhaltungslösung für Schweizer Treuhänder und KMUs. Integriert sich gut in bestehende IT-Landschaften.",
    pros: ["Buchhaltungsexperten", "Swissdec zertifiziert", "Zuverlässig"],
    cons: ["Keine Bausoftware", "Nur Administration"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: false, baujournal: false, kostenlose_testphase: false,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: true, ausmass_sia_118: false, ifa18_unterstuetzung: false,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: true, maengelmanagement: false,
      digitale_visierung: false, bim_viewer: false, planverwaltung: false, subunternehmer_portal: false, mobiles_rapportieren: false,
      offline_funktion: false, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'buildigo',
    name: 'Buildigo',
    price: 'Kostenlos',
    paymentType: '(Vermittlung)',
    rating: 4.2,
    reviews: 'Netzwerk',
    website: 'https://www.buildigo.ch/',
    pricingUrl: 'https://www.buildigo.ch/',
    description: "Eine Plattform der Mobiliar. Vermittelt Handwerker an Auftraggeber. Für Handwerker ein Kanal zur Auftragsgewinnung.",
    pros: ["Neue Aufträge", "Seriöser Partner (Mobiliar)", "Einfach"],
    cons: ["Keine Software, nur Plattform", "Provisionen"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: false, baujournal: false, kostenlose_testphase: true,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: false, ausmass_sia_118: false, ifa18_unterstuetzung: false,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: false, lohnmeldeverfahren_elm: false, maengelmanagement: false,
      digitale_visierung: false, bim_viewer: false, planverwaltung: false, subunternehmer_portal: false, mobiles_rapportieren: true,
      offline_funktion: false, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'dalux_ch',
    name: 'Dalux',
    price: 'Freemium',
    paymentType: '(Abo)',
    rating: 4.7,
    reviews: 'BIM Top',
    website: 'https://www.dalux.com/de-ch',
    pricingUrl: 'https://www.dalux.com/',
    description: "Einer der besten BIM-Viewer am Markt. Kostenlos für Basis-BIM, kostenpflichtig für Mängelmanagement und Bauleitung. Sehr verbreitet in der Schweiz.",
    pros: ["Genialer BIM-Viewer", "Kostenloser Einstieg", "Sehr stabil"],
    cons: ["Admin-Funktionen kosten", "Support Englisch/Deutsch"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: false, baujournal: true, kostenlose_testphase: true,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: false, ausmass_sia_118: false, ifa18_unterstuetzung: true,
      kbob_vertraege: false, waehrung_chf: false, mwst_abrechnung: false, lohnmeldeverfahren_elm: false, maengelmanagement: true,
      digitale_visierung: true, bim_viewer: true, planverwaltung: true, subunternehmer_portal: true, mobiles_rapportieren: true,
      offline_funktion: true, serverstandort_schweiz: false, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'planradar_ch',
    name: 'PlanRadar',
    price: 'Ab €26',
    paymentType: '/Monat',
    rating: 4.8,
    reviews: 'Doku King',
    website: 'https://www.planradar.com/de-ch/',
    pricingUrl: 'https://www.planradar.com/de-ch/preise/',
    description: "Marktstandard für digitale Baudokumentation und Mängelmanagement. Einfachste Bedienung auf dem Tablet, ideal für Baustellenbegehungen.",
    pros: ["Sofort nutzbar", "Spart viel Zeit", "Berichte anpassbar"],
    cons: ["Kein SIA-Ausschreibung", "Rein für Doku"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: true, baujournal: true, kostenlose_testphase: true,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: false, ausmass_sia_118: false, ifa18_unterstuetzung: true,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: false, lohnmeldeverfahren_elm: false, maengelmanagement: true,
      digitale_visierung: true, bim_viewer: true, planverwaltung: true, subunternehmer_portal: true, mobiles_rapportieren: true,
      offline_funktion: true, serverstandort_schweiz: false, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: true, app_android: true
    }
  },
  {
    id: '123erfasst_ch',
    name: '123erfasst',
    price: 'Auf Anfrage',
    paymentType: '(Abo)',
    rating: 4.5,
    reviews: 'Zeiterfassung',
    website: 'https://www.123erfasst.ch/',
    pricingUrl: 'https://www.123erfasst.ch/',
    description: "Führende App für mobile Zeiterfassung und Fotodokumentation. Mitarbeiter stempeln per Smartphone, Daten fliessen direkt ins Büro.",
    pros: ["Einfache Zeiterfassung", "GPS-Daten", "Ressourcenplanung"],
    cons: ["Oberfläche zweckmässig", "Abo-Kosten summieren sich"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: true, baujournal: true, kostenlose_testphase: true,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: false, ausmass_sia_118: false, ifa18_unterstuetzung: false,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: false, lohnmeldeverfahren_elm: false, maengelmanagement: true,
      digitale_visierung: true, bim_viewer: false, planverwaltung: false, subunternehmer_portal: false, mobiles_rapportieren: true,
      offline_funktion: true, serverstandort_schweiz: false, mehrsprachigkeit: true, zeiterfassung_gps: true, app_ios: true, app_android: true
    }
  },
  {
    id: 'trimble_nova',
    name: 'Trimble Nova',
    price: 'Auf Anfrage',
    paymentType: '(Lizenz)',
    rating: 4.6,
    reviews: 'Haustechnik',
    website: 'https://mep.trimble.ch/',
    pricingUrl: 'https://mep.trimble.ch/',
    description: "Die CAD/CAE-Lösung für Gebäudetechnik (HLKSE). Integriert Zeichnen und Berechnen nach Schweizer Normen in einem Workflow.",
    pros: ["Spezialisiert auf HLKSE", "Integrierte Berechnungen", "SIA Normen"],
    cons: ["Hohe Lernkurve", "Teuer"],
    features: {
      sia_konformitaet: true, npk_editor: true, regie_rapporte: false, baujournal: false, kostenlose_testphase: false,
      sia_451_schnittstelle: true, crb_zertifiziert: true, qr_rechnung: false, ausmass_sia_118: true, ifa18_unterstuetzung: true,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: false, lohnmeldeverfahren_elm: false, maengelmanagement: false,
      digitale_visierung: false, bim_viewer: true, planverwaltung: true, subunternehmer_portal: false, mobiles_rapportieren: false,
      offline_funktion: true, serverstandort_schweiz: false, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'selectline',
    name: 'SelectLine',
    price: 'Ab CHF 30',
    paymentType: '/Monat',
    rating: 4.3,
    reviews: 'Kaufmännisch',
    website: 'https://www.selectline.ch/',
    pricingUrl: 'https://www.selectline.ch/preise/',
    description: "Kaufmännische Software mit starkem Auftragswesen und Lohnbuchhaltung. Gut anpassbar an branchenspezifische Bedürfnisse.",
    pros: ["Sehr anpassbar", "Guter Schweizer Support", "Lohnbuchhaltung Top"],
    cons: ["Design etwas altbacken", "Keine Bauspezifika (NPK)"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: true, baujournal: false, kostenlose_testphase: true,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: true, ausmass_sia_118: false, ifa18_unterstuetzung: false,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: true, maengelmanagement: false,
      digitale_visierung: false, bim_viewer: false, planverwaltung: false, subunternehmer_portal: false, mobiles_rapportieren: false,
      offline_funktion: true, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'proles',
    name: 'Proles',
    price: 'Ab CHF 25',
    paymentType: '/Monat',
    rating: 4.4,
    reviews: 'Dienstleister',
    website: 'https://www.proles.ch/',
    pricingUrl: 'https://www.proles.ch/preise',
    description: "Cloud-Software für Projektverwaltung und Zeiterfassung. Beliebt bei Ingenieuren und Planern für die interne Stundenkontrolle.",
    pros: ["Reine Cloud-Lösung", "Einfache Zeiterfassung", "Günstig"],
    cons: ["Kein Bautagebuch", "Wenig Baufunktionen"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: true, baujournal: false, kostenlose_testphase: true,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: true, ausmass_sia_118: false, ifa18_unterstuetzung: false,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: false, maengelmanagement: false,
      digitale_visierung: false, bim_viewer: false, planverwaltung: false, subunternehmer_portal: false, mobiles_rapportieren: true,
      offline_funktion: false, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: true, app_android: true
    }
  },
  {
    id: 'fairwalter',
    name: 'Fairwalter',
    price: 'Ab CHF 15',
    paymentType: '/Einheit',
    rating: 4.5,
    reviews: 'Immo',
    website: 'https://fairwalter.ch/',
    pricingUrl: 'https://fairwalter.ch/preise',
    description: "Moderne Immobilienbewirtschaftung. Interessant für Bauherrenvertreter und Verwalter, die Sanierungen und Unterhalt digital managen.",
    pros: ["Sehr modern", "Automatisierte Prozesse", "Mieterportal"],
    cons: ["Fokus Verwaltung, nicht Bau", "Junges Produkt"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: true, baujournal: false, kostenlose_testphase: true,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: true, ausmass_sia_118: false, ifa18_unterstuetzung: false,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: false, maengelmanagement: true,
      digitale_visierung: false, bim_viewer: false, planverwaltung: true, subunternehmer_portal: true, mobiles_rapportieren: false,
      offline_funktion: false, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'immotop',
    name: 'ImmoTop',
    price: 'Auf Anfrage',
    paymentType: '(Lizenz)',
    rating: 4.6,
    reviews: 'Standard Immo',
    website: 'https://www.w-w.ch/',
    pricingUrl: 'https://www.w-w.ch/',
    description: "Der Standard für Liegenschaftsverwaltung in der Schweiz von W&W. Robust und deckt alle Aspekte der Bewirtschaftung ab.",
    pros: ["Marktstandard", "Enormer Funktionsumfang", "Stabil"],
    cons: ["Veraltetes Design", "Teuer"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: false, baujournal: false, kostenlose_testphase: false,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: true, ausmass_sia_118: false, ifa18_unterstuetzung: false,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: true, lohnmeldeverfahren_elm: false, maengelmanagement: true,
      digitale_visierung: false, bim_viewer: false, planverwaltung: true, subunternehmer_portal: false, mobiles_rapportieren: false,
      offline_funktion: true, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: false, app_android: false
    }
  },
  {
    id: 'swisssalary',
    name: 'SwissSalary',
    price: 'Auf Anfrage',
    paymentType: '(Abo)',
    rating: 4.8,
    reviews: 'Lohn',
    website: 'https://swisssalary.ch/',
    pricingUrl: 'https://swisssalary.ch/',
    description: "Die Lohnsoftware der Schweiz, basierend auf Microsoft Dynamics 365. Perfekt für Bauunternehmen mit komplexen GAV-Anforderungen.",
    pros: ["Swissdec 4.0", "GAV-konform", "Microsoft Integration"],
    cons: ["Nur Lohn", "Benötigt Dynamics Umfeld"],
    features: {
      sia_konformitaet: false, npk_editor: false, regie_rapporte: true, baujournal: false, kostenlose_testphase: true,
      sia_451_schnittstelle: false, crb_zertifiziert: false, qr_rechnung: false, ausmass_sia_118: false, ifa18_unterstuetzung: false,
      kbob_vertraege: false, waehrung_chf: true, mwst_abrechnung: false, lohnmeldeverfahren_elm: true, maengelmanagement: false,
      digitale_visierung: false, bim_viewer: false, planverwaltung: false, subunternehmer_portal: false, mobiles_rapportieren: true,
      offline_funktion: false, serverstandort_schweiz: true, mehrsprachigkeit: true, zeiterfassung_gps: false, app_ios: true, app_android: true
    }
  }
];
