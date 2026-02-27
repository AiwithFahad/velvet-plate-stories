import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, Users, Send } from "lucide-react";
import { toast } from "sonner";

const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request sent! We'll confirm shortly.");
    setForm({ name: "", email: "", date: "", time: "", guests: "2", notes: "" });
  };

  return (
    <section id="reserve" className="section-padding bg-gradient-section" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Your Table Awaits
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Make a <span className="text-gradient-gold">Reservation</span>
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-lg p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">
                <Calendar size={14} className="inline mr-1 text-primary" /> Date
              </label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">
                <Clock size={14} className="inline mr-1 text-primary" /> Time
              </label>
              <select
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select</option>
                {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">
                <Users size={14} className="inline mr-1 text-primary" /> Guests
              </label>
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">
              Special Requests
            </label>
            <textarea
              value={form.notes}
              maxLength={500}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full bg-background/50 border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none h-24"
              placeholder="Allergies, celebrations, preferences..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 text-sm tracking-widest uppercase bg-primary text-primary-foreground rounded-sm hover:bg-gold-light transition-colors duration-300 shadow-gold-glow flex items-center justify-center gap-2"
          >
            <Send size={16} />
            Reserve My Table
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;
