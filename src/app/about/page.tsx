import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Russo Brothers Inc | Wilmington, DE",
  description:
    "Learn about Russo Brothers Inc, Wilmington's most trusted plumbing company. A family owned business that treats its customers like neighbors.",
  openGraph: {
    title: "About Russo Brothers Inc | Our Story",
    description: "Family owned and operated. Learn about Russo Brothers' commitment to honest, professional plumbing service.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
