"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  category?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "accent" | "glow";
  className?: string;
}

export function SkillBadge({
  name,
  category,
  size = "md",
  variant = "default",
  className,
}: SkillBadgeProps) {
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3.5 py-1.5 text-xs sm:text-sm",
    lg: "px-4 py-2 text-sm sm:text-base",
  };

  const variantClasses = {
    default:
      "border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white hover:bg-slate-800/80",
    primary:
      "border-indigo-500/30 bg-indigo-950/40 text-indigo-300 hover:border-indigo-500/60 hover:bg-indigo-900/50 hover:text-white",
    accent:
      "border-cyan-500/30 bg-cyan-950/40 text-cyan-300 hover:border-cyan-500/60 hover:bg-cyan-900/50 hover:text-white",
    glow:
      "border-indigo-500/40 bg-gradient-to-r from-indigo-950/60 to-purple-950/60 text-white shadow-glow-primary hover:shadow-glow-accent",
  };

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xl border font-medium backdrop-blur-md transition-colors shadow-sm",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
      <span>{name}</span>
      {category && (
        <span className="text-[10px] text-muted-dark uppercase tracking-wider ml-1">
          • {category}
        </span>
      )}
    </motion.div>
  );
}
