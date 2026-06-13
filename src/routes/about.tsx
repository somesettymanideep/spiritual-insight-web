import { createFileRoute } from "@tanstack/react-router";
import { Check, Star, Target, Eye, Heart } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { StarField } from "@/components/StarField";
import { TESTIMONIALS, SITE } from "@/lib/site";
import aboutImg from "@/assets/about-astrologer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sri Durga Matha Astrology" },
      { name: "description", content: "Learn about Sri Durga Matha Astrology — 15+ years of experience offering trusted astrology and spiritual solutions." },
      { property: "og:title", content: "About Sri Durga Matha Astrology" },
      { property: "og:description", content: "Trusted astrology and spiritual guidance with 15+ years of experience." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero title="About Sri Durga Matha Astrology" subtitle="A trusted name in spiritual guidance, helping thousands transform their lives through ancient wisdom." />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl" />
            <img src={aboutImg} alt="Astrologer" loading="lazy" className="relative rounded-3xl shadow-elegant w-full aspect-[4/5] object-cover" />
          </div>
          <div className="space-y-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Story</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">A Spiritual Journey of <span className="text-gradient-primary">Service & Wisdom</span></h2>
            <p className="text-muted-foreground leading-relaxed">
              Sri Durga Matha Astrology was founded with a sacred mission — to bring ancient astrological wisdom to those navigating modern life's challenges. For over 15 years, we have guided thousands of families across Andhra Pradesh and beyond, offering authentic solutions rooted in Vedic tradition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Eluru, our practice combines deep spiritual knowledge with personal compassion. Whether it's a love problem, a career obstacle, or protection from negative energies, every consultation is approached with sincerity, secrecy, and the blessings of Maa Durga.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Our Vision", text: "To become a trusted source of astrological guidance helping people overcome challenges and achieve happiness." },
            { icon: Target, title: "Our Mission", text: "To provide authentic astrology services and spiritual solutions with honesty and dedication." },
            { icon: Heart, title: "Our Values", text: "Integrity, compassion, and confidentiality in every consultation we provide to our clients." },
          ].map(it => (
            <div key={it.title} className="rounded-2xl bg-card p-8 shadow-card hover:-translate-y-1 transition-transform">
              <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                <it.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{it.title}</h3>
              <p className="text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20 bg-cosmos text-cosmos-foreground overflow-hidden">
        <StarField density={50} />
        <div className="relative container mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "5000+", label: "Happy Clients" },
            { num: "15+", label: "Years Experience" },
            { num: "98%", label: "Success Rate" },
            { num: "24/7", label: "Support" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">{s.num}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-12">
            What <span className="text-gradient-primary">Clients Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map(t => (
              <div key={t.name} className="rounded-2xl p-7 bg-card shadow-card">
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="italic text-foreground/80 mb-4">"{t.text}"</p>
                <div className="font-semibold">{t.name} <span className="text-muted-foreground font-normal text-sm">· {t.role}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Ready to Transform Your Life?</h2>
          <p className="text-white/85 mb-6">Speak directly with our astrologer today.</p>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white text-primary font-bold px-7 py-3.5 shadow-elegant hover:scale-105 transition-transform">
            <Check className="h-5 w-5" /> Call {SITE.phone}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
