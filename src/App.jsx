import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import StickyMobileCTA from './components/StickyMobileCTA.jsx';
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
    };
    const descriptions = {
      '/': 'MH Septic — Veteran-owned, VDH-compliant septic inspections, AOSS maintenance, and repairs across Central Virginia. Honest reports, no upsells.',
      '/services': 'Septic inspections, AOSS maintenance, real estate inspections with pumpout, and residential repairs across Central Virginia from MH Septic.',
    };
    document.title = titles[pathname] || titles['/'];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', descriptions[pathname] || descriptions['/']);
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
        </Routes>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
