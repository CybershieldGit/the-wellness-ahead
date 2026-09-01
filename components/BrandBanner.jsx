import React from 'react';

export default function BrandBanner() {
  return (
    <section className="py-12 md:py-16 bg-[#ece8df]">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden bg-[#e5dcce] border border-[#d6ccbc] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-sm">
          {/* Subtle background growth line vector */}
          <div className="absolute right-12 top-8 opacity-25 pointer-events-none hidden md:block">
            <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 180L70 140L130 155L190 85L270 20" stroke="#8fa687" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M250 20H270V40" stroke="#8fa687" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="20" y="160" width="16" height="30" fill="#8fa687" opacity="0.3" rx="2" />
              <rect x="80" y="120" width="16" height="70" fill="#8fa687" opacity="0.4" rx="2" />
              <rect x="140" y="100" width="16" height="90" fill="#8fa687" opacity="0.5" rx="2" />
              <rect x="200" y="60" width="16" height="130" fill="#8fa687" opacity="0.6" rx="2" />
              <rect x="260" y="20" width="16" height="170" fill="#8fa687" opacity="0.7" rx="2" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Text Block */}
            <div className="lg:col-span-7 flex flex-col items-start justify-center">
              <h2 className="font-raleway text-2xl sm:text-3xl lg:text-[34px] leading-[1.35] text-[#123321] font-medium tracking-tight">
                The Wellness Ahead helps translate product strengths, technical knowledge and business goals into communication that audiences can understand, trust and act upon.
              </h2>
              <a
                href="#about"
                className="mt-10 inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-medium text-white bg-[#0e3520] hover:bg-[#082415] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Know About Us
              </a>
            </div>

            {/* Right Product Mockup */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#d2c5b3] bg-[#ded5c6] group">
                <img
                  src="/images/brand_banner.png"
                  alt="Premium botanical wellness formulation and amber apothecary packaging"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
