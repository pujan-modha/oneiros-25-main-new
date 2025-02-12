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
      <Accordion title="First Accordion or question goes here!" content="<span class='italic'>First Accordion content</span>" />
      <Accordion title="Second Accordion" content="<span class='italic'>Second Accordion content</span>" />
      <Accordion
        title="Third Accordion"
        content=" <span class='italic'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </span>"
      />
    </>
  );
}
