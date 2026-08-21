import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import Categories from './components/Categories';
import Struggles from './components/Struggles';
import BrandBanner from './components/BrandBanner';
import Beliefs from './components/Beliefs';
import Services from './components/Services';
import WhyMarketingMatters from './components/WhyMarketingMatters';
import Process from './components/Process';
import Insights from './components/Insights';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out for luxury butter feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Sync Lenis scroll events with native window scroll listeners (e.g. Categories pinned scroll)
    lenis.on('scroll', () => {
      window.dispatchEvent(new Event('scroll'));
    });

    // Smooth anchor navigation handling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element, { offset: -20, duration: 1.4 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Request Animation Frame loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#ece8df] text-[#1c2e22] font-sans antialiased selection:bg-[#97ad8d] selection:text-[#0b2b18]">
      {/* 1. Floating Header & Nav */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 2.5 Credibility Stats Strip Section */}
      <Credibility />

      {/* 3. Built for the Business of Wellness */}
      <Categories />

      {/* 4. Strong Products Can Still Struggle */}
      {/* <Struggles /> */}

      {/* 5. Brand Translation Banner */}
      <BrandBanner />

      {/* 6. What We Believe */}
      <Beliefs />

      {/* 7. Where Strategy Meets Market Communication */}
      <Services />

      {/* 8. Why Industry-Focused Marketing Matters */}
      <WhyMarketingMatters />

      {/* 9. A Clear Process for Better Marketing Decisions */}
      <Process />

      {/* 10. Insights for the Business of Wellness */}
      {/* <Insights /> */}

      {/* 11. Frequently Asked Questions For Businesses */}
      <FAQ />

      {/* 12. Deep Green Footer */}
      <Footer />
    </div>
  );
}
