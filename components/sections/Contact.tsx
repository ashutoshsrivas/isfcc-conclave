import { CONTACT, EVENT } from "@/content/event";
import Reveal from "../Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="bg-band overflow-hidden rounded-[2rem] shadow-2xl shadow-orange/20">
          <div className="grid gap-12 p-10 sm:p-14 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            {/* CTA side */}
            <div className="flex flex-col justify-center">
              <span className="mono-label text-cream/85">
                Register / Express Interest
              </span>
              <h2 className="display mt-4 text-3xl text-cream sm:text-4xl md:text-5xl">
                Join the conversation on the future city.
              </h2>
              <p className="mt-5 max-w-lg text-lg text-cream/85">
                Express interest and register via the official event page.
                Registration opens 1st August 2026; the last date of
                registration is 18th August 2026. The Conclave will be held in
                hybrid mode.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={EVENT.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine rounded-full bg-cream px-8 py-4 text-center text-lg font-semibold text-rust hover:bg-white"
                >
                  Know More
                </a>
                <a
                  href={`mailto:${CONTACT.emails[0]}`}
                  className="btn-shine rounded-full border-2 border-cream/50 px-8 py-4 text-center text-lg font-medium text-cream hover:border-cream"
                >
                  Email the organiser
                </a>
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-3xl border border-cream/25 bg-cream/10 p-8 backdrop-blur-sm">
              <p className="mono-label text-cream/80">Organiser</p>
              <p className="mt-3 text-lg font-semibold text-cream">
                {CONTACT.organiser}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">
                {CONTACT.address}
              </p>

              <div className="my-6 h-px bg-cream/25" />

              <dl className="space-y-4 text-sm">
                <div>
                  <dt
                    className="mono-label text-cream/70"
                    style={{ fontSize: "0.6rem" }}
                  >
                    Mail us at
                  </dt>
                  <dd className="mt-1 flex flex-col gap-1">
                    {[CONTACT.geuEmail, ...CONTACT.emails].map((e) => (
                      <a
                        key={e}
                        href={`mailto:${e}`}
                        className="text-cream underline-offset-4 hover:underline"
                      >
                        {e}
                      </a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt
                    className="mono-label text-cream/70"
                    style={{ fontSize: "0.6rem" }}
                  >
                    Phone
                  </dt>
                  <dd className="mt-1 flex flex-col gap-1">
                    {CONTACT.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/[^+\d]/g, "")}`}
                        className="text-cream hover:underline underline-offset-4"
                      >
                        {p}
                      </a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt
                    className="mono-label text-cream/70"
                    style={{ fontSize: "0.6rem" }}
                  >
                    GCCI Signatory
                  </dt>
                  <dd className="mt-1 text-cream">{CONTACT.signatory}</dd>
                </div>
                <div>
                  <dt
                    className="mono-label text-cream/70"
                    style={{ fontSize: "0.6rem" }}
                  >
                    Host Coordinator (GEU)
                  </dt>
                  <dd className="mt-1 text-cream">
                    {CONTACT.geuCoordinator} ·{" "}
                    <a
                      href={`tel:${CONTACT.geuCoordinatorPhone}`}
                      className="hover:underline underline-offset-4"
                    >
                      {CONTACT.geuCoordinatorPhone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
