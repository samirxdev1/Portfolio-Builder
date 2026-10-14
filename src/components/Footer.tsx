import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="border-t border-[#282B4A]/15 bg-[#282B4A] text-[#EEEBDA] py-16 selection:bg-[#EEEBDA] selection:text-[#282B4A]">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          
          <Reveal>
            <div>
              <a href="#home" className="font-display text-2xl font-bold tracking-tight text-[#EEEBDA] hover:opacity-90 transition-opacity">
                samir.dev
              </a>
              <p className="mt-1 text-sm text-[#EEEBDA]/70">
                Building digital experiences that actually work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-[#EEEBDA]/75">
              <a href="#home" className="hover:text-[#EEEBDA] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#EEEBDA] transition-colors">About</a>
              <a href="#projects" className="hover:text-[#EEEBDA] transition-colors">Projects</a>
              <a href="https://github.com/samirxdev1/" target="_blank" rel="noreferrer" className="hover:text-[#EEEBDA] transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/samirxdev/" target="_blank" rel="noreferrer" className="hover:text-[#EEEBDA] transition-colors">LinkedIn</a>
            </div>
          </Reveal>

        </div>
        
        <Reveal delay={200}>
          <div className="mt-12 border-t border-[#EEEBDA]/10 pt-8 text-xs text-[#EEEBDA]/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p>© {new Date().getFullYear()} Samir Mansuri. All rights reserved.</p>
            <p>Made and Maintained by Samir Mansuri.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
