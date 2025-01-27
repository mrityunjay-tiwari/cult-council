import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://ik.imagekit.io/mrityunjay/quiz28.jpeg?updatedAt=1737977590184",
  "https://ik.imagekit.io/mrityunjay/quiz27.jpeg?updatedAt=1737977588302",
  "https://ik.imagekit.io/mrityunjay/quiz26.jpeg?updatedAt=1737977588225",
  "https://ik.imagekit.io/mrityunjay/quiz25.jpeg?updatedAt=1737977587138",
  "https://ik.imagekit.io/mrityunjay/quiz24.jpeg?updatedAt=1737977585339",
  "https://ik.imagekit.io/mrityunjay/quiz17.jpeg?updatedAt=1737977585408",
  "https://ik.imagekit.io/mrityunjay/quiz19.jpeg?updatedAt=1737977585250",
  "https://ik.imagekit.io/mrityunjay/quiz18.jpeg?updatedAt=1737977585083",
  "https://ik.imagekit.io/mrityunjay/quiz15.jpeg?updatedAt=1737977584987",
  "https://ik.imagekit.io/mrityunjay/quiz14.jpeg?updatedAt=1737977584799",
  "https://ik.imagekit.io/mrityunjay/quiz13.jpeg?updatedAt=1737977584792",
  "https://ik.imagekit.io/mrityunjay/quiz16.jpeg?updatedAt=1737977584636",
  "https://ik.imagekit.io/mrityunjay/quiz23.jpeg?updatedAt=1737977583851",
  "https://ik.imagekit.io/mrityunjay/quiz23.jpeg?updatedAt=1737977583851",
  "https://ik.imagekit.io/mrityunjay/quiz22.jpeg?updatedAt=1737977583179",
  "https://ik.imagekit.io/mrityunjay/quiz21.jpeg?updatedAt=1737977581195",
  "https://ik.imagekit.io/mrityunjay/quiz20.jpeg?updatedAt=1737977578456",
  "https://ik.imagekit.io/mrityunjay/quiz12.jpeg?updatedAt=1737977578033",
  "https://ik.imagekit.io/mrityunjay/quiz11.jpeg?updatedAt=1737977573603",
  "https://ik.imagekit.io/mrityunjay/quiz10.jpeg?updatedAt=1737977569969",
  "https://ik.imagekit.io/mrityunjay/quiz9.jpeg?updatedAt=1737977569812",
  "https://ik.imagekit.io/mrityunjay/quiz8.jpeg?updatedAt=1737977567505",
  "https://ik.imagekit.io/mrityunjay/quiz2.jpeg?updatedAt=1737977567614",
  "https://ik.imagekit.io/mrityunjay/quiz1.jpeg?updatedAt=1737977567617",
  "https://ik.imagekit.io/mrityunjay/quiz5.jpeg?updatedAt=1737977567610",
  "https://ik.imagekit.io/mrityunjay/quiz7.jpeg?updatedAt=1737977567426",
  "https://ik.imagekit.io/mrityunjay/quiz6.jpeg?updatedAt=1737977567457",
  "https://ik.imagekit.io/mrityunjay/quiz3.jpeg?updatedAt=1737977567451",
  
];

const QuizCarousel = () => {
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
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-8 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-5xl">Trivia Wall</h1> 
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

export default QuizCarousel;
