import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Check, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { SERVICES, SITE } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Astrology Services — Sri Durga Matha Astrology" },
      { name: "description", content: "Explore our astrology services: black magic removal, love marriage, vashikaran, palm reading, tarot, and more. Call 8074668253." },
      { property: "og:title", content: "Our Astrology Services" },
      { property: "og:description", content: "Authentic spiritual solutions for love, marriage, career & protection." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero title="Our Astrology Services" subtitle="Authentic, time-tested spiritual remedies for every aspect of your life." />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1fr_320px] gap-10">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <article
                key={s.slug}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:-translate-y-2 hover:shadow-elegant hover:border-primary/40 transition-all duration-500 mb-6"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground bg-primary/90 backdrop-blur px-2.5 py-1 rounded-full">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>

                  <div className="flex items-center justify-start pt-4 border-t border-border/60">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="rounded-2xl bg-gradient-cosmos text-cosmos-foreground p-6 shadow-elegant">
              <h4 className="font-display text-xl mb-2 text-gradient-gold">Quick Contact</h4>
              <p className="text-sm text-white/70 mb-4">Speak directly with our astrologer.</p>
              <a href={SITE.phoneHref} className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-3 mb-2">
                <Phone className="h-4 w-4 text-gold" /> <span className="font-semibold">{SITE.phone}</span>
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 font-semibold">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
              <h4 className="font-display text-lg mb-3">Popular Services</h4>
              <ul className="space-y-2 text-sm">
                {SERVICES.slice(0, 8).map(s => (
                  <li key={s.slug} className="flex items-center gap-2 text-foreground/80 hover:text-primary cursor-default">
                    <span className="text-primary">›</span> {s.title}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
