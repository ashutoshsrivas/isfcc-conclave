import { SPEAKERS } from "@/content/speakers";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Key Note Speakers"
          title="Voices from government, diplomacy, industry & academia."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((s, i) => (
            <Reveal
              key={s.name}
              delay={(i % 3) * 60}
              className="card-lift flex flex-col rounded-2xl border border-line bg-card p-6 hover:border-orange/40"
            >
              <span
                className="display text-xl text-rust"
                style={{ lineHeight: 1.2 }}
              >
                {s.name}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-brown-soft">
                {s.role}
              </span>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-sm text-brown-soft/80">
          Speaker line-up as per the official brochure — tentative and subject
          to change.
        </p>
      </div>
    </section>
  );
}
