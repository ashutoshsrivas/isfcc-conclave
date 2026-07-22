// Single source of truth — all facts from CLAUDE.md §2, §8. Do not invent data.

export const EVENT = {
  name: "3rd International Smart & Future Cities Conclave",
  shortName: "ISFCC",
  edition: "3rd International Edition",
  theme: "Intelligent Urban Futures",
  themePillars: ["Technology", "Sustainability", "Governance"],
  themeFull: "Intelligent Urban Futures — Technology, Sustainability & Governance",
  tagline: "Evolving Uttarakhand — Rising India",
  dates: "21–22 August 2026",
  datesDays: "Friday & Saturday",
  // ISO for countdown — Day 1 start, 09:00 IST (UTC+5:30)
  startISO: "2026-08-21T09:00:00+05:30",
  venue: "Graphic Era University",
  venueFull: "Graphic Era University (GEU), Dehradun",
  venueLocation: "Dehradun, Uttarakhand, India",
  organiser: "Global Chamber of Commerce & Industry (GCCI)",
  organiserShort: "GCCI",
  organiserCity: "Noida",
  host: "Graphic Era University (GEU), Dehradun",
  hostRole: "Host · Knowledge & Venue Partner",
  url: "https://www.gcci.live/3rd-international-smart-and-future-cities-conclave",
} as const;

export const STATS = [
  { value: "500+", label: "Delegates", detail: "over two days" },
  { value: "10+", label: "Countries", detail: "offline & online" },
  { value: "27", label: "African Nations", detail: "invited delegations" },
] as const;

export const CONTACT = {
  organiser: "Global Chamber of Commerce & Industry (GCCI)",
  address:
    "GCCI House, M-5/2, Sector-49, Noida, Gautam Budh Nagar, U.P., India",
  emails: ["info@gcci.live", "ceo@gcci.live"],
  // GEU event coordinator — from the official creative
  geuEmail: "ajaykumarpandey.mgt@geu.ac.in",
  phones: ["0120-4010312", "+91 99715 50557", "+91 94114005521"],
  signatory: "Er. Aashish Gupta, Co-Founder & CEO, GCCI",
  eventPage:
    "https://www.gcci.live/3rd-international-smart-and-future-cities-conclave",
  gcci: "https://www.gcci.live/",
  educationCouncil: "https://www.gcci.live/education",
} as const;

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Agenda", href: "#agenda" },
  { label: "Delegations", href: "#delegations" },
  { label: "Partners", href: "#partners" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
] as const;
