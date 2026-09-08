"use client";

import React from "react";
import { CONTINUOUS_LEARNING } from "@/lib/skills";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  Cpu,
  Workflow,
  Layers,
  LineChart,
  Sigma,
  BookOpen,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Database,
  BarChart3,
  PieChart,
  Sheet: FileSpreadsheet,
  Cpu,
  Workflow,
  Layers,
  LineChart,
  Sigma,
};

export function Learning() {
  return (
    <section id="learning" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Growth Mindset"
          title="Continuous Learning"
          subtitle="Proactively refining technical nuances, modern BI methodologies, and analytical rigor daily."
        />

        {/* 9 Learning Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTINUOUS_LEARNING.map((item, idx) => {
            const Icon = iconMap[item.icon] || BookOpen;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard
                  glow="primary"
                  className="flex items-center gap-4 p-5 hover:border-slate-700 transition-all"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white truncate">
                        {item.name}
                      </h4>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <p className="mt-1 text-xs text-muted leading-snug truncate">
                      {item.focus}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Continuous Learning */}
        <div className="mt-10 rounded-2xl border border-glass-border bg-slate-900/40 p-5 text-center text-xs text-muted max-w-2xl mx-auto">
          <p>
            Committed to continuous growth through hands-on project building, documentation deep-dives, and solving real-world analytical problems with SQL, Power BI, Tableau, and Excel.
          </p>
        </div>
      </div>
    </section>
  );
}
