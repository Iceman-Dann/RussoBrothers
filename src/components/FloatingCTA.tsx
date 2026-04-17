"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneIcon } from "@/components/Icons";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 lg:hidden"
        >
          <a
            href="tel:+13027623307"
            className="relative flex items-center gap-2 px-6 py-4 bg-accent text-white font-bold rounded-full shadow-2xl"
            aria-label="Call now"
          >
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-accent/30" />
            <span className="relative flex items-center gap-2 text-sm">
              <PhoneIcon size={16} /> Call Now
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
