import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 font-display text-3xl font-bold md:text-4xl">
              I Nostri Servizi
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Soluzioni complete per ogni esigenza informatica, dal singolo utente all'azienda.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TechLab — Soluzioni IT Professionali
        </div>
      </footer>
    </div>
  );
};

export default Index;
