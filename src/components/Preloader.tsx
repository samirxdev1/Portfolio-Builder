import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Brief calm display time
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 300); // 300ms fade
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background transition-opacity duration-300 ease-out",
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-2xl font-display font-bold tracking-tight text-foreground">
          samir.dev
        </span>
        <div className="h-[2px] w-12 overflow-hidden bg-border">
          <div className="h-full w-full bg-foreground" />
        </div>
      </div>
    </div>
  );
}
