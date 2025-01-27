import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://ik.imagekit.io/mrityunjay/dfz5.jpeg?updatedAt=1737975509451",
  "https://ik.imagekit.io/mrityunjay/dfz7.jpeg?updatedAt=1737975507991",
  "https://ik.imagekit.io/mrityunjay/dfz4.jpeg?updatedAt=1737975507105",
  "https://ik.imagekit.io/mrityunjay/dfz6.jpeg?updatedAt=1737975507061",
  "https://ik.imagekit.io/mrityunjay/dfz9.jpeg?updatedAt=1737975506060",
  "https://ik.imagekit.io/mrityunjay/dfz8.jpeg?updatedAt=1737975503802",
  "https://ik.imagekit.io/mrityunjay/dfz3.jpg?updatedAt=1737975504229",
  "https://ik.imagekit.io/mrityunjay/events6.jpeg?updatedAt=1737970312984",
  "https://ik.imagekit.io/mrityunjay/dfz1.jpg?updatedAt=1737975716128",
  "https://ik.imagekit.io/mrityunjay/dfz2.jpg?updatedAt=1737975718229",
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
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-8 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-5xl">Rhythms in Motion</h1> 
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
