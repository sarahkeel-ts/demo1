import { useState } from 'react';
import { X } from 'lucide-react';

export default function PreviewBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="bg-yellow-200 text-primary-dark text-sm">
      <div className="container-page flex items-center justify-between gap-4 py-2">
        <p className="font-medium">
          <span aria-hidden="true">🚧 </span>
          Preview design — not the live site. Built for MH Septic as a pitch concept.
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded p-1 hover:bg-yellow-300/70"
          aria-label="Dismiss preview banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
