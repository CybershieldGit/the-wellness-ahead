import React from 'react';
import Link from 'next/link';

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Insights', href: '/insights' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Disclaimer', href: '/disclaimer' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0a2315] text-white pt-14 sm:pt-16 pb-28 sm:pb-32 lg:pb-36 overflow-hidden selection:bg-[#c5deb9] selection:text-[#0a2315]">
      {/* Subtle organic ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#163f27]/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Full-Bleed Edge-to-Edge Brand Watermark */}
      <div className="absolute inset-x-0 bottom-0 w-full text-center pointer-events-none select-none overflow-hidden z-0 px-2 leading-none">
        <span className="font-raleway font-black tracking-tight text-[9.28vw] text-white/[0.032] uppercase whitespace-nowrap block leading-none w-full text-center translate-y-[8%]">
          The Wellness Ahead
        </span>
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Grid: Brand Column + Vertically Aligned Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-10 sm:pb-12 border-b border-white/12">
          
          {/* Column 1: Brand Logo, Tagline & Socials (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* White Brand Logo */}
              <Link href="/" className="inline-block h-8 sm:h-9 w-auto flex-shrink-0 mb-4">
                <img
                  src="/images/White.svg"
                  alt="The Wellness Ahead"
                  className="h-full w-auto object-contain"
                />
              </Link>

              {/* Tagline (Slightly Increased Size) */}
              <p className="font-raleway text-sm sm:text-base md:text-[16px] text-[#e0ecdc] font-normal leading-relaxed max-w-lg mb-6">
                Independent strategic marketing and insights platform helping nutraceutical, herbal, supplement, and functional wellness businesses communicate with clarity and trust.
              </p>
            </div>

            {/* Social Icons with Luxury Frosted Styling */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-[#c5deb9] border border-white/15 hover:border-[#c5deb9] flex items-center justify-center text-white hover:text-[#0a2315] transition-all duration-300 shadow-sm hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-[#c5deb9] border border-white/15 hover:border-[#c5deb9] flex items-center justify-center text-white hover:text-[#0a2315] transition-all duration-300 shadow-sm hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-[#c5deb9] border border-white/15 hover:border-[#c5deb9] flex items-center justify-center text-white hover:text-[#0a2315] transition-all duration-300 shadow-sm hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (Vertically Stacked) (3 Cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c5deb9] block mb-4">
              Navigation
            </span>
            <ul className="flex flex-col space-y-3 text-sm sm:text-[15px] text-[#c7dcc3]">
              {pages.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="text-[#64875f] text-sm font-mono group-hover:text-[#c5deb9] transition-colors">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Regulatory Links (Vertically Stacked) (3 Cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c5deb9] block mb-4">
              Legal &amp; Policy
            </span>
            <ul className="flex flex-col space-y-3 text-sm sm:text-[15px] text-[#c7dcc3]">
              {legal.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="text-[#64875f] text-sm font-mono group-hover:text-[#c5deb9] transition-colors">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer & Copyright Bottom Row */}
        <div className="pt-6 sm:pt-8 flex flex-col gap-4">
          <p className="text-xs sm:text-[13px] md:text-[13.5px] text-[#9bb396] leading-relaxed max-w-5xl">
            The information shared by The Wellness Ahead is intended for marketing, business and educational purposes. It does not constitute medical, clinical, legal or regulatory advice. Businesses should consult qualified professionals for product approvals, claims, labelling and compliance requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/8 text-xs sm:text-[13px] text-[#9bb396]">
            <p>© {new Date().getFullYear()} The Wellness Ahead. All rights reserved.</p>
            <p className="text-[12px] text-[#829b7e]">Independent Wellness Marketing Strategy &amp; Intelligence</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
