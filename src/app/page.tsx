import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="waitlist__page relative bg-[#E83226] min-h-screen overflow-x-hidden flex flex-col items-center">
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

      <main className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1600px] px-6 lg:px-16 pt-20 lg:pt-0">
        {/* Left Side - Always visible */}
        <div className="left-side flex flex-col items-center lg:items-start justify-start gap-y-10 lg:w-1/2 mb-12 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start gap-y-2 md:gap-y-0">
            <h1 className="animate-fadeInUp animation-delay-100 relative text-4xl font-bold leading-tight text-white/70 sm:text-[50px] md:text-[70px]">
              Ta
            </h1>
            <h1 className="animate-fadeInUp animation-delay-200 relative text-4xl font-bold leading-tight text-white sm:text-[50px] md:text-[70px]">
              Kontroll
            </h1>
            <h1 className="animate-fadeInUp animation-delay-300 relative text-4xl font-bold leading-tight text-white sm:text-[50px] md:text-[70px]">
              Över
            </h1>
            <h1 className="animate-fadeInUp animation-delay-400 relative text-4xl font-bold leading-tight text-white sm:text-[50px] md:text-[70px]">
              Din
            </h1>
            <h1 className="animate-fadeInUp animation-delay-500 relative text-4xl font-bold leading-tight text-white sm:text-[50px] md:text-[70px]">
              Elkvalitet
            </h1>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center lg:justify-start my-4">
            <a
              href="mailto:info@rokkelectro.se"
              className="px-6 py-4 rounded-full bg-white text-[#E83226] font-bold shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="inline-flex items-center">
                ⚡ Elkvalitet som spökar? Kontakta oss!
              </span>
            </a>
          </div>

          {/* Features list */}
          <div className="flex flex-col items-center lg:items-start gap-y-3 text-white">
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Identifiera övertoner & transienter</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Kompletta lösningar för stabil elkvalitet</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span className="relative inline-block">
                En god investering
                <Image
                  src="/underline.svg"
                  alt=""
                  width={206}
                  height={9}
                  className="absolute left-0 -bottom-2 h-4 w-full"
                />
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Cards - Visible on scroll on mobile */}
        <div className="cards-container w-full lg:w-auto lg:ml-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Elkvalitetsanalys</h2>
              <div className="mb-3">
                <p className="text-sm text-neutral-500/80">Tjänst</p>
                <p className="font-bold">Energioptimering</p>
              </div>
              <p className="text-sm leading-relaxed">
                Professionell analys för att identifiera problem som påverkar din energiförbrukning. Våra tekniker använder avancerad utrustning för att mäta och analysera din elkvalitet – optimera driftkostnader med hållbara lösningar!
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[20px] p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Övertonsmätningar</h2>
              <div className="mb-3">
                <p className="text-sm text-neutral-500/80">Tjänst</p>
                <p className="font-bold">Skydd av utrustning</p>
              </div>
              <p className="text-sm leading-relaxed">
                Övertoner kan orsaka allvarliga problem i din elanläggning såsom överbelastning och varmgång i transformatorer, kablar och motorer, obefogade skyddsutlösningar samt felfunktion i styr- och kontrollkretsar – vi hjälper dig minimera driftstopp och optimera effektivitet!
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[20px] p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Vad vi erbjuder</h2>
              <div className="mb-3">
                <p className="text-sm text-neutral-500/80">Tjänst</p>
                <p className="font-bold">Problemlösning</p>
              </div>
              <p className="text-sm leading-relaxed">
                Vi identifierar brister i din elanläggning och levererar kostnadseffektiva lösningar för förbättrad elkvalitet, säkerställer hög tillgänglighet, reducerar driftstopp och boostar din produktivitet – kontakta oss nu för effektiv lösning!
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[20px] p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Effektfaktorkorrigering</h2>
              <div className="mb-3">
                <p className="text-sm text-neutral-500/80">Tjänst</p>
                <p className="font-bold">Kostnadsreducering</p>
              </div>
              <p className="text-sm leading-relaxed">
                Minska strömförbrukning och elkostnader betydligt genom optimerad effektfaktor och hantering av reaktiv effekt i dina system. Våra lösningar sänker dina elkostnader effektivt, maximerar besparingar med en liten investering – få en offert nu!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with ROKK Copyright */}
      <footer className="w-full text-center py-4 mt-auto">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} ROKK Electro. Alla rättigheter förbehållna.</p>
      </footer>
    </section>
  );
}
