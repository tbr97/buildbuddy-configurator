import { useState, useCallback, useEffect } from "react";
import { type ComponentCategory, type PCComponent, compatibilityRules, categoryOrder } from "@/data/components";

type SelectedComponents = Record<ComponentCategory, PCComponent | null>;

const emptySelection = (): SelectedComponents =>
  Object.fromEntries(categoryOrder.map((c) => [c, null])) as SelectedComponents;

const STORAGE_KEY = "techlab_config";

export function useConfigurator() {
  const [selected, setSelected] = useState<SelectedComponents>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return emptySelection();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
  }, [selected]);

  const selectComponent = useCallback((category: ComponentCategory, component: PCComponent | null) => {
    setSelected((prev) => ({ ...prev, [category]: component }));
  }, []);

  const clearAll = useCallback(() => {
    setSelected(emptySelection());
  }, []);

  const totalPrice = Object.values(selected).reduce(
    (sum, c) => sum + (c?.price || 0),
    0
  );

  const warnings = compatibilityRules
    .map((r) => r.check(selected))
    .filter(Boolean) as string[];

  const selectedCount = Object.values(selected).filter(Boolean).length;

  const exportConfig = useCallback(() => {
    const items = Object.entries(selected)
      .filter(([, v]) => v)
      .map(([cat, comp]) => `${cat}: ${comp!.brand} ${comp!.name} — €${comp!.price}`)
      .join("\n");
    return `Configurazione TechLab\n${"=".repeat(30)}\n${items}\n${"=".repeat(30)}\nTotale: €${totalPrice.toFixed(2)}`;
  }, [selected, totalPrice]);

  const shareLink = useCallback(() => {
    const ids = Object.entries(selected)
      .filter(([, v]) => v)
      .map(([cat, comp]) => `${cat}=${comp!.id}`)
      .join("&");
    return `${window.location.origin}/configuratore?${ids}`;
  }, [selected]);

  return {
    selected,
    selectComponent,
    clearAll,
    totalPrice,
    warnings,
    selectedCount,
    exportConfig,
    shareLink,
  };
}
