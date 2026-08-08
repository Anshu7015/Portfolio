"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { skillsData } from "@/data/skills";

export function Skills() {
  const isReduced = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isReduced ? 0 : 0.1,
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

  // Shared class strings — identical interaction model for all four cards
  const cardBase =
    "rounded-xl border border-subtle bg-surface-elevated shadow-sm flex flex-col gap-4 " +
    "transition-all duration-500 ease-out group cursor-default outline-none " +
    "hover:border-primary/50 focus-visible:border-primary/50 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const dotBase =
    "h-1.5 w-1.5 rounded-full bg-zinc-600 " +
    "group-hover:bg-primary group-focus-visible:bg-primary " +
    "transition-colors duration-500 ease-out shrink-0";

  const headingBase =
    "font-semibold text-muted-foreground uppercase tracking-wider " +
    "group-hover:text-foreground group-focus-visible:text-foreground " +
    "transition-colors duration-500 ease-out";

  const backendCategory = skillsData.find((c) => c.id === "backend");
  const databasesCategory = skillsData.find((c) => c.id === "databases");
  const frontendCategory = skillsData.find((c) => c.id === "frontend");
  const toolsCategory = skillsData.find((c) => c.id === "tools");

  return (
    <Section id="skills" className="border-t border-white/5 bg-background">
      <Container>
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="mb-16">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-4 block">
              Skills &amp; Tech Stack
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase mb-4">
              Tech Stack
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Tools and technologies I use to build backend systems, applications, and web experiences.
            </p>
          </div>

          {/* Categories Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >

            {/* 1. Backend Development — full-width, same interaction as others */}
            {backendCategory && (
              <motion.article
                variants={itemVariants}
                tabIndex={0}
                className={`${cardBase} p-8`}
              >
                <div className="flex items-center gap-2">
                  <span className={dotBase} />
                  <h3 className={`text-sm md:text-base font-bold ${headingBase}`}>
                    {backendCategory.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {backendCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-900/60 border border-white/8 text-muted-foreground text-sm px-4 py-2 rounded-lg font-medium transition-colors duration-300 hover:border-white/15 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )}

            {/* 2. Databases + Frontend — two-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Databases */}
              {databasesCategory && (
                <motion.article
                  variants={itemVariants}
                  tabIndex={0}
                  className={`${cardBase} p-6`}
                >
                  <div className="flex items-center gap-2">
                    <span className={dotBase} />
                    <h3 className={`text-xs md:text-sm ${headingBase}`}>
                      {databasesCategory.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {databasesCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-zinc-900/40 border border-white/5 text-muted-foreground text-xs md:text-sm px-3.5 py-1.5 rounded-lg transition-colors duration-300 hover:border-white/10 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )}

              {/* Frontend */}
              {frontendCategory && (
                <motion.article
                  variants={itemVariants}
                  tabIndex={0}
                  className={`${cardBase} p-6`}
                >
                  <div className="flex items-center gap-2">
                    <span className={dotBase} />
                    <h3 className={`text-xs md:text-sm ${headingBase}`}>
                      {frontendCategory.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {frontendCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-zinc-900/40 border border-white/5 text-muted-foreground text-xs md:text-sm px-3.5 py-1.5 rounded-lg transition-colors duration-300 hover:border-white/10 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )}

            </div>

            {/* 3. Testing & Tools — full-width */}
            {toolsCategory && (
              <motion.article
                variants={itemVariants}
                tabIndex={0}
                className={`${cardBase} p-6`}
              >
                <div className="flex items-center gap-2">
                  <span className={dotBase} />
                  <h3 className={`text-xs md:text-sm ${headingBase}`}>
                    {toolsCategory.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {toolsCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-900/40 border border-white/5 text-muted-foreground text-xs md:text-sm px-3.5 py-1.5 rounded-lg transition-colors duration-300 hover:border-white/10 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )}

          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
