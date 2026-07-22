import { CONTACT, EVENT } from "@/content/event";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tracks from "@/components/sections/Tracks";
import Agenda from "@/components/sections/Agenda";
import WhoAttends from "@/components/sections/WhoAttends";
import Delegations from "@/components/sections/Delegations";
import Partners from "@/components/sections/Partners";
import AboutGCCI from "@/components/sections/AboutGCCI";
import Venue from "@/components/sections/Venue";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT.name,
  description: EVENT.themeFull,
  startDate: "2026-08-21",
  endDate: "2026-08-22",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  location: {
    "@type": "Place",
    name: EVENT.venueFull,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: CONTACT.organiser,
    url: CONTACT.gcci,
  },
  url: EVENT.url,
  image: "/banners/isfcc-social.png",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Agenda />
        <WhoAttends />
        <Delegations />
        <Partners />
        <AboutGCCI />
        <Venue />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
