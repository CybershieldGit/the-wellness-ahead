import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://thewellnessahead.com"),
  title: "The Wellness Ahead — Strategic Marketing for Wellness Brands",
  description: "Strategic marketing and insights platform helping nutraceutical, herbal, supplement, functional food, and wellness businesses communicate with clarity, trust, and sustainable growth.",
  keywords: [
    "Nutraceutical Marketing Strategy",
    "Wellness Brand Positioning",
    "Supplement Scientific Communication",
    "Herbal Product Packaging Copy",
    "B2B Nutraceutical Advisory",
    "Functional Food Marketing",
    "The Wellness Ahead"
  ],
  authors: [{ name: "The Wellness Ahead" }],
  creator: "The Wellness Ahead",
  openGraph: {
    title: "The Wellness Ahead — Strategic Marketing for Wellness Brands",
    description: "Strategic marketing, scientific communication, and ethical growth advisory for nutraceutical, supplement, and wellness brands.",
    url: "https://thewellnessahead.com",
    siteName: "The Wellness Ahead",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "The Wellness Ahead Strategic Advisory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wellness Ahead — Strategic Marketing for Wellness Brands",
    description: "Independent strategic marketing and insights for the wellness industry.",
    images: ["/images/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thewellnessahead.com/#organization",
      "name": "The Wellness Ahead",
      "url": "https://thewellnessahead.com",
      "logo": "https://thewellnessahead.com/images/Color.svg",
      "description": "Strategic marketing and category communication for nutraceutical, herbal, supplement, and wellness businesses.",
      "sameAs": [
        "https://instagram.com",
        "https://facebook.com",
        "https://twitter.com"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://thewellnessahead.com/#service",
      "name": "The Wellness Ahead Strategic Advisory",
      "url": "https://thewellnessahead.com",
      "provider": {
        "@id": "https://thewellnessahead.com/#organization"
      },
      "serviceType": [
        "Brand and Market Strategy",
        "Product and Scientific Communication",
        "Digital Presence and Content",
        "Marketing Consulting and Growth Support"
      ],
      "areaServed": "Global"
    },
    {
      "@type": "FAQPage",
      "@id": "https://thewellnessahead.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can work with The Wellness Ahead?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nutraceutical, herbal, supplement, functional food, healthcare, ingredient, manufacturing and wellness businesses seeking strategic marketing support."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with both B2B and B2C brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Services can be adapted for consumer brands, manufacturers, suppliers, private-label businesses, distributors and other wellness-industry organisations."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide regulatory approval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, The Wellness Ahead provides strategic marketing and communication support. Regulatory, legal, clinical and medical approvals should be completed by qualified professionals."
          }
        },
        {
          "@type": "Question",
          "name": "Can we request only one service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Engagements may include a defined strategic project, selected execution support or ongoing consulting."
          }
        },
        {
          "@type": "Question",
          "name": "Do we need a complete project brief?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A discovery conversation can help identify the real requirement, priorities and suitable scope."
          }
        },
        {
          "@type": "Question",
          "name": "Can you support a new product launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Support can include market research, positioning, messaging, launch planning, content direction, digital communication and sales-support material."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body
        className="min-h-screen bg-[#ece8df] text-[#1c2e22] font-sans antialiased selection:bg-[#97ad8d] selection:text-[#0b2b18]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
