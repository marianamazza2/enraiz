import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const valores = [
  { titulo: 'Honestidad', desc: 'Ingredientes claros, procesos transparentes, comunicación sin artificios.' },
  { titulo: 'Conexión', desc: 'Con la tierra, con el cuerpo, con lo que nos hace bien.' },
  { titulo: 'Intención', desc: 'Cada producto existe por una razón, no por llenar un catálogo.' },
  { titulo: 'Calidez', desc: 'Cercana sin ser informal, experta sin ser fría.' },
  { titulo: 'Tiempo', desc: 'Respetamos los ritmos naturales: del cuerpo, de los ingredientes, del cuidado.' },
]

function ValorRow({ v, i }: { v: typeof valores[0]; i: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className="group relative border-t border-[#faf8f4]/10 cursor-default overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Fondo hover */}
      <motion.div
        className="absolute inset-0 bg-[#faf8f4]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
      />

      <div className="relative flex items-center gap-8 md:gap-16 py-7 px-4 md:px-6">
        {/* Número */}
        <span
          className="shrink-0 text-[13px] tabular-nums"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.1em',
            color: hovered ? 'rgba(58,46,40,0.4)' : 'rgba(250,248,244,0.2)',
            transition: 'color 0.3s ease',
          }}
        >
          0{i + 1}
        </span>

        {/* Título grande */}
        <h3
          className="flex-1 text-[40px] md:text-[64px] leading-none"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 400,
            color: hovered ? '#3a2e28' : '#faf8f4',
            transition: 'color 0.3s ease',
          }}
        >
          {v.titulo}
        </h3>

        {/* Descripción — aparece al hover */}
        <motion.p
          className="hidden md:block max-w-xs font-body text-sm leading-relaxed text-right"
          style={{ color: hovered ? 'rgba(58,46,40,0.7)' : 'rgba(250,248,244,0.7)' }}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 12 }}
          transition={{ duration: 0.3 }}
        >
          {v.desc}
        </motion.p>

        {/* Flecha */}
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="shrink-0"
          style={{ color: hovered ? '#3a2e28' : '#faf8f4' }}
          animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </div>

      {/* Descripción mobile */}
      <motion.div
        className="md:hidden overflow-hidden"
        animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p
          className="relative font-body text-sm leading-relaxed pb-5 pl-12 pr-4"
          style={{ color: hovered ? 'rgba(58,46,40,0.7)' : 'rgba(250,248,244,0.7)' }}
        >
          {v.desc}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function Manifiesto() {
  return (
    <section id="nosotros" className="bg-[#faf8f4]">

      {/* Bloque superior: cita grande */}
      <div className="relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[580px] pointer-events-none select-none">
          <img src="/enraiz-manchas-verde.svg" alt="" className="w-full opacity-[0.28]" />
        </div>
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <FadeIn>
          <p className="font-body text-[11px] uppercase tracking-[0.25em] text-[#7b8255] mb-6">
            Quiénes somos
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <FadeIn>
            <blockquote
              className="text-[30px] md:text-[38px] leading-[1.15] text-[#3a2e28]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              "Hacemos cosmética como se hacía antes: con las manos, con paciencia, con lo que la tierra ofrece.
              Solo que ahora sabemos por qué funciona."
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="pt-0 space-y-8">
              <p className="font-body text-base text-[#8c7054] leading-relaxed">
                No prometemos milagros. Prometemos honestidad. Cada jabón, cada crema, cada aceite
                es una decisión consciente: menos químicos, más raíces.
              </p>
              <p className="font-body text-base text-[#8c7054] leading-relaxed">
                Enraizar es volver al cuerpo. A lo simple. A lo real.
              </p>
              <div className="flex gap-10 pt-4">
                {[['100%', 'origen natural'], ['0', 'plástico'], ['0', 'testeo en animales']].map(([num, label]) => (
                  <div key={label}>
                    <p
                      className="text-[36px] text-[#7b3437] leading-none mb-1"
                      style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                    >
                      {num}
                    </p>
                    <p className="font-body text-[11px] uppercase tracking-widest text-[#8c7054]/60">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      </div>

      {/* Valores — lista interactiva */}
      <div className="bg-[#3a2e28]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
          <FadeIn>
            <p className="font-body text-[11px] uppercase tracking-[0.25em] text-[#faf8f4]/40 mb-12">
              Nuestros valores
            </p>
          </FadeIn>

          <div>
            {valores.map((v, i) => (
              <ValorRow key={v.titulo} v={v} i={i} />
            ))}
            <div className="border-t border-[#faf8f4]/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
