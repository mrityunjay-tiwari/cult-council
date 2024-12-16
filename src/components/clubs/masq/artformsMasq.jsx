import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Drama, Sparkles, Calendar } from 'lucide-react';

const performanceData = [
  {
    id: 1,
    title: "Andha Yug",
    year: 2023,
    description: "A powerful adaptation of Dharamvir Bharati's epic play exploring the moral bankruptcy of the Mahabharata's final war.",
    director: "Aman Sharma",
    genre: "Philosophical Drama",
    imageUrl: "/drama.jpg",
    performers: 12,
    venue: "Open Air Drama, IIT BHU"
  },
  {
    id: 2,
    title: "Waiting for Godot",
    year: 2022,
    description: "Samuel Beckett's absurdist masterpiece examining human existence, hope, and the futility of waiting.",
    director: "Priya Mishra",
    genre: "Absurdist Drama",
    imageUrl: "/drama.jpg",
    performers: 4,
    venue: "SAC Auditorium"
  },
  {
    id: 3,
    title: "Tughlaq",
    year: 2024,
    description: "A nuanced exploration of Mohammad bin Tughlaq's complex reign, blending historical drama with contemporary political insights.",
    director: "Rohan Kapoor",
    genre: "Historical Drama",
    imageUrl: "/drama.jpg",
    performers: 15,
    venue: "Students' Cultural Center"
  },
  {
    id: 4,
    title: "Mahabhrata Ki Ek Shaam",
    year: 2023,
    description: "A contemporary reimagining of the epic, focusing on human emotions and moral dilemmas.",
    director: "Sneha Gupta",
    genre: "Epic Adaptation",
    imageUrl: "/drama.jpg", 
    performers: 10,
    venue: "OAT Night Stage"
  }
];

const DramaShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredPerformance, setHoveredPerformance] = useState(null);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const autoSlideTimerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % performanceData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + performanceData.length) % performanceData.length);
  };

  const startAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }

    if (!isAutoPlayPaused) {
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % performanceData.length);
      }, 4000);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [isAutoPlayPaused]);

  const visiblePerformances = [
    performanceData[(currentIndex - 1 + performanceData.length) % performanceData.length],
    performanceData[currentIndex],
    performanceData[(currentIndex + 1) % performanceData.length]
  ];

  return (
    <div 
      className="relative w-full h-[80vh] bg-gray-950 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsAutoPlayPaused(true)}
      onMouseLeave={() => setIsAutoPlayPaused(false)}
    >
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-4 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all"
      >
        <ChevronRight className="text-white" size={32} />
      </button>

      {/* Progress Indicator */}
      <div className="absolute bottom-4 z-20 flex space-x-2">
        {performanceData.map((_, index) => (
          <div
            key={index}
            className={`
              w-3 h-1 
              ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}
              transition-all duration-300
            `}
          />
        ))}
      </div>

      {/* Carousel Container */}
      <div className="flex items-center justify-center w-full h-full px-16">
        <AnimatePresence>
          {visiblePerformances.map((performance, index) => (
            <motion.div
              key={performance.id}
              initial={{ 
                scale: index === 1 ? 1 : 0.8, 
                opacity: index === 1 ? 1 : 0.6 
              }}
              animate={{ 
                scale: index === 1 ? 1 : 0.8, 
                opacity: index === 1 ? 1 : 0.6,
                x: index === 0 ? '-50%' : index === 2 ? '50%' : 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              className={`
                absolute w-[700px] max-w-[90vw] h-[70vh] 
                flex flex-col md:flex-row 
                bg-slate-800 shadow-2xl rounded-xl 
                overflow-hidden transition-all duration-500
                ${index === 1 ? 'z-10' : 'z-0'}
              `}
              onMouseEnter={() => setHoveredPerformance(performance.id)}
              onMouseLeave={() => setHoveredPerformance(null)}
            >
              {/* Performance Image */}
              <div className="w-full md:w-2/3 h-full relative">
                <img 
                  src={performance.imageUrl} 
                  alt={performance.title} 
                  className="w-full h-full object-cover"
                />
                {hoveredPerformance === performance.id && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  >
                    <div className="text-white text-center p-4">
                      <p className="text-lg italic">{performance.description}</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Performance Details */}
              <div className="w-full md:w-1/3 p-4 bg-slate-800 text-white">
                <h3 className="text-2xl font-bold flex items-center">
                  <Drama className="mr-2 text-emerald-400" />
                  {performance.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm">
                  <p className="flex items-center">
                    <Sparkles className="mr-2 text-yellow-400" size={18} />
                    Director: {performance.director}
                  </p>
                  <p className="flex items-center">
                    <Calendar className="mr-2 text-blue-400" size={18} />
                    Year: {performance.year}
                  </p>
                  <div className="bg-slate-700 p-2 rounded mt-2">
                    <p className="text-xs uppercase tracking-wider text-gray-300">Performance Details</p>
                    <p>Genre: {performance.genre}</p>
                    <p>Performers: {performance.performers}</p>
                    <p>Venue: {performance.venue}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DramaShowcase;