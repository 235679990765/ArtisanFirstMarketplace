import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Handshake } from "lucide-react";

const alignments = [
  "TRIFED's mission of fair trade and tribal market access",
  "Ministry of Tribal Affairs (MoTA) objectives of livelihood creation and cultural preservation"
];

const integrations = [
  "SHGs",
  "Tribal cooperatives",
  "State and regional artisan federations"
];

const Alignment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Partnerships
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Alignment with Government & Ecosystem
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Alignment card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">This initiative aligns with:</h3>
              <ul className="space-y-3">
                {alignments.map((item, index) => (
                  <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Integration card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Designed to integrate with:</h3>
              <ul className="space-y-3">
                {integrations.map((item, index) => (
                  <li key={index} className="text-muted-foreground text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alignment;
