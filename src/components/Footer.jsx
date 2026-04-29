import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-surface">
      <div className="container-page py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-2xl text-primary-dark">Busy Bee Solutions</div>

        <div className="flex items-center gap-6 text-primary-dark">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Busy Bee Solutions on Facebook"
            className="hover:text-primary"
          >
            <Facebook className="h-5 w-5" fill="currentColor" strokeWidth={0} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Busy Bee Solutions on Instagram"
            className="hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        <a
          href="mailto:admin@busybeesolutionscorp.com"
          className="font-display text-xl md:text-2xl text-primary-dark hover:underline underline-offset-4"
        >
          admin@busybeesolutionscorp.com
        </a>
      </div>
    </footer>
  );
}
