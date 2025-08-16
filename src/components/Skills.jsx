import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Settings, X, Target } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      angle: 270,
      skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Redux Toolkit"]
    },
    {
      title: "Backend",
      icon: Server,
      angle: 180,
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT Authentication"]
    },
    {
      title: "Database",
      icon: Database,
      angle: 90,
      skills: ["MongoDB", "PostgreSQL", "Redis", "Mongoose ODM", "Sequelize ORM"]
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      angle: 0,
      skills: ["Git & GitHub", "Docker", "AWS Services", "CI/CD Pipelines", "Linux/Unix"]
    }
  ];

  const handleCategoryClick = (categoryIndex) => {
    setSelectedCategory(categoryIndex);
  };

  const closePopup = () => {
    setSelectedCategory(null);
  };

  return (
    <div id='skills' className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-40 w-56 h-56 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}
        ></div>
        
        {/* Rotating Gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(0, 212, 255, 0.1) 60deg, transparent 120deg, rgba(59, 130, 246, 0.1) 180deg, transparent 240deg, rgba(139, 92, 246, 0.1) 300deg, transparent 360deg)`,
            animation: 'spin 30s linear infinite'
          }}
        ></div>
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
        
        {/* Scanline Effect */}
        <div 
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          style={{
            animation: 'scanline 4s ease-in-out infinite',
            top: '0%'
          }}
        ></div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0px) translateX(-5px); }
          75% { transform: translateY(10px) translateX(5px); }
        }
        
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

      {/* Header */}
      <div className={`text-center mb-16 transition-all duration-1000 relative z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
          MY SKILLS
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">Click on any skill category to explore my expertise</p>
      </div>

      {/* Circle Layout */}
      <div className={`relative w-96 h-96 md:w-[500px] md:h-[500px] transition-all duration-1000 z-10 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        
        {/* Central Hub */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center cursor-pointer z-20"
          style={{
            background: `rgba(0, 212, 255, 0.1)`,
            border: `1px solid rgba(0, 212, 255, 0.3)`,
            backdropFilter: 'blur(10px)'
          }}
        >
          <Target className="w-12 h-12 text-cyan-400" />
          <div className="text-xs text-gray-400">SKILLS HUB</div>
        </div>

        {/* Fixed Position Categories */}
        {skillCategories.map((category, index) => {
          const radius = 180;
          const angle = category.angle * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const IconComponent = category.icon;

          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`
              }}
              onClick={() => handleCategoryClick(index)}
            >
              {/* Category Circle */}
              <div
                className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:scale-110"
                style={{
                  background: `rgba(0, 212, 255, 0.1)`,
                  border: `1px solid rgba(0, 212, 255, 0.3)`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <IconComponent className="w-8 h-8 text-cyan-400" />
              </div>
              {/* Label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-300">
                {category.title}
              </div>
              {/* Connection Line */}
              <div
                className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-cyan-400/30"
                style={{
                  width: `${radius - 50}px`,
                  transform: `translateY(-50%) rotate(${category.angle}deg)`
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Skills Popup */}
      {selectedCategory !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <div
            className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup Background Effects */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '25px 25px'
                }}
              ></div>
              
              {/* Animated Particles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-cyan-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                ></div>
              ))}
              
              {/* Subtle Border Lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
            </div>

            {/* Popup Header */}
            <div className="sticky top-0 bg-gray-900/95 border-b border-gray-700/50 p-6 rounded-t-3xl flex justify-between items-center relative z-10">
              <h3 className="text-3xl font-bold text-white">{skillCategories[selectedCategory].title}</h3>
              <button
                onClick={closePopup}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-200"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>
            {/* Skills List */}
            <div className="p-6 grid md:grid-cols-2 gap-4 relative z-10">
              {skillCategories[selectedCategory].skills.map((skill, skillIndex) => (
                <div 
                  key={skill} 
                  className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/50 transition-all duration-200 relative overflow-hidden group"
                  style={{
                    animationDelay: `${skillIndex * 100}ms`
                  }}
                >
                  {/* Skill Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-gray-200 relative z-10">{skill}</span>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;