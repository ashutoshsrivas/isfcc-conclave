import { STATS } from "@/content/event";
import CountUp from "../CountUp";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About the Conclave"
              title="A meeting place for the intelligent urban future."
            />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-brown/85">
              <Reveal as="p">
                The International Smart &amp; Future Cities Conclave convenes
                diplomats, senior government officials, global industry leaders
                and academia to shape smart, sustainable and inclusive urban
                ecosystems. Now in its third edition, the Conclave brings the
                world&apos;s conversation on future cities to Dehradun.
              </Reveal>
              <Reveal as="p" delay={80}>
                Across two days, delegates move between high-level plenaries,
                sector roundtables, student challenges and a dedicated
                diplomatic conclave — building the partnerships, memoranda and
                ideas that translate ambition into implementation on the ground.
              </Reveal>
              <Reveal as="p" delay={160}>
                Focus themes this edition span digital diplomacy, renewable
                energy, infrastructure, education, agriculture, healthcare and
                MSME exchange — with a distinctive India–Africa partnership at
                its heart.
              </Reveal>
            </div>
          </div>

          {/* Stat register */}
          <Reveal effect="right" className="flex flex-col justify-center gap-6">
            <div className="rounded-3xl border border-line bg-cream p-2 shadow-sm">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-baseline justify-between gap-6 px-6 py-6 ${
                    i < STATS.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <div>
                    <p className="display text-5xl text-rust sm:text-6xl">
                      <CountUp value={s.value} />
                    </p>
                    <p className="mono-label mt-1 text-brown-soft">{s.label}</p>
                  </div>
                  <p className="text-right text-lg text-brown-soft/80">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-brown-soft">
              Delegates span Industry, Government, Academia, Diplomats and
              Start-ups — with ambassadors, ministers, vice-chancellors,
              industry CEOs, founders and students in the room together.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
