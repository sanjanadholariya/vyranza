"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  FileText,
  UserCheck,
  Mail,
  ArrowRight,
  Sparkles,
  Globe,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 25, 2026";

  const sections = [
    {
      id: "introduction",
      icon: ShieldCheck,
      title: "1. Introduction & Overview",
      content: (
        <>
          <p className="mb-4">
            Vyranza ("we," "our," or "us") is dedicated to protecting the privacy and personal information of our clients, prospective partners, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, submit a inquiry, or utilize our paid media management and advertising growth services.
          </p>
          <p>
            By accessing or using our website and services, you acknowledge that you have read, understood, and agree to the data practices described in this Privacy Policy.
          </p>
        </>
      ),
    },
    {
      id: "information-collected",
      icon: Database,
      title: "2. Information We Collect",
      content: (
        <>
          <p className="mb-4">
            We collect personal and business information necessary to deliver high-converting advertising campaigns and strategic marketing services:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
            <li>
              <strong>Directly Provided Data:</strong> First and last name, business email address, phone number, company name, industry, current monthly ad spend, and campaign goals submitted via our strategy call booking forms.
            </li>
            <li>
              <strong>Client Communications:</strong> Information provided during onboarding calls, email correspondence, strategy audits, and consultation sessions.
            </li>
            <li>
              <strong>Automated Technical Data:</strong> IP address, browser type, device information, operating system, referring URL, pages viewed, time spent on site, and interaction data collected automatically via log files and analytics.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "cookies-tracking",
      icon: Eye,
      title: "3. Cookies & Tracking Technologies",
      content: (
        <>
          <p className="mb-4">
            We utilize cookies, web beacons, and tracking pixels to enhance your browsing experience, analyze site performance, and measure the effectiveness of our marketing initiatives.
          </p>
          <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-4 space-y-2 text-sm">
            <p>
              <strong>Meta Pixel &amp; Conversion API:</strong> Used to measure advertising efficiency, optimize campaign delivery, and present relevant remarketing ads on Facebook and Instagram.
            </p>
            <p>
              <strong>Google Analytics &amp; Tag Manager:</strong> Used to aggregate anonymous traffic analytics, conversion metrics, and user behavior patterns.
            </p>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            You can control or disable cookie preferences through your web browser settings at any time. Disabling cookies will not restrict core access to our website.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use-data",
      icon: UserCheck,
      title: "4. How We Use Your Information",
      content: (
        <>
          <p className="mb-4">
            Vyranza uses the collected information strictly for legitimate commercial and business operations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            <li>Evaluating business eligibility and preparing tailored Meta &amp; Google Ads proposals.</li>
            <li>Scheduling strategy calls, onboarding client ad accounts, and setting up campaign tracking.</li>
            <li>Delivering automated lead notifications, client reports, and service updates.</li>
            <li>Improving our website performance, user interface, and advertising conversion funnels.</li>
            <li>Ensuring legal compliance and protecting against fraudulent activity.</li>
          </ul>
        </>
      ),
    },
    {
      id: "data-sharing",
      icon: Lock,
      title: "5. Data Sharing & Third-Party Disclosure",
      content: (
        <>
          <p className="mb-4 font-semibold text-royal">
            Vyranza DOES NOT sell, rent, or trade your personal information to third parties or data brokers.
          </p>
          <p className="mb-4">
            We may share limited data with trusted third-party service providers solely to operate our business and fulfill our services:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            <li>
              <strong>Ad Infrastructure Providers:</strong> Meta Platforms (Facebook/Instagram Ads) and Google LLC (Google Search &amp; Shopping Ads) for account management and pixel integration.
            </li>
            <li>
              <strong>Hosting &amp; Infrastructure:</strong> Vercel Inc. for secure website delivery and server infrastructure.
            </li>
            <li>
              <strong>CRM &amp; Lead Automation Tools:</strong> Secure database systems for managing lead routing and client inquiries.
            </li>
            <li>
              <strong>Legal Compliance:</strong> If required by law, subpoena, or government authority to protect rights, property, or safety.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "us-privacy-rights",
      icon: Globe,
      title: "6. US Privacy Rights (CCPA / CPRA & State Laws)",
      content: (
        <>
          <p className="mb-4">
            If you are a resident of California or another state with applicable privacy laws (such as Virginia, Colorado, Connecticut, or Utah), you possess specific rights regarding your personal information:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-white border border-sky-100 shadow-sm">
              <h4 className="font-bold text-sm text-foreground mb-1">Right to Know / Access</h4>
              <p className="text-xs text-muted-foreground">
                Request details regarding the categories and specific pieces of personal information we have collected.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-sky-100 shadow-sm">
              <h4 className="font-bold text-sm text-foreground mb-1">Right to Delete</h4>
              <p className="text-xs text-muted-foreground">
                Request the deletion of personal information collected from you, subject to certain legal exceptions.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-sky-100 shadow-sm">
              <h4 className="font-bold text-sm text-foreground mb-1">Right to Correct</h4>
              <p className="text-xs text-muted-foreground">
                Request correction of inaccurate personal information maintained in our records.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-sky-100 shadow-sm">
              <h4 className="font-bold text-sm text-foreground mb-1">Right to Non-Discrimination</h4>
              <p className="text-xs text-muted-foreground">
                We will never discriminate or alter service quality for exercising your privacy rights.
              </p>
            </div>
          </div>
          <p className="text-sm">
            To submit a verifiable consumer request, please contact us at{" "}
            <a href="mailto:hello@vyranza.com" className="text-royal font-semibold underline">
              hello@vyranza.com
            </a>.
          </p>
        </>
      ),
    },
    {
      id: "data-security",
      icon: ShieldCheck,
      title: "7. Data Security & Retention",
      content: (
        <>
          <p className="mb-4">
            We implement industry-standard administrative, technical, and physical security measures—including SSL/TLS encryption, secure database access controls, and multi-factor authentication—to protect your personal information against unauthorized access, loss, or misuse.
          </p>
          <p>
            We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or to comply with statutory legal and accounting retention periods.
          </p>
        </>
      ),
    },
    {
      id: "contact-us",
      icon: Mail,
      title: "8. Contact Us",
      content: (
        <>
          <p className="mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to our privacy team:
          </p>
          <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-white to-sky-50 border border-sky-200/80 shadow-sm space-y-2 text-sm">
            <p className="font-bold text-foreground">Vyranza Digital Marketing Agency</p>
            <p className="text-muted-foreground">Attention: Privacy &amp; Data Compliance</p>
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
            <span>Legal &amp; Data Transparency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground"
          >
            Privacy{" "}
            <span className="bg-gradient-to-r from-royal via-royal-light to-sky-500 bg-clip-text text-transparent">
              Policy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Learn how Vyranza collects, protects, and manages your personal and business information.
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
            <h3 className="text-2xl sm:text-3xl font-extrabold">Have Questions About Your Data?</h3>
            <p className="text-white/85 text-sm sm:text-base">
              Our growth team is ready to discuss your business strategy and ensure total transparency.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-royal hover:bg-sky-50 font-bold px-7 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
