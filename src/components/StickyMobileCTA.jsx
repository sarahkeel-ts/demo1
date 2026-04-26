import { Phone, CalendarCheck } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-neutral-border bg-neutral-surface/95 backdrop-blur shadow-[0_-4px_16px_rgba(0,0,0,0.05)]"
      role="region"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href="tel:+18048378746"
          className="btn-primary !py-3 text-sm"
          aria-label="Call MH Septic now"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a href="/#contact" className="btn-accent !py-3 text-sm">
          <CalendarCheck className="h-4 w-4" />
          Schedule
        </a>
      </div>
    </div>
  );
}
