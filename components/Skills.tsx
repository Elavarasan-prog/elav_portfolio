"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES, SkillCategory, ProficiencyLevel } from "@/lib/skills";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  TrendingUp,
  Sparkles,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Database,
  BarChart3,
  PieChart,
  Sheet: FileSpreadsheet,
  TrendingUp,
};

const badgeLevelColors: Record<ProficiencyLevel, { bg: string; text: string; border: string }> = {
  Beginner: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  Intermediate: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
  Strong: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
  Advanced: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Competencies"
          title="Technical Skills"
          subtitle="Specialized capabilities in relational querying, business intelligence, data modeling, and interactive visualization."
        />

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              activeCategory === "all"
                ? "bg-primary text-white shadow-glow-primary"
                : "border border-glass-border bg-slate-900/60 text-muted hover:text-white hover:border-slate-700"
            )}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || Database;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-glow-primary"
                    : "border border-glass-border bg-slate-900/60 text-muted hover:text-white hover:border-slate-700"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => {
            const CategoryIcon = iconMap[category.icon] || Database;

            return (
              <GlassCard
                key={category.id}
                glow="primary"
                className="flex flex-col justify-between p-6 sm:p-7"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-glass-border pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 text-accent">
                        <CategoryIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-wide">
                          {category.title}
                        </h3>
                        <span className="text-[11px] text-muted">
                          {category.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {category.summary}
                  </p>

                  {/* Skills List with Proficiency Tag and Progress Bar */}
                  <div className="mt-6 space-y-4">
                    {category.skills.map((skill) => {
                      const levelStyle = badgeLevelColors[skill.level];

                      return (
                        <div key={skill.name} className="group flex flex-col space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                            <span
                              className={cn(
                                "rounded-full px-2 py-0.5 text-[10px] font-semibold border",
                                levelStyle.bg,
                                levelStyle.text,
                                levelStyle.border
                              )}
                            >
                              {skill.level}
                            </span>
                          </div>

                          {/* Progress indicator without fake 100% percentages */}
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.levelPercentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                            />
                          </div>

                          {skill.description && (
                            <span className="text-[10px] text-muted-dark group-hover:text-muted transition-colors">
                              {skill.description}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 border-t border-glass-border pt-3 flex items-center justify-between text-[11px] text-muted">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Check className="h-3 w-3" /> Production-Ready
                  </span>
                  <span className="text-slate-500 font-mono text-[10px]">
                    {category.skills.length} core competencies
                  </span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
