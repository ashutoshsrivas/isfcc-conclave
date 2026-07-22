import { DELEGATIONS, DELEGATIONS_DISCLAIMER } from "@/content/delegations";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function Delegations() {
  return (
    <section id="delegations" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="International Participation · India–Africa"
          title="Invited delegations."
          intro="27 African nations have been invited, each represented by its Ambassador or High Commissioner to India — anchoring the Conclave's diplomatic dimension."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {DELEGATIONS.map((d, i) => (
            <Reveal
              key={d.country}
              delay={(i % 9) * 45}
              effect="blur"
              className="group flex items-baseline gap-4 bg-card px-6 py-5 transition-colors duration-300 hover:bg-cream"
            >
              <span className="font-mono text-xs text-brown-soft/50 transition-colors duration-300 group-hover:text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-semibold text-brown">
                  {d.country}
                </span>
                <span className="mt-0.5 block text-sm text-brown-soft">
                  {d.envoy}
                </span>
              </span>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 flex items-start gap-3 text-sm text-brown-soft">
          <span
            className="mono-label mt-0.5 shrink-0 text-orange"
            style={{ fontSize: "0.6rem" }}
          >
            Disclaimer
          </span>
          {DELEGATIONS_DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
