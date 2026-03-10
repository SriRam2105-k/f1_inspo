'use client';

import Link from 'next/link';
import { useParallax } from '@/hooks/useParallax';
import { useIntersection } from '@/hooks/useIntersection';

const projects = [
  {
    title: 'IT Company Work Tracker',
    description:
      'A productivity and workflow management system designed for IT teams to track daily work, monitor employee productivity, and manage attendance within a single platform.',
    tags: ['Node.js', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://github.com/SriRam2105-k',
  },
  {
    title: 'Vivasaya Udhaviyalar',
    description:
      'A government-focused digital platform designed to support farmers by providing helpful resources, information, and assistance for agricultural activities.',
    tags: ['Node.js', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://github.com/SriRam2105-k',
  },
  {
    title: 'Smart Task & Productivity Manager',
    description:
      'A full-stack productivity management application designed to help individuals and teams organize tasks, track progress, and improve workflow efficiency.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js'],
    link: 'https://github.com/SriRam2105-k',
  },
];

export default function Projects() {
  const bgTransform = useParallax(0.08);
  const [headingRef, headingVisible] = useIntersection<HTMLHeadingElement>(0.3);
  const [gridRef, gridVisible] = useIntersection<HTMLDivElement>(0.1);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2
          ref={headingRef}
          className={`section-heading ${headingVisible ? 'animate-in' : 'pre-animate'}`}
        >
          <span className="section-number">04.</span> The Grid
        </h2>

        <div ref={gridRef} className="projects-grid">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`project-card ${gridVisible ? 'animate-in' : 'pre-animate'}`}
              style={{ transitionDelay: gridVisible ? `${i * 120}ms` : '0ms' }}
            >
              {/* card glow on hover */}
              <div className="card-glow" aria-hidden="true" />

              <div className="card-inner">
                {/* top icon row */}
                <div className="card-icon-row" aria-hidden="true">
                  <svg className="folder-icon" width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                  </svg>
                </div>

                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>

                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <Link href={project.link} className="card-link">
                  View Project
                  <svg className="card-link-icon" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
