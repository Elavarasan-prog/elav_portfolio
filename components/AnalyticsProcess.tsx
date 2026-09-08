"use client";

import React from "react";
import { ANALYTICS_PROCESS_STAGES } from "@/lib/process";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import {
  Target,
  FolderDown,
  Sparkles,
  SearchCode,
  LayoutDashboard,
  MessageSquareText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Target,
  FolderDown,
  Sparkles,
  SearchCode,
  LayoutDashboard,
  MessageSquareText,
};

export function AnalyticsProcess() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Methodology"
          title="How I Work With Data"
          subtitle="A structured 6-stage lifecycle that turns noisy, disparate datasets into clear executive actions."
        />

        {/* 6 Animated Stages Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ANALYTICS_PROCESS_STAGES.map((stage, idx) => {
            const Icon = iconMap[stage.icon] || Target;

            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <GlassCard
                  glow="primary"
                  className="flex h-full flex-col justify-between p-6 sm:p-7 group"
                >
                  <div>
                    {/* Top Row: Step Number & Icon */}
                    <div className="flex items-center justify-between border-b border-glass-border pb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20 font-mono text-sm font-bold text-accent border border-primary/30">
                          {stage.step}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
                          {stage.title}
                        </h3>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-muted group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Short & Full Description */}
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-accent">
                        {stage.shortDesc}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                        {stage.fullDesc}
                      </p>
                    </div>

                    {/* Tools Applied */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {stage.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md bg-slate-950/80 px-2 py-0.5 font-mono text-[10px] text-indigo-300 border border-slate-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverable Footer */}
                  <div className="mt-6 border-t border-glass-border pt-3 flex items-center justify-between text-[11px]">
                    <span className="text-muted">Key Deliverable:</span>
                    <span className="font-semibold text-white truncate max-w-[170px]">
                      {stage.deliverable}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
