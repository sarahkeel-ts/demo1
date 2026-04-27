import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Phone } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import NotFound from './NotFound.jsx';
import { getPostBySlug, formatPostDate } from '../blog/posts.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-primary-dark text-white">
          <div
            className="absolute inset-0 opacity-[0.18]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'radial-gradient(circle at 80% 30%, rgba(184,146,74,0.55) 0, transparent 55%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.4) 0, transparent 50%)',
            }}
          />
          <div className="relative container-page py-16 md:py-24">
            <nav aria-label="Breadcrumb" className="text-sm text-white/70">
              <ol className="flex items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-accent-light">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/blog" className="hover:text-accent-light">Blog</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-accent-light font-semibold truncate max-w-[40ch]">
                  {post.title}
                </li>
              </ol>
            </nav>
            <h1 className="mt-4 max-w-4xl text-4xl md:text-6xl font-extrabold leading-tight">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
              {post.date && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-accent-light" />
                  {formatPostDate(post.date)}
                </span>
              )}
              {post.readMinutes && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-accent-light" />
                  {post.readMinutes} min read
                </span>
              )}
              {post.author && (
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-white/60">By</span>
                  <span className="font-semibold text-accent-light">{post.author}</span>
                </span>
              )}
            </div>
          </div>
        </header>

        <section className="section bg-neutral-surface">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-3xl">
                <PostBody body={post.body} />

                <div className="mt-12 rounded-2xl border border-accent/40 bg-accent/10 p-6">
                  <p className="font-bold text-primary">
                    Questions about your septic system?
                  </p>
                  <p className="mt-1 text-sm text-neutral-muted">
                    MH Septic provides VDH-compliant inspections, AOSS maintenance,
                    and repairs across Central Virginia.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a href="/#contact" className="btn-accent">Schedule an Inspection</a>
                    <a
                      href="tel:+18048378746"
                      className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
                    >
                      <Phone className="h-4 w-4" /> (804) 837-8746
                    </a>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-neutral-border pt-6 text-sm">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-accent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    All posts
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-accent"
                  >
                    Our services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </article>
    </>
  );
}

function PostBody({ body }) {
  return (
    <div className="space-y-5 text-lg leading-relaxed text-neutral-text">
      {body.map((block, i) => {
        if (block.type === 'h2') {
          return (
            <h2
              key={i}
              className="mt-10 text-2xl md:text-3xl font-extrabold text-primary leading-tight"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === 'h3') {
          return (
            <h3 key={i} className="mt-8 text-xl md:text-2xl font-bold text-primary">
              {block.text}
            </h3>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul
              key={i}
              className="ml-5 list-disc space-y-2 text-neutral-text marker:text-accent"
            >
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-neutral-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
