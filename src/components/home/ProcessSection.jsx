"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Sliders,
  Rocket,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const phases = [
  {
    step: "01",
    phase: "Phase One",
    title: "Discovery & Business Audit",
    description:
      "We start with an in-depth consultation to thoroughly understand your business model, target audience, value proposition, and revenue targets.",
    icon: Compass,
    color: "from-blue-500 to-royal",
  },
  {
    step: "02",
    phase: "Phase Two",
    title: "Account & Asset Setup",
    description:
      "We review and configure your Meta Ads, Google Ads accounts, tracking pixels, CAPI, and landing pages to build a bulletproof technical foundation.",
    icon: Sliders,
    color: "from-royal via-royal-light to-sky-500",
  },
  {
    step: "03",
    phase: "Phase Three",
    title: "Precision Marketing Launch",
    description:
      "We craft high-converting ad copy, visual creative, and targeted campaign structures to launch performance marketing that captures real intent.",
    icon: Rocket,
    color: "from-sky-500 to-royal",
  },
  {
    step: "04",
    phase: "Phase Four",
    title: "Results & Revenue Scale",
    description:
      "You receive consistent leads and measurable sales. We provide transparent reporting and continuously optimize campaigns for maximum long-term ROI.",
    icon: TrendingUp,
    color: "from-royal-light to-blue-600",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-sky-50/50 to-white overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/90 border border-sky-200/80 text-royal text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-royal" />
            <span>Our Proven 4-Phase Roadmap</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
          >
            How We Take You From <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-royal via-royal-light to-sky-500 bg-clip-text text-transparent">
              First Conversation to Steady Growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            We build in sequence so nothing gets launched before it&apos;s ready. Here is our structured process to scale your brand with confidence.
          </motion.p>
        </div>

        {/* 4 Phase Process Container Card with Light Sky-Blue Blend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative bg-gradient-to-br from-sky-100/90 via-sky-50/70 to-white rounded-3xl p-8 sm:p-12 text-foreground shadow-xl shadow-sky-100/80 border border-sky-200/80 backdrop-blur-md"
        >
          {/* Connecting Dashed Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-36 left-16 right-16 border-t-2 border-dashed border-sky-300/70 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative z-10">
            {phases.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group flex flex-col justify-between text-center lg:text-left bg-white/90 hover:bg-white border border-sky-200/60 hover:border-royal/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
                >
                  <div>
                    {/* Phase Tag & Step Number */}
                    <div className="flex items-center justify-between lg:justify-start gap-3 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-royal bg-sky-100/90 border border-sky-200/80 px-3 py-1 rounded-full">
                        {item.phase}
                      </span>
                      <span className="text-2xl font-black text-royal/25 group-hover:text-royal transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-royal transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Icon Badge at Bottom */}
                  <div className="mt-8 pt-6 border-t border-sky-100 flex items-center justify-center lg:justify-start">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md shadow-royal/20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-12 pt-8 border-t border-sky-200/60 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm sm:text-base text-foreground/80 font-medium max-w-lg text-center sm:text-left">
              Ready to start Phase One with a tailored business discovery session?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-royal hover:bg-royal-dark text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-royal/25 hover:shadow-xl hover:scale-105 shrink-0"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
