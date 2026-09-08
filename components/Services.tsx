"use client";

import React from "react";
import { SERVICES_LIST } from "@/lib/services";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import {
  LineChart,
  LayoutDashboard,
  Database,
  Sparkles,
  Briefcase,
  PieChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  LineChart,
  LayoutDashboard,
  Database,
  Sparkles,
  Briefcase,
  PieChart,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What I Deliver"
          title="Analytics & BI Services"
          subtitle="Specialized business intelligence and data solutions that translate complex data into business value."
        />

        {/* 6 Premium Service Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = iconMap[service.icon] || LineChart;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <GlassCard
                  glow="primary"
                  className="flex h-full flex-col justify-between p-6 sm:p-7 group hover:border-indigo-500/50"
                >
                  <div>
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between border-b border-glass-border pb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary/30 to-accent/20 border border-primary/40 text-accent group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-950 px-2.5 py-1 font-mono text-[10px] text-muted border border-slate-800">
                        SERVICE 0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="mt-4 text-xl font-bold text-white group-hover:text-accent-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-accent">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-5 space-y-1.5 border-t border-glass-border pt-4">
                      <span className="text-[10px] font-semibold text-muted uppercase tracking-wider block mb-1">
                        Key Deliverables
                      </span>
                      {service.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Tools and CTA */}
                  <div className="mt-6 border-t border-glass-border pt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-indigo-300 border border-slate-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-white transition-colors"
                      aria-label={`Inquire about ${service.title}`}
                    >
                      <span>Inquire</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
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
