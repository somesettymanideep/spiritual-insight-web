import { n as SITE, t as SERVICES } from "./site-DHTALTzq.js";
import { t as Route } from "./services._slug-Bh55vYVx.js";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-CBjK6OEi.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Check, MessageCircle, Phone } from "lucide-react";
//#region src/routes/services.$slug.tsx?tsr-split=component
function ServiceDetailPage() {
	const { service } = Route.useLoaderData();
	SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		title: service.title,
		subtitle: service.desc,
		image: service.image
	}), /* @__PURE__ */ jsx("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1fr_320px] gap-10 items-start",
			children: [/* @__PURE__ */ jsxs("article", { children: [
				/* @__PURE__ */ jsx("div", {
					className: "rounded-3xl overflow-hidden shadow-elegant mb-8 aspect-[16/9]",
					children: /* @__PURE__ */ jsx("img", {
						src: service.image,
						alt: service.title,
						className: "w-full h-full object-cover"
					})
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Service Overview"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-3xl md:text-4xl font-bold mt-2 mb-5",
					children: ["About ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient-primary",
						children: service.title
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "text-muted-foreground leading-relaxed mb-4",
					children: [service.desc, " Our experienced astrologer combines time-honored Vedic wisdom with personal compassion to deliver remedies that bring real change to your life."]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground leading-relaxed mb-8",
					children: "Every consultation is private and personalized — we listen carefully to your situation, study your chart, and design a remedy plan that fits your unique journey."
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl font-semibold mb-4",
					children: "What You Get"
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "grid sm:grid-cols-2 gap-3 mb-10",
					children: [
						"One-on-one personal consultation",
						"Customized remedies for your problem",
						"Complete confidentiality assured",
						"Follow-up guidance and support",
						"Authentic Vedic rituals",
						"Fast and effective results"
					].map((f) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-2 p-3 rounded-xl bg-card border border-border",
						children: [/* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", {
							className: "text-sm",
							children: f
						})]
					}, f))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl bg-gradient-primary text-primary-foreground p-7 shadow-elegant",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl font-bold mb-2",
							children: "Ready to begin?"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-white/85 mb-5",
							children: [
								"Speak directly with our astrologer for ",
								service.title.toLowerCase(),
								"."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsxs("a", {
								href: SITE.phoneHref,
								className: "inline-flex items-center gap-2 rounded-full bg-white text-primary font-bold px-6 py-3 hover:scale-105 transition-transform",
								children: [
									/* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }),
									" ",
									SITE.phone
								]
							}), /* @__PURE__ */ jsxs("a", {
								href: SITE.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-bold px-6 py-3 hover:scale-105 transition-transform",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }), " WhatsApp"]
							})]
						})
					]
				})
			] }), /* @__PURE__ */ jsx("aside", {
				className: "space-y-6 lg:sticky lg:top-28 self-start",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl bg-card border border-border p-6 shadow-card",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "font-display text-lg mb-4",
						children: "All Services"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-1.5 text-sm max-h-[70vh] overflow-y-auto pr-1",
						children: SERVICES.map((s) => {
							const active = s.slug === service.slug;
							return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
								to: "/services/$slug",
								params: { slug: s.slug },
								className: "flex items-center gap-2 rounded-lg px-3 py-2 transition-all " + (active ? "bg-gradient-primary text-primary-foreground font-semibold shadow-glow" : "text-foreground/80 hover:text-primary hover:bg-primary/5"),
								children: [/* @__PURE__ */ jsx("span", {
									className: active ? "text-primary-foreground" : "text-primary",
									children: "›"
								}), /* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: s.title
								})]
							}) }, s.slug);
						})
					})]
				})
			})]
		})
	})] });
}
//#endregion
export { ServiceDetailPage as component };
