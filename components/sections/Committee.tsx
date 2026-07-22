import { COMMITTEE } from "@/content/committee";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function Committee() {
  return (
    <section id="committee" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Organising & Advisory Committee"
          title="The people behind the Conclave."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {COMMITTEE.map((g, i) => (
            <Reveal
              key={g.group}
              delay={(i % 3) * 60}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <p className="mono-label text-orange">{g.group}</p>
              <ul className="mt-4 space-y-4">
                {g.members.map((m) => (
                  <li key={`${g.group}-${m.name}`}>
                    <p className="font-semibold text-brown">{m.name}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-brown-soft">
                      {m.role}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
