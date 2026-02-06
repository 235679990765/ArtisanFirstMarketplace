import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-serif font-bold">
              Artisan Marketplace
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm opacity-70 text-center md:text-right">
            A livelihood bridge between tradition and opportunity
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} Artisan Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
