import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Scroll to top"
        className={`relative h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant hover:scale-110 transition-all duration-500 ring-2 ring-primary/40 ${
          visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="absolute inset-0 rounded-full animate-glow-pulse" aria-hidden />
        <Sparkles className="h-6 w-6 relative" />
        <span className="sr-only">Back to top</span>
      </button>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant animate-glow-pulse hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={SITE.phoneHref}
        aria-label="Call"
        className="h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
