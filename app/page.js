import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Credibility from '../components/Credibility';
import Categories from '../components/Categories';
import BrandBanner from '../components/BrandBanner';
import Beliefs from '../components/Beliefs';
import Services from '../components/Services';
import WhyMarketingMatters from '../components/WhyMarketingMatters';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import BottomCTA from '../components/BottomCTA';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';

// Enforce Static Site Generation (SSG) for ultra-fast CDN delivery & perfect SEO crawling
export const dynamic = 'force-static';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#ece8df] text-[#1c2e22] font-sans antialiased selection:bg-[#97ad8d] selection:text-[#0b2b18]">
        {/* 1. Floating Header & Nav */}
        <Navbar />

        {/* 2. Hero Section */}
        <Hero />

        {/* 2.5 Credibility Stats Strip Section */}
        <Credibility />

        {/* 3. Built for the Business of Wellness */}
        <Categories />

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

        {/* 11. Frequently Asked Questions For Businesses */}
        <FAQ />

        {/* 11.5 Final Bottom CTA Section */}
        <BottomCTA />

        {/* 12. Deep Green Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
