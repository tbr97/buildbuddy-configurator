export type ComponentCategory = "cpu" | "gpu" | "ram" | "storage" | "psu" | "case" | "cooler" | "motherboard";

export interface PCComponent {
  id: string;
  category: ComponentCategory;
  name: string;
  brand: string;
  price: number;
  specs: Record<string, string>;
  socket?: string;
  formFactor?: string;
  tdp?: number;
  wattage?: number;
  image?: string;
}

export interface CompatibilityRule {
  check: (selected: Record<ComponentCategory, PCComponent | null>) => string | null;
}

export const categoryLabels: Record<ComponentCategory, string> = {
  motherboard: "Scheda Madre",
  cpu: "Processore",
  gpu: "Scheda Video",
  ram: "Memoria RAM",
  storage: "Storage",
  psu: "Alimentatore",
  case: "Case",
  cooler: "Dissipatore",
};

export const categoryOrder: ComponentCategory[] = [
  "motherboard", "cpu", "cooler", "gpu", "ram", "storage", "psu", "case"
];

export const mockComponents: PCComponent[] = [
  // Motherboards
  { id: "mb1", category: "motherboard", name: "B660M DS3H", brand: "Gigabyte", price: 119, socket: "LGA1700", formFactor: "mATX", specs: { chipset: "B660", ram_slots: "2", max_ram: "64GB" } },
  { id: "mb2", category: "motherboard", name: "MAG B760 TOMAHAWK", brand: "MSI", price: 199, socket: "LGA1700", formFactor: "ATX", specs: { chipset: "B760", ram_slots: "4", max_ram: "128GB" } },
  { id: "mb3", category: "motherboard", name: "B550 AORUS PRO", brand: "Gigabyte", price: 169, socket: "AM4", formFactor: "ATX", specs: { chipset: "B550", ram_slots: "4", max_ram: "128GB" } },
  { id: "mb4", category: "motherboard", name: "X670E AORUS MASTER", brand: "Gigabyte", price: 449, socket: "AM5", formFactor: "ATX", specs: { chipset: "X670E", ram_slots: "4", max_ram: "128GB" } },
  { id: "mb5", category: "motherboard", name: "ROG STRIX B650E-F", brand: "ASUS", price: 329, socket: "AM5", formFactor: "ATX", specs: { chipset: "B650E", ram_slots: "4", max_ram: "128GB" } },

  // CPUs
  { id: "cpu1", category: "cpu", name: "Core i5-13400F", brand: "Intel", price: 189, socket: "LGA1700", tdp: 65, specs: { cores: "10", threads: "16", base_clock: "2.5 GHz", boost_clock: "4.6 GHz" } },
  { id: "cpu2", category: "cpu", name: "Core i7-13700K", brand: "Intel", price: 389, socket: "LGA1700", tdp: 125, specs: { cores: "16", threads: "24", base_clock: "3.4 GHz", boost_clock: "5.4 GHz" } },
  { id: "cpu3", category: "cpu", name: "Ryzen 5 5600X", brand: "AMD", price: 159, socket: "AM4", tdp: 65, specs: { cores: "6", threads: "12", base_clock: "3.7 GHz", boost_clock: "4.6 GHz" } },
  { id: "cpu4", category: "cpu", name: "Ryzen 7 7700X", brand: "AMD", price: 319, socket: "AM5", tdp: 105, specs: { cores: "8", threads: "16", base_clock: "4.5 GHz", boost_clock: "5.4 GHz" } },
  { id: "cpu5", category: "cpu", name: "Ryzen 9 7950X", brand: "AMD", price: 549, socket: "AM5", tdp: 170, specs: { cores: "16", threads: "32", base_clock: "4.5 GHz", boost_clock: "5.7 GHz" } },
  { id: "cpu6", category: "cpu", name: "Core i9-13900K", brand: "Intel", price: 549, socket: "LGA1700", tdp: 125, specs: { cores: "24", threads: "32", base_clock: "3.0 GHz", boost_clock: "5.8 GHz" } },

  // Coolers
  { id: "cool1", category: "cooler", name: "Hyper 212 EVO V2", brand: "Cooler Master", price: 39, tdp: 150, specs: { type: "Tower Air", fans: "1x 120mm" } },
  { id: "cool2", category: "cooler", name: "NH-D15", brand: "Noctua", price: 99, tdp: 250, specs: { type: "Dual Tower Air", fans: "2x 140mm" } },
  { id: "cool3", category: "cooler", name: "Kraken X63", brand: "NZXT", price: 149, tdp: 300, specs: { type: "AIO 280mm", fans: "2x 140mm" } },
  { id: "cool4", category: "cooler", name: "iCUE H150i ELITE", brand: "Corsair", price: 169, tdp: 350, specs: { type: "AIO 360mm", fans: "3x 120mm" } },

  // GPUs
  { id: "gpu1", category: "gpu", name: "GeForce RTX 4060", brand: "NVIDIA", price: 319, tdp: 115, specs: { vram: "8GB GDDR6", cuda_cores: "3072" } },
  { id: "gpu2", category: "gpu", name: "GeForce RTX 4070 Ti", brand: "NVIDIA", price: 799, tdp: 285, specs: { vram: "12GB GDDR6X", cuda_cores: "7680" } },
  { id: "gpu3", category: "gpu", name: "Radeon RX 7800 XT", brand: "AMD", price: 499, tdp: 263, specs: { vram: "16GB GDDR6", stream_processors: "3840" } },
  { id: "gpu4", category: "gpu", name: "GeForce RTX 4090", brand: "NVIDIA", price: 1599, tdp: 450, specs: { vram: "24GB GDDR6X", cuda_cores: "16384" } },
  { id: "gpu5", category: "gpu", name: "Radeon RX 7600", brand: "AMD", price: 269, tdp: 165, specs: { vram: "8GB GDDR6", stream_processors: "2048" } },

  // RAM
  { id: "ram1", category: "ram", name: "Vengeance LPX 16GB (2x8GB) DDR4-3200", brand: "Corsair", price: 49, specs: { type: "DDR4", speed: "3200 MHz", capacity: "16GB" } },
  { id: "ram2", category: "ram", name: "Trident Z5 32GB (2x16GB) DDR5-6000", brand: "G.Skill", price: 109, specs: { type: "DDR5", speed: "6000 MHz", capacity: "32GB" } },
  { id: "ram3", category: "ram", name: "Fury Beast 32GB (2x16GB) DDR4-3600", brand: "Kingston", price: 79, specs: { type: "DDR4", speed: "3600 MHz", capacity: "32GB" } },
  { id: "ram4", category: "ram", name: "Vengeance 64GB (2x32GB) DDR5-5600", brand: "Corsair", price: 189, specs: { type: "DDR5", speed: "5600 MHz", capacity: "64GB" } },

  // Storage
  { id: "sto1", category: "storage", name: "970 EVO Plus 1TB NVMe", brand: "Samsung", price: 89, specs: { type: "NVMe SSD", capacity: "1TB", read: "3500 MB/s" } },
  { id: "sto2", category: "storage", name: "SN770 2TB NVMe", brand: "WD", price: 129, specs: { type: "NVMe SSD", capacity: "2TB", read: "5150 MB/s" } },
  { id: "sto3", category: "storage", name: "MX500 500GB SATA", brand: "Crucial", price: 45, specs: { type: "SATA SSD", capacity: "500GB", read: "560 MB/s" } },
  { id: "sto4", category: "storage", name: "990 PRO 2TB NVMe", brand: "Samsung", price: 189, specs: { type: "NVMe SSD", capacity: "2TB", read: "7450 MB/s" } },

  // PSU
  { id: "psu1", category: "psu", name: "RM650x 650W 80+ Gold", brand: "Corsair", price: 99, wattage: 650, specs: { certification: "80+ Gold", modular: "Full" } },
  { id: "psu2", category: "psu", name: "RM850x 850W 80+ Gold", brand: "Corsair", price: 139, wattage: 850, specs: { certification: "80+ Gold", modular: "Full" } },
  { id: "psu3", category: "psu", name: "Toughpower GF3 1000W 80+ Gold", brand: "Thermaltake", price: 179, wattage: 1000, specs: { certification: "80+ Gold", modular: "Full" } },
  { id: "psu4", category: "psu", name: "SuperNOVA 750 G7 80+ Gold", brand: "EVGA", price: 109, wattage: 750, specs: { certification: "80+ Gold", modular: "Full" } },

  // Cases
  { id: "case1", category: "case", name: "4000D Airflow", brand: "Corsair", price: 99, formFactor: "ATX", specs: { type: "Mid Tower", fans_included: "2x 120mm" } },
  { id: "case2", category: "case", name: "H510 Flow", brand: "NZXT", price: 89, formFactor: "ATX", specs: { type: "Mid Tower", fans_included: "2x 120mm" } },
  { id: "case3", category: "case", name: "NR200P", brand: "Cooler Master", price: 99, formFactor: "mITX", specs: { type: "Mini ITX", fans_included: "2x 120mm" } },
  { id: "case4", category: "case", name: "Meshify 2 Compact", brand: "Fractal Design", price: 119, formFactor: "ATX", specs: { type: "Mid Tower", fans_included: "3x 120mm" } },
];

export const compatibilityRules: CompatibilityRule[] = [
  {
    check: (selected) => {
      const mb = selected.motherboard;
      const cpu = selected.cpu;
      if (mb && cpu && mb.socket !== cpu.socket) {
        return `Socket incompatibile: ${mb.name} (${mb.socket}) non supporta ${cpu.name} (${cpu.socket})`;
      }
      return null;
    },
  },
  {
    check: (selected) => {
      const mb = selected.motherboard;
      const cs = selected.case;
      if (mb && cs) {
        const mbSize = { "ATX": 3, "mATX": 2, "mITX": 1 };
        const csSize = { "ATX": 3, "mATX": 2, "mITX": 1 };
        const mbVal = mbSize[mb.formFactor as keyof typeof mbSize] || 3;
        const csVal = csSize[cs.formFactor as keyof typeof csSize] || 3;
        if (mbVal > csVal) {
          return `Form factor incompatibile: ${mb.name} (${mb.formFactor}) non entra in ${cs.name} (${cs.formFactor})`;
        }
      }
      return null;
    },
  },
  {
    check: (selected) => {
      const totalTdp = (selected.cpu?.tdp || 0) + (selected.gpu?.tdp || 0) + 100;
      const psu = selected.psu;
      if (psu && psu.wattage && totalTdp > psu.wattage) {
        return `Alimentatore insufficiente: consumo stimato ~${totalTdp}W, PSU ${psu.wattage}W. Consigliamo almeno ${Math.ceil(totalTdp * 1.2)}W`;
      }
      return null;
    },
  },
  {
    check: (selected) => {
      const cooler = selected.cooler;
      const cpu = selected.cpu;
      if (cooler && cpu && cpu.tdp && cooler.tdp && cpu.tdp > cooler.tdp) {
        return `Dissipatore potrebbe non bastare: CPU TDP ${cpu.tdp}W > dissipatore ${cooler.tdp}W`;
      }
      return null;
    },
  },
];
