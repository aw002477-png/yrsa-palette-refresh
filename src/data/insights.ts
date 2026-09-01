export type Insight = {
  type: string;
  title: string;
  meta: string;
  authors?: string;
  body?: string;
  href: string;
};

/**
 * Publications. Every link is checked to resolve at its original source.
 * Items whose source is no longer reachable are removed rather than left broken.
 */
export const publications: Insight[] = [
  {
    type: "Publication",
    title: "The Paradox of Palestinian Security",
    meta: "Security in Context · July 2025",
    authors: "Zayne Abudaka and Obada Shtayyeh",
    body: "An analysis of Palestinian security and insecurity through the lens of political and social realities.",
    href: "https://www.securityincontext.org/posts/security-in-context-insecurity-monitor-issue-2-vol-1-summer-2025",
  },
  {
    type: "Publication",
    title: "Palestinians Find Hope amid War",
    meta: "This Week in Palestine · February 2024",
    authors: "Momentum Labs",
    body: "A publication examining Palestinian resilience and the search for hope amid war.",
    href: "https://thisweekinpalestine.com/palestinians-find-hope-amid-war/",
  },
  {
    type: "Publication",
    title: "Palestinian Economic Bulletin",
    meta: "The Portland Trust / MAS · Monthly, January 2017 to October 2023",
    authors: "Momentum Labs",
    body: "Monthly editorial support for the Palestinian Economic Bulletin, prepared by MAS, bringing economic developments into a clear and accessible evidence base.",
    href: "https://drive.google.com/file/d/12it9lwE_gkn5ziK1DFHqE3-CjXDNzLi3/view?usp=sharing",
  },
  {
    type: "Publication",
    title: "The Palestinian Tech Ecosystem",
    meta: "The Portland Trust · 2022",
    authors: "Momentum Labs",
    body: "Research on Palestine’s technology ecosystem, its capabilities, opportunities, and constraints.",
    href: "https://portlandtrust.org/wp-content/uploads/2022/05/Palestinian-Tech-Ecosystem.pdf",
  },
  {
    type: "Publication",
    title: "Supporting Women and Youth: The Importance of Financial Inclusion",
    meta: "This Week in Palestine · October 2022",
    authors: "Yousef Srouji and Amal Hjouj",
    body: "An evidence-based perspective on financial inclusion, women, youth, collateral, access to finance, and the need for locally grounded data and policy.",
    href: "https://thisweekinpalestine.com/supporting-women-and-youth/",
  },
  {
    type: "Publication",
    title: "Tackling Environmental Challenges For a Sustainable Palestinian Future",
    meta: "This Week in Palestine · April 2021",
    authors: "Zayne Abudaka and Hammam Othman",
    body: "A perspective on environmental sustainability, agriculture, food security, resource dependence, and locally grounded solutions.",
    href: "https://thisweekinpalestine.com/tackling-environmental-challenges/",
  },
  {
    type: "Publication",
    title: "Access Denied: E-Commerce in Palestine",
    meta: "7amleh · 2020",
    authors: "Momentum Labs",
    body: "An assessment of the Palestinian e-commerce market, barriers to growth, and opportunities for digital commerce.",
    href: "https://7amleh.org/wp-content/uploads/2020/02/Ecommerce-Research.pdf",
  },
];

export const media: Insight[] = [
  {
    type: "Podcast",
    title: "Rethinking Palestinian Public Opinion",
    meta: "+972 Magazine Podcast · October 2025",
    href: "https://www.youtube.com/watch?v=vPzAQpAGI78",
  },
  {
    type: "Video",
    title: "What do Palestinians really think? An interview with Zayne Abudaka",
    meta: "Frank Barat YouTube Channel · January 2024",
    href: "https://www.youtube.com/watch?v=ii-S9_CF--o",
  },
  {
    type: "Podcast",
    title: "Masa7a Podcast, Season 3",
    meta: "Masa7a Channel · October 2024 to present",
    href: "https://youtu.be/jTtIkC1O3Z8",
  },
  {
    type: "Podcast",
    title: "Masa7a Podcast, Season 2",
    meta: "Masa7a Channel · March to May 2023",
    href: "https://youtube.com/playlist?list=PLF_UczUFfhi7wOObiGR2KZP1BGL_Y6c18",
  },
  {
    type: "Podcast",
    title: "Masa7a Podcast, Season 1",
    meta: "Masa7a Channel · December 2022 to February 2023",
    href: "https://youtube.com/playlist?list=PLF_UczUFfhi7TG-6uIStRFtoVxc7jeyaH",
  },
  {
    type: "Video",
    title: "Rabet Docs: Colonial Economy",
    meta: "Rābet by Palestine Institute for Public Diplomacy · April 2021",
    href: "https://www.youtube.com/watch?v=Vb11uZU24xs",
  },
  {
    type: "Public speaking",
    title: "Is it Time to Reform International Aid to Palestine?",
    meta: "Foundation for Middle East Peace · October 2020",
    href: "https://fmep.org/event/16179/",
  },
  {
    type: "Public speaking",
    title: "The Palestinian Political Landscape: Imperatives for Renewal",
    meta: "Georgetown University in Qatar · Hiwaraat",
    href: "https://hiwaraat.qatar.georgetown.edu/reimagining-palestine/the-palestinian-political-landscape-imperatives-for-renewal/",
  },
  {
    type: "Public speaking",
    title: "Palestinian Consensus: Easier Said Than Done?",
    meta: "Georgetown University in Qatar · Hiwaraat",
    href: "https://hiwaraat.qatar.georgetown.edu/reimagining-palestine/palestinian-national-consensus-is-it-possible/",
  },
  {
    type: "Public speaking",
    title: "The Economics of Gaza",
    meta: "Seminar at the House of Lords, UK Parliament · September 2017",
    href: "https://twitter.com/ItmakesSNS/status/905390657363169281",
  },
];
