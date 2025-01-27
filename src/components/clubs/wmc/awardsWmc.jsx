import React, { useState } from 'react';

const medals = [
  { id: 1, src: '/gold.png', title: 'Unplugged Band', year: '', location: 'Effervescence, IIIT Allahabad' },
  { id: 2, src: '/gold.png', title: 'Band Competition', year: ' ', location: 'Anwesha, IIT Patna' },
  { id: 3, src: '/bronze.png', title: 'Axetacy Guitar solo', year: '', location: '' },
];

const WmcMedalShowcase = () => {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  return (
    <div className="w-full px-4 bg-slate-950 pb-20">
      <div className="flex justify-center items-center space-x-6 scrollbar-none">
        {medals.map((medal) => (
          <div
            key={medal.id}
            className="relative group w-32 h-32 flex-shrink-0"
            onMouseEnter={() => setHoveredMedal(medal.id)}
            onMouseLeave={() => setHoveredMedal(null)}
          >
            <img
              src={medal.src}
              alt={medal.title}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />

            {hoveredMedal === medal.id && (
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-200 text-black px-6 py-2 rounded-3xl border-4 border-purple-900 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100">
                <p className="font-bold text-lg">{medal.title}</p>
                <p className="text-sm mt-2">{medal.year}</p>
                <p className="text-sm">{medal.location}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden mt-8">
        {medals.map((medal) => (
          <div key={medal.id} className="mb-4 text-center">
            <img src={medal.src} alt={medal.title} className="w-32 h-32 mx-auto rounded-lg" />
            <div className="bg-gray-800 text-white p-4 rounded-lg mt-2">
              <p className="font-semibold">{medal.title}</p>
              <p>{medal.year}</p>
              <p>{medal.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WmcMedalShowcase;
