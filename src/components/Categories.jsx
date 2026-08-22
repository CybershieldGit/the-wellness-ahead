import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: '01',
    tag: 'Formulation',
    title: 'Nutraceuticals',
    description: 'Science-backed nutrients, vitamins, and bio-available supplements engineered for optimal vitality.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    stats: 'Clinical Credibility',
  },
  {
    id: '02',
    tag: 'Heritage',
    title: 'Herbal & Ayurvedic',
    description: 'Ancient botanical wisdom reimagined through rigorous modern extraction and pure processing.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    stats: 'Time-Tested Purity',
  },
  {
    id: '03',
    tag: 'Wellness',
    title: 'Dietary Supplements',
    description: 'Daily tailored nutritional support designed to enhance immunity, cognition, and longevity.',
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80',
    stats: 'Daily Performance',
  },
  {
    id: '04',
    tag: 'Nutrition',
    title: 'Functional Foods',
    description: 'Nutrient-dense superfoods, functional beverages, and elixirs that seamlessly blend taste with healing.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    stats: 'Active Nourishment',
  },
  {
    id: '05',
    tag: 'Sourcing',
    title: 'Botanical Ingredients',
    description: 'Pure, potent, and sustainably harvested plant extracts cultivated with ethical agricultural practices.',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=800&q=80',
    stats: '100% Traceable',
  },
  {
    id: '06',
    tag: 'Manufacturing',
    title: 'Contract Manufacturing',
    description: 'State-of-the-art cGMP certified facilities delivering end-to-end production with uncompromised precision.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    stats: 'cGMP Certified',
  },
  {
    id: '07',
    tag: 'Branding',
    title: 'Private-Label Products',
    description: 'Turnkey market-ready formulations tailored to elevate your brand identity and accelerate go-to-market speed.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
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

export default function Categories() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef(null);
  const [singleCardStep, setSingleCardStep] = useState(308);

  // Measure and cache card bounds only on mount and resize (0 forced reflows during scroll)
  useEffect(() => {
    const updateDimensions = () => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const cards = track.querySelectorAll('.category-card-item');
      if (cards.length > 1) {
        const step = cards[1].offsetLeft - cards[0].offsetLeft;
        if (step > 0) setSingleCardStep(step);
      }
    };

    updateDimensions();
    const timer = setTimeout(updateDimensions, 400);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = container.offsetHeight - windowHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      targetProgressRef.current = progress;
      setScrollProgress(progress);
    };

    // 60/120fps physics dampening loop for buttery liquid motion
    const physicsLoop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.00005) {
        currentProgressRef.current += diff * 0.14; // Buttery 14% liquid spring
        setSmoothProgress(currentProgressRef.current);
      }
      rafIdRef.current = requestAnimationFrame(physicsLoop);
    };

    rafIdRef.current = requestAnimationFrame(physicsLoop);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      updateDimensions();
      handleScroll();
    });
    handleScroll();

    return () => {
      clearTimeout(timer);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const wavePathRef = useRef(null);
  const tendrilRef = useRef(null);
  const [wavePathLength, setWavePathLength] = useState(4800);
  const [tendrilLength, setTendrilLength] = useState(5000);

  useEffect(() => {
    const updatePathLengths = () => {
      if (wavePathRef.current) {
        const length = wavePathRef.current.getTotalLength();
        if (length > 0) setWavePathLength(length);
      }
      if (tendrilRef.current) {
        const length = tendrilRef.current.getTotalLength();
        if (length > 0) setTendrilLength(length);
      }
    };
    updatePathLengths();
    const timer = setTimeout(updatePathLengths, 300);
    return () => clearTimeout(timer);
  }, []);

  // Global Progress Timeline (0.0 to 7.0) across all 8 cards with liquid physics dampening
  const globalProgress = smoothProgress * (categories.length - 1);

  // Continuous high-order smootherstep for zero-jerk step boundary transitions
  const smoothStepSequence = (excess) => {
    const step = Math.floor(excess);
    const t = Math.max(0, Math.min(1, excess - step));
    // 5th-order smootherstep: 6t^5 - 15t^4 + 10t^3 (0 velocity and 0 acceleration at step boundaries)
    const smoothT = t * t * t * (t * (t * 6 - 15) + 10);
    return step + smoothT;
  };

  // Track Translation Calculation:
  // Phase 1 (0.0 <= g <= 3.0): Track stays at 0, wave zooms Cards 0 -> 1 -> 2 -> 3
  // Phase 2 (g > 3.0): Track shifts left 1 card step per unit as upcoming cards arrive at Slot 4 and zoom!
  let currentTranslateX = 0;
  if (globalProgress > 3.0) {
    const excess = globalProgress - 3.0; // 0.0 to 4.0
    currentTranslateX = smoothStepSequence(excess) * singleCardStep;
  }

  // Active highlighted card number (1 to 8)
  const activeCardNumber = Math.min(Math.floor(globalProgress) + 1, categories.length);

  return (
    <section ref={containerRef} className="relative h-[340vh] bg-[#ece8df]">
      {/* Sticky Full-Viewport Stage - Positioned with safe clearance below fixed navbar */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center pt-24 sm:pt-28 md:pt-30 pb-6 md:pb-8 overflow-hidden z-20 gap-6 sm:gap-8">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
          {/* Header Bar with Live Scroll Progress Indicator */}
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

            {/* Simple Minimal Index Counter (Top Right) */}
            <div className="font-mono text-base sm:text-lg md:text-xl font-bold text-[#0d3822] tracking-tight pb-1.5 select-none">
              <span>{String(activeCardNumber).padStart(2, '0')}</span>
              <span className="text-[#8e9e8f] font-normal text-sm sm:text-base">/{String(categories.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* 4-Card Framed Viewport Container (Aligned with Heading at Left, Exactly 4 Cards Visible) */}
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative">
          <div className="overflow-hidden relative w-full -my-6 py-6 sm:-my-8 sm:py-8 px-3 sm:px-5">
            {/* Horizontal Track of 8 Cards with Synchronized 1-by-1 Step Left Shift */}
            <div
              ref={trackRef}
              className="relative flex gap-4 sm:gap-5 md:gap-6 will-change-transform items-center py-6"
              style={{
                transform: `translate3d(-${currentTranslateX}px, 0px, 0px)`,
              }}
            >
              {/* 8 Category Reel Cards */}
              {categories.map((item, index) => {
                const dist = Math.abs(index - globalProgress);
                const mag = Math.max(0, 1 - Math.min(dist, 1.25));
                const smoothMag = Math.sin(mag * (Math.PI / 2));
                const scale = 0.94 + smoothMag * 0.14; // 0.94 resting -> 1.08 magnified (Card 0 is pre-zoomed at 1.08)
                const zIndex = Math.round(smoothMag * 20) + 10;
                const isCurrentlyMagnified = smoothMag > 0.40;

                return (
                  <div
                    key={index}
                    className={`category-card-item group relative flex-shrink-0 flex-[0_0_calc((100%-3*1rem)/4)] sm:flex-[0_0_calc((100%-3*1.25rem)/4)] md:flex-[0_0_calc((100%-3*1.5rem)/4)] w-[calc((100%-3*1rem)/4)] sm:w-[calc((100%-3*1.25rem)/4)] md:w-[calc((100%-3*1.5rem)/4)] max-w-[calc((100%-3*1.5rem)/4)] min-w-0 h-[375px] sm:h-[400px] md:h-[420px] bg-[#143520] overflow-hidden rounded-2xl sm:rounded-[1.25rem] transition-all duration-300 ease-out select-none cursor-pointer flex flex-col justify-between will-change-transform opacity-100 ${isCurrentlyMagnified
                      ? 'ring-2 ring-[#c5deb9]/80'
                      : ''
                      }`}
                    style={{
                      transform: `scale(${scale})`,
                      zIndex: zIndex,
                      transformOrigin: 'center center',
                    }}
                  >
                    {/* 100% Full-Bleed Cover Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${isCurrentlyMagnified ? 'scale-105' : 'scale-100'
                        }`}
                      loading="lazy"
                    />

                    {/* Cinematic Vignette & Text Readability Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 via-50% to-black/25 pointer-events-none transition-colors duration-500 ${isCurrentlyMagnified ? 'from-black/90' : 'from-black/95'
                        }`}
                    ></div>

                    {/* Top Bar: Soft Badges */}
                    <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                      {/* Soft Linen Tag */}
                      <span
                        className={`px-3 py-1 backdrop-blur-md rounded-full text-[10px] font-semibold tracking-wider uppercase transition-colors duration-300 ${isCurrentlyMagnified
                          ? 'bg-[#c5deb9] text-[#0d3822] shadow-md font-bold'
                          : 'bg-white/90 text-[#0d3822]'
                          }`}
                      >
                        {item.tag}
                      </span>

                      {/* Soft Dark Index Pill */}
                      <span
                        className={`px-2.5 py-1 backdrop-blur-md rounded-full text-[10px] font-mono font-medium transition-colors duration-300 ${isCurrentlyMagnified
                          ? 'bg-[#0d3822] text-[#c5deb9] border border-[#c5deb9]/40'
                          : 'bg-black/60 text-[#c5deb9] border border-white/15'
                          }`}
                      >
                        {item.id}
                      </span>
                    </div>

                    {/* Bottom Content Area Over Photo */}
                    <div className="relative z-10 p-4 sm:p-5">
                      {/* Domain Meta */}
                      <div className="text-[10px] font-semibold text-[#c5deb9] tracking-widest uppercase mb-1 drop-shadow-sm">
                        {item.stats}
                      </div>

                      {/* Headline */}
                      <h3
                        className={`font-raleway text-lg sm:text-xl font-bold leading-snug mb-2 drop-shadow-md transition-colors duration-300 ${isCurrentlyMagnified ? 'text-[#c5deb9]' : 'text-white'
                          }`}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#e3ece2] leading-relaxed line-clamp-3 drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
