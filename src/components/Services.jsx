import React, { useState, useRef, useEffect } from 'react';

const servicesList = [
  {
    id: '01',
    title: 'Brand and Market Strategy',
    tag: 'Positioning & Direction',
    description: 'Positioning, differentiation, audience clarity, messaging, market research and strategic direction.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    alt: 'Brand and Market Strategy leadership portrait',
  },
  {
    id: '02',
    title: 'Product and Scientific Communication',
    tag: 'Storytelling & Technical Simplification',
    description: 'Product storytelling, technical simplification, benefit hierarchy, educational communication and sales-support content.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    alt: 'Product and Scientific Communication research portrait',
  },
  {
    id: '03',
    title: 'Digital Presence and Content',
    tag: 'Thought Leadership & SEO',
    description: 'Website strategy, SEO direction, brand content, thought leadership, articles, LinkedIn and digital communication.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    alt: 'Digital Presence and Content editorial workspace portrait',
  },
  {
    id: '04',
    title: 'Marketing Consulting and Growth Support',
    tag: 'Roadmaps & Execution Advisory',
    description: 'Marketing roadmaps, campaign guidance, launch planning, team support, reviews and ongoing strategic advisory.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    alt: 'Marketing Consulting and Growth Support leadership meeting',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [mousePos, setMousePos] = useState({ x: null, y: null });
  const [pitchTilt, setPitchTilt] = useState(0);

  const windowCursorRef = useRef({ clientX: null, clientY: null });
  const mousePosRef = useRef({ x: 0, y: 0 });
  const prevPosRef = useRef({ x: 0, y: 0 });
  const pitchTiltRef = useRef(0);
  const rafRef = useRef(null);
  const sectionRef = useRef(null);

  const updateCursorCoords = (clientX, clientY) => {
    if (sectionRef.current && clientX !== null && clientY !== null) {
      const rect = sectionRef.current.getBoundingClientRect();
      const newX = clientX - rect.left;
      const newY = clientY - rect.top;
      mousePosRef.current = { x: newX, y: newY };
      setMousePos({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    let isRunning = true;

    const handleGlobalMouseMove = (e) => {
      windowCursorRef.current = { clientX: e.clientX, clientY: e.clientY };
      updateCursorCoords(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      if (windowCursorRef.current.clientX !== null) {
        updateCursorCoords(windowCursorRef.current.clientX, windowCursorRef.current.clientY);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean Backward Tilt Physics on Horizontal Movement
    const updateTiltPhysics = () => {
      const vx = mousePosRef.current.x - prevPosRef.current.x;
      const speedX = Math.abs(vx);
      const targetPitch = Math.max(-speedX * 0.75, -25); // Top leans backward up to -25deg

      pitchTiltRef.current += (targetPitch - pitchTiltRef.current) * 0.16;
      setPitchTilt(pitchTiltRef.current);

      prevPosRef.current = { ...mousePosRef.current };

      if (isRunning) {
        rafRef.current = requestAnimationFrame(updateTiltPhysics);
      }
    };

    rafRef.current = requestAnimationFrame(updateTiltPhysics);

    return () => {
      isRunning = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleRowMouseEnter = (e, index) => {
    windowCursorRef.current = { clientX: e.clientX, clientY: e.clientY };
    updateCursorCoords(e.clientX, e.clientY);
    prevPosRef.current = { ...mousePosRef.current };
    setActiveService(index);
  };

  const isVisible = activeService !== null && mousePos.x !== null;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-14 md:py-18 bg-[#ece8df] overflow-hidden select-none"
    >
      {/* Floating Cursor-Following Vertical Portrait Image Preview with Top-Backward Lean */}
      <div
        className="pointer-events-none absolute z-30 hidden lg:block transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate3d(${(mousePos.x || 0) + 18}px, ${(mousePos.y || 0) - 95}px, 0px) perspective(800px) rotateX(${pitchTilt}deg)`,
          transformOrigin: 'bottom center',
        }}
      >
        <div
          className={`w-[130px] sm:w-[145px] aspect-[3/4] rounded-xl shadow-[0_20px_45px_rgba(13,56,34,0.3),0_3px_8px_rgba(0,0,0,0.12)] border border-white/60 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          {activeService !== null && (
            <div className="relative w-full h-full bg-[#143520] overflow-hidden">
              <img
                src={servicesList[activeService].image}
                alt={servicesList[activeService].alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out scale-105"
              />
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-raleway text-3xl sm:text-4xl md:text-[38px] text-[#0d3822] font-semibold tracking-tight leading-snug">
            Where Strategy Meets Market <br />
            <span className="relative inline-block pb-2.5 mt-1">
              Communication
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-[2.5px] bg-[#8fa687] rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* Editorial Text-Based Interactive Capability Rows (Slightly Reduced Width) */}
        <div className="max-w-6xl lg:max-w-[1240px] mx-auto">
          <div
            className="border-t border-[#d5ccbe]"
            onMouseLeave={() => setActiveService(null)}
          >
            {servicesList.map((service, index) => {
              const isHovered = activeService === index;

              return (
                <div
                  key={index}
                  onMouseEnter={(e) => handleRowMouseEnter(e, index)}
                  className={`group border-b border-[#d5ccbe] py-5 sm:py-6 px-4 sm:px-6 transition-all duration-350 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 rounded-2xl ${
                    isHovered
                      ? 'bg-[#fbf9f4]/90 shadow-[0_8px_26px_rgba(13,56,34,0.07)]'
                      : 'bg-transparent hover:bg-[#fbf9f4]/50'
                  }`}
                >
                  {/* Left: Index + Title + Capability Tag */}
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-5 max-w-xl">
                    {/* Number Badge */}
                    <span
                      className={`font-raleway text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border transition-colors duration-300 ${
                        isHovered
                          ? 'bg-[#0d3822] text-[#fbf9f4] border-[#0d3822]'
                          : 'bg-[#dfd7c8] text-[#556b53] border-[#cec2af]'
                      }`}
                    >
                      {service.id}
                    </span>

                    <div>
                      <h3
                        className={`font-raleway text-lg sm:text-xl md:text-[22px] font-semibold transition-all duration-300 ${
                          isHovered
                            ? 'text-[#075f2c] translate-x-1.5'
                            : 'text-[#0d3822]'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] font-medium text-[#7a8e78] tracking-wide uppercase mt-1">
                        {service.tag}
                      </p>
                    </div>
                  </div>

                  {/* Right: Description */}
                  <div className="lg:max-w-md lg:text-right">
                    <p className="text-xs sm:text-sm md:text-[14px] text-[#4a5f4d] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#0e3520] hover:bg-[#072415] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
          >
            View All Services &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
