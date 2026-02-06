import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PartyPopper, Eye, MessageCircle, ClipboardCheck, Users } from "lucide-react";

const goals = [
  { icon: Eye, text: "Showcase artisan products" },
  { icon: PartyPopper, text: "Demonstrate the marketplace concept" },
  { icon: MessageCircle, text: "Interact with artisans and buyers" },
  { icon: ClipboardCheck, text: "Validate pricing, demand, and logistics" },
  { icon: Users, text: "Build partnerships with institutions" }
];

const Festival = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Event
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              At Bharat Tribes Fest
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proposed goals at the festival
            </p>
          </motion.div>

          {/* Goals grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card shadow-soft"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <goal.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-left">{goal.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Festival;
