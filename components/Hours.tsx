const schedule = [
  { day: "Monday", hours: "9:00 AM – 10:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 10:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 10:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 10:00 PM" },
  { day: "Friday", hours: "9:00 AM – 11:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 11:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 10:00 PM" },
];

function isToday(day: string) {
  const todayIdx = new Date().getDay();
  const map = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return map[todayIdx] === day;
}

export default function Hours() {
  return (
    <section id="hours" className="py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Hours</span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">
            Open early.
            <br />
            <span className="text-ember-400">Open late.</span>
            <br />
            Open every day.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We&apos;re here when you need us. Stop in on your way to work, on your way
            home, or after dinner on the weekends.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+12692548351" className="btn-primary">
              Call (269) 254-8351
            </a>
            <a href="#visit" className="btn-ghost">
              Get Directions
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-ink-800/60 overflow-hidden">
            <ul className="divide-y divide-white/5">
              {schedule.map((s) => {
                const today = isToday(s.day);
                return (
                  <li
                    key={s.day}
                    className={`flex items-center justify-between px-6 py-4 sm:px-8 ${
                      today ? "bg-ember-500/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`heading text-xl ${
                          today ? "text-ember-300" : "text-white"
                        }`}
                      >
                        {s.day}
                      </span>
                      {today && (
                        <span className="rounded-full bg-ember-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                          Today
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        today ? "text-ember-200" : "text-white/70"
                      }`}
                    >
                      {s.hours}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
            Holiday hours may vary &mdash; call ahead on major holidays.
          </p>
        </div>
      </div>
    </section>
  );
}
