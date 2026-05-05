import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function DiaDeLaTierra() {
  return (
    <section className="relative bg-[#7b3437] overflow-hidden py-28 px-8 md:px-16">

      {/* Texture de fondo */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#faf8f4_1px,transparent_0)] [background-size:24px_24px]" />

      {/* Círculo decorativo */}
      <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full border border-[#faf8f4]/5" />
      <div className="absolute -right-16 -top-16 w-[400px] h-[400px] rounded-full border border-[#faf8f4]/5" />

      {/* Composición botánica esquina */}
      <div className="absolute -bottom-10 -right-10 w-[420px] pointer-events-none select-none" style={{ transform: 'scaleX(-1)' }}>
        <img src="/enraiz-composicion-esquina.svg" alt="" className="w-full opacity-[0.22]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-[#7b8255]" />
                <motion.span
                  className="font-body text-[11px] uppercase tracking-[0.25em] text-[#7b8255] inline-block"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
                >
                  22 de Abril · Día de la Tierra
                </motion.span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="text-[44px] md:text-[60px] leading-[0.95] text-[#faf8f4] mb-8"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
              >
                Cuidar la piel<br />
                <em>es</em> cuidar<br />
                la tierra.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-body text-base text-[#faf8f4]/70 leading-relaxed max-w-md mb-10">
                Hoy, y cada día, elegimos ingredientes de origen natural. Envases que se reutilizan,
                fórmulas que no dañan el suelo ni el agua. Porque el cuidado personal y el cuidado
                del planeta son la misma decisión.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 bg-[#faf8f4] text-[#7b3437] font-body text-sm font-medium px-8 py-4 rounded-[8px] hover:bg-white transition-colors duration-200"
              >
                Conocé nuestra cosmética
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </FadeIn>
          </div>

          {/* Stats */}
          <FadeIn delay={0.15} className="grid grid-cols-1 gap-6">
            {[
              {
                num: '100%',
                titulo: 'Ingredientes de origen natural',
                desc: 'Nada que no puedas pronunciar. Nada que no reconozcas.',
              },
              {
                num: '0',
                titulo: 'Plástico de un solo uso',
                desc: 'Vidrio ámbar, aluminio, cartón reciclado. Envases que duran.',
              },
              {
                num: '∞',
                titulo: 'Respeto por los ritmos',
                desc: 'Los de la tierra, los de los ingredientes, los de tu piel.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.titulo}
                className="flex gap-6 items-start border-t border-[#faf8f4]/10 pt-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <span
                  className="text-[48px] leading-none text-[#faf8f4] shrink-0 w-20 text-right"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {item.num}
                </span>
                <div>
                  <p className="font-body text-sm font-medium text-[#faf8f4] mb-1">{item.titulo}</p>
                  <p className="font-body text-sm text-[#faf8f4]/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
