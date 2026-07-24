"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroCanvas from "./HeroCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white pt-24 pb-20">
      {/* Animated Canvas Background (Hidden on mobile screens to preserve clear typography) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
        <HeroCanvas />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/80 border border-sky-200/80 text-royal text-xs sm:text-sm font-medium shadow-sm backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-royal animate-pulse" />
          <span>Growth That Drives Results</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.12]"
        >
          Turn Clicks Into{" "}
          <span className="bg-gradient-to-r from-royal via-royal-light to-sky-500 bg-clip-text text-transparent">
            Customers.
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal"
        >
          We create high-converting performance marketing campaigns that help ambitious businesses generate consistent leads, increase revenue, and grow with confidence.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-royal hover:bg-royal-dark text-white text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-royal/25 hover:shadow-xl hover:shadow-royal/35 hover:-translate-y-0.5"
          >
            <span>Book a Free Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            href="/services"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-sky-50 text-foreground border border-sky-200 text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:border-sky-300 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <span>See Services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
