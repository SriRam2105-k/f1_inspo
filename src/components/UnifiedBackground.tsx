'use client';

import { useParallax } from '@/hooks/useParallax';

export default function UnifiedBackground() {
  const starsTransform = useParallax(0.05);
  const orbTransform1 = useParallax(0.12);
  const orbTransform2 = useParallax(-0.08);
  const orbTransform3 = useParallax(0.1);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#000c0b]">
      {/* Starfield */}
      <div 
        className="hero-stars opacity-40" 
        style={{ transform: starsTransform }} 
        aria-hidden="true" 
      />

      {/* Ambient Orbs */}
      <div className="absolute inset-0">
        <div 
          className="orb orb-blue" 
          style={{ transform: orbTransform1, top: '10%', left: '-10%' }} 
          aria-hidden="true" 
        />
        <div 
          className="orb orb-purple" 
          style={{ transform: orbTransform2, top: '40%', right: '-10%' }} 
          aria-hidden="true" 
        />
        <div 
          className="orb orb-cyan" 
          style={{ transform: orbTransform3, bottom: '10%', left: '20%' }} 
          aria-hidden="true" 
        />
      </div>

      {/* Global side glow vignette */}
      <div className="side-glow opacity-60" aria-hidden="true" />
    </div>
  );
}
