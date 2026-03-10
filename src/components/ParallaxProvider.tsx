'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface ParallaxContextValue {
  scrollY: number;
}

const ParallaxContext = createContext<ParallaxContextValue>({ scrollY: 0 });

export function useScrollY() {
  return useContext(ParallaxContext).scrollY;
}

export default function ParallaxProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ParallaxContext.Provider value={{ scrollY }}>
      {children}
    </ParallaxContext.Provider>
  );
}
