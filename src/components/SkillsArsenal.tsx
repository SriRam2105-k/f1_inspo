'use client';

import { useIntersection } from '@/hooks/useIntersection';

const skillCategories = [
  {
    title: 'Frontend Engine',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'Responsive Design'],
  },
  {
    title: 'Backend Powerunit',
    skills: ['Python', 'Node.js', 'C', 'MySQL', 'PostgreSQL', 'Database Systems'],
  },
  {
    title: 'Aero & Tools',
    skills: [
      'Git',
      'GitHub',
      'Google AI Studio',
      'Prompt Engineering',
      'AI Assisted Dev',
      'Pixlr (AI Editing)',
      'Markdown',
    ],
  },
];

export default function SkillsArsenal() {
  const [headingRef, headingVisible] = useIntersection<HTMLHeadingElement>(0.3);
  const [gridRef, gridVisible] = useIntersection<HTMLDivElement>(0.1);

  return (
    <section id="arsenal" className="skills-arsenal-section">
      <div className="section-container">
        <h2
          ref={headingRef}
          className={`section-heading ${headingVisible ? 'animate-in' : 'pre-animate'}`}
        >
          <span className="section-number">03.</span> Technical Arsenal
        </h2>

        <div ref={gridRef} className="arsenal-grid">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className={`arsenal-card ${gridVisible ? 'animate-in' : 'pre-animate'}`}
              style={{ transitionDelay: gridVisible ? `${i * 100}ms` : '0ms' }}
            >
              <h3 className="arsenal-card-title">
                <span className="skill-arrow" aria-hidden="true">▹</span>
                {category.title}
              </h3>
              <ul className="arsenal-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="arsenal-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
