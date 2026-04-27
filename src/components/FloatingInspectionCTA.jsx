import { MessageSquare } from 'lucide-react';

export default function FloatingInspectionCTA() {
  const smsHref = "sms:8048378746?&body=Hi, I'd like to request a septic inspection at...";

  return (
    <a
      href={smsHref}
      className="md:hidden fixed right-4 bottom-20 z-40 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-primary-dark shadow-lg shadow-black/15 ring-1 ring-black/5 hover:bg-accent-light active:translate-y-0.5 transition-all"
      aria-label="Request a septic inspection by text message"
    >
      <MessageSquare className="h-4 w-4" aria-hidden="true" />
      Request an Inspection
    </a>
  );
}
