import React, { useState } from 'react';

const QuizHelm = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: 'Mehul Goyal',
      role: 'Joint Secretary',
      avatar: '/PP.jpg',
      color: 'bg-blue-100'
    },
    {
      name: 'Mehul Goyal',
      role: 'Secretary',
      avatar: '/PP.jpg',
      color: 'bg-purple-100'
    },
    {
      name: 'Nishant',
      role: 'Joint Secretary',
      avatar: '/PP.jpg',
      color: 'bg-pink-100'
    }
  ];

  return (
    <>
    <div className="bg-gradient-to-t from-slate-900 via-slate-950 to-gray-800 flex items-center justify-center pb-20 pt-10 h-1/4 relative z-100">
      <div className="relative">
        <div className="text-center mb-8">
          <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 pt-8 pb-4 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-5xl">Our Helm</h2>
          {/* <p className="text-gray-600 mt-2">Meet our Tech Guys</p> */}
        </div>

        <div className="flex justify-center items-center -space-x-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="relative group"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              style={{ zIndex: hoveredMember === index ? 10 : 1 }}
            >
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg transform transition-all duration-300 ${
                hoveredMember === index
                  ? 'opacity-100 -translate-y-2'
                  : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                <p className="text-sm font-semibold whitespace-nowrap">{member.role}</p>
              
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
              </div>

             
              <div className={`relative w-48 h-48 rounded-full overflow-hidden transform transition-all duration-300 ${
                hoveredMember === index ? 'scale-110' : 'scale-100'
              }`}>
                
                <div className={`absolute inset-0 ${member.color} transition-all duration-300 ${
                  hoveredMember === index ? 'scale-105' : 'scale-100'
                }`}></div>

                
                <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                  
                  <div className="w-full h-full relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    <div className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${
                      hoveredMember === index ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                </div>

                
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
    </>
  );
};

export default QuizHelm;