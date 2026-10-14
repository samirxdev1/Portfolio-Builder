import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 40) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={cn(
          "fixed left-0 right-0 top-0 z-[80] bg-background border-b border-border transition-transform duration-250 ease-out",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          <a 
            href="#home" 
            className="text-lg font-display font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            samir.dev
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <a 
              href="#contact"
              className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-all duration-150 hover:bg-foreground/90 active:scale-[0.98] selection:bg-[#EEEBDA] selection:text-[#282B4A]"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground focus-visible:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={cn(
          "fixed inset-0 z-[100] bg-background transition-opacity duration-200 md:hidden flex flex-col justify-center px-8",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <button 
          className="absolute right-6 top-6 p-2 text-foreground focus-visible:outline-none"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={26} />
        </button>

        <div className="flex flex-col gap-6 text-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-2xl font-display font-bold text-muted hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-6 mx-auto w-full max-w-xs rounded-md bg-foreground px-6 py-3 font-display font-medium text-background transition-opacity hover:opacity-90 selection:bg-[#EEEBDA] selection:text-[#282B4A]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}
