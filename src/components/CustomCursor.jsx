import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  // Super-responsive spring settings (Higher stiffness, lower mass)
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const trailConfig = { damping: 30, stiffness: 150, mass: 0.8 };

  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);
  const tx = useSpring(mouseX, trailConfig);
  const ty = useSpring(mouseY, trailConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Use requestAnimationFrame for high-frequency updates
      window.requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    const handleHover = (e) => {
      const target = e.target;
      // Faster check using .closest() to catch nested elements in buttons/links
      const isClickable = target.closest('button, a, [role="button"]') || 
                          window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
      {/* 1. Main Cursor - Higher stiffness for "sticky" feel */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          x: sx,
          y: sy,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform', // Force hardware acceleration
        }}
      >
        <motion.div
          animate={{
            rotate: isHovering ? 90 : 45,
            width: isHovering ? 2 : 15,
            height: isHovering ? 40 : 15,
            borderRadius: isHovering ? 0 : 3,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{
            backgroundColor: '#ff9a76',
            border: '1px solid #000',
            boxShadow: '0 0 15px rgba(255, 154, 118, 0.5)',
          }}
        />
      </motion.div>

      {/* 2. Ghost Trail - Heavier mass for "fluid" lag */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          x: tx,
          y: ty,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
      >
        <motion.div
          animate={{
            rotate: isHovering ? 90 : 45,
            scale: isHovering ? 1.2 : 2.5,
            opacity: isHovering ? 0 : 0.15,
          }}
          style={{
            width: 15,
            height: 15,
            border: '1.5px solid #ff9a76',
            borderRadius: 2,
          }}
        />
      </motion.div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          /* Disable custom cursor on mobile to save CPU/Battery */
          .custom-cursor-container { display: none; }
          * { cursor: auto !important; }
        }
      `}</style>
    </div>
  );
}