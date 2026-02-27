import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, Leaf } from "lucide-react";
import chefImg from "@/assets/chef-portrait.webp";

const stats = [
  { icon: Award, label: "Michelin Stars", value: "2" },
  { icon: Star, label: "Years of Excellence", value: "15" },
  { icon: Leaf, label: "Farm Partners", value: "40+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-gradient-section relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-card">
              <img
                src={chefImg}
                alt="Chef Alessandro, Head Chef at Aurum"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-primary text-sm tracking-widest uppercase mb-1">
                  Head Chef
                </p>
                <p className="font-serif text-2xl font-bold text-foreground">
                  Chef Alessandro Moretti
                </p>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm tracking-[0.4em] uppercase text-primary mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              A Legacy of <span className="text-gradient-gold">Passion</span>
            </h2>
            <div className="divider-gold w-16 mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over fifteen years, Aurum has been a sanctuary for those who
              seek more than a meal — a transformative experience where every
              ingredient whispers a story of its origin.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Chef Alessandro Moretti draws from his Italian heritage and
              global adventures to compose menus that celebrate seasonal
              ingredients, artisanal craftsmanship, and the beauty of simplicity
              elevated to art. Each plate is a canvas; each bite, a revelation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="text-center"
                >
                  <stat.icon className="mx-auto mb-3 text-primary" size={24} />
                  <p className="font-serif text-3xl font-bold text-gradient-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
