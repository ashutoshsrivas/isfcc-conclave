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

function MemberRow({ members }: { members: readonly Member[] }) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-5">
      {members.map((m, i) => (
        <Reveal
          key={m.name}
          delay={(i % 3) * 60}
          className={`card-lift flex min-h-[9.5rem] flex-col items-center justify-center rounded-2xl border border-line bg-card p-6 text-center hover:border-orange/40 ${CARD_W}`}
        >
          <p className="display text-xl text-rust">{m.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-brown-soft">
            {m.role}
          </p>
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

        {/* Chief Patron — the seat of honour */}
        <Reveal className="mt-14">
          <div className="rounded-[2rem] border border-orange/30 bg-card p-10 text-center shadow-xl shadow-brown/5 sm:p-14">
            <p className="mono-label text-orange">Chief Patron</p>
            <p className="display mt-5 text-3xl text-rust sm:text-4xl md:text-5xl">
              {CHIEF_PATRON.name}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-lg text-brown-soft sm:text-xl">
              {CHIEF_PATRON.role}
            </p>
            <span
              className="mx-auto mt-6 block h-px w-24 bg-amber"
              aria-hidden
              style={{ opacity: 0.9 }}
            />
          </div>
        </Reveal>

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

        {/* Organising Committee */}
        <TierLabel>Organising Committee — Graphic Era University</TierLabel>
        <MemberRow members={ORGANISING_COMMITTEE} />

        {/* GCCI Leadership */}
        <TierLabel>Organiser (GCCI) Leadership</TierLabel>
        <MemberRow members={GCCI_LEADERSHIP} />
      </div>
    </section>
  );
}
