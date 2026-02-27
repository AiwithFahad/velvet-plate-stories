import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="px-6 py-12 md:px-12 border-t border-border bg-card">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#home" className="font-serif text-2xl tracking-wider text-gradient-gold">
        AURUM
      </a>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Aurum Fine Dining. All rights reserved.
      </p>
      <div className="flex gap-4">
        {[Instagram, Facebook, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300"
            aria-label="Social media"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
