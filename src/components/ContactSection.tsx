import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const info = [
  { icon: MapPin, label: "Address", value: "42 Golden Lane, Manhattan, NY 10012" },
  { icon: Phone, label: "Phone", value: "+1 (212) 555-AURUM" },
  { icon: Mail, label: "Email", value: "reservations@aurum.dining" },
  { icon: Clock, label: "Hours", value: "Tue–Sun, 6:00 PM – 11:00 PM" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Find Us
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {info.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="glass-card rounded-lg p-6 text-center"
            >
              <item.icon className="mx-auto mb-4 text-primary" size={28} />
              <p className="text-sm tracking-wider uppercase text-muted-foreground mb-2">
                {item.label}
              </p>
              <p className="text-foreground font-medium">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
