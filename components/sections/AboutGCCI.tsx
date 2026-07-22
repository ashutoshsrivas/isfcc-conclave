import CountUp from "../CountUp";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const GCCI_FACTS = [
  { value: "122", label: "Countries active" },
  { value: "60+", label: "MOUs signed" },
  { value: "ISO", label: "Certified" },
];

const EDITIONS = [
  {
    edition: "1st Edition",
    year: "2025",
    venue: "Gautam Buddha University, Greater Noida",
    stat: "300+ delegates",
  },
  {
    edition: "2nd Edition",
    year: "2026",
    venue: "J.K. Business School, Gurgaon",
    stat: "500+ delegates · 9 countries",
  },
  {
    edition: "3rd Edition",
    year: "2026",
    venue: "Graphic Era University, Dehradun",
    stat: "500+ delegates · 10+ countries",
    current: true,
  },
];

export default function AboutGCCI() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About GCCI"
              title="A global chamber bridging industry, academia & government."
            />
            <p className="mt-8 text-lg leading-relaxed text-brown/85">
              The Global Chamber of Commerce &amp; Industry is active across 122
              countries with 60+ MOUs and ISO certification, working to connect
              academia, industry and government around shared economic and
              social goals.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {GCCI_FACTS.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-line bg-card p-5 text-center"
                >
                  <p className="display text-4xl text-orange">
                    <CountUp value={f.value} />
                  </p>
                  <p
                    className="mono-label mt-2 text-brown-soft"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editions timeline */}
          <Reveal>
            <p className="mono-label mb-6 text-orange">
              Past &amp; present editions
            </p>
            <ol className="relative space-y-6 border-l border-line pl-8">
              {EDITIONS.map((e) => (
                <li key={e.edition} className="relative">
                  <span
                    className={`absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-cream ${
                      e.current ? "bg-orange" : "bg-brown/25"
                    }`}
                  />
                  <div
                    className={`rounded-2xl border p-5 ${
                      e.current
                        ? "border-orange/40 bg-orange/[0.06]"
                        : "border-line bg-card"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="display text-2xl text-rust">
                        {e.edition}
                      </span>
                      <span className="font-mono text-sm text-brown-soft/70">
                        {e.year}
                      </span>
                    </div>
                    <p className="mt-1 text-brown/85">{e.venue}</p>
                    <p className="mt-1 text-sm text-brown-soft">{e.stat}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
