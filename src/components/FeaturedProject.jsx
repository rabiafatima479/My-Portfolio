import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturedProject() {
  return (
    <section id="featured-work" style={{ 
      padding: '100px 5vw', 
      backgroundColor: '#000', // Professional Dark Theme for major project
      color: '#fff',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {/* Background Decorative Element */}
      <div style={{ 
        position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', 
        backgroundColor: '#ff9a76', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%' 
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
        
        {/* Left Side: Visual Representation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <div style={{ 
            width: '100%', 
            aspectRatio: '1/1', 
            background: 'linear-gradient(135deg, #111 0%, #222 100%)',
            borderRadius: '40px',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Project Name as a big stylistic background text */}
            <h1 style={{ 
              fontSize: '8rem', 
              fontWeight: '900', 
              opacity: 0.05, 
              color: '#fff',
              position: 'absolute'
            }}>DRIDE</h1>
            
            {/* Foreground Brand Mark */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ 
                width: '120px', height: '120px', backgroundColor: '#ff9a76', 
                borderRadius: '30px', transform: 'rotate(15deg)',
                boxShadow: '0 20px 50px rgba(255, 154, 118, 0.3)',
                display: 'flex', alignItems: 'center', justifyItems: 'center'
              }}
            >
               <span style={{ width: '100%', textAlign: 'center', color: '#000', fontWeight: '900', fontSize: '2rem' }}>D</span>
            </motion.div>
          </div>

          {/* Floating Status Card */}
          <div style={{ 
            position: 'absolute', bottom: '20px', right: '-20px', 
            backgroundColor: '#ff9a76', padding: '15px 25px', borderRadius: '15px',
            color: '#000', fontWeight: '800', fontSize: '0.9rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            🚀 DEPLOYING SOON
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p style={{ color: '#ff9a76', fontWeight: '900', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '15px' }}>
            {/* // FLAGSHIP PROJECT */}
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '25px' }}>
            Dride: The Future of <br/>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Modern Mobility.</span>
          </h2>
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }}>
            Dride is one of my most ambitious and significant projects to date. Developed for the renowned 
            <strong style={{ color: '#fff' }}> Damac Hills Company</strong>, this application is currently in its final development phase.
          </p>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
             {['Next.js', 'Node.js', 'Enterprise UI', 'Full Stack'].map(tag => (
               <span key={tag} style={{ 
                 padding: '8px 16px', border: '1px solid rgba(255,255,255,0.1)', 
                 borderRadius: '100px', fontSize: '0.8rem', fontWeight: '600' 
               }}>{tag}</span>
             ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' }} />
            <span style={{ fontWeight: '700', letterSpacing: '1px', fontSize: '0.9rem' }}>
              CURRENT STATUS: <span style={{ opacity: 0.6 }}>ACTIVE DEVELOPMENT</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}