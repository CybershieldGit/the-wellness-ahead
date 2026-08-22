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
    <section id="faq" className="pt-6 sm:pt-8 pb-12 md:pb-16 bg-[#ece8df]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-raleway text-2xl sm:text-3xl md:text-[34px] text-[#0d3822] font-semibold tracking-tight leading-snug">
            Frequently Asked Questions For <br />
            <span className="relative inline-block pb-2 mt-0.5">
              Businesses
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-[2.5px] bg-[#8fa687] rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* Modern Animated FAQ Cards List */}
        <div className="flex flex-col gap-3 sm:gap-3.5">
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
                    ? 'bg-[#fbf9f4] border-[#8fa687] shadow-[0_10px_28px_rgba(13,56,34,0.09)] -translate-y-0.5'
                    : 'bg-[#f4efe4]/80 hover:bg-[#fbf9f4]/90 border-[#ded6c7] hover:border-[#b4c5af]'
                }`}
              >
                {/* Question Row */}
                <div className="p-4 sm:p-5 px-5 sm:px-6 flex items-center justify-between gap-4 select-none">
                  <div className="flex items-center gap-3.5 sm:gap-4.5">
                    {/* Index Number */}
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border transition-colors duration-500 ease-out ${
                        isOpen
                          ? 'bg-[#0d3822] text-[#fbf9f4] border-[#0d3822]'
                          : 'bg-[#ede7dc] text-[#556b53] border-[#ded5c5] group-hover:bg-[#dfd7c8]'
                      }`}
                    >
                      0{index + 1}
                    </span>

                    {/* Question Title */}
                    <h3
                      className={`font-raleway text-[15px] sm:text-base md:text-[17px] font-semibold transition-colors duration-500 ease-out ${
                        isOpen ? 'text-[#0d3822]' : 'text-[#1d3b27] group-hover:text-[#0d3822]'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Dynamic Action Icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all duration-500 ease-out ${
                      isOpen
                        ? 'bg-[#0d3822] text-white border-[#0d3822] rotate-180'
                        : 'bg-[#ede7dc] text-[#3d5c39] border-[#ded5c5] group-hover:border-[#8fa687] group-hover:scale-105'
                    }`}
                  >
                    <ChevronDown size={17} />
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
                      className="px-5 sm:px-6 pb-4 sm:pb-5 pt-0.5"
                    >
                      <div className="pl-4 border-l-2 border-[#8fa687]/70">
                        <p className="text-xs sm:text-sm md:text-[14.5px] text-[#4a5f4c] leading-relaxed">
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
