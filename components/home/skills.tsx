"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { skillsData } from "@/data/skills";

export function Skills() {
  const isReduced = useReducedMotion();

  // progressive viewport entry animations
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

  // Extract individual categories for custom visual layouts
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
              Skills & Tech Stack
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase mb-4">
              Tech Stack
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Tools and technologies I use to build backend systems, applications, and web experiences.
            </p>
          </div>

          {/* Categories Grid Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            
            {/* 1. Backend Development (Prominent full-width block at the top) */}
            {backendCategory && (
              <motion.article
                variants={itemVariants}
                className="rounded-xl border border-primary/20 bg-surface-elevated p-8 shadow-sm relative overflow-hidden"
              >
                {/* Subtle visual accent corner light highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex items-center gap-2">
                    {/* Pulsing electric blue dot to indicate primary focus */}
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 animate-pulse" />
                    <h3 className="text-sm md:text-base font-bold text-foreground uppercase tracking-wider">
                      {backendCategory.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {backendCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-zinc-900/60 border border-primary/30 text-foreground text-sm px-4 py-2 rounded-lg font-medium transition-colors hover:border-primary/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )}

            {/* 2. Databases & Frontend Grid (Middle row split) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Databases */}
              {databasesCategory && (
                <motion.article
                  variants={itemVariants}
                  className="rounded-xl border border-subtle bg-surface-elevated p-6 shadow-sm flex flex-col gap-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 shrink-0" />
                    <h3 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {databasesCategory.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {databasesCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-zinc-900/40 border border-white/5 text-muted-foreground text-xs md:text-sm px-3.5 py-1.5 rounded-lg transition-colors hover:border-white/10 hover:text-foreground"
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
                  className="rounded-xl border border-subtle bg-surface-elevated p-6 shadow-sm flex flex-col gap-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 shrink-0" />
                    <h3 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {frontendCategory.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {frontendCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-zinc-900/40 border border-white/5 text-muted-foreground text-xs md:text-sm px-3.5 py-1.5 rounded-lg transition-colors hover:border-white/10 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )}

            </div>

            {/* 3. Testing & Tools (Full-width bottom row) */}
            {toolsCategory && (
              <motion.article
                variants={itemVariants}
                className="rounded-xl border border-subtle bg-surface-elevated p-6 shadow-sm flex flex-col gap-4"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 shrink-0" />
                  <h3 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {toolsCategory.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {toolsCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-900/40 border border-white/5 text-muted-foreground text-xs md:text-sm px-3.5 py-1.5 rounded-lg transition-colors hover:border-white/10 hover:text-foreground"
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
