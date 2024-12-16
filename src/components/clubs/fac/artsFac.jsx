import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// Sample art pieces data - replace with your actual artwork collection
const artPieces = [
  {
    id: 1,
    title: "Title 1",
    artist: "Mrityunjay Tiwari",
    year: 2023,
    description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients.",
    imageUrl: "/artwork.png",
    medium: "Oil on Canvas"
  },
  {
    id: 2,
    title: "Title 2",
    artist: "Mrityunjay Tiwari",
    year: 2023,
    description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients.",
    imageUrl: "/artwork3.png",
    medium: "Oil on Canvas"
  },
  {
    id: 3,
    title: "Title 3",
    artist: "Mrityunjay Tiwari",
    year: 2023,
    description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients.",
    imageUrl: "/artwork3.png",
    medium: "Oil on Canvas"
  },
  {
    id: 4,
    title: "Title 4",
    artist: "Mrityunjay Tiwari",
    year: 2023,
    description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients.",
    imageUrl: "/artwork3.png",
    medium: "Oil on Canvas"
  },
  {
    id: 5,
    title: "Title 5",
    artist: "Mrityunjay Tiwari",
    year: 2023,
    description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients.",
    imageUrl: "/artwork3.png",
    medium: "Oil on Canvas"
  },
  {
    id: 6,
    title: "Title 6",
    artist: "Mrityunjay Tiwari",
    year: 2023,
    description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients.",
    imageUrl: "/artwork3.png",
    medium: "Oil on Canvas"
  },
  {
    id: 7,
    title: "Title 7",
    artist: "Mrityunjay Tiwari",
    year: 2023,
    description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients.",
    imageUrl: "/artwork3.png",
    medium: "Oil on Canvas"
  },
  // Add 50-60 art pieces here with similar structure
  // ... (truncated for brevity)
];

const ArtCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredPiece, setHoveredPiece] = useState(null);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const carouselRef = useRef(null);
  const autoSlideTimerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artPieces.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artPieces.length) % artPieces.length);
  };

  const startAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }

    // If not paused, start auto-sliding
    if (!isAutoPlayPaused) {
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % artPieces.length);
      }, 2500); // Change slide every 5 seconds
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlayPaused(prev => !prev);
  };

  const handleKeyNavigation = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  useEffect(() => {
    // Start auto-sliding when component mounts
    startAutoSlide();

    // Add keyboard navigation
    window.addEventListener('keydown', handleKeyNavigation);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyNavigation);
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [isAutoPlayPaused]);

  // Restart auto-slide timer whenever index changes
  useEffect(() => {
    startAutoSlide();
  }, [currentIndex, isAutoPlayPaused]);

  const visiblePieces = [
    artPieces[(currentIndex - 1 + artPieces.length) % artPieces.length],
    artPieces[currentIndex],
    artPieces[(currentIndex + 1) % artPieces.length]
  ];

  return (
    <div 
      className="relative w-full h-[80vh] bg-slate-950 flex items-center justify-center overflow-hidden"
      ref={carouselRef}
    >
        
      {/* Auto-play Toggle Button */}
      {/* <button 
        onClick={toggleAutoPlay} 
        className="absolute top-4 right-4 z-30 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
      >
        {isAutoPlayPaused ? (
          <Play className="text-black" size={24} />
        ) : (
          <Pause className="text-black" size={24} />
        )}
      </button> */}

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 z-20 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
      >
        <ChevronLeft className="text-black" size={32} />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-4 z-20 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
      >
        <ChevronRight className="text-black" size={32} />
      </button>

      {/* Progress Indicator */}
      <div className="absolute bottom-4 z-20 flex space-x-2">
        {artPieces.map((_, index) => (
          <div
            key={index}
            className={`
              w-3 h-1 
              ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}
              transition-all duration-300
            `}
          />
        ))}
      </div>

      {/* Carousel Container */}
      <div 
        className="flex items-center justify-center w-full h-full space-x-4 px-16"
        onMouseEnter={() => setIsAutoPlayPaused(true)}
        onMouseLeave={() => setIsAutoPlayPaused(false)}
      >
        <AnimatePresence>
          {visiblePieces.map((piece, index) => (
            <motion.div
              key={piece.id}
              initial={{ scale: index === 1 ? 1 : 0.8, opacity: index === 1 ? 1 : 0.6 }}
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
                absolute w-[600px] max-w-[90vw] h-[70vh] 
                flex flex-col md:flex-row 
                bg-white shadow-2xl rounded-xl 
                overflow-hidden transition-all duration-500
                ${index === 1 ? 'z-10' : 'z-0'}
              `}
              onMouseEnter={() => setHoveredPiece(piece.id)}
              onMouseLeave={() => setHoveredPiece(null)}
            >
              {/* Image */}
              <div className="w-full md:w-2/3 h-full relative">
                <img 
                  src={piece.imageUrl} 
                  alt={piece.title} 
                  className="w-full h-full object-cover"
                />
                {hoveredPiece === piece.id && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-bold">{piece.title}</h3>
                      <p className="mt-2">{piece.description}</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Artwork Details - Always Visible on Mobile */}
              <div className="w-full md:w-1/3 p-4 bg-slate-900">
                <h3 className="text-xl font-bold text-white">{piece.title}</h3>
                <p className="mt-2 text-white">{piece.artist}</p>
                <div className="mt-4 space-y-2 text-white">
                  <p>Year: {piece.year}</p>
                  <p>Medium: {piece.medium}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ArtCarousel;





// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
// import { cn } from '../lib/utils';

// // Sample art pieces data - replace with your actual artwork collection
// const artPieces = [
//   {
//     id: 1,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   {
//     id: 2,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   {
//     id: 3,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   {
//     id: 4,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   {
//     id: 5,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   {
//     id: 6,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   {
//     id: 7,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   {
//     id: 8,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   {
//     id: 9,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   // Add more art pieces here
// ];

// // PinContainer Component
// const PinContainer = ({
//   children,
//   title,
//   className,
//   containerClassName
// }) => {
//   const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

//   const onMouseEnter = () => {
//     setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
//   };
//   const onMouseLeave = () => {
//     setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
//   };

//   return (
//     <div
//       className={cn("relative group/pin z-50 cursor-pointer", containerClassName)}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <div
//         style={{
//           perspective: "1000px",
//           transform: "rotateX(70deg) translateZ(0deg)",
//         }}
//         className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
//       >
//         <div
//           style={{
//             transform: transform,
//           }}
//           className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
//         >
//           <div className={cn("relative z-50", className)}>{children}</div>
//         </div>
//       </div>
//       <PinPerspective title={title} />
//     </div>
//   );
// };

// // PinPerspective Component
// const PinPerspective = ({ title }) => {
//   return (
//     <motion.div
//       className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"
//     >
//       <div className="w-full h-full -mt-7 flex-none inset-0">
//         <div className="absolute top-0 inset-x-0 flex justify-center">
//           <div
//             className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
//           >
//             <span
//               className="relative z-20 text-white text-xs font-bold inline-block py-0.5"
//             >
//               {title}
//             </span>

//             <span
//               className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"
//             ></span>
//           </div>
//         </div>

//         <div
//           style={{
//             perspective: "1000px",
//             transform: "rotateX(70deg) translateZ(0)",
//           }}
//           className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
//         >
//           {[0, 2, 4].map((delay) => (
//             <motion.div
//               key={delay}
//               initial={{
//                 opacity: 0,
//                 scale: 0,
//                 x: "-50%",
//                 y: "-50%",
//               }}
//               animate={{
//                 opacity: [0, 1, 0.5, 0],
//                 scale: 1,
//                 z: 0,
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 delay,
//               }}
//               className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ArtCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
//   const autoSlideTimerRef = useRef(null);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % artPieces.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + artPieces.length) % artPieces.length);
//   };

//   const startAutoSlide = () => {
//     if (autoSlideTimerRef.current) {
//       clearInterval(autoSlideTimerRef.current);
//     }

//     if (!isAutoPlayPaused) {
//       autoSlideTimerRef.current = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % artPieces.length);
//       }, 5000);
//     }
//   };

//   const toggleAutoPlay = () => {
//     setIsAutoPlayPaused(prev => !prev);
//   };

//   const handleKeyNavigation = (e) => {
//     if (e.key === 'ArrowRight') nextSlide();
//     if (e.key === 'ArrowLeft') prevSlide();
//   };

//   useEffect(() => {
//     startAutoSlide();
//     window.addEventListener('keydown', handleKeyNavigation);

//     return () => {
//       window.removeEventListener('keydown', handleKeyNavigation);
//       if (autoSlideTimerRef.current) {
//         clearInterval(autoSlideTimerRef.current);
//       }
//     };
//   }, [isAutoPlayPaused]);

//   useEffect(() => {
//     startAutoSlide();
//   }, [currentIndex, isAutoPlayPaused]);

//   const visiblePieces = [
//     artPieces[(currentIndex - 1 + artPieces.length) % artPieces.length],
//     artPieces[currentIndex],
//     artPieces[(currentIndex + 1) % artPieces.length]
//   ];

//   return (
//     <div 
//       className="relative w-full h-[80vh] bg-gray-100 flex items-center justify-center overflow-hidden"
//     >
//       {/* Auto-play Toggle Button */}
//       <button 
//         onClick={toggleAutoPlay} 
//         className="absolute top-4 right-4 z-30 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
//       >
//         {isAutoPlayPaused ? (
//           <Play className="text-black" size={24} />
//         ) : (
//           <Pause className="text-black" size={24} />
//         )}
//       </button>

//       {/* Navigation Buttons */}
//       <button 
//         onClick={prevSlide} 
//         className="absolute left-4 z-20 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
//       >
//         <ChevronLeft className="text-black" size={32} />
//       </button>
      
//       <button 
//         onClick={nextSlide} 
//         className="absolute right-4 z-20 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
//       >
//         <ChevronRight className="text-black" size={32} />
//       </button>

//       {/* Progress Indicator */}
//       <div className="absolute bottom-4 z-20 flex space-x-2">
//         {artPieces.map((_, index) => (
//           <div
//             key={index}
//             className={`
//               w-3 h-1 
//               ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}
//               transition-all duration-300
//             `}
//           />
//         ))}
//       </div>

//       {/* Carousel Container */}
//       <div 
//         className="flex items-center justify-center w-full h-full space-x-4 px-16"
//         onMouseEnter={() => setIsAutoPlayPaused(true)}
//         onMouseLeave={() => setIsAutoPlayPaused(false)}
//       >
//         <AnimatePresence>
//           {visiblePieces.map((piece, index) => (
//             <motion.div
//               key={piece.id}
//               initial={{ scale: index === 1 ? 1 : 0.8, opacity: index === 1 ? 1 : 0.6 }}
//               animate={{ 
//                 scale: index === 1 ? 1 : 0.8, 
//                 opacity: index === 1 ? 1 : 0.6,
//                 x: index === 0 ? '-50%' : index === 2 ? '50%' : 0
//               }}
//               transition={{ 
//                 type: "spring", 
//                 stiffness: 300, 
//                 damping: 30 
//               }}
//               className={`
//                 absolute w-[600px] max-w-[90vw] h-[70vh] 
//                 flex flex-col md:flex-row 
//                 bg-white shadow-2xl rounded-xl 
//                 overflow-hidden transition-all duration-500
//                 ${index === 1 ? 'z-10' : 'z-0'}
//               `}
//             >
//               {/* Image with PinContainer */}
//                     <PinContainer 
//                       title={piece.description} 
//                       containerClassName="w-full md:w-2/3 h-full relative"
//                     >
                
//                   {/* <img 
//                     src={piece.imageUrl} 
//                     alt={piece.title} 
//                     className="w-full h-full object-cover"
//                   /> */}
//                   <div className="absolute inset-0 bg-black/70 text-white p-4 flex items-center justify-center">
//                     {/* <div className="text-center">
//                       <h3 className="text-xl font-bold mb-2">{piece.imageUrl}</h3>
//                       <p>{piece.imageUrl}</p>
//                     </div> */}

//                   </div>               
//               </PinContainer>
              

//               {/* Artwork Details */}
//               <div className="w-full md:w-1/3 p-4 bg-white">
//                 {/* <h3 className="text-xl font-bold">{piece.title}</h3> */}
//                 <p className="text-gray-600 mt-2">{piece.artist}</p>
//                 <div className="mt-4 space-y-2">
//                   <p>Year: {piece.year}</p>
//                   <p>Medium: {piece.medium}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ArtCarousel;



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { cn } from '../lib/utils';

// const artPieces = [
//   {
//     id: 1,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   {
//     id: 2,
//     title: "Mrityunjay Tiwari",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   // ... other art pieces
// ];

// // PinPerspective Component
// const PinPerspective = ({ title }) => {
//   return (
//     <motion.div
//       className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"
//     >
//       <div className="w-full h-full -mt-7 flex-none inset-0">
//         <div className="absolute top-0 inset-x-0 flex justify-center">
//           <div
//             className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
//           >
//             <span
//               className="relative z-20 text-white text-xs font-bold inline-block py-0.5"
//             >
//               {title}
//             </span>

//             <span
//               className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"
//             ></span>
//           </div>
//         </div>

//         <div
//           style={{
//             perspective: "1000px",
//             transform: "rotateX(70deg) translateZ(0)",
//           }}
//           className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
//         >
//           {[0, 2, 4].map((delay) => (
//             <motion.div
//               key={delay}
//               initial={{
//                 opacity: 0,
//                 scale: 0,
//                 x: "-50%",
//                 y: "-50%",
//               }}
//               animate={{
//                 opacity: [0, 1, 0.5, 0],
//                 scale: 1,
//                 z: 0,
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 delay,
//               }}
//               className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // PinContainer Component
// const PinContainer = ({ children, title, className, containerClassName }) => {
//   const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

//   const onMouseEnter = () => {
//     setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
//   };
//   const onMouseLeave = () => {
//     setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
//   };

//   return (
//     <div
//       className={cn("relative group/pin z-50 cursor-pointer", containerClassName)}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <div
//         style={{
//           perspective: "1000px",
//           transform: "rotateX(70deg) translateZ(0deg)",
//         }}
//         className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
//       >
//         <div
//           style={{
//             transform: transform,
//           }}
//           className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
//         >
//           <div className={cn("relative z-50", className)}>{children}</div>
//         </div>
//       </div>
//       <PinPerspective title={title} />
//     </div>
//   );
// };

// const ArtworkCard = ({ piece }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <PinContainer 
//       title="View Details" 
//       containerClassName="w-full h-full"
//     >
//       <div 
//         className="w-full h-full relative overflow-hidden"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <motion.div
//           className="w-full h-full relative"
//           animate={{
//             scale: isHovered ? 0.9 : 1,
//             y: isHovered ? 50 : 0,
//             rotateX: isHovered ? 10 : 0,
//           }}
//           transition={{ 
//             type: "spring", 
//             stiffness: 300, 
//             damping: 20 
//           }}
//         >
//           <img 
//             src={piece.imageUrl} 
//             alt={piece.title} 
//             className="w-full h-full object-cover"
//           />
          
//           {/* Description Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: isHovered ? 1 : 0 }}
//             transition={{ duration: 0.3 }}
//             className={`
//               absolute top-4 left-4 right-4 
//               bg-black/70 text-white 
//               rounded-xl 
//               p-4 
//               ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}
//             `}
//           >
//             <h3 className="text-xl font-bold mb-2">{piece.title}</h3>
//             <p className="text-sm">{piece.description}</p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </PinContainer>
//   );
// };

// const ArtCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % artPieces.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + artPieces.length) % artPieces.length);
//   };

//   const currentPiece = artPieces[currentIndex];

//   return (
//     <div className="relative w-full h-[80vh] bg-gray-100 flex items-center justify-center">
//       <div className="w-[90%] max-w-5xl h-[70vh] bg-white shadow-2xl rounded-xl overflow-hidden flex">
//         {/* Left Side - Artwork Image */}
//         <ArtworkCard piece={currentPiece} />

//         {/* Right Side - Artwork Details */}
//         <div className="w-full md:w-1/3 p-6 bg-white">
//           <h3 className="text-2xl font-bold">{currentPiece.title}</h3>
//           <p className="text-gray-600 mt-2">{currentPiece.artist}</p>
//           <div className="mt-4 space-y-2">
//             <p>Year: {currentPiece.year}</p>
//             <p>Medium: {currentPiece.medium}</p>
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <button 
//           onClick={prevSlide} 
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
//         >
//           <ChevronLeft className="text-black" size={32} />
//         </button>
        
//         <button 
//           onClick={nextSlide} 
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
//         >
//           <ChevronRight className="text-black" size={32} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ArtCarousel;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { cn } from '../lib/utils';

// const artPieces = [
//   {
//     id: 1,
//     title: "Ethereal Whispers",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   {
//     id: 2,
//     title: "Mrityunjay Tiwari",
//     artist: "Elena Rodriguez",
//     year: 2023,
//     description: "A mesmerizing abstract exploration of emotional landscapes through delicate color gradients, capturing the ephemeral nature of human emotions.",
//     imageUrl: "./music.jpg",
//     medium: "Oil on Canvas"
//   },
//   // ... other art pieces
// ];

// const ArtworkCard = ({ piece }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className="w-full h-full relative overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <motion.div
//         className="w-full h-full relative"
//         animate={{
//           scale: isHovered ? 0.95 : 1,
//         }}
//         transition={{ 
//           type: "spring", 
//           stiffness: 300, 
//           damping: 20 
//         }}
//       >
//         <img 
//           src={piece.imageUrl} 
//           alt={piece.title} 
//           className="w-full h-full object-cover"
//         />
        
//         {/* Description Overlay */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isHovered ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//           className={`
//             absolute inset-0
//             bg-black/70 text-white 
//             flex flex-col justify-center items-center
//             text-center
//             p-4 
//             ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}
//           `}
//         >
//           <h3 className="text-2xl font-bold mb-4">{piece.title}</h3>
//           <p className="text-base">{piece.description}</p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// const ArtCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % artPieces.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + artPieces.length) % artPieces.length);
//   };

//   const currentPiece = artPieces[currentIndex];

//   return (
//     <div className="relative w-full h-[80vh] bg-gray-100 flex items-center justify-center">
//       <div className="w-[90%] max-w-5xl h-[70vh] bg-white shadow-2xl rounded-xl overflow-hidden flex">
//         {/* Left Side - Artwork Image */}
//         <div className="w-full md:w-2/3 h-full">
//           <ArtworkCard piece={currentPiece} />
//         </div>

//         {/* Right Side - Artwork Details */}
//         <div className="w-full md:w-1/3 p-6 bg-white">
//           <h3 className="text-2xl font-bold">{currentPiece.title}</h3>
//           <p className="text-gray-600 mt-2">{currentPiece.artist}</p>
//           <div className="mt-4 space-y-2">
//             <p>Year: {currentPiece.year}</p>
//             <p>Medium: {currentPiece.medium}</p>
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <button 
//           onClick={prevSlide} 
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
//         >
//           <ChevronLeft className="text-black" size={32} />
//         </button>
        
//         <button 
//           onClick={nextSlide} 
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
//         >
//           <ChevronRight className="text-black" size={32} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ArtCarousel;

