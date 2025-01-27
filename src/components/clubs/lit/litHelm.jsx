import React, { useState, useEffect } from 'react';

const LitHelm = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [longPressedMember, setLongPressedMember] = useState(null);
  const longPressTimeout = React.useRef(null);

  const teamMembers = [
    {
      name: 'Satwik Srivastava',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/satwikJtsecyLit.jpg?updatedAt=1737979022463',
      color: 'bg-blue-100',
    },
    {
      name: 'Gunjit Jain',
      role: 'Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/litSecy.jpg?updatedAt=1737979024010',
      color: 'bg-purple-100',
    },
    {
      name: 'Laavnya Srivastava',
      role: 'Joint Secretary',
      avatar: 'https://ik.imagekit.io/mrityunjay/laavnyaJtsecyLit.jpg?updatedAt=1737979023108', 
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
    <div className="bg-gradient-to-t from-slate-900 via-gray-900 to-gray-800 flex items-center justify-center p-4 relative py-14">
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
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-200">Our Helm</h2>
          {/* <p className="text-gray-600 mt-2">Meet our Tech Guys</p> */}
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

export default LitHelm;