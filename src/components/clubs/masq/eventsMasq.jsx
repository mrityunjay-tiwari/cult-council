import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://ik.imagekit.io/mrityunjay/stageplay4.jpg?updatedAt=1737978255171",
  "https://ik.imagekit.io/mrityunjay/stageplay1.jpg?updatedAt=1737978254610",
  "https://ik.imagekit.io/mrityunjay/stageplay2.jpg?updatedAt=1737978254420",
  "https://ik.imagekit.io/mrityunjay/stageplay3.jpg?updatedAt=1737978253791",
  "https://ik.imagekit.io/mrityunjay/nukkad2.jpg?updatedAt=1737978153873",
  "https://ik.imagekit.io/mrityunjay/nukkad3.jpg?updatedAt=1737978153453",
  "https://ik.imagekit.io/mrityunjay/nukkad4.jpg?updatedAt=1737978153161",
  "https://ik.imagekit.io/mrityunjay/nukkad6.jpg?updatedAt=1737978153106",
  "https://ik.imagekit.io/mrityunjay/nukkad5.jpg?updatedAt=1737978153155",
  "https://ik.imagekit.io/mrityunjay/nukkad1.jpg?updatedAt=1737978153647",
  "https://ik.imagekit.io/mrityunjay/nukkad7.jpg?updatedAt=1737978153643",
  "https://ik.imagekit.io/mrityunjay/mime3.jpg?updatedAt=1737978001961",
  "https://ik.imagekit.io/mrityunjay/mime5.jpg?updatedAt=1737978000531",
  "https://ik.imagekit.io/mrityunjay/mime4.jpg?updatedAt=1737978000436",
  "https://ik.imagekit.io/mrityunjay/mime1.jpg?updatedAt=1737978000113",
  "https://ik.imagekit.io/mrityunjay/mime2.jpg?updatedAt=1737977999813",
];

const MasqCarousel = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth; // Total width of all images combined
    let currentScroll = 0;
    let animationFrameId;

    const moveCarousel = () => {
      if (!isHovered) {
        currentScroll += 0.5; // Slow scroll speed
        if (currentScroll >= scrollWidth) {
          currentScroll = 0; // Reset scroll to the start
        }
        container.scrollLeft = currentScroll; // Update scroll position
      }
      animationFrameId = requestAnimationFrame(moveCarousel); // Continue the animation
    };

    moveCarousel(); // Start the scroll animation

    return () => {
      cancelAnimationFrame(animationFrameId); // Clean up animation on component unmount
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
              setIsHovered(true); // Stop scrolling
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setIsHovered(false); // Resume scrolling
              setHoveredIndex(null);
            }}
            className={`relative w-64 h-80 flex-shrink-0 rounded-2xl bg-cover bg-center transition-transform duration-500 ${
              hoveredIndex === index || hoveredIndex === null
                ? "scale-110 z-10 shadow-2xl -translate-y-2" // Highlighted image
                : "scale-90 z-0 backdrop-blur-lg bg-white/30 opacity-50" // Glassmorphism for others
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

export default MasqCarousel;
