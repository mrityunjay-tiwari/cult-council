import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://ik.imagekit.io/mrityunjay/lit6.jpg?updatedAt=1737977102165",
  "https://ik.imagekit.io/mrityunjay/lit5.jpg?updatedAt=1737977101754",
  "https://ik.imagekit.io/mrityunjay/lit4.jpg?updatedAt=1737977101600",
  "https://ik.imagekit.io/mrityunjay/lit8.jpg?updatedAt=1737977101645",
  "https://ik.imagekit.io/mrityunjay/lit7.jpg?updatedAt=1737977101636",
  "https://ik.imagekit.io/mrityunjay/lit3.jpg?updatedAt=1737977101366",
  "https://ik.imagekit.io/mrityunjay/lit2.jpg?updatedAt=1737977100619",
  "https://ik.imagekit.io/mrityunjay/lit1.jpg?updatedAt=1737977100477",
];

const LitCarousel = () => {
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
    <div className="bg-slate-950">
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-8 pt-24 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-5xl">Library of Expressions</h1> 
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

export default LitCarousel;
