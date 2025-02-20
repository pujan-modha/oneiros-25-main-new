import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

import "./FAQSection.css";

import Accordion from "./Accordion";

export default function FAQSection() {
  return (
    <>
      <h2 className={`faq-title text-3xl pl-4 mb-2 font-semibold ${montserrat.className}`}>FAQ</h2>
      <Accordion title="⁠⁠Who can attend ONEIROS-25?" content="<span class='italic'>ONEIROS is open to all students of Manipal University Jaipur, and select events may allow external participation. Check the event details on the website for eligibility criteria and passes.</span>" />
      <Accordion title="When is ONEIROS-25 happening?" content="<span class='italic'>The excitement begins with Road to ONEIROS starting on February 14, leading up to the main fest from February 21 to 23.</span>" />
      <Accordion
        title="How to get Entry into ONEIROS-25?"
        content=" <span class='italic'>You can register for the events on the website and get your passes. The event details will have all the information you need to participate.
        </span>"
      />
    </>
  );
}
