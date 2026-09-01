export type Capability = {
  num: string;
  title: string;
  summary: string;
  items: string[];
  icon: string;
};

export const capabilities: Capability[] = [
  {
    num: "01",
    title: "Market research & opinion polls",
    summary:
      "We design and implement primary research to understand markets, customers, perceptions, behaviours, and demand. Our work can include survey design, sampling, fieldwork management, data quality assurance, analysis, and reporting.",
    items: [
      "Market and sector studies",
      "Consumer and customer research",
      "Opinion polling and perception studies",
      "Stakeholder and expert interviews",
      "Survey design, sampling and fieldwork",
      "Data quality, analysis and reporting",
    ],
    icon: "bars",
  },
  {
    num: "02",
    title: "Monitoring, evaluation & impact measurement",
    summary:
      "We assess programme relevance, effectiveness, efficiency, outcomes, and impact. We combine quantitative and qualitative methods to help partners learn what is working and improve delivery.",
    items: [
      "Baseline and endline studies",
      "Theory of Change and results frameworks",
      "Process and implementation evaluation",
      "Outcome and impact assessment",
      "Mixed-methods data collection",
      "Learning, accountability and recommendations",
    ],
    icon: "target",
  },
  {
    num: "03",
    title: "Business strategy & planning",
    summary:
      "We support organisations in translating market understanding into strategic priorities and practical plans. Our work can cover business models, competitive positioning, growth pathways, operating priorities, and implementation roadmaps.",
    items: [
      "Business model design",
      "Growth and market-entry planning",
      "Competitive landscape analysis",
      "Strategic positioning",
      "Operational priorities and roadmaps",
      "Business plans and decision support",
    ],
    icon: "briefcase",
  },
  {
    num: "04",
    title: "Feasibility & investment advisory",
    summary:
      "We examine the market, commercial, operational, financial, and institutional conditions behind an investment or business opportunity, helping decision-makers understand risks, assumptions, and pathways to viability.",
    items: [
      "Market and demand assessment",
      "Commercial viability analysis",
      "Financial modelling and projections",
      "Risk and sensitivity analysis",
      "Investment opportunity assessment",
      "Investment and implementation pathways",
    ],
    icon: "trend",
  },
  {
    num: "05",
    title: "Policy analysis & assessment",
    summary:
      "We conduct evidence-based policy research and assessment for governments, development partners, and institutions. We combine economic analysis, stakeholder perspectives, comparative evidence, and practical recommendations.",
    items: [
      "Policy and regulatory review",
      "Economic and political-economy analysis",
      "Institutional and governance assessment",
      "Stakeholder consultation",
      "Comparative and international benchmarking",
      "Evidence-based policy options",
    ],
    icon: "doc",
  },
  {
    num: "06",
    title: "Programme & process design",
    summary:
      "We help partners translate objectives into programmes and operating processes that are clear, measurable, and implementable. This includes programme architecture, process mapping, implementation planning, and delivery support.",
    items: [
      "Programme architecture",
      "Theory of Change development",
      "Process mapping and redesign",
      "Implementation planning",
      "Stakeholder and delivery models",
      "Monitoring and learning systems",
    ],
    icon: "grid",
  },
  {
    num: "07",
    title: "Socio-economic research",
    summary:
      "We study sectors, communities, livelihoods, institutions, and economic systems to generate evidence for development, policy, and private-sector decisions.",
    items: [
      "Sector and ecosystem research",
      "Socio-economic assessments",
      "Value-chain analysis",
      "Livelihoods and household research",
      "Labour-market research",
      "Economic and market analysis",
    ],
    icon: "book",
  },
  {
    num: "08",
    title: "Training & capacity building",
    summary:
      "We design practical training and learning experiences based on real research, programme, and business challenges. The goal is to leave teams with usable skills, tools, and processes.",
    items: [
      "Training needs assessment",
      "Curriculum and module design",
      "Facilitation and workshop delivery",
      "Practical tools and learning materials",
      "Mentoring and coaching",
      "Institutional capacity strengthening",
    ],
    icon: "cap",
  },
];

/** Short capability teasers used on the home page. */
export const capabilityPreview = [
  {
    title: "Programme & Process Design",
    body: "Designing practical programmes and processes around clear objectives and implementation realities.",
    icon: "grid",
  },
  {
    title: "Market Research & Opinion Polls",
    body: "Generating decision-ready evidence through surveys, interviews, and market intelligence.",
    icon: "bars",
  },
  {
    title: "Business Strategy & Planning",
    body: "Clarifying priorities, testing assumptions, and turning strategy into actionable roadmaps.",
    icon: "briefcase",
  },
  {
    title: "Feasibility & Investment Advisory",
    body: "Assessing viability, demand, financial sustainability, risks, and investment pathways.",
    icon: "trend",
  },
  {
    title: "Socio-Economic Research",
    body: "Understanding the economic and social conditions shaping people, markets, and institutions.",
    icon: "book",
  },
  {
    title: "Policy Analysis & Assessment",
    body: "Turning evidence into practical policy options through structured assessment and consultation.",
    icon: "doc",
  },
  {
    title: "Training & Capacity Building",
    body: "Building relevant skills, systems, and learning experiences that strengthen organisations.",
    icon: "cap",
  },
  {
    title: "Evaluations & Impact Measurement",
    body: "Assessing relevance, effectiveness, outcomes, sustainability, and impact.",
    icon: "target",
  },
] as const;
