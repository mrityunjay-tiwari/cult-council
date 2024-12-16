import React, { useEffect, useRef, useState } from "react";

const images = [
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
  "/music.jpg",
];

const DfzCarousel = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth; 
    let currentScroll = 0;
    let animationFrameId;

    const moveCarousel = () => {
      if (!isHovered) {
        currentScroll += 0.5; 
        if (currentScroll >= scrollWidth) {
          currentScroll = 0; 
        }
        container.scrollLeft = currentScroll; 
      }
      animationFrameId = requestAnimationFrame(moveCarousel); 
    };

    moveCarousel(); 

    return () => {
      cancelAnimationFrame(animationFrameId); 
    };
  }, [isHovered]);

  return (
  <>
    <div className="bg-slate-950">
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-8 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-5xl">Gallery of Rhythms</h1> 
    </div>
    <div className="relative w-full h-96 overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-gray-800">
      <div
        ref={containerRef}
        className="flex items-center justify-start gap-12 w-full h-full overflow-x-scroll scrollbar-none"
      >
        {images.map((src, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setIsHovered(true); 
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setIsHovered(false); 
              setHoveredIndex(null);
            }}
            className={`relative w-64 h-80 flex-shrink-0 rounded-2xl bg-cover bg-center transition-transform duration-500 ${
              hoveredIndex === index || hoveredIndex === null
                ? "scale-110 z-10 shadow-2xl -translate-y-2" 
                : "scale-90 z-0 backdrop-blur-lg bg-white/30 opacity-50" 
            }`}
            style={{
              backgroundImage: `url(${src})`,
            }}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default DfzCarousel;
