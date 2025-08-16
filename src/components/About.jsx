import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML/CSS'];
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const downloadResume = () => {
    // In a real app, this would download an actual resume file
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Prathap_Resume.pdf';
    link.click();
  };

  const stats = [
    { value: '1+', label: 'Year Experience', delay: 0 },
    { value: '15+', label: 'Projects Built', delay: 0.2 },
    { value: '100%', label: 'Passion Level', delay: 0.4 },
    { value: '24/7', label: 'Learning Mode', delay: 0.6 }
  ];

  return (
    <div 
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-16 px-4 flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl font-bold text-white mb-4 relative inline-block">
            About Me
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-white mb-4">
                Passionate Full Stack Developer
              </h3>
              <div className="text-xl text-cyan-400 font-medium flex items-center gap-2">
                Specializing in{' '}
                <span className="inline-block min-w-[120px] text-left">
                  <span key={currentSkill} className="animate-fadeIn font-bold text-blue-400">
                    {skills[currentSkill]}
                  </span>
                </span>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="transform transition-all duration-700 delay-500 hover:text-white">
                I'm an aspiring full-stack developer with <strong className="text-cyan-400">1 year of hands-on experience</strong> building 
                web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). 
                I'm continuously learning and improving my skills by working on real-world projects, 
                building my portfolio, and exploring best practices in clean, maintainable code.
              </p>
              
              <p className="transform transition-all duration-700 delay-700 hover:text-white">
                I enjoy solving problems through code and take pride in creating user-friendly, 
                responsive, and scalable web applications. I'm always open to learning new technologies 
                and growing as a developer.
              </p>
              
              <p className="transform transition-all duration-700 delay-900 hover:text-white">
                Outside of coding, I like exploring new tools, studying software engineering concepts, 
                and engaging with the developer community to grow and share knowledge.
              </p>
            </div>
            
            {/* <div className={`pt-4 transform transition-all duration-700 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <button
                onClick={downloadResume}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-cyan-500/20"
              >
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div> */}
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-90'}`}>
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl shadow-blue-900/50 relative overflow-hidden group border-4 border-cyan-400/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse opacity-75"></div>
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">PP</span>
                
                {/* Floating elements around avatar */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-4 w-5 h-5 bg-pink-400 rounded-full animate-bounce animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-900/20 transform transition-all duration-700 hover:scale-105 border border-gray-700/50 hover:border-cyan-500/50 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${1300 + stat.delay * 1000}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 animate-countUp">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default About;