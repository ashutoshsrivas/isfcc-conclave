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

function TierLabel({ children }: { children: string }) {
  return (
    <div className="mt-16 flex items-center gap-5 first:mt-0">
      <span className="mono-label shrink-0 text-orange">{children}</span>
      <span className="gold-rule w-full" aria-hidden />
    </div>
  );
}

function MemberCard({
  member,
  delay = 0,
  compact = false,
}: {
  member: Member;
  delay?: number;
  compact?: boolean;
}) {
  return (
    <Reveal
      delay={delay}
      className="card-lift flex h-full flex-col rounded-2xl border border-line bg-card p-5 hover:border-orange/40"
    >
      <p
        className={`${compact ? "font-semibold text-brown" : "display text-xl text-rust"}`}
      >
        {member.name}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-brown-soft">
        {member.role}
      </p>
    </Reveal>
  );
}

export default function Committee() {
  return (
    <section id="committee" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
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
        <Reveal className="mt-6">
          <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-card p-8 text-center">
            <p className="display text-2xl text-rust">{MENTOR.name}</p>
            <p className="mt-2 text-brown-soft">{MENTOR.role}</p>
          </div>
        </Reveal>

        {/* Patrons */}
        <TierLabel>Patrons</TierLabel>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PATRONS.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={(i % 4) * 60} />
          ))}
        </div>

        {/* Advisory Board */}
        <TierLabel>Advisory Board</TierLabel>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADVISORY_BOARD.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={(i % 3) * 50} compact />
          ))}
        </div>

        {/* Convener & Co-Conveners */}
        <TierLabel>Convener & Co-Convener(s)</TierLabel>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <MemberCard member={CONVENER} />
          {CO_CONVENERS.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={(i + 1) * 70} />
          ))}
        </div>

        {/* Organising Committee */}
        <TierLabel>Organising Committee — Graphic Era University</TierLabel>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ORGANISING_COMMITTEE.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={(i % 4) * 50} compact />
          ))}
        </div>

        {/* GCCI Leadership */}
        <TierLabel>Organiser (GCCI) Leadership</TierLabel>
        <div className="mx-auto mt-6 grid max-w-3xl gap-5 sm:grid-cols-2">
          {GCCI_LEADERSHIP.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
