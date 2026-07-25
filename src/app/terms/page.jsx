"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale,
  FileCheck,
  CreditCard,
  AlertCircle,
  ShieldAlert,
  UserCheck,
  Mail,
  ArrowRight,
  Sparkles,
  FileText,
  TrendingUp,
} from "lucide-react";

export default function TermsOfServicePage() {
  const lastUpdated = "July 25, 2026";

  const sections = [
    {
      id: "acceptance",
      icon: FileCheck,
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p className="mb-4">
            These Terms of Service ("Terms") constitute a legally binding agreement between Vyranza ("Agency," "we," "us," or "our") and you, whether individually or on behalf of an entity ("Client," "you," or "your"). These Terms govern your access to and use of the Vyranza website (https://vyranza.com), strategy consultations, and marketing services.
          </p>
          <p>
            By booking a strategy call, executing a service agreement, or using our website, you agree to be bound by these Terms in full. If you do not agree with any part of these Terms, you must not access our website or engage our services.
          </p>
        </>
      ),
    },
    {
      id: "services-scope",
      icon: TrendingUp,
      title: "2. Scope of Marketing Services",
      content: (
        <>
          <p className="mb-4">
            Vyranza provides digital marketing management, paid ad campaign strategy, visual creative design, conversion tracking setup, and sales pipeline automation services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
            <li><strong>Meta Advertising:</strong> Facebook &amp; Instagram Ad account auditing, campaign structure, audience targeting, and creative testing.</li>
            <li><strong>Google Advertising:</strong> Google Search, Performance Max, and Shopping campaign strategy and bidding management.</li>
            <li><strong>Conversion Remarketing:</strong> High-intent retargeting sequences across Meta and Google display networks.</li>
            <li><strong>Lead Automation &amp; CRM Sync:</strong> Setup and integration of automated lead distribution and CRM pipelines.</li>
          </ul>
        </>
      ),
    },
    {
      id: "disclaimer-roas",
      icon: ShieldAlert,
      title: "3. No Earnings & Performance Guarantee Disclaimer",
      content: (
        <>
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-900 mb-4 text-sm leading-relaxed">
            <div className="flex items-center gap-2 font-bold mb-2 text-amber-950">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
              <span>IMPORTANT NOTICE REGARDING AD PERFORMANCE &amp; GUARANTEES</span>
            </div>
            <p className="mb-2">
              Vyranza employs industry-leading media buying strategies, data-driven optimization, and custom creative testing. However, digital advertising outcomes (including Return on Ad Spend [ROAS], Cost Per Lead [CPL], Cost Per Acquisition [CPA], and net business revenue) are subject to external factors outside of our control.
            </p>
            <p>
              External variables include—but are not limited to—ad platform algorithm changes, client sales team follow-up speed, offer competitiveness, market demand, and third-party tracking shifts. <strong>Vyranza makes no explicit or implicit financial, lead volume, or revenue guarantees.</strong> Past performance of other clients is no guarantee of future campaign results.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "ad-spend-billing",
      icon: CreditCard,
      title: "4. Ad Spend & Fee Structure",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-3 text-foreground/80">
            <li>
              <strong>Direct Media Billing:</strong> Ad spend budgets are paid directly by the Client to advertising networks (Meta, Google, etc.) using the Client's registered credit card or payment method within their respective ad accounts. Agency management fees DO NOT include media ad spend.
            </li>
            <li>
              <strong>Management Fees &amp; Retainers:</strong> Agency management fees are billed in advance on a recurring monthly retainer or project basis as agreed upon in the individual Client Service Agreement.
            </li>
            <li>
              <strong>Cancellation &amp; Notice:</strong> Service agreements operate on a month-to-month basis unless specified otherwise. Clients may request cancellation with 30 days written notice prior to the next billing cycle.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "account-ownership",
      icon: UserCheck,
      title: "5. Client Account Ownership & Rights",
      content: (
        <>
          <p className="mb-4">
            We believe in complete client transparency and asset ownership:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            <li>
              <strong>100% Asset Ownership:</strong> The Client maintains exclusive ownership of all Meta Business Managers, Google Ads accounts, tracking pixels, domain names, and customer list databases.
            </li>
            <li>
              <strong>Agency Access Rights:</strong> The Client grants Vyranza temporary Partner Manager or Admin access to manage, structure, and optimize advertising campaigns on their behalf during the active service period.
            </li>
            <li>
              <strong>Intellectual Property:</strong> Custom ad graphics, copy frameworks, and strategy blueprints designed by Vyranza are licensed for Client use throughout the active engagement.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "limitation-liability",
      icon: Scale,
      title: "6. Limitation of Liability",
      content: (
        <>
          <p className="mb-4">
            To the maximum extent permitted by applicable US law, Vyranza, its directors, employees, or partners shall not be liable for any indirect, incidental, punitive, special, or consequential damages resulting from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
            <li>Ad account suspensions, restrictions, or policy enforcement actions taken independently by third-party ad networks (Meta/Google).</li>
            <li>Loss of ad data or pixel history caused by platform API modifications or third-party outages.</li>
            <li>Business interruption, loss of profits, or revenues resulting from advertising campaigns.</li>
          </ul>
          <p className="text-xs text-muted-foreground">
            In no event shall Vyranza's aggregate total financial liability exceed the total management fee amount paid by the Client to Vyranza in the 30 days prior to the event giving rise to liability.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      icon: FileText,
      title: "7. Governing Law & Dispute Resolution",
      content: (
        <>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law principles.
          </p>
          <p>
            Any disputes, claims, or controversies arising out of or relating to these Terms or our services shall first be attempted to be resolved through good-faith informal negotiation between both parties prior to initiating formal legal arbitration.
          </p>
        </>
      ),
    },
    {
      id: "contact-legal",
      icon: Mail,
      title: "8. Legal Contact Information",
      content: (
        <>
          <p className="mb-4">
            For legal inquiries, formal notices, or questions concerning these Terms of Service, please contact:
          </p>
          <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-white to-sky-50 border border-sky-200/80 shadow-sm space-y-2 text-sm">
            <p className="font-bold text-foreground">Vyranza Digital Marketing Agency</p>
            <p className="text-muted-foreground">Attention: Legal &amp; Client Services</p>
            <p className="text-foreground">
              Email:{" "}
              <a href="mailto:hello@vyranza.com" className="text-royal font-semibold underline">
                hello@vyranza.com
              </a>
            </p>
            <p className="text-foreground">Website: https://vyranza.com</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white via-sky-50/50 to-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/90 border border-sky-200/80 text-royal text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-royal" />
            <span>Service Framework &amp; Agreements</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground"
          >
            Terms of{" "}
            <span className="bg-gradient-to-r from-royal via-royal-light to-sky-500 bg-clip-text text-transparent">
              Service
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Review the terms governing our media management, strategy consultations, and client growth engagements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-royal bg-sky-50 border border-sky-200/60 px-3.5 py-1.5 rounded-full"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Last Updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-sky-100/80 border border-sky-200/60 flex items-center justify-center text-royal shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>

                <div className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                  {section.content}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Footer Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-royal via-royal-light to-sky-600 text-white text-center shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Scale Your Ad Campaigns?</h3>
            <p className="text-white/85 text-sm sm:text-base">
              Book a strategy call with our agency team to audit your ad account and discuss a customized roadmap.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-royal hover:bg-sky-50 font-bold px-7 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>Request Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
