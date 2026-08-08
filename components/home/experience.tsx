"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { internships } from "@/data/experience";

export function Experience() {
  const isReduced = useReducedMotion();

  // Reveal stagger animations for timeline items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isReduced ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: isReduced ? 0 : 20,
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

  // Dot size in px — used to compute the single rail offset
  // dot is h-2.5 w-2.5 = 10px. Half = 5px. Rail is w-px = 1px.
  // We place the rail column at left-0 with a fixed width of 1px,
  // then center the dot on that column via left-0 / -translate-x-0 approach.
  // Actually we use a dedicated 10px gutter column and center both inside it.

  return (
    <Section id="experience" className="border-t border-white/5 bg-background">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-4 block">
              Experience
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase">
              Internship History
            </h2>
          </div>

          {/*
            Timeline container strategy:
            - A 10px wide left gutter houses both the rail and every dot.
            - The rail is a single absolute 1px-wide line centered in the gutter
              (left: 4.5px ≈ 5px — center of 10px gutter).
            - Every dot is 10px × 10px, placed at left-0 in the gutter and
              centered with translate-x-0 — the dot's own left edge aligns with
              the gutter left edge, and since gutter = dot width, it fills it.
            - The rail runs from the center of the first dot to the center of the
              last dot: top-[5px] bottom-[5px] (half dot-height from each end).
            - Content sits to the right via pl-5 (20px) on each article, keeping
              the gutter and content fully separated.
          -->
          */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Single continuous timeline rail */}
            <div
              aria-hidden="true"
              className="absolute left-[4px] top-[5px] bottom-[5px] w-px bg-white/8"
            />

            <div className="flex flex-col">
              {internships.map((intern) => {
                const isBackend = intern.role.toLowerCase().includes("backend");

                return (
                  <motion.article
                    key={intern.id}
                    variants={itemVariants}
                    tabIndex={0}
                    className="relative group pb-12 last:pb-0 focus-visible:outline-none"
                  >
                    {/* Milestone dot — centered on the rail (left-0, 10×10px) */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[1px] h-2.5 w-2.5 rounded-full border-2 border-background bg-zinc-600 group-hover:bg-primary group-focus-visible:bg-primary group-hover:ring-4 group-hover:ring-primary/20 group-focus-visible:ring-4 group-focus-visible:ring-primary/20 transition-all duration-300 shrink-0"
                    />

                    {/* Content: offset right of the 10px gutter */}
                    <div className="pl-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-start">

                      {/* Left column: Duration + Company */}
                      <div className="md:col-span-4 flex flex-col gap-1">
                        <span className={`text-[10px] md:text-xs font-mono tracking-widest uppercase ${
                          isBackend ? "text-primary" : "text-muted-foreground"
                        }`}>
                          {intern.duration}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-foreground uppercase">
                          {intern.company}
                        </h3>
                      </div>

                      {/* Right column: Role + Responsibilities */}
                      <div className="md:col-span-8">
                        <h4 className={`text-base md:text-lg font-semibold mb-3 uppercase ${
                          isBackend ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {intern.role}
                        </h4>
                        <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground list-disc list-outside pl-4 leading-relaxed">
                          {intern.responsibilities.map((resp, i) => (
                            <li key={i} className="pl-1 break-words">
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
