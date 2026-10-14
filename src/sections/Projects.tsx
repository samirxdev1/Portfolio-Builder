import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Full Stack", "Frontend", "Backend"];

const PROJECTS = [
  {
    title: "Grab Pdf",
    desc: "A fully functional digital storefront with cart management, user authentication, Razorpay payment integration, and administrative management panel.",
    tags: ["React", "Node.js", "PostgreSQL", "Razorpay"],
    category: "Full Stack",
    image: "/grabpdf.png",
    githubUrl: "https://github.com/Samir720",
    liveUrl: "https://www.grabpdf.in/"
  }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(p => activeFilter === "All" || p.category === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Client Work
              </h2>
              <p className="mt-2 text-base text-muted">
                Selected production applications and digital products.
              </p>
            </div>
          </Reveal>

          {/* Plain Text Filter Tabs with Active Underline */}
          <Reveal delay={100}>
            <div className="flex items-center gap-6 border-b border-border pb-1">
              {FILTERS.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "relative pb-2 text-sm font-medium transition-colors cursor-pointer",
                    activeFilter === filter 
                      ? "text-foreground font-semibold" 
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {filter}
                  {activeFilter === filter && (
                    <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-foreground" />
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface/40 transition-colors hover:border-foreground/30">
                
                {/* Project Image Frame */}
                <div className="h-56 w-full overflow-hidden border-b border-border bg-surface">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-muted">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="hover:text-foreground transition-colors" 
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="hover:text-foreground transition-colors" 
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
