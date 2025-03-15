import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="waitlist__page relative bg-[#E83226] min-h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* ROKK Logo */}
      <div className="absolute top-8 right-8 z-10">
        <Link href="https://www.rokkelectro.se" target="_blank" className="block transform hover:scale-105 transition-transform duration-200">
          <Image
            src="/images/rokk-logo.svg"
            alt="ROKK Logo"
            width={126}
            height={126}
            className="w-[6.3rem] h-[6.3rem]"
          />
        </Link>
      </div>

      <main className="flex flex-col items-center justify-center overflow-hidden relative z-10 w-full max-w-[1600px] px-4">
        {/* Left Side */}
        <div className="left-side mx-0 flex flex-col items-center justify-start gap-y-14 md:gap-y-10 lg:items-start">
          <div className="flex flex-col items-center justify-start gap-y-5 lg:items-start lg:gap-y-2">
            {['Ta', 'Kontroll', 'Över', 'Din', 'Elkvalitet'].map((word, index) => (
              <h1 key={index} className={`animate-fadeInUp animation-delay-${100 * (index + 1)} text-4xl font-bold leading-[1.05] text-white/70 sm:text-[50px] md:text-[70px] xl:text-[80px]`}>
                {word}
              </h1>
            ))}
          </div>

          {/* Button */}
          <div className="flex w-full items-center justify-center lg:justify-start">
            <a
              href="mailto:info@rokkelectro.se"
              className="h-14 px-8 rounded-full bg-white text-[#E83226] font-bold shadow-md hover:bg-gray-100 transition-colors duration-200 text-lg inline-flex items-center justify-center gap-2"
            >
              ⚡ Elkvalitet som spökar? Kontakta oss!
            </a>
          </div>

          {/* Features list */}
          <div className="flex flex-col items-center justify-center gap-y-1.5 text-base font-normal text-white md:text-base lg:items-start">
            {[
              'Identifiera övertoner & transienter',
              'Kompletta lösningar för stabil elkvalitet',
              'En god investering'
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-x-1.5">
                <span className="relative inline-block">&#x2714; {text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Cards */}
        <div className="right__side__deck relative mt-6 flex flex-col items-center justify-center font-sans lg:grid lg:grid-cols-2 lg:gap-6 overflow-y-auto max-h-screen lg:max-h-none">
          {[
            {
              title: 'Elkvalitetsanalys',
              service: 'Energioptimering',
              description: 'Professionell analys för att identifiera problem som påverkar din energiförbrukning...'
            },
            {
              title: 'Övertonsmätningar',
              service: 'Skydd av utrustning',
              description: 'Övertoner kan orsaka allvarliga problem i din elanläggning såsom överbelastning och varmgång...'
            },
            {
              title: 'Vad vi erbjuder',
              service: 'Problemlösning',
              description: 'Vi identifierar brister i din elanläggning och levererar kostnadseffektiva lösningar...'
            },
            {
              title: 'Effektfaktorkorrigering',
              service: 'Kostnadsreducering',
              description: 'Minska strömförbrukning och elkostnader betydligt genom optimerad effektfaktor...'
            }
          ].map((card, index) => (
            <div key={index} className="flex h-[21rem] w-[21rem] flex-col items-start justify-between gap-y-2.5 overflow-hidden rounded-[20px] bg-white p-6 shadow-lg mt-4">
              <div className="flex h-full flex-col items-start justify-between gap-y-3">
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <div>
                  <p className="flex flex-col gap-y-0.5 text-base font-bold">
                    <span className="font-mono text-sm text-neutral-500/50">Tjänst</span>
                    {card.service}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-5">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} ROKK Electro. Alla rättigheter förbehållna.</p>
      </footer>
    </section>
  );
}
