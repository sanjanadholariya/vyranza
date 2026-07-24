"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Award,
} from "lucide-react";
import ServicesHeroBanner from "@/components/services/ServicesHeroBanner";

export default function ServicesPage() {
  const mainServices = [
    {
      id: "meta-ads",
      title: "Meta Ads (Facebook & Instagram)",
      badge: "Social Media Advertising",
      tagline: "Turn visual engagement into scalable revenue across Facebook & Instagram.",
      icon: Target,
      iconBg: "from-blue-600 via-indigo-600 to-royal",
      description:
        "We build full-funnel Meta advertising campaigns engineered to capture visual shoppers and qualified lead prospects. From scroll-stopping video Reels and carousels to precision audience targeting and dynamic retargeting.",
      deliverables: [
        "Custom Visual & Video Reels Ad Creative Strategy",
        "Lookalike & Interest-Based Audience Modeling",
        "Full-Funnel Retargeting Campaigns",
        "Meta Pixel & Server-Side CAPI Setup",
        "A/B Creative & Copy Split Testing",
        "Weekly ROAS & Lead Cost Performance Reports",
      ],
    },
    {
      id: "google-ads",
      title: "Google Ads (Search & Shopping)",
      badge: "High-Intent Search Ads",
      tagline: "Capture customers at the exact moment they search for your solutions.",
      icon: TrendingUp,
      iconBg: "from-royal via-royal-light to-sky-500",
      description:
        "Dominate search results when buyers are actively searching with credit cards in hand. We configure high-intent Google Search, Performance Max, and Google Shopping ad structures that maximize ROI.",
      deliverables: [
        "High-Intent Keyword Research & Negative Keyword Sculpting",
        "Performance Max (PMax) Campaign Optimization",
        "Responsive Search Ads & High-Converting Copy",
        "Google Shopping & Merchant Center Management",
        "Conversion Action Setup & GA4 Tracking",
        "Ongoing Quality Score & Bid Management",
      ],
    },
    {
      id: "funnel-cro",
      title: "Conversion Funnels & CRO Strategy",
      badge: "Lead & Funnel Optimization",
      tagline: "Turn more of your ad traffic into paying customers and qualified leads.",
      icon: BarChart3,
      iconBg: "from-sky-400 to-royal",
      description:
        "Great ad campaigns require high-converting landing experiences. We audit and optimize your sales funnels and landing pages to reduce bounce rates and maximize your overall conversion rate.",
      deliverables: [
        "Landing Page Copy & Layout Optimization",
        "Funnel Drop-Off & Heatmap Friction Analysis",
        "A/B Split Testing for Headline & Offer CTAs",
        "Mobile Experience & Load Speed Optimization",
        "Multi-Touch Attribution Tracking Setup",
        "Form & Booking Funnel Conversion Enhancements",
      ],
    },
    {
      id: "crm-lead-gen",
      title: "Lead Automation & CRM Pipeline Sync",
      badge: "Lead Management & Nurturing",
      tagline: "Instantly capture, route, and convert paid leads before they go cold.",
      icon: Users,
      iconBg: "from-royal-light to-blue-700",
      description:
        "Speed to lead is everything. We connect your ad lead forms directly to your CRM and sales team with instant automated SMS, email alerts, and automated follow-up nurture sequences.",
      deliverables: [
        "Instant Lead Routing via Webhooks, Zapier & API",
        "CRM Setup & Pipeline Stage Customization",
        "Automated Email & SMS Lead Nurture Sequences",
        "Sales Team Notification Alerts & Reminders",
        "Lead Scoring & Qualification Workflows",
        "Closed-Loop Lead Attribution Reporting",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "100% Ad Transparency",
      description: "You own all ad accounts, tracking assets, and data. Complete visibility into every dollar spent.",
    },
    {
      icon: Zap,
      title: "Data-Driven ROI Focus",
      description: "We optimize for actual leads, qualified calls, and revenue—not just vanity impression metrics.",
    },
    {
      icon: Award,
      title: "Dedicated Marketing Strategist",
      description: "Direct communication with senior media buyers who treat your growth budget like their own.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Creative Hero Banner Component */}
      <ServicesHeroBanner />

      {/* 2. Detailed Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`bg-white/95 border border-sky-100 rounded-3xl p-8 sm:p-12 shadow-sm hover:shadow-xl hover:shadow-sky-100/80 transition-all duration-300 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}
              >
                {/* Left Header / Icon */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"} space-y-5`}>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center text-white shadow-lg shadow-royal/20 shrink-0`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-royal bg-sky-100/90 border border-sky-200/80 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-snug">
                    {service.title}
                  </h2>

                  <p className="text-sm font-semibold text-royal leading-relaxed">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-royal hover:text-royal-dark transition-colors"
                    >
                      <span>Request Custom Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Deliverables List */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"} bg-sky-50/60 border border-sky-100/80 rounded-2xl p-6 sm:p-8 space-y-4`}>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                    Key Campaign Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.deliverables.map((item, dIndex) => (
                      <div key={dIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-royal shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-foreground/90 font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Why Choose Vyranza Section */}
      <section className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Why Ambitious Brands Choose Vyranza
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              We operate as an extension of your growth team, focused purely on bottom-line results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, idx) => {
              const FIcon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/90 border border-sky-100 rounded-2xl p-8 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-100/90 text-royal flex items-center justify-center mx-auto mb-4 border border-sky-200/80">
                    <FIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Banner */}
      <section className="pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-royal via-royal-light to-sky-600 rounded-3xl p-8 sm:p-14 text-white shadow-xl shadow-royal/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Ready to scale your Meta &amp; Google Ads?
              </h2>
              <p className="mt-3 text-sky-100 text-sm sm:text-base leading-relaxed">
                Book a 1-on-1 strategy call with our media buyers to analyze your current accounts and discover your growth potential.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-royal hover:bg-sky-50 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:scale-105"
              >
                <span>Book Free Audit Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
