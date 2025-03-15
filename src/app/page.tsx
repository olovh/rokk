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

      <main className="flex items-center justify-center overflow-hidden relative z-10 w-full max-w-[1600px]">
        {/* Left Side */}
        <div className="left-side mx-0 flex flex-col items-center justify-start gap-y-14 md:gap-y-10 lg:items-start">
          <div className="flex flex-col items-center justify-start gap-y-5 lg:items-start lg:gap-y-2">
            <h1 className="animate-fadeInUp animation-delay-100 relative flex max-w-lg items-center gap-x-5 text-balance text-4xl font-bold leading-[1.05] text-white/70 transition-all duration-100 ease-linear sm:text-[50px] md:text-[70px] xl:max-w-full xl:text-[80px]">
              Ta
            </h1>
            <h1 className="animate-fadeInUp animation-delay-200 group relative flex max-w-lg items-center gap-x-5 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-[50px] md:text-[70px] xl:max-w-full xl:text-[80px]">
              Kontroll
            </h1>
            <h1 className="animate-fadeInUp animation-delay-300 group relative flex max-w-lg items-center gap-x-5 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-[50px] md:text-[70px] xl:max-w-full xl:text-[80px]">
              Över
            </h1>
            <h1 className="animate-fadeInUp animation-delay-400 group relative flex max-w-lg items-center gap-x-5 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-[50px] md:text-[70px] xl:max-w-full xl:text-[80px]">
              Din
            </h1>
            <h1 className="animate-fadeInUp animation-delay-500 group relative flex max-w-lg items-center gap-x-5 text-balance text-4xl font-bold leading-[1.05] text-white sm:text-[50px] md:text-[70px] xl:max-w-full xl:text-[80px]">
              Elkvalitet
            </h1>
          </div>

          {/* Button */}
          <div className="flex w-full items-center justify-center max-[400px]:px-5 min-[401px]:px-0 lg:justify-start">
            <a
              href="mailto:info@rokkelectro.se"
              className="h-14 px-8 rounded-full bg-white text-[#E83226] font-bold shadow-md hover:bg-gray-100 transition-colors duration-200 text-lg inline-flex items-center justify-center gap-2"
            >
              ⚡ Elkvalitet som spökar? Kontakta oss!
            </a>
          </div>

          {/* Features list */}
          <div className="flex flex-col items-center justify-center gap-x-2 gap-y-1.5 pl-0 text-base font-normal text-white md:text-base lg:items-start">
            <div className="flex items-center gap-x-1.5">
              <span>✔ Identifiera övertoner & transienter</span>
            </div>
            <div className="flex items-center gap-x-1.5">
              <span>✔ Kompletta lösningar för stabil elkvalitet</span>
            </div>
            <div className="flex items-center gap-x-1.5">
              <span className="relative inline-block">
                ✔ En god investering
                <Image
                  src="/underline.svg" // Kontrollera denna sökväg!
                  alt=""
                  width={206}
                  height={9}
                  className="absolute left-5 -bottom-2 h-4 w-full max-w-[200px] md:max-w-[250px]"
                />
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Four Cards in Grid */}
        <div className="right__side__deck relative mt-0 hidden lg:flex items-center justify-center font-sans ml-16">
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1: Electricity Quality Analysis */}
            <div className="flex h-[21rem] w-[21rem] flex-col items-start justify-between gap-y-2.5 overflow-hidden rounded-[20px] bg-white p-6 shadow-lg">
              <div className="flex h-full flex-col items-start justify-between gap-y-3">
                <h2 className="text-2xl font-bold">Elkvalitetsanalys</h2>
                <div>
                  <p className="flex flex-col gap-y-0.5 text-base font-bold">
                    <span className="font-mono text-sm text-neutral-500/50">Tjänst</span>
                    Energioptimering
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-5">
                    Professionell analys för att identifiera problem som påverkar din energiförbrukning. Våra tekniker använder avancerad utrustning för att mäta och analysera din elkvalitet – optimera driftkostnader med hållbara lösningar!
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Voltage Stabilization */}
            <div className="flex h-[21rem] w-[21rem] flex-col items-start justify-between gap-y-2.5 overflow-hidden rounded-[20px] bg-white p-6 shadow-lg">
              <div className="flex h-full flex-col items-start justify-between gap-y-3">
                <h2 className="text-2xl font-bold">Övertonsmätningar</h2>
                <div>
                  <p className="flex flex-col gap-y-0.5 text-base font-bold">
                    <span className="font-mono text-sm text-neutral-500/50">Tjänst</span>
                    Skydd av utrustning
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-5">
                    Övertoner kan orsaka allvarliga problem i din elanläggning såsom överbelastning och varmgång i transformatorer, kablar och motorer, obefogade skyddsutlösningar samt felfunktion i styr- och kontrollkretsar – vi hjälper dig minimera driftstopp och optimera effektivitet!
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Energy Monitoring */}
            <div className="flex h-[21rem] w-[21rem] flex-col items-start justify-between gap-y-2.5 overflow-hidden rounded-[20px] bg-white p-6 shadow-lg">
              <div className="flex h-full flex-col items-start justify-between gap-y-3">
                <h2 className="text-2xl font-bold">Vad vi erbjuder</h2>
                <div>
                  <p className="flex flex-col gap-y-0.5 text-base font-bold">
                    <span className="font-mono text-sm text-neutral-500/50">Tjänst</span>
                    Problemlösning
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-5">
                    Vi identifierar brister i din elanläggning och levererar kostnadseffektiva lösningar för förbättrad elkvalitet, säkerställer hög tillgänglighet, reducerar driftstopp och boostar din produktivitet – kontakta oss nu för effektiv lösning!
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Power Factor Correction */}
            <div className="flex h-[21rem] w-[21rem] flex-col items-start justify-between gap-y-2.5 overflow-hidden rounded-[20px] bg-white p-6 shadow-lg">
              <div className="flex h-full flex-col items-start justify-between gap-y-3">
                <h2 className="text-2xl font-bold">Effektfaktorkorrigering</h2>
                <div>
                  <p className="flex flex-col gap-y-0.5 text-base font-bold">
                    <span className="font-mono text-sm text-neutral-500/50">Tjänst</span>
                    Kostnadsreducering
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-5">
                    Minska strömförbrukning och elkostnader genom optimerad effektfaktor i dina system. Våra lösningar kan minska dina elkostnader med upp till 20% genom bättre effektfaktor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with ROKK Copyright */}
      <footer className="absolute bottom-4 w-full text-center">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} ROKK Electro. Alla rättigheter förbehållna.</p>
      </footer>
    </section>
  );
}
