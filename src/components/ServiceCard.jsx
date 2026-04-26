import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({
  icon: Icon,
  title,
  price,
  description,
  href = '/services',
  featured = false,
}) {
  return (
    <article
      className={`group relative flex flex-col rounded-2xl border bg-neutral-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        featured
          ? 'border-accent shadow-md'
          : 'border-neutral-border hover:border-accent'
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-dark">
          Best for Closings
        </span>
      )}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
        {Icon && <Icon className="h-6 w-6" />}
      </div>
      <h3 className="mt-5 text-xl font-bold text-primary leading-tight">{title}</h3>
      <div className="mt-2 text-sm font-semibold text-accent">{price}</div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-muted">{description}</p>
      <Link
        to={href}
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
