import React from 'react';
import { Music, PartyPopper } from 'lucide-react';

const FloatingFacIcons = ({ 
  IconComponent = PartyPopper, 
  iconCount = 25, 
  minSize = 10, 
  maxSize = 20, 
  opacity = 0.1 
}) => {
  // Generate floating icon configurations
  const floatingIcons = [...Array(iconCount)].map((_, i) => ({
    id: i,
    size: Math.random() * (maxSize - minSize),
    delay: Math.random()*2, // Varied start times
    duration: Math.random() *15, // Longer, varied duration
    left: Math.random() * 400 , // Random horizontal position
    rotate: Math.random() * 360
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((icon) => (
        <div
          key={icon.id}
          className="absolute opacity-10 flex items-center justify-center"
          style={{
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            left: `${icon.left}%`,
            bottom: 0, // Start from the bottom
            animation: `floatUp ${icon.duration}s linear infinite`,
            animationDelay: `${icon.delay}s`,
          }}
        >
          <IconComponent 
            size={icon.size * 0.8} 
            className="text-white/50 rotate-[var(--rotate)]" 
            style={{
              '--rotate': `${icon.rotate}deg`
            }}
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes floatUp {
          0% { 
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          10% {
            opacity: ${opacity};
            transform: scale(1);
          }
          100% { 
            opacity: 0;
            transform: translateY(-100vh) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingFacIcons;