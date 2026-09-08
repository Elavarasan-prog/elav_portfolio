"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Database, FileSpreadsheet, ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-glass-border bg-slate-950/80 py-3 backdrop-blur-xl shadow-glass-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="#home"
          className="group flex items-center gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none p-1"
          aria-label="Elavarasan M, Data Analyst Homepage"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent p-[1px] shadow-glow-primary group-hover:shadow-glow-accent transition-all duration-300">
            <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950">
              <span className="font-mono text-base font-bold text-white group-hover:text-accent transition-colors">
                EM
              </span>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-success" />
          </div>

          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-accent-light transition-colors">
              {SITE_CONFIG.name}
            </span>
            <span className="text-xs font-medium text-muted">
              {SITE_CONFIG.role}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-glass-border bg-slate-900/60 p-1.5 backdrop-blur-md lg:flex shadow-glass-sm"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  isActive
                    ? "text-white"
                    : "text-muted hover:text-slate-200 hover:bg-white/[0.04]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 shadow-glow-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Resume / Contact Action */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SITE_CONFIG.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-md transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Download className="h-3.5 w-3.5 text-accent" />
            <span>Resume</span>
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-white shadow-glow-primary transition-all hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span>Hire Me</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-glass-border bg-slate-900/80 text-slate-300 backdrop-blur-md transition-colors hover:text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-b border-glass-border bg-slate-950/95 px-6 pt-4 pb-6 backdrop-blur-2xl lg:hidden shadow-glass-lg"
          >
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/20 text-white font-semibold border border-primary/30"
                        : "text-muted hover:bg-white/[0.04] hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 flex flex-col gap-2.5 pt-4 border-t border-glass-border">
              <a
                href={SITE_CONFIG.resumePath}
                download
                className="flex items-center justify-center gap-2 rounded-xl border border-glass-border bg-slate-900 py-2.5 text-xs font-medium text-slate-200"
              >
                <Download className="h-4 w-4 text-accent" />
                <span>Download Resume</span>
              </a>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs font-semibold text-white shadow-glow-primary"
              >
                <span>Contact Me</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
