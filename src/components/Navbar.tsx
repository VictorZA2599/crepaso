import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-espresso shadow-warm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-caramel tracking-wide">
            Crepasó
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm uppercase tracking-widest text-primary-foreground/80 hover:text-caramel transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://www.ubereats.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-caramel text-accent-foreground text-sm font-body font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:brightness-110 transition-all duration-200 shadow-card"
        >
          Pedir ahora
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-espresso border-t border-border/20 px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-body text-sm uppercase tracking-widest text-primary-foreground/80 hover:text-caramel transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.ubereats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center bg-caramel text-accent-foreground text-sm font-body font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:brightness-110 transition-all"
          >
            Pedir ahora
          </a>
        </div>
      )}
    </nav>
  );
}
