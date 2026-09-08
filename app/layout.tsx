import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { BackgroundParticles } from "@/components/BackgroundParticles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elavarasan M | Data Analyst | Power BI | SQL | Tableau",
  description:
    "Elavarasan M is a Data Analyst focused on SQL, Power BI, Tableau, Excel, data visualization, dashboards, and business intelligence.",
  keywords: [
    "Elavarasan M",
    "Data Analyst",
    "Power BI Developer",
    "Tableau Analyst",
    "SQL Analyst",
    "Business Intelligence",
    "Data Visualization",
    "Excel Analyst",
    "Zomato Data Analysis",
    "DAX",
    "Power Query",
  ],
  authors: [{ name: "Elavarasan M" }],
  creator: "Elavarasan M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elavarasan.dev",
    title: "Elavarasan M | Data Analyst | Power BI | SQL | Tableau",
    description:
      "Elavarasan M is a Data Analyst focused on SQL, Power BI, Tableau, Excel, data visualization, dashboards, and business intelligence.",
    siteName: "Elavarasan M Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elavarasan M | Data Analyst | Power BI | SQL | Tableau",
    description:
      "Elavarasan M is a Data Analyst focused on SQL, Power BI, Tableau, Excel, data visualization, dashboards, and business intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.role,
    description: SITE_CONFIG.bio,
    knowsAbout: [
      "SQL",
      "Power BI",
      "Tableau",
      "Microsoft Excel",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Business Intelligence",
      "Data Visualization",
      "KPI Analysis",
    ],
    sameAs: [
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.github,
      SITE_CONFIG.socials.youtube,
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased text-white selection:bg-primary selection:text-white">
        <BackgroundParticles />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
