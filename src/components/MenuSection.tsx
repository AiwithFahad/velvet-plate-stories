import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import dishSignature from "@/assets/dish-signature.webp";
import dishSeafood from "@/assets/dish-seafood.webp";
import dishDessert from "@/assets/dish-dessert.webp";

const categories = ["Signature", "Appetizers", "Mains", "Desserts"];

const dishes = [
  {
    name: "Wagyu A5 Gold Leaf",
    description: "Premium Japanese wagyu, 24k gold leaf, truffle jus, seasonal root vegetables",
    price: "$185",
    image: dishSignature,
    category: "Signature",
  },
  {
    name: "Lobster Truffle Foam",
    description: "Maine lobster tail, white truffle foam, saffron butter, micro herbs",
    price: "$95",
    image: dishSeafood,
    category: "Appetizers",
  },
  {
    name: "Chocolate Royale",
    description: "Valrhona dark chocolate, 24k gold dust, raspberry coulis, crème fraîche",
    price: "$45",
    image: dishDessert,
    category: "Desserts",
  },
  {
    name: "Pan-Seared Sea Bass",
    description: "Chilean sea bass, champagne beurre blanc, asparagus, caviar",
    price: "$120",
    image: dishSeafood,
    category: "Mains",
  },
  {
    name: "Foie Gras Torchon",
    description: "Hudson Valley foie gras, fig compote, brioche, port reduction",
    price: "$75",
    image: dishSignature,
    category: "Appetizers",
  },
  {
    name: "Crème Brûlée Tahitian",
    description: "Tahitian vanilla bean, caramelized sugar, edible flowers",
    price: "$35",
    image: dishDessert,
    category: "Desserts",
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Signature");

  const filteredDishes = activeCategory === "Signature"
    ? dishes
    : dishes.filter((d) => d.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-background relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Culinary Excellence
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient-gold">Menu</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every dish tells a story — of heritage, innovation, and the relentless pursuit of perfection.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="group glass-card rounded-lg overflow-hidden dish-card-hover cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-primary text-sm tracking-widest uppercase border border-primary px-6 py-2 rounded-sm">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {dish.name}
                  </h3>
                  <span className="text-primary font-serif text-xl font-bold">
                    {dish.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
