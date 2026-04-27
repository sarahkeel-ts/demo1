// Blog posts. To add a new post, append an entry here.
// Body is an array of simple blocks: { type: 'p' | 'h2' | 'h3' | 'ul', text? , items? }.

export const posts = [
  {
    slug: 'septic-system-dos-and-donts-when-flushing',
    title: "Septic System Do's & Don'ts When Flushing",
    excerpt:
      "What you flush has a direct impact on your septic or AOSS system's health, lifespan, and performance. Here is what belongs — and what definitely does not.",
    date: '2026-04-27',
    author: 'MH Septic',
    readMinutes: 3,
    body: [
      {
        type: 'p',
        text: 'What you flush down your drains has a direct impact on the health, lifespan, and performance of your septic or AOSS system. Flushing the wrong items can cause clogs, pump failures, backups, and costly repairs.',
      },
      { type: 'h3', text: '✅ DO Flush' },
      {
        type: 'ul',
        items: [
          'Toilet paper (in moderate amounts)',
          'Human waste',
          'Water from sinks, showers, and laundry',
          'Septic-safe household cleaners (used sparingly)',
        ],
      },
      { type: 'h3', text: "❌ DON'T Flush" },
      {
        type: 'ul',
        items: [
          'Wipes of any kind (even "flushable" wipes)',
          'Feminine hygiene products',
          'Paper towels, napkins, or tissues',
          'Diapers or baby wipes',
          'Grease, fats, or cooking oil',
          'Coffee grounds',
          'Cigarette butts',
          'Dental floss',
          'Cat litter',
          'Harsh chemicals, solvents, paint, or drain cleaners',
          'Medications or antibiotics',
        ],
      },
      { type: 'h2', text: 'Why These Rules Matter' },
      { type: 'p', text: 'Flushing improper items can:' },
      {
        type: 'ul',
        items: [
          'Clog pumps and filters',
          'Damage floats and control systems',
          'Cause sewage backups into the home',
          'Destroy beneficial bacteria needed for treatment',
          'Lead to premature drain field failure',
          'Result in expensive emergency repairs',
        ],
      },
      {
        type: 'p',
        text: 'For AOSS systems, these risks are even higher because the system relies on mechanical, electrical, and biological treatment components to function properly.',
      },
      { type: 'h3', text: 'Bottom Line' },
      {
        type: 'p',
        text: "If it's not toilet paper or human waste — it shouldn't be flushed.",
      },
      { type: 'p', text: 'Protect your system. Protect your home. Protect your wallet.' },
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
