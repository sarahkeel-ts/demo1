import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-neutral-bg" aria-labelledby="not-found-heading">
      <div className="container-page flex min-h-[70vh] flex-col justify-center py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-display italic text-lg text-primary/70">Error 404</p>
          <h1
            id="not-found-heading"
            className="mt-2 font-display text-5xl md:text-7xl text-primary-dark leading-tight"
          >
            That page wandered off.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-primary-dark/85 leading-relaxed">
            The page you&rsquo;re looking for moved or never existed. Let&rsquo;s
            get you back on track.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/" className="btn-primary">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:admin@busybeesolutionscorp.com"
              className="btn-outline"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
