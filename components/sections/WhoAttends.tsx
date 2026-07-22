import CountUp from "../CountUp";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const AUDIENCE = [
  { title: "Diplomats", note: "Ambassadors & High Commissioners" },
  { title: "Government", note: "Ministers & senior officials" },
  { title: "Academia", note: "Vice-chancellors & researchers" },
  { title: "Industry", note: "Global CEOs & sector leaders" },
  { title: "Start-ups", note: "Founders & innovators" },
  { title: "Students", note: "Youth changemakers" },
];

const NUMBERS = [
  { value: "500+", label: "Delegates over two days" },
  { value: "10+", label: "Countries, offline & online" },
  { value: "27", label: "African nations invited" },
];

export default function WhoAttends() {
  return (
    <section className="bg-band relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          align="center"
          eyebrow="Who Attends · By the Numbers"
          title="The room where cities are decided."
        />

        {/* Big numbers */}
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {NUMBERS.map((n, i) => (
            <Reveal key={n.value} delay={i * 90} effect="scale" className="text-center">
              <p className="display text-7xl text-cream sm:text-8xl">
                <CountUp value={n.value} />
              </p>
              <p className="mono-label mt-3 text-cream/80">{n.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="my-16 h-px bg-cream/25" />

        {/* Audience grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {AUDIENCE.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 6) * 60}
              className="rounded-2xl border border-cream/25 bg-cream/10 p-5 text-center backdrop-blur-sm transition-colors hover:bg-cream/15"
            >
              <p className="text-lg font-semibold text-cream">{a.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-cream/75">
                {a.note}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
