import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      padding: '220px 8vw 60px', 
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      position: 'relative',
      zIndex: 10,
      overflow: 'hidden',
      clipPath: 'polygon(0 120px, 70% 0, 100% 180px, 100% 100%, 0% 100%)',
      marginTop: '-180px',
    }}>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '60px', position: 'relative', zIndex: 3 }}>
        
        {/* Left Section: Branding */}
        <div style={{ flex: '1 1 400px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ 
              fontSize: 'clamp(4.5rem, 13vw, 10rem)', 
              fontWeight: '900', 
              margin: 0, 
              letterSpacing: '-8px', 
              lineHeight: '0.75',
              textTransform: 'uppercase'
            }}>
              Let's<br/>Evolve.
            </h2>
          </motion.div>
          <p style={{ color: '#fff', marginTop: '60px', opacity: 0.3, fontSize: '0.9rem', letterSpacing: '5px', fontWeight: '800' }}>
            © 2026 • DIGITAL ARCHITECT
          </p>
        </div>

        {/* Right Section: 2 Big Icons & Clock */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '70px', alignItems: 'flex-end' }}>
          
          {/* Scroll to Top Button */}
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: '#FF7F50', borderColor: '#FF7F50' }}
            whileTap={{ scale: 0.9 }}
            style={{ 
              width: '90px', height: '90px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.15)', 
              backgroundColor: 'transparent', color: '#fff', cursor: 'pointer', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', transition: '0.4s' 
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '30px' }} />
          </motion.button>

          {/* TWO BIG ICONS: LinkedIn & FB (Coral Hover) */}
          <div style={{ display: 'flex', gap: '25px' }}>
            
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/rabia-fatima-b553b7319/"
              target="_blank"
              whileHover={{ backgroundColor: '#FF7F50', borderColor: '#FF7F50', y: -12, scale: 1.08, color: '#fff' }}
              style={{ 
                width: '85px', height: '85px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '20px', border: '1.5px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.04)',
                color: '#FF7F50', transition: '0.4s', cursor: 'pointer'
              }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '35px' }} />
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/profile.php?id=61583507714252"
              target="_blank"
              whileHover={{ backgroundColor: '#FF7F50', borderColor: '#FF7F50', y: -12, scale: 1.08, color: '#fff' }}
              style={{ 
                width: '85px', height: '85px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '20px', border: '1.5px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.04)',
                color: '#FF7F50', transition: '0.4s', cursor: 'pointer'
              }}
            >
              <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '35px' }} />
            </motion.a>
          </div>

          {/* Time with Coral Accent */}
          <div style={{ textAlign: 'right', borderRight: '6px solid #FF7F50', paddingRight: '30px' }}>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.5, fontWeight: '900', letterSpacing: '4px' }}>TIME / KHI</p>
            <p style={{ 
              margin: 0, fontSize: '2.2rem', fontWeight: '900', fontVariantNumeric: 'tabular-nums',
              fontFamily: 'monospace', lineHeight: '1'
            }}>{time}</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.07)', marginTop: '120px', marginBottom: '30px', position: 'relative', zIndex: 3 }} />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', opacity: 0.25, fontWeight: '700', letterSpacing: '2px', position: 'relative', zIndex: 3 }}>
        <span>KARACHI, PK</span>
        <span>V4.0 // 2026</span>
      </div>
    </footer>
  );
}