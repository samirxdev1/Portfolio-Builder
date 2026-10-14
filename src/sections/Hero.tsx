import { Reveal } from "@/components/Reveal";

export function Hero() {
  const techStack = [
    'React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'FastAPI', 
    'PHP', 'MongoDB', 'Express', 'Tailwind CSS', 'MySQL', 'Figma'
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            <span>Available for work</span>
            <span className="text-muted">✦</span>
          </div>
        </Reveal>

        {/* Editorial Headline */}
        <Reveal delay={100}>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-foreground leading-[1.02]">
            Hi, I'm Samir. <br />
            I Build the Web.
          </h1>
        </Reveal>

        {/* Subtext */}
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">
            Full Stack Developer · React · Node.js · PHP · FastAPI · Based in India.
            <br />
            Building digital experiences that actually work.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 active:scale-[0.98]"
            >
              View Projects
              <span>→</span>
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center rounded-md border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface active:scale-[0.98]"
            >
              Let's Connect
            </a>
          </div>
        </Reveal>
      </div>

      {/* Minimal Monochrome Ticker */}
      <div className="mt-20 w-full overflow-hidden border-t border-border bg-surface/40 py-3.5">
        <div className="flex animate-marquee items-center gap-10 whitespace-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-10">
              {techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted/70 hover:text-foreground transition-colors cursor-default"
                >
                  {tech}
                  <span className="text-muted/40">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
