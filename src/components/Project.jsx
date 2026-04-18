import { motion } from 'framer-motion';
import { ExternalLink, Code, Layers, Globe, Smartphone, Monitor } from 'lucide-react';

// Images Import
import hotelImg from '../assets/hotel.png';
import soccerImg from '../assets/soccer.png';
import drideImg from '../assets/dride (2).png';
import homeImg from '../assets/home.png';
import samImg from '../assets/sam (2).png';

export default function Projects() {
  const projectList = [
    {
      title: "Heaven Resort",
      desc: "A luxury hospitality experience built with core web fundamentals for speed and SEO.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://thehotelresort.netlify.app/",
      icon: <Globe size={20} />,
      img: hotelImg
    },
    {
      title: "The Soccer Verse",
      desc: "A dynamic React application for football fans with real-time data feel.",
      tech: ["React.js", "Tailwind", "Framer Motion"],
      link: "https://thesoccerverse.netlify.app/",
      icon: <Layers size={20} />,
      img: soccerImg
    },
    {
      title: "D-Ride Saudi",
      desc: "Enterprise-level transportation platform managing complex logistics in KSA.",
      tech: ["Laravel", "MySQL", "PHP"],
      link: "https://dride.sa/",
      icon: <Smartphone size={20} />,
      img: drideImg
    },
    {
      title: "The Home Styler",
      desc: "Modern interior design portfolio with React's component-based architecture.",
      tech: ["React.js", "CSS Modules", "Vite"],
      link: "https://thehomestyler.netlify.app/",
      icon: <Monitor size={20} />,
      img: homeImg
    },
    {
      title: "Sam Portfolio",
      desc: "Professional developer showcase featuring high-end animations and sleek UI.",
      tech: ["React.js", "Vercel", "Animation Hooks"],
      link: "https://sam-portfolio-mu-taupe.vercel.app/",
      icon: <Code size={20} />,
      img: samImg
    }
  ];

  return (
    <section id="work" style={{ 
      width: '100%', 
      backgroundColor: '#F0FFFF', 
      padding: 'clamp(60px, 10vw, 120px) 5vw', // Dynamic padding for mobile/desktop
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      overflow: 'hidden'
    }}>
      
      {/* Section Header */}
      <div style={{ maxWidth: '1200px', width: '100%', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ color: '#ff9a76', fontWeight: '900', fontSize: '0.7rem', letterSpacing: '4px', marginBottom: '10px' }}
        >
          {/* // LATEST WORK */}
        </motion.p>
        <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', fontWeight: '950', color: '#000', lineHeight: '1', letterSpacing: '-2px' }}>
          Digital <span style={{ color: '#ff9a76' }}>Craftsmanship.</span>
        </h2>
      </div>

      {/* Projects Grid - Fully Responsive */}
      <div style={{ 
        maxWidth: '1200px', 
        width: '100%', 
        display: 'grid', 
        // Logic: Card minimum 300px ka hoga, baki screen size par auto adjust
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', 
        gap: 'clamp(30px, 5vw, 50px)' 
      }}>
        {projectList.map((project, index) => (
          <motion.a
            href={project.link} target="_blank" rel="noopener noreferrer"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <motion.div
              whileHover={{ y: -15 }}
              style={{
                backgroundColor: '#fff', 
                borderRadius: '40px', 
                minHeight: '520px', // Min height use ki taake content ke sath expand ho
                height: '100%',
                position: 'relative', 
                overflow: 'hidden',
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.08)',
                border: '1px solid rgba(255, 154, 118, 0.1)',
                display: 'flex', 
                flexDirection: 'column'
              }}
            >
              {/* Thumbnail Area */}
              <div style={{ height: '260px', width: '100%', overflow: 'hidden', position: 'relative', backgroundColor: '#f9f9f9' }}>
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.img} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
                <div style={{ 
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(to bottom, transparent 50%, #fff 100%)' 
                }} />
              </div>

              {/* Action Badge - Adjusted for mobile visibility */}
              <div style={{ 
                position: 'absolute', top: '235px', right: 'clamp(20px, 5vw, 35px)',
                padding: '10px 18px', backgroundColor: '#000', color: '#fff',
                borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 10
              }}>
                {project.icon}
                <span style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '1px' }}>VIEW LIVE</span>
              </div>

              {/* Content */}
              <div style={{ padding: 'clamp(25px, 5vw, 40px)', paddingTop: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '950', color: '#000', marginBottom: '10px' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{ 
                      fontSize: '0.6rem', fontWeight: '900', 
                      backgroundColor: '#F0FFFF', border: '1px solid rgba(255,154,118,0.2)',
                      color: '#ff9a76', padding: '5px 12px', borderRadius: '100px'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Line Animation */}
              <motion.div 
                style={{ 
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px',
                  backgroundColor: '#ff9a76', scaleX: 0, transformOrigin: 'left'
                }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}