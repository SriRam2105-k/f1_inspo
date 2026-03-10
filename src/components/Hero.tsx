'use client';

import Link from 'next/link';
import { useParallax } from '@/hooks/useParallax';

export default function Hero() {
  const bgTransform = useParallax(0.4);
  const midTransform = useParallax(0.2);
  const fgTransform = useParallax(0.08);

  return (
    <section id="hero" className="hero-section">
      {/* ── Background: F1 Checkered Pattern ── */}
      <div className="absolute inset-0 checkered-pattern" aria-hidden="true" />

      {/* ── Layer 2: foreground content ── */}
      <div className="hero-content">
        <div className="hero-badge animate-fade-up" style={{ animationDelay: '0ms' }}>
          <span className="badge-dot" />
          Lights out and away we go 🏁
        </div>

        <h1 className="hero-title animate-fade-up" style={{ animationDelay: '120ms' }}>
          Sri Ram K
          <br />
          <span className="hero-title-gradient">Full Stack Developer in Progress</span>
        </h1>

        <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '240ms' }}>
          Backend • Databases • AI Tools
        </p>

        <div className="hero-cta animate-fade-up" style={{ animationDelay: '360ms' }}>
          <Link href="#projects" className="btn-primary">
            <span style={{ display: 'inline-block', transform: 'skewX(12deg)' }}>View Grid</span>
          </Link>
          <Link href="#contact" className="btn-outline">
            <span style={{ display: 'inline-block', transform: 'skewX(12deg)' }}>Contact Pit</span>
          </Link>
        </div>
      </div>

    </section>
  );
}
