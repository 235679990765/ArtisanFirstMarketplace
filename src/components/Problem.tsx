import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Percent, Globe, Truck, Home, TrendingDown, Heart, BookOpen } from "lucide-react";

const challenges = [
  { icon: Users, text: "Dependence on middlemen" },
  { icon: Percent, text: "High commissions on platforms" },
  { icon: Globe, text: "Language barriers" },
  { icon: Truck, text: "High logistics costs" },
  { icon: Home, text: "Limited access for women artisans" },
];

const consequences = [
  { icon: TrendingDown, text: "Artisans earn less", color: "text-secondary" },
  { icon: Heart, text: "Crafts lose value", color: "text-secondary" },
  { icon: BookOpen, text: "Traditional knowledge disappears", color: "text-secondary" },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-medium text-sm tracking-wider uppercase mb-4 block">
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              The Problem We Are Solving
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Despite their exceptional skills, most tribal artisans struggle to sell beyond local markets.
            </p>
          </motion.div>

          {/* Challenges grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">They face:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Consequences */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">As a result:</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {consequences.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
