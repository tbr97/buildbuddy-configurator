import { motion } from "framer-motion";
import type { ITService } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  service: ITService;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-xl neon-border bg-card p-6 card-elevated"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-pink">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-card-foreground">
        {service.title}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <ul className="mb-4 space-y-1.5">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>

      {service.id === "progettazione-pc" ? (
        <Link
          to="/configuratore"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-neon-cyan"
        >
          Configura ora
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-neon-cyan">
          Prenota
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      )}
    </motion.div>
  );
};

export default ServiceCard;
