import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-normal tracking-wider" style={{ fontFamily: 'var(--font-racing)', fontStyle: 'italic', textTransform: 'uppercase' }}>
          Portfolio<span className="text-accent text-3xl leading-none">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
          <Link href="#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
