export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    skills: ["Java", "PHP", "Laravel", "Node.js", "Express.js", "NestJS"]
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["MySQL", "MongoDB"]
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"]
  },
  {
    id: "tools",
    title: "Testing & Tools",
    skills: ["Git", "GitHub", "Postman", "PHPUnit", "Manual Testing"]
  }
];
