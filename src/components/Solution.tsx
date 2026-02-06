import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Store, Languages, MapPin, GraduationCap, Scale } from "lucide-react";

const solutions = [
  {
    icon: Store,
    title: "Direct-to-Consumer Selling",
    description: "Artisans list and sell products without intermediaries."
  },
  {
    icon: Languages,
    title: "Multilingual & Simple Interface",
    description: "Designed for first-time digital users with local language support."
  },
  {
    icon: MapPin,
    title: "Collection & Aggregation Centers",
    description: "Local centers reduce logistics cost and complexity."
  },
  {
    icon: GraduationCap,
    title: "Assisted Onboarding & Training",
    description: "Support for artisans with limited digital access."
  },
  {
    icon: Scale,
    title: "Transparent & Fair Model",
    description: "Clear pricing, low commission, no hidden charges."
  }
];

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-medium text-sm tracking-wider uppercase mb-4 block">
              How We Do It
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Our Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A tribal-focused artisan marketplace that blends simple technology with strong offline support.
            </p>
          </motion.div>

          {/* Solutions list */}
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
