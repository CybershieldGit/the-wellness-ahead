import React from 'react';

const struggleItems = [
  { text: 'The brand looks similar to competitors' },
  { text: 'Product value is difficult to explain' },
  { text: 'Scientific information feels overwhelming' },
  { text: 'The website does not establish credibility' },
  { text: 'Content is inconsistent or overly promotional' },
  { text: 'Marketing activities lack a clear direction' },
  { text: 'Packaging communicates too much but explains too little' },
  { text: 'New products are launched without a structured marketing plan' },
];

export default function Struggles() {
  return (
    <section id="struggles" className="py-20 md:py-28 bg-[#ece8df] border-t border-[#ded8cb] select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight">
            Strong Products Can Still Struggle <br />
            <span className="relative inline-block pb-3 mt-1">
              When the Marketing Is Unclear.
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-[3px] bg-[#8fa687] rounded-full"></span>
            </span>
          </h2>
          <p className="mt-7 text-base sm:text-lg text-[#47574b] font-normal leading-relaxed max-w-2xl mx-auto">
            Many wellness businesses invest deeply in formulations, quality, research and manufacturing. <br className="hidden sm:inline" />
            However, their market presence often fails to communicate the same level of value.
          </p>
        </div>

        {/* 8 Compact Rectangular Tiles (2 Columns with Directional Green Gradients) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {struggleItems.map((item, index) => {
            const isLeftColumn = index % 2 === 0;

            return (
              <div
                key={index}
                className={`py-4.5 sm:py-5 px-6 sm:px-8 rounded-2xl flex items-center justify-start text-base sm:text-[17px] font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer border ${isLeftColumn
                    ? 'bg-gradient-to-r from-[#a2b896] via-[#b9ccaf] to-[#ded7ca] text-[#132c1b] border-[#a0b694] hover:border-[#7c9574]'
                    : 'bg-gradient-to-l from-[#a2b896] via-[#b9ccaf] to-[#ded7ca] text-[#132c1b] border-[#a0b694] hover:border-[#7c9574]'
                  }`}
              >
                <span className="leading-snug">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
