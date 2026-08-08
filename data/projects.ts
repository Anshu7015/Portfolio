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
    description: "A backend system for an eSports platform, handling role-based slot booking, manager approval workflows, payments, and platform integrations. The system includes JWT-based authentication, Razorpay payment processing, Google Play purchase verification, Redis-backed functionality, scheduled jobs, and email notifications.",
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
    description: "A backend-focused event management system built around server-side business logic and structured application workflows. The project focuses on handling event-related operations through backend functionality and APIs.",
    category: "backend",
    featured: true
  },
  {
    id: "lsp",
    title: "LSP",
    description: "A Local Service Provider platform designed to connect users with service providers through a backend-driven booking and discovery system. It includes provider approval, booking requests, ratings, availability management, and pincode-based provider search, supported by a NestJS backend, MongoDB database, and JWT-secured REST APIs.",
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
    description: "A responsive frontend project recreating the core Netflix browsing experience. The project focuses on building a familiar streaming-platform interface with responsive layouts and structured presentation of entertainment content.",
    category: "frontend",
    featured: false
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description: "A lightweight web utility for generating randomized passwords through a simple and focused interface. The project is designed around quickly creating stronger password combinations for everyday use.",
    category: "frontend",
    featured: false
  }
];
