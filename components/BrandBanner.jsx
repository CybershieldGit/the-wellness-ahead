'use client';

import React from 'react';

export default function BrandBanner() {
  return (
    <section className="relative py-5 sm:py-7 md:py-8 bg-[#e5dcce] overflow-hidden border-y border-[#d6ccbc] select-none mb-3 sm:mb-5">
      <style>{`
        @keyframes marqueeFlow {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-flow {
          display: flex;
          width: max-content;
          animation: marqueeFlow 38s linear infinite;
          will-change: transform;
        }
        .animate-marquee-flow:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle Edge Gradient Masks for Smooth Vignette Inset */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#e5dcce] via-[#e5dcce]/90 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#e5dcce] via-[#e5dcce]/90 to-transparent z-10" />

      {/* Infinite Scrolling Marquee Track (Right to Left) */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee-flow items-center py-1">
          {/* Primary Sequence */}
          <div className="flex items-center flex-shrink-0">
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <span className="font-raleway text-lg sm:text-2xl md:text-[26px] lg:text-[29px] font-medium text-[#0d3822] tracking-tight whitespace-nowrap">
                  <span className="font-bold text-[#075f2c]">The Wellness Ahead</span>{' '}
                  helps translate product strengths, technical knowledge and business goals into communication that audiences can understand, trust and act upon.
                </span>
                <span className="inline-flex items-center justify-center mx-6 sm:mx-10 text-[#075f2c]/50 text-sm sm:text-lg">
                  ✦
                </span>
              </div>
            ))}
          </div>

          {/* Identical Cloned Sequence for Infinite Seamless Loop */}
          <div className="flex items-center flex-shrink-0" aria-hidden="true">
            {[0, 1].map((i) => (
              <div key={`dup-${i}`} className="flex items-center flex-shrink-0">
                <span className="font-raleway text-lg sm:text-2xl md:text-[26px] lg:text-[29px] font-medium text-[#0d3822] tracking-tight whitespace-nowrap">
                  <span className="font-bold text-[#075f2c]">The Wellness Ahead</span>{' '}
                  helps translate product strengths, technical knowledge and business goals into communication that audiences can understand, trust and act upon.
                </span>
                <span className="inline-flex items-center justify-center mx-6 sm:mx-10 text-[#075f2c]/50 text-sm sm:text-lg">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
