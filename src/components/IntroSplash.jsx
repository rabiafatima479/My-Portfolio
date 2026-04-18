import { useEffect } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import rabiaImg from '../assets/rabia.jpeg';

export default function IntroSplash({ onFinish }) {
 const introData = {
  icon: 'Terminal',
  title: "Code. Power. Control.",
  stack: "NEXT.JS // .NET // LARAVEL // FLUTTER",
  desc: "I turn ideas into high-performance systems that don’t just exist—they dominate. Fast. Scalable. Unstoppable.",
  accent: "#FF7F50",
  light: "#F0FFFF",
  dark: "#000000"
};

  const IconComponent = Icons[introData.icon];

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4800); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: "circIn" }}
      style={{ 
        backgroundColor: introData.dark, 
        height: '100vh', 
        width: '100vw', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 9999, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: introData.light, 
        overflow: 'hidden',
        fontFamily: '"Plus Jakarta Sans", sans-serif'
      }}
    >
      {/* --- BRIGHT CORAL GRAPHICS ON BLACK BG --- */}
      
      {/* 1. Bright Coral Cyber Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.2, // Thoda zyada visible
        background: `
          linear-gradient(90deg, ${introData.accent} 1px, transparent 1px),
          linear-gradient(${introData.accent} 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(circle, black 40%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 90%)',
        zIndex: 0
      }} />

      {/* 2. Intense Coral Neon Glow (Center-Right) */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2], 
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ 
          position: 'absolute', 
          width: '700px', 
          height: '700px', 
          background: `radial-gradient(circle, ${introData.accent} 0%, transparent 70%)`, 
          filter: 'blur(100px)', 
          borderRadius: '50%',
          top: '-10%',
          right: '-10%',
          zIndex: 1
        }} 
      />

      {/* 3. Floating Neon Rings (Coral Bright) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            width: `${200 + i * 120}px`,
            height: `${200 + i * 120}px`,
            border: `2px solid ${introData.accent}`,
            boxShadow: `0 0 20px ${introData.accent}40, inset 0 0 20px ${introData.accent}40`,
            borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
            bottom: `${5 + i * 10}%`,
            left: `${-5 + i * 5}%`,
            zIndex: 1
          }}
        />
      ))}

      {/* --- CONTENT CARD --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ 
          background: 'rgba(255, 127, 80, 0.03)', // Coral Tint
          backdropFilter: 'blur(35px)',
          WebkitBackdropFilter: 'blur(35px)',
          border: '1px solid rgba(255, 127, 80, 0.2)', // Coral Border
          borderRadius: '50px',
          padding: 'clamp(30px, 5vw, 60px)',
          width: 'min(95%, 1000px)',
          display: 'flex',
          flexDirection: 'row', 
          alignItems: 'center',
          gap: '50px',
          flexWrap: 'wrap', 
          zIndex: 10,
          position: 'relative',
          boxShadow: `0 40px 100px rgba(0,0,0,0.9), 0 0 40px ${introData.accent}10`
        }}
      >
        {/* Shine Animation with Coral Tint */}
        <motion.div 
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(90deg, transparent, ${introData.accent}15, transparent)`,
            skewX: '-25deg',
            pointerEvents: 'none'
          }}
        />

        {/* LEFT SIDE: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          <div style={{
            width: '280px',
            height: '380px',
            borderRadius: '30px',
            overflow: 'hidden',
            border: `2px solid ${introData.accent}60`,
            boxShadow: `0 0 50px ${introData.accent}30`
          }}>
            <img src={rabiaImg} alt="Rabia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Neon Corner Graphic */}
          <div style={{
            position: 'absolute',
            bottom: '-15px',
            left: '20px',
            width: '60px',
            height: '60px',
            borderBottom: `3px solid ${introData.accent}`,
            borderLeft: `3px solid ${introData.accent}`,
            filter: `drop-shadow(0 0 10px ${introData.accent})`,
            zIndex: 1
          }} />
        </motion.div>

        {/* RIGHT SIDE: Text */}
        <div style={{ flex: '1.2 1 350px', textAlign: 'left' }}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <div style={{ 
              display: 'inline-flex', padding: '12px', borderRadius: '15px', 
              background: `${introData.accent}15`, border: `1px solid ${introData.accent}40`, marginBottom: '20px' 
            }}>
              {IconComponent && <IconComponent size={24} color={introData.accent} />}
            </div>

            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 5vw, 3.8rem)', fontWeight: '900', fontStyle: 'italic',
              margin: '0 0 10px 0', lineHeight: '0.95', textTransform: 'uppercase',
              color: introData.light, letterSpacing: '-2.5px'
            }}>
              The Code <br/> 
              <span style={{ color: introData.accent, fontStyle: 'normal' }}>Architect.</span>
            </h2>

            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: introData.accent, letterSpacing: '5px', marginBottom: '25px' }}>
              {introData.stack}
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'rgba(240, 255, 255, 0.75)', fontStyle: 'italic', maxWidth: '450px' }}>
              {introData.desc}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Progress Bar (Glow Version) */}
      <div style={{ position: 'absolute', bottom: '5%', width: '250px', height: '3px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
        <motion.div 
          initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 4.2, ease: "linear" }}
          style={{ 
            height: '100%', 
            backgroundColor: introData.accent, 
            boxShadow: `0 0 15px ${introData.accent}, 0 0 5px white` 
          }}
        />
      </div>
    </motion.div>
  );
}