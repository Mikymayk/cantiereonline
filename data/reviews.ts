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
  },
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
  },
  'autodesk_build': { 
    title: "Autodesk Build: Recensione 2025. Lo standard obbligatorio per il BIM?",
    metaDescription: "Analisi di Autodesk Construction Cloud per il mercato italiano. È indispensabile per il Nuovo Codice Appalti? Pro, contro e gestione ACDat.",
    
    customPros: [
      "Integrazione Nativa con Revit (Zero perdita dati)",
      "ACDat (CDE) perfettamente conforme UNI 11337",
      "Gestione RFI e Submittals di livello enterprise",
      "Ecosistema unico dalla progettazione al cantiere"
    ],
    
    customCons: [
      "Curva di apprendimento molto ripida (Serve un BIM Manager)",
      "Modello di licensing costoso e complesso",
      "Eccessivo (Overkill) per cantieri residenziali o ristrutturazioni"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Autodesk Construction Cloud: Il "Sistema Operativo" dell'Edilizia</h2>
          <p>
            Parlare di BIM senza citare Autodesk è impossibile. Con l'evoluzione da BIM 360 a <strong>Autodesk Construction Cloud (ACC)</strong>, l'azienda ha creato l'ecosistema definitivo. 
            In Italia, con l'entrata in vigore del <strong>Nuovo Codice degli Appalti</strong> e l'obbligatorietà del BIM per opere sopra i 2 milioni di euro (dal 2025), Autodesk Build non è più solo un software, ma spesso un requisito di capitolato di fatto.
          </p>
          <p class="mt-4">
            Questa non è un'app per scattare due foto veloci. È una piattaforma strutturata per gestire il ciclo di vita dell'opera, garantendo che il modello progettato sia identico a quello costruito.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">ACDat e Normativa UNI 11337</h3>
          <p class="text-blue-800">
            Per i lavori pubblici italiani, Autodesk Docs (incluso in Build) funge da <strong>ACDat (Ambiente di Condivisione Dati)</strong>. La gestione dei permessi, delle versioni e dei flussi di approvazione è nativamente conforme agli standard richiesti dalle stazioni appaltanti italiane.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché le Grandi Imprese lo scelgono (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Il "Filo Diretto" con Revit</h3>
            <p>
              Qualsiasi altro software deve convertire i file in IFC, rischiando di perdere geometrie o dati. Autodesk Build legge nativamente i file <strong>Revit (.RVT)</strong>. Se il progettista sposta un muro in studio, il direttore lavori vede la modifica in tempo reale sul tablet in cantiere, senza conversioni o upload manuali. Questa "unica fonte di verità" elimina il rischio di costruire su tavole obsolete.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Gestione RFI e Schede Tecniche (Submittals)</h3>
            <p>
              Nei grandi appalti, la burocrazia tecnica blocca i lavori. Autodesk gestisce le <strong>RFI (Richieste di Informazioni)</strong> e le approvazioni dei materiali con flussi di lavoro strutturati. Puoi assegnare una domanda all'ingegnere strutturista, impostare una scadenza e tracciare l'intero iter di risposta. In caso di contenzioso, hai una prova inoppugnabile di chi ha autorizzato cosa.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Comparazione 2D/3D Avanzata</h3>
            <p>
              La funzione di sovrapposizione (Overlay) è la migliore del mercato. Puoi sovrapporre la pianta degli impianti 2D al modello 3D per capire immediatamente se quel tubo che stai montando andrà a sbattere contro una trave, prevenendo varianti costose.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché potrebbe non fare per te (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Complessità Elevata</h3>
            <p>
              Non si impara in un pomeriggio. Configurare correttamente i permessi, le cartelle e i flussi di lavoro richiede spesso una figura dedicata (BIM Manager o CDE Manager). Se cerchi uno strumento "scarica e usa" per una piccola squadra, Autodesk Build rischia di essere un freno burocratico piuttosto che un aiuto.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Costi e Licensing</h3>
            <p>
              Autodesk utilizza un modello di costo per utente o per fatturato che può diventare molto oneroso. A differenza di software dove paghi una licenza e inviti chi vuoi, qui ogni attore che deve interagire attivamente potrebbe richiedere una licenza ("Bring Your Own Subscription"), complicando la gestione economica coi subappaltatori.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'teamsystem_cpm': {
    title: "TeamSystem CPM: Recensione 2025. Il 'Notaio' tecnico del cantiere italiano.",
    metaDescription: "Analisi di TeamSystem CPM (ex STR Vision): il software definitivo per Computo Metrico, BIM 5D e Contabilità Lavori Pubblici. Indispensabile per le gare d'appalto.",
    
    customPros: [
      "Insuperabile su Computo e Prezzari Regionali",
      "BIM 5D: Costi estratti direttamente dal modello IFC/Revit",
      "Gestione perfetta della Contabilità Lavori Pubblici (SAL/SIL)",
      "Integrazione nativa con Cassa Edile (Congruità Manodopera)"
    ],
    
    customCons: [
      "Interfaccia densa e complessa (Richiede formazione)",
      "Eccessivo per piccole ristrutturazioni private",
      "Costo di licenza e manutenzione importante"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">TeamSystem CPM: Quando il gioco si fa duro (e burocratico)</h2>
          <p>
            Se Mela Works è la radio portatile e Autodesk Build è il centro di controllo della NASA, <strong>TeamSystem CPM</strong> (erede dello storico STR Vision) è il libro mastro del contabile. 
            In Italia, "fare un computo" è spesso sinonimo di usare questo software. È la spina dorsale tecnica per le imprese che lavorano con il <strong>Codice degli Appalti</strong> e necessitano di rigore assoluto nella preventivazione e nella contabilità.
          </p>
          <p class="mt-4">
            Non lo scegli perché è "cool" o facile da usare. Lo scegli perché quando devi presentare un SAL (Stato Avanzamento Lavori) alla Pubblica Amministrazione o calcolare la congruità della manodopera per non perdere i bonus fiscali, lui non sbaglia un centesimo.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Il Re del BIM 5D (Tempi e Costi)</h3>
          <p class="text-blue-800">
            La funzione "Quantity Take Off" è il vero motivo per cui gli studi di ingegneria lo amano. Carichi un modello BIM (IFC o Revit), trascini le regole di calcolo, e il software genera automaticamente il computo metrico. Se il progettista allunga un muro nel 3D, il preventivo si aggiorna da solo.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché è lo Standard Italiano (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Prezzari e Normativa nel DNA</h3>
            <p>
              Nessun software americano o tedesco gestisce i <strong>Prezzari Regionali</strong> e le analisi prezzi come CPM. La gestione dei ribassi, delle categorie di lavoro (OG1, OG11, ecc.) e la generazione automatica dei quadri economici per le gare d'appalto sono native. È pensato da italiani per la burocrazia italiana.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Contabilità Lavori "Blindata"</h3>
            <p>
              Gestire un appalto pubblico significa produrre Libretti delle Misure, Registri di Contabilità, Sommatorie e SAL. TeamSystem CPM genera questi documenti in formato ufficiale. In caso di contenzioso con la Direzione Lavori, avere una contabilità tenuta qui dentro è una polizza assicurativa.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Congruità Manodopera Integrata</h3>
            <p>
              Un tema caldo del 2025. CPM dialoga con i sistemi delle Casse Edili (CNCE_Edilconnect). Permette di monitorare in tempo reale se le ore lavorate sono congrue rispetto all'importo dei lavori, evitando il blocco dei pagamenti o delle detrazioni fiscali a fine cantiere.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Chi dovrebbe evitarlo (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Troppo complesso per piccoli lavori</h3>
            <p>
              Se devi ristrutturare un bagno o gestire la manutenzione di condomini, CPM è come usare un cannone per uccidere una mosca. La quantità di campi, opzioni e menu può paralizzare chi è abituato a fare preventivi veloci su Excel.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Costo e Manutenzione</h3>
            <p>
              È un investimento aziendale, non una spesa da carta di credito. Tra licenze, canoni di assistenza e formazione del personale, il costo è giustificato solo se gestisci commesse di un certo rilievo o appalti pubblici.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'acca_primus': {
    title: "PriMus Online (ACCA): Recensione 2025. Lo standard italiano si sposta sul Cloud.",
    metaDescription: "Analisi di PriMus usBIM: il software di computo metrico più usato in Italia ora è online. Vantaggi del Cloud, formato DCF e integrazione Prezzari. Vale l'abbonamento?",
    
    customPros: [
      "Standard Universale (Formato DCF usato da tutti)",
      "Accessibile da Browser (Mac, iPad, Windows) senza installazione",
      "Prezzari Regionali sempre aggiornati e gratuiti",
      "Collaborazione in tempo reale sullo stesso file"
    ],
    
    customCons: [
      "Interfaccia meno fluida rispetto alle app native moderne",
      "Dipendenza dalla connessione internet per la versione Online",
      "Modello di abbonamento SaaS obbligatorio"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">PriMus Online: Il Re del Computo scende dalla scrivania</h2>
          <p>
            In Italia, dire "Computo Metrico" significa dire <strong>PriMus</strong>. Per decenni è stato un software desktop potente ma vincolato a Windows. Con <strong>PriMus Online (integrato in usBIM)</strong>, ACCA ha fatto la mossa decisiva: portare lo standard nazionale sul browser.
          </p>
          <p class="mt-4">
            Questa rivoluzione significa che per la prima volta un architetto può fare un computo o una contabilità lavori direttamente da un <strong>Mac</strong> o da un iPad, senza dover installare Windows o usare macchine virtuali lente. Non è un "visualizzatore", è l'editor completo portato sul web.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Il potere del Formato DCF</h3>
          <p class="text-blue-800">
            Il vero vantaggio competitivo di PriMus non è solo il software, ma il file. Il formato <strong>.DCF</strong> è la "lingua franca" dell'edilizia italiana. Pubblica Amministrazione, imprese e progettisti si scambiano file DCF come si scambiano PDF. Usare PriMus garantisce che il tuo lavoro sarà leggibile da chiunque senza conversioni rischiose.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">I Vantaggi della versione Cloud (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Libertà Totale (Mac & Linux friendly)</h3>
            <p>
              Fino a ieri, gli studi "Apple-based" dovevano soffrire con Parallels o Boot Camp solo per usare PriMus. Con PriMus Online, basta aprire Chrome o Safari. L'interfaccia è stata riscritta per il web, mantenendo però la logica familiare di righe, misurazioni e vedi.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Prezzari Regionali Integrati</h3>
            <p>
              La banca dati di ACCA è immensa. Avere accesso immediato e gratuito ai prezzari di tutte le regioni e camere di commercio, aggiornati costantemente, fa risparmiare ore di ricerca. Nella versione online, il "Drag & Drop" dal prezzario al computo è immediato.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Collaborazione Real-Time</h3>
            <p>
              Più professionisti possono lavorare sullo stesso documento contemporaneamente. Mentre il geometra inserisce le misure delle tramezze, l'architetto può inserire le finiture. Una chat integrata permette di risolvere dubbi senza uscire dall'editor.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Cosa considerare (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Interfaccia "Classica"</h3>
            <p>
              Non aspettarti la fluidità di un'app Silicon Valley. PriMus Online replica fedelmente l'esperienza desktop: è denso di informazioni, griglie e menu. Per un neofita può disorientare, ma per chi usa PriMus da 20 anni è un sollievo ritrovare tutto al suo posto.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Dipendenza dalla Rete</h3>
            <p>
              Essendo un'applicazione browser-based, se cade la connessione in cantiere o in studio, ti fermi. Esiste una modalità desktop ibrida, ma la vera potenza di "usBIM" richiede di essere online. Per chi lavora in zone remote, questo è un fattore da valutare.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'dalux': {
    title: "Dalux: Recensione 2025. Il miglior BIM Viewer gratuito sul mercato?",
    metaDescription: "Analisi di Dalux: perché il suo visualizzatore BIM gratuito è lo standard per i cantieri italiani. Realtà aumentata, velocità su mobile e limiti della versione Free.",
    
    customPros: [
      "BIM Viewer GRATUITO per utenti illimitati (Il vero Game Changer)",
      "Motore grafico leggerissimo: apre file IFC enormi su smartphone",
      "Realtà Aumentata (AR) di livello superiore (TwinBIM)",
      "Facilità d'uso estrema per i subappaltatori"
    ],
    
    customCons: [
      "Per creare task e segnalazioni (Field) bisogna pagare",
      "Meno adattabile alla burocrazia italiana rispetto a Mela o Primus",
      "Reportistica standard un po' rigida"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Dalux: Il BIM democratico che mancava in Italia</h2>
          <p>
            Nel mondo del software edile, la parola "Gratis" nasconde quasi sempre una trappola: limitazioni di tempo, file piccoli o funzioni bloccate. <strong>Dalux</strong> è l'eccezione che conferma la regola. 
            L'azienda danese ha conquistato l'Europa con una strategia aggressiva: offrire il <strong>miglior visualizzatore BIM mobile del mondo in modo completamente gratuito</strong>.
          </p>
          <p class="mt-4">
            Per un cantiere italiano medio, dove il General Contractor usa Revit ma l'idraulico ha solo uno smartphone Android di fascia media, Dalux è la soluzione tecnica perfetta per colmare il divario digitale senza acquistare licenze per tutti.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Il "Segreto": Motore Grafico Proprietario</h3>
          <p class="text-blue-800">
            Molti visualizzatori BIM (anche costosi) faticano ad aprire file IFC pesanti su tablet. Dalux ha sviluppato un motore grafico che gestisce milioni di poligoni con una fluidità impressionante. Navigare un ospedale o un centro commerciale in 3D sul telefono è fluido come giocare a un videogioco.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché installarlo subito (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. BIM Viewer Gratuito per Davvero</h3>
            <p>
              Non è una prova di 30 giorni. Dalux permette di caricare modelli IFC/Revit e PDF e invitare <strong>utenti illimitati</strong> sul progetto gratuitamente. Il capocantiere, l'architetto e l'impiantista possono tutti accedere alle tavole aggiornate senza sborsare un euro. Paghi solo se vuoi usare le funzioni avanzate di "Field" (creare ticket, checklist, moduli).
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Realtà Aumentata (TwinBIM)</h3>
            <p>
              Dalux è leader indiscusso nell'AR. Puntando la fotocamera del tablet verso un muro grezzo, puoi vedere in sovrapposizione dove passeranno i tubi e le canaline del modello BIM. Questo permette di fare "Clash Detection" (verifica interferenze) direttamente in cantiere prima ancora di posare il primo mattone, riducendo errori costosi.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Semplicità Nordica</h3>
            <p>
              L'interfaccia è pulita, essenziale, intuitiva. Non serve un corso di formazione per insegnare a un elettricista come ruotare il modello 3D o cliccare su un oggetto per leggere le proprietà (scheda tecnica). Questa facilità di adozione è fondamentale nella frammentata realtà italiana.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Dove sta il trucco? (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Il muro del "Task Management"</h3>
            <p>
              Finché guardi, è gratis. Ma se vuoi mettere un "pin" sul modello per segnalare un difetto, assegnare un compito o compilare un modulo sicurezza, devi passare alla versione a pagamento (Dalux Field). È un modello Freemium onesto, ma bisogna esserne consapevoli.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Localizzazione Burocratica</h3>
            <p>
              Essendo un software internazionale, non nasce con i moduli del D.Lgs 81/08 o i modelli del Giornale dei Lavori italiani precaricati. Puoi crearli tu (il sistema di creazione moduli è potente), ma non è "pronto all'uso" per la normativa italiana come software locali (es. Mela o Blumatica).
            </p>
          </div>
        </section>

      </div>
    `
  },
  'blumatica': {
    title: "Blumatica: Recensione 2025. Il software tecnico 'Low Cost' per eccellenza.",
    metaDescription: "Analisi di Blumatica: leader italiano per Sicurezza Cantieri (POS/PSC) e Certificazione Energetica. Perché i geometri lo preferiscono per il rapporto qualità/prezzo.",
    
    customPros: [
      "Imbattibile sulla Sicurezza Cantieri (POS/PSC/Fascicolo)",
      "Costo accessibile e modulare (Paghi solo quello che serve)",
      "Blumatica Pitagora (Computo) è GRATIS e potente",
      "Assistenza tecnica rapida e in italiano"
    ],
    
    customCons: [
      "Interfaccia 'Old School' (stile Windows anni 2000)",
      "Solo per Windows (Mac richiede Parallels)",
      "Frammentazione: troppi moduli separati da installare"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Blumatica: Il "Coltellino Svizzero" del Tecnico Italiano</h2>
          <p>
            Se entrate nello studio di un geometra o di un ingegnere libero professionista in Italia, è molto probabile che troviate un'icona di <strong>Blumatica</strong> sul desktop. 
            A differenza dei giganti internazionali che impongono canoni mensili costosi, Blumatica ha conquistato il mercato con una filosofia diversa: software solidi, normativamente ineccepibili e dal costo contenuto.
          </p>
          <p class="mt-4">
            Non è il software che scegli per fare rendering da film di fantascienza. È il software che scegli quando devi redigere un <strong>POS (Piano Operativo di Sicurezza)</strong> blindato o un'APE (Attestato Prestazione Energetica) senza impazzire tra le leggi.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Il Re della Sicurezza (D.Lgs 81/08)</h3>
          <p class="text-blue-800">
            Il modulo <strong>Blumatica Sicurezza Cantieri</strong> è lo standard di riferimento per Coordinatori (CSE/CSP). La forza sta nella banca dati dei rischi: il software ti guida nella valutazione rischio per rischio, generando PSC e POS che non sono semplici "copia-incolla", ma documenti tecnici veri che reggono in caso di ispezione.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">I Punti di Forza (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Prezzo e Licenze</h3>
            <p>
              Blumatica evita spesso le trappole degli abbonamenti "SaaS" obbligatori. Molti moduli si acquistano con licenza a vita o con canoni di manutenzione annuali molto bassi. Per un piccolo studio che deve tenere sotto controllo i costi fissi, questo modello economico è ossigeno puro.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Blumatica Pitagora (Computo Gratis)</h3>
            <p>
              È la porta d'ingresso al mondo Blumatica. Pitagora è un software di computo metrico e contabilità <strong>completamente gratuito</strong> che compete ad armi pari con software a pagamento (come Primus). Permette di usare i prezzari e fare contabilità base a costo zero. Una strategia di marketing geniale che ha fidelizzato migliaia di tecnici.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Aggiornamenti Normativi Lampo</h3>
            <p>
              Esce un nuovo decreto sul Superbonus? Cambia la norma sulla trasmittanza termica? Il team di Blumatica rilascia l'aggiornamento in tempi record. La loro forza è essere al 100% focalizzati sulla burocrazia italiana.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">I Limiti (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Interfaccia "Vintage"</h3>
            <p>
              Aprire Blumatica è un tuffo nel passato. L'interfaccia è densa, piena di icone piccole e menu a tendina stile Office 2010. Funziona tutto, ma l'esperienza utente (UX) è lontana anni luce dalla fluidità moderna di un PlanRadar o Mela Works.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Ecosistema Windows-centrico</h3>
            <p>
              Se usi un Mac, preparati a installare Windows (via Parallels o simili). Blumatica è sviluppato in ambiente Microsoft .NET e non esiste una versione nativa per Apple. Questo taglia fuori una fetta crescente di architetti "Mac-users".
            </p>
          </div>
        </section>

      </div>
    `
  },
  'euclide_geo': {
    title: "Euclide (Geo Network): Recensione 2025. La cassetta degli attrezzi del Geometra.",
    metaDescription: "Analisi di Euclide Sicurezza e Computo: perché è il software di riferimento per i Geometri italiani. Focus su POS, PSC, Tabelle Millesimali e pratiche successorie.",
    
    customPros: [
      "Procedura guidata 'a prova di errore' per la Sicurezza (PSC/POS)",
      "Specializzazione estrema (Successioni, Millesimi, Catasto)",
      "Assistenza tecnica qualificata e diretta",
      "Formule di acquisto flessibili (spesso senza canone obbligatorio)"
    ],
    
    customCons: [
      "Interfaccia grafica datata (Stile Windows XP/7)",
      "Scarsa integrazione Cloud/Mobile rispetto ai competitor",
      "Eccessiva frammentazione dei moduli"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Euclide: La certezza normativa per il Geometra Italiano</h2>
          <p>
            Mentre il mondo rincorre il BIM e il Cloud, <strong>Geo Network (con la suite Euclide)</strong> è rimasta il punto fermo per il professionista concreto che deve sbrigare pratiche quotidiane. 
            Se sei un Geometra che si divide tra catasto, sicurezza cantieri e amministrazione condominiale, Euclide è probabilmente il software che "parla la tua lingua" meglio di chiunque altro.
          </p>
          <p class="mt-4">
            Non è il software per le archistar che progettano grattacieli a Dubai. È il software per il tecnico che deve ristrutturare un condominio in centro o redigere una successione complessa senza rischiare sanzioni.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Sicurezza Cantieri: Una guida, non solo un editor</h3>
          <p class="text-blue-800">
            Il modulo <strong>Euclide Sicurezza</strong> è famoso per il suo approccio "wizard" (guidato). Invece di lasciarti davanti a un foglio bianco, il software ti accompagna passo dopo passo nella scelta delle fasi lavorative, suggerendo automaticamente i rischi e i DPI (Dispositivi di Protezione Individuale) correlati. Per un CSE che vuole dormire sonni tranquilli, è una garanzia.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché sceglierlo (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. La "Bibbia" delle Pratiche Tecniche</h3>
            <p>
              Oltre al cantiere, Euclide eccelle nelle nicchie burocratiche italiane. I moduli per le <strong>Tabelle Millesimali</strong> e le <strong>Successioni</strong> sono considerati i migliori del mercato per precisione e aggiornamento normativo. Se il tuo studio vive di queste pratiche, Euclide si ripaga da solo in un mese.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Assistenza "Umana"</h3>
            <p>
              Un punto di forza spesso citato dagli utenti è il supporto tecnico. A differenza di multinazionali dove risponde un bot o un call center estero, in Geo Network trovi spesso tecnici che capiscono la normativa italiana e sanno risolvere il problema specifico della tua pratica.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Word Processor Integrato Intelligente</h3>
            <p>
              I documenti generati (POS, PSC, PIMUS) sono modificabili con un editor interno molto potente che mantiene i collegamenti dinamici. Se cambi un dato anagrafico all'inizio, si aggiorna in tutto il documento di 100 pagine. Sembra banale, ma fa risparmiare ore di revisione.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Dove perde terreno (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Look & Feel "Vintage"</h3>
            <p>
              L'interfaccia grafica è ferma a qualche anno fa. Molte finestre, icone piccole, menu densi. Non ha la pulizia visiva delle moderne app web. Richiede un monitor grande e un mouse preciso; non è pensato per essere usato comodamente su un tablet touch in cantiere.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Digitalizzazione e Cloud</h3>
            <p>
              Mentre i competitor spingono su app mobili per fare i verbali dal telefono (vedi Mela o PlanRadar), Euclide rimane un software prettamente da ufficio/desktop. Se la tua esigenza è la mobilità estrema, potresti sentirne i limiti.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'edilgo': {
    title: "EdilGo: Recensione 2025. L'ufficio acquisti diventa automatico?",
    metaDescription: "Analisi di EdilGo: la piattaforma che trasforma il Computo Metrico in richieste d'offerta (RDO) automatiche. Come funziona l'IA per trovare fornitori edili.",
    
    customPros: [
      "Trasforma il Computo (XPWE/DCF) in RDO in pochi click",
      "Matching con l'IA: trova fornitori nella zona automaticamente",
      "Quadro Comparativo offerte generato in automatico",
      "Network immenso di fornitori verificati"
    ],
    
    customCons: [
      "È verticale sugli Acquisti (Non fa direzione lavori o sicurezza)",
      "Richiede che i fornitori rispondano tramite la piattaforma",
      "Modello di business da valutare per volumi piccoli"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">EdilGo: L'anello mancante tra Computo e Cantiere</h2>
          <p>
            Tra il momento in cui si finisce il Computo Metrico e il momento in cui il materiale arriva in cantiere, c'è un "buco nero" fatto di telefonate, email perse, file Excel per confrontare prezzi e ricerca disperata di fornitori disponibili. 
            <strong>EdilGo</strong> riempie questo vuoto digitalizzando l'intero processo di approvvigionamento (E-Procurement).
          </p>
          <p class="mt-4">
            Non è un gestionale di cantiere classico. È un acceleratore per l'Ufficio Acquisti. Promette di ridurre del 70% il tempo speso a inviare Richieste di Offerta (RDO).
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">La "Magia": Dal Computo all'Ordine</h3>
          <p class="text-blue-800">
            La funzione killer di EdilGo è l'importazione. Carichi il tuo file di computo (da Primus, TeamSystem o Excel) e l'Intelligenza Artificiale "legge" le voci. Riconosce che "cls C25/30" è calcestruzzo e "laterizio forato" è un mattone, e invia automaticamente le richieste ai fornitori pertinenti nella zona del cantiere.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché le Imprese lo stanno adottando (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Quadro Comparativo Automatico</h3>
            <p>
              Chiunque abbia lavorato negli acquisti sa quanto è noioso prendere 5 preventivi PDF diversi e ricopiare i prezzi in un Excel per confrontarli. EdilGo lo fa da solo: quando i fornitori rispondono, il software allinea i prezzi in una tabella "mele con mele", evidenziando subito l'offerta migliore o le voci mancanti.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Ampliamento del Parco Fornitori</h3>
            <p>
              Spesso le imprese si affidano ai soliti 3 fornitori per abitudine, perdendo opportunità di risparmio. EdilGo ti mette in contatto con un network nazionale. Se lavori in una città che non conosci, il sistema ti suggerisce chi vende il materiale lì vicino, salvandoti ore di ricerca su Google.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Tracciabilità Totale</h3>
            <p>
              Tutto lo storico delle trattative, delle domande tecniche e delle revisioni d'offerta rimane salvato sulla piattaforma. Niente più "ti avevo detto al telefono che costava 10". La trasparenza protegge sia l'impresa che il fornitore.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Limiti da conoscere (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Verticalità Estrema</h3>
            <p>
              EdilGo fa una cosa sola e la fa bene: gli acquisti. Non aspettarti di farci il Giornale dei Lavori, il POS o la contabilità di cantiere. Va affiancato ad altri software (come Mela o Primus), non li sostituisce.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Resistenza dei Fornitori "Vecchia Scuola"</h3>
            <p>
              Sebbene la piattaforma sia semplice, alcuni fornitori molto tradizionali potrebbero preferire ancora inviarti il preventivo via WhatsApp o fax, rifiutandosi di inserire i prezzi nel portale. In quel caso, dovrai inserire i dati manualmente, perdendo parte dell'automatismo.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'openspace': {
    title: "OpenSpace: Recensione 2025. La 'Macchina del Tempo' per il cantiere.",
    metaDescription: "Analisi di OpenSpace: come l'Intelligenza Artificiale mappa automaticamente le foto 360. Ideale per BIM Compare, SAL certificati e documentazione passiva.",
    
    customPros: [
      "Documentazione Passiva: Basta camminare, l'AI fa tutto il resto",
      "BIM Compare più fluido del mercato (Realtà vs Modello)",
      "Vision Engine: Mappa automaticamente il percorso sulla planimetria",
      "Funzione 'Macchina del Tempo' indispensabile per contestazioni"
    ],
    
    customCons: [
      "Richiede hardware specifico (Telecamera 360° come Insta360 o Ricoh)",
      "Costo d'ingresso elevato (pensato per medi/grandi cantieri)",
      "Meno funzioni di 'Task Management' puro rispetto a Fieldwire"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">OpenSpace: Google Street View entra nel tuo cantiere</h2>
          <p>
            Se gli altri software richiedono di fermarsi, scattare una foto e caricarla, <strong>OpenSpace</strong> cambia paradigma. Tu cammini, lui lavora. 
            Montando una videocamera 360° sul caschetto, il software registra tutto ciò che vedi e, grazie a un potente motore di Intelligenza Artificiale (Vision Engine), mappa automaticamente il tuo percorso sulla planimetria 2D.
          </p>
          <p class="mt-4">
            In Italia, dove la documentazione fotografica per i <strong>SAL (Stati Avanzamento Lavori)</strong> è spesso un onere burocratico pesante, OpenSpace permette di documentare 10.000 mq in 20 minuti di passeggiata, creando un archivio inoppugnabile dello stato dei luoghi.
          </p>
        </section>

        

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">BIM Compare: La prova del nove</h3>
          <p class="text-blue-800">
            La funzione killer per i cantieri BIM. OpenSpace sovrappone la realtà (foto 360) al modello BIM (Revit/Navisworks). Il Direttore Lavori può vedere sullo split-screen: a sinistra cosa è stato costruito, a destra cosa doveva essere costruito. Le discrepanze impiantistiche saltano all'occhio immediatamente, prevenendo demolizioni costose.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché è unico nel suo genere (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Velocità di Documentazione Estrema</h3>
            <p>
              Non devi "geolocalizzare" nulla manualmente. L'algoritmo riconosce i muri e le colonne e capisce dove sei. Per un General Contractor che gestisce ospedali o grandi complessi residenziali, il risparmio di ore-uomo per il report fotografico è calcolato in centinaia di ore l'anno.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. La "Macchina del Tempo"</h3>
            <p>
              Cliccando su un punto qualsiasi della planimetria, puoi vedere lo storico di quel punto nel tempo. Com'era quel muro prima dell'intonaco? C'erano le tracce elettriche? Questa funzione ha salvato innumerevoli imprese da contestazioni su impianti coperti ("vizi occulti"), fornendo la prova fotografica certa.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. OpenSpace Track (Avanzamento Automatico)</h3>
            <p>
              Le versioni più avanzate usano l'AI per riconoscere i materiali. Il software può dirti: "Oggi hai completato il 40% del cartongesso". Non è una stima a occhio, è un calcolo basato sull'analisi visiva delle riprese, perfetto per validare i pagamenti ai subappaltatori.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">I freni all'adozione (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Barriera Hardware e Costo</h3>
            <p>
              Devi comprare una videocamera 360 (es. Insta360 o Ricoh Theta) e il software ha un costo di licenza importante, spesso basato sul volume dell'opera. Non è pensato per la ristrutturazione del singolo appartamento, ma per cantieri dove il coordinamento è critico.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Specializzazione Verticale</h3>
            <p>
              OpenSpace fa una cosa (documentazione visiva) e la fa meglio di chiunque altro. Ma non sostituisce un gestionale completo per la contabilità o la sicurezza (come TeamSystem o Blumatica). Va visto come un "super-add-on" tecnico.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'smartsheet': {
    title: "Smartsheet: Recensione 2025. Excel è morto, viva Smartsheet?",
    metaDescription: "Analisi di Smartsheet per l'edilizia: perché sostituire Excel con questa piattaforma? Gantt, automazioni e dashboard per chi vuole costruire il proprio gestionale su misura.",
    
    customPros: [
      "Flessibilità estrema: costruisci il TUO gestionale su misura",
      "Diagrammi di Gantt potenti e facili da condividere",
      "Automazioni (Workflow) che eliminano le email manuali",
      "Integrazione perfetta con Office 365, Google e DocuSign"
    ],
    
    customCons: [
      "Non è 'Nativo Edile' (niente moduli POS/PSC o computi italiani)",
      "Richiede tempo per configurare i fogli da zero (o usare template)",
      "Costo per utente può salire se inviti molti collaboratori interni"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Smartsheet: Il foglio di calcolo con i superpoteri</h2>
          <p>
            Molte imprese edili italiane vivono ancora su Excel. Cronoprogrammi, liste fornitori, budget di commessa: tutto è su fogli di calcolo disconnessi. <strong>Smartsheet</strong> prende l'interfaccia familiare di Excel e la trasforma in un vero software di Project Management.
          </p>
          <p class="mt-4">
            Non è un software "chiuso" dove ti devi adattare a come lavorano loro. In Smartsheet sei tu a definire le colonne, le regole e le viste. È lo strumento ideale per il Project Manager che vuole avere il controllo totale sui dati senza imparare a programmare.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Gantt e Cronoprogrammi Collaborativi</h3>
          <p class="text-blue-800">
            A differenza di MS Project, che spesso è un file statico sul PC di una sola persona, il Gantt di Smartsheet è online e collaborativo. Puoi condividere una vista "sola lettura" con il committente e una vista "editabile" con il capocantiere. Se una data cambia, le dipendenze si aggiornano per tutti in tempo reale.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché abbandonare Excel per Smartsheet (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Automazioni "Se succede questo, fai quello"</h3>
            <p>
              Questa è la vera rivoluzione. Puoi impostare regole come: "Quando la colonna 'Stato' diventa 'Completato', invia una email al Direttore Lavori". Oppure: "Se la data di fine supera il 30 Maggio, colora la riga di rosso e avvisa il Project Manager". Risparmi ore di email e telefonate di allineamento.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Moduli di Raccolta Dati (Forms)</h3>
            <p>
              Invece di mandare un file Excel ai fornitori o agli operai, crei un "Form" (tipo Google Forms) collegato al foglio. Loro compilano dal cellulare (es. "Rapportino giornaliero" o "Richiesta Materiale") e i dati finiscono ordinatamente nelle righe del tuo foglio master. Niente più copia-incolla manuale.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Dashboard Esecutive</h3>
            <p>
              Puoi aggregare i dati da 10 cantieri diversi in un'unica Dashboard. Il titolare dell'impresa vede a colpo d'occhio il budget speso vs preventivato di tutte le commesse, senza dover aprire 10 file diversi.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">I limiti per l'edilizia (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Manca la verticalità "Edile"</h3>
            <p>
              Smartsheet è generalista. Non sa cosa sia un SAL, un POS o un computo metrico. Devi costruirti tu le colonne e le formule per gestirli. Se cerchi un software che abbia già i moduli della legge italiana precaricati, guarda altrove (es. Blumatica o Mela).
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Niente BIM o Planimetrie Avanzate</h3>
            <p>
              Non puoi caricare un modello 3D o navigare una planimetria con i pin (come in PlanRadar). Puoi allegare file alle righe, ma non è uno strumento di visualizzazione grafica. Per la gestione tecnica del cantiere (difetti, ispezioni visive) è limitato.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'oracle_primavera': {
    title: "Oracle Primavera P6: Recensione 2025. Il Re indiscusso delle Grandi Opere.",
    metaDescription: "Analisi di Primavera P6: perché è obbligatorio per infrastrutture e PNRR? Il software di pianificazione (CPM) più potente e complesso al mondo.",
    
    customPros: [
      "Standard Obbligatorio per Grandi Appalti (Eni, Italferr, ecc.)",
      "Motore di calcolo CPM (Percorso Critico) infallibile",
      "Gestione risorse e costi su migliaia di attività",
      "Analisi dei rischi e scenari 'What-If' avanzati"
    ],
    
    customCons: [
      "Interfaccia ostica e datata (Curva di apprendimento ripida)",
      "Costo di licenza molto elevato",
      "Eccessivo (e inutile) per cantieri residenziali standard"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Oracle Primavera P6: Quando il ritardo costa milioni</h2>
          <p>
            Se stai ristrutturando una villetta, usa Excel o Project. Ma se stai costruendo un viadotto, una raffineria o una linea ferroviaria del <strong>PNRR</strong>, esiste un solo nome: <strong>Oracle Primavera P6</strong>.
          </p>
          <p class="mt-4">
            È il software di <strong>Project Portfolio Management (PPM)</strong> più utilizzato al mondo per progetti ad alta complessità. In Italia, stazioni appaltanti come Eni, Saipem, Italferr o Autostrade richiedono spesso che il cronoprogramma sia consegnato in formato nativo Primavera (.xer). Non è una scelta, è un requisito contrattuale.
          </p>
        </section>

        

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Il "Percorso Critico" Perfetto</h3>
          <p class="text-blue-800">
            La forza di Primavera sta nel suo motore di calcolo matematico. Gestisce il <strong>CPM (Critical Path Method)</strong> meglio di chiunque altro. Quando hai 20.000 attività collegate tra loro, capire quale ritardo sposterà la data di fine lavori è vitale per evitare penali milionarie.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché è insostituibile (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Scalabilità Mostruosa</h3>
            <p>
              Microsoft Project inizia a rallentare o a sbagliare i calcoli quando le righe diventano troppe. Primavera P6 gestisce progetti con <strong>100.000+ attività</strong> senza battere ciglio. Permette a più pianificatori di lavorare sullo stesso progetto contemporaneamente, gestendo sottoprogetti complessi (WBS) con una gerarchia rigorosa.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Gestione Risorse e Livellamento</h3>
            <p>
              Non pianifica solo il tempo, ma anche le risorse (uomini e mezzi). La funzione di "Resource Leveling" è potentissima: se hai solo 3 gru disponibili e il cronoprogramma ne richiede 4 in sovrapposizione, Primavera ti dice esattamente come spostare le attività per non fermare il cantiere, ottimizzando i costi.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. La Baseline (La prova legale)</h3>
            <p>
              In caso di contenzioso (Claims), Primavera è il giudice. La sua capacità di congelare la "Baseline" (il piano originale) e confrontarla con l'avanzamento reale permette di dimostrare in tribunale esattamente di chi è la colpa del ritardo (se dell'impresa o del committente).
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché potresti odiarlo (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Esperienza Utente "Anni '90"</h3>
            <p>
              L'interfaccia (specialmente nella versione Client Professional) è grigia, fitta e complessa. Sembra un software di 20 anni fa. Non c'è nulla di intuitivo: ogni azione richiede click precisi e conoscenza profonda dei menu.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Serve un "Planner" dedicato</h3>
            <p>
              Non puoi dare Primavera in mano al geometra di cantiere e sperare che lo usi nei ritagli di tempo. Serve una figura professionale specifica (il Project Planner o Scheduler) che fa solo quello di mestiere. La curva di apprendimento è ripidissima.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'namirial_regolo': {
    title: "Namirial Regolo: Recensione 2025. L'alternativa solida per il Computo e il BIM.",
    metaDescription: "Analisi di Namirial Regolo: il software di computo e contabilità lavori che sfida i giganti. Integrazione perfetta con Archicad e gestione lavori pubblici.",
    
    customPros: [
      "Plugin diretto per ArchiCAD (Live Connection) eccellente",
      "Interfaccia 'Drag & Drop' molto intuitiva per i computi",
      "Prezzo competitivo rispetto a ACCA e TeamSystem",
      "Gestione completa Lavori Pubblici (Libretti, SAL, Varianti)"
    ],
    
    customCons: [
      "Meno diffuso dello standard .DCF (scambio dati a volte macchinoso)",
      "Interfaccia desktop classica (non web-based come i nuovi trend)",
      "Assistenza tecnica a volte lenta nei periodi di picco"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Namirial Regolo: Il Computo Metrico senza fronzoli</h2>
          <p>
            In un mercato dominato dai "soliti noti", <strong>Namirial Regolo</strong> si è ritagliato una fetta importante di fedelissimi. Perché? Perché fa quello che deve fare senza complicare la vita.
            È un software di computo e contabilità lavori robusto, nato per rispondere alle esigenze concrete del geometra e dell'architetto italiano che deve gestire appalti pubblici e privati.
          </p>
          <p class="mt-4">
            Se usi <strong>Archicad</strong>, questo potrebbe essere il tuo "Game Changer". L'integrazione tra il modello BIM di Graphisoft e il preventivo di Regolo è considerata da molti superiore persino a soluzioni più blasonate, grazie a un plugin dedicato che mantiene il collegamento bidirezionale.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Drag & Drop: La semplicità al potere</h3>
          <p class="text-blue-800">
            A differenza di software che richiedono mille click per inserire una voce, Regolo ha puntato tutto sull'usabilità. Trascinare una voce dal prezzario al computo, copiare un blocco di misurazioni da un vecchio progetto o spostare un capitolo è immediato. Sembra di lavorare su un foglio di carta intelligente.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">I Punti di Forza (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Integrazione BIM (Speciale Archicad)</h3>
            <p>
              Mentre altri software importano solo file IFC "morti", Regolo dialoga attivamente con il modello. Se sposti un muro in Archicad, il computo in Regolo si aggiorna. Questo automatismo (Quantity Take Off) riduce a zero gli errori di distrazione durante le varianti in corso d'opera.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Contabilità Lavori Pubblici Completa</h3>
            <p>
              Non manca nulla: Libretti delle Misure, Registri di Contabilità, Sommatorie, SAL e Certificati di Pagamento. Il software gestisce nativamente le Varianti in corso d'opera (Perizie) con la stessa logica rigorosa richiesta dal Codice degli Appalti. È uno strumento sicuro per il Direttore Lavori.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Costo Accessibile</h3>
            <p>
              Namirial ha spesso politiche di prezzo aggressive, offrendo suite complete (Sicurezza + Computo + Antincendio) a costi inferiori rispetto alla somma dei singoli moduli dei competitor. Per uno studio che parte da zero, il risparmio è tangibile.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Dove può migliorare (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Lo Standard DCF è altrove</h3>
            <p>
              Anche se Regolo esporta in molti formati, il formato nativo di interscambio in Italia resta il .DCF di ACCA. Quando collabori con studi che usano altri software, potresti dover fare qualche passaggio di conversione in più (es. via XPWE) per non perdere la formattazione.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Assistenza</h3>
            <p>
              Alcuni utenti segnalano tempi di attesa lunghi per l'assistenza tecnica, specialmente tramite ticket. Non è un problema costante, ma nei periodi di scadenza fiscale o normativa può diventare frustrante.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'procore': {
    title: "Procore: Recensione 2025. Il gigante americano che vuole cambiare l'Italia.",
    metaDescription: "Analisi di Procore: perché è il software n.1 al mondo? Modello utenti illimitati, gestione finanziaria e integrazioni. Vale il costo elevato per le imprese italiane?",
    
    customPros: [
      "Utenti ILLIMITATI (Paghi a volume d'affari, non a licenza)",
      "Interfaccia Mobile e Web di livello superiore (UX eccellente)",
      "App Marketplace immenso (si collega a tutto, da Zoom a droni)",
      "Gestione Finanziaria e Budget di commessa in tempo reale"
    ],
    
    customCons: [
      "Costoso: Modello di pricing basato sul valore dell'opera",
      "Nato per gli USA: Richiede adattamento per la normativa italiana (SAL/POS)",
      "Eccessivo (Overkill) per le piccole e medie imprese"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Procore: L'iPhone dei gestionali edili</h2>
          <p>
            Se chiedete a un Project Manager di New York o Londra quale software usa, vi risponderà <strong>Procore</strong>. È il leader globale indiscusso, una piattaforma cloud che gestisce tutto: dal disegno alla contabilità, dalla sicurezza alla qualità.
          </p>
          <p class="mt-4">
            In Italia sta entrando prepotentemente nei grandi cantieri privati e nelle multinazionali. La sua filosofia è opposta a quella tradizionale: non vendono licenze. Vendono una piattaforma dove <strong>tutti possono entrare gratis</strong>. L'impresa paga una percentuale sul valore dei lavori, e poi può invitare architetti, idraulici, committenti e fornitori senza limiti.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">La rivoluzione degli "Utenti Illimitati"</h3>
          <p class="text-blue-800">
            Il problema storico dei software edili è: "Non ho invitato il subappaltatore sulla piattaforma perché la licenza costa troppo". Procore elimina il problema alla radice. Vuoi invitare l'elettricista solo per fargli vedere una planimetria? Fallo. Vuoi invitare il cliente? Fallo. La collaborazione esplode perché non ci sono barriere economiche all'ingresso di nuovi attori.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché è considerato il Top (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Ecosistema e App Marketplace</h3>
            <p>
              Procore non vuole fare tutto da solo, ma vuole essere il centro di tutto. Ha un "App Store" interno dove puoi collegare centinaia di altre app. Usi DocuSign per le firme? Si collega. Usi OpenSpace per le foto 360? Si integra. Usi Zoom? È dentro. Nessun altro software ha questa capacità di integrazione.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Gestione Finanziaria di Commessa</h3>
            <p>
              Per i General Contractor, il modulo "Financials" è oro. Collega i costi di cantiere (RDO, ordini, contratti) direttamente al budget. Il Project Manager vede in tempo reale se sta sforando il budget, senza aspettare che l'amministrazione chiuda il bilancio a fine mese.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Usabilità (User Experience)</h3>
            <p>
              È bello da usare. Sembra banale, ma in un settore abituato a software grigi e macchinosi, Procore è fluido, veloce e intuitivo come un'app consumer (tipo Facebook o Airbnb). Questo riduce drasticamente i tempi di formazione per le squadre in campo.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">I nodi per il mercato italiano (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Localizzazione Normativa</h3>
            <p>
              Procore parla "americano". I concetti di "RFI", "Submittals" e "Punch List" sono standard internazionali, ma non coincidono perfettamente con il nostro Giornale dei Lavori ufficiale, i SAL vidimati o il PSC. Usarlo in un Appalto Pubblico italiano richiede una configurazione iniziale importante per adattare la terminologia e i flussi alla nostra burocrazia.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Il Prezzo</h3>
            <p>
              Non c'è un listino pubblico, ma si parla di migliaia (o decine di migliaia) di euro l'anno. Il prezzo scala col fatturato dell'azienda. Per una PMI che fa piccoli lavori, è quasi sempre fuori budget. È uno strumento per chi gestisce milioni, non migliaia.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'monday_com': {
    title: "Monday.com: Recensione 2025. Il cantiere colorato e automatizzato.",
    metaDescription: "Analisi di Monday.com per l'edilizia: da gestione task a cronoprogramma lavori. Vantaggi delle automazioni e limiti rispetto ai software verticali.",
    
    customPros: [
      "Flessibilità totale: costruisci il flusso di lavoro come vuoi",
      "Automazioni potenti (No-Code) per notifiche e scadenze",
      "Visualizzazione Gantt e Timeline esteticamente eccellente",
      "Facilissimo da imparare per chi viene da Excel"
    ],
    
    customCons: [
      "Non è un software tecnico (Niente BIM nativo o Computo)",
      "App mobile meno potente per il lavoro su planimetria",
      "Il costo sale rapidamente con le funzionalità avanzate"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Monday.com: I mattoncini LEGO digitali per la tua impresa</h2>
          <p>
            Immagina un Excel che ha preso vita, è diventato colorato e ha imparato a mandare email da solo. Questo è <strong>Monday.com</strong>. Non nasce per l'edilizia (lo usano anche Coca-Cola e Uber), ma proprio per la sua flessibilità è diventato popolarissimo tra le imprese di costruzioni moderne che vogliono gestire le commesse senza la rigidità dei software tecnici "vecchia scuola".
          </p>
          <p class="mt-4">
            È lo strumento perfetto per il Project Manager che vuole vedere a colpo d'occhio: "A che punto siamo?", "Chi sta facendo cosa?" e "Siamo in ritardo?".
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">La potenza delle Automazioni</h3>
          <p class="text-blue-800">
            Qui Monday stravince. Puoi impostare regole senza saper programmare: "Quando lo stato del cantiere passa a 'Finito', manda una mail all'amministrazione per la fattura". Oppure: "3 giorni prima della scadenza consegna materiali, avvisa il magazziniere". Elimina il micromanagement e le dimenticanze umane.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché piace ai Manager (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Visualizzazione Immediata (Gantt & Kanban)</h3>
            <p>
              Monday trasforma righe di dati in grafici bellissimi. Puoi vedere il tuo cantiere come un Cronoprogramma (Gantt) per capire le dipendenze temporali, o come una lavagna (Kanban) per spostare i task da "Da fare" a "Fatto". Per presentare lo stato lavori a un cliente o a un investitore, è imbattibile per chiarezza.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Centralizzazione Totale</h3>
            <p>
              Puoi usare Monday per tutto: CRM (gestione clienti), HR (assunzione operai), Fleet Management (gestione mezzi) e Marketing. A differenza di Primus o Procore che sono verticali sul cantiere, Monday gestisce l'intera azienda edile in un unico portale.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Facilità d'uso (Curva zero)</h3>
            <p>
              È così intuitivo che non serve formazione. Se sai usare Facebook o Instagram, sai usare Monday. I pulsanti sono grandi, i colori indicano lo stato (Verde = Fatto, Rosso = Bloccato). Questo aiuta molto nell'adozione da parte del personale d'ufficio meno tecnico.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché non basta al Capocantiere (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Manca la "Tecnica" Edile</h3>
            <p>
              Non puoi aprirci un file IFC (BIM). Non puoi fare un computo metrico con analisi prezzi. Non ha i moduli per il POS. È un software gestionale puro. Se provi a usarlo per la Direzione Lavori tecnica (difetti su planimetria), ti accorgerai presto che mancano le funzionalità di base presenti in Fieldwire o PlanRadar.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Costi a scalare</h3>
            <p>
              Il prezzo base sembra basso, ma le funzioni utili (Gantt, Automazioni avanzate, Integrazioni) sono nei piani "Pro" o "Enterprise". Inoltre, si paga per "posto" (utente). Se vuoi dare accesso a 20 operai solo per spuntare una casella, il costo mensile schizza alle stelle.
            </p>
          </div>
        </section>

      </div>
    `
  },
  'revizto': {
    title: "Revizto: Recensione 2025. Il coordinamento BIM diventa un videogioco.",
    metaDescription: "Analisi di Revizto: la piattaforma di collaborazione integrata che unisce 2D e 3D. Perché è essenziale per la Clash Detection e le riunioni di coordinamento.",
    
    customPros: [
      "Motore grafico 'Gaming': fluidità assoluta anche con modelli enormi",
      "Ibridazione 2D/3D: vedi la tavola sovrapposta al modello",
      "Issue Tracker centralizzato (addio email e BCF sparsi)",
      "Integrazione perfetta con Navisworks, Revit e Solibri"
    ],
    
    customCons: [
      "Licenze costose (orientato a grandi studi/imprese)",
      "Inutile se non si lavora con metodologia BIM",
      "Meno focalizzato sulla parte documentale amministrativa (es. verbali)"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Revizto: Quando il BIM incontra i Videogiochi</h2>
          <p>
            Se hai mai provato ad aprire un modello federato pesante (Architettonico + Strutturale + Impiantistico) su un PC portatile, conosci il dolore: scatti, blocchi, lentezza. <strong>Revizto</strong> nasce da sviluppatori di videogiochi e si vede.
          </p>
          <p class="mt-4">
            Trasforma modelli complessi (da Revit, Navisworks, Tekla) in un ambiente esplorabile leggerissimo. In Italia è diventato lo standard per le <strong>riunioni di coordinamento</strong>: invece di guardare file PDF statici, il team naviga nel progetto in tempo reale per risolvere i problemi prima di andare in cantiere.
          </p>
        </section>

        

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Il potere del 2D/3D Overlay</h3>
          <p class="text-blue-800">
            La funzione geniale di Revizto è la sovrapposizione. Prende la tavola 2D (la pianta classica) e la "spalma" sul modello 3D. Questo permette ai non esperti di BIM (come certi committenti o capicantiere "vecchio stampo") di capire immediatamente dove si trovano, vedendo i muri 3D alzarsi dalle righe del CAD.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché i BIM Manager lo amano (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Issue Tracker Unificato</h3>
            <p>
              Invece di mandare report PDF delle interferenze (Clash) trovate con Navisworks, Revizto centralizza tutto. Clicchi su un tubo che sbatte contro una trave, crei un "Issue", assegni all'ingegnere strutturista. Lui apre Revizto, clicca sulla notifica e la telecamera lo porta esattamente in quel punto. Il ciclo di correzione si riduce da settimane a ore.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Accessibilità Democratica</h3>
            <p>
              Non serve una workstation da 3.000€ per aprire il progetto. Revizto gira benissimo su iPad e laptop standard. Questo porta il modello BIM fuori dall'ufficio tecnico e dentro la baracca di cantiere, rendendo i dati accessibili a chi deve costruire davvero.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">I limiti (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Prezzo Enterprise</h3>
            <p>
              Non è un software che compri per un singolo progettino. Il modello di pricing è pensato per organizzazioni che gestiscono volumi importanti. Per il piccolo studio di architettura potrebbe essere fuori portata.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Solo BIM</h3>
            <p>
              Se il tuo lavoro è ristrutturare appartamenti usando solo AutoCAD 2D, Revizto è inutile. È una Ferrari che ha bisogno di benzina specifica (i modelli 3D) per funzionare.
            </p>
          </div>
        </section>

      </div>
    `
  },

  'asana': {
    title: "Asana: Recensione 2025. Organizzare lo studio tecnico, non solo il cantiere.",
    metaDescription: "Analisi di Asana per architetti e ingegneri: gestione scadenze, portfolio progetti e carichi di lavoro. Ottimo per l'ufficio, meno per il cantiere.",
    
    customPros: [
      "Interfaccia pulita e rilassante (User Experience Top)",
      "Gestione 'Portfolio': vedi lo stato di 50 progetti insieme",
      "Timeline (Gantt) facile e colorata",
      "Ottimo per gestire il team di progettazione in ufficio"
    ],
    
    customCons: [
      "Totalmente inadatto per la documentazione tecnica di cantiere",
      "Nessuna visualizzazione planimetrica o BIM",
      "Manca la gestione finanziaria/budget nativa"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Asana: Il manager invisibile dello Studio Tecnico</h2>
          <p>
            Mentre software come Mela o Fieldwire si sporcano le mani di calce in cantiere, <strong>Asana</strong> è il re dell'ufficio climatizzato. È la piattaforma ideale per gestire il flusso di lavoro di uno studio di architettura o ingegneria: "Chi fa il render?", "A che punto è la pratica edilizia?", "Abbiamo inviato il computo?".
          </p>
          <p class="mt-4">
            Non sostituisce il software tecnico, ma sostituisce le riunioni infinite e i post-it attaccati al monitor. Porta chiarezza su "Chi fa cosa e entro quando".
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Gestione Carichi di Lavoro (Workload)</h3>
          <p class="text-blue-800">
            Per il titolare di studio, la funzione Workload è vitale. Ti mostra se l'Architetto Rossi è sovraccarico questa settimana mentre l'Ing. Bianchi è scarico. Puoi ridistribuire i compiti (es. "Redazione APE") trascinandoli da una persona all'altra, evitando burnout e ritardi nelle consegne.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché sceglierlo in Ufficio (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Visione d'Insieme (Portfolios)</h3>
            <p>
              Se gestisci 20 commesse contemporaneamente, Asana ti offre una vista "a volo d'uccello". Vedi una barra di avanzamento per ogni progetto. Se una pratica si blocca in comune, la bandierina diventa rossa e sai dove intervenire, senza dover chiedere aggiornamenti a 20 persone diverse.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Dipendenze Temporali Semplici</h3>
            <p>
              Creare un cronoprogramma su Project è difficile. Su Asana è intuitivo: disegni le barre sulla Timeline, le colleghi con una freccia e il gioco è fatto. È perfetto per pianificare le fasi di progettazione (Preliminare -> Definitivo -> Esecutivo).
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché non portarlo in Cantiere (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Troppo generico</h3>
            <p>
              Asana non sa cosa sia una planimetria. Un task su Asana è una riga di testo, non un "pin" su una mappa. Se provi a usarlo per gestire i difetti di costruzione ("crepa nel muro"), l'operaio non saprà dov'è il problema perché manca il contesto spaziale.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Offline limitato</h3>
            <p>
              La sua app mobile è fatta per connessioni stabili d'ufficio. In un seminterrato senza campo, la sincronizzazione e l'accesso ai dati non sono robusti come quelli di app native per l'edilizia (es. PlanRadar).
            </p>
          </div>
        </section>

      </div>
    `
  },
  'clickup': {
    title: "ClickUp: Recensione 2025. L'alternativa 'Tutto-in-Uno' per lo studio tecnico.",
    metaDescription: "Analisi di ClickUp per l'edilizia: Gantt, documenti e gestione task in un'unica piattaforma economica. Conviene rispetto ai gestionali specifici?",
    
    customPros: [
      "Rapporto Funzioni/Prezzo incredibile (Gantt incluso nel piano base)",
      "Documenti integrati (Scrivi i verbali direttamente nell'app)",
      "Viste Multiple: Lista, Gantt, Kanban e Calendario sullo stesso progetto",
      "Automazioni native potenti senza costi extra"
    ],
    
    customCons: [
      "Può essere lento su workspace molto affollati",
      "Troppo complesso per l'uso rapido in cantiere (Overwhelming)",
      "Curva di apprendimento ripida (Troppe opzioni all'inizio)"
    ],

    content: `
      <div class="space-y-8">
        
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">ClickUp: Basta saltare da un'app all'altra</h2>
          <p>
            Lo slogan di <strong>ClickUp</strong> è "One app to replace them all". E per molti studi di architettura e ingegneria italiani, è vero. 
            Invece di avere il cronoprogramma su Project, i file su Dropbox, le note su Word e i task su Trello, ClickUp mette tutto nello stesso contenitore.
          </p>
          <p class="mt-4">
            È la soluzione ideale per chi vuole digitalizzare l'organizzazione aziendale spendendo una frazione rispetto ai software edili verticali. Non nasce per il cantiere, ma si adatta perfettamente alla gestione delle pratiche edilizie, delle scadenze e del team di progettazione.
          </p>
        </section>

        <section class="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 class="text-xl font-bold text-blue-900 mb-2">ClickUp Docs: Il Superpotere</h3>
          <p class="text-blue-800">
            A differenza di Asana o Monday, ClickUp ha un editor di testo potente integrato (simile a Google Docs). Puoi scrivere il <strong>Capitolato</strong>, il verbale di riunione o la lista dei materiali <i>dentro</i> il task stesso. Puoi persino convertire una riga del documento in un compito assegnato a un geometra. La documentazione non è più un allegato morto, ma è viva e connessa al lavoro.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Perché gli studi tecnici lo amano (PRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Flessibilità Visiva</h3>
            <p>
              Il titolare vuole vedere il Gantt per capire le consegne? Click. Il disegnatore preferisce una lista di cose da fare (To-Do)? Click. L'amministrazione vuole una tabella stile Excel per i budget? Click.
              I dati sono gli stessi, ma ognuno li guarda come preferisce. Questo risolve l'eterno conflitto tra "chi gestisce" e "chi esegue".
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Gerarchia Spazi e Cartelle</h3>
            <p>
              La struttura di ClickUp (Space > Folder > List) mappa perfettamente la realtà edile: Cliente > Cantiere > Fasi Lavorative. Puoi creare dei "Template" di cartella. Quando arriva una nuova commessa "Ristrutturazione Appartamento", carichi il template e hai già pronti tutti i task standard (CILA, Progetto, Computo, Fine Lavori) con le scadenze preimpostate.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Prezzo Aggressivo</h3>
            <p>
              ClickUp offre funzionalità che in altri software costano centinaia di euro (come i Gantt avanzati, il Time Tracking, le Automazioni) a un prezzo mensile irrisorio per utente. Per le piccole realtà è imbattibile sul piano costi/benefici.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-4">I limiti operativi (CONTRO)</h2>
          
          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Troppe funzioni confondono</h3>
            <p>
              ClickUp fa talmente tante cose che all'inizio ci si perde. Il rischio è passare più tempo a configurare il software ("cambio il colore di questo stato?", "aggiungo questo campo?") che a lavorare. Richiede disciplina per non diventare un labirinto.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">2. Non è fatto per il Cantiere sporco</h3>
            <p>
              L'app mobile è migliorata, ma è piena di menu e opzioni. Non è immediata come Mela Works. Un caposquadra con i guanti e la polvere troverà difficile usarla per segnalare un problema al volo. È uno strumento da ufficio o da tablet pulito, non da impalcatura.
            </p>
          </div>
        </section>

      </div>
    `
  }
};