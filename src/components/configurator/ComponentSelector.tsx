import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, X } from "lucide-react";
import { type ComponentCategory, type PCComponent, mockComponents, categoryLabels } from "@/data/components";

interface ComponentSelectorProps {
  category: ComponentCategory;
  selected: PCComponent | null;
  onSelect: (component: PCComponent | null) => void;
  socketFilter?: string;
}

const ComponentSelector = ({ category, selected, onSelect, socketFilter }: ComponentSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [brandFilter, setBrandFilter] = useState<string>("");

  let available = mockComponents.filter((c) => c.category === category);

  // Apply socket filter for CPU when motherboard is selected
  if (socketFilter && (category === "cpu")) {
    available = available.filter((c) => c.socket === socketFilter);
  }

  if (brandFilter) {
    available = available.filter((c) => c.brand === brandFilter);
  }

  const brands = [...new Set(mockComponents.filter((c) => c.category === category).map((c) => c.brand))];

  return (
    <div className="rounded-lg neon-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-muted/50"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            {categoryLabels[category]}
          </span>
          {selected && (
            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {selected.brand} {selected.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {selected && (
            <>
              <span className="text-sm font-semibold text-foreground">€{selected.price}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(null);
                }}
                className="rounded-md p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                aria-label={`Rimuovi ${categoryLabels[category]}`}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </>
          )}
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border p-3">
              {brands.length > 1 && (
                <div className="mb-3 flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setBrandFilter("")}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                      !brandFilter
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Tutti
                  </button>
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => setBrandFilter(brandFilter === b ? "" : b)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                        brandFilter === b
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              )}

              <div className="space-y-1.5 max-h-64 overflow-y-auto">
                {available.length === 0 ? (
                  <p className="py-4 text-center text-sm text-muted-foreground">
                    Nessun componente compatibile trovato
                  </p>
                ) : (
                  available.map((comp) => {
                    const isSelected = selected?.id === comp.id;
                    return (
                      <button
                        key={comp.id}
                        onClick={() => {
                          onSelect(isSelected ? null : comp);
                          if (!isSelected) setOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors ${
                          isSelected
                            ? "bg-primary/10 ring-1 ring-primary/30"
                            : "hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-card-foreground">
                              {comp.brand} {comp.name}
                            </span>
                            {isSelected && <Check className="h-3.5 w-3.5 text-primary" />}
                          </div>
                          <div className="mt-1 flex flex-wrap gap-1.5">
                            {Object.entries(comp.specs).map(([k, v]) => (
                              <span
                                key={k}
                                className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground"
                              >
                                {v}
                              </span>
                            ))}
                            {comp.socket && (
                              <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] text-accent">
                                {comp.socket}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="ml-3 text-sm font-semibold text-foreground">
                          €{comp.price}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComponentSelector;
