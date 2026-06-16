import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Phone, Calendar, Check, Star, ArrowRight, Sparkles, Clock, Users } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { StarField } from "@/components/StarField";
import { ConsultationForm } from "@/components/ConsultationForm";
import { SITE, SERVICES, TESTIMONIALS } from "@/lib/site";
import aboutImg from "@/assets/main-astrologer.webp.asset.json";
import jupiterAsset from "@/assets/jupiter.webp.asset.json";
import ctaVideoAsset from "@/assets/cta-video.mp4.asset.json";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HERO_VIDEO = "https://res.cloudinary.com/dzj6s8hha/video/upload/v1781334801/banner-bg_i2dyhl.mp4";

export default function HomePage() {
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
    <section className="relative -mx-6 md:-mx-8 lg:-mx-10 min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-cosmos text-cosmos-foreground">
      <video
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cosmos/85 via-cosmos/60 to-transparent" />
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-6 animate-fade-up max-w-2xl text-left">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Trusted Spiritual Guidance
          </span>
          <h1 className="font-display text-[4.2vw] sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] whitespace-nowrap">
            <span className="text-gradient-gold">SRI DURGA MATHA</span>
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            <span className="text-white">ASTROLOGY</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            Trusted Astrology Solutions for Love, Marriage, Career & Spiritual Guidance
          </p>
          <p className="text-white/75 leading-relaxed">
            Get accurate predictions and effective spiritual remedies from experienced astrology specialists.
            Helping people overcome life's challenges through ancient astrological wisdom.
          </p>
          <div className="flex flex-nowrap gap-2 sm:gap-3 pt-2">
            <a href="#consultation" className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-primary text-primary-foreground font-semibold px-3 py-2.5 sm:px-6 sm:py-3.5 text-sm sm:text-base shadow-elegant hover:scale-105 transition-transform">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5" /> Book Consultation
            </a>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full glass text-white font-semibold px-3 py-2.5 sm:px-6 sm:py-3.5 text-sm sm:text-base hover:bg-white/20 transition-colors">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call Now
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-3 pt-4">
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
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs flex-col items-center gap-1 animate-float">
        <span>Scroll</span>
        <div className="h-8 w-px bg-white/40" />
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
      <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
            <img src={aboutImg.url} alt="Sri Durga Matha Astrologer" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-right-10 glass-light rounded-2xl p-5 shadow-elegant max-w-[200px]">
            <div className="text-4xl font-display font-bold text-gradient-primary">15+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Years of Spiritual Practice</div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex justify-end mb-[70px]">
            <img
              src={jupiterAsset.url}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none w-20 h-20 select-none z-20 drop-shadow-lg"
              style={{ transform: `rotate(${scrollY * 0.4}deg)` }}
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            About <span className="text-gradient-primary">Sri Durga Matha</span> Astrology
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            With years of experience in astrology and spiritual guidance, Sri Durga Matha Astrology
            provides trusted solutions for love, marriage, family, career, and spiritual problems.
            We help individuals find peace, happiness, and success through accurate predictions and
            effective remedies.
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
      <div className="relative container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What We Offer</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">
            Our <span className="text-gradient-primary">Astrology Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Authentic spiritual solutions for every challenge in life — backed by ancient wisdom and decades of experience.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              className="group relative rounded-2xl bg-card shadow-card hover:-translate-y-2 hover:shadow-elegant transition-all duration-300 border border-transparent hover:border-primary/30 overflow-hidden mb-6"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos/80 via-cosmos/10 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConfidentialIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 510 510" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path d="m200.766 85.811h-28.005v-9.676c0-33.622 27.513-61.135 61.135-61.135s61.11 27.513 61.11 61.135h-27.98c0-18.195-14.96-33.156-33.13-33.156s-33.13 14.961-33.13 33.156zm-148.488 409.189c4.949-46.085 43.953-81.978 91.337-81.978 47.408 0 86.412 35.893 91.337 81.978zm91.337-86.978c-25.579 0-46.428-20.874-46.428-46.452 0-25.579 20.849-46.453 46.428-46.453 25.602 0 46.452 20.874 46.452 46.453 0 25.578-20.85 46.452-46.452 46.452zm132.338 86.978c4.949-46.085 43.953-81.978 91.337-81.978 47.408 0 86.412 35.893 91.337 81.978zm91.337-86.978c-25.578 0-46.428-20.874-46.428-46.452 0-25.579 20.85-46.453 46.428-46.453 25.603 0 46.452 20.874 46.452 46.453 0 25.578-20.849 46.452-46.452 46.452zm-31.411-257.248v-37.808c0-7.037-2.701-13.474-7.128-18.312 1.662-.082 3.334-.123 5.015-.123 55.163 0 99.884 44.72 99.884 99.883 0 22.441-7.394 43.131-19.88 59.8l13.783 51.466-61.908-16.572c-10.021 3.34-20.723 5.189-31.879 5.189-30.498 0-57.805-13.67-76.126-35.218h51.083c13.21 0 24.219-9.435 26.654-21.933h44.796c4.416 0 8-3.585 8-8s-3.584-8-8-8h-44.294v-19.186h44.294c4.416 0 8-3.585 8-8 0-4.416-3.584-8-8-8h-44.294v-19.186h44.294c4.416 0 8-3.585 8-8 0-4.416-3.584-8-8-8zm-203.799 84.395c1.61 13.458 13.102 23.91 26.989 23.91h94.59c-3.946 6.052-10.783 10.061-18.526 10.061h-99.783l-43.208 44.979v-44.979h-18.68c-12.164 0-22.089-9.891-22.089-22.055v-110.643c0-12.164 9.925-22.089 22.089-22.089h58.426v34.74h-37.474c-4.415 0-8 3.585-8 8 0 4.416 3.585 8 8 8h37.474v19.055h-37.474c-4.415 0-8 3.584-8 8 0 4.415 3.585 8 8 8h37.474v19.021h-37.474c-4.415 0-8 3.584-8 8 0 4.415 3.585 8 8 8zm26.989-133.358h149.654c6.161 0 11.156 5.021 11.156 11.155v118.958c0 6.16-4.995 11.155-11.156 11.155h-149.654c-6.16 0-11.181-4.995-11.181-11.155v-118.958c0-6.134 5.021-11.155 11.181-11.155zm74.827 28.186c-12.009 0-21.767 9.758-21.767 21.768 0 7.842 4.141 14.701 10.353 18.532v33.182c0 6.289 5.125 11.414 11.414 11.414 6.264 0 11.415-5.125 11.415-11.414v-33.182c6.211-3.831 10.327-10.69 10.327-18.532 0-12.01-9.732-21.768-21.742-21.768z" fill="currentColor"/>
      </g>
    </svg>
  );
}

function WhyChoose() {
  const items = [
    { icon: ConfidentialIcon, title: "Confidential Consultations", desc: "Your privacy and trust are our top priority." },
    { icon: Sparkles, title: "Trusted Spiritual Guidance", desc: "Authentic remedies rooted in ancient wisdom." },
    { icon: Clock, title: "Quick Problem Solutions", desc: "Effective results within days of consultation." },
    { icon: Users, title: "24/7 Consultation Support", desc: "Available anytime you need guidance." },
  ];
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
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
    <section className="relative -mx-6 md:-mx-8 lg:-mx-10 py-20 bg-cosmos text-cosmos-foreground overflow-hidden">
      <StarField density={50} />
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial)" }} />
      <div className="relative container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
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
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">
            Voices of <span className="text-gradient-primary">Transformed Lives</span>
          </h2>
        </div>
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {TESTIMONIALS.map((t) => (
              <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full glass-light rounded-2xl p-7 shadow-card hover:shadow-elegant transition-shadow">
                  <div className="flex gap-1 text-gold mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic leading-relaxed mb-5">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}

function Consultation() {
  return (
    <section id="consultation" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Free Consultation</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 leading-tight">
            Get Free <span className="text-gradient-primary">Astrology Consultation</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Share your problem with us. Our experienced astrologer will provide personalized guidance
            and effective remedies tailored to your unique situation.
          </p>
          <ul className="mt-6 space-y-3">
            {["100% Confidential discussion", "Personalized remedies for your problem", "Response within 24 hours"].map(t => (
              <li key={t} className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> <span>{t}</span></li>
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
    <section className="relative -mx-6 md:-mx-8 lg:-mx-10 py-20 bg-primary text-primary-foreground overflow-hidden">
      <video
        src={ctaVideoAsset.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-primary/70" />
      <StarField density={40} />
      <div className="relative container mx-auto px-6 md:px-8 lg:px-10 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Need Immediate Astrology Guidance?</h2>
        <p className="text-white/85 text-lg mb-8">Talk directly with our astrology expert today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white text-primary font-bold px-7 py-3.5 shadow-elegant hover:scale-105 transition-transform">
            <Phone className="h-5 w-5" /> Call Now
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-bold px-7 py-3.5 shadow-elegant hover:scale-105 transition-transform">
            WhatsApp Now
          </a>
        </div>
        <div className="mt-6 text-2xl font-bold tracking-wide">{SITE.phone}</div>
      </div>
    </section>
  );
}
