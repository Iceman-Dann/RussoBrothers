"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/Animations";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    id: "emergency",
    icon: "🔧",
    name: "Emergency Repairs",
    tagline: "When you need help, we're there.",
    description:
      "Burst pipes, major leaks, overflowing toilets, and sewer backups need prompt attention. Russo Brothers provides responsive emergency plumbing service to address your most urgent issues. We arrive quickly, diagnose the problem, and get your home back to normal with minimal disruption.",
    includes: [
      "Burst pipe repair and water damage prevention",
      "Sewer backup and overflow remediation",
      "Emergency water shut-off assistance",
      "Leak detection and repair",
      "Quick response service",
      "Professional emergency troubleshooting",
    ],
  },
  {
    id: "drains",
    icon: "🚿",
    name: "Drain Cleaning",
    tagline: "Stubborn clogs don't stand a chance.",
    description:
      "From slow kitchen sinks to completely blocked main lines, our team uses professional-grade hydro-jetting and motorized snake equipment to clear any clog fast. We also offer camera inspections to identify the root cause and prevent future blockages. No chemicals, no guesswork — just results.",
    includes: [
      "Kitchen, bathroom, and floor drain clearing",
      "Main sewer line cleaning and jetting",
      "Video camera pipe inspection",
      "Root intrusion removal",
      "Grease trap cleaning for kitchens",
      "Preventative maintenance plans",
    ],
  },
  {
    id: "waterheater",
    icon: "🔥",
    name: "Water Heater Services",
    tagline: "Hot water when you need it. Always.",
    description:
      "Whether your water heater is leaking, not heating, or you're ready for an upgrade, we handle it all. We install and service both traditional tank and modern tankless water heaters from top brands. Our technicians will help you choose the right size and type for your home and budget.",
    includes: [
      "Tank and tankless water heater installation",
      "Same-day water heater replacement",
      "Repair and troubleshooting for all brands",
      "Anode rod replacement and flushing",
      "Energy-efficient upgrade consultations",
      "Expansion tank installation",
    ],
  },
  {
    id: "sewer",
    icon: "🏗️",
    name: "Sewer Line Service",
    tagline: "From camera inspection to full replacement.",
    description:
      "Sewer line problems can be some of the most disruptive plumbing issues a homeowner faces. Our team uses the latest trenchless technology and high-definition camera inspection to diagnose sewer line issues without tearing up your yard. We offer everything from spot repairs to complete sewer line replacement.",
    includes: [
      "HD sewer camera inspection and diagnosis",
      "Trenchless sewer line repair (pipe lining)",
      "Full sewer line replacement",
      "Tree root removal and prevention",
      "Sewer cleanout installation",
      "Mainline to city connection repair",
    ],
  },
  {
    id: "bathroom",
    icon: "🛁",
    name: "Bathroom Remodeling",
    tagline: "Your dream bathroom, expertly plumbed.",
    description:
      "Planning a bathroom renovation? We handle all the plumbing rough-in and finish work so your remodel goes smoothly. From moving drain lines and rerouting water supply to installing new fixtures, our team ensures everything is up to code and built to last for decades.",
    includes: [
      "Complete plumbing rough-in for new layouts",
      "Fixture installation (toilets, sinks, showers, tubs)",
      "Drain relocation and rerouting",
      "Water supply line upgrades",
      "ADA-compliant bathroom modifications",
      "Coordination with general contractors",
    ],
  },
  {
    id: "gasline",
    icon: "⛽",
    name: "Gas Line Services",
    tagline: "Certified gas work you can trust.",
    description:
      "Gas line work requires precision, expertise, and proper certification. Our licensed plumbers are fully certified for gas line installation, testing, and repair. Whether you're adding a gas range, running a line to an outdoor grill, or suspect a gas leak, we get the job done safely and to code.",
    includes: [
      "New gas line installation and extension",
      "Gas leak detection and emergency repair",
      "Gas appliance hookup and testing",
      "Gas line pressure testing and certification",
      "Gas meter upgrade coordination",
      "Natural gas to propane conversions",
    ],
  },
];

const faqs = [
  {
    q: "How quickly can you respond to an emergency?",
    a: "Russo Brothers prioritizes rapid response to emergency calls. We aim to help you as quickly as possible with our responsive service team.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes! We provide free estimates for most jobs. We'll assess the situation, explain your options, and give you an upfront price before any work begins. No surprises, ever.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Russo Brothers Inc is fully licensed and insured for your protection. We maintain all necessary credentials for plumbing work in Delaware.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Wilmington, DE and the surrounding areas. We're located at 912 Brandywine Blvd, Wilmington, DE 19809.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Every job comes with our satisfaction guarantee. If something isn't right, we'll come back and fix it at no additional cost. We stand behind our work.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, all major credit cards, and checks. Call us to discuss payment options and availability.",
  },
];

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToService = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-mesh relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.5 }}>
            <p className="text-sm text-text-secondary mb-2">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-accent">Services</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary">
              Everything We Do,<br />Done <span className="text-accent">Right.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Tab bar */}
      <div className="sticky top-[60px] z-30 bg-primary/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide -mx-4 px-4">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToService(s.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === s.id
                    ? "bg-accent text-white"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/[0.04]"
                }`}
              >
                {s.icon} {s.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="py-16">
        {services.map((service, i) => (
          <section key={service.id} id={service.id} className="py-16 scroll-mt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                  {/* Content */}
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <span className="text-5xl mb-4 block">{service.icon}</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary">
                      {service.name}
                    </h2>
                    <p className="mt-2 text-lg text-accent font-semibold">{service.tagline}</p>
                    <p className="mt-4 text-text-secondary leading-relaxed">{service.description}</p>
                    <ul className="mt-6 space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="text-accent mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl transition-all duration-200 accent-glow hover:accent-glow-strong hover:scale-[1.02] group"
                    >
                      Book This Service
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                  {/* Visual card */}
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <div className="glass rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-8xl block mb-4">{service.icon}</span>
                        <p className="text-xl font-bold text-text-primary">{service.name}</p>
                        <p className="text-sm text-text-secondary mt-1">{service.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {i < services.length - 1 && (
                <div className="mt-16 border-t border-white/[0.06]" />
              )}
            </div>
          </section>
        ))}
      </div>

      {/* FAQ */}
      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="FAQ" title="Common Questions" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm sm:text-base font-semibold text-text-primary pr-4">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-accent flex-shrink-0"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">
              Not sure what you need? Just call us.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="tel:+13027623307"
              className="mt-8 inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-transform shadow-2xl"
            >
              📞 (302) 762-3307
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
