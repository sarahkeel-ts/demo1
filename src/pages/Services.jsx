import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ClipboardCheck,
  Home as HomeIcon,
  Wrench,
  Phone,
  Plus,
  Minus,
  PhoneCall,
  CalendarCheck,
  ClipboardList,
  FileText,
} from 'lucide-react';
import CTA from '../components/CTA.jsx';
import Reveal from '../components/Reveal.jsx';

const faq = [
  {
    q: 'Do I need a septic inspection when buying a home in Virginia?',
    a: 'Most lenders and buyers want one. A septic system is one of the most expensive components of a home, and a professional inspection protects you from inheriting a problem. We provide written reports suitable for buyers, sellers, and lenders.',
  },
  {
    q: 'What’s the difference between a regular and AOSS inspection?',
    a: 'A standard inspection evaluates the tank, distribution box, and drain field. AOSS (Alternative Onsite Sewage Systems) include additional components like pumps, alarms, and aerators that require licensed operator inspection on a regular schedule. We are licensed to inspect both.',
  },
  {
    q: 'How long does an inspection take?',
    a: 'Most inspections take 1–2 hours on site, depending on system size and access. Real estate inspections with pumpout typically take a bit longer. You’ll receive your written report shortly after the visit.',
  },
  {
    q: 'Will you also pump my tank?',
    a: 'Our Real Estate Inspection package includes a pumpout. For standalone pumpouts during AOSS or repair visits, we can coordinate scope when we schedule.',
  },
  {
    q: 'Do you provide written reports for lenders and real estate transactions?',
    a: 'Yes. Every real estate inspection includes a closing-ready written report with photo documentation that meets VDH standards and is suitable for lenders, buyers, and sellers.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We are based in Cumberland County and travel up to ~1.5 hours, covering Cumberland, Powhatan, Goochland, Chesterfield, Midlothian, Fluvanna, Louisa, Albemarle, Greene, Buckingham, Amelia, Prince Edward, and Charlottesville. If you’re close, give us a call.',
  },
];

export default function Services() {
  return (
    <>
      <PageHero />

      <ServiceDetail
        id="aoss"
        eyebrow="Inspection & Maintenance"
        icon={ClipboardCheck}
        title="Septic Inspection & Maintenance (AOSS)"
        price="$350 – $450"
        intro={[
          'A complete evaluation of your septic system, designed to keep AOSS components running reliably and to give homeowners peace of mind.',
          'We deliver a clear, photo-documented written report that outlines what we observed and what (if anything) actually needs attention.',
        ]}
        included={[
          'Complete tank evaluation',
          'Distribution box inspection',
          'Drain field evaluation',
          'AOSS component check (pumps, alarms, controls)',
          'VDH-compliant written report',
          'Maintenance recommendations',
        ]}
        bestFor="Homeowners with AOSS systems, annual maintenance, peace-of-mind inspections."
        cta="Schedule This Service"
        photo={{
          // TODO: replace with MH Septic owned photo (technician inspecting AOSS controls)
          src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
          alt: 'Inspector evaluating septic tank components on a rural property.',
        }}
      />

      <ServiceDetail
        id="real-estate"
        eyebrow="Real Estate"
        icon={HomeIcon}
        title="Real Estate Inspection with Pumpout"
        price="$900"
        flipped
        featured
        intro={[
          'Under contract? We can get you on the calendar fast and deliver a closing-ready report — inspection plus pumpout in a single visit.',
          'Designed for buyers, sellers, lenders, and real estate professionals who need a thorough, defensible evaluation on a tight timeline.',
        ]}
        included={[
          'Full septic inspection (everything in AOSS)',
          'Tank pumpout included',
          'Real-estate-grade written report (suitable for buyers, sellers, and lenders)',
          'Photo documentation',
          'Quick turnaround for closing timelines',
        ]}
        bestFor="Home buyers in due diligence, sellers preparing to list, real estate agents who need reliable referrals."
        cta="Schedule a Real Estate Inspection"
        photo={{
          // TODO: replace with MH Septic owned photo (truck on residential driveway with sign)
          src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
          alt: 'Service truck arriving at a residential property for a real estate inspection.',
        }}
        callout={{
          title: 'Real estate agents — we love working with you.',
          body: 'Call to discuss preferred-vendor scheduling and dedicated communication on your closings.',
        }}
      />

      <ServiceDetail
        id="repair"
        eyebrow="Troubleshooting & Repair"
        icon={Wrench}
        title="Residential Septic Repair"
        price="Custom Quote"
        intro={[
          'From minor fixes to full system troubleshooting, we diagnose the actual issue before recommending repairs. No upselling. No pressure.',
          'If your system is showing signs of trouble, we will tell you what we find — and the simplest path forward.',
        ]}
        included={[
          'Slow drains, backups, and odors',
          'Drain field saturation',
          'AOSS pump or alarm failures',
          'Distribution box issues',
          'Tank baffles and access risers',
        ]}
        includedHeading="Common Issues We Solve"
        bestFor="Homeowners experiencing problems, system troubleshooting, post-inspection repairs."
        cta="Get a Repair Quote"
        photo={{
          // TODO: replace with MH Septic owned photo (technician with tools at distribution box)
          src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
          alt: 'Septic technician working at a distribution box during a repair.',
        }}
      />

      <ProcessSection />
      <FAQSection items={faq} />
      <CTA />
    </>
  );
}

function PageHero() {
  return (
    <section
      className="relative overflow-hidden bg-primary-dark text-white"
      aria-labelledby="services-page-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.18]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 30%, rgba(184,146,74,0.55) 0, transparent 55%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.4) 0, transparent 50%)',
        }}
      />
      <div className="relative container-page py-20 md:py-28">
        <nav aria-label="Breadcrumb" className="text-sm text-white/70">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-accent-light">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-accent-light font-semibold">Services</li>
          </ol>
        </nav>
        <h1
          id="services-page-heading"
          className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Our <span className="text-accent">Services</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed">
          Professional septic inspections, AOSS maintenance, and repairs — done
          right and reported clearly.
        </p>
      </div>
    </section>
  );
}

function ServiceDetail({
  id,
  eyebrow,
  icon: Icon,
  title,
  price,
  intro,
  included,
  includedHeading = "What's Included",
  bestFor,
  cta,
  photo,
  flipped = false,
  featured = false,
  callout,
}) {
  return (
    <section
      id={id}
      className={`section ${featured ? 'bg-primary/5' : 'bg-neutral-surface'} scroll-mt-24`}
      aria-labelledby={`${id}-heading`}
    >
      <div
        className={`container-page grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center ${
          flipped ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-border bg-primary/5">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {featured && (
              <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                Best for Closings
              </span>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex items-center gap-2 text-accent">
            <Icon className="h-5 w-5" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2
            id={`${id}-heading`}
            className="mt-3 text-3xl md:text-5xl font-extrabold text-primary leading-tight"
          >
            {title}
          </h2>
          <span className="mt-4 inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">
            {price}
          </span>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-neutral-muted">
            {intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-neutral-border bg-neutral-bg p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {includedHeading}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-neutral-text">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-sm text-neutral-muted">
            <strong className="text-primary">Best for:</strong> {bestFor}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="/#contact" className="btn-accent">{cta}</a>
            <a
              href="tel:+18048378746"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            >
              <Phone className="h-4 w-4" /> (804) 837-8746
            </a>
          </div>

          {callout && (
            <div className="mt-8 rounded-2xl border border-accent/40 bg-accent/10 p-5">
              <p className="font-bold text-primary">{callout.title}</p>
              <p className="mt-1 text-sm text-neutral-muted">{callout.body}</p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      icon: PhoneCall,
      title: 'Call or Submit Request',
      body: 'We respond within one business day.',
    },
    {
      icon: CalendarCheck,
      title: 'Schedule Your Inspection',
      body: 'Often within 3–7 days.',
    },
    {
      icon: ClipboardList,
      title: 'On-Site Service',
      body: 'Thorough, efficient, no-mess.',
    },
    {
      icon: FileText,
      title: 'Clear Written Report',
      body: 'Plain-English findings + honest recommendations.',
    },
  ];

  return (
    <section className="section bg-neutral-bg" aria-labelledby="process-heading">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">How It Works</span>
            <h2
              id="process-heading"
              className="mt-3 text-3xl md:text-5xl font-extrabold text-primary leading-tight"
            >
              From request to written report, in four steps.
            </h2>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100}>
              <li className="relative h-full rounded-2xl border border-neutral-border bg-neutral-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary-dark font-display font-extrabold">
                    {i + 1}
                  </span>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-neutral-muted leading-relaxed">{body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FAQSection({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section bg-neutral-surface" aria-labelledby="faq-heading">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">FAQ</span>
            <h2
              id="faq-heading"
              className="mt-3 text-3xl md:text-5xl font-extrabold text-primary leading-tight"
            >
              Common questions, answered.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 mx-auto max-w-3xl divide-y divide-neutral-border rounded-2xl border border-neutral-border bg-neutral-bg">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                >
                  <span className="text-base md:text-lg font-bold text-primary">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-accent" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-primary" />
                  )}
                </button>
                {isOpen && (
                  <div id={`faq-${i}`} className="px-5 pb-5 text-neutral-muted leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
