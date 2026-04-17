"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const featuredReviews = [
  {
    text: "Quick service, great folks, reasonably priced. A family owned business that treats its customers like neighbors. We had them replace our water heater and couldn't be happier with the experience.",
    name: "Satisfied Customer",
    city: "Wilmington, DE",
    date: "Recent",
  },
  {
    text: "They always test their finished work and do a thorough job of cleanup when done. Professional installation of our new kitchen faucet. Will definitely use Russo Brothers for future plumbing needs.",
    name: "Happy Homeowner",
    city: "Wilmington, DE",
    date: "Recent",
  },
  {
    text: "Prompt to respond and quick scheduling. Very professional technicians who arrived on time and completed the job with no mess left behind. These are the plumbers you want working in your home.",
    name: "Reliable Experience",
    city: "Wilmington, DE",
    date: "Recent",
  },
];

const allReviews = [
  { text: "Professional work from start to finish. Responsive, punctual, and fair pricing. Highly recommend!", name: "Delaware Homeowner", city: "Wilmington, DE" },
  { text: "They take pride in their work and respect your home. Booties on shoes, clean workspace. True professionals.", name: "Maria G.", city: "New Castle, DE" },
  { text: "Called about a slow drain. Quick response, same-day service, and they explained what was causing the issue. Fair price.", name: "Tom H.", city: "Wilmington, DE" },
  { text: "Family owned and reliable. They've handled all our plumbing needs and we trust them completely.", name: "Neighborhood Referral", city: "Wilmington, DE" },
  { text: "Excellent service and honest pricing. These are the actual plumbers you want working in your home.", name: "Robert F.", city: "Claymont, DE" },
  { text: "Best plumber experience I've had. Professional, on time, clean work, fair price. Highly recommended.", name: "Jennifer K.", city: "Wilmington, DE" },
  { text: "Quick install and everything passed inspection. Careful, meticulous work. Five stars!", name: "Daniel S.", city: "Wilmington, DE" },
  { text: "Emergency service when we needed it most. They responded quickly and solved our problem fast.", name: "Priya M.", city: "Wilmington, DE" },
  { text: "Excellent workmanship and customer service. We'll definitely call Russo Brothers for our future needs.", name: "Sarah M.", city: "Brandywine, DE" },
];

const ratingBreakdown = [
  { stars: 5, percent: 93, count: 44 },
  { stars: 4, percent: 4, count: 2 },
  { stars: 3, percent: 2, count: 1 },
  { stars: 2, percent: 0, count: 0 },
  { stars: 1, percent: 0, count: 0 },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-mesh relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.5 }}>
            <p className="text-sm text-text-secondary mb-2">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-accent">Reviews</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary">
              Don&apos;t Take Our<br />Word For <span className="text-accent">It.</span>
            </h1>

            {/* Big rating */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="text-7xl sm:text-8xl font-black text-accent">4.9</div>
              <Stars />
              <p className="text-text-secondary">Based on 47 Google Reviews</p>
            </div>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-text-primary">
                ✓ Google Verified
              </span>
              <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-text-primary">
                ✓ Yelp Verified
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="accent-label block text-center mb-2">FEATURED</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-text-primary text-center">
              Top Reviews
            </h2>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            {featuredReviews.map((review) => (
              <StaggerItem key={review.name}>
                <div className="glass rounded-2xl p-8 h-full flex flex-col">
                  <Stars />
                  <p className="mt-4 text-text-primary leading-relaxed flex-1 text-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{review.name}</p>
                        <p className="text-xs text-text-secondary">{review.city} · {review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-text-primary text-center mb-12">
              More From Our Customers
            </h2>
          </ScrollReveal>
          <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" staggerDelay={0.1}>
            {allReviews.map((review, i) => (
              <StaggerItem key={i}>
                <div className="glass rounded-2xl p-6 break-inside-avoid">
                  <Stars />
                  <p className="mt-3 text-sm text-text-primary leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-xs text-text-secondary mt-3">— {review.name}, {review.city}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-text-primary text-center mb-12">
              Rating Breakdown
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {ratingBreakdown.map((row, i) => (
              <ScrollReveal key={row.stars} delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-text-primary w-6">{row.stars}★</span>
                  <div className="flex-1 h-3 bg-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                  <span className="text-sm text-text-secondary w-12 text-right">{row.percent}%</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">
              Had a great experience?
            </h2>
            <p className="mt-2 text-xl text-white/80">Tell the world.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-black text-lg rounded-2xl hover:scale-105 transition-transform shadow-2xl"
            >
              ⭐ Leave a Google Review
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
