export interface Internship {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export const internships: Internship[] = [
  {
    id: "aspia",
    company: "ASPIA Infotech",
    role: "Backend Developer Intern",
    duration: "4 MONTHS",
    responsibilities: [
      "Worked on the company's main software/product.",
      "Implemented backend features and application functionality.",
      "Wrote test cases (TCs) for implemented functionality.",
      "Performed manual/basic testing and validation."
    ]
  },
  {
    id: "techwaalaa",
    company: "Techwaalaa",
    role: "Backend Developer Intern",
    duration: "6 MONTHS",
    responsibilities: [
      "Worked on the backend of an e-commerce website.",
      "Implemented backend functionality and business logic.",
      "Worked with APIs and database-driven application features."
    ]
  },
  {
    id: "prodeskit",
    company: "ProdeskIT",
    role: "Frontend Intern",
    duration: "1 MONTH",
    responsibilities: [
      "Created responsive landing pages.",
      "Developed and maintained blog pages.",
      "Focused on clean layouts and responsive frontend implementation."
    ]
  }
];
