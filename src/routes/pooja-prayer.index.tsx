import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { POOJA_SERVICES } from "@/lib/pooja-services";
import { SITE } from "@/lib/site";

export default function PoojaPrayerPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Pooja & Prayer Services"
        subtitle="Sacred Hindu rituals and prayers performed with devotion for peace, prosperity, and protection."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sacred Services We <span className="text-gradient-primary">Offer</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each pooja is performed with authentic Vedic traditions by experienced priests to bring divine blessings into your life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {POOJA_SERVICES.map((service, i) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:-translate-y-2 hover:shadow-elegant hover:border-primary/40 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} prayer service`}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-5 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <Button asChild className="rounded-full">
                    <Link to={`/pooja-prayer/${service.slug}`}>
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-cosmos text-cosmos-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-gold">Book Your Pooja Today</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us to schedule your sacred ceremony. We perform poojas both in-person and remotely for devotees across the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 font-semibold transition-colors">
                <Phone className="h-5 w-5 text-gold" /> {SITE.phone}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 font-semibold hover:scale-105 transition-transform">
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
