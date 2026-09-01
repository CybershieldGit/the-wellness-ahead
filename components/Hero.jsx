'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const heroBackgroundSlides = [
  {
    url: '/images/ban4.png',
    alt: 'Collaborative Business Strategies',
    line1: 'COLLABORATIVE',
    line2: 'BUSINESS STRATEGIES',
    line1Size: 18,
    line2Size: 18,
    line1Spacing: 4.4,
    line2Spacing: 4.2,
  },
  {
    url: '/images/ban2.png',
    alt: 'Rule of Digital Presence',
    line1: 'RULE OF',
    line2: 'DIGITAL PRESENCE',
    line1Size: 19,
    line2Size: 20,
    line1Spacing: 5.1,
    line2Spacing: 5.4,
  },
  {
    url: '/images/ban1.png',
    alt: 'All Packaging Solutions',
    line1: 'ALL',
    line2: 'PACKAGING SOLUTIONS',
    line1Size: 19,
    line2Size: 18,
    line1Spacing: 5.1,
    line2Spacing: 4.4,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cinematic Ambient Slide Rotation (5.2s interval with subtle breathing crossfade)
  useEffect(() => {
    // Preload background images to guarantee instant 60fps video-like playback
    heroBackgroundSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.url;
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgroundSlides.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] md:min-h-screen flex items-center justify-start overflow-hidden pt-36 sm:pt-40 md:pt-44 pb-16 md:pb-20">
      {/* Cinematic Ambient Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#ece8df]">
        {heroBackgroundSlides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-30 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-2 md:pt-4 mt-2 sm:mt-4 md:mt-6">
        <div className="max-w-4xl lg:max-w-[780px]">

          {/* Top-Left Emblem with True Slot-Ticker Swipe-Up Animation */}
          <div className="mb-4 sm:mb-6 flex items-center gap-1.5 sm:gap-2 select-none">
            {/* 1. Static Left Emblem Badge (Shifted slightly right and 2px upward) */}
            <div className="w-[72px] sm:w-[84px] md:w-[94px] h-[72px] sm:h-[84px] md:h-[94px] flex-shrink-0 drop-shadow-xs -translate-y-[2px] translate-x-[3px]">
              <svg
                viewBox="0 0 146 157"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                {/* Outer dashed circle */}
                <circle
                  cx="73"
                  cy="78"
                  r="63"
                  stroke="#B7B2A4"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity="0.65"
                />

                {/* Main olive circle */}
                <circle
                  cx="73"
                  cy="78"
                  r="44"
                  fill="#4B4D37"
                />

                {/* Globe Icon */}
                <g
                  stroke="#E9E5D8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="73" cy="78" r="22" />
                  <path d="M73 56C66 62 63 69 63 78C63 87 66 94 73 100" />
                  <path d="M73 56C80 62 83 69 83 78C83 87 80 94 73 100" />
                  <path d="M52 78H94" />
                  <path d="M55 68C60 71 65 72 73 72C81 72 86 71 91 68" />
                  <path d="M55 88C60 85 65 84 73 84C81 84 86 85 91 88" />
                  <path d="M73 56V100" />
                </g>
              </svg>
            </div>

            {/* 2. Synchronized Vertical Text Ticker (Current moves UP, next comes from BELOW) */}
            <div className="relative h-[62px] sm:h-[72px] md:h-[78px] w-[260px] sm:w-[320px] md:w-[380px] overflow-hidden">
              {heroBackgroundSlides.map((slide, index) => {
                const isActive = currentSlide === index;
                const isPrev =
                  (currentSlide - 1 + heroBackgroundSlides.length) %
                  heroBackgroundSlides.length ===
                  index;

                let animationClass = 'translate-y-full opacity-0 pointer-events-none';
                if (isActive) {
                  animationClass = 'translate-y-0 opacity-100 z-10';
                } else if (isPrev) {
                  animationClass = '-translate-y-full opacity-0 pointer-events-none z-0';
                }

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-[1400ms] ease-in-out ${animationClass}`}
                  >
                    {/* Line 1 */}
                    <span
                      className="text-[#3F4039] font-medium uppercase font-sans leading-none mb-1.5"
                      style={{
                        fontSize: `${slide.line1Size * 0.9}px`,
                        letterSpacing: `${slide.line1Spacing}px`,
                      }}
                    >
                      {slide.line1}
                    </span>

                    {/* Line 2 */}
                    <span
                      className="text-[#3F4039] font-medium uppercase font-sans leading-none"
                      style={{
                        fontSize: `${slide.line2Size * 0.9}px`,
                        letterSpacing: `${slide.line2Spacing}px`,
                      }}
                    >
                      {slide.line2}
                    </span>

                    {/* Decorative Line with Center Dot */}
                    <div className="relative w-[90px] h-[1px] bg-[#8B8A7D]/70 mt-2.5 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4B4D37]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Headline (Exact Reference Typography & Editorial Serif Aesthetic) */}
          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-[54px] lg:text-[58px] xl:text-[62px] text-[#0f2a17] font-normal tracking-[-0.015em] leading-[1.08] flex flex-col gap-1 sm:gap-1.5 max-w-fit drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
            <span className="block">Strategic Marketing</span>
            <span className="block">That Makes Wellness</span>
            <span className="block">Brands Stand Out.</span>
          </h1>

          {/* Subtitle matching reference layout & typography */}
          <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-[18px] text-[#2c4031] font-normal leading-[1.55] max-w-lg drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
            We help wellness brands build trust, strengthen their positioning, and grow through focused, industry-specific marketing.
          </p>

          {/* Dual Action Buttons matching reference mockup */}
          <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-[#255953] hover:bg-[#1a433e] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-xl text-base font-semibold text-[#273f2c] border border-[#526655] hover:bg-black/5 transition-all duration-300 shadow-2xs"
            >
              Start Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
