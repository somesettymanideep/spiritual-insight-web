import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle, Phone } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { POOJA_SERVICES } from "@/lib/pooja-services";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/pooja-prayer/$slug")({
  head: ({ params }) => {
    const service = POOJA_SERVICES.find((item) => item.slug === params.slug);
    const title = service ? `${service.title} — Pooja & Prayer` : "Pooja Service";
    const description = service?.desc ?? "Authentic Hindu pooja and prayer service.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(service ? [{ property: "og:image", content: service.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const service = POOJA_SERVICES.find((item) => item.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: PoojaNotFound,
  errorComponent: PoojaError,
  component: PoojaServiceDetailPage,
});

function PoojaNotFound() {
  return (
    <SiteLayout>
      <PageHero title="Pooja Service Not Found" subtitle="The service you requested is unavailable." />
      <section className="py-20 text-center">
        <Link to="/pooja-prayer" className="inline-flex items-center gap-2 font-semibold text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to all Pooja services
        </Link>
      </section>
    </SiteLayout>
  );
}

function PoojaError({ reset }: { reset: () => void }) {
  const router = useRouter();
  return (
    <SiteLayout>
      <PageHero title="Something Went Wrong" subtitle="We could not load this Pooja service." />
      <section className="py-20 text-center">
        <Button onClick={() => { void router.invalidate(); reset(); }}>Try Again</Button>
      </section>
    </SiteLayout>
  );
}

function PoojaServiceDetailPage() {
  const { service } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero title={service.title} subtitle={service.desc} image={service.image} />
      <main className="bg-background py-20">
        <div className="container mx-auto grid max-w-6xl items-start gap-12 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={service.image} alt={`${service.title} ceremony`} className="aspect-[4/3] h-full w-full object-cover" />
          </div>
          <article>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Sacred Pooja Service</span>
            <h2 className="mt-3 mb-5 font-display text-3xl font-bold text-foreground md:text-4xl">
              About <span className="text-gradient-primary">{service.title}</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{service.overview}</p>
            <h3 className="mb-4 font-display text-2xl font-semibold">Benefits of This Service</h3>
            <ul className="mb-9 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-gradient-primary p-7 text-primary-foreground shadow-elegant">
              <h3 className="mb-2 font-display text-2xl font-bold">Book this Pooja</h3>
              <p className="mb-5 text-primary-foreground/85">Contact us for scheduling, preparation guidance, and ceremony details.</p>
              <div className="flex flex-wrap gap-3">
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 font-bold text-primary transition-transform hover:scale-105">
                  <Phone className="h-5 w-5" /> {SITE.phone}
                </a>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-bold text-accent-foreground transition-transform hover:scale-105">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </SiteLayout>
  );
}