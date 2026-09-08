"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { HeroDashboard } from "./HeroDashboard";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Download,
  Mail,
  Sparkles,
  Database,
  FileSpreadsheet,
} from "lucide-react";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = SITE_CONFIG.typingTitles;

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText.length + 1 === currentTitle.length) {
          // Pause before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Bio & Hero Headlines */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start lg:col-span-6"
          >
            {/* Status Pill */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-indigo-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Opportunities</span>
              <span className="text-muted-dark">•</span>
              <span className="text-slate-300 font-semibold">Entry-Level Data Analyst</span>
            </div>

            {/* Greeting */}
            <p className="text-lg font-medium text-slate-300 sm:text-xl">
              Hi, I&apos;m
            </p>

            {/* Owner Name */}
            <h1 className="mt-1 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-6xl">
              <span className="text-gradient font-sans">{SITE_CONFIG.name}</span>
            </h1>

            {/* Typing Subtitle */}
            <div className="mt-3 flex items-center gap-2 font-mono text-2xl font-bold sm:text-3xl text-gradient-primary min-h-[44px]">
              <h2>{displayText}</h2>
              <span className="inline-block h-7 w-[3px] bg-accent animate-pulse" />
            </div>

            {/* Hero Exact Bio */}
            <blockquote className="mt-6 border-l-2 border-primary/60 pl-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              &ldquo;{SITE_CONFIG.bio}&rdquo;
            </blockquote>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              {/* Primary: View My Projects */}
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow-primary transition-all hover:bg-primary-hover active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>View My Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Secondary: View Dashboards */}
              <Link
                href="#dashboards"
                className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white shadow-glass-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <BarChart3 className="h-4 w-4 text-accent" />
                <span>View Dashboards</span>
              </Link>

              {/* Ghost: Contact Me */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:text-white hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Mail className="h-4 w-4 text-primary-light" />
                <span>Contact Me</span>
              </Link>

              {/* Resume: Download Resume */}
              <a
                href={SITE_CONFIG.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Download className="h-4 w-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Micro Tech Highlights */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-glass-border text-xs text-muted">
              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[10px]">
                Core Toolkit:
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#336791]" /> SQL
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F2C811]" /> Power BI
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E97627]" /> Tableau
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#217346]" /> Excel
              </span>
            </div>
          </motion.div>

          {/* Right Column: Hero Interactive Analytics Dashboard */}
          <div className="flex justify-center lg:col-span-6 lg:justify-end">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
