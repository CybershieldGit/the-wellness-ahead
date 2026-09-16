import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BottomCTA() {
  return (
    <section className="relative z-10 bg-[#ece8df] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        {/* Luxury Soft Mineral Light Blue Card */}
        <div className="relative bg-gradient-to-br from-[#d4eaed] via-[#c6dde0] to-[#b8d6d9] text-[#0d3822] rounded-3xl sm:rounded-[2.25rem] px-6 py-12 sm:px-12 sm:py-16 text-center border border-[#a8cbd0] shadow-[0_20px_50px_rgba(10,90,99,0.14)] overflow-hidden">
          {/* Subtle Organic Background Lighting */}
          <div className="absolute -top-28 -left-28 w-80 h-80 bg-white/70 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#0A5A63]/12 rounded-full blur-3xl pointer-events-none"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Main Headline with Ocean Blue Highlight */}
            <h2 className="font-raleway text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[42px] font-normal text-[#0d3822] tracking-[0.02em] leading-tight">
              <span className="block md:whitespace-nowrap">Your product may already be credible.</span>
              <span className="block mt-2 sm:mt-2.5">
                <span className="text-[#0A5A63] font-semibold drop-shadow-[0_1px_10px_rgba(10,90,99,0.18)]">
                  Let’s make
                </span>{' '}
                the market understand why.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-sm sm:text-base md:text-[17px] text-[#2e4c3d] font-normal leading-relaxed max-w-2xl mx-auto">
              Whether you are launching a new wellness brand, repositioning an existing one or building stronger founder authority, The Wellness Ahead can help create a clearer path forward.
            </p>

            {/* Action CTA Button */}
            <div className="mt-8 sm:mt-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-xl text-base font-semibold text-white bg-[#0A5A63] hover:bg-[#07454C] transition-all duration-300 shadow-[0_8px_25px_rgba(10,90,99,0.35)] hover:shadow-[0_12px_32px_rgba(10,90,99,0.5)] transform hover:-translate-y-0.5 group border border-[#0A5A63]/60"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
