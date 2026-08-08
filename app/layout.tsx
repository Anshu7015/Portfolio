import type { Metadata } from "next";
import { Inter, Satisfy } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Anshu Mehra — Backend Developer",
  description: "Portfolio of Anshu Mehra, a backend-focused software developer building APIs, backend systems, and real-world applications.",
  authors: [{ name: "Anshu Mehra" }],
  keywords: [
    "Anshu Mehra",
    "Backend Developer",
    "Software Engineer",
    "Java",
    "PHP",
    "Laravel",
    "NestJS",
    "eCommerce Backend",
    "API Developer"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Anshu7015",
    title: "Anshu Mehra — Backend Developer",
    description: "Portfolio of Anshu Mehra, a backend-focused software developer building APIs, backend systems, and real-world applications.",
    siteName: "Anshu Mehra Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshu Mehra — Backend Developer",
    description: "Portfolio of Anshu Mehra, a backend-focused software developer building APIs, backend systems, and real-world applications.",
    creator: "@Anshu7015"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${satisfy.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
