import { motion } from "framer-motion";
import { ArrowRight, Cloud, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient py-28 md:py-40">
      {/* Neon grid */}
      <div className="absolute inset-0 grid-bg-hero" />

      {/* Glowing orbs */}
      <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-accent/10 blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-2 font-display text-5xl font-black tracking-wider text-gradient-warm md:text-7xl"
          >
            TUMAS IT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-3 font-display text-xl font-medium tracking-wide text-foreground/90 md:text-2xl"
          >
            Il Tuo IT di fiducia a 360°
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mb-8 flex items-center justify-center gap-2 text-accent"
          >
            <Cloud className="h-5 w-5" />
            <span className="font-display text-lg font-semibold tracking-wide">
              Da oggi anche in cloud!
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg" className="glow-pink">
              <Link to="/configuratore">
                <Zap className="mr-2 h-4 w-4" />
                Configura il tuo PC
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent/30 text-accent hover:bg-accent/10 hover:text-accent"
            >
              <Link to="/prodotti">
                Prodotti Digitali
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
