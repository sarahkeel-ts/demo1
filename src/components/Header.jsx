import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const PHONE_DISPLAY = '(804) 837-8746';
const PHONE_HREF = 'tel:+18048378746';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Service Area', to: '/#service-area' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-neutral-surface/95 backdrop-blur shadow-sm border-b border-neutral-border'
          : 'bg-neutral-surface border-b border-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3" aria-label="MH Septic — home">
          <img
            src="/logo.png"
            alt="MH Septic — AOSS Certified"
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
          <div className="leading-none">
            <div className="font-display font-extrabold text-primary text-lg tracking-tight">
              MH SEPTIC
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
              Veteran Owned
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive && item.to === '/services'
                    ? 'text-accent'
                    : 'text-primary hover:text-accent'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <a href="/#contact" className="btn-accent !py-2.5 !px-5 text-sm">
            Schedule Inspection
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-primary hover:bg-neutral-border/50"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-neutral-border bg-neutral-surface">
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-base font-medium text-primary hover:bg-neutral-border/40"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 flex items-center gap-2 px-3 py-3 text-base font-semibold text-primary"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a href="/#contact" className="btn-accent mt-2 w-full">
              Schedule Inspection
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
