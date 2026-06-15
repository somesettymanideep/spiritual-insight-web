import { useEffect, useState, useRef, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AutoCarouselProps {
  items: ReactNode[];
  perViewDesktop?: number;
  perViewTablet?: number;
  perViewMobile?: number;
  intervalMs?: number;
  showArrows?: boolean;
  ariaLabel?: string;
}

export function AutoCarousel({
  items,
  perViewDesktop = 3,
  perViewTablet = 2,
  perViewMobile = 1,
  intervalMs = 4500,
  showArrows = true,
  ariaLabel = "carousel",
}: AutoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(perViewDesktop);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 768 ? perViewMobile : w < 1024 ? perViewTablet : perViewDesktop);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [perViewDesktop, perViewTablet, perViewMobile]);

  const total = items.length;
  const maxIndex = Math.max(0, total - perView);

  useEffect(() => {
    if (index > maxIndex) setIndex(0);
  }, [maxIndex, index]);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [maxIndex, intervalMs, paused]);

  const slideWidth = 100 / perView;
  const translate = -(index * slideWidth);
  const go = (i: number) => setIndex(Math.max(0, Math.min(maxIndex, i)));

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label={ariaLabel}
      ref={containerRef}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${translate}%)` }}
        >
          {items.map((node, i) => (
            <div key={i} className="shrink-0 px-2.5" style={{ width: `${slideWidth}%` }}>
              {node}
            </div>
          ))}
        </div>
      </div>

      {showArrows && maxIndex > 0 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 h-11 w-11 items-center justify-center rounded-full bg-card shadow-elegant border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 h-11 w-11 items-center justify-center rounded-full bg-card shadow-elegant border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {maxIndex > 0 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-primary" : "w-2.5 bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
