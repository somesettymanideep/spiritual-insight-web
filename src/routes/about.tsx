import { createFileRoute } from "@tanstack/react-router";
import { Check, Eye, Heart, ShieldCheck, Sparkles, Star, Target } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
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

      <div className="bg-background font-about-sans text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:py-32">
        <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
          <div className="relative mx-4 md:mx-0">
            <div className="absolute -left-5 -top-5 h-32 w-32 border-l-2 border-t-2 border-primary" />
            <div className="absolute -bottom-10 -right-6 h-52 w-52 rounded-full border border-primary/20" />
            <img src={aboutImg} alt="Sri Durga Matha astrologer holding a glowing zodiac mandala" loading="lazy" className="relative z-10 aspect-[4/5] w-full object-cover shadow-2xl" />
          </div>
          <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">The Beginning · Our Story</span>
            <h2 className="font-about-display text-5xl leading-[1.05] md:text-6xl">A Spiritual Journey of <span className="text-primary">Service & Wisdom</span></h2>
            <p className="text-lg leading-relaxed text-foreground/75">
              Sri Durga Matha Astrology was founded with a sacred mission — to bring ancient astrological wisdom to those navigating modern life's challenges. For over 15 years, we have guided thousands of families across Andhra Pradesh and beyond, offering authentic solutions rooted in Vedic tradition.
            </p>
            <p className="text-lg leading-relaxed text-foreground/75">
              Based in Eluru, our practice combines deep spiritual knowledge with personal compassion. Whether it's a love problem, a career obstacle, or protection from negative energies, every consultation is approached with sincerity, secrecy, and the blessings of Maa Durga.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-foreground px-6 py-24 text-background md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div className="order-2 space-y-6 md:order-1">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">The Future</span>
            <h2 className="font-about-display text-5xl leading-tight md:text-6xl">Our <span className="text-primary">Vision</span></h2>
            <p className="font-about-display text-2xl italic leading-relaxed text-background/80">“To become a trusted source of astrological guidance helping people overcome challenges and achieve happiness.”</p>
            <div className="h-px w-24 bg-primary" />
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative flex h-72 w-72 items-center justify-center md:h-80 md:w-80">
              <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary/50" />
              <div className="absolute inset-8 rounded-full border border-primary/30 shadow-glow" />
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-primary/15">
                <Eye className="h-20 w-20 text-primary" strokeWidth={1} />
              </div>
              <Sparkles className="absolute right-1 top-16 h-6 w-6 text-primary" />
              <Star className="absolute bottom-8 left-7 h-4 w-4 fill-primary text-primary" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-32 px-6 py-24 md:px-12 lg:py-32">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="relative flex aspect-square items-center justify-center bg-primary/5">
            <div className="absolute inset-10 border border-primary/20" />
            <div className="absolute h-2/3 w-2/3 animate-spin-slow rounded-full border border-dashed border-primary/40" />
            <Target className="h-32 w-32 text-primary" strokeWidth={0.7} />
            <h3 className="absolute bottom-7 right-7 font-about-display text-4xl">Our Mission</h3>
          </div>
          <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Our Sacred Purpose</span>
            <h2 className="font-about-display text-5xl leading-tight md:text-6xl">Guided by <span className="text-primary">Authenticity</span></h2>
            <p className="text-xl leading-relaxed text-foreground/75">To provide authentic astrology services and spiritual solutions with honesty and dedication.</p>
          </div>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 space-y-8 md:order-1">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">What Guides Us</span>
            <h2 className="font-about-display text-5xl md:text-6xl">Core <span className="text-primary">Values</span></h2>
            <div className="space-y-7 border-l border-primary/30 pl-7">
              {[
                { icon: ShieldCheck, title: "Integrity", text: "Honest guidance and sincere spiritual solutions in every consultation." },
                { icon: Heart, title: "Compassion", text: "Every person's concern is heard with patience, empathy, and respect." },
                { icon: Eye, title: "Confidentiality", text: "Your spiritual journey and consultation remain completely private." },
              ].map((value) => (
                <div key={value.title} className="group flex gap-4">
                  <value.icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div><h3 className="font-about-display text-2xl transition-colors group-hover:text-primary">{value.title}</h3><p className="mt-1 text-foreground/65">{value.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 flex aspect-square items-center justify-center overflow-hidden bg-foreground md:order-2">
            <div className="relative flex h-3/4 w-3/4 items-center justify-center rounded-full border border-primary/40">
              <div className="absolute inset-8 rotate-45 border border-primary/25" />
              <Heart className="h-28 w-28 text-primary" strokeWidth={0.6} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 text-center md:grid-cols-4">
          {[
            { num: "5000+", label: "Happy Clients" },
            { num: "15+", label: "Years Experience" },
            { num: "98%", label: "Success Rate" },
            { num: "24/7", label: "Support" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-about-display text-5xl md:text-7xl">{s.num}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/75">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:py-32">
          <div className="mb-16 flex flex-col items-end gap-8 md:flex-row">
            <div className="max-w-2xl"><span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Testimonials</span><h2 className="mt-3 font-about-display text-5xl md:text-7xl">Voices of <span className="text-primary">Trust</span></h2><p className="mt-4 text-xl text-foreground/60">Real stories from people who transformed their lives through cosmic guidance.</p></div>
            <div className="mb-8 hidden h-px flex-1 bg-foreground/10 md:block" />
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map(t => (
              <article key={t.name} className="group relative border border-foreground/10 bg-card p-9 transition-all hover:-translate-y-2 hover:border-primary/40 hover:shadow-elegant">
                <div className="absolute -right-3 -top-4 flex h-12 w-12 items-center justify-center bg-primary font-about-display text-4xl text-primary-foreground opacity-20 transition-opacity group-hover:opacity-100">“</div>
                <div className="mb-6 flex gap-1 text-primary">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mb-10 text-lg font-light italic leading-relaxed text-foreground/75">“{t.text}”</p>
                <div className="text-xs font-bold uppercase tracking-[0.15em]">{t.name}</div><div className="mt-1 text-xs uppercase text-foreground/40">{t.role}</div>
              </article>
            ))}
          </div>
      </section>
      </div>

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
