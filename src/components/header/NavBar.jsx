// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap/dist/gsap';
// import { Menu, X } from 'lucide-react';
// import { link } from 'framer-motion/client';

// const NavigationMenu = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isHover, setIsHover] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const scrollRef = useRef(null);
//   const scrollAnimation = useRef(null);

//   useEffect(() => {
//     const element = scrollRef.current;

//     // GSAP Animation
//     gsap.to(element, {
//       xPercent: -50, // Scroll from 0% to -100%
//       duration: 22,   // Animation duration (10 seconds)
//       ease: 'linear', // Linear scroll
//       repeat: -1,     // Infinite loop
//     });
//   }, []);

//   // pause scroller on hover
//   const handleHover = (hovering) => {
//     setIsHover(hovering);
//     if (hovering) {
//       scrollAnimation.current = gsap.to(scrollRef.current, { paused: true });
//     } else {
//       gsap.to(scrollRef.current, { resume: true });
//     }
//   }

//   // Enlarged hovered items
//   const handleMouseEnter = (e) => {
//     handleHover(true);
//     gsap.to(e.target, { scale: 1.3, duration: 0.5, ease: 'power2.inOut' });
//   }

//   // Restore size after hover
//   const handleMouseLeave = (e) => {
//     handleHover(false);
//     gsap.to(e.target, { scale: 1, duration: 0.5, ease: 'power2.inOut' });
//   }

//   const navLinks = [
//     {
//       label: 'Home',
//       href: '/',
//       // image: '././assets/navimg/Saly37.svg'
//     },
//     {
//       label: 'About',
//       href: '/clubs',
//       // image: '././assets/navimg/Saly19.svg'
//     },
//     {
//       label: 'Events',
//       // href: '#',
//       // image: '././assets/navimg/Saly42.svg'
//     },
//     {
//       label: 'Clubs',
//       href: '/clubs',
//       // image: '././assets/navimg/Saly22.svg'
//     },
//     {
//       label: 'Team',
//       // href: '#',
//       // image: '././assets/navimg/Saly15.svg'
//     },
//   ];

//   return (
//     <div className=" relative">
//       <div
//         className={`fixed inset-0 bg-opacity-50 backdrop-blur-md transition-opacity duration-500 ${
//           isNavOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'
//         }`}
//         onClick={toggleNav}
//       />
//       <nav className={`h-1/6 w-full fixed left-0 transition-all duration-1000 ease-in ${
//         isNavOpen ? 'top-20' : '-top-full'
//       } z-20`}>
//         <div ref={scrollRef} className="flex px-4 h-full w-[200%] justify-evenly">
//           {navLinks.map((link, index) => (
//             <a key={index} href={link.href} className="flex-none snap-start w-auto">
//               <h2 style={{fontFamily: "'Agdasima', sans-serif"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className="text-[100px] h-full text-center text-gray-100 hover:text-white">{link.label}</h2>
//             </a>
//           ))}
//           {navLinks.map((link, index) => (
//             <a key={index} href={link.href} className="flex-none snap-start w-auto">
//               <h2 style={{fontFamily: "'Agdasima', sans-serif"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}   className="text-[100px] h-full text-center text-gray-100 hover:text-white">{link.label}</h2>
//             </a>
//           ))}
//         </div>
//       </nav>

//       <div className="fixed top-0 left-0 right-0 z-30 h-20 flex justify-center items-center">
//         <button
//           onClick={toggleNav}
//           className={`text-gray-100 hover:text-white hover:underline-offset-1 h-16 text-sm rounded-full outline-none cursor-pointer transition-all duration-400 ease-in-out hover:text-lg active:scale-95 flex justify-center items-center`}
//         > {isNavOpen ? "Close Menu" : "Menu"}

//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavigationMenu;

'use client'
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { Menu, X } from 'lucide-react';
import { link } from 'framer-motion/client';

const NavigationMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollRef = useRef(null);
  const scrollAnimation = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;

    // GSAP Animation
    gsap.to(element, {
      xPercent: -50, // Scroll from 0% to -100%
      duration: 22,   // Animation duration (22 seconds)
      ease: 'linear', // Linear scroll
      repeat: -1,     // Infinite loop
    });
  }, []);

  const handleHover = (hovering) => {
    setIsHover(hovering);
    if (hovering) {
      scrollAnimation.current = gsap.to(scrollRef.current, { paused: true });
    } else {
      gsap.to(scrollRef.current, { resume: true });
    }
  };

  const handleMouseEnter = (e) => {
    handleHover(true);
    gsap.to(e.target, { scale: 1.3, duration: 0.5, ease: 'power2.inOut' });
  };

  const handleMouseLeave = (e) => {
    handleHover(false);
    gsap.to(e.target, { scale: 1, duration: 0.5, ease: 'power2.inOut' });
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/clubs' },
    { label: 'Events', href: '/events' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'Team', href: '/team' },
  ];

  return (
    <div className="relative">
      <div
        className={`fixed inset-0 bg-opacity-50 backdrop-blur-md transition-opacity duration-500 ${isNavOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}
        onClick={toggleNav}
      />
      <nav className={`h-1/6 w-full fixed left-0 transition-all duration-1000 ease-in ${isNavOpen ? 'top-20' : '-top-full'} z-20`}>
        <div ref={scrollRef} className="flex px-4 h-full w-[200%] justify-evenly">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.href} className="flex-none snap-start w-auto">
              <h2
                style={{ fontFamily: "'Agdasima', sans-serif" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-[100px] h-full text-center text-gray-100 hover:text-white"
              >
                {link.label}
              </h2>
            </Link>
          ))}
          {navLinks.map((link, index) => (
            <Link key={index} to={link.href} className="flex-none snap-start w-auto">
              <h2
                style={{ fontFamily: "'Agdasima', sans-serif" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-[100px] h-full text-center text-gray-100 hover:text-white"
              >
                {link.label}
              </h2>
            </Link>
          ))}
        </div>
      </nav>

      <div className="fixed top-0 left-0 right-0 z-30 h-20 flex justify-center items-center">
        <button
          onClick={toggleNav}
          className="text-gray-100 hover:text-white hover:underline-offset-1 h-16 text-sm rounded-full outline-none cursor-pointer transition-all duration-400 ease-in-out hover:text-lg active:scale-95 flex justify-center items-center"
        >
          {isNavOpen ? 'Close Menu' : 'Menu'}
        </button>
      </div>
    </div>
  );
};

export default NavigationMenu;


// Mobile View

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const NavigationMenu = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const navLinks = [
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '/about' },
//     { label: 'Events', href: '/events' },
//     { label: 'Clubs', href: '/clubs' },
//     { label: 'Team', href: '/team' },
//   ];

//   const menuVariants = {
//     closed: { 
//       opacity: 0, 
//       y: "-100%",
//       transition: { 
//         duration: 0.6, 
//         ease: "easeInOut" 
//       }
//     },
//     open: { 
//       opacity: 1, 
//       y: "0%",
//       transition: { 
//         duration: 0.6, 
//         ease: "easeInOut" 
//       }
//     }
//   };

//   const linkVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: (custom) => ({
//       opacity: 1, 
//       x: 0,
//       transition: { 
//         delay: custom * 0.1,
//         duration: 0.5
//       }
//     })
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full z-50">
//       {/* Menu Toggle Button */}
//       <motion.button 
//         onClick={() => setIsNavOpen(!isNavOpen)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="fixed top-6 right-6 z-50 p-2 bg-gray-800/50 backdrop-blur-md rounded-full hover:bg-gray-700/70 transition-all duration-300"
//       >
//         {isNavOpen ? (
//           <X className="text-white w-6 h-6" />
//         ) : (
//           <Menu className="text-white w-6 h-6" />
//         )}
//       </motion.button>

//       {/* Full-Screen Navigation Overlay */}
//       <AnimatePresence>
//         {isNavOpen && (
//           <motion.div 
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="fixed inset-0 bg-black/90 flex flex-col justify-center items-center"
//           >
//             <div className="space-y-6 text-center">
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={link.href}
//                   custom={index}
//                   initial="hidden"
//                   animate="visible"
//                   variants={linkVariants}
//                 >
//                   <Link 
//                     to={link.href} 
//                     onClick={() => setIsNavOpen(false)}
//                     className="text-4xl md:text-6xl xl:text-7xl font-thin text-white hover:text-gray-300 transition-colors duration-300 block"
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default NavigationMenu;





// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const NavigationMenu = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const navLinks = [
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '/about' },
//     { label: 'Events', href: '/events' },
//     { label: 'Clubs', href: '/clubs' },
//     { label: 'Team', href: '/team' },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100
//       }
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full z-50">
//       {/* Menu Toggle */}
//       <motion.button 
//         onClick={() => setIsNavOpen(!isNavOpen)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="fixed top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
//       >
//         {isNavOpen ? (
//           <X className="text-white w-6 h-6" />
//         ) : (
//           <Menu className="text-white w-6 h-6" />
//         )}
//       </motion.button>

//       {/* Full Screen Navigation */}
//       {isNavOpen && (
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center"
//         >
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-8 text-center"
//           >
//             {navLinks.map((link, index) => (
//               <motion.div 
//                 key={link.href}
//                 variants={itemVariants}
//               >
//                 <Link 
//                   to={link.href}
//                   onClick={() => setIsNavOpen(false)}
//                   className="text-5xl font-extralight text-white/80 hover:text-white transition-all duration-300 tracking-wide relative group"
//                 >
//                   {link.label}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default NavigationMenu;









