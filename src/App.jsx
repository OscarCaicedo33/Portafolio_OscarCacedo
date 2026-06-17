import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Credentials from './components/Credentials'
import Contact from './components/Contact'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen bg-bg text-text">
      {/* Patrón de puntos fijo detrás del contenido */}
      <div className="bg-dots" aria-hidden="true" />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative z-[1] mx-auto max-w-content px-7 pt-[88px]">
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
    </div>
  )
}
