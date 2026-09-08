export interface ProjectCaseStudyStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyActions: string[];
  toolsUsed: string[];
  output: string;
}

export interface ZomatoProjectData {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  techBadges: { name: string; color: string }[];
  areas: string[];
  dataPreparationPoints: { title: string; detail: string }[];
  caseStudySteps: ProjectCaseStudyStep[];
  highlights: string[];
  sqlSnippets: { title: string; query: string; purpose: string }[];
  daxSnippets: { title: string; formula: string; purpose: string }[];
  chartData: {
    cuisineDistribution: { name: string; share: number }[];
    ratingDistribution: { ratingRange: string; count: number; avgVotes: number }[];
    onlineOrderComparison: { category: string; count: number; avgRating: number }[];
    tableBookingComparison: { status: string; percentage: number; avgCost: number }[];
    topLocalities: { locality: string; restaurants: number; avgRating: number }[];
    costVsRating: { priceRange: string; count: number; avgRating: number }[];
  };
}

export const ZOMATO_PROJECT: ZomatoProjectData = {
  title: "Zomato Data Analysis",
  tagline: "Restaurant & Food-Service Analytics Across Excel, SQL, Power BI & Tableau",
  description:
    "Zomato Data Analysis is a data analytics project focused on analyzing restaurant and food-service data to identify patterns, trends, customer preferences, and business insights. The project involves end-to-end data preparation, data cleaning, relational querying, exploratory analysis, and interactive dashboard development.",
  technologies: ["Microsoft Excel", "Power BI", "Tableau", "SQL"],
  techBadges: [
    { name: "Microsoft Excel", color: "#217346" },
    { name: "Power BI", color: "#F2C811" },
    { name: "Tableau", color: "#E97627" },
    { name: "SQL", color: "#336791" },
  ],
  areas: [
    "City Analysis",
    "Locality Analysis",
    "Restaurant Analysis",
    "Cuisine Analysis",
    "Restaurant Ratings",
    "Customer Reviews",
    "Online Ordering",
    "Table Booking",
    "Price / Cost Analysis",
    "Restaurant Type Analysis",
    "Business Performance",
    "Location-based Insights",
  ],
  dataPreparationPoints: [
    {
      title: "Missing Value Handling",
      detail: "Identified and treated null values across ratings, cost for two, and address fields using imputation and conditional filtering.",
    },
    {
      title: "Duplicate Removal",
      detail: "Audited multi-branch listings and removed exact record duplicates to maintain entity resolution and calculation accuracy.",
    },
    {
      title: "Data Cleaning",
      detail: "Stripped text artifacts (such as '/5' in ratings), trimmed erratic whitespace, and resolved inconsistent restaurant names.",
    },
    {
      title: "Inconsistent Data Formatting",
      detail: "Standardized currency strings into clean integer metrics and unified boolean flags ('Yes'/'No' to standardized indicators).",
    },
    {
      title: "Data Transformation",
      detail: "Split concatenated multi-cuisine columns into primary and secondary categories; engineered price range tier classifications.",
    },
    {
      title: "Data Validation",
      detail: "Cross-checked aggregate counts and numeric boundaries against raw source records to ensure zero loss of valid transactions.",
    },
  ],
  caseStudySteps: [
    {
      stepNumber: "01",
      title: "Dataset",
      subtitle: "Zomato restaurant dataset ingestion and schema inspection",
      description: "Examined raw tabular restaurant data covering restaurant profiles, geographical locations, cuisines offered, approximate cost for two people, aggregate user ratings, vote counts, and service options (online ordering and table booking).",
      keyActions: [
        "Mapped schema across text, numerical, and categorical attributes",
        "Checked total record counts, field cardinality, and missing value density",
        "Established dimension fields: Locality, City, Cuisine, Restaurant Type",
      ],
      toolsUsed: ["Microsoft Excel", "Power Query"],
      output: "Raw Data Architecture & Quality Audit",
    },
    {
      stepNumber: "02",
      title: "Data Cleaning",
      subtitle: "Handling missing values, duplicates, and inconsistent formats",
      description: "Systematically eliminated noisy text values, transformed composite rating strings (e.g. '4.1/5' and 'NEW' / '-') into clean float numbers, and removed duplicate restaurant records.",
      keyActions: [
        "Converted ratings to clean numeric decimal values [1.0 - 5.0]",
        "Parsed 'Approx Cost for two' from comma-delimited strings to pure integers",
        "Unified casing across locality names to eliminate duplicate location groups",
      ],
      toolsUsed: ["Excel Formulas (TRIM, SUBSTITUTE)", "Power Query ETL"],
      output: "Cleaned and Normalized Master Dataset",
    },
    {
      stepNumber: "03",
      title: "Data Transformation",
      subtitle: "Preparing the dataset for multi-tool analysis and dimensional modeling",
      description: "Reshaped tabular records into an analytical star-schema with dedicated dimension tables for Locations and Cuisines, creating calculated categories for cost brackets and rating tiers.",
      keyActions: [
        "Created Price Range Categories (Budget, Mid-Range, Fine Dining)",
        "Segmented ratings into performance tiers (Top Rated, Average, Needs Improvement)",
        "Established relational keys for location and restaurant categorization",
      ],
      toolsUsed: ["Power Query", "SQL CTEs"],
      output: "Structured Analytical Data Model",
    },
    {
      stepNumber: "04",
      title: "Data Analysis",
      subtitle: "Querying business attributes, locations, pricing, and ratings",
      description: "Executed comprehensive SQL queries and Excel Pivot tables to evaluate restaurant density across localities, compare rating performance between online-delivery and dine-in venues, and analyze cost vs popularity.",
      keyActions: [
        "Aggregated average ratings by cuisine and locality using GROUP BY",
        "Evaluated correlation between table booking availability and average customer rating",
        "Analyzed price distribution to identify under-served price segments",
      ],
      toolsUsed: ["SQL (JOINs, GROUP BY, Window Functions)", "Excel Pivot Tables"],
      output: "Exploratory & Segmented Business Insights",
    },
    {
      stepNumber: "05",
      title: "Dashboard Development",
      subtitle: "Building interactive dashboards using Power BI + Tableau",
      description: "Developed interactive, synchronized visual dashboards in both Power BI Desktop and Tableau Desktop featuring custom KPI cards, cross-filtering slicers, geospatial distribution, and drill-through details.",
      keyActions: [
        "Wrote DAX measures in Power BI for dynamic metrics and comparative ratios",
        "Designed clean visual hierarchy with consistent color coding in Tableau",
        "Implemented interactive slicers for City, Locality, Cuisine, and Booking availability",
      ],
      toolsUsed: ["Power BI Desktop", "Tableau Desktop", "DAX"],
      output: "Interactive Executive BI Dashboards",
    },
    {
      stepNumber: "06",
      title: "Insights",
      subtitle: "Identifying meaningful patterns and trends from the data",
      description: "Synthesized analytical conclusions on customer behavior, high-demand culinary niches, rating drivers, and location-based performance to produce strategic takeaways.",
      keyActions: [
        "Identified that restaurants offering online delivery had significantly higher vote engagement",
        "Discovered that table-booking availability strongly correlated with ratings above 4.0",
        "Highlighted top performing localities with highest restaurant rating density",
      ],
      toolsUsed: ["Business Intelligence", "Data Storytelling"],
      output: "Actionable Business Insight Deck",
    },
  ],
  highlights: [
    "Data Cleaning",
    "Excel Analysis",
    "SQL Analysis",
    "Power BI Dashboard",
    "Tableau Dashboard",
    "Data Visualization",
  ],
  sqlSnippets: [
    {
      title: "Average Rating & Votes by Online Order Availability",
      query: `SELECT 
    online_order,
    COUNT(*) AS total_restaurants,
    ROUND(AVG(rating), 2) AS avg_rating,
    SUM(votes) AS total_votes,
    ROUND(AVG(cost_for_two), 0) AS avg_cost
FROM zomato_restaurants
WHERE rating IS NOT NULL
GROUP BY online_order
ORDER BY avg_rating DESC;`,
      purpose: "Compares consumer engagement and pricing between online-order enabled restaurants versus dine-in only.",
    },
    {
      title: "Top 5 Performing Localities by Restaurant Density & Rating",
      query: `WITH LocalityMetrics AS (
    SELECT 
        locality,
        COUNT(restaurant_id) AS restaurant_count,
        ROUND(AVG(rating), 2) AS avg_rating,
        SUM(votes) AS total_votes,
        DENSE_RANK() OVER (ORDER BY COUNT(restaurant_id) DESC) AS rank_by_count
    FROM zomato_restaurants
    GROUP BY locality
)
SELECT * 
FROM LocalityMetrics
WHERE rank_by_count <= 5;`,
      purpose: "Ranks top dining hubs to understand geographic clustering and customer activity.",
    },
    {
      title: "Price Tier Categorization & Table Booking Correlation",
      query: `SELECT 
    CASE 
        WHEN cost_for_two < 400 THEN 'Budget (< ₹400)'
        WHEN cost_for_two BETWEEN 400 AND 800 THEN 'Mid-Range (₹400-₹800)'
        ELSE 'Fine Dining (> ₹800)'
    END AS price_category,
    has_table_booking,
    COUNT(*) AS total_count,
    ROUND(AVG(rating), 2) AS avg_rating
FROM zomato_restaurants
GROUP BY 1, 2
ORDER BY price_category, has_table_booking;`,
      purpose: "Segments venues by budget tiers to identify how table booking impacts satisfaction across spend levels.",
    },
  ],
  daxSnippets: [
    {
      title: "Average Customer Rating Measure",
      formula: `Avg Rating = 
AVERAGEX(
    KEEPFILTERS(FILTER('Zomato', 'Zomato'[Rating] > 0)),
    'Zomato'[Rating]
)`,
      purpose: "Calculates the dynamic average rating excluding unrated or new outlets.",
    },
    {
      title: "Online Order Adoption Percentage",
      formula: `Online Order % = 
DIVIDE(
    CALCULATE(COUNTROWS('Zomato'), 'Zomato'[Online_Order] = "Yes"),
    COUNTROWS('Zomato'),
    0
)`,
      purpose: "Computes the percentage of restaurants that support digital ordering.",
    },
    {
      title: "High Rated Restaurants Count (Rating >= 4.0)",
      formula: `Top Tier Outlets = 
CALCULATE(
    COUNTROWS('Zomato'),
    'Zomato'[Rating] >= 4.0
)`,
      purpose: "Quantifies premium rated establishments dynamically across slicer selections.",
    },
  ],
  chartData: {
    cuisineDistribution: [
      { name: "North Indian", share: 32 },
      { name: "Chinese", share: 22 },
      { name: "Fast Food", share: 16 },
      { name: "South Indian", share: 12 },
      { name: "Biryani", share: 10 },
      { name: "Italian / Desserts", share: 8 },
    ],
    ratingDistribution: [
      { ratingRange: "Below 3.0", count: 8, avgVotes: 45 },
      { ratingRange: "3.0 - 3.4", count: 18, avgVotes: 120 },
      { ratingRange: "3.5 - 3.9", count: 38, avgVotes: 310 },
      { ratingRange: "4.0 - 4.4", count: 28, avgVotes: 640 },
      { ratingRange: "4.5 - 5.0", count: 8, avgVotes: 1120 },
    ],
    onlineOrderComparison: [
      { category: "Online Delivery Available", count: 64, avgRating: 3.92 },
      { category: "Dine-In Only", count: 36, avgRating: 3.68 },
    ],
    tableBookingComparison: [
      { status: "Table Booking Yes", percentage: 18, avgCost: 950 },
      { status: "Table Booking No", percentage: 82, avgCost: 420 },
    ],
    topLocalities: [
      { locality: "Koramangala", restaurants: 120, avgRating: 4.1 },
      { locality: "Indiranagar", restaurants: 98, avgRating: 4.2 },
      { locality: "HSR Layout", restaurants: 84, avgRating: 3.95 },
      { locality: "Whitefield", restaurants: 76, avgRating: 3.85 },
      { locality: "Jayanagar", restaurants: 68, avgRating: 4.05 },
    ],
    costVsRating: [
      { priceRange: "₹0 - ₹300", count: 24, avgRating: 3.6 },
      { priceRange: "₹301 - ₹600", count: 42, avgRating: 3.8 },
      { priceRange: "₹601 - ₹1000", count: 22, avgRating: 4.1 },
      { priceRange: "₹1000+", count: 12, avgRating: 4.35 },
    ],
  },
};
