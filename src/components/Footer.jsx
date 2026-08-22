import React from 'react';
import { Facebook, Instagram, Twitter, ArrowUpRight } from 'lucide-react';

const pages = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Insights', href: '#insights' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
];

const legal = [
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Terms of Use', href: '#terms' },
  { name: 'Disclaimer', href: '#disclaimer' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0a2315] text-white pt-12 sm:pt-14 pb-28 sm:pb-32 lg:pb-36 overflow-hidden selection:bg-[#c5deb9] selection:text-[#0a2315]">
      {/* Subtle organic ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#163f27]/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Full-Bleed Edge-to-Edge Brand Watermark (Flush with Bottom Edge in Dedicated Space) */}
      <div className="absolute inset-x-0 bottom-0 w-full text-center pointer-events-none select-none overflow-hidden z-0 px-2 leading-none">
        <span className="font-raleway font-black tracking-tight text-[9.28vw] text-white/[0.032] uppercase whitespace-nowrap block leading-none w-full text-center translate-y-[8%]">
          The Wellness Ahead
        </span>
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Top Header: Logo & Tagline Inline, Socials */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-5 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 max-w-2xl">
            {/* White Brand Logo */}
            <a href="#" className="inline-block h-7 sm:h-8 w-auto flex-shrink-0">
              <img
                src="/images/White.svg"
                alt="The Wellness Ahead"
                className="h-full w-auto object-contain"
              />
            </a>

            {/* Subtle Divider */}
            <span className="hidden sm:inline-block h-4 w-[1px] bg-white/25"></span>

            {/* Tagline */}
            <p className="font-raleway text-xs sm:text-sm md:text-[14.5px] text-[#e0ecdc] font-medium leading-relaxed">
              Independent strategic marketing and insights for the wellness industry.
            </p>
          </div>

          {/* Social Icons with Luxury Frosted Styling */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-[#c5deb9] border border-white/15 hover:border-[#c5deb9] flex items-center justify-center text-white hover:text-[#0a2315] transition-all duration-300 shadow-sm hover:scale-105"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-[#c5deb9] border border-white/15 hover:border-[#c5deb9] flex items-center justify-center text-white hover:text-[#0a2315] transition-all duration-300 shadow-sm hover:scale-105"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-[#c5deb9] border border-white/15 hover:border-[#c5deb9] flex items-center justify-center text-white hover:text-[#0a2315] transition-all duration-300 shadow-sm hover:scale-105"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Middle Navigation Row (Headings removed) */}
        <div className="py-4 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-8">
            {/* Pages Navigation (6 cols) */}
            <div className="lg:col-span-6">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-[#b8ccb3]">
                {pages.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="text-[#64875f] text-xs font-mono group-hover:text-[#c5deb9] transition-colors">›</span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links (6 cols) */}
            <div className="lg:col-span-6">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-[#b8ccb3]">
                {legal.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                    >
                      <span className="text-[#64875f] text-xs font-mono group-hover:text-[#c5deb9] transition-colors">›</span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright Bottom Row */}
        <div className="pt-4 flex flex-col gap-3">
          <p className="text-[11.5px] sm:text-xs text-[#8da588] leading-relaxed max-w-5xl">
            The information shared by The Wellness Ahead is intended for marketing, business and educational purposes. It does not constitute medical, clinical, legal or regulatory advice. Businesses should consult qualified professionals for product approvals, claims, labelling and compliance requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 pt-1.5 border-t border-white/5 text-[11px] sm:text-xs text-[#8da588]">
            <p>© {new Date().getFullYear()} The Wellness Ahead. All rights reserved.</p>
            <p className="text-[10.5px] text-[#738a6f]">Independent Wellness Marketing Strategy & Intelligence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
