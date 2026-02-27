import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.webp";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury restaurant interior with golden chandeliers and emerald velvet seating"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-base tracking-[0.4em] uppercase text-primary mb-6"
        >
          A Michelin-Starred Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Where Flavor
          <br />
          <span className="text-gradient-gold">Meets Art</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10"
        >
          An unforgettable journey through taste, crafted by Chef Alessandro
          with passion, precision, and the finest seasonal ingredients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#reserve"
            className="px-10 py-4 text-sm tracking-widest uppercase bg-primary text-primary-foreground rounded-sm hover:bg-gold-light transition-colors duration-300 shadow-gold-glow"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="px-10 py-4 text-sm tracking-widest uppercase border border-primary/30 text-primary rounded-sm hover:bg-primary/10 transition-colors duration-300"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-primary" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
