import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-artisan.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Artisan weaving traditional textile" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative tribal pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tribal-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tribal-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-secondary mb-8 rounded-full"
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm text-primary mb-8 shadow-soft border border-border/50"
          >
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Fair Trade • Community-Led • Artisan-First</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6"
          >
            Artisan{" "}
            <span className="relative">
              <span className="text-primary">Marketplace</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-secondary/60 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/80 mb-6 font-light leading-relaxed"
          >
            A fair, simple, and community-led platform for India's tribal & home-based artisans
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            Empowering artisans to showcase, sell, and sustain their craft — without middlemen, without language barriers, and without digital complexity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl">
              <Heart className="w-5 h-5" />
              Join the Movement
            </Button>
            <Button variant="hero-outline" size="xl">
              Explore Our Vision
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center gap-6"
          >
            <span className="text-sm text-muted-foreground">Aligned with:</span>
            <div className="flex flex-wrap gap-4">
              {["TRIFED", "Ministry of Tribal Affairs", "SHGs"].map((org, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-foreground/80 border border-border/50"
                >
                  {org}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
