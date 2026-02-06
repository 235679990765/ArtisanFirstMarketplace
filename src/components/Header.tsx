import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-serif font-bold text-foreground">
              Artisan Marketplace
            </span>
          </div>

          {/* Nav links - hidden on mobile for simplicity */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Vision
            </a>
            <a href="#solution" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
