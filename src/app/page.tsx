import PrevOnoSection from "./_LandingPageComponents/PrevOno";
import FAQSection from "./_LandingPageComponents/FAQSection";
import Timer from "./_LandingPageComponents/timer";
import LeadershipMessage from "./_LandingPageComponents/Message";

export default function Home() {
  return (
    <>
      <Timer />
      <PrevOnoSection />
      <LeadershipMessage />
      <FAQSection />
    </>
  );
}
