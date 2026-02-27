import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Wine, Sparkles } from "lucide-react";
import eventsImg from "@/assets/events-room.webp";

const events = [
  {
    icon: Wine,
    title: "Private Dining",
    description: "Intimate spaces for celebrations, anniversaries, and exclusive gatherings with bespoke menus.",
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Sophisticated settings for business dinners, client entertaining, and team celebrations.",
  },
  {
    icon: Sparkles,
    title: "Chef's Table",
    description: "An exclusive front-row seat to culinary artistry — a multi-course journey guided by Chef Alessandro.",
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative overflow-hidden" ref={ref}>
      {/* Full-width background */}
      <div className="absolute inset-0">
        <img src={eventsImg} alt="Private dining room" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.4em] uppercase text-primary mb-4">
              Unforgettable Moments
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Private <span className="text-gradient-gold">Events</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="glass-card rounded-lg p-8 text-center group hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-gold-glow transition-all duration-500">
                  <event.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-block px-10 py-4 text-sm tracking-widest uppercase border border-primary/30 text-primary rounded-sm hover:bg-primary/10 transition-colors duration-300"
            >
              Inquire About Events
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
