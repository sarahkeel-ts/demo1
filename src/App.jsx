import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import NotFound from './pages/NotFound.jsx';
import { getPostBySlug } from './blog/posts.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import StickyMobileCTA from './components/StickyMobileCTA.jsx';
import FloatingInspectionCTA from './components/FloatingInspectionCTA.jsx';
import PreviewBanner from './components/PreviewBanner.jsx';

function ScrollAndTitleManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  useEffect(() => {
    const titles = {
      '/': 'MH Septic — Veteran-Owned Septic Inspections in Central Virginia | (804) 837-8746',
      '/services': 'Septic Services in Central Virginia — Inspections, AOSS, Real Estate, Repair | MH Septic',
      '/blog': 'Septic Know-How — Blog | MH Septic',
    };
    const descriptions = {
      '/': 'MH Septic — Veteran-owned, VDH-compliant septic inspections, AOSS maintenance, and repairs across Central Virginia. Honest reports, no upsells.',
      '/services': 'Septic inspections, AOSS maintenance, real estate inspections with pumpout, and residential repairs across Central Virginia from MH Septic.',
      '/blog': 'Practical septic and AOSS guidance from MH Septic — what to do, what to avoid, and how to keep your system healthy.',
    };
    const notFoundTitle = 'Page Not Found | MH Septic';
    const notFoundDesc = 'The page you’re looking for could not be found. Return home or call MH Septic at (804) 837-8746.';

    let title = notFoundTitle;
    let desc = notFoundDesc;
    if (pathname in titles) {
      title = titles[pathname];
      desc = descriptions[pathname];
    } else if (pathname.startsWith('/blog/')) {
      const slug = pathname.slice('/blog/'.length);
      const post = getPostBySlug(slug);
      if (post) {
        title = `${post.title} | MH Septic Blog`;
        desc = post.excerpt;
      }
    }
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', desc);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollAndTitleManager />
      <PreviewBanner />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingInspectionCTA />
      <StickyMobileCTA />
    </>
  );
}
