import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="waitlist__page relative bg-[#E83226] min-h-screen overflow-x-hidden flex flex-col">
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

      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between pt-32 lg:pt-0 lg:min-h-screen">
        {/* Left Side Column */}
        <div className="left-column w-full lg:w-[35%] flex flex-col items-center lg:items-start lg:justify-center lg:min-h-screen">
          {/* Main Headline */}
          <div className="headline-container mb-16 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white/70 leading-tight">Ta</h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">Kontroll</h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">Över</h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">Din</h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">Elkvalitet</h1>
          </div>

          {/* CTA Button */}
          <div className="mb-12 w-full flex justify-center lg:justify-start">
            <a
              href="mailto:po@rokkelectro.se"
              className="py-4 px-8 rounded-full bg-white text-[#E83226] font-bold shadow-md hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              <span className="mr-2">⚡</span> Elkvalitet som spökar? Kontakta oss!
            </a>
          </div>

          {/* Feature List */}
          <div className="feature-list text-white mb-20 lg:mb-0 text-base">
            <div className="flex items-center mb-3">
              <span className="mr-2 text-white">✓</span>
              <span>Identifiera övertoner & transienter</span>
            </div>
            <div className="flex items-center mb-3">
              <span className="mr-2 text-white">✓</span>
              <span>Kompletta lösningar för stabil elkvalitet</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-white">✓</span>
              <span className="relative">
                En god investering
                <Image
                  src="/underline.svg"
                  alt=""
                  width={206}
                  height={9}
                  className="absolute -bottom-2 w-full h-4"
                />
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Cards Grid */}
        <div className="right-column w-full lg:w-[65%] flex items-center justify-center pb-16 lg:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[800px]">
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] p-6 shadow-lg aspect-square flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Elkvalitetsanalys</h2>
              <div className="mb-2">
                <p className="text-sm text-neutral-500">Tjänst</p>
                <p className="font-bold">Energioptimering</p>
              </div>
              <p className="font-semibold text-base mt-auto">
                Professionell analys för att identifiera problem som påverkar din energiförbrukning. Våra tekniker använder avancerad utrustning för att mäta och analysera din elkvalitet – optimera driftkostnader med hållbara lösningar!
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[20px] p-6 shadow-lg aspect-square flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Övertonsmätningar</h2>
              <div className="mb-2">
                <p className="text-sm text-neutral-500">Tjänst</p>
                <p className="font-bold">Skydd av utrustning</p>
              </div>
              <p className="font-semibold text-base mt-auto">
                Övertoner kan orsaka allvarliga problem i din elanläggning såsom överbelastning och varmgång i transformatorer, kablar och motorer, obefogade skyddsutlösningar samt felfunktion i styr- och kontrollkretsar – vi hjälper dig minimera driftstopp och optimera effektivitet!
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[20px] p-6 shadow-lg aspect-square flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Vad vi erbjuder</h2>
              <div className="mb-2">
                <p className="text-sm text-neutral-500">Tjänst</p>
                <p className="font-bold">Problemlösning</p>
              </div>
              <p className="font-semibold text-base mt-auto">
                Vi identifierar brister i din elanläggning och levererar kostnadseffektiva lösningar för förbättrad elkvalitet, säkerställer hög tillgänglighet, reducerar driftstopp och boostar din produktivitet – kontakta oss nu för effektiv lösning!
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[20px] p-6 shadow-lg aspect-square flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Effektfaktorkorrigering</h2>
              <div className="mb-2">
                <p className="text-sm text-neutral-500">Tjänst</p>
                <p className="font-bold">Kostnadsreducering</p>
              </div>
              <p className="font-semibold text-base mt-auto">
                Minska strömförbrukning och elkostnader betydligt genom optimerad effektfaktor och hantering av reaktiv effekt i dina system. Våra lösningar sänker dina elkostnader effektivt, maximerar besparingar med en liten investering – få en offert nu!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-4 mt-auto">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} ROKK Electro. Alla rättigheter förbehållna.</p>
      </footer>
    </section>
  );
}
