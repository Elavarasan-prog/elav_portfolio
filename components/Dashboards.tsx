"use client";

import React, { useState } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { ZOMATO_PROJECT } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  PieChart,
  FileSpreadsheet,
  ExternalLink,
  Layers,
  Filter,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  MapPin,
  Utensils,
  DollarSign,
  Maximize2,
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
  LineChart,
  Line,
} from "recharts";
import { cn } from "@/lib/utils";

type DashboardPlatform = "power-bi" | "tableau" | "excel";

export function Dashboards() {
  const [activePlatform, setActivePlatform] = useState<DashboardPlatform>("power-bi");
  const [selectedLocality, setSelectedLocality] = useState<string>("All Localities");

  return (
    <section id="dashboards" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Dashboards"
          title="Data Visualization"
          subtitle="Interactive dashboards that turn complex datasets into simple business stories."
        />

        {/* Platform Switcher Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActivePlatform("power-bi")}
            className={cn(
              "flex items-center gap-2 rounded-2xl px-5 py-3 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              activePlatform === "power-bi"
                ? "bg-[#F2C811]/15 text-yellow-300 border-2 border-[#F2C811]/60 shadow-glow-primary"
                : "border border-glass-border bg-slate-900/60 text-muted hover:text-white"
            )}
          >
            <BarChart3 className="h-4 w-4 text-[#F2C811]" />
            <span>Zomato — Power BI</span>
          </button>

          <button
            onClick={() => setActivePlatform("tableau")}
            className={cn(
              "flex items-center gap-2 rounded-2xl px-5 py-3 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              activePlatform === "tableau"
                ? "bg-[#E97627]/15 text-orange-300 border-2 border-[#E97627]/60 shadow-glow-secondary"
                : "border border-glass-border bg-slate-900/60 text-muted hover:text-white"
            )}
          >
            <PieChart className="h-4 w-4 text-[#E97627]" />
            <span>Zomato — Tableau</span>
          </button>

          <button
            onClick={() => setActivePlatform("excel")}
            className={cn(
              "flex items-center gap-2 rounded-2xl px-5 py-3 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              activePlatform === "excel"
                ? "bg-[#217346]/15 text-emerald-300 border-2 border-[#217346]/60 shadow-glow-accent"
                : "border border-glass-border bg-slate-900/60 text-muted hover:text-white"
            )}
          >
            <FileSpreadsheet className="h-4 w-4 text-[#217346]" />
            <span>Zomato — Excel</span>
          </button>
        </div>

        {/* Active Dashboard Canvas Showcase */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {/* 1. POWER BI DASHBOARD */}
            {activePlatform === "power-bi" && (
              <motion.div
                key="power-bi"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-glass-border bg-slate-950/80 p-6 sm:p-8 backdrop-blur-2xl shadow-glass-lg"
              >
                {/* Header & Controls */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-glass-border pb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F2C811]/20 text-[#F2C811]">
                        <BarChart3 className="h-4 w-4" />
                      </span>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        Zomato Restaurant Executive Dashboard
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-muted">
                      Power BI Desktop • City & Locality Analytics • DAX Computed Measures
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-muted">Locality Slicer:</span>
                    <select
                      value={selectedLocality}
                      onChange={(e) => setSelectedLocality(e.target.value)}
                      className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
                    >
                      <option>All Localities</option>
                      <option>Koramangala</option>
                      <option>Indiranagar</option>
                      <option>HSR Layout</option>
                      <option>Whitefield</option>
                      <option>Jayanagar</option>
                    </select>
                  </div>
                </div>

                {/* Power BI KPI Cards Row */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                    <span className="text-[11px] font-medium text-muted">Total Outlets Audited</span>
                    <p className="mt-1 font-mono text-2xl font-bold text-white">4,820</p>
                    <span className="text-[10px] text-emerald-400">100% deduplicated</span>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                    <span className="text-[11px] font-medium text-muted">Average Rating</span>
                    <p className="mt-1 font-mono text-2xl font-bold text-yellow-400">3.88 / 5.0</p>
                    <span className="text-[10px] text-muted">Excluding unrated outlets</span>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                    <span className="text-[11px] font-medium text-muted">Online Order Ratio</span>
                    <p className="mt-1 font-mono text-2xl font-bold text-cyan-400">64.2%</p>
                    <span className="text-[10px] text-emerald-400">+14% higher ratings</span>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                    <span className="text-[11px] font-medium text-muted">Table Booking Share</span>
                    <p className="mt-1 font-mono text-2xl font-bold text-purple-400">18.5%</p>
                    <span className="text-[10px] text-yellow-400">4.1 avg rating</span>
                  </div>
                </div>

                {/* Power BI Charts Layout */}
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                  {/* Rating vs Price Breakdown (8 cols) */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 lg:col-span-8">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-white">
                        Rating Tier Distribution & Review Engagement
                      </span>
                      <span className="text-[10px] text-accent">DAX [AvgVotes]</span>
                    </div>

                    <div className="h-56 w-full">
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
                          <Bar dataKey="count" fill="#F2C811" radius={[4, 4, 0, 0]} name="Restaurants" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Booking vs Non-Booking Share (4 cols) */}
                  <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 lg:col-span-4">
                    <div>
                      <span className="text-xs font-bold text-white block">
                        Table Booking Adoption
                      </span>
                      <span className="text-[10px] text-muted">Customer reservation preference</span>
                    </div>

                    <div className="h-44 w-full my-auto">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={ZOMATO_PROJECT.chartData.tableBookingComparison}
                            cx="50%"
                            cy="50%"
                            innerRadius={36}
                            outerRadius={56}
                            paddingAngle={4}
                            dataKey="percentage"
                          >
                            <Cell fill="#7C3AED" />
                            <Cell fill="#06B6D4" />
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

                    <div className="space-y-1 text-xs text-muted">
                      <div className="flex justify-between">
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-purple-500" /> Yes (Avg ₹950)
                        </span>
                        <span className="font-bold text-white">18%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-cyan-500" /> No (Avg ₹420)
                        </span>
                        <span className="font-bold text-white">82%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 flex items-center justify-between border-t border-glass-border pt-4">
                  <span className="text-xs text-muted">
                    Showcases: KPI Cards, City Analysis, Locality Analysis, Rating Slicers, DAX
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-yellow-500/20 px-4 py-2 text-xs font-semibold text-yellow-300 border border-yellow-500/40 hover:bg-yellow-500/30 transition-colors"
                  >
                    <span>Request Power BI Dashboard Walkthrough</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* 2. TABLEAU DASHBOARD */}
            {activePlatform === "tableau" && (
              <motion.div
                key="tableau"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-glass-border bg-slate-950/80 p-6 sm:p-8 backdrop-blur-2xl shadow-glass-lg"
              >
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-glass-border pb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E97627]/20 text-[#E97627]">
                        <PieChart className="h-4 w-4" />
                      </span>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        Zomato Culinary & Spatial Exploration
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-muted">
                      Tableau Desktop • Geospatial Mapping • Parameters & Visual Discovery
                    </p>
                  </div>

                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-mono text-orange-300 border border-orange-500/30">
                    Dual-Axis & Heatmap Views
                  </span>
                </div>

                {/* Tableau Visual Grids */}
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Top Localities Restaurant Density */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                    <span className="text-xs font-bold text-white mb-1 block">
                      Localities Density & Average Rating
                    </span>
                    <span className="text-[10px] text-muted mb-4 block">
                      Sorted by restaurant density with dual-axis rating benchmark
                    </span>
                    <div className="h-56 w-full">
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
                          <Bar dataKey="restaurants" fill="#E97627" radius={[0, 6, 6, 0]} name="Restaurants" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Price Tier vs Rating */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                    <span className="text-xs font-bold text-white mb-1 block">
                      Cost for Two vs Customer Satisfaction
                    </span>
                    <span className="text-[10px] text-muted mb-4 block">
                      Higher spend correlates with elevated review ratings
                    </span>
                    <div className="h-56 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ZOMATO_PROJECT.chartData.costVsRating}>
                          <XAxis dataKey="priceRange" stroke="#64748B" fontSize={11} tickLine={false} />
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
                          <Bar dataKey="avgRating" fill="#06B6D4" radius={[6, 6, 0, 0]} name="Avg Rating" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 flex items-center justify-between border-t border-glass-border pt-4">
                  <span className="text-xs text-muted">
                    Showcases: Restaurant Analysis, Location Analysis, Ratings, Cuisine, Table Booking
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500/20 px-4 py-2 text-xs font-semibold text-orange-300 border border-orange-500/40 hover:bg-orange-500/30 transition-colors"
                  >
                    <span>View Tableau Dashboard</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* 3. EXCEL ANALYSIS */}
            {activePlatform === "excel" && (
              <motion.div
                key="excel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-glass-border bg-slate-950/80 p-6 sm:p-8 backdrop-blur-2xl shadow-glass-lg"
              >
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-glass-border pb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#217346]/20 text-emerald-400">
                        <FileSpreadsheet className="h-4 w-4" />
                      </span>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        Zomato Data Preparation & Pivot Analysis
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-muted">
                      Microsoft Excel • Data Organization • Formula Logic & Pivot Tables
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-300 border border-emerald-500/30">
                    Cleaned Master Spreadsheet
                  </span>
                </div>

                {/* Excel Mock Data Grid View */}
                <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/90 text-[11px] font-semibold text-muted uppercase">
                      <tr>
                        <th className="px-4 py-3 border-b border-slate-800 font-mono text-accent">ID</th>
                        <th className="px-4 py-3 border-b border-slate-800">Restaurant Name</th>
                        <th className="px-4 py-3 border-b border-slate-800">Locality</th>
                        <th className="px-4 py-3 border-b border-slate-800">Clean Rating</th>
                        <th className="px-4 py-3 border-b border-slate-800">Votes</th>
                        <th className="px-4 py-3 border-b border-slate-800">Approx Cost</th>
                        <th className="px-4 py-3 border-b border-slate-800">Online Order</th>
                        <th className="px-4 py-3 border-b border-slate-800">Table Booking</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-850 font-mono text-[11px]">
                      <tr className="hover:bg-slate-900/50">
                        <td className="px-4 py-2.5 text-muted">ZM-1021</td>
                        <td className="px-4 py-2.5 font-sans font-medium text-white">Truffles</td>
                        <td className="px-4 py-2.5">Koramangala</td>
                        <td className="px-4 py-2.5 text-yellow-400 font-bold">4.7</td>
                        <td className="px-4 py-2.5 text-slate-300">14,720</td>
                        <td className="px-4 py-2.5">₹900</td>
                        <td className="px-4 py-2.5 text-emerald-400">Yes</td>
                        <td className="px-4 py-2.5 text-muted">No</td>
                      </tr>
                      <tr className="hover:bg-slate-900/50">
                        <td className="px-4 py-2.5 text-muted">ZM-1022</td>
                        <td className="px-4 py-2.5 font-sans font-medium text-white">Onesta</td>
                        <td className="px-4 py-2.5">Indiranagar</td>
                        <td className="px-4 py-2.5 text-yellow-400 font-bold">4.4</td>
                        <td className="px-4 py-2.5 text-slate-300">8,210</td>
                        <td className="px-4 py-2.5">₹600</td>
                        <td className="px-4 py-2.5 text-emerald-400">Yes</td>
                        <td className="px-4 py-2.5 text-emerald-400">Yes</td>
                      </tr>
                      <tr className="hover:bg-slate-900/50">
                        <td className="px-4 py-2.5 text-muted">ZM-1023</td>
                        <td className="px-4 py-2.5 font-sans font-medium text-white">Corner House</td>
                        <td className="px-4 py-2.5">HSR Layout</td>
                        <td className="px-4 py-2.5 text-yellow-400 font-bold">4.6</td>
                        <td className="px-4 py-2.5 text-slate-300">6,490</td>
                        <td className="px-4 py-2.5">₹400</td>
                        <td className="px-4 py-2.5 text-emerald-400">Yes</td>
                        <td className="px-4 py-2.5 text-muted">No</td>
                      </tr>
                      <tr className="hover:bg-slate-900/50">
                        <td className="px-4 py-2.5 text-muted">ZM-1024</td>
                        <td className="px-4 py-2.5 font-sans font-medium text-white">Toit Brewpub</td>
                        <td className="px-4 py-2.5">Indiranagar</td>
                        <td className="px-4 py-2.5 text-yellow-400 font-bold">4.8</td>
                        <td className="px-4 py-2.5 text-slate-300">21,450</td>
                        <td className="px-4 py-2.5">₹1,500</td>
                        <td className="px-4 py-2.5 text-muted">No</td>
                        <td className="px-4 py-2.5 text-emerald-400">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Footer Action */}
                <div className="mt-6 flex items-center justify-between border-t border-glass-border pt-4">
                  <span className="text-xs text-muted">
                    Showcases: Dataset Preparation, Data Cleaning, Data Organization, Pivot Analysis, Charts
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors"
                  >
                    <span>View Excel Analysis</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
