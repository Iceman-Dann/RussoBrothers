import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Russo Brothers Inc | Wilmington, DE Plumber",
  description:
    "Full-service plumbing in Wilmington, DE. Water heater installation, drain cleaning, repairs, sump pumps, kitchen faucets, and more. Licensed & insured.",
  openGraph: {
    title: "Our Services | Russo Brothers Inc",
    description: "Professional plumbing services in Wilmington, DE. Everything you need from your trusted local plumber.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
