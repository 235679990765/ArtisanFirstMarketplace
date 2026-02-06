import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Percent, Globe, Truck, Home } from "lucide-react";

const challenges = [
  { icon: Users, text: "Dependence on middlemen", detail: "Artisans lose up to 60% of product value" },
  { icon: Percent, text: "High platform commissions", detail: "Major marketplaces charge 20-40% fees" },
  { icon: Globe, text: "Language barriers", detail: "Most platforms only support English" },
  { icon: Truck, text: "Complex logistics", detail: "Expensive shipping from remote areas" },
  { icon: Home, text: "Limited access for women", detail: "Home-based artisans lack digital presence" },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-secondary" />
              <span className="text-secondary font-medium text-sm tracking-[0.3em] uppercase">The Challenge</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 max-w-2xl">
              Why India's Artisans Struggle to Reach Markets
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Despite their exceptional skills, most tribal artisans face systemic barriers that keep them trapped in poverty.
            </p>
          </motion.div>

          {/* Challenges - staggered layout */}
          <div className="space-y-4">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group flex items-center gap-5 p-5 rounded-xl bg-card shadow-soft border border-border/50 hover:shadow-card hover:border-secondary/30 transition-all duration-300"
                style={{ marginLeft: `${index * 2}%` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-0.5">{item.text}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
                <div className="hidden md:block w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
