"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";
import SectionHeading from "@/components/SectionHeading";

const timeline = [
  { year: "1995", title: "The Beginning", desc: "Joe Russo and his brother start Russo Brothers with a commitment to honest, quality work." },
  { year: "2000", title: "Growing Team", desc: "Expanded team and service area throughout Wilmington and surrounding areas." },
  { year: "2010", title: "Community Leaders", desc: "Established as trusted local plumbing company serving thousands of customers." },
  { year: "2020", title: "Top Rated", desc: "Achieved 4.9-star rating on Google with 47+ reviews from satisfied customers." },
  { year: "2025", title: "Stronger Than Ever", desc: "Continuing to serve Delaware families with the same commitment to quality and honesty." },
];

const values = [
  { icon: "💎", name: "Honesty", desc: "We give you the truth about what&apos;s wrong and what it costs. No upselling, no pressure." },
  { icon: "🏆", name: "Quality", desc: "Every job done right. We test our finished work and do a thorough job of cleanup." },
  { icon: "⏰", name: "Reliability", desc: "When we say we&apos;ll be there, we&apos;ll be there. Quick response, prompt service." },
  { icon: "🤝", name: "Community", desc: "Wilmington is our home. We treat every customer like neighbors, not transactions." },
];

const team = [
  { name: "Joe Russo", role: "Founder & Master Plumber", bio: "Leading Russo Brothers with integrity and expert craftsmanship for over 30 year&apos;s." },
{ name: "Jimmy", role: "Lead Technician", bio: "Skilled technician known for thoroughness &amp; professional installation work." },
{ name: "Wilson", role: "Service Technician", bio: "Responsive and reliable, ensuring every job is completed with attention to detail." }
];

const certifications = [
  "Delaware Master Plumber License",
  "Licensed & Insured",
  "EPA Certified",
  "OSHA Safety Certified",
  "Professional Service",
  "Customer Satisfaction Guarantee",
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-mesh relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.5 }}>
            <p className="text-sm text-text-secondary mb-2">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-accent">About</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary">
              Built on Hard Work<br />and <span className="text-accent">Honest Service.</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl">
              A family-owned plumbing company treating customers like neighbors for over 30 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden border-2 border-accent/20 shadow-xl shadow-accent/5">
                <div className="bg-gradient-to-br from-card to-secondary aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-7xl block mb-4">🔧</span>
                    <p className="text-lg font-bold text-text-primary">Joe Russo</p>
                    <p className="text-sm text-text-secondary">Founder, Russo Brothers Inc</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Story text */}
            <div>
              <ScrollReveal>
                <span className="accent-label">OUR STORY</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary">
                  Treating Customers Like Neighbors
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Russo Brothers Inc has been serving the Wilmington community for over 30 years with a simple philosophy: treat every customer like a neighbor.
                  </p>
                  <p>
                    Founded by Joe Russo, our company was built on honest service, professional craftsmanship, and fair pricing. We've grown from a one-truck operation to a full team of skilled technicians, but our core values have never changed.
                  </p>
                  <p>
                    Every member of the Russo Brothers crew operates by the same rule: show up on time, do it right, and charge a fair price. We test our finished work and leave no mess behind. That's why our customers keep coming back, and why they recommend us to their friends and family.
                  </p>
                  <p>
                    Wilmington is our home. We're proud to serve it one perfectly fixed pipe at a time.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="OUR JOURNEY" title="Key Milestones" />
          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 md:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className={`flex gap-8 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                      <div className="glass rounded-xl p-5">
                        <h3 className="font-bold text-text-primary">{item.title}</h3>
                        <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white z-10 relative shadow-lg shadow-accent/30">
                        {item.year.slice(2)}
                      </div>
                    </div>
                    <div className="flex-1 md:hidden">
                      <div className="glass rounded-xl p-5">
                        <span className="text-xs text-accent font-bold">{item.year}</span>
                        <h3 className="font-bold text-text-primary mt-1">{item.title}</h3>
                        <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block">
                      <span className="text-sm text-accent font-bold">{item.year}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="OUR VALUES" title="What We Stand For" />
          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.name}>
                <div className="glass rounded-2xl p-8 text-center h-full hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
                  <span className="text-4xl block mb-4">{value.icon}</span>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{value.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="THE CREW" title="Meet the Team" />
          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="glass rounded-2xl overflow-hidden group">
                  <div className="bg-gradient-to-br from-card to-primary h-56 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
                    <p className="text-sm text-accent font-semibold">{member.role}</p>
                    <p className="text-sm text-text-secondary mt-2">{member.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="CREDENTIALS" title="Licensed. Certified. Trusted." />
          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="glass rounded-xl px-6 py-4 flex items-center gap-3"
                >
                  <span className="text-accent text-lg">🏅</span>
                  <span className="text-sm font-semibold text-text-primary">{cert}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-text-primary">
              Ready to Work With Us?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-lg text-text-secondary">
              See what decades of honest plumbing looks like.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+13027623307"
                className="px-8 py-4 bg-accent text-white font-bold rounded-xl text-lg accent-glow hover:accent-glow-strong hover:scale-[1.02] transition-all"
              >
                Call Now
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-accent/40 text-accent font-bold rounded-xl text-lg hover:border-accent hover:bg-accent/5 transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
