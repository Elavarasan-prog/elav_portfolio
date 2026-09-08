"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { ArrowUp, Linkedin, Github, Youtube, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-glass-border bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left: Brand Identity */}
          <div className="flex flex-col">
            <Link
              href="#home"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 w-fit"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950 font-mono text-xs font-bold text-white">
                  EM
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="mt-1 text-xs text-muted">
              {SITE_CONFIG.role} • Power BI · Tableau · SQL · Microsoft Excel
            </p>
          </div>

          {/* Center: Quick Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted" aria-label="Footer Navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="YouTube channel"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.socials.email}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Send email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex h-9 items-center gap-1.5 rounded-xl border border-glass-border bg-slate-900 px-3 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-dark">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono">Data → Analysis → Visualization → Insight</p>
        </div>
      </div>
    </footer>
  );
}
