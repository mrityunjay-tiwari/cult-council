// // import React, { useState, useEffect } from 'react';

// // const MedalShowcase = () => {
// //   const [touchedMedal, setTouchedMedal] = useState(null);
// //   const [isClient, setIsClient] = useState(false);

// //   useEffect(() => {
// //     setIsClient(true);
// //   }, []);

// //   const medals = {
// //     gold: [
// //       { id: 'g1', event: 'Classical Dance Competition 2023', position: '1st' },
// //       { id: 'g2', event: 'Music Band Showdown', position: '1st' },
// //     ],
// //     silver: [
// //       { id: 's1', event: 'Photography Exhibition', position: '2nd' },
// //       { id: 's2', event: 'Solo Singing Competition', position: '2nd' },
// //       { id: 's3', event: 'Fashion Show', position: '2nd' },
// //       { id: 's4', event: 'Short Film Festival', position: '2nd' }
// //     ],
// //     bronze: [
// //       { id: 'b1', event: 'Debate Competition', position: '3rd' },
// //       { id: 'b2', event: 'Art Installation', position: '3rd' },
// //       { id: 'b3', event: 'Street Play', position: '3rd' },
// //       { id: 'b4', event: 'Creative Writing', position: '3rd' },
// //       { id: 'b5', event: 'Creative Writing', position: '3rd' },
// //       { id: 'b6', event: 'Creative Writing', position: '3rd' }
// //     ]
// //   };

// //   const handleTouchStart = (medalId) => {
// //     setTouchedMedal(medalId);
// //   };

// //   const handleTouchEnd = () => {
// //     setTouchedMedal(null);
// //   };

// //   const MedalRow = ({ type, medals, color, shadowColor, rowIndex }) => (
// //     <div className="mb-16 relative">
// //       <h2 className="text-3xl font-bold text-white mb-8 text-center opacity-90">
// //         {type.charAt(0).toUpperCase() + type.slice(1)} Medals
// //       </h2>
// //       <div className="flex flex-wrap justify-center gap-12">
// //         {medals.map((medal, index) => (
// //           <div
// //             key={medal.id}
// //             className="relative"
// //             onTouchStart={() => handleTouchStart(medal.id)}
// //             onTouchEnd={handleTouchEnd}
// //             onMouseEnter={() => setTouchedMedal(medal.id)}
// //             onMouseLeave={() => setTouchedMedal(null)}
// //             style={{
// //               animation: `rotateFloat ${3 + index * 0.5}s ease-in-out infinite`,
// //               animationDelay: `${index * 0.2}s`
// //             }}
// //           >
// //             <div
// //               className={`w-28 h-28 rounded-full flex items-center justify-center transition-all duration-500
// //                 ${touchedMedal === medal.id ? 'scale-125 rotate-12' : 'scale-100 hover:scale-110'}`}
// //               style={{
// //                 background: `radial-gradient(circle at ${40 + index * 10}% ${30 + index * 5}%, ${color}, ${shadowColor})`,
// //                 boxShadow: `0 0 25px ${shadowColor}, inset 0 0 20px rgba(255,255,255,0.4)`,
// //               }}
// //             >
// //               <div className="w-20 h-20 rounded-full flex items-center justify-center transform rotate-45"
// //                 style={{
// //                   background: `linear-gradient(135deg, ${color}, ${shadowColor})`,
// //                   border: '3px solid rgba(255,255,255,0.3)',
// //                   boxShadow: 'inset 0 0 15px rgba(0,0,0,0.3)'
// //                 }}>
// //                 <span className="text-white font-bold text-xl transform -rotate-45">{medal.position}</span>
// //               </div>
// //             </div>
            
// //             <div
// //               className={`absolute top-full mt-6 p-5 rounded-xl transition-all duration-500 w-56
// //                 ${touchedMedal === medal.id ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-4 scale-95'}
// //                 z-20 backdrop-blur-xl`}
// //               style={{
// //                 background: 'rgba(255,255,255,0.1)',
// //                 borderLeft: `4px solid ${color}`,
// //                 boxShadow: `0 10px 30px rgba(0,0,0,0.2), inset 0 0 20px ${shadowColor}30`
// //               }}
// //             >
// //               <p className="text-white text-sm font-medium leading-relaxed">{medal.event}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className=" p-8 relative bg-slate-900">
// //       <div className="absolute inset-0 overflow-hidden">
// //         {[...Array(20)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="absolute rounded-full opacity-10"
// //             style={{
// //               width: `${Math.random() * 200 + 50}px`,
// //               height: `${Math.random() * 200 + 50}px`,
// //               background: 'white',
// //               top: `${Math.random() * 100}%`,
// //               left: `${Math.random() * 100}%`,
// //               animation: `floatBubble ${Math.random() * 10 + 10}s linear infinite`,
// //               animationDelay: `${Math.random() * 10}s`
// //             }}
// //           />
// //         ))}
// //       </div>

// //       <style jsx>{`
// //         @keyframes rotateFloat {
// //           0% { transform: translateY(0px) rotate(0deg); }
// //           25% { transform: translateY(-12px) rotate(3deg); }
// //           75% { transform: translateY(8px) rotate(-2deg); }
// //           100% { transform: translateY(0px) rotate(0deg); }
// //         }
// //         @keyframes floatBubble {
// //           0% { transform: translateY(100vh) scale(0); opacity: 0; }
// //           50% { opacity: 0.1; }
// //           100% { transform: translateY(-100px) scale(1); opacity: 0; }
// //         }
// //       `}</style>

// //       <div className="max-w-6xl mx-auto relative z-10">
// //         <h1 className="text-5xl font-bold text-center text-white mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
// //           OUR ACHIEVEMENTS
// //         </h1>

// //         <div className="space-y-12">
// //           <MedalRow
// //             type="gold"
// //             medals={medals.gold}
// //             color="#FFD700"
// //             shadowColor="#B8860B"
// //             rowIndex={0}
// //           />
// //           <MedalRow
// //             type="silver"
// //             medals={medals.silver}
// //             color="#E6E8FA"
// //             shadowColor="#A9A9A9"
// //             rowIndex={1}
// //           />
// //           <MedalRow
// //             type="bronze"
// //             medals={medals.bronze}
// //             color="#CD7F32"
// //             shadowColor="#8B4513"
// //             rowIndex={2}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MedalShowcase;


// import React, { useState } from 'react';

// const MedalShowcase = () => {
//   const [hoveredMedal, setHoveredMedal] = useState(null);

//   const medals = {
//     gold: [
//       { id: 'g1', event: 'Classical Dance Competition 2023', position: '1st' },
//       { id: 'g2', event: 'Music Band Showdown', position: '1st' },
//     ],
//     silver: [
//       { id: 's1', event: 'Photography Exhibition', position: '2nd' },
//       { id: 's2', event: 'Solo Singing Competition', position: '2nd' },
//       { id: 's3', event: 'Fashion Show', position: '2nd' },
//       { id: 's4', event: 'Short Film Festival', position: '2nd' },
//     ],
//     bronze: [
//       { id: 'b1', event: 'Debate Competition', position: '3rd' },
//       { id: 'b2', event: 'Art Installation', position: '3rd' },
//       { id: 'b3', event: 'Street Play', position: '3rd' },
//       { id: 'b4', event: 'Creative Writing', position: '3rd' },
//     ],
//   };

//   const MedalCard = ({ medal, color, shadowColor }) => (
//     <div
//       className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-md transition-transform transform
//         ${hoveredMedal === medal.id ? 'scale-110 shadow-2xl' : 'scale-100'}`}
//       style={{
//         background: `radial-gradient(circle, ${color} 0%, ${shadowColor} 70%)`,
//         boxShadow: hoveredMedal === medal.id ? `0 0 30px ${color}, 0 0 60px ${shadowColor}` : '',
//       }}
//       onMouseEnter={() => setHoveredMedal(medal.id)}
//       onMouseLeave={() => setHoveredMedal(null)}
//     >
//       <div
//         className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold"
//         style={{
//           background: `linear-gradient(145deg, ${shadowColor}, ${color})`,
//           boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)',
//         }}
//       >
//         {medal.position}
//       </div>
//       {hoveredMedal === medal.id && (
//         <div
//           className="absolute top-full mt-4 w-40 sm:w-48 p-3 sm:p-4 bg-white rounded-lg shadow-md text-center text-gray-800 text-xs sm:text-sm md:text-base transition-opacity duration-500"
//           style={{
//             background: 'rgba(255, 255, 255, 0.9)',
//             borderTop: `3px solid ${color}`,
//             opacity: 1,
//           }}
//         >
//           {medal.event}
//         </div>
//       )}
//     </div>
//   );

//   const MedalRow = ({ type, medals, color, shadowColor }) => (
//     <div className="mb-8 sm:mb-12">
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white mb-6 sm:mb-8">
//         {type.charAt(0).toUpperCase() + type.slice(1)} Medals
//       </h2>
//       <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
//         {medals.map((medal) => (
//           <MedalCard
//             key={medal.id}
//             medal={medal}
//             color={color}
//             shadowColor={shadowColor}
//           />
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen p-6 sm:p-8 relative bg-gray-900">
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full opacity-10"
//             style={{
//               width: `${Math.random() * 200 + 50}px`,
//               height: `${Math.random() * 200 + 50}px`,
//               background: 'white',
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `floatBubble ${Math.random() * 10 + 10}s linear infinite`,
//               animationDelay: `${Math.random() * 10}s`,
//             }}
//           />
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes floatBubble {
//           0% { transform: translateY(100vh) scale(0); opacity: 0; }
//           50% { opacity: 0.1; }
//           100% { transform: translateY(-100px) scale(1); opacity: 0; }
//         }
//       `}</style>

//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-gray-300 to-orange-500">
//           Our Achievements
//         </h1>

//         <MedalRow
//           type="gold"
//           medals={medals.gold}
//           color="#FFD700"
//           shadowColor="#B8860B"
//         />
//         <MedalRow
//           type="silver"
//           medals={medals.silver}
//           color="#E6E8FA"
//           shadowColor="#A9A9A9"
//         />
//         <MedalRow
//           type="bronze"
//           medals={medals.bronze}
//           color="#CD7F32"
//           shadowColor="#8B4513"
//         />
//       </div>
//     </div>
//   );
// };

// export default MedalShowcase;







import React, { useState } from 'react';

const MedalShowcase = () => {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  const medals = {
    gold: [
      { id: 'g1', event: 'Classical Dance Competition 2023', position: '1st' },
      { id: 'g2', event: 'Music Band Showdown', position: '1st' },
    ],
    silver: [
      { id: 's1', event: 'Photography Exhibition', position: '2nd' },
      { id: 's2', event: 'Solo Singing Competition', position: '2nd' },
      { id: 's3', event: 'Fashion Show', position: '2nd' },
      { id: 's4', event: 'Short Film Festival', position: '2nd' },
    ],
    bronze: [
      { id: 'b1', event: 'Debate Competition', position: '3rd' },
      { id: 'b2', event: 'Art Installation', position: '3rd' },
      { id: 'b3', event: 'Street Play', position: '3rd' },
      { id: 'b4', event: 'Creative Writing', position: '3rd' },
    ],
  };

  const MedalCard = ({ medal, color, shadowColor }) => (
    <div
      className={`relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center shadow-md transition-transform transform
        ${hoveredMedal === medal.id ? 'scale-110 shadow-2xl' : 'scale-100'}`}
      style={{
        background: `radial-gradient(circle, ${color} 0%, ${shadowColor} 70%)`,
        boxShadow: hoveredMedal === medal.id ? `0 0 30px ${color}, 0 0 60px ${shadowColor}` : '',
      }}
      onMouseEnter={() => setHoveredMedal(medal.id)}
      onMouseLeave={() => setHoveredMedal(null)}
    >
      <div
        className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white text-base xs:text-lg sm:text-xl md:text-2xl font-bold"
        style={{
          background: `linear-gradient(145deg, ${shadowColor}, ${color})`,
          boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        {medal.position}
      </div>
      {hoveredMedal === medal.id && (
        <div
          className="absolute top-full mt-4 w-40 xs:w-44 sm:w-48 p-3 xs:p-3.5 sm:p-4 bg-white rounded-lg shadow-md text-center text-gray-800 text-xs xs:text-sm sm:text-base transition-opacity duration-500"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            borderTop: `3px solid ${color}`,
            opacity: 1,
          }}
        >
          {medal.event}
        </div>
      )}
    </div>
  );

  const MedalRow = ({ type, medals, color, shadowColor }) => (
    <div className="mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white mb-6 sm:mb-8">
        {type.charAt(0).toUpperCase() + type.slice(1)} Medals
      </h2>
      <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8">
        {medals.map((medal) => (
          <MedalCard
            key={medal.id}
            medal={medal}
            color={color}
            shadowColor={shadowColor}
          />
        ))}
      </div>
    </div>
  );

  return (
<div className="min-h-screen p-4 xs:p-6 sm:p-8 relative bg-gradient-to-t from-gray-900 via-gray-950  to-black">
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

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-gray-300 to-orange-500">
          Our Achievements
        </h1>

        <MedalRow
          type="gold"
          medals={medals.gold}
          color="#FFD700"
          shadowColor="#B8860B"
        />
        <MedalRow
          type="silver"
          medals={medals.silver}
          color="#E6E8FA"
          shadowColor="#A9A9A9"
        />
        <MedalRow
          type="bronze"
          medals={medals.bronze}
          color="#CD7F32"
          shadowColor="#8B4513"
        />
      </div>
    </div>
  );
};

export default MedalShowcase;
