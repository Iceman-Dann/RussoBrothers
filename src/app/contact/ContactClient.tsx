"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/Animations";

const serviceOptions = [
  "Emergency Repair",
  "Drain Cleaning",
  "Water Heater Service",
  "Sewer Line Service",
  "Bathroom Remodeling",
  "Gas Line Service",
  "General Plumbing",
  "Not Sure — Need Advice",
];

const timeOptions = [
  "Morning (7am - 12pm)",
  "Afternoon (12pm - 5pm)",
  "Evening (5pm - 7pm)",
  "ASAP / Emergency",
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    time: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
              <span className="text-accent">Contact</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary">
              Let&apos;s Get To <span className="text-accent">Work.</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Most requests get a response within the hour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — 3 columns */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="glass rounded-2xl p-8 sm:p-10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary">Request Sent!</h3>
                      <p className="mt-2 text-text-secondary">
                        We&apos;ll get back to you within the hour. For immediate help, call us.
                      </p>
                      <a
                        href="tel:+13027623307"
                        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl accent-glow"
                      >
                        📞 Call (302) 762-3307
                      </a>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6" id="quote-form">
                      <h2 className="text-2xl font-bold text-text-primary mb-2">Request a Free Quote</h2>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-primary border border-white/[0.06] text-text-primary placeholder-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-primary border border-white/[0.06] text-text-primary placeholder-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
                            placeholder="(512) 555-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-primary border border-white/[0.06] text-text-primary placeholder-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
                          placeholder="john@email.com"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">
                            Service Needed *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-primary border border-white/[0.06] text-text-primary focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-text-secondary mb-2">
                            Best Time to Call
                          </label>
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-primary border border-white/[0.06] text-text-primary focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Select a time</option>
                            {timeOptions.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-primary border border-white/[0.06] text-text-primary placeholder-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none resize-none"
                          placeholder="Tell us about your plumbing issue..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-accent text-white font-bold text-lg rounded-xl accent-glow hover:accent-glow-strong hover:scale-[1.01] transition-all duration-200 active:scale-[0.99]"
                      >
                        Send My Request →
                      </button>
                      <p className="text-xs text-text-secondary text-center">
                        🔒 We never share your info. Ever.
                      </p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info — 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <a href="tel:+13027623307" className="glass rounded-2xl p-6 flex items-center gap-4 group hover:border-accent/30 transition-all block">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Call Us</p>
                    <p className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">(302) 762-3307</p>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <a href="mailto:info@russobros.com" className="glass rounded-2xl p-6 flex items-center gap-4 group hover:border-accent/30 transition-all block">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Email Us</p>
                    <p className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">info@russobros.com</p>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🕐</span>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Business Hours</p>
                      <p className="text-sm font-bold text-text-primary">See below</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Mon - Fri</span>
                      <span className="font-semibold text-text-primary">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Saturday</span>
                      <span className="font-semibold text-text-primary">By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Sunday</span>
                      <span className="font-semibold text-text-primary">Closed</span>
                    </div>
                    <div className="pt-2 border-t border-white/[0.06] flex justify-between">
                      <span className="text-accent font-semibold">Emergency</span>
                      <span className="font-bold text-accent">Available</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="glass rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Service Area</p>
                    <p className="text-sm font-bold text-text-primary">Wilmington, DE &amp; Surrounding Areas</p>
                    <p className="text-xs text-text-secondary mt-1">912 Brandywine Blvd, Wilmington, DE 19809</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto map-container rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199287.55268763348!2d-75.64521500849244!3d39.74877589447356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd5a41f07d61%3A0x6ce3da99ead26e6b!2sWilmington%2C%20DE!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Russo Brothers Inc service area - Wilmington, DE"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Emergency Strip */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-white">
              Emergency? Don&apos;t fill out a form. Just call.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="tel:+13027623307"
              className="mt-6 inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-transform shadow-2xl"
            >
              📞 (302) 762-3307
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
