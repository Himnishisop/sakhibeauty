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

      {data.groups && (
        <div className="mt-2 space-y-4">
          {data.groups.map((group, index) => (
            <div key={group.title ?? `${data.id}-${index}`}>
              {group.title && <h3 className="mb-1 mt-3 text-base font-semibold text-maroon-800">{group.title}</h3>}
              <ul>
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-gold-700/30 py-2 last:border-b-0"
                  >
                    <span className="min-w-0 flex-1 text-maroon-950">
                      {item.name}
                      {item.note && <span className="block text-sm text-maroon-950/70">{item.note}</span>}
                    </span>
                    <span className="min-w-[4.5rem] text-right font-semibold tabular-nums text-maroon-800">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {data.waxTable && (
        <div className="mt-4 overflow-x-auto rounded-xl border border-gold-500/60">
          <table className="w-full min-w-[30rem] border-collapse tabular-nums">
            <thead>
              <tr className="bg-maroon-900 text-sm tracking-wide text-gold-300">
                <th scope="col" className="px-4 py-3 text-left font-semibold">Service</th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">Aloe Vera</th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">White Chocolate</th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">Rica</th>
              </tr>
            </thead>
            <tbody>
              {data.waxTable.map((row) => (
                <tr key={row.service} className="border-t border-gold-500/40 even:bg-blush-100/60">
                  <td className="px-4 py-2.5 text-left text-maroon-950">
                    {row.service}
                    {row.note && <span className="block text-xs leading-snug text-maroon-950/70">({row.note})</span>}
                  </td>
                  <td className="px-3 py-2.5 text-right font-semibold text-maroon-800">{row.aloeVera}</td>
                  <td className="px-3 py-2.5 text-right font-semibold text-maroon-800">{row.whiteChocolate}</td>
                  <td className="px-4 py-2.5 text-right font-semibold text-maroon-800">{row.rica}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
