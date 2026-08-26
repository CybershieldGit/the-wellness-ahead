import React from 'react';

const credibilityStats = [
  {
    value: '12+',
    unit: 'Years',
    title: 'Experience',
    subtitle: 'Proven multi-channel growth',
  },
  {
    value: '100%',
    unit: 'Dedicated',
    title: 'Nutraceutical, Herbal & Wellness',
    subtitle: 'Category-specific expertise',
  },
  {
    value: '200+',
    unit: 'Brands',
    title: 'Brand Collaborations',
    subtitle: 'Startups to industry leaders',
  },
  {
    value: '5,000+',
    unit: 'Creators',
    title: 'Influencers Network',
    subtitle: 'Targeted wellness voices',
  },
];

export default function Credibility() {
  return (
    <section className="relative z-20 w-full bg-[#fbf9f4] border-y border-[#d5cbba] py-6 sm:py-8">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#d5cbba]/80">
          {credibilityStats.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center transition-all duration-200 ${
                idx !== 0 ? 'pt-5 sm:pt-0 lg:pl-8' : ''
              }`}
            >
              {/* Metric Number & Unit */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-raleway text-3xl sm:text-4xl md:text-[38px] font-bold text-[#0d3822] tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#617e65]">
                  {item.unit}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="text-[13px] sm:text-sm font-bold text-[#0d3822] tracking-wide leading-snug">
                {item.title}
              </div>
              <div className="text-xs text-[#627565] leading-relaxed mt-0.5">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
