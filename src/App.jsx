import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

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
      '/': 'Busy Bee Solutions — Virtual Admin & Social Media Support',
    };
    const descriptions = {
      '/': 'Comprehensive virtual administrative support and social media management tailored to your budget, workload, and schedule.',
    };
    const notFoundTitle = 'Page Not Found | Busy Bee Solutions';
    const notFoundDesc = 'The page you’re looking for could not be found. Return home or email admin@busybeesolutionscorp.com.';

    const title = titles[pathname] ?? notFoundTitle;
    const desc = descriptions[pathname] ?? notFoundDesc;

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
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
