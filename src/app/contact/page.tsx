import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Russo Brothers Inc | Get a Free Quote",
  description:
    "Contact Russo Brothers Inc in Wilmington, DE. Get a free quote, book a service, or call for prompt plumbing service. (302) 762-3307",
  openGraph: {
    title: "Contact Russo Brothers Inc | Free Quote",
    description: "Get in touch for a free plumbing quote. Call, email, or fill out our form.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
