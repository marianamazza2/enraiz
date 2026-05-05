import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Manifiesto from './sections/Manifiesto'
import Productos from './sections/Productos'
import Novedades from './sections/Novedades'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifiesto />
        <Productos />
        <Novedades />
      </main>
      <Footer />
    </>
  )
}
