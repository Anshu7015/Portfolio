export interface Project {
  id: string;
  title: string;
  description: string;
  details?: string[];
  technologies?: string[];
  category: "backend" | "fullstack" | "frontend";
  featured: boolean;
}

export const projectsList: Project[] = [
  {
    id: "spine",
    title: "Spine",
    description: "An eSports-related backend system project.",
    details: [
      "Role-based slot booking",
      "Admin approval of managers",
      "Razorpay payment integration",
      "Google Play purchase verification",
      "JWT authentication",
      "Nodemailer",
      "Cron jobs",
      "Redis"
    ],
    technologies: ["JWT", "Redis", "Razorpay", "Nodemailer", "Google Play API"],
    category: "backend",
    featured: true
  },
  {
    id: "event-management",
    title: "Event Management Backend",
    description: "A backend-focused project handling event management business logic.",
    category: "backend",
    featured: true
  },
  {
    id: "lsp",
    title: "LSP",
    description: "A Local Service Provider platform.",
    details: [
      "Provider approval",
      "Booking requests",
      "Ratings",
      "Availability",
      "Pincode-based search"
    ],
    technologies: ["MERN", "NestJS", "MongoDB", "JWT"],
    category: "fullstack",
    featured: true
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    description: "A responsive web frontend cloning the user interface of Netflix.",
    category: "frontend",
    featured: false
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description: "A lightweight tool to generate secure, randomized passwords.",
    category: "frontend",
    featured: false
  }
];
