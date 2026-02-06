import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Users, ArrowRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="section-padding bg-accent text-accent-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-pattern)" className="text-white" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-white/30" />
                <span className="text-white/70 font-medium text-sm tracking-[0.3em] uppercase">Connect</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                Join the Movement
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                We're inviting artisan groups, ecosystem partners, and collaborators to join our pilot phase. 
                Together, we can build a fairer future for India's craftspeople.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-accent hover:bg-white/90"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-white border border-white/30 hover:bg-white/10"
                >
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Right - Contact cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-white/60">Founder</span>
                    <p className="font-medium text-white">[Your Name]</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-white/60">Email</span>
                    <p className="font-medium text-white">[your@email.com]</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-white/60">Location</span>
                    <p className="font-medium text-white">India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/10 rounded-tl-2xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-white/10 rounded-br-2xl" />
    </section>
  );
};

export default Contact;
