"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

// Custom SVG definitions for brand icons (lucide-react v1.x lacks brand icons)
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

export function Contact() {
  const isReduced = useReducedMotion();

  // Scroll entrance staggers
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

  return (
    <Section id="contact" className="border-t border-white/5 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Label */}
            <motion.span
              variants={itemVariants}
              className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase"
            >
              Get In Touch
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase max-w-xl leading-tight"
            >
              Let&apos;s build something useful.
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed mb-6"
            >
              I&apos;m open to backend development opportunities, internships, and interesting projects where I can contribute to building reliable software.
            </motion.p>

            {/* Email CTA button */}
            <motion.div variants={itemVariants}>
              <a
                href="mailto:anshumehra0068726@gmail.com"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 px-8 rounded-md text-sm font-semibold transition-all shadow hover:bg-primary/90"
                )}
              >
                Email Me
              </a>
            </motion.div>

            {/* Direct Coordinates (Muted, Secondary) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-6 text-sm text-muted-foreground font-mono"
            >
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-500" />
                <span>anshumehra0068726@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zinc-500" />
                <span>+91-9520589655</span>
              </div>
            </motion.div>

            {/* Social handles */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5 mt-4"
            >
              <a
                href="https://github.com/Anshu7015"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                aria-label="GitHub Account"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anshumehra7015"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/anshumehra7015"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/50 hover:text-foreground/80 transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
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
