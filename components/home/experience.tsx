"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { internships } from "@/data/experience";

export function Experience() {
  const isReduced = useReducedMotion();

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
            Timeline geometry:
            ─────────────────
            The outer wrapper is `relative` and holds ONE single vertical rail.

            Dot diameter  = h-2.5 = 10 px  →  radius = 5 px
            Rail width    = w-px  = 1 px

            The dot sits at `left-0 top-[1px]` inside each article.
            Its horizontal centre = 0 + 5 px = 5 px from article left edge.

            The rail must share that same horizontal centre:
              left-[4px]  (4 px left edge + 0.5 px half-width ≈ 4.5 px centre)
            Close enough; using left-[4.5px] is not a valid Tailwind value, so
            we use left-[4px] with w-[2px] so its centre = 5 px exactly.

            Rail vertical span:
              top-[5px]    → starts at centre of first dot
              bottom-[5px] → ends   at centre of last dot

            The inner flex-col wrapper has NO padding-bottom on its last child
            (last:pb-0 is on each article), so the container naturally ends at
            the last article's bottom, and bottom-[5px] on the rail stops 5 px
            above that — exactly at the last dot's centre.
          */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Single continuous timeline rail — gray, no glow */}
            <div
              aria-hidden="true"
              className="absolute left-[4px] top-[5px] bottom-[5px] w-[2px] bg-zinc-800/80 pointer-events-none"
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
                    {/* Milestone dot — gray by default, blue only on hover/focus of THIS article */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[1px] h-2.5 w-2.5 rounded-full border-2 border-background bg-zinc-600 group-hover:bg-primary group-focus-visible:bg-primary group-hover:ring-4 group-hover:ring-primary/20 group-focus-visible:ring-4 group-focus-visible:ring-primary/20 transition-all duration-500 ease-out shrink-0"
                    />

                    {/* Content — offset right of the 10 px rail gutter */}
                    <div className="pl-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-start">

                      {/* Left: Duration + Company */}
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

                      {/* Right: Role + Responsibilities */}
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
