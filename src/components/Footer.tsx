import { Leaf, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-serif font-bold">
                  Artisan Marketplace
                </span>
              </div>
              <p className="text-sm text-background/60 leading-relaxed">
                A livelihood bridge between tradition and opportunity. Empowering India's tribal artisans.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-background/90">Quick Links</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Our Artisans</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-background/90">Follow Us</h4>
              <div className="flex gap-3">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <span className="flex-1 h-px bg-background/10" />
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-background/20">
              <path d="M12 2 L22 12 L12 22 L2 12 Z" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
            <span className="flex-1 h-px bg-background/10" />
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} Artisan Marketplace. All rights reserved.</p>
            <p>Made with ❤️ for India's artisans</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
