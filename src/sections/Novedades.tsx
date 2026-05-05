import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const notas = [
  {
    tag: 'Mes de la Tierra',
    fecha: 'Abril 2026',
    titulo: 'Cuidar la piel es cuidar la tierra.',
    bajada: 'Hoy, y cada día, elegimos ingredientes de origen natural. Envases que se reutilizan, fórmulas que no dañan el suelo ni el agua. Porque el cuidado personal y el cuidado del planeta son la misma decisión.',
    bg: '#7b3437',
    text: '#faf8f4',
    tag_bg: 'rgba(250,248,244,0.12)',
    tag_color: '#7b8255',
    muted: 'rgba(250,248,244,0.5)',
    arrow_border: 'rgba(250,248,244,0.25)',
  },
  {
    tag: 'Ingredientes',
    fecha: 'Marzo 2026',
    titulo: '¿Por qué usamos arcilla?',
    bajada: 'No todos los minerales son iguales. La arcilla absorbe sin agredir, equilibra sin resecar. Así es cómo la elegimos y por qué no la cambiaríamos por nada.',
    bg: '#7b3437',
    text: '#faf8f4',
    tag_bg: 'rgba(250,248,244,0.12)',
    tag_color: '#7b8255',
    muted: 'rgba(250,248,244,0.5)',
    arrow_border: 'rgba(250,248,244,0.25)',
  },
  {
    tag: 'Proceso',
    fecha: 'Febrero 2026',
    titulo: 'Por qué nuestros jabones tardan 6 semanas.',
    bajada: 'El curado no es un detalle, es la diferencia entre un jabón y un buen jabón. El tiempo que respetamos es el que se siente en tu piel.',
    bg: '#7b3437',
    text: '#faf8f4',
    tag_bg: 'rgba(250,248,244,0.12)',
    tag_color: '#7b8255',
    muted: 'rgba(250,248,244,0.5)',
    arrow_border: 'rgba(250,248,244,0.25)',
  },
]

const INTERVAL = 5000

export default function Novedades() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % notas.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [paused])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const nota = notas[current]

  return (
    <section
      className="relative w-full overflow-hidden h-[580px] md:h-[640px]"
      style={{
        backgroundColor: nota.bg,
        borderTop: `3px solid ${nota.border_top ?? 'transparent'}`,
        transition: 'background-color 0.6s ease, border-color 0.3s ease',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

<AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d * 60, opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d * -60, opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <div className="max-w-7xl mx-auto px-8 md:px-16 h-full flex items-center pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

              {/* Texto */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className="font-body text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: nota.tag_bg, color: nota.tag_color }}
                  >
                    {nota.tag}
                  </span>
                  <span className="font-body text-[11px]" style={{ color: nota.muted }}>
                    {nota.fecha}
                  </span>
                </div>

                <h2
                  className="text-[40px] md:text-[56px] leading-[1.02] mb-7"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 400,
                    color: nota.text,
                  }}
                >
                  {nota.titulo}
                </h2>

                <p
                  className="font-body text-base leading-relaxed mb-10 max-w-md"
                  style={{ color: nota.muted }}
                >
                  {nota.bajada}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: nota.text }}
                >
                  Leer más
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Número grande decorativo */}
              <div className="hidden md:flex items-center justify-end">
                <span
                  className="text-[200px] leading-none select-none"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    color: nota.text,
                    opacity: 0.06,
                  }}
                >
                  0{current + 1}
                </span>
              </div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Barra de progreso + navegación */}
      <div className="absolute bottom-8 left-0 right-0 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex items-center gap-6">

          {/* Dots */}
          <div className="flex items-center gap-3">
            {notas.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative h-px transition-all duration-300 cursor-pointer"
                style={{
                  width: i === current ? 40 : 20,
                  backgroundColor: i === current ? nota.text : `${nota.text}30`,
                }}
                aria-label={`Ir a noticia ${i + 1}`}
              >
                {i === current && !paused && (
                  <motion.span
                    className="absolute inset-0 origin-left"
                    style={{ backgroundColor: nota.text }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                    key={current}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Contador */}
          <span className="font-body text-[11px] ml-auto" style={{ color: `${nota.text}40` }}>
            {String(current + 1).padStart(2, '0')} / {String(notas.length).padStart(2, '0')}
          </span>

          {/* Flechas */}
          <div className="flex gap-3">
            {[
              { label: '←', action: () => goTo((current - 1 + notas.length) % notas.length) },
              { label: '→', action: () => goTo((current + 1) % notas.length) },
            ].map(({ label, action }) => (
              <button
                key={label}
                onClick={action}
                className="w-9 h-9 rounded-full border flex items-center justify-center font-body text-sm transition-opacity hover:opacity-60 cursor-pointer"
                style={{ borderColor: nota.arrow_border, color: nota.text }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
