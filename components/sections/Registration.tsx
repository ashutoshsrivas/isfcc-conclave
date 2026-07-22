import { EVENT } from "@/content/event";
import {
  FEES,
  HYBRID_NOTE,
  IMPORTANT_DATES,
  PAYMENT,
  SPONSORSHIP,
} from "@/content/registration";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function Registration() {
  return (
    <section id="registration" className="bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Important Dates · Registration"
          title="Dates, fees & sponsorship."
          intro={HYBRID_NOTE}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Important dates */}
          <Reveal effect="left" className="rounded-3xl border border-line bg-cream p-8">
            <p className="mono-label text-orange">Important Dates</p>
            <dl className="mt-6 divide-y divide-line">
              {IMPORTANT_DATES.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="text-brown-soft">{d.label}</dt>
                  <dd className="shrink-0 font-semibold text-brown">
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={EVENT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-6 inline-block rounded-full bg-orange px-7 py-3 font-semibold text-cream hover:bg-orange-bright"
            >
              Express Interest / Register
            </a>
          </Reveal>

          <div className="flex flex-col gap-8">
            {/* Fee schedule */}
            <Reveal effect="right" className="rounded-3xl border border-line bg-cream p-8">
              <p className="mono-label text-orange">Fee Schedule</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-line text-sm text-brown-soft">
                      <th className="py-2 pr-4 font-medium">
                        Registration Type
                      </th>
                      <th className="py-2 pr-4 font-medium">Indian (INR)</th>
                      <th className="py-2 font-medium">Foreign (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEES.map((f) => (
                      <tr key={f.type} className="border-b border-line/60">
                        <td className="py-3 pr-4 text-brown">{f.type}</td>
                        <td className="py-3 pr-4 font-semibold text-rust">
                          {f.inr}
                        </td>
                        <td className="py-3 font-semibold text-rust">
                          {f.usd}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Sponsorship */}
            <Reveal effect="right" delay={80} className="rounded-3xl border border-line bg-cream p-8">
              <p className="mono-label text-orange">Sponsorship</p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {SPONSORSHIP.map((s) => (
                  <li
                    key={s.tier}
                    className="rounded-2xl border border-line bg-card p-4"
                  >
                    <p className="font-semibold text-brown">{s.tier}</p>
                    <p className="mt-1 text-rust">{s.cost}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Mode of payment */}
        <Reveal className="mt-8 rounded-3xl border border-line bg-cream p-8">
          <p className="mono-label text-orange">Mode of Payment</p>
          <div className="mt-4 grid gap-x-10 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <p>
              <span className="text-brown-soft">Beneficiary Name — </span>
              <span className="font-medium text-brown">{PAYMENT.beneficiary}</span>
            </p>
            <p>
              <span className="text-brown-soft">Bank Name — </span>
              <span className="font-medium text-brown">{PAYMENT.bank}</span>
            </p>
            <p>
              <span className="text-brown-soft">Account Number — </span>
              <span className="font-medium text-brown">{PAYMENT.account}</span>
            </p>
            <p>
              <span className="text-brown-soft">Branch ID — </span>
              <span className="font-medium text-brown">{PAYMENT.branchId}</span>
            </p>
            <p>
              <span className="text-brown-soft">IFSC Code — </span>
              <span className="font-medium text-brown">{PAYMENT.ifsc}</span>
            </p>
            <p>
              <span className="text-brown-soft">SWIFT Code — </span>
              <span className="font-medium text-brown">{PAYMENT.swift}</span>
            </p>
            <p>
              <span className="text-brown-soft">MICR Code — </span>
              <span className="font-medium text-brown">{PAYMENT.micr}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
