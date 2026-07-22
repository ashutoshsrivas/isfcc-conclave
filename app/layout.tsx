import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit, Prata } from "next/font/google";
import { EVENT } from "@/content/event";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gcci.live"),
  title:
    "3rd International Smart & Future Cities Conclave 2026 | Graphic Era University, Dehradun",
  description:
    "Graphic Era (Deemed to be University), Dehradun — NAAC A+ accredited, among India's top 50 universities (NIRF 2025) — hosts the 3rd International Smart & Future Cities Conclave (ISFCC 2026), organised by GCCI. Intelligent Urban Futures: Technology, Sustainability & Governance. 21–22 August 2026.",
  applicationName: "ISFCC 2026 · Graphic Era University",
  authors: [
    { name: "Graphic Era (Deemed to be University), Dehradun" },
    { name: "Global Chamber of Commerce & Industry (GCCI)" },
  ],
  publisher: "Graphic Era (Deemed to be University), Dehradun",
  keywords: [
    "Graphic Era University",
    "Graphic Era Deemed to be University",
    "GEU Dehradun",
    "Smart Cities",
    "Future Cities",
    "ISFCC 2026",
    "GCCI",
    "Dehradun",
    "Uttarakhand",
    "Urban Governance",
    "India Africa",
    "Conclave 2026",
  ],
  openGraph: {
    title:
      "3rd International Smart & Future Cities Conclave 2026 — Graphic Era University, Dehradun",
    description:
      "Hosted at Graphic Era (Deemed to be University), Dehradun. Intelligent Urban Futures — Technology, Sustainability & Governance. 21–22 August 2026. Organised by GCCI.",
    url: EVENT.url,
    siteName: "ISFCC 2026 · Graphic Era University",
    images: [
      {
        url: "/banners/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "3rd International Smart & Future Cities Conclave 2026 at Graphic Era University, Dehradun — smart city skyline",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ISFCC 2026 | Graphic Era University, Dehradun — 21–22 August 2026",
    description:
      "Intelligent Urban Futures — hosted at Graphic Era (Deemed to be University), Dehradun. Organised by GCCI.",
    images: ["/banners/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${plexMono.variable} ${outfit.variable}`}
    >
      <body className="grain">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
