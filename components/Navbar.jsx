'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Insights', href: '/insights' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
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
        className="pointer-events-auto flex items-center justify-between px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-500 ease-out bg-[#fbf9f4]/92 backdrop-blur-2xl border border-[#d9d0c1] text-[#0d3822] shadow-[0_14px_36px_rgba(13,56,34,0.12),0_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#ffffff]/95 hover:shadow-[0_18px_42px_rgba(13,56,34,0.16)]"
      >
        {/* Brand Logo Container */}
        <Link
          href="/"
          className="relative flex items-center h-9 sm:h-10 md:h-11 lg:h-[46px] w-[130px] sm:w-[155px] md:w-[175px] overflow-hidden group select-none"
        >
          <img
            src="/images/Color.svg"
            alt="The Wellness Ahead"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links with Clean Text Glowing Animation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[14.5px] tracking-wide text-[#143420]">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname?.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-all duration-300 ${
                  isActive
                    ? 'text-[#075f2c] font-bold drop-shadow-[0_0_12px_rgba(7,95,44,0.65)]'
                    : 'text-[#143420]/80 font-medium hover:text-[#075f2c]'
                }`}
              >
                <span className={isActive ? 'animate-pulse' : ''}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden sm:block">
          <Link
            href="/contact"
            className="inline-block px-6 py-2 text-xs sm:text-sm font-semibold rounded-full backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-[0_6px_20px_rgba(10,90,99,0.35)] hover:scale-[1.02] bg-[#0A5A63] hover:bg-[#07454C] text-white border border-[#0A5A63]"
          >
            Start Conversation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 focus:outline-none transition-colors text-[#0d3822]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown with Clean Text Glowing Animation */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden mt-3 p-6 rounded-3xl backdrop-blur-2xl border shadow-2xl flex flex-col space-y-3 bg-[#fbf9f4]/98 border-[#d9d0c1] text-[#0d3822] transition-all duration-300">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname?.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base py-1.5 transition-all duration-300 ${
                  isActive
                    ? 'text-[#075f2c] font-bold drop-shadow-[0_0_12px_rgba(7,95,44,0.65)]'
                    : 'text-[#143420]/80 font-medium hover:text-[#075f2c]'
                }`}
              >
                <span className={isActive ? 'animate-pulse' : ''}>
                  {link.name}
                </span>
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 px-4 rounded-xl bg-[#0A5A63] text-white font-medium hover:bg-[#07454C] transition-colors"
          >
            Start Conversation
          </Link>
        </div>
      )}
    </header>
  );
}
