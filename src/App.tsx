import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Packages } from './components/Packages'
import { Services } from './components/Services'
import { About } from './components/About'
import { Specialty } from './components/Specialty'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


function App() {
  // Ensure body background is consistent with Tailwind theme
  useEffect(() => {
    document.body.classList.add('bg-background', 'text-text')
    return () => {
      document.body.classList.remove('bg-background', 'text-text')
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <Hero />
        <Packages />
        <Services />
        <About />
        <Specialty />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
