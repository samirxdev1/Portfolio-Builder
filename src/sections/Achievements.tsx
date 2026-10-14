import { Reveal } from "@/components/Reveal";
import { Star, BookOpen, Brain, Users } from "lucide-react";

const ACHIEVEMENTS = [
  { icon: Star, title: "Open Source", desc: "Active contributor to community repositories and developer utilities.", year: "Ongoing" },
  { icon: Brain, title: "Full Stack Expert", desc: "Mastered end-to-end web architecture, databases, and production deployment.", year: "2024" },
  { icon: BookOpen, title: "Growth Advocate", desc: "Committed to continuous learning, computer science foundations, and skill upgrading.", year: "2023—28" },
  { icon: Users, title: "Problem Solver", desc: "Specializing in debugging complex logical, structural, and performance issues.", year: "Ongoing" },
];

export function Achievements() {
  return (
    <section className="py-24 sm:py-32 border-b border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <div className="mb-14">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Recognition & Impact
            </h2>
            <p className="mt-2 text-base text-muted">
              Milestones, open source involvement, and engineering focus.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="flex h-full items-start gap-4 rounded-lg border border-border bg-surface/30 p-6 transition-colors hover:border-foreground/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-foreground">
                  <item.icon size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-bold text-foreground">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
