// import { useState, useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Clubs = () => {
//   const trackRef = useRef(null);
//   const [mouseDownAt, setMouseDownAt] = useState(0);
//   const [prevPercentage, setPrevPercentage] = useState(0);
//   const [percentage, setPercentage] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);
//   const [imagesLoaded, setImagesLoaded] = useState(0);
//   const [activeImageIndex, setActiveImageIndex] = useState(null);
//   const [isInteractive, setIsInteractive] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const navigate = useNavigate();

//   const clubNames = [
//     { label: 'IMC', href: '/club/IMC' },
//     { label: 'WMC', href: '/club/wmc' },
//     { label: 'DFZ', href: '/club/dfz' },
//     { label: 'FAC', href: '/club/fac' },
//     { label: 'AVRN', href: '/club/avrn' },
//     { label: 'LIT', href: '/club/lit' },
//     { label: 'QUIZ', href: '/club/quiz' },
//     { label: 'MASQ', href: '/club/masq' },
//   ];

//   const images = [
//     "https://images.unsplash.com/photo-1524781289445-ddf8f5695861",
//     "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e",
//     "https://images.unsplash.com/photo-1618202133208-2907bebba9e1",
//     "https://images.unsplash.com/photo-1495805442109-bf1cf975750b",
//     "https://images.unsplash.com/photo-1548021682-1720ed403a5b",
//     "https://images.unsplash.com/photo-1496753480864-3e588e0269b3",
//     "https://images.unsplash.com/photo-1613346945084-35cccc812dd5",
//     "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97"
//   ];

//   const handleImageLoad = () => {
//     setImagesLoaded((prev) => {
//       const newCount = prev + 1;
//       if (newCount === images.length) {
//         setTimeout(() => {
//           setIsLoading(false);
//           setTimeout(() => {
//             setIsInitialAnimationComplete(true);
//             setTimeout(() => {
//               setIsInteractive(true);
//             }, 1000);
//           }, 1500);
//         }, 500);
//       }
//       return newCount;
//     });
//   };

//   const handleOnDown = (e) => {
//     if (!isInteractive) return;
//     setMouseDownAt(e.clientX);
//     setIsScrolling(true);
//     setHoveredIndex(null);
//   };

//   const handleOnUp = () => {
//     if (!isInteractive) return;
//     setMouseDownAt(0);
//     setPrevPercentage(percentage);
//     setTimeout(() => {
//       setIsScrolling(false);
//     }, 200);
//   };

//   const handleOnMove = (e) => {
//     if (!isInteractive || mouseDownAt === 0) return;

//     const mouseDelta = mouseDownAt - e.clientX;
//     const maxDelta = window.innerWidth / 2;

//     const speedMultiplier = 1.5;
//     const nextPercentageUnconstrained = prevPercentage + (mouseDelta / maxDelta) * -100 * speedMultiplier;
//     const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

//     setPercentage(nextPercentage);
//   };

//   const handleScroll = (direction) => {
//     if (!isInteractive) return;
//     const step = 20;
//     const nextPercentage = Math.max(Math.min(prevPercentage + (direction * step), 0), -100);
//     setPrevPercentage(nextPercentage);
//     setPercentage(nextPercentage);
//   };

//   const handleImageClick = (index) => {
//     if (!isInteractive) return;
//     if (activeImageIndex !== null) return;

//     setActiveImageIndex(index);

//     setTimeout(() => {
//       navigate(clubNames[index].href, {
//         state: { fromClubsPage: true }
//       });
//     }, 500);
//   };

//   useEffect(() => {
//     if (!isInteractive) return;

//     const onMouseDown = (e) => handleOnDown(e);
//     const onMouseUp = (e) => handleOnUp(e);
//     const onMouseMove = (e) => handleOnMove(e);
//     const onTouchStart = (e) => handleOnDown(e.touches[0]);
//     const onTouchEnd = (e) => handleOnUp(e.touches[0]);
//     const onTouchMove = (e) => handleOnMove(e.touches[0]);

//     window.addEventListener('mousedown', onMouseDown);
//     window.addEventListener('mouseup', onMouseUp);
//     window.addEventListener('mousemove', onMouseMove);
//     window.addEventListener('touchstart', onTouchStart);
//     window.addEventListener('touchend', onTouchEnd);
//     window.addEventListener('touchmove', onTouchMove);

//     return () => {
//       window.removeEventListener('mousedown', onMouseDown);
//       window.removeEventListener('mouseup', onMouseUp);
//       window.removeEventListener('mousemove', onMouseMove);
//       window.removeEventListener('touchstart', onTouchStart);
//       window.removeEventListener('touchend', onTouchEnd);
//       window.removeEventListener('touchmove', onTouchMove);
//     };
//   }, [mouseDownAt, prevPercentage, percentage, isInteractive]);

//   return (
//     <div className="h-screen w-screen bg-black m-0 overflow-hidden relative">
//       <div
//         ref={trackRef}
//         className={`flex gap-[4vmin] absolute w-[150vw] left-1/2 top-1/2 select-none transition-transform duration-800 ease-out
//           ${isInitialAnimationComplete ? 'cursor-grab active:cursor-grabbing' : ''}`}
//         style={{
//           transform: `translate(${percentage}%, -50%)`,
//           pointerEvents: isInteractive ? 'auto' : 'none'
//         }}
//       >
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`relative transition-all duration-1000 ease-in-out
//               ${isLoading ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}
//               ${!isInitialAnimationComplete ? 'transform' : ''}`}
//             style={{
//               transform: isLoading
//                 ? `translateY(${index % 2 === 0 ? '-100vh' : '100vh'})`
//                 : 'translateY(0)',
//               transitionDelay: `${index * 100}ms`
//             }}
//           >
//             <div
//               className="relative group"
//               onClick={() => handleImageClick(index)}
//             >
//               <img
//                 className={`w-[40vmin] h-[60vmin] object-cover rounded-lg shadow-2xl
//                   transition-all duration-500 ease-in-out
//                   ${activeImageIndex === index
//                     ? 'fixed top-0 left-0 w-screen h-screen z-50 object-cover'
//                     : ''}`}
//                 src={`${src}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`}
//                 draggable="false"
//                 alt={`Track image ${index + 1}`}
//                 onLoad={handleImageLoad}
//               />
//               {isInteractive && (
//                 <div
//                   className="absolute inset-0 flex items-center justify-center"
//                   onClick={() => handleImageClick(index)}
//                 >
//                   <span
//                     className="text-white text-9xl font-bold opacity-0 group-hover:opacity-100
//                     transition-opacity duration-300 cursor-pointer"
//                   >
//                     {clubNames[index].label}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Controls - only shown after initial animation */}
//       {isInitialAnimationComplete && (
//         <>
//           <div className={`fixed bottom-6 pl-48 py-5 left-0 transform -translate-x-1/2 flex items-center gap-4
//             hover:bg-white/10 p-4 rounded-full transition-opacity duration-500
//             ${isInteractive ? 'opacity-100' : 'opacity-0'}`}>
//             <button
//               onClick={() => handleScroll(1)}
//               className="p-2 rounded-full opacity-50 hover:opacity-100 transition-colors"
//               disabled={!isInteractive}
//             >
//               <ChevronLeft className="w-16 h-16 text-white" />
//             </button>
//           </div>
//           <div className={`fixed bottom-6 pr-48 py-5 left-full transform -translate-x-1/2 flex items-center gap-4
//             hover:bg-white/10 p-4 rounded-full transition-opacity duration-500
//             ${isInteractive ? 'opacity-100' : 'opacity-0'}`}>
//             <button
//               onClick={() => handleScroll(-1)}
//               className="p-2 rounded-full opacity-50 hover:opacity-100 transition-colors"
//               disabled={!isInteractive}
//             >
//               <ChevronRight className="w-16 h-16 text-white" />
//             </button>
//           </div>
//         </>
//       )}

//       {/* Loading Progress */}
//       {isLoading && (
//         <div className="fixed inset-0 bg-black flex items-center justify-center">
//           <div className="text-white text-center">
//             <div className="w-40 h-1 bg-white/20 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-white transition-all duration-300 rounded-full"
//                 style={{ width: `${(imagesLoaded / images.length) * 100}%` }}
//               />
//             </div>
//             <p className="mt-4 text-sm">Into the clubs of Cultural Council, IIT BHU...</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Clubs;










import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BrowserRouter, NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Clubs = () => {
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navigate = useNavigate();

  const clubNames = [
    { label: 'IMC', fullForm: 'Indian Music Club', href: '/clubs/imc' },
    { label: 'WMC', fullForm: 'Western Music Club', href: '/clubs/wmc' },
    { label: 'DFZ', fullForm: 'Dance CLub', href: '/clubs/dfz' },
    { label: 'FAC', fullForm: 'Fine Arts Club', href: '/clubs/fac' },
    { label: 'AVRN', fullForm: 'Aavran', href: '/clubs/aavran' },
    { label: 'LIT', fullForm: 'Literary Club', href: '/clubs/lit' },
    { label: 'QUIZ', fullForm: 'Quiz Club', href: '/clubs/quiz' },
    { label: 'MASQ', fullForm: 'Masquerades Club', href: '/clubs/masq' },
  ];

  const images = [
    "/imcLogo.jpg",
    "/wmcLogo.png",
    "/dfzLogo.jpg",
    "/facLogo.png",
    "/aavranLogo.jpg",
    "/litLogo.png",
    "/quizLogo.png",
    "/masqLogo.jpg"
  ];

  const handleImageLoad = () => {
    setImagesLoaded((prev) => {
      const newCount = prev + 1;
      if (newCount === images.length) {
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            setIsInitialAnimationComplete(true);
            setTimeout(() => {
              setIsInteractive(true);
            }, 100);
          }, 100);
        }, 1200);
      }
      return newCount;
    });
  };

  const handleOnDown = (e) => {
    if (!isInteractive) return;
    setMouseDownAt(e.clientX);
    setIsScrolling(true);
    setHoveredIndex(null);
  };

  const handleOnUp = () => {
    if (!isInteractive) return;
    setMouseDownAt(0);
    setPrevPercentage(percentage);
    setTimeout(() => {
      setIsScrolling(false);
    }, 200);
  };

  const handleOnMove = (e) => {
    if (!isInteractive || mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const speedMultiplier = 1.5;
    const nextPercentageUnconstrained = prevPercentage + (mouseDelta / maxDelta) * -100 * speedMultiplier;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    setPercentage(nextPercentage);
  };

  const handleScroll = (direction) => {
    if (!isInteractive) return;
    const step = 20;
    const nextPercentage = Math.max(Math.min(prevPercentage + (direction * step), 0), -100);
    setPrevPercentage(nextPercentage);
    setPercentage(nextPercentage);
  };

  const handleImageClick = (index) => {
    if (!isInteractive) return;
    if (activeImageIndex !== null) return;

    setActiveImageIndex(index);

    setTimeout(() => {
      navigate(clubNames[index].href, {
        state: { fromClubsPage: true }
      });
    }, 500);
  };

  useEffect(() => {
    if (!isInteractive) return;

    const onMouseDown = (e) => handleOnDown(e);
    const onMouseUp = (e) => handleOnUp(e);
    const onMouseMove = (e) => handleOnMove(e);
    const onTouchStart = (e) => handleOnDown(e.touches[0]);
    const onTouchEnd = (e) => handleOnUp(e.touches[0]);
    const onTouchMove = (e) => handleOnMove(e.touches[0]);

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [mouseDownAt, prevPercentage, percentage, isInteractive]);

  return (
    <>
    <div className="h-screen w-screen bg-zinc-950 m-0 overflow-hidden relative">
     
      <div
        ref={trackRef}
        className={`flex gap-[4vmin] absolute w-[150vw] left-1/2 top-1/2 select-none transition-transform duration-800 ease-out
          ${isInitialAnimationComplete ? 'cursor-grab active:cursor-grabbing' : ''}`}
        style={{
          transform: `translate(${percentage}%, -50%)`,
          pointerEvents: isInteractive ? 'auto' : 'none'
        }}
      >
        
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative transition-all duration-1000 ease-in-out
              ${isLoading ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}
              ${!isInitialAnimationComplete ? 'transform' : ''}`}
            style={{
              transform: isLoading
                ? `translateY(${index % 2 === 0 ? '-100vh' : '100vh'})`
                : 'translateY(0)',
              transitionDelay: `${index * 100}ms`
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="relative group"
              onClick={() => handleImageClick(index)}
            >
              <Link to={clubNames[index].href}>
              <img
  className={`w-[40vmin] h-[60vmin] object-contain rounded-lg shadow-2xl
    transition-all duration-500 ease-in-out border-2 border-neutral-800 bg-black
    ${hoveredIndex === index ? 'scale-110' : ''}
    ${activeImageIndex === index
      ? 'fixed top-0 left-0 w-screen h-screen z-50 object-cover'
      : ''}`}
  src={src}
  draggable="false"
  alt={`Track image ${index + 1}`}
  onLoad={handleImageLoad}
  onError={(e) => {
    console.error(`Image failed to load: ${src}`); // Log errors for debugging
  }}
/>
             </Link>
              {isInteractive && hoveredIndex === index && (
                 
                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                  <h1 className='font-bold text-5xl' to='/imc'>{clubNames[index].label}</h1>
                  <h1>{clubNames[index].fullForm}</h1>
                </div>
              
              )}
            </div>
          </div>
        ))}
        
      </div>
      
      {/* Controls - only shown after initial animation */}
      {isInitialAnimationComplete && (
        <>
          <div className={`fixed bottom-6 pl-48 py-5 left-0 transform -translate-x-1/2 flex items-center gap-4
            hover:bg-white/10 p-4 rounded-full transition-opacity duration-500
            ${isInteractive ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => handleScroll(1)}
              className="p-2 rounded-full opacity-50 hover:opacity-100 transition-colors"
              disabled={!isInteractive}
            >
              <ChevronLeft className="w-16 h-16 text-white" />
            </button>
          </div>
          <div className={`fixed bottom-6 pr-48 py-5 left-full transform -translate-x-1/2 flex items-center gap-4
            hover:bg-white/10 p-4 rounded-full transition-opacity duration-500
            ${isInteractive ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => handleScroll(-1)}
              className="p-2 rounded-full opacity-50 hover:opacity-100 transition-colors"
              disabled={!isInteractive}
            >
              <ChevronRight className="w-16 h-16 text-white" />
            </button>
          </div>
        </>
      )}

      {/* Loading Progress */}
      {isLoading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-40 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300 rounded-full"
                style={{ width: `${(imagesLoaded / images.length) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-sm">Into the clubs of Cultural Council, IIT BHU...</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Clubs;
