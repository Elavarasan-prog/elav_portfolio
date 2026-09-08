"use client";

import React, { useState } from "react";
import { ZOMATO_PROJECT } from "@/lib/projects";
import { SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  BookOpen,
  CheckCircle2,
  FileSpreadsheet,
  BarChart3,
  PieChart,
  Database,
  ArrowRight,
  Code,
  Sparkles,
  Layers,
  Filter,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";
import { cn } from "@/lib/utils";

type TechFilter = "All" | "Power BI" | "Tableau" | "Excel" | "SQL";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<TechFilter>("All");
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const filters: TechFilter[] = ["All", "Power BI", "Tableau", "Excel", "SQL"];

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Project"
          title="Featured Analytics Project"
          subtitle="An exhaustive analysis of restaurant ecosystems, customer engagement, and location-based performance."
        />

        {/* Technology Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                activeFilter === filter
                  ? "bg-primary text-white shadow-glow-primary"
                  : "border border-glass-border bg-slate-900/60 text-muted hover:border-slate-700 hover:text-white"
              )}
            >
              {filter === "All" ? "All Technologies" : filter}
            </button>
          ))}
        </div>

        {/* Large Premium Glassmorphism Project Showcase Card */}
        <div className="mt-12 rounded-3xl border border-glass-border bg-slate-900/60 p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-glass-lg">
          {/* Top Bar: Title & Tech Badges */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-glass-border pb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-mono font-semibold text-accent border border-primary/30">
                  REAL-WORLD CASE STUDY
                </span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  COMPLETED
                </span>
              </div>
              <h3 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                {ZOMATO_PROJECT.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-300">
                {ZOMATO_PROJECT.tagline}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {ZOMATO_PROJECT.techBadges.map((badge) => (
                <span
                  key={badge.name}
                  className="rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm flex items-center gap-1.5"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: badge.color }}
                  />
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300">
            <p>{ZOMATO_PROJECT.description}</p>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#dashboards"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-glow-primary hover:bg-primary-hover transition-colors"
            >
              <BarChart3 className="h-4 w-4" />
              <span>View Dashboards</span>
            </a>

            <button
              onClick={() => setIsCaseStudyOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-slate-800/60 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 hover:border-slate-600 transition-colors"
            >
              <BookOpen className="h-4 w-4 text-accent" />
              <span>View Case Study</span>
            </button>

            <a
              href={SITE_CONFIG.socials.projectRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Repository</span>
            </a>
          </div>

          {/* Dynamic Filter Content Area */}
          <div className="mt-10 border-t border-glass-border pt-8">
            {/* Filter: ALL */}
            {activeFilter === "All" && (
              <div className="space-y-8">
                {/* 12 Analytics Areas Grid */}
                <div>
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-accent" />
                    Key Analytics Exploration Dimensions (12 Areas)
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                    {ZOMATO_PROJECT.areas.map((area) => (
                      <div
                        key={area}
                        className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-950/50 p-3 text-xs font-medium text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data Preparation 6-Point Audit */}
                <div>
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary-light" />
                    Data Preparation & Quality Cleaning
                  </h4>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {ZOMATO_PROJECT.dataPreparationPoints.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-glass-border bg-slate-950/40 p-4"
                      >
                        <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {item.title}
                        </h5>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Data Exploration Preview */}
                <div className="rounded-2xl border border-glass-border bg-slate-950/60 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Sample Analysis: Online Order vs Dine-In Performance
                      </h4>
                      <p className="text-xs text-muted">
                        Average Rating and Order Count comparison from cleaned Zomato data
                      </p>
                    </div>
                    <span className="text-xs font-mono text-accent">Clean Dataset</span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Bar Chart */}
                    <div className="h-52 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ZOMATO_PROJECT.chartData.onlineOrderComparison}>
                          <XAxis dataKey="category" stroke="#64748B" fontSize={11} tickLine={false} />
                          <YAxis stroke="#64748B" fontSize={11} tickLine={false} domain={[0, 5]} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#0F172A",
                              borderColor: "rgba(255,255,255,0.12)",
                              borderRadius: "8px",
                              fontSize: "12px",
                              color: "#fff",
                            }}
                          />
                          <Bar dataKey="avgRating" fill="#4F46E5" radius={[6, 6, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Donut Chart: Top Cuisines */}
                    <div className="flex flex-col justify-center">
                      <span className="text-xs font-semibold text-muted mb-2">
                        Top Cuisines Breakdown
                      </span>
                      <div className="h-44 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Pie
                              data={ZOMATO_PROJECT.chartData.cuisineDistribution}
                              cx="50%"
                              cy="50%"
                              innerRadius={35}
                              outerRadius={55}
                              paddingAngle={4}
                              dataKey="share"
                            >
                              {ZOMATO_PROJECT.chartData.cuisineDistribution.map(
                                (entry, idx) => {
                                  const colors = [
                                    "#4F46E5",
                                    "#7C3AED",
                                    "#06B6D4",
                                    "#22C55E",
                                    "#F59E0B",
                                    "#EC4899",
                                  ];
                                  return (
                                    <Cell
                                      key={`cell-${idx}`}
                                      fill={colors[idx % colors.length]}
                                    />
                                  );
                                }
                              )}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#0F172A",
                                borderColor: "rgba(255,255,255,0.12)",
                                borderRadius: "8px",
                                fontSize: "12px",
                                color: "#fff",
                              }}
                            />
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2 text-[10px] text-muted">
                        {ZOMATO_PROJECT.chartData.cuisineDistribution.map((item) => (
                          <span key={item.name}>
                            {item.name}: <strong className="text-white">{item.share}%</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Filter: POWER BI */}
            {activeFilter === "Power BI" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-amber-400" />
                      Power BI Implementation & DAX Modeling
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      Measures, Star-Schema Relationships, and Dynamic Slicers
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-500/30">
                    Power BI Desktop
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {ZOMATO_PROJECT.daxSnippets.map((snippet) => (
                    <div
                      key={snippet.title}
                      className="rounded-xl border border-glass-border bg-slate-950/60 p-4"
                    >
                      <span className="text-xs font-bold text-white">
                        {snippet.title}
                      </span>
                      <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-3 font-mono text-[11px] text-amber-300 border border-slate-800">
                        <code>{snippet.formula}</code>
                      </pre>
                      <p className="mt-2 text-[11px] text-muted leading-relaxed">
                        {snippet.purpose}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Rating Distribution Chart */}
                <div className="rounded-2xl border border-glass-border bg-slate-950/60 p-5">
                  <h5 className="text-xs font-bold text-white mb-2">
                    Customer Ratings Distribution
                  </h5>
                  <div className="h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ZOMATO_PROJECT.chartData.ratingDistribution}>
                        <XAxis dataKey="ratingRange" stroke="#64748B" fontSize={11} tickLine={false} />
                        <YAxis stroke="#64748B" fontSize={11} tickLine={false} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#0F172A",
                            borderColor: "rgba(255,255,255,0.12)",
                            borderRadius: "8px",
                            fontSize: "12px",
                            color: "#fff",
                          }}
                        />
                        <Bar dataKey="count" fill="#F2C811" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {/* Filter: TABLEAU */}
            {activeFilter === "Tableau" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-orange-400" />
                      Tableau Visual Analytics & Geospatial Insights
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      Location density, pricing tiers, and interactive parameters
                    </p>
                  </div>
                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300 border border-orange-500/30">
                    Tableau Desktop
                  </span>
                </div>

                {/* Top Localities Chart */}
                <div className="rounded-2xl border border-glass-border bg-slate-950/60 p-5">
                  <h5 className="text-xs font-bold text-white mb-2">
                    Restaurant Density by Top Locality (Bangalore)
                  </h5>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ZOMATO_PROJECT.chartData.topLocalities} layout="vertical">
                        <XAxis type="number" stroke="#64748B" fontSize={11} tickLine={false} />
                        <YAxis dataKey="locality" type="category" stroke="#64748B" fontSize={11} tickLine={false} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#0F172A",
                            borderColor: "rgba(255,255,255,0.12)",
                            borderRadius: "8px",
                            fontSize: "12px",
                            color: "#fff",
                          }}
                        />
                        <Bar dataKey="restaurants" fill="#E97627" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {/* Filter: EXCEL */}
            {activeFilter === "Excel" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <FileSpreadsheet className="h-5 w-5 text-emerald-400" />
                      Microsoft Excel Data Cleaning & Pivot Exploration
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      Data normalization, deduplication, and formula modeling
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                    Excel Workbook
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-glass-border bg-slate-950/60 p-4">
                    <h5 className="text-xs font-bold text-white">
                      Core Formulas Employed
                    </h5>
                    <ul className="mt-3 space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <code className="rounded bg-slate-900 px-2 py-0.5 font-mono text-accent">
                          =TRIM(SUBSTITUTE(G2, &quot;/5&quot;, &quot;&quot;))
                        </code>
                        <span className="text-muted">Strip text suffixes from rating strings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <code className="rounded bg-slate-900 px-2 py-0.5 font-mono text-accent">
                          =XLOOKUP(A2, Localities!A:A, Localities!B:B)
                        </code>
                        <span className="text-muted">Map zip codes to primary municipal zones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <code className="rounded bg-slate-900 px-2 py-0.5 font-mono text-accent">
                          =SUMIFS(Votes, City, &quot;Bangalore&quot;, Rating, &quot;&gt;=4.0&quot;)
                        </code>
                        <span className="text-muted">Conditional engagement aggregations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-glass-border bg-slate-950/60 p-4">
                    <h5 className="text-xs font-bold text-white">
                      Pivot Table Dimensions
                    </h5>
                    <p className="mt-2 text-xs text-muted leading-relaxed">
                      Constructed multi-dimensional pivot tables summarizing average cost for two across cuisines, rating frequency buckets, and table booking availability flags to validate distribution before importing into Power BI.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Filter: SQL */}
            {activeFilter === "SQL" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Database className="h-5 w-5 text-blue-400" />
                      SQL Relational Queries & Business Metrics
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      CTEs, Window Functions, and GROUP BY Aggregations
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300 border border-blue-500/30">
                    PostgreSQL / MySQL Syntax
                  </span>
                </div>

                <div className="space-y-4">
                  {ZOMATO_PROJECT.sqlSnippets.map((snippet) => (
                    <div
                      key={snippet.title}
                      className="rounded-xl border border-glass-border bg-slate-950/70 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white">
                          {snippet.title}
                        </span>
                        <span className="text-[10px] font-mono text-muted">SQL</span>
                      </div>
                      <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 font-mono text-xs text-indigo-300 border border-slate-800">
                        <code>{snippet.query}</code>
                      </pre>
                      <p className="mt-2 text-xs text-muted">
                        <strong>Business Purpose:</strong> {snippet.purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />
    </section>
  );
}
