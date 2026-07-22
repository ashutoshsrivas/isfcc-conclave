import {
  ADVISORY_BOARD,
  CHIEF_PATRON,
  CO_CONVENERS,
  CONVENER,
  GCCI_LEADERSHIP,
  MENTOR,
  ORGANISING_COMMITTEE,
  PATRONS,
  type Member,
} from "@/content/committee";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

/* Symmetric tier label — centered between two gold rules. */
function TierLabel({ children }: { children: string }) {
  return (
    <div className="mt-16 flex items-center gap-5">
      <span className="gold-rule w-full" aria-hidden />
      <span className="mono-label shrink-0 text-center text-orange">
        {children}
      </span>
      <span className="gold-rule w-full" aria-hidden />
    </div>
  );
}

/*
 * One card size, one type scale, for every tier. Rows wrap and centre
 * themselves, so incomplete rows stay on the section's axis.
 */
const CARD_W =
  "w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]";

function MemberRow({
  members,
  nameOnly = false,
}: {
  members: readonly Member[];
  nameOnly?: boolean;
}) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-5">
      {members.map((m, i) => (
        <Reveal
          key={m.name}
          delay={(i % 3) * 60}
          className={`card-lift flex ${nameOnly ? "min-h-[5.5rem]" : "min-h-[9.5rem]"} flex-col items-center justify-center rounded-2xl border border-line bg-card p-6 text-center hover:border-orange/40 ${CARD_W}`}
        >
          <p className="display text-xl text-rust">{m.name}</p>
          {!nameOnly && (
            <p className="mt-2 text-sm leading-relaxed text-brown-soft">
              {m.role}
            </p>
          )}
        </Reveal>
      ))}
    </div>
  );
}

export default function Committee() {
  return (
    <section id="committee" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Organising & Advisory Committee"
          title="The people behind the Conclave."
        />

        {/* Chief Patron — first in order */}
        <TierLabel>Chief Patron</TierLabel>
        <MemberRow members={[CHIEF_PATRON]} />

        {/* Mentor */}
        <TierLabel>Mentor</TierLabel>
        <MemberRow members={[MENTOR]} />

        {/* Patrons */}
        <TierLabel>Patrons</TierLabel>
        <MemberRow members={PATRONS} />

        {/* Advisory Board */}
        <TierLabel>Advisory Board</TierLabel>
        <MemberRow members={ADVISORY_BOARD} />

        {/* Convener & Co-Conveners */}
        <TierLabel>Convener & Co-Convener(s)</TierLabel>
        <MemberRow members={[CONVENER, ...CO_CONVENERS]} />

        {/* GCCI Leadership */}
        <TierLabel>Organiser (GCCI) Leadership</TierLabel>
        <MemberRow members={GCCI_LEADERSHIP} />

        {/* Organising Committee — members listed by name */}
        <TierLabel>Organising Committee — Graphic Era University</TierLabel>
        <MemberRow members={ORGANISING_COMMITTEE} nameOnly />
      </div>
    </section>
  );
}
