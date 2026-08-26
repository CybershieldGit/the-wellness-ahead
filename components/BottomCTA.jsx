import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BottomCTA() {
  return (
    <section className="relative z-10 bg-[#ece8df] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        {/* Luxury Deep Forest Card */}
        <div className="relative bg-[#0d3822] text-white rounded-3xl sm:rounded-[2.25rem] px-6 py-12 sm:px-12 sm:py-16 text-center border border-[#235839] shadow-[0_20px_50px_rgba(13,56,34,0.22)] overflow-hidden">
          {/* Subtle Organic Background Lighting */}
          <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#1f5c38]/40 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#c5deb9]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Main Headline with Hero-Style Sage Highlight */}
            <h2 className="font-raleway text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[42px] font-normal text-white tracking-[0.02em] leading-tight">
              <span className="block md:whitespace-nowrap">Your product may already be credible.</span>
              <span className="block mt-2 sm:mt-2.5">
                <span className="text-[#c5deb9] font-medium drop-shadow-[0_2px_16px_rgba(197,222,185,0.3)]">
                  Let’s make
                </span>{' '}
                the market understand why.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-sm sm:text-base md:text-[17px] text-[#d2e0ce] font-normal leading-relaxed max-w-2xl mx-auto">
              Whether you are launching a new wellness brand, repositioning an existing one or building stronger founder authority, The Wellness Ahead can help create a clearer path forward.
            </p>

            {/* Action CTA Button */}
            <div className="mt-8 sm:mt-10 flex items-center justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-xl text-base font-semibold text-[#092214] bg-[#c5deb9] hover:bg-[#b4d0a6] transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_32px_rgba(197,222,185,0.35)] transform hover:-translate-y-0.5 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
