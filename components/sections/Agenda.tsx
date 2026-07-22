"use client";

import { useState } from "react";
import { AGENDA, AGENDA_NOTE, type Slot } from "@/content/agenda";
import SectionHeading from "../SectionHeading";

const KIND_STYLE: Record<NonNullable<Slot["kind"]>, string> = {
  ceremony: "border-amber text-amber",
  session: "border-sky text-sky",
  break: "border-brown/25 text-brown-soft/70",
  award: "border-orange text-orange",
};

const KIND_LABEL: Record<NonNullable<Slot["kind"]>, string> = {
  ceremony: "Ceremony",
  session: "Session",
  break: "Break",
  award: "Award",
};

export default function Agenda() {
  const [active, setActive] = useState(0);
  const day = AGENDA[active];

  return (
    <section id="agenda" className="bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tentative Program — subject to change"
          title="Two days, from lamp-lighting to closing anthem."
        />

        {/* Tabs */}
        <div
          className="mt-10 inline-flex rounded-full border border-line bg-cream p-1"
          role="tablist"
          aria-label="Program days"
        >
          {AGENDA.map((d, i) => (
            <button
              key={d.day}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                active === i
                  ? "bg-orange text-cream shadow-sm"
                  : "text-brown-soft hover:text-rust"
              }`}
            >
              {d.day}
              <span className="ml-2 hidden font-normal opacity-70 sm:inline">
                {d.date.split(",")[0]}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-6 text-lg font-medium text-brown">{day.date}</p>

        {/* Timeline — keyed by day so switching tabs replays the cascade */}
        <ol key={active} className="mt-8 space-y-1">
          {day.slots.map((s, i) => {
            const kind = s.kind ?? "session";
            return (
              <li
                key={i}
                className="rise grid grid-cols-[auto_1fr] gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-cream sm:grid-cols-[9rem_auto_1fr] sm:items-baseline sm:gap-6"
                style={{ animationDelay: `${i * 45}ms`, animationDuration: "0.6s" }}
              >
                <span className="font-mono text-sm font-medium text-brown-soft sm:text-base">
                  {s.time}
                </span>
                <span
                  className={`col-start-1 row-start-2 w-fit rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider sm:col-start-2 sm:row-start-1 ${KIND_STYLE[kind]}`}
                >
                  {KIND_LABEL[kind]}
                </span>
                <span className="col-span-2 text-brown sm:col-span-1 sm:col-start-3">
                  {s.title}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-line bg-cream p-5">
          <span className="mono-label mt-0.5 text-orange">Note</span>
          <p className="text-sm text-brown-soft">{AGENDA_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
