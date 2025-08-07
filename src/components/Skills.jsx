import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "cyan",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Router",
        "Responsive Design",
        "Context API"
      ]
    },
    {
      title: "Backend",
      icon: "⚡",
      color: "emerald",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "JWT Authentication",
        "OAuth Integration",
        "API Design",
        "Middleware Development",
        "Error Handling"
      ]
    },
    {
      title: "Database",
      icon: "🗃️",
      color: "violet",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Mongoose ODM",
        "Sequelize ORM",
        "Database Design",
        "Query Optimization",
        "Data Modeling",
        "Migration Scripts"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🔧",
      color: "orange",
      skills: [
        "Git & GitHub",
        "Docker",
        "AWS Services",
        "CI/CD Pipelines",
        "Linux/Unix",
        "Shell Scripting",
        "Webpack",
        "Jest Testing",
        "ESLint & Prettier"
      ]
    }
  ];

  const techStack = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "TypeScript", icon: "🔷", category: "Language" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Git", icon: "📚", category: "Version Control" },
    { name: "GraphQL", icon: "🔗", category: "API" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-16 w-3 h-3 bg-green-400 rounded-full animate-bounce" />
        <div className="absolute top-2/3 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              EXPERTISE
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Building modern web applications with cutting-edge technologies and best practices
          </p>
        </div>

        {/* Category Navigation */}
        <div className={`flex justify-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '0.2s' }}>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(index)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 mx-1 text-lg ${
                  selectedCategory === index
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg transform scale-105 shadow-purple-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-3 text-xl">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Skills List */}
          <div className={`lg:col-span-2 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`} style={{ transitionDelay: '0.4s' }}>
            <div className="mb-8">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {skillCategories[selectedCategory].title} Technologies
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {skillCategories[selectedCategory].skills.map((skill, index) => (
                <div
                  key={skill}
                  className={`group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer ${
                    hoveredSkill === `${selectedCategory}-${index}` ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredSkill(`${selectedCategory}-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ 
                    transitionDelay: `${index * 0.05}s`,
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`flex items-center justify-center transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`} style={{ transitionDelay: '0.6s' }}>
            <div className="relative">
              {/* Central Icon */}
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl flex items-center justify-center text-6xl shadow-2xl shadow-purple-500/30 animate-pulse">
                {skillCategories[selectedCategory].icon}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-ping" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-pulse" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-3xl blur-xl scale-110" />
            </div>
          </div>
        </div>

        {/* Tech Stack Showcase */}
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} style={{ transitionDelay: '0.8s' }}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Tech Arsenal
            </h3>
            <p className="text-gray-400 text-lg">Tools and technologies I work with daily</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative"
                style={{ 
                  animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-3 hover:shadow-2xl hover:shadow-cyan-500/20 text-center min-h-[120px] flex flex-col justify-center">
                  <div className="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {tech.name}
                  </h4>
                  <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.category}
                  </div>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-400/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 -z-10 blur-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className={`mt-20 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} style={{ transitionDelay: '1s' }}>
          <div className="inline-flex items-center space-x-12 bg-white/5 backdrop-blur-xl rounded-3xl px-12 py-6 border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">30+</div>
              <div className="text-sm text-gray-400 mt-1">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">100+</div>
              <div className="text-sm text-gray-400 mt-1">Projects Built</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">3+</div>
              <div className="text-sm text-gray-400 mt-1">Years Experience</div>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;