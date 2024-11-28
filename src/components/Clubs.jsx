import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Minimize2 } from 'lucide-react';

const Clubs = () => {
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [isInteractive, setIsInteractive] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1524781289445-ddf8f5695861",
    "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e",
    "https://images.unsplash.com/photo-1618202133208-2907bebba9e1",
    "https://images.unsplash.com/photo-1495805442109-bf1cf975750b",
    "https://images.unsplash.com/photo-1548021682-1720ed403a5b",
    "https://images.unsplash.com/photo-1496753480864-3e588e0269b3",
    "https://images.unsplash.com/photo-1613346945084-35cccc812dd5",
    "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97"
  ];

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
    if (imagesLoaded + 1 === images.length) {
      // Start the loading-to-ready transition sequence
      setTimeout(() => {
        setIsLoading(false);
        // Wait for loading animation to complete before enabling interactivity
        setTimeout(() => {
          setIsInitialAnimationComplete(true);
          setTimeout(() => {
            setIsInteractive(true);
          }, 1000); // Enable interactions after animations complete
        }, 1500); // Match this with the CSS animation duration
      }, 500);
    }
  };

  const handleOnDown = (e) => {
    if (!isInteractive) return;
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    if (!isInteractive) return;
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (!isInteractive || mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    // Modified calculation for faster, more uniform movement
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

  const toggleFullscreen = () => {
    if (!isInteractive) return;
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleZoom = (delta) => {
    if (!isInteractive) return;
    const newZoom = Math.max(1, Math.min(2, zoom + delta));
    setZoom(newZoom);
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
    <div className="h-screen w-screen bg-black m-0 overflow-hidden relative">
      <div
        ref={trackRef}
        className={`flex gap-[4vmin] absolute w-[150vw] left-1/2 top-1/2 select-none transition-transform duration-800 ease-out
          ${isInitialAnimationComplete ? 'cursor-grab active:cursor-grabbing' : ''}`}
        style={{
          transform: `translate(${percentage}%, -50%) scale(${zoom})`,
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
          >
            <img
              className={`w-[40vmin] h-[56vmin] object-cover rounded-lg shadow-2xl
                transition-all duration-300 ease-out hover:w-fit
                ${activeImageIndex === index ? '' : ''}
                ${isInteractive ? 'hover:scale-102' : ''}`}
              src={`${src}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`}
              draggable="false"
              alt={`Track image ${index + 1}`}
              onLoad={handleImageLoad}
              onClick={() => isInteractive && setActiveImageIndex(index === activeImageIndex ? null : index)}
              style={{
                objectPosition: `${100 + percentage}% center`,
              }}
            />
            {activeImageIndex === index && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg
                transform transition-transform duration-800 ease">
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls - only shown after initial animation */}
      {isInitialAnimationComplete && (
        <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4
          bg-white/10 backdrop-blur-sm p-4 rounded-full transition-opacity duration-500
          ${isInteractive ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => handleScroll(1)}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
            disabled={!isInteractive}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* <button
            onClick={() => handleZoom(-0.1)}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
            disabled={!isInteractive}
          >
            <ZoomOut className="w-6 h-6 text-white" />
          </button> */}

          {/* <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
            disabled={!isInteractive}
          >
            {isFullscreen ? (
              <Minimize2 className="w-6 h-6 text-white" />
            ) : (
              <Maximize2 className="w-6 h-6 text-white" />
            )}
          </button> */}

          {/* <button
            onClick={() => handleZoom(0.1)}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
            disabled={!isInteractive}
          >
            <ZoomIn className="w-6 h-6 text-white" />
          </button> */}

          <button
            onClick={() => handleScroll(-1)}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
            disabled={!isInteractive}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      {/* Loading Progress */}
      {isLoading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300 rounded-full"
                style={{ width: `${(imagesLoaded / images.length) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-sm">Loading magic...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clubs;









// import { useState, useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Minimize2 } from 'lucide-react';

// const Clubs = () => {
//   const trackRef = useRef(null);
//   const [mouseDownAt, setMouseDownAt] = useState(0);
//   const [prevPercentage, setPrevPercentage] = useState(0);
//   const [percentage, setPercentage] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [imagesLoaded, setImagesLoaded] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [activeImageIndex, setActiveImageIndex] = useState(null);
//   const [zoom, setZoom] = useState(1);

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
//     setImagesLoaded(prev => prev + 1);
//     if (imagesLoaded + 1 === images.length) {
//       setTimeout(() => setIsLoading(false), 500);
//     }
//   };

//   const handleOnDown = (e) => {
//     setMouseDownAt(e.clientX);
//   };

//   const handleOnUp = () => {
//     setMouseDownAt(0);
//     setPrevPercentage(percentage);
//   };

//   const handleOnMove = (e) => {
//     if (mouseDownAt === 0) return;

//     const mouseDelta = mouseDownAt - e.clientX;
//     const maxDelta = window.innerWidth / 2;

//     // Modified calculation to make movement more uniform and reach 50% faster
//     const speedMultiplier = 2.5; // Increased speed
//     const nextPercentageUnconstrained = prevPercentage + (mouseDelta / maxDelta) * -100 * speedMultiplier;
//     const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

//     setPercentage(nextPercentage);
//   };

//   const handleScroll = (direction) => {
//     const step = 20;
//     const nextPercentage = Math.max(Math.min(prevPercentage + (direction * step), 0), -100);
//     setPrevPercentage(nextPercentage);
//     setPercentage(nextPercentage);
//   };

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       document.documentElement.requestFullscreen();
//       setIsFullscreen(true);
//     } else {
//       document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   const handleZoom = (delta) => {
//     const newZoom = Math.max(1, Math.min(2, zoom + delta));
//     setZoom(newZoom);
//   };

//   useEffect(() => {
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
//   }, [mouseDownAt, prevPercentage, percentage]);

//   return (
//     <div className="h-screen w-screen bg-black m-0 overflow-hidden relative">
//       <div
//         ref={trackRef}
//         className="flex gap-[4vmin] absolute left-1/2 top-1/2 select-none"
//         style={{
//           transform: `translate(${percentage}%, -50%) scale(${zoom})`,
//           transition: 'transform 800ms cubic-bezier(0.4, 0.0, 0.2, 1)'
//         }}
//       >
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`relative transition-all duration-1000 ease-in-out ${
//               isLoading ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
//             }`}
//             style={{
//               transform: isLoading
//                 ? `translateY(${index % 2 === 0 ? '-100vh' : '100vh'})`
//                 : 'translateY(0)',
//               transitionDelay: `${index * 100}ms`
//             }}
//           >
//             <img
//               className={`w-[40vmin] h-[56vmin] object-cover rounded-lg shadow-2xl transition-transform duration-300 ${
//                 activeImageIndex === index ? 'scale-105' : ''
//               }`}
//               src={`${src}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`}
//               draggable="false"
//               alt={`Track image ${index + 1}`}
//               onLoad={handleImageLoad}
//               onClick={() => setActiveImageIndex(index === activeImageIndex ? null : index)}
//               style={{
//                 objectPosition: `${100 + percentage}% center`,
//               }}
//             />
//             {activeImageIndex === index && (
//               <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
//                 <p className="text-sm">Image {index + 1}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Controls */}
//       <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-full">
//         <button
//           onClick={() => handleScroll(1)}
//           className="p-2 rounded-full hover:bg-white/20 transition-colors"
//         >
//           <ChevronLeft className="w-6 h-6 text-white" />
//         </button>

//         <button
//           onClick={() => handleZoom(-0.1)}
//           className="p-2 rounded-full hover:bg-white/20 transition-colors"
//         >
//           <ZoomOut className="w-6 h-6 text-white" />
//         </button>

//         <button
//           onClick={toggleFullscreen}
//           className="p-2 rounded-full hover:bg-white/20 transition-colors"
//         >
//           {isFullscreen ? (
//             <Minimize2 className="w-6 h-6 text-white" />
//           ) : (
//             <Maximize2 className="w-6 h-6 text-white" />
//           )}
//         </button>

//         <button
//           onClick={() => handleZoom(0.1)}
//           className="p-2 rounded-full hover:bg-white/20 transition-colors"
//         >
//           <ZoomIn className="w-6 h-6 text-white" />
//         </button>

//         <button
//           onClick={() => handleScroll(-1)}
//           className="p-2 rounded-full hover:bg-white/20 transition-colors"
//         >
//           <ChevronRight className="w-6 h-6 text-white" />
//         </button>
//       </div>

//       {/* Loading Progress */}
//       {isLoading && (
//         <div className="fixed inset-0 bg-black flex items-center justify-center">
//           <div className="text-white text-center">
//             <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-white transition-all duration-300 rounded-full"
//                 style={{ width: `${(imagesLoaded / images.length) * 100}%` }}
//               />
//             </div>
//             <p className="mt-4 text-sm">Loading images...</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Clubs;







// import { useState, useRef, useEffect } from 'react';

// const Clubs = () => {
//   const trackRef = useRef(null);
//   const [mouseDownAt, setMouseDownAt] = useState(0);
//   const [prevPercentage, setPrevPercentage] = useState(0);
//   const [percentage, setPercentage] = useState(0);

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

//   const handleOnDown = (e) => {
//     setMouseDownAt(e.clientX);
//   };

//   const handleOnUp = () => {
//     setMouseDownAt(0);
//     setPrevPercentage(percentage);
//   };

//   const handleOnMove = (e) => {
//     if (mouseDownAt === 0) return;

//     const mouseDelta = mouseDownAt - e.clientX;
//     const maxDelta = window.innerWidth / 2;

//     const nextPercentageUnconstrained = prevPercentage + (mouseDelta / maxDelta) * -100;
//     const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

//     setPercentage(nextPercentage);
//   };

//   useEffect(() => {
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
//   }, [mouseDownAt, prevPercentage, percentage]);

//   return (
//     <div className="h-screen w-screen bg-black m-0 overflow-hidden">
//       <div
//         ref={trackRef}
//         className="flex gap-[4vmin] absolute left-1/2 top-1/2 select-none"
//         style={{
//           transform: `translate(${percentage}%, -50%)`,
//           transition: 'transform 1200ms'
//         }}
//       >
//         {images.map((src, index) => (
//           <img
//             key={index}
//             className="w-[40vmin] h-[56vmin] object-cover"
//             src={`${src}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`}
//             draggable="false"
//             alt={`Track image ${index + 1}`}
//             style={{
//               objectPosition: `${100 + percentage}% center`,
//               transition: 'object-position 1200ms'
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Clubs;
