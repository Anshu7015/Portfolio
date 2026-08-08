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

          {/* Timeline List Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l border-white/5 pl-6 md:pl-8 space-y-12 md:space-y-16"
          >
            {internships.map((intern) => {
              const isBackend = intern.role.toLowerCase().includes("backend");
              
              return (
                <motion.article
                  key={intern.id}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline Dot Indicator */}
                  <span
                    className={`absolute -left-[31px] md:-left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-background transition-colors duration-300 ${
                      isBackend
                        ? "bg-primary group-hover:bg-blue-400"
                        : "bg-zinc-600 group-hover:bg-zinc-500"
                    }`}
                  />

                  {/* Content Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    
                    {/* Left: Duration and Company Name */}
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

                    {/* Right: Role & Responsibility Bullet Points */}
                    <div className="md:col-span-8">
                      <h4 className={`text-base md:text-lg font-semibold mb-4 uppercase ${
                        isBackend ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {intern.role}
                      </h4>
                      <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground list-disc list-outside pl-4 leading-relaxed">
                        {intern.responsibilities.map((resp, index) => (
                          <li key={index} className="pl-1">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
