"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Search,
  MessageSquare,
} from "lucide-react";

const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "ads", label: "Paid Ads & Strategy" },
  { id: "onboarding", label: "Onboarding & Timeline" },
  { id: "pricing", label: "Pricing & Contracts" },
  { id: "leads", label: "Lead Routing & CRM" },
];

const faqs = [
  {
    category: "ads",
    question: "What ad platforms do you specialize in?",
    answer:
      "We specialize exclusively in high-converting Meta Ads (Facebook & Instagram) and intent-driven Google Ads (Search, Performance Max, and Shopping). By focusing on these two primary ad channels, we deliver deeper expertise and better campaign ROI.",
  },
  {
    category: "ads",
    question: "Who owns the ad accounts, pixel data, and campaign assets?",
    answer:
      "You do! You maintain 100% full ownership of your Meta Business Manager, Google Ads accounts, tracking pixels, and creative assets. We request partner manager access, meaning you retain complete control of your billing and account history at all times.",
  },
  {
    category: "ads",
    question: "What minimum ad budget do you recommend?",
    answer:
      "We recommend a minimum monthly ad spend of $1,500 – $3,000 to allow the ad platform algorithms (Meta & Google) to gather sufficient conversion data for machine learning optimization. Larger budgets allow faster A/B testing and scaling.",
  },
  {
    category: "onboarding",
    question: "How long does onboarding take before our campaigns go live?",
    answer:
      "Our standard onboarding takes 3 to 5 business days. During this period, we conduct our Phase One business discovery, audit your existing tracking pixels and ad accounts, design custom visual creative, write conversion copy, and present campaign structures for your final approval.",
  },
  {
    category: "onboarding",
    question: "What is your 4-phase growth process?",
    answer:
      "We build in a proven sequence: 1) Business Discovery & Strategy Audit -> 2) Account & Asset Setup -> 3) Precision Campaign Launch -> 4) Results & Revenue Scale. This ensures every campaign is built on solid data before ad spend begins.",
  },
  {
    category: "pricing",
    question: "Do you require long-term binding contracts?",
    answer:
      "No long-term lock-in contracts. We operate on month-to-month management agreements because we believe in earning your business through consistent lead performance and transparent communication month after month.",
  },
  {
    category: "pricing",
    question: "How does your management pricing structure work?",
    answer:
      "We offer flat monthly retainer management tiers based on your ad spend volume and campaign scope. We never charge hidden setup fees or take surprise cuts of your ad spend.",
  },
  {
    category: "pricing",
    question: "How often will I receive campaign performance reports?",
    answer:
      "You receive weekly email performance summaries and bi-weekly strategic check-in calls with your media buyer. You also have 24/7 access to your ad accounts for real-time verification.",
  },
  {
    category: "leads",
    question: "How do leads get routed to our sales team?",
    answer:
      "Speed to lead is critical. We configure automated instant lead routing via Webhooks or Zapier so every lead captured from Meta lead forms or landing page forms is sent via SMS or Email to your team within 60 seconds, or synced directly into your CRM (HubSpot, GoHighLevel, Salesforce, etc.).",
  },
  {
    category: "leads",
    question: "Can you help optimize our landing pages for better conversions?",
    answer:
      "Yes! Ad traffic is only half the equation. We provide landing page conversion rate optimization (CRO) guidance, headline copy tweaks, and form UX enhancements to ensure maximum visitor-to-lead conversion.",
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-white via-sky-50/50 to-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/90 border border-sky-200/80 text-royal text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-royal" />
            <span>Got Questions? We Have Answers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-tight"
          >
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-royal via-royal-light to-sky-500 bg-clip-text text-transparent">
              Questions &amp; Answers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Clear, straightforward answers about our Meta &amp; Google Ads management, onboarding timelines, pricing, and campaign performance process.
          </motion.p>

          {/* Search Input Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 max-w-xl mx-auto relative"
          >
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-muted-foreground absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., pricing, budget, Meta ads)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-sky-200 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal shadow-sm transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FAQ Categories & Accordion Grid */}
      <section className="py-16 bg-gradient-to-b from-white via-sky-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {faqCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? "bg-royal text-white border-royal shadow-sm"
                      : "bg-white text-muted-foreground hover:text-foreground border-sky-100 hover:border-sky-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Accordion Questions */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/95 border border-sky-100/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-foreground hover:text-royal transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-royal shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-royal shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-sky-50">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/80 border border-sky-100 rounded-2xl p-8">
              <HelpCircle className="w-10 h-10 text-royal/40 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground">No questions found</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Try searching for something else or browse all questions above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Still Have Questions CTA */}
      <section className="pb-24 pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-royal via-royal-light to-sky-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-royal/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct Support</span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Still have a question?
              </h3>
              <p className="text-sky-100 text-sm">
                We are happy to answer any questions about your specific business needs.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-royal hover:bg-sky-50 font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
