'use client';

import React, { useEffect, useState } from 'react';

const SantaAnimation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '15%',
        left: '-200px',
        zIndex: 999,
        pointerEvents: 'none',
        animation: 'santa-ride 12s linear ',
        animationIterationCount: 4,
      }}
    >
      {/* Santa Image */}
      <img
        src="/Pngtreesanta.png"
        alt="Santa Claus"
        style={{
          width: '150px',
          height: '100px',
          objectFit: 'contain',
        }}
      />

      <style jsx global>{`
        @keyframes santa-ride {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          25% {
            transform: translateX(25vw) translateY(-20px);
          }
          50% {
            transform: translateX(50vw) translateY(20px);
          }
          75% {
            transform: translateX(75vw) translateY(-15px);
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 400px)) translateY(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SantaAnimation;
