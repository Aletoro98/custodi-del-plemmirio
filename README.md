# 🌊 Custodi del Plemmirio
**Simulatore Gestionale Web-Based per l'Educazione Ambientale (Serious Game)**

🔗 **[Inserisci qui il link alla Demo Live su Vercel, es. https://custodi-del-plemmirio.vercel.app]**

## 📖 Il Progetto
"Custodi del Plemmirio" è un Serious Game gestionale (Edutainment) sviluppato come caso di studio. L'obiettivo non è il semplice intrattenimento, ma l'apprendimento di concetti complessi legati alla biologia della conservazione attraverso il *learning by doing*.

Il giocatore veste i panni del Direttore dell'Area Marina Protetta **Plemmirio** (Rete Natura 2000). Il fulcro dell'esperienza è il difficile *trade-off* tra sostenibilità ecologica ed economica: la tutela dell'ambiente marino richiede un'attenta allocazione di risorse limitate per contrastare pressioni antropiche e naturali reali, estratte dai veri Formulari Standard europei.

## 🎯 Meccaniche di Gioco (Gameplay) e Caso di Studio
A differenza del progetto gemello ("Custodi del Flascio"), questo simulatore si concentra sulle dinamiche costiere e subacquee.

* **Gestione delle Risorse:** Il giocatore deve bilanciare un "Budget" predefinito e la "Salute dell'Ecosistema". L'esaurimento dei fondi porta al commissariamento (Game Over politico), mentre il collasso ambientale porta al Game Over ecologico.
* **Ciclo Decisionale (Turni di 7 giorni):** Ogni giorno presenta un'emergenza specifica del bioma marino (es. impatto delle reti fantasma, proliferazione di predatori alieni come i Vermocani, turismo sregolato). Ogni misura di mitigazione scelta genera un "Report Giornaliero" con le conseguenze immediate.
* **Lore Integrata e Interattiva:** Le schede scientifiche di specie protette (es. *Posidonia oceanica*, *Caretta caretta*, *Epinephelus marginatus*) sono integrate direttamente nella mappa. Leggerle fornisce indizi vitali per risolvere le emergenze (ad esempio, conoscere la sensibilità acustica della cernia aiuta a gestire le immersioni). Se una specie si estingue, la sua scheda diventa inaccessibile, creando un forte impatto emotivo.

## 💻 Stack Tecnologico e Architettura
* **Frontend:** React, Next.js (si consiglia Node.js v18.x o superiore)
* **Styling:** Tailwind CSS
* **UI/UX:** Mobile-First Design. L'interfaccia è responsiva e utilizza un sistema avanzato di Modals (gestione z-index e blocco dello scorrimento dello sfondo) per garantire un'esperienza fluida.
* **SEO & Condivisione:** Implementazione di metadati OpenGraph per ottimizzare la condivisione del link sui social media e configurazione della localizzazione in lingua italiana.
* **AI Integration:** Google Gemini API (utilizzata per la generazione dinamica dei contenuti).

## 🗂 Struttura del Progetto
L'architettura del simulatore è consolidata per facilitare l'iterazione del prototipo:
* **`/app/page.tsx`**: Centralizza la logica di gioco (stati, turni, budget, Game Over), i contenuti narrativi (testi, schede delle specie marine), le chiamate API e l'integrazione dei componenti UI sulla mappa.
* **`/app/layout.tsx`**: Gestisce il layout radice e i metadati globali (inclusi i tag OpenGraph).
* **`/app/globals.css`**: Contiene gli stili globali di Tailwind CSS.
* **`/lib/utils.ts`**: Funzioni di utilità per la gestione condizionale delle classi CSS (es. `cn` per risolvere i conflitti di Tailwind).

---

## 🚀 Installazione e Avvio in Locale
Per eseguire il simulatore localmente, assicurati di avere **Node.js** installato.

1. **Clona il repository e installa le dipendenze:**
   ```bash
   git clone [https://github.com/Aletoro98/custodi-del-plemmirio.git](https://github.com/Aletoro98/custodi-del-plemmirio.git)
   cd custodi-del-plemmirio
   npm install
   ```
2. **Configura le Variabili d'Ambiente:**
   Il simulatore richiede una chiave API di Google Gemini.
   Crea un file chiamato `.env.local` nella directory root del progetto e inserisci la tua chiave:
   ```env
   GEMINI_API_KEY=inserisci_qui_la_tua_chiave_api_valida
   ```
3. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```
   L'app sarà disponibile all'indirizzo `http://localhost:3000`.

---

## 🌍 Deployment (Pubblicazione Web)
L'applicazione è ottimizzata per il deployment su piattaforme cloud come **Vercel**.

1. Collega il tuo repository GitHub a Vercel.
2. Nelle impostazioni del progetto su Vercel, vai su **Environment Variables**.
3. Aggiungi la variabile `GEMINI_API_KEY` con il rispettivo valore. **Attenzione:** omettere questo passaggio causerà il crash dell'applicazione in produzione.
4. Avvia il deployment.

---


## 📄 Licenze e Crediti (Credits)

**Codice Sorgente**
Il codice sorgente di questo simulatore è rilasciato sotto licenza **MIT**. Sei libero di utilizzarlo, modificarlo e distribuirlo, a patto di includere l'avviso di copyright originale.

**Fonti Scientifiche**
Il simulatore si basa sui dati reali dell'**Area Marina Protetta del Plemmirio** (Sito Natura 2000). 
Riferimenti normativi utilizzati per le meccaniche di gioco: *Direttiva Habitat 92/43/CEE* e *Protocolli di gestione AMP*.

**Asset Fotografici (Schede Tecniche)**
Le fotografie utilizzate all'interno del gioco appartengono ai rispettivi autori e sono distribuite con licenza **Creative Commons (CC BY-SA 4.0)**:
* 🌿 **Posidonia oceanica:** Foto di Frédéric Ducarme (Wikimedia Commons).
* 🐢 **Caretta caretta:** Foto di Eco cruising (Wikimedia Commons).
* 🐟 **Epinephelus marginatus (Cernia Bruna):** Foto di Diego Delso (Wikimedia Commons).
* 🦞 **Palinurus elephas (Aragosta):** Foto di Diego Delso (Wikimedia Commons).

**Grafiche e UI**
Le grafiche ambientali e gli elementi visivi dell'interfaccia sono stati generati tramite Intelligenza Artificiale (Google Gemini, modello: Nano Banana 2).
