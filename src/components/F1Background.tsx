"use client";

import { useEffect, useState } from "react";

export default function F1Background() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Parallax effect: moves right as you scroll down
      setOffset(window.scrollY * 0.15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center opacity-[0.07]">
      <div 
        className="w-[150vw] min-w-[1200px] text-[var(--accent)] mt-[10vh]"
        style={{ transform: `translateX(${offset}px)` }}
      >
        <svg viewBox="0 0 800 240" className="w-full h-auto drop-shadow-[0_0_15px_var(--accent)]" xmlns="http://www.w3.org/2000/svg">
          <g fill="currentColor">
            {/* Front Wing */}
            <path d="M 710 155 L 750 155 Q 760 155 770 165 L 770 170 L 680 170 Z" />
            <path d="M 720 145 L 750 145 L 755 155 L 710 155 Z" />
            
            {/* Main Body */}
            <path d="M 770 170 
                     L 700 170 
                     L 700 150 
                     L 600 120 
                     L 500 112 
                     L 470 95 
                     C 440 65, 400 65, 370 95 
                     L 330 50 
                     C 270 50, 220 85, 170 105 
                     L 80 115 
                     L 80 170 Z" />
                     
            {/* Rear Wing Endplate */}
            <path d="M 50 60 L 90 60 L 90 150 L 50 150 Z" />
            {/* Rear Wing Elements */}
            <rect x="65" y="65" width="60" height="8" rx="2" />
            <rect x="75" y="80" width="45" height="8" rx="2" />

            {/* Wheels Base Background to hollow out the body */}
            <circle cx="180" cy="150" r="48" fill="var(--background)" />
            <circle cx="600" cy="150" r="48" fill="var(--background)" />

            {/* Tires */}
            <circle cx="180" cy="150" r="42" stroke="currentColor" strokeWidth="12" fill="transparent" />
            <circle cx="180" cy="150" r="18" fill="currentColor" />

            <circle cx="600" cy="150" r="42" stroke="currentColor" strokeWidth="12" fill="transparent" />
            <circle cx="600" cy="150" r="18" fill="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}
