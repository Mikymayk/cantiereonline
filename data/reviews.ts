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
  'fieldwire': {
    title: "Fieldwire: Recensione 2025. Il coordinamento cantiere come deve essere?",
    metaDescription: "Analisi di Fieldwire per l'Italia: gestione task, visualizzazione planimetrie e coordinamento squadre. Scopri se la versione Free basta per il tuo cantiere.",
    
    customPros: [
      "Visualizzatore planimetrie più veloce del mercato",
      "Versione GRATUITA reale per piccoli team",
      "Gestione Task (Kanban) eccellente per il coordinamento",
      "Reportistica As-Built automatizzata"
    ],
    
    customCons: [
      "Salto di prezzo notevole per le funzioni Business",
      "Meno focalizzato sulla burocrazia italiana (POS/PSC) rispetto ad altri",
      "Gestione documentale pura meno intuitiva della gestione task"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Fieldwire in Italia: Potenza Americana, Applicazione Locale</h2>
          <p>
            Acquisito dal colosso <strong>Hilti</strong>, Fieldwire si presenta come la soluzione definitiva per il "Jobsite Management". A differenza di altri software nati per la direzione lavori, Fieldwire nasce per chi "porta le scarpe antinfortunistiche": capicantiere, installatori e subappaltatori.
          </p>
          <p class="mt-4">
            In Italia, dove il coordinamento tra General Contractor e marea di subappaltatori è spesso caotico, Fieldwire porta ordine. Non è un semplice visualizzatore di PDF, ma un sistema operativo per il cantiere che brilla per la sua velocità e per la logica "a task" (compiti), fondamentale per rispettare i cronoprogrammi stretti del PNRR.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Per chi è consigliato?</h3>
          <p class="text-blue-800">
            È la scelta numero uno per le imprese esecutrici e gli impiantisti che devono gestire squadre sul campo. Se il tuo problema principale è "chi deve fare cosa e dove", Fieldwire batte quasi tutti.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Analisi dei Punti di Forza (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Il "Motore" Grafico: Velocità Imbattibile</h3>
            <p>
              Aprire un architettonico pesante o un costruttivo strutturale su un tablet economico può essere un incubo. Fieldwire ha un motore di rendering proprietario che rende lo zoom e la navigazione delle planimetrie istantanea. Per un capocantiere che deve consultare 50 tavole al giorno, questo risparmio di secondi si traduce in meno frustrazione e più efficienza.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Una Versione Free che Funziona Davvero</h3>
            <p>
              Fieldwire offre uno dei piani gratuiti più generosi del settore. Per piccoli studi o cantieri di ristrutturazione residenziale (fino a 5 utenti e 3 progetti), è possibile usare il software senza spendere un euro. Questo permette di testare la digitalizzazione senza rischi finanziari prima di scalare.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. As-Built e Versioning Automatico</h3>
            <p>
              In Italia la gestione delle varianti in corso d'opera è critica. Fieldwire sovrappone automaticamente le nuove versioni delle tavole alle vecchie, evidenziando le differenze (rosso/verde). A fine lavori, esportare l'As-Built completo con tutti i link ipertestuali e le foto allegate richiede un solo click, salvando settimane di lavoro in ufficio tecnico.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Cosa potrebbe mancarti (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Burocrazia Italiana "Fai da Te"</h3>
            <p>
              Mentre software italiani nascono con i moduli per il Giornale dei Lavori o i verbali CSE preimpostati secondo norma, Fieldwire è più "internazionale". I moduli sono personalizzabili, ma dovrai investire del tempo iniziale per creare i template conformi alla normativa italiana (D.Lgs 81/08).
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Costi per le funzioni avanzate</h3>
            <p>
              Il passaggio dal piano "Pro" al "Business" (necessario per report personalizzati e moduli avanzati) comporta un salto di prezzo significativo, che può pesare sui margini delle PMI edili.
            </p>
          </div>
        </section>

      </div>
    `
  },

  'melaworks': {
    title: "Mela Works: Recensione. L'alternativa legale a WhatsApp per il cantiere italiano?",
    metaDescription: "Mela Works trasforma le chat in Giornale dei Lavori e Verbali POS. Scopri perché è l'app preferita dai Direttori Lavori in Italia per semplicità e conformità.",
    
    customPros: [
      "Semplicità d'uso immediata (come WhatsApp)",
      "Generazione automatica Giornale dei Lavori e Verbali",
      "Foto certificate con Blockchain (Valore Legale)",
      "Prezzo accessibile e trasparente"
    ],
    
    customCons: [
      "Non adatto per la gestione complessa di planimetrie (CAD/BIM)",
      "Manca un diagramma di Gantt integrato",
      "Rischio 'caos' se non si organizzano bene le chat"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Mela Works: L'Intelligenza Italiana al servizio del Cantiere</h2>
          <p>
            Tutti in cantiere usano WhatsApp. Ma WhatsApp non ha valore legale, le foto si perdono nella galleria e le informazioni importanti spariscono nello scroll. <strong>Mela Works</strong> nasce da una premessa geniale: mantenere la semplicità della chat, ma renderla uno strumento professionale e conforme alla legge italiana.
          </p>
          <p class="mt-4">
            È lo strumento ideale per chi odia la tecnologia complicata. Se sai mandare un messaggio vocale, sai usare Mela. Ma dietro questa semplicità c'è un motore potente che tutela il Direttore dei Lavori, il CSE e l'Impresa.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Il "Killer Feature": La Contabilità in Chat</h3>
          <p class="text-blue-800">
            La vera magia di Mela è la capacità di contare le risorse. Scrivendo in chat "3 operai per 4 ore", Mela estrae i dati e compila automaticamente i rapportini di cantiere e la contabilità industriale.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Analisi dei Punti di Forza (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Dalla Chat al PDF Legale in un Click</h3>
            <p>
              Questa è la funzione che fa risparmiare i weekend ai Direttori Lavori. Mela permette di selezionare messaggi, foto e note vocali scambiati durante la settimana e trasformarli istantaneamente in un <strong>Verbale di Sopralluogo</strong> o nel <strong>Giornale dei Lavori</strong>, completo di logo e intestazione, pronto per la firma.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Valore Legale e Blockchain</h3>
            <p>
              In caso di contenzioso, una foto su WhatsApp è contestabile. Le foto scattate con Mela acquisiscono una marca temporale certa (Timestamp) e coordinate GPS certificate, spesso notarizzate su Blockchain. Questo offre una tutela formidabile in caso di contestazioni su vizi o difformità.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Curva di Apprendimento Zero</h3>
            <p>
              Introdurre un nuovo software in un'impresa edile incontra spesso la resistenza delle maestranze. Mela elimina il problema: l'interfaccia è familiare. Non serve formazione per iniziare a segnalare un rischio sicurezza o un avanzamento lavori.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Limiti da considerare (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Gestione Planimetrica Limitata</h3>
            <p>
              Mela non nasce per navigare complessi modelli BIM o tavole CAD pesanti. Sebbene si possano annotare foto e disegni, se la tua necessità primaria è la revisione progettuale su tavola, software come PlanRadar o Fieldwire sono superiori.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Rischio "Caos Chat"</h3>
            <p>
              Essendo basato su chat, se non si impostano regole chiare (es. un "gruppo" per ogni cantiere o macro-attività), le informazioni possono diventare difficili da recuperare a distanza di mesi, esattamente come succede nelle email.
            </p>
          </div>
        </section>

      </div>
    `
  }
};