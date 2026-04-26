import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, BadgeCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-primary-dark text-white"
      aria-labelledby="hero-heading"
    >
      {/* TODO: replace with MH Septic owned photo (truck on a Central VA property, or owner on site) */}
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=70"
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark/95 to-primary/85" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0, transparent 60%), radial-gradient(circle at 80% 0%, rgba(184,146,74,0.6) 0, transparent 50%)',
        }}
      />

      <div className="relative container-page flex min-h-[80vh] md:min-h-screen flex-col justify-center py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow text-accent-light">
            Central Virginia • Veteran Owned
          </span>
          <h1
            id="hero-heading"
            className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Septic Inspections You Can Trust.{' '}
            <span className="text-accent">Veteran-Owned, VDH Compliant.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed">
            Licensed AOSS inspections, real estate inspections, and repairs across
            Central Virginia. Honest reports, no upsells, fast scheduling.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-accent text-base">
              Schedule Inspection
            </a>
            <Link to="/services" className="btn-ghost text-base">
              View Services
            </Link>
            <a
              href="tel:+18048378746"
              className="flex items-center gap-2 px-2 py-3 text-base font-semibold text-white hover:text-accent-light"
            >
              <Phone className="h-4 w-4" />
              (804) 837-8746
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent-light" /> VDH Compliant
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-accent-light" /> Licensed Operator
            </li>
            <li className="flex items-center gap-2">
              <Award className="h-4 w-4 text-accent-light" /> Veteran Owned
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
