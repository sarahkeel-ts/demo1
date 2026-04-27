import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section
      className="relative overflow-hidden bg-primary-dark text-white"
      aria-labelledby="not-found-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.18]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 30%, rgba(184,146,74,0.55) 0, transparent 55%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.4) 0, transparent 50%)',
        }}
      />
      <div className="relative container-page flex min-h-[70vh] flex-col justify-center py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow text-accent-light">Error 404</span>
          <h1
            id="not-found-heading"
            className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight"
          >
            That page is{' '}
            <span className="text-accent">off the map.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-white/85 leading-relaxed">
            The page you&rsquo;re looking for moved or never existed. Let&rsquo;s
            get you back on track.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/" className="btn-accent text-base">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
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
        </div>
      </div>
    </section>
  );
}
