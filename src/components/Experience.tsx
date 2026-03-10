'use client';

import { useIntersection } from '@/hooks/useIntersection';

const experiences = [
  {
    role: 'Open Source & Personal Project Manager',
    company: 'Personal Projects / Open Source Contributions',
    companyUrl: 'https://github.com/SriRam2105-k',
    date: '2024 – Present',
    description: [
      'Designed and developed IT Company Work Tracker, a productivity management platform with built-in employee attendance and workflow tracking for IT teams.',
      'Created Vivasaya Udhaviyalar, a farmer assistance platform aimed at providing helpful resources and digital support for agricultural communities.',
      'Built Smart Task & Productivity Manager, a full-stack task management system enabling users to organize tasks, set priorities, and track productivity through a dashboard.',
      'Used Git and GitHub for version control, repository management, and project documentation while continuously improving skills in backend development and databases.',
    ],
  },
];

export default function Experience() {
  const [headingRef, headingVisible] = useIntersection<HTMLHeadingElement>(0.3);
  const [listRef, listVisible] = useIntersection<HTMLDivElement>(0.1);

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2
          ref={headingRef}
          className={`section-heading ${headingVisible ? 'animate-in' : 'pre-animate'}`}
        >
          <span className="section-number">02.</span> The Track Record
        </h2>

        <div ref={listRef} className="experience-list">
          {experiences.map((exp, i) => (
            <div
              key={exp.role + exp.company}
              className={`experience-item ${listVisible ? 'animate-in' : 'pre-animate'}`}
              style={{ transitionDelay: listVisible ? `${i * 150}ms` : '0ms' }}
            >
              <div className="exp-dot" />
              <div className="exp-header">
                <h3 className="exp-role">
                  {exp.role} <span className="exp-at">@</span>{' '}
                  <a href={exp.companyUrl} className="exp-company">
                    {exp.company}
                  </a>
                </h3>
                <div className="exp-date">{exp.date}</div>
              </div>
              <ul className="exp-description">
                {exp.description.map((bullet, j) => (
                  <li key={j} className="exp-bullet">
                    {bullet}
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
