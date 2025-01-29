// import React, { useState } from 'react';
// import { Star, Award, Trophy, Target, Zap } from 'lucide-react';

// const SeniorTeamDisplay = () => {
//   const [hoveredMember, setHoveredMember] = useState(null);

//   const seniorTeam = [
//     {
//       name: 'Harshit Mishra',
//       role: 'Joint General Seceratary',
//       avatar: 'PP.jpg',
//       color: 'bg-blue-100',
//       accent: 'bg-blue-500',
//       icon: Target,
//       position: 'left'
//     },
//     {
//       name: 'Somil',
//       role: 'General Secretary',
//       avatar: 'PP.jpg',
//       color: 'bg-amber-100',
//       accent: 'bg-amber-500',
//       icon: Trophy,
//       position: 'center'
//     },
//     {
//       name: 'Rohit Kaushik',
//       role: 'Joint General Secretary',
//       avatar: 'PP.jpg',
//       color: 'bg-emerald-100',
//       accent: 'bg-emerald-500',
//       icon: Zap,
//       position: 'right'
//     }
//   ];

//   const getZIndex = (position, isHovered) => {
//     if (isHovered) return 30;
//     if (position === 'center') return hoveredMember === null ? 20 : 10;
//     return 10;
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 h-1/4">
      
//       <div className="relative max-w-6xl">
//         <div className="text-center mb-24">
//         <h2 className="text-5xl pb-10 font-bold text-yellow-50">Our Team</h2>
//           <div className="flex items-center justify-center gap-2 mb-3">
            
//             <Star className="w-6 h-6 text-amber-500" />
//             <h2 className="text-3xl font-bold text-yellow-50">Cultural Council Helm</h2>
//             <Star className="w-6 h-6 text-amber-500" />
//           </div>
//           <p className="text-gray-600"></p>
//         </div>

//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
//           <svg className="w-full h-32" viewBox="0 0 400 100">
//             <path
//               d="M100,50 L300,50"
//               stroke="#E5E7EB"
//               strokeWidth="2"
//               strokeDasharray="4 4"
//             />
//             <path
//               d="M200,0 L200,50"
//               stroke="#E5E7EB"
//               strokeWidth="2"
//               strokeDasharray="4 4"
//             />
//           </svg>
//         </div>

//         <div className="relative flex justify-center items-center">
//           {seniorTeam.map((member, index) => {
//             const isCenter = member.position === 'center';
//             const isHovered = hoveredMember === index;
//             const translateClass = member.position === 'left' 
//               ? 'translate-x-16' 
//               : member.position === 'right' 
//                 ? '-translate-x-16' 
//                 : '-translate-y-8';

//             return (
//             <div
//               key={member.name}
//               className="relative transition-all duration-300"
//               style={{ 
//                 transform: `${isCenter ? 'scale(1.1)' : 'scale(1)'}`,
//                 zIndex: getZIndex(member.position, isHovered)
//               }}
//             >
//               <div
//                 className={`relative group ${translateClass}`}
//                 onMouseEnter={() => setHoveredMember(index)}
//                 onMouseLeave={() => setHoveredMember(null)}
//               >
                
                

                
//                 <div className={`absolute -top-12 left-1/2 -translate-x-1/2 ${member.accent} px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 ${
//                   isHovered
//                     ? 'opacity-100 -translate-y-2'
//                     : 'opacity-0 translate-y-2 pointer-events-none'
//                 }`}>
//                   <p className="text-sm font-bold text-white whitespace-nowrap">{member.role}</p>
//                   <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 ${member.accent} transform rotate-45`}></div>
//                 </div>

//                 <div className={`relative w-52 h-52 rounded-full overflow-hidden transform transition-all duration-300 ${
//                   isHovered ? 'scale-110' : isCenter ? 'scale-105' : 'scale-100'
//                 }`}>
//                   {isCenter && (
//                     <div className={`absolute -inset-2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 rounded-full animate-spin-slow transition-opacity duration-300 ${
//                       hoveredMember !== null && !isHovered ? 'opacity-50' : 'opacity-100'
//                     }`}></div>
//                   )}
                  
//                   <div className={`absolute -inset-1 ${member.accent} rounded-full transition-transform duration-300 ${
//                     isHovered ? 'scale-105' : 'scale-100'
//                   }`}>
//                     {[...Array(8)].map((_, i) => (
//                       <div
//                         key={i}
//                         className={`absolute w-2 h-2 bg-white rounded-full transition-transform duration-300 ${
//                           isHovered ? 'scale-150' : 'scale-100'
//                         }`}
//                         style={{
//                           top: '50%',
//                           left: '50%',
//                           transform: `rotate(${i * 45}deg) translate(92px, -50%)`,
//                         }}
//                       />
//                     ))}
//                   </div>

//                   <div className={`absolute inset-0 ${member.color} transition-all duration-300 ${
//                     isHovered ? 'scale-105' : 'scale-100'
//                   }`}></div>

//                   <div className="absolute inset-2 bg-white rounded-full overflow-hidden shadow-inner">
//                     <div className="w-full h-full relative">
//                       <img
//                         src={member.avatar}
//                         alt={member.name}
//                         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                       />
//                       <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 ${
//                         isHovered ? 'opacity-100' : 'opacity-0'
//                       }`}></div>
//                     </div>
//                   </div>

//                   <div className={`absolute bottom-8 left-0 right-0 text-center transition-all duration-300 ${
//                     isHovered ? 'transform -translate-y-1' : ''
//                   }`}>
//                     <div className={`bg-white mx-4 py-2 px-4 rounded-lg shadow-lg ${
//                       isCenter ? 'border-2 border-amber-500' : ''
//                     }`}>
//                       <p className="text-sm font-bold text-gray-900">{member.name}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )})}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeniorTeamDisplay;





import React, { useState, useEffect } from 'react';
import { Star, Award, Trophy, Target, Zap } from 'lucide-react';

const SeniorTeamDisplay = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const seniorTeam = [
    {
      name: 'Harshit Mishra',
      role: 'Joint General Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/harshit.JPG?updatedAt=1737970024108',
      color: 'bg-blue-100',
      accent: 'bg-blue-500',
      icon: Target,
      position: 'left'
    },
    {
      name: 'Somil Mittal',
      role: 'General Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/somil.jpg?updatedAt=1737970028403',
      color: 'bg-amber-100',
      accent: 'bg-amber-500',
      icon: Trophy,
      position: 'center'
    },
    {
      name: 'Rohit Kaushik',
      role: 'Joint General Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/rohit.jpeg?updatedAt=1738139911010',
      color: 'bg-emerald-100',
      accent: 'bg-emerald-500',
      icon: Zap,
      position: 'right'
    }
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

  const getZIndex = (position, isHovered) => {
    if (isHovered) return 30;
    if (position === 'center') return hoveredMember === null ? 20 : 10;
    return 10;
  };

  const handleLongPressStart = (index) => {
    longPressTimeout.current = setTimeout(() => {
      setLongPressedMember(index);
    }, 200); 
  };

  const handleLongPressEnd = () => {
    clearTimeout(longPressTimeout.current);
    setLongPressedMember(null); // Hide the name and role after releasing
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: 'white',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatBubble ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random()}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes floatBubble {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          50% { opacity: 0.1; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }
      `}</style>

      <div className="relative max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-5xl pb-10 font-bold text-yellow-50">Our Team</h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="w-6 h-6 text-amber-500" />
            <h2 className="text-3xl font-bold text-yellow-50">Cultural Council Helm</h2>
            <Star className="w-6 h-6 text-amber-500" />
          </div>
        </div>

        <div className="relative flex flex-row justify-center items-center gap-6">
          {seniorTeam.map((member, index) => {
            const isCenter = member.position === 'center';
            const isHovered = hoveredMember === index;

            return (
              <div
                key={member.name}
                className="relative transition-all duration-300"
                style={{
                  transform: `${isCenter ? 'scale(1.1)' : 'scale(1)'}`,
                  zIndex: getZIndex(member.position, isHovered)
                }}
              >
                <div
                  className="relative group"
                  onMouseEnter={() => !isMobile && setHoveredMember(index)}
                  onMouseLeave={() => !isMobile && setHoveredMember(null)}
                  onTouchStart={() => isMobile && handleLongPressStart(index)}
                  onTouchEnd={() => isMobile && handleLongPressEnd()}
                >
                  {/* Role Tooltip (Visible on Hover for Desktop and Long Press for Mobile) */}
                  {(isHovered || longPressedMember === index) && !isMobile && (
                    <div
                      className={`absolute -top-12 left-1/2 -translate-x-1/2 ${member.accent} px-4 rounded-lg shadow-lg transform transition-all duration-300`}
                    >
                      <p className="text-sm font-bold text-white whitespace-nowrap">{member.role}</p>
                      <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 ${member.accent} transform rotate-45`}></div>
                    </div>
                  )}

                  <div className={`relative w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden transform transition-all duration-300 ${isHovered ? 'scale-110' : isCenter ? 'scale-105' : 'scale-100'}`}>
                    <div className={`absolute -inset-1 ${member.accent} rounded-full transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}></div>

                    <div className={`absolute inset-0 ${member.color} transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}></div>

                    <div className="absolute inset-2 bg-white rounded-full overflow-hidden shadow-inner">
                      <div className="w-full h-full relative">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Only Show Name and Role on Larger Screens */}
                  <div
                    className={`absolute bottom-8 left-0 right-0 text-center transition-all duration-300 ${isMobile ? 'hidden' : 'block'}`}
                  >
                    <div className={`bg-white mx-4 py-2 px-4 rounded-lg shadow-lg ${isCenter ? 'border-2 border-amber-500' : ''}`}>
                      <p className="text-sm font-bold text-gray-900">{member.name}</p>
                    </div>
                  </div>

                  {/* Only Show Name Below the Avatar on Mobile (No Overlap) */}
                  <div
                    className={`absolute bottom-[-8] left-0 right-0 text-center transition-all duration-300 ${isMobile ? 'block' : 'hidden'}`}
                  >
                    <div className="bg-white mx-4 py-2 my-2 rounded-lg shadow-lg">
                      <p className="text-sm font-bold text-gray-900">{member.name}</p>
                    </div>
                  </div>
                </div>

                {/* Long Press Tooltip for Mobile */}
                {isMobile && longPressedMember === index && (
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-bold text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-600">{member.role}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeniorTeamDisplay;


