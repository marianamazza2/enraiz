import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Bloquea scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'Productos', href: '#productos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ]

  // En mobile: siempre con fondo. En desktop: transparente hasta scrollear.
  const hasBg = scrolled || menuOpen
  const bgClass = hasBg
    ? 'bg-[#faf8f4]/95 backdrop-blur-md shadow-sm'
    : 'md:bg-transparent bg-[#faf8f4]/95 backdrop-blur-md'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass} ${scrolled ? 'py-4' : 'py-4 md:py-6'} ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between">

          <a
            href="#"
            className={`text-2xl transition-colors duration-300 ${scrolled ? 'text-[#7b3437]' : 'text-[#3a2e28] md:text-[#faf8f4]'}`}
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
          >
            Enraíz
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-body text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-[#8c7054] hover:text-[#7b3437]' : 'text-white hover:text-white/80'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botón CTA desktop + hamburguesa mobile */}
          <div className="flex items-center gap-4">
            <a
              href="#productos"
              className={`hidden md:inline-flex font-body text-sm font-medium px-5 py-2.5 rounded-[8px] transition-all duration-300 ${
                scrolled
                  ? 'bg-[#7b3437] text-[#faf8f4] hover:bg-[#6a2c2f]'
                  : 'bg-[#faf8f4]/10 text-[#faf8f4] border border-[#faf8f4]/20 hover:bg-[#faf8f4]/20'
              }`}
            >
              Ver productos
            </a>

            {/* Hamburguesa */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span
                className={`block w-5 h-px bg-[#3a2e28] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
              />
              <span
                className={`block w-5 h-px bg-[#3a2e28] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-px bg-[#3a2e28] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menú mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#faf8f4] flex flex-col pt-24 px-8 pb-12 md:hidden transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-[13px] uppercase tracking-[0.2em] text-[#8c7054] py-5 border-b border-[#3a2e28]/8 transition-colors hover:text-[#7b3437]"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#productos"
          onClick={() => setMenuOpen(false)}
          className="w-full text-center font-body text-sm font-medium bg-[#7b3437] text-[#faf8f4] px-5 py-4 rounded-[8px] hover:bg-[#6a2c2f] transition-colors"
        >
          Ver productos
        </a>
      </div>
    </>
  )
}
