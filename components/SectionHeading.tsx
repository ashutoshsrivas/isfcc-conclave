import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false, // on the orange feature band
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";
  const eyebrowColor = dark ? "text-cream/85" : "text-orange";
  const titleColor = dark ? "text-cream" : "text-rust";
  const introColor = dark ? "text-cream/80" : "text-brown-soft";
  const ruleColor = dark ? "bg-cream/70" : "bg-amber";

  return (
    <Reveal className={`flex flex-col ${alignment} gap-4`}>
      <span className={`mono-label ${eyebrowColor}`}>{eyebrow}</span>
      <h2
        className={`display text-3xl ${titleColor} sm:text-4xl md:text-5xl`}
        style={{ maxWidth: "22ch" }}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`text-lg leading-relaxed ${introColor}`}
          style={{ maxWidth: "60ch" }}
        >
          {intro}
        </p>
      )}
      <span
        className={`rule-draw mt-1 block h-px w-24 ${ruleColor}`}
        aria-hidden
        style={{ opacity: 0.9 }}
      />
    </Reveal>
  );
}
