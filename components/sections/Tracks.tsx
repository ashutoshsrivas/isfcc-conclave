import { SECTOR_FOCUS, TRACKS, TRACKS_NOTE } from "@/content/tracks";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Skyline from "../Skyline";

export default function Tracks() {
  return (
    <section id="tracks" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Conclave Themes"
          title="Eighteen themes charting the future city."
          intro={TRACKS_NOTE}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t, i) => (
            <Reveal
              key={t.title}
              delay={(i % 3) * 70}
              className="group card-lift flex h-full flex-col rounded-2xl border border-line bg-card p-6 hover:border-orange/40"
            >
              <span className="display inline-block text-3xl text-amber transition-all duration-500 group-hover:-translate-y-1 group-hover:text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-brown">
                {t.title}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-brown-soft">
                {t.topics.slice(0, 3).map((topic) => (
                  <li key={topic} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" aria-hidden />
                    {topic}
                  </li>
                ))}
              </ul>
              {t.topics.length > 3 && (
                <details className="mt-2">
                  <summary className="cursor-pointer text-sm font-medium text-orange transition-colors hover:text-rust">
                    + {t.topics.length - 3} more topics
                  </summary>
                  <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-brown-soft">
                    {t.topics.slice(3).map((topic) => (
                      <li key={topic} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" aria-hidden />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </Reveal>
          ))}
        </div>

        {/* Sector focus — a slow, dignified procession */}
        <Reveal className="mt-16">
          <div className="gold-rule rule-draw mb-8" />
          <p className="mono-label mb-5 text-sky">
            Sector focus across both days
          </p>
          <div className="marquee" aria-label="Sector focus">
            <div className="marquee-track">
              {[...SECTOR_FOCUS, ...SECTOR_FOCUS].map((s, i) => (
                <span
                  key={`${s}-${i}`}
                  aria-hidden={i >= SECTOR_FOCUS.length}
                  className="whitespace-nowrap rounded-full border border-line bg-card px-4 py-2 text-sm text-brown-soft transition-colors hover:border-orange/50 hover:text-rust"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Skyline className="opacity-60" animate={false} variant="light" />
    </section>
  );
}
