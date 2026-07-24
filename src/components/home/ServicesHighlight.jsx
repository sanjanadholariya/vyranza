"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Zap,
  Sparkles,
} from "lucide-react";

const adServices = [
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    badge: "Social Advertising",
    description:
      "Capture high-intent visual shoppers across Facebook and Instagram with high-converting creative, dynamic carousels, and precision Lookalike audience targeting.",
    features: [
      "Custom Creative & Video Reels Ad Design",
      "Lookalike & Interest-Based Audience Modeling",
      "Full-Funnel Retargeting Campaigns",
      "Meta Pixel & CAPI Conversion Tracking",
    ],
    iconBg: "from-blue-500 to-indigo-600",
  },
  {
    id: "google-ads",
    title: "Google Ads (Search & Shopping)",
    badge: "Search & Intent Ads",
    description:
      "Dominate search results when buyers are actively searching for your services. We scale high-intent Google Search, Performance Max, and Shopping ad campaigns.",
    features: [
      "High-Intent Keyword Bidding & Negative Match",
      "Performance Max (PMax) Campaign Automation",
      "Responsive Search Ads & High-Converting Copy",
      "Google Shopping & Merchant Center Management",
    ],
    iconBg: "from-royal via-royal-light to-sky-500",
  },
  {
    id: "funnel-analytics",
    title: "Conversion Funnels & Ad Analytics",
    badge: "Lead & ROI Optimization",
    description:
      "Ads only work when the landing page converts. We build dedicated high-speed landing pages and sync live leads into your CRM with real-time attribution.",
    features: [
      "High-Converting Landing Page Design",
      "Live Lead Routing to CRM & Email",
      "Multi-Touch Conversion Attribution",
      "A/B Split Testing & Copy Optimization",
    ],
    iconBg: "from-sky-400 to-royal",
  },
];

export default function ServicesHighlight() {
  return (
    <section className="relative pt-12 pb-24 bg-gradient-to-b from-white via-sky-50/40 to-white overflow-hidden">
      {/* Background Decorative Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-sky-100/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-royal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/90 border border-sky-200/80 text-royal text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-royal" />
            <span>Paid Advertising & Media Buying</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
          >
            Scale Faster with Precision <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-royal via-royal-light to-sky-500 bg-clip-text text-transparent">
              Meta & Google Ads Management
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            We eliminate wasted ad spend. Our performance marketing team crafts laser-targeted ad campaigns on Meta and Google engineered to convert clicks into high-value leads and sales.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {adServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between bg-white/95 border border-sky-100/80 hover:border-royal/35 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-sky-100/80 transition-all duration-300 backdrop-blur-sm"
            >
              <div>
                {/* Badge Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-sky-100/80 text-royal border border-sky-200/60">
                    {service.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center text-white shadow-md shadow-royal/15 shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.id === "meta-ads" && <Target className="w-6 h-6" />}
                    {service.id === "google-ads" && <TrendingUp className="w-6 h-6" />}
                    {service.id === "funnel-analytics" && <BarChart3 className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-snug group-hover:text-royal transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Bullet List */}
                <ul className="space-y-3 mb-4">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-royal shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-royal via-royal-light to-sky-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-royal/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-3 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5" />
              <span>Multi-Platform Ad Management</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to scale your Meta & Google Ad campaigns?
            </h3>
            <p className="mt-2 text-sky-100 text-sm sm:text-base">
              Get a custom media buying strategy tailored to your budget and growth targets.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-royal hover:bg-sky-50 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <span>Get Free Ad Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
