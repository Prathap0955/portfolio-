import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingCart, 
  CheckSquare, 
  BarChart3, 
  MessageCircle, 
  Cloud, 
  Palette,
  Github,
  ExternalLink,
  Play,
  Sparkles,
  Code2,
  Layers,
  Zap,
  Star,
  Orbit
} from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTech, setHoveredTech] = useState(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Marketplace",
      description: "Revolutionary shopping experience with AI-powered recommendations and real-time inventory management.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "AI/ML", "Redis"],
      github: "https://github.com",
      live: "https://demo-ecommerce.com",
      icon: ShoppingCart,
      color: "#ff6b6b",
      particleCount: 150,
      complexity: "Advanced"
    },
    {
      id: 2,
      title: "Task Management App",
      subtitle: "Collaborative Workspace",
      description: "Next-generation project management with neural network task prediction and team sync.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Material-UI", "WebRTC", "GraphQL"],
      github: "https://github.com",
      live: "https://task-app-demo.com",
      icon: CheckSquare,
      color: "#4ecdc4",
      particleCount: 120,
      complexity: "Intermediate"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      subtitle: "Data Intelligence Hub",
      description: "Quantum-powered analytics engine processing millions of data points in real-time.",
      technologies: ["React", "D3.js", "Python", "TensorFlow", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
      github: "https://github.com",
      live: "https://analytics-demo.com",
      icon: BarChart3,
      color: "#45b7d1",
      particleCount: 200,
      complexity: "Expert"
    },
    {
      id: 4,
      title: "Neural Chat Network",
      subtitle: "AI Communication Hub",
      description: "Consciousness-level chat system with emotion recognition and holographic presence.",
      technologies: ["React", "WebRTC", "Python", "TensorFlow", "Socket.io", "WebGL", "Three.js", "WebAssembly"],
      github: "https://github.com",
      live: "https://neural-chat.com",
      icon: MessageCircle,
      color: "#96ceb4",
      particleCount: 180,
      complexity: "Revolutionary"
    },
    {
      id: 5,
      title: "Weather Quantum Predictor",
      subtitle: "Climate Intelligence",
      description: "Quantum computing weather prediction system with satellite integration and climate modeling.",
      technologies: ["React", "Python", "Quantum", "Satellite API", "Machine Learning", "IoT", "Blockchain"],
      github: "https://github.com",
      live: "https://quantum-weather.com",
      icon: Cloud,
      color: "#feca57",
      particleCount: 160,
      complexity: "Futuristic"
    },
    {
      id: 6,
      title: "Holographic Portfolio",
      subtitle: "Dimensional Showcase",
      description: "Multi-dimensional portfolio experience with AR integration and mind-controlled navigation.",
      technologies: ["React", "WebXR", "Three.js", "WebGL", "AR.js", "Brain-Computer Interface", "Quantum CSS"],
      github: "https://github.com",
      live: "https://holo-portfolio.com",
      icon: Palette,
      color: "#ff9ff3",
      particleCount: 140,
      complexity: "Transcendent"
    }
  ];

  // Initialize particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles for each project
    particlesRef.current = projects.map(project => ({
      id: project.id,
      particles: Array.from({ length: project.particleCount }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: project.color,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01
      }))
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(projectParticles => {
        const isActive = activeProject === projectParticles.id;
        
        projectParticles.particles.forEach(particle => {
          // Update position
          particle.x += particle.vx * (isActive ? 2 : 1);
          particle.y += particle.vy * (isActive ? 2 : 1);
          particle.angle += particle.speed;
          
          // Bounce off edges
          if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
          if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
          
          // Mouse interaction
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100 && isActive) {
            particle.x += dx * 0.03;
            particle.y += dy * 0.03;
          }
          
          // Draw particle with glow effect
          ctx.save();
          ctx.globalAlpha = particle.opacity * (isActive ? 1 : 0.3);
          ctx.shadowBlur = isActive ? 20 : 5;
          ctx.shadowColor = particle.color;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(
            particle.x + Math.sin(particle.angle) * 2,
            particle.y + Math.cos(particle.angle) * 2,
            particle.size * (isActive ? 1.5 : 1),
            0,
            Math.PI * 2
          );
          ctx.fill();
          ctx.restore();
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeProject, mousePosition]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const complexityColors = {
    "Intermediate": "from-green-400 to-blue-500",
    "Advanced": "from-yellow-400 to-red-500",
    "Expert": "from-purple-400 to-pink-500",
    "Revolutionary": "from-indigo-400 to-purple-600",
    "Futuristic": "from-cyan-400 to-blue-600",
    "Transcendent": "from-pink-400 to-red-600"
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Particle Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, #0f172a 0%, #000000 100%)' }}
      />
      
      {/* Neural Network Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Quantum Header */}
        <div className="text-center py-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 backdrop-blur-xl">
            <Orbit className="w-5 h-5 text-cyan-400 animate-spin" />
            <span className="text-cyan-300 font-mono text-sm tracking-wider">NEURAL.PROJECTS.MATRIX</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-6 tracking-tight">
            PROJECT<span className="text-cyan-400">VERSE</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-mono tracking-wide">
            <span className="text-cyan-400">&gt;</span> Interactive constellation of digital experiences
            <span className="animate-pulse">_</span>
          </p>
        </div>

        {/* Project Constellation Grid */}
        <div className="flex-1 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                const isActive = activeProject === project.id;
                
                return (
                  <div
                    key={project.id}
                    className="group relative"
                    style={{
                      animation: `quantumRise 1s ease-out ${index * 0.15}s both`,
                      transform: isActive ? 'scale(1.05) rotateY(5deg)' : 'scale(1) rotateY(0deg)',
                      transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
                    }}
                    onMouseEnter={() => setActiveProject(project.id)}
                    onMouseLeave={() => setActiveProject(null)}
                  >
                    {/* Quantum Field Container */}
                    <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden transition-all duration-700 hover:border-cyan-400/50">
                      
                      {/* Energy Core */}
                      <div className="relative h-64 overflow-hidden">
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${project.color}40 0%, transparent 70%)`
                          }}
                        ></div>
                        
                        {/* Floating Icon with Quantum Effects */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            {/* Orbital rings */}
                            <div className={`absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin transition-all duration-700 ${isActive ? 'scale-150 border-cyan-400/60' : 'scale-100'}`} style={{ width: '120px', height: '120px', margin: '-60px' }}></div>
                            <div className={`absolute inset-0 border border-purple-400/20 rounded-full animate-spin transition-all duration-1000 ${isActive ? 'scale-200 border-purple-400/40' : 'scale-125'}`} style={{ width: '120px', height: '120px', margin: '-60px', animationDirection: 'reverse', animationDuration: '3s' }}></div>
                            
                            {/* Core Icon */}
                            <div 
                              className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${isActive ? 'border-cyan-400/60 bg-cyan-400/10' : 'border-slate-600/50 bg-slate-800/30'}`}
                              style={{
                                boxShadow: isActive ? `0 0 40px ${project.color}60` : 'none'
                              }}
                            >
                              <Icon 
                                className={`w-12 h-12 transition-all duration-500 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}
                                style={{
                                  filter: isActive ? `drop-shadow(0 0 10px ${project.color})` : 'none'
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Complexity Badge */}
                        <div className="absolute top-4 right-4">
                          <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r ${complexityColors[project.complexity]} text-white shadow-lg`}>
                            {project.complexity.toUpperCase()}
                          </div>
                        </div>
                      </div>

                      {/* Project Data Stream */}
                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className={`text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-cyan-300' : 'text-white'}`}>
                            {project.title}
                          </h3>
                          <p className="text-sm font-mono text-slate-400 mb-3">
                            {project.subtitle}
                          </p>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech DNA Sequence */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                            <Zap className="w-3 h-3" />
                            <span>TECH.DNA.SEQUENCE</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className={`px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-xs font-mono transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 cursor-pointer ${hoveredTech === `${project.id}-${techIndex}` ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-300' : 'text-slate-300'}`}
                                onMouseEnter={() => setHoveredTech(`${project.id}-${techIndex}`)}
                                onMouseLeave={() => setHoveredTech(null)}
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quantum Action Ports */}
                        <div className="flex gap-3 pt-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-slate-500/50 rounded-xl transition-all duration-300 text-slate-300 hover:text-white font-mono text-sm"
                          >
                            <Github className="w-4 h-4" />
                            SOURCE
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl transition-all duration-300 text-white font-mono text-sm shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
                          >
                            <Play className="w-4 h-4" />
                            LAUNCH
                          </a>
                        </div>
                      </div>

                      {/* Quantum Field Effect */}
                      <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <div 
                          className="absolute inset-0 rounded-3xl animate-pulse"
                          style={{
                            background: `linear-gradient(45deg, ${project.color}20, transparent, ${project.color}20)`,
                            filter: 'blur(1px)'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quantum Footer */}
        <div className="text-center py-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-full border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer group">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-white font-mono">EXPLORE.MORE.DIMENSIONS</span>
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <Github className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes quantumRise {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(-15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;