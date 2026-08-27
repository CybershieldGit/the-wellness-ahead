'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Award,
  Globe,
  Feather,
  Briefcase,
  Users,
  Compass,
  Rocket,
  SearchCheck,
  CalendarDays,
  ChevronDown,
  Target
} from 'lucide-react';

const iconMap = {
  Compass,
  Layers,
  Feather,
  Award,
  Globe,
  Sparkles,
  Users,
  Rocket,
  Briefcase,
  SearchCheck,
  CalendarDays
};

export default function ServicesStickyScroll({ services }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);
  const tickingRef = useRef(false);

  useEffect(() => {
    const updateArcMotion = () => {
      const vh = window.innerHeight;
      const viewportCenter = vh * 0.44;
      let closestIdx = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, idx) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const cardCenter = rect.top + rect.height * 0.5;
          const diff = cardCenter - viewportCenter;
          const absDiff = Math.abs(diff);

          if (absDiff < minDistance) {
            minDistance = absDiff;
            closestIdx = idx;
          }

          // Normalized distance: -1 (above center), 0 (dead center), +1 (below center)
          const normalized = Math.max(-1.4, Math.min(1.4, diff / (vh * 0.42)));
          
          // True Circular Arc Trajectory Physics (Anchored on the Right Edge)
          const arcTranslateX = Math.pow(normalized, 2) * 115; // 0px to 115px rightward arc sweep
          const arcRotate = normalized * 7.5; // -10.5deg to +10.5deg circular tangent rotation
          const arcScale = Math.max(0.88, 1.02 - Math.abs(normalized) * 0.1);
          const opacity = Math.max(0.45, 1 - Math.abs(normalized) * 0.45);

          // Direct instantaneous transform application (NO transition lag on outer wrapper)
          el.style.transform = `translate3d(${arcTranslateX.toFixed(1)}px, 0, 0) rotate(${arcRotate.toFixed(2)}deg) scale(${arcScale.toFixed(3)})`;
          el.style.opacity = opacity.toFixed(2);
          el.style.transformOrigin = '90% 50%';
        }
      });

      setActiveIndex(closestIdx);
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(updateArcMotion);
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    
    updateArcMotion();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [services]);

  const activeService = services[activeIndex] || services[0];
  const ActiveIcon = iconMap[activeService.iconName] || Compass;

  return (
    <div className="relative">
      
      {/* Mobile/Tablet Section Header (Visible only on < lg screens) */}
      <div className="lg:hidden max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfd7c8] border border-[#cfc4b2] text-xs font-semibold uppercase tracking-wider text-[#143420] mb-3.5 shadow-sm">
          <Target size={14} className="text-[#0d3822]" />
          <span>Our Capabilities</span>
        </div>
        <h2 className="font-raleway text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0d3822] tracking-tight leading-[1.18] mb-3">
          Structured Advisory &amp; Execution Support
        </h2>
        <p className="text-base text-[#405644] font-normal leading-relaxed">
          Whether you require a defined strategic foundation, targeted communication assets, or an ongoing fractional marketing advisory partner.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
        
        {/* Pinned Sticky Left Editorial Column (Permanently Freezes Section Heading, Subheading & Active Details) */}
        <div className="hidden lg:block lg:col-span-5 sticky top-28 xl:top-32 z-20 pr-4 xl:pr-6">
          <div className="flex flex-col justify-between">
            
            {/* 1. Main Section Heading & Subheading (Frozen On Screen) */}
            <div className="mb-7 pb-5 border-b border-[#d8cfbe]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfd7c8] border border-[#cfc4b2] text-xs font-semibold uppercase tracking-wider text-[#143420] mb-3 shadow-sm">
                <Target size={13} className="text-[#0d3822]" />
                <span>Our Capabilities</span>
              </div>
              <h2 className="font-raleway text-3xl sm:text-4xl xl:text-[38px] 2xl:text-[42px] font-bold text-[#0d3822] tracking-tight leading-[1.18] mb-3">
                Structured Advisory &amp; Execution Support
              </h2>
              <p className="text-xs sm:text-[14px] text-[#405644] font-normal leading-relaxed">
                Whether you require a defined strategic foundation, targeted communication assets, or an ongoing fractional marketing advisory partner.
              </p>
            </div>

            {/* 2. Top Indicator: Live Progress & Active Category */}
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[#dfd6c6]">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#075f2c]">
                  CAPABILITY {activeService.number} OF {services.length.toString().padStart(2, '0')}
                </span>
                <span className="text-[11px] text-[#9eb393]">•</span>
                <span className="text-[11px] font-medium text-[#6e856b] uppercase tracking-wider">
                  {activeService.category}
                </span>
              </div>

              {/* Minimalist Progress Percentage */}
              <div className="flex items-center gap-2">
                <div className="w-14 h-1 bg-[#ded5c5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#075f2c] transition-all duration-500 ease-out"
                    style={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs font-mono font-bold text-[#0d3822]">
                  {Math.round(((activeIndex + 1) / services.length) * 100)}%
                </span>
              </div>
            </div>

            {/* 3. Active Service Title with Smooth Key Transition */}
            <div className="relative min-h-[64px] mb-2">
              <h3
                key={`title-${activeService.id}`}
                className="font-raleway text-2xl xl:text-[26px] font-bold text-[#0d3822] tracking-tight leading-snug animate-fade-in"
              >
                {activeService.title}
              </h3>
            </div>

            {/* 4. Active Summary Narrative with Smooth Transition */}
            <div className="relative min-h-[65px] mb-6">
              <p
                key={`desc-${activeService.id}`}
                className="text-xs sm:text-sm text-[#3e5642] leading-relaxed font-normal animate-fade-in"
              >
                {activeService.summary}
              </p>
            </div>

            {/* 5. Action CTA Button in #0A5A63 */}
            <div>
              <Link
                href={`/contact?service=${encodeURIComponent(activeService.title)}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0A5A63] hover:bg-[#07454C] transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(10,90,99,0.38)] transform hover:-translate-y-0.5 group"
              >
                <span>Request This Capability</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

          </div>
        </div>

        {/* Scrolling Right Stream of Vertical Photo Portals with Arc Trajectory */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-end space-y-7 sm:space-y-8 relative overflow-visible perspective-[1200px]">
          {services.map((service, idx) => {
            const isCurrentlyActive = activeIndex === idx;

            return (
              <div
                key={service.id}
                id={service.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                className={`group relative w-full max-w-[330px] sm:max-w-[360px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_14px_35px_rgba(10,35,21,0.16)] hover:shadow-[0_20px_45px_rgba(10,35,21,0.28)] border scroll-mt-36 will-change-transform cursor-pointer ${
                  isCurrentlyActive
                    ? 'border-[#0d3822] shadow-[0_18px_40px_rgba(13,56,34,0.20)] ring-2 ring-[#0d3822]/30 z-10'
                    : 'border-white/20 z-0'
                }`}
              >
                {/* 1. Full-Bleed Vertical Photo Background */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out z-0"
                  loading="lazy"
                />

                {/* 2. Layered Resting Dark Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061d11]/95 via-[#061d11]/45 to-[#061d11]/25 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none"></div>

                {/* 3. Resting Top Bar: Number & Category Badge */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20 transition-opacity duration-300 group-hover:opacity-0">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[10.5px] font-mono font-bold uppercase tracking-wider text-white shadow-xs">
                    {service.category}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#c5deb9] bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/15">
                    #{service.number}
                  </span>
                </div>

                {/* 4. Resting Bottom Bar: Mild Heading & Hover Prompt */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-5.5 z-20 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-3">
                  <span className="text-[10.5px] font-mono text-[#c5deb9] uppercase tracking-wider block mb-1 font-bold">
                    {service.deliverables.length} STRATEGIC DELIVERABLES
                  </span>
                  <h3 className="font-raleway text-xl sm:text-[22px] font-bold text-white leading-tight mb-2.5">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#d2e2cd] font-medium">
                    <span>Hover to explore details</span>
                    <ChevronDown size={13} className="animate-bounce" />
                  </div>
                </div>

                {/* 5. Interactive Hover Reveal Overlay (Displays Full Content Cleanly) */}
                <div className="absolute inset-0 bg-[#051a0e]/96 backdrop-blur-lg p-5 sm:p-5.5 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col justify-between overflow-y-auto">
                  
                  {/* Hover Header */}
                  <div>
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/15">
                      <div className="flex items-center gap-1.5">
                        <span className="w-6 h-6 rounded-md bg-white/15 text-[#c5deb9] flex items-center justify-center font-mono text-[11px] font-bold">
                          {service.number}
                        </span>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#c5deb9]">
                          {service.category}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#9bb597]">
                        {service.deliverables.length} MODULES
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-raleway text-lg sm:text-[19px] font-bold text-white leading-snug mb-2">
                      {service.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-[11.5px] sm:text-xs text-[#d6e6d2] leading-relaxed mb-3">
                      {service.summary}
                    </p>

                    {/* Deliverables Chips Grid */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {service.deliverables.slice(0, 5).map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="inline-flex items-center px-2 py-0.5 rounded-md text-[10.5px] font-medium text-white bg-white/10 border border-white/15"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#c5deb9] mr-1"></span>
                          {item}
                        </span>
                      ))}
                      {service.deliverables.length > 5 && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-mono text-[#c5deb9] bg-white/5 border border-white/10">
                          +{service.deliverables.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Expected Outcome Box */}
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 mb-3">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#c5deb9] mb-0.5">
                        <CheckCircle2 size={11} className="text-[#c5deb9]" />
                        <span>Expected Strategic Outcome</span>
                      </div>
                      <p className="text-[11px] font-medium text-[#e4f0e0] leading-relaxed">
                        {service.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Hover Bottom Action */}
                  <div className="pt-2.5 border-t border-white/15 flex items-center justify-between mt-auto">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3.5 rounded-xl text-xs font-semibold text-white bg-[#0A5A63] hover:bg-[#07454C] transition-all duration-300 shadow-md"
                    >
                      <span>Request {service.title}</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
