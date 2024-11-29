import gsap from "gsap/dist/gsap"
import { useGSAP } from "@gsap/react"
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'lucide-react';

import { FlipWords } from "./FlipWords";
// import NavigationMenu from "./NavBar";

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
{/* <NavigationMenu /> */}
const WelcomePage = () => {

  
  // const [title, setTitle] = useState("CULTURAL COUNCIL");
  const blobRef = useRef(null);

  const words = ["Sing", "Dance", "Film", "Create"];

  // const animateTitle = useCallback(() => {
  //   let iteration = 0;
  //   const interval = setInterval(() => {
  //     setTitle(prev =>
  //       prev.split("").map((letter, index) => {
  //         if (index < Math.floor(iteration)) {
  //           return "CULTURAL COUNCIL"[index];
  //         }
  //         if (letter === ' ') {
  //           return ' ';
  //         }
  //         return letters[Math.floor(Math.random() * 26)];
  //       }).join("")
  //     );
  //     if (iteration >= "CULTURAL COUNCIL".length) {
  //       clearInterval(interval);
  //     }
  //     iteration += 1 / 3;
  //   }, 30);
  //   return () => clearInterval(interval);
  // }, []);

  useGSAP(() => {
    gsap.to('#cult', {opacity: 1, duration: 1.5, delay: 1.5, translateY: 250})
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      blobRef.current.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className="grid place-items-center h-screen bg-black overflow-hidden">
      <div
        id="blob"
        ref={blobRef}
        style={{
          backgroundColor: 'white',
          height: '34vmax',
          aspectRatio: '1',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'linear-gradient(to right, aquamarine, mediumpurple)',
          animation: 'rotate 20s infinite',
          opacity: 0.8,
          filter: 'blur(12vmax)',
          zIndex: 0,
        }}
      ></div>
      {/* <div
        id="cult"
        className=" text-left text-white h-full w-full ml-36 opacity-0 translate-y-1/2"
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: "'Murmure', sans-serif",
          fontSize: 'clamp(3rem, 10vw, 250px)',
        }}
      >
        <h1 onMouseEnter={animateTitle}>
          {title}
        </h1>
        <h1>
          IIT BHU
        </h1>
      </div> */}
      <div className="px-4 w-auto h-auto">
        <div className="flex h-[10rem]">
          <div className="h-auto w-auto text-[100px] pr-8 font-normal text-neutral-600 dark:text-neutral-400">
               We
          </div>
          <div className="h-auto w-auto text-[100px] font-normal text-neutral-600 dark:text-neutral-400">
               <FlipWords words={words} /> <br />
          </div>
        </div>

      <div className="text-[100px] mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        at Cult Council of IIT BHU
      </div>
    </div>
    </div>
  );
};

export default WelcomePage;




// import gsap from "gsap/dist/gsap"
// import { useGSAP } from "@gsap/react"
// import React, { useEffect, useRef, useState } from 'react';
// import { Camera } from 'lucide-react';

// const WelcomePage = () => {
//   const blobRef = useRef(null);
//   const h1Ref = useRef(null);
//   const [styles, setStyles] = useState({});

//   useEffect(() => {
//     setStyles({
//       mousemoveEffect: {
//         backgroundColor: 'black',
//         height: '100vh',
//         margin: '0rem',
//         overflow: 'hidden',
//       },
//       blob: {
//         backgroundColor: 'white',
//         height: '34vmax',
//         aspectRatio: '1',
//         position: 'absolute',
//         left: '50%',
//         top: '50%',
//         transform: 'translate(-50%, -50%)',
//         borderRadius: '50%',
//         background: 'linear-gradient(to right, aquamarine, mediumpurple)',
//         animation: 'rotate 20s infinite',
//         opacity: 0.8,
//       },
//       blur: {
//         height: '100%',
//         width: '100%',
//         position: 'absolute',
//         zIndex: 2,
//         backdropFilter: 'blur(12vmax)',
//       },
//       // h1: { // font-myfont text-left text-[clamp(3rem,10vw,140px)] text-white h-full w-full ml-36 opacity-0 translate-y-1/2
//       //   fontFamily: "'Space Mono', monospace",
//       //   textAlign: 'left',
//       //   fontSize: 'clamp(3rem, 10vw, 10rem)',
//       //   color: 'white',
//       //   whiteSpace: 'nowrap',
//       //   padding: '0rem clamp(1rem, 2vw, 3rem)',
//       //   borderRadius: 'clamp(0.4rem, 0.75vw, 1rem)',
//       //   margin: '0rem',
//       //   position: 'absolute',
//       //   left: '50%',
//       //   top: '50%',
//       //   transform: 'translate(-50%, -50%)',
//       //   zIndex: 3,

//       // },
//     }
//   );
// }, []);

//   useEffect(() => {
//     const handlePointerMove = (event) => {
//       const { clientX, clientY } = event;

//       blobRef.current.animate({
//         left: `${clientX}px`,
//         top: `${clientY}px`
//       }, { duration: 3000, fill: "forwards" });
//     }

//     window.addEventListener('pointermove', handlePointerMove);

//     return () => {
//       window.removeEventListener('pointermove', handlePointerMove);
//     }
//   }, []);

//   useEffect(() => {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let interval = null;

//     const handleMouseOver = (event) => {
//       let iteration = 0;
//       const fullText = event.target.dataset.value;

//       clearInterval(interval);

//       interval = setInterval(() => {
//         event.target.innerText = fullText
//           .split("")
//           .map((letter, index) => {
//             if(index < iteration) {
//               return fullText[index];
//             }

//             return letters[Math.floor(Math.random() * 26)]
//           })
//           .join("");

//         if(iteration >= fullText.length){
//           clearInterval(interval);
//         }

//         iteration += 1/3;
//       }, 30);
//     };

//     const h1Element = h1Ref.current;
//     h1Element.addEventListener('mouseover', handleMouseOver);

//     return () => {
//       h1Element.removeEventListener('mouseover', handleMouseOver);
//     };
//   }, []);

//   useGSAP(() => {
//             gsap.to('#cult', {opacity: 1 ,duration: 1.5, delay: 1.5, translateY: 170})
//       }, [])

//   return (
//     <div style={styles.mousemoveEffect}>
//       <div id="blob" ref={blobRef} style={styles.blob}></div>
//       <div id="blur" style={styles.blur}></div>
//       <div id="cult" className="text-left text-[clamp(3rem,10vw,140px)] text-white h-full w-full ml-36 opacity-0 translate-y-1/2 z-[3]">
//         <h1 ref={h1Ref} data-value="MOUSEMOVE" >MOUSEMOVE</h1>
//       </div>


//     </div>
//   );
// };

// export default WelcomePage;




// import gsap from "gsap/dist/gsap"
// import { useGSAP } from "@gsap/react"
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'lucide-react';
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// const HyperplexedTitle = () => {
//   const [title, setTitle] = useState("CULTURAL COUNCIL");

//   const animateTitle = useCallback(() => {
//     let iteration = 0;
//     const interval = setInterval(() => {
//       setTitle(prev =>
//         prev.split("").map((letter, index) => {
//           if (index < Math.floor(iteration)) {
//             return "CULTURAL COUNCIL"[index];
//           }
//           if (letter === ' ') {
//             return ' ';
//           }
//           return letters[Math.floor(Math.random() * 26)];
//         }).join("")
//       );

//       if (iteration >= "CULTURAL COUNCIL".length) {
//         clearInterval(interval);
//       }

//       iteration += 1 / 3;
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   useGSAP(() => {
//         gsap.to('#cult', {opacity: 1 ,duration: 1.5, delay: 1.5, translateY: 170})
//    }, [])

//   return (
//     <div className="grid place-items-center h-screen bg-black overflow-hidden">
//       <div id="cult"  className="font-myfont text-left text-[clamp(3rem,10vw,140px)] text-white h-full w-full ml-36 opacity-0 translate-y-1/2">
//         <h1
//         onMouseEnter={animateTitle}
//       >
//         {title}
//       </h1>
//       <h1>
//         IIT BHU
//       </h1>
//       </div>




//     </div>
//   );
// };

// export default HyperplexedTitle;
// import gsap from "gsap/dist/gsap"
// import { useGSAP } from "@gsap/react"
// import { heroVideo, smallHeroVideo } from "../Utils"
// import { useEffect, useState, useRef } from "react"

// const WelcomePage = () => {

//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const [displayText, setDisplayText] = useState(""); // Initially empty
//   const divRef = useRef(null); // To reference the div

//   useEffect(() => {
//     // Ensure the ref is not null before accessing innerText
//     if (divRef.current) {
//       setDisplayText(divRef.current.innerText);
//     {/* Closing curly brace */}
//     }
//   }, []); // Empty dependency array to run once when component mounts

//   const handleMouseOver = (event) => {
//     // Ensure event.target and dataset are not null
//     if (!event.target || !event.target.dataset || !event.target.dataset.value) {
//       return; // Exit if no dataset value is available
//     }

//     let iterations = 0;
//     const datasetValue = event.target.dataset.value; // The target word

//     const interval = setInterval(() => {
//       setDisplayText((prevText) =>
//         prevText
//           .split("")
//           .map((letter, index) => {
//             if (index < datasetValue.length && index < iterations) {
//               return datasetValue[index];
//             }
//             return letters[Math.floor(Math.random() * 26)];
//           })
//           .join("")
//       );

//       if (iterations >= datasetValue.length) {
//         clearInterval(interval);
//       }
//       iterations += 1 / 3;
//     }, 30);
//   };

//   const handleMouseOut = () => {
//     // Ensure divRef.current is not null
//     if (divRef.current && divRef.current.dataset) {
//       setDisplayText(divRef.current.dataset.value); // Reset to original text after hover ends
//     }
//   };



//   useGSAP(() => {
//     gsap.to('#hero', {opacity: 1, translateY: 150 ,duration: 0.5, delay: 1.5, stagger: 0.05})
//   }, [])

//   return (
//     <><section className="w-full nav-height bg-black relative">
//       <div className="h-5/6 w-full items-start flex px-36" data-value="CULTURAL" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
//         CULTURAL
//       </div>

//       <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
//         <a href="#highlights" className="btn">Buy</a>
//         <p className="font-normal text-xl">From $199/month or $999</p>
//       </div>
//       </section>
//     </>

//   )
// }

// export default WelcomePage
