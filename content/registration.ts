// Important Dates, Fees, Sponsorship & Payment — verbatim from the
// ISFCC 2026 Brochure ("IMPORTANT DATES & CONTACTS", "Registration",
// "Fee schedule", "Sponsorship", "Mode of payment").

export const IMPORTANT_DATES = [
  {
    label: "Expression of Interest / Registration Opens",
    value: "1st August, 2026",
  },
  {
    label: "Extended Abstract (1000 to 1500 words only)",
    value: "15th August, 2026",
  },
  { label: "Acceptance Intimation", value: "17th August, 2026" },
  { label: "Last Date of Registration", value: "18th August, 2026" },
  { label: "Date of Conclave", value: "21–22 August 2026" },
  {
    label: "Full Paper Submission",
    value: "After the conclave, for Accepted & Presented Papers only",
  },
] as const;

export const HYBRID_NOTE = "The Conclave will be held in hybrid mode.";

export const FEES = [
  { type: "Industry", inr: "INR 5,000", usd: "USD 60" },
  { type: "Academic", inr: "INR 2,500", usd: "USD 30" },
  { type: "Student / Research Scholar", inr: "INR 1,500", usd: "USD 18" },
  { type: "Listener / Accompanying", inr: "INR 1,000", usd: "USD 12" },
] as const;

export const SPONSORSHIP = [
  { tier: "Platinum Sponsor", cost: "INR 1,00,000/-" },
  { tier: "Diamond Sponsor", cost: "INR 75,000/-" },
  { tier: "Gold Sponsor", cost: "INR 50,000/-" },
  { tier: "Silver Sponsor", cost: "INR 25,000/-" },
] as const;

export const PAYMENT = {
  beneficiary: "Graphic Era Deemed to be University R & D",
  bank: "Axis Bank Ltd., Saharanpur Road, Dehradun",
  account: "919010071768467",
  branchId: "2959",
  ifsc: "UTIB0002959",
  swift: "AXISINBB093",
  micr: "248211006",
} as const;
