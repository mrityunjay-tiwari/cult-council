import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { Menu, X } from 'lucide-react';
import { aboutnavimg, clubnavimg, eventsnavimg, homenavimg, teamnavimg } from '../Utils';
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
      duration: 22,   // Animation duration (10 seconds)
      ease: 'linear', // Linear scroll
      repeat: -1,     // Infinite loop
    });
  }, []);

  // pause scroller on hover
  const handleHover = (hovering) => {
    setIsHover(hovering);
    if (hovering) {
      scrollAnimation.current = gsap.to(scrollRef.current, { paused: true });
    } else {
      gsap.to(scrollRef.current, { resume: true });
    }
  }

  // Enlarged hovered items
  const handleMouseEnter = (e) => {
    handleHover(true);
    gsap.to(e.target, { scale: 1.3, duration: 0.5, ease: 'power2.inOut' });
  }

  // Restore size after hover
  const handleMouseLeave = (e) => {
    handleHover(false);
    gsap.to(e.target, { scale: 1, duration: 0.5, ease: 'power2.inOut' });
  }

  const navLinks = [
    {
      label: 'Home',
      href: '/',
      // image: '././assets/navimg/Saly37.svg'
    },
    {
      label: 'About',
      // href: '#',
      // image: '././assets/navimg/Saly19.svg'
    },
    {
      label: 'Events',
      // href: '#',
      // image: '././assets/navimg/Saly42.svg'
    },
    {
      label: 'Clubs',
      href: '/clubs',
      // image: '././assets/navimg/Saly22.svg'
    },
    {
      label: 'Team',
      // href: '#',
      // image: '././assets/navimg/Saly15.svg'
    },
  ];

  return (
    <div className=" relative">
      <div
        className={`fixed inset-0 bg-opacity-50 backdrop-blur-md transition-opacity duration-500 ${
          isNavOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'
        }`}
        onClick={toggleNav}
      />
      <nav className={`h-1/6 w-full fixed left-0 transition-all duration-1000 ease-in ${
        isNavOpen ? 'top-20' : '-top-full'
      } z-20`}>
        <div ref={scrollRef} className="flex px-4 h-full w-[200%] justify-evenly">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="flex-none snap-start w-auto">
              <h2 style={{fontFamily: "'Agdasima', sans-serif"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className="text-[100px] h-full text-center text-gray-100 hover:text-white">{link.label}</h2>
            </a>
          ))}
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="flex-none snap-start w-auto">
              <h2 style={{fontFamily: "'Agdasima', sans-serif"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}   className="text-[100px] h-full text-center text-gray-100 hover:text-white">{link.label}</h2>
            </a>
          ))}
        </div>
      </nav>

      <div className="fixed top-0 left-0 right-0 z-30 h-20 flex justify-center items-center">
        <button
          onClick={toggleNav}
          className={`text-gray-100 hover:text-white hover:underline-offset-1 h-16 text-sm rounded-full outline-none cursor-pointer transition-all duration-400 ease-in-out hover:text-lg active:scale-95 flex justify-center items-center`}
        > {isNavOpen ? "Close Menu" : "Menu"}

        </button>
      </div>
    </div>
  );
};

export default NavigationMenu;




// import gsap from "gsap/dist/gsap"
// import { Logoimg } from "../Utils"
// import { navLists } from "../constants"
// import { useGSAP } from "@gsap/react"

// const Navbar = () => {

//   useGSAP(() => {
//     gsap.to('#options', {paddingRight: 40, paddingLeft: 40 ,duration: 1})
//     gsap.to('#options', {opacity: 1 ,duration: 1.5})
//   }, [])


//   return (
//     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
//       <nav className="flex w-full screen-max-width">
//         <img src={Logoimg} alt="Logo" className="w-20 object-fill" />

//         <div className="flex flex-1 justify-center max-sm:hidden">
//           {navLists.map((nav) => (
//             <div key={nav} id="options" className="opacity-0 text-sm cursor-pointer text-gray hover:text-white transition-all">
//               {nav}
//             </div>
//           ))}
//         </div>

//         <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">

//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar
