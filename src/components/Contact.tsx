'use client';

import { useParallax } from '@/hooks/useParallax';
import { useIntersection } from '@/hooks/useIntersection';

export default function Contact() {
  const orbTransform = useParallax(0.18);
  const [contentRef, contentVisible] = useIntersection<HTMLDivElement>(0.2);

  return (
    <section id="contact" className="contact-section">
      <div
        ref={contentRef}
        className={`section-container contact-inner ${contentVisible ? 'animate-in' : 'pre-animate'}`}
      >
        <p className="contact-eyebrow">05. What&apos;s Next?</p>
        <h2 className="contact-heading">Join the Race</h2>
        <p className="contact-body">
          Although I&apos;m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I&apos;ll try my best to get back to you!
        </p>
        <div className="flex justify-center items-center gap-6 mt-10">
          <a
            href="mailto:sriramit2105@gmail.com"
            className="flex items-center justify-center w-14 h-14 border-2 border-white/20 rounded bg-white/5 text-silver hover:border-accent hover:text-accent transition-all duration-300 transform -skew-x-12 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(3,191,181,0.4)] group"
            aria-label="Email"
          >
            <svg className="w-6 h-6 transform skew-x-12 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 border-2 border-white/20 rounded bg-white/5 text-silver hover:border-accent hover:text-accent transition-all duration-300 transform -skew-x-12 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(3,191,181,0.4)] group"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6 transform skew-x-12 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 border-2 border-white/20 rounded bg-white/5 text-silver hover:border-accent hover:text-accent transition-all duration-300 transform -skew-x-12 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(3,191,181,0.4)] group"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 transform skew-x-12 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/sriram_xyz?igsh=MXVwcnlvMnBqNTFneA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 border-2 border-white/20 rounded bg-white/5 text-silver hover:border-accent hover:text-accent transition-all duration-300 transform -skew-x-12 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(3,191,181,0.4)] group"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 transform skew-x-12 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.554-.79.306-1.461.716-2.128 1.383s-1.077 1.338-1.383 2.128c-.296.763-.497 1.634-.554 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.554 2.911.306.79.716 1.461 1.383 2.128s1.338 1.077 2.128 1.383c.763.296 1.634.497 2.911.554 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.554.79-.306 1.461-.716 2.128-1.383s1.077-1.338 1.383-2.128c.296-.763.497-1.634.554-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.554-2.911-.306-.79-.716-1.461-1.383-2.128s-1.338-1.077-2.128-1.383c-.763-.296-1.634-.497-2.911-.554-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44-1.44-.645-1.44-1.44.644-1.44 1.44-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
