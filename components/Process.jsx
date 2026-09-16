'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, BarChart3, Puzzle, Laptop, ClipboardCheck, TrendingUp } from 'lucide-react';

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
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileStep, setMobileStep] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const rafIdRef = useRef(null);

  // Detect mobile/tablet screen (< 1024px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile: Automatically run & glow cards in continuous series without dead intervals
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setMobileStep((prev) => (prev + 1) % processSteps.length);
    }, 1100);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Desktop: Automatic continuous smooth animation loop with no step delay (snake continuous)
  useEffect(() => {
    if (isMobile) return;

    let lastTime = null;
    let accumulatedTime = 0;
    const DURATION = 7500; // 7.5s active continuous inking traversal across all 6 steps (~1.25s per step)
    const HOLD_TIME = 600;  // 600ms hold when step 6 reaches completion
    const RESET_TIME = 400; // 400ms smooth fade reset before next wave
    const TOTAL_CYCLE = DURATION + HOLD_TIME + RESET_TIME;

    const animate = (currentTime) => {
      if (lastTime === null) {
        lastTime = currentTime;
      }
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      accumulatedTime = (accumulatedTime + Math.min(delta, 100)) % TOTAL_CYCLE;
      const elapsed = accumulatedTime;

      if (elapsed < DURATION) {
        setIsResetting(false);
        setSmoothProgress(elapsed / DURATION);
      } else if (elapsed < DURATION + HOLD_TIME) {
        setIsResetting(false);
        setSmoothProgress(1);
      } else {
        setIsResetting(true);
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isMobile]);

  // Synchronized inking progress and active step split
  const isMobileView = isMobile;

  const activeStep = isMobileView
    ? mobileStep
    : Math.min(Math.floor(smoothProgress * 5.99), 5);

  const isResting = isMobileView ? false : isResetting;

  const inkingProgress = isMobileView
    ? (mobileStep + 1) / processSteps.length
    : smoothProgress;

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative h-auto py-14 sm:py-18 lg:py-24 bg-[#ece8df] select-none overflow-hidden"
    >
      {/* Natural Stage Container */}
      <div className="relative h-auto w-full flex flex-col justify-center pt-0 sm:pt-1 pb-2 sm:pb-4 overflow-hidden z-20">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div className="max-w-3xl lg:max-w-4xl">
              <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight leading-snug">
                A Clear Process for Better Marketing <br className="hidden sm:inline" />
                <span className="relative inline-block pb-1 mt-0.5">
                  Decisions
                  <span className="absolute bottom-0 left-0 w-28 sm:w-36 h-[2.5px] bg-[#8fa687] rounded-full"></span>
                </span>
              </h2>
            </div>
          </div>

          {/* 6 Connected Steps Roadmap with Scroll-Driven Vine Inking */}
          <div className="relative w-full py-4">
            {/* Freehand Gestural Botanical Connecting Path (Mobile/Tablet 2-Col SVG) */}
            <div className="block lg:hidden absolute inset-0 pointer-events-none z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Subtle background dotted guide trace */}
                <path
                  d="M 25 9 L 75 9 C 96 9, 96 25.75, 50 25.75 C 4 25.75, 4 42.5, 25 42.5 L 75 42.5 C 96 42.5, 96 59.25, 50 59.25 C 4 59.25, 4 76, 25 76 L 75 76"
                  stroke="#b5c4af"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />

                {/* 2. Inked Vine Path on Mobile (Auto-advancing with smooth transition) */}
                <path
                  pathLength="1000"
                  d="M 25 9 L 75 9 C 96 9, 96 25.75, 50 25.75 C 4 25.75, 4 42.5, 25 42.5 L 75 42.5 C 96 42.5, 96 59.25, 50 59.25 C 4 59.25, 4 76, 25 76 L 75 76"
                  stroke="#0d3822"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  style={{
                    strokeDasharray: '1000',
                    strokeDashoffset: `${1000 * (1 - Math.min(inkingProgress * 1.05, 1))}`,
                    transition: isMobile ? 'stroke-dashoffset 0.7s ease-out' : 'none',
                  }}
                />
              </svg>
            </div>

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

                {/* 2. Inked Vine Path (Continuous Automatic Glide) */}
                <path
                  d="M 90 30 Q 180 50 270 30 T 450 30 T 630 30 T 810 30 T 1010 30"
                  stroke="#0d3822"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: '1000',
                    strokeDashoffset: `${1000 * (1 - Math.min(inkingProgress * 1.05, 1))}`,
                    opacity: isResetting ? 0 : 1,
                    transition: isResetting ? 'opacity 0.35s ease-out' : 'none',
                  }}
                />

                {/* 3. Luminous Gliding Energy Pulse */}
                <circle
                  cx={90 + Math.min(inkingProgress * 1.05, 1) * 920}
                  cy="30"
                  r="6"
                  fill="#8fa687"
                  className="drop-shadow-[0_0_10px_#8fa687]"
                  style={{
                    opacity: isResetting ? 0 : 1,
                    transition: isResetting ? 'opacity 0.35s ease-out' : 'none',
                  }}
                />
              </svg>
            </div>

            {/* 6 Process Nodes in Sequence */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 lg:gap-3 relative z-10">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isPassed = !isResting && index < activeStep;
                const isCurrent = !isResting && index === activeStep;
                const isCompletedOrActive = isCurrent || isPassed;

                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (isMobile) setMobileStep(index);
                    }}
                    className={`group relative overflow-hidden flex flex-col items-center text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl cursor-pointer will-change-transform transition-all duration-700 ease-out ${
                      isCurrent
                        ? 'shadow-[0_14px_32px_rgba(13,56,34,0.15)] border-2 border-[#8fa687] -translate-y-1.5 sm:-translate-y-2 scale-[1.02] sm:scale-[1.03] ring-2 ring-[#8fa687]/30 opacity-100 z-20'
                        : isPassed
                        ? 'border border-[#d9d0c1] shadow-sm opacity-100'
                        : 'border border-transparent opacity-60 hover:opacity-80'
                    }`}
                  >
                    {/* 1. Base Muted Background Layer */}
                    <div className="absolute inset-0 bg-[#ede7dc]/55 -z-20"></div>

                    {/* 2. Smooth Fade-in Warm Ivory Layer (#fbf9f4) */}
                    <div
                      className={`absolute inset-0 bg-[#fbf9f4] -z-10 transition-opacity duration-700 ease-out ${
                        isCompletedOrActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    ></div>

                    {/* Connected Step Node Icon */}
                    <div className="relative mb-2.5 sm:mb-3.5 flex items-center justify-center">
                      <div
                        className={`w-11 h-11 min-[375px]:w-12 min-[375px]:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-700 ease-out ${
                          isCurrent
                            ? 'bg-[#0d3822] text-[#fbf9f4] shadow-md ring-4 ring-[#8fa687]/35 scale-105 rotate-3'
                            : isPassed
                            ? 'bg-[#0d3822] text-[#fbf9f4] border border-[#0d3822]'
                            : 'bg-[#dfd7c8] text-[#7d8f7e] border border-[#cec2af]'
                        }`}
                      >
                        <IconComponent size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={isCompletedOrActive ? 2.2 : 1.8} />
                      </div>

                      {/* Step Number Tag Badge */}
                      <span
                        className={`absolute -top-1.5 -right-1.5 text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full border transition-all duration-700 ease-out ${
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
                      className={`text-[9px] min-[375px]:text-[9.5px] sm:text-[10px] font-semibold tracking-wider uppercase mb-0.5 sm:mb-1 transition-colors duration-700 ease-out ${
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
                      className={`font-raleway text-[14.5px] min-[375px]:text-[15.5px] sm:text-lg font-semibold mb-1 sm:mb-1.5 transition-colors duration-700 ease-out ${
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
                      className={`text-[11px] min-[375px]:text-[11.5px] sm:text-xs leading-normal sm:leading-relaxed line-clamp-3 transition-colors duration-700 ease-out ${
                        isCompletedOrActive ? 'text-[#445847]' : 'text-[#6f8270]'
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Active Indicator Pulse Dot */}
                    <div
                      className={`mt-2 sm:mt-3 w-1.5 h-1.5 rounded-full transition-all duration-700 ease-out ${
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
