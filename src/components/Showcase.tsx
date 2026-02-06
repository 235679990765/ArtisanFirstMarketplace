import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import craftPottery from "@/assets/craft-pottery.jpg";
import craftTextile from "@/assets/craft-textile.jpg";
import craftJewelry from "@/assets/craft-jewelry.jpg";

const crafts = [
  {
    image: craftPottery,
    title: "Traditional Pottery",
    description: "Hand-crafted terracotta with intricate tribal patterns",
    artisan: "Warli Community"
  },
  {
    image: craftTextile,
    title: "Handwoven Textiles",
    description: "Vibrant fabrics woven on traditional wooden looms",
    artisan: "Banjara Artisans"
  },
  {
    image: craftJewelry,
    title: "Tribal Jewelry",
    description: "Brass and bead jewelry with ancestral designs",
    artisan: "Dokra Craftsmen"
  }
];

const Showcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-px bg-secondary" />
              <span className="text-secondary font-medium text-sm tracking-[0.3em] uppercase">Crafts</span>
              <span className="w-12 h-px bg-secondary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Timeless Artistry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover authentic tribal crafts, each piece carrying centuries of tradition and the artisan's personal story.
            </p>
          </motion.div>

          {/* Craft cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {crafts.map((craft, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={craft.image}
                      alt={craft.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-accent-foreground font-medium text-sm tracking-wide">
                      View Collection →
                    </span>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
                </div>
                
                <div className="px-1">
                  <span className="text-xs font-medium text-secondary tracking-wider uppercase mb-2 block">
                    {craft.artisan}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {craft.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {craft.description}
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

export default Showcase;
