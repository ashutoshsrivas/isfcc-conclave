// Organising & Advisory Committee — verbatim from the ISFCC 2026 Brochure.
// Rendered in hierarchy order: Chief Patron (featured) → Mentor → Patrons →
// Advisory Board → Convener → Co-Convener(s) → Organising Committee → GCCI.

export type Member = { name: string; role: string };

export const CHIEF_PATRON: Member = {
  name: "Prof. (Dr.) Kamal Ghanshala",
  role: "Founder President, Graphic Era Group of Institutions",
};

export const MENTOR: Member = {
  name: "Mr. Tejasvi Ghanshala",
  role: "Executive Director (Project Based Learning & Global Outreach), Graphic Era Group of Institutions",
};

export const PATRONS: Member[] = [
  {
    name: "Dr. V.K. Saraswat",
    role: "Chancellor, Graphic Era (Deemed to be) University, Dehradun",
  },
  {
    name: "Prof. (Dr.) Rakesh Sharma",
    role: "Pro Chancellor, Graphic Era (Deemed to be) University, Dehradun",
  },
  {
    name: "Dr. Narpinder Singh",
    role: "Vice Chancellor, Graphic Era (Deemed to be) University, Dehradun",
  },
  {
    name: "Prof. Dr. Santosh S Saraf",
    role: "Pro Vice Chancellor, Graphic Era (Deemed to be) University, Dehradun",
  },
];

export const ADVISORY_BOARD: Member[] = [
  {
    name: "Dr. Naresh Sharma",
    role: "Registrar, Graphic Era (Deemed to be) University, Dehradun",
  },
  {
    name: "Dr. Navneet Rawat",
    role: "HOD, Graphic Era School of Management (GESoM), Graphic Era Deemed to be University, Dehradun",
  },
  {
    name: "Dr. Narendra Singh Bohra",
    role: "HOD, Department of Business Management (DoBM), Graphic Era Deemed to be University, Dehradun",
  },
  {
    name: "Dr. M.P. Singh",
    role: "Graphic Era School of Management (GESoM), Graphic Era Deemed to be University, Dehradun",
  },
  {
    name: "Dr. Arvind Mohan",
    role: "Graphic Era School of Management (GESoM), Graphic Era Deemed to be University, Dehradun",
  },
  {
    name: "Dr. Sachin Ghai",
    role: "Head — iOS Development Centre, Graphic Era Deemed to be University, Dehradun",
  },
  {
    name: "Dr. Keerat Kumar Gupta",
    role: "HOD, Department of Civil Engineering, Graphic Era Deemed to be University, Dehradun",
  },
  {
    name: "Dr. Bijendra Singh Negi",
    role: "Director, Centre of Energy Research, Graphic Era Deemed to be University, Dehradun",
  },
  {
    name: "Dr. Rupa Khanna Malhotra",
    role: "School of Commerce, Graphic Era Deemed to be University, Dehradun",
  },
  {
    name: "Dr. Vishal Sagar",
    role: "HOD, School of Management, Graphic Era Hill University, Dehradun",
  },
  {
    name: "Dr. Shyam Sundar Kapri",
    role: "School of Management, Graphic Era Hill University, Dehradun",
  },
];

export const CONVENER: Member = {
  name: "Dr. Ajay Pandey",
  role: "Convener, ISFCC 2026 — Graphic Era University",
};

export const CO_CONVENERS: Member[] = [
  { name: "Dr. Sanjay Taneja", role: "Professor, Graphic Era University" },
  {
    name: "Prof. Anurag",
    role: "Coordination with Speakers & Delegates (proposed Co-Convener)",
  },
];

export const ORGANISING_COMMITTEE: Member[] = [
  { name: "Prof. Ashutosh", role: "Website & IT" },
  { name: "Prof. Anshika Joshi", role: "Social Media, Design & IT support" },
  {
    name: "Prof. Piyush",
    role: "Sessions Coordinator (conducting the sessions)",
  },
  {
    name: "Prof. Kirti",
    role: "Screening of papers, thematic arrangement & scheduling",
  },
  {
    name: "Prof. Suraj",
    role: "Coordination with foreign delegates & partner GCCI",
  },
  { name: "Prof. Chirag", role: "Hospitality (High Tea, Lunch, etc.)" },
  { name: "Prof. Khushi", role: "Brochure & supporting activities" },
  { name: "Prof. Prabhu", role: "Anchoring" },
  { name: "Prof. Stuti", role: "Anchoring" },
  {
    name: "Prithvi (Research Scholar)",
    role: "Coordination with participants",
  },
  { name: "Rachi (Research Scholar)", role: "Coordination with participants" },
];

export const GCCI_LEADERSHIP: Member[] = [
  {
    name: "Dr. Mike Ivanof",
    role: "President, Global Chamber of Commerce & Industry",
  },
  {
    name: "Er. Aashish Gupta",
    role: "Co-Founder & CEO, Global Chamber of Commerce & Industry",
  },
];
