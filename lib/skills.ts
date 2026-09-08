export type ProficiencyLevel = "Beginner" | "Intermediate" | "Strong" | "Advanced";

export interface SkillItem {
  name: string;
  level: ProficiencyLevel;
  levelPercentage: number; // for visual progress bar (e.g. 75, 85, 90 - realistic, not fake 100%)
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  badge: string;
  summary: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "sql",
    title: "SQL",
    icon: "Database",
    badge: "Relational Databases",
    summary: "Writing structured queries to extract, transform, aggregate, and analyze data for business intelligence.",
    skills: [
      { name: "SELECT, WHERE, ORDER BY", level: "Advanced", levelPercentage: 90, description: "Data filtering, sorting, and conditional querying" },
      { name: "GROUP BY & Aggregations", level: "Advanced", levelPercentage: 90, description: "SUM, AVG, COUNT, MIN, MAX metric summaries" },
      { name: "JOINs (Inner, Left, Right, Full)", level: "Strong", levelPercentage: 85, description: "Combining multiple relational tables accurately" },
      { name: "Subqueries & CTEs", level: "Strong", levelPercentage: 82, description: "Modular queries with Common Table Expressions" },
      { name: "CASE Statements", level: "Strong", levelPercentage: 85, description: "Conditional logic, bucket categorization, custom KPIs" },
      { name: "Window Functions", level: "Intermediate", levelPercentage: 78, description: "ROW_NUMBER, RANK, DENSE_RANK, moving calculations" },
      { name: "Data Filtering & Business Queries", level: "Strong", levelPercentage: 86, description: "Translating business questions into SQL queries" },
    ],
  },
  {
    id: "power-bi",
    title: "Power BI",
    icon: "BarChart3",
    badge: "Business Intelligence",
    summary: "Developing interactive, executive-ready dashboards with custom DAX measures and dimensional data models.",
    skills: [
      { name: "Power BI Desktop", level: "Strong", levelPercentage: 88, description: "Canvas design, formatting, and responsive layouts" },
      { name: "Power Query ETL", level: "Strong", levelPercentage: 85, description: "Data extraction, cleaning, and transformation" },
      { name: "DAX Measures & Calculations", level: "Strong", levelPercentage: 82, description: "CALCULATE, FILTER, RELATED, time intelligence" },
      { name: "Data Modeling & Relationships", level: "Strong", levelPercentage: 84, description: "Star schema, 1-to-many, bidirectional relationships" },
      { name: "Interactive Slicers & Filters", level: "Advanced", levelPercentage: 90, description: "Dynamic slicers, page/report-level filtering" },
      { name: "Drill Through & Tooltips", level: "Intermediate", levelPercentage: 78, description: "Contextual drill-throughs and report page tooltips" },
      { name: "KPI Cards & Visualizations", level: "Advanced", levelPercentage: 90, description: "Cards, multi-row KPIs, customized visual styling" },
    ],
  },
  {
    id: "tableau",
    title: "Tableau",
    icon: "PieChart",
    badge: "Visual Analytics",
    summary: "Designing intuitive visual stories, geospatial maps, and exploratory dashboards for fast business discovery.",
    skills: [
      { name: "Tableau Desktop", level: "Strong", levelPercentage: 84, description: "Worksheet creation, dashboard composition, story points" },
      { name: "Calculated Fields", level: "Strong", levelPercentage: 82, description: "Logical, string, date, and aggregation formulas" },
      { name: "Parameters & Interactive Filters", level: "Strong", levelPercentage: 80, description: "User-driven dynamic metrics and threshold toggles" },
      { name: "Dashboard Design & Layouts", level: "Strong", levelPercentage: 85, description: "Tiled and floating containers, clean visual hierarchy" },
      { name: "Interactive Charts & Maps", level: "Strong", levelPercentage: 82, description: "Dual-axis charts, heatmaps, geographical mapping" },
      { name: "Business Analysis & Formatting", level: "Intermediate", levelPercentage: 78, description: "Formatting clarity, color consistency, business KPIs" },
    ],
  },
  {
    id: "excel",
    title: "Microsoft Excel",
    icon: "Sheet",
    badge: "Data Preparation & Analysis",
    summary: "Rapid data munging, formula-driven modeling, Pivot reporting, and exploratory spreadsheet analytics.",
    skills: [
      { name: "Pivot Tables & Pivot Charts", level: "Advanced", levelPercentage: 92, description: "Multidimensional summaries, grouping, and slicers" },
      { name: "XLOOKUP & VLOOKUP", level: "Advanced", levelPercentage: 92, description: "Exact matching, fuzzy matching, dynamic array lookups" },
      { name: "INDEX & MATCH", level: "Strong", levelPercentage: 88, description: "Flexible two-way matrix lookups" },
      { name: "SUMIFS & COUNTIFS", level: "Advanced", levelPercentage: 90, description: "Multi-condition numerical aggregation and counts" },
      { name: "IF & Logical Functions", level: "Advanced", levelPercentage: 90, description: "Nested IFs, AND, OR, SWITCH logic" },
      { name: "Conditional Formatting", level: "Strong", levelPercentage: 88, description: "Heatmaps, data bars, KPI icon sets" },
      { name: "Data Cleaning & Organization", level: "Advanced", levelPercentage: 90, description: "Text-to-columns, deduplication, trim, flash fill" },
    ],
  },
  {
    id: "analytics",
    title: "Data Analytics",
    icon: "TrendingUp",
    badge: "Core Methodology",
    summary: "End-to-end analytical rigor: from handling messy data to communicating executive-level decision insights.",
    skills: [
      { name: "Data Cleaning & Deduplication", level: "Advanced", levelPercentage: 90, description: "Handling nulls, anomaly detection, standardizing values" },
      { name: "Data Transformation & ETL", level: "Strong", levelPercentage: 86, description: "Pivoting, unpivoting, merging, and reshaping data" },
      { name: "Exploratory Data Analysis (EDA)", level: "Strong", levelPercentage: 88, description: "Distribution analysis, outliers, correlation discovery" },
      { name: "Data Validation & Integrity", level: "Strong", levelPercentage: 85, description: "Cross-checking totals, schema constraints, audit rules" },
      { name: "Trend & KPI Analysis", level: "Strong", levelPercentage: 86, description: "Tracking performance indicators over time" },
      { name: "Business Insights & Storytelling", level: "Strong", levelPercentage: 84, description: "Translating charts into actionable business decisions" },
    ],
  },
];

export const SKILL_PILLS = [
  "SQL",
  "Power BI",
  "Tableau",
  "Microsoft Excel",
  "DAX",
  "Power Query",
  "Data Cleaning",
  "Data Visualization",
  "Data Modeling",
  "KPI Analysis",
  "Business Intelligence",
  "Problem Solving",
];

export const CONTINUOUS_LEARNING = [
  { name: "SQL", focus: "Advanced Query Optimization & Window Functions", icon: "Database" },
  { name: "Power BI", focus: "Complex DAX Patterns & Performance Tuning", icon: "BarChart3" },
  { name: "Tableau", focus: "Level of Detail (LOD) Expressions & Actions", icon: "PieChart" },
  { name: "Excel", focus: "Power Pivot, Power Query M & Dynamic Arrays", icon: "Sheet" },
  { name: "DAX", focus: "Time Intelligence & Filter Context Manipulation", icon: "Cpu" },
  { name: "Power Query", focus: "Automated Data Ingestion & M Code Formulas", icon: "Workflow" },
  { name: "Data Visualization", focus: "Cognitive Load Principles & Dashboard UX", icon: "Layers" },
  { name: "Business Intelligence", focus: "Metric Trees & Executive KPI Reporting", icon: "LineChart" },
  { name: "Statistics", focus: "Descriptive Stats, Distributions & Sampling", icon: "Sigma" },
];
