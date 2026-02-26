import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { digitalProducts, type DigitalProduct } from "@/data/services";

type Filter = "all" | DigitalProduct["category"];

const filters: { label: string; value: Filter }[] = [
  { label: "Tutti", value: "all" },
  { label: "Piani Priorità", value: "priority" },
  { label: "Software", value: "software" },
  { label: "Sistemi Operativi", value: "os" },
];

const Products = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all"
    ? digitalProducts
    : digitalProducts.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      <section className="hero-gradient py-12">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-2xl font-bold uppercase tracking-wider text-gradient md:text-3xl">
              Prodotti Digitali
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Licenze software, chiavi Windows, antivirus e piani di assistenza prioritaria.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-8">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                filter === f.value
                  ? "bg-primary text-primary-foreground glow-pink"
                  : "neon-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
