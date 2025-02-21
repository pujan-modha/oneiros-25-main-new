"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

type Sponsor = {
  name: string;
  logo: string;
};

type Benefit = string;

const sponsors: Sponsor[] = [
  { name: "", logo: "1P.png" },
  { name: "", logo: "2P.png" },
  { name: "", logo: "3P.png" },
  { name: "", logo: "4P.png" },
  { name: "", logo: "5P.png" },
  { name: "", logo: "6P.png" },
];



const benefits: Benefit[] = [
  "Unrivaled Visibility",
  "Go Big, Stay Bold",
  "Viral Reach, Real Impact",
  "Elite Connections Await",
  "Engage. Activate. Inspire.",
];

const radius = 120;
const centerImage = "https://jaipurliteraturefestival.org/assets/peacock_1-B9VwMuFl.png";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 3, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

const SponsorsSection: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  const [rotation, setRotation] = useState(0);
  const [benefitIndex, setBenefitIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 60);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const benefitInterval = setInterval(() => {
      setBenefitIndex((prev) => (prev + 1) % benefits.length);
    }, 2000);

    return () => clearInterval(benefitInterval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-white text-center p-4 overflow-hidden" 
             style={{ background: 'transparent' }}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="font-gloock font-thin">Our</span>{" "}
        <br className="sm:hidden" />
        <span className="gradient-text shiny-text font-montserrat font-black pb-[2px]">
          very cool
        </span>{" "}
        <br className="sm:hidden" />
        <span className="font-gloock font-thin">Partners</span>
      </h1>

      <div className="relative w-[380px] h-[380px] flex items-center justify-center mt-16">
      <div className="absolute w-[150px] h-[150px] flex items-center justify-center z-20 group">
          <img
            src={centerImage}
            alt="Center Logo"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 text-lg font-semibold transition-opacity">
            
          </div>
        </div>

        {sponsors.map((sponsor, index) => {
          const angle = ((index * 60) + rotation + 30) % 360;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const isTop = (angle + 90) % 360 === 0;

          return (
            <motion.div
              key={index}
              className="absolute w-[150px] h-[150px] flex items-center justify-center group"
              animate={{
                x,
                y,
                scale: isTop ? 1.25 : 1,
                filter: isTop ? "brightness(1)" : "brightness(0.5)",
                zIndex: isTop ? 10 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-[150px] h-[150px] object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-lg font-semibold transition-opacity">
                <ShinyText text={sponsor.name} />
              </div>
            </motion.div>
          );
        })}

      </div>

      <div className="mt-10 text-lg sm:text-xl md:text-2xl font-medium flex flex-col items-center">
      <span className="text-2xl sm:text-3xl md:text-4xl font-thin font-gloock">
          The{' '}
          <span className="gradient-text shiny-text font-montserrat font-black">
            Oneiros
          </span>{' '}
          <span className="font-thin">Advantage</span>
        </span>
        <div className="relative mt-2 w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={benefitIndex}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="font-instrument-sans inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-lg sm:text-xl md:text-2xl font-semibold 
                bg-transparent text-white shadow-lg relative"
            >
              {benefits[benefitIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      

      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Gloock&family=Instrument+Sans:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');
        
        .font-gloock { font-family: 'Gloock', serif; }
        .font-instrument-sans { font-family: 'Instrument Sans', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }

        .shiny-text {
          color: #ffffff;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,  
            rgba(255, 255, 255, 0.9) 50%, 
            rgba(255, 255, 255, 0) 70%   
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          display: inline-block;
          animation: shine 2s linear infinite;
          line-height: 1.1;
        }

        @keyframes shine {
          0% { background-position: 100%; }
          100% { background-position: -100%; }
        }

        .gradient-text {
          background: linear-gradient(90deg, #9400D3, #FF1493, #00FFFF);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientAnimation 3s ease-in-out infinite;
        }

        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default SponsorsSection;
