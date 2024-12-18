// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Music, Users, Star, Sparkles, Calendar, Trophy } from 'lucide-react';

// const events = [
//   {
//     id: 1,
//     title: "Cultural Weekend",
//     description: "A grand three-day cultural extravaganza showcasing talent across music, dance, theater, and arts. Students from IIT BHU come together to celebrate diversity through performances, workshops, and competitions.",
//     features: [
//       { icon: Music, text: "Live Performances" },
//       { icon: Users, text: "Interactive Workshops" },
//       { icon: Trophy, text: "Competitions" }
//     ],
//     images: [
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//     ]
//   },
//   {
//     id: 2,
//     title: "Aagman",
//     description: "The annual cultural festival that transforms the campus into a vibrant celebration of art and culture. Features professional performances, celebrity appearances, and student competitions that attract participants from across India.",
//     features: [
//       { icon: Star, text: "Celebrity Performances" },
//       { icon: Sparkles, text: "Pro Shows" },
//       { icon: Calendar, text: "Multi-day Festival" }
//     ],
//     images: [
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//       "event.jpg",
//     ]
//   }
// ];

// const AnimatedHeading = () => {
//   return (
//     <motion.div 
//       className="text-center mb-16"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <motion.h1 
//         className="text-5xl font-bold relative inline-block"
//       >
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//           OUR EVENTS
//         </span>
//         {/* <motion.div 
//           className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"
//           initial={{ width: "0%" }}
//           animate={{ width: "100%" }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         /> */}
//       </motion.h1>
//     </motion.div>
//   );
// };

// const EventCard = ({ title, description, features }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const featureVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: i => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: i * 0.2
//       }
//     })
//   };

//   return (
//     <motion.div 
//       className="w-full md:w-1/2 p-6"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       transition={{ duration: 0.5 }}
//     >
//       <motion.div 
//         className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden"
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//         whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
//         whileTap={{ scale: 0.98 }}
//       >
//         <motion.h2 
//           className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 mb-6"
//           animate={{ scale: isHovered ? 1.05 : 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           {title}
//         </motion.h2>
//         <motion.p 
//           className="text-lg text-gray-300 leading-relaxed mb-8"
//           animate={{ opacity: isHovered ? 0.9 : 0.7 }}
//         >
//           {description}
//         </motion.p>
//         <div className="space-y-4">
//           {features.map(({ icon: Icon, text }, index) => (
//             <motion.div
//               key={text}
//               className="flex items-center space-x-3"
//               variants={featureVariants}
//               custom={index}
//               initial="hidden"
//               animate="visible"
//             >
//               <motion.div
//                 className="p-2 rounded-lg bg-white/10"
//                 animate={{ 
//                   rotate: isHovered ? [0, 10, -10, 0] : 0,
//                   scale: isHovered ? [1, 1.1, 1] : 1
//                 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Icon className="w-6 h-6 text-pink-500" />
//               </motion.div>
//               <span className="text-gray-200">{text}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const ParallaxGallery = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [offset, setOffset] = useState([0, 20, 40]);

//   useEffect(() => {
//     if (isHovered) return;

//     const interval = setInterval(() => {
//       setOffset(prev => prev.map(val => (val + 1) % 100));
//     }, 200);

//     return () => clearInterval(interval);
//   }, [isHovered]);

//   const allImages = [...events[0].images, ...events[1].images];
//   const columns = [
//     allImages.slice(0, 4),
//     allImages.slice(4, 8),
//     allImages.slice(8, 12)
//   ];

//   return (
//     <div className="relative h-screen overflow-hidden bg-black">
//          <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-slate-900 to-transparent z-10 pointer-events-none" />
          
//       <div className="absolute inset-0 flex justify-between gap-4 px-4">
//         {columns.map((column, columnIndex) => (
//           <div 
//             key={columnIndex}
//             className="flex-1 relative"
//           >
//             <div 
//               className="absolute w-full space-y-4"
//               style={{
//                 transform: `translateY(-${offset[columnIndex]}%)`,
//                 transition: isHovered ? 'transform 0.3s ease-out' : 'transform 20s linear infinite'
//               }}
//             >
//               {column.map((img, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="relative aspect-[2/3] w-full"
//                   whileHover={{ 
//                     scale: 1.1, 
//                     zIndex: 10,
//                     transition: { duration: 0.3 }
//                   }}
//                   onHoverStart={() => setIsHovered(true)}
//                   onHoverEnd={() => setIsHovered(false)}
//                 >
//                   <img
//                     src={img}
//                     alt={`Event photo ${idx + 1}`}
//                     className="w-full h-full object-cover rounded-lg"
//                   />
                  
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none" />
//     </div>
//   );
// };

// const Events = () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen pb-20">
//       <div className="container mx-auto py-20">
//         <AnimatedHeading />
//         <div className="flex flex-wrap -mx-6">
//           {events.map(event => (
//             <EventCard key={event.id} {...event} />
//           ))}
//         </div>
//       </div>
//       <ParallaxGallery />
//     </div>
//   );
// };

// export default Events;








import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Users, Star, Sparkles, Calendar, Trophy } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Cultural Weekend",
    description: "A grand three-day cultural extravaganza showcasing talent across music, dance, theater, and arts. Students from IIT BHU come together to celebrate diversity through performances, workshops, and competitions.",
    features: [
      { icon: Music, text: "Live Performances" },
      { icon: Users, text: "Interactive Workshops" },
      { icon: Trophy, text: "Competitions" }
    ],
    images: [
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
    ]
  },
  {
    id: 2,
    title: "Aagman",
    description: "The annual cultural festival that transforms the campus into a vibrant celebration of art and culture. Features professional performances, celebrity appearances, and student competitions that attract participants from across India.",
    features: [
      { icon: Star, text: "Celebrity Performances" },
      { icon: Sparkles, text: "Pro Shows" },
      { icon: Calendar, text: "Multi-day Festival" }
    ],
    images: [
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
      "/event.jpg",
    ]
  }
];

const AnimatedHeading = () => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-3xl md:text-5xl font-bold relative inline-block"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          OUR EVENTS
        </span>
      </motion.h1>
    </motion.div>
  );
};

const EventCard = ({ title, description, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2
      }
    })
  };

  return (
    <motion.div 
      className="w-screen p-4 md:w-1/2 md:p-6 overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 mb-4 md:mb-6 pb-1"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8"
          animate={{ opacity: isHovered ? 0.9 : 0.7 }}
        >
          {description}
        </motion.p>
        <div className="space-y-3 md:space-y-4">
          {features.map(({ icon: Icon, text }, index) => (
            <motion.div
              key={text}
              className="flex items-center space-x-3"
              variants={featureVariants}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="p-1.5 md:p-2 rounded-lg bg-white/10"
                animate={{ 
                  rotate: isHovered ? [0, 10, -10, 0] : 0,
                  scale: isHovered ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />
              </motion.div>
              <span className="text-sm md:text-base text-gray-200">{text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ParallaxGallery = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState([0, 20, 40]);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setOffset(prev => prev.map(val => (val + 1) % 100));
    }, 200);

    return () => clearInterval(interval);
  }, [isHovered]);

  const allImages = [...events[0].images, ...events[1].images];
  const columns = [
    allImages.slice(0, 4),
    allImages.slice(4, 8),
    allImages.slice(8, 12)
  ];

  return (
    <div className="relative h-screen overflow-hidden bg-black w-screen">
      <div className="absolute top-0 h-20 bg-gradient-to-b from-slate-900 to-transparent z-10 pointer-events-none" />
      
      <div className="absolute inset-0 flex justify-between gap-2 md:gap-4 px-2 md:px-4">
        {columns.map((column, columnIndex) => (
          <div 
            key={columnIndex}
            className="flex-1 relative"
          >
            <div 
              className="absolute w-full space-y-2 md:space-y-4"
              style={{
                transform: `translateY(-${offset[columnIndex]}%)`,
                transition: isHovered ? 'transform 0.3s ease-out' : 'transform 20s linear infinite'
              }}
            >
              {column.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="relative aspect-[2/3] w-full"
                  whileHover={{ 
                    scale: 1.1, 
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <img
                    src={img}
                    alt={`Event photo ${idx + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const Events = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen pb-10 md:pb-20">
      <div className="container mx-auto py-10 md:py-20">
        <AnimatedHeading />
        <div className="flex flex-wrap -mx-2 md:-mx-6">
          {events.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
      <ParallaxGallery />
    </div>
  );
};

export default Events;