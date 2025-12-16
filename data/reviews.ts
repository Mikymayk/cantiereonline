// data/reviews.ts

export interface ReviewData {
  title: string;
  metaDescription: string; // Per Google
  content: string; // HTML della recensione lunga
  customPros?: string[]; // Se vuoi pro diversi dalla scheda sintetica
  customCons?: string[]; // Se vuoi contro diversi dalla scheda sintetica
}

export const reviewsData: Record<string, ReviewData> = {
  'planradar': {
    title: "PlanRadar: Recensione Completa e Analisi Normativa 2025",
    metaDescription: "Analisi tecnica di PlanRadar per il mercato italiano: conformità Codice Appalti, gestione BIM e validità legale dei report. Scopri i 4 pro e i 3 contro.",
    
    // PRO specifici per la recensione approfondita
    customPros: [
      "Geolocalizzazione precisa su 2D e BIM (Valore legale)",
      "Reportistica personalizzabile 'a prova di ispezione'",
      "Viewer OpenBIM fluido anche su smartphone",
      "Operatività Offline reale per zone senza campo"
    ],
    
    // CONTRO specifici per la recensione approfondita
    customCons: [
      "Sincronizzazione lenta con migliaia di foto HD",
      "Prezzo d'ingresso alto per ditte individuali",
      "Filtri avanzati poco intuitivi per i non-tecnici"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Introduzione: Strategie Digitali per l'Edilizia Italiana 2025</h2>
          <p>
            In un contesto caratterizzato dalla transizione digitale imposta dal <strong>PNRR</strong> e dal <strong>Nuovo Codice degli Appalti (D.Lgs. 36/2023)</strong>, il settore delle costruzioni in Italia vive una fase di profonda ridefinizione. 
            Le imprese, storicamente legate a processi cartacei, devono oggi navigare tra obblighi BIM, normative sulla sicurezza sempre più stringenti (D.Lgs. 81/08) e la necessità di efficientare i processi.
          </p>
          <p class="mt-4">
            Questa analisi posiziona <strong>PlanRadar</strong> non solo come software, ma come partner strategico per la conformità normativa. Vediamo come si comporta realmente di fronte alle peculiarità del mercato italiano.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Il verdetto in sintesi</h3>
          <p class="text-blue-800">
            PlanRadar si conferma uno strumento potente per chi deve gestire la documentazione probatoria. Non è il software più economico, ma per un Direttore Lavori il costo si ripaga evitando una singola contestazione legale grazie alla precisione dei suoi report geolocalizzati.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Analisi dei 4 Punti di Forza (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Geolocalizzazione dei Ticket: La Fine dell'Ambiguità</h3>
            <p>
              A differenza di WhatsApp o Excel, PlanRadar obbliga a contestualizzare ogni informazione sulla planimetria. 
              Nel contesto legale italiano, questo ha un valore probatorio cruciale. Dimostrare esattamente dove è stata rilevata una non conformità (es. "infiltrazione angolo Nord-Est") elimina le ambiguità durante i SAL (Stato Avanzamento Lavori).
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Visualizzatore BIM "Democratico"</h3>
            <p>
              Con le soglie di obbligatorietà BIM del nuovo Codice Appalti (obbligatorio sopra i 2 milioni dal 2025), anche le medie imprese devono interagire con modelli 3D. 
              PlanRadar supporta nativamente gli standard <strong>OpenBIM (IFC, BCF)</strong> rendendo il modello accessibile da tablet senza costose licenze Revit.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Reportistica come Scudo Legale</h3>
            <p>
              PlanRadar eccelle nel generare Verbali di Sopralluogo e Giornale dei Lavori in PDF. 
              In caso di ispezione ASL, poter produrre in secondi un report con cronologia immutabile, timestamp e foto geolocalizzate costituisce una prova di "diligenza" fondamentale per il Coordinatore della Sicurezza.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">4. Operatività Offline Robusta</h3>
            <p>
              Molti cantieri italiani (tunnel, interrati) non hanno campo. PlanRadar scarica interi progetti e sincronizza i dati senza conflitti quando la rete torna disponibile, garantendo continuità operativa.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Analisi dei 3 Punti di Debolezza (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Sincronizzazione "Pesante"</h3>
            <p>
              Su progetti con migliaia di foto ad alta risoluzione, la sincronizzazione iniziale può essere lenta. È richiesta disciplina nella chiusura dei ticket obsoleti per non intasare la banda in cantiere.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Barriera di Prezzo</h3>
            <p>
              Con un piano base attorno ai 26€/mese, il costo può sembrare alto per una micro-impresa artigiana rispetto a soluzioni più semplici come MelaWorks, sebbene il ROI per le aziende strutturate sia immediato.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Curva di apprendimento</h3>
            <p>
              Il sistema di filtri avanzati è potente ma può risultare macchinoso per maestranze poco digitalizzate. Richiede un minimo di formazione iniziale per evitare che ticket importanti vengano nascosti da filtri errati.
            </p>
          </div>
        </section>

      </div>
    `
  }
  // Qui puoi aggiungere altri software in futuro:
  // 'fieldwire': { ... }
};