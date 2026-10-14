import { Reveal } from "@/components/Reveal";

const TIMELINE = [
  { year: "2026", title: "Exploring AI/ML & Startups", desc: "Building AI-assisted tooling, chatbots with API integration, and engineering personal startup products." },
  { year: "2025", title: "BCA & FastAPI", desc: "Enrolled in ITM SLS Baroda University. Expanded into Python & FastAPI, participating in university hackathons." },
  { year: "2024", title: "Frontend Engineering", desc: "Specialized in React.js, TypeScript, component architecture, and modern state management." },
  { year: "2023", title: "Full Stack Deep Dive", desc: "Mastered Node.js, Express, MongoDB, and relational schema modeling with MySQL." },
  { year: "2022", title: "Backend Foundations", desc: "Built dynamic web applications using PHP and MySQL databases." },
  { year: "2021", title: "Hello World", desc: "Wrote first lines of HTML, CSS, and vanilla JavaScript, sparking the journey into web development." },
];

export function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 border-b border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <div className="mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              The Journey
            </h2>
            <p className="mt-2 text-base text-muted">
              Milestones, technical progression, and formal education.
            </p>
          </div>
        </Reveal>

        {/* Simple Vertical Timeline with 1px Line & Small Solid Dots */}
        <div className="relative max-w-2xl pl-8 sm:pl-10 space-y-10">
          {/* Static 1px hairline line */}
          <div className="absolute left-2.5 sm:left-3 top-2 bottom-2 w-[1px] bg-border" />

          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 40} className="relative">
              {/* Small Solid 7px Dot */}
              <div className="absolute -left-[27px] sm:-left-[33px] top-2 h-2.5 w-2.5 rounded-full bg-foreground" />

              <div className="rounded-lg border border-border bg-surface/30 p-5 sm:p-6 transition-colors hover:border-foreground/30">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-xs font-semibold text-foreground/80 bg-surface px-2 py-0.5 rounded border border-border">
                    {item.year}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education Credentials */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-surface/30 p-6 sm:p-8 transition-colors hover:border-foreground/30">
              <div>
                <span className="inline-block rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted mb-4">
                  In Progress
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Bachelor of Computer Applications
                </h3>
                <p className="mt-1 text-sm text-muted">
                  ITM SLS Baroda University
                </p>
              </div>
              <p className="mt-6 font-mono text-xs text-muted">
                2025 — 2028
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-surface/30 p-6 sm:p-8 transition-colors hover:border-foreground/30">
              <div>
                <span className="inline-block rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted mb-4">
                  Completed
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  12th Commerce
                </h3>
                <p className="mt-1 text-sm text-muted">
                  The Iqbal Union High School
                </p>
              </div>
              <p className="mt-6 font-mono text-xs text-muted">
                2023 — 2025
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
