import cafeAmbiente from "@/assets/cafe-ambiente.jpg";

const stats = [
  { value: "4.7★", label: "Calificación Google" },
  { value: "186+", label: "Reseñas positivas" },
  { value: "$100–200", label: "Por persona" },
  { value: "5+", label: "Años en Mérida" },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-warm aspect-[4/3]">
              <img
                src={cafeAmbiente}
                alt="Interior de Crepasó"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-chocolate text-primary-foreground rounded-2xl px-6 py-4 shadow-warm hidden md:block">
              <p className="font-body text-xs uppercase tracking-widest text-caramel mb-0.5">Abierto hoy</p>
              <p className="font-display text-lg font-bold">6:30 pm – 11:00 pm</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="font-body text-xs uppercase tracking-widest text-caramel font-bold">
              Nuestra historia
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Un rincón familiar <br />
              <span className="italic text-caramel">con sabor a hogar</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Crepasó nació en el corazón del Fraccionamiento Las Américas de Mérida, Yucatán, con una sola misión: hacer que cada crepa cuente. Somos un local pequeño pero con corazón grande, donde cada visita se siente como volver a casa.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Nuestras crepas dulces y saladas son elaboradas con ingredientes frescos y mucho amor. Desde nuestra icónica <strong className="text-foreground">Crepa Mérida</strong> hasta nuestros irresistibles <strong className="text-foreground">Brownies Cheesecake</strong>, cada platillo lleva el sello de calidad Crepasó.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl p-4 shadow-card border border-border/60 text-center"
                >
                  <p className="font-display text-2xl font-bold text-caramel">{stat.value}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
