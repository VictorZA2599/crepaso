export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-primary-foreground/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl font-bold text-caramel">Crepasó</span>
        <p className="font-body text-xs text-primary-foreground/40 text-center">
          © 2024 Crepasó · Fracc. Las Américas, Mérida, Yucatán · Todos los derechos reservados
        </p>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className="text-caramel text-sm">★</span>
          ))}
          <span className="font-body text-xs text-primary-foreground/40 ml-1">4.7</span>
        </div>
      </div>
    </footer>
  );
}
