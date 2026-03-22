import { Star } from "lucide-react";

const reviews = [
  {
    name: "Fausto Garcia",
    date: "Hace un mes",
    stars: 5,
    text: "El lugar es bonito, la decoración interesante. En general es muy acogedor. Las crepas y los cafés son fantásticos, hay saladas y dulces. Todos los postres son deliciosos, en especial los brownies con queso. Siempre la atención es amable y considerada. ❤️",
    avatar: "FG",
  },
  {
    name: "Stephany Herrera",
    date: "Hace 5 años",
    stars: 5,
    text: "Crepasó, un lugarcito donde te hacen sentir en casa y en familia con la atención y el servicio. Las crepas están muy buenas, probamos la Mérida y la Kresalami, ambas muy buenas pero la Mérida fue mi favorita. Tienen mucha variedad.",
    avatar: "SH",
  },
  {
    name: "Laurenthia",
    date: "Hace 2 semanas",
    stars: 5,
    text: "My favorite place to get a Caramel Frappe!! Beware it may keep you up all night because the coffee is sooooo good and strong!! Highly recommend.",
    avatar: "LA",
  },
  {
    name: "Carlos M.",
    date: "Hace 3 semanas",
    stars: 5,
    text: "Excelente servicio y muy rico, lo que sea que pidas es una delicia. Los frappés son increíbles y el ambiente es muy agradable para una noche con amigos.",
    avatar: "CM",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-caramel fill-caramel" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="resenas" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-body text-xs uppercase tracking-widest text-caramel font-bold">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Reseñas
          </h2>
          <div className="mt-4 w-16 h-1 bg-caramel rounded-full mx-auto" />
          <p className="mt-4 font-body text-muted-foreground">
            4.7 estrellas · más de 186 reseñas en Google Maps
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="gradient-card rounded-2xl p-6 shadow-card border border-border/60 flex flex-col gap-4 hover:shadow-warm transition-shadow duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-caramel text-accent-foreground flex items-center justify-center font-display font-bold text-sm shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <Stars count={review.stars} />
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-widest text-primary hover:text-caramel transition-colors border-b-2 border-primary hover:border-caramel pb-0.5"
          >
            Ver todas las reseñas en Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
