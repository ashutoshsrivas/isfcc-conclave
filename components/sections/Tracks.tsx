import { SECTOR_FOCUS, TRACKS } from "@/content/tracks";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Skyline from "../Skyline";

export default function Tracks() {
  return (
    <section id="tracks" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Thematic Tracks"
          title="Eight tracks charting the future city."
          intro="Each track threads through the two-day program — from infrastructure and governance to climate, mobility and the startup ecosystem."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRACKS.map((t, i) => (
            <Reveal
              key={t.title}
              delay={(i % 4) * 70}
              className="group card-lift flex h-full flex-col rounded-2xl border border-line bg-card p-6 hover:border-orange/40"
            >
              <span className="display inline-block text-4xl text-amber transition-all duration-500 group-hover:-translate-y-1 group-hover:text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-brown">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brown-soft">
                {t.blurb}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Sector focus — a slow, dignified procession */}
        <Reveal className="mt-16">
          <div className="gold-rule rule-draw mb-8" />
          <p className="mono-label mb-5 text-sky">
            Sector focus across the two days
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
