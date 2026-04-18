import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'PROJECTS', id: 'work' },
    { name: 'JOURNEY', id: 'journey' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Mobile menu band karne ke liye
  };

  return (
    <nav style={{ 
      position: 'fixed', 
      top: '20px', 
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%', 
      maxWidth: '1200px', 
      backgroundColor: '#ff9a76', 
      padding: '10px 25px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      borderRadius: '100px', 
      zIndex: 1000,
      boxShadow: '0 10px 30px rgba(255, 154, 118, 0.3)', 
      border: '1px solid rgba(255, 255, 255, 0.3)'
    }}>
      
      {/* ATTRACTIVE LOGO - Hexagon Shape */}
      <motion.div 
        onClick={() => scrollToSection('home')}
        whileHover={{ scale: 1.1, rotate: 5 }}
        style={{ 
          position: 'relative',
          width: '45px',
          height: '45px',
          backgroundColor: '#000',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}
      >
        <span style={{ fontWeight: '900', fontSize: '1rem', color: '#fff', letterSpacing: '-1px' }}>
          RF<span style={{ color: '#ff9a76' }}>.</span>
        </span>
      </motion.div>

      {/* Desktop Links - Mobile par hide ho jayenge */}
      <div className="nav-desktop" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <style>{`
          @media (max-width: 768px) {
            .nav-desktop { display: none !important; }
            .mobile-toggle { display: flex !important; }
          }
          .mobile-toggle { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
          .mobile-toggle div { width: 25px; height: 3px; background-color: #000; border-radius: 5px; }
        `}</style>
        
        {navLinks.map((link) => (
          <motion.span
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            whileHover={{ y: -2, color: '#FFFFFF' }}
            style={{ 
              cursor: 'pointer', fontSize: '0.75rem', fontWeight: '800', 
              letterSpacing: '1px', color: '#000000', transition: '0.3s'
            }}
          >
            {link.name}
          </motion.span>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <motion.button
          onClick={() => scrollToSection('contact')}
          whileHover={{ scale: 1.05, backgroundColor: '#000000', color: '#FFFFFF' }}
          style={{
            backgroundColor: '#FFFFFF', color: '#ff9a76', border: 'none',
            padding: '10px 22px', borderRadius: '50px', fontSize: '0.7rem',
            fontWeight: '900', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }}
        >
          HIRE ME
        </motion.button>

        {/* Mobile Hamburger Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none', transition: '0.3s' }} />
          <div style={{ opacity: isOpen ? 0 : 1, transition: '0.3s' }} />
          <div style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none', transition: '0.3s' }} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '75px', left: 0, width: '100%',
              backgroundColor: '#ff9a76', borderRadius: '30px', padding: '20px',
              display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center',
              border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            {navLinks.map((link) => (
              <span
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                style={{ cursor: 'pointer', fontSize: '1rem', fontWeight: '900', color: '#000' }}
              >
                {link.name}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}