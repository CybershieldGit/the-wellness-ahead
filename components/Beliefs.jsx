import React from 'react';
import { Sparkles, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

const beliefPillars = [
  {
    number: '01',
    title: 'Trust Before Transactions',
    description: 'In wellness, consumers don’t buy hype; they buy safety, proven efficacy, and genuine clinical confidence.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Scientific Clarity Over Noise',
    description: 'Translating complex biochemical formulations and bioavailability into intuitive, conversion-driven commercial value.',
    icon: Award,
  },
  {
    number: '03',
    title: 'Ethical Positioning as a Moat',
    description: 'Enduring brand equity and repeat loyalty are won through regulatory truth and category reputation, not temporary gimmicks.',
    icon: HeartHandshake,
  },
];

export default function Beliefs() {
  return (
    <section id="beliefs" className="relative pt-10 pb-12 sm:py-16 md:py-28 bg-[#d1ddcc] overflow-hidden">
      {/* Dynamic Keyframes for Continuous Seamless Moving Live Waves */}
      <style>{`
        @keyframes waveFlowForward {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes waveFlowBackward {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-wave-flow-1 {
          animation: waveFlowForward 10s linear infinite;
          will-change: transform;
        }
        .animate-wave-flow-2 {
          animation: waveFlowBackward 16s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Top Live Moving Wave Transition (Both Dual Crests Distinctly Visible) */}
      <div className="absolute top-0 left-0 right-0 h-14 sm:h-16 md:h-20 w-full overflow-hidden leading-none z-0 pointer-events-none">
        {/* Layer 2: Counter-Current Wave (Left-to-Right) - Clearly Visible Crest */}
        <div className="absolute inset-0 w-[200%] flex animate-wave-flow-2 opacity-60">
          <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-full h-14 sm:h-16 md:h-20 text-[#ece8df] fill-current">
            <path d="M0,60 C200,112 400,112 600,60 C800,12 1000,12 1200,60 C1400,112 1600,112 1800,60 C2000,12 2200,12 2400,60 L2400,0 L0,0 Z"></path>
          </svg>
        </div>
        {/* Layer 1: Primary Foreground Live Wave (Right-to-Left) */}
        <div className="absolute inset-0 w-[200%] flex animate-wave-flow-1 opacity-90">
          <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-full h-14 sm:h-16 md:h-20 text-[#ece8df] fill-current">
            <path d="M0,55 C180,100 420,100 600,55 C780,10 1020,10 1200,55 C1380,100 1620,100 1800,55 C1980,10 2220,10 2400,55 L2400,0 L0,0 Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 pt-2 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Premium Studio Imagery with Luxury Framing (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-md bg-[#f6f3eb] rounded-2xl sm:rounded-[2.5rem] p-2.5 sm:p-5 shadow-[0_12px_30px_rgba(13,56,34,0.1)] sm:shadow-[0_20px_50px_rgba(13,56,34,0.12)] border border-[#c4d0bf]">
              {/* Central Botanical Science Image */}
              <div className="relative aspect-[16/10] sm:aspect-[4/5] rounded-xl sm:rounded-[2rem] overflow-hidden bg-[#ded8ca]">
                <img
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80"
                  alt="Organic botanical nutraceutical formulation and apothecary extracts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3822]/60 via-transparent to-transparent"></div>
                
                {/* Floating Philosophy Badge inside image */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="bg-[#fbf9f4]/95 backdrop-blur-md border border-[#c5deb9]/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-lg text-left">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-[#0d3822] mb-0.5 sm:mb-1">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0d3822]"></span>
                      Core Manifesto
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#3a5440] font-medium leading-snug sm:leading-relaxed">
                      "Positioning first, promotion second. Clarity prevents wasted capital."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Title, Manifesto & 3 Core Pillars (7 Cols) */}
          <div className="lg:col-span-7">
            {/* Header */}
            <div className="mb-4 sm:mb-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#dfd7c8] border border-[#cfc4b2] text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#143420] mb-2.5 sm:mb-3.5 shadow-sm">
                <Sparkles size={13} className="text-[#0d3822]" />
                <span>Our Guiding Philosophy</span>
              </div>

              <h2 className="font-raleway text-[28px] sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight leading-tight">
                <span className="relative inline-block pb-2 sm:pb-3">
                  What We Believe
                  <span className="absolute bottom-0 left-0 w-32 sm:w-44 h-[2.5px] sm:h-[3px] bg-[#788e6e] rounded-full"></span>
                </span>
              </h2>

              {/* Editorial Statement */}
              <p className="font-raleway text-sm sm:text-xl md:text-[22px] text-[#0d3822] font-medium leading-snug mt-3 sm:mt-6 max-w-2xl">
                We believe sustainable category leadership in wellness is built on <span className="text-[#194a2e] font-bold">clinical trust</span>, <span className="text-[#194a2e] font-bold">scientific clarity</span>, and <span className="text-[#194a2e] font-bold">ethical conviction</span>.
              </p>
            </div>

            {/* 3 Meaningful Pillars - Pure Editorial Typography Presentation (No Cards) */}
            <div className="mt-4 sm:mt-8 border-t border-[#b8cbb4]/80 divide-y divide-[#b8cbb4]/80">
              {beliefPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="py-3 sm:py-5 md:py-6 flex items-start gap-3 sm:gap-6 group"
                >
                  {/* Subtle Monospace Index Badge */}
                  <span className="text-[11px] sm:text-sm font-mono font-bold text-[#0d3822] bg-[#c5deb9]/70 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg flex-shrink-0 mt-0.5 shadow-sm">
                    {pillar.number}
                  </span>

                  {/* Typographic Title & Body */}
                  <div className="flex-1">
                    <h3 className="font-raleway text-base sm:text-xl md:text-[21px] font-bold text-[#0d3822] tracking-tight group-hover:text-[#184a2b] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[15px] text-[#354f3b] leading-relaxed font-normal mt-1 sm:mt-1.5 max-w-xl">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Live Moving Wave Transition (Both Dual Crests Distinctly Visible) */}
      <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-16 md:h-20 w-full overflow-hidden leading-none z-0 pointer-events-none">
        {/* Layer 2: Counter-Current Wave (Left-to-Right) - Clearly Visible Crest */}
        <div className="absolute inset-0 w-[200%] flex animate-wave-flow-2 opacity-60">
          <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-full h-14 sm:h-16 md:h-20 text-[#ece8df] fill-current">
            <path d="M0,60 C200,8 400,8 600,60 C800,108 1000,108 1200,60 C1400,8 1600,8 1800,60 C2000,108 2200,108 2400,60 L2400,120 L0,120 Z"></path>
          </svg>
        </div>
        {/* Layer 1: Primary Foreground Live Wave (Right-to-Left) */}
        <div className="absolute inset-0 w-[200%] flex animate-wave-flow-1 opacity-90">
          <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-full h-14 sm:h-16 md:h-20 text-[#ece8df] fill-current">
            <path d="M0,65 C180,20 420,20 600,65 C780,110 1020,110 1200,65 C1380,20 1620,20 1800,65 C1980,110 2220,110 2400,65 L2400,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
