const deals = [
  { tag: "DEAL", text: "20% OFF ALL GLASS & KRATOM" },
  { tag: "DEAL", text: "BUY 2 VAPES, GET $3 OFF" },
  { tag: "EVERY DAY", text: "LOWEST PRICES IN TOWN" },
  { tag: "OPEN LATE", text: "FRI & SAT TIL 11 PM" },
  { tag: "FIND US", text: "635 N 9TH ST · NEXT TO WALMART" },
];

export default function TopDealsBar() {
  const items = [...deals, ...deals];
  return (
    <div className="fixed inset-x-0 top-0 z-40 h-9 overflow-hidden border-b border-ember-700/60 bg-gradient-to-r from-ember-700 via-ember-600 to-ember-700 text-white">
      <div className="marquee absolute inset-0 flex items-center">
        <div className="marquee-track-fast flex w-max items-center gap-10 whitespace-nowrap pl-10">
          {items.map((d, i) => (
            <span
              key={`${d.text}-${i}`}
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]"
            >
              <span className="rounded-sm bg-white/15 px-1.5 py-0.5 text-[9px] tracking-widest text-white/90">
                {d.tag}
              </span>
              <span>{d.text}</span>
              <span aria-hidden className="text-white/40">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_30%,transparent_70%,rgba(0,0,0,0.25))]" />
    </div>
  );
}
