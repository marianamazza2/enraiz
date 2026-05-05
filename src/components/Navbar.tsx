import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#faf8f4]/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      } ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between">

        <a
          href="#"
          className={`text-2xl transition-colors duration-300 ${scrolled ? 'text-[#7b3437]' : 'text-[#faf8f4]'}`}
          style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
        >
          Enraíz
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Productos', href: '#productos' },
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Contacto', href: '#contacto' },
          ].map((item) => (
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

        <a
          href="#productos"
          className={`font-body text-sm font-medium px-5 py-2.5 rounded-[8px] transition-all duration-300 ${
            scrolled
              ? 'bg-[#7b3437] text-[#faf8f4] hover:bg-[#6a2c2f]'
              : 'bg-[#faf8f4]/10 text-[#faf8f4] border border-[#faf8f4]/20 hover:bg-[#faf8f4]/20'
          }`}
        >
          Ver productos
        </a>
      </div>
    </header>
  )
}
