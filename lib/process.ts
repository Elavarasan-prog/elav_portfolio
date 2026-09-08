export interface ProcessStage {
  step: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tools: string[];
  deliverable: string;
  icon: string;
}

export const ANALYTICS_PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "Understand",
    shortDesc: "Understand the business problem and objective.",
    fullDesc: "Frame clear business questions, determine success metrics (KPIs), understand stakeholder priorities, and scope analytical deliverables.",
    tools: ["Problem Framing", "KPI Definition", "Stakeholder Alignment"],
    deliverable: "Analytics Objective & KPI Framework",
    icon: "Target",
  },
  {
    step: "02",
    title: "Collect",
    shortDesc: "Gather relevant data.",
    fullDesc: "Extract, ingest, and consolidate raw datasets from transactional databases, spreadsheets, CSV files, and operational systems into a unified workspace.",
    tools: ["SQL Ingestion", "Excel Workbooks", "Power Query"],
    deliverable: "Consolidated Raw Data Repository",
    icon: "FolderDown",
  },
  {
    step: "03",
    title: "Clean",
    shortDesc: "Remove duplicates, missing values, errors, and inconsistencies.",
    fullDesc: "Audit data quality, remove duplicate records, impute or filter missing values, correct inconsistent casing/formats, and enforce schema integrity.",
    tools: ["Power Query", "Excel Clean & Trim", "SQL WHERE & CASE"],
    deliverable: "Analysis-Ready Cleaned Dataset",
    icon: "Sparkles",
  },
  {
    step: "04",
    title: "Analyze",
    shortDesc: "Use SQL and Excel to identify patterns and trends.",
    fullDesc: "Perform exploratory data analysis (EDA), aggregate performance metrics with GROUP BY and Pivot Tables, segment key dimensions, and uncover actionable trends.",
    tools: ["SQL CTEs & JOINs", "Excel Pivot Tables", "XLOOKUP / Formulas"],
    deliverable: "Summary Aggregations & Trend Findings",
    icon: "SearchCode",
  },
  {
    step: "05",
    title: "Visualize",
    shortDesc: "Create dashboards using Power BI and Tableau.",
    fullDesc: "Design intuitive visual layouts, build star-schema data models, write custom DAX/LOD measures, and implement interactive slicers, drill-downs, and filters.",
    tools: ["Power BI Desktop", "Tableau Desktop", "DAX & Calculated Fields"],
    deliverable: "Interactive BI Dashboards",
    icon: "LayoutDashboard",
  },
  {
    step: "06",
    title: "Communicate",
    shortDesc: "Convert analysis into meaningful business insights.",
    fullDesc: "Synthesize visual findings into clear business takeaways, identify growth opportunities, highlight operational bottlenecks, and present recommendations to stakeholders.",
    tools: ["Data Storytelling", "Executive Summaries", "KPI Walkthroughs"],
    deliverable: "Business Recommendations & Action Plan",
    icon: "MessageSquareText",
  },
];
