import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Saam Siddique",
      project: "Personal Portfolio",
      text: "I hired Rabia for my portfolio design, and the results are outstanding. The combination of the UI theme and professional animations is truly top-notch.",
      theme: "dark"
    },
    {
      id: 2,
      name: "Sumera",
      project: "Hospital Management System",
      text: "This UI looks super clean and the color palette is just amazing. Her work on the Hospital Management system's interface is highly impressive.",
      theme: "light"
    },
    {
      id: 3,
      name: "Amara Saleem",
      project: "VacciKid (Laravel)",
      text: "Absolutely loved working with Rabia on the VacciKid project. Her expertise in Laravel and attention to detail made the development process smooth and efficient.",
      theme: "dark"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const current = reviews[index];

  return (
    <section id="testimonials" style={{ 
      padding: '100px 5vw', 
      backgroundColor: '#f8ffff', 
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      
      {/* --- Updated Header --- */}
      <div style={{ width: '100%', maxWidth: '1000px', marginBottom: '60px' }}>
        <p style={{ 
          color: '#ff9a76', 
          fontWeight: '700', 
          letterSpacing: '4px', 
          fontSize: '0.8rem', 
          margin: '0 0 15px 0',
          textTransform: 'uppercase'
        }}>
       
        </p>
        <h2 style={{ 
          fontSize: 'clamp(2.2rem, 7vw, 4rem)', 
          fontWeight: '800', 
          color: '#000', 
          margin: 0, 
          letterSpacing: '-1.5px', 
          lineHeight: 1.1,
          fontFamily: '"Outfit", sans-serif'
        }}>
          Clients & <span style={{ color: '#ff9a76' }}>Reviews.</span>
        </h2>
      </div>

      {/* Slider Container */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '1000px', 
        minHeight: '400px', 
        height: 'auto' 
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              width: '100%',
              minHeight: '380px',
              backgroundColor: current.theme === 'dark' ? '#111' : '#fff',
              color: current.theme === 'dark' ? '#fff' : '#111',
              borderRadius: '40px', 
              padding: 'clamp(40px, 8vw, 70px)', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 40px 80px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.04)',
              overflow: 'hidden'
            }}
          >
            {/* Quote Symbol */}
            <span style={{ 
              position: 'absolute', 
              top: '10px', 
              right: '40px', 
              fontSize: 'clamp(6rem, 12vw, 10rem)', 
              fontFamily: 'serif', 
              opacity: 0.79, 
              color: '#ff9a76', 
              pointerEvents: 'none' 
            }}>”</span>

            <div style={{ zIndex: 1 }}>
              <div style={{ width: '50px', height: '6px', backgroundColor: '#ff9a76', borderRadius: '10px', marginBottom: '35px' }} />
              <p style={{ 
                fontSize: 'clamp(1.1rem, 2.8vw, 1.7rem)', 
                fontWeight: '600', 
                lineHeight: '1.6',
                maxWidth: '92%',
                fontFamily: '"Outfit", sans-serif'
              }}>
                "{current.text}"
              </p>
            </div>

            <div style={{ zIndex: 1, marginTop: '30px' }}>
              <h4 style={{ margin: 0, fontSize: 'clamp(1.2rem, 2vw, 1.4rem)', fontWeight: '700' }}>{current.name}</h4>
              <p style={{ 
                margin: '6px 0 0 0', 
                fontSize: '0.85rem', 
                fontWeight: '700', 
                color: '#ff9a76', 
                letterSpacing: '1.5px', 
                textTransform: 'uppercase' 
              }}>
                {current.project}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Custom Pagination Dots */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '40px' }}>
          {reviews.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setIndex(i)}
              style={{ 
                width: i === index ? '35px' : '10px', 
                height: '10px', 
                backgroundColor: i === index ? '#ff9a76' : '#d1e5e5', 
                borderRadius: '10px', 
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}