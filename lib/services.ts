export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tools: string[];
  deliverables: string[];
  icon: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    tagline: "Explore datasets to unlock trends and growth opportunities",
    description: "Analyze datasets and identify trends, patterns, and insights that inform strategic business planning and operational optimization.",
    tools: ["SQL", "Microsoft Excel", "EDA Techniques"],
    deliverables: ["Trend reports", "Pattern identification", "Exploratory summary decks"],
    icon: "LineChart",
  },
  {
    id: "dashboard-development",
    title: "Dashboard Development",
    tagline: "High-impact interactive dashboards for leadership and ops",
    description: "Create interactive Power BI and Tableau dashboards with intuitive slicers, drill-through workflows, and clean visual hierarchy.",
    tools: ["Power BI", "Tableau", "DAX", "Calculated Fields"],
    deliverables: ["Interactive dashboards", "KPI tracking views", "Executive reporting views"],
    icon: "LayoutDashboard",
  },
  {
    id: "sql-data-analysis",
    title: "SQL Data Analysis",
    tagline: "Structured relational querying for high-precision reporting",
    description: "Write SQL queries for business analysis and reporting, including multi-table joins, subqueries, CTEs, and aggregated performance summaries.",
    tools: ["SQL", "CTEs", "Window Functions", "CASE Logic"],
    deliverables: ["Optimized query scripts", "Aggregated data marts", "Ad-hoc query reports"],
    icon: "Database",
  },
  {
    id: "data-cleaning",
    title: "Data Cleaning",
    tagline: "Turning raw, messy tables into reliable single sources of truth",
    description: "Clean and transform raw datasets into analysis-ready data by resolving missing values, deduplicating, standardizing formatting, and ensuring integrity.",
    tools: ["Power Query", "Excel Formulas", "SQL Filtering"],
    deliverables: ["Normalized datasets", "Data dictionary", "Validation audit logs"],
    icon: "Sparkles",
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    tagline: "Connecting data metrics to core business goals and KPIs",
    description: "Create KPI reports and business intelligence solutions that align operational metrics with strategic business goals and performance targets.",
    tools: ["Power BI", "DAX Measures", "Data Modeling"],
    deliverables: ["Star-schema models", "Metric trees", "Target vs Actual KPI trackers"],
    icon: "Briefcase",
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    tagline: "Clear, decision-focused charts that communicate instantly",
    description: "Create clear and decision-focused visualizations designed according to visual hierarchy and cognitive load principles to eliminate clutter.",
    tools: ["Tableau", "Power BI", "Color & Hierarchy Theory"],
    deliverables: ["Custom chart layouts", "Story-driven presentations", "Comparative visuals"],
    icon: "PieChart",
  },
];
