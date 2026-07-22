import Image from "next/image";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function Partners() {
  return (
    <section id="partners" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Partners"
          title="Convened in partnership."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* GCCI */}
          <Reveal
            effect="left"
            className="card-lift flex flex-col items-center rounded-3xl border border-line bg-card p-10 text-center hover:border-orange/40"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cream p-2 shadow-sm">
              <Image
                src="/logo/gcci.png"
                alt="Global Chamber of Commerce & Industry (GCCI)"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="mono-label mt-6 text-orange">Organiser</p>
            <h3 className="display mt-2 text-2xl text-rust">
              Global Chamber of Commerce &amp; Industry
            </h3>
            <p className="mt-3 text-brown-soft">
              A leading international business chamber and global
              trade-promotion platform, on a mission to bridge academia,
              industry, and government for sustainable global growth.
            </p>
          </Reveal>

          {/* GEU */}
          <Reveal
            delay={100}
            effect="right"
            className="card-lift flex flex-col items-center rounded-3xl border border-line bg-card p-10 text-center hover:border-orange/40"
          >
            <div className="flex h-24 items-center justify-center rounded-2xl bg-cream px-6 shadow-sm">
              <Image
                src="/logo/geu.png"
                alt="Graphic Era University (GEU), Dehradun"
                width={220}
                height={64}
                className="h-auto w-auto object-contain"
                style={{ maxHeight: 56 }}
              />
            </div>
            <p className="mono-label mt-6 text-orange">
              Host · Knowledge &amp; Venue Partner
            </p>
            <h3 className="display mt-2 text-2xl text-rust">
              Graphic Era University, Dehradun
            </h3>
            <p className="mt-3 text-brown-soft">
              NAAC A+ accredited and ranked among the top 50 universities in
              India (NIRF 2025, rank 48 in the University Category), Graphic
              Era hosts the Conclave on its Dehradun campus as Host and
              Knowledge &amp; Venue Partner.
            </p>
          </Reveal>
        </div>

        <p className="mt-8 text-center text-sm text-brown-soft/70">
          Room reserved for future sponsors and partners.
        </p>
      </div>
    </section>
  );
}
