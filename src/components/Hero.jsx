import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const controls = useAnimation();
  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    controls.start('visible');
  }, [controls]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating particles component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => (
      <motion.div
        key={i}
        className="particle"
        initial={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          opacity: 0
        }}
        animate={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          width: '2px',
          height: '2px',
          backgroundColor: '#00d4ff',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
    ));
    return <>{particles}</>;
  };

  // Interactive grid lines
  const GridLines = () => (
    <div className="grid-container">
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`v-${i}`}
          className="grid-line vertical"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: i * 0.1 }}
          style={{
            position: 'absolute',
            left: `${(i + 1) * 5}%`,
            top: 0,
            width: '1px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent, #00d4ff20, transparent)',
            transformOrigin: 'center'
          }}
        />
      ))}
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={`h-${i}`}
          className="grid-line horizontal"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: i * 0.2 }}
          style={{
            position: 'absolute',
            top: `${(i + 1) * 10}%`,
            left: 0,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, #00d4ff20, transparent)',
            transformOrigin: 'center'
          }}
        />
      ))}
    </div>
  );

  
  return (
    <div
      ref={heroRef}
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)',
        position: 'relative',
        overflow: 'visible',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #00d4ff15, transparent 50%)`,
          transition: 'background 0.3s ease'
        }}
      />
      
      <GridLines />
      <FloatingParticles />
      
      {/* Holographic overlay */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, transparent 30%, #00d4ff05 50%, transparent 70%)',
          pointerEvents: 'none'
        }}
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div style={{ textAlign: 'center', position: 'relative' }}>
            
            {/* Main heading with glitch effect */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            >
              <motion.h1
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: 900,
                  background: 'linear-gradient(45deg, #00d4ff, #ffffff, #00d4ff)',
                  backgroundSize: '200% 200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em',
                  position: 'relative'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: '0 0 30px #00d4ff'
                }}
              >
                Hi, I'm{' '}
                <motion.span
                  style={{ color: '#00d4ff' }}
                  animate={{
                    textShadow: [
                      '0 0 10px #00d4ff',
                      '0 0 20px #00d4ff',
                      '0 0 30px #00d4ff',
                      '0 0 20px #00d4ff',
                      '0 0 10px #00d4ff'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Prathap
                </motion.span>
              </motion.h1>
            </motion.div>
            
            {/* Animated subtitle with typewriter effect */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.h2
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  fontWeight: 300,
                  position: 'relative'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 1.5 }}
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Full Stack MERN Developer
                </motion.span>
              </motion.h2>
            </motion.div>
            
            {/* Description with stagger animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.p
                style={{
                  color: '#b0b0b0',
                  fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                  lineHeight: 1.8,
                  maxWidth: '600px',
                  margin: '0 auto 1rem',
                  padding: '0 1rem'
                }}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.03,
                      delayChildren: 2
                    }
                  }
                }}
              >
                {"Passionate about creating innovative web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in building scalable, user-friendly solutions that drive business growth.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            
            {/* Interactive buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  style={{
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 15px 40px rgba(0, 212, 255, 0.5)',
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                    }}
                    animate={{
                      left: ['100%', '-100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                  View My Work
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  style={{
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: 'transparent',
                    color: '#00d4ff',
                    border: '2px solid #00d4ff',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#00d4ff',
                    color: '#000',
                    boxShadow: '0 15px 40px rgba(0, 212, 255, 0.3)',
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
            
            {/* Social icons with proper centering */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1rem' }}>
                {[
                  { icon: Github, href: 'https://github.com/Prathap0955', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/prathap-p0955', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:prathap0955@gmail.com', label: 'Email' }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                        color: '#00d4ff',
                        textDecoration: 'none',
                        backdropFilter: 'blur(10px)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      whileHover={{
                        scale: 1.2,
                        y: -10,
                        rotateY: 180,
                        backgroundColor: 'rgba(0, 212, 255, 0.2)',
                        boxShadow: '0 20px 40px rgba(0, 212, 255, 0.4)'
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 3 + index * 0.1 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator with pulse effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            textAlign: 'center'
          }}
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              style={{
                width: '15px',
                height: '30px',
                border: '2px solid #00d4ff',
                borderRadius: '15px',
                position: 'relative',
                margin: '0 auto 10px'
              }}
            >
              <motion.div
                style={{
                  width: '2px',
                  height: '4px',
                  backgroundColor: '#00d4ff',
                  borderRadius: '2px',
                  position: 'absolute',
                  left: '40%',
                  top: '6px',
                  transform: 'translateX(-50%)'
                }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
            <motion.p
              style={{
                color: '#666',
                fontSize: '0.7rem',
                margin: 0
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll Down
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;