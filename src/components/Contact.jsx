import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Import EmailJS

export default function Contact() {
  const form = useRef(); // Form reference for EmailJS
  const [status, setStatus] = useState(''); // To show success/error message
  const lines = Array.from({ length: 12 });

  // Handle Form Submission
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_xj6qi6a',   // Replace with your Service ID
      'template_jaxvm5p',  // Replace with your Template ID
      form.current,
      'wTwJrDvH0GpQWfEEf'    // Replace with your Public Key
    )
    .then((result) => {
        setStatus('Message Sent Successfully!');
        e.target.reset(); // Clear form
        setTimeout(() => setStatus(''), 5000);
    }, (error) => {
        setStatus('Failed to send. Please try again.');
        setTimeout(() => setStatus(''), 5000);
    });
  };

  const inputContainerStyle = {
    position: 'relative',
    width: '100%',
    marginBottom: '10px'
  };

  const inputStyle = {
    width: '100%',
    padding: '18px 5px',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1.5px solid rgba(0, 0, 0, 0.15)',
    color: '#000',
    outline: 'none',
    fontSize: '1rem',
    transition: '0.3s ease',
    fontFamily: 'inherit',
  };

  return (
    <section id="contact" style={{ 
      backgroundColor: '#F0FFFF', 
      padding: '120px 8vw',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"Plus Jakarta Sans", sans-serif'
    }}>
      
      {/* Background Wavy Lines (Kept as is) */}
      {lines.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * 100 - 50 + "%", y: Math.random() * 100 + "%", opacity: 0, rotate: Math.random() * 360 }}
          animate={{ x: ["-10%", "10%", "-10%"], y: ["0%", "20%", "0%"], rotate: [i * 30, i * 30 + 45, i * 30], opacity: [0, 0.12, 0] }}
          transition={{ duration: Math.random() * 20 + 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            width: Math.random() * 400 + 400 + 'px', 
            height: Math.random() * 100 + 50 + 'px', 
            border: '1.5px solid #000',
            borderRadius: '50% 20% 50% 20%',
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'blur(1px)'
          }}
        />
      ))}

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '80px',
        width: '100%',
        maxWidth: '1200px',
        position: 'relative',
        zIndex: 2
      }}>
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
             <div style={{ width: '40px', height: '1.5px', backgroundColor: '#000' }} />
             <span style={{ color: '#000', fontWeight: '800', letterSpacing: '4px', fontSize: '0.7rem' }}>
                GET IN TOUCH
             </span>
          </div>
          
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '900', color: '#000', lineHeight: '0.95', marginBottom: '30px' }}>
            Let's Make <br /> It <span style={{ color: 'transparent', WebkitTextStroke: '1px #000' }}>Real.</span>
          </h2>
          
          <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: '1.7', fontWeight: '500', maxWidth: '380px' }}>
            Have a game-changing idea? Drop a message and let's start the evolution.
          </p>

          <div style={{ marginTop: '60px' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: '800', color: '#000', opacity: 0.4 }}>LOCATION</p>
            <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '20px' }}>Karachi, Pakistan</p>
            
            <p style={{ fontSize: '0.85rem', fontWeight: '800', color: '#000', opacity: 0.4 }}>EMAIL</p>
            <p style={{ fontSize: '1rem', fontWeight: '600' }}>s3953938@gmail.com</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ 
            backgroundColor: 'transparent',
            padding: '20px', 
          }}
        >
          {/* Form with Ref and Submit handler */}
          <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            <div style={inputContainerStyle}>
              {/* Added 'name' attributes for EmailJS template */}
              <input type="text" name="user_name" placeholder="Your Name" style={inputStyle} required />
              <motion.div style={{ height: '2px', backgroundColor: '#000', width: '100%', transform: 'scaleX(0)', transformOrigin: 'left', transition: '0.4s ease', marginTop: '-2px' }} />
            </div>

            <div style={inputContainerStyle}>
              <input type="email" name="user_email" placeholder="Email Address" style={inputStyle} required />
              <motion.div className="line-focus" style={{ height: '2px', backgroundColor: '#000', width: '100%', transform: 'scaleX(0)', transformOrigin: 'left', transition: '0.4s ease', marginTop: '-2px' }} />
            </div>

            <div style={inputContainerStyle}>
              <textarea name="message" placeholder="Your Message" rows="4" style={{...inputStyle, resize: 'none'}} required></textarea>
              <motion.div style={{ height: '2px', backgroundColor: '#000', width: '100%', transform: 'scaleX(0)', transformOrigin: 'left', transition: '0.4s ease', marginTop: '-5px' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <motion.button 
                  type="submit"
                  whileHover={{ backgroundColor: '#000', color: '#fff' }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    alignSelf: 'flex-start',
                    padding: '18px 45px', 
                    borderRadius: '100px', 
                    border: '1px solid #000', 
                    backgroundColor: 'transparent', 
                    color: '#000', 
                    fontWeight: '700', 
                    fontSize: '0.9rem', 
                    cursor: 'pointer',
                    letterSpacing: '1px',
                    transition: '0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                >
                  SEND MESSAGE
                </motion.button>
                
                {/* Status Message Display */}
                {status && (
                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        style={{ fontSize: '0.85rem', fontWeight: '700', color: '#000' }}
                    >
                        {status}
                    </motion.p>
                )}
            </div>
          </form>
        </motion.div>

      </div>
      
      <style>{`
        input:focus + div, textarea:focus + div {
          transform: scaleX(1) !important;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(0,0,0,0.3);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}