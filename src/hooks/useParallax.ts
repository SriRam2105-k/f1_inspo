'use client';

import { useScrollY } from '@/components/ParallaxProvider';

/**
 * Returns a CSS translateY string that moves at `speed` times the scroll speed.
 * speed = 0   → no movement (pinned)
 * speed = 0.5 → moves at half the scroll speed (classic parallax)
 * speed = -0.3 → moves in the opposite direction
 */
export function useParallax(speed: number = 0.3): string {
  const scrollY = useScrollY();
  const offset = scrollY * speed;
  return `translateY(${offset}px)`;
}
