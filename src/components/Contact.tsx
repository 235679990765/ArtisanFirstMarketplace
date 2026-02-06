import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Users } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-lg opacity-90 max-w-xl mx-auto">
              We're inviting artisan groups, partners, and ecosystem collaborators for the pilot phase.
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
              <Users className="w-8 h-8" />
              <span className="font-medium">Founder</span>
              <span className="text-sm opacity-80">[Your Name]</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
              <Mail className="w-8 h-8" />
              <span className="font-medium">Email</span>
              <span className="text-sm opacity-80">[your@email.com]</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
              <MapPin className="w-8 h-8" />
              <span className="font-medium">Location</span>
              <span className="text-sm opacity-80">India</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-primary font-semibold"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
