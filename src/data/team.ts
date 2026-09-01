import sari from "@/assets/team-sari.jpg.asset.json";
import zayne from "@/assets/team-zayne.jpg.asset.json";
import hammam from "@/assets/team-hammam.jpg.asset.json";
import obada from "@/assets/team-obada.jpg.asset.json";
import yousef from "@/assets/team-yousef.jpg.asset.json";
import amal from "@/assets/team-amal.jpg.asset.json";
import ghaida from "@/assets/team-ghaida.jpg.asset.json";
import walid from "@/assets/team-walid.jpg.asset.json";
import rand from "@/assets/team-rand.jpg.asset.json";
import dalia from "@/assets/team-dalia.jpg.asset.json";

export type Member = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  education: string;
  linkedin: string;
};

export const team: Member[] = [
  {
    name: "Sari Taha",
    role: "Co-Founder & Managing Director",
    photo: sari.url,
    bio: "Sari Taha is a co-founder and Managing Director at Momentum Labs. He is an entrepreneurship and technology sector expert. He is also a CrossFit enthusiast and enjoys electronic music.",
    education:
      "BSc Mechanical Engineering, Birzeit University · MBA Technology Management, Technion",
    linkedin: "https://ps.linkedin.com/in/saritaha",
  },
  {
    name: "Zayne Abudaka",
    role: "Co-Founder & Director of Research",
    photo: zayne.url,
    bio: "Zayne is a co-founder and Director of Research at Momentum Labs. He is an expert in economic research with an in-depth understanding of various sectors in the Palestinian economy. He is also an avid reader, and host of the progressive Arabic-language Masa7a Podcast.",
    education: "MA Economics, University of Edinburgh",
    linkedin: "https://www.linkedin.com/in/zayne-abudaka",
  },
  {
    name: "Hammam Othman",
    role: "Partner & Director of Business Development",
    photo: hammam.url,
    bio: "Hammam leads business development at Momentum Labs. He has extensive experience in setting up and growing businesses and operations, with a focus on business development for growth-stage companies. He is also an environmental enthusiast, and a fan of good food and nature.",
    education: "BA Business Administration, An-Najah National University",
    linkedin: "https://www.linkedin.com/in/hammam-othman",
  },
  {
    name: "Obada Shtayyeh",
    role: "Partner & Director of Data Collection",
    photo: obada.url,
    bio: "Obada specialises in research, fieldwork, data collection, and quality assurance. His experience spans the private and public sectors across Ankara, Washington DC, London, and Ramallah, with previous work involving PalTel, Reach, UNDEF, the EU, and other partners.",
    education:
      "MA Conflict & Security, George Mason University · Fulbright Researcher",
    linkedin: "https://www.linkedin.com/in/obada-shtayyeh",
  },
  {
    name: "Yousef Srouji",
    role: "Partner & Principal Consultant",
    photo: yousef.url,
    bio: "Yousef Srouji is a principal consultant at Momentum Labs. He has extensive experience in data analysis, economic research, and business advisory. He is also a filmmaker, dog lover, and a self-described philosopher.",
    education:
      "Master of Development Practice, UC Berkeley · BA Economics, University of British Columbia",
    linkedin: "https://www.linkedin.com/in/yousef-srouji",
  },
  {
    name: "Amal Hjouj",
    role: "Partner & Project Manager",
    photo: amal.url,
    bio: "Amal Hjouj is a researcher and business analyst at Momentum Labs with extensive experience focused on the Palestinian economy and private sector, as well as civil society organisations. She is also an avid cat mama, gardener, and anthropologist.",
    education:
      "BA Anthropology & International Relations, East Carolina University",
    linkedin: "https://www.linkedin.com/in/amal-hjouj",
  },
  {
    name: "Ghaida Shaban",
    role: "Researcher",
    photo: ghaida.url,
    bio: "Ghaida Shaban is a Research Associate at Momentum Labs. She has extensive experience in instructional design, research, and digital learning experiences. She is also a passionate biker who enjoys outdoor activities and nature.",
    education:
      "MEd Instructional Design & Technology, Old Dominion University · BA English Language, Arab American University",
    linkedin: "https://www.linkedin.com/in/ghaida-shaban",
  },
  {
    name: "Walid Shalabi",
    role: "Business Associate",
    photo: walid.url,
    bio: "Walid Shalabi is a Business Associate at Momentum Labs focused on project coordination, trade promotion, data analysis, and private-sector development. He brings a practical, organised approach to evidence-led work.",
    education:
      "BA Economics, Birzeit University · Advanced training in M&E, export management, and data analytics",
    linkedin: "https://ps.linkedin.com/in/walid-shalabi-a2b526158",
  },
  {
    name: "Rand Al Nabout",
    role: "Research Associate",
    photo: rand.url,
    bio: "Rand Al Nabout is a Research Associate at Momentum Labs specialising in data analytics and evidence-based research. She focuses on turning complex information into clear insights.",
    education: "MSc Business Analytics, American University of Beirut",
    linkedin: "https://www.linkedin.com/in/rand-al-nabout",
  },
  {
    name: "Dalia Hmouz",
    role: "Research Associate",
    photo: dalia.url,
    bio: "Dalia Hmouz is a Research Associate at Momentum Labs specialising in policy research and economic analysis, using quantitative and qualitative methods. She focuses on producing clear, decision-ready evidence.",
    education: "BSc Business Economics, Birzeit University",
    linkedin: "https://ps.linkedin.com/in/dalia-hmouz-2b012a351",
  },
];
