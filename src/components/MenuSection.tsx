import heroCrepa from "@/assets/hero-crepa.jpg";
import frappe from "@/assets/frappe.jpg";
import crepalada from "@/assets/crepa-salada.jpg";
import postre from "@/assets/postre.jpg";

const categories = [
  {
    id: "dulces",
    label: "Crepas Dulces",
    emoji: "🍓",
    items: [
      { name: "Chocofresa", desc: "Chocolate, fresas frescas y crema batida", price: "$125" },
      { name: "Nutella", desc: "Nutella cremosa y plátano caramelizado", price: "$95" },
      { name: "Crepa Mérida", desc: "La favorita del local, receta de la casa", price: "$115" },
      { name: "Kefresa", desc: "Dulce de kiwi, fresas y queso crema", price: "$110" },
    ],
    image: heroCrepa,
  },
  {
    id: "saladas",
    label: "Crepas Saladas",
    emoji: "🥩",
    items: [
      { name: "Arrachera con Costra de Queso", desc: "Arrachera jugosa, queso fundido y vegetales", price: "$145" },
      { name: "Crepa Kresalami", desc: "Salami, queso Oaxaca y vegetales al vapor", price: "$130" },
      { name: "Especial del Chef", desc: "Ingredientes del día, pregunta al mesero", price: "$120" },
    ],
    image: crepalada,
  },
  {
    id: "bebidas",
    label: "Bebidas",
    emoji: "☕",
    items: [
      { name: "Espresso", desc: "Café de origen, intenso y aromático", price: "$65" },
      { name: "Cappuccino Tradicional", desc: "Espresso, leche vaporizada y espuma", price: "$85" },
      { name: "Cappuccino Mocka", desc: "Con toque de chocolate artesanal", price: "$90" },
      { name: "Chai Latte", desc: "Mezcla de especias, leche y té negro", price: "$85" },
      { name: "Frappuccino Piña Coco", desc: "Refresco tropical con café", price: "$95" },
      { name: "Frappé Gourmet", desc: "Nuestro frappé de autor, irresistible", price: "$105" },
    ],
    image: frappe,
  },
  {
    id: "postres",
    label: "Postres",
    emoji: "🍰",
    items: [
      { name: "Brownies & Flan Napolitano", desc: "El dúo favorito de nuestros clientes", price: "$85" },
      { name: "Brownies Cheesecake", desc: "Brownie de chocolate con capa de cheesecake", price: "$90" },
      { name: "Malteada de Fresa", desc: "Cremosa, espesa y muy fresita 🍓", price: "$80" },
      { name: "Malteada de Vainilla", desc: "Clásica y suave, hecha al momento", price: "$75" },
    ],
    image: postre,
  },
];

import { useState } from "react";

export default function MenuSection() {
  const [active, setActive] = useState("dulces");
  const category = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-body text-xs uppercase tracking-widest text-caramel font-bold">
            Lo que más amamos hacer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Nuestra Carta
          </h2>
          <div className="mt-4 w-16 h-1 bg-caramel rounded-full mx-auto" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-bold uppercase tracking-wider transition-all duration-200 border ${
                active === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-warm"
                  : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-secondary"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-warm aspect-[4/3]">
            <img
              src={category.image}
              alt={category.label}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* Items */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              {category.emoji} {category.label}
            </h3>
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-4 p-4 rounded-xl gradient-card shadow-card border border-border/60 hover:shadow-warm transition-shadow duration-200"
              >
                <div className="flex-1">
                  <p className="font-display font-semibold text-foreground text-base">{item.name}</p>
                  <p className="font-body text-muted-foreground text-sm mt-0.5">{item.desc}</p>
                </div>
                <span className="font-body font-bold text-caramel text-base shrink-0 mt-0.5">
                  {item.price}
                </span>
              </div>
            ))}
            <p className="font-body text-xs text-muted-foreground pt-2">
              * Precios aproximados. Consulta disponibilidad en Uber Eats o al visitar el local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
