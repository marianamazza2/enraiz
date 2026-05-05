import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const productos = [
  {
    nombre: 'Aceite de Jojoba',
    descripcion: 'Ligero, seco al tacto. Se absorbe en segundos.',
    ingredientes: 'Jojoba · Argán · Cedro',
    badge: null,
    img: '/producto-aceite.png',
    bg: '#f4f5ec',
  },
  {
    nombre: 'Jabón de Arcilla',
    descripcion: 'Limpia sin despojar. La arcilla absorbe, la lavanda calma.',
    ingredientes: 'Arcilla · Lavanda · Aceite de oliva',
    badge: 'Más vendido',
    img: '/producto-jabon.png',
    bg: '#f4f5ec',
  },
  {
    nombre: 'Mascarilla Cúrcuma',
    descripcion: 'Ilumina con paciencia. Con miel cruda y arcilla rosada.',
    ingredientes: 'Cúrcuma · Miel cruda · Arcilla rosada',
    badge: null,
    img: '/producto-mascarilla.png',
    bg: '#faf8f4',
  },
  {
    nombre: 'Crema Rosa Mosqueta',
    descripcion: 'Nutre sin pesar. Regenera mientras dormís.',
    ingredientes: 'Rosa mosqueta · Karité · Vitamina E',
    badge: 'Nuevo',
    img: '/producto-crema.png',
    bg: '#f9f0f0',
  },
]

type Producto = typeof productos[0]

function ProductoCard({ p }: { p: Producto }) {
  return (
    <motion.div
      className="group bg-white/50 rounded-[12px] overflow-hidden cursor-pointer backdrop-blur-sm h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="w-full aspect-[3/4] flex flex-col items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: p.bg }}
      >
        {p.img ? (
          <>
            <img src={p.img} alt={p.nombre} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#3a2e28]/45" />
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 opacity-40">
            <div className="w-12 h-12 rounded-full border border-[#8c7054]" />
            <span className="font-body text-[10px] uppercase tracking-widest text-[#8c7054]">
              Foto producto
            </span>
          </div>
        )}
        {p.badge && (
          <span className="absolute top-4 left-4 font-body text-[10px] uppercase tracking-widest text-[#7b8255] bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {p.badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3
          className="text-lg text-[#3a2e28] leading-snug mb-2"
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}
        >
          {p.nombre}
        </h3>
        <p className="font-body text-sm text-[#8c7054] leading-relaxed mb-4">
          {p.descripcion}
        </p>
        <p className="font-body text-[10px] uppercase tracking-wider text-[#8c7054]/50">
          {p.ingredientes}
        </p>
      </div>
    </motion.div>
  )
}

function MobileSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((card, i) => {
      if (!card) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i)
        },
        { threshold: 0.5, root: sliderRef.current }
      )
      observer.observe(card)
      return observer
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  const scrollTo = (i: number) => {
    cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  return (
    <div>
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-3 pl-8 scrollbar-none"
        style={{ scrollSnapType: 'x mandatory', scrollPaddingLeft: '2rem' }}
      >
        {productos.map((p, i) => (
          <div
            key={p.nombre}
            ref={el => { cardRefs.current[i] = el }}
            className="shrink-0 w-[calc(100vw-5rem)]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <ProductoCard p={p} />
          </div>
        ))}
        <div className="shrink-0 w-4" />
      </div>

      <div className="flex justify-center items-center gap-2 mt-5">
        {productos.map((_, i) => (
          <button
            key={i}
            aria-label={`Producto ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-5 bg-[#7b3437]' : 'w-1.5 bg-[#8c7054]/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Productos() {
  return (
    <section id="productos" className="relative overflow-hidden bg-[#f4f5ec] py-28">
      <div className="absolute -bottom-6 -left-6 w-[520px] pointer-events-none select-none">
        <img src="/enraiz-patron-botanico.svg" alt="" className="w-full opacity-[0.14]" />
      </div>
      <div className="absolute left-0 top-0 h-[65%] pointer-events-none select-none">
        <img src="/enraiz-planta-oliva.svg" alt="" className="h-full w-auto opacity-[0.18]" style={{ transform: 'translateX(-60%) translateY(52%) scaleX(-1)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <FadeIn>
              <p className="font-body text-[11px] uppercase tracking-[0.25em] text-[#7b8255] mb-4">
                Productos
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2
                className="text-[40px] md:text-[52px] leading-tight text-[#3a2e28]"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
              >
                Lo que la tierra ofrece,<br />con intención.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <a
              href="#"
              className="shrink-0 font-body text-sm text-[#7b3437] underline underline-offset-4 decoration-[#7b3437]/30 hover:decoration-[#7b3437] transition-all"
            >
              Ver todos los productos →
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Mobile slider */}
      <div className="md:hidden">
        <MobileSlider />
      </div>

      {/* Desktop grid */}
      <div className="hidden md:block max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {productos.map((p, i) => (
            <FadeIn key={p.nombre} delay={0.08 * i}>
              <ProductoCard p={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
