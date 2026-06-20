import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { ConsultationForm } from "./ConsultationForm";

const SESSION_KEY = "consultation_popup_shown";

export function ConsultationPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-cosmos/70 backdrop-blur-sm animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-background shadow-elegant animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground flex items-center justify-center transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-6 md:p-8">
          <div className="text-center mb-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> Free Consultation
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mt-3 leading-tight">
              Get Your <span className="text-gradient-primary">Free Astrology</span> Consultation
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your problem — our astrologer will reach out within 24 hours.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
}
