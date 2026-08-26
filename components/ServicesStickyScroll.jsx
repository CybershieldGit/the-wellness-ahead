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
  CalendarDays
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
          
          // Prominent Circular Arc Trajectory Formula (Anchored on the Right Edge)
          // Center position (0): translateX = 0px, rotate = 0deg, scale = 1.02
          // Above/Below center: sweeps outwards to the right (+X) and tilts along the arc curve
          const arcTranslateX = Math.pow(normalized, 2) * 110; // Bold 0px to 110px rightward arc sweep
          const arcRotate = normalized * 7.5; // -10.5deg to +10.5deg circular tangent rotation
          const arcScale = Math.max(0.88, 1.02 - Math.abs(normalized) * 0.1);
          const opacity = Math.max(0.45, 1 - Math.abs(normalized) * 0.45);

          // Direct hardware-accelerated CSS transform manipulation for instant 120fps responsiveness
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
    
    // Initial calculation
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
        
        {/* Pinned Sticky Left Editorial Column (Desktop) */}
        <div className="hidden lg:block lg:col-span-5 sticky top-36 z-20 pr-4 xl:pr-6">
          <div className="flex flex-col justify-between transition-all duration-700 ease-out">
            
            {/* Top Indicator: Live Progress & Category */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#d8cfbe]">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#075f2c]">
                  CAPABILITY {activeService.number} OF {services.length.toString().padStart(2, '0')}
                </span>
                <span className="text-xs text-[#9eb393]">•</span>
                <span className="text-xs font-medium text-[#6e856b] uppercase tracking-wider">
                  {activeService.category}
                </span>
              </div>

              {/* Minimalist Progress Percentage */}
              <div className="flex items-center gap-2">
                <div className="w-16 h-1 bg-[#ded5c5] rounded-full overflow-hidden">
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

            {/* Active Service Title with Smooth Key Transition */}
            <div className="relative min-h-[90px] mb-4">
              <h3
                key={`title-${activeService.id}`}
                className="font-raleway text-3xl xl:text-4xl font-bold text-[#0d3822] tracking-tight leading-tight animate-fade-in"
              >
                {activeService.title}
              </h3>
            </div>

            {/* Active Summary Narrative with Smooth Transition */}
            <div className="relative min-h-[80px] mb-8">
              <p
                key={`desc-${activeService.id}`}
                className="text-base text-[#3e5642] leading-relaxed font-normal animate-fade-in"
              >
                {activeService.summary}
              </p>
            </div>

            {/* Action CTA Button */}
            <div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0e3520] hover:bg-[#072415] transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(14,53,32,0.28)] transform hover:-translate-y-0.5 group"
              >
                <span>Request This Capability</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

          </div>
        </div>

        {/* Scrolling Right Stream of Circular Arc Cards (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-end space-y-6 sm:space-y-8 relative overflow-visible">
          {services.map((service, idx) => {
            const isCurrentlyActive = activeIndex === idx;
            const CardIcon = iconMap[service.iconName] || Compass;

            return (
              <div
                key={service.id}
                id={service.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                className={`relative w-full max-w-[500px] xl:max-w-[530px] bg-[#fbf9f4] rounded-2xl sm:rounded-[1.5rem] p-4 sm:p-5 md:p-6 border scroll-mt-36 will-change-transform ${
                  isCurrentlyActive
                    ? 'border-[#0d3822] shadow-[0_20px_45px_rgba(13,56,34,0.15)] z-10 ring-1 ring-[#0d3822]/20'
                    : 'border-[#d8cfbe] shadow-2xs z-0'
                }`}
              >
                {/* Mobile Header (Visible on small screens where left panel is hidden) */}
                <div className="lg:hidden flex items-center justify-between pb-3 mb-3.5 border-b border-[#dfd6c6]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#0d3822] text-[#fbf9f4] flex items-center justify-center shadow-xs">
                      <CardIcon size={14} />
                    </div>
                    <div>
                      <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#075f2c] block">
                        SERVICE {service.number}
                      </span>
                      <h3 className="font-raleway text-base sm:text-lg font-bold text-[#0d3822] leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Top Label & Module Count */}
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#dfd6c6]">
                  <div className="hidden lg:flex items-center gap-2">
                    <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${
                      isCurrentlyActive
                        ? 'bg-[#0d3822] text-white'
                        : 'bg-[#ece8df] text-[#0d3822]'
                    }`}>
                      {service.number}
                    </span>
                    <span className="font-raleway text-sm sm:text-[15px] font-bold text-[#0d3822]">
                      {service.title}
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono text-[#738a6f] font-semibold tracking-wider uppercase">
                    {service.deliverables.length} MODULES
                  </span>
                </div>

                {/* Compact Deliverables Pills Grid */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {service.deliverables.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className={`inline-flex items-center px-2.5 py-0.5 sm:py-1 rounded-lg text-[11.5px] sm:text-xs font-medium border ${
                        isCurrentlyActive
                          ? 'text-[#0d3822] bg-white border-[#c9ddc4] shadow-xs'
                          : 'text-[#2a4530] bg-[#f7f4ec] border-[#ded5c5]'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#075f2c] mr-1.5"></span>
                      {item}
                    </span>
                  ))}
                </div>

                {/* Compact Expected Outcome Highlight Box */}
                <div className={`p-3 sm:p-3.5 rounded-xl border ${
                  isCurrentlyActive
                    ? 'bg-[#eef4ec] border-[#b4d0b0] shadow-xs'
                    : 'bg-[#f4efe4] border-[#ded5c5]'
                }`}>
                  <div className="flex items-center gap-1.5 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#0d3822] mb-0.5">
                    <CheckCircle2 size={12} className="text-[#075f2c]" />
                    <span>Expected Strategic Outcome</span>
                  </div>
                  <p className="text-[11.5px] sm:text-xs font-medium text-[#1c3825] leading-relaxed">
                    {service.outcome}
                  </p>
                </div>

                {/* Mobile Action Link */}
                <div className="lg:hidden mt-3 pt-2.5 border-t border-[#dfd6c6] flex justify-end">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d3822] hover:text-[#075f2c]"
                  >
                    <span>Request This Service</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
