"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Gloock, Instrument_Sans, Montserrat, Inclusive_Sans } from "next/font/google";
import FireFliesWrapper from "./FireFlies";

// Configure fonts
const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloock",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-instrument-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inclusiveSans = Inclusive_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inclusive-sans",
});

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-21T00:00:00").getTime(); // Set your target date here

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Video Background */}
      <FireFliesWrapper fliesCount={50} fliesSize={[1, 2]} color="255, 229, 172" padding={false} zIndex={5}>
        <div className="w-full h-[50vh] md:h-[70vh]">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/tree.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </FireFliesWrapper>
      <main className={`min-h-screen bg-[#0a0a0a] text-white px-4 pb-4 md:p-8 ${instrumentSans.className} relative overflow-hidden`}>
        {/* Semi-Transparent Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/50 z-10" aria-hidden="true" />

        {/* Countdown Timer */}
        <FireFliesWrapper fliesCount={20} zIndex={5}>
          <div className="max-w-4xl mx-auto mb-16 p-6 bg-black/20 rounded-3xl backdrop-blur-sm relative z-30">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="flex flex-col">
                <span className={`text-5xl md:text-7xl font-bold text-purple-400 ${inclusiveSans.className}`}>{timeLeft.days}</span>
                <span className="text-gray-400 text-sm md:text-base">Days</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 to-pink-300 bg-clip-text text-transparent ${inclusiveSans.className}`}>{timeLeft.hours.toString().padStart(2, "0")}</span>
                <span className="text-gray-400 text-sm md:text-base">Hours</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent ${inclusiveSans.className}`}>{timeLeft.minutes.toString().padStart(2, "0")}</span>
                <span className="text-gray-400 text-sm md:text-base">Minutes</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ${inclusiveSans.className}`}>{timeLeft.seconds.toString().padStart(2, "0")}</span>
                <span className="text-gray-400 text-sm md:text-base">Seconds</span>
              </div>
            </div>
          </div>
        </FireFliesWrapper>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-6 relative z-30">
          <h1 className={`text-5xl md:text-6xl ${gloock.className} tracking-[-0.64px]`}>
            About{" "}
            <span
              className={`font-black text-6xl ${montserrat.className} text-center tracking-[-4.48px]`}
              style={{
                textShadow: "0px 4px 25.3px #cacaca66",
                background: "linear-gradient(180deg, rgb(255, 184.88, 239.81) 0%, rgb(99.42, 52.33, 209.31) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Oneiros
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-gray-200">The wait is over! ONEIROS ’25, the annual cultural festival of Manipal University Jaipur, is going to be one of the highlights of the year.
          </p>

          {/* Pointer SVG with Levitating Breathing Effect */}
          <div className="ml-0">
            <Image
              src="/pointer.svg"
              width={0}
              height={0}
              sizes="100%"
              className="animate-levitate"
              alt="Pointer"
              style={{
                height: "75%",
                width: "75%",
                objectFit: "cover",
              }}
            />
          </div>

          <p className="text-lg leading-relaxed text-gray-200">The excitement begins with The Road to ONEIROS from February 15, leading up to three days to remember from February 21 to 23. With the most highly anticipated events of the year, brought to you by clubs across campus, this edition promises an experience like no other.</p>
          <p className="text-lg leading-relaxed text-gray-200">Get ready for scintillating performances, edge-of-the-seat contests, and memories that will remain long after the fest concludes. Mark the dates and be a part of the celebrations!</p>
        </div>
      </main>
    </>
  );
}
