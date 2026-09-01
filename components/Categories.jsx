'use client';

import React, { useRef, useState, useEffect } from 'react';

const categories = [
  {
    id: '01',
    tag: 'Formulation',
    title: 'Nutraceuticals',
    description: 'Science-backed nutrients, vitamins, and bio-available supplements engineered for optimal vitality.',
    image: '/images/Nutraceuticals.png',
    stats: 'Clinical Credibility',
  },
  {
    id: '02',
    tag: 'Heritage',
    title: 'Herbal & Ayurvedic',
    description: 'Ancient botanical wisdom reimagined through rigorous modern extraction and pure processing.',
    image: '/images/herbal.png',
    stats: 'Time-Tested Purity',
  },
  {
    id: '03',
    tag: 'Wellness',
    title: 'Dietary Supplements',
    description: 'Daily tailored nutritional support designed to enhance immunity, cognition, and longevity.',
    image: '/images/Dietary_Supplements.png',
    stats: 'Daily Performance',
  },
  {
    id: '04',
    tag: 'Nutrition',
    title: 'Functional Foods',
    description: 'Nutrient-dense superfoods, functional beverages, and elixirs that seamlessly blend taste with healing.',
    image: '/images/Functional_Foods.png',
    stats: 'Active Nourishment',
  },
  {
    id: '05',
    tag: 'Sourcing',
    title: 'Botanical Ingredients',
    description: 'Pure, potent, and sustainably harvested plant extracts cultivated with ethical agricultural practices.',
    image: '/images/Botanical_Ingredients.png',
    stats: '100% Traceable',
  },
  {
    id: '06',
    tag: 'Manufacturing',
    title: 'Contract Manufacturing',
    description: 'State-of-the-art cGMP certified facilities delivering end-to-end production with uncompromised precision.',
    image: '/images/contract.png',
    stats: 'cGMP Certified',
  },
  {
    id: '07',
    tag: 'Branding',
    title: 'Private-Label Products',
    description: 'Turnkey market-ready formulations tailored to elevate your brand identity and accelerate go-to-market speed.',
    image: '/images/private_label.png',
    stats: 'Turnkey Solutions',
  },
  {
    id: '08',
    tag: 'Lifestyle',
    title: 'Healthcare & Lifestyle',
    description: 'Comprehensive preventive care and holistic wellness rituals created for modern balanced living.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    stats: 'Holistic Impact',
  },
];

// Tripled set for continuous seamless infinite wrapping
const infiniteCategories = [...categories, ...categories, ...categories];

export default function Categories() {
  const trackRef = useRef(null);
  const [singleCardStep, setSingleCardStep] = useState(320);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const offsetRef = useRef(0);
  const rafIdRef = useRef(null);
  const isHoveredRef = useRef(false);

  // Keep hover ref in sync for 60fps loop
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  // Measure card spacing on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (!trackRef.current) return;
      const cards = trackRef.current.querySelectorAll('.category-card-item');
      if (cards.length > 1) {
        const step = cards[1].offsetLeft - cards[0].offsetLeft;
        if (step > 0) setSingleCardStep(step);
      }
    };

    updateDimensions();
    const timer = setTimeout(updateDimensions, 400);
    window.addEventListener('resize', updateDimensions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Butter-smooth automatic 60fps infinite translation loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      const loopWidth = singleCardStep * categories.length;

      if (!isHoveredRef.current && loopWidth > 0) {
        // Continuous steady glide (~50px per second)
        const speed = 0.050 * delta;
        offsetRef.current += speed;

        if (offsetRef.current >= loopWidth) {
          offsetRef.current -= loopWidth;
        }

        setCurrentOffset(offsetRef.current);
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [singleCardStep]);

  // Dynamic active card index (01 to 08) that updates in real time as carousel glides
  const activeCardIndex = singleCardStep > 0
    ? (Math.floor((currentOffset + singleCardStep * 0.5) / singleCardStep) % categories.length) + 1
    : 1;

  return (
    <section id="categories" className="relative py-16 sm:py-20 md:py-24 bg-[#ece8df] select-none overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-20 mb-8 sm:mb-10">
        {/* Header Bar with Dynamic Minimal Category Counter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-raleway text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[44px] text-[#0d3822] font-semibold tracking-tight whitespace-nowrap">
              Built for the{' '}
              <span className="relative inline-block pb-1">
                Business of Wellness
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#8fa687] rounded-full"></span>
              </span>
            </h2>
          </div>

          {/* Dynamic Real-Time Minimal Counter (Top Right: 01/08 -> 08/08) */}
          <div className="font-mono text-base sm:text-lg md:text-xl font-bold text-[#0d3822] tracking-tight pb-1.5 select-none self-start md:self-auto">
            <span>{String(activeCardIndex).padStart(2, '0')}</span>
            <span className="text-[#8e9e8f] font-normal text-sm sm:text-base">/08</span>
          </div>
        </div>
      </div>

      {/* 4-Card Framed Viewport Container with Infinite Automatic Animation & Hover Zoom */}
      <div
        className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden relative w-full -my-6 py-6 sm:-my-8 sm:py-8 px-3 sm:px-5">
          {/* Horizontal Track with Continuous Infinite Glide */}
          <div
            ref={trackRef}
            className="relative flex gap-4 sm:gap-5 md:gap-6 will-change-transform items-center py-6"
            style={{
              transform: `translate3d(-${currentOffset}px, 0px, 0px)`,
            }}
          >
            {/* Infinite Category Cards Stream */}
            {infiniteCategories.map((item, index) => {
              return (
                <div
                  key={index}
                  className="category-card-item group relative flex-shrink-0 flex-[0_0_calc((100%-3*1rem)/4)] sm:flex-[0_0_calc((100%-3*1.25rem)/4)] md:flex-[0_0_calc((100%-3*1.5rem)/4)] w-[calc((100%-3*1rem)/4)] sm:w-[calc((100%-3*1.25rem)/4)] md:w-[calc((100%-3*1.5rem)/4)] max-w-[calc((100%-3*1.5rem)/4)] min-w-0 h-[375px] sm:h-[400px] md:h-[420px] bg-[#143520] overflow-hidden rounded-2xl sm:rounded-[1.25rem] transition-all duration-300 ease-out select-none cursor-pointer flex flex-col justify-between will-change-transform hover:scale-[1.05] hover:z-30 hover:shadow-[0_20px_40px_rgba(13,56,34,0.22)] hover:ring-2 hover:ring-[#c5deb9]/90"
                  style={{
                    transformOrigin: 'center center',
                  }}
                >
                  {/* 100% Full-Bleed Cover Image with Smooth Hover Zoom */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Theme Light Green (#d1ddcc) Soft Gradient Scrim - Clean Organic Luxury Finish */}
                  <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#d1ddcc] via-[#d1ddcc]/95 via-60% to-transparent pointer-events-none"></div>

                  {/* Top Bar: Soft Badges */}
                  <div className="relative z-20 p-4 sm:p-5 flex items-center justify-between">
                    {/* Dark Forest Pill Tag */}
                    <span className="px-3 py-1 backdrop-blur-md rounded-full text-[10px] font-semibold tracking-wider uppercase transition-colors duration-300 bg-[#0d3822] text-[#fbf9f4] shadow-sm">
                      {item.tag}
                    </span>

                    {/* Light Linen Index Pill */}
                    <span className="px-2.5 py-1 backdrop-blur-md rounded-full text-[10px] font-mono font-bold transition-colors duration-300 bg-white/90 text-[#0d3822] border border-[#cfc5b3] shadow-sm">
                      {item.id}
                    </span>
                  </div>

                  {/* Bottom Content Area Over Light Green Base with Crisp Dark Green Typography */}
                  <div className="relative z-20 p-4 sm:p-5 transition-transform duration-300 group-hover:-translate-y-1">
                    {/* Domain Meta */}
                    <div className="text-[10.5px] font-bold text-[#1a4b2c] tracking-widest uppercase mb-1">
                      {item.stats}
                    </div>

                    {/* Headline in Signature Dark Forest Green */}
                    <h3 className="font-raleway text-lg sm:text-xl font-bold leading-snug mb-2 text-[#0d3822] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description in Soft Dark Botanical Green */}
                    <p className="text-xs text-[#2c4834] leading-relaxed line-clamp-3 font-medium opacity-95 group-hover:opacity-100 transition-opacity">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
