import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ConsultationForm } from "@/components/ConsultationForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Sri Durga Matha Astrology" },
      { name: "description", content: "Contact Sri Durga Matha Astrology in Eluru, Andhra Pradesh. Call 9000999664 or send us a message." },
      { property: "og:title", content: "Contact Sri Durga Matha Astrology" },
      { property: "og:description", content: "Reach our astrologer in Eluru for confidential spiritual guidance." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero title="Contact Us" subtitle="We're here to help. Reach out for confidential astrology guidance anytime." />

      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 mb-16">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4 uppercase tracking-widest">Connect With Us</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "Visit Us", value: SITE.address },
              { icon: Phone, title: "Call Us", value: SITE.phone, href: SITE.phoneHref },
              { icon: Mail, title: "Email Us", value: SITE.email, href: `mailto:${SITE.email}` },
            ].map(it => (
              <div key={it.title} className="group relative pt-8">
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <it.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="rounded-2xl bg-card/80 border border-border backdrop-blur-md p-8 pt-12 shadow-elegant hover:border-gold/50 hover:bg-card transition-all duration-300 text-center">
                  <h3 className="font-display text-xl font-semibold mb-3 text-primary">{it.title}</h3>
                  {it.href ? (
                    <a href={it.href} className="text-muted-foreground hover:text-primary break-words transition-colors">{it.value}</a>
                  ) : (
                    <p className="text-muted-foreground">{it.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Send a Message</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Let's Begin Your <span className="text-gradient-primary">Spiritual Journey</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form and our astrologer will personally get back to you within 24 hours. Every message is treated with complete confidentiality.
            </p>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-6 py-3 shadow-elegant hover:scale-105 transition-transform">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
          <ConsultationForm />
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="rounded-3xl overflow-hidden shadow-elegant border border-border h-[500px]">
            <iframe
              title="Sri Durga Matha Astrology location"
              src="https://www.google.com/maps?q=Pedavegi,+Eluru,+Andhra+Pradesh+534003&output=embed"
              loading="lazy"
              className="w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
