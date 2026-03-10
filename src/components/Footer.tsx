export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-4 text-sm text-foreground/40">
        <p style={{ fontFamily: 'var(--font-racing)', fontSize: '1rem', color: 'var(--accent)', fontStyle: 'italic', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} PORTFOLIO. FINISH LINE
        </p>
        <div className="flex gap-6 mb-2">
          <a href="https://github.com/SriRam2105-k" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sri-ram-275838375" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
        </div>
        <p>Built for high performance with Next.js</p>
      </div>
    </footer>
  );
}
