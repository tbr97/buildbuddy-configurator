import { motion } from "framer-motion";
import type { DigitalProduct } from "@/data/services";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: DigitalProduct;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-xl neon-border bg-card card-elevated"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 flex-1 text-sm font-medium leading-snug text-card-foreground">
          {product.name}
        </h3>
        <button className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-accent">
          <ShoppingCart className="h-3.5 w-3.5" />
          Aggiungi al carrello
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
