import { Reveal } from "@/components/Reveal";
import { Award } from "lucide-react";

const CERTS = [
  { title: "Web Design & Development", issuer: "Skill India Digital", year: "2024", tags: ["HTML", "CSS", "UI/UX"] },
  { title: "PHP Development", issuer: "Great Learning", year: "2024", tags: ["PHP", "Backend"] },
  { title: "Skill Development Program", issuer: "HDRC", year: "2025", tags: ["Soft Skills", "Tech"] },
  { title: "Deloitte Job Simulation", issuer: "Deloitte", year: "2025", tags: ["Consulting", "Analysis"] },
];

export function Certifications() {
  return (
    <section className="py-24 sm:py-32 border-b border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <div className="mb-14">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Certifications
            </h2>
            <p className="mt-2 text-base text-muted">
              Professional credentials, verified certifications, and simulations.
            </p>
          </div>
        </Reveal>

        {/* Flat Minimal Grid (No 3D tilt) */}
        <div className="grid gap-6 sm:grid-cols-2">
          {CERTS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 60}>
              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-surface/30 p-6 sm:p-8 transition-colors hover:border-foreground/30">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <Award className="h-6 w-6 text-foreground" />
                    <span className="font-mono text-xs text-muted bg-surface px-2 py-0.5 rounded border border-border">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {cert.issuer}
                  </p>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border">
                  {cert.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
