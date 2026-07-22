import Image from "next/image";
import { CONTACT, EVENT, NAV } from "@/content/event";
import Skyline from "../Skyline";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-espresso-soft">
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-6">
              <div className="flex h-14 items-center rounded-xl bg-cream px-4">
                <Image
                  src="/logo/geu.png"
                  alt="Graphic Era University (GEU), Dehradun — host"
                  width={150}
                  height={40}
                  className="h-auto w-auto object-contain"
                  style={{ maxHeight: 34 }}
                />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream">
                <Image
                  src="/logo/gcci.png"
                  alt="Global Chamber of Commerce & Industry (GCCI) — organiser"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="display mt-6 text-2xl text-cream">{EVENT.name}</p>
            <p className="mt-2 text-lg text-amber">{EVENT.theme}</p>
            <p className="mt-4 text-sm">
              {EVENT.dates} · {EVENT.venueFull}
            </p>
            <p
              className="mono-label mt-2 text-espresso-soft/70"
              style={{ fontSize: "0.6rem" }}
            >
              {EVENT.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Footer">
              <p className="mono-label text-amber">Explore</p>
              <ul className="mt-4 space-y-2.5">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="text-sm transition-colors hover:text-cream"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="mono-label text-amber">Official links</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={EVENT.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-cream"
                  >
                    Event page
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.gcci}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-cream"
                  >
                    GCCI
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.educationCouncil}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-cream"
                  >
                    GCCI Education Council
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.emails[0]}`}
                    className="text-sm transition-colors hover:text-cream"
                  >
                    {CONTACT.emails[0]}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-espresso-soft/25" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="mono-label text-espresso-soft/70"
            style={{ fontSize: "0.6rem" }}
          >
            Organised by {EVENT.organiserShort}, {EVENT.organiserCity} · Hosted
            at {EVENT.venue}, Dehradun
          </p>
          <p
            className="mono-label text-espresso-soft/70"
            style={{ fontSize: "0.6rem" }}
          >
            Tentative creative — details subject to change
          </p>
        </div>
      </div>

      <Skyline variant="dark" className="opacity-70" />
    </footer>
  );
}
