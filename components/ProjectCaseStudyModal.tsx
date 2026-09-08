"use client";

import React, { useEffect } from "react";
import { ZOMATO_PROJECT, ProjectCaseStudyStep } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  FileSpreadsheet,
  BarChart3,
  PieChart,
  Database,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface ProjectCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ isOpen, onClose }: ProjectCaseStudyModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-glass-border bg-slate-900/95 shadow-2xl backdrop-blur-2xl"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-glass-border p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Zomato Data Analysis — Comprehensive Case Study
                </h3>
                <p className="text-xs text-muted">
                  6-Stage End-to-End Analytics Workflow Breakdown
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-800/60 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Body: 6 Steps */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            {ZOMATO_PROJECT.caseStudySteps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="relative rounded-xl border border-glass-border bg-slate-950/50 p-5 sm:p-6 transition-all hover:border-slate-700"
              >
                {/* Step indicator */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-glass-border pb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 font-mono text-xs font-bold text-accent">
                      {step.stepNumber}
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      {step.title}
                    </h4>
                  </div>
                  <span className="rounded-full bg-slate-800/80 px-3 py-0.5 text-[11px] font-mono text-indigo-300 border border-slate-700">
                    {step.subtitle}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {step.description}
                </p>

                {/* Key Actions */}
                <div className="mt-4">
                  <span className="text-[11px] font-semibold text-muted uppercase tracking-wider block mb-2">
                    Key Execution Actions:
                  </span>
                  <ul className="space-y-1.5">
                    {step.keyActions.map((action, aIdx) => (
                      <li
                        key={aIdx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Deliverable */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-glass-border pt-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-muted">Tools:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {step.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-accent font-medium">
                    <span>Output:</span>
                    <span className="font-semibold text-white">{step.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between border-t border-glass-border bg-slate-950/80 p-4 px-6">
            <span className="text-xs text-muted">
              Tech Stack: Excel · SQL · Power BI · Tableau
            </span>
            <button
              onClick={onClose}
              className="rounded-xl bg-primary px-5 py-2 text-xs font-semibold text-white hover:bg-primary-hover transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
