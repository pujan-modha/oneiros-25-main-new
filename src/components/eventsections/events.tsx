import Image from "next/image";
import React from "react";
import { Timeline } from "./eventstimeline";

import "../eventsections/style.css"

export function TimelineDemo() {
  const data = [
    {
      
      title: "21st",
      content: (
        
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-wrap font-instrument-sans mb-8">
          Destival – The Ultimate Dance Faceoff

          The stage is set, the beats are dropping, and the best dancers are here to own it.
          Destival brings top talent from everywhere to battle it out, 
          delivering high-energy performances that set the floor on fire.
          Get ready for a dance showdown like never before!
          </p>
          <div>
            <Image
              src='/events/destival.png'
              alt="startup template"
              width={1200}
              height={3000}
              className="rounded-lg object-fill h-auto w-96 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "22nd",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-wrap font-instrument-sans mb-8">
          Requiem – Manipal University Jaipur’s Ultimate Battle of the Bands* 

Raw energy, electrifying music, and fierce competition-where the best bands clash for glory. 
Feel the rhythm, own the stage, and let the music speak!
          </p>
          
         
            <Image
              src='/events/requiem.png'
              alt="hero template"
              width={1200}
              height={3000}
              className="rounded-lg object-fill h-auto w-96 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          
        </div>
      ),
    },
    {
      title: "22nd",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-wrap font-instrument-sans mb-4">
          Cosmos - Step into the world of glamour! The Fashion Walk 2025 brings together top designers, trendsetters,
           and fashion enthusiasts for an unforgettable showcase of elegance and innovation.
          </p>
         
          <div>
            <Image
              src='/events/cosmos.png'
              alt="hero template"
              width={1200}
              height={3000}
              className="rounded-lg object-fill h-auto w-96 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
     
    </div>
  );
}
