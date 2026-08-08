"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { internships } from "@/data/experience";

export function Experience() {
  const isReduced = useReducedMotion();

  // ── Active index: which internship the user is currently interacting with ──
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ── Refs for DOM measurement ──
  // containerRef: the relative wrapper that owns both rails
  const containerRef = useRef<HTMLDivElement>(null);
  // articleRefs: one ref per internship article
  const articleRefs = useRef<(HTMLElement | null)[]>([]);

  // ── Dot Y-centres relative to the containerRef top ──
  // dotCentres[i] = px offset from containerRef top to centre of dot i
  const [dotCentres, setDotCentres] = useState<number[]>([]);

  // Measure dot centres whenever layout may change
  const measureDots = useCallback(() => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const centres = articleRefs.current.map((el) => {
      if (!el) return 0;
      const dotEl = el.querySelector<HTMLElement>("[data-timeline-dot]");
      if (!dotEl) return 0;
      const rect = dotEl.getBoundingClientRect();
      // centre of dot relative to container top (add containerRef.scrollTop for scroll)
      return rect.top - containerTop + rect.height / 2;
    });
    setDotCentres(centres);
  }, []);

  useEffect(() => {
    measureDots();
    window.addEventListener("resize", measureDots);
    return () => window.removeEventListener("resize", measureDots);
  }, [measureDots]);

  // ── Progress rail height ──
  // When activeIndex is null → height 0 (rail invisible)
  // When activeIndex is i   → height = dotCentres[i] - dotCentres[0]
  // (from first dot centre to active dot centre)
  const progressHeight =
    activeIndex !== null && dotCentres.length > activeIndex && dotCentres.length > 0
      ? Math.max(0, dotCentres[activeIndex] - dotCentres[0])
      : 0;

  // ── Framer Motion variants for reveal ──
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: isReduced ? 0 : 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isReduced ? 0 : 20 },
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
            Timeline geometry
            ─────────────────
            Dot:  h-2.5 w-2.5 = 10 px square.  Centre = 5 px from article left.
            Rail: left-[4px] w-[2px]  → centre = 4px + 1px = 5 px.  ✓ aligned.

            Gray rail   : top-[5px] bottom-[5px]
                          starts at first dot centre, ends at last dot centre.

            Blue rail   : top-[5px], height animated by Framer Motion.
                          When activeIndex = 0 → height 0 (already at first dot).
                          When activeIndex = 1 → height = (dot[1].centre - dot[0].centre).
                          When activeIndex = 2 → height = (dot[2].centre - dot[0].centre).
                          When null            → height 0.
          */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* ── Layer 1: permanent gray background rail ── */}
            <div
              aria-hidden="true"
              className="absolute left-[4px] top-[5px] bottom-[5px] w-[2px] bg-zinc-800/80 pointer-events-none rounded-full"
            />

            {/* ── Layer 2: animated blue progress rail ── */}
            <motion.div
              aria-hidden="true"
              className="absolute left-[4px] top-[5px] w-[2px] bg-primary pointer-events-none rounded-full origin-top"
              animate={{ height: progressHeight }}
              transition={
                isReduced
                  ? { duration: 0 }
                  : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            />

            {/* ── Articles container (measured) ── */}
            <div ref={containerRef} className="flex flex-col">
              {internships.map((intern, index) => {
                const isActive = activeIndex === index;
                const isBackend = intern.role.toLowerCase().includes("backend");

                return (
                  <motion.article
                    key={intern.id}
                    ref={(el) => { articleRefs.current[index] = el as HTMLElement | null; }}
                    variants={itemVariants}
                    tabIndex={0}
                    className="relative pb-12 last:pb-0 focus-visible:outline-none"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onFocus={() => setActiveIndex(index)}
                    onBlur={(e) => {
                      // Only clear if focus truly left this article
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setActiveIndex(null);
                      }
                    }}
                  >
                    {/* Milestone dot */}
                    <span
                      data-timeline-dot
                      aria-hidden="true"
                      className={[
                        "absolute left-0 top-[1px] h-2.5 w-2.5 rounded-full border-2 border-background",
                        "transition-all duration-500 ease-out shrink-0",
                        isActive
                          ? "bg-primary ring-4 ring-primary/20"
                          : "bg-zinc-600",
                      ].join(" ")}
                    />

                    {/* Content */}
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
