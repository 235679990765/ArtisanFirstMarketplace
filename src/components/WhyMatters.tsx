import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, TreePine, Users, PlaneTakeoff, Award } from "lucide-react";

const benefits = [
  { icon: TreePine, text: "Culture survives" },
  { icon: Users, text: "Communities grow" },
  { icon: PlaneTakeoff, text: "Migration reduces" },
  { icon: Award, text: "Pride returns to traditional work" }
];

const WhyMatters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Why This Matters
            </h2>
            <p className="text-xl text-muted-foreground">
              When artisans earn fairly:
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-card shadow-soft"
              >
                <benefit.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed">
              This platform is not just a marketplace —
              <br />
              <span className="text-primary font-semibold">it is a livelihood bridge between tradition and opportunity.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;
