import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { SITE, SERVICES } from "@/lib/site";
import { StarField } from "./StarField";

export function Footer() {
  return (
    <footer className="relative bg-cosmos text-cosmos-foreground overflow-hidden">
      <StarField density={60} />
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logoAsset.url} alt={SITE.name} className="h-14 bg-white/95 rounded-lg p-1 mb-4" />
          <p className="text-sm text-white/70 leading-relaxed">
            Trusted astrology and spiritual guidance for love, marriage, career and protection from negative energies.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gradient-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gradient-gold">Top Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}><Link to="/services" className="hover:text-gold">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gradient-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-gold" /> {SITE.address}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-gold" /> <a href={`mailto:${SITE.email}`} className="hover:text-gold break-all">{SITE.email}</a></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-gold" /> <a href={SITE.phoneHref} className="hover:text-gold">{SITE.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-sm text-white/60">
        © 2026 {SITE.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
