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
    <section id="beliefs" className="relative py-20 md:py-28 bg-[#d1ddcc] overflow-hidden">
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

      {/* Top Live Moving Wave Transition */}
      <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 w-full overflow-hidden leading-none z-0 pointer-events-none">
        {/* Layer 2: Subtle Ambient Back Wave Flowing Counter-Current */}
        <div className="absolute inset-0 w-[200%] flex animate-wave-flow-2 opacity-30">
          <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-full h-10 sm:h-12 text-[#ece8df] fill-current">
            <path d="M0,0 C300,80 600,-25 900,50 C1050,85 1125,65 1200,0 C1500,80 1800,-25 2100,50 C2250,85 2325,65 2400,0 L2400,0 L0,0 Z"></path>
          </svg>
        </div>
        {/* Layer 1: Primary Foreground Live Wave Flowing Smoothly */}
        <div className="absolute inset-0 w-[200%] flex animate-wave-flow-1">
          <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-full h-10 sm:h-12 text-[#ece8df] fill-current">
            <path d="M0,0 C300,90 600,-35 900,60 C1050,95 1125,75 1200,0 C1500,90 1800,-35 2100,60 C2250,95 2325,75 2400,0 L2400,0 L0,0 Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Premium Studio Imagery with Luxury Framing (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#f6f3eb] rounded-[2.5rem] p-4 sm:p-5 shadow-[0_20px_50px_rgba(13,56,34,0.12)] border border-[#c4d0bf]">
              {/* Central Botanical Science Image */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#ded8ca]">
                <img
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80"
                  alt="Organic botanical nutraceutical formulation and apothecary extracts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3822]/60 via-transparent to-transparent"></div>
                
                {/* Floating Philosophy Badge inside image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-[#fbf9f4]/95 backdrop-blur-md border border-[#c5deb9]/50 rounded-2xl p-4 shadow-lg text-left">
                    <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0d3822] mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#0d3822]"></span>
                      Core Manifesto
                    </div>
                    <p className="text-xs text-[#3a5440] font-medium leading-relaxed">
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
            <div className="mb-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfd7c8] border border-[#cfc4b2] text-xs font-semibold uppercase tracking-wider text-[#143420] mb-3.5 shadow-sm">
                <Sparkles size={14} className="text-[#0d3822]" />
                <span>Our Guiding Philosophy</span>
              </div>

              <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight">
                <span className="relative inline-block pb-3">
                  What We Believe
                  <span className="absolute bottom-0 left-0 w-32 sm:w-44 h-[3px] bg-[#788e6e] rounded-full"></span>
                </span>
              </h2>

              {/* Editorial Statement */}
              <p className="font-raleway text-lg sm:text-xl md:text-[22px] text-[#0d3822] font-medium leading-snug mt-6 max-w-2xl">
                We believe sustainable category leadership in wellness is built on <span className="text-[#194a2e] font-bold">clinical trust</span>, <span className="text-[#194a2e] font-bold">scientific clarity</span>, and <span className="text-[#194a2e] font-bold">ethical conviction</span>.
              </p>
            </div>

            {/* 3 Meaningful Pillars - Pure Editorial Typography Presentation (No Cards) */}
            <div className="mt-8 border-t border-[#b8cbb4]/80 divide-y divide-[#b8cbb4]/80">
              {beliefPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="py-5 sm:py-6 flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Subtle Monospace Index Badge */}
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#0d3822] bg-[#c5deb9]/70 px-2.5 py-1 rounded-lg flex-shrink-0 mt-0.5 shadow-sm">
                    {pillar.number}
                  </span>

                  {/* Typographic Title & Body */}
                  <div className="flex-1">
                    <h3 className="font-raleway text-lg sm:text-xl md:text-[21px] font-bold text-[#0d3822] tracking-tight group-hover:text-[#184a2b] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#354f3b] leading-relaxed font-normal mt-1.5 max-w-xl">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Live Moving Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 w-full overflow-hidden leading-none z-0 pointer-events-none">
        {/* Layer 2: Subtle Ambient Back Wave Flowing Counter-Current */}
        <div className="absolute inset-0 w-[200%] flex animate-wave-flow-2 opacity-30">
          <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-full h-10 sm:h-12 text-[#ece8df] fill-current">
            <path d="M0,50 C300,-25 600,80 900,15 C1050,-20 1125,5 1200,50 C1500,-25 1800,80 2100,15 C2250,-20 2325,5 2400,50 L2400,120 L0,120 Z"></path>
          </svg>
        </div>
        {/* Layer 1: Primary Foreground Live Wave Flowing Smoothly */}
        <div className="absolute inset-0 w-[200%] flex animate-wave-flow-1">
          <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-full h-10 sm:h-12 text-[#ece8df] fill-current">
            <path d="M0,60 C300,-35 600,90 900,20 C1050,-25 1125,-5 1200,60 C1500,-35 1800,90 2100,20 C2250,-25 2325,-5 2400,60 L2400,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
