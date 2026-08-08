"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

// Custom SVG definitions for brand icons (lucide-react v1.x has removed brand icons)
function GithubIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Hero() {
  const isReduced = useReducedMotion();

  // Unified staggers for text content
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isReduced ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: isReduced ? 0 : 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReduced ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Dedicated entrance variant for the visual anchor image
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: isReduced ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isReduced ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section className="min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Region: Visual Anchor Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center w-full order-1 lg:order-1"
          >
            <div className="relative w-full max-w-sm lg:max-w-none aspect-[4/5] rounded-xl overflow-hidden border border-white/5 bg-zinc-950/40">
              <Image
                src="/images/profile/anshu-hero.png"
                alt="Anshu Mehra"
                fill
                priority
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover object-left transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Overlay fade to blend bottom/edges into dark background */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/10 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Region: Technical Copy Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-2"
          >
            {/* Technical label (appears with image) */}
            <motion.span
              variants={itemVariants}
              className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-3 block"
            >
              Backend Developer
            </motion.span>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4 uppercase"
            >
              Anshu Mehra
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8"
            >
              Backend-focused software developer building reliable APIs, backend systems, and real-world applications.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <a
                href="#work"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-11 px-6 rounded-md text-sm font-medium transition-all shadow hover:bg-primary/90"
                )}
              >
                View My Work
              </a>
              <a
                href="https://github.com/Anshu7015"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 px-6 rounded-md text-sm font-medium border-subtle bg-surface-elevated text-foreground hover:bg-surface-secondary hover:border-strong transition-all"
                )}
              >
                GitHub
              </a>
            </motion.div>

            {/* Social Links (Professional priority, Instagram secondary) */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              <a
                href="https://github.com/Anshu7015"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="GitHub Account"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anshumehra7015"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:anshumehra0068726@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Email Anshu"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/anshumehra7015"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/50 hover:text-foreground/80 transition-colors p-1"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
