import React, { useState, useEffect } from 'react';

const heroBackgroundSlides = [
  {
    url: '/images/banner.png',
    alt: 'Serene sunlit forest meditation and botanical harmony',
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=85',
    alt: 'Strategic marketing advisory, brand positioning and commercial growth planning',
  },
  {
    url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1920&q=85',
    alt: 'Authentic Ayurvedic botanical extracts and amber apothecary formulation',
  },
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85',
    alt: 'Organic botanical vitality and natural herbal restorative wellness',
  },
  {
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=85',
    alt: 'Holistic lifestyle and mindful sunrise wellness',
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
    <section id="home" className="relative min-h-[92vh] md:min-h-screen flex items-center justify-start overflow-hidden pt-28 sm:pt-32 pb-16 md:pb-20">
      {/* Cinematic Ambient Video-Like Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#07170e]">
        {heroBackgroundSlides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                className={`w-full h-full object-cover object-[center_center] transition-transform duration-[6000ms] ease-out will-change-transform ${
                  isActive ? 'scale-[1.02]' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Clean subtle contrast scrim to preserve natural vibrant imagery while ensuring razor-sharp text readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/75 via-black/35 via-55% to-transparent"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#07170e]/80 via-transparent to-black/20"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-30 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-4 md:pt-8 -mt-6 md:-mt-10">
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
