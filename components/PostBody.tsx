import type { Block } from "@/lib/posts";

export default function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="heading mt-10 text-3xl text-white sm:text-4xl"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="heading mt-6 text-xl text-white sm:text-2xl"
              >
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="text-base leading-relaxed text-white/75 sm:text-lg"
              >
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2 pl-1">
                {b.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-white/80 sm:text-lg"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="rounded-2xl border border-ember-500/30 bg-ember-500/[0.07] p-5 sm:p-6"
              >
                {b.title && (
                  <p className="eyebrow mb-2">{b.title}</p>
                )}
                <p className="text-white/85 leading-relaxed">{b.text}</p>
              </aside>
            );
        }
      })}
    </div>
  );
}
