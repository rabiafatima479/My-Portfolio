import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: ".NET CORE", tech: "Backend" },
    { name: "REACT JS", tech: "Frontend" },
    { name: "LARAVEL", tech: "Fullstack" },
    { name: "FLUTTER", tech: "Mobile" },
    { name: "SQL SERVER", tech: "Database" },
    { name: "TAILWIND", tech: "Design" },
    { name: "UI/UX", tech: "Creative" },
    { name: "JAVASCRIPT", tech: "Core" },
  ];

  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section id="skills" style={{ 
      width: '100%', 
      backgroundColor: '#F0FFFF', 
      padding: '100px 0', 
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {/* --- Header Section --- */}
      <div style={{ padding: '0 8vw', marginBottom: '50px' }}>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ color: '#ff9a76', fontWeight: '900', fontSize: '0.75rem', letterSpacing: '5px', marginBottom: '10px' }}
        >
          // SKILLS & MASTERY
        </motion.p>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '900', color: '#000', lineHeight: '1', letterSpacing: '-2px' }}>
          My Technical <span style={{ color: '#ff9a76' }}>Edge.</span>
        </h2>
      </div>

      {/* --- THE INFINITE FLUX CONTAINER --- */}
      <div style={{ 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        height: '200px',
        // Yeh mask bahar wale text ko fade kar dega automtically
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%, black 60%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 40%, black 60%, transparent)'
      }}>
        
        {/* Modern Glass Lens Overlay (Visual Only) */}
        <div style={{ 
          position: 'absolute', 
          left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          width: '380px', height: '130px', 
          border: '2px solid #ff9a76', 
          borderRadius: '24px',
          zIndex: 10, pointerEvents: 'none',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 5px'
        }}>
           <div style={{ width: '6px', height: '6px', background: '#ff9a76', borderRadius: '50%' }} />
           <div style={{ width: '6px', height: '6px', background: '#ff9a76', borderRadius: '50%' }} />
        </div>

        {/* Moving Marquee */}
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ 
            x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } 
          }}
          style={{ display: 'flex', gap: '100px', alignItems: 'center' }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 'max-content'
              }}
            >
              <div style={{
                fontSize: 'clamp(3rem, 7vw, 5rem)',
                fontWeight: '900',
                color: '#000', // Darker color
                letterSpacing: '-3px',
              }}>
                {skill.name}
              </div>
              <div style={{ 
                fontSize: '0.7rem', 
                fontWeight: '800', 
                color: '#ff9a76', 
                letterSpacing: '4px',
                marginTop: '-10px'
              }}>
                {skill.tech}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- Footer Note --- */}
      <div style={{ padding: '0 8vw', marginTop: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ height: '2px', width: '60px', background: '#ff9a76' }} />
        <p style={{ color: '#444', fontSize: '0.95rem', maxWidth: '400px', textAlign: 'right', margin: 0 }}>
          Building high-performance systems with <br/> 
          <b>modern architecture.</b>
        </p>
      </div>
    </section>
  );
}