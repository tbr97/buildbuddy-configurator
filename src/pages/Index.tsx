import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import { services, digitalProducts } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredProducts = digitalProducts.slice(0, 4);

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Services */}
      <section className="relative py-20">
        <div className="absolute inset-0 grid-bg" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 font-display text-2xl font-bold uppercase tracking-wider text-gradient md:text-3xl">
              Servizi
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Soluzioni IT complete per privati e aziende. Prenota il servizio che ti serve.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Products Preview */}
      <section className="border-t border-border py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 font-display text-2xl font-bold uppercase tracking-wider text-gradient md:text-3xl">
              Prodotti Digitali
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Licenze software, sistemi operativi e piani priorità per un'assistenza garantita.
            </p>
          </motion.div>

          <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="neon-border text-accent hover:bg-accent/10 hover:text-accent">
              <Link to="/prodotti">
                Esplora Catalogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div>
              <span className="font-display text-lg font-bold tracking-wider text-gradient-warm">
                TUMAS IT
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                Il Tuo IT di fiducia a 360°
              </p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
              <Link to="/configuratore" className="transition-colors hover:text-foreground">Configuratore</Link>
              <Link to="/prodotti" className="transition-colors hover:text-foreground">Prodotti</Link>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Tumas IT
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
