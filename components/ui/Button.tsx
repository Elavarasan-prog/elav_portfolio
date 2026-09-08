"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      icon,
      iconPosition = "left",
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs font-medium rounded-lg gap-1.5",
      md: "px-5 py-2.5 text-sm font-medium rounded-xl gap-2",
      lg: "px-6 py-3 text-base font-semibold rounded-xl gap-2.5",
    };

    const variantClasses = {
      primary:
        "bg-primary text-white hover:bg-primary-hover shadow-glow-primary border border-primary-light/30 active:scale-[0.98]",
      secondary:
        "bg-secondary text-white hover:bg-secondary-hover shadow-glow-secondary border border-secondary-light/30 active:scale-[0.98]",
      accent:
        "bg-accent text-slate-950 font-semibold hover:bg-accent-light shadow-glow-accent border border-accent-light/50 active:scale-[0.98]",
      outline:
        "border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800/60 hover:border-slate-500 hover:text-white active:scale-[0.98]",
      ghost:
        "text-slate-300 hover:text-white hover:bg-slate-800/50 active:scale-[0.98]",
      glass:
        "border border-glass-border bg-slate-900/60 text-slate-200 hover:text-white hover:bg-slate-800/80 hover:border-slate-600 backdrop-blur-md shadow-glass-sm active:scale-[0.98]",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: disabled ? 0 : -2 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed select-none",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
