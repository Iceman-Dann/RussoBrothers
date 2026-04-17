"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { ScrollReveal, CountUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { BoltIcon, ShieldCheckIcon, StarIcon, ClockIcon, MapPinIcon, DollarIcon, CheckCircleIcon, WrenchIcon, ShowerIcon, FlameIcon, HardHatIcon, BathtubIcon, GasIcon, PhoneIcon, SparkleIcon, CheckIcon } from "@/components/Icons";

/* ─── HERO ─── */
function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated gradient mesh bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 gradient-mesh" />

      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(249,115,22,0.08), transparent 40%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-semibold backdrop-blur-sm">
                <BoltIcon size={16} /> Wilmington&apos;s #1 Rated Plumber
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.8 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9]"
            >
              Russo Brothers Inc
              <br />
              <span className="text-text-secondary">The Plumber </span>
              <span className="text-accent">Delaware Trusts.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="mt-6 text-lg sm:text-xl text-text-secondary font-medium"
            >
              Family Owned • Licensed &amp; Insured • Prompt Service
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-accent text-white font-bold rounded-xl text-lg transition-all duration-200 accent-glow hover:accent-glow-strong hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a Free Quote
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="tel:+13027623307"
                className="px-8 py-4 border-2 border-accent/40 text-accent font-bold rounded-xl text-lg hover:border-accent hover:bg-accent/5 transition-all duration-200"
              >
                Call (302) 762-3307
              </a>
            </motion.div>

            {/* Stars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={20} className="text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-text-secondary">4.9 Stars · 47 Reviews on Google</span>
            </motion.div>
          </div>

          {/* Right Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="hidden lg:block relative"
          >
            <div className="relative h-[500px]">
              {/* Card 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-72 glass rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Live</span>
                </div>
                <p className="text-sm font-semibold text-text-primary">Emergency call answered</p>
                <p className="text-xs text-text-secondary mt-1">Technician dispatched to South Austin — ETA 18 min</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-44 left-0 w-80 glass rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-text-primary italic">&ldquo;Quick service, great folks, reasonably priced. A family owned business that treats its customers like neighbors.&rdquo;</p>
                <p className="text-xs text-text-secondary mt-2">— Russo Brothers Customer</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 right-8 w-64 glass rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary flex items-center gap-1">Job Complete <CheckIcon size={14} className="text-green-400" /></p>
                    <p className="text-xs text-text-secondary">Water heater installation — 2hr 15min</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-secondary"
          >
            <span className="text-xs">Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── TRUST BAR ─── */
function TrustBar() {
  const items = [
    { icon: <ShieldCheckIcon size={20} className="text-accent" />, text: "Licensed & Insured" },
    { icon: <StarIcon size={20} className="text-accent" />, text: "4.9 Star Rated" },
    { icon: <ClockIcon size={20} className="text-accent" />, text: "Quick Response" },
    { icon: <MapPinIcon size={20} className="text-accent" />, text: "Serving Wilmington, DE" },
    { icon: <DollarIcon size={20} className="text-accent" />, text: "Reasonable Pricing" },
    { icon: <CheckCircleIcon size={20} className="text-accent" />, text: "Family Owned", hasCount: false },
  ];

  return (
    <section className="relative z-10 -mt-1">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium text-text-primary whitespace-nowrap">
                    {item.hasCount ? (
                      <><CountUp target={item.count!} suffix="+" /> Jobs</>
                    ) : (
                      item.text
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ─── SERVICES PREVIEW ─── */
function ServicesPreview() {
  const services = [
    { icon: <WrenchIcon size={36} className="text-accent" />, name: "Emergency Repairs", desc: "Fast response when pipes burst or drains overflow." },
    { icon: <ShowerIcon size={36} className="text-accent" />, name: "Drain Cleaning", desc: "Stubborn clogs cleared with professional-grade equipment." },
    { icon: <FlameIcon size={36} className="text-accent" />, name: "Water Heaters", desc: "Tank & tankless installation, repair, and maintenance." },
    { icon: <HardHatIcon size={36} className="text-accent" />, name: "Sewer Line Service", desc: "Camera inspection, repair, and full replacement." },
    { icon: <BathtubIcon size={36} className="text-accent" />, name: "Bathroom Remodeling", desc: "Full plumbing rough-in for dream bathroom renovations." },
    { icon: <GasIcon size={36} className="text-accent" />, name: "Gas Line Services", desc: "Certified gas line installation, testing, and leak repair." },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="WHAT WE DO" title="Everything You Need. Nothing You Don't." />
        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.name}>
              <div className="group glass rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 cursor-pointer h-full">
                <span className="block mb-4">{service.icon}</span>
                <h3 className="text-xl font-bold text-text-primary mb-2">{service.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link href="/services" className="text-accent font-semibold hover:underline inline-flex items-center gap-1 group">
              View All Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function Stats() {
  const stats = [
    { value: 30, suffix: "+", label: "Years in Business" },
    { value: 5000, suffix: "+", label: "Happy Customers" },
    { value: 47, suffix: "", label: "Google Reviews" },
    { value: 4.9, suffix: "/5", label: "Star Rating" },
  ];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <div className={`text-center ${i < 3 ? "lg:border-r lg:border-white/[0.06]" : ""} py-4`}>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-text-secondary font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE US ─── */
function WhyChooseUs() {
  const features = [
    "Upfront pricing — no surprise bills",
    "Same-day availability on most jobs",
    "15 years of local expertise",
    "We treat your home like our own",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <ScrollReveal>
              <span className="accent-label">WHY APEX PLUMBING</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-text-primary leading-tight">
                We Show Up. We Fix It.<br />We Don&apos;t Overcharge.
              </h2>
            </ScrollReveal>
            <div className="mt-8 space-y-5">
              {features.map((feat, i) => (
                <ScrollReveal key={feat} delay={0.2 + i * 0.1}>
                  <div className="flex items-start gap-3">
                    <SparkleIcon size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-text-secondary">{feat}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.5}>
              <Link
                href="/contact"
                className="mt-8 inline-block px-8 py-4 bg-accent text-white font-bold rounded-xl transition-all duration-200 accent-glow hover:accent-glow-strong hover:scale-[1.02]"
              >
                Get Your Free Quote →
              </Link>
            </ScrollReveal>
          </div>

          {/* Right - Floating cards */}
          <div className="relative">
            <StaggerContainer className="space-y-6" staggerDelay={0.2}>
              <StaggerItem>
                <div className="glass rounded-2xl p-6 shadow-xl">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Average Response Time</p>
                  <p className="text-3xl font-black text-accent tracking-tight">23 min</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="glass rounded-2xl p-6 shadow-xl">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Jobs Done Right First Time</p>
                  <p className="text-3xl font-black text-green-400 tracking-tight">97%</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="glass rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-xs text-text-secondary uppercase tracking-wider">Recent Activity</p>
                  </div>
                  <p className="text-sm text-text-primary">John in Austin just booked a service</p>
                  <p className="text-xs text-text-secondary mt-1">2 minutes ago</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
function Process() {
  const steps = [
    { num: "01", title: "You Call or Book Online", desc: "Reach us anytime — call, text, or fill out our quick online form." },
    { num: "02", title: "We Show Up On Time", desc: "A licensed technician arrives at your door within the promised window." },
    { num: "03", title: "Job Done, Guaranteed", desc: "We complete the work to your satisfaction, backed by our quality guarantee." },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="HOW IT WORKS" title="Simple. Fast. Reliable." />
        <div className="mt-16 grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-accent/30" />
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.2}>
              <div className="text-center relative">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <span className="text-accent font-black text-xl">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── REVIEWS ─── */
function ReviewsSection() {
  const reviews = [
    { text: "Called at 11pm with a burst pipe. They were here in 20 minutes. Incredible service from start to finish.", name: "Mike R.", city: "Austin, TX" },
    { text: "Upfront pricing, no surprises. They even cleaned up after the job. Will use Apex for everything.", name: "Jennifer K.", city: "Round Rock, TX" },
    { text: "Had 3 quotes and Apex was the most honest. Fair price, great work on our whole-house repipe.", name: "David & Lisa T.", city: "Cedar Park, TX" },
    { text: "Our water heater died on a Sunday. They had a new one installed by Monday afternoon. Lifesavers!", name: "Amanda S.", city: "Austin, TX" },
    { text: "The tech explained everything before starting. No pressure, no upselling. Just honest plumbing.", name: "Robert J.", city: "Pflugerville, TX" },
    { text: "Five stars isn't enough. Second time using Apex and they somehow got even better. Highly recommend!", name: "Sarah M.", city: "Georgetown, TX" },
    { text: "Fixed a leak other plumbers couldn't find. Professional, punctual, and priced fairly.", name: "Chris P.", city: "Lakeway, TX" },
    { text: "They treat your home like their own. Booties on shoes, drop cloths down. A+ class act.", name: "Maria G.", city: "Leander, TX" },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading label="TESTIMONIALS" title="What Austin Is Saying" />
      </div>

      {/* Marquee */}
      <div className="marquee-container relative">
        <div className="flex gap-6 marquee-track animate-marquee" style={{ width: "max-content" }}>
          {[...reviews, ...reviews].map((review, i) => (
            <div key={i} className="w-80 flex-shrink-0 glass rounded-2xl p-6">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} size={16} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-text-primary italic leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              <p className="text-xs text-text-secondary mt-3">— {review.name}, {review.city}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Google badge */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
          <p className="text-text-secondary text-sm">
            <span className="font-bold text-text-primary">Google</span> · 4.9 Stars across 120+ verified reviews
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ─── EMERGENCY BANNER ─── */
function EmergencyBanner() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Ambient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 to-orange-500/50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white">
            Plumbing Emergency at 2AM?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 text-xl text-white/80 font-medium">
            We pick up. Every time. No voicemail, no waiting.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <a
            href="tel:+15125550182"
            className="mt-8 inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-transform duration-200 shadow-2xl"
          >
            <PhoneIcon size={22} className="inline-block" /> Call (512) 555-0182
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── COVERAGE MAP ─── */
function CoverageMap() {
  const areas = [
    "Austin", "Round Rock", "Cedar Park", "Georgetown", "Pflugerville",
    "Leander", "Lakeway", "Bee Cave", "Dripping Springs", "Kyle",
    "Buda", "Manor", "Hutto", "Liberty Hill", "Westlake Hills",
  ];

  return (
    <section id="coverage" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="SERVICE AREA" title="Areas We Serve" subtitle="Proudly serving Austin and the greater Travis County area." />
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full border border-white/[0.06] bg-card text-sm text-text-primary font-medium hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 cursor-default inline-flex items-center gap-1.5"
              >
                <MapPinIcon size={14} className="text-accent" /> {area}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-text-primary">
            Ready to Get Started?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 text-lg text-text-secondary">
            Most jobs quoted same day. Zero pressure.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+15125550182"
              className="px-8 py-4 bg-accent text-white font-bold rounded-xl text-lg transition-all duration-200 accent-glow hover:accent-glow-strong hover:scale-[1.02]"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-accent/40 text-accent font-bold rounded-xl text-lg hover:border-accent hover:bg-accent/5 transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-text-secondary">
            <span>✅ No Contracts</span>
            <span>✅ Licensed & Insured</span>
            <span>✅ Locally Owned</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <Stats />
      <WhyChooseUs />
      <Process />
      <ReviewsSection />
      <EmergencyBanner />
      <CoverageMap />
      <FinalCTA />
    </>
  );
}
