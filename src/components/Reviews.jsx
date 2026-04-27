import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const reviews = [
  {
    name: 'David Pike',
    initials: 'DP',
    reviewerMeta: 'B A M LXIX · 6 reviews',
    rating: 5,
    timeAgo: 'a month ago',
    title: 'Excellent Service – Highly Recommend',
    body: [
      'I recently had my septic system inspected and had a great experience. Marcus was professional, knowledgeable, and very thorough throughout the entire process. He took the time to carefully inspect the system and clearly explain everything he was looking at and what it meant.',
      'What I really appreciated was how patient he was in answering my questions and making sure I understood the condition of the system. You can tell Marcus takes pride in his work and genuinely cares about doing the job right.',
      'If you need a septic inspection, I highly recommend this company — and especially Marcus. Honest, professional, and very easy to work with. Great experience overall.',
    ],
  },
  {
    name: 'Marquetta Terry',
    initials: 'M',
    reviewerMeta: '2 reviews',
    rating: 5,
    timeAgo: '2 months ago',
    body: [
      'I called them on Tuesday and they promptly returned my call and came out the next day to pump my septic tank. They quickly cleaned it out and got everything running like normal and gave lots of great advice. Very reasonably priced as well. We highly recommend MH Septic!!! The best in the business.',
    ],
  },
  {
    name: 'Sabrina Gregory',
    initials: 'S',
    reviewerMeta: '4 reviews',
    rating: 5,
    timeAgo: '3 months ago',
    body: [
      'I’m very impressed with MH Septic. Scheduling was easy, they showed up as promised, and their work was clean and thorough. It’s clear they take pride in what they do. Highly recommended!',
    ],
    ownerReply: {
      author: 'MH Septic LLC (Owner)',
      timeAgo: '2 months ago',
      body: 'Thank you so much for the kind words! I really appreciate you choosing MH Septic.',
    },
  },
];

function StarRow({ count }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count ? 'fill-accent text-accent' : 'text-neutral-border'
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-border bg-neutral-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-md">
      <header className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
          aria-hidden="true"
        >
          {review.initials}
        </div>
        <div className="leading-tight">
          <div className="font-semibold text-primary">{review.name}</div>
          <div className="text-xs text-neutral-muted">{review.reviewerMeta}</div>
        </div>
      </header>
      <div className="mt-4 flex items-center gap-2">
        <StarRow count={review.rating} />
        <span className="text-xs text-neutral-muted">{review.timeAgo}</span>
      </div>
      {review.title && (
        <h3 className="mt-3 text-base font-bold text-primary">{review.title}</h3>
      )}
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-muted">
        {review.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      {review.ownerReply && (
        <div className="mt-5 rounded-xl border border-neutral-border bg-neutral-bg p-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-primary">
              {review.ownerReply.author}
            </span>
            <span className="text-xs text-neutral-muted">
              · {review.ownerReply.timeAgo}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-neutral-muted">
            {review.ownerReply.body}
          </p>
        </div>
      )}
    </article>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="section bg-neutral-bg"
      aria-labelledby="reviews-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="What Customers Say"
            id="reviews-heading"
            title="5-star reviews from real customers."
            subtitle="Honest feedback from homeowners and buyers across Central Virginia."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 120}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
