export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#faf8f4] px-6 py-16 text-[#3a2e28]">
      {/* Flor decorativa */}
      <div className="absolute left-4 top-28 w-[260px] pointer-events-none select-none">
        <img src="/enraiz-flor-bordo.svg" alt="" className="w-full opacity-[0.10]" />
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <p
            className="text-2xl text-[#3a2e28] mb-1"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
          >
            Enraíz
          </p>
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#3a2e28]/50">
            Cosmética Natural
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-body text-[11px] uppercase tracking-widest text-[#3a2e28]/40 mb-1">
            Navegación
          </p>
          {['Productos', 'Nuestra historia', 'Día de la Tierra', 'Contacto'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-body text-sm text-[#3a2e28]/70 hover:text-[#3a2e28] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-body text-[11px] uppercase tracking-widest text-[#3a2e28]/40 mb-1">
            Seguinos
          </p>
          {['Instagram', 'TikTok'].map((red) => (
            <a
              key={red}
              href="#"
              className="font-body text-sm text-[#3a2e28]/70 hover:text-[#3a2e28] transition-colors duration-200"
            >
              {red}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-14 pt-6 border-t border-[#3a2e28]/10 flex flex-col sm:flex-row justify-between gap-4">
        <p className="font-body text-[11px] text-[#3a2e28]/30">
          © 2026 Enraíz. Todos los derechos reservados.
        </p>
        <p className="font-body text-[11px] text-[#3a2e28]/30">
          Hecho a mano, con amor.
        </p>
      </div>
    </footer>
  )
}
