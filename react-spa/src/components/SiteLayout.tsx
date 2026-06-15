import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { StarField } from "./StarField";
import { asset } from "@/lib/utils";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative pt-32 pb-20 bg-cosmos text-cosmos-foreground overflow-hidden">
      <img
        src={image ?? asset("page-banner-bg.jpg")}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos/80 via-cosmos/60 to-cosmos/85" />
      <StarField density={40} />
      <div className="relative container mx-auto px-6 md:px-10 lg:px-16 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
          <span className="text-gradient-gold">{title}</span>
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-white/80 text-lg animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
