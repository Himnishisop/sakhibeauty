import { PHONE_DISPLAY, TEL_LINK, waLink } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-gold-500/80 bg-maroon-950/95 text-gold-300 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 sm:px-8">
        <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-gold-300 sm:text-xs">
          HOME SERVICES AVAILABLE
        </p>
        <div className="flex items-center gap-5">
          <a
            href={TEL_LINK}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="inline-flex min-h-11 items-center whitespace-nowrap text-base font-semibold tabular-nums transition-colors hover:text-gold-300"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book via WhatsApp"
            className="inline-flex min-h-10 items-center rounded-full border border-gold-300 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 px-4 text-sm font-bold text-maroon-950 shadow-md shadow-maroon-950/40 transition hover:-translate-y-0.5 hover:brightness-105"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
