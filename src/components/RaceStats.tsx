'use client';

import { useIntersection } from '@/hooks/useIntersection';

const stats = [
  { label: 'Year Exploring Software Development', value: '1+' },
  { label: 'Full Stack & Personal Projects', value: '3+' },
  { label: 'Lines of Code and Counting', value: '12,000+' },
  { label: 'Cups of Tea Fueling Debugging', value: '300+' },
];

export default function RaceStats() {
  const [gridRef, gridVisible] = useIntersection<HTMLDivElement>(0.2);

  return (
    <section id="stats" className="stats-section">
      <div className="section-container">
        <div ref={gridRef} className="stats-grid">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item ${gridVisible ? 'animate-in' : 'pre-animate'}`}
              style={{ transitionDelay: gridVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
