"use client";

import Link from "next/link";
import { Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-sky-50/60 to-sky-100/40 border-t border-sky-100 pt-16 pb-12 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-royal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sky-200/60">
          {/* Column 1 & 2: Brand Info & Description */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center group overflow-visible">
              <img
                src="/logo/long_bg_remove.png"
                alt="Vyranza"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain scale-125 sm:scale-140 origin-left transition-opacity duration-300 group-hover:opacity-90 -my-3"
              />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Vyranza is a performance marketing agency engineered to help ambitious businesses generate consistent leads, scale Meta &amp; Google Ads, and increase revenue with confidence.
            </p>

            {/* Email Contact Card */}
            <div className="pt-2">
              <a
                href="mailto:hello@vyranza.com"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-sky-200/80 text-foreground hover:text-royal hover:border-royal/40 shadow-sm transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-100/80 flex items-center justify-center text-royal group-hover:bg-royal group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Direct Email</span>
                  <span className="text-sm font-bold text-royal group-hover:underline">hello@vyranza.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-royal transition-colors">
                  Meta Ads Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-royal transition-colors">
                  Google Ads (Search &amp; Shopping)
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-royal transition-colors">
                  Conversion Rate Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-royal transition-colors">
                  Instant Lead Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-royal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-royal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-royal transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-royal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media Connections */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Connect With Us
            </h4>
            <p className="text-xs text-muted-foreground">
              Follow our paid marketing strategies and insights.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/vyranza_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vyranza Instagram"
                className="w-10 h-10 rounded-xl bg-white border border-sky-200/80 flex items-center justify-center text-foreground hover:text-royal hover:border-royal/50 shadow-sm hover:scale-105 transition-all duration-200"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
              <a
                href="https://www.facebook.com/vyranza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vyranza Facebook"
                className="w-10 h-10 rounded-xl bg-white border border-sky-200/80 flex items-center justify-center text-foreground hover:text-royal hover:border-royal/50 shadow-sm hover:scale-105 transition-all duration-200"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Vyranza Performance Marketing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-royal transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-royal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
