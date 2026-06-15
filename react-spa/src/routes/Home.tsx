import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Phone, Calendar, Check, Star, ArrowRight, Sparkles, Clock, Users } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { StarField } from "@/components/StarField";
import { ConsultationForm } from "@/components/ConsultationForm";
import { AutoCarousel } from "@/components/AutoCarousel";
import { SITE, SERVICES, TESTIMONIALS } from "@/lib/site";
import { asset, setMeta } from "@/lib/utils";

const HERO_VIDEO = "https://res.cloudinary.com/dzj6s8hha/video/upload/v1781334801/banner-bg_i2dyhl.mp4";

export default function Home() {
  useEffect(() => {
    setMeta(
      "Sri Durga Matha Astrology — Trusted Astrologer in Eluru",
      "Get accurate predictions and effective spiritual remedies for love, marriage, career & black magic removal. Call 9000999664.",
    );
  }, []);

  return (
    <SiteLayout>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Stats />
      <Testimonials />
      <Consultation />
      <CTABanner />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-cosmos text-cosmos-foreground">
      <video src={HERO_VIDEO} autoPlay muted loop playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-cosmos/85 via-cosmos/60 to-transparent" />
      <div className="relative site-container">
        <div className="space-y-6 animate-fade-up max-w-2xl text-left">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Trusted Spiritual Guidance
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            <span className="text-gradient-gold">SRI DURGA MATHA</span><br />
            <span className="text-white">ASTROLOGY</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            Trusted Astrology Solutions for Love, Marriage, Career & Spiritual Guidance
          </p>
          <p className="text-white/75 leading-relaxed">
            Get accurate predictions and effective spiritual remedies from experienced astrology specialists.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#consultation" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground font-semibold px-6 py-3.5 shadow-elegant hover:scale-105 transition-transform">
              <Calendar className="h-5 w-5" /> Book Consultation
            </a>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full glass text-white font-semibold px-6 py-3.5 hover:bg-white/20 transition-colors">
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center animate-glow-pulse">
              <Phone className="h-5 w-5 text-gold-foreground" />
            </div>
            <div>
              <div className="text-xs text-white/70 uppercase tracking-wider">24/7 Available</div>
              <a href={SITE.phoneHref} className="text-xl font-bold text-white hover:text-gold transition-colors">{SITE.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="relative z-10 site-container grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
            <img src={asset("about-astrologer.jpg")} alt="Sri Durga Matha Astrologer" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-right-10 glass-light rounded-2xl p-5 shadow-elegant max-w-[200px]">
            <div className="text-4xl font-display font-bold text-gradient-primary">15+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Years of Spiritual Practice</div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex justify-end mb-[70px]">
            <img src={asset("jupiter.webp")} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none w-20 h-20 select-none z-20 drop-shadow-lg" style={{ transform: `rotate(${scrollY * 0.4}deg)` }} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            About <span className="text-gradient-primary">Sri Durga Matha</span> Astrology
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            With years of experience in astrology and spiritual guidance, Sri Durga Matha Astrology provides trusted solutions for love, marriage, family, career, and spiritual problems. We help individuals find peace, happiness, and success through accurate predictions and effective remedies.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {["Trusted Guidance", "Accurate Predictions", "Spiritual Solutions", "Personalized Consultation"].map((f) => (
              <li key={f} className="flex items-center gap-3 p-3 rounded-xl glass-light">
                <span className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </span>
                <span className="font-medium text-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Discover Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial)" }} />
      <div className="relative site-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What We Offer</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">
            Our <span className="text-gradient-primary">Astrology Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Authentic spiritual solutions for every challenge in life — backed by ancient wisdom and decades of experience.
          </p>
        </div>
        <AutoCarousel
          ariaLabel="services"
          items={SERVICES.map((s) => (
            <article key={s.slug} className="group relative rounded-2xl bg-card shadow-card hover:-translate-y-2 hover:shadow-elegant transition-all duration-300 border border-transparent hover:border-primary/30 overflow-hidden h-full flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos/80 via-cosmos/10 to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                <Link to={`/services/${s.slug}`} className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        />

      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: Sparkles, title: "Confidential Consultations", desc: "Your privacy and trust are our top priority." },
    { icon: Sparkles, title: "Trusted Spiritual Guidance", desc: "Authentic remedies rooted in ancient wisdom." },
    { icon: Clock, title: "Quick Problem Solutions", desc: "Effective results within days of consultation." },
    { icon: Users, title: "24/7 Consultation Support", desc: "Available anytime you need guidance." },
  ];
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">
            The <span className="text-gradient-primary">Trusted Choice</span> for Thousands
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="text-center rounded-2xl p-7 border border-border bg-card hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                <it.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { num: "5000+", label: "Happy Clients" },
    { num: "15+", label: "Years Experience" },
    { num: "98%", label: "Success Rate" },
    { num: "24/7", label: "Support Available" },
  ];
  return (
    <section className="relative py-20 bg-cosmos text-cosmos-foreground overflow-hidden">
      <StarField density={50} />
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial)" }} />
      <div className="relative site-container grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">{s.num}</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">
            Voices of <span className="text-gradient-primary">Transformed Lives</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <AutoCarousel
            ariaLabel="testimonials"
            items={TESTIMONIALS.map((t) => (
              <div key={t.name} className="h-full glass-light rounded-2xl p-7 shadow-card hover:shadow-elegant transition-shadow flex flex-col">
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed mb-5 flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground truncate">{t.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
}

function Consultation() {
  return (
    <section id="consultation" className="py-20 md:py-28 bg-background">
      <div className="site-container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Free Consultation</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 leading-tight">
            Get Free <span className="text-gradient-primary">Astrology Consultation</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Share your problem with us. Our experienced astrologer will provide personalized guidance and effective remedies tailored to your unique situation.
          </p>
          <ul className="mt-6 space-y-3">
            {["100% Confidential discussion", "Personalized remedies for your problem", "Response within 24 hours"].map(t => (
              <li key={t} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" /> <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <ConsultationForm />
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-16 bg-gradient-primary text-primary-foreground text-center">
      <div className="site-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Ready to Transform Your Life?</h2>
        <p className="text-white/85 mb-6">Speak directly with our astrologer today.</p>
        <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white text-primary font-bold px-7 py-3.5 shadow-elegant hover:scale-105 transition-transform">
          <Phone className="h-5 w-5" /> Call {SITE.phone}
        </a>
      </div>
    </section>
  );
}
