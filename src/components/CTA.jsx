import { Phone, Mail } from 'lucide-react';

const QUOTE_FORM_URL =
  'https://quoteiq-2.web.app/customer_form/DcnWWdXdKRXKBQrHU7PpKJ9Xyk63-oeMJ92py6iMEnSS5FlYV';

export default function CTA() {
  return (
    <section id="contact" className="section bg-neutral-bg" aria-labelledby="cta-heading">
      <div className="container-page max-w-4xl text-center">
        <span className="eyebrow">Get In Touch</span>
        <h2 id="cta-heading" className="mt-3 text-3xl md:text-5xl font-extrabold text-primary leading-tight">
          Ready to schedule? Let&rsquo;s talk.
        </h2>
        <p className="mt-5 text-lg text-neutral-muted leading-relaxed mx-auto max-w-xl">
          Send us your details using the form below and we&rsquo;ll get back to
          you within one business day. Real estate transactions on a tight
          timeline? Let us know and we&rsquo;ll prioritize your scheduling.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-border bg-neutral-surface shadow-sm">
          <iframe
            src={QUOTE_FORM_URL}
            title="MH Septic contact form"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[1200px] w-full sm:h-[1100px] md:h-[1000px]"
          />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-neutral-muted">
          Prefer to reach out directly?
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 text-left">
          <a
            href="tel:+18048378746"
            className="flex items-center gap-4 rounded-xl border border-neutral-border bg-neutral-surface p-5 hover:border-accent transition-colors"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Phone className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                Call or Text
              </span>
              <span className="block text-lg font-bold text-primary">(804) 837-8746</span>
            </span>
          </a>
          <a
            href="mailto:mhseptic804@gmail.com"
            className="flex items-center gap-4 rounded-xl border border-neutral-border bg-neutral-surface p-5 hover:border-accent transition-colors"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Mail className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                Email
              </span>
              <span className="block text-lg font-bold text-primary break-all">
                mhseptic804@gmail.com
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
