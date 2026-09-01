export type Project = {
  title: string;
  client: string;
  body: string;
  year: string;
};

export type WorkCategory = {
  id: string;
  title: string;
  summary: string;
  short: string;
  projects: Project[];
};

export const workCategories: WorkCategory[] = [
  {
    id: "economic-policy-and-political-economy",
    title: "Economic Policy and Political Economy",
    short:
      "Evidence for policy choices, institutional reform, economic resilience, and political economy.",
    summary:
      "We work where economic choices meet institutions, incentives, markets, and political realities. Our policy work is designed to clarify trade-offs and identify measures that can move from analysis to implementation.",
    projects: [
      {
        title:
          "Development of Policy-oriented Measures to Promote the Transition to a Green Economy",
        client: "GIZ, PSDP / Green Growth Palestine",
        body: "Six actionable policy measures combining policy review, WEF and waste analysis, stakeholder consultation, co-design, validation, and policy briefs.",
        year: "2026",
      },
      {
        title: "Industrial Sector Survey",
        client: "Office of the Quartet / Palestine Federation of Industries",
        body: "A large-scale survey covering 1,505 industrial establishments across 11 West Bank governorates, mapping operations, workforce, production, resource use, and financial characteristics.",
        year: "2025 to 2026",
      },
      {
        title: "Digital Economy Country Assessment: Digital Business",
        client: "World Bank Group",
        body: "Research on the status of digital businesses in Palestine, including challenges, opportunities, focus groups, and a public-report chapter.",
        year: "2021",
      },
      {
        title: "Three-year ICT Sector Strategy for Palestine",
        client: "PITA & Tasdeer / FCDO",
        body: "A sector strategy focused on competitiveness, exports, foreign investment, market demand, institutional capacity, growth obstacles, and a three-year roadmap.",
        year: "2022 to 2023",
      },
      {
        title: "Enabling Environment for Doing Business in the Digital Economy",
        client: "USAID",
        body: "Assessment of policy, legal, institutional, market, gender, and youth dimensions of Palestine’s digital trade environment, using the SAF-DE framework.",
        year: "2022",
      },
      {
        title: "Identifying Constraints Facing Palestinian Home-Based Businesses",
        client: "World Bank Group",
        body: "Research combining literature review, interviews, focus groups, case studies, and comparative analysis to identify constraints facing home-based businesses in the West Bank.",
        year: "2023",
      },
    ],
  },
  {
    id: "data-driven-research",
    title: "Data-driven Research",
    short:
      "Primary and secondary research that turns complex questions into decision-ready evidence.",
    summary:
      "We build evidence from structured research designs, primary data, stakeholder perspectives, and rigorous analysis. The aim is not simply to collect information, but to make complex questions answerable.",
    projects: [
      {
        title: "Gender Analysis: Supporting Civil Society Organizations and Media",
        client: "Expertise France",
        body: "Mixed-methods gender and conflict analysis using stratified surveys, key informant interviews, focus groups, stakeholder mapping, and conflict-sensitive analysis across the West Bank, Gaza Strip, and Israel.",
        year: "2026 · Ongoing",
      },
      {
        title: "Market Intelligence Roadmap for AI Use & Digital Transformation",
        client: "PITA",
        body: "Evidence-based roadmap benchmarking international approaches, building a market-intelligence framework, prioritising AI use cases, and validating implementation pathways.",
        year: "2026 · Ongoing",
      },
      {
        title:
          "Business Feasibility & Financial Modelling for TVET School Modernization",
        client: "Oxfam",
        body: "Mixed-methods feasibility and financial modelling covering market demand, five-year financial projections, risk, scenario testing, pricing, and sustainability.",
        year: "2026 · Ongoing",
      },
      {
        title: "Fashion Apparel Online Retail Market",
        client: "GoShop.ps",
        body: "Market study combining desk research, a random stratified phone survey, interviews with e-commerce platforms, and analysis of consumer trends and brand positioning.",
        year: "2021",
      },
      {
        title: "Potential for Organic Dates: Market Study",
        client: "Rift Valley Farms Company",
        body: "Market research on organic Medjool dates using consumer research, sector desk research, and interviews with producers, retailers, and wholesalers.",
        year: "2021",
      },
      {
        title: "Digital Economy Country Assessment: Digital Business",
        client: "World Bank Group",
        body: "Primary research and focus groups examining the current status, constraints, and opportunities of digital businesses in Palestine.",
        year: "2021",
      },
    ],
  },
  {
    id: "growth-partner",
    title: "Growth Partner",
    short:
      "Practical advisory that helps organisations move from opportunity to implementation.",
    summary:
      "Some challenges require more than a report. We work alongside organisations and ventures to test opportunities, sharpen strategy, structure growth, and support implementation.",
    projects: [
      {
        title: "Business Development Services for FinTech Pipeline, A-FIN II",
        client: "GIZ",
        body: "Tailored business development support covering diagnostics, strategy, market entry, product development, investment readiness, mentoring, and stakeholder engagement.",
        year: "2025 · Ongoing",
      },
      {
        title: "Gazal Platform",
        client: "Jafra Productions",
        body: "Developed holistic solutions for early-career artists through a digital platform covering profiles, portfolios, courses, career services, promotion, and monetisation.",
        year: "2023",
      },
      {
        title: "Valuation Analysis: GoShop.ps Acquisition of Vatrin",
        client: "GoShop.ps & Vatrin",
        body: "Valuation analysis supporting a potential acquisition through financial projections, valuation parameters, and decision support for negotiation.",
        year: "2023",
      },
      {
        title: "Baladi Group Profile Preparation",
        client: "Baladi Group",
        body: "Supported international franchise outreach for Baladi Mall through investment positioning, market opportunities, financial projections, and company-profile development.",
        year: "2023",
      },
      {
        title:
          "Engage and Create Linkages with the Private Sector for Climate Change Actions",
        client: "ARIJ",
        body: "Designed and implemented an engagement strategy for approximately 60 private-sector actors to mainstream climate and environmental action.",
        year: "2022",
      },
      {
        title: "Data Block Master Communication Deck Development and Planning",
        client: "Data Block AI, Palestine",
        body: "Developed an investor and stakeholder communications deck covering the company, problem, solution, market size, trends, competition, and value proposition.",
        year: "2022",
      },
    ],
  },
  {
    id: "impact-measurement-and-evaluation",
    title: "Impact Measurement and Evaluation",
    short:
      "Independent assessment that supports accountability, learning, and adaptation.",
    summary:
      "We assess what changed, why it changed, and what should happen next. Our evaluations combine quantitative and qualitative evidence with clear frameworks for learning and accountability.",
    projects: [
      {
        title:
          "Advancing Gender-Inclusive Finance and Digital Financial Services in Palestine Evaluation",
        client: "AFI / Palestine Monetary Authority",
        body: "Evaluation against OECD-DAC criteria, examining gender-inclusive finance, sex-disaggregated data, institutional practice, lessons, and actionable recommendations.",
        year: "2025",
      },
      {
        title: "SMART Programme Evaluation",
        client: "USAID",
        body: "Evaluation of a $40 million initiative supporting Palestinian SMEs, assessing competitiveness, market access, employment, and recovery across the West Bank, Gaza, and East Jerusalem.",
        year: "2024 to 2025",
      },
      {
        title: "7amleh’s Hate Speech Lexicon Tool Final Evaluation",
        client: "7amleh / DCA-NCA",
        body: "Evaluation of an AI-powered Arabic and Hebrew hate-speech monitoring system, assessing implementation, impact, sustainability, and contribution to digital-rights advocacy.",
        year: "2024",
      },
      {
        title: "Dutch Good Growth Fund Palestine Investment Evaluation",
        client: "Steward Redqueen / DGGF",
        body: "Deep-dive evaluation of investment effectiveness, inclusive-growth indicators, intermediary-fund success factors, and accountability.",
        year: "2023",
      },
      {
        title: "Baseline Assessment of SAWA II",
        client: "Enable",
        body: "Baseline study supporting economic resilience of micro and small enterprises in Gaza, including Theory of Change, MEAL mechanisms, and data-collection tools.",
        year: "2023",
      },
      {
        title: "Digital Seeds Impact Assessment",
        client: "HEKS/EPER",
        body: "Developed an impact-assessment framework for a programme supporting youth, youth-led businesses, and young entrepreneurs in East Jerusalem and marginalised communities.",
        year: "2021",
      },
    ],
  },
  {
    id: "capacity-building-and-training",
    title: "Capacity Building and Training",
    short:
      "Learning experiences and organisational support designed around real capability needs.",
    summary:
      "We design learning experiences around actual capability gaps, using practical tools, structured curricula, mentoring, and context-sensitive delivery.",
    projects: [
      {
        title: "Enhancing Palestinian Social and Digital Entrepreneurship",
        client: "Episode",
        body: "Designed a blended, competence-based learning journey using ADDIE, project-based learning, mentoring, digital tools, and micro-credentials.",
        year: "2025",
      },
      {
        title: "Entrepreneurship Course Design",
        client: "Jafra Productions",
        body: "Designed modules for Entrepreneurship 101 at Dar Al Kalima University’s TAMI programme, with objectives, action plans, assessments, and practical learning.",
        year: "2023 to 2024",
      },
      {
        title: "How Do Creatives Become Entrepreneurs?",
        client: "Jafra Productions / TAMI",
        body: "Designed a workshop on business ideation, innovation, technology product life cycles, revenue models, and value-proposition tools.",
        year: "2022",
      },
      {
        title: "Economics, Politics, and Morality Workshop",
        client: "Zimam",
        body: "Delivered a recurring two-day workshop covering economic principles, political ideologies, Palestinian economic challenges, stakeholder mapping, and collaborative problem solving.",
        year: "2021 to 2023",
      },
      {
        title: "All About Business",
        client: "Future Agro Challenge",
        body: "Workshop covering business models, business planning, networking, funding, and product development.",
        year: "2021",
      },
      {
        title: "Developing the Innovation and Entrepreneurial Ecosystem in the oPt",
        client: "Swiss Representative Office",
        body: "Facilitated a workshop with 45 stakeholders from support organisations, universities, and public institutions to identify ecosystem needs and future interventions.",
        year: "2020",
      },
    ],
  },
  {
    id: "civil-society-support",
    title: "Civil Society Support",
    short:
      "Research, mapping, strategy, and programme support for organisations working on social priorities.",
    summary:
      "We support civil society organisations with research, mapping, programme design, evaluation, and evidence that strengthens advocacy, organisational learning, and community impact.",
    projects: [
      {
        title:
          "Mapping Study of Civil Society Organizations and Networks in East Jerusalem",
        client: "PNGO",
        body: "Mapped civil society organisations and networks, identified constraints and needs, assessed operating conditions, and developed a comprehensive database of organisational capacities and coverage.",
        year: "2022",
      },
      {
        title: "Scoping for Social Enterprises Programming",
        client: "British Council / Beyond Group / Build Palestine",
        body: "Mapped the social-enterprise ecosystem and engaged stakeholders through 15 structured interviews and 8 focus groups.",
        year: "2021",
      },
      {
        title: "Access Denied: E-commerce in Palestine",
        client: "7amleh",
        body: "Assessed Palestine’s e-commerce market through macro and micro analysis, stakeholder interviews, and recommendations for e-commerce and e-payment growth.",
        year: "2020",
      },
      {
        title: "Gender Analysis: Supporting Civil Society Organizations and Media",
        client: "Expertise France",
        body: "Generated evidence on gender, conflict, power relations, participation, and inclusive programming across civil society and media contexts.",
        year: "2026 · Ongoing",
      },
      {
        title: "7amleh’s Hate Speech Lexicon Tool Final Evaluation",
        client: "7amleh / DCA-NCA",
        body: "Evaluated a digital-rights intervention and its contribution to addressing online hate speech and strengthening advocacy.",
        year: "2024",
      },
      {
        title:
          "Digital Seeds: Enhancing Digital Skills in East Jerusalem and Marginalized Communities",
        client: "HEKS/EPER",
        body: "Supported evaluation and learning for a programme engaging youth, entrepreneurs, and youth-led businesses through community-building and digital-skills activities.",
        year: "2021",
      },
    ],
  },
];
