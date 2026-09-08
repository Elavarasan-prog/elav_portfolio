"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  Activity,
  Calendar,
  Sparkles,
  Layers,
  ArrowUpRight,
  Filter,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Demo analytical data strictly for visualization preview
const revenueTrend = [
  { month: "Jan", revenue: 42000, target: 38000, orders: 1240 },
  { month: "Feb", revenue: 48000, target: 40000, orders: 1410 },
  { month: "Mar", revenue: 53000, target: 45000, orders: 1650 },
  { month: "Apr", revenue: 59000, target: 50000, orders: 1820 },
  { month: "May", revenue: 64000, target: 54000, orders: 1980 },
  { month: "Jun", revenue: 78000, target: 60000, orders: 2350 },
];

const categoryData = [
  { name: "Electronics", value: 38, color: "#4F46E5" },
  { name: "Apparel", value: 28, color: "#7C3AED" },
  { name: "Home & Kitchen", value: 20, color: "#06B6D4" },
  { name: "Books & Media", value: 14, color: "#22C55E" },
];

const floatingTechBadges = [
  { name: "Power BI", color: "from-amber-500/20 to-yellow-500/30 border-amber-500/40 text-amber-300", pos: "-top-5 -left-5" },
  { name: "Tableau", color: "from-orange-500/20 to-red-500/30 border-orange-500/40 text-orange-300", pos: "-top-6 right-8" },
  { name: "SQL", color: "from-blue-500/20 to-indigo-500/30 border-blue-500/40 text-blue-300", pos: "top-1/3 -left-7" },
  { name: "Excel", color: "from-emerald-500/20 to-green-500/30 border-emerald-500/40 text-emerald-300", pos: "top-1/2 -right-6" },
  { name: "DAX", color: "from-yellow-500/20 to-amber-500/30 border-yellow-500/40 text-yellow-300", pos: "-bottom-4 left-6" },
  { name: "Power Query", color: "from-cyan-500/20 to-sky-500/30 border-cyan-500/40 text-cyan-300", pos: "-bottom-5 right-12" },
  { name: "Git", color: "from-rose-500/20 to-red-500/30 border-rose-500/40 text-rose-300", pos: "bottom-1/3 -right-6" },
  { name: "GitHub", color: "from-slate-500/20 to-slate-400/30 border-slate-500/40 text-slate-300", pos: "bottom-1/4 -left-7" },
];

export function HeroDashboard() {
  const [activeTab, setActiveTab] = useState<"revenue" | "orders">("revenue");

  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl">
      {/* Floating Technology Badges */}
      {floatingTechBadges.map((badge, idx) => (
        <motion.div
          key={badge.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 * idx }}
          className={`absolute z-20 hidden sm:flex items-center gap-1.5 rounded-full border bg-slate-950/80 px-3 py-1 text-[11px] font-semibold tracking-wide backdrop-blur-md shadow-glass ${badge.color} ${badge.pos}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
          {badge.name}
        </motion.div>
      ))}

      {/* Main Glassmorphism Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{ y: -4 }}
        className="relative overflow-hidden rounded-2xl border border-glass-border bg-slate-950/70 p-5 sm:p-6 backdrop-blur-2xl shadow-glass-lg"
      >
        {/* Animated Card Border Glow */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 opacity-40 blur-sm" />

        {/* Dashboard Header Bar */}
        <div className="relative z-10 mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-glass-border pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 border border-primary/30 text-accent">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white tracking-wide">
                  BI Analytics Intelligence
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/30">
                  LIVE MODEL
                </span>
              </div>
              <p className="text-[11px] text-muted">
                Interactive Multi-Dimension Visual Explorer
              </p>
            </div>
          </div>

          {/* Tab Filter buttons */}
          <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900/90 p-1">
            <button
              onClick={() => setActiveTab("revenue")}
              className={`rounded px-2.5 py-1 text-xs font-medium transition-all ${
                activeTab === "revenue"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-white"
              }`}
            >
              Revenue View
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`rounded px-2.5 py-1 text-xs font-medium transition-all ${
                activeTab === "orders"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-white"
              }`}
            >
              Order Volume
            </button>
          </div>
        </div>

        {/* 4 KPI Cards Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5">
          {/* KPI 1: Revenue */}
          <div className="rounded-xl border border-glass-border bg-slate-900/50 p-3 backdrop-blur-md">
            <div className="flex items-center justify-between text-muted">
              <span className="text-[11px] font-medium">Total Revenue</span>
              <DollarSign className="h-3.5 w-3.5 text-primary-light" />
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-mono text-lg font-bold text-white">$78.4K</span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
              <TrendingUp className="h-3 w-3" />
              <span>+18.2%</span>
            </div>
          </div>

          {/* KPI 2: Total Orders */}
          <div className="rounded-xl border border-glass-border bg-slate-900/50 p-3 backdrop-blur-md">
            <div className="flex items-center justify-between text-muted">
              <span className="text-[11px] font-medium">Total Orders</span>
              <ShoppingBag className="h-3.5 w-3.5 text-secondary-light" />
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-mono text-lg font-bold text-white">2,350</span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
              <TrendingUp className="h-3 w-3" />
              <span>+12.4%</span>
            </div>
          </div>

          {/* KPI 3: Customers */}
          <div className="rounded-xl border border-glass-border bg-slate-900/50 p-3 backdrop-blur-md">
            <div className="flex items-center justify-between text-muted">
              <span className="text-[11px] font-medium">Customers</span>
              <Users className="h-3.5 w-3.5 text-accent-light" />
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-mono text-lg font-bold text-white">1,480</span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
              <TrendingUp className="h-3 w-3" />
              <span>+9.6%</span>
            </div>
          </div>

          {/* KPI 4: Growth */}
          <div className="rounded-xl border border-glass-border bg-slate-900/50 p-3 backdrop-blur-md">
            <div className="flex items-center justify-between text-muted">
              <span className="text-[11px] font-medium">Growth</span>
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-mono text-lg font-bold text-white">+24.5%</span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
              <span className="text-muted-light font-normal text-[9px]">MoM</span>
              <span>On Target</span>
            </div>
          </div>
        </div>

        {/* Charts Split View */}
        <div className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Main Area / Bar Chart (2 cols) */}
          <div className="rounded-xl border border-glass-border bg-slate-900/40 p-3.5 backdrop-blur-md lg:col-span-2">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-white">
                  {activeTab === "revenue" ? "Monthly Revenue Performance" : "Order Volume Trend"}
                </h4>
                <p className="text-[10px] text-muted">Actuals vs Target Benchmark</p>
              </div>
              <span className="flex items-center gap-1 text-[10px] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Dynamic Measure
              </span>
            </div>

            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                {activeTab === "revenue" ? (
                  <AreaChart data={revenueTrend} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="targetGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="#64748B" fontSize={10} tickLine={false} />
                    <YAxis stroke="#64748B" fontSize={10} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0F172A",
                        borderColor: "rgba(255,255,255,0.12)",
                        borderRadius: "8px",
                        fontSize: "11px",
                        color: "#fff",
                      }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#6366F1" strokeWidth={2} fillOpacity={1} fill="url(#revenueGrad)" />
                    <Area type="monotone" dataKey="target" stroke="#22D3EE" strokeWidth={1.5} strokeDasharray="3 3" fillOpacity={1} fill="url(#targetGrad)" />
                  </AreaChart>
                ) : (
                  <BarChart data={revenueTrend} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                    <XAxis dataKey="month" stroke="#64748B" fontSize={10} tickLine={false} />
                    <YAxis stroke="#64748B" fontSize={10} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0F172A",
                        borderColor: "rgba(255,255,255,0.12)",
                        borderRadius: "8px",
                        fontSize: "11px",
                        color: "#fff",
                      }}
                    />
                    <Bar dataKey="orders" fill="#7C3AED" radius={[4, 4, 0, 0]} />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          {/* Donut Chart: Category Share (1 col) */}
          <div className="flex flex-col justify-between rounded-xl border border-glass-border bg-slate-900/40 p-3.5 backdrop-blur-md">
            <div>
              <h4 className="text-xs font-semibold text-white">Segment Share</h4>
              <p className="text-[10px] text-muted">Category contribution</p>
            </div>

            <div className="relative my-auto h-28 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={45}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0F172A",
                      borderColor: "rgba(255,255,255,0.12)",
                      borderRadius: "8px",
                      fontSize: "11px",
                      color: "#fff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[10px] font-bold text-white">100%</span>
                <span className="text-[8px] text-muted">TOTAL</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 pt-1 text-[9px] text-muted">
              {categoryData.map((item) => (
                <div key={item.name} className="flex items-center gap-1 truncate">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Disclaimer / Label as required */}
        <div className="relative z-10 mt-4 flex items-center justify-between border-t border-glass-border pt-3 text-[10px] text-muted">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>Interactive Demo Dashboard Preview</span>
          </div>
          <span className="text-slate-400 italic">
            *Representative visual prototype
          </span>
        </div>
      </motion.div>
    </div>
  );
}
