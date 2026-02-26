import { Monitor, Shield, Cloud, Wrench, Network, Headphones, Server, Code } from "lucide-react";

export interface ITService {
  id: string;
  title: string;
  description: string;
  icon: typeof Monitor;
  features: string[];
}

export const services: ITService[] = [
  {
    id: "assemblaggio",
    title: "Assemblaggio PC",
    description: "PC desktop personalizzati per gaming, lavoro e produttività. Configurazione ottimizzata per le tue esigenze.",
    icon: Monitor,
    features: ["Build su misura", "Test stress completo", "Garanzia 2 anni"],
  },
  {
    id: "assistenza",
    title: "Assistenza Tecnica",
    description: "Riparazione e manutenzione hardware e software per privati e aziende. Interventi rapidi.",
    icon: Wrench,
    features: ["Diagnosi gratuita", "Intervento rapido", "Assistenza remota"],
  },
  {
    id: "sicurezza",
    title: "Sicurezza Informatica",
    description: "Protezione completa dei tuoi dati e dispositivi. Antivirus, firewall e backup professionali.",
    icon: Shield,
    features: ["Analisi vulnerabilità", "Backup automatici", "Monitoraggio 24/7"],
  },
  {
    id: "cloud",
    title: "Soluzioni Cloud",
    description: "Migrazione e gestione infrastrutture cloud. Server virtuali, storage e servizi gestiti.",
    icon: Cloud,
    features: ["Setup completo", "Migrazione dati", "Scalabilità garantita"],
  },
  {
    id: "reti",
    title: "Reti & Networking",
    description: "Progettazione e installazione reti LAN/WiFi per uffici, negozi e abitazioni.",
    icon: Network,
    features: ["Cablaggio strutturato", "WiFi enterprise", "VPN sicure"],
  },
  {
    id: "supporto",
    title: "Supporto IT Aziendale",
    description: "Contratti di assistenza dedicata per aziende. Help desk, gestione parco macchine e consulenza.",
    icon: Headphones,
    features: ["SLA garantiti", "Help desk dedicato", "Report mensili"],
  },
  {
    id: "server",
    title: "Server & NAS",
    description: "Configurazione server aziendali e NAS per storage centralizzato e condivisione file sicura.",
    icon: Server,
    features: ["RAID configurato", "Backup integrato", "Accesso remoto"],
  },
  {
    id: "sviluppo",
    title: "Sviluppo Software",
    description: "Soluzioni software personalizzate, automazione processi e integrazione sistemi aziendali.",
    icon: Code,
    features: ["Analisi requisiti", "Sviluppo agile", "Manutenzione inclusa"],
  },
];
