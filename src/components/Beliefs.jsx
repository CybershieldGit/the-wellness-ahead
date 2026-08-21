import React from 'react';
import { Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';

const beliefsList = [
  { text: 'Trust grows before sales.' },
  { text: 'Education creates stronger wellness brands.' },
  { text: 'Marketing should simplify complexity.' },
  { text: 'Scientific innovation deserves clear communication.' },
  { text: 'Positioning should come before promotion.' },
  { text: 'Every message should support a real business objective.' },
  { text: 'Ethical communication is a long-term competitive advantage.' },
  { text: 'Strong brands are built through consistency, not noise.' },
];

export default function Beliefs() {
  return (
    <section className="relative py-20 md:py-28 bg-[#d1ddcc] overflow-hidden">
      {/* Top Wave SVG Transition */}
      <div className="absolute top-0 left-0 right-0 h-10 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#ece8df] fill-current">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Product Showcase with Trust Icons */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#f6f3eb] rounded-[2.5rem] p-6 sm:p-8 shadow-md border border-[#c4d0bf]">
              
              {/* Central Product Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#ded8ca]">
                <img
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
                  alt="Organic botanical nutraceutical wellness formulation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge 1 - Top Leaf */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#f6f3eb] border border-[#c0cbb8] shadow-md flex items-center justify-center text-[#183a24]">
                <Leaf size={24} strokeWidth={1.75} />
              </div>

              {/* Floating Badge 2 - Left Shield */}
              <div className="absolute top-1/2 left-3 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#f6f3eb] border border-[#c0cbb8] shadow-md flex items-center justify-center text-[#183a24]">
                <ShieldCheck size={24} strokeWidth={1.75} />
              </div>

              {/* Floating Badge 3 - Right Heart */}
              <div className="absolute top-1/2 right-3 translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#f6f3eb] border border-[#c0cbb8] shadow-md flex items-center justify-center text-[#183a24]">
                <HeartHandshake size={24} strokeWidth={1.75} />
              </div>
            </div>
          </div>

          {/* Right Column: Title & 8 Belief Cards */}
          <div className="lg:col-span-7">
            {/* Header */}
            <div className="mb-10 text-left">
              <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight">
                <span className="relative inline-block pb-3">
                  What We Believe
                  <span className="absolute bottom-0 left-0 w-36 sm:w-48 h-[3px] bg-[#788e6e] rounded-full"></span>
                </span>
              </h2>
            </div>

            {/* Beliefs Grid (2 columns x 4 rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {beliefsList.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f7f5ed]/95 hover:bg-[#ffffff] border border-[#c7d4c2] rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-start min-h-[90px]"
                >
                  <p className="text-base sm:text-[17px] text-[#1a3322] font-medium leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave SVG Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-10 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#ece8df] fill-current">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
