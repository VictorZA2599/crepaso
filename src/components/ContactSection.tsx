import { MapPin, Phone, Clock, Facebook, Truck } from "lucide-react";

const hours = [
  { day: "Lunes – Viernes", time: "6:30 pm – 11:00 pm" },
  { day: "Sábado", time: "6:00 pm – 11:00 pm" },
  { day: "Domingo", time: "6:00 pm – 10:30 pm" },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-chocolate">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-xs uppercase tracking-widest text-caramel font-bold">
            Encuéntranos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
            Visítanos o pide <br />
            <span className="italic text-caramel">a domicilio</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-caramel rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Ubicación */}
          <div className="bg-primary/40 border border-primary-foreground/10 rounded-2xl p-7">
            <div className="w-12 h-12 rounded-full bg-caramel/20 flex items-center justify-center mb-5">
              <MapPin className="text-caramel" size={22} />
            </div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Ubicación</h3>
            <p className="font-body text-primary-foreground/70 leading-relaxed text-sm">
              Calle 108 #130L x 47B y 49<br />
              Fracc. Las Américas II<br />
              Mérida, Yucatán, CP 97302
            </p>
            <a
              href="https://maps.google.com/?q=Crepaso+Merida+Yucatan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 font-body text-xs font-bold uppercase tracking-widest text-caramel hover:underline"
            >
              Ver en Google Maps →
            </a>
          </div>

          {/* Horarios */}
          <div className="bg-primary/40 border border-primary-foreground/10 rounded-2xl p-7">
            <div className="w-12 h-12 rounded-full bg-caramel/20 flex items-center justify-center mb-5">
              <Clock className="text-caramel" size={22} />
            </div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Horarios</h3>
            <div className="space-y-2">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-2">
                  <span className="font-body text-primary-foreground/60 text-sm">{h.day}</span>
                  <span className="font-body text-primary-foreground/90 text-sm font-bold">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 bg-caramel/15 rounded-lg px-3 py-2">
              <Truck size={14} className="text-caramel" />
              <span className="font-body text-xs text-primary-foreground/70">
                Entregas disponibles por Uber Eats
              </span>
            </div>
          </div>

          {/* Contacto */}
          <div className="bg-primary/40 border border-primary-foreground/10 rounded-2xl p-7">
            <div className="w-12 h-12 rounded-full bg-caramel/20 flex items-center justify-center mb-5">
              <Phone className="text-caramel" size={22} />
            </div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Contacto</h3>
            <div className="space-y-3">
              <a
                href="tel:+525523053444"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-caramel transition-colors group"
              >
                <Phone size={14} className="shrink-0" />
                <span className="font-body text-sm group-hover:underline">+52 55 2305 3444</span>
              </a>
              <a
                href="mailto:afvilla_@hotmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-caramel transition-colors group"
              >
                <span className="text-xs shrink-0">✉️</span>
                <span className="font-body text-sm group-hover:underline">afvilla_@hotmail.com</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-caramel transition-colors group"
              >
                <Facebook size={14} className="shrink-0" />
                <span className="font-body text-sm group-hover:underline">Crepasó en Facebook</span>
              </a>
            </div>

            <a
              href="https://www.ubereats.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-caramel text-accent-foreground font-body font-bold uppercase tracking-widest text-sm px-5 py-3 rounded-full hover:brightness-110 transition-all duration-200"
            >
              🛵 Pedir por Uber Eats
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
