"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { projectsList } from "@/data/projects";

export function Projects() {
  const isReduced = useReducedMotion();

  // Viewport reveal stagger animations
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

  // Split list into primary backend (Featured) and secondary supporting
  const featuredProjects = projectsList.filter((p) => p.featured);
  const supportingProjects = projectsList.filter((p) => !p.featured);

  return (
    <Section id="work" className="border-t border-white/5 bg-background">
      <Container>
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-4 block">
            Selected Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
            A selection of projects I&apos;ve built across backend systems, APIs, web applications, and practical development utilities.
          </p>
        </div>

        {/* Tier 1 Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 mb-16"
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              tabIndex={0}
              className="rounded-xl border border-subtle bg-surface-elevated p-8 hover:border-strong transition-all duration-300 hover:scale-[1.002] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-default outline-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left side: Content block */}
                <div className={project.details ? "lg:col-span-7 flex flex-col justify-between" : "lg:col-span-12 flex flex-col gap-4"}>
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] md:text-xs font-mono tracking-widest text-primary uppercase flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors uppercase">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-zinc-900/60 border border-white/5 text-muted-foreground text-xs px-2.5 py-1 rounded-md font-medium tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right side: Key highlights columns - only if exists */}
                {project.details && project.details.length > 0 && (
                  <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-8 flex flex-col">
                    <h4 className="text-xs font-semibold tracking-wider text-foreground uppercase mb-4">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground list-disc list-outside pl-4 leading-relaxed">
                      {project.details.map((detail, index) => (
                        <li key={index} className="pl-1">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Tier 2 Supporting Projects */}
        {supportingProjects.length > 0 && (
          <div className="mt-20 md:mt-24">
            <h3 className="text-sm font-semibold tracking-widest text-foreground uppercase mb-5">
              Additional Projects
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {supportingProjects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={itemVariants}
                  tabIndex={0}
                  className="rounded-xl border border-subtle bg-surface-elevated p-6 hover:border-strong transition-all duration-300 hover:scale-[1.002] flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-default outline-none"
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] md:text-xs font-mono tracking-widest text-muted-foreground group-hover:text-zinc-300 transition-colors uppercase flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 group-hover:bg-zinc-400 transition-colors shrink-0" />
                      {project.category}
                    </span>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors uppercase">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        )}

      </Container>
    </Section>
  );
}
