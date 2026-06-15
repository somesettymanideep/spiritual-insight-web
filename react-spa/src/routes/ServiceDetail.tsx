import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Phone, MessageCircle, Check, ArrowLeft } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { SERVICES, SITE } from "@/lib/site";
import { setMeta } from "@/lib/utils";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) setMeta(`${service.title} — Sri Durga Matha Astrology`, service.desc);
  }, [service]);

  if (!service) {
    return (
      <SiteLayout>
        <PageHero title="Service Not Found" subtitle="The service you're looking for doesn't exist." />
        <section className="py-20 site-container text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to all services
          </Link>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero title={service.title} subtitle={service.desc} image={service.image} />
      <section className="py-20 bg-background">
        <div className="site-container grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          <article>
            <div className="rounded-3xl overflow-hidden shadow-elegant mb-8 aspect-[16/9]">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Service Overview</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-5">
              About <span className="text-gradient-primary">{service.title}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {service.desc} Our experienced astrologer combines time-honored Vedic wisdom with personal compassion to deliver remedies that bring real change to your life.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every consultation is private and personalized — we listen carefully to your situation, study your chart, and design a remedy plan that fits your unique journey.
            </p>

            <h3 className="font-display text-2xl font-semibold mb-4">What You Get</h3>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {["One-on-one personal consultation","Customized remedies for your problem","Complete confidentiality assured","Follow-up guidance and support","Authentic Vedic rituals","Fast and effective results"].map((f) => (
                <li key={f} className="flex items-start gap-2 p-3 rounded-xl bg-card border border-border">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-7 shadow-elegant">
              <h3 className="font-display text-2xl font-bold mb-2">Ready to begin?</h3>
              <p className="text-white/85 mb-5">Speak directly with our astrologer for {service.title.toLowerCase()}.</p>
              <div className="flex flex-wrap gap-3">
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white text-primary font-bold px-6 py-3 hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" /> {SITE.phone}
                </a>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-bold px-6 py-3 hover:scale-105 transition-transform">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
              <h4 className="font-display text-lg mb-4">All Services</h4>
              <ul className="space-y-1.5 text-sm max-h-[70vh] overflow-y-auto pr-1">
                {SERVICES.map((s) => {
                  const active = s.slug === service.slug;
                  return (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${active ? "bg-gradient-primary text-primary-foreground font-semibold shadow-glow" : "text-foreground/80 hover:text-primary hover:bg-primary/5"}`}>
                        <span className={active ? "text-primary-foreground" : "text-primary"}>›</span>
                        <span className="truncate">{s.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
