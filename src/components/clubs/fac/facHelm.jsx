// import React, { useState } from 'react';

// const FacHelm = () => {
//   const [hoveredMember, setHoveredMember] = useState(null);

//   const teamMembers = [
//     {
//       name: 'Mehul Goyal',
//       role: 'Joint Secretary',
//       avatar: 'PP.jpg',
//       color: 'bg-blue-100'
//     },
//     {
//       name: 'Mehul Goyal',
//       role: 'Secretary',
//       avatar: 'PP.jpg',
//       color: 'bg-purple-100'
//     },
//     {
//       name: 'Nishant',
//       role: 'Joint Secretary',
//       avatar: 'PP.jpg',
//       color: 'bg-pink-100'
//     }
//   ];

//   return (
//     <>
//     <div className="bg-gradient-to-t from-slate-900 via-slate-950 to-gray-800 flex items-center justify-center pb-20 pt-10 h-1/4 relative z-100">
//       <div className="relative">
//         <div className="text-center mb-8">
//           <h2 className="bg-gradient-to-br from-slate-300 to-slate-400 py-8 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-5xl">Our Helm</h2>
//           {/* <p className="text-gray-600 mt-2">Meet our Tech Guys</p> */}
//         </div>

//         <div className="flex justify-center items-center -space-x-16">
//           {teamMembers.map((member, index) => (
//             <div
//               key={member.name}
//               className="relative group"
//               onMouseEnter={() => setHoveredMember(index)}
//               onMouseLeave={() => setHoveredMember(null)}
//               style={{ zIndex: hoveredMember === index ? 10 : 1 }}
//             >
//               <div className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg transform transition-all duration-300 ${
//                 hoveredMember === index
//                   ? 'opacity-100 -translate-y-2'
//                   : 'opacity-0 translate-y-2 pointer-events-none'
//               }`}>
//                 <p className="text-sm font-semibold whitespace-nowrap">{member.role}</p>
              
//                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
//               </div>

             
//               <div className={`relative w-48 h-48 rounded-full overflow-hidden transform transition-all duration-300 ${
//                 hoveredMember === index ? 'scale-110' : 'scale-100'
//               }`}>
                
//                 <div className={`absolute inset-0 ${member.color} transition-all duration-300 ${
//                   hoveredMember === index ? 'scale-105' : 'scale-100'
//                 }`}></div>

                
//                 <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                  
//                   <div className="w-full h-full relative">
//                     <img
//                       src={member.avatar}
//                       alt={member.name}
//                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                     />
                    
//                     <div className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${
//                       hoveredMember === index ? 'opacity-100' : 'opacity-0'
//                     }`}></div>
//                   </div>
//                 </div>

                
//                 <div className={`absolute bottom-6 left-0 right-0 text-center transition-all duration-300 ${
//                   hoveredMember === index ? 'transform -translate-y-1' : ''
//                 }`}>
//                   <div className="bg-white bg-opacity-90 mx-4 py-1 px-3 rounded-full">
//                     <p className="text-sm font-semibold text-gray-900">{member.name}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
    
//     </div>
//     </>
//   );
// };

// export default FacHelm;


import React, { useState, useEffect } from 'react';

const VideoTeamDisplay = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const teamMembers = [
    {
      name: 'Aditya',
      role: 'Tech Head',
      avatar: '/PP.jpg',
      color: 'bg-blue-100',
    },
    {
      name: 'Ansh Yadav',
      role: 'Tech Manager',
      avatar: '/PP.jpg',
      color: 'bg-purple-100',
    },
    {
      name: 'Nishant',
      role: 'Teach Manager',
      avatar: '/PP.jpg',
      color: 'bg-pink-100',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLongPressStart = (index) => {
    longPressTimeout.current = setTimeout(() => {
      setLongPressedMember(index);
    }, 500); // Long press duration (500ms)
  };

  const handleLongPressEnd = () => {
    clearTimeout(longPressTimeout.current);
    setLongPressedMember(null); // Hide the name and role after releasing
  };

  return (
    <div className="bg-gradient-to-t from-slate-900 via-slate-950 to-gray-800 flex items-center justify-center p-4 relative pb-20 pt-10 z-100">
    

      <div className="relative max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 pt-8 pb-4 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-5xl">Our Helm</h2>
        </div>

        <div className="flex justify-center items-center -space-x-8 flex-wrap">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="relative group"
              onMouseEnter={() => !isMobile && setHoveredMember(index)}
              onMouseLeave={() => !isMobile && setHoveredMember(null)}
              onTouchStart={() => isMobile && handleLongPressStart(index)}
              onTouchEnd={() => isMobile && handleLongPressEnd()}
              style={{ zIndex: hoveredMember === index || longPressedMember === index ? 10 : 1 }}
            >
              {/* Role Tooltip (Visible on Hover for Desktop and Long Press for Mobile) */}
              {(hoveredMember === index || longPressedMember === index) && (
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg transform transition-all duration-300"
                >
                  <p className="text-sm font-semibold whitespace-nowrap">{member.role}</p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                </div>
              )}

              {/* Avatar Container */}
              <div
                className={`relative rounded-full overflow-hidden transform transition-all duration-300 ${
                  hoveredMember === index || longPressedMember === index ? 'scale-110' : 'scale-100'
                }`}
                // Dynamic sizing for image frame
                style={{
                  width: isMobile ? '6rem' : '12rem', // 96px for mobile, 192px for desktop
                  height: isMobile ? '6rem' : '12rem',
                }}
              >
                <div
                  className={`absolute inset-0 ${member.color} transition-all duration-300 ${
                    hoveredMember === index || longPressedMember === index ? 'scale-105' : 'scale-100'
                  }`}
                ></div>

                <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                  <div className="w-full h-full relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${
                        hoveredMember === index || longPressedMember === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Name Display */}
              <div className="absolute bottom-6 left-0 right-0 text-center transition-all duration-300">
                <div
                  className={`bg-white bg-opacity-90 mx-4 py-1 px-3 rounded-full ${
                    isMobile ? 'hidden' : 'block'
                  }`}
                >
                  <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                </div>
              </div>

              {/* Long Press Name for Mobile */}
              {isMobile && longPressedMember === index && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-600">{member.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTeamDisplay;
