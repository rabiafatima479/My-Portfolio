import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function IntroSplash({ onFinish }) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        y: -100,
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      style={{ 
        backgroundColor: "#050505", 
        height: '100vh', 
        width: '100vw', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 9999, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: '"Inter", sans-serif'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        
        {/* Name Container */}
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* First Name: Professional White */}
            <h1 style={{ 
              color: "#FFFFFF", 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
              fontWeight: '800', 
              margin: 0,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}>
              RABIA
            </h1>

            {/* Last Name: Highlighted Coral */}
            <h1 style={{ 
              color: "#8A2BE2", // Your Signature Coral
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
              fontWeight: '800', 
              margin: 0,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              // Subtle glow to make it pop
              textShadow: '0 0 30px rgba(138, 43, 226, 0.2)' 
            }}>
              FATIMA
            </h1>
          </motion.div>
        </div>

        {/* Minimal Progress Line - Very Thin & Elegant */}
        <div style={{ 
          marginTop: '40px',
          width: '60px', 
          height: '1px', 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          margin: '40px auto 0 auto',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ 
              height: '100%', 
              width: '100%',
              backgroundColor: '#8A2BE2'
            }}
          />
        </div>
      </div>

      {/* Decorative Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '50px',
          fontSize: '10px',
          fontWeight: '600',
          letterSpacing: '0.5em',
          color: '#FFFFFF',
          textTransform: 'uppercase'
        }}
      >
        Digital Experience 2026
      </motion.div>
    </motion.div>
  );
}