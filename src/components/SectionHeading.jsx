export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', id }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && (
        <h2
          id={id}
          className="mt-3 text-3xl md:text-5xl font-extrabold text-primary leading-tight"
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
