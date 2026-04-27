import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';
import { posts, formatPostDate } from '../blog/posts.js';

export default function Blog() {
  return (
    <>
      <PageHero />

      <section className="section bg-neutral-bg" aria-labelledby="blog-list-heading">
        <div className="container-page">
          <h2 id="blog-list-heading" className="sr-only">
            All blog posts
          </h2>

          {posts.length === 0 ? (
            <p className="text-neutral-muted">No posts yet — check back soon.</p>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 100}>
                  <li className="h-full">
                    <PostCard post={post} />
                  </li>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}

function PageHero() {
  return (
    <section
      className="relative overflow-hidden bg-primary-dark text-white"
      aria-labelledby="blog-page-heading"
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
            <li className="text-accent-light font-semibold">Blog</li>
          </ol>
        </nav>
        <h1
          id="blog-page-heading"
          className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Septic <span className="text-accent">Know-How</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed">
          Practical guidance from the field — what to do, what to avoid, and how
          to keep your septic system healthy.
        </p>
      </div>
    </section>
  );
}

function PostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-neutral-border bg-neutral-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-muted">
        {post.date && (
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-accent" />
            {formatPostDate(post.date)}
          </span>
        )}
        {post.readMinutes && (
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-accent" />
            {post.readMinutes} min read
          </span>
        )}
      </div>
      <h3 className="mt-3 text-xl font-bold text-primary leading-snug group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-muted">{post.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent">
        Read article
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
