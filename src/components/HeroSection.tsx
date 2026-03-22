import heroCrepa from "@/assets/hero-crepa.jpg";
import { Star, Clock, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroCrepa}
        alt="Crepa deliciosa de Crepasó"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-caramel/20 border border-caramel/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
          <Star size={14} className="text-caramel fill-caramel" />
          <span className="font-body text-xs uppercase tracking-widest text-caramel font-bold">
            4.7 ★ · 186 reseñas
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-bold text-primary-foreground leading-none mb-2">
          Crepa<span className="text-caramel italic">só</span>
        </h1>
        <p className="font-display text-lg md:text-2xl italic text-primary-foreground/80 mb-6">
          Crepas dulces & saladas · Mérida, Yucatán
        </p>
        <p className="font-body text-primary-foreground/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Un lugarcito donde te hacen sentir en casa. Crepas artesanales, bebidas gourmet y postres caseros para tus antojos nocturnos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.ubereats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-caramel text-accent-foreground font-body font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:brightness-110 transition-all duration-200 shadow-warm"
          >
            Pedir por Uber Eats
          </a>
          <a
            href="#menu"
            className="border-2 border-primary-foreground/60 text-primary-foreground font-body font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-primary-foreground/10 transition-all duration-200"
          >
            Ver el menú
          </a>
        </div>

        {/* Info pills */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
            <Clock size={14} className="text-caramel" />
            <span className="font-body text-xs text-primary-foreground/80">6:30 pm – 11:00 pm</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
            <MapPin size={14} className="text-caramel" />
            <span className="font-body text-xs text-primary-foreground/80">Fracc. Las Américas, Mérida</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
            <span className="text-xs">🛵</span>
            <span className="font-body text-xs text-primary-foreground/80">Entrega disponible</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-0.5 h-8 bg-primary-foreground/40 rounded-full" />
      </div>
    </section>
  );
}
