"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  CheckCircle2,
  Mail,
  Clock,
  ShieldCheck,
  Instagram,
  Facebook,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

const availableServices = [
  "Meta Ads (Facebook & Instagram)",
  "Google Ads (Search & Shopping)",
  "Conversion Remarketing",
  "Lead Automation & CRM Sync",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessType: "",
    message: "",
    interestedServices: ["Meta Ads (Facebook & Instagram)"],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (service) => {
    setFormData((prev) => {
      const exists = prev.interestedServices.includes(service);
      if (exists) {
        return {
          ...prev,
          interestedServices: prev.interestedServices.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          interestedServices: [...prev.interestedServices, service],
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || errorData.error || "Failed to submit message");
      }

      setIsSubmitted(true);

      // Notify Google Tag Manager that a lead was generated
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "generate_lead",
      });
    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      businessType: "",
      message: "",
      interestedServices: ["Meta Ads (Facebook & Instagram)"],
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Contact Hero Header */}
      <section className="relative pt-24 sm:pt-32 pb-4 sm:pb-10 bg-gradient-to-b from-white via-sky-50/50 to-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-sky-100/90 border border-sky-200/80 text-royal text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm mb-3 sm:mb-6"
          >
            <Sparkles className="w-4 h-4 text-royal" />
            <span>Schedule a Free Strategy Consultation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-tight"
          >
            Let&apos;s Grow Your Revenue with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-royal via-royal-light to-sky-500 bg-clip-text text-transparent">
              Targeted Meta &amp; Google Ads
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 sm:mt-6 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Fill out the form below to receive a custom paid ads &amp; lead strategy audit tailored to your business model.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Form / Thank You Container */}
      <section className="pb-16 sm:pb-24 pt-2 sm:pt-4 bg-gradient-to-b from-white via-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              /* --- STATE A: Contact Form --- */
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Right Side / Mobile Order 1: Form Card */}
                <div className="order-1 lg:order-2 lg:col-span-7 bg-white/95 border border-sky-100/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-sky-100/60 backdrop-blur-sm">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-2">
                    Request Strategy Call
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
                    Tell us about your business goals and the ad services you need.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          First Name <span className="text-royal">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          placeholder="e.g. John"
                          className="w-full px-4 py-3 rounded-xl border border-sky-200/80 bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          Last Name <span className="text-royal">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          placeholder="e.g. Doe"
                          className="w-full px-4 py-3 rounded-xl border border-sky-200/80 bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Business Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          Email Address <span className="text-royal">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-sky-200/80 bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          Business Type <span className="text-royal">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessType}
                          onChange={(e) =>
                            setFormData({ ...formData, businessType: e.target.value })
                          }
                          placeholder="e.g. E-commerce / Real Estate / Agency"
                          className="w-full px-4 py-3 rounded-xl border border-sky-200/80 bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
                        />
                      </div>
                    </div>

                    {/* Interested Services Checkboxes */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        Interested Services <span className="text-royal">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {availableServices.map((service, idx) => {
                          const isChecked = formData.interestedServices.includes(service);
                          return (
                            <label
                              key={idx}
                              onClick={() => handleCheckboxChange(service)}
                              className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all duration-200 ${isChecked
                                ? "bg-sky-100/90 border-royal text-royal font-semibold shadow-sm"
                                : "bg-sky-50/30 border-sky-200/80 text-foreground/80 hover:bg-sky-50"
                                }`}
                            >
                              <div
                                className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${isChecked
                                  ? "bg-royal border-royal text-white"
                                  : "border-sky-300 bg-white"
                                  }`}
                              >
                                {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                              <span className="text-xs font-medium leading-tight">
                                {service}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                        Message / Campaign Goals
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your current monthly ad spend, target audience, or primary lead goals..."
                        className="w-full px-4 py-3 rounded-xl border border-sky-200/80 bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all resize-none"
                      />
                    </div>

                    {/* Error Banner */}
                    {Boolean(errorMessage) && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-royal hover:bg-royal-dark text-white font-bold text-base py-4 rounded-xl transition-all duration-300 shadow-lg shadow-royal/25 hover:shadow-xl hover:shadow-royal/35 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Strategy Request</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Left Side / Mobile Order 2: Contact Details & Guarantee Box */}
                <div className="order-2 lg:order-1 lg:col-span-5 space-y-8">
                  <div className="bg-gradient-to-br from-sky-100/90 via-sky-50/80 to-white border border-sky-200/80 rounded-3xl p-6 sm:p-8 shadow-sm backdrop-blur-sm space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">
                      Direct Agency Contact
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We treat your marketing spend like our own. Reach out directly or submit your details to connect with a senior media buyer.
                    </p>

                    {/* Email Details */}
                    <div className="space-y-4 pt-2">
                      <a
                        href="mailto:hello@vyranza.com"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-sky-200/80 shadow-sm hover:border-royal/40 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-sky-100/90 text-royal flex items-center justify-center group-hover:bg-royal group-hover:text-white transition-colors">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Direct Email</span>
                          <span className="text-base font-bold text-royal group-hover:underline">hello@vyranza.com</span>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-sky-200/80 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-sky-100/90 text-royal flex items-center justify-center">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Response Time</span>
                          <span className="text-sm font-bold text-foreground">Within 24 Hours</span>
                        </div>
                      </div>
                    </div>

                    {/* Social Icons */}
                    <div className="pt-4 border-t border-sky-200/60">
                      <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Follow Our Insights
                      </span>
                      <div className="flex items-center gap-3">
                        <a
                          href="https://www.instagram.com/vyranza_"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white border border-sky-200/80 flex items-center justify-center text-foreground hover:text-royal hover:border-royal/50 shadow-sm transition-all"
                        >
                          <Instagram className="w-5 h-5 text-pink-600" />
                        </a>
                        <a
                          href="https://www.facebook.com/vyranza"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white border border-sky-200/80 flex items-center justify-center text-foreground hover:text-royal hover:border-royal/50 shadow-sm transition-all"
                        >
                          <Facebook className="w-5 h-5 text-blue-600" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Trust Guarantees */}
                  <div className="bg-white/90 border border-sky-100 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span className="text-sm font-bold text-foreground">100% Ad Account &amp; Pixel Ownership</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span className="text-sm font-bold text-foreground">Zero Binding Long-Term Contracts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span className="text-sm font-bold text-foreground">Transparent Weekly ROAS &amp; Lead Reporting</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* --- STATE B: Thank You View --- */
              <motion.div
                key="thank-you-screen"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto bg-gradient-to-br from-sky-100/90 via-sky-50/70 to-white border border-sky-200/80 rounded-3xl p-8 sm:p-14 text-center shadow-xl shadow-sky-100/80 backdrop-blur-md"
              >
                {/* Glowing Checkmark Badge */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-royal via-royal-light to-sky-500 flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-royal/30 animate-pulse">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="text-xs font-bold text-royal bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-200/80 uppercase tracking-wider inline-block mb-3">
                  Request Confirmed
                </span>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground leading-tight">
                  Thank You, {formData.firstName}!
                </h2>

                <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  We have received your strategy request. Our senior media buying team is reviewing your details and will reach out to <strong className="text-royal font-semibold">{formData.email}</strong> within 24 hours.
                </p>

                {/* Submission Summary Box */}
                <div className="my-8 bg-white/90 border border-sky-200/70 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Submission Overview
                  </h4>
                  <div className="text-xs space-y-1.5 text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Contact:</strong> {formData.firstName} {formData.lastName}
                    </div>
                    {Boolean(formData.businessType) && (
                      <div>
                        <strong className="text-foreground">Business:</strong> {formData.businessType}
                      </div>
                    )}
                    {formData.interestedServices.length > 0 && (
                      <div>
                        <strong className="text-foreground">Services:</strong> {formData.interestedServices.join(", ")}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <Link
                    href="/"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-royal hover:bg-royal-dark text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-md shadow-royal/20"
                  >
                    <span>Back to Homepage</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-sky-50 text-foreground border border-sky-200 text-sm font-semibold px-6 py-3.5 rounded-full transition-all"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
