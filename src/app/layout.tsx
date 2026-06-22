import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhishek-kumar-ai-portfolio.vercel.app"),
  title: {
    default: "Abhishek Kumar | AI/ML Engineer, Data Analyst & Generative AI Developer",
    template: "%s | Abhishek Kumar"
  },
  description:
    "Portfolio of Abhishek Kumar, an AI/ML Engineer, Data Analyst, and Generative AI Developer building ML systems, ERP analytics pipelines, Power BI dashboards, and LLM applications.",
  keywords: [
    "Abhishek Kumar",
    "AI ML Engineer",
    "Data Analyst",
    "Generative AI Developer",
    "LangChain Developer",
    "Machine Learning Portfolio",
    "Power BI",
    "Python",
    "Mistral AI",
    "AI Agents"
  ],
  authors: [{ name: "Abhishek Kumar" }],
  creator: "Abhishek Kumar",
  openGraph: {
    title: "Abhishek Kumar | AI/ML Engineer & Generative AI Developer",
    description:
      "Production-minded AI, ML, GenAI, and data analytics portfolio with projects in document verification, agentic AI, chatbots, NLP, and forecasting.",
    url: "https://abhishek-kumar-ai-portfolio.vercel.app",
    siteName: "Abhishek Kumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Kumar AI ML Engineer portfolio preview"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kumar | AI/ML Engineer & Generative AI Developer",
    description:
      "AI/ML, data analytics, and GenAI portfolio focused on applied systems and business impact.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
