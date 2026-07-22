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
                The 3rd International Smart &amp; Future Cities Conclave (ISFCC)
                convenes diplomats from embassies, senior government officials,
                global industry leaders, academic institutions, urban planners,
                researchers, technology innovators, start-ups, and development
                organisations from India and abroad to shape the future of
                smart urban ecosystems.
              </Reveal>
              <Reveal as="p" delay={80}>
                Expected to attract 500+ delegates over two days with
                representation from 10+ countries, this edition places special
                emphasis on the India–Africa economic partnership, with 27
                African nations invited through their Ambassadors / High
                Commissioners.
              </Reveal>
              <Reveal as="p" delay={160}>
                Focus areas this edition include digital diplomacy, renewable
                energy, infrastructure, education, agriculture, healthcare, and
                MSME exchange — delivered through keynote addresses, sector
                conclaves, roundtables, B2B/B2G matchmaking, student
                initiatives, and the execution of MoUs and joint ventures.
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
              Diplomats from embassies, senior government officials, global
              industry leaders, academic institutions, urban planners,
              researchers, technology innovators, start-ups, and development
              organisations — from India and abroad.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
