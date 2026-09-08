"use client";

import React from "react";
import { SKILL_PILLS } from "@/lib/skills";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeading } from "./ui/SectionHeading";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Workflow,
} from "lucide-react";

const analyticalPillars = [
  {
    tool: "SQL",
    focus: "Data Querying & Analysis",
    description: "Writing robust queries, subqueries, and multi-table joins to extract structured datasets from relational systems.",
    icon: Database,
    color: "#336791",
    glow: "primary" as const,
  },
  {
    tool: "Power BI",
    focus: "Dashboard & BI Development",
    description: "Transforming tables in Power Query, authoring DAX calculations, and building synchronized interactive dashboards.",
    icon: BarChart3,
    color: "#F2C811",
    glow: "accent" as const,
  },
  {
    tool: "Tableau",
    focus: "Interactive Visualization",
    description: "Designing dynamic visual stories, geographical plots, and user-driven parameters for exploratory discovery.",
    icon: PieChart,
    color: "#E97627",
    glow: "secondary" as const,
  },
  {
    tool: "Excel",
    focus: "Data Preparation & Analysis",
    description: "Leveraging Pivot Tables, XLOOKUP, conditional formulas, and data cleaning routines for rapid data modeling.",
    icon: FileSpreadsheet,
    color: "#217346",
    glow: "primary" as const,
  },
];

const dataFlowSteps = [
  { title: "Raw Data", desc: "Ingestion & Audit" },
  { title: "Cleaning", desc: "Format & Deduplicate" },
  { title: "Analysis", desc: "Patterns & KPIs" },
  { title: "Visualization", desc: "BI Dashboards" },
  { title: "Business Insight", desc: "Informed Decision" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Turning Data Into Decisions"
          subtitle="Combining analytical thinking, modern BI tools, and business context to transform noisy numbers into clear growth drivers."
        />

        {/* Two-Column Main Content */}
        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Philosophy, Exact text, and Data Flow */}
          <div className="flex flex-col space-y-6 lg:col-span-6">
            <div className="rounded-2xl border border-glass-border bg-slate-900/50 p-6 sm:p-8 backdrop-blur-xl shadow-glass">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Analytical Mindset Meets Business Impact
              </h3>

              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300">
                <p>
                  I am a passionate Data Analyst focused on transforming raw and complex datasets into clear, actionable insights. I enjoy working with SQL, Excel, Power BI, and Tableau to clean data, analyze trends, build interactive dashboards, and communicate business insights effectively.
                </p>
                <p>
                  My goal is to combine analytical thinking, visualization, and business understanding to solve real-world problems using data.
                </p>
              </div>

              {/* Core Philosophy Badge */}
              <div className="mt-6 flex items-center justify-between rounded-xl border border-indigo-500/20 bg-indigo-950/30 px-4 py-3 text-xs sm:text-sm font-medium text-indigo-200">
                <div className="flex items-center gap-2">
                  <Workflow className="h-4 w-4 text-accent" />
                  <span>The Strategic Path:</span>
                </div>
                <span className="font-semibold text-white tracking-wide">
                  Data → Analysis → Insight → Decision
                </span>
              </div>
            </div>

            {/* Animated Data-Flow Visualization */}
            <div className="rounded-2xl border border-glass-border bg-slate-900/40 p-5 backdrop-blur-xl">
              <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-3">
                Analytical Workflow Pipeline
              </span>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {dataFlowSteps.map((step, idx) => (
                  <div key={step.title} className="relative flex flex-col items-center text-center p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] font-mono text-accent font-bold">
                      0{idx + 1}
                    </span>
                    <span className="mt-1 text-xs font-bold text-white">
                      {step.title}
                    </span>
                    <span className="mt-0.5 text-[10px] text-muted leading-tight">
                      {step.desc}
                    </span>
                    {idx < dataFlowSteps.length - 1 && (
                      <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-muted-dark">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Pills Cloud */}
            <div className="flex flex-col space-y-2.5">
              <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                Core Competencies & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {SKILL_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Skill-Focused Cards (Honest & Skill-Focused, No Fake Stats) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            {analyticalPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <GlassCard
                  key={pillar.tool}
                  glow={pillar.glow}
                  className="flex flex-col justify-between p-6"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10"
                        style={{ backgroundColor: `${pillar.color}20` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: pillar.color }} />
                      </div>
                      <span className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-muted border border-white/[0.08]">
                        CORE TOOL
                      </span>
                    </div>

                    <h4 className="mt-4 text-lg font-bold text-white">
                      {pillar.tool}
                    </h4>
                    <p className="text-xs font-semibold text-accent mt-0.5">
                      {pillar.focus}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-[11px] font-medium text-slate-400 border-t border-glass-border pt-3">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                    <span>Applied in real project workflows</span>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
