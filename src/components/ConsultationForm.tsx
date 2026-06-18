import { useRef, useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { SERVICES } from "@/lib/site";
import { toast } from "sonner";

const PUBLIC_KEY = "LomrHrsHF6Wsyv35E";

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || loading) return;
    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setSent(true);
      toast.success("Request sent — we'll call you shortly");
      formRef.current.reset();
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className={`glass-light rounded-2xl p-6 md:p-8 shadow-elegant space-y-4 ${compact ? "" : ""}`}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Full Name" name="name" required />
        <Input label="Phone Number" name="phone" type="tel" required />
        <Input label="Email Address" name="email" type="email" required />
        <div className="relative">
          <select
            name="service"
            required
            className="peer w-full rounded-lg border border-input bg-white/80 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            defaultValue=""
          >
            <option value="" disabled>Select Service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
          <label className="absolute left-4 top-1.5 text-xs text-muted-foreground">Service Required</label>
        </div>
      </div>
      <div className="relative">
        <textarea
          name="message"
          rows={4}
          placeholder=" "
          className="peer w-full rounded-lg border border-input bg-white/80 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
        />
        <label className="absolute left-4 top-1.5 text-xs text-muted-foreground">Message</label>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground font-semibold px-6 py-3.5 shadow-elegant hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100"
      >
        {loading ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
        ) : sent ? (
          <><CheckCircle2 className="h-5 w-5" /> Request Sent — We'll call you</>
        ) : (
          <><Send className="h-4 w-4" /> Book Consultation</>
        )}
      </button>
    </form>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="relative">
      <input
        {...props}
        placeholder=" "
        className="peer w-full rounded-lg border border-input bg-white/80 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
      />
      <label className="absolute left-4 top-1.5 text-xs text-muted-foreground">{label}</label>
    </div>
  );
}
