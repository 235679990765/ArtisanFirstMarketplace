import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const ImpactQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="quote-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#quote-pattern)" className="text-white" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="w-12 h-12 text-primary-foreground/30 mx-auto mb-8" />
          
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary-foreground leading-relaxed mb-8">
            "When artisans earn fairly, culture survives, communities grow, and pride returns to traditional work."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-primary-foreground/30" />
            <span className="text-primary-foreground/70 text-sm tracking-widest uppercase">Our Belief</span>
            <span className="w-12 h-px bg-primary-foreground/30" />
          </div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary-foreground/20 rounded-tl-lg" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary-foreground/20 rounded-br-lg" />
    </section>
  );
};

export default ImpactQuote;
