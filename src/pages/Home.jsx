import { Link } from 'react-router-dom';
import {
  ClipboardCheck,
  Home as HomeIcon,
  Wrench,
  ShieldCheck,
  Anchor,
  Clock,
  FileText,
  Handshake,
  BadgeCheck,
  ArrowRight,
} from 'lucide-react';
import Hero from '../components/Hero.jsx';
import TrustBar from '../components/TrustBar.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CTA from '../components/CTA.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Reviews from '../components/Reviews.jsx';
import VirginiaMap from '../components/VirginiaMap.jsx';

const counties = [
  'Cumberland',
  'Powhatan',
  'Goochland',
  'Chesterfield',
  'Midlothian',
  'Fluvanna',
  'Louisa',
  'Albemarle',
  'Greene',
  'Buckingham',
  'Amelia',
  'Prince Edward',
  'Charlottesville',
];

const whyItems = [
  {
    icon: BadgeCheck,
    title: 'Licensed & Experienced',
    body: 'Licensed Virginia Onsite Sewage System Operator with AOSS specialization.',
  },
  {
    icon: Anchor,
    title: 'Veteran-Owned',
    body: '4 years active duty in the U.S. Navy aboard USS Harry S. Truman (CVN-75).',
  },
  {
    icon: Clock,
    title: 'Fast Scheduling',
    body: 'We respond within one business day and often book within a week.',
  },
  {
    icon: FileText,
    title: 'Plain-English Reports',
    body: 'Written, photo-documented findings any homeowner or buyer can understand.',
  },
  {
    icon: Handshake,
    title: 'Honest Recommendations',
    body: 'No upselling. We tell you what is actually needed — and what can wait.',
  },
  {
    icon: ShieldCheck,
    title: 'VDH Compliant',
    body: 'Reports built to meet Virginia Department of Health standards.',
  },
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MH Septic',
  description:
    'Veteran-owned, VDH-compliant septic inspections, AOSS maintenance, and repairs across Central Virginia.',
  telephone: '+1-804-837-8746',
  email: 'mhseptic804@gmail.com',
  address: {
    '@type': 'PostalAddress',
    // TODO: add streetAddress and postalCode once owner confirms the public-facing business address
    addressLocality: 'Cumberland',
    addressRegion: 'VA',
    addressCountry: 'US',
  },
  areaServed: counties.map((c) => ({ '@type': 'AdministrativeArea', name: c })),
  openingHours: 'Mo-Fr 08:00-18:00',
  priceRange: '$$',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <Hero />
      <TrustBar />

      {/* Services Preview */}
      <section className="section bg-neutral-bg" aria-labelledby="services-heading">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              id="services-heading"
              title="Professional septic services, done right."
              subtitle="For homeowners, buyers, and real estate professionals across Central Virginia."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal>
              <ServiceCard
                icon={ClipboardCheck}
                title="Septic Inspection & Maintenance (AOSS)"
                price="$350 – $450"
                description="Comprehensive inspection of tank, distribution box, and drain field. Includes detailed report."
                href="/services#aoss"
              />
            </Reveal>
            <Reveal delay={120}>
              <ServiceCard
                icon={HomeIcon}
                title="Real Estate Inspection with Pumpout"
                price="$900"
                description="Full inspection plus tank pumpout for buyers and sellers under contract. Quick turnaround for closings."
                href="/services#real-estate"
                featured
              />
            </Reveal>
            <Reveal delay={240}>
              <ServiceCard
                icon={Wrench}
                title="Residential Septic Repair"
                price="Custom Quote"
                description="From minor fixes to full system troubleshooting. Honest assessment of what is actually needed."
                href="/services#repair"
              />
            </Reveal>
          </div>

          <div className="mt-10">
            <Link to="/services" className="btn-outline">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Owner Story */}
      <section id="about" className="section bg-neutral-surface" aria-labelledby="about-heading">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-border bg-primary/5">
              {/* TODO: replace with MH Septic owned photo (owner in uniform / by service truck) */}
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                alt="MH Septic owner on site, ready for an inspection."
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary-dark/85 px-3 py-1.5 text-xs font-semibold text-accent-light backdrop-blur">
                <span aria-hidden="true">🇺🇸</span> Veteran Owned &amp; Operated
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">Our Story</span>
            <h2
              id="about-heading"
              className="mt-3 text-3xl md:text-5xl font-extrabold text-primary leading-tight"
            >
              Mission-Driven Service.{' '}
              <span className="text-accent">Military-Grade Standards.</span>
            </h2>
            <div className="mt-5 space-y-4 text-neutral-muted leading-relaxed text-lg">
              <p>
                MH Septic was founded by a U.S. Navy Veteran with four years of active
                duty aboard the USS Harry S. Truman (CVN-75). The discipline,
                accountability, and attention to detail that come from military service
                are what we bring to every property we visit.
              </p>
              <p>
                As a Licensed Virginia Onsite Sewage System Operator with AOSS
                specialization, we deliver inspections that meet VDH standards and reports
                that are clear, photo-documented, and easy to understand.
              </p>
              <p>
                When you choose MH Septic, you&rsquo;re choosing experience, accountability,
                and a mission-driven approach — without the upsells.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Credential>U.S. Navy Veteran</Credential>
              <Credential>Licensed VA Operator</Credential>
              <Credential>AOSS Specialist</Credential>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service Area */}
      <section
        id="service-area"
        className="section bg-neutral-bg"
        aria-labelledby="service-area-heading"
      >
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Where We Work"
              id="service-area-heading"
              title="Serving Central Virginia."
              subtitle="Based in Cumberland County, we travel up to ~1.5 hours to serve homeowners and real estate professionals across the region."
            />
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-neutral-text">
              {counties.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span className="font-medium">{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-neutral-muted">
              Don&rsquo;t see your area? Call us — we may still be able to help.{' '}
              <a href="tel:+18048378746" className="font-semibold text-primary underline">
                (804) 837-8746
              </a>
            </p>
          </Reveal>

          <Reveal delay={120} className="flex justify-center">
            <VirginiaMap />
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-neutral-surface" aria-labelledby="why-heading">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Why MH Septic"
              id="why-heading"
              title="Why homeowners and realtors choose us."
              subtitle="A short list of what sets MH Septic apart from the rest."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-neutral-border bg-neutral-bg p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-neutral-surface">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      <CTA />
    </>
  );
}

function Credential({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-border bg-neutral-bg px-3 py-1 text-xs font-semibold text-primary">
      <BadgeCheck className="h-3.5 w-3.5 text-accent" />
      {children}
    </span>
  );
}

