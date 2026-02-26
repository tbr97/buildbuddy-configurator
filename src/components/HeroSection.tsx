import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient py-24 md:py-32">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/20 glow-primary"
          >
            <Cpu className="h-8 w-8 text-primary-foreground" />
          </motion.div>

          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
            Soluzioni IT
            <br />
            <span className="text-gradient">su Misura</span>
          </h1>

          <p className="mb-8 text-lg text-primary-foreground/70 md:text-xl">
            Assemblaggio PC, assistenza tecnica, sicurezza e cloud.
            <br className="hidden md:block" />
            Il tuo partner tecnologico di fiducia.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="glow-primary">
              <Link to="/configuratore">
                Configura il tuo PC
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Scopri i servizi
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
