'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SmoothScroll from '../../components/SmoothScroll';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Building2,
  Globe,
  Phone,
  User,
  Layers,
  Sparkles,
  ShieldCheck,
  Clock,
  Send,
  MessageSquare,
  Compass,
  FileText,
  Target
} from 'lucide-react';

const businessTypes = [
  'Nutraceutical / Dietary Supplement Brand',
  'Herbal & Botanical Formulator',
  'Functional Food & Beverage',
  'Contract Manufacturer / Ingredient Supplier',
  'Wellness Clinic / Integrative Practice',
  'Other Wellness Business'
];

const serviceOptions = [
  'Brand Strategy and Positioning',
  'Product and Portfolio Strategy',
  'Scientific and Product Communication',
  'Packaging and Label Communication',
  'Website and Digital Presence',
  'Content Marketing and Brand Education',
  'Founder and Corporate Thought Leadership',
  'Product Launch and Campaign Strategy',
  'B2B Marketing and Sales Enablement',
  'Market Research and Growth Advisory',
  'Ongoing Marketing Consulting',
  'Comprehensive Strategic Marketing Advisory'
];

const projectStages = [
  'Pre-Launch / Formulation Stage',
  'Formulated & Ready for Market Launch',
  'Active Commercial Brand Looking to Reposition',
  'Scaling Business & Expanding Portfolio'
];

const commonQuestions = [
  {
    q: "Do I need a finalized product brief before reaching out?",
    a: "No. Most brands begin with a strategic conversation to define their positioning before writing briefs."
  },
  {
    q: "How do you handle formulation and NDA confidentiality?",
    a: "We maintain strict professional discretion for all proprietary ingredient formulations and commercial plans."
  },
  {
    q: "What types of engagements do you offer?",
    a: "From targeted strategic deliverables (packaging copy, positioning, website) to ongoing fractional marketing advisory."
  }
];

function LeadCaptureForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    businessType: '',
    serviceRequired: serviceParam || '',
    projectStage: '',
    approximateRequirement: '',
    description: ''
  });

  useEffect(() => {
    if (serviceParam) {
      // Find matching option or set exact param value
      const matched = serviceOptions.find(
        (opt) => opt.toLowerCase() === serviceParam.toLowerCase()
      );
      setFormData((prev) => ({
        ...prev,
        serviceRequired: matched || serviceParam
      }));
    }
  }, [serviceParam]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage('Network error. Please try again or reach out to hello@thewellnessahead.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fbf9f4] border border-[#d6ccba] rounded-2xl sm:rounded-3xl p-4 sm:p-6 xl:p-7 shadow-[0_18px_45px_rgba(13,56,34,0.09)]">
      {submitted ? (
        <div className="py-10 text-center flex flex-col items-center justify-center animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-[#0d3822] text-[#c5deb9] flex items-center justify-center mb-4 shadow-md">
            <CheckCircle2 size={28} />
          </div>
          <h3 className="font-raleway text-xl sm:text-2xl font-bold text-[#0d3822] mb-1.5">
            Enquiry Received.
          </h3>
          <p className="text-xs sm:text-sm text-[#3e5642] max-w-sm mx-auto leading-relaxed mb-5">
            Thank you for reaching out. A senior strategist will review your business context and connect with you within 24–48 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                website: '',
                businessType: '',
                serviceRequired: '',
                projectStage: '',
                approximateRequirement: '',
                description: ''
              });
            }}
            className="px-5 py-2 rounded-xl bg-[#0A5A63] text-white text-xs font-semibold hover:bg-[#07454C] transition-colors"
          >
            Submit Another Requirement
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
          
          <div className="border-b border-[#e2d8c8] pb-2 mb-1">
            <h3 className="font-raleway text-lg sm:text-xl font-bold text-[#0d3822]">
              Initiate Strategic Enquiry
            </h3>
            <p className="text-xs text-[#526a57] mt-0.5">
              Fill out the details below to request a strategic consultation.
            </p>
          </div>

          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            <div>
              <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0d3822] mb-1">
                Name <span className="text-[#a43b2d]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#d2c7b5] text-[#1c2e22] placeholder-[#9bb098] text-[13px] sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#075f2c] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0d3822] mb-1">
                Company <span className="text-[#a43b2d]">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Brand / Company name"
                className="w-full px-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#d2c7b5] text-[#1c2e22] placeholder-[#9bb098] text-[13px] sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#075f2c] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Row 2: Business Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            <div>
              <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0d3822] mb-1">
                Business Email <span className="text-[#a43b2d]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#d2c7b5] text-[#1c2e22] placeholder-[#9bb098] text-[13px] sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#075f2c] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0d3822] mb-1">
                Phone <span className="text-xs text-[#738a6f] font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#d2c7b5] text-[#1c2e22] placeholder-[#9bb098] text-[13px] sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#075f2c] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Row 3: Website or LinkedIn */}
          <div>
            <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0d3822] mb-1">
              Website or LinkedIn <span className="text-xs text-[#738a6f] font-normal">(optional)</span>
            </label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://yourbrand.com or linkedin.com/in/..."
              className="w-full px-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#d2c7b5] text-[#1c2e22] placeholder-[#9bb098] text-[13px] sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#075f2c] focus:border-transparent transition-all"
            />
          </div>

          {/* Row 4: Type of Business & Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            <div>
              <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0d3822] mb-1">
                Type of Business <span className="text-[#a43b2d]">*</span>
              </label>
              <select
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#d2c7b5] text-[#1c2e22] text-[13px] sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#075f2c] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">Select type</option>
                {businessTypes.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0d3822] mb-1">
                Service Required <span className="text-[#a43b2d]">*</span>
              </label>
              <select
                name="serviceRequired"
                required
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#d2c7b5] text-[#1c2e22] text-[13px] sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#075f2c] focus:border-transparent transition-all cursor-pointer font-medium"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service, idx) => (
                  <option key={idx} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 5: Project Stage & Approximate Requirement */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            <div>
              <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0d3822] mb-1">
                Project Stage <span className="text-[#a43b2d]">*</span>
              </label>
              <select
                name="projectStage"
                required
                value={formData.projectStage}
                onChange={handleChange}
                className="w-full px-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#d2c7b5] text-[#1c2e22] text-[13px] sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#075f2c] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">Select stage</option>
                {projectStages.map((stage, idx) => (
                  <option key={idx} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0d3822] mb-1">
                Approximate Requirement
              </label>
              <input
                type="text"
                name="approximateRequirement"
                value={formData.approximateRequirement}
                onChange={handleChange}
                placeholder="e.g. 3-Month Retainer, Q3 Launch..."
                className="w-full px-3 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#d2c7b5] text-[#1c2e22] placeholder-[#9bb098] text-[13px] sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#075f2c] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Row 6: Brief Project Description */}
          <div>
            <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0d3822] mb-1">
              Brief Project Description <span className="text-[#a43b2d]">*</span>
            </label>
            <textarea
              name="description"
              required
              rows={2}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us what you are building and where your marketing feels stuck..."
              className="w-full px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-[#d2c7b5] text-[#1c2e22] placeholder-[#9bb098] text-[13px] sm:text-sm focus:outline-none focus:ring-1.5 focus:ring-[#075f2c] focus:border-transparent transition-all resize-y"
            ></textarea>
          </div>

          {/* Reassurance note */}
          <p className="text-[11px] sm:text-xs text-[#5f7862] leading-tight italic">
            You do not need to arrive with a perfect brief. A clear conversation is often the best place to begin.
          </p>

          {/* Error Feedback Message */}
          {errorMessage && (
            <div className="p-2.5 rounded-xl bg-[#fdf2f2] border border-[#f5c2c2] text-[#a43b2d] text-xs font-medium animate-fade-in">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-0.5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#0A5A63] hover:bg-[#07454C] transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(10,90,99,0.38)] transform hover:-translate-y-0.5 group disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Processing Enquiry...</span>
              ) : (
                <>
                  <span>Submit Business Enquiry</span>
                  <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>

        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#ece8df] text-[#1c2e22] font-sans antialiased selection:bg-[#97ad8d] selection:text-[#0b2b18]">
        
        {/* 1. Floating Header & Nav */}
        <Navbar />

        {/* 2. Main Pinned Form Section */}
        <section className="pt-28 sm:pt-32 pb-20 sm:pb-28 bg-[#ece8df]">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
              
              {/* LEFT HALF: Content that Vertically Scrolls Upward (6 Cols) */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 pt-1 sm:pt-2">
                
                {/* Hero Headline & Narrative */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#dfd7c8] border border-[#cfc4b2] text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#143420] mb-3.5 shadow-xs">
                    <MessageSquare size={13} className="text-[#0d3822]" />
                    <span>Direct Strategic Consultation</span>
                  </div>

                  <h1 className="font-raleway text-[38px] xs:text-[42px] sm:text-[46px] md:text-5xl lg:text-[40px] xl:text-[44px] text-[#0d3822] tracking-[0.02em] font-semibold leading-[1.14] mb-4">
                    Tell Us What You Are Building and <br />
                    <span className="text-[#075f2c] font-bold">
                      Where Your Marketing Feels Stuck.
                    </span>
                  </h1>

                  <p className="text-[19px] sm:text-xl md:text-xl text-[#344d39] font-normal leading-[1.65] tracking-[0.01em]">
                    Share your current requirement, challenge or business objective. A focused conversation can help clarify the right next step.
                  </p>
                </div>



                {/* Confidentiality Guaranteed Direct Contact Strip (Desktop Position) */}
                <div className="hidden lg:flex p-4 sm:p-4.5 rounded-xl bg-[#092214] text-white flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md border border-[#1b4329]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c5deb9]">
                      <Mail size={15} />
                    </div>
                    <div>
                      <span className="text-[10.5px] text-[#9bb597] block font-mono">
                        Direct Strategic Desk
                      </span>
                      <a href="mailto:hello@thewellnessahead.com" className="text-xs font-medium text-white hover:text-[#c5deb9] transition-colors">
                        hello@thewellnessahead.com
                      </a>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-[#9bb597] uppercase">
                    Proprietary Discretion Guaranteed
                  </span>
                </div>

              </div>

              {/* RIGHT HALF: Freezed / Sticky Concise Form with Dynamic Pre-Selection (6 Cols) */}
              <div className="lg:col-span-6 xl:col-span-6 lg:sticky lg:top-28 xl:lg:top-32 z-20">
                <Suspense fallback={
                  <div className="bg-[#fbf9f4] border border-[#d6ccba] rounded-3xl p-8 text-center text-sm text-[#3e5642]">
                    Loading consultation form...
                  </div>
                }>
                  <LeadCaptureForm />
                </Suspense>

                {/* Confidentiality Guaranteed Direct Contact Strip (Mobile Position: After the Form) */}
                <div className="lg:hidden mt-6 p-4 rounded-2xl bg-[#092214] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md border border-[#1b4329]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c5deb9]">
                      <Mail size={15} />
                    </div>
                    <div>
                      <span className="text-[10.5px] text-[#9bb597] block font-mono">
                        Direct Strategic Desk
                      </span>
                      <a href="mailto:hello@thewellnessahead.com" className="text-xs font-medium text-white hover:text-[#c5deb9] transition-colors">
                        hello@thewellnessahead.com
                      </a>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-[#9bb597] uppercase">
                    Proprietary Discretion Guaranteed
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 3. Footer */}
        <Footer />

      </main>
    </SmoothScroll>
  );
}
