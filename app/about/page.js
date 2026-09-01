import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  Award,
} from "lucide-react";

export const metadata = {
  title:
    "About Us — Marketing Built Around the Realities of Wellness | The Wellness Ahead",
  description:
    "Learn about The Wellness Ahead — an independent strategic marketing and insights platform helping nutraceutical, herbal, and wellness brands communicate with clarity, scientific trust, and ethical growth.",
  keywords: [
    "About The Wellness Ahead",
    "Wellness Marketing Strategy Platform",
    "Nutraceutical Strategic Advisory",
    "Scientific Communication for Supplements",
    "Herbal Brand Positioning Expertise",
  ],
  openGraph: {
    title:
      "About Us — Marketing Built Around the Realities of Wellness | The Wellness Ahead",
    description:
      "The Wellness Ahead is an independent strategic marketing and insights platform created to help wellness businesses communicate with greater clarity, relevance and confidence.",
    url: "https://thewellnessahead.com/about",
    siteName: "The Wellness Ahead",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "About The Wellness Ahead Strategic Advisory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Strategic Marketing for Wellness Brands",
    description:
      "Independent strategic marketing and insights for the wellness industry.",
    images: ["/images/banner.png"],
  },
  alternates: {
    canonical: "https://thewellnessahead.com/about",
  },
};

// JSON-LD Structured Data for AboutPage
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://thewellnessahead.com/about/#webpage",
      url: "https://thewellnessahead.com/about",
      name: "About The Wellness Ahead",
      description:
        "Strategic marketing and insights platform helping wellness brands communicate with clarity, scientific trust, and ethical growth.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://thewellnessahead.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: "https://thewellnessahead.com/about",
          },
        ],
      },
      mainEntity: {
        "@type": "Organization",
        "@id": "https://thewellnessahead.com/#organization",
        name: "The Wellness Ahead",
        url: "https://thewellnessahead.com",
        logo: "https://thewellnessahead.com/images/Color.svg",
        knowsAbout: [
          "Nutraceutical Marketing",
          "Scientific Communication",
          "Dietary Supplements Positioning",
          "Functional Food Strategy",
        ],
      },
    },
  ],
};

// 7-Point Strategic Approach Methodology
const approachSteps = [
  {
    step: "01",
    title: "Industry Understanding",
    desc: "Category dynamics, regulatory realities, and clinical nuances.",
  },
  {
    step: "02",
    title: "Market Research",
    desc: "Competitor void discovery, purchase triggers, and market gap mapping.",
  },
  {
    step: "03",
    title: "Audience Clarity",
    desc: "Aligning practitioner authority with consumer lifestyle drivers.",
  },
  {
    step: "04",
    title: "Strategic Positioning",
    desc: "Establishing defensible, value-driven category differentiation.",
  },
  {
    step: "05",
    title: "Responsible Communication",
    desc: "Science translated into clear, compelling, hype-free narratives.",
  },
  {
    step: "06",
    title: "Practical Execution",
    desc: "Connecting messaging directly to commercial channels and pipelines.",
  },
  {
    step: "07",
    title: "Continuous Improvement",
    desc: "Iterating strategy based on market shifts and real performance.",
  },
];

// 5 Core Brand Values
const brandValues = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Make complex ideas easier to understand and act upon without diluting authority.",
  },
  {
    number: "02",
    title: "Trust",
    description:
      "Prioritise credible, consistent and responsible communication that earns consumer confidence.",
  },
  {
    number: "03",
    title: "Relevance",
    description:
      "Build strategy around real-world market dynamics, genuine audience needs, and commercial realities.",
  },
  {
    number: "04",
    title: "Research",
    description:
      "Use insight, evidence, and clinical substance to guide every strategic marketing decision.",
  },
  {
    number: "05",
    title: "Ethical Growth",
    description:
      "Support long-term commercial expansion without relying on misleading claims or short-lived gimmicks.",
  },
];

// Enforce Static Site Generation (SSG) for ultra-fast CDN delivery & perfect SEO crawling
export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#ece8df] text-[#1c2e22] font-sans antialiased selection:bg-[#97ad8d] selection:text-[#0b2b18]">
        {/* Breadcrumb JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
        />

        {/* 1. Floating Header & Nav */}
        <Navbar />

        {/* 2. Hero Section: Signature Organic Light Theme with Mild Interactive Hover Animations */}
        <section
          id="about-hero"
          className="group relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-b from-[#ece8df] via-[#f4efe4] to-[#ece8df] text-center border-b border-[#ded6c7] transition-all duration-700 select-none"
        >
          {/* Subtle Organic Radial Glows that gently breathe & expand on hover */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#d1ddcc]/45 rounded-full blur-[100px] pointer-events-none group-hover:scale-125 group-hover:bg-[#c5deb9]/65 transition-all duration-1000 ease-out"></div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#9eb393]/15 rounded-full blur-[90px] pointer-events-none group-hover:scale-110 transition-all duration-1000 ease-out"></div>

          <div className="relative z-20 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center">
            <div className="max-w-3xl sm:max-w-4xl mx-auto flex flex-col items-center mt-4 sm:mt-6 md:mt-8">
              {/* Main Headline (Clean 3-Line Structured Layout) */}
              <h1 className="font-raleway text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] text-[#0d3822] tracking-[0.02em] font-semibold leading-[1.18] text-center transition-transform duration-700 ease-out group-hover:scale-[1.01] flex flex-col items-center gap-1 sm:gap-1.5">
                <span>Marketing Built</span>
                <span>Around the Realities</span>
                <span className="text-[#075f2c] font-bold transition-all duration-500 group-hover:text-[#0b6c34] group-hover:drop-shadow-[0_2px_20px_rgba(7,95,44,0.18)]">
                  of Wellness.
                </span>
              </h1>

              {/* Subtitle (Centered with subtle color depth on hover) */}
              <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-[#344d39] font-normal leading-[1.75] tracking-[0.02em] max-w-2xl mx-auto text-center transition-colors duration-500 group-hover:text-[#1e3b26]">
                The Wellness Ahead is an independent strategic marketing and
                insights platform created to help wellness businesses
                communicate with greater clarity, relevance and confidence.
              </p>

              {/* Dual Action CTA Buttons (Interactive Hover Elevations) */}
              <div className="mt-9 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-[#0A5A63] hover:bg-[#07454C] transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(10,90,99,0.38)] transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Our Approach</span>
                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-medium text-[#0d3822] bg-[#fbf9f4] hover:bg-white border border-[#d5cbba] hover:border-[#b8cbb4] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start Conversation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Foundational Narrative: Strong Innovation Deserves Strong Communication */}
        <section className="py-16 sm:py-24 bg-[#ece8df]">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Narrative Copy & Perspective (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfd7c8] border border-[#cfc4b2] text-xs font-semibold uppercase tracking-wider text-[#143420] mb-4 shadow-sm">
                  <span>Why We Exist</span>
                </div>

                <h2 className="font-raleway text-3xl sm:text-4xl md:text-[42px] text-[#0d3822] font-semibold tracking-tight leading-tight mb-6">
                  Strong Innovation Deserves <br />
                  <span className="relative inline-block pb-2">
                    Strong Communication.
                    <span className="absolute bottom-0 left-0 w-32 sm:w-44 h-[3px] bg-[#8fa687] rounded-full"></span>
                  </span>
                </h2>

                <div className="space-y-5 text-base sm:text-lg text-[#324b37] leading-relaxed font-normal">
                  <p>
                    Many wellness businesses invest heavily in product
                    development, quality sourcing, clinical research,
                    manufacturing excellence, and bio-available formulation.
                  </p>
                  <p className="font-medium text-[#0d3822] text-lg sm:text-xl border-l-3 border-[#8fa687] pl-5 my-6 py-1 italic">
                    "Yet their marketing often fails to communicate those
                    strengths effectively to the market."
                  </p>
                  <p>
                    The Wellness Ahead exists to help close that gap by bringing
                    together deep industry understanding, strategic thinking,
                    business perspective, and clear, ethical communication.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#d6ccbc] flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-[#0d3822]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-[#075f2c]" />{" "}
                    Industry Understanding
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-[#075f2c]" />{" "}
                    Strategic Thinking
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-[#075f2c]" />{" "}
                    Business Perspective
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-[#075f2c]" /> Clear
                    Communication
                  </span>
                </div>
              </div>

              {/* Right Column: Studio Framing & Apothecary Media (5 Cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="group relative w-full max-w-md bg-[#f4efe4] rounded-[2.5rem] p-4 sm:p-5 shadow-[0_20px_50px_rgba(13,56,34,0.12)] border border-[#d2c5b3] transition-all duration-500 hover:shadow-[0_24px_60px_rgba(13,56,34,0.18)]">
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#ded5c6]">
                    <img
                      src="/images/insights3.png"
                      alt="Nutraceutical and botanical formulation innovation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d3822]/70 via-transparent to-transparent pointer-events-none"></div>

                    {/* Floating Manifesto Badge */}
                    <div className="absolute bottom-5 left-5 right-5 z-10">
                      <div className="bg-[#fbf9f4]/95 backdrop-blur-md border border-[#c5deb9]/50 rounded-2xl p-4 shadow-lg text-left transform group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#0d3822] mb-1">
                          Strategic Alignment
                        </div>
                        <p className="text-xs text-[#3a5440] font-medium leading-relaxed">
                          Translating clinical credibility into irresistible
                          commercial value.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Purpose, Vision & Mission: The Strategic Triad (Wave Divider Ambience) */}
        <section className="relative py-20 md:py-28 bg-[#d1ddcc] overflow-hidden">
          {/* Top Live Wave */}
          <div className="absolute top-0 left-0 right-0 h-14 sm:h-16 md:h-20 w-full overflow-hidden leading-none z-0 pointer-events-none">
            <svg
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              className="w-full h-14 sm:h-16 md:h-20 text-[#ece8df] fill-current"
            >
              <path d="M0,60 C200,112 400,112 600,60 C800,12 1000,12 1200,60 C1400,112 1600,112 1800,60 C2000,12 2200,12 2400,60 L2400,0 L0,0 Z"></path>
            </svg>
          </div>

          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 pt-4">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfd7c8] border border-[#cfc4b2] text-xs font-semibold uppercase tracking-wider text-[#143420] mb-3.5 shadow-sm">
                <Compass size={14} className="text-[#0d3822]" />
                <span>Our North Star</span>
              </div>
              <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight">
                Purpose, Vision & Mission
              </h2>
            </div>

            {/* Triad Column Presentation (Clean Typographic Architecture) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Purpose */}
              <div className="bg-[#fbf9f4]/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#b8cbb4] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0d3822] text-[#fbf9f4] flex items-center justify-center mb-6 shadow-sm">
                    <Target size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#56755a] block mb-2">
                    01 / Foundational Goal
                  </span>
                  <h3 className="font-raleway text-2xl font-bold text-[#0d3822] tracking-tight mb-4">
                    Our Purpose
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#344d3a] leading-relaxed font-normal">
                    To help wellness businesses make better marketing decisions
                    and communicate their value in ways that build
                    understanding, trust and sustainable growth.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-[#fbf9f4]/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#b8cbb4] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0d3822] text-[#fbf9f4] flex items-center justify-center mb-6 shadow-sm">
                    <Compass size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#56755a] block mb-2">
                    02 / Long-Term Horizon
                  </span>
                  <h3 className="font-raleway text-2xl font-bold text-[#0d3822] tracking-tight mb-4">
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#344d3a] leading-relaxed font-normal">
                    To become a trusted strategic marketing and knowledge
                    platform for the wellness and nutraceutical industry.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-[#fbf9f4]/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#b8cbb4] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0d3822] text-[#fbf9f4] flex items-center justify-center mb-6 shadow-sm">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#56755a] block mb-2">
                    03 / Daily Commitment
                  </span>
                  <h3 className="font-raleway text-2xl font-bold text-[#0d3822] tracking-tight mb-4">
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#344d3a] leading-relaxed font-normal">
                    To provide focused marketing strategy, practical
                    communication support, valuable industry insights and
                    ethical growth direction for businesses across the wellness
                    ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Live Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-16 md:h-20 w-full overflow-hidden leading-none z-0 pointer-events-none">
            <svg
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              className="w-full h-14 sm:h-16 md:h-20 text-[#ece8df] fill-current"
            >
              <path d="M0,60 C200,8 400,8 600,60 C800,108 1000,108 1200,60 C1400,8 1600,8 1800,60 C2000,108 2200,108 2400,60 L2400,120 L0,120 Z"></path>
            </svg>
          </div>
        </section>

        {/* 5. Our Approach: 7-Step Strategic Flow (Architectural Layout, Not Too Many Cards) */}
        <section id="approach" className="py-20 sm:py-28 bg-[#ece8df]">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfd7c8] border border-[#cfc4b2] text-xs font-semibold uppercase tracking-wider text-[#143420] mb-4 shadow-sm">
                <span>Methodology</span>
              </div>
              <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight mb-6">
                Our Strategic Approach
              </h2>
              <p className="font-raleway text-lg sm:text-xl md:text-[22px] text-[#0d3822] font-medium leading-snug">
                We do not begin with content calendars or advertising. We begin
                by understanding the product, audience, market, business
                objective and the barriers affecting trust and decision-making.
              </p>
            </div>

            {/* 7-Step Horizontal / Flow Layout with Delicate Inset Lines */}
            <div className="border-t border-[#d2c7b5] divide-y divide-[#d2c7b5]">
              {approachSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#fbf9f4]/60 px-4 sm:px-6 rounded-2xl transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 sm:gap-6 max-w-md">
                    <span className="font-mono text-xs font-bold text-[#0d3822] bg-[#d9cfbe] px-2.5 py-1 rounded-md group-hover:bg-[#0d3822] group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                    <h3 className="font-raleway text-lg sm:text-xl font-bold text-[#0d3822] tracking-tight group-hover:text-[#075f2c] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-[15px] text-[#405644] max-w-xl sm:text-right font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Our Core Values: 5 Guiding Principles (Clean Editorial Split) */}
        <section className="py-20 sm:py-28 bg-[#fbf9f4] border-y border-[#d5cbba]">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfd7c8] border border-[#cfc4b2] text-xs font-semibold uppercase tracking-wider text-[#143420] mb-3.5 shadow-sm">
                <Award size={14} className="text-[#0d3822]" />
                <span>Foundational Standards</span>
              </div>
              <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl text-[#0d3822] font-semibold tracking-tight">
                Our Core Values
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#4a5f4c] font-normal max-w-xl mx-auto">
                The non-negotiable principles that guide our strategy,
                communication, and advisory relationships.
              </p>
            </div>

            {/* 5 Editorial Value Rows / Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {brandValues.map((val, vIdx) => (
                <div
                  key={vIdx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#ece8df]/60 border border-[#d9d0c0] flex flex-col justify-between hover:bg-[#ece8df] transition-colors duration-200"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#627760] block mb-2">
                      PRINCIPLE {val.number}
                    </span>
                    <h3 className="font-raleway text-xl sm:text-2xl font-bold text-[#0d3822] tracking-tight mb-3">
                      {val.title}
                    </h3>
                    <p className="text-sm sm:text-[14.5px] text-[#3c5341] leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* 6th Slot: Brand Commitment Summary */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0d3822] text-white flex flex-col justify-between border border-[#1b4d32] shadow-sm">
                <div>
                  <span className="text-xs font-mono font-bold text-[#c5deb9] block mb-2">
                    THE PROMISE
                  </span>
                  <h3 className="font-raleway text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                    Thoughtful Partnership
                  </h3>
                  <p className="text-sm sm:text-[14.5px] text-[#d6e4d2] leading-relaxed font-normal">
                    The Wellness Ahead aims to become more than a service
                    provider. It seeks to be a thoughtful strategic partner for
                    businesses building the future of wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Bottom Action Banner: Explore Services & Start Conversation */}
        <section className="relative z-10 bg-[#ece8df] py-14 sm:py-20 overflow-hidden">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            <div className="relative bg-[#0d3822] text-white rounded-3xl sm:rounded-[2.25rem] px-6 py-12 sm:px-12 sm:py-16 text-center border border-[#235839] shadow-[0_20px_50px_rgba(13,56,34,0.22)] overflow-hidden">
              <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#1f5c38]/40 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#c5deb9]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-raleway text-2xl sm:text-3xl md:text-[36px] font-normal text-white tracking-[0.02em] leading-tight">
                  Building the Future of <br className="hidden sm:inline" />
                  <span className="text-[#c5deb9] font-medium drop-shadow-[0_2px_16px_rgba(197,222,185,0.3)]">
                    Wellness Communication.
                  </span>
                </h2>

                <p className="mt-6 text-sm sm:text-base text-[#d2e0ce] font-normal leading-relaxed max-w-xl mx-auto">
                  Partner with an advisory platform that speaks the language of
                  formulation, clinical credibility, and sustainable market
                  expansion.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl text-base font-semibold text-white bg-[#0A5A63] hover:bg-[#07454C] transition-all duration-300 shadow-[0_8px_25px_rgba(10,90,99,0.35)] hover:shadow-[0_12px_32px_rgba(10,90,99,0.48)] transform hover:-translate-y-0.5 group border border-[#0A5A63]/60"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-xl text-base font-semibold text-white border border-white/50 hover:bg-white/15 hover:border-white/80 backdrop-blur-md transition-all duration-300 shadow-sm"
                  >
                    Start a Conversation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Editorial Deep Green Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
