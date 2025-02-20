import { Gloock, Instrument_Sans, Montserrat } from "next/font/google";

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

import Image from "next/image";

import "./PrevOno.css";
import FireFliesWrapper from "./FireFlies";

export default function PrevOnoSection() {
  return (
    <>
      <h2 className={`prev-ono-card-title text-3xl pl-4 font-semibold ${gloock.className}`}>A little about past</h2>
      <div className="prev-ono-container m-4 pl-4 pr-4 pt-4">
        <div className="prev-ono-bg-texture"></div>
        <div className="prev-ono-title">
          <div className="prev-ono-title-logo h-12">
            <Image height={0} width={0} sizes="100%" src="/LandingPageImgs/PrevOnoLogo.png" alt="Previous Oneiros Logo" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
          </div>
          <h5 className="prev-ono-title-date -mt-3 text-center text-zinc-400">
            <em>22 Feb - 24 Feb</em>
          </h5>
          <h4 className="prev-ono-title-motto text-center text-2xl font-bold text-zinc-300">
            <span className="text-4xl">L</span>IVE <span className="text-4xl">L</span>OVE <span className="text-4xl">L</span>AUGH
          </h4>
        </div>
        <h3 className={`prev-ono-section-title ${montserrat.className}`}>Our Artists</h3>
        <div className="prev-ono-artist-container">
          <div className="prev-ono-artist-1">
            <h4 className="text-center font-bold">Day 1</h4>
            <FireFliesWrapper>
              <div className="prev-ono-artist-img-small">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="/LandingPageImgs/Naalayak.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <h4 className={`prev-ono-artist-name text-center ${montserrat.className}`}>Naalayak</h4>
              </div>
            </FireFliesWrapper>
          </div>
          <div className="prev-ono-artist-3">
            <h4 className="text-center font-bold">Day 3</h4>
            <FireFliesWrapper>
              <div className="prev-ono-artist-img-large">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/6.jpeg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <h4 className={`prev-ono-artist-name text-center ${montserrat.className}`}>Gajendra Verma</h4>
              </div>
            </FireFliesWrapper>
          </div>
          <div className="prev-ono-artist-2">
            <h4 className="text-center font-bold">Day 2</h4>
            <FireFliesWrapper>
              <div className="prev-ono-artist-img-small">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/12.jpeg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <h4 className={`prev-ono-artist-name text-center ${montserrat.className}`}>Progressive Bros</h4>
              </div>
            </FireFliesWrapper>
          </div>
        </div>
        <h3 className={`prev-ono-section-title ${montserrat.className}`}>Major Events</h3>
        <div className="flex justify-center">
          <div className={`prev-ono-major-events-container ${montserrat.className}`}>
            <div className="prev-ono-major-text-1 prev-ono-major-text">
              <span className="font-black">Requiem –</span> Ultimate Battle of the Bands
            </div>
            <div className="prev-ono-major-img-1 rounded-2xl">
              <FireFliesWrapper>
                <Image
                  className="rounded-2xl"
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/4.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </FireFliesWrapper>
            </div>
            <div className="prev-ono-major-text-2 prev-ono-major-text">
              <span className="font-black">Destival –</span> The Ultimate Dance Faceoff
            </div>
            <div className="prev-ono-major-img-2 rounded-2xl">
              <Image className="rounded-2xl" height={0} width={0} sizes="100%" src="https://jaipur.manipal.edu/img/dsw/event/11.jpeg" alt="Previous Oneiros Logo" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
            </div>
            <div className="prev-ono-major-text-3 prev-ono-major-text">
              <span className="font-black">Cosmos</span> 
            </div>
            <div className="prev-ono-major-img-3 rounded-2xl">
              <FireFliesWrapper>
                <Image
                  className="rounded-2xl"
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/10.jpeg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </FireFliesWrapper>
            </div>
            <div className="prev-ono-major-text-4 prev-ono-major-text">
              <span className="font-black">Carnival&nbsp;</span>
            </div>
            <div className="prev-ono-major-img-4 rounded-2xl">
              <FireFliesWrapper>
                <Image
                  className="rounded-2xl"
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/8.jpeg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </FireFliesWrapper>
            </div>
          </div>
        </div>
        <h3 className={`prev-ono-section-title ${montserrat.className}`}>Minor Events</h3>
        <div className="prev-ono-minor-container my-6 grid grid-cols-2">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <div className="prev-ono-minor-img-1 prev-ono-minor-img">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/31.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="prev-ono-minor-img-2 prev-ono-minor-img">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/16.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="prev-ono-minor-img-3 prev-ono-minor-img">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/38.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="prev-ono-minor-img-4 prev-ono-minor-img">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/37.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={`prev-ono-minor-text ${instrumentSans.className}`}>ONEIROS isn’t just about the big stages or star performers—it’s the 40+ events happening all over campus that make the fest truly legendary. Every club at MUJ brings something unique to the table, turning the entire college into a buzzing hub of creativity, competition, and pure energy. From intense showdowns to offbeat fun, these events are what make ONEIROS come alive and set the campus on fire like nothing else!</div>

        </div>
        <h3 className={`prev-ono-section-title ${montserrat.className}`}>We forgot something? ... Yes!</h3>
        <div className="prev-ono-promo-container grid grid-cols-2">
          <div className={`flex flex-col gap-5 ${instrumentSans.className}`}>
            <span>More than 15K people attended Oneiros&apos;24, Several special artists, guests, and participants from all around the nation.</span>
            <span>Ah and also somebody special showed up!</span>
            <span>The crowd went crazy!!</span>
            <span>Overall it was a great time here and Oneiros&apos;24 was a great fun for everyone and a huge success for us.</span>
          </div>
          <div className="prev-ono-promo-img justify-self-center">
            <FireFliesWrapper>
              <Image height={0} width={0} sizes="100%" src="/LandingPageImgs/SidRas.jpg" alt="Previous Oneiros Logo" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
            </FireFliesWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
