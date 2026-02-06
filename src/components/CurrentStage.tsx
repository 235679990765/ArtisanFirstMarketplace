import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Check } from "lucide-react";

const milestones = [
  "Platform concept & workflow designed",
  "Artisan onboarding model planned",
  "Collection-center approach defined",
  "Training & support framework outlined"
];

const CurrentStage = () => {
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
            className="text-center mb-12"
          >
            <span className="text-secondary font-medium text-sm tracking-wider uppercase mb-4 block">
              Progress
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Current Stage
            </h2>
          </motion.div>

          {/* Stage card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-card"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Phase</span>
                <h3 className="text-xl font-serif font-bold text-foreground">Idea / Concept-to-MVP Stage</h3>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{milestone}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground">
                We are preparing for <span className="text-primary font-medium">pilot implementation</span> with artisan groups and ecosystem partners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurrentStage;
