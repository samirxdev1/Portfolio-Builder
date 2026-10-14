import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground px-6 py-20">
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <Reveal>
          <div className="font-display text-[100px] sm:text-[140px] md:text-[160px] font-extrabold leading-none tracking-tighter text-foreground/15 select-none">
            404
          </div>
        </Reveal>
        
        <Reveal delay={100}>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-[-20px] md:mt-[-30px]">
            Page Not Found
          </h1>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved. You can return home or navigate to the previous page.
          </p>
        </Reveal>
        
        <Reveal delay={300}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <span className="flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90 active:scale-[0.98] cursor-pointer selection:bg-[#EEEBDA] selection:text-[#282B4A]">
                <Home size={16} />
                Back to Home
              </span>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} />
              Previous Page
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
