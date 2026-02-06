import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Coins, Shield, Cpu } from "lucide-react";

const visionPoints = [
  {
    icon: ShoppingBag,
    title: "Direct Sales",
    description: "Artisans sell directly to buyers"
  },
  {
    icon: Coins,
    title: "Fair Value",
    description: "Craft value stays with the creator"
  },
  {
    icon: Shield,
    title: "Cultural Dignity",
    description: "Culture is preserved with dignity"
  },
  {
    icon: Cpu,
    title: "Empowering Tech",
    description: "Technology serves communities"
  }
];

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We envision a future where tradition meets opportunity, and every artisan thrives.
            </p>
          </motion.div>

          {/* Vision cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
