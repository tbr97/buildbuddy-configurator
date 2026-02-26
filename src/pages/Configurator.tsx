import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { categoryOrder } from "@/data/components";
import { useConfigurator } from "@/hooks/useConfigurator";
import ComponentSelector from "@/components/configurator/ComponentSelector";
import PriceSummary from "@/components/configurator/PriceSummary";
import SaveSharePanel from "@/components/configurator/SaveSharePanel";

const Configurator = () => {
  const {
    selected,
    selectComponent,
    clearAll,
    totalPrice,
    warnings,
    selectedCount,
    exportConfig,
    shareLink,
  } = useConfigurator();

  const socketFilter = selected.motherboard?.socket;

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-gradient py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
              <Cpu className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                Configuratore PC
              </h1>
              <p className="text-sm text-primary-foreground/60">
                Seleziona i componenti e verifica la compatibilità in tempo reale
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Component selectors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="space-y-3"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold">Componenti</h2>
              <SaveSharePanel
                exportConfig={exportConfig}
                shareLink={shareLink}
                clearAll={clearAll}
                selectedCount={selectedCount}
              />
            </div>

            {categoryOrder.map((cat) => (
              <ComponentSelector
                key={cat}
                category={cat}
                selected={selected[cat]}
                onSelect={(comp) => selectComponent(cat, comp)}
                socketFilter={cat === "cpu" ? socketFilter || undefined : undefined}
              />
            ))}
          </motion.div>

          {/* Sidebar summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <PriceSummary
              selected={selected}
              totalPrice={totalPrice}
              warnings={warnings}
              selectedCount={selectedCount}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
