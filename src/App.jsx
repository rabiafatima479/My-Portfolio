import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Journey from './components/Journey'
import CustomCursor from './components/CustomCursor'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IntroSplash from './components/IntroSplash' // Aapka splash component
import Testimonials from './components/Testimonials'

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main style={{ backgroundColor: '#000' }}>
      <AnimatePresence mode="wait">
        {showIntro ? (
          // Splash Screen
          <IntroSplash key="intro" onFinish={() => setShowIntro(false)} />
        ) : (
          // Main Website Content
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Testimonials/>
            <Skills />
            <Journey />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}