import { useEffect } from "react";
import { BadgeCheck, Check, Clock3, Eye, Headphones, Heart, Star, Target, Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { StarField } from "@/components/StarField";
import { TESTIMONIALS, SITE } from "@/lib/site";
import { asset, setMeta } from "@/lib/utils";

export default function About() {
  useEffect(() => {
    setMeta("About Us — Sri Durga Matha Astrology", "Learn about Sri Durga Matha Astrology — 15+ years of experience offering trusted astrology and spiritual solutions.");
  }, []);
  return (
    <SiteLayout>
      <PageHero title="About Sri Durga Matha Astrology" subtitle="A trusted name in spiritual guidance, helping thousands transform their lives through ancient wisdom." />

      <section className="py-20 bg-background">
        <div className="site-container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl" />
            <img src={asset("about-astrologer.jpg")} alt="Astrologer" loading="lazy" className="relative rounded-3xl shadow-elegant w-full aspect-[4/5] object-cover" />
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
        <div className="site-container grid md:grid-cols-3 gap-6">
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

      <section className="relative py-24 bg-cosmos text-cosmos-foreground overflow-hidden">
        <StarField density={50} />
        <div className="relative site-container">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">A legacy of trust</span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Guidance That Makes a Difference</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-7">
            {[
              { icon: Users, num: "5000+", label: "Happy Clients" },
              { icon: Clock3, num: "15+", label: "Years Experience" },
              { icon: BadgeCheck, num: "98%", label: "Success Rate" },
              { icon: Headphones, num: "24/7", label: "Support" },
            ].map(s => (
              <div key={s.label} className="group relative rounded-2xl border border-cosmos-foreground/10 bg-cosmos-foreground/5 px-3 pb-7 pt-10 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 md:px-6 md:pb-9 md:pt-12">
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-cosmos text-gold shadow-glow md:h-14 md:w-14">
                  <s.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.6} />
                </div>
                <div className="font-display text-4xl font-bold text-gradient-gold md:text-5xl lg:text-6xl">{s.num}</div>
                <div className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cosmos-foreground/70 md:text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="site-container">
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
        <div className="site-container">
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
