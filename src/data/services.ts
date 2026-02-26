import { Headphones, MessageSquare, Monitor, Wrench, Package, Settings } from "lucide-react";

export interface ITService {
  id: string;
  title: string;
  description: string;
  icon: typeof Monitor;
  features: string[];
  bookable: boolean;
}

export const services: ITService[] = [
  {
    id: "supporto-tecnico",
    title: "Supporto Tecnico",
    description: "Assistenza completa per risolvere qualsiasi problema tecnico, da remoto o in sede. Interventi rapidi e risolutivi.",
    icon: Headphones,
    features: ["Diagnosi approfondita", "Assistenza remota e on-site", "Tempistiche rapide"],
    bookable: true,
  },
  {
    id: "consulenza",
    title: "Consulenza",
    description: "Consulenza IT personalizzata per privati e aziende. Ti guidiamo nella scelta delle soluzioni migliori per le tue esigenze.",
    icon: MessageSquare,
    features: ["Analisi esigenze", "Soluzioni su misura", "Report dettagliato"],
    bookable: true,
  },
  {
    id: "progettazione-pc",
    title: "Progettazione PC",
    description: "Progettazione e assemblaggio PC personalizzati per gaming, lavoro e produttività. Componenti selezionati con cura.",
    icon: Monitor,
    features: ["Build su misura", "Test completo", "Garanzia componenti"],
    bookable: true,
  },
  {
    id: "assistenza-pc",
    title: "Assistenza PC",
    description: "Manutenzione, riparazione e upgrade del tuo computer. Pulizia, sostituzione componenti e ottimizzazione.",
    icon: Wrench,
    features: ["Riparazione hardware", "Upgrade componenti", "Pulizia e manutenzione"],
    bookable: true,
  },
  {
    id: "assistenza-prodotti",
    title: "Assistenza Prodotti",
    description: "Supporto dedicato per i prodotti digitali acquistati. Installazione, configurazione e risoluzione problemi.",
    icon: Package,
    features: ["Installazione guidata", "Configurazione", "Troubleshooting"],
    bookable: true,
  },
  {
    id: "ottimizzazione-os",
    title: "Ottimizzazione OS",
    description: "Ottimizzazione del sistema operativo per prestazioni al massimo. Pulizia, aggiornamenti e configurazione avanzata.",
    icon: Settings,
    features: ["Pulizia sistema", "Ottimizzazione avvio", "Sicurezza avanzata"],
    bookable: true,
  },
];

export interface DigitalProduct {
  id: string;
  name: string;
  category: "priority" | "software" | "os";
  imageUrl: string;
  price?: string;
}

export const digitalProducts: DigitalProduct[] = [
  { id: "p1", name: "Priorità Elite", category: "priority", imageUrl: "https://static.wixstatic.com/media/abd541_d599fdb73f524a8ab43ef66c0fae4b16~mv2.png/v1/fill/w_433,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_d599fdb73f524a8ab43ef66c0fae4b16~mv2.png" },
  { id: "p2", name: "Priorità Premium", category: "priority", imageUrl: "https://static.wixstatic.com/media/abd541_ae33e3bf94a64d8fb505fd320bc9b389~mv2.png/v1/fill/w_433,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_ae33e3bf94a64d8fb505fd320bc9b389~mv2.png" },
  { id: "p3", name: "Priorità Base", category: "priority", imageUrl: "https://static.wixstatic.com/media/abd541_20b10740cdd741aeb6b02f71adc1c665~mv2.png/v1/fill/w_433,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_20b10740cdd741aeb6b02f71adc1c665~mv2.png" },
  { id: "p4", name: "Priorità Avanzata", category: "priority", imageUrl: "https://static.wixstatic.com/media/abd541_cf8d8b1dbd424bbfafe146d0c6cbbea2~mv2.png/v1/fill/w_433,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_cf8d8b1dbd424bbfafe146d0c6cbbea2~mv2.png" },
  { id: "s1", name: "Office 2024 Professional Plus LTSC Key", category: "software", imageUrl: "https://static.wixstatic.com/media/abd541_65c47c810c164512b700afcdf12a7a32~mv2.jpg/v1/fill/w_433,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_65c47c810c164512b700afcdf12a7a32~mv2.jpg" },
  { id: "s2", name: "Bitdefender Total Security 1 Anno 5 PC Key", category: "software", imageUrl: "https://static.wixstatic.com/media/abd541_f1d245bdce3c46f79d508e94b6ab2194~mv2.png/v1/fill/w_433,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_f1d245bdce3c46f79d508e94b6ab2194~mv2.png" },
  { id: "s3", name: "VMWare vSphere 8 Enterprise Plus + vCenter Key", category: "software", imageUrl: "https://static.wixstatic.com/media/abd541_d4488a9784df4b05b10f065c64a7c8d5~mv2.webp/v1/fill/w_433,h_425,al_c,q_80,enc_avif,quality_auto/abd541_d4488a9784df4b05b10f065c64a7c8d5~mv2.webp" },
  { id: "s4", name: "VMWare Workstation Pro 17 Key 1 PC", category: "software", imageUrl: "https://static.wixstatic.com/media/abd541_46a70e02763240cca1d1f597b8b4b494~mv2.webp/v1/fill/w_433,h_433,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_46a70e02763240cca1d1f597b8b4b494~mv2.webp" },
  { id: "o1", name: "Windows 11 Home Key 1 PC", category: "os", imageUrl: "https://static.wixstatic.com/media/abd541_3d394b9ded6f436cb7f67a2b7ca71653~mv2.png/v1/fill/w_433,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_3d394b9ded6f436cb7f67a2b7ca71653~mv2.png" },
  { id: "o2", name: "Windows 11 Pro Key 1 PC", category: "os", imageUrl: "https://static.wixstatic.com/media/abd541_3d394b9ded6f436cb7f67a2b7ca71653~mv2.png/v1/fill/w_433,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_3d394b9ded6f436cb7f67a2b7ca71653~mv2.png" },
  { id: "o3", name: "Windows Server 2022 Standard 16 Core Key", category: "os", imageUrl: "https://static.wixstatic.com/media/abd541_2f658abb39f845ef9a5b11c0362056c6~mv2.jpg/v1/fill/w_433,h_347,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_2f658abb39f845ef9a5b11c0362056c6~mv2.jpg" },
  { id: "o4", name: "Windows Server 2022 Datacenter 16 Core Key", category: "os", imageUrl: "https://static.wixstatic.com/media/abd541_2f658abb39f845ef9a5b11c0362056c6~mv2.jpg/v1/fill/w_433,h_347,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/abd541_2f658abb39f845ef9a5b11c0362056c6~mv2.jpg" },
];
