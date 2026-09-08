"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Youtube,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Work With Data"
          subtitle="Have a dataset, dashboard idea, or business problem? Let's turn your data into meaningful insights."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="flex flex-col space-y-8 lg:col-span-5">
            <GlassCard glow="accent" className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Open to entry-level Data Analyst positions, BI dashboard projects, and collaborative data initiatives.
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <a
                  href={`mailto:${SITE_CONFIG.socials.email}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 text-slate-300 hover:border-primary/50 hover:text-white transition-colors"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-accent">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-muted uppercase font-mono">Email Address</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate">
                      {SITE_CONFIG.socials.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 text-slate-300">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted uppercase font-mono">Response Time</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Within 24 Hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels Links */}
              <div className="mt-8 border-t border-glass-border pt-6">
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                  Connect on Social Platforms
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={SITE_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={SITE_CONFIG.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={SITE_CONFIG.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-red-500/60 hover:bg-red-500/10 transition-colors"
                  >
                    <Youtube className="h-4 w-4 text-red-500" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard glow="primary" className="p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="mt-2 text-sm text-slate-300 max-w-md">
                    Thank you for reaching out. I have received your message and will review your note promptly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-white hover:bg-primary-hover transition-colors"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-slate-200 mb-1"
                      >
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="John Doe"
                        className={cn(
                          "w-full rounded-xl border bg-slate-950/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors",
                          errors.name ? "border-red-500/80" : "border-slate-800 focus:border-primary"
                        )}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-slate-200 mb-1"
                      >
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="john@example.com"
                        className={cn(
                          "w-full rounded-xl border bg-slate-950/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors",
                          errors.email ? "border-red-500/80" : "border-slate-800 focus:border-primary"
                        )}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-slate-200 mb-1"
                    >
                      Subject <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="Data Analyst Opportunity / Dashboard Project"
                      className={cn(
                        "w-full rounded-xl border bg-slate-950/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors",
                        errors.subject ? "border-red-500/80" : "border-slate-800 focus:border-primary"
                      )}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-200 mb-1"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Describe your dataset, business problem, or role requirements..."
                      className={cn(
                        "w-full rounded-xl border bg-slate-950/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-y",
                        errors.message ? "border-red-500/80" : "border-slate-800 focus:border-primary"
                      )}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-glow-primary hover:bg-primary-hover active:scale-[0.99] disabled:opacity-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
