'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isVisible].
 * isVisible becomes true once the element enters the viewport (and stays true).
 */
export function useIntersection<T extends Element>(
  threshold: number = 0.15
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
