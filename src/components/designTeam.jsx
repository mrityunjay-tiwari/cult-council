import React, { useState } from 'react';

const DesignTeamDisplay = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: 'Mrityunjay Tiwari',
      role: 'Tech Head',
      avatar: 'PP.jpg',
      color: 'bg-blue-100'
    },
    {
      name: 'Ansh Yadav',
      role: 'Tech Manager',
      avatar: 'PP.jpg',
      color: 'bg-purple-100'
    },
    {
      name: 'Nishant',
      role: 'Teach Manager',
      avatar: 'PP.jpg',
      color: 'bg-pink-100'
    }
  ];

  return (
    <div className=" bg-slate-900 flex items-center justify-center p-4">
        
      <div className="relative">
        
        {/* Team Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-50">Design Team</h2>
          <p className="text-gray-600 mt-2">Meet our Designers</p>
        </div>

        {/* Overlapping Circles Container */}
        <div className="flex justify-center items-center -space-x-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="relative group"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              style={{ zIndex: hoveredMember === index ? 10 : 1 }}
            >
              {/* Role Popup */}
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg transform transition-all duration-300 ${
                hoveredMember === index
                  ? 'opacity-100 -translate-y-2'
                  : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                <p className="text-sm font-semibold whitespace-nowrap">{member.role}</p>
                {/* Triangle */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
              </div>

              {/* Circle Frame */}
              <div className={`relative w-48 h-48 rounded-full overflow-hidden transform transition-all duration-300 ${
                hoveredMember === index ? 'scale-110' : 'scale-100'
              }`}>
                {/* Colored Background Circle */}
                <div className={`absolute inset-0 ${member.color} transition-all duration-300 ${
                  hoveredMember === index ? 'scale-105' : 'scale-100'
                }`}></div>

                {/* White Inner Circle */}
                <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                  {/* Image Container */}
                  <div className="w-full h-full relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${
                      hoveredMember === index ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                </div>

                {/* Name Label */}
                <div className={`absolute bottom-6 left-0 right-0 text-center transition-all duration-300 ${
                  hoveredMember === index ? 'transform -translate-y-1' : ''
                }`}>
                  <div className="bg-white bg-opacity-90 mx-4 py-1 px-3 rounded-full">
                    <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignTeamDisplay;