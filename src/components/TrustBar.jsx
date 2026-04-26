import { ShieldCheck, BadgeCheck, Award, Anchor, MapPin } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'VDH Compliant' },
  { icon: BadgeCheck, label: 'Licensed VA Onsite Sewage Operator' },
  { icon: Award, label: 'AOSS Certified' },
  { icon: Anchor, label: 'Veteran Owned' },
  { icon: MapPin, label: 'Central VA Local' },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Credentials"
      className="border-y border-neutral-border bg-neutral-surface"
    >
      <div className="container-page py-5">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <Icon className="h-4 w-4 shrink-0 text-accent" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
