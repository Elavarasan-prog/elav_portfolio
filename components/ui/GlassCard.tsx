"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  glow?: "none" | "primary" | "secondary" | "accent";
  hoverEffect?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ glow = "none", hoverEffect = true, className, children, ...props }, ref) => {
    const glowClasses = {
      none: "",
      primary: "hover:shadow-glow-primary hover:border-primary-light/40",
      secondary: "hover:shadow-glow-secondary hover:border-secondary-light/40",
      accent: "hover:shadow-glow-accent hover:border-accent-light/40",
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25 } } : undefined}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-glass-border bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 shadow-glass",
          hoverEffect && "hover:border-slate-700/80 hover:bg-slate-900/80",
          glowClasses[glow],
          className
        )}
        {...props}
      >
        {/* Subtle interior gradient reflection */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-white/[0.04] to-transparent blur-2xl" />
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
