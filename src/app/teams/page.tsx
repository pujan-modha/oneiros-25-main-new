import { Gloock, Montserrat } from "next/font/google";
import Team from "./Team";

// Configure fonts
const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloock",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

interface TeamMember {
  quote: string;
  imageUrl: string;
  svgUrl: string; // Path to the local SVG file
}

const teamMembers: TeamMember[] = [
  {
    quote: "Est dolores explicabo ut natus omnis et perferendis deleniti et reiciendis quasi.",
    imageUrl: "/images/3.jpeg",
    svgUrl: "/ayaanName.svg", // Path to the local SVG file
  },
  {
    quote: "Creativity is intelligence having fun.",
    imageUrl: "/images/2.jpeg",
    svgUrl: "/kuljeetName.svg", // Path to the local SVG file
  },
  {
    quote: "Code is poetry.",
    imageUrl: "/images/user1.png",
    svgUrl: "/uditaName.svg", // Path to the local SVG file
  },
  {
    quote: "Est dolores explicabo ut natus omnis et perferendis deleniti et reiciendis quasi.",
    imageUrl: "/images/1.jpeg",
    svgUrl: "/nishchayName.svg", // Path to the local SVG file
  },
  {
    quote: "Creativity is intelligence having fun.",
    imageUrl: "/images/4.jpeg",
    svgUrl: "/ayushName.svg", // Path to the local SVG file
  },
  {
    quote: "Code is poetry.",
    imageUrl: "/images/5.jpeg",
    svgUrl: "/shivamName.svg", // Path to the local SVG file
  },
];

// Additional team members for the second row
const additionalTeamMembers: TeamMember[] = [
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    imageUrl: "/images/8.png",
    svgUrl: "/krishnavName.svg", // Path to the local SVG file
  },
  {
    quote: "The best way to predict the future is to invent it.",
    imageUrl: "/images/7.png",
    svgUrl: "/neetName.svg", // Path to the local SVG file
  },
];

export default function TeamSection() {
  return (
    <>
      <section className="min-h-screen bg-[#0a0a0a] py-20 px-4 relative overflow-hidden">
        {/* Radial Gradient Effects */}
        <div
          className="absolute top-0 left-0 w-[465px] h-[465px] rounded-full z-0"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgb(8.29, 0, 27.63) 0%, rgb(10, 10, 10) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[734px] h-[834px] rounded-[367px/417px] z-0"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgb(8.29, 0, 27.63) 0%, rgba(10, 10, 10, 0) 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className={`text-6xl ${gloock.className} tracking-[-0.64px] flex items-center text-center justify-center mb-12 gap-4 tracking-tight`}>
            The{" "}
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
              Team
            </span>
          </h1>

          {/* First Row: 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative rounded-3xl overflow-hidden backdrop-blur-sm bg-black/20 border border-white/10">
                <div className="aspect-square relative overflow-hidden">
                  {/* Use <img> instead of Next.js Image */}
                  <img src={member.imageUrl || "/placeholder.svg"} alt="Team member profile" className="w-full h-full object-cover" />
                </div>

                <div className="relative flex justify-center">
                  <div className="absolute -top-2 flex justify-center mb-3 w-[80%]">
                    <div className="flex justify-center rounded-xl py-3 px-4">
                      {/* Use <img> for the SVG */}
                      <img src={member.svgUrl} alt="Team member name and role" className="w-[80%] animate-levitate h-auto" />
                    </div>
                  </div>

                  <div className="pt-16 pb-8 px-6">
                    <p className="text-[#9f9f9f] text-center italic">&quot;{member.quote}&quot;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            {additionalTeamMembers.map((member, index) => (
              <div key={index} className="relative rounded-3xl overflow-hidden backdrop-blur-sm bg-black/20 border border-white/10">
                <div className="aspect-square relative overflow-hidden">
                  {/* Use <img> instead of Next.js Image */}
                  <img src={member.imageUrl || "/placeholder.svg"} alt="Team member profile" className="w-full h-full object-cover" />
                </div>

                <div className="relative flex justify-center">
                  <div className="absolute -top-2 flex justify-center w-[80%]">
                    <div className="flex justify-center rounded-xl py-3 px-4">
                      {/* Use <img> for the SVG */}
                      <img src={member.svgUrl} alt="Team member name and role" className="w-[80%] animate-levitate h-auto" />
                    </div>
                  </div>

                  <div className="pt-16 pb-8 px-6">
                    <p className="text-[#9f9f9f] text-center italic">&quot;{member.quote}&quot;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Team />
    </>
  );
}
