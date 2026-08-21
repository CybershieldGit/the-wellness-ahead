import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] md:min-h-screen flex items-center justify-start overflow-hidden pt-28 sm:pt-32 pb-16 md:pb-20">
      {/* Background Image with Forest Meditation & Sunbeams */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/banner.png"
          alt="The Wellness Ahead Banner"
          className="w-full h-full object-cover object-[center_20%]"
        />
        {/* Clean subtle contrast scrim to preserve natural forest sunbeams while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 via-55% to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-4 md:pt-8 -mt-6 md:-mt-10">
        <div className="max-w-5xl lg:max-w-[980px]">
          {/* Main Headline (Clean Duotone Luxury Contrast Pattern) */}
          <h1 className="font-raleway text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] text-white tracking-[0.025em] drop-shadow-sm flex flex-col gap-3 sm:gap-4 font-normal leading-tight">
            <span className="block">
              <span className="text-[#c5deb9] font-medium drop-shadow-[0_2px_16px_rgba(197,222,185,0.3)]">
                Strategic Marketing
              </span>{' '}
              That Makes
            </span>
            <span className="block">Wellness Brands Stand Out.</span>
          </h1>

          {/* Subtitle with increased line height & letter-spacing */}
          <p className="mt-7 text-base sm:text-lg md:text-xl text-gray-200 font-normal leading-[1.8] tracking-[0.03em] max-w-2xl drop-shadow-sm">
            We help wellness brands build trust, strengthen their positioning, and grow through focused, industry-specific marketing.
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-medium text-[#112316] bg-[#9eb393] hover:bg-[#8da382] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-medium text-white border border-white/50 hover:bg-white/15 hover:border-white/80 backdrop-blur-md transition-all duration-200 shadow-sm"
            >
              Start Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
