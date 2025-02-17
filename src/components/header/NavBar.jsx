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
import { Link } from 'react-router-dom';
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

    
    gsap.to(element, {
      xPercent: -50, // Scroll from 0% to -100%
      duration: 50,   // Animation duration (22 seconds)
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
    { label: 'About', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'Team', href: '/team' },
  ];

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div 
        className={`fixed inset-0 bg-opacity-50 backdrop-blur-md transition-opacity duration-500 max-sm:hidden ${isNavOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}
        onClick={toggleNav}
      />
      <nav className={`h-1/6 w-full fixed left-0 transition-all duration-1000 ease-in max-sm:hidden ${isNavOpen ? 'top-20' : '-top-full'} z-20`}>
        <div ref={scrollRef} className="flex px-4 h-full w-[200%] justify-evenly">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.href} className="flex-none snap-start w-auto">
              <h2
                style={{ fontFamily: "'Agdasima', sans-serif" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-[65px] h-full text-center text-gray-200 hover:text-white"
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
                className="text-[65px] h-full text-center text-gray-100 hover:text-white"
              >
                {link.label}
              </h2>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="hidden max-sm:block">
        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleNav}
          className="fixed top-4 left-4 z-50 w-12 h-10 flex flex-col justify-between p-1 bg-transparent"
        >
          <span className="h-0.5 w-full bg-white"></span>
          <span className="h-0.5 w-full bg-white"></span>
          <span className="h-0.5 w-full bg-white"></span>
        </button>

        {/* Mobile Sidebar */}
        {isNavOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={toggleNav}
          >
            <div 
              className="fixed top-0 left-0 w-3/4 h-full bg-black text-white p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={toggleNav}
                className="absolute top-4 right-4 text-white"
              >
                <X size={24} />
              </button>

              <nav className="flex flex-col space-y-6 mt-16">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index} 
                    to={link.href} 
                    onClick={toggleNav}
                    className="text-3xl font-bold hover:text-gray-300 transition-colors"
                    style={{ fontFamily: "'Agdasima', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Menu Button */}
      <div className="fixed top-0 left-0 right-0 z-30 h-20 flex justify-center items-center max-sm:hidden">
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


