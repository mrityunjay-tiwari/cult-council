import React, { useState, useEffect } from 'react';
import { Star, Sparkles, Moon, Sun, Cloud } from 'lucide-react';

const Tracing = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);

    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(progress);

      const viewportSections = document.querySelectorAll('section');
      const sectionPositions = Array.from(viewportSections).map(section => {
        const rect = section.getBoundingClientRect();
        return rect.top + window.scrollY;
      });

      const currentSection = sectionPositions.findIndex((position, index, arr) => {
        const nextPosition = arr[index + 1] || Infinity;
        return scrolled >= position && scrolled < nextPosition;
      });

      setActiveSection(Math.max(0, currentSection));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed left-2 top-0 h-full pointer-events-none z-40">
      <div className="relative h-full w-px">
        <div 
          className={`absolute top-0 w-px transition-all duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            height: `${scrollProgress}%`,
            background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.4) 100%)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
            width: '2px'
          }}
        />

        {document.querySelectorAll('section').length > 0 && 
          Array.from(document.querySelectorAll('section')).map((_, index) => {
            const position = (index / (document.querySelectorAll('section').length - 1)) * 100;
            const isActive = index <= activeSection;

            return (
              <div
                key={index}
                className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
                style={{ top: `${position}%` }}
              >
                <div
                  className={`relative transition-all duration-300 ${
                    index === activeSection ? 'scale-110' : isActive ? 'scale-100' : 'scale-90'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-blue-900/30'
                    }`}
                  />
                </div>
              </div>
            );
          })
        }

        <div 
          className="absolute w-4 h-4 -translate-x-1/2"
          style={{
            top: `${scrollProgress}%`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse" />
          
          <div className="absolute inset-[-2px] rounded-full bg-blue-400 opacity-50 blur-sm" />
          
          <div className="absolute inset-[-4px] rounded-full animate-ping">
            <div className="absolute inset-0 rounded-full bg-blue-300 opacity-30 blur-md" />
          </div>

          <div className="absolute inset-[3px] rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Tracing;