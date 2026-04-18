import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function Hero() {
  
  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      id="home" // Adding ID for scroll-to-top
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }}    
      exit={{ opacity: 0, x: -100 }}   
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ 
        backgroundColor: '#F0FFFF', 
        minHeight: '100vh', 
        width: '100vw', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative', 
        overflow: 'hidden', 
        color: '#000000', 
        fontFamily: 'sans-serif' 
      }}
    >
      {/* Ambient Lights */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', backgroundColor: '#FF7F50', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', backgroundColor: '#40E0D0', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%' }} />

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ textAlign: 'center', zIndex: 2, padding: '20px' }}
      >
        <div style={{ border: '1px solid rgba(255,127,80,0.3)', padding: '5px 15px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 'bold', color: '#FF7F50', display: 'inline-block', marginBottom: '20px', letterSpacing: '2px', backgroundColor: 'rgba(255,127,80,0.05)' }}>
          AVAILABLE FOR PROJECTS 2026
        </div>

        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: '900', lineHeight: '0.9', margin: '0 0 30px 0', letterSpacing: '-4px', textTransform: 'uppercase' }}>
          Full Stack <br /> 
          <span style={{ color: '#FF7F50' }}>Developer</span>
        </h1>

        <p style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.8, margin: '0 auto 40px auto', color: '#333' }}>
          Hi, I am <b style={{ fontSize: '1.6rem' }}>Rabia Fatima.</b> A <span style={{ color: '#FF7F50', fontWeight: 'bold' }}>17-year-old</span> architect building high-performance apps with 
          <span style={{ color: '#FF7F50' }}> .NET, Laravel & React</span>. 
          Bridging the gap between 2+ years of code and digital strategy.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Functional Button 1: Scrolls to Projects */}
          <motion.button 
            onClick={() => scrollToSection('work')}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            style={{ backgroundColor: '#FF7F50', color: '#FFFFFF', border: 'none', padding: '18px 40px', fontSize: '0.8rem', fontWeight: '900', cursor: 'pointer', borderRadius: '4px', letterSpacing: '1px' }}
          >
            VIEW CASE STUDIES
          </motion.button>

          {/* Functional Button 2: Scrolls to Contact */}
          <motion.button 
            onClick={() => scrollToSection('contact')}
            whileHover={{ backgroundColor: '#000000', color: '#F0FFFF' }} 
            style={{ backgroundColor: 'transparent', color: '#000000', border: '2px solid #000000', padding: '18px 40px', fontSize: '0.8rem', fontWeight: '900', cursor: 'pointer', borderRadius: '4px', letterSpacing: '1px', transition: '0.3s' }}
          >
            SAY HELLO
          </motion.button>
        </div>
      </motion.div>

      {/* Experience Badge */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
        style={{ 
          position: 'absolute', bottom: '50px', left: '50px', padding: '15px', 
          border: '1px solid rgba(0,0,0,0.05)', 
          backgroundColor: '#FF7F50', 
          borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '15px', zIndex: 5,
          boxShadow: '0 10px 30px rgba(255,127,80,0.2)'
        }}
      >
        <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icons.Code size={20} color="white" />
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '0.6rem', color: 'white', opacity: 0.9, fontWeight: 'bold' }}>EXPERIENCE</div>
          <div style={{ fontSize: '0.9rem', fontWeight: '900', color: 'white' }}>2+ YEARS</div>
        </div>
      </motion.div>
    </motion.div>
  );
}