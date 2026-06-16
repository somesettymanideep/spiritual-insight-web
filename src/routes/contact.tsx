import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ConsultationForm } from "@/components/ConsultationForm";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero title="Contact Us" subtitle="We're here to help. Reach out for confidential astrology guidance anytime." />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: MapPin, title: "Visit Us", value: SITE.address },
            { icon: Phone, title: "Call Us", value: SITE.phone, href: SITE.phoneHref },
            { icon: Mail, title: "Email Us", value: SITE.email, href: `mailto:${SITE.email}` },
          ].map(it => (
            <div key={it.title} className="rounded-2xl bg-card border border-border p-7 shadow-card hover:-translate-y-1 transition-transform">
              <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                <it.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{it.title}</h3>
              {it.href ? (
                <a href={it.href} className="text-muted-foreground hover:text-primary break-words">{it.value}</a>
              ) : (
                <p className="text-muted-foreground">{it.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
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
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
