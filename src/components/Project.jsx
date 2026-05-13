import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Images Import
import hotelImg from '../assets/hotel.png';
import soccerImg from '../assets/soccer.png';
import drideImg from '../assets/dride (2).png';
import homeImg from '../assets/home.png';
import samImg from '../assets/sam (2).png';

export default function Projects() {
  const primaryPurple = '#8A2BE2';
  
  const projects = [
    { title: "Heaven Resort", tech: "HTML // CSS", img: hotelImg, link: "https://thehotelresort.netlify.app/" },
    { title: "Soccer Verse", tech: "React // Tailwind", img: soccerImg, link: "https://thesoccerverse.netlify.app/" },
    { title: "D-Ride Saudi", tech: "Laravel // PHP", img: drideImg, link: "https://dride.sa/" },
    { title: "Home Styler", tech: "Vite // CSS", img: homeImg, link: "https://thehomestyler.netlify.app/" },
    { title: "Sam Showcase", tech: "Framer // React", img: samImg, link: "https://sam-portfolio-mu-taupe.vercel.app/" }
  ];

  const scrollProjects = [...projects, ...projects, ...projects];

  return (
    <section id="work" style={{ 
      backgroundColor: '#FFFFFF', // Clean White Background
      padding: '100px 0', 
      overflow: 'hidden' 
    }}>
      
      <div style={{ padding: '0 8vw', marginBottom: '60px' }}>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ 
            color: '#000', 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontWeight: '950', 
            letterSpacing: '-3px',
            margin: 0
          }}
        >
           <span style={{ color: primaryPurple }}>Projects</span>
        </motion.h2>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div style={{ display: 'flex', width: 'fit-content' }}>
        <motion.div 
          animate={{ x: [0, -1500] }} 
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          whileHover={{ animationPlayState: 'paused' }}
          style={{ 
            display: 'flex', 
            gap: '30px', 
            paddingLeft: '30px'
          }}
        >
          {scrollProjects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <motion.div
                whileHover={{ y: -15 }}
                style={{
                  width: '380px',
                  height: '480px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '40px',
                  overflow: 'hidden',
                  position: 'relative',
                  // Soft Shadow for "Float" effect on white bg
                  boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                {/* Image Area - High Contrast */}
                <div style={{ height: '65%', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      filter: 'grayscale(20%)' // Thoda classy desaturated look
                    }} 
                  />
                </div>

                {/* Info Area */}
                <div style={{ padding: '30px', flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ 
                      color: primaryPurple, 
                      fontSize: '11px', 
                      fontWeight: '800', 
                      letterSpacing: '2px',
                      textTransform: 'uppercase'
                    }}>
                      {p.tech}
                    </span>
                    <h3 style={{ color: '#000', fontSize: '1.6rem', fontWeight: '800', marginTop: '5px', margin: 0 }}>
                      {p.title}
                    </h3>
                  </div>
                  
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '18px', // Squircle shape for modern look
                    backgroundColor: `${primaryPurple}15`, // Light purple tint
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: primaryPurple
                  }}>
                    <ArrowUpRight size={24} strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}