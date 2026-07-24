"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ServicesHeroBanner() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-white via-sky-50/40 to-white overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/90 border border-sky-200/80 text-royal text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-royal" />
          <span>Performance Paid Media Solutions</span>
        </motion.div>

        {/* Clean Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-tight"
        >
          Data-Driven Paid Ads That Drive <br />
          <span className="bg-gradient-to-r from-royal via-royal-light to-sky-500 bg-clip-text text-transparent">
            Consistent Leads &amp; Growth.
          </span>
        </motion.h1>

        {/* Clean Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal"
        >
          We specialize in high-converting Meta Ads and intent-driven Google Ads campaigns. We build custom ad creative, optimize campaign structures, and manage your budget to deliver measurable business results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-royal hover:bg-royal-dark text-white text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-royal/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Clean 2 Core Platforms Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left"
        >
          {/* Meta Ads Card */}
          <div className="bg-white/95 border border-sky-100/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground">Meta Ads</h3>
                <span className="text-xs text-muted-foreground">Facebook &amp; Instagram Campaigns</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Custom Reels video ad creative, Lookalike audience modeling, and full-funnel retargeting to turn visual engagement into qualified leads.
            </p>
          </div>

          {/* Google Ads Card */}
          <div className="bg-white/95 border border-sky-100/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal via-royal-light to-sky-500 flex items-center justify-center text-white shadow-sm">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground">Google Ads</h3>
                <span className="text-xs text-muted-foreground">Search &amp; Shopping Campaigns</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              High-intent search keyword bidding, Performance Max automation, and Google Shopping feed optimization to capture active buyers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
