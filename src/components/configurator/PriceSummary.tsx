import { motion } from "framer-motion";
import { type ComponentCategory, type PCComponent, categoryLabels, categoryOrder } from "@/data/components";
import { Euro, AlertTriangle, Package } from "lucide-react";

interface PriceSummaryProps {
  selected: Record<ComponentCategory, PCComponent | null>;
  totalPrice: number;
  warnings: string[];
  selectedCount: number;
}

const PriceSummary = ({ selected, totalPrice, warnings, selectedCount }: PriceSummaryProps) => {
  return (
    <div className="rounded-xl neon-border bg-card p-5 card-elevated">
      <div className="mb-4 flex items-center gap-2">
        <Package className="h-5 w-5 text-primary" />
        <h3 className="font-display text-lg font-semibold">Riepilogo</h3>
      </div>

      <div className="space-y-2 mb-4">
        {categoryOrder.map((cat) => {
          const comp = selected[cat];
          return (
            <div key={cat} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{categoryLabels[cat]}</span>
              {comp ? (
                <span className="font-medium text-card-foreground">€{comp.price}</span>
              ) : (
                <span className="text-xs text-muted-foreground/50">—</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="border-t border-border pt-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="font-display text-base font-semibold">Totale stimato</span>
          <motion.span
            key={totalPrice}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-1 text-xl font-bold text-primary"
          >
            <Euro className="h-5 w-5" />
            {totalPrice.toFixed(2)}
          </motion.span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {selectedCount}/8 componenti selezionati
        </p>
      </div>

      {warnings.length > 0 && (
        <div className="space-y-2">
          {warnings.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-2 rounded-lg bg-destructive/10 p-3 text-xs text-destructive"
            >
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {w}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceSummary;
