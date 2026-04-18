import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// 1. PERFORMANCE: Separate Clock so only time updates
const LiveClock = memo(() => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
    }));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ textAlign: 'inherit', borderLeft: '6px solid #FF7F50', paddingLeft: '20px' }}>
      <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.5, fontWeight: '900', letterSpacing: '3px' }}>TIME / KHI</p>
      <p style={{ margin: 0, fontSize: '2rem', fontWeight: '900', fontVariantNumeric: 'tabular-nums', fontFamily: 'monospace' }}>{time}</p>
    </div>
  );
});

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      // Optimized Height: Balanced padding for premium feel
      padding: isMobile ? '100px 5vw 40px' : '160px 8vw 60px', 
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      position: 'relative',
      zIndex: 10,
      overflow: 'hidden',
      // ORIGINAL DESIGN: Your specific polygon shape kept intact
      clipPath: isMobile 
        ? 'polygon(0 50px, 100% 0, 100% 100%, 0% 100%)' 
        : 'polygon(0 100px, 70% 0, 100% 140px, 100% 100%, 0% 100%)',
      marginTop: isMobile ? '-50px' : '-140px',
    }}>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'flex-start' : 'flex-end', 
        gap: '60px', 
        position: 'relative', 
        zIndex: 3 
      }}>
        
        {/* Left Section: Your Original Branding */}
        <div style={{ flex: isMobile ? 'none' : '1 1 400px', width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ 
              fontSize: 'clamp(3rem, 12vw, 9rem)', 
              fontWeight: '900', 
              margin: 0, 
              letterSpacing: isMobile ? '-2px' : '-6px', 
              lineHeight: '0.85',
              textTransform: 'uppercase'
            }}>
              Let's<br/>Evolve.
            </h2>
          </motion.div>
          <p style={{ 
            color: '#fff', 
            marginTop: isMobile ? '30px' : '50px', 
            opacity: 0.3, 
            fontSize: '0.75rem', 
            letterSpacing: '4px', 
            fontWeight: '800' 
          }}>
            © 2026 • DIGITAL ARCHITECT
          </p>
        </div>

        {/* Right Section: Icons & Clock */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: isMobile ? '40px' : '60px', 
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          width: '100%'
        }}>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
             {/* Social Links */}
            {[
              { icon: faLinkedinIn, link: "https://www.linkedin.com/in/rabia-fatima-b553b7319/" },
              { icon: faFacebookF, link: "https://www.facebook.com/profile.php?id=61583507714252" }
            ].map((social, i) => (
              <motion.a
                key={i} href={social.link} target="_blank"
                whileHover={{ backgroundColor: '#FF7F50', borderColor: '#FF7F50', y: -5 }}
                style={{ 
                  width: isMobile ? '60px' : '75px', height: isMobile ? '60px' : '75px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '15px', border: '1.5px solid rgba(255,255,255,0.1)', 
                  backgroundColor: 'rgba(255,255,255,0.04)', color: '#FF7F50', transition: '0.4s'
                }}
              >
                <FontAwesomeIcon icon={social.icon} size={isMobile ? "lg" : "2xl"} />
              </motion.a>
            ))}

            {/* Scroll to Top */}
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, backgroundColor: '#FF7F50' }}
              style={{ 
                width: isMobile ? '60px' : '75px', height: isMobile ? '60px' : '75px', 
                borderRadius: '50%', border: '2px solid rgba(255,255,255,0.15)', 
                backgroundColor: 'transparent', color: '#fff', cursor: 'pointer', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', transition: '0.4s', marginLeft: '10px'
              }}
            >
              <FontAwesomeIcon icon={faArrowUp} size={isMobile ? "sm" : "lg"} />
            </motion.button>
          </div>

          <LiveClock />
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.07)', marginTop: isMobile ? '50px' : '80px', marginBottom: '20px' }} />
      
      <div style={{ 
        display: 'flex', justifyContent: 'space-between', 
        fontSize: '0.7rem', opacity: 0.25, fontWeight: '700', letterSpacing: '2px' 
      }}>
        <span>KARACHI, PK</span>
        <span>V4.0 // 2026</span>
      </div>
    </footer>
  );
}