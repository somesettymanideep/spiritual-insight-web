import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/site";

export function ConsultationForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <form onSubmit={onSubmit} className="glass-light rounded-2xl p-6 md:p-8 shadow-elegant space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Full Name" name="name" required />
        <Input label="Phone Number" name="phone" type="tel" required />
        <Input label="Email Address" name="email" type="email" required />
        <div className="relative">
          <select
            required
            className="peer w-full rounded-lg border border-input bg-white/80 px-4 pt-5 pb-2 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            defaultValue=""
          >
            <option value="" disabled>Select Service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
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
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground font-semibold px-6 py-3.5 shadow-elegant hover:scale-[1.02] transition-transform"
      >
        {sent ? (<><CheckCircle2 className="h-5 w-5" /> Request Sent — We'll call you</>) : (<><Send className="h-4 w-4" /> Book Consultation</>)}
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
