import React, { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Who can work with The Wellness Ahead?',
    answer: 'Nutraceutical, herbal, supplement, functional food, healthcare, ingredient, manufacturing and wellness businesses seeking strategic marketing support.',
  },
  {
    question: 'Do you work with both B2B and B2C brands?',
    answer: 'Yes. Services can be adapted for consumer brands, manufacturers, suppliers, private-label businesses, distributors and other wellness-industry organisations.',
  },
  {
    question: 'Do you provide regulatory approval?',
    answer: 'No, The Wellness Ahead provides strategic marketing and communication support. Regulatory, legal, clinical and medical approvals should be completed by qualified professionals.',
  },
  {
    question: 'Can we request only one service?',
    answer: 'Yes. Engagements may include a defined strategic project, selected execution support or ongoing consulting.',
  },
  {
    question: 'Do we need a complete project brief?',
    answer: 'No. A discovery conversation can help identify the real requirement, priorities and suitable scope.',
  },
  {
    question: 'Can you support a new product launch?',
    answer: 'Yes, Support can include market research, positioning, messaging, launch planning, content direction, digital communication and sales-support material.',
  },
];

export default function FAQ() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="faq" className="py-12 md:py-16 bg-[#ece8df]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <h2 className="font-raleway text-2xl sm:text-3xl md:text-[34px] text-[#0d3822] font-semibold tracking-tight leading-snug">
            Frequently Asked Questions For <br />
            <span className="relative inline-block pb-2 mt-0.5">
              Businesses
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-[2.5px] bg-[#8fa687] rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* Modern Compact Animated List (Fits completely in a single viewscreen) */}
        <div className="flex flex-col gap-2.5 sm:gap-3">
          {faqs.map((faq, index) => {
            const isOpen = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                className={`group rounded-xl sm:rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden ${
                  isOpen
                    ? 'bg-[#fbf9f4] border-[#8fa687] shadow-[0_8px_24px_rgba(13,56,34,0.08)] -translate-y-0.5'
                    : 'bg-[#f4efe4]/80 hover:bg-[#fbf9f4]/90 border-[#ded6c7] hover:border-[#b4c5af]'
                }`}
              >
                {/* Question Row */}
                <div className="p-3.5 sm:p-4 px-4 sm:px-5 flex items-center justify-between gap-3.5 select-none">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Index Number */}
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border transition-colors duration-500 ease-out ${
                        isOpen
                          ? 'bg-[#0d3822] text-[#fbf9f4] border-[#0d3822]'
                          : 'bg-[#ede7dc] text-[#556b53] border-[#ded5c5] group-hover:bg-[#dfd7c8]'
                      }`}
                    >
                      0{index + 1}
                    </span>

                    {/* Question Title */}
                    <h3
                      className={`font-raleway text-sm sm:text-base font-semibold transition-colors duration-500 ease-out ${
                        isOpen ? 'text-[#0d3822]' : 'text-[#1d3b27] group-hover:text-[#0d3822]'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Dynamic Action Icon */}
                  <div
                    className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-500 ease-out ${
                      isOpen
                        ? 'bg-[#0d3822] text-white border-[#0d3822] rotate-180'
                        : 'bg-[#ede7dc] text-[#3d5c39] border-[#ded5c5] group-hover:border-[#8fa687] group-hover:scale-105'
                    }`}
                  >
                    <ChevronDown size={15} />
                  </div>
                </div>

                {/* True Liquid Height Grid Expansion (Calibrated 750ms Sweet Spot) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0,
                    transition: 'grid-template-rows 0.75s cubic-bezier(0.25, 1, 0.4, 1), opacity 0.6s ease',
                  }}
                >
                  <div className="overflow-hidden">
                    <div
                      style={{
                        transform: isOpen ? 'translateY(0px)' : 'translateY(-8px)',
                        opacity: isOpen ? 1 : 0,
                        transition: 'transform 0.75s cubic-bezier(0.25, 1, 0.4, 1), opacity 0.6s ease',
                      }}
                      className="px-4 sm:px-5 pb-3.5 sm:pb-4 pt-0.5"
                    >
                      <div className="pl-3.5 border-l-2 border-[#8fa687]/70">
                        <p className="text-xs sm:text-[13.5px] text-[#4a5f4c] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
