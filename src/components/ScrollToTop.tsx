'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Prevent the browser from restoring the scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior
      });
    };

    // Try immediately
    scrollToTop();

    // Try again after a short delay to survive hydration/browser restoration
    const timer = setTimeout(scrollToTop, 10);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
