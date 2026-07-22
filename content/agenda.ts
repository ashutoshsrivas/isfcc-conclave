// Tentative program — CLAUDE.md §6. Label clearly as subject to change.

export type Slot = { time: string; title: string; kind?: "ceremony" | "session" | "break" | "award" };

export const AGENDA: {
  day: string;
  date: string;
  slots: Slot[];
}[] = [
  {
    day: "Day 1",
    date: "Friday, 21 August 2026",
    slots: [
      { time: "09:00–09:30", title: "Registration", kind: "break" },
      { time: "09:30–09:45", title: "Tea/Coffee & Networking", kind: "break" },
      {
        time: "09:45–10:00",
        title: "Opening: Curtain raising, Saraswati Vandana, Lamp lighting",
        kind: "ceremony",
      },
      {
        time: "10:00–10:30",
        title: "Welcome address by organiser & partners",
        kind: "ceremony",
      },
      {
        time: "10:30–11:30",
        title:
          "Inauguration by Chief Guest, Guests of Honour & Special Guests; speeches",
        kind: "ceremony",
      },
      {
        time: "11:30–13:30",
        title:
          "Conclave: Smart & Future Cities, Healthcare & Wellness, Waste Management (+ MoUs)",
        kind: "session",
      },
      { time: "13:30–14:30", title: "Lunch", kind: "break" },
      {
        time: "14:30–15:30",
        title: "Real Estate & Power sectors (roundtable + Q&A)",
        kind: "session",
      },
      { time: "15:30–15:45", title: "Cultural program", kind: "ceremony" },
      { time: "15:45–16:00", title: "Tea/Coffee & Networking", kind: "break" },
      {
        time: "16:00–17:00",
        title: "Urban Mobility & Civil Aviation (presentations + Q&A)",
        kind: "session",
      },
      { time: "17:00–17:30", title: "Awards", kind: "award" },
      {
        time: "17:30–18:00",
        title: "Day-1 closing remarks & National Anthem",
        kind: "ceremony",
      },
    ],
  },
  {
    day: "Day 2",
    date: "Saturday, 22 August 2026",
    slots: [
      {
        time: "09:00–09:30",
        title: "Registration, Tea/Coffee & Networking",
        kind: "break",
      },
      {
        time: "09:30–10:00",
        title:
          "Lamp lighting, introduction of Chief Guest & Guests of Honour",
        kind: "ceremony",
      },
      {
        time: "10:00–12:00",
        title: "Information Technology & Tourism sectors (presentation + Q&A)",
        kind: "session",
      },
      {
        time: "12:00–13:30",
        title:
          "Student presentations (Mayor of the Day, Smart & Clean Rivers Challenge, Youth Parliament, Smart Police & Traffic, Pledge)",
        kind: "session",
      },
      { time: "13:30–14:30", title: "Lunch", kind: "break" },
      {
        time: "14:30–16:30",
        title:
          "Diplomatic Conclave & International Citizenship (roundtable, Q&A, MoUs)",
        kind: "session",
      },
      { time: "16:30–16:45", title: "Cultural program", kind: "ceremony" },
      { time: "16:45–17:00", title: "Tea/Coffee & Networking", kind: "break" },
      { time: "17:00–17:30", title: "Spiritual session", kind: "ceremony" },
      { time: "17:30–17:45", title: "Final awards", kind: "award" },
      {
        time: "17:45–18:00",
        title:
          "Day-2 closing remarks, National Anthem, curtain close",
        kind: "ceremony",
      },
    ],
  },
];

export const AGENDA_NOTE =
  "B2B meetings run both days 16:00–17:00 in the Meeting Room.";
