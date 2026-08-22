import React, { useState, useEffect, useRef } from 'react';
import { Search, BarChart3, Puzzle, Laptop, ClipboardCheck, TrendingUp, Sparkles } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    tag: 'Foundations',
    description: 'Understand the business, products, audience and challenges.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Research',
    tag: 'Intelligence',
    description: 'Review competition, category and communication gaps.',
    icon: BarChart3,
  },
  {
    step: '03',
    title: 'Strategies',
    tag: 'Positioning',
    description: 'Define positioning, messaging and action plans.',
    icon: Puzzle,
  },
  {
    step: '04',
    title: 'Develop',
    tag: 'Execution',
    description: 'Create marketing assets and high-converting communication.',
    icon: Laptop,
  },
  {
    step: '05',
    title: 'Review',
    tag: 'Alignment',
    description: 'Evaluate clarity, consistency and strategic alignment.',
    icon: ClipboardCheck,
  },
  {
    step: '06',
    title: 'Improve',
    tag: 'Optimization',
    description: 'Refine continuously based on results and market changes.',
    icon: TrendingUp,
  },
];

export default function Process() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef(null);

  useEffect(() => {
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

    // 60/120fps physics dampening loop for buttery-smooth scroll inking
    const physicsLoop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.00005) {
        currentProgressRef.current += diff * 0.14; // Buttery 14% spring dampening
        setSmoothProgress(currentProgressRef.current);
      }
      rafIdRef.current = requestAnimationFrame(physicsLoop);
    };

    rafIdRef.current = requestAnimationFrame(physicsLoop);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Synchronized inking progress (0.0 to 1.0)
  const inkingProgress = smoothProgress;

  // Active step index (0 to 5) determined by real scroll progress
  const activeStep = Math.min(Math.floor(smoothProgress * 5.99), 5);
  const isResting = smoothProgress <= 0.008;

  return (
    <section ref={containerRef} id="process" className="relative h-[240vh] bg-[#ece8df] select-none">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center pt-0 sm:pt-1 pb-2 sm:pb-4 overflow-hidden z-20">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header with Live Scroll Progress Tracker */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div className="max-w-3xl lg:max-w-4xl flex-1">
              <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight leading-snug">
                A Clear Process for Better Marketing <br className="hidden sm:inline" />
                <span className="relative inline-block pb-1 mt-0.5">
                  Decisions
                  <span className="absolute bottom-0 left-0 w-28 sm:w-36 h-[2.5px] bg-[#8fa687] rounded-full"></span>
                </span>
              </h2>
            </div>

            {/* Smooth 60fps Scroll Progress Indicator */}
            <div className="flex items-center gap-3 bg-[#e2dcce]/70 px-4 py-2 rounded-full border border-[#d2c9b8] backdrop-blur-sm self-start md:self-auto">
              <div className="text-xs font-semibold text-[#143420] tracking-wider uppercase flex items-center gap-1 min-w-[50px]">
                <span className="font-bold text-[#0d3822] text-sm">
                  {isResting ? '01' : `0${activeStep + 1}`}
                </span>
                <span className="text-[#7d8f7e]">/ 06</span>
              </div>
              {/* Progress Bar */}
              <div className="w-28 sm:w-36 h-2 rounded-full bg-[#cfc5b2] overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-[#0d3822] rounded-full will-change-transform origin-left"
                  style={{
                    transform: `scaleX(${Math.max(inkingProgress, 0.08)})`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* 6 Connected Steps Roadmap with Scroll-Driven Vine Inking */}
          <div className="relative w-full py-4">
            {/* Freehand Gestural Botanical Connecting Path (Desktop SVG) */}
            <div className="hidden lg:block absolute top-[44px] left-0 right-0 h-[60px] pointer-events-none z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 1100 60"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Subtle background dotted guide trace */}
                <path
                  d="M 90 30 Q 180 50 270 30 T 450 30 T 630 30 T 810 30 T 1010 30"
                  stroke="#b5c4af"
                  strokeWidth="3"
                  strokeDasharray="8 10"
                  strokeLinecap="round"
                />

                {/* 2. Scroll-Driven Inked Vine Path (Syncs 1:1 with Scroll Progress) */}
                <path
                  d="M 90 30 Q 180 50 270 30 T 450 30 T 630 30 T 810 30 T 1010 30"
                  stroke="#0d3822"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: '1000',
                    strokeDashoffset: `${1000 * (1 - Math.min(inkingProgress * 1.05, 1))}`,
                  }}
                />

                {/* 3. Luminous Gliding Energy Pulse */}
                <circle
                  cx={90 + Math.min(inkingProgress * 1.05, 1) * 920}
                  cy="30"
                  r="6"
                  fill="#8fa687"
                  className="drop-shadow-[0_0_10px_#8fa687]"
                />
              </svg>
            </div>

            {/* 6 Process Nodes in Sequence */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-3 relative z-10">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isPassed = !isResting && index < activeStep;
                const isCurrent = !isResting && index === activeStep;
                const isCompletedOrActive = isCurrent || isPassed;

                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl cursor-pointer will-change-transform transition-all duration-700 ease-out ${
                      isCurrent
                        ? 'shadow-[0_14px_32px_rgba(13,56,34,0.15)] border-2 border-[#8fa687] -translate-y-2 scale-[1.03] ring-2 ring-[#8fa687]/30 opacity-100 z-20'
                        : isPassed
                        ? 'border border-[#d9d0c1] shadow-sm opacity-100'
                        : 'border border-transparent opacity-60 hover:opacity-80'
                    }`}
                  >
                    {/* 1. Base Muted Background Layer (Always present) */}
                    <div className="absolute inset-0 bg-[#ede7dc]/55 -z-20"></div>

                    {/* 2. Smooth Fade-in Warm Ivory Layer (#fbf9f4) */}
                    <div
                      className={`absolute inset-0 bg-[#fbf9f4] -z-10 transition-opacity duration-700 ease-out ${
                        isCompletedOrActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    ></div>

                    {/* Connected Step Node Icon */}
                    <div className="relative mb-3.5 flex items-center justify-center">
                      <div
                        className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ease-out ${
                          isCurrent
                            ? 'bg-[#0d3822] text-[#fbf9f4] shadow-md ring-4 ring-[#8fa687]/35 scale-105 rotate-3'
                            : isPassed
                            ? 'bg-[#0d3822] text-[#fbf9f4] border border-[#0d3822]'
                            : 'bg-[#dfd7c8] text-[#7d8f7e] border border-[#cec2af]'
                        }`}
                      >
                        <IconComponent size={22} strokeWidth={isCompletedOrActive ? 2.2 : 1.8} />
                      </div>

                      {/* Step Number Tag Badge */}
                      <span
                        className={`absolute -top-1.5 -right-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full border transition-all duration-700 ease-out ${
                          isCurrent
                            ? 'bg-[#8fa687] text-[#0d3822] border-[#8fa687]'
                            : isPassed
                            ? 'bg-[#0d3822] text-white border-[#0d3822]'
                            : 'bg-[#cfc4b2] text-[#556b53] border-[#bfb4a2]'
                        }`}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Step Stage Tag */}
                    <span
                      className={`text-[10px] font-semibold tracking-wider uppercase mb-1 transition-colors duration-700 ease-out ${
                        isCurrent
                          ? 'text-[#075f2c] font-bold'
                          : isPassed
                          ? 'text-[#6c8369] font-medium'
                          : 'text-[#8b9989]'
                      }`}
                    >
                      {step.tag}
                    </span>

                    {/* Step Title */}
                    <h3
                      className={`font-raleway text-base sm:text-lg font-semibold mb-1.5 transition-colors duration-700 ease-out ${
                        isCurrent
                          ? 'text-[#0d3822] font-bold'
                          : isPassed
                          ? 'text-[#183a24] font-semibold'
                          : 'text-[#5a6e5b]'
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p
                      className={`text-[11.5px] sm:text-xs leading-relaxed line-clamp-3 transition-colors duration-700 ease-out ${
                        isCompletedOrActive ? 'text-[#445847]' : 'text-[#6f8270]'
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Active Indicator Pulse Dot */}
                    <div
                      className={`mt-3 w-1.5 h-1.5 rounded-full transition-all duration-700 ease-out ${
                        isCurrent
                          ? 'bg-[#0d3822] scale-125'
                          : isPassed
                          ? 'bg-[#8fa687]'
                          : 'bg-transparent'
                      }`}
                    ></div>
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
