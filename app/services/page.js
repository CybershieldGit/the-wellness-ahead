import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";
import ServicesStickyScroll from "../../components/ServicesStickyScroll";
import Link from "next/link";
import { Target, ArrowRight } from "lucide-react";

export const metadata = {
  title:
    "Services — Strategic Marketing for Wellness & Nutraceuticals | The Wellness Ahead",
  description:
    "Explore our 11 strategic marketing capabilities for wellness, nutraceutical, dietary supplement, and herbal businesses — from brand positioning and scientific communication to B2B sales enablement and ongoing advisory.",
  keywords: [
    "Nutraceutical Marketing Services",
    "Supplement Brand Positioning Strategy",
    "Scientific Communication for Wellness",
    "Herbal Packaging Copy & Audit",
    "B2B Wellness Marketing & Sales Enablement",
    "Wellness Go-to-Market Launch Strategy",
    "Nutraceutical Market Research & Advisory",
  ],
  openGraph: {
    title:
      "Strategic Marketing Services for Wellness & Nutraceuticals | The Wellness Ahead",
    description:
      "From brand clarity and scientific communication to digital presence and ongoing consulting, discover how we help wellness brands get understood, trusted, and chosen.",
    url: "https://thewellnessahead.com/services",
    siteName: "The Wellness Ahead",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "The Wellness Ahead Strategic Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Marketing Services for Wellness & Nutraceuticals",
    description:
      "Independent strategic marketing and insights for the wellness industry.",
    images: ["/images/banner.png"],
  },
  alternates: {
    canonical: "https://thewellnessahead.com/services",
  },
};

// All 11 Services Grouped with Serializable Data and Curated Vertical Imagery
const servicesData = [
  {
    id: "brand-strategy",
    number: "01",
    iconName: "Compass",
    title: "Brand Strategy and Positioning",
    category: "Foundation & Identity",
    summary:
      "Establish a clear, defensible position that distinguishes your brand in a crowded market.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    deliverables: [
      "Brand positioning",
      "Brand purpose",
      "Value proposition",
      "Target-audience definition",
      "Competitor analysis",
      "Brand differentiation",
      "Brand messaging",
      "Communication framework",
      "Brand architecture",
      "Naming support",
      "Tagline direction",
      "Go-to-market strategy",
    ],
    outcome:
      "A clearer, more differentiated brand that audiences and business partners can understand and remember.",
  },
  {
    id: "product-portfolio",
    number: "02",
    iconName: "Layers",
    title: "Product and Portfolio Strategy",
    category: "Foundation & Identity",
    summary:
      "Structure your product lines to capture category demand and maximize customer lifetime value.",
    image: "/images/service3.png",
    deliverables: [
      "Product concept evaluation",
      "Category research",
      "Consumer trend research",
      "Product portfolio planning",
      "Product naming",
      "Benefit hierarchy",
      "Product story development",
      "Target-consumer definition",
      "Product launch direction",
      "B2B and B2C product communication strategy",
    ],
    outcome:
      "A more focused product portfolio aligned with market opportunities, consumer needs and brand direction.",
  },
  {
    id: "scientific-communication",
    number: "03",
    iconName: "Feather",
    title: "Scientific and Product Communication",
    category: "Product & Science",
    summary:
      "Translate complex clinical efficacy and bio-available formulations into trustworthy consumer language.",
    image: "/images/brand_banner.png",
    deliverables: [
      "Ingredient storytelling",
      "Formulation communication",
      "Scientific-content simplification",
      "Technical-to-consumer communication",
      "Product benefit hierarchy",
      "Brochure and catalogue content",
      "Sales-support material",
      "Educational articles",
      "Responsible claims communication support",
    ],
    outcome:
      "Complex product information becomes clearer, more relevant and easier for customers and partners to understand.",
  },
  {
    id: "packaging-labels",
    number: "04",
    iconName: "Award",
    title: "Packaging and Label Communication",
    category: "Product & Science",
    summary:
      "Optimize front-of-pack information hierarchy to win at retail shelves and e-commerce thumbnails.",
    image: "/images/service8.png",
    deliverables: [
      "Front-of-pack messaging",
      "Product information hierarchy",
      "Benefit communication",
      "Packaging-content structure",
      "Consumer-readability review",
      "Packaging copy",
      "Visual communication direction",
      "Designer briefing",
      "Marketing-focused packaging audit",
    ],
    outcome:
      "Packaging that communicates product value quickly, clearly and consistently.",
  },
  {
    id: "digital-presence",
    number: "05",
    iconName: "Globe",
    title: "Website and Digital Presence",
    category: "Digital & Channels",
    summary:
      "Build high-converting digital touchpoints that educate visitors and reflect clinical authority.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    deliverables: [
      "Website strategy",
      "Website architecture",
      "Website content writing",
      "Product-page content",
      "Landing-page strategy",
      "SEO content direction",
      "User journey review",
      "Website credibility audit",
      "Conversion recommendations",
      "Digital brand consistency",
    ],
    outcome:
      "A more credible digital presence that educates visitors, reflects business strengths and generates better enquiries.",
  },
  {
    id: "content-education",
    number: "06",
    iconName: "Sparkles",
    title: "Content Marketing and Brand Education",
    category: "Digital & Channels",
    summary:
      "Develop category authority through informative, hype-free content that earns lasting organic loyalty.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    deliverables: [
      "Content strategy",
      "Editorial planning",
      "Social media direction",
      "LinkedIn strategy",
      "Blog and article writing",
      "Educational campaigns",
      "Newsletter strategy",
      "Brand storytelling",
      "Video and carousel planning",
      "Content calendars",
    ],
    outcome:
      "A consistent communication system that builds visibility, understanding and trust over time.",
  },
  {
    id: "thought-leadership",
    number: "07",
    iconName: "Users",
    title: "Founder and Corporate Thought Leadership",
    category: "Leadership & Growth",
    summary:
      "Position your founders and executives as trusted domain experts across industry forums and social networks.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    deliverables: [
      "Leadership positioning",
      "LinkedIn strategy for executives",
      "Expert article development",
      "Industry commentary",
      "Corporate and leadership brand alignment",
      "Interview preparation",
      "Speaking-topic direction",
      "Executive communication support",
    ],
    outcome:
      "Greater leadership visibility, stronger industry credibility and a more human corporate presence.",
  },
  {
    id: "launch-campaigns",
    number: "08",
    iconName: "Rocket",
    title: "Product Launch and Campaign Strategy",
    category: "Leadership & Growth",
    summary:
      "Execute synchronized multi-channel launch rollouts that generate immediate commercial traction.",
    image: "/images/service8.png",
    deliverables: [
      "Launch strategy",
      "Pre-launch communication",
      "Launch positioning",
      "Campaign concept",
      "Audience segmentation",
      "Content rollout",
      "Digital-launch assets",
      "Sales communication",
      "Launch calendar",
      "Lead-generation planning",
      "Post-launch communication",
    ],
    outcome:
      "A structured product launch with consistent messaging and coordinated communication across channels.",
  },
  {
    id: "b2b-enablement",
    number: "09",
    iconName: "Briefcase",
    title: "B2B Marketing and Sales Enablement",
    category: "Commercial & B2B",
    summary:
      "Empower sales teams, distributors, and contract manufacturing pipelines with institutional collateral.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    deliverables: [
      "B2B positioning",
      "Corporate-profile content",
      "Manufacturing capability communication",
      "Product-catalogue strategy",
      "Sales-presentation content",
      "Distributor communication",
      "Export marketing content",
      "Private-label communication",
      "LinkedIn B2B strategy",
      "Lead nurturing",
      "Trade-show communication",
    ],
    outcome:
      "Stronger business credibility and clearer communication with brands, distributors, importers and strategic partners.",
  },
  {
    id: "market-research",
    number: "10",
    iconName: "SearchCheck",
    title: "Market Research and Growth Advisory",
    category: "Commercial & B2B",
    summary:
      "De-risk major product and positioning decisions with comprehensive qualitative and quantitative insights.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    deliverables: [
      "Competitor research",
      "Category research",
      "Consumer-trend research",
      "Market mapping",
      "Brand audit",
      "Website audit",
      "Content audit",
      "Digital presence audit",
      "Positioning review",
      "Marketing roadmap",
      "Growth-opportunity identification",
    ],
    outcome:
      "Better strategic decisions supported by structured research and market understanding.",
  },
  {
    id: "ongoing-consulting",
    number: "11",
    iconName: "CalendarDays",
    title: "Ongoing Marketing Consulting",
    category: "Commercial & B2B",
    summary:
      "Access continuous strategic counsel, campaign reviews, and team guidance as your wellness business scales.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    deliverables: [
      "Monthly marketing planning",
      "Campaign review",
      "Content review",
      "Website guidance",
      "Communication review",
      "Marketing-team support",
      "Vendor coordination",
      "Design and content briefing",
      "Priority planning",
      "Marketing process improvement",
    ],
    outcome:
      "Consistent direction, stronger coordination and better use of marketing resources.",
  },
];

// Schema.org Structured Data for Services
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://thewellnessahead.com/services/#webpage",
      url: "https://thewellnessahead.com/services",
      name: "Strategic Marketing Services for Wellness & Nutraceuticals",
      description:
        "Comprehensive strategic marketing capabilities for wellness, dietary supplement, and herbal businesses.",
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
            name: "Services",
            item: "https://thewellnessahead.com/services",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://thewellnessahead.com/services/#serviceslist",
      name: "Wellness Marketing Capabilities",
      itemListElement: servicesData.map((svc, index) => ({
        "@type": "Service",
        position: index + 1,
        name: svc.title,
        description: svc.outcome,
        provider: {
          "@type": "Organization",
          name: "The Wellness Ahead",
          url: "https://thewellnessahead.com",
        },
      })),
    },
  ],
};

export const dynamic = "force-static";

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#ece8df] text-[#1c2e22] font-sans antialiased selection:bg-[#97ad8d] selection:text-[#0b2b18]">
        {/* Breadcrumb & Services JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />

        {/* 1. Floating Header & Nav */}
        <Navbar />

        {/* 2. Hero Section: Signature Organic Light Theme with Centered Typography */}
        <section
          id="services-hero"
          className="group relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-b from-[#ece8df] via-[#f4efe4] to-[#ece8df] text-center border-b border-[#ded6c7] transition-all duration-700 select-none"
        >
          {/* Subtle Organic Radial Glows */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[350px] bg-[#d1ddcc]/45 rounded-full blur-[100px] pointer-events-none group-hover:scale-125 group-hover:bg-[#c5deb9]/65 transition-all duration-1000 ease-out"></div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#9eb393]/15 rounded-full blur-[90px] pointer-events-none group-hover:scale-110 transition-all duration-1000 ease-out"></div>

          <div className="relative z-20 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center">
            <div className="max-w-3xl sm:max-w-4xl mx-auto flex flex-col items-center mt-4 sm:mt-6 md:mt-8">
              {/* Main Headline (Clean 3-Line Structured Layout) */}
              <h1 className="font-raleway text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] text-[#0d3822] tracking-[0.02em] font-semibold leading-[1.18] text-center transition-transform duration-700 ease-out group-hover:scale-[1.01] flex flex-col items-center gap-1 sm:gap-1.5">
                <span>Strategic Marketing Services</span>
                <span>for Wellness &amp;</span>
                <span className="text-[#075f2c] font-bold transition-all duration-500 group-hover:text-[#0b6c34] group-hover:drop-shadow-[0_2px_20px_rgba(7,95,44,0.18)]">
                  Nutraceutical Businesses.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-[#344d39] font-normal leading-[1.75] tracking-[0.02em] max-w-3xl mx-auto text-center transition-colors duration-500 group-hover:text-[#1e3b26]">
                From brand clarity and product communication to digital presence
                and ongoing consulting, our services help wellness businesses
                strengthen how they are understood, trusted and positioned in
                the market.
              </p>

              {/* Quick Jump Action Pill Group */}
              <div className="mt-9 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a
                  href="#services-list"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#0A5A63] hover:bg-[#07454C] transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(10,90,99,0.38)] transform hover:-translate-y-0.5"
                >
                  <span>Explore All 11 Capabilities</span>
                  <span>↓</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm sm:text-base font-medium text-[#0d3822] bg-[#fbf9f4] hover:bg-white border border-[#d5cbba] hover:border-[#b8cbb4] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Main Services Catalog: Sticky Pinned Showcase + Arc-Curving Vertical Visual Portals */}
        <section
          id="services-list"
          className="pt-16 sm:pt-20 pb-20 sm:pb-28 bg-[#ece8df]"
        >
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            {/* Sticky Pinned Deck Component with Integrated Section Heading & Arc Trajectory */}
            <ServicesStickyScroll services={servicesData} />
          </div>
        </section>

        {/* 4. Bottom Consultation Card & Next Steps */}
        <section className="relative z-10 bg-[#ece8df] pb-20 sm:pb-24 overflow-hidden">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            <div className="relative bg-[#0d3822] text-white rounded-3xl sm:rounded-[2.25rem] px-6 py-12 sm:px-12 sm:py-16 text-center border border-[#235839] shadow-[0_20px_50px_rgba(13,56,34,0.22)] overflow-hidden">
              <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#1f5c38]/40 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#c5deb9]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-raleway text-2xl sm:text-3xl md:text-[36px] font-normal text-white tracking-[0.02em] leading-tight">
                  Not Sure Which Service <br className="hidden sm:inline" />
                  <span className="text-[#c5deb9] font-medium drop-shadow-[0_2px_16px_rgba(197,222,185,0.3)]">
                    Fits Your Current Stage?
                  </span>
                </h2>

                <p className="mt-6 text-sm sm:text-base text-[#d2e0ce] font-normal leading-relaxed max-w-xl mx-auto">
                  A 30-minute discovery conversation can help assess your
                  category positioning, communication bottlenecks, and the
                  highest-leverage marketing priorities.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl text-base font-semibold text-white bg-[#0A5A63] hover:bg-[#07454C] transition-all duration-300 shadow-[0_8px_25px_rgba(10,90,99,0.35)] hover:shadow-[0_12px_32px_rgba(10,90,99,0.48)] transform hover:-translate-y-0.5 group border border-[#0A5A63]/60"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-xl text-base font-semibold text-white border border-white/50 hover:bg-white/15 hover:border-white/80 backdrop-blur-md transition-all duration-300 shadow-sm"
                  >
                    About Our Approach
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
