import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#3a2e28]">

      {/* Imagen de fondo — reemplazá /hero.jpg con tu imagen generada */}
      <div className="absolute inset-0">
        <img
          src="/hero.svg"
          alt=""
          className="w-full h-full object-cover object-left-bottom opacity-70"
          onError={(e) => {
            // Fallback mientras no hay imagen: degradado editorial
            const el = e.currentTarget.parentElement as HTMLElement
            el.style.background = 'linear-gradient(160deg, #4a5240 0%, #3a2e28 40%, #7b3437 100%)'
          }}
        />
        {/* Overlay degradado desde abajo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a2e28]/60 via-[#3a2e28]/25 to-transparent" />
        {/* Overlay lateral sutil para texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3a2e28]/30 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-20 md:pb-28">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-6 h-px bg-[#faf8f4]/50" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-[#faf8f4]/50">
              Cosmética Natural · Hecho a mano
            </span>
          </motion.div>

          {/* Headline principal */}
          <motion.h1
            className="text-[64px] md:text-[96px] leading-[0.9] text-[#faf8f4] mb-8"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Enraíz
          </motion.h1>

          {/* Claim */}
          <motion.p
            className="text-[20px] md:text-[26px] italic text-[#faf8f4]/80 mb-10 leading-snug"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Volver a lo que importa.<br />
            <span className="text-[#faf8f4]/50 text-[17px] not-italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Ingredientes que reconocés. Procesos que respetan el tiempo.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a
              href="#productos"
              className="inline-flex items-center gap-2 bg-[#faf8f4] text-[#3a2e28] font-body text-sm font-medium px-8 py-4 rounded-[8px] hover:bg-white transition-colors duration-200"
            >
              Ver productos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#nosotros"
              className="inline-block border border-[#faf8f4]/30 text-[#faf8f4]/80 font-body text-sm font-medium px-8 py-4 rounded-[8px] hover:border-[#faf8f4]/60 hover:text-[#faf8f4] transition-colors duration-200"
            >
              Nuestra historia
            </a>
          </motion.div>
        </div>
      </div>

      {/* Badge flotante — esquina inferior derecha */}
      <motion.div
        className="absolute bottom-20 right-8 md:right-16 z-10 hidden md:flex flex-col items-end gap-1"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: [1, 1.25, 1] }}
        transition={{
          opacity: { delay: 1.1, duration: 0.6 },
          scale: { delay: 2, duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.5 },
        }}
      >
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#faf8f4]/50">22 Abril</span>
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#faf8f4]">Día de la Tierra</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <motion.div
          className="w-px h-10 bg-[#faf8f4]/30 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
