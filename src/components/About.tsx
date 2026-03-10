'use client';

import { useParallax } from '@/hooks/useParallax';
import { useIntersection } from '@/hooks/useIntersection';
import Image from 'next/image';

export default function About() {
  const bgTransform = useParallax(0.12);
  const [sectionRef, sectionVisible] = useIntersection<HTMLDivElement>(0.1);
  const [gridRef, gridVisible] = useIntersection<HTMLUListElement>(0.2);

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript',
    'Next.js', 'Python', 'Node.js', 'MySQL',
    'PostgreSQL', 'Git', 'GitHub', 'Markdown',
  ];

  return (
    <section id="about" className="about-section">
      <div
        ref={sectionRef}
        className={`section-container about-grid ${sectionVisible ? 'animate-in' : 'pre-animate'}`}
      >
        {/* Text side */}
        <div className="about-text">
          <h2 className="section-heading">
            <span className="section-number">01.</span> Behind the Wheel
          </h2>
          <p className="about-body">
            Hello! My name is <strong>Sri Ram K</strong>. Curious about how the internet works since childhood, I started exploring technology and gradually stepped into development.
          </p>
          <p className="about-body">
            My goal is to become a strong Full Stack Developer, and I&apos;m currently focusing on mastering backend systems and database architecture while building real projects.
          </p>

          <p className="about-body">Technologies I&apos;ve been working with recently:</p>
          <ul
            ref={gridRef}
            className="skills-grid"
          >
            {skills.map((skill, i) => (
              <li
                key={skill}
                className={`skill-item ${gridVisible ? 'animate-in' : 'pre-animate'}`}
                style={{ transitionDelay: gridVisible ? `${i * 60}ms` : '0ms' }}
              >
                <span className="skill-arrow" aria-hidden="true">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Image side */}
        <div className="about-image-wrap">
          <div className="about-image-inner">
            <Image
              src={`${process.env.NODE_ENV === 'production' ? '/f1_inspo' : ''}/me professional.jpeg`}
              alt="Sri Ram K"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 340px"
            />
          </div>
          <div className="about-image-shadow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
