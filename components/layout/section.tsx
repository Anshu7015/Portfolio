import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Section({
  children,
  className,
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn("py-16 md:py-24 lg:py-32 w-full relative", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
