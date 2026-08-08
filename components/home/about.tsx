"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/container";
import { Section } from "../layout/section";

const HIGHLIGHTS = [
  "Backend Development",
  "APIs & Server-side Systems",
  "Database-driven Applications",
  "Testing & Validation",
];

export function About() {
  const isReduced = useReducedMotion();

  // Reveal animation on scroll viewport entrance
  const revealVariants = {
    hidden: {
      opacity: 0,
      y: isReduced ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReduced ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section id="about" className="border-t border-white/5 bg-background">
      <Container>
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Title & Natural Bio Copy */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 uppercase">
              Engineering Focus
            </h2>
            <div className="text-muted-foreground space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                I&apos;m a backend-focused software developer interested in building
                reliable APIs, backend systems, and practical web applications.
                I enjoy working with server-side logic, databases, application
                architecture, and turning requirements into functional software.
              </p>
              <p>
                My experience includes backend development, API-driven
                applications, e-commerce systems, product development, testing,
                and manual validation.
              </p>
            </div>
          </div>

          {/* Right Column: Technical & Focus Highlights inside a card */}
          <div className="lg:col-span-5 flex flex-col lg:pt-16">
            <div className="rounded-xl border border-subtle bg-surface-elevated p-8 shadow-sm">
              <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-6">
                Technical Focus Areas
              </h3>
              <ul className="space-y-4">
                {HIGHLIGHTS.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm md:text-base text-muted-foreground"
                  >
                    {/* Minimal colored dot highlight matching electric blue */}
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
