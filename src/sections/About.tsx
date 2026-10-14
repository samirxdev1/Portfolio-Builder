import { Reveal } from "@/components/Reveal";

const STATS = [
  { value: "3.5+", label: "Years Exp" },
  { value: "10+", label: "Projects" },
  { value: "100%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                About Me.
              </h2>
            </Reveal>
            
            <Reveal delay={100}>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted">
                <p>
                  I'm a Full Stack Web Developer located in Godhra, Gujarat, currently pursuing my BCA at ITM SLS Baroda University.
                </p>
                <p>
                  I bridge the gap between design and engineering — combining technical knowledge with a keen eye for aesthetics to build clean, functional, and performant web applications. From backend architectures in Node.js, Express, and FastAPI to frontends in React and TypeScript, I create digital experiences from the ground up.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Problem Solver", "UI/UX Enthusiast", "Clean Code Advocate", "Lifelong Learner"].map((trait) => (
                  <span 
                    key={trait} 
                    className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: 2x2 Stats with Thin Dividers */}
          <div className="lg:col-span-5 grid grid-cols-2 border border-border rounded-lg bg-surface/30 divide-x divide-y divide-border">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
