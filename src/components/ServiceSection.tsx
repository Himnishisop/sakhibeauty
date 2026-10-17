import type { ServiceSectionData } from "@/data/services";

export default function ServiceSection({ data }: { data: ServiceSectionData }) {
  return (
    <section
      id={data.id}
      className="scroll-mt-24 rounded-2xl border border-gold-500/60 bg-blush-50/95 px-5 py-6 shadow-lg shadow-maroon-950/20 sm:px-8 sm:py-7"
      aria-labelledby={`${data.id}-title`}
    >
      <h2
        id={`${data.id}-title`}
        className="border-b border-gold-500/50 pb-3 font-display text-xl font-semibold leading-snug text-maroon-900 sm:text-2xl"
      >
        <span className="text-gold-700">{data.number}.</span> {data.title}
      </h2>

      <div className="mt-4 space-y-5">
        {data.groups.map((group, index) => (
          <div key={group.title ?? `${data.id}-${index}`}>
            {group.title && <h3 className="mb-2 text-base font-semibold text-maroon-800">{group.title}</h3>}
            <ul className="list-disc space-y-1 pl-5 text-base leading-relaxed text-maroon-950 marker:text-gold-700">
              {group.items.map((item) => (
                <li key={item.name}>
                  {item.name}
                  {item.price && (
                    <>
                      {" - "}
                      <span className="whitespace-nowrap font-semibold tabular-nums text-maroon-800">{item.price}</span>
                    </>
                  )}
                  {item.note && <span className="text-sm text-maroon-950/70"> ({item.note})</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
