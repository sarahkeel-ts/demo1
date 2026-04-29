import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-neutral-bg/95 backdrop-blur shadow-sm'
          : 'bg-neutral-bg'
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4 py-5 md:py-6">
        <Link to="/" className="flex items-center" aria-label="Busy Bee Solutions — home">
          <span className="font-display text-2xl md:text-3xl text-primary-dark tracking-tight">
            Busy Bee Solutions
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-lg text-primary-dark hover:underline underline-offset-4"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-8 !py-4 font-display !text-base">
            Book now
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-primary-dark hover:bg-neutral-surface"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-border bg-neutral-bg">
          <nav className="container-page py-4 flex flex-col gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-display text-lg text-primary-dark hover:bg-neutral-surface"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full font-display"
            >
              Book now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
