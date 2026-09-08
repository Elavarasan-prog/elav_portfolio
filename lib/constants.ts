export interface NavItem {
  label: string;
  href: string;
}

export const SITE_CONFIG = {
  name: "Elavarasan M",
  role: "Data Analyst",
  experienceLevel: "Fresher / Entry-Level Data Analyst",
  bio: "I transform raw data into meaningful insights, interactive dashboards, and data-driven solutions that help businesses make smarter decisions.",
  typingTitles: [
    "Data Analyst",
    "Power BI Developer",
    "SQL Analyst",
    "Tableau Enthusiast",
    "Excel Analyst",
    "Business Intelligence Enthusiast",
  ],
  socials: {
    // Editable configuration fields for Elavarasan's actual profiles
    linkedin: "https://linkedin.com/in/elavarasan-m",
    github: "https://github.com/Elavarasan-prog",
    youtube: "https://youtube.com/@elavarasan-m",
    email: "elavarasan.analyst@gmail.com",
    projectRepo: "https://github.com/Elavarasan-prog/elav_portfolio",
  },
  resumePath: "/resume.pdf",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const CORE_TOOLS = [
  { name: "Power BI", color: "#F2C811", category: "BI & Dashboards" },
  { name: "Tableau", color: "#E97627", category: "Data Visualization" },
  { name: "SQL", color: "#336791", category: "Database & Querying" },
  { name: "Microsoft Excel", color: "#217346", category: "Spreadsheets & Analysis" },
  { name: "DAX", color: "#EAB308", category: "Formulas & Calculations" },
  { name: "Power Query", color: "#06B6D4", category: "ETL & Transformation" },
];
