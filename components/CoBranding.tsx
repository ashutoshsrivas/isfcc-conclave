import Image from "next/image";

/**
 * Co-branded lockup — GEU (host) and GCCI (organiser), equal weight per
 * CLAUDE.md §3. On the warm cream ground the logos sit directly on the
 * page, as in the official creative.
 */
export default function CoBranding({
  labels = true,
  size = "md",
}: {
  labels?: boolean;
  size?: "sm" | "md";
}) {
  const geuW = size === "sm" ? 150 : 230;
  const geuH = size === "sm" ? 34 : 60;
  const gcciS = size === "sm" ? 40 : 64;

  return (
    <div
      className={`flex items-center ${size === "sm" ? "gap-4" : "gap-6 sm:gap-10"}`}
    >
      <div className="flex flex-col items-center gap-1.5">
        <Image
          src="/logo/geu.png"
          alt="Graphic Era University (Deemed to be University), Dehradun — host and Knowledge & Venue Partner"
          width={geuW}
          height={geuH}
          className="h-auto w-auto object-contain"
          style={{ maxHeight: geuH }}
          priority
        />
        {labels && (
          <span
            className="mono-label text-brown-soft"
            style={{ fontSize: "0.55rem" }}
          >
            Host · Knowledge Partner
          </span>
        )}
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <Image
          src="/logo/gcci.png"
          alt="Global Chamber of Commerce & Industry (GCCI) — organiser"
          width={gcciS}
          height={gcciS}
          className="object-contain"
          priority
        />
        {labels && (
          <span
            className="mono-label text-brown-soft"
            style={{ fontSize: "0.55rem" }}
          >
            Organiser
          </span>
        )}
      </div>
    </div>
  );
}
