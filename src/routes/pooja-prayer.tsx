import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Flame, BookOpen, Heart, Globe, Star, Sparkles } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/pooja-prayer")({
  head: () => ({
    meta: [
      { title: "Pooja & Prayer Services — Sri Durga Matha Astrology" },
      { name: "description", content: "Book authentic Hindu pooja and prayer services: Ganesh Puja, Durga Matha Puja, Kali Matha Puja, Shiva Puja, Lakshmi Puja, Hanuman Puja, Four Corner Prayer, and International Prayers." },
      { property: "og:title", content: "Pooja & Prayer Services" },
      { property: "og:description", content: "Authentic Hindu pooja and prayer services performed by experienced priests." },
    ],
  }),
  component: PoojaPrayerPage,
});

const POOJA_SERVICES = [
  {
    title: "Lord Ganesh Puja",
    desc: "Remove obstacles and invite prosperity into your life with sacred Lord Ganesh worship rituals.",
    icon: Sparkles,
  },
  {
    title: "Goddess Durga Matha Puja",
    desc: "Seek the divine blessings of Goddess Durga for strength, protection, and victory over negativity.",
    icon: Flame,
  },
  {
    title: "Goddess Kali Matha Puja",
    desc: "Powerful rituals dedicated to Goddess Kali to destroy evil forces and spiritual blockages.",
    icon: Flame,
  },
  {
    title: "Four Corner Prayer",
    desc: "Comprehensive spiritual ceremony performed at all four corners to cleanse and protect your space.",
    icon: BookOpen,
  },
  {
    title: "Lord Shiva Puja",
    desc: "Attain peace, health, and spiritual enlightenment through divine Lord Shiva worship.",
    icon: Star,
  },
  {
    title: "Goddess Lakshmi Puja",
    desc: "Invoke the goddess of wealth and abundance for financial prosperity and business success.",
    icon: Heart,
  },
  {
    title: "International Prayers",
    desc: "Remote prayer services available worldwide. Distance is no barrier to divine blessings.",
    icon: Globe,
  },
  {
    title: "Lord Hanuman",
    desc: "Gain courage, devotion, and protection through powerful Lord Hanuman rituals and prayers.",
    icon: Flame,
  },
  {
    title: "Others",
    desc: "Custom pooja and prayer ceremonies tailored to your specific spiritual needs and intentions.",
    icon: Sparkles,
  },
];

function PoojaPrayerPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Pooja & Prayer Services"
        subtitle="Sacred Hindu rituals and prayers performed with devotion for peace, prosperity, and protection."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sacred Services We <span className="text-gradient-primary">Offer</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each pooja is performed with authentic Vedic traditions by experienced priests to bring divine blessings into your life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {POOJA_SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:-translate-y-2 hover:shadow-elegant hover:border-primary/40 transition-all duration-500"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-cosmos text-cosmos-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-gold">Book Your Pooja Today</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us to schedule your sacred ceremony. We perform poojas both in-person and remotely for devotees across the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 font-semibold transition-colors"
              >
                <Phone className="h-5 w-5 text-gold" /> {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 font-semibold hover:scale-105 transition-transform"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
