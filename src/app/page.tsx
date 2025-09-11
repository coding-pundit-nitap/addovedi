import { EventsSection } from "../components/EventsSection";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { SponsorsSection } from "../components/SponsorsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <EventsSection />
      <SponsorsSection />
      <FooterSection />
    </div>
  );
}
