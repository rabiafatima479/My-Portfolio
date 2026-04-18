// import { motion } from 'framer-motion';
// import { Search, Palette, Rocket,Trophy, Code2, Heart } from 'lucide-react';

import { motion } from 'framer-motion';
import { Search, Palette, Rocket, Trophy, Code2, Heart, Layout } from 'lucide-react';
export default function Journey() {
  const steps = [
    {
      id: "01",
      year: "2023",
      tag: "THE AWAKENING",
      title: "Zero to One",
      desc: "Programming ka 'P' bhi nahi pata tha. Google search tak ek mystery thi. Maine ek bilkul nayi dunya mein kadam rakha.",
      icon: <Search size={22} />,
      color: "#ff9a76"
    },
    {
      id: "02",
      year: "2023-24",
      tag: "CREATIVE SPARK",
      title: "Visual Discovery",
      desc: "Canva seekha, logos banaye. Design ki basics ne mujhe sikhaya ke digital identities kaise create hoti hain.",
      icon: <Palette size={22} />,
      color: "#000000"
    },
    {
      id: "03",
      year: "2024",
      tag: "CHAMPION MINDSET",
      title: "Azm Contest Winner",
      desc: "Azm contest mein participate kiya aur apni skills ke dum par Top 10 mein jagah banayi aur title win kiya.",
      icon: <Trophy size={22} />,
      color: "#ff9a76"
    },
    {
      id: "04",
      year: "2024",
      tag: "PROJECT HUB",
      title: "10+ Live Projects",
      desc: "Sirf seekha nahi, apply kiya. 10 se zyada real-world projects develop kiye jo mere technical safar ka saboot hain.",
      icon: <Layout size={22} />,
      color: "#40E0D0"
    },
    {
      id: "05",
      year: "2024",
      tag: "STRATEGY MODE",
      title: "Digital Marketing",
      desc: "Facebook Ads aur Page Management explore kiya. Ye samjha ke technology sirf code nahi, business bhi hai.",
      icon: <Rocket size={22} />,
      color: "#000000"
    },
    {
      id: "06",
      year: "Present",
      tag: "THE GRIND",
      title: "Professional Shift",
      desc: "4 months milestone at my job. Programming passion ko sath rakhte hue ab real-world solutions build kar rahi hoon.",
      icon: <Code2 size={22} />,
      color: "#FF7F50"
    }  ];

  return (
    <section id="journey" style={{ 
      width: '100%', 
      backgroundColor: '#F0FFFF', 
      padding: '100px 0', 
      perspective: '1500px', 
      overflow: 'hidden',
      position: 'relative' 
    }}>
      
      {/* --- BACKGROUND LAYER (Z-Index: 0) --- */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {/* Top Watermark - Darker & Bold */}
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute', top: '10%', left: 0,
            fontSize: '18vw', fontWeight: '900', 
            color: 'rgba(255, 154, 118, 0.08)', 
            whiteSpace: 'nowrap',
          }}
        >
          GROWTH • EVOLUTION • PASSION • CODE •
        </motion.div>

        {/* Bottom Watermark - Specific for 3rd/4th Cards Area */}
        <motion.div 
          animate={{ x: [-1200, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute', bottom: '20%', left: 0,
            fontSize: '12vw', fontWeight: '900', 
            color: 'rgba(0, 0, 0, 0.05)', 
            whiteSpace: 'nowrap',
          }}
        >
          FULL STACK DEVELOPER • FULL STACK DEVELOPER • 
        </motion.div>
      </div>

      {/* --- CONTENT LAYER (Z-Index: 10) --- */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Header Section */}
        <div style={{ padding: '0 8vw', marginBottom: '60px' }}>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ color: '#ff9a76', fontWeight: '900', fontSize: '0.8rem', letterSpacing: '6px' }}
          >
            {/* // MY CHAPTERS */}
          </motion.p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: '950', color: '#000', lineHeight: '1', letterSpacing: '-3px' }}>
            The 17-Year Old <br/> <span style={{ color: '#ff9a76' }}>Prodigy.</span>
          </h2>
        </div>

        {/* Cards Flow */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '40px', 
          padding: '0 8vw' 
        }}>
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isEven ? -100 : 100, rotateY: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: isEven ? 'flex-start' : 'flex-end',
                }}
              >
                <motion.div
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    boxShadow: '0 50px 80px rgba(255, 154, 118, 0.12)'
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '520px',
                    backgroundColor: step.color === "#000000" ? "#000" : "#fff",
                    padding: '50px',
                    borderRadius: '35px',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(255, 154, 118, 0.15)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  {/* Card ID Background */}
                  <span style={{ 
                    position: 'absolute', top: '10px', right: '20px', 
                    fontSize: '7rem', fontWeight: '900', 
                    color: step.color === "#000000" ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
                    userSelect: 'none',
                    zIndex: 0
                  }}>
                    {step.id}
                  </span>

                  {/* Card Content */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ff9a76', marginBottom: '15px' }}>
                      <div style={{ padding: '8px', borderRadius: '12px', background: 'rgba(255, 154, 118, 0.1)' }}>
                        {step.icon}
                      </div>
                      <span style={{ fontWeight: '900', fontSize: '0.75rem', letterSpacing: '3px' }}>
                        {step.tag}
                      </span>
                    </div>

                    <h3 style={{ 
                      fontSize: '2rem', fontWeight: '900', 
                      color: step.color === "#000000" ? "#fff" : "#000",
                      marginBottom: '12px'
                    }}>
                      {step.title}
                    </h3>

                    <p style={{ 
                      fontSize: '1rem', lineHeight: '1.6', 
                      color: step.color === "#000000" ? "rgba(255,255,255,0.7)" : "#444",
                      fontWeight: '500'
                    }}>
                      {step.desc}
                    </p>

                    <div style={{ 
                      marginTop: '25px', display: 'inline-block',
                      padding: '6px 18px', borderRadius: '100px',
                      backgroundColor: '#ff9a76', color: '#fff',
                      fontSize: '0.75rem', fontWeight: '900',
                      boxShadow: '0 10px 20px rgba(255, 154, 118, 0.3)'
                    }}>
                      {step.year}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer Quote */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ 
          marginTop: '100px', textAlign: 'center', 
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          position: 'relative', zIndex: 10
        }}
      >
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: '#ff9a76', marginBottom: '15px' }}
        >
          <Heart fill="#ff9a76" size={35} />
        </motion.div>
        <p style={{ 
          maxWidth: '500px', fontSize: '1.3rem', fontWeight: '800', 
          color: '#000', lineHeight: '1.4', padding: '0 20px'
        }}>
          "Alhamdulillah, age is just a number. Passion is what drives my code."
        </p>
      </motion.div>
    </section>
  );
}