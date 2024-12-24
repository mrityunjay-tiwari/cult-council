import React, { useEffect, useRef, useState } from "react";

const images = [
  "/fac/fac1.jpg",
  "/fac/fac2.jpg",
  "/fac/fac3.jpg",
  "/fac/fac4.jpg",
  "/fac/fac5.jpg",
  "/fac/fac6.jpg",
  "/fac/fac7.jpg",
  "/fac/fac8.jpg",
  "/fac/fac9.jpg",
  "/fac/fac10.jpg",
  "/fac/fac11.jpg",
  "/fac/fac12.jpg",
  "/fac/fac13.jpg",
  "/fac/fac14.jpg",
  "/fac/fac15.jpg",
  "/fac/fac16.jpg",
  "/fac/fac17.jpg",
  "/fac/fac18.jpg",
  "/fac/fac19.jpg",
  "/fac/fac20.jpg",
  "/fac/fac21.jpg",
  "/fac/fac22.jpg",
  "/fac/fac23.jpg",
  "/fac/fac24.jpg",
  "/fac/fac25.jpg",
  "/fac/fac26.jpg",
  "/fac/fac27.jpg",
  "/fac/fac28.jpg",
  "/fac/fac29.jpg",
  "/fac/fac30.jpg",
  "/fac/fac31.jpg",
  "/fac/fac32.jpg",
  "/fac/fac33.jpg",
  "/fac/fac34.jpg",
  "/fac/fac35.jpg",
  "/fac/fac36.jpg",
  "/fac/fac37.jpg",
  "/fac/fac38.jpg",
  "/fac/fac39.jpg",
  "/fac/fac40.jpg",
  "/fac/fac41.jpg",
  "/fac/fac42.jpg",
  "/fac/fac43.jpg",
  "/fac/fac44.jpg",
  "/fac/fac45.jpg",
  "/fac/fac46.jpg",
  "/fac/fac47.jpg",
];

const FacCarousel = () => {
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
    <div className="bg-slate-950 pt-20">
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-8 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-5xl">Moments on Canvas</h1> 
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

export default FacCarousel;
