export const site = {
  name: "Momentum Labs",
  tagline: "Advancing Equitable Progress",
  taglineAr: "نَحو تقدُّمٍ عادِل",
  established: "Established in 2020 · Birzeit, Palestine",
  blurb:
    "A boutique consultancy specializing in high-precision, evidence-based intelligence, grounded in Palestine and connected to regional and international partners.",
  email: "info@momentumlabs.me",
  addressLines: [
    "Office 301, 3rd Floor, Techno Park",
    "Birzeit University",
    "Birzeit, State of Palestine",
  ],
  mapQuery:
    "Palestine Techno Park, Palestinian Museum Street, Birzeit, Ramallah, Palestine",
  quazelleUrl: "https://quazelle.com/",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Our Work" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/momentum-labs-consulting/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/momentum.consulting.ventures",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/momentumlabs.me/",
    icon: "instagram",
  },
] as const;
