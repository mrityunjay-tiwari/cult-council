import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://ik.imagekit.io/mrityunjay/fac47.jpg?updatedAt=1737975855324",
  "https://ik.imagekit.io/mrityunjay/fac44.jpg?updatedAt=1737975855280",
  "https://ik.imagekit.io/mrityunjay/fac46.jpg?updatedAt=1737975855007",
  "https://ik.imagekit.io/mrityunjay/fac45.jpg?updatedAt=1737975854803",
  "https://ik.imagekit.io/mrityunjay/fac42.jpg?updatedAt=1737975853704",
  "https://ik.imagekit.io/mrityunjay/fac43.jpg?updatedAt=1737975853451",
  "https://ik.imagekit.io/mrityunjay/fac40.jpg?updatedAt=1737975851952",
  "https://ik.imagekit.io/mrityunjay/fac41.jpg?updatedAt=1737975851760",
  "https://ik.imagekit.io/mrityunjay/fac38.jpg?updatedAt=1737975851105",
  "https://ik.imagekit.io/mrityunjay/fac37.jpg?updatedAt=1737975850965",
  "https://ik.imagekit.io/mrityunjay/fac36.jpg?updatedAt=1737975850929",
  "https://ik.imagekit.io/mrityunjay/fac35.jpg?updatedAt=1737975850559",
  "https://ik.imagekit.io/mrityunjay/fac34.jpg?updatedAt=1737975850350",
  "https://ik.imagekit.io/mrityunjay/fac32.jpg?updatedAt=1737975848621",
  "https://ik.imagekit.io/mrityunjay/fac33.jpg?updatedAt=1737975848455",
  "https://ik.imagekit.io/mrityunjay/fac31.jpg?updatedAt=1737975847648",
  "https://ik.imagekit.io/mrityunjay/fac30.jpg?updatedAt=1737975846320",
  "https://ik.imagekit.io/mrityunjay/fac29.jpg?updatedAt=1737975846200",
  "https://ik.imagekit.io/mrityunjay/fac28.jpg?updatedAt=1737975845700",
  "https://ik.imagekit.io/mrityunjay/fac25.jpg?updatedAt=1737975845704",
  "https://ik.imagekit.io/mrityunjay/fac27.jpg?updatedAt=1737975845449",
  "https://ik.imagekit.io/mrityunjay/fac15.jpg?updatedAt=1737975845529",
  "https://ik.imagekit.io/mrityunjay/fac13.jpg?updatedAt=1737975844513",
  "https://ik.imagekit.io/mrityunjay/fac24.jpg?updatedAt=1737975843883",
  "https://ik.imagekit.io/mrityunjay/fac23.jpg?updatedAt=1737975843127",
  "https://ik.imagekit.io/mrityunjay/fac22.jpg?updatedAt=1737975842285",
  "https://ik.imagekit.io/mrityunjay/fac21.jpg?updatedAt=1737975841517",
  "https://ik.imagekit.io/mrityunjay/fac14.jpg?updatedAt=1737975840467",
  "https://ik.imagekit.io/mrityunjay/fac19.jpg?updatedAt=1737975838634",
  "https://ik.imagekit.io/mrityunjay/fac20.jpg?updatedAt=1737975838205",
  "https://ik.imagekit.io/mrityunjay/fac16.jpg?updatedAt=1737975837186",
  "https://ik.imagekit.io/mrityunjay/fac11.jpg?updatedAt=1737975835152",
  "https://ik.imagekit.io/mrityunjay/fac6.jpg?updatedAt=1737975830479",
  "https://ik.imagekit.io/mrityunjay/fac6.jpg?updatedAt=1737975830479",
  "https://ik.imagekit.io/mrityunjay/fac8.jpg?updatedAt=1737975830276",
  "https://ik.imagekit.io/mrityunjay/fac3.jpg?updatedAt=1737975830113",
  "https://ik.imagekit.io/mrityunjay/fac2.jpg?updatedAt=1737975830269",
  "https://ik.imagekit.io/mrityunjay/fac9.jpg?updatedAt=1737975830059",
  "https://ik.imagekit.io/mrityunjay/fac4.jpg?updatedAt=1737975829663",
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
