// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const events = [
//   {
//     id: 1,
//     title: "Debating Challenge",
//     description: "Engage in intellectual duels and showcase your debating skills.",
//     imageUrl: "/PP.jpg",
//   },
//   {
//     id: 2,
//     title: "Hindi Mahotsav",
//     description: "Celebrate the beauty of Hindi literature and culture.",
//     imageUrl: "/PP.jpg",
//   },
//   {
//     id: 3,
//     title: "Outfest",
//     description: "An extravaganza of creativity and expression.",
//     imageUrl: "/PP.jpg",
//   },
//   {
//     id: 4,
//     title: "Pride of Culture",
//     description: "Explore the diverse cultural heritage through literature.",
//     imageUrl: "/PP.jpg",
//   },
//   {
//     id: 5,
//     title: "Poetry Slam",
//     description: "Express yourself through powerful words and rhythm.",
//     imageUrl: "/PP.jpg",
//   },
// ];

// const EventTypesLitCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
//   const autoSlideTimerRef = useRef(null);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % events.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
//   };

//   const startAutoSlide = () => {
//     if (autoSlideTimerRef.current) {
//       clearInterval(autoSlideTimerRef.current);
//     }
//     if (!isAutoPlayPaused) {
//       autoSlideTimerRef.current = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % events.length);
//       }, 3000);
//     }
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => {
//       if (autoSlideTimerRef.current) {
//         clearInterval(autoSlideTimerRef.current);
//       }
//     };
//   }, [isAutoPlayPaused]);

//   const visibleEvents = [
//     events[(currentIndex - 1 + events.length) % events.length],
//     events[currentIndex],
//     events[(currentIndex + 1) % events.length],
//   ];

//   return (
//     <div 
//       className="relative w-full h-[80vh] md:h-[60vh] bg-gray-950 flex items-center justify-center overflow-hidden"
//     >
//       {/* Navigation Buttons */}
//       <button 
//         onClick={prevSlide} 
//         className="absolute left-2 md:left-4 z-20 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
//       >
//         <ChevronLeft className="text-black" size={32} />
//       </button>

//       <button 
//         onClick={nextSlide} 
//         className="absolute right-2 md:right-4 z-20 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
//       >
//         <ChevronRight className="text-black" size={32} />
//       </button>

//       {/* Progress Indicator */}
//       <div className="absolute bottom-4 z-20 flex space-x-2">
//         {events.map((_, index) => (
//           <div
//             key={index}
//             className={`
//               w-2 h-2 md:w-3 md:h-3 rounded-full
//               ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}
//               transition-all duration-300
//             `}
//           />
//         ))}
//       </div>

//       {/* Carousel Container */}
//       <div 
//         className="flex items-center justify-center w-full h-full space-x-2 md:space-x-4 px-4 md:px-16"
//         onMouseEnter={() => setIsAutoPlayPaused(true)}
//         onMouseLeave={() => setIsAutoPlayPaused(false)}
//       >
//         <AnimatePresence>
//           {visibleEvents.map((event, index) => (
//             <motion.div
//               key={event.id}
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
//                 absolute w-[300px] md:w-[600px] max-w-[90vw] h-[60vh] md:h-[70vh] 
//                 flex flex-col bg-white shadow-2xl rounded-xl 
//                 overflow-hidden transition-all duration-500
//                 ${index === 1 ? 'z-10' : 'z-0'}
//               `}
//             >
//               {/* Image */}
//               <div className="w-full h-2/3 md:h-3/4 relative">
//                 <img 
//                   src={event.imageUrl} 
//                   alt={event.title} 
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Event Details */}
//               <div className="w-full h-1/3 md:h-1/4 p-4 bg-gray-800 text-white">
//                 <h3 className="text-lg md:text-xl font-bold">{event.title}</h3>
//                 <p className="mt-2 text-sm md:text-base">{event.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default EventTypesLitCarousel;





import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Debating Session",
    description: "Engage in intellectual duels and showcase your debating skills.",
    imageUrl: "/hindiDebate.jpg",
  },
  {
    id: 2,
    title: "Paricharcha - Hindi Mahotsav",
    description: "Celebrate the beauty of Hindi literature and culture.",
    imageUrl: "/paricharchaLit.jpg",
  },
  {
    id: 3,
    title: "Induction",
    description: "An extravaganza of creativity and expression.",
    imageUrl: "/inductionLit.jpg",
  },
  {
    id: 4,
    title: "Orientation",
    description: "Explore the diverse cultural heritage through literature.",
    imageUrl: "/orientationLit.jpg",
  },
  {
    id: 5,
    title: "Outfest - Antaragini, IIT Kanpur",
    description: "Express yourself through powerful words and rhythm.",
    imageUrl: "/antraginiLit.jpg",
  },
  {
    id: 6,
    title: "Pride of Culture",
    description: "Express yourself through powerful words and rhythm.",
    imageUrl: "/litPride.jpg",
  },
];

const EventTypesLitCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const autoSlideTimerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const startAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    if (!isAutoPlayPaused) {
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
      }, 3000);
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

  const visibleEvents = [
    events[(currentIndex - 1 + events.length) % events.length],
    events[currentIndex],
    events[(currentIndex + 1) % events.length],
  ];

  return (
    <div className="w-full">
      {/* Added Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold text-center text-slate-100 pb-10 bg-gray-950">Our Events</h2>
      
      <div 
        className="relative w-full h-[80vh] md:h-[60vh] bg-gray-950 flex items-center justify-center overflow-hidden"
      >
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide} 
          className="absolute left-2 md:left-4 z-20 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
        >
          <ChevronLeft className="text-black" size={32} />
        </button>

        <button 
          onClick={nextSlide} 
          className="absolute right-2 md:right-4 z-20 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-all"
        >
          <ChevronRight className="text-black" size={32} />
        </button>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 z-20 flex space-x-2">
          {events.map((_, index) => (
            <div
              key={index}
              className={`
                w-2 h-2 md:w-3 md:h-3 rounded-full
                ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}
                transition-all duration-300
              `}
            />
          ))}
        </div>

        {/* Carousel Container */}
        <div 
          className="flex items-center justify-center w-full h-full space-x-2 md:space-x-4 px-4 md:px-16"
          onMouseEnter={() => setIsAutoPlayPaused(true)}
          onMouseLeave={() => setIsAutoPlayPaused(false)}
        >
          <AnimatePresence>
            {visibleEvents.map((event, index) => (
              <motion.div
                key={event.id}
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
                  absolute w-[300px] md:w-[600px] max-w-[90vw] h-[60vh] md:h-[70vh] 
                  flex flex-col bg-white shadow-2xl rounded-xl 
                  overflow-hidden transition-all duration-500
                  ${index === 1 ? 'z-10' : 'z-0'}
                `}
              >
                {/* Image */}
                <div className="w-full h-2/3 md:h-3/4 relative">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="w-full h-1/3 md:h-1/4 p-4 bg-gray-800 text-white">
                  <h3 className="text-lg md:text-xl font-bold">{event.title}</h3>
                  <p className="mt-2 text-sm md:text-base">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default EventTypesLitCarousel;