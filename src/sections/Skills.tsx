import { Reveal } from "@/components/Reveal";

const SKILLS = [
  { name: "MySQL", percent: 98 },
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "PHP", percent: 90 },
  { name: "JavaScript", percent: 85 },
  { name: "Node.js", percent: 75 },
  { name: "MongoDB", percent: 75 },
  { name: "Express.js", percent: 70 },
  { name: "React", percent: 70 },
  { name: "FastAPI", percent: 65 },
];

const TOOLS = [
  "VS Code", "Postman", "Git", "GitHub", 
  "Figma", "Supabase", "MySQL Workbench", "Chrome DevTools"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <div className="mb-14">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Stack & Tools
            </h2>
            <p className="mt-2 text-base text-muted">
              Core technologies and instruments used in day-to-day engineering.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Minimal Skill List with 2px rule */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {SKILLS.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 30}>
                <div className="flex flex-col gap-1.5 py-1">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="font-mono text-xs text-muted">{skill.percent}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-border overflow-hidden rounded-full">
                    <div 
                      className="h-full bg-foreground"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column: Monochrome Tools Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
              Everyday Arsenal
            </h3>
            
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {TOOLS.map((tool, i) => (
                <Reveal key={tool} delay={i * 30}>
                  <div className="flex h-16 items-center justify-center rounded-md border border-border bg-surface px-4 py-2 text-center text-sm font-medium text-foreground transition-colors hover:border-foreground/30">
                    {tool}
                  </div>
                </Reveal>
              ))}
            </div>
            
            <Reveal delay={200}>
              <div className="mt-4 rounded-lg border border-border bg-surface/30 p-6">
                <h4 className="font-display font-semibold text-foreground mb-2">
                  Continuous Evolution
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Technology moves quickly. I continuously explore new tools, refine backend architectures, and optimize interfaces for performance and clarity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
