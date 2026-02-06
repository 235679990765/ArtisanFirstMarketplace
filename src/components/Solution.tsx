import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Store, Languages, MapPin, GraduationCap, Scale, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Store,
    title: "Direct-to-Consumer Selling",
    description: "Artisans list and sell products directly without intermediaries, keeping 80%+ of revenue."
  },
  {
    icon: Languages,
    title: "Multilingual Interface",
    description: "Platform available in 10+ regional languages, designed for first-time digital users."
  },
  {
    icon: MapPin,
    title: "Collection Centers",
    description: "Local aggregation points reduce logistics complexity and shipping costs by 40%."
  },
  {
    icon: GraduationCap,
    title: "Assisted Onboarding",
    description: "Field teams help artisans with photography, listing, and digital literacy training."
  },
  {
    icon: Scale,
    title: "Transparent Pricing",
    description: "Clear pricing structure, low commission, no hidden charges. Fair for everyone."
  }
];

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="solution" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-px bg-primary" />
              <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase">Our Approach</span>
              <span className="w-12 h-px bg-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Technology That Serves Communities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A tribal-focused marketplace blending simple digital tools with strong offline support networks.
            </p>
          </motion.div>

          {/* Solutions grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group p-8 rounded-2xl bg-card shadow-soft border border-border/50 hover:shadow-card hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Number badge */}
                <span className="absolute top-4 right-4 text-6xl font-serif font-bold text-muted/20">
                  {(index + 1).toString().padStart(2, '0')}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <solution.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
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
