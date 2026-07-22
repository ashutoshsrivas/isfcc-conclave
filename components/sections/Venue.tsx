import { EVENT } from "@/content/event";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Skyline from "../Skyline";

export default function Venue() {
  const mapQuery = encodeURIComponent(
    "Graphic Era University, Dehradun, Uttarakhand, India",
  );
  return (
    <section id="venue" className="bg-panel relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Venue"
              title="Graphic Era University, Dehradun."
              intro="The Conclave is hosted on the Graphic Era University campus in Dehradun — the gateway to Uttarakhand, in the Himalayan foothills of northern India."
            />
            <dl className="mt-8 space-y-4">
              <div className="flex gap-4">
                <dt className="mono-label w-24 shrink-0 pt-1 text-sky">
                  Campus
                </dt>
                <dd className="text-brown">{EVENT.venueFull}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="mono-label w-24 shrink-0 pt-1 text-sky">
                  Location
                </dt>
                <dd className="text-brown">{EVENT.venueLocation}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="mono-label w-24 shrink-0 pt-1 text-sky">
                  Travel
                </dt>
                <dd className="text-brown-soft">
                  Served by Jolly Grant Airport (DED) and Dehradun Railway
                  Station, with regular connections from Delhi and major cities.
                </dd>
              </div>
            </dl>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-full border-2 border-orange/40 px-6 py-3 text-sm font-medium text-rust hover:border-orange"
            >
              Open in Google Maps
              <span aria-hidden>→</span>
            </a>
          </div>

          <Reveal
            effect="right"
            className="overflow-hidden rounded-3xl border border-line shadow-xl shadow-brown/10"
          >
            <iframe
              title="Map — Graphic Era University, Dehradun"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
              className="h-[360px] w-full sm:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
      <Skyline className="opacity-50" animate={false} variant="light" />
    </section>
  );
}
