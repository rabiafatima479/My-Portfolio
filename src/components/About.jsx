import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import rabiaImg from '../assets/rabia.jpeg';

export default function About() {
  const themeColor = '#8A2BE2';
  const stats = [
    { label: "PROJECTS", val: "15+" },
    { label: "YEARS EXP", val: "02+" }
  ];
  
  // Updated skills: Laravel and Flutter added
  const skillItems = [
    { name: ".NET Core", icon: <Icons.Code size={20} /> },
    { name: "React.js", icon: <Icons.Layers size={20} /> },
    { name: "Laravel", icon: <Icons.Database size={20} /> },
    { name: "Flutter", icon: <Icons.Cpu size={20} /> }
  ];

  return (
    <section id="about" style={{ width: '100%', backgroundColor: '#F0FFFF', padding: '60px 0', overflow: 'hidden' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          backgroundColor: '#000', width: '100%', padding: '120px 20px',
          borderRadius: '100px 100px 0 0', clipPath: 'ellipse(150% 100% at 50% 100%)',
          display: 'flex', justifyContent: 'center'
        }}
      >
        <div style={{ maxWidth: '1100px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center', zIndex: 2 }}>
          
          {/* --- LEFT: Text & Stats --- */}
          <div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '900', lineHeight: 1.1, color: '#FFF', marginBottom: '25px' }}>
              Solving problems with <br/> <span style={{ color: themeColor }}>Modern Tech.</span>
            </h2>
            
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px', maxWidth: '480px' }}>
              Specialized in building high-performance systems. From robust Laravel backends to cross-platform Flutter experiences, I engineer scalable solutions.
            </p>

            <div style={{ display: 'flex', gap: '50px' }}>
              {stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFF' }}>{s.val}</div>
                  <div style={{ fontSize: '0.7rem', color: themeColor, fontWeight: '800', letterSpacing: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: Image & Skill Overlay --- */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '280px', height: '380px', borderRadius: '30px', overflow: 'hidden', border: `1px solid ${themeColor}40`, position: 'relative' }}>
              <img src={rabiaImg} alt="Rabia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Float Skill Chips */}
            <div style={{ position: 'absolute', right: '-20px', bottom: '40px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {skillItems.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: -10 }}
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
                    border: `1px solid ${themeColor}40`, padding: '10px 20px',
                    borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', color: '#FFF'
                  }}
                >
                  <span style={{ color: themeColor }}>{skill.icon}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}