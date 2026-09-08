"use client";

import React from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import {
  Briefcase,
  Layers,
  Database,
  CheckCircle2,
  Workflow,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const focusAreas = [
  "Data Cleaning",
  "Data Analysis",
  "SQL Query Development",
  "Power BI Dashboard Development",
  "Tableau Dashboard Development",
  "Excel Analysis",
  "Data Visualization",
  "KPI Reporting",
  "Business Insights",
  "Dashboard Development",
  "Data Storytelling",
];

const analyticsLifecycle = [
  {
    step: "01",
    phase: "Collect",
    tagline: "Data Ingestion & Schema Audit",
    description: "Consolidate raw datasets from relational databases, CSV extracts, and operational systems. Audit schema constraints, primary keys, and data cardinality.",
    tools: "SQL, Excel, Power Query",
  },
  {
    step: "02",
    phase: "Clean",
    tagline: "Deduplication & Quality Assurance",
    description: "Remove duplicate entity records, handle null values, fix character encodings, standardize formatting, and establish consistent data types.",
    tools: "Excel Formulas, Power Query ETL, SQL Filtering",
  },
  {
    step: "03",
    phase: "Analyze",
    tagline: "Exploratory & Relational Querying",
    description: "Formulate business hypotheses, query multidimensional tables with CTEs and GROUP BY, run pivot analyses, and detect trends across key operational dimensions.",
    tools: "SQL (Joins, CTEs, Aggregations), Excel Pivot Tables",
  },
  {
    step: "04",
    phase: "Visualize",
    tagline: "Dashboard & Metric Modeling",
    description: "Architect dimensional star-schemas, compute dynamic DAX measures, and design clean, high-contrast dashboards with slicers, drill-downs, and trendlines.",
    tools: "Power BI Desktop, Tableau Desktop, DAX",
  },
  {
    step: "05",
    phase: "Communicate",
    tagline: "Executive Storytelling & Actionable Takeaways",
    description: "Synthesize visual findings into executive takeaways. Present actionable business recommendations that directly address root causes and drive commercial growth.",
    tools: "Data Storytelling, Executive Briefings, KPI Trees",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Profile"
          title="Experience & Analytics Lifecycle"
          subtitle="Honest, skill-grounded profile showcasing core competencies and end-to-end analytical execution."
        />

        {/* Top Profile Summary Card */}
        <div className="mt-10 rounded-2xl border border-glass-border bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-glass">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-glass-border pb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-accent p-[1px] shadow-glow-primary">
                <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-slate-950">
                  <Briefcase className="h-7 w-7 text-accent" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-white">Data Analyst</h3>
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">
                    Fresher / Entry-Level
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-300">
                  Ready to contribute immediately to data-driven business operations and analytics teams.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-muted bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Seeking Entry-Level Roles</span>
            </div>
          </div>

          {/* Core Focus Areas Pills */}
          <div className="mt-6">
            <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
              Core Analytics Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Lifecycle Timeline */}
        <div className="mt-16">
          <div className="mb-8 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
              <Workflow className="h-3.5 w-3.5" />
              Execution Methodology
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              End-to-End Analytics Workflow
            </h3>
            <p className="mt-2 text-sm text-muted">
              Collect → Clean → Analyze → Visualize → Communicate
            </p>
          </div>

          <div className="relative">
            {/* Center Connecting Line (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-secondary opacity-30" />

            {/* Timeline Steps */}
            <div className="space-y-8 lg:space-y-12">
              {analyticsLifecycle.map((item, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`relative flex flex-col lg:flex-row items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full lg:w-[46%]">
                      <GlassCard
                        glow="primary"
                        className="p-6 transition-all hover:border-indigo-500/50"
                      >
                        <div className="flex items-center justify-between border-b border-glass-border pb-3">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-bold text-accent">
                              STAGE {item.step}
                            </span>
                            <span className="text-slate-500">•</span>
                            <h4 className="text-base font-bold text-white">
                              {item.phase}
                            </h4>
                          </div>
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-300 border border-primary/20">
                            {item.tagline}
                          </span>
                        </div>

                        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between pt-3 border-t border-glass-border text-[11px] text-muted">
                          <span className="font-mono text-indigo-300">
                            Tools: {item.tools}
                          </span>
                          <span className="flex items-center gap-1 text-emerald-400">
                            <CheckCircle2 className="h-3 w-3" /> Standardized
                          </span>
                        </div>
                      </GlassCard>
                    </div>

                    {/* Center Node Indicator */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-9 w-9 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-950 shadow-glow-primary z-10">
                      <span className="h-3 w-3 rounded-full bg-accent" />
                    </div>

                    {/* Spacer for other side */}
                    <div className="hidden lg:block w-[46%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
