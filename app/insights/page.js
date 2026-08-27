'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SmoothScroll from '../../components/SmoothScroll';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Sparkles, ArrowUpRight, Compass, Layers, ShieldCheck, Feather, CheckCircle2 } from 'lucide-react';

const insightsList = [
  {
    id: "communicate-science-clearly",
    number: "01",
    category: 'Wellness Marketing',
    readTime: '5 min read',
    title: 'How to Communicate Science Without Confusing Consumers',
    description: 'Scientific innovation is the backbone of the nutraceutical industry, but translating that into consumer language requires a different kind of clarity.',
    takeaway: 'Bridging the divide between formulation rigor and consumer comprehension.',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=85',
    alt: 'Close-up of hand pouring dried herbs into a glass beaker for botanical formulation',
    tag: 'Featured Perspective'
  },
  {
    id: "education-over-promotion",
    number: "02",
    category: 'Packaging & Labels',
    readTime: '4 min read',
    title: 'Why Education Works Better Than Aggressive Promotion',
    description: 'Building trust through useful information rather than persuasion-driven messaging. Packaging that informs creates durable customer loyalty.',
    takeaway: 'Front-of-pack clarity drives repeat retail adoption.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    alt: 'Eco-friendly skincare jars with botanical design showcasing sustainable packaging',
    tag: 'Product Strategy'
  },
  {
    id: "b2b-digital-presence",
    number: "03",
    category: 'B2B Marketing',
    readTime: '6 min read',
    title: 'How B2B Nutraceutical Businesses Can Build a Stronger Digital Presence',
    description: 'Why manufacturers and ingredient companies need more than a product catalogue online to build institutional credibility and attract enterprise buyers.',
    takeaway: 'Positioning contract manufacturing with modern enterprise authority.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    alt: 'Colleagues discussing data and commercial strategy in an advisory meeting',
    tag: 'Enterprise & B2B'
  },
  {
    id: "positioning-before-advertising",
    number: "04",
    category: 'Brand Strategy',
    readTime: '4 min read',
    title: 'Why Positioning Should Come Before Advertising',
    description: 'The cost of promoting a brand that has not yet defined what it stands for. Why clear market positioning accelerates every marketing dollar spent.',
    takeaway: 'Define category differentiation before scaling media budgets.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
    alt: 'Detailed capture of dense dark green tropical fern leaves',
    tag: 'Foundational Strategy'
  },
];

const categories = ['All Insights', 'Wellness Marketing', 'Packaging & Labels', 'B2B Marketing', 'Brand Strategy'];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Insights');

  const filteredInsights = selectedCategory === 'All Insights'
    ? insightsList
    : insightsList.filter(item => item.category === selectedCategory);

  const featuredItem = insightsList[0];
  const ledgerItems = insightsList.slice(1);

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#ece8df] text-[#1c2e22] font-sans antialiased selection:bg-[#97ad8d] selection:text-[#0b2b18]">
        
        {/* 1. Floating Header & Nav */}
        <Navbar />

        {/* 2. Hero Section: Minimalist Luxury Editorial Header */}
        <section
          id="insights-hero"
          className="group relative pt-44 sm:pt-52 md:pt-56 pb-14 sm:pb-16 bg-gradient-to-b from-[#ece8df] via-[#f4efe4] to-[#ece8df] border-b border-[#ded6c7] select-none"
        >
          {/* Subtle Organic Radial Glows */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[350px] bg-[#d1ddcc]/45 rounded-full blur-[100px] pointer-events-none group-hover:scale-125 group-hover:bg-[#c5deb9]/65 transition-all duration-1000 ease-out"></div>

          <div className="relative z-20 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl sm:max-w-4xl mx-auto text-center flex flex-col items-center">
              
              {/* Main Headline */}
              <h1 className="font-raleway text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] text-[#0d3822] tracking-[0.02em] font-semibold leading-[1.18] text-center transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                <span>Insights for Brands Building the </span>
                <span className="block mt-1 sm:mt-2 text-[#075f2c] font-bold transition-all duration-500 group-hover:text-[#0b6c34] group-hover:drop-shadow-[0_2px_20px_rgba(7,95,44,0.18)]">
                  Future of Wellness.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-[#344d39] font-normal leading-[1.75] tracking-[0.02em] max-w-3xl mx-auto text-center">
                Explore strategic perspectives on wellness marketing, brand building, consumer behaviour, nutraceutical trends and responsible communication.
              </p>

              {/* Minimalist Filter Pill Tabs */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-300 ${
                      selectedCategory === cat
                        ? 'bg-[#0d3822] text-white shadow-sm scale-105'
                        : 'bg-[#fbf9f4] text-[#4a634e] hover:bg-white border border-[#d8cfbe]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 3. Bespoke Editorial Showcase Section */}
        <section className="py-16 sm:py-20 bg-[#ece8df]">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            
            {/* When 'All Insights' is active, render the High-End Magazine Featured Split + Cinematic Background Cover Cards */}
            {selectedCategory === 'All Insights' ? (
              <div className="space-y-14 sm:space-y-18">
                
                {/* 1. Featured Split Showcase Card */}
                <div className="relative bg-[#fbf9f4] border border-[#d6ccba] rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(13,56,34,0.06)] hover:border-[#98ad8e] transition-all duration-500 group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Rich Editorial Typography */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Eyebrow & Number */}
                        <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#dfd6c6]">
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#075f2c]">
                            PERSPECTIVE {featuredItem.number} / 04
                          </span>
                          <span className="text-xs text-[#9eb393]">•</span>
                          <span className="text-xs font-medium text-[#738a6f] uppercase tracking-wider">
                            {featuredItem.category}
                          </span>
                          <span className="ml-auto text-xs font-mono text-[#738a6f] flex items-center gap-1">
                            <Clock size={12} />
                            <span>{featuredItem.readTime}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-raleway text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0d3822] tracking-tight leading-snug mb-4 group-hover:text-[#075f2c] transition-colors">
                          {featuredItem.title}
                        </h2>

                        {/* Description */}
                        <p className="text-base text-[#3e5642] leading-relaxed font-normal mb-5">
                          {featuredItem.description}
                        </p>

                        {/* Strategic Takeaway Strip */}
                        <div className="p-3.5 rounded-xl bg-[#eef4ec] border border-[#c2d7be] mb-6">
                          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#0d3822] mb-0.5">
                            <Sparkles size={13} className="text-[#075f2c]" />
                            <span>Strategic Core Takeaway</span>
                          </div>
                          <p className="text-xs sm:text-[13px] font-medium text-[#1c3825]">
                            {featuredItem.takeaway}
                          </p>
                        </div>
                      </div>

                      {/* Action CTA */}
                      <div>
                        <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0A5A63] group-hover:bg-[#07454C] transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_rgba(10,90,99,0.35)]">
                          <span>Read Insight</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Artisan Framed Visual */}
                    <div className="lg:col-span-5 relative">
                      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#dfd7c9] relative shadow-md">
                        <img
                          src={featuredItem.image}
                          alt={featuredItem.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-3 left-3">
                          <span className="px-2.5 py-1 rounded-md bg-[#fbf9f4]/95 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#0d3822]">
                            {featuredItem.tag}
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* 2. Full-Bleed Cover Image Background Cards (Cinematic Poster Design) */}
                <div>
                  {/* Section Eyebrow Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-7 border-b border-[#d8cfbe]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#075f2c]"></span>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#075f2c]">
                        More Strategic Perspectives
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#738a6f]">
                      03 ARTICLES AVAILABLE
                    </span>
                  </div>

                  {/* 3 Full-Bleed Image Background Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
                    {ledgerItems.map((item) => (
                      <article
                        key={item.id}
                        className="group relative min-h-[410px] sm:min-h-[440px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_16px_40px_rgba(10,35,21,0.18)] hover:shadow-[0_24px_50px_rgba(10,35,21,0.3)] hover:-translate-y-2 transition-all duration-700 flex flex-col justify-between p-6 sm:p-7"
                      >
                        {/* 1. Full-Bleed Background Image with Smooth 700ms Zoom */}
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out z-0"
                          loading="lazy"
                        />

                        {/* 2. Layered Multi-Stop Dark Forest Botanical Gradient for 100% Contrast & Legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061c10] via-[#092214]/75 to-[#092214]/40 group-hover:via-[#092214]/65 transition-all duration-500 z-10"></div>

                        {/* 3. Card Top Floating Header: Frosted Category Pill + Number */}
                        <div className="relative z-20 flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-xs">
                            {item.category}
                          </span>
                          <span className="font-mono text-xs font-bold text-[#c5deb9] bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                            #{item.number}
                          </span>
                        </div>

                        {/* 4. Card Bottom Content: Headline, Excerpt & Action Link */}
                        <div className="relative z-20 mt-auto pt-6">
                          {/* Title */}
                          <h3 className="font-raleway text-xl sm:text-[21px] font-bold text-white leading-snug mb-3 group-hover:text-[#c5deb9] transition-colors duration-300">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-[13.5px] text-[#d6e6d2] leading-relaxed font-normal mb-5 line-clamp-3">
                            {item.description}
                          </p>

                          {/* Bottom Row: Read Time + Action Arrow Button */}
                          <div className="pt-3.5 border-t border-white/15 flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-[11.5px] font-mono text-[#b3ccaf]">
                              <Clock size={12} className="text-[#c5deb9]" />
                              <span>{item.readTime}</span>
                            </span>

                            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5deb9] group-hover:text-white transition-colors">
                              <span>Read Insight</span>
                              <div className="w-7 h-7 rounded-full bg-white/15 group-hover:bg-[#c5deb9] group-hover:text-[#061c10] text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>

                      </article>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* Filtered View (Full-Bleed Cover Image Background Cards) */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredInsights.map((item) => (
                  <article
                    key={item.id}
                    className="group relative min-h-[410px] sm:min-h-[440px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_16px_40px_rgba(10,35,21,0.18)] hover:shadow-[0_24px_50px_rgba(10,35,21,0.3)] hover:-translate-y-2 transition-all duration-700 flex flex-col justify-between p-6 sm:p-7"
                  >
                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out z-0"
                      loading="lazy"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061c10] via-[#092214]/75 to-[#092214]/40 group-hover:via-[#092214]/65 transition-all duration-500 z-10"></div>

                    {/* Top Row */}
                    <div className="relative z-20 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-xs">
                        {item.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#c5deb9] bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        #{item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 mt-auto pt-6">
                      <h3 className="font-raleway text-xl sm:text-[21px] font-bold text-white leading-snug mb-3 group-hover:text-[#c5deb9] transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-[13.5px] text-[#d6e6d2] leading-relaxed font-normal mb-5 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="pt-3.5 border-t border-white/15 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-[11.5px] font-mono text-[#b3ccaf]">
                          <Clock size={12} className="text-[#c5deb9]" />
                          <span>{item.readTime}</span>
                        </span>

                        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5deb9] group-hover:text-white transition-colors">
                          <span>Read Insight</span>
                          <div className="w-7 h-7 rounded-full bg-white/15 group-hover:bg-[#c5deb9] group-hover:text-[#061c10] text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* 4. Bottom Strategic Conversation Banner */}
        <section className="relative z-10 bg-[#ece8df] pb-20 sm:pb-24 overflow-hidden">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            <div className="relative bg-[#0d3822] text-white rounded-3xl sm:rounded-[2.25rem] px-6 py-12 sm:px-12 sm:py-16 text-center border border-[#235839] shadow-[0_20px_50px_rgba(13,56,34,0.22)] overflow-hidden">
              <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#1f5c38]/40 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#c5deb9]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-raleway text-2xl sm:text-3xl md:text-[36px] font-normal text-white tracking-[0.02em] leading-tight">
                  Looking to Clarify Your <br className="hidden sm:inline" />
                  <span className="text-[#c5deb9] font-medium drop-shadow-[0_2px_16px_rgba(197,222,185,0.3)]">
                    Brand's Category Communication?
                  </span>
                </h2>

                <p className="mt-6 text-sm sm:text-base text-[#d2e0ce] font-normal leading-relaxed max-w-xl mx-auto">
                  Let’s discuss your current market positioning, formulation storytelling, and how to communicate product strengths more effectively.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl text-base font-semibold text-white bg-[#0A5A63] hover:bg-[#07454C] transition-all duration-300 shadow-[0_8px_25px_rgba(10,90,99,0.35)] hover:shadow-[0_12px_32px_rgba(10,90,99,0.48)] transform hover:-translate-y-0.5 group border border-[#0A5A63]/60"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-xl text-base font-semibold text-white border border-white/50 hover:bg-white/15 hover:border-white/80 backdrop-blur-md transition-all duration-300 shadow-sm"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Editorial Deep Green Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
