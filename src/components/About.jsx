import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function About() {
  const skills = [
    ".NET Core", "React.js", "Laravel", "Flutter", 
    "SQL Server", "Tailwind CSS", "UI/UX Design", "SEO"
  ];

  return (
    <section id="about" style={{ 
      width: '100%', 
      backgroundColor: '#F0FFFF', // Bahar ka color Azure hi rahega
      padding: '40px 0', 
      overflow: 'hidden'
    }}>
      
      {/* --- THE BLACK CURVED CONTAINER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: '#000000',
          width: '100%',
          padding: '100px 20px',
          // Isse outstanding curve banta hai top aur bottom par
          borderRadius: '100px 100px 0 0', 
          clipPath: 'ellipse(150% 100% at 50% 100%)', // Modern Curve
          position: 'relative',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {/* Background Subtle Glow */}
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', backgroundColor: '#ff9a76', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%' }} />

        <div style={{ maxWidth: '1100px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', zIndex: 2 }}>
          
          {/* --- Left Content --- */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: '#ff9a76', fontWeight: '900', fontSize: '0.8rem', letterSpacing: '4px', marginBottom: '20px' }}
            >
               {/* // CORE EXPERIENCE */}
            </motion.div>
            
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', lineHeight: '1', color: '#FFFFFF', marginBottom: '30px', letterSpacing: '-2px' }}>
              Solving problems with <br/>
              <span style={{ color: '#ff9a76' }}>Modern Tech.</span>
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', maxWidth: '500px' }}>
              I am a Full Stack Developer specialized in building scalable applications. From heavy backend logic in .NET to beautiful React interfaces, I cover the entire development lifecycle.
            </p>

            {/* Modern Stats */}
            <div style={{ display: 'flex', gap: '50px' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFFFFF' }}>15<span style={{ color: '#ff9a76' }}>+</span></div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold', letterSpacing: '2px' }}>PROJECTS</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFFFFF' }}>02<span style={{ color: '#ff9a76' }}>+</span></div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold', letterSpacing: '2px' }}>YEARS EXP</div>
              </div>
            </div>
          </div>

          {/* --- Right Content: Skill Grid --- */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {skills.slice(0, 4).map((skill, i) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05, borderColor: '#ff9a76' }}
                style={{
                  padding: '25px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ color: '#ff9a76', marginBottom: '10px' }}>
                   {i === 0 && <Icons.Code size={24} />}
                   {i === 1 && <Icons.Layers size={24} />}
                   {i === 2 && <Icons.Database size={24} />}
                   {i === 3 && <Icons.Cpu size={24} />}
                </div>
                <div style={{ color: '#FFF', fontWeight: '700', fontSize: '0.9rem' }}>{skill}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}