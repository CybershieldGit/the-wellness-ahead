'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('home');
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        // Swaps precisely when the hero section's bottom line crosses the top viewport edge / navbar
        setIsScrolled(heroRect.bottom <= 80);
      } else {
        // On pages with light theme hero (like /about), default to crisp light navigation
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#fbf9f4]/92 backdrop-blur-2xl border border-[#d9d0c1] text-[#0d3822] shadow-[0_14px_36px_rgba(13,56,34,0.12),0_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#ffffff]/95 hover:shadow-[0_18px_42px_rgba(13,56,34,0.16)]'
            : 'bg-white/[0.14] backdrop-blur-2xl border border-white/30 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_35px_0_rgba(0,0,0,0.25)] hover:bg-white/[0.18]'
        }`}
      >
        {/* Brand Logo Container with Vertical Swapping Animation */}
        <Link
          href="/"
          className="relative flex items-center h-9 sm:h-10 md:h-11 lg:h-[46px] w-[130px] sm:w-[155px] md:w-[175px] overflow-hidden group select-none"
        >
          {/* Logo 1: White SVG Logo (Visible on Hero, slides UP out on scroll) */}
          <div
            className={`absolute inset-0 flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isScrolled
                ? '-translate-y-full opacity-0 pointer-events-none'
                : 'translate-y-0 opacity-100'
            }`}
          >
            <img
              src="/images/White.svg"
              alt="The Wellness Ahead"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Logo 2: Green Color SVG Logo (Visible on Light background, slides UP in on scroll) */}
          <div
            className={`absolute inset-0 flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isScrolled
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0 pointer-events-none'
            }`}
          >
            <img
              src="/images/Color.svg"
              alt="The Wellness Ahead"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav Links (Smooth Color Transition) */}
        <div
          className={`hidden lg:flex items-center space-x-8 xl:space-x-10 text-[14.5px] font-medium tracking-wide transition-colors duration-400 ${
            isScrolled ? 'text-[#143420]' : 'text-white/95'
          }`}
        >
          <Link
            href="/"
            className={`transition-colors ${
              isScrolled ? 'hover:text-[#075f2c]' : 'hover:text-white/80'
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`transition-colors ${
              isScrolled ? 'hover:text-[#075f2c]' : 'hover:text-white/80'
            }`}
          >
            Services
          </Link>
          <Link
            href="/#insights"
            className={`transition-colors ${
              isScrolled ? 'hover:text-[#075f2c]' : 'hover:text-white/80'
            }`}
          >
            Insights
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${
              isScrolled ? 'hover:text-[#075f2c]' : 'hover:text-white/80'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/#contact"
            className={`transition-colors ${
              isScrolled ? 'hover:text-[#075f2c]' : 'hover:text-white/80'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Action Button */}
        <div className="hidden sm:block">
          <Link
            href="/#contact"
            className={`inline-block px-6 py-2 text-xs sm:text-sm font-semibold rounded-full backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] ${
              isScrolled
                ? 'bg-[#0d3822] text-white hover:bg-[#072a18] border border-[#0d3822]'
                : 'bg-[#9eb393] text-[#0a2315] hover:bg-[#8da382] border border-[#9eb393]/80'
            }`}
          >
            Start Conversation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-1.5 focus:outline-none transition-colors ${
            isScrolled ? 'text-[#0d3822]' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          className={`pointer-events-auto lg:hidden mt-3 p-6 rounded-3xl backdrop-blur-2xl border shadow-2xl flex flex-col space-y-4 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#fbf9f4]/98 border-[#d9d0c1] text-[#0d3822]'
              : 'bg-[#092214]/95 border-white/25 text-white'
          }`}
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1 border-b border-white/15"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base py-1 border-b border-white/15 text-white/80 hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/#insights"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base py-1 border-b border-white/15 text-white/80 hover:text-white"
          >
            Insights
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base py-1 border-b border-white/15 text-white/80 hover:text-white"
          >
            About Us
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base py-1 text-white/80 hover:text-white"
          >
            Contact Us
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 px-4 rounded-xl bg-wellness-sage text-wellness-greenDark font-medium"
          >
            Start Conversation
          </Link>
        </div>
      )}
    </header>
  );
}
