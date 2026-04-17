import Link from "next/link";
import { PhoneIcon, MapPinIcon, MailIcon, ClockIcon } from "@/components/Icons";

const footerLinks = {
  services: [
    { name: "Emergency Repairs", href: "/services" },
    { name: "Drain Cleaning", href: "/services" },
    { name: "Water Heater", href: "/services" },
    { name: "Sewer Line", href: "/services" },
    { name: "Bathroom Remodeling", href: "/services" },
    { name: "Gas Line Services", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Service Areas", href: "/#coverage" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 12L6 4C6 2.89543 6.89543 2 8 2H10C11.1046 2 12 2.89543 12 4V12" />
                  <path d="M6 12C6 14.2091 7.79086 16 10 16H14C16.2091 16 18 14.2091 18 12V10C18 8.89543 17.1046 8 16 8H12" />
                  <path d="M10 16V22" />
                  <path d="M14 16V22" />
                </svg>
              </div>
              <span className="text-lg font-extrabold tracking-tighter">
                RUSSO <span className="text-accent">BROTHERS</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Wilmington&apos;s most trusted plumbing company. Family-owned, licensed, insured, and treating customers like neighbors since 1995.
            </p>
            <a
              href="tel:+13027623307"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-bold rounded-full accent-glow hover:accent-glow-strong transition-all"
            >
              <PhoneIcon size={16} className="inline-block mr-1" /> (302) 762-3307
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-text-secondary"><MapPinIcon size={16} /></span>
                912 Brandywine Blvd, Wilmington, DE 19809
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-text-secondary"><PhoneIcon size={16} /></span>
                <a href="tel:+13027623307" className="hover:text-accent transition-colors">
                  (302) 762-3307
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-text-secondary"><MailIcon size={16} /></span>
                <a href="mailto:info@russobros.com" className="hover:text-accent transition-colors">
                  info@russobros.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-text-secondary"><ClockIcon size={16} /></span>
                Mon-Fri 8am-5pm<br />
                Sat by Appointment<br />
                Emergency Service Available
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Russo Brothers Inc. All rights reserved. DE Licensed & Insured
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-text-secondary">Family Owned</span>
            <span className="text-xs text-text-secondary">•</span>
            <span className="text-xs text-text-secondary">4.9★ Rated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
