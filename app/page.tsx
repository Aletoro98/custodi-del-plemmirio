'use client';

import { useState } from 'react';
import { Coins, Heart, Calendar, X, AlertTriangle, Info } from 'lucide-react';

export default function Game() {
  const [giornoCorrente, setGiornoCorrente] = useState(1);
  const [budget, setBudget] = useState(35000);
  const [ecosistemaSalute, setEcosistemaSalute] = useState(70);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showDebriefing, setShowDebriefing] = useState(false);
  const [activeBioSheet, setActiveBioSheet] = useState<string | null>(null);

  // Biodiversity State
  const [posidoniaViva, setposidoniaViva] = useState(true);
  const [carettaViva, setcarettaViva] = useState(true);
  const [aragostaViva, setaragostaViva] = useState(true);
  const [cerniaViva, setcerniaViva] = useState(true);
  const [activeBioInfo, setActiveBioInfo] = useState<string | null>(null);

  type DailyReportData = {
    text: string;
    impacts: string[];
  };
  const [dailyReport, setDailyReport] = useState<DailyReportData | null>(null);

  const handleChoiceDay1 = (choiceId: number) => {
    setIsModalOpen(false);
    if (choiceId === 1) {
      setBudget(prev => prev - 0);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev - 15)));
      setposidoniaViva(false);
      setDailyReport({
        text: "Scelta economica. I Vermocani hanno banchettato indisturbati. La pressione predatoria è aumentata e la prateria di Posidonia è stata seriamente danneggiata.",
        impacts: [
          "🥀 Biodiversità: Posidonia a rischio!",
          "📉 Salute Mare: -15%",
          "💰 Budget: - € 0 (Gratuito)"
        ]
      });
    } else if (choiceId === 2) {
      setBudget(prev => prev - 5000);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev + 5)));
      setposidoniaViva(true);
      setDailyReport({
        text: "Hai ingaggiato squadre di sub esperti. In poche ore sono stati rimossi centinaia di Vermocani. L'operazione è stata costosa, ma la prateria di Posidonia respira.",
        impacts: [
          "📈 Salute Mare: +5%",
          "💸 Budget: - € 5.000"
        ]
      });
    }
  };

  const handleChoiceDay2 = (choiceId: number) => {
    setIsModalOpen(false);
    if (choiceId === 1) {
      setBudget(prev => prev - 0);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev - 5)));
      setcarettaViva(false);
      setDailyReport({
        text: "Non sei intervenuto. I bracconieri hanno operato indisturbati e le reti abbandonate hanno mietuto vittime. Diversi esemplari di Caretta caretta sono annegati.",
        impacts: [
          "🦴 Biodiversità: Tartarughe perse!",
          "📉 Salute Mare: -5%",
          "💰 Budget: - € 0 (Gratuito)"
        ]
      });
    } else if (choiceId === 2) {
      setBudget(prev => prev - 2000);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev + 5)));
      setcarettaViva(true);
      setDailyReport({
        text: "La Guardia Costiera e i tuoi sub hanno perlustrato l'area. Sono state rimosse due grosse reti fantasma e salvati tre esemplari di tartaruga. Ottimo lavoro.",
        impacts: [
          "📈 Salute Mare: +5%",
          "💸 Budget: - € 2.000"
        ]
      });
    }
  };

  const handleChoiceDay3 = (choiceId: number) => {
    setIsModalOpen(false);
    if (choiceId === 1) {
      setBudget(prev => prev - 0);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev - 10)));
      setaragostaViva(false);
      setDailyReport({
        text: "I bracconieri hanno eluso i controlli normali e razziato i fondali. La mattina dopo i biologi trovano solo tane vuote. La popolazione locale di aragoste è crollata.",
        impacts: [
          "🍽️ Biodiversità: Aragoste decimate!",
          "📉 Salute Mare: -10%"
        ]
      });
    } else if (choiceId === 2) {
      setBudget(prev => prev - 4000);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev + 8)));
      setaragostaViva(true);
      setDailyReport({
        text: "La task-force notturna ha sorpreso i bracconieri in flagrante! Sequestrate chilometri di reti e liberate decine di Aragoste cariche di uova. Un successo per la legalità.",
        impacts: [
          "🦞 Biodiversità: Stock ittico salvato!",
          "📈 Salute Mare: +8%",
          "💸 Budget: - € 4.000"
        ]
      });
    }
  };

  const handleChoiceDay4 = (choiceId: number) => {
    setIsModalOpen(false);
    if (choiceId === 1) {
      setBudget(prev => prev + 14500); // Netto (+15000 - 500 spesi)
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev + 5)));
      setDailyReport({
        text: "Hai fornito all'ispettore l'attrezzatura subacquea. Avete avvistato una Cernia bruna e documentato l'ottima salute della Posidonia. L'ispettore è affascinato: Finanziamento approvato!",
        impacts: [
          "🌿 Biodiversità: Valorizzata!",
          "📈 Salute Mare: +5%",
          "💰 Budget: + € 14.500 (Fondi UE)"
        ]
      });
    } else if (choiceId === 2) {
      setDailyReport({
        text: "Hai mostrato all'ispettore solo vecchie mappe batimetriche. L'ispettore non ha trovato evidenze visive sufficienti dello stato di salute del mare. Finanziamento sospeso.",
        impacts: [
          "😐 Budget: Invariato (Nessun fondo extra)",
          "😐 Salute Mare: Invariata"
        ]
      });
    }
  };

  const handleChoiceDay5 = (choiceId: number) => {
    setIsModalOpen(false);
    if (choiceId === 1) {
      setBudget(prev => prev + 3000);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev - 5)));
      setDailyReport({
        text: "Hai aperto i campi boe straordinari. I diportisti hanno pagato il biglietto. Il budget respira, ma a fine giornata l'acqua è velata da idrocarburi e molte ancore hanno strappato la flora.",
        impacts: [
          "💰 Budget: + € 3.000 (Incasso Ticket)",
          "📉 Salute Mare: -5%"
        ]
      });
    } else if (choiceId === 2) {
      setBudget(prev => prev - 1000);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev + 2)));
      setDailyReport({
        text: "Hai schierato i gommoni dell'Ente a ogni limite. Nessuna barca non autorizzata è entrata. L'acqua è rimasta cristallina. Scelta costosa ma fondamentale per la tutela.",
        impacts: [
          "📈 Salute Mare: +2%",
          "💸 Budget: - € 1.000 (Straordinari)"
        ]
      });
    }
  };

  const handleChoiceDay6 = (choiceId: number) => {
    setIsModalOpen(false);
    if (choiceId === 1) {
      setBudget(prev => prev + 2000);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev - 15)));
      setcerniaViva(false);
      setDailyReport({
        text: "I diving center fanno affari d'oro e incassi le quote. Ma a fine giornata le telecamere mostrano tane vuote. Le grandi Cernie, spaventate dai flash e dai sub, hanno abbandonato l'area.",
        impacts: [
          "🚫 Biodiversità: Cernie fuggite!",
          "💰 Budget: + € 2.000 (Quote Diving)",
          "📉 Salute Mare: -15%"
        ]
      });
    } else if (choiceId === 2) {
      setBudget(prev => prev - 3000);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev + 10)));
      setcerniaViva(true);
      setDailyReport({
        text: "Hai delimitato l'area vietando severamente le immersioni. L'acqua è tranquilla e i biologi confermano che i maschi dominanti di Cernia presidiano le tane. Il sito è sicuro.",
        impacts: [
          "🐟 Biodiversità: Cernie protette!",
          "📈 Salute Mare: +10%",
          "💸 Budget: - € 3.000 (Boe e controlli)"
        ]
      });
    }
  };

  const handleChoiceDay7 = (choiceId: number) => {
    setIsModalOpen(false);
    if (choiceId === 1) {
      setBudget(prev => prev - 20000);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev - 2)));
      setDailyReport({
        text: "Le navi antinquinamento sono arrivate in tempo record e hanno aspirato l'olio. Il mare è salvo, ma le casse dell'Area Marina sono state quasi prosciugate per l'emergenza.",
        impacts: [
          "😐 Salute Mare: -2% (Lievi tracce)",
          "💸 Budget: - € 20.000 (Spesa titanica)"
        ]
      });
    } else if (choiceId === 2) {
      setBudget(prev => prev - 5000);
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev - 15)));
      setDailyReport({
        text: "I tuoi operatori hanno calato le panne, ma il mare mosso ha scavalcato le barriere. La marea nera è stata rallentata, ma ha asfissiato la fauna di superficie e le coste.",
        impacts: [
          "📉 Salute Mare: -15% (Danni ingenti)",
          "💰 Budget: - € 5.000 (Costo contenuto)"
        ]
      });
    } else if (choiceId === 3) {
      setEcosistemaSalute(prev => Math.min(100, Math.max(0, prev - 50)));
      setposidoniaViva(false);
      setcarettaViva(false);
      setaragostaViva(false);
      setcerniaViva(false);
      setDailyReport({
        text: "Hai confidato nelle correnti, ma lo scirocco ha spinto l'onda nera dritta sulla Riserva Integrale. Tartarughe, pesci e praterie sono coperti di catrame. Disastro totale.",
        impacts: [
          "💀 Salute Mare: -50% (Ecosistema distrutto)",
          "💀 Biodiversità: Specie soffocate!"
        ]
      });
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
  };

  const getGameOverResult = () => {
    if (budget < 1000) {
      return {
        title: "SCONFITTA: BANCAROTTA",
        text: "Il mare è salvo, ma i conti sono in rosso. Il Ministero ha commissariato l'Ente Gestore. La tua gestione amministrativa è stata fallimentare.",
        color: "text-red-500"
      };
    } else if (ecosistemaSalute < 40) {
      return {
        title: "SCONFITTA: DISASTRO ECOLOGICO",
        text: `I fondali sono un deserto. La salute dell'ecosistema è crollata sotto la soglia minima.${!posidoniaViva ? " Inoltre, è andata distrutta anche la prateria di Posidonia. Fallimento totale." : ""}`,
        color: "text-red-500"
      };
    } else if (!posidoniaViva) {
      return {
        title: "SCONFITTA: PERDITA DI HABITAT",
        text: "La salute generale è accettabile, MA hai fallito la missione principale. La prateria di Posidonia è stata devastata. L'UE ha tagliato i fondi.",
        color: "text-red-500"
      };
    } else if (ecosistemaSalute >= 75 && carettaViva && aragostaViva && cerniaViva) {
      return {
        title: "🏆 VITTORIA: CUSTODE DEL PLEMMIRIO",
        text: "Risultato perfetto! Hai difeso il mare contro ogni minaccia. Tartarughe, cernie e aragoste nuotano in acque pure e incontaminate.",
        color: "text-emerald-400"
      };
    } else if (ecosistemaSalute >= 40 && (!carettaViva || !aragostaViva || !cerniaViva)) {
      return {
        title: "📉 VITTORIA AMARA",
        text: "Il mare è vivo, ma il prezzo pagato in biodiversità è altissimo. Hai perso alcune specie iconiche. L'Area Marina è molto più povera e vuota.",
        color: "text-yellow-400"
      };
    } else {
      return {
        title: "😐 VITTORIA OPERATIVA",
        text: "L'Area Marina è sopravvissuta. Hai fatto compromessi difficili, ma l'ecosistema regge e le specie protette sono al loro posto.",
        color: "text-blue-400"
      };
    }
  };

  const resetGame = () => {
    setGiornoCorrente(1);
    setBudget(35000);
    setEcosistemaSalute(70);
    setposidoniaViva(true);
    setcarettaViva(true);
    setaragostaViva(true);
    setcerniaViva(true);
    setIsGameOver(false);
    setShowDebriefing(false);
    setGameStarted(false);
    setDailyReport(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans flex flex-col overflow-x-hidden">
      {/* OVERLAY OBBLIGO ROTAZIONE (Solo su mobile in verticale) */}
      <div className="fixed inset-0 z-[999] bg-stone-950 flex flex-col items-center justify-center p-6 text-center portrait:flex landscape:hidden md:!hidden">
        <div className="text-7xl mb-6 animate-bounce">📱</div>
        <h2 className="text-3xl font-black text-emerald-400 mb-4 tracking-tight">RUOTA IL TELEFONO</h2>
        <p className="text-stone-300 text-lg">Per esplorare la mappa e giocare correttamente, ruota il dispositivo in orizzontale (Landscape).</p>
      </div>
      {/* Header / HUD */}
      <header className="bg-stone-800 p-2 md:p-4 shadow-md flex flex-col gap-4 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2 text-center">
            <h1 className="text-xl md:text-2xl font-bold text-emerald-400">ARPA - Plemmirio</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 bg-stone-700 px-3 py-1.5 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span className="font-mono font-medium uppercase">Giorno {giornoCorrente} di 7</span>
            </div>
            <div className={`flex items-center gap-2 bg-stone-700 px-3 py-1.5 rounded-lg ${budget < 0 ? 'text-red-500' : ''}`}>
              <Coins className={`w-5 h-5 ${budget < 0 ? 'text-red-500' : 'text-yellow-400'}`} />
              <span className="font-mono font-medium">{formatCurrency(budget)}</span>
            </div>
            <div className={`flex items-center gap-2 bg-stone-700 px-3 py-1.5 rounded-lg ${ecosistemaSalute < 40 ? 'text-red-500' : ''}`}>
              <Heart className={`w-5 h-5 ${ecosistemaSalute < 40 ? 'text-red-500' : 'text-red-400'}`} />
              <span className="font-mono font-medium">{ecosistemaSalute}%</span>
            </div>
            <div className="flex items-center gap-2 bg-stone-700 px-3 py-1.5 rounded-lg">
              <span className="font-medium text-sm">
                {budget < 25000 ? '⚠️ Fondi in esaurimento!' : '✅ Gestione operativa'}
              </span>
            </div>
          </div>
        </div>

        {/* Biodiversity Panel */}
        <div className="flex items-center gap-4 bg-stone-900/50 p-2 rounded-lg border border-stone-700">
          <span className="text-sm font-semibold text-stone-400 uppercase tracking-wider">Biodiversità Protetta:</span>
          <div className="flex gap-3">
            <button 
              onClick={() => setActiveBioInfo(posidoniaViva ? 'Posidonia oceanica - Prateria e polmone blu' : 'Posidonia oceanica - Divelta e distrutta')}
              className="text-3xl hover:scale-110 transition-transform"
              title="Posidonia oceanica"
            >
              {posidoniaViva ? '🌿' : '🥀'}
            </button>
            <button 
              onClick={() => setActiveBioInfo(carettaViva ? 'Caretta caretta - Tartaruga marina' : 'Caretta caretta - Vittima di reti/plastica')}
              className="text-3xl hover:scale-110 transition-transform"
              title="Caretta caretta"
            >
              {carettaViva ? '🐢' : '🦴'}
            </button>
            <button 
              onClick={() => setActiveBioInfo(aragostaViva ? 'Palinurus elephas - Aragosta mediterranea' : 'Palinurus elephas - Decimata dal bracconaggio')}
              className="text-3xl hover:scale-110 transition-transform"
              title="Palinurus elephas"
            >
              {aragostaViva ? '🦞' : '🍽️'}
            </button>
            <button 
              onClick={() => setActiveBioInfo(cerniaViva ? 'Epinephelus marginatus - Cernia Bruna' : 'Epinephelus marginatus - Fuggita dalle tane')}
              className="text-3xl hover:scale-110 transition-transform"
              title="Epinephelus marginatus"
            >
              {cerniaViva ? '🐟' : '🚫'}
            </button>
          </div>
          {activeBioInfo && (
            <div className="ml-4 px-4 py-2 bg-stone-800 border border-stone-600 rounded-md text-sm text-stone-200 animate-in fade-in slide-in-from-left-2">
              {activeBioInfo}
            </div>
          )}
        </div>
      </header>

      {/* Main Game Area - Map */}
      <main className="flex-1 relative overflow-hidden bg-stone-950 flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl border-2 md:border-4 border-stone-800 bg-stone-900">
          {/* Map Background */}
          <img src="/mappa-mare.png" alt="Mappa Plemmirio" className="w-full h-auto block" />

{/* Level 1: Static Species Tokens (Ora cliccabili e con stato "morto") */}
          <button 
            onClick={() => setActiveBioSheet('posidonia')}
            className="absolute top-[60%] left-[15%] w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform z-10"
            title="Posidonia oceanica"
          >
            {posidoniaViva ? (
              <img 
                src="https://i.postimg.cc/28QVDH86/Token_Posidonia_Scontornato.png" 
                alt="Posidonia" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            ) : (
              <div className="w-14 h-14 mx-auto flex items-center justify-center text-4xl bg-slate-900/80 border-2 border-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)]">🥀</div>
            )}
          </button>

          <button 
            onClick={() => setActiveBioSheet('caretta')}
            className="absolute top-[20%] left-[10%] w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform z-10"
            title="Caretta caretta"
          >
            {carettaViva ? (
              <img 
                src="https://i.postimg.cc/BnJtQxXt/Token_Caretta_Scontornato.png" 
                alt="Caretta caretta" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            ) : (
              <div className="w-14 h-14 mx-auto flex items-center justify-center text-4xl bg-slate-900/80 border-2 border-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)]">🦴</div>
            )}
          </button>

          <button 
            onClick={() => setActiveBioSheet('cernia')}
            className="absolute top-[55%] left-[83%] w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform z-10"
            title="Epinephelus marginatus"
          >
            {cerniaViva ? (
              <img 
                src="https://i.postimg.cc/Vkz5Ljdf/Token_Epinephelus_Scontornato.png" 
                alt="Epinephelus marginatus" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            ) : (
              <div className="w-14 h-14 mx-auto flex items-center justify-center text-4xl bg-slate-900/80 border-2 border-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)]">🚫</div>
            )}
          </button>

          <button 
            onClick={() => setActiveBioSheet('aragosta')}
            className="absolute top-[35%] left-[35%] w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform z-10"
            title="Palinurus elephas"
          >
            {aragostaViva ? (
              <img 
                src="https://i.postimg.cc/sg31DpvV/Token_Aragosta_Scontornato.png" 
                alt="Palinurus elephas" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            ) : (
              <div className="w-14 h-14 mx-auto flex items-center justify-center text-4xl bg-slate-900/80 border-2 border-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)]">🍽️</div>
            )}
          </button>

          {/* Level 2: Dynamic Threats */}
          {giornoCorrente === 1 && (
            <div 
              className="absolute top-[60%] left-[22%] w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer animate-bounce hover:scale-110 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src="https://i.postimg.cc/hGxbmk92/Token_Vermecane.png" 
                alt="Vermecane" 
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]"
              />
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 shadow-lg animate-pulse">
                <AlertTriangle className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          {giornoCorrente === 2 && (
            <div 
              className="absolute top-[20%] left-[17%] w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer animate-bounce hover:scale-110 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src="https://i.postimg.cc/mrMN9vQ8/Token_Reti.png" 
                alt="Reti" 
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]"
              />
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 shadow-lg animate-pulse">
                <AlertTriangle className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          {giornoCorrente === 3 && (
            <div 
              className="absolute top-[35%] left-[42%] w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer animate-bounce hover:scale-110 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src="https://i.postimg.cc/cJYM3pQm/Token_Nasse.png" 
                alt="Nasse"
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]"
              />
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 shadow-lg animate-pulse">
                <AlertTriangle className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          {giornoCorrente === 4 && (
            <div 
              className="absolute top-[73%] left-[50%] w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer animate-bounce hover:scale-110 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src="https://i.postimg.cc/q7nXKP8n/Token_UE.png" 
                alt="UE" 
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              />
              <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1 shadow-lg animate-pulse">
                <Info className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          {giornoCorrente === 5 && (
            <div 
              className="absolute top-[30%] left-[20%] w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer animate-bounce hover:scale-110 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src="https://i.postimg.cc/CKDH83j9/Token_Navi.png" 
                alt="Ferragosto" 
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]"
              />
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 shadow-lg animate-pulse">
                <AlertTriangle className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          {giornoCorrente === 6 && (
            <div 
              className="absolute top-[55%] left-[90%] w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer animate-bounce hover:scale-110 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src="https://i.postimg.cc/HL54Mqw1/Token_Sub.png" 
                alt="Sub" 
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]"
              />
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 shadow-lg animate-pulse">
                <AlertTriangle className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          {giornoCorrente === 7 && (
            <div 
              className="absolute top-[45%] left-[50%] w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer animate-pulse hover:scale-110 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src="https://i.postimg.cc/fLN7f8Kr/Token_Petrolio.png" 
                alt="Petrolio" 
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]"
              />
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 shadow-lg animate-bounce">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
            </div>
          )}

          {/* Tokens for other days (placeholders for now) */}
          {giornoCorrente > 7 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Giorno {giornoCorrente}</h2>
                <p className="text-stone-300">In attesa dei prossimi eventi...</p>
              </div>
            </div>
          )}
        </div>
      </main>

{/* Modal for Day 1 Event */}
      {isModalOpen && giornoCorrente === 1 && gameStarted && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-stone-800 border border-stone-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-stone-700 flex justify-between items-start bg-stone-800/50">
              <div>
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="text-sm font-bold tracking-wider uppercase">Emergenza Rilevata</span>
                </div>
                <h2 className="text-2xl font-bold text-white">GIORNO 1: L&apos;INVASIONE DEI VERMOCANI</h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-stone-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-stone-300 mb-6 leading-relaxed">
                Il primo giorno inizia con un allarme dai biologi marini: l&apos;innalzamento delle temperature ha causato un&apos;esplosione demografica di <span className="text-emerald-400 font-semibold italic">Hermodice carunculata</span> (Vermocani). Questi predatori voraci stanno attaccando stelle marine e ricci all&apos;interno della prateria di Posidonia oceanica. Minaccia: I01 (Proliferazione specie termofile).
              </p>

              <div className="space-y-3">
                <button 
                  onClick={() => handleChoiceDay1(1)}
                  className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group"
                >
                  <div className="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">Avvia solo un monitoraggio visivo</div>
                  <div className="text-sm text-stone-400 mb-2">I Vermocani banchetteranno indisturbati. Rischio degrado habitat.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-stone-400"><Coins className="w-4 h-4"/> Gratuito</span>
                    <span className="flex items-center gap-1 text-red-400"><Heart className="w-4 h-4"/> -15%</span>
                  </div>
                </button>

                <button 
                  onClick={() => handleChoiceDay1(2)}
                  className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group"
                >
                  <div className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">Finanzia squadre sub per la rimozione</div>
                  <div className="text-sm text-stone-400 mb-2">Contenimento immediato. Centinaia di esemplari rimossi, la prateria respira.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-yellow-400"><Coins className="w-4 h-4"/> -€ 5.000</span>
                    <span className="flex items-center gap-1 text-emerald-400"><Heart className="w-4 h-4"/> +5%</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Day 2 Event */}
      {isModalOpen && giornoCorrente === 2 && gameStarted && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-stone-800 border border-stone-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-stone-700 flex justify-between items-start bg-stone-800/50">
              <div>
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="text-sm font-bold tracking-wider uppercase">Emergenza Rilevata</span>
                </div>
                <h2 className="text-2xl font-bold text-white">GIORNO 2: TRAPPOLE SOMMERSE</h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-stone-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-stone-300 mb-6 leading-relaxed">
                Ti svegli con una brutta notizia dalla zona di riserva integrale (Zona A) del Plemmirio. I subacquei hanno segnalato la presenza di reti fantasma e palangari illegali che minacciano le Tartarughe marine (<span className="text-emerald-400 font-semibold italic">Caretta caretta</span>). È un grave caso di pesca di frodo (Pressione F02).
              </p>

              <div className="space-y-3">
                <button 
                  onClick={() => handleChoiceDay2(1)}
                  className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group"
                >
                  <div className="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">Ignora e risparmia i fondi</div>
                  <div className="text-sm text-stone-400 mb-2">I bracconieri agiranno indisturbati. Rischio perdita delle tartarughe.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-stone-400"><Coins className="w-4 h-4"/> Gratuito</span>
                    <span className="flex items-center gap-1 text-red-400"><Heart className="w-4 h-4"/> -5%</span>
                  </div>
                </button>

                <button 
                  onClick={() => handleChoiceDay2(2)}
                  className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group"
                >
                  <div className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">Finanzia pattugliamenti e recupero reti</div>
                  <div className="text-sm text-stone-400 mb-2">Salverai la Caretta bonificando i fondali dalle trappole.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-yellow-400"><Coins className="w-4 h-4"/> -€ 2.000</span>
                    <span className="flex items-center gap-1 text-emerald-400"><Heart className="w-4 h-4"/> +5%</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Day 3 Event */}
      {isModalOpen && giornoCorrente === 3 && gameStarted && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-stone-800 border border-stone-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-stone-700 flex justify-between items-start bg-stone-800/50">
              <div>
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="text-sm font-bold tracking-wider uppercase">Emergenza Rilevata</span>
                </div>
                <h2 className="text-2xl font-bold text-white">GIORNO 3: I PREDATORI DELLA NOTTE</h2>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-stone-300 mb-6 leading-relaxed">
                La Capitaneria ti avvisa di un aumento sospetto di barche non identificate di notte vicino alle falesie. L'obiettivo dei bracconieri è catturare l'Aragosta mediterranea (<span className="text-emerald-400 font-semibold italic">Palinurus elephas</span>) usando bombole e nasse illegali.
              </p>

              <div className="space-y-3">
                <button onClick={() => handleChoiceDay3(1)} className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">Affidati solo ai controlli di routine</div>
                  <div className="text-sm text-stone-400 mb-2">Rischio decimazione Aragoste. I bracconieri eluderanno i controlli.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-stone-400"><Coins className="w-4 h-4"/> Gratuito</span>
                    <span className="flex items-center gap-1 text-red-400"><Heart className="w-4 h-4"/> -10%</span>
                  </div>
                </button>

                <button onClick={() => handleChoiceDay3(2)} className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">Finanzia una task-force notturna speciale</div>
                  <div className="text-sm text-stone-400 mb-2">Pattuglie per contrastare la pesca di frodo e salvare lo stock ittico.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-yellow-400"><Coins className="w-4 h-4"/> -€ 4.000</span>
                    <span className="flex items-center gap-1 text-emerald-400"><Heart className="w-4 h-4"/> +8%</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Day 4 Event */}
      {isModalOpen && giornoCorrente === 4 && gameStarted && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-stone-800 border border-stone-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-stone-700 flex justify-between items-start bg-stone-800/50">
              <div>
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <Info className="w-5 h-5" />
                  <span className="text-sm font-bold tracking-wider uppercase">Visita Istituzionale</span>
                </div>
                <h2 className="text-2xl font-bold text-white">GIORNO 4: L'ISPEZIONE EUROPEA</h2>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-stone-300 mb-6 leading-relaxed">
                Un ispettore della Commissione Europea è giunto al Plemmirio per valutare lo stato di conservazione del sito marino. Se il report sarà positivo, l'Ente riceverà i Fondi Strutturali.
              </p>

              <div className="space-y-3">
                <button onClick={() => handleChoiceDay4(1)} className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">Organizza un'immersione scientifica</div>
                  <div className="text-sm text-stone-400 mb-2">Mostri l'ecosistema marino di persona. Sblocca i fondi europei.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-emerald-400"><Coins className="w-4 h-4"/> +€ 14.500 (Netto)</span>
                    <span className="flex items-center gap-1 text-emerald-400"><Heart className="w-4 h-4"/> +5%</span>
                  </div>
                </button>

                <button onClick={() => handleChoiceDay4(2)} className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-stone-300 transition-colors">Affidati ai vecchi dati batimetrici d'ufficio</div>
                  <div className="text-sm text-stone-400 mb-2">Rischio di perdere i fondi. Nessuna evidenza visiva fornita.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-stone-400"><Coins className="w-4 h-4"/> Gratuito</span>
                    <span className="flex items-center gap-1 text-stone-400"><Heart className="w-4 h-4"/> 0%</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Day 5 Event */}
      {isModalOpen && giornoCorrente === 5 && gameStarted && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-stone-800 border border-stone-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-stone-700 flex justify-between items-start bg-stone-800/50">
              <div>
                <div className="flex items-center gap-2 text-yellow-400 mb-1">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="text-sm font-bold tracking-wider uppercase">Dilemma Gestionale</span>
                </div>
                <h2 className="text-2xl font-bold text-white">GIORNO 5: FERRAGOSTO IN MARE</h2>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-stone-300 mb-6 leading-relaxed">
                È la settimana di Ferragosto. La pressione antropica sulla costa è al massimo. Centinaia di barche premono per entrare nella Zona A (Riserva Integrale) per gettare l'ancora.
              </p>

              <div className="space-y-3">
                <button onClick={() => handleChoiceDay5(1)} className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors">Consenti l'ormeggio con ticket</div>
                  <div className="text-sm text-stone-400 mb-2">Fai cassa per l'Ente, ma causi danni ai fondali e inquinamento.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-emerald-400"><Coins className="w-4 h-4"/> +€ 3.000</span>
                    <span className="flex items-center gap-1 text-red-400"><Heart className="w-4 h-4"/> -5%</span>
                  </div>
                </button>

                <button onClick={() => handleChoiceDay5(2)} className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">Blocco Totale e pattugliamento continuo</div>
                  <div className="text-sm text-stone-400 mb-2">Natura intatta, ma paghi gli straordinari alle motovedette.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-yellow-400"><Coins className="w-4 h-4"/> -€ 1.000</span>
                    <span className="flex items-center gap-1 text-emerald-400"><Heart className="w-4 h-4"/> +2%</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Day 6 Event */}
      {isModalOpen && giornoCorrente === 6 && gameStarted && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-stone-800 border border-stone-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-stone-700 flex justify-between items-start bg-stone-800/50">
              <div>
                <div className="flex items-center gap-2 text-yellow-400 mb-1">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="text-sm font-bold tracking-wider uppercase">Minaccia Turistica</span>
                </div>
                <h2 className="text-2xl font-bold text-white">GIORNO 6: I SIGNORI DELLE GROTTE</h2>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-stone-300 mb-6 leading-relaxed">
                I "Diving Center" fanno pressioni per organizzare visite subacquee di massa all'interno delle tane della Cernia Bruna (<span className="text-emerald-400 font-semibold italic">Epinephelus marginatus</span>). Le cernie sono sensibili al disturbo.
              </p>

              <div className="space-y-3">
                <button onClick={() => handleChoiceDay6(1)} className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">Autorizza le immersioni di massa</div>
                  <div className="text-sm text-stone-400 mb-2">Incassi quote, ma il forte disturbo farà scappare le Cernie per sempre.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-emerald-400"><Coins className="w-4 h-4"/> +€ 2.000</span>
                    <span className="flex items-center gap-1 text-red-400"><Heart className="w-4 h-4"/> -15%</span>
                  </div>
                </button>

                <button onClick={() => handleChoiceDay6(2)} className="w-full text-left p-4 rounded-xl border border-stone-600 bg-stone-700/50 hover:bg-stone-700 hover:border-stone-500 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">Interdici le immersioni e piazza boe</div>
                  <div className="text-sm text-stone-400 mb-2">Proteggi le tane e garantisci la tranquillità per la riproduzione.</div>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-yellow-400"><Coins className="w-4 h-4"/> -€ 3.000</span>
                    <span className="flex items-center gap-1 text-emerald-400"><Heart className="w-4 h-4"/> +10%</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Day 7 Event */}
      {isModalOpen && giornoCorrente === 7 && gameStarted && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/95 backdrop-blur-md overflow-y-auto">
          <div className="bg-red-950 border border-red-700 rounded-2xl shadow-2xl shadow-red-900/50 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-red-800 flex justify-between items-start bg-red-900/50">
              <div>
                <div className="flex items-center gap-2 text-red-400 mb-1 animate-pulse">
                  <AlertTriangle className="w-6 h-6" />
                  <span className="text-sm font-bold tracking-wider uppercase">ALLARME ROSSO</span>
                </div>
                <h2 className="text-3xl font-bold text-white mt-2">GIORNO 7: LA MAREA NERA</h2>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-stone-200 mb-6 leading-relaxed font-medium">
                Mayday ambientale. Una nave cargo al largo ha sversato idrocarburi. Una grande marea nera avanza dritta verso le praterie di Posidonia e le scogliere del Plemmirio.
              </p>

              <div className="space-y-3">
                <button onClick={() => handleChoiceDay7(1)} className="w-full text-left p-4 rounded-xl border border-red-800 bg-red-950/50 hover:bg-red-900 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">Richiedi navi disinquinanti d'altura</div>
                  <div className="text-sm text-red-300 mb-2">Efficacia massima ma costosissima. Aspirano l'olio prima che tocchi costa.</div>
                  <div className="flex gap-4 text-sm font-bold">
                    <span className="flex items-center gap-1 text-yellow-400"><Coins className="w-4 h-4"/> -€ 20.000</span>
                    <span className="flex items-center gap-1 text-red-400"><Heart className="w-4 h-4"/> -2%</span>
                  </div>
                </button>

                <button onClick={() => handleChoiceDay7(2)} className="w-full text-left p-4 rounded-xl border border-red-800 bg-red-950/50 hover:bg-red-900 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors">Manda i gommoni con panne assorbenti</div>
                  <div className="text-sm text-red-300 mb-2">Molto rischioso. La barriera potrebbe non reggere il moto ondoso.</div>
                  <div className="flex gap-4 text-sm font-bold">
                    <span className="flex items-center gap-1 text-yellow-400"><Coins className="w-4 h-4"/> -€ 5.000</span>
                    <span className="flex items-center gap-1 text-red-400"><Heart className="w-4 h-4"/> -15%</span>
                  </div>
                </button>

                <button onClick={() => handleChoiceDay7(3)} className="w-full text-left p-4 rounded-xl border border-red-800 bg-red-950/50 hover:bg-red-900 transition-all group">
                  <div className="font-semibold text-white mb-1 group-hover:text-red-500 transition-colors">Non fare nulla</div>
                  <div className="text-sm text-red-300 mb-2">Spera che le correnti la disperdano. Rischio di disastro totale.</div>
                  <div className="flex gap-4 text-sm font-bold">
                    <span className="flex items-center gap-1 text-stone-400"><Coins className="w-4 h-4"/> Gratuito</span>
                    <span className="flex items-center gap-1 text-red-500"><Heart className="w-4 h-4"/> -50%</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

{/* Scheda Tecnica (Bio Sheet) Modal */}
      {activeBioSheet && (
        <div className="fixed inset-0 z-999 flex items-center justify-center p-4 py-8 bg-black/80 backdrop-blur-sm overflow-y-auto overscroll-none">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl w-full max-w-md my-auto flex-shrink-0 animate-in fade-in zoom-in duration-200 relative">
            <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
              <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                <span>📂</span> DATABASE ARPA
              </h3>
              <button onClick={() => setActiveBioSheet(null)} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              {/* POSIDONIA */}
              {activeBioSheet === 'posidonia' && (
                posidoniaViva ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-black text-emerald-400 italic">Posidonia oceanica</span>
                      <span className="text-xs font-bold px-2 py-1 bg-emerald-900/50 text-emerald-400 border border-emerald-500 rounded-full">HABITAT 1120*</span>
                    </div>
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Posidonia_oceanica_(L).jpg" alt="Posidonia" className="w-full h-48 object-cover rounded-xl border-2 border-slate-700 shadow-md" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Pianta marina endemica del Mediterraneo. Forma praterie sommerse che producono enormi quantità di ossigeno e fungono da "nursery" (asilo nido) per i pesci.
                    </p>
                    <div className="bg-blue-950/50 border border-blue-800 p-3 rounded-lg mt-4">
                      <span className="block text-xs font-bold text-blue-400 mb-1">💡 APPUNTO DEL BIOLOGO:</span>
                      <span className="text-sm text-slate-300">Essendo una pianta, cresce molto lentamente sul fondale. Qualsiasi alterazione fisica o predazione massiva rischia di cancellarla in poche ore. Non indugiare a stanziare fondi per rimuovere i predatori.</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-6xl mb-4">🥀</div>
                    <h3 className="text-xl font-bold text-red-500 mb-2">PRATERIA COMPROMESSA</h3>
                    <p className="text-slate-400">Habitat distrutto a causa del degrado. Specie non più studiabile.</p>
                  </div>
                )
              )}

              {/* CARETTA */}
              {activeBioSheet === 'caretta' && (
                carettaViva ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-black text-emerald-400 italic">Caretta caretta</span>
                      <span className="text-xs font-bold px-2 py-1 bg-emerald-900/50 text-emerald-400 border border-emerald-500 rounded-full">COD. 1224</span>
                    </div>
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Sea_turtles_Caretta_caretta.jpg" alt="Caretta caretta" className="w-full h-48 object-cover rounded-xl border-2 border-slate-700 shadow-md" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      La tartaruga marina più comune del Mediterraneo. Compie enormi migrazioni, ma è costantemente minacciata dall'inquinamento plastico e dalle attrezzature da pesca abbandonate.
                    </p>
                    <div className="bg-blue-950/50 border border-blue-800 p-3 rounded-lg mt-4">
                      <span className="block text-xs font-bold text-blue-400 mb-1">💡 APPUNTO DEL BIOLOGO:</span>
                      <span className="text-sm text-slate-300">Le tartarughe hanno bisogno di emergere per respirare. Se restano impigliate in nasse o reti illegali, annegano. Ignorare segnalazioni di pesca di frodo porta inevitabilmente alla loro morte.</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-6xl mb-4">🦴</div>
                    <h3 className="text-xl font-bold text-red-500 mb-2">ESEMPLARI PERSI</h3>
                    <p className="text-slate-400">Popolazione locale annientata da reti o inquinamento. Scheda biologica chiusa.</p>
                  </div>
                )
              )}

              {/* ARAGOSTA */}
              {activeBioSheet === 'aragosta' && (
                aragostaViva ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-black text-emerald-400 italic">Palinurus elephas</span>
                      <span className="text-xs font-bold px-2 py-1 bg-emerald-900/50 text-emerald-400 border border-emerald-500 rounded-full">CROSTACEI</span>
                    </div>
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Langosta_común_(Palinurus_elephas),_Parque_natural_de_la_Arrábida,_Portugal,_2023-07-27,_DD_12.jpg" alt="Aragosta" className="w-full h-48 object-cover rounded-xl border-2 border-slate-700 shadow-md" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      L'Aragosta mediterranea è una specie bentonica che vive su fondali rocciosi e coralligeni. Di notte esce dalle tane per cacciare.
                    </p>
                    <div className="bg-blue-950/50 border border-blue-800 p-3 rounded-lg mt-4">
                      <span className="block text-xs font-bold text-blue-400 mb-1">💡 APPUNTO DEL BIOLOGO:</span>
                      <span className="text-sm text-slate-300">A causa del suo altissimo valore commerciale, è il bersaglio numero uno dei bracconieri notturni. Pattugliamenti straordinari sono l'unico deterrente efficace.</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-6xl mb-4">🍽️</div>
                    <h3 className="text-xl font-bold text-red-500 mb-2">STOCK COLLASSATO</h3>
                    <p className="text-slate-400">Specie decimata per fini commerciali. Nessun esemplare rimasto da studiare.</p>
                  </div>
                )
              )}

              {/* CERNIA */}
              {activeBioSheet === 'cernia' && (
                cerniaViva ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-black text-emerald-400 italic">Epinephelus marginatus</span>
                      <span className="text-xs font-bold px-2 py-1 bg-emerald-900/50 text-emerald-400 border border-emerald-500 rounded-full">PESCI</span>
                    </div>
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Mero_(Epinephelus_marginatus),_Cabo_de_Palos,_España,_2022-07-15,_DD_34.jpg" alt="Cernia" className="w-full h-48 object-cover rounded-xl border-2 border-slate-700 shadow-md" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      La Cernia bruna è un predatore all'apice della catena alimentare. È un ermafrodito proteroginico: nasce femmina e, invecchiando (e se non viene disturbata), diventa maschio.
                    </p>
                    <div className="bg-blue-950/50 border border-blue-800 p-3 rounded-lg mt-4">
                      <span className="block text-xs font-bold text-blue-400 mb-1">💡 APPUNTO DEL BIOLOGO:</span>
                      <span className="text-sm text-slate-300">Nonostante le apparenze rudi, è estremamente sensibile allo stress. Torce eccessive, flash e ressa subacquea nelle sue grotte causano l'abbandono definitivo della tana e bloccano la riproduzione.</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-6xl mb-4">🚫</div>
                    <h3 className="text-xl font-bold text-red-500 mb-2">TANE ABBANDONATE</h3>
                    <p className="text-slate-400">Habitat inospitale. Esemplari fuggiti. Ricerca interrotta.</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Daily Report Modal */}
      {dailyReport && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-slate-800 bg-slate-800/50">
              <h2 className="text-2xl font-bold text-blue-400 tracking-wide uppercase text-center">Report Giornaliero</h2>
            </div>
            
            <div className="p-6">
              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                {dailyReport.text}
              </p>

              <div className="bg-slate-950/50 rounded-xl p-4 mb-8 border border-slate-800">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Impatti:</h3>
                <ul className="space-y-3">
                  {dailyReport.impacts.map((impact, idx) => {
                    const isPositive = impact.includes('+');
                    const isNegative = impact.includes('-') && !impact.includes('Gratuito');
                    
                    let textColor = 'text-slate-300';
                    if (isPositive) textColor = 'text-emerald-400';
                    if (isNegative) textColor = 'text-red-400';
                    if (impact.includes('distrutta') || impact.includes('perse')) textColor = 'text-red-500 font-bold';

                    return (
                      <li key={idx} className={`flex items-start gap-2 ${textColor} text-base`}>
                        <span>{impact}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <button 
                onClick={() => {
                  if (giornoCorrente === 7) {
                    setDailyReport(null);
                    setIsGameOver(true);
                  } else {
                    setDailyReport(null);
                    setGiornoCorrente(prev => prev + 1);
                  }
                }}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-200 flex items-center justify-center gap-2"
              >
                {giornoCorrente === 4 ? (
                  <><span className="text-xl">➡️</span> CONTINUA... (Passa al Giorno 5)</>
                ) : giornoCorrente === 6 ? (
                  <><span className="text-xl">💤</span> VAI A DORMIRE (Passa all&apos;Ultimo Giorno)</>
                ) : giornoCorrente === 7 ? (
                  <><span className="text-xl">📊</span> VAI ALLA VALUTAZIONE FINALE</>
                ) : (
                  <><span className="text-xl">💤</span> VAI A DORMIRE (Passa al Giorno {giornoCorrente + 1})</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game Over Screen */}
      {isGameOver && !showDebriefing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/95 backdrop-blur-md overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
            <div className="p-8 text-center border-b border-slate-800">
              <h1 className={`text-4xl font-black tracking-tight mb-4 ${getGameOverResult().color}`}>
                {getGameOverResult().title}
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                {getGameOverResult().text}
              </p>
            </div>
            
            <div className="p-8 bg-slate-800/30">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
                  <div className="text-slate-400 text-sm font-bold tracking-wider uppercase mb-2">Salute Mare</div>
                  <div className={`text-4xl font-black ${ecosistemaSalute >= 50 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {ecosistemaSalute}%
                  </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
                  <div className="text-slate-400 text-sm font-bold tracking-wider uppercase mb-2">Budget Residuo</div>
                  <div className={`text-4xl font-black ${budget >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {formatCurrency(budget)}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowDebriefing(true)}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span className="text-xl">📂</span> APRI DOSSIER SCIENTIFICO
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Debriefing Screen */}
      {isGameOver && showDebriefing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/95 backdrop-blur-md overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in duration-500 my-8">
            <div className="p-8 border-b border-slate-800 bg-slate-800/50">
              <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
                <span>📂</span> DOSSIER SCIENTIFICO
              </h1>
              <p className="text-slate-400 mt-2">Rapporto finale sullo stato di conservazione dell&apos;Area Marina Protetta Plemmirio (Rete Natura 2000).</p>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Posidonia */}
                <div className={`p-5 rounded-2xl border ${posidoniaViva ? 'bg-emerald-900/20 border-emerald-800/50' : 'bg-red-900/20 border-red-800/50'}`}>
                  <div className="font-bold text-white mb-2 flex items-center justify-between">
                    <span>🌿 Posidonia oceanica</span>
                    {posidoniaViva ? <span className="text-emerald-400 text-sm px-2 py-1 bg-emerald-900/50 rounded-full">PROTETTA</span> : <span className="text-red-400 text-sm px-2 py-1 bg-red-900/50 rounded-full">DEGRADATA</span>}
                  </div>
                  <p className={`text-sm ${posidoniaViva ? 'text-emerald-200/70' : 'text-red-200/70'}`}>
                    {posidoniaViva ? 'Intervento rapido, predazione da Vermocani arginata con successo.' : 'Banchetto dei Vermocani indisturbato, prateria gravemente compromessa (Minaccia I01).'}
                  </p>
                </div>

                {/* Caretta Caretta */}
                <div className={`p-5 rounded-2xl border ${carettaViva ? 'bg-emerald-900/20 border-emerald-800/50' : 'bg-red-900/20 border-red-800/50'}`}>
                  <div className="font-bold text-white mb-2 flex items-center justify-between">
                    <span>🐢 Caretta caretta</span>
                    {carettaViva ? <span className="text-emerald-400 text-sm px-2 py-1 bg-emerald-900/50 rounded-full">SALVA</span> : <span className="text-red-400 text-sm px-2 py-1 bg-red-900/50 rounded-full">SCOMPARSA</span>}
                  </div>
                  <p className={`text-sm ${carettaViva ? 'text-emerald-200/70' : 'text-red-200/70'}`}>
                    {carettaViva ? 'Reti fantasma rimosse dai fondali, esemplari liberati (Pressione F02 contrastata).' : 'Diverse vittime accertate a causa delle reti fantasma e del bracconaggio.'}
                  </p>
                </div>

                {/* Aragosta */}
                <div className={`p-5 rounded-2xl border ${aragostaViva ? 'bg-emerald-900/20 border-emerald-800/50' : 'bg-red-900/20 border-red-800/50'}`}>
                  <div className="font-bold text-white mb-2 flex items-center justify-between">
                    <span>🦞 Palinurus elephas</span>
                    {aragostaViva ? <span className="text-emerald-400 text-sm px-2 py-1 bg-emerald-900/50 rounded-full">PRESENTE</span> : <span className="text-red-400 text-sm px-2 py-1 bg-red-900/50 rounded-full">DECIMATA</span>}
                  </div>
                  <p className={`text-sm ${aragostaViva ? 'text-emerald-200/70' : 'text-red-200/70'}`}>
                    {aragostaViva ? 'Pesca di frodo notturna sventata, stock ittico tutelato.' : 'Popolazione decimate dai bracconieri per il mercato nero locale.'}
                  </p>
                </div>

                {/* Cernia */}
                <div className={`p-5 rounded-2xl border ${cerniaViva ? 'bg-emerald-900/20 border-emerald-800/50' : 'bg-red-900/20 border-red-800/50'}`}>
                  <div className="font-bold text-white mb-2 flex items-center justify-between">
                    <span>🐟 Epinephelus marginatus</span>
                    {cerniaViva ? <span className="text-emerald-400 text-sm px-2 py-1 bg-emerald-900/50 rounded-full">TUTELATA</span> : <span className="text-red-400 text-sm px-2 py-1 bg-red-900/50 rounded-full">FUGGITA</span>}
                  </div>
                  <p className={`text-sm ${cerniaViva ? 'text-emerald-200/70' : 'text-red-200/70'}`}>
                    {cerniaViva ? 'Tane protette dal turismo subacqueo di massa, garantita la riproduzione.' : 'Esemplari fuggiti a causa del grave disturbo antropico nelle grotte.'}
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mt-6">
                <div className="text-slate-400 text-sm font-bold tracking-wider uppercase mb-2">Valutazione Direzione</div>
                <div className="text-2xl font-bold text-white">
                  {budget < 0 ? 'BANCAROTTA (Commissariamento)' : budget === 0 ? 'FONDI AZZERATI (Ente paralizzato)' : ecosistemaSalute < 40 ? 'DISASTRO AMBIENTALE' : 'GESTIONE SOSTENIBILE (Ottimo lavoro)'}
                </div>
              </div>

              <button 
                onClick={resetGame}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-200 mt-8 flex items-center justify-center gap-2"
              >
                <span className="text-xl">🔄</span> INIZIA UN NUOVO MANDATO
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Onboarding Overlay */}
      {!gameStarted && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:py-8 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[95vh]">
            <div className="p-8 md:p-10 overflow-y-auto">
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-3 tracking-tight">CUSTODI DEL PLEMMIRIO</h1>
                <p className="text-lg md:text-xl text-blue-200/80 font-medium">Simulatore Gestionale sulla Biodiversità - Stanza del Mare (Plemmirio)</p>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Benvenuto nella Penisola della Maddalena a Siracusa. Sei stato nominato Direttore dell'Area Marina Protetta del Plemmirio. Il tuo compito non è solo amministrare i fondi, ma proteggere i delicati fondali e la vita marina dalle pressioni antropiche estive.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Card 1 */}
                <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-slate-700 pb-3">
                    <Heart className="w-6 h-6 text-emerald-400" />
                    I Tuoi Parametri Vitali
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <span className="text-2xl mt-1">💰</span>
                      <div>
                        <strong className="text-yellow-400 text-lg block mb-1">Budget (€ 35.000)</strong>
                        <span className="text-slate-400 text-sm leading-relaxed block">I fondi pubblici sono limitati. Ogni intervento ha un costo. Se vai in rosso hai perso.</span>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-2xl mt-1">🌊</span>
                      <div>
                        <strong className="text-emerald-400 text-lg block mb-1">Salute Mare</strong>
                        <span className="text-slate-400 text-sm leading-relaxed block">Indica la limpidezza delle acque e l'equilibrio della rete trofica. Se crolla, l'ecosistema muore.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 border-b border-slate-700 pb-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-400" />
                    Obiettivo Prioritario: Biodiversità
                  </h3>
                  <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                    Oltre ai numeri, hai sotto la tua custodia 4 specie marine fondamentali. <strong className="text-red-400 block mt-2">⚠️ ATTENZIONE: Se un'icona si spegne, la specie è compromessa.</strong>
                  </p>
                  <ul className="space-y-4 text-sm">
                    <li className="flex gap-3 items-start">
                      <span className="text-lg mt-0.5">🌿</span>
                      <span className="text-slate-300 leading-relaxed"><strong className="text-white">Posidonia oceanica:</strong> Il polmone del Mediterraneo, habitat cruciale per la biodiversità.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-lg mt-0.5">🐢</span>
                      <span className="text-slate-300 leading-relaxed"><strong className="text-white">Caretta caretta:</strong> La tartaruga marina, vulnerabile alle reti fantasma e alla plastica.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-lg mt-0.5">🦞</span>
                      <span className="text-slate-300 leading-relaxed"><strong className="text-white">Palinurus elephas:</strong> L'Aragosta mediterranea, gravemente minacciata dalla pesca di frodo.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-lg mt-0.5">🐟</span>
                      <span className="text-slate-300 leading-relaxed"><strong className="text-white">Epinephelus marginatus:</strong> La Cernia bruna, indicatore chiave della salute dei fondali rocciosi.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => setGameStarted(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-200"
                >
                  INIZIA LA SETTIMANA (Giorno 1)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
