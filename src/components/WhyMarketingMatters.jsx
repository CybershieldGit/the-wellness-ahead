import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

const reasonsList = [
  {
    id: '01',
    navTitle: 'Industry-Relevant Thinking',
    hook: 'GENERIC AGENCY PLAYBOOKS FAIL WELLNESS. CATEGORY DEPTH CREATES MARKET DOMINANCE.',
    description: 'We shape strategies around the precise realities of nutraceutical, ayurvedic, dietary supplement and functional wellness businesses.',
    bullets: [
      'Nutraceutical Regulatory Clarity',
      'Ayurvedic & Herbal Heritage Translation',
      'Practitioner & Consumer Dual Audience Mapping',
      'Category Differentiation Architecture',
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    alt: 'Industry-Relevant Thinking wellness consultation',
  },
  {
    id: '02',
    navTitle: 'Research-Led Approach',
    hook: 'DATA OVER ASSUMPTIONS. CLINICAL EVIDENCE MEETS CONSUMER PURCHASE TRIGGERS.',
    description: 'Every marketing direction is supported by category benchmarking, competitive void analysis, and deep consumer psychographic insight.',
    bullets: [
      'Market Gap & Competitor Audits',
      'Formulation & Bioavailability Translation',
      'Consumer Purchase Trigger Discovery',
      'Compliance & Claims Alignment',
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    alt: 'Research-Led Approach clinical research notes and herbs',
  },
  {
    id: '03',
    navTitle: 'Clear Communication',
    hook: 'TRANSLATING COMPLEX SCIENCE INTO IRRESISTIBLE COMMERCIAL VALUE.',
    description: 'Complex formulations and scientific mechanisms translated into language that converts customers, distributors, and practitioner partners.',
    bullets: [
      'Simplifying Mechanism of Action',
      'Clear Hierarchy on Web & Packaging',
      'Eliminating Jargon without Losing Authority',
      'High-Impact B2B & Retail Pitch Decks',
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    alt: 'Clear Communication strategic collaboration',
  },
  {
    id: '04',
    navTitle: 'Practical Growth Alignment',
    hook: 'COMMERCIAL REALITY OVER VANITY METRICS. EVERY INITIATIVE DRIVES MEASURABLE TRACTION.',
    description: 'Marketing recommendations connected directly to commercial objectives, distribution pipelines, and realistic growth priorities.',
    bullets: [
      'Phased Market Rollout Architecture',
      'D2C & Pharmacy/Retail Channel Synergy',
      'Budget Allocation for Maximum ROI',
      'Structured Launch Roadmaps',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    alt: 'Practical Growth Alignment strategic execution',
  },
  {
    id: '05',
    navTitle: 'Responsible Communication',
    hook: 'SUSTAINABLE BRAND VALUE IS BUILT ON ETHICAL TRUTH, NOT EXAGGERATED HYPE.',
    description: 'Communication designed to educate and inspire long-term consumer trust without resorting to short-lived gimmicks or pseudo-science.',
    bullets: [
      'Zero Gimmicks or Misleading Claims',
      'Transparent Sourcing & Potency Proof',
      'Long-Term Category Reputation Shield',
      'High Repeat Purchase & Brand Retention',
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    alt: 'Responsible ethical wellness communication',
  },
  {
    id: '06',
    navTitle: 'Strategic Before Tactical',
    hook: 'POSITIONING FIRST, PROMOTION SECOND. CLARITY PREVENTS WASTED MARKETING SPEND.',
    description: 'Absolute clarity on brand identity, positioning moat, and target audience before investing capital into tactical execution.',
    bullets: [
      'Defensible Category Differentiation',
      'Audience Persona & Need-State Mapping',
      'Core Brand Narrative Formulation',
      'Elimination of Unfocused Ad Spend',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    alt: 'Strategic Before Tactical leadership direction',
  },
];

export default function WhyMarketingMatters() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  // Reliable robust auto-advance interval that never gets permanently hung
  useEffect(() => {
    const startTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % reasonsList.length);
      }, 2600);
    };

    startTimer();

    // Handle tab visibility change so timer never drifts when tab is backgrounded
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        startTimer();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleSelectIndex = (index) => {
    setActiveIndex(index);
    // Restart timer from the newly selected index with a clean cadence
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasonsList.length);
    }, 3200);
  };

  const currentItem = reasonsList[activeIndex];

  return (
    <section id="why-marketing-matters" className="pt-14 md:pt-20 pb-4 md:pb-6 bg-[#ece8df] overflow-hidden select-none">
      <div className="max-w-[1400px] w-full mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfd7c8] border border-[#cfc4b2] text-xs font-semibold uppercase tracking-wider text-[#143420] mb-3 shadow-sm">
            <Sparkles size={14} className="text-[#0d3822]" />
            Specialized Advantage
          </div>
          <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight">
            Why Industry-Focused Marketing <br />
            <span className="relative inline-block pb-3 mt-1">
              Matters
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-[3px] bg-[#7a9170] rounded-full"></span>
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#3d5042] font-normal leading-relaxed max-w-2xl mx-auto">
            Wellness marketing goes beyond attractive design—it requires deep category insight, scientific translation, and responsible health communication.
          </p>
        </div>

        {/* 2-Column Side-by-Side Synchronized Interactive Showcase (Max-W 1240px) */}
        <div className="max-w-6xl lg:max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (5 Cols): Stacked Nav Headings */}
            <div className="lg:col-span-5 flex flex-col space-y-3 sm:space-y-4">
              {reasonsList.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={index}
                    onClick={() => handleSelectIndex(index)}
                    className={`group w-full text-left p-4 sm:p-4.5 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#fbf9f4] text-[#0d3822] border-l-4 border-l-[#0d3822] border-y border-r border-[#cfc5b3] shadow-[0_6px_20px_rgba(13,56,34,0.07)]'
                        : 'bg-[#fbf9f4]/40 hover:bg-[#fbf9f4]/85 text-[#657d67] hover:text-[#0d3822] border-l-4 border-l-transparent border-y border-r border-[#ddd6c9]/70 hover:border-r-[#cfc5b3]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      {/* Index Number */}
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md transition-colors duration-300 ${
                          isActive
                            ? 'bg-[#0d3822] text-[#fbf9f4]'
                            : 'bg-[#ded5c5] text-[#556d58] group-hover:bg-[#0d3822] group-hover:text-white'
                        }`}
                      >
                        {item.id}
                      </span>

                      {/* Uppercase Heading Title with Dark Green Highlight */}
                      <span
                        className={`font-raleway text-base sm:text-[17px] md:text-[18px] uppercase tracking-wide transition-colors duration-300 ${
                          isActive ? 'font-bold text-[#0d3822]' : 'font-semibold'
                        }`}
                      >
                        {item.navTitle}
                      </span>
                    </div>

                    {/* Active Chevron Indicator */}
                    <ChevronRight
                      size={19}
                      className={`transition-all duration-300 ${
                        isActive
                          ? 'opacity-100 translate-x-0 text-[#0d3822]'
                          : 'opacity-0 -translate-x-1.5 group-hover:opacity-40 group-hover:translate-x-0 text-[#0d3822]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column (7 Cols): Dynamic Swipe-Up Feature Showcase Card (Light Green #d1ddcc Theme) */}
            <div className="lg:col-span-7">
              <div className="bg-[#d1ddcc] text-[#0d3822] rounded-[2.25rem] p-6 sm:p-9 lg:p-10 shadow-[0_20px_50px_rgba(13,56,34,0.12)] border border-[#b8cbb4] relative overflow-hidden min-h-[460px] flex flex-col justify-between">
                {/* Background Ambient Glow */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#ffffff]/30 rounded-full blur-3xl pointer-events-none"></div>

                {/* Dynamic Swipe-Up Content Container with bulletproof key={activeIndex} */}
                <div
                  key={activeIndex}
                  className="relative z-10 animate-swipeUp"
                >
                  {/* Top Hook Statement */}
                  <h3 className="font-raleway text-lg sm:text-xl md:text-[22px] font-bold text-[#0d3822] uppercase tracking-tight leading-snug mb-3">
                    {currentItem.hook}
                  </h3>

                  {/* Subtitle Description */}
                  <p className="text-xs sm:text-sm text-[#38513e] leading-relaxed mb-6 font-normal">
                    {currentItem.description}
                  </p>

                  {/* 2-Column Inside Layout: Bullet Checklist + Compact Media */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-2">
                    {/* Bullets (7 cols) */}
                    <div className="sm:col-span-7">
                      <span className="text-[11px] font-bold tracking-widest text-[#1e462a] uppercase block mb-3">
                        KEY PILLARS & IMPACT:
                      </span>
                      <ul className="space-y-2.5">
                        {currentItem.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1c3822] font-semibold leading-tight">
                            <CheckCircle2 size={16} className="text-[#0d3822] flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Media Showcase (5 cols) */}
                    <div className="sm:col-span-5">
                      <div className="relative aspect-[4/3.2] rounded-2xl overflow-hidden border border-[#b4c8b0] shadow-md bg-[#c0d0bc]">
                        <img
                          src={currentItem.image}
                          alt={currentItem.navTitle}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation & Indicator Bar */}
                <div className="relative z-10 pt-6 mt-6 border-t border-[#b8cbb4]/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#143420]">
                    <span className="bg-[#fbf9f4]/80 px-2 py-0.5 rounded border border-[#b8cbb4]">
                      {currentItem.id} / 06
                    </span>
                    <span className="text-[#3b5541] font-sans font-medium text-[11px] uppercase tracking-wider hidden sm:inline-block">
                      {currentItem.navTitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {reasonsList.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => handleSelectIndex(dotIdx)}
                        className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                          activeIndex === dotIdx
                            ? 'w-6 bg-[#0d3822]'
                            : 'w-1.5 bg-[#8fa687]/60 hover:bg-[#0d3822]'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
