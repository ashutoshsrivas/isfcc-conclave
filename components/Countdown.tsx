"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/content/event";

function diff(target: number) {
  const now = Date.now();
  const s = Math.max(0, Math.floor((target - now) / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: s === 0,
  };
}

/** A two-digit cell whose digits roll in whenever the value changes. */
function Cell({ value, label }: { value: number | undefined; label: string }) {
  const text = value === undefined ? "—" : String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <span
        className="display text-3xl text-rust tabular-nums sm:text-4xl"
        aria-hidden={value === undefined}
      >
        {value === undefined
          ? "—"
          : text.split("").map((ch, i) => (
              // key includes the digit so a change remounts → rolls in
              <span key={`${i}-${ch}`} className="digit-roll">
                {ch}
              </span>
            ))}
      </span>
      <span
        className="mono-label mt-1 text-brown-soft"
        style={{ fontSize: "0.6rem" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const target = new Date(EVENT.startISO).getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: t?.days },
    { label: "Hours", value: t?.hours },
    { label: "Minutes", value: t?.minutes },
    { label: "Seconds", value: t?.seconds },
  ];

  return (
    <div
      className="flex items-stretch gap-3 sm:gap-4"
      role="timer"
      aria-label={`Countdown to ${EVENT.dates}`}
    >
      {units.map((u, i) => (
        <div key={u.label} className="flex items-stretch gap-3 sm:gap-4">
          <Cell value={u.value} label={u.label} />
          {i < units.length - 1 && (
            <span
              aria-hidden
              className="display self-start text-2xl text-amber/60 sm:text-3xl"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
