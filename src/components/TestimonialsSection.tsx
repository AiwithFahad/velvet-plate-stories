import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Victoria Langford",
    role: "Food & Wine Critic",
    text: "Aurum redefines fine dining. Every dish is a masterpiece — the Wagyu with gold leaf left me speechless. This is not just a restaurant; it's an experience.",
    rating: 5,
  },
  {
    name: "James Harrington",
    role: "Frequent Guest",
    text: "We've celebrated every anniversary here for five years. The ambiance, the service, and Chef Alessandro's tasting menu never fail to create magical evenings.",
    rating: 5,
  },
  {
    name: "Sophie Chen",
    role: "Travel Journalist",
    text: "In my travels across 40 countries, Aurum stands among the top three dining experiences. The attention to detail is extraordinary — from the welcome to the last crumb.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Guest Voices
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            What They <span className="text-gradient-gold">Say</span>
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className="glass-card rounded-lg p-8 relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="text-primary fill-primary" size={16} />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-serif text-lg font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
