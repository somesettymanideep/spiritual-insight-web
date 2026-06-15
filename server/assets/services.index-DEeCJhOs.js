import { n as SITE, t as SERVICES } from "./site-DHTALTzq.js";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-CbAAsNZe.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
//#region src/routes/services.index.tsx?tsr-split=component
function ServicesPage() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		title: "Our Astrology Services",
		subtitle: "Authentic, time-tested spiritual remedies for every aspect of your life."
	}), /* @__PURE__ */ jsx("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1fr_320px] gap-10",
			children: [/* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 xl:grid-cols-3 gap-6",
				children: SERVICES.map((s, i) => /* @__PURE__ */ jsxs("article", {
					className: "group relative overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:-translate-y-2 hover:shadow-elegant hover:border-primary/40 transition-all duration-500 mb-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative h-44 overflow-hidden",
						children: [/* @__PURE__ */ jsx("img", {
							src: s.image,
							alt: s.title,
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}), /* @__PURE__ */ jsx("span", {
							className: "absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground bg-primary/90 backdrop-blur px-2.5 py-1 rounded-full",
							children: String(i + 1).padStart(2, "0")
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-6",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display text-lg font-semibold mb-4 group-hover:text-primary transition-colors",
							children: s.title
						}), /* @__PURE__ */ jsx("div", {
							className: "flex items-center justify-start pt-4 border-t border-border/60",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/services/$slug",
								params: { slug: s.slug },
								className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all",
								children: ["Read More ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})
						})]
					})]
				}, s.slug))
			}), /* @__PURE__ */ jsxs("aside", {
				className: "space-y-6 lg:sticky lg:top-28 self-start",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl bg-gradient-cosmos text-cosmos-foreground p-6 shadow-elegant",
					children: [
						/* @__PURE__ */ jsx("h4", {
							className: "font-display text-xl mb-2 text-gradient-gold",
							children: "Quick Contact"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-white/70 mb-4",
							children: "Speak directly with our astrologer."
						}),
						/* @__PURE__ */ jsxs("a", {
							href: SITE.phoneHref,
							className: "flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-3 mb-2",
							children: [
								/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-gold" }),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold",
									children: SITE.phone
								})
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: SITE.whatsapp,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 font-semibold",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }), " WhatsApp Us"]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl bg-card border border-border p-6 shadow-card",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "font-display text-lg mb-3",
						children: "Popular Services"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2 text-sm",
						children: SERVICES.slice(0, 8).map((s) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-2 text-foreground/80 hover:text-primary cursor-default",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-primary",
									children: "›"
								}),
								" ",
								s.title
							]
						}, s.slug))
					})]
				})]
			})]
		})
	})] });
}
//#endregion
export { ServicesPage as component };
