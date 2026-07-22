import Image from "next/image";
import { EVENT } from "@/content/event";
import CoBranding from "../CoBranding";
import Countdown from "../Countdown";

/**
 * Hero — the official creative, staged: logos settle, the hairline draws,
 * the serif name ascends, then the city unveils from behind a cream veil
 * and breathes in a slow ken-burns drift.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="aurora" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Co-branding row — single lockup on first view */}
        <div
          className="rise flex items-center justify-between pb-7"
          style={{ animationDelay: "0.1s" }}
        >
          <CoBranding labels={false} />
          <span className="mono-label hidden text-brown-soft sm:block">
            {EVENT.dates} · Dehradun
          </span>
        </div>
        <div className="gold-rule rule-grow" />

        {/* Monumental serif title */}
        <div className="pt-12 text-center sm:pt-16">
          <p
            className="rise mb-5 text-lg font-medium text-orange sm:text-xl"
            style={{ animationDelay: "0.55s" }}
          >
            3<sup>rd</sup> International Edition
          </p>
          <h1 className="display mx-auto text-[11.5vw] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            <span className="mask-line">
              <span className="ink-rust" style={{ animationDelay: "0.7s" }}>
                Smart &amp; Future
              </span>
            </span>
            <span className="mask-line">
              <span className="ink-rust" style={{ animationDelay: "0.85s" }}>
                Cities Conclave
              </span>
            </span>
          </h1>

          <p
            className="rise-blur mx-auto mt-6 text-xl font-semibold text-brown sm:text-2xl"
            style={{ animationDelay: "1.2s" }}
          >
            {EVENT.tagline}
          </p>
          <p
            className="rise mt-3 text-base text-brown-soft sm:text-lg"
            style={{ animationDelay: "1.4s" }}
          >
            <span className="display text-rust">{EVENT.theme}</span>
            <span className="mx-3 text-amber" aria-hidden>
              —
            </span>
            {EVENT.themePillars.join(" · ")}
          </p>
        </div>

        {/* The city, unveiled */}
        <div className="unveil photo-frame mt-12 sm:mt-14">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/8]">
            <Image
              src="/banners/hero.jpg"
              alt="Smart city skyline at dusk, overlaid with a glowing network of connected urban services"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="kenburns object-cover"
            />
          </div>
        </div>

        {/* Date / Venue register — the poster's info card */}
        <div
          className="rise mx-auto -mt-10 max-w-4xl sm:-mt-12"
          style={{ animationDelay: "1.9s" }}
        >
          <div className="relative z-10 grid gap-6 rounded-3xl border border-line bg-card p-8 shadow-xl shadow-brown/10 sm:grid-cols-[auto_1px_1fr] sm:items-center sm:gap-10 sm:p-10">
            <div>
              <p className="display text-4xl text-rust sm:text-5xl">
                21<sup className="text-2xl">st</sup> – 22
                <sup className="text-2xl">nd</sup>
              </p>
              <p className="mt-2 text-lg font-bold tracking-wide text-brown">
                AUGUST 2026
              </p>
              <p className="text-sm text-brown-soft">{EVENT.datesDays}</p>
            </div>
            <div className="hidden h-full w-px bg-line sm:block" aria-hidden />
            <div>
              <p className="mono-label text-brown-soft">Venue Details</p>
              <p className="mt-2 text-xl font-bold text-orange sm:text-2xl">
                Graphic Era (Deemed to be University),
              </p>
              <p className="text-lg text-brown">Dehradun — Uttarakhand</p>
            </div>
          </div>
        </div>

        {/* Countdown + CTAs */}
        <div
          className="rise mt-12 flex flex-col items-center gap-8 pb-20"
          style={{ animationDelay: "2.15s" }}
        >
          <Countdown />
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={EVENT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine rounded-full bg-orange px-9 py-4 text-lg font-semibold text-cream shadow-lg shadow-orange/25 hover:bg-orange-bright"
            >
              Register / Express Interest
            </a>
            <a
              href="#about"
              className="btn-shine rounded-full border-2 border-orange/40 px-9 py-4 text-lg font-medium text-rust hover:border-orange"
            >
              Know More
            </a>
          </div>
          <p className="mono-label text-brown-soft" style={{ fontSize: "0.62rem" }}>
            Organised by {EVENT.organiserShort}, {EVENT.organiserCity} · Hosted
            at {EVENT.venue}, Dehradun
          </p>
        </div>
      </div>
    </section>
  );
}
