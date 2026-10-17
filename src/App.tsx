import Header from "./components/Header";
import ServiceSection from "./components/ServiceSection";
import { SERVICE_SECTIONS } from "./data/services";
import { ADDRESS } from "./data/site";

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-maroon-950"
      >
        Skip to services
      </a>

      <Header />

      <main id="services" tabIndex={-1} className="mx-auto max-w-4xl px-5 pb-12 outline-none sm:px-8">
        <div className="border-b border-gold-500/60 py-8 text-center sm:py-10">
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="text-rosegold">SAKHI</span>
          </h1>
          <p className="mt-1 font-display text-lg tracking-wide text-gold-300 sm:text-xl">
            Beauty Parlour &amp; Sakhi Beauty Services
          </p>
          <div className="mt-6 inline-block rounded-full border-2 border-gold-300 bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 p-[3px] shadow-lg shadow-maroon-950/40">
            <p className="rounded-full bg-maroon-900 px-6 py-3 font-display text-xl font-bold tracking-[0.15em] sm:px-10 sm:text-3xl">
              <span className="text-rosegold">✦ HOME SERVICES AVAILABLE ✦</span>
            </p>
          </div>
          <address className="mt-5 text-sm not-italic text-blush-100 sm:text-base">{ADDRESS}</address>
        </div>

        <div className="mt-8 space-y-5">
          {SERVICE_SECTIONS.map((section) => (
            <ServiceSection key={section.id} data={section} />
          ))}
        </div>
      </main>
    </div>
  );
}
