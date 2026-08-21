import React from 'react';

const insightsList = [
  {
    category: 'Brand Strategy',
    title: 'Why Great Nutraceuticals Struggle to Build Trust',
    description: 'Exploring why product quality alone does not guarantee market credibility.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    alt: 'Brand strategy notebook and glasses',
  },
  {
    category: 'Product Communication',
    title: 'Packaging Is Not Decoration. It Is Communication.',
    description: 'How packaging can become your most powerful brand communication tool.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    alt: 'Product communication notebook with vitamins',
  },
  {
    category: 'Digital Presence',
    title: 'What Makes a Wellness Website Credible?',
    description: 'Key principles that separate credible wellness websites from generic templates.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    alt: 'Digital presence laptop and notebook',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-20 md:py-28 bg-[#ece8df]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight">
            Insights for the Business of <br />
            <span className="relative inline-block pb-3 mt-1">
              Wellness
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 sm:w-40 h-[3px] bg-[#8fa687] rounded-full"></span>
            </span>
          </h2>
          <p className="mt-8 text-base sm:text-lg text-[#47574b] font-normal leading-relaxed">
            Wellness marketing goes beyond attractive design—it requires technical understanding, clear positioning, consumer insight, and responsible health communication.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsList.map((item, index) => (
            <article
              key={index}
              className="group bg-[#f7f5ed] border border-[#ded7ca] rounded-3xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              {/* Photo */}
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#dfd7c9]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Text content */}
              <div className="px-2 pb-2 flex-1 flex flex-col">
                <span className="font-raleway text-xl text-[#12311e] font-semibold mb-3 block">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#1a2d20] leading-snug mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#536456] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href="#insights"
            className="inline-flex items-center justify-center px-9 py-4 rounded-xl text-base font-medium text-white bg-[#0e3520] hover:bg-[#082415] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Explore All Insights
          </a>
        </div>
      </div>
    </section>
  );
}
