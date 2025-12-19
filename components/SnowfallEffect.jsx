'use client';

import React, { useEffect, useState } from 'react';

const SnowfallEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Increased count for a full Antarctic feel
    const flakes = Array.from({ length: 100 }, (_, i) => {
      const size = 1 + Math.random() * 5;
      return {
        id: i,
        left: Math.random() * 100,
        duration: 4 + Math.random() * 8, // Fast fall
        delay: Math.random() * -10, // Start mid-air
        size: size,
        opacity: 0.4 + Math.random() * 0.5,
        // Individual wind: some go left (negative), some go right (positive)
        windDrift: (Math.random() - 0.5) * 200, 
        // Sway width
        sway: 20 + Math.random() * 40,
      };
    });
    setSnowflakes(flakes);
  }, []);

  if (!isClient) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          style={{
            position: 'absolute',
            top: '-10px',
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: flake.opacity,
            // translate3d handles the "tail-free" smooth movement
            animation: `snowfall-clean ${flake.duration}s linear ${flake.delay}s infinite`,
            '--drift': `${flake.windDrift}px`,
            '--sway': `${flake.sway}px`,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes snowfall-clean {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          25% {
            /* Slight horizontal sway */
            transform: translate3d(calc(var(--sway) * 1), 25vh, 0) rotate(90deg);
          }
          50% {
            /* Moving towards the main wind drift direction */
            transform: translate3d(calc(var(--drift) * 0.5), 50vh, 0) rotate(180deg);
          }
          75% {
            /* Swaying back slightly while drifting */
            transform: translate3d(calc(var(--drift) * 0.75 - var(--sway)), 75vh, 0) rotate(270deg);
          }
          100% {
            /* End position with full drift */
            transform: translate3d(var(--drift), 105vh, 0) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SnowfallEffect;